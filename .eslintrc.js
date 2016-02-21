module.exports = {

  "rules": {
    "indent": [
      2,
      2
    ],
    "quotes": [
      2,
      "double"
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "semi": [
      2,
      "always"
    ],
    "react/jsx-uses-vars": 1
  },
  "env": {
    "es6": true,
    "node": true,
    "amd": true,
    "browser": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react"
  ],
  "extends": "eslint:recommended"
};
