import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  links: Array<{ href: string; name: string }>;
}

const Navbar = ({ links }: NavbarProps) => (
  <div className="flex flex-wrap flex-row p-8 justify-center">
    <ul className="list-none p-0 m-0 inline-flex flex-wrap w-full justify-center">
      {links.map(link => (
        <li className="p-2 ml-1" key={link.name}>
          <Link href={link.href}>
            <a className="font-semibold text-lg text-gray-100 hover:text-purple-400">
              {link.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Navbar;
