(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['react', 'react-dom', 'jquery', './slider.jsx', './text.jsx'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('react'),
      require('react-dom'),
      require('jquery'),
      require('./slider.jsx'),
      require('./text.jsx')
    );

  } else {
    root.ReactToggleComponent = factory(root.React, root.ReactDOM, root.jQuery, root.SliderComponent, root.TextComponent);
  }

}(this, function (React, ReactDOM, $, SliderComponent, TextComponent) {

  function renderToggleButton(domElement, isActive, callback, onStateHttpRequest, offStateHttpRequest, opts) {

    // TODO: remove this component altogther?
    var InputComponent = React.createClass({
      
      render: function() {

        var styles = {
          base: {
            paddingBottom: '5px',
            border: 'none',
            WebkitBoxShadow: 'none',
            boxShadow: 'none',
            fontSize: '14px',
            outline: 'none',
            width: '100%',
            opacity: '0',
            height: '0',
            margin: '0',
            padding: '0',
            lineHeight: 'normal',
            verticalAlign: 'middle'
          },
          active: {

          }
        };

        var inputStyles = $.extend({}, styles.base, this.props.isActive && styles.active);

        return (
          <input className="toggleButton" name="secret" type="checkbox" style={inputStyles} /> 
        );
      }
    });

    var ToggleButtonComponent = React.createClass({

      getInitialState: function() {

        var buttonStyle = { };
    
        var onStateButtonStyle = $.extend(true, {}, buttonStyle);
        var offStateButtonStyle = $.extend(true, {}, buttonStyle);

        // TODO: switch statement
        if (this.props.opts) {
          if (this.props.opts.onState && this.props.opts.onState.buttonStyle) {
            $.extend(onStateButtonStyle, this.props.opts.onState.buttonStyle);
          }
          if (this.props.opts.offState && this.props.opts.offState.buttonStyle) {
            $.extend(offStateButtonStyle, this.props.opts.offState.buttonStyle);
          }
        }

        return { 
          isActive: isActive
        };
      },

      handleClick: function() {

        if (this.state.isActive) {

          // TODO: create an object w/ prototype for a get and post method
          $.post(offStateHttpRequest.url, offStateHttpRequest.postData).done(function(data) {
            callback(data);
          });

        } else {
          $.post(onStateHttpRequest.url, onStateHttpRequest.postData).done(function(data) {
            callback(data);
          });
        }

        this.setState({ isActive: !this.state.isActive });
      },

      render: function() {

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

        var toggleButtonStyles = $.extend({}, styles.base, this.state.isActive && styles.active);

        return (
          <div className="toggleButton" onClick={this.handleClick} style={toggleButtonStyles}>
            <SliderComponent isActive={this.state.isActive} />
            <TextComponent isActive={this.state.isActive} opts={this.props.opts} />
            <InputComponent isActive={this.state.isActive} />
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
    init : renderToggleButton
  };

}));
