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

//scroll down to find an assoicate
//click it
//clikc into zip code search

$browser.get('https://legalshield.com').then(function(){
  return $browser.sleep(3000);
}).then(function(){
  return scrollTo(By.css('.media-container > p:nth-child(1)'));
  //return scrollTo(By.css('.a.btn-row:nth-child(1)'));
  }).then(function(){
    return $browser.sleep(3000);
  }).then(function(){
  return $browser.findElement(By.linkText('FIND AN ASSOCIATE')).click();
}).then(function(){
  return $browser.sleep(3000);
  }).then(function(){
    return $browser.findElement(By.css('#find-associate-zip-code')).click();
  }).then(function(){
    return $browser.sleep(3000);
    }).then(function(){
    return $browser.quit();
    })
