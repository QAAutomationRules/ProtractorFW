// spec.js
'use strict';

  var CalculatorPage = require('../ProtractorFW/CalculatorPage.js');

describe('Calculator Page', function () {
    var calculatorPage;


  beforeEach(function() {
    calculatorPage = new CalculatorPage();
  });

  it('History should be added to the table as the calculations are run', function() {
    
    calculatorPage.add(1, 2);

    expect(calculatorPage.history.count()).toEqual(1);

    calculatorPage.add(3, 4);
    
    expect(calculatorPage.history.count()).toEqual(2);

    calculatorPage.add(5, 6);

    expect(calculatorPage.history.count()).toEqual(3); 

  });

  it('The add number result should display correctly.', function() {
    calculatorPage.add(1, 2);

    expect(calculatorPage.result.getText()).toEqual('3');
  
    calculatorPage.result.getText().then(function(text) {
      console.log(text);
    });

    calculatorPage.add(3, 4);

    expect(calculatorPage.result.getText()).toEqual('7');

    calculatorPage.result.getText().then(function(text) {
      console.log(text);
    });

    calculatorPage.add(5, 6);

    expect(calculatorPage.result.getText()).toEqual('11');

    calculatorPage.result.getText().then(function(text) {
      console.log(text);
    });

  });

});