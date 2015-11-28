'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['../lib/index'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('../lib/index')
    );

  } else {
    root.returnExports = factory(root.ReactToggle);
  }

}(this, function (reactToggle) {

  function callback(data) {
    console.log("Callback executed. Printing data from server: ");
    console.log(data);
  }

  var domElement = document.getElementById('content');

  var onStateHttpRequest = {
    url: 'https://randomuser.me/api',
    postData: {}
  };
  
  var offStateHttpRequest = {
    url: 'https://randomuser.me/api',
    postData: {}
  };
  
  var opts = {

    onState: { 
      buttonTextValue: 'In',
      buttonStyle: {
        backgroundColor: '#4b758b',
        border: '1px solid #5788a1',
        color: '#eee'
      }
    },

    offState: { 
      buttonTextValue: 'Out',
      buttonStyle: {
        backgroundColor: '#e0e0e0',
        border: '1px solid #cccccc',
        color: '#505050'
      }
    }
  };

  reactToggle.init(
    domElement,
    true,
    callback,
    onStateHttpRequest,
    offStateHttpRequest,
    opts
  );

  return {};
    
}));
