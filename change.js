document.documentElement.appendChild(document.createElement("script")).textContent = `
(() => {
  var i = Array.prototype.indexOf;
  Array.prototype.indexOf = function(n) {
    return n != null && !isNaN(n) && n.length == 7 ? 0 : i.apply(this, arguments)
  }
})()
`;