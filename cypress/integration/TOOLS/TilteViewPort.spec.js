/// <reference types="cypress" />

describe("SUite", function () {

    before(function () {
        cy.visit("https://www.bbc.co.uk/sport/football/scores-fixtures")
    })

    it("title", function () {
        cy.title().then(txt => {
            cy.log(txt)
        })
        cy.log(cy.title())
    })

    it("viewport ", () => {

        cy.viewport('ipad-2', 'landscape');
    })

    
})