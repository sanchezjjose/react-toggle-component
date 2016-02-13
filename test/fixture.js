
var Fixture = {

  httpRequests: {

    onState: { 
      url: "http://localhost:3000", 
      postData: {} 
    },

    offState: { 
      url: "http://localhost:3000", 
      postData: {} 
    }    
  },

  callback: function callback(data) {
    console.log(data);
  },

  opts: { 
    common: {
      styles: {
        toggleComponent: { },
        sliderComponent: { },
        textComponent: { },
      }
    },

    onState: {},

    offState: {}
  }
};

module.exports = Fixture;
