try {
  var c = JSON.parse(localStorage.getItem('openplate-start-colors') || 'null');
  if (c && typeof c === 'object') {
    var r = document.documentElement.style;
    ['bg', 'accent', 'leaf', 'face', 'text', 'track'].forEach(function (k) {
      if (typeof c[k] === 'string' && /^#[0-9a-fA-F]{3,8}$/.test(c[k])) r.setProperty('--op-' + k, c[k]);
    });
    // Appearance → Motion → Off: the start screen keeps still too.
    if (c.still === true) document.documentElement.classList.add('op-still');
  }
} catch (e) {}
