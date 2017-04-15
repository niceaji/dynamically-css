module.exports = function(cssText){
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = cssText;
  document.getElementsByTagName('head')[0].appendChild(style);
};
