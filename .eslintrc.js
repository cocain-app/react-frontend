module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "indent": [2, 2],
      "semi": [2, "never"],
      "quotes": [2, "double"],
      "no-alert": 0,
      "no-restricted-globals": [
        0, "confirm"
      ],
    }
};