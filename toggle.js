(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['react', 'react-dom'], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory(
      require('react'),
      require('react-dom')
    );

  } else {
    // Browser globals (root is window)
    root.ReactToggle = factory(root.React, root.ReactDOM);

  }

}(this, function (React, ReactDOM) {

  var Toggler = React.createClass({displayName: "Toggler",
    render: function() {
      return (
        React.createElement("div", {className: "react-toggle-container"}, 
          "Hello! I am a React Component."
        )
      );
    }
  });

  function init(elementId) {

    ReactDOM.render(
      React.createElement(Toggler, null),
      document.getElementById(elementId)
    );
  }

  return {
    init : init
  };

}));
