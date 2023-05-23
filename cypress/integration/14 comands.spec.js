it('get url' , () =>{
cy.visit ('/');
cy.url().should ('contain' , 'nopcommerce')
});


it('get tittle' , () =>{
    cy.visit ('/');
    cy.title().should ('contain' , 'nopCommerce')
    });



    it('go back or forward' , () =>{
        cy.visit ('/');
        cy.get('.information > .list > :nth-child(5) > a').click();
        cy.go ('back');
        cy.wait (5000)
        cy.go ('forward');
        });