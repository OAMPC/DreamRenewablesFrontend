describe('Fundraising Events Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/fundraising-events*', {
      fixture: 'fundraisingEventsStrapiResponse.json',
    }).as('getNewestToOldestFundraisingEventsStrapiData');

    cy.visit('/fundraising-events-home');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getNewestToOldestFundraisingEventsStrapiData');
  });

  it('should load the header and footer and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');
    cy.get('[data-testid="footer"]').should('be.visible');
  });

  it('should load the Fundraising Events Home Page and display the title', () => {
    cy.get('[data-testid="fundraising-events-home-page-title"]')
      .should('be.visible')
      .and('contain.text', 'Fundraising Events');
  });

  it('should display a grid of fundraising event cards', () => {
    cy.get('[data-testid="fundraising-events-grid"]')
      .should('be.visible')
      .find('[data-testid="fundraising-event-card"]')
      .should('have.length.greaterThan', 0);
  });

  it('should ensure each fundraising event card has necessary elements', () => {
    cy.get('[data-testid="fundraising-event-card"]').each((card) => {
      cy.wrap(card).within(() => {
        cy.get('[data-testid^="event-card-image-"]').should('be.visible');
        cy.get('[data-testid^="event-card-title-"]').should('be.visible');
        cy.get('[data-testid^="event-card-date-"]').should('be.visible');
        cy.get('[data-testid^="event-card-contact-"]').should('be.visible');
      });
    });
  });

  it('should verify that clicking an event card navigates to the correct event page', () => {
    cy.get('[data-testid="event-card-link"]')
      .first()
      .then((link) => {
        const href = link.prop('href');
        cy.wrap(link).click();
        cy.url().should('eq', href);
      });
  });
});
