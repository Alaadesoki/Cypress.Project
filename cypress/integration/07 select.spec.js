it ('Select an elemnt from drop down list' , () => {
    cy.visit ('cypress/index.html');
    cy.get ('#courses').select ('selenium');
    
});

it ('Select an elemnt from drop down list' , () => {
    cy.visit ('cypress/index.html');
    cy.get ('#courses').select (3);
    
});
