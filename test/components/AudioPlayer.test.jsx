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
    seekStation: jest.fn()
  }

  const subject = <AudioPlayer { ...props }/>;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

  describe('onClick', () => {
    const wrapper = shallow(subject);

    it('calls the function sent in by props', () => {
      wrapper.find('#pButton').simulate('click');
    });
  });
});