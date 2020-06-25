import React from 'react';
import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';

type LayoutProps = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <header>
        <Navbar />
      </header>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
