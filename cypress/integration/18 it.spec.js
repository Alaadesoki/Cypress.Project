
it ('wrap command' , () =>{

    ///access on property
    const student = {
        name: 'alaa',
        family: 'desoki',
        iswatching: function(){
            console.log ('he is watching');
        },
    }

        cy.visit ('/');
        cy.wrap (student).its('name').should('eql','alaa');
        
        });