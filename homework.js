var webdriver = require('selenium-webdriver');
var $browser = new webdriver.Builder().forBrowser('chrome').build();
var $driver = webdriver;
var until = webdriver.until;
var assert = require('assert');
var By = $driver.By;
$browser.manage().window().maximize();

//Helpers
var scrollTo = function(selector){
  var element = $browser.findElement(selector);
  $browser.executeScript("arguments[0].scrollIntoView()", element);
};

//end Helpers


$browser.get('https://legalshield.com').then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return $browser.findElement(By.linkText('GET STARTED TODAY')).click();
}).then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return $browser.quit();
})
