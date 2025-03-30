describe('Not Found Page', () => {
  beforeEach(() => {
    cy.visit('/500');
  });

  it('should load the not found page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="dr-logo"]').should('be.visible');
    cy.get('h1').contains('ERROR 500: Sorry something went wrong on our side!');
    cy.get('a').contains('Go back home');
  });
});
