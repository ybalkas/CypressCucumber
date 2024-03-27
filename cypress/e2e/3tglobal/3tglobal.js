import {Given, When, Then,And} from "cypress-cucumber-preprocessor/steps";
import contact from '../../fixtures/contact.json'
import { faker } from '@faker-js/faker';

describe('Register for 3t training ',()=>{
    Given("User On the 3t digital training page",()=>{
    cy.visit("https://training.aisgroup.co.uk/courses")
    cy.url().should('eq','https://training.aisgroup.co.uk/courses')
    })
    When("User clicks the register button",()=>{
        cy.contains('Register').first().click()
        
        })
    
    Then("User should be able to see message '<REGISTER NOW>'", () => 
    {
        cy.get("h1").should('have.text','Register Now')
        cy.url().should('eq','https://training.aisgroup.co.uk/register')
      });

    When("User create a new user with details",()=>{
        cy.get('#ctl00_ContentPlaceHolder1_txtForename').type(faker.person.fullName())
        cy.get('#ctl00_ContentPlaceHolder1_txtSurname').type(faker.person.fullName({ lastName: 'RandXy' }));
        cy.get('#ctl00_ContentPlaceHolder1_txtEmail').type(faker.internet.exampleEmail());
        cy.get('#ctl00_ContentPlaceHolder1_txtPassword').type(faker.internet.password()+'AD%3e');
        cy.get('.radio-group').eq(1).within(()=>{
            cy.contains('Yes').click()
        })
    })
    Then("User sees message User is created successfully",()=>{
            cy.get('#ctl00_ContentPlaceHolder1_btnSubmit').click()
            cy.get("h1").should('have.text','Thank You For Registering')
            })
})
describe('Sign in to Training System ',()=>{
    Given("User is on the training page",()=>{
    cy.visit("https://training.aisgroup.co.uk/")
    cy.get('#login-button').click()
    })
    When("User clicks Login to MyAIS button",()=>{
        cy.get('#login-button').click()
        
        })
    
    Then("User should be able to login", () => 
    {
        cy.loginToTraining('johnemail@gmail.com','johnEMAIL1$')
        cy.contains('Plan your career').should('have.text','Plan your career')
        cy.url().should('eq','https://training.aisgroup.co.uk/account')
      });

    
})
describe('contact us ',()=>{
Given("Navigate to web site",()=>{

cy.visit("https://www.3tglobal.com/digital/")
cy.title().should('eq','Our Digital Solutions | 3t Digital')

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
})


