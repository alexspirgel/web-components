/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/button-hamburger.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/base/scripts/button-hamburger.js":
/*!**********************************************!*\
  !*** ./src/base/scripts/button-hamburger.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @style */ \"./src/custom/styles/button-hamburger.scss\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @template */ \"./src/base/templates/button-hamburger.html\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template__WEBPACK_IMPORTED_MODULE_1__);\n// Import style.\r\n\r\n// Import template.\r\n\r\n\r\n/**\r\n * Creates a new hamburger button.\r\n *\r\n * @class ButtonHamburger\r\n */\r\n\r\nclass ButtonHamburger extends HTMLElement {\r\n\r\n\t/**\r\n\t * Get the template element for the component.\r\n\t */\r\n\r\n\tstatic get template() {\r\n\t\t// Return the template element from the component class constructor.\r\n\t\treturn this.constructor.template;\r\n\t}\r\n\r\n\t/**\r\n\t * Generate a template element and attach it to the component class constructor.\r\n\t */\r\n\r\n\tstatic generateTemplate(style, template) {\r\n\t\t// Create template element.\r\n\t\tthis.constructor.template = document.createElement('template');\r\n\t\t// Format style.\r\n\t\tstyle = `<style>${style}</style>`;\r\n\t\t// Replace template element content with imported style and template.\r\n\t\tthis.constructor.template.innerHTML = style + template;\r\n\t}\r\n\r\n\t/**\r\n\t * Get the name of the active attribute.\r\n\t */\r\n\r\n\tstatic get activeAttribute() {\r\n\t\t// Return the attribute name.\r\n\t\treturn 'active';\r\n\t}\r\n\r\n\t/**\r\n\t * Get the name of the active attribute.\r\n\t */\r\n\r\n\tstatic get transitionAttribute() {\r\n\t\t// Return the attribute name.\r\n\t\treturn 'transition';\r\n\t}\r\n\r\n\t/**\r\n\t * Get the button element.\r\n\t * A work-around in place of using the button element class.\r\n\t * The default button class does not support attachShadow.\r\n\t * We place a button element within our custom element to get around this.\r\n\t *\r\n\t * @return {object}\r\n\t */\r\n\r\n\tget buttonElement() {\r\n\t\t// Return the button element.\r\n\t\treturn this.shadowRoot.querySelector('button');\r\n\t}\r\n\r\n\t/**\r\n\t * Get/Set the active attribute.\r\n\t */\r\n\r\n\tget active() {\r\n\t\t// Return true if the component element has the 'active' attribute.\r\n\t\treturn this.hasAttribute(this.constructor.activeAttribute);\r\n\t}\r\n\r\n\tset active(value) {\r\n\t\t// If a true value is passed.\r\n\t\tif (value) {\r\n\t\t\t// Add the active attribute to the component element.\r\n\t\t\tthis.setAttribute(this.constructor.activeAttribute, '');\r\n\t\t}\r\n\t\t// If a false value is passed.\r\n\t\telse {\r\n\t\t\t// Remove the active attribute from the component element.\r\n\t\t\tthis.removeAttribute(this.constructor.activeAttribute);\r\n\t\t}\r\n\t}\r\n\r\n\t/**\r\n\t * Get/Set the transition attribute.\r\n\t */\r\n\r\n\tget transition() {\r\n\t\t// Return the value of the 'transition' attribute on the component element.\r\n\t\treturn this.getAttribute(this.constructor.transitionAttribute);\r\n\t}\r\n\r\n\tset transition(value) {\r\n\t\t// If string is passed.\r\n\t\tif (typeof value === 'string') {\r\n\t\t\t// Add the transition attribute value to the component element.\r\n\t\t\tthis.setAttribute(this.constructor.transitionAttribute, value);\r\n\t\t}\r\n\t\t// If a false value is passed.\r\n\t\telse {\r\n\t\t\t// Remove the transition attribute from the component element.\r\n\t\t\tthis.removeAttribute(this.constructor.transitionAttribute);\r\n\t\t}\r\n\t}\r\n\r\n\t/**\r\n\t * Creates an instance of ButtonHamburger.\r\n\t */\r\n\r\n\tconstructor() {\r\n\t\t// Always call super() first in the constructor.\r\n\t\t// It's required by the custom elements spec.\r\n\t\tsuper();\r\n\r\n\t\t// If the component template has not been generated.\r\n\t\tif (!this.constructor.template) {\r\n\t\t\t// Generate the component template.\r\n\t\t\tthis.constructor.generateTemplate(_style__WEBPACK_IMPORTED_MODULE_0___default.a, _template__WEBPACK_IMPORTED_MODULE_1___default.a);\r\n\t\t}\r\n\r\n\t\t// Attach the shadow root.\r\n\t\tlet shadowRoot = this.attachShadow({mode: 'open'});\r\n\t\t// Add a clone of the template to the shadow root.\r\n\t\tshadowRoot.appendChild(this.constructor.template.content.cloneNode(true));\r\n\r\n\t\t// Attach a click event listener to the button element.\r\n\t\tthis.buttonElement.addEventListener('click', (event) => {\r\n\t\t\t// Toggle the active attribute.\r\n\t\t\tthis.toggleHamburger();\r\n\t\t});\r\n\t}\r\n\r\n\t/**\r\n\t * Toggles the active attribute.\r\n\t */\r\n\r\n\ttoggleHamburger () {\r\n\t\t// If the component is active.\r\n\t\tif (this.active) {\r\n\t\t\t// Remove the active attribute.\r\n\t\t\tthis.active = false;\r\n\t\t}\r\n\t\t// If the component is inactive.\r\n\t\telse {\r\n\t\t\t// Add the active attribute.\r\n\t\t\tthis.active = true;\r\n\t\t}\r\n\t}\r\n\r\n}\r\n\r\n// Define the custom element.\r\nwindow.customElements.define('button-hamburger', ButtonHamburger);\n\n//# sourceURL=webpack:///./src/base/scripts/button-hamburger.js?");

/***/ }),

/***/ "./src/base/templates/button-hamburger.html":
/*!**************************************************!*\
  !*** ./src/base/templates/button-hamburger.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<button class=\\\"button-hamburger__button\\\">\\r\\n\\t<div class=\\\"button-hamburger__stage\\\">\\r\\n\\t\\t<span class=\\\"button-hamburger__line\\\"></span>\\r\\n\\t\\t<span class=\\\"button-hamburger__line\\\"></span>\\r\\n\\t\\t<span class=\\\"button-hamburger__line\\\"></span>\\r\\n\\t</div>\\r\\n\\t<slot class=\\\"button-hamburger__text\\\"></slot>\\r\\n</button>\";\n\n//# sourceURL=webpack:///./src/base/templates/button-hamburger.html?");

/***/ }),

/***/ "./src/button-hamburger.js":
/*!*********************************!*\
  !*** ./src/button-hamburger.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @script */ \"./src/base/scripts/button-hamburger.js\");\n// This handles the script override.\r\n\n\n//# sourceURL=webpack:///./src/button-hamburger.js?");

/***/ }),

/***/ "./src/custom/styles/button-hamburger.scss":
/*!*************************************************!*\
  !*** ./src/custom/styles/button-hamburger.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \":host {\\n  display: inline-block; }\\n\\n.button-hamburger__button {\\n  font: inherit;\\n  color: inherit;\\n  text-transform: none;\\n  background-color: transparent;\\n  border: 0;\\n  margin: 0;\\n  padding: 0;\\n  overflow: visible;\\n  cursor: pointer; }\\n\\n.button-hamburger__stage {\\n  position: relative;\\n  width: 50px;\\n  height: 35px;\\n  background-color: transparent; }\\n\\n.button-hamburger__line {\\n  position: absolute;\\n  display: inline-block;\\n  width: 50px;\\n  height: 7px;\\n  left: 0;\\n  border-radius: 7px;\\n  background-color: black; }\\n  .button-hamburger__line:first-child {\\n    top: 0; }\\n  .button-hamburger__line:nth-child(2) {\\n    top: calc(50% - (7px / 2)); }\\n  .button-hamburger__line:last-child {\\n    top: calc(100% - 7px); }\\n\\n/**\\r\\n * Transition: none\\r\\n */\\n:host([transition='none'][active]) .button-hamburger__line:first-child,\\n:host([transition=''][active]) .button-hamburger__line:first-child,\\n:host(:not([transition])[active]) .button-hamburger__line:first-child {\\n  top: calc(50% - (7px / 2));\\n  transform: rotate(45deg); }\\n\\n:host([transition='none'][active]) .button-hamburger__line:nth-child(2),\\n:host([transition=''][active]) .button-hamburger__line:nth-child(2),\\n:host(:not([transition])[active]) .button-hamburger__line:nth-child(2) {\\n  opacity: 0; }\\n\\n:host([transition='none'][active]) .button-hamburger__line:last-child,\\n:host([transition=''][active]) .button-hamburger__line:last-child,\\n:host(:not([transition])[active]) .button-hamburger__line:last-child {\\n  top: calc(50% - (7px / 2));\\n  transform: rotate(-45deg); }\\n\\n/**\\r\\n * Transition: spin\\r\\n */\\n:host([transition=\\\"spin\\\"]) .button-hamburger__stage {\\n  transition: transform 769.5ms ease-out 0ms; }\\n\\n:host([transition=\\\"spin\\\"]) .button-hamburger__line:first-child {\\n  transition: top 580.5ms ease 769.5ms; }\\n\\n:host([transition=\\\"spin\\\"]) .button-hamburger__line:nth-child(2) {\\n  transition: opacity 0ms linear 769.5ms; }\\n\\n:host([transition=\\\"spin\\\"]) .button-hamburger__line:last-child {\\n  transition: top 580.5ms ease 580.5ms, transform 580.5ms linear 189ms; }\\n\\n:host([transition=\\\"spin\\\"][active]) .button-hamburger__stage {\\n  transform: rotate(135deg);\\n  transition: transform 769.5ms ease-in 580.5ms; }\\n\\n:host([transition=\\\"spin\\\"][active]) .button-hamburger__line {\\n  top: calc(50% - (7px / 2)); }\\n  :host([transition=\\\"spin\\\"][active]) .button-hamburger__line:first-child {\\n    transition: top 580.5ms ease 0ms; }\\n  :host([transition=\\\"spin\\\"][active]) .button-hamburger__line:nth-child(2) {\\n    opacity: 0;\\n    transition: opacity 0ms linear 580.5ms; }\\n  :host([transition=\\\"spin\\\"][active]) .button-hamburger__line:last-child {\\n    transform: rotate(90deg);\\n    transition: top 580.5ms ease 0ms, transform 580.5ms linear 580.5ms; }\\n\\n/**\\r\\n * Transition: squeeze\\r\\n */\\n:host([transition=\\\"squeeze\\\"]) .button-hamburger__line:first-child {\\n  transition: top 150ms ease 150ms, transform 150ms ease 0ms; }\\n\\n:host([transition=\\\"squeeze\\\"]) .button-hamburger__line:nth-child(2) {\\n  transition: opacity 0ms linear 150ms; }\\n\\n:host([transition=\\\"squeeze\\\"]) .button-hamburger__line:last-child {\\n  transition: top 150ms ease 150ms, transform 150ms ease 0ms; }\\n\\n:host([transition=\\\"squeeze\\\"][active]) .button-hamburger__line {\\n  top: calc(50% - (7px / 2)); }\\n  :host([transition=\\\"squeeze\\\"][active]) .button-hamburger__line:first-child {\\n    transform: rotate(45deg);\\n    transition: top 150ms ease 0ms, transform 150ms ease 150ms; }\\n  :host([transition=\\\"squeeze\\\"][active]) .button-hamburger__line:nth-child(2) {\\n    opacity: 0;\\n    transition: opacity 0ms linear 150ms; }\\n  :host([transition=\\\"squeeze\\\"][active]) .button-hamburger__line:last-child {\\n    transform: rotate(-45deg);\\n    transition: top 150ms ease 0ms, transform 150ms ease 150ms; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/custom/styles/button-hamburger.scss?");

/***/ })

/******/ });