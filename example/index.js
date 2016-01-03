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

  const domElement1 = document.getElementById('react-toggle-component-1');
  const domElement2 = document.getElementById('react-toggle-component-2');
  const domElement3 = document.getElementById('react-toggle-component-3');
  const domElement4 = document.getElementById('react-toggle-component-4');

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
  
  const opts1 = {
    onState: {
      text: 'In'
    },
    offState: { 
      text: 'Out'
    }
  };

  const opts2 = {
    onState: {
      text: 'In',
      styles: {
        buttonComponent: { backgroundColor: 'red' },
        textComponent: { color: '#fff' },
        sliderComponent: { backgroundColor: '#fff'}
      }
    },

    offState: { 
      text: 'Out',
      styles: {
        buttonComponent: { backgroundColor: '#000' },
        textComponent: { color: '#fff' },
        sliderComponent: { backgroundColor: '#fff' }
      }
    }
  };

  ReactToggleComponent.init(domElement1, true, callback, httpRequests);
  ReactToggleComponent.init(domElement2, false, callback, httpRequests);
  ReactToggleComponent.init(domElement3, true, callback, httpRequests, opts1);
  ReactToggleComponent.init(domElement4, true, callback, httpRequests, opts2);

  return {};
    
}));
