import React, { ReactNode } from 'react';
import NavigationBar from '../navigation-bar/NavigationBar';
import Footer from '../footer/Footer';

type Props = {
  children: ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
