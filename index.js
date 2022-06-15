// Import stylesheets
import './style.css';

function getSize(size) {
  return function () {
    document.body.style.fontSize = size + 'px';
  };
}

var k = getSize(12);
var l = getSize(14);
var m = getSize(16);
document.getElementById('size-12').onclick = k;
document.getElementById('size-14').onclick = l;
document.getElementById('size-16').onclick = m;
