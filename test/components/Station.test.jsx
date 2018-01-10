import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Station from '../../src/client/components/Station';

describe('Station', () => {
  const props = {
    presets: {
      one: {},
      two: {},
      three: {},
      four: {},
      five: {}
    },
    key: '1',
    id: '1',
    name: 'QWER',
    description: 'radio station is what we are',
    audioFeed: 'www.google.ca',
    type: 'audio/mp3',
    homePage: 'www.example.com',
    city: 'Saskitoba',
    handleSelectedStation: jest.fn(),
    findStationExpandInfo: jest.fn(),
    stationType: 3,
    expandedName: 'QWER',
    expandedStation: false,
    clickFunction: jest.fn()
  }

  const subject = <Station { ...props }/>;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

  describe('fa-chevron-down onClick', () => {
    const wrapper = mount(subject);

    it('calls findStationExpandInfo', () => {

      wrapper.find('.fa-chevron-down').simulate('click');
      expect(clickFunction).toHaveBeenCalled();
    });

    it('findStationExpandInfo should set the expanded state to true', () => {
      wrapper.find('.fa-chevron-down').simulate('click');

      expect(props.findStationExpandInfo).toHaveBeenCalled();
    });
  });

  describe('when the info is expanded', () => {
    const wrapper = mount(subject);
    wrapper.setState({ expandedStation: true });

    wrapper.find('.fa-chevron-down').simulate('click');

      it('calls toggleStationInfo', () => {

        expect(wrapper.state().expandedStation).toEqual(true);
        expect(clickFunction).toHaveBeenCalled();
      });
  });
});