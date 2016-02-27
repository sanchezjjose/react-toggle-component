'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['../lib/main'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('../lib/main')
    );

  } else {
    root.returnExports = factory(root.ReactToggleComponent);
  }

}(self, function (ReactToggleComponent) {

  function callback(data) {
    console.log(data);
  }

  var domElement1 = document.getElementById('react-toggle-component-1');
  var domElement2 = document.getElementById('react-toggle-component-2');
  var domElement3 = document.getElementById('react-toggle-component-3');
  var domElement4 = document.getElementById('react-toggle-component-4');
  var domElement5 = document.getElementById('react-toggle-component-5');

  var httpRequests = {

    onState: {
      url: 'https://randomuser.me/api',
      postData: {}
    },

    offState: {
      url: 'https://randomuser.me/api',
      postData: {}
    },
  };
  
  var opts1 = {

    onState: {
      text: 'On'
    },

    offState: { 
      text: 'Off'
    }
  };

  var opts2 = {

    common: {
      styles: {
        textComponent: { 
          color: '#fff',
          fontSize: '14'
        },
        sliderComponent: { 
          backgroundColor: '#fff' 
        }
      }
    },

    onState: {
      text: 'In',
      styles: {
        toggleComponent: { 
          backgroundColor: '#d2112e' 
        },
        textComponent: {
          left: '30'
        }
      }
    },

    offState: { 
      text: 'Out',
      styles: {
        toggleComponent: { 
          backgroundColor: '#000' 
        },
        textComponent: {
          right: '20'
        }
      }
    }
  };

  var opts3 = {

    common: {
      styles: {
        toggleComponent: {
          width: '80'
        },
        sliderComponent: { 
          height: '30',
          top: '4',
          msTransition: 'transform 0.1s ease',
          MozTransition: 'transform 0.1s ease',
          WebkitTransition: '-webkit-transform 0.1s ease',
          transition: 'transform 0.1s ease',
          width: '30'
        }
      }
    },

    onState: {
      styles: {
        toggleComponent: {
          backgroundColor: '#38677e'
        },
        sliderComponent: { 
          left: '5',
          msTransform: 'translate(40px, 0px)',
          MozTransform: 'translate(40px, 0px)',
          WebkitTransform: 'translate(40px, 0px)',
          transform: 'translate(40px, 0px)'
        }
      }
    },

    offState: { 
      styles: {
        toggleComponent: {  
          backgroundColor: '#bbb'
        },
        sliderComponent: { 
          left: '3'
        }
      }
    }
  };

  ReactToggleComponent.init(domElement1, true, callback, httpRequests);
  ReactToggleComponent.init(domElement2, false, callback, httpRequests);
  ReactToggleComponent.init(domElement3, true, callback, httpRequests, opts1);
  ReactToggleComponent.init(domElement4, true, callback, httpRequests, opts2);
  ReactToggleComponent.init(domElement5, true, callback, httpRequests, opts3);

  return {};
    
}));
