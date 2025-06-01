describe('Annual Reports Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/annual-reports*', {
      fixture: 'annualReportsStrapiResponse.json',
    }).as('getAnnualReportsPageStrapiData');

    cy.visit('/annual-reports');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getAnnualReportsPageStrapiData');
  });

  it('should load the header and footer and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');
    cy.get('[data-testid="footer"]').should('be.visible');
  });

  it('should load the Annual Reports Page and display the title', () => {
    cy.get('[data-testid="annual-reports-home-page-title"]')
      .should('be.visible')
      .and('contain.text', 'Annual Reports');
  });

  it('should display a grid of annual report cards', () => {
    cy.get('[data-testid="annual-reports-grid"]')
      .should('be.visible')
      .find('[data-testid="annual-report-card"]')
      .should('have.length.greaterThan', 0);
  });

  it('should ensure each annual report card has necessary elements', () => {
    cy.get('[data-testid="annual-report-card"]').each((card) => {
      cy.wrap(card).within(() => {
        cy.get('[data-testid^="annual-report-card-image-"]').should(
          'be.visible'
        );
        cy.get('[data-testid^="annual-report-card-title-"]').should(
          'be.visible'
        );
        cy.get('[data-testid^="annual-report-card-description-"]').should(
          'be.visible'
        );
        cy.get('[data-testid^="annual-report-card-date-"]').should(
          'be.visible'
        );
      });
    });
  });
});
