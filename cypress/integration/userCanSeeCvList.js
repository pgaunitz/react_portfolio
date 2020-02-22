describe('User can see CV', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#cv-tab').click();
    })
  
    it('displays Education', () => {
      cy.get('#cv-1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Company');
        cy.get('.description').should('contain', 'Description');
      })
    });
  
    it('displays job', () => {
      cy.get('#cv-2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Company');
        cy.get('.description').should('contain', 'Description');
      })
    });
    it('displays other xp', () => {
      cy.get('#cv-3').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Company');
        cy.get('.description').should('contain', 'Description');
      })
    });
  
  
     
  });