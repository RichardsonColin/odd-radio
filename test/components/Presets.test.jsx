import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Presets from '../../src/client/components/Presets';

describe('Presets Component', () => {
    const props = {
      presets: {
        one: {name: 'CMYK'},
        two: {name: 'CMYK'},
        three: {name: 'CMYK'},
        four: {name: 'CMYK'},
        five: {name: 'CMYK'}
    },
      title:"Presets",
      clickFunction: jest.fn(),
      style: "audio-player-presets",
      stationFeed: {
        name: 'CMYK'
      }
    }

    const props2 = {
      presets: {
      one: {},
      two: {},
      three: {},
      four: {},
      five: {}
    },
    title:"Save Station in Presets",
    clickFunction: jest.fn(),
    details: {
       id: '1',
       name: 'QWER',
       audioFeed: 'www.google.ca',
       streamType: 'audio/mp3',
       frequency: '91.2 FM',
       city: 'Hamilton',
       province: 'ON'
     }

    }

  const subject = <Presets { ...props } />;
  const subject2 = <Presets { ...props2} />

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

  describe('when preset one is clicked', () => {
    const wrapper = shallow(subject);
    wrapper.find('.five').at(0).simulate('click');

    expect(props.clickFunction).toHaveBeenCalled();
  })

  describe('when preset two is clicked', () => {
    const wrapper = shallow(subject);
    wrapper.find('.five').at(1).simulate('click');

    expect(props.clickFunction).toHaveBeenCalled();
  })

  describe('when preset three is clicked', () => {
    const wrapper = shallow(subject);
    wrapper.find('.five').at(2).simulate('click');

    expect(props.clickFunction).toHaveBeenCalled();
  })

  describe('when preset four is clicked', () => {
    const wrapper = shallow(subject);
    wrapper.find('.five').at(3).simulate('click');

    expect(props.clickFunction).toHaveBeenCalled();
  })

  describe('when preset five is clicked', () => {
    const wrapper = shallow(subject);
    wrapper.find('.five').at(4).simulate('click');

    expect(props.clickFunction).toHaveBeenCalled();
  })


});