describe('Our Mission Vision and Values Page', () => {
  beforeEach(() => {
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
    cy.get('[data-testid="omvvp-section"]').should('have.length', 3);
    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
