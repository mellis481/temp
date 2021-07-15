import { makeFakeToken } from '../factories/token';

export const setLocalStorageOverride = () => {
  localStorage.setItem(
    'import-map-override:vtx-ui-mf-test',
    '//localhost:9001/vtx-ui-mf-test.js'
  );
};

export const login = (username?: string) => {
  const tokenOverride = username ? { profile: { name: username } } : undefined;
  const token = makeFakeToken(tokenOverride);
  sessionStorage.setItem(Cypress.env('authCookieName'), JSON.stringify(token));
  setLocalStorageOverride();
};
