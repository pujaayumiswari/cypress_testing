// example.spec.js
describe('My Vue App', () => {
  it('Visits the app', () => {
    cy.visit('/');
    cy.contains('h1', 'Hello, Vite!');
  });
});
