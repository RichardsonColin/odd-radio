import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {Station} from '../src/client/components/Station';


// let expect = chai.expect
describe("<App/>", ()=>{
    it('renders one <h1> tag', ()=>{
        const wrapper = shallow(<Station />);
        expect(wrapper.find('h1')).to.have.length(1)
    });
})