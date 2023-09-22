(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),c=n(645),a=n.n(c)()(o());a.push([e.id,"#add-project-popup{\n    display: none;\n}\n.new-project-button{\n    display: flex;\n    justify-content: flex-end;\n}\n#new-button > img{\n    height: 30px;\n    width: 30px;\n}",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],u=c[s]||0,l="".concat(s," ").concat(u);c[s]=u+1;var p=n(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var d=r(e,o),s=0;s<c.length;s++){var u=n(c[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}c=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=function e(){const t=document.getElementById("project-container"),n={},r=document.createElement("div");r.id="todo-container";const o=document.createElement("input");o.type="text",o.id="todo-input",o.placeholder="Add New Task...";const c=document.createElement("button");return c.innerHTML="Add Item!",c.addEventListener("click",(()=>{const t=o.value.trim();if(""!==t){const c=document.createElement("li");c.innerHTML=t,n.null.push(c.innerText),document.createElement("div").innerHTML=todoArray;const a=document.createElement("button");a.innerHTML="Delete",a.addEventListener("click",(()=>{r.removeChild(c),n.null=n.null.filter((t=>t!==e.innerHTML))})),c.appendChild(a),r.appendChild(c),o.value=""}})),r.appendChild(o),r.appendChild(c),t.appendChild(r),{getProjectTodos:e=>n[e]||[]}},t=function(){const t=document.getElementById("add-project-popup"),n=document.querySelectorAll("li"),r=document.getElementById("sidebar-container"),o=document.getElementById("add-project-form");document.getElementsByClassName("project-button"),document.getElementById("project-container"),t.style.display="block";const c=Array.from(n);o.addEventListener("submit",(n=>{n.preventDefault();const a=o.elements.project.value,i=document.createElement("li"),d=document.createElement("button");d.classList.add("project-button"),d.innerHTML=a,c.push(a),i.appendChild(d),r.appendChild(i),o.reset(),t.style.display="none",d.addEventListener("click",(()=>{(function(){const e=document.getElementById("project-container");for(console.log("click");e.firstChild;)e.removeChild(e.firstChild)})(),e.setCurrentProject(a)}))}))};var r=n(379),o=n.n(r),c=n(795),a=n.n(c),i=n(569),d=n.n(i),s=n(565),u=n.n(s),l=n(216),p=n.n(l),f=n(589),m=n.n(f),v=n(28),h={};h.styleTagTransform=m(),h.setAttributes=u(),h.insert=d().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("new-button");e(),n.addEventListener("click",(()=>{t()}))}))})()})();