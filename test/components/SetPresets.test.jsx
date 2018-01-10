import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import SetPresets from '../../src/client/components/SetPresets';

describe('Set Presets Component', () => {
    const props = {
    presets: {
      one: {name: 'CMYK'},
      two: {name: 'CMYK'},
      three: {name: 'CMYK'},
      four: {name: 'CMYK'},
      five: {name: 'CMYK'}
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

  const subject = <SetPresets { ...props } />;
  const subject2 = <SetPresets { ...props2} />

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

  describe('when preset one is clicked', () => {
    const wrapper = shallow(subject);
    wrapper.find('.presets-station').at(0).simulate('click');

    expect(props.clickFunction).toHaveBeenCalled();
  })

  describe('when preset two is clicked', () => {
    const wrapper = shallow(subject);
    wrapper.find('.presets-station').at(1).simulate('click');
    expect(props.clickFunction).toHaveBeenCalled();

  })

  describe('when preset three is clicked', () => {
    const wrapper = shallow(subject);
    wrapper.find('.presets-station').at(2).simulate('click');
    expect(props.clickFunction).toHaveBeenCalled();

  })

  describe('when preset four is clicked', () => {
    const wrapper = shallow(subject);
    wrapper.find('.presets-station').at(3).simulate('click');
    expect(props.clickFunction).toHaveBeenCalled();

  })

  describe('when preset five is clicked', () => {
    const wrapper = shallow(subject);
    wrapper.find('.presets-station').at(4).simulate('click');
    expect(props.clickFunction).toHaveBeenCalled();

  })

  describe('on load has five <p> tags', () => {
    const wrapper = shallow(subject);
    expect(wrapper.find('p').length).toBe(5);
  })

  describe('when station 1 is saved to the preset should display that stations name', () => {
    const wrapper = shallow(subject);
    console.log(wrapper.find('p').at(0).text());
    expect(wrapper.find('p').at(0).text()).toBe('CMYK');
  })

  describe('when a station 1 is not saved to the preset should display empty', () => {
    const wrapper = shallow(subject2);
    expect(wrapper.find('p').at(0).text()).toBe('Empty');
  })

  describe('when a station 2 is saved to the preset should display that stations name', () => {
    const wrapper = shallow(subject);
    console.log(wrapper.find('p').at(1).text());
    expect(wrapper.find('p').at(1).text()).toBe('CMYK');
  })

    describe('when a station 2 is not saved to the preset should display empty', () => {
    const wrapper = shallow(subject2);
    expect(wrapper.find('p').at(1).text()).toBe('Empty');
  })






});