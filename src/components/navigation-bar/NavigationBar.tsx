import React from 'react';
import { useSharedData } from '../../contexts/SharedDataProvider';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from './navigationBar.module.scss';

const NavigationBar: React.FC = () => {
  const { navigationBarContent: content } = useSharedData();
  return (
    <section data-testid="navbar">
      {content && (
        <Container fluid>
          <Navbar expand="lg">
            <Navbar.Brand href="/" data-testid="brand-logo">
              <img
                src={content.brandImage.data.attributes.url}
                className={`${styles.drLogo} d-inline-block align-top`}
                alt={content.brandImage.data.attributes.alternativeText}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end mt-3">
              <Nav>
                {content.dropdownLinks.map((dropdownLink) => (
                  <NavDropdown
                    key={dropdownLink.id}
                    className="me-4"
                    title={dropdownLink.dropdownLinkString}
                    data-testid="dropdown-link-title"
                  >
                    {dropdownLink.nestedLinks.map((nestedLink) => (
                      <NavDropdown.Item
                        className={styles.dropdownItem}
                        key={nestedLink.id}
                        href={`/${nestedLink.linkSlug}`}
                      >
                        {nestedLink.linkString}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ))}
                {content.standardLinks.map((standardLink) => (
                  <Nav.Link
                    key={standardLink.id}
                    href={`/${standardLink.linkSlug}`}
                    className={`${styles.underlineAnimation} me-4`}
                    data-testid="standard-link-title"
                  >
                    {standardLink.linkString}
                  </Nav.Link>
                ))}
                <Button
                  href={`/${content.button.buttonSlug}`}
                  className={`${styles.navigationButton} ms-3 d-none d-lg-block`}
                  data-testid="navigation-button"
                >
                  {content.button.buttonString}
                </Button>
                <Nav.Link
                  className={`${styles.underlineAnimation} me-4 d-lg-none`}
                  href={`/${content.button.buttonSlug}`}
                  data-testid="navigation-mobile-link"
                >
                  {content.button.buttonString}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      )}
    </section>
  );
};

export default NavigationBar;
