it('then command' , () => {

        cy.visit ('/');
        cy.get('.topic-block-title > h2')
        .invoke('text')
        .then(Text => {
        cy.log (Text);
        });
            
    });