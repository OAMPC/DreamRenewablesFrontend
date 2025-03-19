describe('Blog Post Template Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/blog-posts*', {
      fixture: 'blogPostsStrapiResponse.json',
    }).as('getBlogPostStrapiData');

    cy.visit('/blog/test-blog-post');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getBlogPostStrapiData');
  });

  it('should load a blog template page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');

    cy.get('[data-testid="landing-image"]').should('be.visible');
    cy.get('[data-testid="blog-post-title"]').should('be.visible');
    cy.get('[data-testid="blog-post-summary"]').should('be.visible');
    cy.get('[data-testid="blog-post-published-time"]').should('be.visible');
    cy.get('[data-testid="blog-post-author"]').should('be.visible');
    cy.get('[data-testid="markdown-component"]').should('be.visible');

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
