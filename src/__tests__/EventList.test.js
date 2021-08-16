import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';

// This test will only pass if EventList renders exactly four events from its prop events.
describe('<EventList /> component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={[{}, {}, {}, {}]} />);
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
});