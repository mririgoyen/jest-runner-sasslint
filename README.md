<div align="center">
  <img width="150" height="150" src="https://cdn.worldvectorlogo.com/logos/sass-1.svg">
  <a href="https://facebook.github.io/jest/">
    <img width="150" height="150" vspace="" hspace="25" src="https://cdn.worldvectorlogo.com/logos/jest-0.svg">
  </a>
  <h1>jest-runner-sasslint</h1>
  <p>Sass Lint runner for Jest</p>
</div>

## Usage

### Install

Install `jest` _(Jest 21+)_ and `jest-runner-sasslint`

```bash
yarn add --dev jest jest-runner-sasslint
```

### Add it to your Jest config

In your `package.json`
```json
{
  "jest": {
    "runner": "jest-runner-sasslint",
    "displayName": "Sass Lint",
    "testMatch": ["<rootDir>/src/**/*.scss"],
    "moduleFileExtensions": ["scss"]
  }
}
```

Or in `jest.config.js`
```js
module.exports = {
  runner: 'jest-runner-sasslint',
  displayName: 'Sass Lint',
  testMatch: ['<rootDir>/src/**/*.scss'],
  moduleFileExtensions: ['scss']
}
```

### Run Jest
```bash
yarn jest
```
