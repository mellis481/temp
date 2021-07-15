import { ProfileResponse } from '../factories/subscription';
import { routeAliases } from './route-aliases';

export const mockPlatformIntegrationProfileGetRoute = (response: ProfileResponse): void => {
  cy.intercept('GET', /platformintegration\/profile/, response).as(
    routeAliases.PlatformIntegrationProfileGet.ref
  );
};
