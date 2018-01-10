import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Team from '../../src/client/components/Team';

describe('TeamComponent', () => {

  const subject = <Team />;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });
});