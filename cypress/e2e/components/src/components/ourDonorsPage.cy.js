describe('Our Donors Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/navigation-bar*', {
      fixture: 'navigationBarStrapiResponse.json',
    }).as('getNavigationBarStrapiData');

    cy.intercept('GET', '**/api/footer*', {
      fixture: 'footerStrapiResponse.json',
    }).as('getFooterStrapiData');

    cy.intercept('GET', '**/api/our-donors-page*', {
      fixture: 'ourDonorsPageStrapiResponse.json',
    }).as('getOurDonorsPageStrapiData');

    cy.visit('/our-donors');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getOurDonorsPageStrapiData');
  });

  it('should load the our donors page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');

    cy.get('[data-testid="our-donors-page-title"]').should('be.visible');
    cy.get('[data-testid="our-donors-page-sub-title"]').should('be.visible');
    cy.get('[data-testid="our-donor-page-donor"]').should('have.length', 5);

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
