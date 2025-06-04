/// <reference types="cypress" />

describe('Test Shadow DOM', () => {

    it('Verify Shadow DOM content', () => {
        cy.visit('https://radogado.github.io/shadow-dom-demo/')
        cy.get('#app').shadow().find('#container')
    })

       /*
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/shadowdom')
    })
    
    it('Verify Shadow DOM content', () => {
        cy.get('#shadow-host').shadow().find('.shadow-content').should('contain', 'This is the shadow DOM content')
    })
    
    it('Verify Shadow DOM button click', () => {
        cy.get('#shadow-host').shadow().find('.shadow-button').click()
        cy.get('#shadow-host').shadow().find('.shadow-content').should('contain', 'Button clicked!')
    })
        */
})