import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");
defineFeature(feature, test => {
  test('When the user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('the main page is opened', () => {
      AppWrapper = mount(<App />);
    });

    when('the user views a list of events', () => {
    });

    then('32 event items will be displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.find(Event)).toHaveLength(mockData.length);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the user has viewed a list of events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user changes the number of displayed events', () => {
      const eventObject = { target: { value: '1' } };
      AppWrapper.find('.event-number-input').simulate('change', eventObject);
    });

    then('a new number of events will be displayed', () => {
      AppWrapper.update();
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('1');
    });
  });
});

