describe('User can see CV', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#cv-tab').click();
    })
  
    it('displays Work ', () => {
      cy.get('#cv-1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Work experience');
        cy.get('.date').should('contain', 'Year');
        cy.get('.description').should('contain', 'Description');
      })
    });
  
    it('displays School', () => {
      cy.get('#cv-2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Education');
        cy.get('.date').should('contain', 'Year');
        cy.get('.description').should('contain', 'Description');
      })
    });
   
  
  
     
  });