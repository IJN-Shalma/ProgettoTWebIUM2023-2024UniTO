import React, {useEffect, useState} from 'react';
import {socket, sendMessage, joinRoom, leaveRoom} from '../javascript/chat';
import axios from "axios";

function Chat() {
    const [roomId, setRoomId] = useState(null);
    const [roomName, setRoomName] = useState(null);
    const [username, setUsername] = useState(null);
    const [inRoom, setInRoom] = useState(false);

    useEffect(() => {
        if (username && roomId) {
            joinRoom(username, roomId);
        }

        return function unmount() {
            if (username) {
                leaveRoom(username, roomId);
            }
        };
    }, [username, roomId]);

    return (
        <div className="container d-flex align-items-center justify-content-center m-auto">
            {
                !inRoom
                ? <LoginForm setUsername={setUsername} setRoomName={setRoomName} setRoomId={setRoomId} setInRoom={setInRoom} roomId={roomId}/>
                : <ChatRoom username={username} roomId={roomId} roomName={roomName} setInRoom={setInRoom}/>
            }
        </div>
    );
}

function LoginForm({setUsername, setRoomId, setRoomName, setInRoom, roomId}) {
    const [usernameInput, setUsernameInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        if (usernameInput.trim() !== '' && roomId) {
            setInRoom(true);
            setUsername(usernameInput);
        }
    }

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
        setShowSuggestions(true);
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
            </div>
        </>
    );
}

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
                            <b>{name}</b>{msg}
                        </p>
                    )

            );
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        socket.on('create or join conversation', (name, roomId) => {
            const joinMessage = (
                <p className="mx-auto d-inline chat-alert p-2 rounded-2">
                    <b>{name}{name === username ? " (You)" : null}</b> has joined the conversation
                </p>
            );
            setMessages((prevMessages) => [...prevMessages, joinMessage]);
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

    function exit(e){
        setInRoom(false);
    }

    return (
        <>
            <div className="rounded-1 p-3 box-shadow d-flex flex-column w-100">
                <div className="d-flex justify-content-between">
                    <h1>{roomName}</h1>
                    <i className="fa-solid fa-right-from-bracket leave-button rounded-1" onClick={exit}></i>
                </div>
                <div className="d-flex flex-column mb-3 message-box px-3">
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
                                    <p onClick={(e) => {
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
                                    <p onClick={(e) => {
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
                                    <p onClick={(e) => {
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