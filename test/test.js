import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import ToggleButtonComponent from '../lib/components/toggle.js';

const expect = require('chai').expect;


describe('#test', function() {
    it('should pass', function() {
      let renderer = createRenderer();
      let opts = {};

      console.log(renderer);
      
      renderer.render(<ToggleButtonComponent opts={opts}/>);

      let actualElement = renderer.getRenderOutput();
      console.log(actualElement);

      expect(true).to.equal(true);
    });
});
