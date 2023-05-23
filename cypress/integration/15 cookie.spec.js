it('Get Cookie' , () =>{
    cy.visit ('/');
    cy.getCookie('.Nop.Culture').should('have.property' , 'value' , 'c%3Den-US%7Cuic%3Den-US' );
    });


    it ('Get all Cookies' , () =>{
        cy.visit ('/');
        cy.getCookies();
        });

        it ('set Cookie' , () =>{
            cy.visit ('/');
            cy.setCookie ('nop', 'all');
            });


            it.only ('Get Cookies count' , () =>{
                cy.visit ('/');
                cy.getCookies() .should ('have.length' , 5);
                });

