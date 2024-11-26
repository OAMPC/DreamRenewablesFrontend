import React from 'react';
import * as Bs from 'react-bootstrap';
import Footer from '../footer/Footer';
import NavigationBar from '../navigation-bar/NavigationBar';

type Props = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <section data-testid="main-content">
        <Bs.Container fluid>{children}</Bs.Container>
      </section>
      <Footer />
    </>
  );
};

export default PageWrapper;
