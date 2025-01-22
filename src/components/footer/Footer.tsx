import React from 'react';
import useWindowDimensions from '../../hooks/windowDimensions';
import { useSharedData } from '../../contexts/SharedDataProvider';
import { Col, Nav, Row, Image, Container } from 'react-bootstrap';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const { width } = useWindowDimensions();
  const showClass = (): string | boolean => (width <= 992 ? ' active' : false);
  const { footerContent: content } = useSharedData();

  return (
    <section data-testid="footer" className="footer-section">
      {content && (
        <footer>
          <Container fluid>
            <hr className="mb-4" />
            <Row>
              <Col
                data-testid="footer-image-col"
                xl="9"
                lg="auto"
                md="12"
                className={`text-center` + showClass()}
              >
                <Row>
                  <Col>
                    <Image
                      loading="lazy"
                      data-testid="footer-image"
                      className={`${styles.footerImage} img-fluid`}
                      src={content.image.data.attributes.url}
                      alt={content.image.data.attributes.alternativeText}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>{content.image.data.attributes.caption}</p>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <p data-testid="footer-body" className="footer-body">
                      {content.textBody}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col
                data-testid="footer-navigation-col"
                xl="1"
                lg="auto"
                md="12"
                className={`text-center` + showClass()}
              >
                <Row>
                  <Col>
                    <h3 data-testid="navigation-links-title">
                      <strong>
                        {content.navigationLinks.navigationLinksTitle}
                      </strong>
                    </h3>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    {content.navigationLinks.standardLinks.map(
                      (standardLink) => (
                        <Nav.Link
                          className="my-2"
                          key={standardLink.id}
                          href={standardLink.linkSlug}
                        >
                          {standardLink.linkString}
                        </Nav.Link>
                      )
                    )}
                  </Col>
                </Row>
              </Col>
              <Col
                xl="2"
                lg="auto"
                md="12"
                className={`text-center` + showClass()}
              >
                <Row>
                  <Col>
                    <h3 data-testid="social-media-links-title">
                      <strong>
                        {content.socialMediaLinks.socialMediaLinksTitle}
                      </strong>
                    </h3>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col
                    className={`${'d-flex' + showClass()} ${'justify-content-center' + showClass()}`}
                  >
                    {content.socialMediaLinks.iconLinks.map((iconLink) => (
                      <Image
                        loading="lazy"
                        data-testid="social-media-icon"
                        key={iconLink.id}
                        className={`${styles.socialMediaIcon} ${'ms-4' + showClass()} me-4`}
                        alt={iconLink.icon.data.attributes.alternativeText}
                        onClick={() =>
                          (window.location.href = iconLink.linkSlug)
                        }
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
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>{content.contactInformation.contactInformationName}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <Image
                        loading="lazy"
                        className="me-1 mb-1"
                        alt={
                          content.contactInformation.icon.data.attributes
                            .alternativeText
                        }
                        src={
                          content.contactInformation.icon.data.attributes.url
                        }
                      />
                      {content.contactInformation.email}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </footer>
      )}
    </section>
  );
};

export default Footer;
