it ('RightClick to the radio button' , () => {
    cy.visit ('/');
    cy.get('.my-account > .list > :nth-child(6) > a').rightclick
});