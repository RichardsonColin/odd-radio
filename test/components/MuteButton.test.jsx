import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import MuteButton from '../../src/client/components/MuteButton';

describe('MuteButton', () => {
  const props = {
    volume: 1,
    clickFunction: jest.fn()
  }

  const props2 = {
    volume: 0,
    clickFunction: jest.fn()
  }

  const subject = <MuteButton { ...props }/>;
  const subject2 = <MuteButton { ...props2 }/>;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

  describe('when volume is greater than 0', () => {

    it('it should have one fa-volume-up element', () => {
      const wrapper = shallow(subject);

      expect(wrapper.find('.fa-volume-up').length).toBe(1);
    });

    describe('onClick on .fa-volume-up', () => {
      const wrapper = shallow(subject);

      it('calls clickFunction', () => {
        wrapper.find('.fa-volume-up').simulate('click');

        expect(props.clickFunction).toHaveBeenCalled();
      });
    });
  });

  describe('when volume is 0', () => {

    it('it should have one fa-volume-off', () => {
      const wrapper = shallow(subject2);

      expect(wrapper.find('.fa-volume-off').length).toBe(1);
    });


    describe('onClick on .fa-volume-off', () => {
      const wrapper = shallow(subject2);

      it('calls clickFunction', () => {
        wrapper.find('.fa-volume-off').simulate('click');

        expect(props.clickFunction).toHaveBeenCalled();
      });
    });
  });
});