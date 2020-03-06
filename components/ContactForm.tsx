import React from 'react';
import Social from './Social';

const ContactForm = () => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  return (
    <form method="POST" className="container flex flex-col flex-wrap mt-4">
      <div className="mx-auto sm:w-10/12 md:w-3/4 lg:w-1/2">
        <div className="flex flex-row flex-wrap">
          <div className="w-full md:w-1/2 flex flex-col px-2">
            <label htmlFor="name" className="mb-1 text-lg">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              className="px-4 py-2 bg-gray-700 rounded-sm outline-none focus:shadow-outline mb-3"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={e => {
                e.preventDefault();
                setName(e.target.value as string);
              }}
              required
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col px-2">
            <label htmlFor="email" className="mb-1 text-lg">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="px-4 py-2 bg-gray-700 rounded-sm outline-none focus:shadow-outline mb-3"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={e => {
                e.preventDefault();
                setEmail(e.target.value as string);
              }}
              required
            />
          </div>
          <div className="w-full flex flex-col px-2">
            <label htmlFor="message" className="mb-1 text-lg">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              className="px-4 py-2 bg-gray-700 rounded-sm outline-none focus:shadow-outline mb-3"
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={e => {
                e.preventDefault();
                setMessage(e.target.value);
              }}
              required
            ></textarea>
          </div>
          <div className="w-full">
            <Social />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="px-4 py-2 rounded-sm bg-purple-600 text-white mb-4 w-40 text-center font-semibold shadow"
            >
              Send me!
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
