import React from 'react';

import './frame.sass';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

interface IFrame {
  children: React.ReactNode;
}

const Frame = (props: IFrame) => {
  const { children } = props;

  return (
    <div className="frame">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Frame;
