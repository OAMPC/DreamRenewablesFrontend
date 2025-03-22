import React from 'react';
import { useSharedData } from '../../contexts/SharedDataProvider';
import { Col, Nav, Row, Image } from 'react-bootstrap';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const { footerContent: content } = useSharedData();

  return (
    <section data-testid="footer" className="footer-section mb-5">
      {content && (
        <footer>
          <hr className="mb-4" />
          <Row>
            <Col
              data-testid="footer-image-col"
              xl="9"
              lg="auto"
              md="12"
              className="text-center text-xl-start"
            >
              <Image
                loading="lazy"
                data-testid="footer-image"
                className={`${styles.footerImage} img-fluid`}
                src={content.image.data.attributes.url}
                alt={content.image.data.attributes.alternativeText}
              />

              <p data-testid="footer-image-caption">
                {content.image.data.attributes.caption}
              </p>
              <p data-testid="footer-body" className="footer-body mb-5 mb-xl-0">
                {content.textBody}
              </p>
            </Col>
            <Col
              data-testid="footer-navigation-col"
              xl="1"
              sm="12"
              className="text-center text-xl-start mb-5 mb-xl-0"
            >
              <h3 data-testid="navigation-links-title">
                <strong>{content.navigationLinks.navigationLinksTitle}</strong>
              </h3>
              {content.navigationLinks.standardLinks.map((standardLink) => (
                <Nav.Link
                  className="my-2"
                  key={standardLink.id}
                  href={standardLink.linkSlug}
                >
                  {standardLink.linkString}
                </Nav.Link>
              ))}
            </Col>
            <Col xl="2" sm="12" className="text-center text-xl-start">
              <h3 data-testid="social-media-links-title">
                <strong>
                  {content.socialMediaLinks.socialMediaLinksTitle}
                </strong>
              </h3>
              <Row className="mb-5 mb-xl-3">
                <Col className="d-flex justify-content-center justify-content-xl-start">
                  {content.socialMediaLinks.iconLinks.map((iconLink) => (
                    <Image
                      loading="lazy"
                      data-testid="social-media-icon"
                      key={iconLink.id}
                      className={`ms-3 ms-xl-0 me-4 ${styles.socialMediaIcon}`}
                      alt={iconLink.icon.data.attributes.alternativeText}
                      onClick={() => (window.location.href = iconLink.linkSlug)}
                      src={iconLink.icon.data.attributes.url}
                    />
                  ))}
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 data-testid="contact-information-title">
                    <strong>
                      {content.contactInformation.contactInformationTitle}
                    </strong>
                  </h3>
                  <h4>{content.contactInformation.contactInformationName}</h4>
                  <p>
                    <Image
                      loading="lazy"
                      className="me-1 mb-1"
                      alt={
                        content.contactInformation.icon.data.attributes
                          .alternativeText
                      }
                      src={content.contactInformation.icon.data.attributes.url}
                    />
                    {content.contactInformation.email}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </footer>
      )}
    </section>
  );
};

export default Footer;
