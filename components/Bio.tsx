import React from 'react';
import Link from 'next/link';
import Social from './Social';

const Bio = () => (
  <div className="container text-white flex flex-col lg:max-w-6xl mx-auto pb-16">
    <picture className="my-4 mx-auto rounded-full shadow h-64 w-64 object-cover object-center">
      <source
        src="/img/profile.webp"
        className="my-4 mx-auto rounded-full shadow h-64 w-64 object-cover object-center"
      />
      <img
        src="/img/profile.jpg"
        alt="Profile Pic Jose Quevedo"
        className="my-4 mx-auto rounded-full shadow h-64 w-64 object-cover object-center"
      />
    </picture>
    <h1 className="text-4xl text-center my-3">
      Jose Roberto
      <br />
      Quevedo Gabizon
    </h1>
    <p className="leading-8 font-normal text-lg text-justify text-gray-200 mb-4">
      Hi! my name is Jose Roberto Quevedo Gabizon, I’m a Full Stack developer
      💻, graduated from the{' '}
      <a
        className=""
        href="http://unimet.edu.ve"
        target="_blank"
        rel="noopener"
      >
        Universidad Metropolitana 👨🏻‍🎓
      </a>{' '}
      as Bachelor of Engineering, with a Major in Systems Engineering. Three
      friends and I, started a company called{' '}
      <a href="https://avilatek.dev" target="_blank" rel="noopener">
        Avila Tek
      </a>
      , in the company we made custom systems, and as full stack developer, I'm
      in charge of make full funcional requirement for the clients, also I’m
      passionate about new technologies and my curiosity has lead me to be
      learning constantly and this has allowed me to be a highly qualified
      professional in many areas in a short term. In the professional level,
      we're using the trendy techs on the market, such as, Node.js, React.js,
      GraphQL, Mongo DB 📈🍃 and the libraries and frameworks related to them,
      like Next.js. Finally, I love to teach and leave a positive impression en
      the people who work with me, because of this, I teach 👨🏻‍🏫 a subject in
      college related to the simulation of stochastic process.
    </p>
    <Social />
    <div className="flex flex-row flex-wrap">
      <Link href="/contact">
        <a className="px-4 py-2 rounded-sm bg-purple-600 text-white mb-4 w-40 text-center font-semibold shadow mr-4">
          Contact me!
        </a>
      </Link>
      <a
        href="/jose-quevedo-cv.pdf"
        role="button"
        download={`jose-quevedo-cv-${new Date()
          .toISOString()
          .slice(0, 10)}.pdf`}
        className="px-4 py-2 rounded-sm border-purple-600 bg-gray-200 text-purple-500 mb-4 w-40 text-center font-semibold shadow mr-4"
      >
        Download CV
      </a>
    </div>
  </div>
);

export default Bio;
