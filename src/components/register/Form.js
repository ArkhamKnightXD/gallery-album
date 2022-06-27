import FormInput from "./FormInput";
import React, {useRef, useState} from "react";
import './form.css';
import '../../spinner.css';
import BarLoader from "react-spinners/BarLoader";
import useLoading from "../useLoading";
export default function Form(){


    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    })


    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-6 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3-16}$",
            required: true
        },

        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true
        },

        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
            required: true
        },

        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[A-Za-z)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8, 20}$`,
            required: true
        },

        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true
        }
    ]

    const handleSubmit = (e)=> {

        e.preventDefault();
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    console.log(values)




/*spinner*/
    const loading = useLoading(1000);




    return(

        <div className="form-app">

            {
                loading ?
                    <BarLoader className="spin-app" color={'#0B3C8D'} loading={loading} size={40}/>
                    :


                    <form onSubmit={handleSubmit}>
                        <h1 className="h1-form">Register</h1>
                        {inputs.map((input) => (
                            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                        ))}
                        <button className="btn-form">Submit</button>
                    </form>

            }

        </div>

    );
}
