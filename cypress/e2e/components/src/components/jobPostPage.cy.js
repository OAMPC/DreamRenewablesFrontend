describe('Job Post Template Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/job-posts*', {
      fixture: 'jobPostsStrapiResponse.json',
    }).as('getJobPostStrapiData');

    cy.visit('/job-post/test-job-post');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getJobPostStrapiData');
  });

  it('should load a job post template page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');

    cy.get('[data-testid="landing-image"]').should('be.visible');
    cy.get('[data-testid="job-post-title"]').should('be.visible');
    cy.get('[data-testid="job-post-summary"]').should('be.visible');
    cy.get('[data-testid="job-post-contact-email"]').should('be.visible');
    cy.get('[data-testid="markdown-component"]').should('be.visible');

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
