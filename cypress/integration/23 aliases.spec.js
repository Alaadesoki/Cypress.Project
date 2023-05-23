///we use aliases to save url (alias must be in the same test case)

it('aliases in cypress' , () => {
   cy.visit ('/');
   cy.url().as ('url');
   cy.get('.topic-block-title').should ('be.visible');
   cy.get ('@url').should ('contain' , 'demo')
});

///only we can add the aliases on before each so we can access it from each test case

describe ('alias at beforeach', () => {
    beforeEach (() => { 
        cy.visit ('/');
        cy.url().as ('url');  
    });

        it('aliases ' , () => {
           cy.get ('@url').should ('contain' , 'demo')
        
        });


        it('aliases 2nd ' , () => {
            cy.get ('@url').should ('contain' , 'demo')
         
         });

});

///We can add the aliases on before each on support (index.js file)

describe.only ('alias at beforeach', () => {
   
        it('aliases 1 ' , () => {
           cy.get ('@url').should ('contain' , 'demo')
        
        });

        it('aliases 2 ' , () => {
            cy.get ('@url').should ('contain' , 'demo')
         
         });

        });