import React from 'react';
import Link from 'next/link';

const links = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'Blog',
    href: '/blog',
  },
  {
    text: 'Contacto',
    href: '/contact',
  },
  {
    text: '/uses',
    href: '/uses',
  },
];

const Navbar = () => (
  <nav className="w-full border-b border-gray-200 px-8 py-6">
    <ul className="w-full flex flex-row flex-wrap space-x-4">
      {links.map(({ text, href }) => (
        <li className="">
          <Link href={href}>
            <a className="text-gray-900 text-lg">{text}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
