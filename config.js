exports.config = {
  multiCapabilities: [
    {
      'browserName': 'chrome',
      seleniumAddress: 'http://localhost:4444/wd/hub'
    }
  ],
  framework: 'jasmine2',
  specs: ['test.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
