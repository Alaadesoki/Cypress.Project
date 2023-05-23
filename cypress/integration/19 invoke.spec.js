
    ///access on method

it ('invoke command' , () =>{

    const student = {
        name: 'alaa',
        family: 'desoki',
        iswatching: function(){
            return 'hello ' + this.name;
        },
    }

        cy.visit ('/');
        cy.wrap (student).invoke('iswatching');
        
        });