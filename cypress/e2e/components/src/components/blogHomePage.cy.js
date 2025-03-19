describe('Blog Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/blog-posts*', {
      fixture: 'blogPostsStrapiResponse.json',
    }).as('getNewestToOldestBlogPostsStrapiData');

    cy.visit('/blog-home');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getNewestToOldestBlogPostsStrapiData');
  });

  it('should load the header and footer and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');
    cy.get('[data-testid="footer"]').should('be.visible');
  });

  it('should load the Blog Home Page and display the title', () => {
    cy.get('[data-testid="blog-home-page-title"]')
      .should('be.visible')
      .and('contain.text', 'Blog Posts');
  });

  it('should display a grid of blog cards', () => {
    cy.get('[data-testid="blog-grid"]')
      .should('be.visible')
      .find('[data-testid="blog-card"]')
      .should('have.length.greaterThan', 0);
  });

  it('should ensure each blog card has necessary elements', () => {
    cy.get('[data-testid="blog-card"]').each((card) => {
      cy.wrap(card).within(() => {
        cy.get('[data-testid^="blog-card-landing-image-"]').should(
          'be.visible'
        );
        cy.get('[data-testid^="blog-card-title-"]').should('be.visible');
        cy.get('[data-testid^="blog-card-summary-"]').should('be.visible');
        cy.get('[data-testid^="blog-card-published-time-"]').should(
          'be.visible'
        );
        cy.get('[data-testid^="blog-card-author-"]').should('be.visible');
      });
    });
  });

  it('should verify that clicking a blog card navigates to the correct blog post', () => {
    cy.get('[data-testid="blog-card-link"]')
      .first()
      .then((link) => {
        const href = link.prop('href');
        cy.wrap(link).click();
        cy.url().should('eq', href);
      });
  });
});
