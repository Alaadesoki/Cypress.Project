/// <reference types="cypress" />

describe('login functionality' , function () {
    before ( function(){
        cy.log ('i am inside befor hook');
    });

    this.beforeEach ( function(){
        cy.log ('i am inside befor each hook');
    });

    it('login with valid data' , function () {
        cy.log ('i am inside the test case');
    } );
} );



context('order functionality' , function () {

    it('order food' , function () {
        cy.log ('i am inside test case 2');
    } );

    it('order new food' , function () {
        cy.log ('i am inside test case 3');
    } );
} );

after ( function(){
    cy.log ('i am inside befor hook');
});

afterEach ( function(){
    cy.log ('i am inside befor each hook');
});

