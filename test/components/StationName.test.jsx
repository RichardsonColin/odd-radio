import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import StationName from '../../src/client/components/StationName';

describe('StationName Component', () => {
  const props = {
    Style: 'test-style',
    StationFeed: jest.fn(),
    findStationExpandInfo: jest.fn()
  }

  const subject = <StationName { ...props}/>;

  it('displays div with className = this.props.style', () => {
      const wrapper = shallow(subject);

      expect(wrapper.find('.test-style').length).toBe(1);
  });

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

  describe('When clicked on', () => {
    const wrapper = shallow(subject);

    wrapper.find('.test-style').simulate('click');

    expect(props.findStationExpandInfo).toHaveBeenCalled();
  })

});

