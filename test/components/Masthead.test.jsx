import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Masthead from '../../src/client/components/Masthead';

describe('Masthead', () => {
 const props = {
   expanded: 'none',
   clickFunction: jest.fn()
 }

 const subject = <Masthead { ...props }/>;

 it('matches snapshot', () => {
   expect(renderer.create(subject)).toMatchSnapshot();
 });

 describe('onClick on first .one-third class', () => {
   const wrapper = mount(subject);

   it('calls clickFunction', () => {
     wrapper.find('.one-third').at(0).simulate('click');
   });
 });

 describe('onClick on second .one-third class', () => {
   const wrapper = mount(subject);

   it('calls clickFunction', () => {
     wrapper.find('.one-third').at(1).simulate('click');
   });
 });

 describe('onClick on third .one-third class', () => {
   const wrapper = mount(subject);

   it('calls clickFunction', () => {
     wrapper.find('.one-third').at(2).simulate('click');
   });
 });

 describe('when instantiated', () => {
   const wrapper = shallow(subject);

   it('when toggleInfo is called without a target, the state expanded should be none', () => {
     wrapper.instance().toggleInfo('none');

     expect(wrapper.state().expanded).toEqual('none');
   });
 });
});





