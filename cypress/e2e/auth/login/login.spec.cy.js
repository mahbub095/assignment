/// <reference types="cypress" />

describe('auth/login', () => {
  let credentials;

  before(() => {
    cy.fixture('auth/credentials.json').then((data) => {
      credentials = data;
    });
  })

  it('should login', async () => {
    cy.visit('/');

    cy.get('.close-dialog').click();

    cy.get('#navbarAccount > .mat-button-wrapper > span').should('contain', 'Account');
    cy.get('#navbarAccount > .mat-button-wrapper > span').click();

    cy.get('#navbarLoginButton').should('contain', 'Login');
    cy.get('#navbarLoginButton').click();

    cy.get('input[name="email"]').type(credentials.email);
    cy.get('input[name="password"]').type(credentials.password);

    cy.get('#loginButton').should('contain', 'Log in');
    cy.get('#loginButton').click();

  });
})