(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['react', 'jquery'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('react'),
      require('jquery')
    );

  } else {
    root.TextComponent = factory(root.React, root.jQuery);
  }

}(this, function (React, $) {

  return React.createClass({

    render: function() {

      var styles = {
        base: {
          textShadow: '0 1px 0 rgba(0,0,0,0.2)',
          color: '#555',
          fontSize: '14px',
          fontWeight: 'bold',
          top: '7px',
          right: '18px',
          margin: '0',
          position: 'absolute'
        },
        active: {
          visibility: 'hidden'
        },
        onText: {
          left: '25px', 
          right: 'auto',
          textShadow: '0 1px 0 rgba(0,0,0,0.5)',
          color: '#fff'
        },
        offText: {
          textShadow: '0 1px 0 rgba(0,0,0,0.2)',
          color: '#555'
        }
      };

      var onStateTextStyle = $.extend({}, styles.base, (!this.props.isActive && styles.active) || styles.onText),
          offStateTextStyle = $.extend({}, styles.base, (this.props.isActive && styles.active) || styles.offText),
          onStateTextValue = '',
          offStateTextValue = '';

      // TODO: switch statement
      if (this.props.opts) {
        if (this.props.opts.onState && this.props.opts.onState.buttonTextValue) {
          onStateTextValue = this.props.opts.onState.buttonTextValue;
        }
        if (this.props.opts.offState && this.props.opts.offState.buttonTextValue) {
          offStateTextValue = this.props.opts.offState.buttonTextValue;   
        }
      }

      return (
        <div>
          <p className="onText status" style={onStateTextStyle}> {onStateTextValue} </p>
          <p className="offText status" style={offStateTextStyle}> {offStateTextValue} </p>
        </div>
      );
    }
  });

}));
