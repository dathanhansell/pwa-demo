addEventListener("keydown", (e) => {

  const keycode = (e.keyCode ? e.keyCode : e.which);
  switch (keycode) {
    case 69:
      window.dpaddebug.toggleDebugMode();
      break;
    case 48:
      document.getElementById("c0").focus();
      document.activeElement.click();
      e.preventDefault();
      break;
    case 49:
      document.getElementById("c1").focus();
      document.activeElement.click();
      e.preventDefault();
      break;
    case 50:
      document.getElementById("c2").focus();
      document.activeElement.click();
      e.preventDefault();
      break;
    case 51:
      document.getElementById("c3").focus();
      document.activeElement.click();
      e.preventDefault();
      break;
    case 52:
      document.getElementById("c4").focus();
      document.activeElement.click();
      e.preventDefault();
      break;
    case 53:
      document.getElementById("c5").focus();
      document.activeElement.click();
      e.preventDefault();
      break;
    case 54:
      document.getElementById("c6").focus();
      document.activeElement.click();
      e.preventDefault();
      break;
    case 55:
      document.getElementById("c7").focus();
      document.activeElement.click();
      e.preventDefault();
      break;
    case 56:
      document.getElementById("c8").focus();
      document.activeElement.click();
      e.preventDefault();
      break;
    case 57:
      document.getElementById("c9").focus();
      document.activeElement.click();
      e.preventDefault();
      break;

  }
  if (keycode === 13) {
    document.activeElement.click();
  }
});
//todo fix hacky solution
addEventListener('popstate', () => {
  console.log('popstate');
  setTimeout(checkDOMChange, 200);
});
addEventListener('load', () => {
  console.log("load");
});
addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded")
  setTimeout(checkDOMChange, 1000);
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  console.log('Title shared: ' + parsedUrl.searchParams.get('title'));
  console.log('Text shared: ' + parsedUrl.searchParams.get('text'));
  console.log('URL shared: ' + parsedUrl.searchParams.get('url'));
});
function checkDOMChange() {
  console.log("updated")
  window.dpad.update();
  // check for any new element being inserted here,
  // or a particular node being modified

  // call the function again after 100 milliseconds

}