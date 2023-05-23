it ('Hover Over on an element' , () => {
    cy.visit ('/');
    cy.get('.ico-register').trigger ('mouseover');
});

it ('Hover out on an element' , () => {
    cy.visit ('/');
    cy.get('.ico-register').trigger ('mouseout');
});

it.only ('long press on an element' , () => {
    cy.visit ('/');
    cy.get('#customerCurrency').trigger ('mousedown');
    cy.wait (5000)
    cy.get('#customerCurrency').trigger ('mouseup');

});

it ('remove the  press from an element' , () => {
    cy.visit ('/');
    cy.get('#customerCurrency').trigger ('mouseup');
    cy.wait (5000)
});