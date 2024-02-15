function activateHotkeyElement(e,t,o){const n=document.getElementById("c"+e)
console.log(n.type),n.focus(),document.activeElement.click(),"button"===n.type&&o.focus(),t.preventDefault()}function checkDOMChange(){console.log("updated"),window.dpad.update()}addEventListener("keydown",(e=>{const t=e.keyCode?e.keyCode:e.which,o=document.activeElement
if(69===t)window.dpaddebug.toggleDebugMode()
const n=t-48
n<10&&n>=0&&activateHotkeyElement(n,e,o),13===t&&document.activeElement.click()})),addEventListener("hashchange",(()=>{console.log("hashchange"),setTimeout(checkDOMChange,200)})),addEventListener("load",(()=>{console.log("load")})),addEventListener("DOMContentLoaded",(()=>{console.log("DOMContentLoaded"),setTimeout(checkDOMChange,1e3)
const e=new URL(window.location)
console.log("Title shared: "+e.searchParams.get("title")),console.log("Text shared: "+e.searchParams.get("text")),console.log("URL shared: "+e.searchParams.get("url"))}))
