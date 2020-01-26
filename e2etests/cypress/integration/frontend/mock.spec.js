import {
    getPossibleSolutionsBaseMock
} from "./mocks";

/// <reference types="Cypress" />

context('Window', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('BASE_URL'))
    })

    it('test with mock', () => {
        cy.server()
        let myMock = getPossibleSolutionsBaseMock()
        console.log(myMock)
        myMock[0][0].solution = "6789"
        cy.route('POST', "http://localhost:3001/api/possibleSolutions",
            {
                success: true, data: {possibleSolutions: myMock}
            })

        cy.get('[data-testid="3:2"]').type('1')
        cy.get('[data-testid="0:0"]').should('to.have.value', '6789')
    })




})



