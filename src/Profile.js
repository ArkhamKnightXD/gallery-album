import {useNavigate} from "react-router-dom";


export default function Profile() {

let navigate = useNavigate();
    return(
        <>
            THIS IS THE PROFILE PAGE <button onClick={() => {navigate("/about")}}>Change to about</button>
        </>
    );
}
