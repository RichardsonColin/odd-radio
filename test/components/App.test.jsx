import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import App from '../../src/client/components/App';

describe('App', () => {
  const props = {
    loadStations: jest.fn(),
    scrollListener: jest.fn(),
    setStateSelectedStation: jest.fn()
  }

  global.fetch = jest.fn(() => new Promise(resolve => resolve()));

  class LocalStorageMock {
    constructor() {
      this.store = {}
    }

    clear() {
      this.store = {}
    }

    getItem(key) {
      return this.store[key] || null
    }

    setItem(key, value) {
      this.store[key] = value
    }

    removeItem(key) {
      delete this.store[key]
    }
  }

  global.localStorage = new LocalStorageMock

  const subject = <App />;

  it('matches snapshot', () => {
    expect(renderer.create(subject)).toMatchSnapshot();
  });

})