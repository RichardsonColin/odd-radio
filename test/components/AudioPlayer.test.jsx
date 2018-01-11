import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
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
    },
    beforeMuteVolume: 1,
    volume: 0,
    detectWidth: jest.fn(),
    setVolume: jest.fn(),
    muteAudio: jest.fn(),
    onLoadStart: jest.fn(),
    onCanPlay: jest.fn()
  }

  const subject = <AudioPlayer { ...props } />;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

  describe('if detect width is called', () => {
    const wrapper = shallow(subject);

    it('calls the detectWidth function', () => {
      wrapper.instance().detectWidth();
    });
  });

  describe('if setVolume is called', () => {
    const wrapper = shallow(subject);

    it('calls the setVolume function', () => {
      wrapper.instance().setVolume(50);
    });
  });

  describe('if muteAudio is called', () => {
    const wrapper = shallow(subject);

    it('calls the muteAudio function', () => {
      wrapper.instance().muteAudio();
    });
  });

  describe('if state.volume is equal to 0', () => {
    const wrapper = mount(subject);

    wrapper.setState({ volume: 0, beforeMuteVolume: 1 });

    it('volume state set to state.beforeMuteVolume', () => {
      expect(wrapper.state().volume).toEqual(0);
    })
  });

  describe('if state.volume is equal to 1', () => {
    const wrapper = mount(subject);

    wrapper.setState({ volume: 1, beforeMuteVolume: 1 });

    it('volume state set to state.beforeMuteVolume', () => {
      expect(wrapper.state().volume).toEqual(1);
    })
  });
});