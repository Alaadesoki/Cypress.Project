it ('change clock' , () =>{

    let now = new date ('2018 02 01');

    cy.clock(now);
    cy.visit ('/');
    
    });