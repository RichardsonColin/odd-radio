import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import StationList from '../../src/client/components/StationList';

describe('StationList', () => {
  const props = {
    handleSelectedStation: jest.fn(),
    stations: [{
        id: 1,
        name: 'CFCR',
        audio_feed: 'http://onair.cfcr.ca/hifi.mp3',
        home_page: 'http://cfcr.ca/',
        city: 'Saskatoon',
        province: 'SK',
        description: 'CFCR 90.5 FM Community Radio is a non-profit corporation owned by the Community Radio Society of Saskatoon. We are a volunteer powered, listener supported organization serving the alternative radio needs of Saskatoon and surrounding areas.',
        frequency: '90.5 FM',
        language: 'English',
        stream_type: 'audio/mp3'
    },
       {
        id: 2,
        name:'CFMU' ,
        audio_feed: 'http://138.197.136.105:8000/mount.128mp3' ,
        home_page:'http://cfmu.ca/' ,
        city: 'Hamilton',
        province:'ON',
        description:'93.3 CFMU-FM, Canada’s third oldest campus / community radio station, has been redefining radio for over 25 years, delivering daily the most enlightening, innovative and entertaining programming in our broadcast area.',
        frequency: '93.3 FM',
        language:'English' ,
        stream_type: 'audio/mp3'
      }]
  }

  const subject = <StationList { ...props }/>;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });


});