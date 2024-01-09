import React, {useEffect, useRef, useState} from 'react';
import {socket, sendMessage, joinRoom, leaveRoom} from '../javascript/chat';
import {Button, Modal} from 'react-bootstrap';
import axios from "axios";

/**
 * Chat page
 * @state roomId - Room identifier
 * @state roomName - Display name for the room
 * @state username - User input
 * @state inRoom - boolean, allows to render login form or chatroom
 * @ref usernameRef - Keeps username reference when component unmounts, allows to leave chat when closing page
 * @ref roomRef - Keeps room reference when component unmounts, allows to leave chat when closing page
 */
function Chat() {
    const [roomId, setRoomId] = useState(null);
    const [roomName, setRoomName] = useState(null);
    const [username, setUsername] = useState(null);
    const [inRoom, setInRoom] = useState(false);
    const usernameRef = useRef();
    const roomRef = useRef();

    function handleClose(event){
        if (usernameRef.current) {
            leaveRoom(usernameRef.current, roomRef.current);
        }
    }

    useEffect(() => {
        window.addEventListener('beforeunload', handleClose);

        return function unmount() {
            if (usernameRef.current) {
                leaveRoom(usernameRef.current, roomRef.current);
            }
            window.removeEventListener('beforeunload', handleClose);
        };
    }, []);

    useEffect(() => {
        if (username && roomId) {
            usernameRef.current = username;
            roomRef.current = roomId;
            joinRoom(username, roomId);
        }
    }, [username, roomId]);

    return (
        <div className="container d-flex align-items-center justify-content-center m-auto">
            {
                !inRoom
                    ? <LoginForm setUsername={setUsername} setRoomName={setRoomName} setRoomId={setRoomId}
                                 setInRoom={setInRoom} roomId={roomId} username={username} roomName={roomName}/>
                    : <ChatRoom username={username} roomId={roomId} roomName={roomName} setInRoom={setInRoom}/>
            }
        </div>
    )
}

/**
 * LoginForm component
 * @param setUsername - Function, called when user submits form
 * @param setRoomId - Function, needs to be passed to suggestion components below
 * @param setRoomName - Function, needs to be passed to suggestion components below
 * @param setInRoom - Function, called on socket login response
 * @param roomId - Allows to check if was set from below components
 * @param username - Used to show previous username if exists
 * @param roomName - Used to show previous room if exists
 * @state searchTerm - Passed to below components to fetch suggestions
 * @state usernameInput - Allows to check input before setting the username
 * @state showSuggestions - Allows control over suggestion list display
 */
function LoginForm({setUsername, setRoomId, setRoomName, setInRoom, roomId, username, roomName}) {
    const [usernameInput, setUsernameInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        setUsernameInput(username ? username : '');
        setSearchTerm(roomName ? roomName : '')
        setShowSuggestions(!roomName)
        setUsername(null);

        socket.on('accept', () => {
            setInRoom(true);
        })

        socket.on('refuse', ()=> {
            setInRoom(false);
            setShowError(true);
            setUsername('');
        })

        return function unmount(){
            socket.off('accept');
            socket.off('refuse');
        }
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        if (usernameInput.trim() !== '' && roomId) {
            setUsername(usernameInput);
        }
    }

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
        if(event.target.value !== ""){
            setShowSuggestions(true);
        }
    }

    function handleClose() {
        setShowError(false);
    }

    return (
        <>
            <div className="rounded-1 p-3 box-shadow d-lg-flex align-items-center justify-content-center">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            id="inputUsername"
                            className="form-control"
                            type="text"
                            placeholder="Enter username"
                            value={usernameInput}
                            onChange={(e) => setUsernameInput(e.target.value)}
                        />
                    </div>
                    <div className="search mb-3">
                        <input className="form-control" type="search" placeholder="Search room..."
                               aria-label="Search leagues, clubs or players"
                               aria-placeholder="Search leagues, clubs or players"
                               value={searchTerm}
                               onChange={handleSearchChange}/>
                        {
                            showSuggestions
                                ?
                                (
                                    <div id="navbar-suggestion-list" className="box-shadow ">
                                        <LeaguesSuggestionList searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                                                               setRoomId={setRoomId} setRoomName={setRoomName}
                                                               setShowSuggestions={setShowSuggestions}/>
                                        <ClubsSuggestionList searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                                                             setRoomId={setRoomId} setRoomName={setRoomName}
                                                             setShowSuggestions={setShowSuggestions}/>
                                        <PlayersSuggestionList searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                                                               setRoomId={setRoomId} setRoomName={setRoomName}
                                                               setShowSuggestions={setShowSuggestions}/>
                                    </div>
                                )
                                :
                                null
                        }

                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>

                <Modal show={showError} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Username already in use!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

/**
 * ChatRoom component
 * @param username - Display username
 * @param roomId
 * @param roomName - Display room name
 * @param setInRoom - Allows to change gui on logout
 * @state messages - List of messages in the chat
 * @state messageInput - Allows to check message before submitting
 */
function ChatRoom({username, roomId, roomName, setInRoom}) {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        socket.on('chat message', (msg, name, roomId) => {
            const newMessage = (
                name === username
                    ?
                    (
                        <p className="ms-auto d-inline chat-message p-2 rounded-2">
                            {msg}
                        </p>
                    )
                    :
                    (
                        <p className="me-auto d-inline chat-message p-2 rounded-2">
                            <b>{name}</b> {msg}
                        </p>
                    )

            );
            setMessages((prevMessages) => [newMessage,...prevMessages]);
        });

        socket.on('create or join conversation', (name, roomId) => {
            const joinMessage = (
                <p className="mx-auto d-inline chat-alert p-2 rounded-2">
                    <b>{name}{name === username ? " (You)" : null}</b> has joined the conversation
                </p>
            );
            setMessages((prevMessages) => [joinMessage, ...prevMessages, ]);
        });

        socket.on('leave conversation', (name, roomId) => {
            const joinMessage = (
                <p className="mx-auto d-inline chat-alert p-2 rounded-2">
                    <b>{name}</b> has left the conversation
                </p>
            );
            setMessages((prevMessages) => [joinMessage,...prevMessages,]);
        });

        return function unmount() {
            if (username) {
                setMessages([])
                socket.off('chat message');
                socket.off('create or join conversation');
            }
        };
    }, [username]);

    function handleSubmit(e) {
        e.preventDefault();
        if (messageInput.trim() !== '') {
            sendMessage(messageInput, username, roomId);
            setMessageInput("")
        }
    }

    function exit() {
        setInRoom(false);
        leaveRoom(username, roomId);
    }

    return (
        <>
            <div className="rounded-1 p-3 box-shadow d-flex flex-column w-100">
                <div className="d-flex justify-content-between">
                    <h1>{roomName}</h1>
                    <i className="fa-solid fa-right-from-bracket leave-button rounded-1" onClick={exit}></i>
                </div>
                <div className="d-flex flex-column-reverse mb-3 message-box px-3">
                    {messages.map((message, i) => (
                        <div key={i} className="w-100 d-flex my-1">{message}</div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-between">
                    <input
                        className="form-control me-3"
                        type="text"
                        placeholder="Message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">
                        Send
                    </button>
                </form>
            </div>
        </>
    );
}

/**
 * PlayerSuggestionList component
 * @param searchTerm - Received from upper component, used to fetch result
 * @param setSearchTerm - On suggestion click, set upper component input with suggestion name
 * @param setRoomId - On suggestion click, set upper component state value with suggestion id
 * @param setRoomName - On suggestion click, set upper component state value with suggestion name
 * @param setShowSuggestions - On suggestion click, hide other suggestions
 */
function PlayersSuggestionList({searchTerm, setSearchTerm, setRoomId, setRoomName, setShowSuggestions}) {
    const [suggestions, setSuggestions] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (searchTerm.trim() !== "") {
            axios.get(`/sql/players/suggestions/` + searchTerm)
                .then((response) => {
                    setSuggestions(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching player suggestions:", error);
                    setLoading(false);
                });
        } else {
            setSuggestions([]);
            setLoading(true);
        }
    }, [searchTerm]);

    return (
        <>
            {(loading)
                ?
                null
                :
                (
                    <>
                        <p className="divider">Players</p>
                        {
                            suggestions.length <= 0
                                ?
                                <p>No Results</p>
                                :
                                suggestions.map((suggestion, i) => (
                                    <p key={i} onClick={() => {
                                        setRoomId(suggestion.id);
                                        setRoomName(suggestion.playerName);
                                        setSearchTerm(suggestion.playerName);
                                        setShowSuggestions(false);
                                    }}>{suggestion.playerName}</p>
                                ))
                        }
                    </>
                )}
        </>
    );
}

/**
 * ClubSuggestionList component
 * @param searchTerm - Received from upper component, used to fetch result
 * @param setSearchTerm - On suggestion click, set upper component input with suggestion name
 * @param setRoomId - On suggestion click, set upper component state value with suggestion id
 * @param setRoomName - On suggestion click, set upper component state value with suggestion name
 * @param setShowSuggestions - On suggestion click, hide other suggestions
 */
function ClubsSuggestionList({searchTerm, setSearchTerm, setRoomId, setRoomName, setShowSuggestions}) {
    const [suggestions, setSuggestions] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (searchTerm.trim() !== "") {
            axios.get(`/sql/clubs/suggestions/` + searchTerm)
                .then((response) => {
                    setSuggestions(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching clubs suggestions:", error);
                    setLoading(false);
                });
        } else {
            setSuggestions([]);
            setLoading(true);
        }
    }, [searchTerm]);

    return (
        <>
            {(loading) ?
                null : (
                    <>
                        <p className="divider">Clubs</p>
                        {
                            suggestions.length <= 0
                                ?
                                <p>No Results</p>
                                :
                                suggestions.map((suggestion, i) => (
                                    <p key={i} onClick={(e) => {
                                        setRoomId(suggestion.id);
                                        setRoomName(suggestion.name);
                                        setSearchTerm(suggestion.name);
                                        setShowSuggestions(false);
                                    }}>{suggestion.name}</p>
                                ))
                        }
                    </>
                )}
        </>
    );
}

/**
 * LeaguesSuggestionList component
 * @param searchTerm - Received from upper component, used to fetch result
 * @param setSearchTerm - On suggestion click, set upper component input with suggestion name
 * @param setRoomId - On suggestion click, set upper component state value with suggestion id
 * @param setRoomName - On suggestion click, set upper component state value with suggestion name
 * @param setShowSuggestions - On suggestion click, hide other suggestions
 */
function LeaguesSuggestionList({searchTerm, setSearchTerm, setRoomId, setRoomName, setShowSuggestions}) {
    const [suggestions, setSuggestions] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (searchTerm.trim() !== "") {
            axios.get(`/sql/competitions/suggestions/` + searchTerm)
                .then((response) => {
                    setSuggestions(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching competitions suggestions:", error);
                    setLoading(false);
                });
        } else {
            setSuggestions([]);
            setLoading(true);
        }
    }, [searchTerm]);

    return (
        <>
            {(loading) ?
                null :
                (
                    <>
                        <p className="divider">Competitions</p>
                        {
                            suggestions.length <= 0
                                ?
                                <p>No Results</p>
                                :
                                suggestions.map((suggestion, i) => (
                                    <p key={i} onClick={(e) => {
                                        setRoomId(suggestion.competitionId);
                                        setRoomName(suggestion.name);
                                        setSearchTerm(suggestion.name);
                                        setShowSuggestions(false);
                                    }}>{suggestion.name}</p>
                                ))
                        }
                    </>
                )}
        </>
    );
}

export default Chat;