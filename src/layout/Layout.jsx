import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

