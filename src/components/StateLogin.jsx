import { useState } from "react";
import { isEmail, isNotEmpty, hasMinLength, isEqualsToOtherValue } from '../util/validation';
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

    const emailIsInvalid = didEdit.email && isEmail(enteredValues.email) && isNotEmpty(enteredValues.email);
    const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6) && isNotEmpty(enteredValues.password);

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
                    error={emailIsInvalid && 'Please enter a valid email'}
                />
                <Input
                    lable='Password'
                    id='password'
                    type='password'
                    name='password'
                    onChange={(event) => handleEnteredValues('password', event)}
                    onBlur={() => handleInputBlur('password')}
                    value={enteredValues.password}
                    error={passwordIsInvalid && 'Please enter a valid password'}
                />
            </div>
            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
