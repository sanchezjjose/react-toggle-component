'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory();
  } else {
    root.ToggleButtonStyles = factory();
  }
})(Function("return this")(), function () {

  return {

    getStyles: function getStyles() {

      return {

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
    },

    stylesObj: {

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
    }
  };
});