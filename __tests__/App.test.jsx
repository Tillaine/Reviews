import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';
import "isomorphic-fetch";

describe(' Unit Test', () => {
    test('should render the app comonent on the screen', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toExist();    })
})


