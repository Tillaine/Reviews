import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from '../client/src/components/SearchBar';

// Mock Data 
const avgRating = 3.2

const mockEventGenerator = (str) => {
    return {
      target: {
        name: 'search',
        value: str,
      },
      preventDefault: () => {},
    };
  };

// *********************************

describe('handle search', () => {
    test('should invoke the handleSearch prop when the search term is submited ', () => {
      const mockSearch = jest.fn();
      const wrapper = shallow(
        <SearchBar  
        avg={ avgRating } 
        handleSearch={ mockSearch }/>
      );
      const updateButton = wrapper.find('form').first();
      updateButton.simulate('submit', { preventDefault() {} });
      expect(mockSearch).toHaveBeenCalled();
    })
})

describe('handle change', () => {
    test('should invoke the handleChange method when the typing ', () => {
      const mockSearch = jest.fn();
      const wrapper = shallow(
        <SearchBar  
        avg={ avgRating } 
        handleSearch={ ( () => {}) }/>
      ); 
      wrapper.instance().handleChange = mockSearch;
      wrapper.instance().forceUpdate();
      wrapper.find('input').simulate('change', { target: { value: '7' } });
      expect(mockSearch).toHaveBeenCalled();
    })

    test('it should correctly update the state when a change event is emitted', () => {
        const wrapper = shallow(<SearchBar avg={ avgRating } handleSearch={ ( () => {}) }/>);
        wrapper.find('input').simulate('change', mockEventGenerator('a'));
        expect(wrapper.instance().state.searchValue).toBe('a');
      });
})

      