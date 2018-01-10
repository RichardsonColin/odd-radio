import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Ticker from '../../src/client/components/Ticker';

describe('Ticker', () => {
  const props = {
    selectedStation: {
        id: '1',
        name: 'CFBU',
        audioFeed: 'www.google.ca',
        streamType: 'audio/mp3',
        frequency: '90.1 FM',
        city: 'Hamilton',
        province: 'ON'
    }
  }

  const subject = <Ticker { ...props }/>;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });
});

describe('Ticker Station With No Frequency', () => {
  const props = {
    selectedStation: {
        id: '1',
        name: 'CFBU',
        audioFeed: 'www.google.ca',
        streamType: 'audio/mp3',
        frequency: '',
        city: 'Hamilton',
        province: 'ON'
      }
    }

    const subject = <Ticker { ...props }/>;

    it('displays all station info except station frequency', () => {
      const wrapper = shallow(subject);

      expect(wrapper.find('#ticker-freq').length).toBe(0);
    });

});