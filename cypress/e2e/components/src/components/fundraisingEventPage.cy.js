describe('Fundraising Event Template Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/fundraising-events*', {
      fixture: 'fundraisingEventsStrapiResponse.json',
    }).as('getFundraisingEventStrapiData');

    cy.visit('/fundraising-event/marathon');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getFundraisingEventStrapiData');
  });

  it('should load a fundraising event template page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');

    cy.get('[data-testid="landing-image"]').should('be.visible');
    cy.get('[data-testid="fundraising-event-date"]').should('be.visible');
    cy.get('[data-testid="fundraising-event-title"]').should('be.visible');
    cy.get('[data-testid="event-description"]').should('be.visible');

    cy.get('[data-testid="fundraising-event-contact-us-button"]').should(
      'be.visible'
    );
    cy.get('[data-testid="fundraising-event-contact-us-button"]').should(
      'have.attr',
      'href',
      '/contact'
    );

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
