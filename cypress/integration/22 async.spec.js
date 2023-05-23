it('async in cypress' , () => {

    let message = 'Hi' ;
///when the expect inside then we can get the message after changed 
/// but if we add it outside then it will return the original message 
    cy.visit ('/');
    cy.get('.topic-block-title')
    .invoke('text') 
    .then ((text) => {
        message = text; 
        expect (message).to.eql ('Welcome to our store')
    })
});