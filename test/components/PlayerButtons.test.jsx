import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import PlayerButtons from '../../src/client/components/PlayerButtons';

describe('PlayerButtons', () => {
  const props = {
    activeStation: true,
    playState: {
        volume: 1,
        isPlaying: true,
        isPaused: false,
        isLoading: false
      },
    clickFunction: jest.fn()
  }

  const props2 = {
    activeStation: false,
    playState: {
        volume: 1,
        isPlaying: false,
        isPaused: true,
        isLoading: false
      },
    clickFunction: jest.fn()
  }

  const subject = <PlayerButtons { ...props }/>;
  const subject2 = <PlayerButtons { ...props2 }/>;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

  describe('when activeStation is true', () => {

    it('it should have one <i> component', () => {
      const wrapper = shallow(subject);

      expect(wrapper.find('i').length).toBe(1);
    });

    it('the <i> should not have id pButton', () => {
      const wrapper = shallow(subject);

      expect(wrapper.find('#pButton').length).toBe(0);
    });

    describe('onClick on .fa-pause', () => {
      const wrapper = shallow(subject);

      it('calls clickFunction', () => {
        wrapper.find('.fa-pause').simulate('click');

        expect(props.clickFunction).toHaveBeenCalled();
      });
    });
  });

  describe('when activeStation is false', () => {

    it('it has an <i> with id pButton', () => {
      const wrapper = shallow(subject2);

      expect(wrapper.find('#pButton').length).toBe(1);
    });

    describe('onClick on #pButton', () => {
    const wrapper = shallow(subject2);

      it('calls clickFunction', () => {
        wrapper.find('#pButton').simulate('click');

        expect(props2.clickFunction).toHaveBeenCalled();
      });
    });
  });
});