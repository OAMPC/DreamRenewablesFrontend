import React, { useEffect, useState } from 'react';
import * as Bs from 'react-bootstrap';
import { getFooterStrapiData } from '../../api/strapiApi';
import { FooterStrapiContent } from '../../data/interfaces/footer/FooterStrapiContent';
import './footer.css';
import useWindowDimensions from '../../hooks/windowDimensions';

const Footer: React.FC = () => {
  const [content, setData] = useState<FooterStrapiContent | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchAndProcessData = async (): Promise<void> => {
      try {
        const apiResponse = await getFooterStrapiData();
        if (apiResponse) {
          setData(apiResponse);
        }
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndProcessData();
  }, []);

  const handleError = (error: unknown): void => {
    console.error('Error loading or parsing data:', error);
  };

  const showClass = (): string | boolean => (width <= 992 ? ' active' : false);

  return (
    <section>
      <footer>
        {!isLoading && content ? (
          <footer>
            <Bs.Container fluid>
              <hr className="mb-4" />
              <Bs.Row>
                <Bs.Col lg="9" md="12" className={`text-center` + showClass()}>
                  <Bs.Row>
                    <Bs.Col>
                      <Bs.Image
                        className="footer-image img-fluid"
                        src={content.image.data.attributes.url}
                      />
                    </Bs.Col>
                  </Bs.Row>
                  <Bs.Row>
                    <Bs.Col>
                      <p className="footer-image-caption">
                        {content.image.data.attributes.caption}
                      </p>
                    </Bs.Col>
                  </Bs.Row>
                  <Bs.Row className="mb-3">
                    <Bs.Col>
                      <p className="footer-body">{content.textBody}</p>
                    </Bs.Col>
                  </Bs.Row>
                </Bs.Col>
                <Bs.Col lg="1" md="12" className={`text-center` + showClass()}>
                  <Bs.Row>
                    <Bs.Col>
                      <h3>
                        <strong>
                          {content.navigationLinks.navigationLinksTitle}
                        </strong>
                      </h3>
                    </Bs.Col>
                  </Bs.Row>
                  <Bs.Row className="mb-4">
                    <Bs.Col>
                      {content.navigationLinks.standardLinks.map(
                        (standardLink) => (
                          <Bs.Nav.Link
                            className="my-2"
                            key={standardLink.id}
                            href={standardLink.linkSlug}
                          >
                            {standardLink.linkString}
                          </Bs.Nav.Link>
                        )
                      )}
                    </Bs.Col>
                  </Bs.Row>
                </Bs.Col>
                <Bs.Col lg="2" md="12" className={`text-center` + showClass()}>
                  <Bs.Row>
                    <Bs.Col>
                      <h3>
                        <strong>
                          {content.socialMediaLinks.socialMediaLinksTitle}
                        </strong>
                      </h3>
                    </Bs.Col>
                  </Bs.Row>
                  <Bs.Row className="mb-5">
                    <Bs.Col
                      className={`${'d-flex' + showClass()} ${'justify-content-center' + showClass()}`}
                    >
                      {content.socialMediaLinks.iconLinks.map((iconLink) => (
                        <Bs.Image
                          key={iconLink.id}
                          className={`${'social-media-icon' + showClass()} ${'ms-4' + showClass()} me-4`}
                          onClick={() =>
                            (window.location.href = iconLink.linkSlug)
                          }
                          src={iconLink.icon.data.attributes.url}
                        />
                      ))}
                    </Bs.Col>
                  </Bs.Row>
                  <Bs.Row>
                    <Bs.Col>
                      <h3>
                        <strong>
                          {content.contactInformation.contactInformationTitle}
                        </strong>
                      </h3>
                    </Bs.Col>
                  </Bs.Row>
                  <Bs.Row>
                    <Bs.Col>
                      <h4>
                        {content.contactInformation.contactInformationName}
                      </h4>
                    </Bs.Col>
                  </Bs.Row>
                  <Bs.Row>
                    <Bs.Col>
                      <p>
                        <Bs.Image
                          className="me-1 mb-1"
                          src={
                            content.contactInformation.icon.data.attributes.url
                          }
                        />
                        {content.contactInformation.email}
                      </p>
                    </Bs.Col>
                  </Bs.Row>
                </Bs.Col>
              </Bs.Row>
            </Bs.Container>
          </footer>
        ) : (
          <Bs.Spinner animation="grow" />
        )}
      </footer>
    </section>
  );
};

export default Footer;
