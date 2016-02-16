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

```
ReactToggleComponent.init(document.body, true, function(){ console.log('init!!!') }, {
  onState: {
    url: 'https://randomuser.me/api', postData: {}
  },

  offState: {
    url: 'https://randomuser.me/api', postData: {}
  },
});
```

# Options

You can use options to change or add any styling, by passing a simple JavaScript object.

WIP.......................
