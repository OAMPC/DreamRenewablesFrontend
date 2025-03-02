import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import styles from './loading.module.scss';
const Loading: React.FC = () => {
  return (
    <Container fluid className={styles.spinnerContainer}>
      <Row>
        <Col>
          <Spinner data-testid="spinner" role="status" animation="border" />
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
