import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // this is the hook that manages the form data
const [formState, setFormState] = useState({ name: '', email: '', message: '' });
const { name, email, message } = formState;
// error message hook
const [errorMessage, setErrorMessage] = useState('');


function handleChange(e) {
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        // isValid conditional statement
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
    } else {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required`);
        } else {
            setErrorMessage('');
        }
    }
    // spread syntax is used here to prevent the other key-value pairs from being overwritten to only contain name: value
    // the name of target refers to the name attribute of the form element, which attribute value matches the property
    // names of fromState (name, email and message) and allows [] to create dynamic property names.
    if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
}

    return (
        <section>
            <h1 data-testid= 'contact'>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={name} onBlur={handleChange} name='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' defaultValue={email} name='email' onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type='submit' data-testid='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;