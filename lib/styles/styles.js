"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (root, factory) {

  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    module.exports = factory();
  } else {
    root.ReactToggleComponentStyles = factory();
  }
})(Function("return this")(), function () {

  var Styles = function Styles() {};

  Styles.prototype.toggleComponent = function () {

    return {

      common: {
        border: "1px solid #ddd",
        borderRadius: "50px",
        cursor: "pointer",
        display: "inline-block",
        fontFamily: "'Helvetica Neue','Helvetica',arial,sans-serif",
        height: "40px",
        position: "relative",
        textTransform: "uppercase",
        msUserSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        width: "100px"
      },

      offState: {
        backgroundColor: "#555"
      },

      onState: {
        backgroundColor: "#28c891"
      }
    };
  };

  Styles.prototype.sliderComponent = function () {

    return {

      common: {
        backgroundColor: "#fff",
        backgroundImage: "none",
        border: "1px solid #ececec",
        borderColor: "#dfdfdf",
        borderRadius: "50px",
        bottom: "-1px",
        boxShadow: "none",
        display: "block",
        height: "100%",
        position: "relative",
        top: "-1px",
        msTransition: "transform 0.4s ease",
        MozTransition: "transform 0.4s ease",
        WebkitTransition: "-webkit-transform 0.4s ease",
        transition: "transform 0.4s ease",
        width: "40px",
        WebkitBoxShadow: "none"
      },

      onState: {
        msTransform: "translate(60px, 0px)",
        MozTransform: "translate(60px, 0px)",
        WebkitTransform: "translate(60px, 0px)",
        transform: "translate(60px, 0px)"
      },

      offState: {
        msTransform: "translate(0px, 0px)",
        MozTransform: "translate(0px, 0px)",
        WebkitTransform: "translate(0px, 0px)",
        transform: "translate(0px, 0px)"
      }
    };
  };

  Styles.prototype.textComponent = function () {

    return {

      common: {
        fontSize: "15px",
        fontWeight: "normal",
        top: "11px",
        textShadow: "0 1px 0 rgba(0,0,0,0.2)",
        margin: "0",
        position: "absolute",
        msUserSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        msTransition: "opacity 500ms ease-out",
        MozTransition: "opacity 500ms ease-out",
        WebkitTransition: "opacity 500ms ease-out",
        transition: "opacity 500ms ease-out"
      },

      onState: {
        color: "#fff",
        left: "25px",
        right: "auto"
      },

      offState: {
        color: "#ddd",
        right: "18px",
        left: "auto"
      },

      visible: {
        opacity: "1",
        visibility: "visible"
      },

      hidden: {
        opacity: "0",
        visibility: "hidden"
      }
    };
  };

  return Styles;
});