# meet

## Introduction
Meet is a serverless, progressive web application (PWA) developed with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## User stories

Markup : 1. As a user I should be able to “filter events by city” So that I can see the list of events that take place in that city.
  i. Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
  ii. Scenario 2: User should see a list of suggestions when they search for a city.
  iii. Scenario 3: User can select a city from the suggested list.
Markup : 2. As a user, I would like to be able to show and hide an event details, so that I can view more or less information about.
  i. Scenario 1: An event element is collapsed by default.
  ii. Scenario 2: User can expand an event to see its details.
  iii. Scenario 3: User can collapse an event to hide its details. 
Markup : 3. As a user, I would like to be able to specify the number of listed events, so that I can see more or fewer items in the list of events.
  i.Scenario 1: When user hasn’t specified a number, 32 is the default number.
  ii.Scenario 2: User can change the number of events they want to see.
Markup : 4. As a user, I would like to be able to use the application offline, so that I can view my loaded events on my last online visit.
  i.Scenario 1: Show cached data when there’s no internet connection.
  ii.Scenario 2: Show error when user changes the settings (city, time range).
Markup : 5. As a user, I would like to be able to view the chart of upcoming events in the city, so that I can see the upcoming events in each city graphically.
  i.Scenario 1: Show a chart with the number of upcoming events in each city.
