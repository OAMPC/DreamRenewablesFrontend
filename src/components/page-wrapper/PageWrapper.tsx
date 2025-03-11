import React from 'react';
import Footer from '../footer/Footer';
import NavigationBar from '../navigation-bar/NavigationBar';
import { Container } from 'react-bootstrap';

type Props = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <section data-testid="main-content">
        <Container fluid>{children}</Container>
      </section>
      <Footer />
    </>
  );
};

export default PageWrapper;
