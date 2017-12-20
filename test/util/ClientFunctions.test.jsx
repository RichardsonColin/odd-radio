import React from 'react';

import { shuffle } from '../../src/client/util/ClientFunctions.jsx';

describe('ClientFunctions', () => {

  describe('shuffle', () => {

    it('when given an array returns an array', () => {
      const testArray = [1,2,3,4,5,6,7,8,9];

      expect(shuffle(testArray)).not.toBe([1,2,3,4,5,6,7,8,9]);
    });
  });
});