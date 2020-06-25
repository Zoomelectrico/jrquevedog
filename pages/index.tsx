import React from 'react';
import Layout from '../components/layout';

const socialNetworks = [
  {
    text: 'Twitter',
    link: 'https://twitter.com/quevedodev',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-6 h-6 fill-current text-green-500"
      >
        <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
      </svg>
    ),
  },
  {
    link: 'Instagram',
    text: 'https://instagram.com/zoomelectrico',
    icon: (
      <svg
        id="Bold"
        enableBackground="new 0 0 24 24"
        className="w-6 h-6 fill-current text-green-500"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z" />
        <path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z" />
        <circle cx="18.406" cy="5.595" r="1.439" />
      </svg>
    ),
  },
  {
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/josequevedog/',
    icon: (
      <svg
        id="Bold"
        enableBackground="new 0 0 24 24"
        className="w-6 h-6 fill-current text-green-500"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" />
        <path d="m.396 7.977h4.976v16.023h-4.976z" />
        <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" />
      </svg>
    ),
  },
  {
    text: 'GitHub',
    link: 'https://github.com/zoomelectrico',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 fill-current text-green-500"
        viewBox="0 0 24 24"
      >
        <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.21 3.438 9.63 8.205 11.188.6.11.82-.254.82-.567L9 20.908c-3.338.71-4.042-1.582-4.042-1.582-.546-1.36-1.335-1.725-1.335-1.725-1.087-.73.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.81 1.282 3.495.98.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.31-5.466-5.827 0-1.287.465-2.34 1.235-3.164-.135-.298-.54-1.497.105-3.12 0 0 1.005-.316 3.3 1.21.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.21 3.285-1.21.645 1.624.24 2.823.12 3.12a4.52 4.52 0 011.23 3.164c0 4.53-2.805 5.527-5.475 5.817.42.354.8 1.077.8 2.182l-.015 3.23c0 .31.2.678.825.56 4.8-1.548 8.236-5.97 8.236-11.173C24 5.78 18.627.5 12 .5z" />
      </svg>
    ),
  },
];

export default function IndexPage() {
  return (
    <>
      <Layout>
        <div className="px-8 py-12">
          <section className="container flex flex-row flex-wrap">
            <div className="px-4 w-full lg:w-1/2">
              <picture>
                <img
                  className="w-full h-auto shadow-lg"
                  src="/assets/profile.jpg"
                  alt="Jose Roberto Quevedo Profile"
                />
              </picture>
              <section className="w-full mt-6">
                <ul className="flex flex-row flex-wrap justify-end">
                  {socialNetworks.map((social) => (
                    <li className="ml-4" key={social.link}>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className=""
                      >
                        <span className="sr-only">{social.text}</span>
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <div className="px-4 w-full lg:w-1/2">
              <h2
                className="text-5xl text-green-500"
                style={{ letterSpacing: '1px' }}
              >
                Jose Roberto
                <br />
                Quevedo Gabizon
              </h2>
              <p className="text-justify leading-7 my-6">
                Hi! my name is Jose Roberto Quevedo Gabizon, I’m a Full Stack
                developer 💻, graduated from the Universidad Metropolitana 👨🏻‍🎓 as
                Bachelor of Engineering, with a Major in Systems Engineering.
                Three friends and I, started a company called Avila Tek, in the
                company we made custom systems, and as full stack developer, I'm
                in charge of make full funcional requirement for the clients,
                also I’m passionate about new technologies and my curiosity has
                lead me to be learning constantly and this has allowed me to be
                a highly qualified professional in many areas in a short term.
                In the professional level, we're using the trendy techs on the
                market, such as, Node.js, React.js, GraphQL, Mongo DB 📈🍃 and
                the libraries and frameworks related to them, like Next.js,
                Gatsby.js, Apollo. Finally, I love to teach and leave a positive
                impression en the people who work with me, because of this, I
                teach 👨🏻‍🏫 a couple of subjects in college related to the
                simulation of stochastic process and programming.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
