var injectCode = '(' + function() { Object.defineProperty(Object.getPrototypeOf(navigator), 'platform', {value: 'sb_baidu',}); } + ')();';

var script = document.createElement('script');
script.textContent = injectCode;
document.documentElement.appendChild(script);
script.remove();
