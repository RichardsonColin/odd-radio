import React from 'react';

import { generateRandomStationId } from '../src/client/util/ClientFunctions.jsx';

describe('ClientFunctions', () => {

  describe('generateRandomStationId', () => {

    it('generates a random number between 0 and 2', () => {

      expect(generateRandomStationId()).toBeGreaterThanOrEqual(0);
      expect(generateRandomStationId()).toBeLessThanOrEqual(2);
    });
  });
});