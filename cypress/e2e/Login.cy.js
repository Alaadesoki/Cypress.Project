/// <reference types="cypress"/> 


/// fixtures file 
describe ('login functionality test cases' , ()=> {

it ('login with valid data' , ()=> {

cy.visit ('/'),
cy.get('.ico-login').click();
cy.url().should ('contain' , 'login')

cy.fixture('/validData').then((user) => {

    cy.get('#Email').type (user.email);
    cy.get('#Password').type (user.password);
});

cy.get('form > .buttons > .button-1').click();
cy.url().should ('equal' , 'https://demo.nopcommerce.com/');

});

});


////  fixtures with before each and alianse 

describe ('login functionality test cases' , ()=> {

    beforeEach (() => {
        cy.fixture('validData.json').as('user');
    })
it ('login with valid data' , ()=> {

cy.visit ('/'),
cy.get('.ico-login').click();
cy.url().should ('contain' , 'login')

cy.get('@user').then((user) => {

    cy.get('#Email').type (user.email);
    cy.get('#Password').type (user.password);
});

cy.get('form > .buttons > .button-1').click();
cy.url().should ('equal' , 'https://demo.nopcommerce.com/');

});

});

/// read file 


describe('login functionality test cases' , ()=> {

    it ('login with valid data' , ()=> {
    
    cy.visit ('/'),
    cy.get('.ico-login').click();
    cy.url().should ('contain' , 'login')
    
    cy.readFile('cypress/fixtures/validData.json').then((user) => {
    
        cy.get('#Email').type (user.email);
        cy.get('#Password').type (user.password);
    });
    
    cy.get('form > .buttons > .button-1').click();
    cy.url().should ('equal' , 'https://demo.nopcommerce.com/');
    
    });
    
    });


    /// wite file 

  describe.only ('login testcase' , ()=> {
    beforeEach(() => {
        cy.writeFile('cypress/fixtures/usernew.json' , {
            username: 'alaa.mostafa795@gmail.com',
            password: 'alaa1234',

        })
    })
    
    it ('login with valid data' , ()=> {

        cy.visit ('/'),
        cy.get('.ico-login').click();
        cy.url().should ('contain' , 'login')
        
        cy.readFile('cypress/fixtures/usernew.json').then((user) => {
        
            cy.get('#Email').type (user.username);
            cy.get('#Password').type (user.password);
        });
        
        cy.get('form > .buttons > .button-1').click();
        cy.url().should ('equal' , 'https://demo.nopcommerce.com/');
        
        });
        
        });