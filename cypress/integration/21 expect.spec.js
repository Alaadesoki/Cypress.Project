it('expect command' , () => {

    cy.visit ('/');
    cy.get('.topic-block-title > h2')
    .invoke('text')
    .then(returnedText => {
    expect(returnedText).to.eql('Welcome to our store')
    });
        
});