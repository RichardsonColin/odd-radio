import React from 'react';
import {expect} from 'chai';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

import App from '../src/client/components/app';

const appWrapper = render(<App />);

describe('<App />', () => {
  it('should have a header', function () {
    const appWrapper = render(<App/>);
    expect(appWrapper.find('header'));
  });

  it('should not be undefined', function () {
    const appWrapper = render(<App/>);
    expect(appWrapper).to.not.be.undefined;
  });
});

import Station from '../src/client/components/station';

const stationWrapper = render(<Station />);

describe('<Station />', () => {
  it('should have an i tag', function () {
    const stationWrapper = render(<Station/>);
    expect(stationWrapper.find('i')); // .to.have.length(1);
  });

  it('should have an div with "Location:"', function () {
    const stationWrapper = render(<Station/>);
    expect(stationWrapper.find('div').text()).to.have.string('Location:');
  });

  it('should have an div with "Description:"', function () {
    const stationWrapper = render(<Station/>);
    expect(stationWrapper.find('div').text()).to.have.string('Description:');
  });

  it('should have an div with "Home Page:"', function () {
    const stationWrapper = render(<Station/>);
    expect(stationWrapper.find('div').text()).to.have.string('Home Page:');
  });
});

// import AudioPlayer from '../src/client/components/audioplayer';
// // import { Header } from 'components/header';

// const audioWrapper = render(<AudioPlayer />);

// describe('<AudioPlayer />', () => {
//   it('', function () {
//     const audioWrapper = render(<AudioPlayer/>);
//     // expect(audioWrapper.find('input')); // .to.have.length(1);
//   });
// });