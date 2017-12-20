import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Station from '../../src/client/components/Station';

describe('Station', () => {
  const props = {
    key: '1',
    id: '1',
    name: 'QWER',
    description: 'radio station is what we are',
    audioFeed: 'www.google.ca',
    type: 'audio/mp3',
    homePage: 'www.example.com',
    city: 'Saskitoba',
    handleSelectedStation: jest.fn(),
    stationType: 3
  }

  const subject = <Station { ...props }/>;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

  describe('fa-chevron-down onClick', () => {
    const wrapper = shallow(subject);

    it('calls toggleStationInfo', () => {
      const toggleStationInfo = spyOn(wrapper.instance(), 'toggleStationInfo');

      wrapper.find('.fa-chevron-down').simulate('click');
      expect(toggleStationInfo).toHaveBeenCalled();
    });

    it('toggleStationInfo should set the expanded state to true', () => {
      wrapper.find('.fa-chevron-down').simulate('click');

      expect(wrapper.state().expanded).toEqual(true);
    });
  });

  describe('when the info is expanded', () => {
    const wrapper = shallow(subject);
    wrapper.setState({ expanded: true });

    it('.info-container class should be rendered', () => {
      expect(wrapper.find('.info-container').length).toBe(1);
    });

    describe('fa-chevron-up onClick', () => {

      it('calls toggleStationInfo', () => {
        const toggleStationInfo = spyOn(wrapper.instance(), 'toggleStationInfo');

        wrapper.find('.fa-chevron-up').simulate('click');

        expect(toggleStationInfo).toHaveBeenCalled();
      });

      it('info-container no longer be rendered', () => {
        wrapper.find('.fa-chevron-up').simulate('click');

        expect(wrapper.find('.info-container').length).toBe(0);
      });
    });
  });
});