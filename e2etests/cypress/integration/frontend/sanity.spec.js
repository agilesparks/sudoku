/// <reference types="Cypress" />

context('Window', () => {
    beforeEach(() => {
     // cy.visit(Cypress.env('BASE_URL'))
    // cy.log(Cypress.env('BASE_URL'))
     cy.visit(Cypress.env('BASE_URL'))
    })
  
    it('cy.window() - get the global window object', () => {
      // https://on.cypress.io/window
   
      cy.get('[data-testid="3:2"]').type('1')
      cy.get('[data-testid="3:3"]').should('have.css', 'background-color')
      .and('eq', 'rgb(129, 183, 26)')
      cy.get('[data-testid="3:3"]').type('1')
      cy.get('[data-testid="3:3"]').should('have.css', 'background-color')
       .and('eq', 'rgb(233, 87, 63)')
      cy.get('[data-testid="4:4"]').type('2')
      cy.get('[data-testid="4:5"]').type('3')
      cy.get('[data-testid="5:4"]').type('4')
      cy.get('[data-testid="5:5"]').type('5')
      cy.get('[data-testid="4:3"]').should('to.have.value', '6789')
      cy.get('[data-testid="3:4"]').type('{backspace}{backspace}{backspace}')
      cy.get('[data-testid="3:5"]').should('to.have.value', '789')
      cy.get('[data-testid="3:5"]').type('{backspace}{backspace}')
      cy.get('[data-testid="4:3"]').should('to.have.value', '89')
      cy.get('[data-testid="4:3"]').type('{backspace}')
      cy.get('[data-testid="5:3"]').should('to.have.value', '9')
      cy.get('[data-testid="5:2"]').type('9')
      cy.get('[data-testid="5:3"]').should('have.css', 'background-color')
       .and('eq', 'rgb(233, 87, 63)')
    })
  
   
  })

  
  
