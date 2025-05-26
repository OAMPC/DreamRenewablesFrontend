describe('Volunteer Opportunities Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/job-posts*', {
      fixture: 'volunteeringOpportunitiesStrapiResponse.json',
    }).as('getNewestToOldestVolunteeringOpportunitiesStrapiData');

    cy.visit('/volunteering-opportunities-home');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getNewestToOldestVolunteeringOpportunitiesStrapiData');
  });

  it('should load the header and footer and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');
    cy.get('[data-testid="footer"]').should('be.visible');
  });

  it('should load the Volunteer Opportunities Home Page and display the title', () => {
    cy.get('[data-testid="volunteer-opportunities-home-page-title"]')
      .should('be.visible')
      .and('contain.text', 'Volunteer Opportunities');
  });

  it('should display a grid of volunteer opportunity cards', () => {
    cy.get('[data-testid="job-post-card"]').should(
      'have.length.greaterThan',
      0
    );
  });

  it('should ensure each volunteer opportunity card has necessary elements', () => {
    cy.get('[data-testid="job-post-card"]').each((card) => {
      cy.wrap(card).within(() => {
        cy.get('[data-testid^="job-post-card-landing-image-"]').should(
          'be.visible'
        );
        cy.get('[data-testid^="job-post-card-title-"]').should('be.visible');
        cy.get('[data-testid^="job-post-card-summary-"]').should('be.visible');
      });
    });
  });

  it('should verify that clicking a volunteer opportunity card navigates to the correct opportunity', () => {
    cy.get('[data-testid^="job-post-card-link-"]')
      .first()
      .then((link) => {
        const href = link.prop('href');
        cy.wrap(link).click();
        cy.url().should('eq', href);
      });
  });
});
