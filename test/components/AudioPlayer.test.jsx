import React from 'react';
import renderer from 'react-test-renderer';

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
});