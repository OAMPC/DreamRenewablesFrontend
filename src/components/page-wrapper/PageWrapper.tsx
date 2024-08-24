import React, { ReactNode } from 'react';
import * as Bs from 'react-bootstrap';
import Footer from '../footer/Footer';
import NavigationBar from '../navigation-bar/NavigationBar';

type Props = {
  children: ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <Bs.Container fluid>
        <div>{children}</div>
      </Bs.Container>
      <Footer />
    </div>
  );
};

export default PageWrapper;
