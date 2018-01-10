import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import About from '../../src/client/components/About';

describe('About', () => {

  const subject = <About />;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });
});