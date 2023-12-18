import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import Loading from "./Loading";

function PlayerCard({game}){

    return (
        <>
            {
                game != null
                ? <p>"Show game performance"</p>
                : null
            }
        </>
    );
}