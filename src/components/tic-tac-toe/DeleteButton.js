import './resetbutton.css';

export default function DeleteButton({resetBoard}){



    return(
            <button className="reset-btn" onClick={resetBoard}>Reset</button>

    )
}
