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
driver.sleep(5000);
textInput.clear();
driver.sleep(5000);
