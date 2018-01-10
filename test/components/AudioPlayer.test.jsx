import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import AudioPlayer from '../../src/client/components/AudioPlayer';

describe('AudioPlayer', () => {
  const props = {
    stationFeed: {
      type: 'audio/mpeg',
      stream: 'www.streamlink.ca',
      id: '1',
      name: 'Jest Test Stream'
    },
    seekStation: jest.fn(),
    playState: {
      volume: 1,
      isPlaying: false,
      isPaused: true,
      isLoading: false
    },
    mockPlayer: {
      load: jest.fn(),
      play: jest.fn(),
      volume: jest.fn()
    },
    presets: {
      one: {},
      two: {},
      three: {},
      four: {},
      five: {}
    }
  }

  const subject = <AudioPlayer { ...props } />;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

  // describe('if state.volume is equal to 0', () => {
  //   const wrapper = shallow(subject);
  //   // console.log('sebsebseb..... ', wrapper.state());

  //   wrapper.setState({ volume: 0, beforeMuteVolume: .5 });

  //   it('volume state set to state.beforeMuteVolume', () => {
  //     // console.log('sebsebseb..... ', wrapper.state());
  //     expect(wrapper.state().volume).toEqual(false);
  //   })
  // });

});