addEventListener('keydown', (e) => {

  const keycode = (e.keyCode ? e.keyCode : e.which);
  const prev = document.activeElement;
  switch (keycode) {
    case 69:
      window.dpaddebug.toggleDebugMode();
      break;
  }
  const offsetKeycode = keycode - 48;
  if (offsetKeycode < 10 && offsetKeycode >= 0) {
    activateHotkeyElement(offsetKeycode, e, prev);
  }
  if (keycode === 13) {
    document.activeElement.click();
  }
});
function activateHotkeyElement(n, e, prev) {
  const el = document.getElementById('c' + n);
  console.log(el.type);
  el.focus();

  document.activeElement.click();
  if(el.type === 'button'){
    prev.focus();
  }
  e.preventDefault();
}
//todo fix hacky solution
addEventListener('hashchange', () => {
  console.log('hashchange');
  setTimeout(checkDOMChange, 200);
});
addEventListener('load', () => {
  console.log('load');
});
addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  setTimeout(checkDOMChange, 1000);
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  console.log("Title shared: " + parsedUrl.searchParams.get("title"));
  console.log("Text shared: " + parsedUrl.searchParams.get("text"));
  console.log("URL shared: " + parsedUrl.searchParams.get("url"));
});
function checkDOMChange() {
  console.log("updated");
  window.dpad.update();
  // check for any new element being inserted here,
  // or a particular node being modified

  // call the function again after 100 milliseconds

}