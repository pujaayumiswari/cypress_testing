describe("Todo List", () => {
  beforeEach(() => {
    cy.visit("/"); 
  });

  it("Adds a new todo item", () => {
    cy.get('input[placeholder="Add new item"]').type("Buy groceries");
    cy.contains("Add").click();
    cy.contains("Buy groceries").should("exist");
  });

  it("Edits a todo item", () => {
    cy.get('input[placeholder="Add new item"]').type('Buy fruits');
  cy.contains('Add').click();
  cy.contains('Buy fruits').parent().find('button').contains('Edit').click();
  cy.get('input').clear().type('Buy fresh fruits');

  cy.contains('OK').should('be.visible').click();

  cy.contains('Buy fresh fruits', { timeout: 5000 }).should('exist');
  });

  it("Deletes a todo item", () => {
    cy.get('input[placeholder="Add new item"]').type("Go for a run");
    cy.contains("Add").click();
    cy.contains("Go for a run")
      .parent()
      .find("button")
      .contains("Delete")
      .click();
    cy.contains("Go for a run").should("not.exist");
  });
});
