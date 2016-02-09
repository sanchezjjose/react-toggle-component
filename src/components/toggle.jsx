(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define([
      'react', 
      'react-addons-css-transition-group', 
      'react-dom',
      './slider', 
      './text', 
      '../utils/http',
      '../styles/styles',
      'jquery'], 
      factory
    );

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('react'),
      require('react-addons-css-transition-group'),
      require('react-dom'),
      require('./slider'),
      require('./text'),
      require('../utils/http'),
      require('../styles/styles'),
      require('jquery')
    );

  } else {
    root.ReactToggleComponent = factory(
      root.React, 
      root.React.addons.CSSTransitionGroup,
      root.ReactDOM,
      root.SliderComponent, 
      root.TextComponent, 
      root.HttpUtil,
      root.ReactToggleComponentStyles,
      root.jQuery
    );
  }

// background: http://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript
}(Function("return this")(), function (React, ReactCSSTransitionGroup, ReactDOM, SliderComponent, TextComponent, HttpUtil, ReactToggleComponentStyles, $) {

  const ToggleButtonComponent = React.createClass({

    getInitialState: function() {

      return { 
        isActive: this.props.isActive
      };
    },

    handleClick: function(elem) {

      if (this.state.isActive) {
        HttpUtil.POST(this.props.httpRequests.onState.url, this.props.httpRequests.onState.postData, this.props.callback);

      } else {
        HttpUtil.POST(this.props.httpRequests.offState.url, this.props.httpRequests.offState.postData, this.props.callback);
      }

      this.setState({ isActive: !this.state.isActive });
    },

    render: function() {

      const styles = new ReactToggleComponentStyles().toggleComponent();

      if (this.props.opts && this.props.opts.common && this.props.opts.common.styles) {
        Object.assign(styles.common, this.props.opts.common.styles.buttonComponent);
      }

      if (this.props.opts && this.props.opts.onState && this.props.opts.onState.styles) {
        Object.assign(styles.onState, this.props.opts.onState.styles.buttonComponent);
      }

      if (this.props.opts && this.props.opts.offState && this.props.opts.offState.styles) {
        Object.assign(styles.offState, this.props.opts.offState.styles.buttonComponent);
      }

      const toggleButtonStyles = Object.assign({}, styles.offState, this.state.isActive && styles.onState, styles.common);

      return (
        <div onClick={this.handleClick} style={toggleButtonStyles}>
          <SliderComponent isActive={this.state.isActive} opts={this.props.opts} />
          <TextComponent isActive={this.state.isActive} opts={this.props.opts} />
        </div>
      );
    }
  });

  function init(domElement, isActive, callback, httpRequests, opts) {

    console.log(ToggleButtonComponent);

    ReactDOM.render(

      <ToggleButtonComponent 
        isActive={isActive} 
        callback={callback} 
        httpRequests={httpRequests} 
        opts={opts} />,

      domElement
    );
  }

  return {
    init : init,

    getComponent: function() {
      return ToggleButtonComponent;
    }
  };

}));
