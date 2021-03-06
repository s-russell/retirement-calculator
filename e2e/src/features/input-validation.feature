Feature: Validate Client Information

    Business Rules:
    - client current age must be 18 or greater
    - client retirement age must be between 50 and 80
    - client account balance must be a positive number
    - client annual income must be greater than zero
    - client savings rate must be a positive whole number

    Background: I am logged in
        Given I go to the login page
        And I log in successfully

    Scenario: The client is old enough to calculate amount for retirement
        Given the default client
        But the client's current age is 18
        When the client information is validated
        Then the client can calculate their retirement

    Scenario: The client is too young to calculate their amount for retirement
        Given the default client
        But the client's current age is 17
        When the client information is validated
        Then the client cannot calculate their retirement

    @AdHoc
    Scenario Outline: Clients retirement age range
        Given the client's retirement age is <Retirement Age>
        When the client information is validated
        Then the client <Result> calculate their retirement

        Examples: Valid
            | Retirement Age | Result |
            | 50             | can    |
            | 80             | can    |

        Examples: Invalid
            | Retirement Age | Result |
            | 49             | cannot |
            | 81             | cannot |

    Scenario: The client income is valid
        Given the client has an annual income amount of $1.00
        When the client income validation runs
        Then the client validation passes.

    Scenario: The client income invalid
        Given the client has an annual income amount of $0.00
        When the client income validation runs
        Then the client validation fails.

    Scenario: The client account balance is valid
        Given the client has an account balance of $0.00
        When the client account balance validation runs
        Then the client validation passes.

    Scenario: The client account balance is invalid
        Given the client has an account balance of $-1.00
        When the client account balance validation runs
        Then the client validation fails.

    Scenario Outline: The client savings rate must be a positive whole number
        Given the clients savings rate is <Savings Rate>%
        When the client savings rate validation runs
        Then the client validation <Result>.

        Examples: Valid
            | Savings Rate | Result |
            | 1.0          | passes |

        Examples: Invalid
            | Savings Rate | Result |
            | 0.0          | fails  |
            | 1.5          | fails  |
            | -1.0         | fails  |
