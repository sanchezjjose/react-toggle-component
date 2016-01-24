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

        common: {
          fontSize: '15px',
          fontWeight: 'normal',
          top: '11px',
          textShadow: '0 1px 0 rgba(0,0,0,0.2)',
          margin: '0',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          position: 'absolute',
          right: '18px',
          WebkitUserSelect: 'none',

          opacity: '1'
        },

        onState: {
          color: '#fff',
          left: '30px',
          right: 'auto',
          textShadow: '0 1px 0 rgba(0,0,0,0.5)',

          MozTransition: 'opacity 1000ms ease-in',
          msTransition: 'opacity 1000ms ease-in',
          // visibility: 'hidden',
          WebkitTransition: 'opacity 1000ms ease-in'
        },

        offState: {
          color: '#ddd',
          textShadow: '0 1px 0 rgba(0,0,0,0.2)',

          MozTransition: 'opacity 1000ms ease-in',
          msTransition: 'opacity 1000ms ease-in',
          // opacity: '1',
          WebkitTransition: 'opacity 1000ms ease-in'
        }
      };

      var textValue = '';

      if (this.props.opts && this.props.opts.common && this.props.opts.common.styles) {
        Object.assign(styles.common, this.props.opts.common.styles.textComponent);
      }

      if (this.props.opts && this.props.opts.onState && this.props.opts.onState.styles) {

        if (this.props.opts.onState.styles) {
          Object.assign(styles.onState, this.props.opts.onState.styles.textComponent);
        }

        if (this.props.isActive && this.props.opts.onState.text) {
          textValue = this.props.opts.onState.text;
        }
      }

      if (this.props.opts && this.props.opts.offState && this.props.opts.offState.styles) {

        if (this.props.opts.offState.styles) {
          Object.assign(styles.offState, this.props.opts.offState.styles.textComponent);
        }

        if (!this.props.isActive && this.props.opts.offState.text) {
          textValue = this.props.opts.offState.text;
        }
      }

      var textStyle = Object.assign({}, styles.offState, this.props.isActive && styles.onState, styles.common);

      return React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          { className: 'buttonText', style: textStyle },
          ' ',
          textValue,
          ' '
        )
      );
    }
  });
});