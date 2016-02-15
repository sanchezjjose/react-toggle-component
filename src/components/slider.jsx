(function (root, factory) {

  if (typeof define === "function" && define.amd) {
    define([
      "react",
      "react-addons-css-transition-group",
      "../styles/styles"], 
      factory
    );

  } else if (typeof exports === "object") {
    module.exports = factory(
      require("react"),
      require("react-addons-css-transition-group"),
      require("../styles/styles")
    );

  } else {
    root.SliderComponent = factory(
      root.React,
      root.React.addons.CSSTransitionGroup,
      root.ReactToggleComponentStyles
    );
  }

}(Function("return this")(), function (React, ReactCSSTransitionGroup, ReactToggleComponentStyles) {

  return React.createClass({

    render: function() {

      const styles = new ReactToggleComponentStyles().sliderComponent();

      if (this.props.opts && this.props.opts.common && this.props.opts.common.styles) {
        Object.assign(styles.common, this.props.opts.common.styles.sliderComponent);
      }

      if (this.props.opts && this.props.opts.onState && this.props.opts.onState.styles) {
        Object.assign(styles.onState, this.props.opts.onState.styles.sliderComponent);
      }

      if (this.props.opts && this.props.opts.offState && this.props.opts.offState.styles) {
        Object.assign(styles.offState, this.props.opts.offState.styles.sliderComponent);
      }

      const sliderStyles = Object.assign({}, styles.offState, this.props.isActive && styles.onState, styles.common);

      return (
        <div style={sliderStyles}></div>
      );
    }
  });

}));
