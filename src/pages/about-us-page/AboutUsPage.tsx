import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import * as Bs from 'react-bootstrap';

const AboutUsPage: React.FC = () => {
  return (
    <PageWrapper>
      <Bs.Row>
        <Bs.Col>
          <h1>Hello World</h1>
        </Bs.Col>
      </Bs.Row>
    </PageWrapper>
  );
};

export default AboutUsPage;
