/// <reference types="cypress" />

describe('Test Log Out', () => {

  beforeEach(() => {
    cy.loginToApplication()
  })

  it('Verify user can log out Successfully', {retries : 2, browser:['chrome','webkit']}, () => {
    cy.contains('Settings').click()
    cy.contains('Or click here to logout.').click()
    //cy.url().should('include', '/login')
  })
    
})