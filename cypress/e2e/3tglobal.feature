Feature: 3tglobal samle tests 

Scenario: User should be able to sign in Training System
    Given User is on the training page
    When User clicks Login to MyAIS button
    Then User should be able to login

Scenario: User should be able to register for free courses
    Given User On the 3t digital training page
    When User clicks the register button
    Then User should be able to see message '<REGISTER NOW>'
     When User create a new user with details
    Then User sees message User is created successfully

Scenario: User should be able to fill contact info and send successfully
    Given Navigate to web site
    When User clicks contact button
    And User fills all info to be contacted

     



