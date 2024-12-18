describe('Our Mission Vision and Values Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/navigation-bar*', {
      fixture: 'navigationBarStrapiResponse.json',
    }).as('getNavigationBarStrapiData');

    cy.intercept('GET', '**/api/footer*', {
      fixture: 'footerStrapiResponse.json',
    }).as('getFooterStrapiData');

    cy.intercept('GET', '**/api/mission-vision-and-values-page*', {
      fixture: 'ourMissionVisionAndValuesPageStrapiResponse.json',
    }).as('getOurMissionVisionAndValuesPageStrapiData');

    cy.visit('/our-mission-vision-and-values');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getOurMissionVisionAndValuesPageStrapiData');
  });

  it('should load the our mission vision and values page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');

    cy.get('[data-testid="our-mission-section"]').should('be.visible');
    cy.get('[data-testid="our-vision-section"]').should('be.visible');
    cy.get('[data-testid="our-values-section"]').should('be.visible');

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
