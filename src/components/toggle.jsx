(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define([
      'react', 
      'react-addons-css-transition-group', 
      'react-dom',
      './slider', 
      './text', 
      '../utils/http',
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
      root.jQuery
    );
  }

// background: http://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript
}(Function("return this")(), function (React, ReactCSSTransitionGroup, ReactDOM, SliderComponent, TextComponent, HttpUtil, $) {

  function init(domElement, isActive, callback, httpRequests, opts) {

    function getStyles() {

      let styles = {

        common: {
          border: '1px solid #ddd',
          borderRadius: '50px',
          cursor: 'pointer',
          display: 'inline-block',
          fontFamily: '"Helvetica Neue","Helvetica",arial,sans-serif',
          height: '40px',
          position: 'relative',
          textTransform: 'uppercase',
          width: '100px'
        },

        offState: {
          backgroundColor: '#555'
        },

        onState: {
          backgroundColor: '#28c891'
        }
      };

      return styles;
    }

    const ToggleButtonComponent = React.createClass({

      getInitialState: function() {

        return { 
          isActive: isActive
        };
      },

      handleClick: function(elem) {

        if (this.state.isActive) {
          HttpUtil.POST(httpRequests.onState.url, httpRequests.onState.postData, callback);

        } else {
          HttpUtil.POST(httpRequests.offState.url, httpRequests.offState.postData, callback);
        }

        this.setState({ isActive: !this.state.isActive });
      },

      render: function() {

        const styles = getStyles();

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

    ReactDOM.render(
      <ToggleButtonComponent opts={opts} />,
      domElement
    );
  }

  return {
    init : init
  };

}));
