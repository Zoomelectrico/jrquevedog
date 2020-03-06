import React from 'react';

const Social = () => (
  <div className="flex flex-wrap flex-col justify-start my-4">
    <ul className="list-none p-0 m-0 inline-flex justify-start">
      <li className="mx-2 opacity-75">
        <a
          className="text-white text-xl"
          href="https://www.facebook.com/joserquevedog/"
          rel="noopener"
          target="_blank"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </li>
      <li className="mx-2 opacity-75">
        <a
          className="text-white text-xl"
          href="https://twitter.com/quevedodev"
          rel="noopener"
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="mx-2 opacity-75">
        <a
          className="text-white text-xl"
          href="https://instagram/zoomelectrico"
          rel="noopener"
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li className="mx-2 opacity-75">
        <a
          className="text-white text-xl"
          href="https://linkedin.com/in/josequevedog"
          rel="noopener"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li className="mx-2 opacity-75">
        <a
          className="text-white text-xl"
          href="https://github.com/zoomelectrico"
          rel="noopener"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </li>
    </ul>
  </div>
);

export default Social;
