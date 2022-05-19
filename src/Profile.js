import React from 'react';
import { useNavigate, useParams } from "react-router-dom";



export default function Profile() {

let navigate = useNavigate();
let { username } = useParams();

    return(
        <div>

            THIS IS THE PROFILE PAGE FOR {username}!
            &nbsp;
            <button onClick={() => {navigate("/about")}}>Change to about</button>

        </div>
    );
}
