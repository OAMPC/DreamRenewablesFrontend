import React, { useEffect, useState } from 'react';
import GetStrapiData from '../../api/api';
import './navigationBar.css';
import * as Bs from 'react-bootstrap';
import { NavigationBarStrapiContent } from '../../data/interfaces/navigation-bar/NavigationBarStrapiContent';

const NavigationBar: React.FC = () => {
  const [content, setData] = useState<NavigationBarStrapiContent | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAndProcessData = async (): Promise<void> => {
      try {
        const apiResponse = await GetStrapiData();
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

  return (
    <section>
      {!isLoading && content ? (
        <Bs.Navbar expand="lg">
          <Bs.Navbar.Brand className="dr-logo" href="/">
            <img
              src={content.brandImage.data.attributes.url}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Bs.Navbar.Brand>
          <Bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Bs.Navbar.Collapse className="justify-content-end">
            <Bs.Nav>
              {content.dropdownLinks.map((dropdownLink) => (
                <Bs.NavDropdown
                  key={dropdownLink.id}
                  className="me-4"
                  title={dropdownLink.dropdownLinkString}
                >
                  {dropdownLink.nestedLinks.map((nestedLink) => (
                    <Bs.NavDropdown.Item
                      key={nestedLink.id}
                      href={nestedLink.linkSlug}
                    >
                      {nestedLink.linkString}
                    </Bs.NavDropdown.Item>
                  ))}
                </Bs.NavDropdown>
              ))}
              {content.standardLinks.map((standardLink) => (
                <Bs.Nav.Link
                  key={standardLink.id}
                  href={standardLink.linkSlug}
                  className="me-4 underline-animation"
                >
                  {standardLink.linkString}
                </Bs.Nav.Link>
              ))}
              <Bs.Button
                href={content.button.buttonSlug}
                className="ms-3 btn-effect"
              >
                {content.button.buttonString}
              </Bs.Button>
            </Bs.Nav>
          </Bs.Navbar.Collapse>
        </Bs.Navbar>
      ) : (
        <Bs.Spinner animation="grow" />
      )}
    </section>
  );
};

export default NavigationBar;
