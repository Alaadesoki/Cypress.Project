
it ('click to the element' ,  () =>{
    cy.visit('cypress/index.html');
    cy.get('.invoice-button').last ().click();
});

it ('click to all elements' ,  () =>{
    cy.visit('cypress/index.html');
    cy.get('.invoice-button').click({multiple: true});
});


it ('click to the hidden element' ,  () =>{
    cy.visit('cypress/index.html');
    cy.get('.hidden-button').click({force: true});
});