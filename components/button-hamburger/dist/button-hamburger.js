!function(t){var n={};function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=3)}([function(t,n,r){(t.exports=r(2)(!1)).push([t.i,':host {\n  display: inline-block; }\n\n.button-hamburger__button {\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n  cursor: pointer; }\n\n.button-hamburger__stage {\n  position: relative;\n  width: 50px;\n  height: 35px;\n  background-color: transparent; }\n\n.button-hamburger__line {\n  position: absolute;\n  display: inline-block;\n  width: 100%;\n  height: 7px;\n  left: 0;\n  border-radius: 7px;\n  background-color: black; }\n  .button-hamburger__line:first-child {\n    top: 0; }\n  .button-hamburger__line:nth-child(2) {\n    top: calc(50% - (7px / 2)); }\n  .button-hamburger__line:last-child {\n    top: calc(100% - 7px); }\n\n/**\r\n * Transition: none\r\n */\n:host([transition=\'none\'][active]) .button-hamburger__line:first-child,\n:host([transition=\'\'][active]) .button-hamburger__line:first-child,\n:host(:not([transition])[active]) .button-hamburger__line:first-child {\n  top: calc(50% - (7px / 2));\n  transform: rotate(45deg); }\n\n:host([transition=\'none\'][active]) .button-hamburger__line:nth-child(2),\n:host([transition=\'\'][active]) .button-hamburger__line:nth-child(2),\n:host(:not([transition])[active]) .button-hamburger__line:nth-child(2) {\n  opacity: 0; }\n\n:host([transition=\'none\'][active]) .button-hamburger__line:last-child,\n:host([transition=\'\'][active]) .button-hamburger__line:last-child,\n:host(:not([transition])[active]) .button-hamburger__line:last-child {\n  top: calc(50% - (7px / 2));\n  transform: rotate(-45deg); }\n\n/**\r\n * Transition: spin\r\n */\n:host([transition="spin"]) .button-hamburger__stage {\n  transition: transform 199.5ms ease-out 0ms; }\n\n:host([transition="spin"]) .button-hamburger__line:first-child {\n  transition: top 150.5ms ease 199.5ms; }\n\n:host([transition="spin"]) .button-hamburger__line:nth-child(2) {\n  transition: opacity 0ms linear 199.5ms; }\n\n:host([transition="spin"]) .button-hamburger__line:last-child {\n  transition: top 150.5ms ease 150.5ms, transform 150.5ms linear 49ms; }\n\n:host([transition="spin"][active]) .button-hamburger__stage {\n  transform: rotate(135deg);\n  transition: transform 199.5ms ease-in 150.5ms; }\n\n:host([transition="spin"][active]) .button-hamburger__line {\n  top: calc(50% - (7px / 2)); }\n  :host([transition="spin"][active]) .button-hamburger__line:first-child {\n    transition: top 150.5ms ease 0ms; }\n  :host([transition="spin"][active]) .button-hamburger__line:nth-child(2) {\n    opacity: 0;\n    transition: opacity 0ms linear 150.5ms; }\n  :host([transition="spin"][active]) .button-hamburger__line:last-child {\n    transform: rotate(90deg);\n    transition: top 150.5ms ease 0ms, transform 150.5ms linear 150.5ms; }\n\n/**\r\n * Transition: squeeze\r\n */\n:host([transition="squeeze"]) .button-hamburger__line:first-child {\n  transition: top 125ms ease 125ms, transform 125ms ease 0ms; }\n\n:host([transition="squeeze"]) .button-hamburger__line:nth-child(2) {\n  transition: opacity 0ms linear 125ms; }\n\n:host([transition="squeeze"]) .button-hamburger__line:last-child {\n  transition: top 125ms ease 125ms, transform 125ms ease 0ms; }\n\n:host([transition="squeeze"][active]) .button-hamburger__line {\n  top: calc(50% - (7px / 2)); }\n  :host([transition="squeeze"][active]) .button-hamburger__line:first-child {\n    transform: rotate(45deg);\n    transition: top 125ms ease 0ms, transform 125ms ease 125ms; }\n  :host([transition="squeeze"][active]) .button-hamburger__line:nth-child(2) {\n    opacity: 0;\n    transition: opacity 0ms linear 125ms; }\n  :host([transition="squeeze"][active]) .button-hamburger__line:last-child {\n    transform: rotate(-45deg);\n    transition: top 125ms ease 0ms, transform 125ms ease 125ms; }\n\n/**\r\n * Transition: arrow-left\r\n */\n:host([transition^="arrow-"]) .button-hamburger__line:first-child {\n  transition: width 150ms ease 0ms, top 150ms ease 0ms, transform 150ms ease 0ms; }\n\n:host([transition^="arrow-"]) .button-hamburger__line:nth-child(2) {\n  transition: width 75ms ease 0ms, left 75ms ease 0ms, right 75ms ease 0ms; }\n\n:host([transition^="arrow-"]) .button-hamburger__line:last-child {\n  transition: width 150ms ease 0ms, top 150ms ease 0ms, transform 150ms ease 0ms; }\n\n:host([transition^="arrow-"][active]) .button-hamburger__line:first-child {\n  width: calc(50px / 2);\n  top: calc(50% - (7px / 2) + (7px / 2)); }\n\n:host([transition^="arrow-"][active]) .button-hamburger__line:nth-child(2) {\n  width: calc(100% - (7px / 2));\n  transition: width 75ms ease 75ms, left 75ms ease 75ms, right 75ms ease 75ms; }\n\n:host([transition^="arrow-"][active]) .button-hamburger__line:last-child {\n  width: calc(50px / 2);\n  top: calc(50% - (7px / 2) - (7px / 2)); }\n\n:host([transition="arrow-left"]) .button-hamburger__line:first-child {\n  transform-origin: 0% 0%; }\n\n:host([transition="arrow-left"]) .button-hamburger__line:last-child {\n  transform-origin: 0% 100%; }\n\n:host([transition="arrow-left"][active]) .button-hamburger__line:first-child {\n  transform: rotate(-45deg); }\n\n:host([transition="arrow-left"][active]) .button-hamburger__line:nth-child(2) {\n  left: calc(7px / 2); }\n\n:host([transition="arrow-left"][active]) .button-hamburger__line:last-child {\n  transform: rotate(45deg); }\n\n:host([transition="arrow-right"]) .button-hamburger__line:first-child {\n  right: 0;\n  left: auto;\n  transform-origin: 100% 0%; }\n\n:host([transition="arrow-right"]) .button-hamburger__line:last-child {\n  right: 0;\n  left: auto;\n  transform-origin: 100% 100%; }\n\n:host([transition="arrow-right"][active]) .button-hamburger__line:first-child {\n  transform: rotate(45deg); }\n\n:host([transition="arrow-right"][active]) .button-hamburger__line:nth-child(2) {\n  right: calc(7px / 2); }\n\n:host([transition="arrow-right"][active]) .button-hamburger__line:last-child {\n  transform: rotate(-45deg); }\n',""])},function(t,n){t.exports='<button class="button-hamburger__button">\r\n\t<div class="button-hamburger__stage">\r\n\t\t<span class="button-hamburger__line"></span>\r\n\t\t<span class="button-hamburger__line"></span>\r\n\t\t<span class="button-hamburger__line"></span>\r\n\t</div>\r\n\t<slot class="button-hamburger__text"></slot>\r\n</button>'},function(t,n,r){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var r=function(t,n){var r=t[1]||"",e=t[3];if(!e)return r;if(n&&"function"==typeof btoa){var i=(s=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=e.sources.map(function(t){return"/*# sourceURL="+e.sourceRoot+t+" */"});return[r].concat(o).concat([i]).join("\n")}var s;return[r].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var e={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(e[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];null!=s[0]&&e[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),n.push(s))}},n}},function(t,n,r){"use strict";r.r(n);var e=r(0),i=r.n(e),o=r(1),s=r.n(o);window.customElements.define("button-hamburger",class extends HTMLElement{static get template(){return this.constructor.template}static generateTemplate(t,n){this.constructor.template=document.createElement("template"),t=`<style>${t}</style>`,this.constructor.template.innerHTML=t+n}static get activeAttribute(){return"active"}static get transitionAttribute(){return"transition"}get buttonElement(){return this.shadowRoot.querySelector("button")}get active(){return this.hasAttribute(this.constructor.activeAttribute)}set active(t){t?this.setAttribute(this.constructor.activeAttribute,""):this.removeAttribute(this.constructor.activeAttribute)}get transition(){return this.getAttribute(this.constructor.transitionAttribute)}set transition(t){"string"==typeof t?this.setAttribute(this.constructor.transitionAttribute,t):this.removeAttribute(this.constructor.transitionAttribute)}constructor(){super(),this.constructor.template||this.constructor.generateTemplate(i.a,s.a),this.attachShadow({mode:"open"}).appendChild(this.constructor.template.content.cloneNode(!0)),this.buttonElement.addEventListener("click",t=>{this.toggleHamburger()})}toggleHamburger(){this.active?this.active=!1:this.active=!0}})}]);