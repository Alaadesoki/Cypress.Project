it ('Click to the radio button' , () => {
    cy.visit ('/');
    cy.get ('#pollanswers-1').check ();    
});
