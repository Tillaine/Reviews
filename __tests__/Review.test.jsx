import React from 'react';
import { shallow } from 'enzyme';
import ReviewList from '../client/src/components/ReviewList';
import Review from '../client/src/components/Review';
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

describe('Render Tests', () => {
    test('should render the correct user name', () => {
      const wrapper = shallow(
        <Review 
        key={testReview.id} 
        imageId={() => {}} 
        review={testReview}/>
      );
      expect(wrapper.find('.userName')).toHaveLength(1);
      expect(wrapper.find('.userName').text()).toBe(' iwillan6 ');
    });
  });