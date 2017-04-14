module.exports = (doc, cssText) => {
  const style = doc.createElement('style');
  style.type = 'text/css';
  style.innerHTML = cssText;
  doc.getElementsByTagName('head')[0].appendChild(style);
};
