addEventListener("keydown", (e) => {
  const keycode = (e.keyCode ? e.keyCode : e.which);
  console.log(keycode)
  switch (keycode){
    case 69:
      window.dpaddebug.toggleDebugMode();
      break;
    case 48:
      document.getElementById("c0").focus();
      document.activeElement.click();
      break;
    case 49:
      document.getElementById("c1").focus();
      document.activeElement.click();
      break;
    case 50:
      document.getElementById("c2").focus();
      document.activeElement.click();
      break;
    case 51:
      document.getElementById("c3").focus();
      document.activeElement.click();
      break;
    case 52:
      document.getElementById("c4").focus();
      document.activeElement.click();
      break;
    case 53:
      document.getElementById("c5").focus();
      document.activeElement.click();
      break;
    case 54:
      document.getElementById("c6").focus();
      document.activeElement.click();
      break;
    case 55:
      document.getElementById("c7").focus();
      document.activeElement.click();
      break;
    case 56:
      document.getElementById("c8").focus();
      document.activeElement.click();
      break;
    case 57:
      document.getElementById("c9").focus();
      document.activeElement.click();
      break;

  }
  if (keycode === 13) {
    document.activeElement.click();
  }
});
addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  console.log('Title shared: ' + parsedUrl.searchParams.get('title'));
  console.log('Text shared: ' + parsedUrl.searchParams.get('text'));
  console.log('URL shared: ' + parsedUrl.searchParams.get('url'));
});