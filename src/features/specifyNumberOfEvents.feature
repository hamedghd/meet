Feature: specify the number of events

  Scenario: When the user hasn't specified a number, 32 is the default number
    Given the main page is opened
    When the user views a list of events
    Then 32 event items will be displayed

  Scenario: User can change the number of events they want to see
    Given the user has viewed a list of events
    When the user changes the number of displayed events
    Then a new number of events will be displayed