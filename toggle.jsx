'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['react/addons'], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory(
      require('react/addons')
    );

  } else {
    // Browser globals (root is window)
    root.ReactToggle = factory(root.React);

  }

}(this, function (React) {

  var Toggler = React.createClass({displayName: "Toggler",
    render: function() {
      return (
        React.createElement("div", {className: "react-toggle-container"}, 
          "Hello, world! I am a React component."
        )
      );
    }
  });

  return Toggler;

}));
