/// <reference types="Cypress" />

context('Window', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('cy.window() - get the global window object', () => {
      // https://on.cypress.io/window
      cy.get('[data-testid="3:2"]').type('1')
      cy.get('[data-testid="3:3"]').type('1')
      cy.get('[data-testid="3:3"]').should('have.css', 'background-color')
       .and('eq', 'rgb(233, 87, 63)')
      cy.get('[data-testid="4:4"]').type('2')
      cy.get('[data-testid="4:5"]').type('3')
      cy.get('[data-testid="5:4"]').type('4')
      cy.get('[data-testid="5:5"]').type('5')
      cy.get('[data-testid="4:3"]')//.contains('6789'))
      .should('to.have.value', '6789')
    })
  
   
  })
  