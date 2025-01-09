import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PageWrapper from '../../components/page-wrapper/PageWrapper';

const DonatePage: React.FC = () => {
  return (
    <PageWrapper>
      <Row>
        <Col>
          <h1 data-testid="donate-page-title">Hello World</h1>
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default DonatePage;
