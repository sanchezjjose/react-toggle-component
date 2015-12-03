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

}(self, function (React, ReactDOM, $, SliderComponent, TextComponent, httpUtil) {

  function init(domElement, isActive, callback, onStateHttpRequest, offStateHttpRequest, opts) {

    function getStyles() {

      var styles = {
        base: {
          backgroundColor: '#ddd',
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
        active: {
          backgroundColor: '#28c891'
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
          httpUtil.POST(offStateHttpRequest.url, offStateHttpRequest.postData, callback);

        } else {
          httpUtil.POST(onStateHttpRequest.url, onStateHttpRequest.postData, callback);
        }

        this.setState({ isActive: !this.state.isActive });
      },

      render: function() {

        var styles = getStyles();

        if (this.props.opts && this.props.opts.onState && this.props.opts.onState.styles) {
          $.extend(styles.active, this.props.opts.onState.styles.buttonComponent);
        }

        if (this.props.opts && this.props.opts.offState && this.props.opts.offState.styles) {
          $.extend(styles.base, this.props.opts.offState.styles.buttonComponent);
        }

        var toggleButtonStyles = $.extend({}, styles.base, this.state.isActive && styles.active);

        return (
          <div className="toggleButton" onClick={this.handleClick} style={toggleButtonStyles}>
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
