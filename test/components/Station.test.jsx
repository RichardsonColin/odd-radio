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
    findStationExpandInfo: jest.fn(),
    stationType: 3,
    expandedName: 'QWER'
  }

  const subject = <Station { ...props }/>;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

  describe('fa-chevron-down onClick', () => {
    const wrapper = shallow(subject);

    it('calls findStationExpandInfo', () => {
      wrapper.find('.fa-chevron-down').simulate('click');

      expect(props.findStationExpandInfo).toHaveBeenCalled();
    });
  });

  describe('if props.expandedName === state.details.name && props.expandedState === true, the info container should be expanded', () => {
    const wrapper = shallow(subject);

    wrapper.find('.fa-chevron-down').simulate('click');

    console.log(wrapper.find('.fa-chevron-up').length);

    expect(wrapper.state().expandedStation).toEqual(true);

    // wrapper.setState({
    //           details: {
    //             name: 'QWER'
    //           },
    //           expandedState: true
    //         }
    // );

    // expect(wrapper.find('.fa-chevron-down').length).toBe(1);
  });
});