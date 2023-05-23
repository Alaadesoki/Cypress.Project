
it ('write text in element' , () => {
    cy.visit ('cypress/index.html');
    cy.get ('#inputEmail').type ('alaa@cypress.com{enter}');
    
});

it ('write text in hidden element' , () => {
    cy.visit ('cypress/index.html');
    cy.get ('#coverdInput').type ('alaa@cypress.com' , {
        force: true,
        delay: 1000
      });
    
});