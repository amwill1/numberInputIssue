var webdriver = require('./node_modules/selenium-webdriver');
var seleniumAddress = "http://localhost:4444/wd/hub";

var driver = new webdriver.Builder().
    usingServer(seleniumAddress).
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

driver.get('http://amwill1.github.io/numberInputIssue/index.html');
driver.sleep(5000);
var numInput = driver.findElement(webdriver.By.id('numInput'));
var textInput = driver.findElement(webdriver.By.id('textInput'));
numInput.clear();
driver.sleep(2000);
numInput.sendKeys('77');
driver.sleep(2000);
textInput.clear();
driver.sleep(2000);


// describe('Test', function () {
//   it('should work!!!', function() {
//     browser.ignoreSynchronization = true;
//     browser.get('http://amwill1.github.io/numberInputIssue/index.html');
//     browser.sleep(5000);
//     var numInput = element(by.id('numInput'));
//     numInput.clear();
//     browser.sleep(2000);
//     numInput.sendKeys('7');
//     browser.sleep(2000);
//   });
// });
