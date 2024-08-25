import React from 'react';
import * as Bs from 'react-bootstrap';
import { FooterStrapiContent } from '../../data/interfaces/footer/FooterStrapiContent';
import { NavigationBarStrapiContent } from '../../data/interfaces/navigation-bar/NavigationBarStrapiContent';
import Footer from '../footer/Footer';
import NavigationBar from '../navigation-bar/NavigationBar';

type Props = {
  children: React.ReactNode;
  navigationBarStrapiData: NavigationBarStrapiContent;
  footerStrapiData: FooterStrapiContent;
};

const PageWrapper: React.FC<Props> = ({
  children,
  navigationBarStrapiData,
  footerStrapiData,
}) => {
  return (
    <>
      <NavigationBar content={navigationBarStrapiData} />
      <section data-testid="main-content">
        <Bs.Container fluid>{children}</Bs.Container>
      </section>
      <Footer content={footerStrapiData} />
    </>
  );
};

export default PageWrapper;
