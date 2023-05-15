describe ('find elements' , () => {

    it ('find element by tag name' ,  () =>{
        cy.visit('cypress/index.html');
        cy.get('h4')
    });

    it ('find element by ID' ,  () =>{
        cy.visit('cypress/index.html');
        cy.get('#courses')
    }); 

    it ('find element by class name' ,  () =>{
        cy.visit('cypress/index.html');
        cy.get('.list2')
    });

    it ('find element by attribute' , ()=> {
        cy.visit('cypress/index.html');
        cy.get ('[name="Banana"]')
    });

});

describe ('find element from the list of elements' , () => {

    it ('find first element from the list of elements' ,  () =>{
        cy.visit('cypress/index.html');
        cy.get('h4').first();
    });


    it ('find last element from the list of elements' ,  () =>{
        cy.visit('cypress/index.html');
        cy.get('h4').last();
    });

    it ('find selected element from the list of elements' ,  () =>{
        cy.visit('cypress/index.html');
        cy.get('h4').eq(1);
    });

    it ('find selected element from the list of elements' ,  () =>{
        cy.visit('cypress/index.html');
        cy.get('li').filter('.web');
    });

    it ('find children' ,  () =>{
        cy.visit('cypress/index.html');
        cy.get('.course-list').children() .eq(5);
    });

    it ('find children element' ,  () =>{
        cy.visit('cypress/index.html');
        cy.get('.course-list').find('.web');
    });


    it ('find parent element' ,  () =>{
        cy.visit('cypress/index.html');
        cy.get('.list7.web').parent();
    });

    it ('find parents element' ,  () =>{
        cy.visit('cypress/index.html');
        cy.get('.list7.web').parents();
    });


    it ('find siblings element' ,  () =>{
        cy.visit('cypress/index.html');
        cy.get('.list7.web').siblings() . filter ('.web')
    });


    it.only ('find find element by text' ,  () =>{
        cy.visit('cypress/index.html');
        cy.contains('Appium');
        cy.get('li').contains('Appium');
    });


});