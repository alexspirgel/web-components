!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports='<link href="components/button-hamburger/dist/style/style.css" rel="stylesheet"></link>\r\n<button class="stage">\r\n\t<span class="line"></span>\r\n\t<span class="line"></span>\r\n\t<span class="line"></span>\r\n</button>'},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);let i=document.createElement("template");i.innerHTML=o.a;window.customElements.define("button-hamburger",class extends HTMLElement{static get activeAttribute(){return"active"}get buttonElement(){return this.shadowRoot.querySelector("button")}get active(){return this.buttonElement.hasAttribute(this.constructor.activeAttribute)}set active(t){t?this.buttonElement.setAttribute(this.constructor.activeAttribute,""):this.buttonElement.removeAttribute(this.constructor.activeAttribute)}constructor(){super(),this.attachShadow({mode:"open"}).appendChild(i.content.cloneNode(!0)),this.buttonElement.addEventListener("click",t=>{this.toggleHamburger()})}toggleHamburger(){this.active?this.active=!1:this.active=!0}})}]);