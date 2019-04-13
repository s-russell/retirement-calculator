Feature: A clients retirement amount is calculated correctly

    Business Rules:
    - client current age must be 18 or greater
    - client retirement age must be between 50 and 80
    - client account balance must be a positive number
    - client annual income must be greater than zero
    - client savings rate must be a positive whole number

    Background: I am logged income
        Given I have logged in successfully

    Scenario: A Client who is eligible for retirement amount calculation
        Given the clients current age is 18
        And the clients retirement age is 50
        And the client has an account balance of $20,000
        And the client has an annual income amount of $50,000
        And the clients savings rate is 1.0%
        When the retirement amount is calculated
        Then the clients retirement amount is $14,2097.25.

    Scenario: A Client who has zero account balance
        Given the client has entered VALID retirement amount calculation information
        But the client has an account balance of $0.00
        When the retirement amount is calculated
        Then the clients retirement amount is $42,033.48.

    Scenario: A Client who has invalid retirement age
        Given the client has entered VALID retirement amount calculation information
        But the clients current age is 18
        And the clients retirement age is 18
        And the client has an account balance of $0.00
        When the retirement amount is calculated
        Then the clients retirement amount is $0.00.

    Scenario: A Client who is not eligible for retirement amount calculation
        Given the client has entered VALID retirement amount calculation information
        But the clients current age is 17
        When the retirement amount is calculated
        Then the retirement validator fails.