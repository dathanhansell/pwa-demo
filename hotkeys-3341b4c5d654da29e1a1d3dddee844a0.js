function checkDOMChange(){console.log("updated"),window.dpad.update()}addEventListener("keydown",(e=>{const t=e.keyCode?e.keyCode:e.which
switch(t){case 69:window.dpaddebug.toggleDebugMode()
break
case 48:document.getElementById("c0").focus(),document.activeElement.click(),e.preventDefault()
break
case 49:document.getElementById("c1").focus(),document.activeElement.click(),e.preventDefault()
break
case 50:document.getElementById("c2").focus(),document.activeElement.click(),e.preventDefault()
break
case 51:document.getElementById("c3").focus(),document.activeElement.click(),e.preventDefault()
break
case 52:document.getElementById("c4").focus(),document.activeElement.click(),e.preventDefault()
break
case 53:document.getElementById("c5").focus(),document.activeElement.click(),e.preventDefault()
break
case 54:document.getElementById("c6").focus(),document.activeElement.click(),e.preventDefault()
break
case 55:document.getElementById("c7").focus(),document.activeElement.click(),e.preventDefault()
break
case 56:document.getElementById("c8").focus(),document.activeElement.click(),e.preventDefault()
break
case 57:document.getElementById("c9").focus(),document.activeElement.click(),e.preventDefault()}13===t&&document.activeElement.click()})),addEventListener("popstate",(()=>{console.log("popstate"),setTimeout(checkDOMChange,200)})),addEventListener("load",(()=>{console.log("load")})),addEventListener("DOMContentLoaded",(()=>{console.log("DOMContentLoaded"),setTimeout(checkDOMChange,1e3)
const e=new URL(window.location)
console.log("Title shared: "+e.searchParams.get("title")),console.log("Text shared: "+e.searchParams.get("text")),console.log("URL shared: "+e.searchParams.get("url"))}))
