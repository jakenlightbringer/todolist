(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!e;)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"images/add.png";document.addEventListener("DOMContentLoaded",(()=>{(function(){const t=document.getElementById("project-container"),e=document.createElement("input");e.type="text",e.placeholder="Enter Title...",e.id="titleInput",t.appendChild(e)})(),function(){const t=document.getElementById("new-button"),n=document.createElement("img");n.src=e,n.style.height="25px",n.style.width="25px",t.appendChild(n)}()}))})();