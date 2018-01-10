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
    stationType: 1,
    expandedName: 'QWER',
    expandedStation: true
  }


  const subject = <Station { ...props }/>;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

  describe('fa-chevron-down onClick', () => {
    const wrapper = shallow(subject);



  });

  describe('when the info is expanded', () => {
    const wrapper = shallow(subject);
    wrapper.setState({ expanded: true });

    it('.info-container class should be rendered', () => {
      expect(wrapper.find('.info-container').length).toBe(1);
    });

    describe('fa-chevron-up onClick', () => {

      it('info-container no longer be rendered', () => {
        wrapper.find('.fa-chevron-up').simulate('click');

        expect(wrapper.find('.info-container').length).toBe(0);
      });
    });
  });

  describe('info container expands when expandedName is equal to details.name', () => {
    const wrapper = shallow(subject);
    wrapper.setState({ details: { name: 'QWER'}});
    // console.log(wrapper.find('.fa-chevron-up').at(0).text());

    expect(wrapper.find('.station-container1').length).toBe(1);

  })
});