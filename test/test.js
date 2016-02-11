import React from 'react';
import {createRenderer} from 'react-addons-test-utils';

import 'babel-polyfill';
import expect from 'expect';

// https://blog.algolia.com/how-we-unit-test-react-components-using-expect-jsx/
// import expectJSX from 'expect-jsx';
// expect.extend(expectJSX);

import ToggleComponent from '../lib/components/toggle.js';
import SliderComponent from '../lib/components/slider.js';
import TextComponent from '../lib/components/text.js';


describe('#SliderComponent', function() {
  it('should have correct element properties', function() {

    const isActive = true;

    const opts = {
      common: {
        styles: {
          sliderComponent: { 
            backgroundColor: 'red' 
          }
        }
      }
    }
    
    const httpRequests = {
      onState: { url: 'https://randomuser.me/api', postData: {} },
      offState: { url: 'https://randomuser.me/api', postData: {} }
    };

    function callback(data) {
      console.log(data);
    };

    const renderer = createRenderer();

    renderer.render(<SliderComponent opts={opts} />);

    const actualOutput = renderer.getRenderOutput();

    expect(actualOutput.type).toEqual('div');
    expect(actualOutput.props.style.backgroundColor).toEqual('red');
  });
});
