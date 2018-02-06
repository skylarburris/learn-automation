var webdriver = require('selenium-webdriver');
var $browser = new webdriver.Builder().forBrowser('chrome').build();
var $driver = webdriver;
var until = webdriver.until;
var assert = require('assert');
var By = $driver.By;
$browser.manager();
$browser.manager().timeout().implicitlyWait(10000);


$broswer.get('https://www.google.com/')

$broswer.quit();
