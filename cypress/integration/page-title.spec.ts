import { login } from '../page-objects/login';
import { getPageTitle } from '../page-objects/page-title';
import { setSubscriptions } from '../page-objects/subscriptions';

const TIME_TO_WAIT_FOR_BIG_FILES = 20000;

describe('page title', () => {
  beforeEach(() => {
    login();
    setSubscriptions();
  });

  it('page title displays microfrontend name', () => {
    cy.intercept('vtx-ui-mf-test.js').as('mfeModule');
    cy.visit('/');
    cy.wait('@mfeModule', { timeout: TIME_TO_WAIT_FOR_BIG_FILES });

    getPageTitle().contains(/^vtx-ui-mf-test$/);
  });
});
