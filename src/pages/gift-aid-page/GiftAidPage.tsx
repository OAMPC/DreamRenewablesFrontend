import React, { useState } from 'react';
import styles from './giftAidPage.module.scss';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { createCheckoutSession } from '../../api/serverApi';
import { useLocation } from 'react-router-dom';

const GiftAidPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [giftAidSelection, setGiftAidSelection] = useState<null | boolean>(
    null
  );

  const location = useLocation();
  const { paymentOption, paymentType, cancelUrl } = location.state || {};

  const clickHandler = async () => {
    if (
      !paymentOption ||
      !paymentType ||
      !cancelUrl ||
      giftAidSelection === null
    ) {
      console.error('Missing payment data or Gift Aid selection!');
      return;
    }

    setIsLoading(true);
    try {
      const sessionUrl = await createCheckoutSession(
        paymentOption.amount,
        paymentType,
        giftAidSelection,
        cancelUrl
      );
      window.location.href = sessionUrl;
    } catch (err) {
      console.error('Failed to create Stripe session:', err);
      setIsLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Container>
        <Row>
          <Col>
            <h1 className="fs-1 my-xl-5 my-3">
              Make Your Donation Go Further with Gift Aid
            </h1>
            <p className="fs-5">
              If you’re a UK taxpayer, your donation could be worth 25% more at
              no extra cost to you!
            </p>
            <p className="fs-5">
              By ticking the box below, you allow us to claim Gift Aid on your
              donation. This means for every £1 you donate, we can claim an
              extra 25p from HMRC.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="mt-xl-5 mt-3 mb-3">Gift Aid Declaration</h2>

            <Form.Check
              type="radio"
              id="gift-aid-yes"
              label="I am a UK taxpayer and would like Dream Big Ghana Foundation to claim Gift Aid on this and any future donations. (Dream Renewables programmes are delivered in partnership with Dream Big Ghana Foundation)"
              checked={giftAidSelection === true}
              onChange={() => setGiftAidSelection(true)}
              className={`${styles.giftAidCheckbox} fs-5 mb-3`}
              data-testid="gift-aid-yes"
            />

            <p className="fs-5">
              I understand that if I pay less Income Tax and/or Capital Gains
              Tax than the amount of Gift Aid claimed on all my donations in
              that tax year, it is my responsibility to pay any difference.
            </p>

            <Form.Check
              type="radio"
              id="gift-aid-no"
              label="I am not a UK taxpayer or don't want to claim gift aid on this donation."
              checked={giftAidSelection === false}
              onChange={() => setGiftAidSelection(false)}
              className={`${styles.giftAidCheckbox} fs-5 mb-3`}
              data-testid="gift-aid-no"
            />

            <p className="fs-5 mb-3">
              Thank you for helping your gift go further!
            </p>

            {paymentType == 'monthly' ? (
              <p className="fs-5  mb-xl-5 mb-3">
                Set up a monthly gift to Dream Renewables and help communities
                across Ghana develop clean and reliable energy systems. All
                donations are processed by Dream Big Ghana Foundation, our
                closest partner and a UK registered charity. 100% of your
                donation, minus the Stripe processing fee, will be used to
                support our renewable energy projects.
              </p>
            ) : (
              <p className="fs-5  mb-xl-5 mb-3">
                Your donation will help communities across Ghana develop clean
                and reliable energy systems. All donations are processed by
                Dream Big Ghana Foundation, our closest partner and a UK
                registered charity. 100% of your donation, minus the Stripe
                processing fee, will be used to support our renewable energy
                projects.
              </p>
            )}

            <Button
              onClick={clickHandler}
              className={`${styles.proceedButton} mb-5`}
              disabled={giftAidSelection === null || isLoading}
            >
              {isLoading ? 'Loading...' : 'Proceed'}
            </Button>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default GiftAidPage;
