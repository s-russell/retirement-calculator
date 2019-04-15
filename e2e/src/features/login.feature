
Feature: Logging In

    Business Rules
    - Logging in successfully should redirect to the retirement calculator
    - When login is not successful, user should still be on login page
    - Attempting to navigate to the retirement calculator when not logged in should redirect to Login

    @AdHoc
    Scenario: Logging in successfully
        Given I go to the login page
        When I log in successfully
        Then I see the retirement calculator
        And The retirement calculator is prepopulated with my account info

    Scenario: Redirect to login page
        Given I am not logged in
        When I go to the retirement calculator page
        Then I am redirected to the login page