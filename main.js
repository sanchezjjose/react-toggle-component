'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['./toggle.js'], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory(
      require('./toggle.js')
    );

  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.ReactToggle);

  }

}(this, function (reactToggle) {

  reactToggle.init('content');

  // Exposed public method
  return {};
  
}));
