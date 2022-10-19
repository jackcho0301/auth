import React from 'react'
import { useState } from 'react'



const Form = ({ formAction }) => {

    //component-level state:
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        formAction({ username, password });

        //clear the form by setting the state
        setUsername('');
        setPassword('');
    }





    return (
        <form id="form" onSubmit={onSubmit}>
            <label htmlFor="input">Username:</label>
            <input type="text" id="input" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="input">Password:</label>
            <input type="text" id="input" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" id="search-btn">Register</button>
        </form>
    )
}

export default Form