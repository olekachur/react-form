import { useState } from "react";

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

    function handleSubmit(event) {
        event.preventDefault();

        console.log(enteredValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onBlur={() => handleInputBlur('email')}
                        onChange={(event) => handleEnteredValues('email', event)}
                        value={enteredValues.email}
                    />
                    <div className="control-error">{emailIsInvalid && <p>Please enter walid email</p>}</div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(event) => handleEnteredValues('password', event)}
                        value={enteredValues.password}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
