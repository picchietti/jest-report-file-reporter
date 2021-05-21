# Jest Report File Reporter

Your coverage reports output a html file, right? This jest plugin outputs the path to that file.

Most modern terminal emulators will allow you to click the link this reporter outputs to open it in the default browser. For example, [Alacritty](https://github.com/alacritty/alacritty) supports this feature.

Respects jest's `collectCoverage` config value. If `collectCoverage` is `false`, this reporter does not output anything.

Complements jest's `text-summary` coverage reporter.

## Install
`yarn add --dev jest-report-file-reporter` or `npm install --save-dev jest-report-file-reporter`

## Setup
Add `jest-report-file-reporter` to the `reporters` array in your `jest.config.js`:

```js
reporters: [
  'jest-report-file-reporter'
],
```

## Supported Reporters
All html outputting [istanbul reports](https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib) are supported. More specifically, `html`, `hmtl-spa`, and `lcov` are supported.

If you use a custom reporter you can pass a `path` option. For example, you can support [jest-html-reporter](https://github.com/Hargne/jest-html-reporter) by adding this to your `jest.config.js`:

```js
reporters: [
  'jest-html-reporter',
  ['jest-report-file-reporter', { path: '<rootDir>/test-report.html' }]
],
```

## Limitations
- Only one report path is output. Do you need to output multiple html reports? I'd like to hear about your use case in an issue!
- I use linux, so I can't test this on windows, but would appreciate anyone who could. Perhaps we could sprinkle in a `path.normalize` or some other cross-platform code?
