import React from 'react';
import { shallow } from 'enzyme';
import ReviewList from '../client/src/components/ReviewList';
import Review from '../client/src/components/Review';


const reviews = { reviews:
    [ {
        id: 1,
        user_name: 'sgiggs0',
        property_id: 1949,
        message:
         'Microdosing hot chicken tumblr vice, man bun authentic lo-fi pop-up lumbersexual squid. You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text',
        user_img_url: 'http://dummyimage.com/250x135.png/ff4444/ffffff',
        date_created: '2019-07-25T06:00:00.000Z',
        accuracy_rating: 5,
        location_rating: 3.4,
        cleanliness_rating: 1.2,
        communication_rating: 4.9,
        value_rating: 3.2,
        Check_in_rating: 1.8 },
      {
        id: 2,
        user_name: 'lviant1',
        property_id: 2005,
        message:
         'It could be Russia, but it could also be China. It also could be some wordsmith sitting on their bed that weights 400 pounds',
        date_created: '2019-09-25T06:00:00.000Z',
        user_img_url: 'http://dummyimage.com/232x166.bmp/cc0000/ffffff',
        accuracy_rating: 2.8,
        location_rating: 3,
        cleanliness_rating: 2.2,
        communication_rating: 3.2,
        value_rating: 3.8,
        Check_in_rating: 2.7 },
      {
        id: 3,
        user_name: 'lwellard2',
        property_id: 1100,
        message:
         'An \'extremely credible source\' has called my office and told me that Lorem Ipsum\'s birth certificate is a fraud. Mumblecore single-origin coffee distillery, green juice flannel butcher four loko master cleanse hammock hella 8-bit',
        date_created: '2019-05-10T06:00:00.000Z',
        user_img_url: 'http://dummyimage.com/115x220.png/cc0000/ffffff',
        accuracy_rating: 2.4,
        location_rating: 4.3,
        cleanliness_rating: 4,
        communication_rating: 4.5,
        value_rating: 4.2,
        Check_in_rating: 2.2 },
      {
        id: 4,
        user_name: 'vtosdevin3',
        property_id: 1581,
        message:
         'The best taco bowls are made in Trump Tower Grill. Lorem Ipsum\'s father was with Lee Harvey Oswald prior to Oswald\'s being, you know, shot',
        date_created: '2019-05-20T06:00:00.000Z',
        user_img_url: 'http://dummyimage.com/161x161.png/5fa2dd/ffffff',
        accuracy_rating: 1.2,
        location_rating: 4.6,
        cleanliness_rating: 1.8,
        communication_rating: 1.4,
        value_rating: 2.5,
        Check_in_rating: 4 },
      {
        id: 5,
        user_name: 'gbarsham4',
        property_id: 1760,
        message:
         'Marfa tbh yuccie, iceland flannel jean shorts pitchfork skateboard. Letterpress dreamcatcher cronut fanny pack +1 bushwick',
        date_created: '2019-09-08T06:00:00.000Z',
        user_img_url: 'http://dummyimage.com/115x142.png/ff4444/ffffff',
        accuracy_rating: 4.5,
        location_rating: 3.7,
        cleanliness_rating: 4.6,
        communication_rating: 3.7,
        value_rating: 4.7,
        Check_in_rating: 1.5 },
      {
        id: 6,
        user_name: 'traynham5',
        property_id: 1241,
        message:
         'Listicle succulents hot chicken bitters lomo kombucha bicycle rights synth tbh swag. The best taco bowls are made in Trump Tower Grill',
        date_created: '2019-10-30T06:00:00.000Z',
        user_img_url: 'http://dummyimage.com/219x167.jpg/dddddd/000000',
        accuracy_rating: 1.9,
        location_rating: 4.1,
        cleanliness_rating: 4.3,
        communication_rating: 2.6,
        value_rating: 3.4,
        Check_in_rating: 4.4 },
      {
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
        Check_in_rating: 4.3 },
      {
        id: 8,
        user_name: 'hgregorace7',
        property_id: 1419,
        message:
         'Some people have an ability to write placeholder text… It’s an art you’re basically born with. Lyft viral air plant direct trade',
        date_created: '2019-12-05T07:00:00.000Z',
        user_img_url: 'http://dummyimage.com/136x111.png/dddddd/000000',
        accuracy_rating: 2.8,
        location_rating: 4.8,
        cleanliness_rating: 2.9,
        communication_rating: 2.7,
        value_rating: 1.3,
        Check_in_rating: 4.7 },
      {
        id: 9,
        user_name: 'schantrell8',
        property_id: 1178,
        message:
         'An ‘extremely credible source’ has called my office and told me that Lorem Ipsum’s birth certificate is a fraud. Despite the constant negative ipsum covfefe',
        date_created: '2019-10-29T06:00:00.000Z',
        user_img_url: 'http://dummyimage.com/206x170.jpg/cc0000/ffffff',
        accuracy_rating: 3,
        location_rating: 4.1,
        cleanliness_rating: 2.2,
        communication_rating: 3.1,
        value_rating: 2,
        Check_in_rating: 3.1 },
      {
        id: 10,
        user_name: 'aswainsbury9',
        property_id: 1051,
        message:
         'The best taco bowls are made in Trump Tower Grill. Austin flannel banh mi chartreuse gastropub',
        date_created: '2019-10-11T06:00:00.000Z',
        user_img_url: 'http://dummyimage.com/199x191.jpg/cc0000/ffffff',
        accuracy_rating: 1.3,
        location_rating: 2.6,
        cleanliness_rating: 2,
        communication_rating: 3.8,
        value_rating: 2.7,
        Check_in_rating: 2.7 } ],
   ratings: { 
    AvgRating: '3.2',
    ratingSum: { accuracy_rating: { all: [Array], sum: '2.8' },
       location_rating: { all: [Array], sum: '3.7' },
       cleanliness_rating: { all: [Array], sum: '2.9' },
       communication_rating: { all: [Array], sum: '3.4' },
       value_rating: { all: [Array], sum: '3.0' },
       Check_in_rating: { all: [Array], sum: '3.1' } } }
      }

      test('should render 9 reviews components', () => {
        const wrapper = shallow(
          <ReviewList 
          reviews={ reviews.reviews }/>
        );
        expect(wrapper.find(Review)).toHaveLength(10);
      });