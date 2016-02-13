import React from 'react';
import {createRenderer} from 'react-addons-test-utils';

import 'babel-polyfill';
import expect from 'expect';

import ToggleComponent from '../lib/components/toggle.js';
import SliderComponent from '../lib/components/slider.js';
import TextComponent from '../lib/components/text.js';

import fixture from './fixture.js';

describe('#ToggleComponent', function() {
  it('should have correct element properties', function() {
    let renderer = createRenderer();
    let actualOutput;

    renderer.render(<ToggleComponent />);
    actualOutput = renderer.getRenderOutput();

    expect(actualOutput.type).toEqual('div');
  });

  it('should override styles', function() {
    let opts = fixture.opts;
    let renderer = createRenderer();
    let actualOutput;

    opts.common.styles.toggleComponent = {
      width: '50'
    }

    renderer.render(<ToggleComponent opts={opts} />);
    actualOutput = renderer.getRenderOutput();

    expect(actualOutput.props.style.width).toEqual('50');
  });

  it('should add new styles if not present', function() {
    let opts = fixture.opts;
    let renderer = createRenderer();
    let actualOutput;

    opts.common.styles.toggleComponent = {
      fontSize: '100'
    }

    renderer.render(<ToggleComponent opts={opts} />);
    actualOutput = renderer.getRenderOutput()

    expect(actualOutput.props.style.fontSize).toEqual('100');
  });

  it('should apply onState styles if isActive property is true', function() {
    let opts = fixture.opts;
    let renderer = createRenderer();
    let actualOutput;
    let isActive = true;

    renderer.render(<ToggleComponent isActive={isActive} />);
    actualOutput = renderer.getRenderOutput()

    expect(actualOutput.props.style.backgroundColor).toEqual('#28c891');
  });

  it('should apply off state styles if isActive property is false', function() {
    let opts = fixture.opts;
    let renderer = createRenderer();
    let actualOutput;
    let isActive = false;

    renderer.render(<ToggleComponent isActive={isActive} />);
    actualOutput = renderer.getRenderOutput()

    expect(actualOutput.props.style.backgroundColor).toEqual('#555');
  });

});

describe('#TextComponent', function() {
  it('should have correct element properties', function() {
    let renderer = createRenderer();
    let actualOutput;

    renderer.render(<TextComponent />);
    actualOutput = renderer.getRenderOutput();

    expect(actualOutput.type).toEqual('div');
    expect(actualOutput.props.children[0].type).toEqual('span');
    expect(actualOutput.props.children[1].type).toEqual('span');
  });

  it('should override styles', function() {
    let opts = fixture.opts;
    let renderer = createRenderer();
    let actualOutput;

    opts.common.styles.textComponent = {
      fontSize: '30'
    }

    renderer.render(<TextComponent opts={opts} />);
    actualOutput = renderer.getRenderOutput();

    expect(actualOutput.props.children[0].props.style.fontSize).toEqual('30');
  });

  it('should add new styles if not present', function() {
    let opts = fixture.opts;
    let renderer = createRenderer();
    let actualOutput;

    opts.common.styles.textComponent = {
      fakeAttribute: 'test'
    }

    renderer.render(<TextComponent opts={opts} />);
    actualOutput = renderer.getRenderOutput();

    expect(actualOutput.props.children[0].props.style.fakeAttribute).toEqual('test');
  });

});

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
