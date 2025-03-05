import { useState } from "react";
import Input from "./Input";

export default function StateLogin() {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    });

    function handleEnteredValues(id, event) {
        setEnteredValues(prevValue => ({ ...prevValue, [id]: event.target.value }));
        setDidEdit(prevValue => (
            {
                ...prevValue,
                [id]: false,
            }
        ));
    }

    function handleInputBlur(id) {
        setDidEdit(prevValue => (
            {
                ...prevValue,
                [id]: true,
            }
        ));
    }

    const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
    const passwordIsInvalid = didEdit.email && !enteredValues.email.includes('@');

    function handleSubmit(event) {
        event.preventDefault();

        console.log(enteredValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    lable='Email'
                    id='email'
                    type='email'
                    name='email'
                    onChange={(event) => handleEnteredValues('email', event)}
                    onBlur={() => handleInputBlur('email')}
                    value={enteredValues.email}
                />
                <Input
                    lable='Password'
                    id='password'
                    type='password'
                    name='password'
                    onChange={(event) => handleEnteredValues('password', event)}
                    onBlur={() => handleInputBlur('password')}
                    value={enteredValues.password}
                />
            </div>
            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
