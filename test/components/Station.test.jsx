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

    it('calls onInfoSelect', () => {
      const onInfoSelect = spyOn(wrapper.instance(), 'onInfoSelect');

      wrapper.find('.fa-chevron-down').simulate('click');
      expect(onInfoSelect).toHaveBeenCalled();
    });

    // describe('with info unhidden fa-chevron-up onClick', () => {
    //   it('calls onInfoSelect', () => {
    //      wrapper.find('.fa-chevron-up').simulate('click');
    //      expect(onInfoSelect).toHaveBeenCalled();
    //   });
    // });
  });

  describe('playbutton onClick', () => {
    const wrapper = shallow(subject);

    it('calls a function', () => {
      wrapper.find('.fa-play').simulate('click');
      expect(props.handleSelectedStation).toHaveBeenCalled();
    });
  });

  // it('should have a stationType', () => {
  //   const wrapper = shallow(subject);

  //   // expect(wrapper.find({ prop: 'stationType' })).to.have.length(1);
  // });
});