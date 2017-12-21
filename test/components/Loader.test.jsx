import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Loader from '../../src/client/components/Loader';

describe('Loader', () => {

  const subject = <Loader />;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });
});