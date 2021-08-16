import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';

describe('<CitySearch /> component', () => {
  // Here, the test checks whether an element with the class name city exists within the CitySearchWrapper component.
  test('render text input', () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });
  // This test checks for the existence of an element with the class name suggestions in the CitySearchWrapper.
  test('renders a list of suggestions', () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });
  // This test compares the value prop of each element that has the class city found within the CitySearch component,
  // and checks if the input field's value prop is equal to what’s in the CitySearch query state, only passing if the two match.
  test('renders text input correctly', () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });
  // 
  test('change state when text input changes', () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    CitySearchWrapper.setState({
      query: 'Munich'
    });
    const eventObject = { target: { value: 'Berlin' } };
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });
  //
  test('render list of suggestions correctly', () => {
    const locations = extractLocations(mockData);
    const CitySearchWrapper = shallow(<CitySearch />);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });
});