'use strict'; 

var CalculatorPage = function () { 
  browser.get('http://juliemr.github.io/protractor-demo/'); 
}; 

CalculatorPage.prototype = Object.create({}, { 
    firstNumber: { get: function () { return element(by.model('first')); }}, 
    secondNumber: { get: function () { return element(by.model('second')); }}, 
    goButton: { get: function () { return element(by.id('gobutton')); }}, 
    result: { get: function () { return element(by.css('h2')); }},
    history: { get: function () { return element.all(by.repeater('result in memory')); }}, 
    add: { value: function (a, b) { 
    this.firstNumber.sendKeys(a); 
    this.secondNumber.sendKeys(b); 
    this.goButton.click(); 
  }} 
}); 

module.exports = CalculatorPage; 
