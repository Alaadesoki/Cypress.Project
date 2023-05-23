it ('focus & blur' , () => {
    cy.visit ('/');
    cy.get('#small-searchterms').focus();
    cy.get('#small-searchterms').blur();
});