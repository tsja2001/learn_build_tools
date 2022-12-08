(()=>{"use strict";var e,t,r,n,o,a={},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return a[e](r,r.exports,c),r.exports}c.m=a,e=[],c.O=(t,r,n,o)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,n,o]=e[d],i=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(c.O).every((e=>c.O[e](r[u])))?r.splice(u--,1):(i=!1,o<a&&(a=o));if(i){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]},c.F={},c.E=e=>{Object.keys(c.F).map((t=>{c.F[t](e)}))},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,c.d(o,a),o},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"js/"+{139:"aaa",892:"bbb"}[e]+"-"+{139:"553d614b12f3eeaa71de",892:"4ebcedf2dd2239827825"}[e]+"-chunk.js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="webpack:",c.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var i,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var f=l[d];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==o+r){i=f;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",o+r),i.src=e),n[e]=[t];var s=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e+"../"})(),(()=>{var e={826:0};c.f.j=(t,r)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=c.p+c.u(t),i=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}},c.F.j=t=>{if(!c.o(e,t)||void 0===e[t]){e[t]=null;var r=document.createElement("link");c.nc&&r.setAttribute("nonce",c.nc),r.rel="prefetch",r.as="script",r.href=c.p+c.u(t),document.head.appendChild(r)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,i,u]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);if(u)var d=u(c)}for(t&&t(r);l<a.length;l++)o=a[l],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(d)},r=self.webpackChunkwebpack=self.webpackChunkwebpack||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),c.O(0,[826],(()=>{c.E(139),c.E(892)}),5);var u={};const l=React;var d=c.n(l);const f=ReactDOM;var s=c.n(f);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const b=(0,l.memo)((function(){var e,t,r=(e=(0,l.useState)(0),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],o=r[1];return d().createElement("div",null,d().createElement("h1",null,"App Count: ",n),d().createElement("button",{onClick:function(e){return o(n+1)}},"+1"))}));var m=s().createRoot(document.querySelector("#root")),v=document.createElement("button");v.textContent="1111",document.body.append(v);var h=document.createElement("button");h.textContent="222",document.body.append(h),v.addEventListener("click",(function(){c.e(139).then(c.t.bind(c,171,23))})),h.addEventListener("click",(function(){c.e(892).then(c.t.bind(c,476,23))})),m.render(d().createElement(b,null)),u=c.O(u)})();