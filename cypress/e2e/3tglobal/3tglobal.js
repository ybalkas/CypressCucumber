import {Given, When, Then,And} from "cypress-cucumber-preprocessor/steps";
import contact from '../../fixtures/contact.json'
//import contact from 'cypress/fixtures/contact.json'
let sum=0 ;
Given("Navigate to web site",()=>{

cy.visit("https://www.3tglobal.com/digital/")
cy.title().should('eq','Our Digital Solutions | 3t Digital')
//cy.url().should('eq','https://www.3tglobal.com/digital')
})

When("User clicks contact button",()=>{
   
    cy.get('.bars').first().click()
    cy.get("[href='https://www.3tglobal.com/contact/']").eq(1).click({force:true})
    })

And("User fills all info to be contacted", () => 
{ 
    cy.get("[href='https://www.3tglobal.com/contact/']").eq(1).click({force:true})
    cy.url().should('eq','https://www.3tglobal.com/contact/')
    cy.fixture('contact').then((contactFixture) => {
    cy.get('#input_6_1').type(contactFixture.FirstName)
       cy.get('#input_6_3').type(contactFixture.Surname);
       cy.get('#input_6_4').type(contactFixture.Company);
       cy.get('#input_6_5').type(contactFixture.JobTitle);
       cy.get('#input_6_18').type(contactFixture.PhoneNumber);
       cy.get('#input_6_6').type(contactFixture.Email);
       cy.get('#input_6_8').type(contactFixture.Message);
       cy.selectDropDown('UK')
       cy.get('#input_6_9_1').click()
       //Note after that point should be verified by disabling captcha or manually
      })
});

