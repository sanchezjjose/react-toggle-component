"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (root, factory) {

  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    module.exports = factory(require("jquery"));
  } else {
    root.HttpUtil = factory(root.jQuery);
  }
})(Function("return this")(), function ($) {

  return {

    /**
     * Executes http post request asynchronously.
     *
     * @public
     * @method POST
     * @param  {String} url
     * @param  {Object} postData
     * @param  {Function} callback
     *
     * @return  {undefined} TODO: return ES6 Promise
     */
    POST: function POST(url, postData, callback) {
      $.post(url, postData).done(function (data) {
        callback(data);
      });
    }
  };
});