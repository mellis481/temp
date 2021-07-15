/**
 * Returns page title.
 */
export const getPageTitle = () => {
  return cy.get('[data-testid="page-title"]');
};
