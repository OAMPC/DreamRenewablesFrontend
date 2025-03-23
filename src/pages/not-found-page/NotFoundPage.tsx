import React from 'react';
import logo from '../../../favicon.ico';
import { Col, Row } from 'react-bootstrap';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Row>
        <Col>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: '100vh' }}
          >
            <div className="text-center">
              <img
                data-testid="dr-logo"
                src={logo}
                height="250"
                width="250"
                className="mb-3 shadow-lg bg-white rounded p-3"
              />
              <h1 className="mb-3">404 Sorry this page cannot be found</h1>
              <a
                className="fs-3 link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                href="/"
              >
                Go back home
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NotFoundPage;
