'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['react', 'jquery'], factory);
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory(require('react'));
  } else {
    root.TextComponent = factory(root.React);
  }
})(self, function (React) {

  return React.createClass({

    render: function render() {

      var styles = {
        base: {
          color: '#ddd',
          fontSize: '15px',
          fontWeight: 'normal',
          top: '11px',
          textShadow: '0 1px 0 rgba(0,0,0,0.2)',
          margin: '0',
          MozUserSelect: 'none',
          MozTransition: 'opacity 500ms ease-in',
          msUserSelect: 'none',
          msTransition: 'opacity 500ms ease-in',
          opacity: '1',
          position: 'absolute',
          right: '18px',
          WebkitUserSelect: 'none',
          WebkitTransition: 'opacity 500ms ease-in'
        },
        active: {
          MozTransition: 'opacity 500ms ease-in',
          msTransition: 'opacity 500ms ease-in',
          opacity: '0',
          visibility: 'hidden',
          WebkitTransition: 'opacity 500ms ease-in'
        },
        onText: {
          color: '#fff',
          left: '30px',
          right: 'auto',
          textShadow: '0 1px 0 rgba(0,0,0,0.5)'
        },
        offText: {
          color: '#ddd',
          textShadow: '0 1px 0 rgba(0,0,0,0.2)'
        }
      };

      if (this.props.opts && this.props.opts.onState && this.props.opts.onState.styles) {
        Object.assign(styles.onText, this.props.opts.onState.styles.textComponent);
      }

      if (this.props.opts && this.props.opts.offState && this.props.opts.offState.styles) {
        Object.assign(styles.offText, this.props.opts.offState.styles.textComponent);
      }

      var hideOnText = !this.props.isActive && styles.active;
      var hideOffText = this.props.isActive && styles.active;
      var onStateTextStyle = Object.assign({}, styles.base, hideOnText || styles.onText);
      var offStateTextStyle = Object.assign({}, styles.base, hideOffText || styles.offText);
      var onStateTextValue = '';
      var offStateTextValue = '';

      if (this.props.opts && this.props.opts.onState) {
        onStateTextValue = this.props.opts.onState.text;
      }

      if (this.props.opts && this.props.opts.offState) {
        offStateTextValue = this.props.opts.offState.text;
      }

      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'onText status', style: onStateTextStyle },
          ' ',
          onStateTextValue,
          ' '
        ),
        React.createElement(
          'p',
          { className: 'offText status', style: offStateTextStyle },
          ' ',
          offStateTextValue,
          ' '
        )
      );
    }
  });
});