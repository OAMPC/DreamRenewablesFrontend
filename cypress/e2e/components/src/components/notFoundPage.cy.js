describe('Not Found Page', () => {
  beforeEach(() => {
    cy.visit('/not-a-real-url');
  });

  it('should load the not found page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="dr-logo"]').should('be.visible');
    cy.get('h1').contains('404 Sorry this page cannot be found');
    cy.get('a').contains('Go back home');
  });
});
