import './formInput.css';
import {useState} from "react";

export default function FormInput(props){

    const [focused, setFocused] = useState(false);
    const {label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e)=>{
        setFocused(true);
    }

    // console.log(errorMessage);
    return(




        <div className="form-input">

            <label className="label-form">{label}</label>
            <input className='input-form'  {...inputProps}
                    onChange={onChange}
                    onBlur={handleFocus}
                    onFocus={()=> inputProps.name==="confirmPassword" && setFocused(true)}
                    focused={focused.toString()}/>
            <span className="span-form">{errorMessage}</span>
        </div>
    )
}
