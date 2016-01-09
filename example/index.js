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
  const domElement5 = document.getElementById('react-toggle-component-5');

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
      text: 'On'
    },
    offState: { 
      text: 'Off'
    }
  };

  const opts2 = {
    onState: {
      text: 'In',
      styles: {
        buttonComponent: { backgroundColor: '#d2112e' },
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

  const opts3 = {
    onState: {
      styles: {
        buttonComponent: {
          backgroundColor: '#38677e',
          width: '80'
        },
        sliderComponent: { 
          height: '30',
          left: '5',
          top: '4',
          transform: 'translate(40px, 0px)',
          transition: 'transform 0.1s ease',
          width: '30'
        }
      }
    },

    offState: { 
      styles: {
        buttonComponent: {  
          backgroundColor: '#bbb',
          width: '80'
        },
        sliderComponent: { 
          height: '30',
          left: '3',
          top: '4',
          transition: 'transform 0.1s ease',
          width: '30'
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
