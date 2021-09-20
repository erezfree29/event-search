function giOver() {
  document.querySelector('.hide').style.display = 'block';
  document.querySelector('.gr').style.height = '80px';
}

function giOut() {
  document.querySelector('.hide').style.display = 'none';
  document.querySelector('.gr').style.height = '56px';
}

function uiOver() {
  document.querySelector('.hide_two').style.display = 'block';
  document.querySelector('.two').style.display = 'none';
  document.querySelector('.ui').style.height = '80px';
}
function uiOut() {
  document.querySelector('.hide_two').style.display = 'none';
  document.querySelector('.two').style.display = 'block';
  document.querySelector('.ui').style.height = '56px';
}

document.querySelector('.gr_contain').onmouseover = function () { giOver(); };
document.querySelector('.gr_contain').onmouseout = function () { giOut(); };
document.querySelector('.ui_contain').onmouseover = function () { uiOver(); };
document.querySelector('.ui_contain').onmouseout = function () { uiOut(); };
