import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import Component from '../lib/components/toggle.js';

const expect = require('chai').expect;

// const domElement = <div class="toggle-button" id="react-toggle-component"></div>;
const isActive = true;
const httpRequests = {
  onState: { url: 'https://randomuser.me/api', postData: {} },
  offState: { url: 'https://randomuser.me/api', postData: {} }
};

function callback(data) {
  console.log(data);
}

describe('#test', function() {
  it('should pass', function() {

    let ToggleButtonComponent = Component;
    let renderer = createRenderer();
    let opts = {};

    console.log(ToggleButtonComponent);
    
    renderer.render(<ToggleButtonComponent isActive={isActive} callback={callback} httpRequests={httpRequests} opts={opts} />);

    let actualElement = renderer.getRenderOutput();
    console.log(actualRender);

    // let actualElement = renderer.getRenderOutput();
    // console.log(actualElement);

    expect(true).to.equal(true);
  });
});
