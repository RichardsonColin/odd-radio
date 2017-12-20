import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import PlayerButtons from '../../src/client/components/PlayerButtons';

describe('PlayerButtons', () => {
  const props = {
    activeStation: true,
    playState: {
        volume: 1,
        isPlaying: false,
        isPaused: true,
        isLoading: false
      },
    playPause: jest.fn()
  }

  const subject = <PlayerButtons { ...props }/>;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

  describe('it should have one <i> component', () => {
    const wrapper = shallow(subject);
    expect(wrapper.find('i').length).toBe(1);;
  });

});