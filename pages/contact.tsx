import React from 'react';
import { ContactForm } from '../components';

const Contact = () => (
  <div className="container text-white flex flex-col lg:max-w-6xl mx-auto pb-16">
    <h1 className="text-center text-white text-4xl">Contact me!</h1>
    <ContactForm />
  </div>
);

export default Contact;
