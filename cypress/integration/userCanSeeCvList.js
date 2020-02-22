describe('User can see CV', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#cv-tab').click();
    })
  
    it('displays Education', () => {
      cy.get('#cv-1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Education');
        cy.get('.description').should('contain', 'Degree');
      })
    });
  
    it('displays job', () => {
      cy.get('#cv-2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Work experience');
        cy.get('.description').should('contain', 'Job');
      })
    });
    it('displays other xp', () => {
      cy.get('#cv-3').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Other');
        cy.get('.description').should('contain', 'Other');
      })
    });
  
  
     
  });