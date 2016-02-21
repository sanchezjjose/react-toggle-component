"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (root, factory) {

  if (typeof define === "function" && define.amd) {
    define(["react", "react-addons-css-transition-group", "react-dom", "./slider", "./text", "../utils/http", "../styles/styles", "jquery"], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    module.exports = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"), require("./slider"), require("./text"), require("../utils/http"), require("../styles/styles"));
  } else {
    root.ToggleComponent = factory(root.React, root.React.addons.CSSTransitionGroup, root.ReactDOM, root.SliderComponent, root.TextComponent, root.HttpUtil, root.ReactToggleComponentStyles);
  }

  // background: http://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript
})(Function("return this")(), function (React, ReactCSSTransitionGroup, ReactDOM, SliderComponent, TextComponent, HttpUtil, ReactToggleComponentStyles) {

  return React.createClass({

    getInitialState: function getInitialState() {

      return {
        isActive: this.props.isActive
      };
    },

    handleClick: function handleClick() {

      if (this.state.isActive) {
        HttpUtil.POST(this.props.httpRequests.onState.url, this.props.httpRequests.onState.postData, this.props.callback);
      } else {
        HttpUtil.POST(this.props.httpRequests.offState.url, this.props.httpRequests.offState.postData, this.props.callback);
      }

      this.setState({ isActive: !this.state.isActive });
    },

    render: function render() {

      var styles = new ReactToggleComponentStyles().toggleComponent();

      if (this.props.opts && this.props.opts.common && this.props.opts.common.styles) {
        Object.assign(styles.common, this.props.opts.common.styles.toggleComponent);
      }

      if (this.props.opts && this.props.opts.onState && this.props.opts.onState.styles) {
        Object.assign(styles.onState, this.props.opts.onState.styles.toggleComponent);
      }

      if (this.props.opts && this.props.opts.offState && this.props.opts.offState.styles) {
        Object.assign(styles.offState, this.props.opts.offState.styles.toggleComponent);
      }

      var toggleComponentStyles = Object.assign({}, styles.offState, this.state.isActive && styles.onState, styles.common);

      return React.createElement(
        "div",
        { onClick: this.handleClick, style: toggleComponentStyles },
        React.createElement(SliderComponent, { isActive: this.state.isActive, opts: this.props.opts }),
        React.createElement(TextComponent, { isActive: this.state.isActive, opts: this.props.opts })
      );
    }
  });
});