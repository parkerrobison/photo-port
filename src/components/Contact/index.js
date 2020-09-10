import React, { useState } from 'react';

function ContactForm() {
    // this is the hook that manages the form data
const [formState, setFormState] = useState({ name: '', email: '', message: '' });

const { name, email, message } = formState;

function handleChange(e) {
    // spread syntax is used here to prevent the other key-value pairs from being overwritten to only contain name: value
    // the name of target refers to the name attribute of the form element, which attribute value matches the property
    // names of fromState (name, email and message) and allows [] to create dynamic property names.
    setFormState({...formState, [e.target.name]: e.target.value })
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
}

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={name} onChange={handleChange} name='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' defaultValue={email} name='email' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} onChange={handleChange} rows='5' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;