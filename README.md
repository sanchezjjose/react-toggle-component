[![Build Status](https://travis-ci.org/sanchezjjose/react-toggle-component.svg?branch=master)](https://travis-ci.org/sanchezjjose/react-toggle-component) [![Coverage Status](https://coveralls.io/repos/github/sanchezjjose/react-toggle-component/badge.svg?branch=master)](https://coveralls.io/github/sanchezjjose/react-toggle-component?branch=master)

# React Toggle Button Component

A toggle button written in React, and supports making async http requests. Styles and transitions are fully customizable on init, for both on and off states.

# Github Page
http://sanchezjjose.github.io/react-toggle-component

# Getting Started

### Installation

```
npm install react-toggle-component
```
or download one of the following distributions and drop it on the page:

```
dist/react-toggle-component.dev.js
```

```
dist/react-toggle-component.min.js
```

### Usage

Initialize with `ReactToggleComponent`:

- Browser: `window.ReactToggleComponent`
- CommonJS and NodeJS: `const ReactToggleComponent = require("react-toggle-component")`

Example:

```
var domElement = document.body;

var initialStateOn = true;

var callback = function (data) { 
  console.log(data); 
};

var httpRequests = {
  onState: {
    url: 'https://randomuser.me/api', 
    postData: {}
  },

  offState: {
    url: 'https://randomuser.me/api', 
    postData: {}
  }
};

ReactToggleComponent.init(domElement, initialStateOn, callback, httpRequests);
```

The callback accepts a data object containing the response data. The httpRequests variable contains 2 objects, one for the on state, and the other for the off state, each accepting their own url and post data object.

# Options

The options are used to override styles, and add a text label. You can set the toggle button options on init: `ReactToggleComponent.init(domElement, initialState, callback, httpRequests, opts);`.

The following objects can be set on the options parameter.

### common

This object applies styles to both the on and off states.

```
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
}
```

### onState

This object applies styles only to the on state.

```
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
}
```

### offState

This object applies styles only to the off state.

```
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
```

### styles

The styles object can be set on the common, onState and offState objects, as shown above. It can be used to set styles on the components indepedently. It accepts inline styles based on React formatting. Read more here https://facebook.github.io/react/tips/inline-styles.html.

```
styles: {
  toggleComponent: { 
    // inline styles here 
  },
  textComponent: {
    // inline styles here
  },
  sliderComponent: {
    // inline styles here
  }
}
```
