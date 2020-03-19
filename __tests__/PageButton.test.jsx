import React from 'react';
import { shallow } from 'enzyme';

import PageButton from '../client/src/components/PageButton';

describe('Render Tests', () => {
    test('render a button for each page', () => {
      const wrapper = shallow(
        <PageButton 
        pageNumber={1}
        handlePageClick={() => {}} />
      );
      expect(wrapper.find('.pageButton')).toHaveLength(1);
    });
  });