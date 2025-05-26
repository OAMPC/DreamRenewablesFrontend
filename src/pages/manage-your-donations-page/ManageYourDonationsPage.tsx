import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import styles from './manageYourDonationsPage.module.scss';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { emailCustomerStripeManagementUrl } from '../../api/serverApi';

const ManageYourDonationsPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailCustomerStripeManagementUrl(email);
      setSubmitted(true);
      setError(null);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.log(err);
    }
  };

  return (
    <PageWrapper>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: '75vh' }}
      >
        <div
          data-testid="manage-your-donations-section"
          className={styles.paymentSectionWrapper + ' p-2 p-sm-5 mt-5 mt-sm-3'}
        >
          <Row>
            <Col>
              <div className="d-flex justify-content-center mb-0">
                <h2
                  data-testid="manage-your-donations-section-main-title"
                  className="fs-1 fw-bold text-center"
                >
                  Manage Your Donations
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <p
                data-testid="manage-your-donations-section-sub-title"
                className="fs-5 text-center"
              >
                Your ongoing support makes a huge impact. We're deeply grateful
                for your contributions to Dream Renewables.
              </p>
              <p className="fs-5 text-center">
                To manage your monthly donation—update your details, change your
                payment method, or cancel—enter the email address you used for
                your donation. We’ll send you a secure link to your subscription
                management portal.
              </p>
            </Col>
          </Row>
          {error && <p className="text-center text-danger mt-1">{error}</p>}
          {submitted ? (
            <Row>
              <Col>
                <p className="fs-5 text-success text-center">
                  Check your inbox! If we have a subscription with the provided
                  email you'll have an email letting you manage your
                  subscription - be sure to check your spam!
                </p>
              </Col>
            </Row>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Row className="d-flex justify-content-center">
                <Col xs={12} sm={8} md={6} lg={4}>
                  <Form.Group controlId="email">
                    <Form.Control
                      className="rounded-5 p-3"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      data-testid="manage-your-donations-email-input"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-4 d-flex justify-content-center">
                <Col xs="auto">
                  <Button
                    type="submit"
                    className={`${styles.manageDonationsButton}`}
                    variant="primary"
                    data-testid="manage-your-donations-submit-button"
                  >
                    Send Management Link
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ManageYourDonationsPage;
