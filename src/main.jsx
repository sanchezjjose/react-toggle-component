(function (root, factory) {

  if (typeof define === "function" && define.amd) {
    define([
      "react",
      "react-dom",
      "./components/toggle"], 
      factory
    );

  } else if (typeof exports === "object") {
    module.exports = factory(
      require("react"),
      require("react-dom"),
      require("./components/toggle")
    );

  } else {
    root.ReactToggleComponent = factory(
      root.React,
      root.ReactDOM,
      root.ToggleComponent
    );
  }

// background: http://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript
}(Function("return this")(), function (React, ReactDOM, ToggleComponent) {

  return {

    init: function (domElement, isActive, callback, httpRequests, opts) {

      ReactDOM.render(
        <ToggleComponent isActive={isActive} callback={callback} httpRequests={httpRequests} opts={opts} />,
        domElement
      );
    }    
  };

}));