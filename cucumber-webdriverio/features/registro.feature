Feature: Register into losestudiantes
    As an user I want to register within losestudiantes website in order to rate teachers

Scenario: Sign up failed without accepting terms

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill random info
    And I try to sign up
    Then I expect to view error message

Scenario: Sign up failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I click accept
    And I try to sign up
    Then I expect to view error sign

Scenario: Sign up successful with right inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill random info
    And I click accept
    And I try to sign up
    Then I expect to be able to logout