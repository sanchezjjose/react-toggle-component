(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['react', 'react-dom', 'jquery', './slider', './text', '../utils/http'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('react'),
      require('react-dom'),
      require('jquery'),
      require('./slider'),
      require('./text'),
      require('../utils/http')
    );

  } else {
    root.ReactToggleComponent = factory(root.React, root.ReactDOM, root.jQuery, root.SliderComponent, root.TextComponent, root.HttpUtil);
  }

}(self, function (React, ReactDOM, $, SliderComponent, TextComponent, Http) {

  function init(domElement, isActive, callback, onStateHttpRequest, offStateHttpRequest, opts) {

    function getStyles() {

      var styles = {
        base: {
          fontFamily: '"Helvetica Neue","Helvetica",arial,sans-serif',
          background: '#f8f8f8',
          border: '1px solid #dfdfdf',
          borderRadius: '50px',
          WebkitBoxShadow: 'none',
          boxShadow: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none',
          width: '85px',
          cursor: 'pointer',
          height: '32px',
          position: 'relative',
          display: 'inline-block'
        },
        active: {
          background: '#a9db80',
          MozBackgroundImage: '-moz-linear-gradient(top,  #a9db80 0%, #96c56f 100%)',
          WebkitBackgroundImage: '-webkit-linear-gradient(top,  #a9db80 0%,#96c56f 100%)',
          backgroundImage: 'linear-gradient(to bottom,  #a9db80 0%,#96c56f 100%)',
          WebkitBoxShadow: 'none',
          boxShadow: 'none'
        }
      };

      return styles;
    }

    var ToggleButtonComponent = React.createClass({

      getInitialState: function() {

        return { 
          isActive: isActive
        };
      },

      handleClick: function() {

        if (this.state.isActive) {
          Http.POST(offStateHttpRequest.url, offStateHttpRequest.postData, callback);

        } else {
          Http.POST(onStateHttpRequest.url, onStateHttpRequest.postData, callback);
        }

        this.setState({ isActive: !this.state.isActive });
      },

      render: function() {

        var styles = getStyles();

        if (this.props.opts) {
          if (this.props.opts.onState && this.props.opts.onState.buttonStyle) {
            $.extend(styles.active, this.props.opts.onState.buttonStyle);
          }
          if (this.props.opts.offState && this.props.opts.offState.buttonStyle) {
            $.extend(styles.base, this.props.opts.offState.buttonStyle);
          }
        }

        var toggleButtonStyles = $.extend({}, styles.base, this.state.isActive && styles.active);

        return (
          <div className="toggleButton" onClick={this.handleClick} style={toggleButtonStyles}>
            <SliderComponent isActive={this.state.isActive} />
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
