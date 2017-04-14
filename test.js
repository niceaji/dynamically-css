const dynamicallyCss = require('.');
const jsdom = require('jsdom');

jsdom.env(
  '<h1>dynamicallyCss</h1>',
  ['http://code.jquery.com/jquery.js'],
  function (err, window) {
    dynamicallyCss(window.document, 'h1 {color:red}');
    console.log(window.$('h1').css('color') === 'red');
  }
);
