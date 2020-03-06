import React from 'react';
import Navbar from './Navbar';
interface LayoutProps {
  children: React.ReactChild | Array<React.ReactChildren>;
}

const Layout = ({ children }: LayoutProps) => {
  const links = [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: '/contact',
      name: 'Contact me!',
    },
    {
      href: '/uses',
      name: '/uses',
    },
  ];
  return (
    <div className="bg-gray-800 w-full px-12 max-w-none text-white">
      <div className="flex flex-wrap flex-col min-h-screen">
        {/* Navbar */}
        <Navbar links={links} />
        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
