import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';
import "isomorphic-fetch";

const testReview = {
  id: 7,
  user_name: 'iwillan6',
  property_id: 2159,
  message:
   'design jobs non-competitive. Vape typewriter retro, slow-carb coloring book man braid mixtape next level letterpress raw denim viral craft beer beard',
  date_created: '2019-11-30T07:00:00.000Z',
  user_img_url: 'http://dummyimage.com/130x152.jpg/cc0000/ffffff',
  accuracy_rating: 2.6,
  location_rating: 2.5,
  cleanliness_rating: 3.8,
  communication_rating: 3.6,
  value_rating: 2.2,
  Check_in_rating: 4.3 }

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


})


