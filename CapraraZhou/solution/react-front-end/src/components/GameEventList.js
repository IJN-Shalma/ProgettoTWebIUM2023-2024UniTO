import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./Loading";

/**
 * GameEventList component
 * Rendered by Game.js page
 * @param game - Fetch events of game using id
 */
function GameEventList({game}) {

    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);

    // For each event, find all fields containing player ids, join the ids and request the full player records
    function translateEventIds(event, fieldNames){
        const ids = "" + event[fieldNames[0]] + (event[fieldNames[1]] ? ("," + event[fieldNames[1]]) : "") + (event[fieldNames[2]] ? ("," + event[fieldNames[2]]) : "");
        return axios.get('/sql/players/' + ids)
            .then((response) => {
                const playerRecords = response.data;
                return {
                    ...event,
                    playerName: findPlayerName(event.player_id, playerRecords),
                    playerInName: (event.player_in_id ? findPlayerName(event.player_in_id, playerRecords) : undefined),
                    playerAssistName: event.player_assist_id ? findPlayerName(event.player_assist_id, playerRecords) : undefined
                };
            })
            .catch((e) => {
                return event;
            });
    }

    // Support function, translate player id to name if found
    function findPlayerName(playerId, playerRecords) {
        const matchingRecord = playerRecords.find(record => record.id === playerId);
        return matchingRecord ? matchingRecord.playerName : 'Unknown';
    }

    // Fetch all games events, for each event, call translateEventIds passing the event
    useEffect(() => {
        axios.get('/mongo/game_events/game/' + game.game_id)
            .then((response) => {
                return response.data.reduce((promiseChain, event) => {
                    return promiseChain.then((processedEvents) => {
                        return translateEventIds(event, ['player_id', 'player_in_id', 'player_assist_id'])
                            .then((event) => {
                                return [...processedEvents, event]
                            })
                    })
                }, Promise.resolve([]))
            })
            .then(processedEvents => {
                setEvents(processedEvents);
                setLoading(false);
            })
    }, []);

    return (
        loading ?
            (
            <Loading />
            )
            :
            (
                events.map((event) => (
                    event.minute == "-1"
                        ?
                            null
                        :
                        (
                            event.club_id == game.home_club_id
                            ?
                                (
                                    <p key={event.id}>
                                        <b>{event.minute}'</b>
                                        {
                                            (event.type === "Goals" && <>⚽: <b>{event.playerName}</b> scores with <b>{event.playerAssistName}</b> assist</>) ||
                                            (event.type === "Substitutions" && <>↔️: <b>{event.playerName}</b> substituted for <b>{event.playerInName}</b></>) ||
                                            (event.type === "Cards" && <>{event.description.includes("Yellow") ? <>🟨</> : <>🟥</>} <b>{event.playerName}</b> {event.description}</>)
                                        }
                                    </p>
                                )
                                :
                                (
                                    <p key={event.id} className="text-end">

                                        {
                                            (event.type === "Goals" && <><b>{event.playerName}</b> scores with <b>{event.playerAssistName}</b> assist :⚽</>) ||
                                            (event.type === "Substitutions" && <><b>{event.playerName}</b> substituted for <b>{event.playerInName}</b> :↔️</>) ||
                                            (event.type === "Cards" && <><b>{event.playerName}</b> {event.description} :{event.description.includes("Yellow") ? <>🟨</> : <>🟥</>}</>)
                                        }
                                        '<b>{event.minute}</b>
                                    </p>
                                )
                        )
                ))
            )
    );
}

export default GameEventList;