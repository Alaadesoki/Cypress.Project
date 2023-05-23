it ('should visible' , ()  => {
    cy.visit('/');
    cy.get('.header-logo > a > img').should ('be.visible')
    cy.get('.header-logo > a > img').should ('not.to.be.visible')
});


it ('should have text' , ()  => {
    cy.visit('/');
    cy.get('.topic-block-title').should ('have.text' , 'Welcome to our store')
    ///try to delete any thing on the text 
    cy.get('.topic-block-title').should ('have.text' , 'Welcome to store')

});

it ('should contain text' , ()  => {
    cy.visit('/');
    cy.get('.topic-block-title').should ('contain' , 'Welcome to')

});

it ('should have class' , ()  => {
    cy.visit('/');
    cy.get('#vote-poll-1').should ('have.class' , 'button-2 vote-poll-button')

});

it ('should have css' , ()  => {
    cy.visit('/');
    cy.get('.button-2 product-box-add-to-cart-button').should ('have.class' , 'background-color' , 'rgb(255,0,0)');

});

it ('should have attr' , ()  => {
    cy.visit('/');
    cy.get('.poll-vote-error').should ('have.attr' , 'id' , 'block-poll-vote-error-1');
});