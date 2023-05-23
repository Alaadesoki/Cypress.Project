it ('DbClick to the radio button' , () => {
    cy.visit ('/');
    cy.get ('#pollanswers-1').dblclick ();    
});