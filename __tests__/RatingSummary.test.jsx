import React from 'react';
import { shallow } from 'enzyme';
import RatingSummary from '../client/src/components/RatingSummary';
import RatingSummary2 from '../client/src/components/RatingSummary2';

const mockRatings =  { accuracy_rating: { all: [Array], sum: '2.8' },
       location_rating: { all: [Array], sum: '3.7' },
       cleanliness_rating: { all: [Array], sum: '2.9' },
       communication_rating: { all: [Array], sum: '3.4' },
       value_rating: { all: [Array], sum: '3.0' },
       Check_in_rating: { all: [Array], sum: '3.1' } } 

describe(' Unit Test', () => {
    test('should render the app comonent on the screen', () => {
        const wrapper = shallow(<RatingSummary 
            ratings={ mockRatings } 
            location={3.2} 
            accuracy={3.2}
            cleanliness={3.2}/>);
        expect(wrapper).toExist();    })

          });


// ***********************************
// ratingSummary2
// ***********************************


describe(' Unit Test', () => {
    test('should render the app comonent on the screen', () => {
        const wrapper = shallow(<RatingSummary2 
            ratings={ mockRatings } 
            communication={3.2} 
            accuracy={3.2}
            Check_in={3.2}/>);
        expect(wrapper).toExist();    })

          });
