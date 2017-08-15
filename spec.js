// spec.js
'use strict';

  var CalculatorPage = require('../ProtractorFW/CalculatorPage.js');

describe('Calculator Page', function () {
    var page;


  beforeEach(function() {
    page = new CalculatorPage();
  });

  it('History should be added to the table as the calculations are run', function() {
    
    page.add(1, 2);

    expect(page.history.count()).toEqual(1);

    page.add(3, 4);
    
    expect(page.history.count()).toEqual(2);

    page.add(5, 6);

    expect(page.history.count()).toEqual(3); 

  });

  it('The add number result should display correctly.', function() {
    page.add(1, 2);

    expect(page.result.getText()).toEqual('3');
  
    page.result.getText().then(function(text) {
      console.log(text);
    });

    page.add(3, 4);

    expect(page.result.getText()).toEqual('7');

    page.result.getText().then(function(text) {
      console.log(text);
    });

    page.add(5, 6);

    expect(page.result.getText()).toEqual('11');

    page.result.getText().then(function(text) {
      console.log(text);
    });

  });

});