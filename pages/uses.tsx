import React from 'react';

const Uses = () => (
  <div className="container text-white flex flex-col lg:max-w-6xl mx-auto pb-16">
    <h1 className="text-center text-white text-4xl">/uses</h1>
    <p className="leading-8 font-normal text-lg text-center text-gray-200 mb-4">
      Hi there! This is my /uses page is inspire by{' '}
      <a href="https://wesbos.com/uses" rel="noopener" target="_blank">
        wesbos
      </a>
      , so let's get started:
    </p>
    <h2 className="text-gray-200 text-2xl uppercase pb-2 border-b border-gray-200">
      Computer
    </h2>
    <p className="ml-4 text-lg my-2">
      I have a Lenovo Ideapad 310 with an AMD A10 and 8GB of RAM!
    </p>
    <h2 className="text-gray-200 text-2xl uppercase pb-2 border-b border-gray-200">
      Software
    </h2>
    <div className="ml-4 text-lg my-2">
      <ol>
        <li>OS: Windows 10 (using WSL with Ubuntu)</li>
        <li>Editor: VS Code</li>
        <li>Terminal: Windows Terminal (Preview)</li>
        <li>UI Design: Figma or Adobe XD</li>
        <li>Git Service: GitHub / GitLab</li>
        <li>Phone: Xiaomi A2 Lite</li>
      </ol>
    </div>
    <h2 className="text-gray-200 text-2xl uppercase pb-2 border-b border-gray-200">
      Config
    </h2>
    <div className="ml-4 text-lg my-2">
      <ol>
        <li>
          VS Code Extensions:{' '}
          <a href="https://gist.github.com/Zoomelectrico/9026953c3ce4ab2f773b16dfbcae0846">
            Here !
          </a>
        </li>
        <li>
          VS Code Config:{' '}
          <a href="https://gist.github.com/Zoomelectrico/5c633624432f7ff658060460d4de4a7a">
            Here !
          </a>
        </li>
      </ol>
    </div>
  </div>
);

export default Uses;
