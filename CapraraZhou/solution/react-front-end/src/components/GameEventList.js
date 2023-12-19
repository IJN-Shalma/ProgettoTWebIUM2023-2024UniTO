import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./Loading";

function GameEventList({gameId}) {

    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(gameId);
        axios.get('/mongo/game_events/game/' + gameId)
            .then((response) => {
                const promises = response.data.map((event) =>
                    axios.get('/sql/players/' + event.player_id)
                        .then((player) => {
                            if (player.data && player.data.length > 0) {
                                return { ...event, playerName: player.data[0].playerName };
                            } else {
                                console.log('Player data is empty or undefined for player_id:', event.player_id);
                                // Handle the error case as needed
                                return { ...event, playerName: 'Unknown Player' };
                            }
                        })
                        .then((eventInPlayerName) => {
                            if (eventInPlayerName.player_in_id) {
                                return axios.get('/sql/players/' + eventInPlayerName.player_in_id)
                                    .then((playerInName) => {
                                        if (playerInName.data && playerInName.data.length > 0) {
                                            return { ...eventInPlayerName, playerInName: playerInName.data[0].playerName };
                                        } else {
                                            console.log('Player data is empty or undefined for player_in_id:', eventInPlayerName.player_in_id);
                                            // Handle the error case as needed
                                            return { ...eventInPlayerName, playerInName: 'Unknown' };
                                        }
                                    });
                            }
                            return eventInPlayerName;
                        })
                        .then((eventAssistPlayerName) => {
                            if(eventAssistPlayerName.player_assist_id) {
                                return axios.get('/sql/players/' + eventAssistPlayerName.player_assist_id)
                                    .then((playerAssistName) =>{
                                        if (playerAssistName.data && playerAssistName.data.length > 0) {
                                            return { ...eventAssistPlayerName, playerAssistName: playerAssistName.data[0].playerName };
                                        } else {
                                            console.log('Player data is empty or undefined for player_in_id:', eventAssistPlayerName.player_assist_id);
                                            return { ...eventAssistPlayerName, playerAssistName: 'Unknown' };
                                        }
                                    })
                            }
                            return eventAssistPlayerName;
                        })
                );
                return Promise.all(promises);
            })
            .then((eventsWithPlayerNames) => {
                setEvents(eventsWithPlayerNames);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        loading ?
            (
                <Loading/>
            )
            :
            (
                events.map((event) => (
                    <p><b>{event.minute}'</b>: {
                        (event.type == "Goals" && <>⚽ {event.playerName} scores with {event.playerAssistName} assist</>) ||
                        (event.type == "Substitutions" && <>↔️ {event.playerName} subsituted for {event.playerInName}</>) ||
                        (event.type == "Cards" && <>{event.description.includes("Yellow") ? <>🟨</> : <>🟥</>}  {event.playerName} {event.description}</>)
                    }</p>))
            )
    )
}

export default GameEventList;