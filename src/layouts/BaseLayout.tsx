import React from 'react';
import { Outlet } from 'react-router';
import { Header, Footer } from '../components/common';

const BaseLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
