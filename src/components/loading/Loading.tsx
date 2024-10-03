import React from 'react';
import * as Bs from 'react-bootstrap';
import './loading.scss';
const Loading: React.FC = () => {
  return (
    <Bs.Container fluid className="spinner-container">
      <Bs.Row>
        <Bs.Spinner data-testid="spinner" role="status" animation="border" />
      </Bs.Row>
    </Bs.Container>
  );
};

export default Loading;
