import React from 'react';
import {createRenderer} from 'react-addons-test-utils';

import 'babel-polyfill';
import expect from 'expect';

import ToggleComponent from '../lib/components/toggle.js';
import SliderComponent from '../lib/components/slider.js';
import TextComponent from '../lib/components/text.js';

import fixture from './fixture.js';

describe('#SliderComponent', function() {
  it('should have correct element properties', function() {
    let renderer = createRenderer();
    let actualOutput;

    renderer.render(<SliderComponent />);
    actualOutput = renderer.getRenderOutput();

    expect(actualOutput.type).toEqual('div');
  });

  it('should override styles', function() {
    let opts = fixture.opts;
    let renderer = createRenderer();
    let actualOutput;

    opts.common.styles.sliderComponent = {
      backgroundColor: 'red'
    }

    renderer.render(<SliderComponent opts={opts} />);
    actualOutput = renderer.getRenderOutput();

    expect(actualOutput.props.style.backgroundColor).toEqual('red');
  });

  it('should add new styles if not present', function() {
    let opts = fixture.opts;
    let renderer = createRenderer();
    let actualOutput;

    opts.common.styles.sliderComponent = {
      fontSize: '100'
    }

    renderer.render(<SliderComponent opts={opts} />);
    actualOutput = renderer.getRenderOutput()

    expect(actualOutput.props.style.fontSize).toEqual('100');
  });

});
