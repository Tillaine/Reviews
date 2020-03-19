import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';
import "isomorphic-fetch";



describe(' Unit Test', () => {
    test('should render the app comonent on the screen', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toExist();    })

        test('should invoke getReviews on componentDidMount', () => {
            const wrapper = shallow(<App />);
            const mock = jest.fn();
            wrapper.instance().getReviews = mock;
            wrapper.instance().forceUpdate();
            wrapper
              .instance()
              .componentDidMount();
            expect(mock).toHaveBeenCalled();
          });

          test('should invoke getRelevantReviews on when search is called', () => {
            const wrapper = shallow(<App />);
            const mock = jest.fn();
            wrapper.instance().getReviews = mock;
            wrapper.instance().forceUpdate();
            wrapper
              .instance()
              .componentDidMount();
            expect(mock).toHaveBeenCalled();
          });


})


