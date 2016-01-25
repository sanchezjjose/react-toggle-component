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
          position: 'absolute',
          msUserSelect: 'none',
          MozUserSelect: 'none',
          WebkitUserSelect: 'none',
          msTransition: 'opacity 500ms ease-out',
          MozTransition: 'opacity 500ms ease-out',
          WebkitTransition: 'opacity 500ms ease-out'
        },

        onState: {
          opacity: '1',
          visibility: 'visible'
        },

        offState: {
          opacity: '0',
          visibility: 'hidden'
        },

        onStateText: {
          color: '#fff',
          left: '30px',
          right: 'auto'
        },

        offStateText: {
          color: '#ddd',
          right: '18px'
        }
      };

      var onStateText = '';
      var offStateText = '';

      if (this.props.opts && this.props.opts.common && this.props.opts.common.styles) {
        Object.assign(styles.common, this.props.opts.common.styles.textComponent);
      }

      if (this.props.opts && this.props.opts.onState && this.props.opts.onState.styles) {
        Object.assign(styles.onState, this.props.opts.onState.styles.textComponent);
        onStateText = this.props.opts.onState.text;
      }

      if (this.props.opts && this.props.opts.offState && this.props.opts.offState.styles) {
        Object.assign(styles.offState, this.props.opts.offState.styles.textComponent);
        offStateText = this.props.opts.offState.text;
      }

      var onStateTextVisible = this.props.isActive ? styles.onState : styles.offState;
      var offStateTextVisible = this.props.isActive ? styles.offState : styles.onState;
      var onStateTextStyle = Object.assign({}, styles.onStateText, onStateTextVisible, styles.common);
      var offStateTextStyle = Object.assign({}, styles.offStateText, offStateTextVisible, styles.common);

      return React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          { style: onStateTextStyle },
          ' ',
          onStateText,
          ' '
        ),
        React.createElement(
          'span',
          { style: offStateTextStyle },
          ' ',
          offStateText,
          ' '
        )
      );
    }
  });
});