(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory('jquery');

  } else {
    root.HttpUtil = factory(root.jQuery);
  }

}(self, function ($) {

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
    POST: function(url, postData, callback) {
      $.post(url, postData).done(function(data) {
        callback(data);
      });
    }
  };

}));
