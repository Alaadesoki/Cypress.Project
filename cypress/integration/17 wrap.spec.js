
///we can use it when we need to make sure that the price in product page same as checkout page

it ('wrap command' , () =>{

const message = 'hello all'
    cy.visit ('/');
    cy.wrap (message).should ('contains' , 'all');
    
    });