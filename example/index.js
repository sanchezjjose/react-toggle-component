'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['../lib/index'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('../lib/index')
    );

  } else {
    root.returnExports = factory(root.ReactToggleComponent);
  }

}(self, function (ReactToggleComponent) {

  function callback(data) {
    console.log(data);
  }

  const domElement = document.getElementById('content');

  const httpRequests = {

    onState: {
      url: 'https://randomuser.me/api',
      postData: {}
    },

    offState: {
      url: 'https://randomuser.me/api',
      postData: {}
    },
  };
  
  const opts = {

    // TODO: should there be a baseStyles object?

    onState: {
      text: 'In',
      // styles: {
      //   buttonComponent: { backgroundColor: 'red' },
      //   textComponent: { color: 'blue' },
      //   sliderComponent: { backgroundColor: 'black'}
      // }
    },

    offState: { 
      text: 'Out',
      // styles: {
      //   buttonComponent: { backgroundColor: 'yellow' },
      //   textComponent: { color: 'white' },
      //   sliderComponent: { backgroundColor: 'green' }
      // }
    }
  };

  ReactToggleComponent.init(domElement, true, callback, httpRequests, opts);

  return {};
    
}));
