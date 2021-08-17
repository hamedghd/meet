import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });
  //
  test('render Event component', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });
  //
  test('render basic event information', () => {
    expect(EventWrapper.find('.basic-info')).toHaveLength(1);
  });
});