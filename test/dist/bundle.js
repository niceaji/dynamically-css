(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(cssText){
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = cssText;
  document.getElementsByTagName('head')[0].appendChild(style);
};
},{}],2:[function(require,module,exports){
module.exports = "body {\n  background-color: #333;\n}\nh1 {\n  color: white;\n}\n";
},{}],3:[function(require,module,exports){
var dynamicallyCss = require('..');
var cssText = require('./app.css');

dynamicallyCss(cssText);

},{"..":1,"./app.css":2}]},{},[3]);
