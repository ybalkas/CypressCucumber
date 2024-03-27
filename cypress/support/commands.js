// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// -- convert any data table from feature file convert into json object
Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
  })
Cypress.Commands.add('selectDropDown',(visibleText)=>{
    cy.get('select').select(visibleText).should('have.value', visibleText)

})
Cypress.Commands.add('loginToTraining',(username,password)=>{
    cy.get("#ctl00_ContentPlaceHolder1_txtUsername_txtTextBox").type(username)
    cy.get("#ctl00_ContentPlaceHolder1_txtPassword_txtTextBox").type(password)
    cy.get('#ctl00_ContentPlaceHolder1_lnkSend').click()

})