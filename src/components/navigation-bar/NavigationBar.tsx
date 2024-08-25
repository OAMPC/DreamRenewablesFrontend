import React from 'react';
import * as Bs from 'react-bootstrap';
import { NavigationBarStrapiContent } from '../../data/interfaces/navigation-bar/NavigationBarStrapiContent';
import './navigationBar.css';

const NavigationBar: React.FC<{ content: NavigationBarStrapiContent }> = ({
  content,
}) => {
  return (
    <section data-testid="navbar">
      {content && (
        <Bs.Container fluid>
          <Bs.Navbar expand="lg">
            <Bs.Navbar.Brand
              className="dr-logo"
              href="/"
              data-testid="brand-logo"
            >
              <img
                src={content.brandImage.data.attributes.url}
                className="d-inline-block align-top"
                alt={content.brandImage.data.attributes.alternativeText}
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
                    data-testid="dropdown-link-title"
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
                    data-testid="standard-link-title"
                  >
                    {standardLink.linkString}
                  </Bs.Nav.Link>
                ))}
                <Bs.Button
                  href={content.button.buttonSlug}
                  className="ms-3 btn-effect"
                  data-testid="navigation-button"
                >
                  {content.button.buttonString}
                </Bs.Button>
              </Bs.Nav>
            </Bs.Navbar.Collapse>
          </Bs.Navbar>
        </Bs.Container>
      )}
    </section>
  );
};

export default NavigationBar;
