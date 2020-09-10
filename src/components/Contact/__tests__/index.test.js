import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..'
import ContactForm from '..';

afterEach(cleanup);

describe("ContactForm component", ()=> {
    it('renders', ()=> {
        render(
            <ContactForm />
        )
    })

    it('matches snapshot', ()=> {
        const { asFragment } = render(
            <ContactForm />
        );
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Contact Me is visible', ()=> {
    it('inserts Contact Me into the h1 tag', ()=> {
        const { getByTestId } = render(
            <ContactForm />
        );
        expect(getByTestId('contact')).toHaveTextContent('Contact Me');
    });
})

describe('Contact Me is visible', ()=> {
    it('text for button reads Submit', ()=> {
        const { getByTestId } = render(
            <ContactForm />
        );
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });
})