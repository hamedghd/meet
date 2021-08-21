import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given("User visited the main page.", () => {
      AppWrapper = mount(<App />);
    });

    when('the user views the event list', () => {

    });

    then('user will see the details of the event collapsed by default', () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event-details")).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventWrapper;
    given('the event elements are collapsed', () => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    when('the user clicks on to see more', () => {
      EventWrapper.find('.event .details-btn').at(0).simulate("click");
    });

    then('the event info will be shown', () => {
      expect(EventWrapper.find('.event-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let EventWrapper;
    given('the event info is expanded', () => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
      EventWrapper.setState({
        expanded: true,
      });
      expect(EventWrapper.find('.event-details')).toHaveLength(1);
    });

    when('the user clicks to see less', () => {
      EventWrapper.find('.event .details-btn').at(0).simulate('click');
    });

    then('the event info will be hided', () => {
      expect(EventWrapper.find('.event .event-details')).toHaveLength(0);
    });
  });
});