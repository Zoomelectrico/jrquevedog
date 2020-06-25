import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 px-8 py-16">
      <p className="text-center text-gray-500">
        Jose Roberto Quevedo Gabizon
        <br />
        <span className="text-xs text-green-500 underline">
          Based on the{' '}
          <a href="https://github.com" target="_blank" rel="noreferrer">
            Next.js Example
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
