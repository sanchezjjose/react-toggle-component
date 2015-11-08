'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['./toggle.js'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('./toggle.js')
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
    url: '/rsvp/player/111111/game/111111',
    postData: { rsvp: 'in', team_id: '111111' }
  };
  
  var offStateHttpRequest = {
    url: '/rsvp/player/111111/game/111111',
    postData: { rsvp: 'out', team_id: '111111' }
  };
  
  var opts = {

    onState: { 
      buttonTextValue: 'In',
      buttonStyle: {
        backgroundColor: 'red',
        border: '3px solid red'
      }
    },

    offState: { 
      buttonTextValue: 'Out',
      buttonStyle: {
        backgroundColor: 'black',
        border: '3px solid black'
      }
    }
  };

  reactToggle.init(
    domElement,
    callback,
    onStateHttpRequest,
    offStateHttpRequest,
    opts
  );

  return {};
    
}));
