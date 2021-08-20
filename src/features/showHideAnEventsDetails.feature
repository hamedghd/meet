Feature: Show/Hide events details

  Scenario: An event element is collapsed by default
    Given User visited the main page.
    When the user views the event list
    Then user will see the details of the event collapsed by default

  Scenario: User can expand an event to see its details
    Given the event elements are collapsed
    When the user clicks on to see more
    Then the event info will be shown

  Scenario: User can collapse an event to hide its details
    Given the event info is expanded
    When the user clicks to see less
    Then the event info will be hided