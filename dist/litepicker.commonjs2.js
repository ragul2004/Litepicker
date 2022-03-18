/*!
 * 
 * litepicker.commonjs2.js
 * Litepicker v2.0.11 (https://github.com/wakirin/Litepicker)
 * Package: litepicker (https://www.npmjs.com/package/litepicker)
 * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
 * Copyright 2019-2022 Rinat G.
 *     
 * Hash: 73048a551543272b0997
 * 
 */
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
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


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/dts-css-modules-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/dts-css-modules-loader??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/postcss-loader/src??ref--5-3!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  --litepicker-container-months-color-bg: #fff;\n  --litepicker-container-months-box-shadow-color: #ddd;\n  --litepicker-footer-color-bg: #fafafa;\n  --litepicker-footer-box-shadow-color: #ddd;\n  --litepicker-tooltip-color-bg: #fff;\n  --litepicker-month-header-color: #333;\n  --litepicker-button-prev-month-color: #9e9e9e;\n  --litepicker-button-next-month-color: #9e9e9e;\n  --litepicker-button-prev-month-color-hover: #2196f3;\n  --litepicker-button-next-month-color-hover: #2196f3;\n  --litepicker-month-width: calc(var(--litepicker-day-width) * 7);\n  --litepicker-month-weekday-color: #9e9e9e;\n  --litepicker-month-week-number-color: #9e9e9e;\n  --litepicker-day-width: 38px;\n  --litepicker-day-color: #333;\n  --litepicker-day-color-hover: #2196f3;\n  --litepicker-is-today-color: #f44336;\n  --litepicker-is-in-range-color: #bbdefb;\n  --litepicker-is-locked-color: #9e9e9e;\n  --litepicker-is-start-color: #fff;\n  --litepicker-is-start-color-bg: #2196f3;\n  --litepicker-is-end-color: #fff;\n  --litepicker-is-end-color-bg: #2196f3;\n  --litepicker-button-cancel-color: #fff;\n  --litepicker-button-cancel-color-bg: #9e9e9e;\n  --litepicker-button-apply-color: #fff;\n  --litepicker-button-apply-color-bg: #2196f3;\n  --litepicker-button-reset-color: #909090;\n  --litepicker-button-reset-color-hover: #2196f3;\n  --litepicker-highlighted-day-color: #333;\n  --litepicker-highlighted-day-color-bg: #ffeb3b; }\n\n.show-week-numbers {\n  --litepicker-month-width: calc(var(--litepicker-day-width) * 8); }\n\n.litepicker {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 0.8em;\n  display: none; }\n  .litepicker button {\n    border: none;\n    background: none; }\n  .litepicker .container__main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .litepicker .container__months {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    background-color: var(--litepicker-container-months-color-bg);\n    border-radius: 5px;\n    -webkit-box-shadow: 0 0 5px var(--litepicker-container-months-box-shadow-color);\n            box-shadow: 0 0 5px var(--litepicker-container-months-box-shadow-color);\n    width: calc(var(--litepicker-month-width) + 10px);\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box; }\n    .litepicker .container__months.columns-2 {\n      width: calc((var(--litepicker-month-width) * 2) + 20px); }\n    .litepicker .container__months.columns-3 {\n      width: calc((var(--litepicker-month-width) * 3) + 30px); }\n    .litepicker .container__months.columns-4 {\n      width: calc((var(--litepicker-month-width) * 4) + 40px); }\n    .litepicker .container__months.split-view .month-item-header .button-previous-month,\n    .litepicker .container__months.split-view .month-item-header .button-next-month {\n      visibility: visible; }\n    .litepicker .container__months .month-item {\n      padding: 5px;\n      width: var(--litepicker-month-width);\n      -webkit-box-sizing: content-box;\n              box-sizing: content-box; }\n      .litepicker .container__months .month-item-header {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        font-weight: 500;\n        padding: 10px 5px;\n        text-align: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        color: var(--litepicker-month-header-color); }\n        .litepicker .container__months .month-item-header div {\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1; }\n          .litepicker .container__months .month-item-header div > .month-item-name {\n            margin-right: 5px; }\n          .litepicker .container__months .month-item-header div > .month-item-year {\n            padding: 0; }\n        .litepicker .container__months .month-item-header .reset-button {\n          color: var(--litepicker-button-reset-color); }\n          .litepicker .container__months .month-item-header .reset-button > svg {\n            fill: var(--litepicker-button-reset-color); }\n          .litepicker .container__months .month-item-header .reset-button * {\n            pointer-events: none; }\n          .litepicker .container__months .month-item-header .reset-button:hover {\n            color: var(--litepicker-button-reset-color-hover); }\n            .litepicker .container__months .month-item-header .reset-button:hover > svg {\n              fill: var(--litepicker-button-reset-color-hover); }\n        .litepicker .container__months .month-item-header .button-previous-month,\n        .litepicker .container__months .month-item-header .button-next-month {\n          visibility: hidden;\n          text-decoration: none;\n          padding: 3px 5px;\n          border-radius: 3px;\n          -webkit-transition: color 0.3s, border 0.3s;\n          transition: color 0.3s, border 0.3s;\n          cursor: default; }\n          .litepicker .container__months .month-item-header .button-previous-month *,\n          .litepicker .container__months .month-item-header .button-next-month * {\n            pointer-events: none; }\n        .litepicker .container__months .month-item-header .button-previous-month {\n          color: var(--litepicker-button-prev-month-color); }\n          .litepicker .container__months .month-item-header .button-previous-month > svg,\n          .litepicker .container__months .month-item-header .button-previous-month > img {\n            fill: var(--litepicker-button-prev-month-color); }\n          .litepicker .container__months .month-item-header .button-previous-month:hover {\n            color: var(--litepicker-button-prev-month-color-hover); }\n            .litepicker .container__months .month-item-header .button-previous-month:hover > svg {\n              fill: var(--litepicker-button-prev-month-color-hover); }\n        .litepicker .container__months .month-item-header .button-next-month {\n          color: var(--litepicker-button-next-month-color); }\n          .litepicker .container__months .month-item-header .button-next-month > svg,\n          .litepicker .container__months .month-item-header .button-next-month > img {\n            fill: var(--litepicker-button-next-month-color); }\n          .litepicker .container__months .month-item-header .button-next-month:hover {\n            color: var(--litepicker-button-next-month-color-hover); }\n            .litepicker .container__months .month-item-header .button-next-month:hover > svg {\n              fill: var(--litepicker-button-next-month-color-hover); }\n      .litepicker .container__months .month-item-weekdays-row {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        justify-self: center;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        color: var(--litepicker-month-weekday-color); }\n        .litepicker .container__months .month-item-weekdays-row > div {\n          padding: 5px 0;\n          font-size: 85%;\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          width: var(--litepicker-day-width);\n          text-align: center; }\n      .litepicker .container__months .month-item:first-child .button-previous-month {\n        visibility: visible; }\n      .litepicker .container__months .month-item:last-child .button-next-month {\n        visibility: visible; }\n      .litepicker .container__months .month-item.no-previous-month .button-previous-month {\n        visibility: hidden; }\n      .litepicker .container__months .month-item.no-next-month .button-next-month {\n        visibility: hidden; }\n  .litepicker .container__days {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    justify-self: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    text-align: center;\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box; }\n    .litepicker .container__days > div,\n    .litepicker .container__days > a {\n      padding: 5px 0;\n      width: var(--litepicker-day-width); }\n    .litepicker .container__days .day-item {\n      color: var(--litepicker-day-color);\n      text-align: center;\n      text-decoration: none;\n      border-radius: 3px;\n      -webkit-transition: color 0.3s, border 0.3s;\n      transition: color 0.3s, border 0.3s;\n      cursor: default; }\n      .litepicker .container__days .day-item:hover {\n        color: var(--litepicker-day-color-hover);\n        -webkit-box-shadow: inset 0 0 0 1px var(--litepicker-day-color-hover);\n                box-shadow: inset 0 0 0 1px var(--litepicker-day-color-hover); }\n      .litepicker .container__days .day-item.is-today {\n        color: var(--litepicker-is-today-color); }\n      .litepicker .container__days .day-item.is-locked {\n        color: var(--litepicker-is-locked-color); }\n        .litepicker .container__days .day-item.is-locked:hover {\n          color: var(--litepicker-is-locked-color);\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n          cursor: default; }\n      .litepicker .container__days .day-item.is-in-range {\n        background-color: var(--litepicker-is-in-range-color);\n        border-radius: 0; }\n      .litepicker .container__days .day-item.is-start-date {\n        color: var(--litepicker-is-start-color);\n        background-color: var(--litepicker-is-start-color-bg);\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0; }\n        .litepicker .container__days .day-item.is-start-date.is-flipped {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0;\n          border-top-right-radius: 5px;\n          border-bottom-right-radius: 5px; }\n      .litepicker .container__days .day-item.is-end-date {\n        color: var(--litepicker-is-end-color);\n        background-color: var(--litepicker-is-end-color-bg);\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px; }\n        .litepicker .container__days .day-item.is-end-date.is-flipped {\n          border-top-left-radius: 5px;\n          border-bottom-left-radius: 5px;\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n      .litepicker .container__days .day-item.is-start-date.is-end-date {\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px; }\n      .litepicker .container__days .day-item.is-highlighted {\n        color: var(--litepicker-highlighted-day-color);\n        background-color: var(--litepicker-highlighted-day-color-bg); }\n    .litepicker .container__days .week-number {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      color: var(--litepicker-month-week-number-color);\n      font-size: 85%; }\n  .litepicker .container__footer {\n    text-align: right;\n    padding: 10px 5px;\n    margin: 0 5px;\n    background-color: var(--litepicker-footer-color-bg);\n    -webkit-box-shadow: inset 0px 3px 3px 0px var(--litepicker-footer-box-shadow-color);\n            box-shadow: inset 0px 3px 3px 0px var(--litepicker-footer-box-shadow-color);\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n    .litepicker .container__footer .preview-date-range {\n      margin-right: 10px;\n      font-size: 90%; }\n    .litepicker .container__footer .button-cancel {\n      background-color: var(--litepicker-button-cancel-color-bg);\n      color: var(--litepicker-button-cancel-color);\n      border: 0;\n      padding: 3px 7px 4px;\n      border-radius: 3px; }\n      .litepicker .container__footer .button-cancel * {\n        pointer-events: none; }\n    .litepicker .container__footer .button-apply {\n      background-color: var(--litepicker-button-apply-color-bg);\n      color: var(--litepicker-button-apply-color);\n      border: 0;\n      padding: 3px 7px 4px;\n      border-radius: 3px;\n      margin-left: 10px;\n      margin-right: 10px; }\n      .litepicker .container__footer .button-apply:disabled {\n        opacity: 0.7; }\n      .litepicker .container__footer .button-apply * {\n        pointer-events: none; }\n  .litepicker .container__tooltip {\n    position: absolute;\n    margin-top: -4px;\n    padding: 4px 8px;\n    border-radius: 4px;\n    background-color: var(--litepicker-tooltip-color-bg);\n    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n    white-space: nowrap;\n    font-size: 11px;\n    pointer-events: none;\n    visibility: hidden; }\n    .litepicker .container__tooltip:before {\n      position: absolute;\n      bottom: -5px;\n      left: calc(50% - 5px);\n      border-top: 5px solid rgba(0, 0, 0, 0.12);\n      border-right: 5px solid transparent;\n      border-left: 5px solid transparent;\n      content: \"\"; }\n    .litepicker .container__tooltip:after {\n      position: absolute;\n      bottom: -4px;\n      left: calc(50% - 4px);\n      border-top: 4px solid var(--litepicker-tooltip-color-bg);\n      border-right: 4px solid transparent;\n      border-left: 4px solid transparent;\n      content: \"\"; }\n", ""]);
// Exports
exports.locals = {
	"showWeekNumbers": "show-week-numbers",
	"litepicker": "litepicker",
	"containerMain": "container__main",
	"containerMonths": "container__months",
	"columns2": "columns-2",
	"columns3": "columns-3",
	"columns4": "columns-4",
	"splitView": "split-view",
	"monthItemHeader": "month-item-header",
	"buttonPreviousMonth": "button-previous-month",
	"buttonNextMonth": "button-next-month",
	"monthItem": "month-item",
	"monthItemName": "month-item-name",
	"monthItemYear": "month-item-year",
	"resetButton": "reset-button",
	"monthItemWeekdaysRow": "month-item-weekdays-row",
	"noPreviousMonth": "no-previous-month",
	"noNextMonth": "no-next-month",
	"containerDays": "container__days",
	"dayItem": "day-item",
	"isToday": "is-today",
	"isLocked": "is-locked",
	"isInRange": "is-in-range",
	"isStartDate": "is-start-date",
	"isFlipped": "is-flipped",
	"isEndDate": "is-end-date",
	"isHighlighted": "is-highlighted",
	"weekNumber": "week-number",
	"containerFooter": "container__footer",
	"previewDateRange": "preview-date-range",
	"buttonCancel": "button-cancel",
	"buttonApply": "button-apply",
	"containerTooltip": "container__tooltip"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/calendar.ts":
/*!*************************!*\
  !*** ./src/calendar.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! ./core */ "./src/core.ts");
var datetime_1 = __webpack_require__(/*! ./datetime */ "./src/datetime.ts");
var style = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(options) {
        return _super.call(this, options) || this;
        //
    }
    Calendar.prototype.render = function () {
        var _this = this;
        this.emit('before:render', this.ui);
        var mainBlock = document.createElement('div');
        mainBlock.className = style.containerMain;
        var months = document.createElement('div');
        months.className = style.containerMonths;
        if (style["columns" + this.options.numberOfColumns]) {
            months.classList.remove(style.columns2, style.columns3, style.columns4);
            months.classList.add(style["columns" + this.options.numberOfColumns]);
        }
        if (this.options.splitView) {
            months.classList.add(style.splitView);
        }
        if (this.options.showWeekNumbers) {
            months.classList.add(style.showWeekNumbers);
        }
        var startDate = this.calendars[0].clone();
        var startMonthIdx = startDate.getMonth();
        var totalMonths = startDate.getMonth() + this.options.numberOfMonths;
        var calendarIdx = 0;
        // tslint:disable-next-line: prefer-for-of
        for (var idx = startMonthIdx; idx < totalMonths; idx += 1) {
            var dateIterator = startDate.clone();
            dateIterator.setDate(1);
            dateIterator.setHours(0, 0, 0, 0);
            if (this.options.splitView) {
                dateIterator = this.calendars[calendarIdx].clone();
            }
            else {
                dateIterator.setMonth(idx);
            }
            months.appendChild(this.renderMonth(dateIterator, calendarIdx));
            calendarIdx += 1;
        }
        this.ui.innerHTML = '';
        mainBlock.appendChild(months);
        if (this.options.resetButton) {
            var resetButton = void 0;
            if (typeof this.options.resetButton === 'function') {
                resetButton = this.options.resetButton.call(this);
            }
            else {
                resetButton = document.createElement('button');
                resetButton.type = 'button';
                resetButton.className = style.resetButton;
                resetButton.innerHTML = this.options.buttonText.reset;
            }
            resetButton.addEventListener('click', function (e) {
                e.preventDefault();
                // tslint:disable-next-line: no-string-literal
                _this['clearSelection']();
            });
            mainBlock
                .querySelector("." + style.monthItem + ":last-child")
                .querySelector("." + style.monthItemHeader)
                .appendChild(resetButton);
        }
        this.ui.appendChild(mainBlock);
        if (!this.options.autoApply || this.options.footerHTML) {
            this.ui.appendChild(this.renderFooter());
        }
        if (this.options.showTooltip) {
            this.ui.appendChild(this.renderTooltip());
        }
        this.ui.dataset.plugins = (this.options.plugins || []).join('|');
        this.emit('render', this.ui);
    };
    Calendar.prototype.renderMonth = function (date, calendarIdx) {
        var _this = this;
        var startDate = date.clone();
        var totalDays = 32 - new Date(startDate.getFullYear(), startDate.getMonth(), 32).getDate();
        var month = document.createElement('div');
        month.className = style.monthItem;
        var monthHeader = document.createElement('div');
        monthHeader.className = style.monthItemHeader;
        var monthAndYear = document.createElement('div');
        if (this.options.dropdowns.months) {
            var selectMonths = document.createElement('select');
            selectMonths.className = style.monthItemName;
            for (var x = 0; x < 12; x += 1) {
                var option = document.createElement('option');
                // day 2 because iOS bug with `toLocaleString`
                // https://github.com/wakirin/Litepicker/issues/113
                var monthName = new datetime_1.DateTime(new Date(date.getFullYear(), x, 2, 0, 0, 0));
                var optionMonth = new datetime_1.DateTime(new Date(date.getFullYear(), x, 1, 0, 0, 0));
                option.value = String(x);
                option.text = monthName.toLocaleString(this.options.lang, { month: 'long' });
                option.disabled = (this.options.minDate
                    && optionMonth.isBefore(new datetime_1.DateTime(this.options.minDate), 'month'))
                    || (this.options.maxDate && optionMonth.isAfter(new datetime_1.DateTime(this.options.maxDate), 'month'));
                option.selected = optionMonth.getMonth() === date.getMonth();
                selectMonths.appendChild(option);
            }
            selectMonths.addEventListener('change', function (e) {
                var target = e.target;
                var idx = 0;
                if (_this.options.splitView) {
                    var monthItem = target.closest("." + style.monthItem);
                    idx = utils_1.findNestedMonthItem(monthItem);
                }
                _this.calendars[idx].setMonth(Number(target.value));
                _this.render();
                _this.emit('change:month', _this.calendars[idx], idx, e);
            });
            monthAndYear.appendChild(selectMonths);
        }
        else {
            var monthName = document.createElement('strong');
            monthName.className = style.monthItemName;
            monthName.dataset.month = date.getMonth().toString();
            monthName.dataset.year = date.getFullYear().toString();
            monthName.innerHTML = date.toLocaleString(this.options.lang, { month: 'long' });
            monthAndYear.appendChild(monthName);
        }
        if (this.options.dropdowns.years) {
            var selectYears_1 = document.createElement('select');
            selectYears_1.className = style.monthItemYear;
            var minYear = this.options.dropdowns.minYear;
            var maxYear = this.options.dropdowns.maxYear
                ? this.options.dropdowns.maxYear
                : (new Date()).getFullYear();
            if (date.getFullYear() > maxYear) {
                var option = document.createElement('option');
                option.value = String(date.getFullYear());
                option.text = String(date.getFullYear());
                option.selected = true;
                option.disabled = true;
                selectYears_1.appendChild(option);
            }
            for (var x = maxYear; x >= minYear; x -= 1) {
                var option = document.createElement('option');
                var optionYear = new datetime_1.DateTime(new Date(x, 0, 1, 0, 0, 0));
                option.value = String(x);
                option.text = String(x);
                option.disabled = (this.options.minDate
                    && optionYear.isBefore(new datetime_1.DateTime(this.options.minDate), 'year'))
                    || (this.options.maxDate
                        && optionYear.isAfter(new datetime_1.DateTime(this.options.maxDate), 'year'));
                option.selected = date.getFullYear() === x;
                selectYears_1.appendChild(option);
            }
            if (date.getFullYear() < minYear) {
                var option = document.createElement('option');
                option.value = String(date.getFullYear());
                option.text = String(date.getFullYear());
                option.selected = true;
                option.disabled = true;
                selectYears_1.appendChild(option);
            }
            if (this.options.dropdowns.years === 'asc') {
                var childs = Array.prototype.slice.call(selectYears_1.childNodes);
                var options = childs.reverse();
                selectYears_1.innerHTML = '';
                options.forEach(function (y) {
                    y.innerHTML = y.value;
                    selectYears_1.appendChild(y);
                });
            }
            selectYears_1.addEventListener('change', function (e) {
                var target = e.target;
                var idx = 0;
                if (_this.options.splitView) {
                    var monthItem = target.closest("." + style.monthItem);
                    idx = utils_1.findNestedMonthItem(monthItem);
                }
                _this.calendars[idx].setFullYear(Number(target.value));
                _this.render();
                _this.emit('change:year', _this.calendars[idx], idx, e);
            });
            monthAndYear.appendChild(selectYears_1);
        }
        else {
            var monthYear = document.createElement('span');
            monthYear.className = style.monthItemYear;
            monthYear.innerHTML = String(date.getFullYear());
            monthAndYear.appendChild(monthYear);
        }
        var previousMonthButton = document.createElement('button');
        previousMonthButton.type = 'button';
        previousMonthButton.className = style.buttonPreviousMonth;
        previousMonthButton.innerHTML = this.options.buttonText.previousMonth;
        var nextMonthButton = document.createElement('button');
        nextMonthButton.type = 'button';
        nextMonthButton.className = style.buttonNextMonth;
        nextMonthButton.innerHTML = this.options.buttonText.nextMonth;
        monthHeader.appendChild(previousMonthButton);
        monthHeader.appendChild(monthAndYear);
        monthHeader.appendChild(nextMonthButton);
        if (this.options.minDate
            && startDate.isSameOrBefore(new datetime_1.DateTime(this.options.minDate), 'month')) {
            month.classList.add(style.noPreviousMonth);
        }
        if (this.options.maxDate
            && startDate.isSameOrAfter(new datetime_1.DateTime(this.options.maxDate), 'month')) {
            month.classList.add(style.noNextMonth);
        }
        var weekdaysRow = document.createElement('div');
        weekdaysRow.className = style.monthItemWeekdaysRow;
        if (this.options.showWeekNumbers) {
            weekdaysRow.innerHTML = '<div>W</div>';
        }
        for (var w = 1; w <= 7; w += 1) {
            // 7 days, 4 is «Thursday» (new Date(1970, 0, 1, 12, 0, 0, 0))
            var dayIdx = 7 - 4 + this.options.firstDay + w;
            var weekday = document.createElement('div');
            weekday.innerHTML = this.weekdayName(dayIdx);
            weekday.title = this.weekdayName(dayIdx, 'long');
            weekday.classList.add('week-idx-' + ((w - 1 + this.options.firstDay) % 7));
            weekdaysRow.appendChild(weekday);
        }
        var containerDays = document.createElement('div');
        containerDays.className = style.containerDays;
        var weekDaysIdx = 0;
        var weekDays = document.createElement('div');
        weekDays.className = "row";
        var skipDays = this.calcSkipDays(startDate);
        if (this.options.showWeekNumbers && skipDays) {
            weekDays.appendChild(this.renderWeekNumber(startDate));
        }
        for (var idx = 0; idx < skipDays; idx += 1) {
            var dummy = document.createElement('div');
            weekDays.appendChild(dummy);
            weekDaysIdx++;
        }
        // tslint:disable-next-line: prefer-for-of
        for (var idx = 1; idx <= totalDays; idx += 1) {
            startDate.setDate(idx);
            if (weekDaysIdx === 7) {
                containerDays.appendChild(weekDays);
                weekDays = document.createElement('div');
                weekDays.className = "row";
                weekDaysIdx = weekDaysIdx % 7;
            }
            if (this.options.showWeekNumbers && startDate.getDay() === this.options.firstDay) {
                weekDays.appendChild(this.renderWeekNumber(startDate));
            }
            weekDays.appendChild(this.renderDay(startDate));
            weekDaysIdx++;
        }
        for (var idx = weekDaysIdx; idx < 7; idx += 1) {
            var dummy = document.createElement('div');
            weekDays.appendChild(dummy);
        }
        containerDays.appendChild(weekDays);
        month.appendChild(monthHeader);
        month.appendChild(weekdaysRow);
        month.appendChild(containerDays);
        this.emit('render:month', month, date);
        return month;
    };
    Calendar.prototype.renderDay = function (date) {
        date.setHours();
        var day = document.createElement('div');
        day.className = style.dayItem;
        day.innerHTML = String(date.getDate());
        day.dataset.time = String(date.getTime());
        if (date.toDateString() === (new Date()).toDateString()) {
            day.classList.add(style.isToday);
        }
        day.classList.add('week-' + date.getDay());
        if (this.datePicked.length) {
            if (this.datePicked[0].toDateString() === date.toDateString()) {
                day.classList.add(style.isStartDate);
                if (this.options.singleMode) {
                    day.classList.add(style.isEndDate);
                }
            }
            if (this.datePicked.length === 2
                && this.datePicked[1].toDateString() === date.toDateString()) {
                day.classList.add(style.isEndDate);
            }
            if (this.datePicked.length === 2) {
                if (date.isBetween(this.datePicked[0], this.datePicked[1])) {
                    day.classList.add(style.isInRange);
                }
            }
        }
        else if (this.options.startDate) {
            var startDate = this.options.startDate;
            var endDate = this.options.endDate;
            if (startDate.toDateString() === date.toDateString()) {
                day.classList.add(style.isStartDate);
                if (this.options.singleMode) {
                    day.classList.add(style.isEndDate);
                }
            }
            if (endDate && endDate.toDateString() === date.toDateString()) {
                day.classList.add(style.isEndDate);
            }
            if (startDate && endDate) {
                if (date.isBetween(startDate, endDate)) {
                    day.classList.add(style.isInRange);
                }
            }
        }
        if (this.options.minDate && date.isBefore(new datetime_1.DateTime(this.options.minDate))) {
            day.classList.add(style.isLocked);
        }
        if (this.options.maxDate && date.isAfter(new datetime_1.DateTime(this.options.maxDate))) {
            day.classList.add(style.isLocked);
        }
        if (this.options.minDays > 1
            && this.datePicked.length === 1) {
            var minDays = this.options.minDays - 1; // subtract selected day
            var left = this.datePicked[0].clone().subtract(minDays, 'day');
            var right = this.datePicked[0].clone().add(minDays, 'day');
            if (date.isBetween(left, this.datePicked[0], '(]')) {
                day.classList.add(style.isLocked);
            }
            if (date.isBetween(this.datePicked[0], right, '[)')) {
                day.classList.add(style.isLocked);
            }
        }
        if (this.options.maxDays
            && this.datePicked.length === 1) {
            var maxDays = this.options.maxDays;
            var left = this.datePicked[0].clone().subtract(maxDays, 'day');
            var right = this.datePicked[0].clone().add(maxDays, 'day');
            if (date.isSameOrBefore(left)) {
                day.classList.add(style.isLocked);
            }
            if (date.isSameOrAfter(right)) {
                day.classList.add(style.isLocked);
            }
        }
        if (this.options.selectForward
            && this.datePicked.length === 1
            && date.isBefore(this.datePicked[0])) {
            day.classList.add(style.isLocked);
        }
        if (this.options.selectBackward
            && this.datePicked.length === 1
            && date.isAfter(this.datePicked[0])) {
            day.classList.add(style.isLocked);
        }
        var locked = utils_1.dateIsLocked(date, this.options, this.datePicked);
        if (locked) {
            day.classList.add(style.isLocked);
        }
        if (this.options.highlightedDays.length) {
            var isHighlighted = this.options.highlightedDays
                .filter(function (d) {
                if (d instanceof Array) {
                    return date.isBetween(d[0], d[1], '[]');
                }
                return d.isSame(date, 'day');
            }).length;
            if (isHighlighted) {
                day.classList.add(style.isHighlighted);
            }
        }
        // fix bug iOS 10-12 - https://github.com/wakirin/Litepicker/issues/124
        day.tabIndex = !day.classList.contains('is-locked') ? 0 : -1;
        this.emit('render:day', day, date);
        return day;
    };
    Calendar.prototype.renderFooter = function () {
        var footer = document.createElement('div');
        footer.className = style.containerFooter;
        if (this.options.footerHTML) {
            footer.innerHTML = this.options.footerHTML;
        }
        else {
            footer.innerHTML = "\n      <span class=\"" + style.previewDateRange + "\"></span>\n      <button type=\"button\" class=\"" + style.buttonCancel + "\">" + this.options.buttonText.cancel + "</button>\n      <button type=\"button\" class=\"" + style.buttonApply + "\">" + this.options.buttonText.apply + "</button>\n      ";
        }
        if (this.options.singleMode) {
            if (this.datePicked.length === 1) {
                var startValue = this.datePicked[0].format(this.options.format, this.options.lang);
                footer.querySelector("." + style.previewDateRange).innerHTML = startValue;
            }
        }
        else {
            if (this.datePicked.length === 1) {
                footer.querySelector("." + style.buttonApply).setAttribute('disabled', '');
            }
            if (this.datePicked.length === 2) {
                var startValue = this.datePicked[0].format(this.options.format, this.options.lang);
                var endValue = this.datePicked[1].format(this.options.format, this.options.lang);
                footer.querySelector("." + style.previewDateRange)
                    .innerHTML = "" + startValue + this.options.delimiter + endValue;
            }
        }
        this.emit('render:footer', footer);
        return footer;
    };
    Calendar.prototype.renderWeekNumber = function (date) {
        var wn = document.createElement('div');
        var week = date.getWeek(this.options.firstDay);
        wn.className = style.weekNumber;
        wn.innerHTML = week === 53 && date.getMonth() === 0 ? '53 / 1' : week;
        return wn;
    };
    Calendar.prototype.renderTooltip = function () {
        var t = document.createElement('div');
        t.className = style.containerTooltip;
        return t;
    };
    Calendar.prototype.weekdayName = function (day, representation) {
        if (representation === void 0) { representation = 'short'; }
        return new Date(1970, 0, day, 12, 0, 0, 0)
            .toLocaleString(this.options.lang, { weekday: representation });
    };
    Calendar.prototype.calcSkipDays = function (date) {
        var total = date.getDay() - this.options.firstDay;
        if (total < 0)
            total += 7;
        return total;
    };
    return Calendar;
}(core_1.LPCore));
exports.Calendar = Calendar;


/***/ }),

/***/ "./src/core.ts":
/*!*********************!*\
  !*** ./src/core.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var datetime_1 = __webpack_require__(/*! ./datetime */ "./src/datetime.ts");
var litepicker_1 = __webpack_require__(/*! ./litepicker */ "./src/litepicker.ts");
var LPCore = /** @class */ (function (_super) {
    __extends(LPCore, _super);
    function LPCore(options) {
        var _this = _super.call(this) || this;
        _this.datePicked = [];
        _this.calendars = [];
        _this.options = {
            element: null,
            elementEnd: null,
            parentEl: null,
            // tslint:disable-next-line: object-literal-sort-keys
            firstDay: 1,
            format: 'YYYY-MM-DD',
            lang: 'en-US',
            delimiter: ' - ',
            numberOfMonths: 1,
            numberOfColumns: 1,
            startDate: null,
            endDate: null,
            zIndex: 9999,
            position: 'auto',
            selectForward: false,
            selectBackward: false,
            splitView: false,
            inlineMode: false,
            singleMode: true,
            autoApply: true,
            allowRepick: false,
            showWeekNumbers: false,
            showTooltip: true,
            scrollToDate: true,
            mobileFriendly: true,
            resetButton: false,
            autoRefresh: false,
            lockDaysFormat: 'YYYY-MM-DD',
            lockDays: [],
            disallowLockDaysInRange: false,
            lockDaysInclusivity: '[]',
            highlightedDaysFormat: 'YYYY-MM-DD',
            highlightedDays: [],
            dropdowns: {
                minYear: 1990,
                // tslint:disable-next-line: object-literal-sort-keys
                maxYear: null,
                months: false,
                years: false,
            },
            buttonText: {
                apply: 'Apply',
                cancel: 'Cancel',
                previousMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>',
                nextMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>',
                reset: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        <path d=\"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z\"/>\n      </svg>",
            },
            tooltipText: {
                one: 'day',
                other: 'days',
            },
        };
        _this.options = __assign(__assign({}, _this.options), options.element.dataset);
        Object.keys(_this.options).forEach(function (opt) {
            if (_this.options[opt] === 'true' || _this.options[opt] === 'false') {
                _this.options[opt] = _this.options[opt] === 'true';
            }
        });
        var dropdowns = __assign(__assign({}, _this.options.dropdowns), options.dropdowns);
        var buttonText = __assign(__assign({}, _this.options.buttonText), options.buttonText);
        var tooltipText = __assign(__assign({}, _this.options.tooltipText), options.tooltipText);
        _this.options = __assign(__assign({}, _this.options), options);
        _this.options.dropdowns = __assign({}, dropdowns);
        _this.options.buttonText = __assign({}, buttonText);
        _this.options.tooltipText = __assign({}, tooltipText);
        if (!_this.options.elementEnd) {
            _this.options.allowRepick = false;
        }
        if (_this.options.lockDays.length) {
            _this.options.lockDays = datetime_1.DateTime.convertArray(_this.options.lockDays, _this.options.lockDaysFormat);
        }
        if (_this.options.highlightedDays.length) {
            _this.options.highlightedDays = datetime_1.DateTime.convertArray(_this.options.highlightedDays, _this.options.highlightedDaysFormat);
        }
        var _a = _this.parseInput(), startValue = _a[0], endValue = _a[1];
        if (_this.options.startDate) {
            if (_this.options.singleMode || _this.options.endDate) {
                startValue = new datetime_1.DateTime(_this.options.startDate, _this.options.format, _this.options.lang);
            }
        }
        if (startValue && _this.options.endDate) {
            endValue = new datetime_1.DateTime(_this.options.endDate, _this.options.format, _this.options.lang);
        }
        if (startValue instanceof datetime_1.DateTime && !isNaN(startValue.getTime())) {
            _this.options.startDate = startValue;
        }
        if (_this.options.startDate && endValue instanceof datetime_1.DateTime && !isNaN(endValue.getTime())) {
            _this.options.endDate = endValue;
        }
        if (_this.options.singleMode && !(_this.options.startDate instanceof datetime_1.DateTime)) {
            _this.options.startDate = null;
        }
        if (!_this.options.singleMode
            && (!(_this.options.startDate instanceof datetime_1.DateTime)
                || !(_this.options.endDate instanceof datetime_1.DateTime))) {
            _this.options.startDate = null;
            _this.options.endDate = null;
        }
        for (var idx = 0; idx < _this.options.numberOfMonths; idx += 1) {
            var date = _this.options.startDate instanceof datetime_1.DateTime
                ? _this.options.startDate.clone()
                : new datetime_1.DateTime();
            if (!_this.options.startDate && (idx === 0 || _this.options.splitView)) {
                var maxDate = _this.options.maxDate ? new datetime_1.DateTime(_this.options.maxDate) : null;
                var minDate = _this.options.minDate ? new datetime_1.DateTime(_this.options.minDate) : null;
                var offsetMonths = _this.options.numberOfMonths - 1;
                var isDateRange = minDate && maxDate && date.isAfter(maxDate);
                if (isDateRange) {
                    date = minDate.clone();
                    date.setDate(1);
                }
                else if (!minDate && maxDate && date.isAfter(maxDate)) {
                    date = maxDate.clone();
                    date.setDate(1);
                    date.setMonth(date.getMonth() - offsetMonths);
                }
            }
            date.setDate(1);
            date.setMonth(date.getMonth() + idx);
            _this.calendars[idx] = date;
        }
        if (_this.options.showTooltip) {
            if (_this.options.tooltipPluralSelector) {
                _this.pluralSelector = _this.options.tooltipPluralSelector;
            }
            else {
                try {
                    var pluralRules = new Intl.PluralRules(_this.options.lang);
                    _this.pluralSelector = pluralRules.select.bind(pluralRules);
                }
                catch (_b) {
                    // fallback
                    _this.pluralSelector = function (arg0) {
                        if (Math.abs(arg0) === 0)
                            return 'one';
                        return 'other';
                    };
                }
            }
        }
        return _this;
    }
    LPCore.add = function (name, data) {
        litepicker_1.Litepicker.prototype[name] = data;
    };
    // tslint:disable-next-line: function-name
    LPCore.prototype.DateTime = function (date, format) {
        if (date) {
            return new datetime_1.DateTime(date, format);
        }
        return new datetime_1.DateTime();
    };
    LPCore.prototype.init = function () {
        var _this = this;
        if (this.options.plugins && this.options.plugins.length) {
            this.options.plugins.forEach(function (plugin) {
                if (litepicker_1.Litepicker.prototype.hasOwnProperty(plugin)) {
                    litepicker_1.Litepicker.prototype[plugin].init.call(_this, _this);
                }
                else {
                    console.warn("Litepicker: plugin \u00AB" + plugin + "\u00BB not found.");
                }
            });
        }
    };
    LPCore.prototype.parseInput = function () {
        var delimiter = this.options.delimiter;
        var delimiterRegex = new RegExp("" + delimiter);
        var splittedValue = this.options.element instanceof HTMLInputElement
            ? this.options.element.value.split(delimiter)
            : [];
        if (this.options.elementEnd) {
            if (this.options.element instanceof HTMLInputElement
                && this.options.element.value.length
                && this.options.elementEnd instanceof HTMLInputElement
                && this.options.elementEnd.value.length) {
                return [
                    new datetime_1.DateTime(this.options.element.value, this.options.format),
                    new datetime_1.DateTime(this.options.elementEnd.value, this.options.format),
                ];
            }
        }
        else if (this.options.singleMode) {
            if (this.options.element instanceof HTMLInputElement
                && this.options.element.value.length) {
                return [
                    new datetime_1.DateTime(this.options.element.value, this.options.format),
                ];
            }
        }
        else if (this.options.element instanceof HTMLInputElement
            && delimiterRegex.test(this.options.element.value)
            && splittedValue.length
            && splittedValue.length % 2 === 0) {
            var d1 = splittedValue.slice(0, splittedValue.length / 2).join(delimiter);
            var d2 = splittedValue.slice(splittedValue.length / 2).join(delimiter);
            return [
                new datetime_1.DateTime(d1, this.options.format),
                new datetime_1.DateTime(d2, this.options.format),
            ];
        }
        return [];
    };
    LPCore.prototype.isShowning = function () {
        return this.ui && this.ui.style.display !== 'none';
    };
    LPCore.prototype.findPosition = function (element) {
        var rect = element.getBoundingClientRect();
        var calRect = this.ui.getBoundingClientRect();
        var orientation = this.options.position.split(' ');
        var scrollX = window.scrollX || window.pageXOffset;
        var scrollY = window.scrollY || window.pageYOffset;
        var top = 0;
        var left = 0;
        if (orientation[0] === 'auto' || !(/top|bottom/.test(orientation[0]))) {
            top = rect.bottom + scrollY;
            var isOutBounds = rect.bottom + calRect.height > window.innerHeight;
            var hasTopSpace = (rect.top + scrollY) - calRect.height >= calRect.height;
            if (isOutBounds && hasTopSpace) {
                top = (rect.top + scrollY) - calRect.height;
            }
        }
        else {
            top = rect[orientation[0]] + scrollY;
            if (orientation[0] === 'top') {
                top -= calRect.height;
            }
        }
        if (!(/left|right/.test(orientation[0])) && (!orientation[1] || orientation[1] === 'auto' || !(/left|right/.test(orientation[1])))) {
            left = rect.left + scrollX;
            var isOutBounds = rect.left + calRect.width > window.innerWidth;
            var hasLeftSpace = (rect.right + scrollX) - calRect.width >= 0;
            if (isOutBounds && hasLeftSpace) {
                left = (rect.right + scrollX) - calRect.width;
            }
        }
        else {
            if (/left|right/.test(orientation[0])) {
                left = rect[orientation[0]] + scrollX;
            }
            else {
                left = rect[orientation[1]] + scrollX;
            }
            if (orientation[0] === 'right' || orientation[1] === 'right') {
                left -= calRect.width;
            }
        }
        return {
            left: left,
            top: top,
        };
    };
    return LPCore;
}(events_1.EventEmitter));
exports.LPCore = LPCore;


/***/ }),

/***/ "./src/datetime.ts":
/*!*************************!*\
  !*** ./src/datetime.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DateTime = /** @class */ (function () {
    function DateTime(date, format, lang) {
        if (date === void 0) { date = null; }
        if (format === void 0) { format = null; }
        if (lang === void 0) { lang = 'en-US'; }
        if (typeof format === 'object' && format !== null) {
            // tslint:disable-next-line: max-line-length
            this.dateInstance = format.parse(date instanceof DateTime ? date.clone().toJSDate() : date);
        }
        else if (typeof format === 'string') {
            this.dateInstance = (DateTime.parseDateTime(date, format, lang));
        }
        else if (date) {
            this.dateInstance = (DateTime.parseDateTime(date));
        }
        else {
            this.dateInstance = (DateTime.parseDateTime(new Date()));
        }
        this.lang = lang;
    }
    DateTime.parseDateTime = function (date, format, lang) {
        if (format === void 0) { format = 'YYYY-MM-DD'; }
        if (lang === void 0) { lang = 'en-US'; }
        if (!date)
            return new Date(NaN);
        if (date instanceof Date)
            return new Date(date);
        if (date instanceof DateTime)
            return date.clone().toJSDate();
        if (/^-?\d{10,}$/.test(date))
            return DateTime.getDateZeroTime(new Date(Number(date)));
        if (typeof date === 'string') {
            var matches = [];
            var m = null;
            // tslint:disable-next-line: no-conditional-assignment
            while ((m = DateTime.regex.exec(format)) != null) {
                if (m[1] === '\\')
                    continue; // delete when regexp lookbehind
                matches.push(m);
            }
            if (matches.length) {
                var datePattern = {
                    year: null,
                    month: null,
                    shortMonth: null,
                    longMonth: null,
                    day: null,
                    value: '',
                };
                if (matches[0].index > 0) {
                    datePattern.value += '.*?';
                }
                for (var _i = 0, _a = Object.entries(matches); _i < _a.length; _i++) {
                    var _b = _a[_i], k = _b[0], match = _b[1];
                    var key = Number(k);
                    var _c = DateTime.formatPatterns(match[0], lang), group = _c.group, pattern = _c.pattern;
                    datePattern[group] = key + 1;
                    datePattern.value += pattern;
                    datePattern.value += '.*?'; // any delimiters
                }
                var dateRegex = new RegExp("^" + datePattern.value + "$");
                if (dateRegex.test(date)) {
                    var d = dateRegex.exec(date);
                    var year = Number(d[datePattern.year]);
                    var month = null;
                    if (datePattern.month) {
                        month = Number(d[datePattern.month]) - 1;
                    }
                    else if (datePattern.shortMonth) {
                        month = DateTime.shortMonths(lang).indexOf(d[datePattern.shortMonth]);
                    }
                    else if (datePattern.longMonth) {
                        month = DateTime.longMonths(lang).indexOf(d[datePattern.longMonth]);
                    }
                    var day = Number(d[datePattern.day]) || 1;
                    return new Date(year, month, day, 0, 0, 0, 0);
                }
            }
        }
        return DateTime.getDateZeroTime(new Date(date));
    };
    DateTime.convertArray = function (array, format) {
        return array
            .map(function (d) {
            if (d instanceof Array) {
                return d.map(function (d1) { return new DateTime(d1, format); });
            }
            return new DateTime(d, format);
        });
    };
    DateTime.getDateZeroTime = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    };
    DateTime.shortMonths = function (lang) {
        return DateTime.MONTH_JS
            .map(function (x) { return new Date(2019, x).toLocaleString(lang, { month: 'short' }); });
    };
    DateTime.longMonths = function (lang) {
        return DateTime.MONTH_JS
            .map(function (x) { return new Date(2019, x).toLocaleString(lang, { month: 'long' }); });
    };
    DateTime.formatPatterns = function (token, lang) {
        switch (token) {
            case 'YY':
            case 'YYYY':
                return {
                    group: 'year',
                    pattern: "(\\d{" + token.length + "})",
                };
            case 'M':
                return {
                    group: 'month',
                    pattern: '(\\d{1,2})',
                };
            case 'MM':
                return {
                    group: 'month',
                    pattern: '(\\d{2})',
                };
            case 'MMM':
                return {
                    group: 'shortMonth',
                    pattern: "(" + DateTime.shortMonths(lang).join('|') + ")",
                };
            case 'MMMM':
                return {
                    group: 'longMonth',
                    pattern: "(" + DateTime.longMonths(lang).join('|') + ")",
                };
            case 'D':
                return {
                    group: 'day',
                    pattern: '(\\d{1,2})',
                };
            case 'DD':
                return {
                    group: 'day',
                    pattern: '(\\d{2})',
                };
        }
    };
    DateTime.prototype.toJSDate = function () {
        return this.dateInstance;
    };
    DateTime.prototype.toLocaleString = function (arg0, arg1) {
        return this.dateInstance.toLocaleString(arg0, arg1);
    };
    DateTime.prototype.toDateString = function () {
        return this.dateInstance.toDateString();
    };
    DateTime.prototype.getSeconds = function () {
        return this.dateInstance.getSeconds();
    };
    DateTime.prototype.getDay = function () {
        return this.dateInstance.getDay();
    };
    DateTime.prototype.getTime = function () {
        return this.dateInstance.getTime();
    };
    DateTime.prototype.getDate = function () {
        return this.dateInstance.getDate();
    };
    DateTime.prototype.getMonth = function () {
        return this.dateInstance.getMonth();
    };
    DateTime.prototype.getFullYear = function () {
        return this.dateInstance.getFullYear();
    };
    DateTime.prototype.setMonth = function (arg) {
        return this.dateInstance.setMonth(arg);
    };
    DateTime.prototype.setHours = function (hours, minutes, seconds, ms) {
        if (hours === void 0) { hours = 0; }
        if (minutes === void 0) { minutes = 0; }
        if (seconds === void 0) { seconds = 0; }
        if (ms === void 0) { ms = 0; }
        this.dateInstance.setHours(hours, minutes, seconds, ms);
    };
    DateTime.prototype.setSeconds = function (arg) {
        return this.dateInstance.setSeconds(arg);
    };
    DateTime.prototype.setDate = function (arg) {
        return this.dateInstance.setDate(arg);
    };
    DateTime.prototype.setFullYear = function (arg) {
        return this.dateInstance.setFullYear(arg);
    };
    DateTime.prototype.getWeek = function (firstDay) {
        var target = new Date(this.timestamp());
        var dayNr = (this.getDay() + (7 - firstDay)) % 7;
        target.setDate(target.getDate() - dayNr);
        var startWeekday = target.getTime();
        target.setMonth(0, 1);
        if (target.getDay() !== firstDay) {
            target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
        }
        return 1 + Math.ceil((startWeekday - target.getTime()) / 604800000);
    };
    DateTime.prototype.clone = function () {
        return new DateTime(this.toJSDate());
    };
    DateTime.prototype.isBetween = function (date1, date2, inclusivity) {
        if (inclusivity === void 0) { inclusivity = '()'; }
        switch (inclusivity) {
            default:
            case '()':
                return this.timestamp() > date1.getTime() && this.timestamp() < date2.getTime();
            case '[)':
                return this.timestamp() >= date1.getTime() && this.timestamp() < date2.getTime();
            case '(]':
                return this.timestamp() > date1.getTime() && this.timestamp() <= date2.getTime();
            case '[]':
                return this.timestamp() >= date1.getTime() && this.timestamp() <= date2.getTime();
        }
    };
    DateTime.prototype.isBefore = function (date, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                return date.getTime() > this.getTime();
            case 'day':
            case 'days':
                return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
                    > new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
            case 'month':
            case 'months':
                return new Date(date.getFullYear(), date.getMonth(), 1).getTime()
                    > new Date(this.getFullYear(), this.getMonth(), 1).getTime();
            case 'year':
            case 'years':
                return date.getFullYear() > this.getFullYear();
        }
        throw new Error('isBefore: Invalid unit!');
    };
    DateTime.prototype.isSameOrBefore = function (date, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                return date.getTime() >= this.getTime();
            case 'day':
            case 'days':
                return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
                    >= new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
            case 'month':
            case 'months':
                return new Date(date.getFullYear(), date.getMonth(), 1).getTime()
                    >= new Date(this.getFullYear(), this.getMonth(), 1).getTime();
        }
        throw new Error('isSameOrBefore: Invalid unit!');
    };
    DateTime.prototype.isAfter = function (date, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                return this.getTime() > date.getTime();
            case 'day':
            case 'days':
                return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime()
                    > new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
            case 'month':
            case 'months':
                return new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                    > new Date(date.getFullYear(), date.getMonth(), 1).getTime();
            case 'year':
            case 'years':
                return this.getFullYear() > date.getFullYear();
        }
        throw new Error('isAfter: Invalid unit!');
    };
    DateTime.prototype.isSameOrAfter = function (date, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                return this.getTime() >= date.getTime();
            case 'day':
            case 'days':
                return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime()
                    >= new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
            case 'month':
            case 'months':
                return new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                    >= new Date(date.getFullYear(), date.getMonth(), 1).getTime();
        }
        throw new Error('isSameOrAfter: Invalid unit!');
    };
    DateTime.prototype.isSame = function (date, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                return this.getTime() === date.getTime();
            case 'day':
            case 'days':
                return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime()
                    === new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
            case 'month':
            case 'months':
                return new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                    === new Date(date.getFullYear(), date.getMonth(), 1).getTime();
        }
        throw new Error('isSame: Invalid unit!');
    };
    DateTime.prototype.add = function (duration, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                this.setSeconds(this.getSeconds() + duration);
                break;
            case 'day':
            case 'days':
                this.setDate(this.getDate() + duration);
                break;
            case 'month':
            case 'months':
                this.setMonth(this.getMonth() + duration);
                break;
        }
        return this;
    };
    DateTime.prototype.subtract = function (duration, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                this.setSeconds(this.getSeconds() - duration);
                break;
            case 'day':
            case 'days':
                this.setDate(this.getDate() - duration);
                break;
            case 'month':
            case 'months':
                this.setMonth(this.getMonth() - duration);
                break;
        }
        return this;
    };
    DateTime.prototype.diff = function (date, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        var oneDay = 1000 * 60 * 60 * 24;
        switch (unit) {
            default:
            case 'second':
            case 'seconds':
                return this.getTime() - date.getTime();
            case 'day':
            case 'days':
                return Math.round((this.timestamp() - date.getTime()) / oneDay);
            case 'month':
            case 'months':
            // @TODO
        }
    };
    DateTime.prototype.format = function (format, lang) {
        if (lang === void 0) { lang = 'en-US'; }
        if (typeof format === 'object') {
            return format.output(this.clone().toJSDate());
        }
        var response = '';
        var matches = [];
        var m = null;
        // tslint:disable-next-line: no-conditional-assignment
        while ((m = DateTime.regex.exec(format)) != null) {
            if (m[1] === '\\')
                continue; // delete when regexp lookbehind
            matches.push(m);
        }
        if (matches.length) {
            // add start line of tokens are not at the beginning
            if (matches[0].index > 0) {
                response += format.substring(0, matches[0].index);
            }
            for (var _i = 0, _a = Object.entries(matches); _i < _a.length; _i++) {
                var _b = _a[_i], k = _b[0], match = _b[1];
                var key = Number(k);
                response += this.formatTokens(match[0], lang);
                if (matches[key + 1]) {
                    response += format.substring(match.index + match[0].length, matches[key + 1].index);
                }
                // add end line if tokens are not at the ending
                if (key === matches.length - 1) {
                    response += format.substring(match.index + match[0].length);
                }
            }
        }
        // remove escape characters
        return response.replace(/\\/g, '');
    };
    DateTime.prototype.timestamp = function () {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0, 0).getTime();
    };
    DateTime.prototype.formatTokens = function (token, lang) {
        switch (token) {
            case 'YY': return String(this.getFullYear()).slice(-2);
            case 'YYYY': return String(this.getFullYear());
            case 'M': return String(this.getMonth() + 1);
            case 'MM': return ("0" + (this.getMonth() + 1)).slice(-2);
            case 'MMM': return DateTime.shortMonths(lang)[this.getMonth()];
            case 'MMMM': return DateTime.longMonths(lang)[this.getMonth()];
            case 'D': return String(this.getDate());
            case 'DD': return ("0" + this.getDate()).slice(-2);
            default: return '';
        }
    };
    // replace to regexp lookbehind when most popular browsers will support
    // https://caniuse.com/#feat=js-regexp-lookbehind
    // /(?<!\\)(Y{2,4}|M{1,4}|D{1,2}|d{1,4}])/g
    DateTime.regex = /(\\)?(Y{2,4}|M{1,4}|D{1,2}|d{1,4})/g;
    DateTime.MONTH_JS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return DateTime;
}());
exports.DateTime = DateTime;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var litepicker_1 = __webpack_require__(/*! ./litepicker */ "./src/litepicker.ts");
exports.Litepicker = litepicker_1.Litepicker;
__webpack_require__(/*! ./methods */ "./src/methods.ts");
window.Litepicker = litepicker_1.Litepicker;
exports.default = litepicker_1.Litepicker;


/***/ }),

/***/ "./src/litepicker.ts":
/*!***************************!*\
  !*** ./src/litepicker.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var calendar_1 = __webpack_require__(/*! ./calendar */ "./src/calendar.ts");
var datetime_1 = __webpack_require__(/*! ./datetime */ "./src/datetime.ts");
var style = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var Litepicker = /** @class */ (function (_super) {
    __extends(Litepicker, _super);
    function Litepicker(options) {
        var _this = _super.call(this, options) || this;
        _this.preventClick = false;
        //
        _this.bindEvents();
        return _this;
    }
    Litepicker.prototype.scrollToDate = function (el) {
        if (this.options.scrollToDate) {
            // tslint:disable-next-line: max-line-length
            var startDate = this.options.startDate instanceof datetime_1.DateTime ? this.options.startDate.clone() : null;
            // tslint:disable-next-line: max-line-length
            var endDate = this.options.endDate instanceof datetime_1.DateTime ? this.options.endDate.clone() : null;
            if (this.options.startDate && (!el || el === this.options.element)) {
                startDate.setDate(1);
                this.calendars[0] = startDate.clone();
            }
            else if (el && this.options.endDate && el === this.options.elementEnd) {
                endDate.setDate(1);
                if (this.options.numberOfMonths > 1 && endDate.isAfter(startDate)) {
                    endDate.setMonth(endDate.getMonth() - (this.options.numberOfMonths - 1));
                }
                this.calendars[0] = endDate.clone();
            }
        }
    };
    Litepicker.prototype.bindEvents = function () {
        document.addEventListener('click', this.onClick.bind(this), true);
        this.ui = document.createElement('div');
        this.ui.className = style.litepicker;
        this.ui.style.display = 'none';
        this.ui.addEventListener('mouseenter', this.onMouseEnter.bind(this), true);
        this.ui.addEventListener('mouseleave', this.onMouseLeave.bind(this), false);
        if (this.options.autoRefresh) {
            if (this.options.element instanceof HTMLElement) {
                this.options.element.addEventListener('keyup', this.onInput.bind(this), true);
            }
            if (this.options.elementEnd instanceof HTMLElement) {
                this.options.elementEnd.addEventListener('keyup', this.onInput.bind(this), true);
            }
        }
        else {
            if (this.options.element instanceof HTMLElement) {
                this.options.element.addEventListener('change', this.onInput.bind(this), true);
            }
            if (this.options.elementEnd instanceof HTMLElement) {
                this.options.elementEnd.addEventListener('change', this.onInput.bind(this), true);
            }
        }
        if (this.options.parentEl) {
            if (this.options.parentEl instanceof HTMLElement) {
                this.options.parentEl.appendChild(this.ui);
            }
            else {
                document.querySelector(this.options.parentEl).appendChild(this.ui);
            }
        }
        else {
            if (this.options.inlineMode) {
                if (this.options.element instanceof HTMLInputElement) {
                    this.options.element.parentNode.appendChild(this.ui);
                }
                else {
                    this.options.element.appendChild(this.ui);
                }
            }
            else {
                document.body.appendChild(this.ui);
            }
        }
        this.updateInput();
        this.init();
        if (typeof this.options.setup === 'function') {
            this.options.setup.call(this, this);
        }
        this.render();
        if (this.options.inlineMode) {
            this.show();
        }
    };
    Litepicker.prototype.updateInput = function () {
        if (!(this.options.element instanceof HTMLInputElement))
            return;
        var startDate = this.options.startDate;
        var endDate = this.options.endDate;
        if (this.options.singleMode && startDate) {
            this.options.element.value = startDate.format(this.options.format, this.options.lang);
        }
        else if (!this.options.singleMode && startDate && endDate) {
            var startValue = startDate.format(this.options.format, this.options.lang);
            var endValue = endDate.format(this.options.format, this.options.lang);
            if (this.options.elementEnd instanceof HTMLInputElement) {
                this.options.element.value = startValue;
                this.options.elementEnd.value = endValue;
            }
            else {
                this.options.element.value = "" + startValue + this.options.delimiter + endValue;
            }
        }
        if (!startDate && !endDate) {
            this.options.element.value = '';
            if (this.options.elementEnd instanceof HTMLInputElement) {
                this.options.elementEnd.value = '';
            }
        }
    };
    Litepicker.prototype.isSamePicker = function (el) {
        var picker = el.closest("." + style.litepicker);
        return picker === this.ui;
    };
    Litepicker.prototype.shouldShown = function (el) {
        return !el.disabled && (el === this.options.element
            || (this.options.elementEnd && el === this.options.elementEnd));
    };
    Litepicker.prototype.shouldResetDatePicked = function () {
        return this.options.singleMode || this.datePicked.length === 2;
    };
    Litepicker.prototype.shouldSwapDatePicked = function () {
        return this.datePicked.length === 2
            && this.datePicked[0].getTime() > this.datePicked[1].getTime();
    };
    Litepicker.prototype.shouldCheckLockDays = function () {
        return this.options.disallowLockDaysInRange
            && this.datePicked.length === 2;
    };
    Litepicker.prototype.onClick = function (e) {
        var target = e.target;
        if (!target || !this.ui) {
            return;
        }
        // Click on element
        if (this.shouldShown(target)) {
            this.show(target);
            return;
        }
        // Click outside picker
        if (!target.closest("." + style.litepicker) && this.isShowning()) {
            this.hide();
            return;
        }
        if (!this.isSamePicker(target)) {
            return;
        }
        this.emit('before:click', target);
        if (this.preventClick) {
            this.preventClick = false;
            return;
        }
        // Click on date
        if (target.classList.contains(style.dayItem)) {
            e.preventDefault();
            if (target.classList.contains(style.isLocked)) {
                return;
            }
            if (this.shouldResetDatePicked()) {
                this.datePicked.length = 0;
            }
            this.datePicked[this.datePicked.length] = new datetime_1.DateTime(target.dataset.time);
            if (this.shouldSwapDatePicked()) {
                var tempDate = this.datePicked[1].clone();
                this.datePicked[1] = this.datePicked[0].clone();
                this.datePicked[0] = tempDate.clone();
            }
            if (this.shouldCheckLockDays()) {
                var locked = utils_1.rangeIsLocked(this.datePicked, this.options);
                if (locked) {
                    this.emit('error:range', this.datePicked);
                    this.datePicked.length = 0;
                }
            }
            this.render();
            this.emit.apply(this, __spreadArrays(['preselect'], __spreadArrays(this.datePicked).map(function (d) { return d.clone(); })));
            if (this.options.autoApply) {
                if (this.options.singleMode && this.datePicked.length) {
                    this.setDate(this.datePicked[0]);
                    this.hide();
                }
                else if (!this.options.singleMode && this.datePicked.length === 2) {
                    this.setDateRange(this.datePicked[0], this.datePicked[1]);
                    this.hide();
                }
            }
            return;
        }
        // Click on button previous month
        if (target.classList.contains(style.buttonPreviousMonth)) {
            e.preventDefault();
            var idx = 0;
            var numberOfMonths = this.options.switchingMonths || this.options.numberOfMonths;
            if (this.options.splitView) {
                var monthItem = target.closest("." + style.monthItem);
                idx = utils_1.findNestedMonthItem(monthItem);
                numberOfMonths = 1;
            }
            this.calendars[idx].setMonth(this.calendars[idx].getMonth() - numberOfMonths);
            this.gotoDate(this.calendars[idx], idx);
            this.emit('change:month', this.calendars[idx], idx);
            return;
        }
        // Click on button next month
        if (target.classList.contains(style.buttonNextMonth)) {
            e.preventDefault();
            var idx = 0;
            var numberOfMonths = this.options.switchingMonths || this.options.numberOfMonths;
            if (this.options.splitView) {
                var monthItem = target.closest("." + style.monthItem);
                idx = utils_1.findNestedMonthItem(monthItem);
                numberOfMonths = 1;
            }
            this.calendars[idx].setMonth(this.calendars[idx].getMonth() + numberOfMonths);
            this.gotoDate(this.calendars[idx], idx);
            this.emit('change:month', this.calendars[idx], idx);
            return;
        }
        // Click on button cancel
        if (target.classList.contains(style.buttonCancel)) {
            e.preventDefault();
            this.hide();
            this.emit('button:cancel');
        }
        // Click on button apply
        if (target.classList.contains(style.buttonApply)) {
            e.preventDefault();
            if (this.options.singleMode && this.datePicked.length) {
                this.setDate(this.datePicked[0]);
            }
            else if (!this.options.singleMode && this.datePicked.length === 2) {
                this.setDateRange(this.datePicked[0], this.datePicked[1]);
            }
            this.hide();
            this.emit('button:apply', this.options.startDate, this.options.endDate);
        }
        // Click on month
        if (target.classList.contains(style.monthItemName)) {
            e.preventDefault();
            var month = parseInt(target.dataset.month);
            var year = parseInt(target.dataset.year);
            this.datePicked[0] = new datetime_1.DateTime(new Date(year, month, 1));
            this.datePicked[1] = new datetime_1.DateTime(new Date(year, month + 1, 0));
            this.setDateRange(this.datePicked[0], this.datePicked[1]);
            this.emit.apply(this, __spreadArrays(['preselect'], __spreadArrays(this.datePicked).map(function (d) { return d.clone(); })));
            this.render();
        }
    };
    Litepicker.prototype.showTooltip = function (element, text) {
        var tooltip = this.ui.querySelector("." + style.containerTooltip);
        tooltip.style.visibility = 'visible';
        tooltip.innerHTML = text;
        var pickerBCR = this.ui.getBoundingClientRect();
        var tooltipBCR = tooltip.getBoundingClientRect();
        var dayBCR = element.getBoundingClientRect();
        var top = dayBCR.top;
        var left = dayBCR.left;
        if (this.options.inlineMode && this.options.parentEl) {
            var parentBCR = this.ui.parentNode.getBoundingClientRect();
            top -= parentBCR.top;
            left -= parentBCR.left;
        }
        else {
            top -= pickerBCR.top;
            left -= pickerBCR.left;
        }
        top -= tooltipBCR.height;
        left -= tooltipBCR.width / 2;
        left += dayBCR.width / 2;
        tooltip.style.top = top + "px";
        tooltip.style.left = left + "px";
        this.emit('tooltip', tooltip, element);
    };
    Litepicker.prototype.hideTooltip = function () {
        var tooltip = this.ui.querySelector("." + style.containerTooltip);
        tooltip.style.visibility = 'hidden';
    };
    Litepicker.prototype.shouldAllowMouseEnter = function (el) {
        return !this.options.singleMode
            && !el.classList.contains(style.isLocked);
    };
    Litepicker.prototype.shouldAllowRepick = function () {
        return this.options.elementEnd
            && this.options.allowRepick
            && this.options.startDate
            && this.options.endDate;
    };
    Litepicker.prototype.isDayItem = function (el) {
        return el.classList.contains(style.dayItem);
    };
    Litepicker.prototype.onMouseEnter = function (event) {
        var _this = this;
        var target = event.target;
        if (!this.isDayItem(target)) {
            return;
        }
        if (this.shouldAllowMouseEnter(target)) {
            if (this.shouldAllowRepick()) {
                if (this.triggerElement === this.options.element) {
                    this.datePicked[0] = this.options.endDate.clone();
                }
                else if (this.triggerElement === this.options.elementEnd) {
                    this.datePicked[0] = this.options.startDate.clone();
                }
            }
            if (this.datePicked.length !== 1) {
                return;
            }
            var startDateElement = this.ui
                .querySelector("." + style.dayItem + "[data-time=\"" + this.datePicked[0].getTime() + "\"]");
            var date1_1 = this.datePicked[0].clone();
            var date2_1 = new datetime_1.DateTime(target.dataset.time);
            var isFlipped = false;
            if (date1_1.getTime() > date2_1.getTime()) {
                var tempDate = date1_1.clone();
                date1_1 = date2_1.clone();
                date2_1 = tempDate.clone();
                isFlipped = true;
            }
            var allDayItems = Array.prototype.slice.call(this.ui.querySelectorAll("." + style.dayItem));
            allDayItems.forEach(function (d) {
                var date = new datetime_1.DateTime(d.dataset.time);
                var day = _this.renderDay(date);
                if (date.isBetween(date1_1, date2_1)) {
                    day.classList.add(style.isInRange);
                }
                d.className = day.className;
            });
            target.classList.add(style.isEndDate);
            if (isFlipped) {
                if (startDateElement) {
                    startDateElement.classList.add(style.isFlipped);
                }
                target.classList.add(style.isFlipped);
            }
            else {
                if (startDateElement) {
                    startDateElement.classList.remove(style.isFlipped);
                }
                target.classList.remove(style.isFlipped);
            }
            if (this.options.showTooltip) {
                var days = date2_1.diff(date1_1, 'day') + 1;
                if (typeof this.options.tooltipNumber === 'function') {
                    days = this.options.tooltipNumber.call(this, days);
                }
                if (days > 0) {
                    var pluralName = this.pluralSelector(days);
                    var pluralText = this.options.tooltipText[pluralName]
                        ? this.options.tooltipText[pluralName]
                        : "[" + pluralName + "]";
                    var text = days + " " + pluralText;
                    this.showTooltip(target, text);
                    // fix bug iOS 10-12 - https://github.com/wakirin/Litepicker/issues/124
                    var ua = window.navigator.userAgent;
                    var iDevice = /(iphone|ipad)/i.test(ua);
                    var iOS11or12 = /OS 1([0-2])/i.test(ua);
                    if (iDevice && iOS11or12) {
                        target.dispatchEvent(new Event('click'));
                    }
                }
                else {
                    this.hideTooltip();
                }
            }
        }
    };
    Litepicker.prototype.onMouseLeave = function (event) {
        var target = event.target;
        if (!this.options.allowRepick
            || (this.options.allowRepick && !this.options.startDate && !this.options.endDate)) {
            return;
        }
        this.datePicked.length = 0;
        this.render();
    };
    Litepicker.prototype.onInput = function (event) {
        var _a = this.parseInput(), startValue = _a[0], endValue = _a[1];
        var isValid = false;
        var dateFormat = this.options.format;
        if (this.options.elementEnd) {
            isValid = startValue instanceof datetime_1.DateTime
                && endValue instanceof datetime_1.DateTime
                && startValue.format(dateFormat) === this.options.element.value
                && endValue.format(dateFormat) === this.options.elementEnd.value;
        }
        else if (this.options.singleMode) {
            isValid = startValue instanceof datetime_1.DateTime
                && startValue.format(dateFormat) === this.options.element.value;
        }
        else {
            isValid = startValue instanceof datetime_1.DateTime
                && endValue instanceof datetime_1.DateTime
                // tslint:disable-next-line: max-line-length
                && "" + startValue.format(dateFormat) + this.options.delimiter + endValue.format(dateFormat) === this.options.element.value;
        }
        if (isValid) {
            if (endValue && startValue.getTime() > endValue.getTime()) {
                var tempDate = startValue.clone();
                startValue = endValue.clone();
                endValue = tempDate.clone();
            }
            this.options.startDate = new datetime_1.DateTime(startValue, this.options.format, this.options.lang);
            if (endValue) {
                this.options.endDate = new datetime_1.DateTime(endValue, this.options.format, this.options.lang);
            }
            this.updateInput();
            this.render();
            var dateGo = startValue.clone();
            var monthIdx = 0;
            var isStart = true;
            if (this.options.elementEnd) {
                isStart = startValue.format(dateFormat) === event.target.value;
            }
            else {
                isStart = event.target.value.startsWith(startValue.format(dateFormat));
            }
            if (!isStart) {
                dateGo = endValue.clone();
                monthIdx = this.options.numberOfMonths - 1;
            }
            this.emit('selected', this.getStartDate(), this.getEndDate());
            this.gotoDate(dateGo, monthIdx);
        }
    };
    return Litepicker;
}(calendar_1.Calendar));
exports.Litepicker = Litepicker;


/***/ }),

/***/ "./src/methods.ts":
/*!************************!*\
  !*** ./src/methods.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var datetime_1 = __webpack_require__(/*! ./datetime */ "./src/datetime.ts");
var litepicker_1 = __webpack_require__(/*! ./litepicker */ "./src/litepicker.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
litepicker_1.Litepicker.prototype.show = function (el) {
    if (el === void 0) { el = null; }
    this.emit('before:show', el);
    var element = el ? el : this.options.element;
    this.triggerElement = element;
    if (this.isShowning()) {
        return;
    }
    if (this.options.inlineMode) {
        this.ui.style.position = 'relative';
        this.ui.style.display = 'inline-block';
        this.ui.style.top = null;
        this.ui.style.left = null;
        this.ui.style.bottom = null;
        this.ui.style.right = null;
        return;
    }
    this.scrollToDate(el);
    this.render();
    this.ui.style.position = 'absolute';
    this.ui.style.display = 'block';
    this.ui.style.zIndex = this.options.zIndex;
    var position = this.findPosition(element);
    this.ui.style.top = position.top + "px";
    this.ui.style.left = position.left + "px";
    this.ui.style.right = null;
    this.ui.style.bottom = null;
    this.emit('show', el);
};
litepicker_1.Litepicker.prototype.hide = function () {
    if (!this.isShowning()) {
        return;
    }
    this.datePicked.length = 0;
    this.updateInput();
    if (this.options.inlineMode) {
        this.render();
        return;
    }
    this.ui.style.display = 'none';
    this.emit('hide');
};
litepicker_1.Litepicker.prototype.getDate = function () {
    return this.getStartDate();
};
litepicker_1.Litepicker.prototype.getStartDate = function () {
    if (this.options.startDate) {
        return this.options.startDate.clone();
    }
    return null;
};
litepicker_1.Litepicker.prototype.getEndDate = function () {
    if (this.options.endDate) {
        return this.options.endDate.clone();
    }
    return null;
};
litepicker_1.Litepicker.prototype.setDate = function (date, force) {
    if (force === void 0) { force = false; }
    var d = new datetime_1.DateTime(date, this.options.format, this.options.lang);
    var isLocked = utils_1.dateIsLocked(d, this.options, [d]);
    if (isLocked && !force) {
        this.emit('error:date', d);
    }
    else {
        this.setStartDate(date);
        if (this.options.inlineMode) {
            this.render();
        }
        this.emit('selected', this.getDate());
    }
};
litepicker_1.Litepicker.prototype.setStartDate = function (date) {
    if (!date)
        return;
    this.options.startDate = new datetime_1.DateTime(date, this.options.format, this.options.lang);
    this.updateInput();
};
litepicker_1.Litepicker.prototype.setEndDate = function (date) {
    if (!date)
        return;
    this.options.endDate = new datetime_1.DateTime(date, this.options.format, this.options.lang);
    if (this.options.startDate.getTime() > this.options.endDate.getTime()) {
        this.options.endDate = this.options.startDate.clone();
        this.options.startDate = new datetime_1.DateTime(date, this.options.format, this.options.lang);
    }
    this.updateInput();
};
litepicker_1.Litepicker.prototype.setDateRange = function (date1, date2, force) {
    if (force === void 0) { force = false; }
    // stop repicking by resetting the trigger element
    this.triggerElement = undefined;
    var d1 = new datetime_1.DateTime(date1, this.options.format, this.options.lang);
    var d2 = new datetime_1.DateTime(date2, this.options.format, this.options.lang);
    var isLocked = false;
    if (this.options.disallowLockDaysInRange) {
        isLocked = utils_1.rangeIsLocked([d1, d2], this.options);
    }
    else {
        isLocked = utils_1.dateIsLocked(d1, this.options, [d1, d2])
            || utils_1.dateIsLocked(d2, this.options, [d1, d2]);
    }
    if (isLocked && !force) {
        this.emit('error:range', [d1, d2]);
    }
    else {
        this.setStartDate(d1);
        this.setEndDate(d2);
        if (this.options.inlineMode) {
            this.render();
        }
        this.updateInput();
        this.emit('selected', this.getStartDate(), this.getEndDate());
    }
};
litepicker_1.Litepicker.prototype.gotoDate = function (date, idx) {
    if (idx === void 0) { idx = 0; }
    var toDate = new datetime_1.DateTime(date);
    toDate.setDate(1);
    this.calendars[idx] = toDate.clone();
    this.render();
};
litepicker_1.Litepicker.prototype.setLockDays = function (array) {
    this.options.lockDays = datetime_1.DateTime.convertArray(array, this.options.lockDaysFormat);
    console.log('this.options.lockDays', this.options.lockDays);
    this.render();
};
litepicker_1.Litepicker.prototype.setHighlightedDays = function (array) {
    this.options.highlightedDays = datetime_1.DateTime.convertArray(array, this.options.highlightedDaysFormat);
    this.render();
};
litepicker_1.Litepicker.prototype.setOptions = function (options) {
    delete options.element;
    delete options.elementEnd;
    delete options.parentEl;
    if (options.startDate) {
        options.startDate = new datetime_1.DateTime(options.startDate, this.options.format, this.options.lang);
    }
    if (options.endDate) {
        options.endDate = new datetime_1.DateTime(options.endDate, this.options.format, this.options.lang);
    }
    var dropdowns = __assign(__assign({}, this.options.dropdowns), options.dropdowns);
    var buttonText = __assign(__assign({}, this.options.buttonText), options.buttonText);
    var tooltipText = __assign(__assign({}, this.options.tooltipText), options.tooltipText);
    this.options = __assign(__assign({}, this.options), options);
    this.options.dropdowns = __assign({}, dropdowns);
    this.options.buttonText = __assign({}, buttonText);
    this.options.tooltipText = __assign({}, tooltipText);
    if (this.options.singleMode && !(this.options.startDate instanceof datetime_1.DateTime)) {
        this.options.startDate = null;
        this.options.endDate = null;
    }
    if (!this.options.singleMode
        && (!(this.options.startDate instanceof datetime_1.DateTime)
            || !(this.options.endDate instanceof datetime_1.DateTime))) {
        this.options.startDate = null;
        this.options.endDate = null;
    }
    for (var idx = 0; idx < this.options.numberOfMonths; idx += 1) {
        var date = this.options.startDate
            ? this.options.startDate.clone()
            : new datetime_1.DateTime();
        date.setDate(1);
        date.setMonth(date.getMonth() + idx);
        this.calendars[idx] = date;
    }
    if (this.options.lockDays.length) {
        this.options.lockDays = datetime_1.DateTime.convertArray(this.options.lockDays, this.options.lockDaysFormat);
    }
    if (this.options.highlightedDays.length) {
        this.options.highlightedDays = datetime_1.DateTime.convertArray(this.options.highlightedDays, this.options.highlightedDaysFormat);
    }
    this.render();
    if (this.options.inlineMode) {
        this.show();
    }
    this.updateInput();
};
litepicker_1.Litepicker.prototype.clearSelection = function () {
    this.options.startDate = null;
    this.options.endDate = null;
    this.datePicked.length = 0;
    this.updateInput();
    if (this.isShowning()) {
        this.render();
    }
    this.emit('clear:selection');
};
litepicker_1.Litepicker.prototype.destroy = function () {
    if (this.ui && this.ui.parentNode) {
        this.ui.parentNode.removeChild(this.ui);
        this.ui = null;
    }
    this.emit('destroy');
};


/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/dts-css-modules-loader??ref--5-1!../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../node_modules/postcss-loader/src??ref--5-3!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/dts-css-modules-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function insertAtTop(element) {
                var parent = document.querySelector('head');
                // eslint-disable-next-line no-underscore-dangle
                var lastInsertedElement = window._lastElementInsertedByStyleLoader;

                if (!window.disableLitepickerStyles) {
                  if (!lastInsertedElement) {
                    parent.insertBefore(element, parent.firstChild);
                  } else if (lastInsertedElement.nextSibling) {
                    parent.insertBefore(element, lastInsertedElement.nextSibling);
                  } else {
                    parent.appendChild(element);
                  }

                  // eslint-disable-next-line no-underscore-dangle
                  window._lastElementInsertedByStyleLoader = element;
                }
              };
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function findNestedMonthItem(monthItem) {
    var children = monthItem.parentNode.childNodes;
    for (var i = 0; i < children.length; i = i + 1) {
        var curNode = children.item(i);
        if (curNode === monthItem) {
            return i;
        }
    }
    return 0;
}
exports.findNestedMonthItem = findNestedMonthItem;
function dateIsLocked(date, options, pickedDates) {
    var isLocked = false;
    if (options.lockDays.length) {
        isLocked = options.lockDays
            .filter(function (d) {
            if (d instanceof Array) {
                return date.isBetween(d[0], d[1], options.lockDaysInclusivity);
            }
            return d.isSame(date, 'day');
        }).length;
    }
    if (!isLocked && typeof options.lockDaysFilter === 'function') {
        isLocked = options.lockDaysFilter.call(this, date.clone(), null, pickedDates);
    }
    return isLocked;
}
exports.dateIsLocked = dateIsLocked;
function rangeIsLocked(days, options) {
    var isLocked = false;
    if (options.lockDays.length) {
        isLocked = options.lockDays
            .filter(function (d) {
            if (d instanceof Array) {
                var isEqualToRange = days[0].toDateString() === d[0].toDateString()
                    && days[1].toDateString() === d[1].toDateString();
                return d[0].isBetween(days[0], days[1], options.lockDaysInclusivity)
                    || d[1].isBetween(days[0], days[1], options.lockDaysInclusivity)
                    || isEqualToRange;
            }
            return d.isBetween(days[0], days[1], options.lockDaysInclusivity);
        }).length;
    }
    if (!isLocked && typeof options.lockDaysFilter === 'function') {
        isLocked = options.lockDaysFilter.call(this, days[0].clone(), days[1].clone(), days);
    }
    return isLocked;
}
exports.rangeIsLocked = rangeIsLocked;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaXRlcGlja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9jYWxlbmRhci50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL2NvcmUudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9kYXRldGltZS50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvbGl0ZXBpY2tlci50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL21ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9zY3NzL21haW4uc2Nzcz9jYzFlIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7OztBQzdGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsaURBQWlELHlEQUF5RCwwQ0FBMEMsK0NBQStDLHdDQUF3QywwQ0FBMEMsa0RBQWtELGtEQUFrRCx3REFBd0Qsd0RBQXdELG9FQUFvRSw4Q0FBOEMsa0RBQWtELGlDQUFpQyxpQ0FBaUMsMENBQTBDLHlDQUF5Qyw0Q0FBNEMsMENBQTBDLHNDQUFzQyw0Q0FBNEMsb0NBQW9DLDBDQUEwQywyQ0FBMkMsaURBQWlELDBDQUEwQyxnREFBZ0QsNkNBQTZDLG1EQUFtRCw2Q0FBNkMsbURBQW1ELEVBQUUsd0JBQXdCLG9FQUFvRSxFQUFFLGlCQUFpQixnSEFBZ0gscUJBQXFCLGtCQUFrQixFQUFFLHdCQUF3QixtQkFBbUIsdUJBQXVCLEVBQUUsa0NBQWtDLDJCQUEyQiwyQkFBMkIsb0JBQW9CLEVBQUUsb0NBQW9DLDJCQUEyQiwyQkFBMkIsb0JBQW9CLDBCQUEwQiwwQkFBMEIsb0VBQW9FLHlCQUF5QixzRkFBc0Ysc0ZBQXNGLHdEQUF3RCxzQ0FBc0Msc0NBQXNDLEVBQUUsZ0RBQWdELGdFQUFnRSxFQUFFLGdEQUFnRCxnRUFBZ0UsRUFBRSxnREFBZ0QsZ0VBQWdFLEVBQUUsaUxBQWlMLDRCQUE0QixFQUFFLGtEQUFrRCxxQkFBcUIsNkNBQTZDLHdDQUF3Qyx3Q0FBd0MsRUFBRSwyREFBMkQsK0JBQStCLCtCQUErQix3QkFBd0Isb0NBQW9DLHFDQUFxQyxpREFBaUQsMkJBQTJCLDRCQUE0Qiw2QkFBNkIsb0NBQW9DLHFDQUFxQyxzQ0FBc0Msc0RBQXNELEVBQUUsaUVBQWlFLGdDQUFnQyw0QkFBNEIsNEJBQTRCLEVBQUUsc0ZBQXNGLGdDQUFnQyxFQUFFLHNGQUFzRix5QkFBeUIsRUFBRSwyRUFBMkUsd0RBQXdELEVBQUUsbUZBQW1GLHlEQUF5RCxFQUFFLCtFQUErRSxtQ0FBbUMsRUFBRSxtRkFBbUYsZ0VBQWdFLEVBQUUsMkZBQTJGLGlFQUFpRSxFQUFFLG1LQUFtSywrQkFBK0Isa0NBQWtDLDZCQUE2QiwrQkFBK0Isd0RBQXdELGdEQUFnRCw0QkFBNEIsRUFBRSwyS0FBMkssbUNBQW1DLEVBQUUsb0ZBQW9GLDZEQUE2RCxFQUFFLHVMQUF1TCw4REFBOEQsRUFBRSw0RkFBNEYscUVBQXFFLEVBQUUsb0dBQW9HLHNFQUFzRSxFQUFFLGdGQUFnRiw2REFBNkQsRUFBRSwrS0FBK0ssOERBQThELEVBQUUsd0ZBQXdGLHFFQUFxRSxFQUFFLGdHQUFnRyxzRUFBc0UsRUFBRSxpRUFBaUUsK0JBQStCLCtCQUErQix3QkFBd0IsK0JBQStCLGtDQUFrQyxtQ0FBbUMsOENBQThDLHVEQUF1RCxFQUFFLHlFQUF5RSwyQkFBMkIsMkJBQTJCLGdDQUFnQyw0QkFBNEIsNEJBQTRCLCtDQUErQywrQkFBK0IsRUFBRSx1RkFBdUYsOEJBQThCLEVBQUUsa0ZBQWtGLDhCQUE4QixFQUFFLDZGQUE2Riw2QkFBNkIsRUFBRSxxRkFBcUYsNkJBQTZCLEVBQUUsa0NBQWtDLDJCQUEyQiwyQkFBMkIsb0JBQW9CLDBCQUEwQiwwQkFBMEIsMkJBQTJCLDhCQUE4QiwrQkFBK0IsMENBQTBDLHlCQUF5QixzQ0FBc0Msc0NBQXNDLEVBQUUsaUZBQWlGLHVCQUF1QiwyQ0FBMkMsRUFBRSw4Q0FBOEMsMkNBQTJDLDJCQUEyQiw4QkFBOEIsMkJBQTJCLG9EQUFvRCw0Q0FBNEMsd0JBQXdCLEVBQUUsc0RBQXNELG1EQUFtRCxnRkFBZ0YsZ0ZBQWdGLEVBQUUseURBQXlELGtEQUFrRCxFQUFFLDBEQUEwRCxtREFBbUQsRUFBRSxrRUFBa0UscURBQXFELHFDQUFxQyxxQ0FBcUMsNEJBQTRCLEVBQUUsNERBQTRELGdFQUFnRSwyQkFBMkIsRUFBRSw4REFBOEQsa0RBQWtELGdFQUFnRSxzQ0FBc0MseUNBQXlDLHFDQUFxQyx3Q0FBd0MsRUFBRSwyRUFBMkUsc0NBQXNDLHlDQUF5Qyx5Q0FBeUMsNENBQTRDLEVBQUUsNERBQTRELGdEQUFnRCw4REFBOEQsb0NBQW9DLHVDQUF1Qyx1Q0FBdUMsMENBQTBDLEVBQUUseUVBQXlFLHdDQUF3QywyQ0FBMkMsdUNBQXVDLDBDQUEwQyxFQUFFLDBFQUEwRSxzQ0FBc0MseUNBQXlDLHVDQUF1QywwQ0FBMEMsRUFBRSwrREFBK0QseURBQXlELHVFQUF1RSxFQUFFLGlEQUFpRCw2QkFBNkIsNkJBQTZCLHNCQUFzQixrQ0FBa0MsbUNBQW1DLG9DQUFvQyxpQ0FBaUMsa0NBQWtDLHdDQUF3Qyx5REFBeUQsdUJBQXVCLEVBQUUsb0NBQW9DLHdCQUF3Qix3QkFBd0Isb0JBQW9CLDBEQUEwRCwwRkFBMEYsMEZBQTBGLHFDQUFxQyxzQ0FBc0MsRUFBRSwwREFBMEQsMkJBQTJCLHVCQUF1QixFQUFFLHFEQUFxRCxtRUFBbUUscURBQXFELGtCQUFrQiw2QkFBNkIsMkJBQTJCLEVBQUUseURBQXlELCtCQUErQixFQUFFLG9EQUFvRCxrRUFBa0Usb0RBQW9ELGtCQUFrQiw2QkFBNkIsMkJBQTJCLDBCQUEwQiwyQkFBMkIsRUFBRSwrREFBK0QsdUJBQXVCLEVBQUUsd0RBQXdELCtCQUErQixFQUFFLHFDQUFxQyx5QkFBeUIsdUJBQXVCLHVCQUF1Qix5QkFBeUIsMkRBQTJELHdEQUF3RCx3REFBd0QsMEJBQTBCLHNCQUFzQiwyQkFBMkIseUJBQXlCLEVBQUUsOENBQThDLDJCQUEyQixxQkFBcUIsOEJBQThCLGtEQUFrRCw0Q0FBNEMsMkNBQTJDLHNCQUFzQixFQUFFLDZDQUE2QywyQkFBMkIscUJBQXFCLDhCQUE4QixpRUFBaUUsNENBQTRDLDJDQUEyQyxzQkFBc0IsRUFBRTtBQUM3c2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtCQUFrQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0JBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGdCQUFnQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSTtBQUMzQyw4QkFBOEIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSTtBQUN2RDtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbGFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMseUNBQWM7QUFDekM7QUFDQSxtQkFBTyxDQUFDLG1DQUFXO0FBQ25CO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaURBQWlELFFBQVE7QUFDekQsd0NBQXdDLFFBQVE7QUFDaEQsd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUJBQWlCLG1CQUFPLENBQUMscUNBQVk7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMscUNBQVk7QUFDckMsWUFBWSxtQkFBTyxDQUFDLDhDQUFrQjtBQUN0QyxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtIQUFrSCxrQkFBa0IsRUFBRTtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0hBQWtILGtCQUFrQixFQUFFO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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Ozs7Ozs7Ozs7OztBQ2xOQSxjQUFjLG1CQUFPLENBQUMsdVpBQW9POztBQUUxUDtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzSkFBMkU7O0FBRWhHO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJsaXRlcGlja2VyLmNvbW1vbmpzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbGl0ZXBpY2tlci1jb250YWluZXItbW9udGhzLWNvbG9yLWJnOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLWNvbnRhaW5lci1tb250aHMtYm94LXNoYWRvdy1jb2xvcjogI2RkZDtcXG4gIC0tbGl0ZXBpY2tlci1mb290ZXItY29sb3ItYmc6ICNmYWZhZmE7XFxuICAtLWxpdGVwaWNrZXItZm9vdGVyLWJveC1zaGFkb3ctY29sb3I6ICNkZGQ7XFxuICAtLWxpdGVwaWNrZXItdG9vbHRpcC1jb2xvci1iZzogI2ZmZjtcXG4gIC0tbGl0ZXBpY2tlci1tb250aC1oZWFkZXItY29sb3I6ICMzMzM7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3I6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3I6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3ItaG92ZXI6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3ItaG92ZXI6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItbW9udGgtd2lkdGg6IGNhbGModmFyKC0tbGl0ZXBpY2tlci1kYXktd2lkdGgpICogNyk7XFxuICAtLWxpdGVwaWNrZXItbW9udGgtd2Vla2RheS1jb2xvcjogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1tb250aC13ZWVrLW51bWJlci1jb2xvcjogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1kYXktd2lkdGg6IDM4cHg7XFxuICAtLWxpdGVwaWNrZXItZGF5LWNvbG9yOiAjMzMzO1xcbiAgLS1saXRlcGlja2VyLWRheS1jb2xvci1ob3ZlcjogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1pcy10b2RheS1jb2xvcjogI2Y0NDMzNjtcXG4gIC0tbGl0ZXBpY2tlci1pcy1pbi1yYW5nZS1jb2xvcjogI2JiZGVmYjtcXG4gIC0tbGl0ZXBpY2tlci1pcy1sb2NrZWQtY29sb3I6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItaXMtc3RhcnQtY29sb3I6ICNmZmY7XFxuICAtLWxpdGVwaWNrZXItaXMtc3RhcnQtY29sb3ItYmc6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItaXMtZW5kLWNvbG9yOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLWlzLWVuZC1jb2xvci1iZzogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tY2FuY2VsLWNvbG9yOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1jYW5jZWwtY29sb3ItYmc6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLWFwcGx5LWNvbG9yOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1hcHBseS1jb2xvci1iZzogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3I6ICM5MDkwOTA7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLXJlc2V0LWNvbG9yLWhvdmVyOiAjMjE5NmYzO1xcbiAgLS1saXRlcGlja2VyLWhpZ2hsaWdodGVkLWRheS1jb2xvcjogIzMzMztcXG4gIC0tbGl0ZXBpY2tlci1oaWdobGlnaHRlZC1kYXktY29sb3ItYmc6ICNmZmViM2I7IH1cXG5cXG4uc2hvdy13ZWVrLW51bWJlcnMge1xcbiAgLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoOiBjYWxjKHZhcigtLWxpdGVwaWNrZXItZGF5LXdpZHRoKSAqIDgpOyB9XFxuXFxuLmxpdGVwaWNrZXIge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBkaXNwbGF5OiBub25lOyB9XFxuICAubGl0ZXBpY2tlciBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7IH1cXG4gIC5saXRlcGlja2VyIC5jb250YWluZXJfX21haW4ge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1jb250YWluZXItbW9udGhzLWNvbG9yLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbGl0ZXBpY2tlci1jb250YWluZXItbW9udGhzLWJveC1zaGFkb3ctY29sb3IpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbGl0ZXBpY2tlci1jb250YWluZXItbW9udGhzLWJveC1zaGFkb3ctY29sb3IpO1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoKSArIDEwcHgpO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocy5jb2x1bW5zLTIge1xcbiAgICAgIHdpZHRoOiBjYWxjKCh2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoKSAqIDIpICsgMjBweCk7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzLmNvbHVtbnMtMyB7XFxuICAgICAgd2lkdGg6IGNhbGMoKHZhcigtLWxpdGVwaWNrZXItbW9udGgtd2lkdGgpICogMykgKyAzMHB4KTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMuY29sdW1ucy00IHtcXG4gICAgICB3aWR0aDogY2FsYygodmFyKC0tbGl0ZXBpY2tlci1tb250aC13aWR0aCkgKiA0KSArIDQwcHgpOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocy5zcGxpdC12aWV3IC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoLFxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMuc3BsaXQtdmlldyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoIHtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbSB7XFxuICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgIHdpZHRoOiB2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoKTtcXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1tb250aC1oZWFkZXItY29sb3IpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIGRpdiB7XFxuICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgICAgICAgICBmbGV4OiAxOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgZGl2ID4gLm1vbnRoLWl0ZW0tbmFtZSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciBkaXYgPiAubW9udGgtaXRlbS15ZWFyIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5yZXNldC1idXR0b24ge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLnJlc2V0LWJ1dHRvbiA+IHN2ZyB7XFxuICAgICAgICAgICAgZmlsbDogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLnJlc2V0LWJ1dHRvbiAqIHtcXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5yZXNldC1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1yZXNldC1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5yZXNldC1idXR0b246aG92ZXIgPiBzdmcge1xcbiAgICAgICAgICAgICAgZmlsbDogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3ItaG92ZXIpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGgsXFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aCB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyIDAuM3M7XFxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlciAwLjNzO1xcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoICosXFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoICoge1xcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGgge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcHJldi1tb250aC1jb2xvcik7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoID4gc3ZnLFxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGggPiBpbWcge1xcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1wcmV2aW91cy1tb250aDpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3ItaG92ZXIpOyB9XFxuICAgICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoOmhvdmVyID4gc3ZnIHtcXG4gICAgICAgICAgICAgIGZpbGw6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3ItaG92ZXIpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aCB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1uZXh0LW1vbnRoLWNvbG9yKTsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aCA+IHN2ZyxcXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLW5leHQtbW9udGggPiBpbWcge1xcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tbmV4dC1tb250aC1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aDpob3ZlciA+IHN2ZyB7XFxuICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1uZXh0LW1vbnRoLWNvbG9yLWhvdmVyKTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS13ZWVrZGF5cy1yb3cge1xcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1tb250aC13ZWVrZGF5LWNvbG9yKTsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLXdlZWtkYXlzLXJvdyA+IGRpdiB7XFxuICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICAgICAgICBmb250LXNpemU6IDg1JTtcXG4gICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgICAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgIHdpZHRoOiB2YXIoLS1saXRlcGlja2VyLWRheS13aWR0aCk7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbTpmaXJzdC1jaGlsZCAuYnV0dG9uLXByZXZpb3VzLW1vbnRoIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW06bGFzdC1jaGlsZCAuYnV0dG9uLW5leHQtbW9udGgge1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS5uby1wcmV2aW91cy1tb250aCAuYnV0dG9uLXByZXZpb3VzLW1vbnRoIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS5uby1uZXh0LW1vbnRoIC5idXR0b24tbmV4dC1tb250aCB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG4gIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgPiBkaXYsXFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgPiBhIHtcXG4gICAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgICB3aWR0aDogdmFyKC0tbGl0ZXBpY2tlci1kYXktd2lkdGgpOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtIHtcXG4gICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1kYXktY29sb3IpO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyIDAuM3M7XFxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyIDAuM3M7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW06aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItZGF5LWNvbG9yLWhvdmVyKTtcXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLWxpdGVwaWNrZXItZGF5LWNvbG9yLWhvdmVyKTtcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLWxpdGVwaWNrZXItZGF5LWNvbG9yLWhvdmVyKTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLXRvZGF5IHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLXRvZGF5LWNvbG9yKTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLWxvY2tlZCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1sb2NrZWQtY29sb3IpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1sb2NrZWQ6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1sb2NrZWQtY29sb3IpO1xcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtaW4tcmFuZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1pbi1yYW5nZS1jb2xvcik7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtc3RhcnQtZGF0ZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1zdGFydC1jb2xvcik7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLXN0YXJ0LWNvbG9yLWJnKTtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLXN0YXJ0LWRhdGUuaXMtZmxpcHBlZCB7XFxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1lbmQtZGF0ZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1lbmQtY29sb3IpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1lbmQtY29sb3ItYmcpO1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtZW5kLWRhdGUuaXMtZmxpcHBlZCB7XFxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1zdGFydC1kYXRlLmlzLWVuZC1kYXRlIHtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtaGlnaGxpZ2h0ZWQge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaGlnaGxpZ2h0ZWQtZGF5LWNvbG9yKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaGlnaGxpZ2h0ZWQtZGF5LWNvbG9yLWJnKTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC53ZWVrLW51bWJlciB7XFxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdlZWstbnVtYmVyLWNvbG9yKTtcXG4gICAgICBmb250LXNpemU6IDg1JTsgfVxcbiAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWZvb3Rlci1jb2xvci1iZyk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDNweCAzcHggMHB4IHZhcigtLWxpdGVwaWNrZXItZm9vdGVyLWJveC1zaGFkb3ctY29sb3IpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAzcHggM3B4IDBweCB2YXIoLS1saXRlcGlja2VyLWZvb3Rlci1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2Zvb3RlciAucHJldmlldy1kYXRlLXJhbmdlIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgZm9udC1zaXplOiA5MCU7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZm9vdGVyIC5idXR0b24tY2FuY2VsIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1jYW5jZWwtY29sb3ItYmcpO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1jYW5jZWwtY29sb3IpO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBwYWRkaW5nOiAzcHggN3B4IDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1jYW5jZWwgKiB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1hcHBseSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tYXBwbHktY29sb3ItYmcpO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1hcHBseS1jb2xvcik7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIHBhZGRpbmc6IDNweCA3cHggNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1hcHBseTpkaXNhYmxlZCB7XFxuICAgICAgICBvcGFjaXR5OiAwLjc7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1hcHBseSAqIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAubGl0ZXBpY2tlciAuY29udGFpbmVyX190b29sdGlwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItdG9vbHRpcC1jb2xvci1iZyk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX190b29sdGlwOmJlZm9yZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLTVweDtcXG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDVweCk7XFxuICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX190b29sdGlwOmFmdGVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAtNHB4O1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcXG4gICAgICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tbGl0ZXBpY2tlci10b29sdGlwLWNvbG9yLWJnKTtcXG4gICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNob3dXZWVrTnVtYmVyc1wiOiBcInNob3ctd2Vlay1udW1iZXJzXCIsXG5cdFwibGl0ZXBpY2tlclwiOiBcImxpdGVwaWNrZXJcIixcblx0XCJjb250YWluZXJNYWluXCI6IFwiY29udGFpbmVyX19tYWluXCIsXG5cdFwiY29udGFpbmVyTW9udGhzXCI6IFwiY29udGFpbmVyX19tb250aHNcIixcblx0XCJjb2x1bW5zMlwiOiBcImNvbHVtbnMtMlwiLFxuXHRcImNvbHVtbnMzXCI6IFwiY29sdW1ucy0zXCIsXG5cdFwiY29sdW1uczRcIjogXCJjb2x1bW5zLTRcIixcblx0XCJzcGxpdFZpZXdcIjogXCJzcGxpdC12aWV3XCIsXG5cdFwibW9udGhJdGVtSGVhZGVyXCI6IFwibW9udGgtaXRlbS1oZWFkZXJcIixcblx0XCJidXR0b25QcmV2aW91c01vbnRoXCI6IFwiYnV0dG9uLXByZXZpb3VzLW1vbnRoXCIsXG5cdFwiYnV0dG9uTmV4dE1vbnRoXCI6IFwiYnV0dG9uLW5leHQtbW9udGhcIixcblx0XCJtb250aEl0ZW1cIjogXCJtb250aC1pdGVtXCIsXG5cdFwibW9udGhJdGVtTmFtZVwiOiBcIm1vbnRoLWl0ZW0tbmFtZVwiLFxuXHRcIm1vbnRoSXRlbVllYXJcIjogXCJtb250aC1pdGVtLXllYXJcIixcblx0XCJyZXNldEJ1dHRvblwiOiBcInJlc2V0LWJ1dHRvblwiLFxuXHRcIm1vbnRoSXRlbVdlZWtkYXlzUm93XCI6IFwibW9udGgtaXRlbS13ZWVrZGF5cy1yb3dcIixcblx0XCJub1ByZXZpb3VzTW9udGhcIjogXCJuby1wcmV2aW91cy1tb250aFwiLFxuXHRcIm5vTmV4dE1vbnRoXCI6IFwibm8tbmV4dC1tb250aFwiLFxuXHRcImNvbnRhaW5lckRheXNcIjogXCJjb250YWluZXJfX2RheXNcIixcblx0XCJkYXlJdGVtXCI6IFwiZGF5LWl0ZW1cIixcblx0XCJpc1RvZGF5XCI6IFwiaXMtdG9kYXlcIixcblx0XCJpc0xvY2tlZFwiOiBcImlzLWxvY2tlZFwiLFxuXHRcImlzSW5SYW5nZVwiOiBcImlzLWluLXJhbmdlXCIsXG5cdFwiaXNTdGFydERhdGVcIjogXCJpcy1zdGFydC1kYXRlXCIsXG5cdFwiaXNGbGlwcGVkXCI6IFwiaXMtZmxpcHBlZFwiLFxuXHRcImlzRW5kRGF0ZVwiOiBcImlzLWVuZC1kYXRlXCIsXG5cdFwiaXNIaWdobGlnaHRlZFwiOiBcImlzLWhpZ2hsaWdodGVkXCIsXG5cdFwid2Vla051bWJlclwiOiBcIndlZWstbnVtYmVyXCIsXG5cdFwiY29udGFpbmVyRm9vdGVyXCI6IFwiY29udGFpbmVyX19mb290ZXJcIixcblx0XCJwcmV2aWV3RGF0ZVJhbmdlXCI6IFwicHJldmlldy1kYXRlLXJhbmdlXCIsXG5cdFwiYnV0dG9uQ2FuY2VsXCI6IFwiYnV0dG9uLWNhbmNlbFwiLFxuXHRcImJ1dHRvbkFwcGx5XCI6IFwiYnV0dG9uLWFwcGx5XCIsXG5cdFwiY29udGFpbmVyVG9vbHRpcFwiOiBcImNvbnRhaW5lcl9fdG9vbHRpcFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uICRnZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuICRnZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSAkZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgUmVmbGVjdEFwcGx5KHRoaXMubGlzdGVuZXIsIHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCIuL2NvcmVcIik7XG52YXIgZGF0ZXRpbWVfMSA9IHJlcXVpcmUoXCIuL2RhdGV0aW1lXCIpO1xudmFyIHN0eWxlID0gcmVxdWlyZShcIi4vc2Nzcy9tYWluLnNjc3NcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIENhbGVuZGFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDYWxlbmRhciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDYWxlbmRhcihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgICAgICAvL1xuICAgIH1cbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmVtaXQoJ2JlZm9yZTpyZW5kZXInLCB0aGlzLnVpKTtcbiAgICAgICAgdmFyIG1haW5CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluQmxvY2suY2xhc3NOYW1lID0gc3R5bGUuY29udGFpbmVyTWFpbjtcbiAgICAgICAgdmFyIG1vbnRocyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb250aHMuY2xhc3NOYW1lID0gc3R5bGUuY29udGFpbmVyTW9udGhzO1xuICAgICAgICBpZiAoc3R5bGVbXCJjb2x1bW5zXCIgKyB0aGlzLm9wdGlvbnMubnVtYmVyT2ZDb2x1bW5zXSkge1xuICAgICAgICAgICAgbW9udGhzLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUuY29sdW1uczIsIHN0eWxlLmNvbHVtbnMzLCBzdHlsZS5jb2x1bW5zNCk7XG4gICAgICAgICAgICBtb250aHMuY2xhc3NMaXN0LmFkZChzdHlsZVtcImNvbHVtbnNcIiArIHRoaXMub3B0aW9ucy5udW1iZXJPZkNvbHVtbnNdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xuICAgICAgICAgICAgbW9udGhzLmNsYXNzTGlzdC5hZGQoc3R5bGUuc3BsaXRWaWV3KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dXZWVrTnVtYmVycykge1xuICAgICAgICAgICAgbW9udGhzLmNsYXNzTGlzdC5hZGQoc3R5bGUuc2hvd1dlZWtOdW1iZXJzKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhcnREYXRlID0gdGhpcy5jYWxlbmRhcnNbMF0uY2xvbmUoKTtcbiAgICAgICAgdmFyIHN0YXJ0TW9udGhJZHggPSBzdGFydERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgdmFyIHRvdGFsTW9udGhzID0gc3RhcnREYXRlLmdldE1vbnRoKCkgKyB0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHM7XG4gICAgICAgIHZhciBjYWxlbmRhcklkeCA9IDA7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWZvci1vZlxuICAgICAgICBmb3IgKHZhciBpZHggPSBzdGFydE1vbnRoSWR4OyBpZHggPCB0b3RhbE1vbnRoczsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBkYXRlSXRlcmF0b3IgPSBzdGFydERhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgIGRhdGVJdGVyYXRvci5zZXREYXRlKDEpO1xuICAgICAgICAgICAgZGF0ZUl0ZXJhdG9yLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zcGxpdFZpZXcpIHtcbiAgICAgICAgICAgICAgICBkYXRlSXRlcmF0b3IgPSB0aGlzLmNhbGVuZGFyc1tjYWxlbmRhcklkeF0uY2xvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGVJdGVyYXRvci5zZXRNb250aChpZHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9udGhzLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyTW9udGgoZGF0ZUl0ZXJhdG9yLCBjYWxlbmRhcklkeCkpO1xuICAgICAgICAgICAgY2FsZW5kYXJJZHggKz0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBtYWluQmxvY2suYXBwZW5kQ2hpbGQobW9udGhzKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXNldEJ1dHRvbikge1xuICAgICAgICAgICAgdmFyIHJlc2V0QnV0dG9uID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucmVzZXRCdXR0b24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbiA9IHRoaXMub3B0aW9ucy5yZXNldEJ1dHRvbi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b24uY2xhc3NOYW1lID0gc3R5bGUucmVzZXRCdXR0b247XG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmJ1dHRvblRleHQucmVzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc3RyaW5nLWxpdGVyYWxcbiAgICAgICAgICAgICAgICBfdGhpc1snY2xlYXJTZWxlY3Rpb24nXSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtYWluQmxvY2tcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLm1vbnRoSXRlbSArIFwiOmxhc3QtY2hpbGRcIilcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLm1vbnRoSXRlbUhlYWRlcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWkuYXBwZW5kQ2hpbGQobWFpbkJsb2NrKTtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYXV0b0FwcGx5IHx8IHRoaXMub3B0aW9ucy5mb290ZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLnVpLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyRm9vdGVyKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1Rvb2x0aXApIHtcbiAgICAgICAgICAgIHRoaXMudWkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJUb29sdGlwKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWkuZGF0YXNldC5wbHVnaW5zID0gKHRoaXMub3B0aW9ucy5wbHVnaW5zIHx8IFtdKS5qb2luKCd8Jyk7XG4gICAgICAgIHRoaXMuZW1pdCgncmVuZGVyJywgdGhpcy51aSk7XG4gICAgfTtcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyTW9udGggPSBmdW5jdGlvbiAoZGF0ZSwgY2FsZW5kYXJJZHgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IGRhdGUuY2xvbmUoKTtcbiAgICAgICAgdmFyIHRvdGFsRGF5cyA9IDMyIC0gbmV3IERhdGUoc3RhcnREYXRlLmdldEZ1bGxZZWFyKCksIHN0YXJ0RGF0ZS5nZXRNb250aCgpLCAzMikuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9udGguY2xhc3NOYW1lID0gc3R5bGUubW9udGhJdGVtO1xuICAgICAgICB2YXIgbW9udGhIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9udGhIZWFkZXIuY2xhc3NOYW1lID0gc3R5bGUubW9udGhJdGVtSGVhZGVyO1xuICAgICAgICB2YXIgbW9udGhBbmRZZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJvcGRvd25zLm1vbnRocykge1xuICAgICAgICAgICAgdmFyIHNlbGVjdE1vbnRocyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgc2VsZWN0TW9udGhzLmNsYXNzTmFtZSA9IHN0eWxlLm1vbnRoSXRlbU5hbWU7XG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IDEyOyB4ICs9IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgLy8gZGF5IDIgYmVjYXVzZSBpT1MgYnVnIHdpdGggYHRvTG9jYWxlU3RyaW5nYFxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93YWtpcmluL0xpdGVwaWNrZXIvaXNzdWVzLzExM1xuICAgICAgICAgICAgICAgIHZhciBtb250aE5hbWUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIHgsIDIsIDAsIDAsIDApKTtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uTW9udGggPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIHgsIDEsIDAsIDAsIDApKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBTdHJpbmcoeCk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBtb250aE5hbWUudG9Mb2NhbGVTdHJpbmcodGhpcy5vcHRpb25zLmxhbmcsIHsgbW9udGg6ICdsb25nJyB9KTtcbiAgICAgICAgICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSAodGhpcy5vcHRpb25zLm1pbkRhdGVcbiAgICAgICAgICAgICAgICAgICAgJiYgb3B0aW9uTW9udGguaXNCZWZvcmUobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1pbkRhdGUpLCAnbW9udGgnKSlcbiAgICAgICAgICAgICAgICAgICAgfHwgKHRoaXMub3B0aW9ucy5tYXhEYXRlICYmIG9wdGlvbk1vbnRoLmlzQWZ0ZXIobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1heERhdGUpLCAnbW9udGgnKSk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uTW9udGguZ2V0TW9udGgoKSA9PT0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICAgICAgICAgIHNlbGVjdE1vbnRocy5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0TW9udGhzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBpZHggPSAwO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGhJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5tb250aEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBpZHggPSB1dGlsc18xLmZpbmROZXN0ZWRNb250aEl0ZW0obW9udGhJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMuY2FsZW5kYXJzW2lkeF0uc2V0TW9udGgoTnVtYmVyKHRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2NoYW5nZTptb250aCcsIF90aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtb250aEFuZFllYXIuYXBwZW5kQ2hpbGQoc2VsZWN0TW9udGhzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtb250aE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcbiAgICAgICAgICAgIG1vbnRoTmFtZS5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1OYW1lO1xuICAgICAgICAgICAgbW9udGhOYW1lLmRhdGFzZXQubW9udGggPSBkYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG1vbnRoTmFtZS5kYXRhc2V0LnllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG1vbnRoTmFtZS5pbm5lckhUTUwgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKHRoaXMub3B0aW9ucy5sYW5nLCB7IG1vbnRoOiAnbG9uZycgfSk7XG4gICAgICAgICAgICBtb250aEFuZFllYXIuYXBwZW5kQ2hpbGQobW9udGhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRyb3Bkb3ducy55ZWFycykge1xuICAgICAgICAgICAgdmFyIHNlbGVjdFllYXJzXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHNlbGVjdFllYXJzXzEuY2xhc3NOYW1lID0gc3R5bGUubW9udGhJdGVtWWVhcjtcbiAgICAgICAgICAgIHZhciBtaW5ZZWFyID0gdGhpcy5vcHRpb25zLmRyb3Bkb3ducy5taW5ZZWFyO1xuICAgICAgICAgICAgdmFyIG1heFllYXIgPSB0aGlzLm9wdGlvbnMuZHJvcGRvd25zLm1heFllYXJcbiAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5kcm9wZG93bnMubWF4WWVhclxuICAgICAgICAgICAgICAgIDogKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpID4gbWF4WWVhcikge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxlY3RZZWFyc18xLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gbWF4WWVhcjsgeCA+PSBtaW5ZZWFyOyB4IC09IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvblllYXIgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShuZXcgRGF0ZSh4LCAwLCAxLCAwLCAwLCAwKSk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gU3RyaW5nKHgpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gU3RyaW5nKHgpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9ICh0aGlzLm9wdGlvbnMubWluRGF0ZVxuICAgICAgICAgICAgICAgICAgICAmJiBvcHRpb25ZZWFyLmlzQmVmb3JlKG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5taW5EYXRlKSwgJ3llYXInKSlcbiAgICAgICAgICAgICAgICAgICAgfHwgKHRoaXMub3B0aW9ucy5tYXhEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBvcHRpb25ZZWFyLmlzQWZ0ZXIobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1heERhdGUpLCAneWVhcicpKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBkYXRlLmdldEZ1bGxZZWFyKCkgPT09IHg7XG4gICAgICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSA8IG1pblllYXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcm9wZG93bnMueWVhcnMgPT09ICdhc2MnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHNlbGVjdFllYXJzXzEuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBjaGlsZHMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIHNlbGVjdFllYXJzXzEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICAgICAgICAgIHkuaW5uZXJIVE1MID0geS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5hcHBlbmRDaGlsZCh5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGVjdFllYXJzXzEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc3BsaXRWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb250aEl0ZW0gPSB0YXJnZXQuY2xvc2VzdChcIi5cIiArIHN0eWxlLm1vbnRoSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IHV0aWxzXzEuZmluZE5lc3RlZE1vbnRoSXRlbShtb250aEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5jYWxlbmRhcnNbaWR4XS5zZXRGdWxsWWVhcihOdW1iZXIodGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnY2hhbmdlOnllYXInLCBfdGhpcy5jYWxlbmRhcnNbaWR4XSwgaWR4LCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbW9udGhBbmRZZWFyLmFwcGVuZENoaWxkKHNlbGVjdFllYXJzXzEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1vbnRoWWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIG1vbnRoWWVhci5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1ZZWFyO1xuICAgICAgICAgICAgbW9udGhZZWFyLmlubmVySFRNTCA9IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgbW9udGhBbmRZZWFyLmFwcGVuZENoaWxkKG1vbnRoWWVhcik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXZpb3VzTW9udGhCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJldmlvdXNNb250aEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIHByZXZpb3VzTW9udGhCdXR0b24uY2xhc3NOYW1lID0gc3R5bGUuYnV0dG9uUHJldmlvdXNNb250aDtcbiAgICAgICAgcHJldmlvdXNNb250aEJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dC5wcmV2aW91c01vbnRoO1xuICAgICAgICB2YXIgbmV4dE1vbnRoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5leHRNb250aEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIG5leHRNb250aEJ1dHRvbi5jbGFzc05hbWUgPSBzdHlsZS5idXR0b25OZXh0TW9udGg7XG4gICAgICAgIG5leHRNb250aEJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dC5uZXh0TW9udGg7XG4gICAgICAgIG1vbnRoSGVhZGVyLmFwcGVuZENoaWxkKHByZXZpb3VzTW9udGhCdXR0b24pO1xuICAgICAgICBtb250aEhlYWRlci5hcHBlbmRDaGlsZChtb250aEFuZFllYXIpO1xuICAgICAgICBtb250aEhlYWRlci5hcHBlbmRDaGlsZChuZXh0TW9udGhCdXR0b24pO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1pbkRhdGVcbiAgICAgICAgICAgICYmIHN0YXJ0RGF0ZS5pc1NhbWVPckJlZm9yZShuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWluRGF0ZSksICdtb250aCcpKSB7XG4gICAgICAgICAgICBtb250aC5jbGFzc0xpc3QuYWRkKHN0eWxlLm5vUHJldmlvdXNNb250aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXhEYXRlXG4gICAgICAgICAgICAmJiBzdGFydERhdGUuaXNTYW1lT3JBZnRlcihuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWF4RGF0ZSksICdtb250aCcpKSB7XG4gICAgICAgICAgICBtb250aC5jbGFzc0xpc3QuYWRkKHN0eWxlLm5vTmV4dE1vbnRoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2Vla2RheXNSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd2Vla2RheXNSb3cuY2xhc3NOYW1lID0gc3R5bGUubW9udGhJdGVtV2Vla2RheXNSb3c7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzKSB7XG4gICAgICAgICAgICB3ZWVrZGF5c1Jvdy5pbm5lckhUTUwgPSAnPGRpdj5XPC9kaXY+JztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8PSA3OyB3ICs9IDEpIHtcbiAgICAgICAgICAgIC8vIDcgZGF5cywgNCBpcyDCq1RodXJzZGF5wrsgKG5ldyBEYXRlKDE5NzAsIDAsIDEsIDEyLCAwLCAwLCAwKSlcbiAgICAgICAgICAgIHZhciBkYXlJZHggPSA3IC0gNCArIHRoaXMub3B0aW9ucy5maXJzdERheSArIHc7XG4gICAgICAgICAgICB2YXIgd2Vla2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd2Vla2RheS5pbm5lckhUTUwgPSB0aGlzLndlZWtkYXlOYW1lKGRheUlkeCk7XG4gICAgICAgICAgICB3ZWVrZGF5LnRpdGxlID0gdGhpcy53ZWVrZGF5TmFtZShkYXlJZHgsICdsb25nJyk7XG4gICAgICAgICAgICB3ZWVrZGF5LmNsYXNzTGlzdC5hZGQoJ3dlZWstaWR4LScgKyAoKHcgLSAxICsgdGhpcy5vcHRpb25zLmZpcnN0RGF5KSAlIDcpKTtcbiAgICAgICAgICAgIHdlZWtkYXlzUm93LmFwcGVuZENoaWxkKHdlZWtkYXkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb250YWluZXJEYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lckRheXMuY2xhc3NOYW1lID0gc3R5bGUuY29udGFpbmVyRGF5cztcbiAgICAgICAgdmFyIHdlZWtEYXlzSWR4ID0gMDtcbiAgICAgICAgdmFyIHdlZWtEYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlZWtEYXlzLmNsYXNzTmFtZSA9IFwicm93XCI7XG4gICAgICAgIHZhciBza2lwRGF5cyA9IHRoaXMuY2FsY1NraXBEYXlzKHN0YXJ0RGF0ZSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzICYmIHNraXBEYXlzKSB7XG4gICAgICAgICAgICB3ZWVrRGF5cy5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcldlZWtOdW1iZXIoc3RhcnREYXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgc2tpcERheXM7IGlkeCArPSAxKSB7XG4gICAgICAgICAgICB2YXIgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHdlZWtEYXlzLmFwcGVuZENoaWxkKGR1bW15KTtcbiAgICAgICAgICAgIHdlZWtEYXlzSWR4Kys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXG4gICAgICAgIGZvciAodmFyIGlkeCA9IDE7IGlkeCA8PSB0b3RhbERheXM7IGlkeCArPSAxKSB7XG4gICAgICAgICAgICBzdGFydERhdGUuc2V0RGF0ZShpZHgpO1xuICAgICAgICAgICAgaWYgKHdlZWtEYXlzSWR4ID09PSA3KSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyRGF5cy5hcHBlbmRDaGlsZCh3ZWVrRGF5cyk7XG4gICAgICAgICAgICAgICAgd2Vla0RheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB3ZWVrRGF5cy5jbGFzc05hbWUgPSBcInJvd1wiO1xuICAgICAgICAgICAgICAgIHdlZWtEYXlzSWR4ID0gd2Vla0RheXNJZHggJSA3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93V2Vla051bWJlcnMgJiYgc3RhcnREYXRlLmdldERheSgpID09PSB0aGlzLm9wdGlvbnMuZmlyc3REYXkpIHtcbiAgICAgICAgICAgICAgICB3ZWVrRGF5cy5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcldlZWtOdW1iZXIoc3RhcnREYXRlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ZWVrRGF5cy5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckRheShzdGFydERhdGUpKTtcbiAgICAgICAgICAgIHdlZWtEYXlzSWR4Kys7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaWR4ID0gd2Vla0RheXNJZHg7IGlkeCA8IDc7IGlkeCArPSAxKSB7XG4gICAgICAgICAgICB2YXIgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHdlZWtEYXlzLmFwcGVuZENoaWxkKGR1bW15KTtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXJEYXlzLmFwcGVuZENoaWxkKHdlZWtEYXlzKTtcbiAgICAgICAgbW9udGguYXBwZW5kQ2hpbGQobW9udGhIZWFkZXIpO1xuICAgICAgICBtb250aC5hcHBlbmRDaGlsZCh3ZWVrZGF5c1Jvdyk7XG4gICAgICAgIG1vbnRoLmFwcGVuZENoaWxkKGNvbnRhaW5lckRheXMpO1xuICAgICAgICB0aGlzLmVtaXQoJ3JlbmRlcjptb250aCcsIG1vbnRoLCBkYXRlKTtcbiAgICAgICAgcmV0dXJuIG1vbnRoO1xuICAgIH07XG4gICAgQ2FsZW5kYXIucHJvdG90eXBlLnJlbmRlckRheSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIGRhdGUuc2V0SG91cnMoKTtcbiAgICAgICAgdmFyIGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXkuY2xhc3NOYW1lID0gc3R5bGUuZGF5SXRlbTtcbiAgICAgICAgZGF5LmlubmVySFRNTCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSk7XG4gICAgICAgIGRheS5kYXRhc2V0LnRpbWUgPSBTdHJpbmcoZGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICBpZiAoZGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gKG5ldyBEYXRlKCkpLnRvRGF0ZVN0cmluZygpKSB7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc1RvZGF5KTtcbiAgICAgICAgfVxuICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZCgnd2Vlay0nICsgZGF0ZS5nZXREYXkoKSk7XG4gICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkWzBdLnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNTdGFydERhdGUpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0VuZERhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkWzFdLnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNFbmREYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuaXNCZXR3ZWVuKHRoaXMuZGF0ZVBpY2tlZFswXSwgdGhpcy5kYXRlUGlja2VkWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0luUmFuZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc3RhcnREYXRlKSB7XG4gICAgICAgICAgICB2YXIgc3RhcnREYXRlID0gdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZTtcbiAgICAgICAgICAgIHZhciBlbmREYXRlID0gdGhpcy5vcHRpb25zLmVuZERhdGU7XG4gICAgICAgICAgICBpZiAoc3RhcnREYXRlLnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNTdGFydERhdGUpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0VuZERhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbmREYXRlICYmIGVuZERhdGUudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0VuZERhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuaXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNJblJhbmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5taW5EYXRlICYmIGRhdGUuaXNCZWZvcmUobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1pbkRhdGUpKSkge1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWF4RGF0ZSAmJiBkYXRlLmlzQWZ0ZXIobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1heERhdGUpKSkge1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWluRGF5cyA+IDFcbiAgICAgICAgICAgICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHZhciBtaW5EYXlzID0gdGhpcy5vcHRpb25zLm1pbkRheXMgLSAxOyAvLyBzdWJ0cmFjdCBzZWxlY3RlZCBkYXlcbiAgICAgICAgICAgIHZhciBsZWZ0ID0gdGhpcy5kYXRlUGlja2VkWzBdLmNsb25lKCkuc3VidHJhY3QobWluRGF5cywgJ2RheScpO1xuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gdGhpcy5kYXRlUGlja2VkWzBdLmNsb25lKCkuYWRkKG1pbkRheXMsICdkYXknKTtcbiAgICAgICAgICAgIGlmIChkYXRlLmlzQmV0d2VlbihsZWZ0LCB0aGlzLmRhdGVQaWNrZWRbMF0sICcoXScpKSB7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGUuaXNCZXR3ZWVuKHRoaXMuZGF0ZVBpY2tlZFswXSwgcmlnaHQsICdbKScpKSB7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWF4RGF5c1xuICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdmFyIG1heERheXMgPSB0aGlzLm9wdGlvbnMubWF4RGF5cztcbiAgICAgICAgICAgIHZhciBsZWZ0ID0gdGhpcy5kYXRlUGlja2VkWzBdLmNsb25lKCkuc3VidHJhY3QobWF4RGF5cywgJ2RheScpO1xuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gdGhpcy5kYXRlUGlja2VkWzBdLmNsb25lKCkuYWRkKG1heERheXMsICdkYXknKTtcbiAgICAgICAgICAgIGlmIChkYXRlLmlzU2FtZU9yQmVmb3JlKGxlZnQpKSB7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGUuaXNTYW1lT3JBZnRlcihyaWdodCkpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RGb3J3YXJkXG4gICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAmJiBkYXRlLmlzQmVmb3JlKHRoaXMuZGF0ZVBpY2tlZFswXSkpIHtcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdEJhY2t3YXJkXG4gICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAmJiBkYXRlLmlzQWZ0ZXIodGhpcy5kYXRlUGlja2VkWzBdKSkge1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsb2NrZWQgPSB1dGlsc18xLmRhdGVJc0xvY2tlZChkYXRlLCB0aGlzLm9wdGlvbnMsIHRoaXMuZGF0ZVBpY2tlZCk7XG4gICAgICAgIGlmIChsb2NrZWQpIHtcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBpc0hpZ2hsaWdodGVkID0gdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmlzQmV0d2VlbihkWzBdLCBkWzFdLCAnW10nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQuaXNTYW1lKGRhdGUsICdkYXknKTtcbiAgICAgICAgICAgIH0pLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChpc0hpZ2hsaWdodGVkKSB7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNIaWdobGlnaHRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZml4IGJ1ZyBpT1MgMTAtMTIgLSBodHRwczovL2dpdGh1Yi5jb20vd2FraXJpbi9MaXRlcGlja2VyL2lzc3Vlcy8xMjRcbiAgICAgICAgZGF5LnRhYkluZGV4ID0gIWRheS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWxvY2tlZCcpID8gMCA6IC0xO1xuICAgICAgICB0aGlzLmVtaXQoJ3JlbmRlcjpkYXknLCBkYXksIGRhdGUpO1xuICAgICAgICByZXR1cm4gZGF5O1xuICAgIH07XG4gICAgQ2FsZW5kYXIucHJvdG90eXBlLnJlbmRlckZvb3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb290ZXIuY2xhc3NOYW1lID0gc3R5bGUuY29udGFpbmVyRm9vdGVyO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZvb3RlckhUTUwpIHtcbiAgICAgICAgICAgIGZvb3Rlci5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuZm9vdGVySFRNTDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvb3Rlci5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJcIiArIHN0eWxlLnByZXZpZXdEYXRlUmFuZ2UgKyBcIlxcXCI+PC9zcGFuPlxcbiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIgKyBzdHlsZS5idXR0b25DYW5jZWwgKyBcIlxcXCI+XCIgKyB0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dC5jYW5jZWwgKyBcIjwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIgKyBzdHlsZS5idXR0b25BcHBseSArIFwiXFxcIj5cIiArIHRoaXMub3B0aW9ucy5idXR0b25UZXh0LmFwcGx5ICsgXCI8L2J1dHRvbj5cXG4gICAgICBcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0VmFsdWUgPSB0aGlzLmRhdGVQaWNrZWRbMF0uZm9ybWF0KHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgICAgICAgICBmb290ZXIucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLnByZXZpZXdEYXRlUmFuZ2UpLmlubmVySFRNTCA9IHN0YXJ0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGZvb3Rlci5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUuYnV0dG9uQXBwbHkpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHZhciBzdGFydFZhbHVlID0gdGhpcy5kYXRlUGlja2VkWzBdLmZvcm1hdCh0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgICAgICAgICAgdmFyIGVuZFZhbHVlID0gdGhpcy5kYXRlUGlja2VkWzFdLmZvcm1hdCh0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgICAgICAgICAgZm9vdGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5wcmV2aWV3RGF0ZVJhbmdlKVxuICAgICAgICAgICAgICAgICAgICAuaW5uZXJIVE1MID0gXCJcIiArIHN0YXJ0VmFsdWUgKyB0aGlzLm9wdGlvbnMuZGVsaW1pdGVyICsgZW5kVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCdyZW5kZXI6Zm9vdGVyJywgZm9vdGVyKTtcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICB9O1xuICAgIENhbGVuZGFyLnByb3RvdHlwZS5yZW5kZXJXZWVrTnVtYmVyID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgdmFyIHduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciB3ZWVrID0gZGF0ZS5nZXRXZWVrKHRoaXMub3B0aW9ucy5maXJzdERheSk7XG4gICAgICAgIHduLmNsYXNzTmFtZSA9IHN0eWxlLndlZWtOdW1iZXI7XG4gICAgICAgIHduLmlubmVySFRNTCA9IHdlZWsgPT09IDUzICYmIGRhdGUuZ2V0TW9udGgoKSA9PT0gMCA/ICc1MyAvIDEnIDogd2VlaztcbiAgICAgICAgcmV0dXJuIHduO1xuICAgIH07XG4gICAgQ2FsZW5kYXIucHJvdG90eXBlLnJlbmRlclRvb2x0aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHQuY2xhc3NOYW1lID0gc3R5bGUuY29udGFpbmVyVG9vbHRpcDtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBDYWxlbmRhci5wcm90b3R5cGUud2Vla2RheU5hbWUgPSBmdW5jdGlvbiAoZGF5LCByZXByZXNlbnRhdGlvbikge1xuICAgICAgICBpZiAocmVwcmVzZW50YXRpb24gPT09IHZvaWQgMCkgeyByZXByZXNlbnRhdGlvbiA9ICdzaG9ydCc7IH1cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKDE5NzAsIDAsIGRheSwgMTIsIDAsIDAsIDApXG4gICAgICAgICAgICAudG9Mb2NhbGVTdHJpbmcodGhpcy5vcHRpb25zLmxhbmcsIHsgd2Vla2RheTogcmVwcmVzZW50YXRpb24gfSk7XG4gICAgfTtcbiAgICBDYWxlbmRhci5wcm90b3R5cGUuY2FsY1NraXBEYXlzID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gZGF0ZS5nZXREYXkoKSAtIHRoaXMub3B0aW9ucy5maXJzdERheTtcbiAgICAgICAgaWYgKHRvdGFsIDwgMClcbiAgICAgICAgICAgIHRvdGFsICs9IDc7XG4gICAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9O1xuICAgIHJldHVybiBDYWxlbmRhcjtcbn0oY29yZV8xLkxQQ29yZSkpO1xuZXhwb3J0cy5DYWxlbmRhciA9IENhbGVuZGFyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xudmFyIGRhdGV0aW1lXzEgPSByZXF1aXJlKFwiLi9kYXRldGltZVwiKTtcbnZhciBsaXRlcGlja2VyXzEgPSByZXF1aXJlKFwiLi9saXRlcGlja2VyXCIpO1xudmFyIExQQ29yZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTFBDb3JlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExQQ29yZShvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRhdGVQaWNrZWQgPSBbXTtcbiAgICAgICAgX3RoaXMuY2FsZW5kYXJzID0gW107XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBlbGVtZW50OiBudWxsLFxuICAgICAgICAgICAgZWxlbWVudEVuZDogbnVsbCxcbiAgICAgICAgICAgIHBhcmVudEVsOiBudWxsLFxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgICAgIGZpcnN0RGF5OiAxLFxuICAgICAgICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgICAgICAgICBsYW5nOiAnZW4tVVMnLFxuICAgICAgICAgICAgZGVsaW1pdGVyOiAnIC0gJyxcbiAgICAgICAgICAgIG51bWJlck9mTW9udGhzOiAxLFxuICAgICAgICAgICAgbnVtYmVyT2ZDb2x1bW5zOiAxLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBudWxsLFxuICAgICAgICAgICAgZW5kRGF0ZTogbnVsbCxcbiAgICAgICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYXV0bycsXG4gICAgICAgICAgICBzZWxlY3RGb3J3YXJkOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdEJhY2t3YXJkOiBmYWxzZSxcbiAgICAgICAgICAgIHNwbGl0VmlldzogZmFsc2UsXG4gICAgICAgICAgICBpbmxpbmVNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIHNpbmdsZU1vZGU6IHRydWUsXG4gICAgICAgICAgICBhdXRvQXBwbHk6IHRydWUsXG4gICAgICAgICAgICBhbGxvd1JlcGljazogZmFsc2UsXG4gICAgICAgICAgICBzaG93V2Vla051bWJlcnM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1Rvb2x0aXA6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGxUb0RhdGU6IHRydWUsXG4gICAgICAgICAgICBtb2JpbGVGcmllbmRseTogdHJ1ZSxcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uOiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9SZWZyZXNoOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2tEYXlzRm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgICAgICAgICBsb2NrRGF5czogW10sXG4gICAgICAgICAgICBkaXNhbGxvd0xvY2tEYXlzSW5SYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBsb2NrRGF5c0luY2x1c2l2aXR5OiAnW10nLFxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWREYXlzRm9ybWF0OiAnWVlZWS1NTS1ERCcsXG4gICAgICAgICAgICBoaWdobGlnaHRlZERheXM6IFtdLFxuICAgICAgICAgICAgZHJvcGRvd25zOiB7XG4gICAgICAgICAgICAgICAgbWluWWVhcjogMTk5MCxcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICAgICAgICAgIG1heFllYXI6IG51bGwsXG4gICAgICAgICAgICAgICAgbW9udGhzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB5ZWFyczogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uVGV4dDoge1xuICAgICAgICAgICAgICAgIGFwcGx5OiAnQXBwbHknLFxuICAgICAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgcHJldmlvdXNNb250aDogJzxzdmcgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjE2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNy45MTkgMGwyLjc0OCAyLjY2N0w1LjMzMyA4bDUuMzM0IDUuMzMzTDcuOTE5IDE2IDAgOHpcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPjwvc3ZnPicsXG4gICAgICAgICAgICAgICAgbmV4dE1vbnRoOiAnPHN2ZyB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0yLjc0OCAxNkwwIDEzLjMzMyA1LjMzMyA4IDAgMi42NjcgMi43NDggMGw3LjkxOSA4elwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+PC9zdmc+JyxcbiAgICAgICAgICAgICAgICByZXNldDogXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB3aWR0aD1cXFwiMjRcXFwiPlxcbiAgICAgICAgPHBhdGggZD1cXFwiTTAgMGgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCIvPlxcbiAgICAgICAgPHBhdGggZD1cXFwiTTEzIDNjLTQuOTcgMC05IDQuMDMtOSA5SDFsMy44OSAzLjg5LjA3LjE0TDkgMTJINmMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3LTMuMTMgNy03IDdjLTEuOTMgMC0zLjY4LS43OS00Ljk0LTIuMDZsLTEuNDIgMS40MkM4LjI3IDE5Ljk5IDEwLjUxIDIxIDEzIDIxYzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0tMSA1djVsNC4yOCAyLjU0LjcyLTEuMjEtMy41LTIuMDhWOEgxMnpcXFwiLz5cXG4gICAgICA8L3N2Zz5cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwVGV4dDoge1xuICAgICAgICAgICAgICAgIG9uZTogJ2RheScsXG4gICAgICAgICAgICAgICAgb3RoZXI6ICdkYXlzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMub3B0aW9ucyksIG9wdGlvbnMuZWxlbWVudC5kYXRhc2V0KTtcbiAgICAgICAgT2JqZWN0LmtleXMoX3RoaXMub3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9uc1tvcHRdID09PSAndHJ1ZScgfHwgX3RoaXMub3B0aW9uc1tvcHRdID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW9uc1tvcHRdID0gX3RoaXMub3B0aW9uc1tvcHRdID09PSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZHJvcGRvd25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLm9wdGlvbnMuZHJvcGRvd25zKSwgb3B0aW9ucy5kcm9wZG93bnMpO1xuICAgICAgICB2YXIgYnV0dG9uVGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5vcHRpb25zLmJ1dHRvblRleHQpLCBvcHRpb25zLmJ1dHRvblRleHQpO1xuICAgICAgICB2YXIgdG9vbHRpcFRleHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMub3B0aW9ucy50b29sdGlwVGV4dCksIG9wdGlvbnMudG9vbHRpcFRleHQpO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLm9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICAgICAgX3RoaXMub3B0aW9ucy5kcm9wZG93bnMgPSBfX2Fzc2lnbih7fSwgZHJvcGRvd25zKTtcbiAgICAgICAgX3RoaXMub3B0aW9ucy5idXR0b25UZXh0ID0gX19hc3NpZ24oe30sIGJ1dHRvblRleHQpO1xuICAgICAgICBfdGhpcy5vcHRpb25zLnRvb2x0aXBUZXh0ID0gX19hc3NpZ24oe30sIHRvb2x0aXBUZXh0KTtcbiAgICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpIHtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuYWxsb3dSZXBpY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5sb2NrRGF5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMubG9ja0RheXMgPSBkYXRldGltZV8xLkRhdGVUaW1lLmNvbnZlcnRBcnJheShfdGhpcy5vcHRpb25zLmxvY2tEYXlzLCBfdGhpcy5vcHRpb25zLmxvY2tEYXlzRm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cyA9IGRhdGV0aW1lXzEuRGF0ZVRpbWUuY29udmVydEFycmF5KF90aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzLCBfdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5c0Zvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gX3RoaXMucGFyc2VJbnB1dCgpLCBzdGFydFZhbHVlID0gX2FbMF0sIGVuZFZhbHVlID0gX2FbMV07XG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSB8fCBfdGhpcy5vcHRpb25zLmVuZERhdGUpIHtcbiAgICAgICAgICAgICAgICBzdGFydFZhbHVlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoX3RoaXMub3B0aW9ucy5zdGFydERhdGUsIF90aGlzLm9wdGlvbnMuZm9ybWF0LCBfdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydFZhbHVlICYmIF90aGlzLm9wdGlvbnMuZW5kRGF0ZSkge1xuICAgICAgICAgICAgZW5kVmFsdWUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShfdGhpcy5vcHRpb25zLmVuZERhdGUsIF90aGlzLm9wdGlvbnMuZm9ybWF0LCBfdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydFZhbHVlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSAmJiAhaXNOYU4oc3RhcnRWYWx1ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IHN0YXJ0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc3RhcnREYXRlICYmIGVuZFZhbHVlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSAmJiAhaXNOYU4oZW5kVmFsdWUuZ2V0VGltZSgpKSkge1xuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5lbmREYXRlID0gZW5kVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiAhKF90aGlzLm9wdGlvbnMuc3RhcnREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSkpIHtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMuc2luZ2xlTW9kZVxuICAgICAgICAgICAgJiYgKCEoX3RoaXMub3B0aW9ucy5zdGFydERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lKVxuICAgICAgICAgICAgICAgIHx8ICEoX3RoaXMub3B0aW9ucy5lbmREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSkpKSB7XG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG51bGw7XG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLmVuZERhdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IF90aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHM7IGlkeCArPSAxKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IF90aGlzLm9wdGlvbnMuc3RhcnREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZVxuICAgICAgICAgICAgICAgID8gX3RoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKVxuICAgICAgICAgICAgICAgIDogbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoKTtcbiAgICAgICAgICAgIGlmICghX3RoaXMub3B0aW9ucy5zdGFydERhdGUgJiYgKGlkeCA9PT0gMCB8fCBfdGhpcy5vcHRpb25zLnNwbGl0VmlldykpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4RGF0ZSA9IF90aGlzLm9wdGlvbnMubWF4RGF0ZSA/IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKF90aGlzLm9wdGlvbnMubWF4RGF0ZSkgOiBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBtaW5EYXRlID0gX3RoaXMub3B0aW9ucy5taW5EYXRlID8gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoX3RoaXMub3B0aW9ucy5taW5EYXRlKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldE1vbnRocyA9IF90aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHMgLSAxO1xuICAgICAgICAgICAgICAgIHZhciBpc0RhdGVSYW5nZSA9IG1pbkRhdGUgJiYgbWF4RGF0ZSAmJiBkYXRlLmlzQWZ0ZXIobWF4RGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRGF0ZVJhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSBtaW5EYXRlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIW1pbkRhdGUgJiYgbWF4RGF0ZSAmJiBkYXRlLmlzQWZ0ZXIobWF4RGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG1heERhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSAtIG9mZnNldE1vbnRocyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBpZHgpO1xuICAgICAgICAgICAgX3RoaXMuY2FsZW5kYXJzW2lkeF0gPSBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnNob3dUb29sdGlwKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy50b29sdGlwUGx1cmFsU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wbHVyYWxTZWxlY3RvciA9IF90aGlzLm9wdGlvbnMudG9vbHRpcFBsdXJhbFNlbGVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsdXJhbFJ1bGVzID0gbmV3IEludGwuUGx1cmFsUnVsZXMoX3RoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGx1cmFsU2VsZWN0b3IgPSBwbHVyYWxSdWxlcy5zZWxlY3QuYmluZChwbHVyYWxSdWxlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYikge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbHVyYWxTZWxlY3RvciA9IGZ1bmN0aW9uIChhcmcwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXJnMCkgPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdvbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdvdGhlcic7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTFBDb3JlLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XG4gICAgICAgIGxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZVtuYW1lXSA9IGRhdGE7XG4gICAgfTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZ1bmN0aW9uLW5hbWVcbiAgICBMUENvcmUucHJvdG90eXBlLkRhdGVUaW1lID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCkge1xuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUsIGZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKCk7XG4gICAgfTtcbiAgICBMUENvcmUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGx1Z2lucyAmJiB0aGlzLm9wdGlvbnMucGx1Z2lucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgICAgICAgIGlmIChsaXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkocGx1Z2luKSkge1xuICAgICAgICAgICAgICAgICAgICBsaXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGVbcGx1Z2luXS5pbml0LmNhbGwoX3RoaXMsIF90aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkxpdGVwaWNrZXI6IHBsdWdpbiBcXHUwMEFCXCIgKyBwbHVnaW4gKyBcIlxcdTAwQkIgbm90IGZvdW5kLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTFBDb3JlLnByb3RvdHlwZS5wYXJzZUlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVsaW1pdGVyID0gdGhpcy5vcHRpb25zLmRlbGltaXRlcjtcbiAgICAgICAgdmFyIGRlbGltaXRlclJlZ2V4ID0gbmV3IFJlZ0V4cChcIlwiICsgZGVsaW1pdGVyKTtcbiAgICAgICAgdmFyIHNwbGl0dGVkVmFsdWUgPSB0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUuc3BsaXQoZGVsaW1pdGVyKVxuICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUubGVuZ3RoXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUsIHRoaXMub3B0aW9ucy5mb3JtYXQpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZC52YWx1ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICYmIHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlLCB0aGlzLm9wdGlvbnMuZm9ybWF0KSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgJiYgZGVsaW1pdGVyUmVnZXgudGVzdCh0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZSlcbiAgICAgICAgICAgICYmIHNwbGl0dGVkVmFsdWUubGVuZ3RoXG4gICAgICAgICAgICAmJiBzcGxpdHRlZFZhbHVlLmxlbmd0aCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgIHZhciBkMSA9IHNwbGl0dGVkVmFsdWUuc2xpY2UoMCwgc3BsaXR0ZWRWYWx1ZS5sZW5ndGggLyAyKS5qb2luKGRlbGltaXRlcik7XG4gICAgICAgICAgICB2YXIgZDIgPSBzcGxpdHRlZFZhbHVlLnNsaWNlKHNwbGl0dGVkVmFsdWUubGVuZ3RoIC8gMikuam9pbihkZWxpbWl0ZXIpO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkMSwgdGhpcy5vcHRpb25zLmZvcm1hdCksXG4gICAgICAgICAgICAgICAgbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZDIsIHRoaXMub3B0aW9ucy5mb3JtYXQpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgfTtcbiAgICBMUENvcmUucHJvdG90eXBlLmlzU2hvd25pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpICYmIHRoaXMudWkuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnO1xuICAgIH07XG4gICAgTFBDb3JlLnByb3RvdHlwZS5maW5kUG9zaXRpb24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBjYWxSZWN0ID0gdGhpcy51aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIG9yaWVudGF0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uLnNwbGl0KCcgJyk7XG4gICAgICAgIHZhciBzY3JvbGxYID0gd2luZG93LnNjcm9sbFggfHwgd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgICAgICB2YXIgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgdmFyIHRvcCA9IDA7XG4gICAgICAgIHZhciBsZWZ0ID0gMDtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uWzBdID09PSAnYXV0bycgfHwgISgvdG9wfGJvdHRvbS8udGVzdChvcmllbnRhdGlvblswXSkpKSB7XG4gICAgICAgICAgICB0b3AgPSByZWN0LmJvdHRvbSArIHNjcm9sbFk7XG4gICAgICAgICAgICB2YXIgaXNPdXRCb3VuZHMgPSByZWN0LmJvdHRvbSArIGNhbFJlY3QuaGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGhhc1RvcFNwYWNlID0gKHJlY3QudG9wICsgc2Nyb2xsWSkgLSBjYWxSZWN0LmhlaWdodCA+PSBjYWxSZWN0LmhlaWdodDtcbiAgICAgICAgICAgIGlmIChpc091dEJvdW5kcyAmJiBoYXNUb3BTcGFjZSkge1xuICAgICAgICAgICAgICAgIHRvcCA9IChyZWN0LnRvcCArIHNjcm9sbFkpIC0gY2FsUmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b3AgPSByZWN0W29yaWVudGF0aW9uWzBdXSArIHNjcm9sbFk7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb25bMF0gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgdG9wIC09IGNhbFJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghKC9sZWZ0fHJpZ2h0Ly50ZXN0KG9yaWVudGF0aW9uWzBdKSkgJiYgKCFvcmllbnRhdGlvblsxXSB8fCBvcmllbnRhdGlvblsxXSA9PT0gJ2F1dG8nIHx8ICEoL2xlZnR8cmlnaHQvLnRlc3Qob3JpZW50YXRpb25bMV0pKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSByZWN0LmxlZnQgKyBzY3JvbGxYO1xuICAgICAgICAgICAgdmFyIGlzT3V0Qm91bmRzID0gcmVjdC5sZWZ0ICsgY2FsUmVjdC53aWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgdmFyIGhhc0xlZnRTcGFjZSA9IChyZWN0LnJpZ2h0ICsgc2Nyb2xsWCkgLSBjYWxSZWN0LndpZHRoID49IDA7XG4gICAgICAgICAgICBpZiAoaXNPdXRCb3VuZHMgJiYgaGFzTGVmdFNwYWNlKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IChyZWN0LnJpZ2h0ICsgc2Nyb2xsWCkgLSBjYWxSZWN0LndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKC9sZWZ0fHJpZ2h0Ly50ZXN0KG9yaWVudGF0aW9uWzBdKSkge1xuICAgICAgICAgICAgICAgIGxlZnQgPSByZWN0W29yaWVudGF0aW9uWzBdXSArIHNjcm9sbFg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gcmVjdFtvcmllbnRhdGlvblsxXV0gKyBzY3JvbGxYO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uWzBdID09PSAncmlnaHQnIHx8IG9yaWVudGF0aW9uWzFdID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgbGVmdCAtPSBjYWxSZWN0LndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gTFBDb3JlO1xufShldmVudHNfMS5FdmVudEVtaXR0ZXIpKTtcbmV4cG9ydHMuTFBDb3JlID0gTFBDb3JlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRGF0ZVRpbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGF0ZVRpbWUoZGF0ZSwgZm9ybWF0LCBsYW5nKSB7XG4gICAgICAgIGlmIChkYXRlID09PSB2b2lkIDApIHsgZGF0ZSA9IG51bGw7IH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9IG51bGw7IH1cbiAgICAgICAgaWYgKGxhbmcgPT09IHZvaWQgMCkgeyBsYW5nID0gJ2VuLVVTJzsgfVxuICAgICAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ29iamVjdCcgJiYgZm9ybWF0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgdGhpcy5kYXRlSW5zdGFuY2UgPSBmb3JtYXQucGFyc2UoZGF0ZSBpbnN0YW5jZW9mIERhdGVUaW1lID8gZGF0ZS5jbG9uZSgpLnRvSlNEYXRlKCkgOiBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5kYXRlSW5zdGFuY2UgPSAoRGF0ZVRpbWUucGFyc2VEYXRlVGltZShkYXRlLCBmb3JtYXQsIGxhbmcpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVJbnN0YW5jZSA9IChEYXRlVGltZS5wYXJzZURhdGVUaW1lKGRhdGUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZUluc3RhbmNlID0gKERhdGVUaW1lLnBhcnNlRGF0ZVRpbWUobmV3IERhdGUoKSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFuZyA9IGxhbmc7XG4gICAgfVxuICAgIERhdGVUaW1lLnBhcnNlRGF0ZVRpbWUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0LCBsYW5nKSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSAnWVlZWS1NTS1ERCc7IH1cbiAgICAgICAgaWYgKGxhbmcgPT09IHZvaWQgMCkgeyBsYW5nID0gJ2VuLVVTJzsgfVxuICAgICAgICBpZiAoIWRhdGUpXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGVUaW1lKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGUuY2xvbmUoKS50b0pTRGF0ZSgpO1xuICAgICAgICBpZiAoL14tP1xcZHsxMCx9JC8udGVzdChkYXRlKSlcbiAgICAgICAgICAgIHJldHVybiBEYXRlVGltZS5nZXREYXRlWmVyb1RpbWUobmV3IERhdGUoTnVtYmVyKGRhdGUpKSk7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgICAgICAgICB2YXIgbSA9IG51bGw7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbmRpdGlvbmFsLWFzc2lnbm1lbnRcbiAgICAgICAgICAgIHdoaWxlICgobSA9IERhdGVUaW1lLnJlZ2V4LmV4ZWMoZm9ybWF0KSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChtWzFdID09PSAnXFxcXCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBkZWxldGUgd2hlbiByZWdleHAgbG9va2JlaGluZFxuICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlUGF0dGVybiA9IHtcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHNob3J0TW9udGg6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGxvbmdNb250aDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZGF5OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlc1swXS5pbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBhdHRlcm4udmFsdWUgKz0gJy4qPyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3QuZW50cmllcyhtYXRjaGVzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBrID0gX2JbMF0sIG1hdGNoID0gX2JbMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBOdW1iZXIoayk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYyA9IERhdGVUaW1lLmZvcm1hdFBhdHRlcm5zKG1hdGNoWzBdLCBsYW5nKSwgZ3JvdXAgPSBfYy5ncm91cCwgcGF0dGVybiA9IF9jLnBhdHRlcm47XG4gICAgICAgICAgICAgICAgICAgIGRhdGVQYXR0ZXJuW2dyb3VwXSA9IGtleSArIDE7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVQYXR0ZXJuLnZhbHVlICs9IHBhdHRlcm47XG4gICAgICAgICAgICAgICAgICAgIGRhdGVQYXR0ZXJuLnZhbHVlICs9ICcuKj8nOyAvLyBhbnkgZGVsaW1pdGVyc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZGF0ZVJlZ2V4ID0gbmV3IFJlZ0V4cChcIl5cIiArIGRhdGVQYXR0ZXJuLnZhbHVlICsgXCIkXCIpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlUmVnZXgudGVzdChkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGRhdGVSZWdleC5leGVjKGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeWVhciA9IE51bWJlcihkW2RhdGVQYXR0ZXJuLnllYXJdKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vbnRoID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGVQYXR0ZXJuLm1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aCA9IE51bWJlcihkW2RhdGVQYXR0ZXJuLm1vbnRoXSkgLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGVQYXR0ZXJuLnNob3J0TW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoID0gRGF0ZVRpbWUuc2hvcnRNb250aHMobGFuZykuaW5kZXhPZihkW2RhdGVQYXR0ZXJuLnNob3J0TW9udGhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRlUGF0dGVybi5sb25nTW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoID0gRGF0ZVRpbWUubG9uZ01vbnRocyhsYW5nKS5pbmRleE9mKGRbZGF0ZVBhdHRlcm4ubG9uZ01vbnRoXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRheSA9IE51bWJlcihkW2RhdGVQYXR0ZXJuLmRheV0pIHx8IDE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5LCAwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIERhdGVUaW1lLmdldERhdGVaZXJvVGltZShuZXcgRGF0ZShkYXRlKSk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5jb252ZXJ0QXJyYXkgPSBmdW5jdGlvbiAoYXJyYXksIGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmIChkIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5tYXAoZnVuY3Rpb24gKGQxKSB7IHJldHVybiBuZXcgRGF0ZVRpbWUoZDEsIGZvcm1hdCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZShkLCBmb3JtYXQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERhdGVUaW1lLmdldERhdGVaZXJvVGltZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIDAsIDAsIDAsIDApO1xuICAgIH07XG4gICAgRGF0ZVRpbWUuc2hvcnRNb250aHMgPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICByZXR1cm4gRGF0ZVRpbWUuTU9OVEhfSlNcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIG5ldyBEYXRlKDIwMTksIHgpLnRvTG9jYWxlU3RyaW5nKGxhbmcsIHsgbW9udGg6ICdzaG9ydCcgfSk7IH0pO1xuICAgIH07XG4gICAgRGF0ZVRpbWUubG9uZ01vbnRocyA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgIHJldHVybiBEYXRlVGltZS5NT05USF9KU1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4gbmV3IERhdGUoMjAxOSwgeCkudG9Mb2NhbGVTdHJpbmcobGFuZywgeyBtb250aDogJ2xvbmcnIH0pOyB9KTtcbiAgICB9O1xuICAgIERhdGVUaW1lLmZvcm1hdFBhdHRlcm5zID0gZnVuY3Rpb24gKHRva2VuLCBsYW5nKSB7XG4gICAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgICAgIGNhc2UgJ1lZJzpcbiAgICAgICAgICAgIGNhc2UgJ1lZWVknOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiAneWVhcicsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiKFxcXFxke1wiICsgdG9rZW4ubGVuZ3RoICsgXCJ9KVwiLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBncm91cDogJ21vbnRoJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJyhcXFxcZHsxLDJ9KScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBncm91cDogJ21vbnRoJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJyhcXFxcZHsyfSknLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlICdNTU0nOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiAnc2hvcnRNb250aCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiKFwiICsgRGF0ZVRpbWUuc2hvcnRNb250aHMobGFuZykuam9pbignfCcpICsgXCIpXCIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiAnbG9uZ01vbnRoJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogXCIoXCIgKyBEYXRlVGltZS5sb25nTW9udGhzKGxhbmcpLmpvaW4oJ3wnKSArIFwiKVwiLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBncm91cDogJ2RheScsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46ICcoXFxcXGR7MSwyfSknLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlICdERCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICdkYXknLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnKFxcXFxkezJ9KScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnRvSlNEYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2U7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2UudG9Mb2NhbGVTdHJpbmcoYXJnMCwgYXJnMSk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUudG9EYXRlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2UudG9EYXRlU3RyaW5nKCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0U2Vjb25kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldFNlY29uZHMoKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5nZXREYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5nZXREYXkoKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2UuZ2V0VGltZSgpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldERhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5nZXREYXRlKCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0TW9udGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5nZXRNb250aCgpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldEZ1bGxZZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2UuZ2V0RnVsbFllYXIoKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5zZXRNb250aCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLnNldE1vbnRoKGFyZyk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuc2V0SG91cnMgPSBmdW5jdGlvbiAoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1zKSB7XG4gICAgICAgIGlmIChob3VycyA9PT0gdm9pZCAwKSB7IGhvdXJzID0gMDsgfVxuICAgICAgICBpZiAobWludXRlcyA9PT0gdm9pZCAwKSB7IG1pbnV0ZXMgPSAwOyB9XG4gICAgICAgIGlmIChzZWNvbmRzID09PSB2b2lkIDApIHsgc2Vjb25kcyA9IDA7IH1cbiAgICAgICAgaWYgKG1zID09PSB2b2lkIDApIHsgbXMgPSAwOyB9XG4gICAgICAgIHRoaXMuZGF0ZUluc3RhbmNlLnNldEhvdXJzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtcyk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuc2V0U2Vjb25kcyA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLnNldFNlY29uZHMoYXJnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5zZXREYXRlID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2Uuc2V0RGF0ZShhcmcpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnNldEZ1bGxZZWFyID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2Uuc2V0RnVsbFllYXIoYXJnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5nZXRXZWVrID0gZnVuY3Rpb24gKGZpcnN0RGF5KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBuZXcgRGF0ZSh0aGlzLnRpbWVzdGFtcCgpKTtcbiAgICAgICAgdmFyIGRheU5yID0gKHRoaXMuZ2V0RGF5KCkgKyAoNyAtIGZpcnN0RGF5KSkgJSA3O1xuICAgICAgICB0YXJnZXQuc2V0RGF0ZSh0YXJnZXQuZ2V0RGF0ZSgpIC0gZGF5TnIpO1xuICAgICAgICB2YXIgc3RhcnRXZWVrZGF5ID0gdGFyZ2V0LmdldFRpbWUoKTtcbiAgICAgICAgdGFyZ2V0LnNldE1vbnRoKDAsIDEpO1xuICAgICAgICBpZiAodGFyZ2V0LmdldERheSgpICE9PSBmaXJzdERheSkge1xuICAgICAgICAgICAgdGFyZ2V0LnNldE1vbnRoKDAsIDEgKyAoKDQgLSB0YXJnZXQuZ2V0RGF5KCkpICsgNykgJSA3KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMSArIE1hdGguY2VpbCgoc3RhcnRXZWVrZGF5IC0gdGFyZ2V0LmdldFRpbWUoKSkgLyA2MDQ4MDAwMDApO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHRoaXMudG9KU0RhdGUoKSk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuaXNCZXR3ZWVuID0gZnVuY3Rpb24gKGRhdGUxLCBkYXRlMiwgaW5jbHVzaXZpdHkpIHtcbiAgICAgICAgaWYgKGluY2x1c2l2aXR5ID09PSB2b2lkIDApIHsgaW5jbHVzaXZpdHkgPSAnKCknOyB9XG4gICAgICAgIHN3aXRjaCAoaW5jbHVzaXZpdHkpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYXNlICcoKSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZXN0YW1wKCkgPiBkYXRlMS5nZXRUaW1lKCkgJiYgdGhpcy50aW1lc3RhbXAoKSA8IGRhdGUyLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ1spJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lc3RhbXAoKSA+PSBkYXRlMS5nZXRUaW1lKCkgJiYgdGhpcy50aW1lc3RhbXAoKSA8IGRhdGUyLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJyhdJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lc3RhbXAoKSA+IGRhdGUxLmdldFRpbWUoKSAmJiB0aGlzLnRpbWVzdGFtcCgpIDw9IGRhdGUyLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ1tdJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lc3RhbXAoKSA+PSBkYXRlMS5nZXRUaW1lKCkgJiYgdGhpcy50aW1lc3RhbXAoKSA8PSBkYXRlMi5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc0JlZm9yZSA9IGZ1bmN0aW9uIChkYXRlLCB1bml0KSB7XG4gICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmRzJzsgfVxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPiB0aGlzLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICBjYXNlICd5ZWFycyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSA+IHRoaXMuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lzQmVmb3JlOiBJbnZhbGlkIHVuaXQhJyk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuaXNTYW1lT3JCZWZvcmUgPSBmdW5jdGlvbiAoZGF0ZSwgdW5pdCkge1xuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cbiAgICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID49IHRoaXMuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+PSBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPj0gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lzU2FtZU9yQmVmb3JlOiBJbnZhbGlkIHVuaXQhJyk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuaXNBZnRlciA9IGZ1bmN0aW9uIChkYXRlLCB1bml0KSB7XG4gICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmRzJzsgfVxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCAxKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICBjYXNlICd5ZWFycyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnVsbFllYXIoKSA+IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lzQWZ0ZXI6IEludmFsaWQgdW5pdCEnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc1NhbWVPckFmdGVyID0gZnVuY3Rpb24gKGRhdGUsIHVuaXQpIHtcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRpbWUoKSA+PSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPj0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID49IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKS5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpc1NhbWVPckFmdGVyOiBJbnZhbGlkIHVuaXQhJyk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuaXNTYW1lID0gZnVuY3Rpb24gKGRhdGUsIHVuaXQpIHtcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRpbWUoKSA9PT0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID09PSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCAxKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPT09IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKS5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpc1NhbWU6IEludmFsaWQgdW5pdCEnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZHVyYXRpb24sIHVuaXQpIHtcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2Vjb25kcyh0aGlzLmdldFNlY29uZHMoKSArIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgKyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9udGgodGhpcy5nZXRNb250aCgpICsgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKGR1cmF0aW9uLCB1bml0KSB7XG4gICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmRzJzsgfVxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlY29uZHModGhpcy5nZXRTZWNvbmRzKCkgLSBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuZ2V0RGF0ZSgpIC0gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1vbnRoKHRoaXMuZ2V0TW9udGgoKSAtIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5kaWZmID0gZnVuY3Rpb24gKGRhdGUsIHVuaXQpIHtcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XG4gICAgICAgIHZhciBvbmVEYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKHRoaXMudGltZXN0YW1wKCkgLSBkYXRlLmdldFRpbWUoKSkgLyBvbmVEYXkpO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcbiAgICAgICAgICAgIC8vIEBUT0RPXG4gICAgICAgIH1cbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0LCBsYW5nKSB7XG4gICAgICAgIGlmIChsYW5nID09PSB2b2lkIDApIHsgbGFuZyA9ICdlbi1VUyc7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0Lm91dHB1dCh0aGlzLmNsb25lKCkudG9KU0RhdGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3BvbnNlID0gJyc7XG4gICAgICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgICAgIHZhciBtID0gbnVsbDtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25kaXRpb25hbC1hc3NpZ25tZW50XG4gICAgICAgIHdoaWxlICgobSA9IERhdGVUaW1lLnJlZ2V4LmV4ZWMoZm9ybWF0KSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG1bMV0gPT09ICdcXFxcJylcbiAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gZGVsZXRlIHdoZW4gcmVnZXhwIGxvb2tiZWhpbmRcbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGFkZCBzdGFydCBsaW5lIG9mIHRva2VucyBhcmUgbm90IGF0IHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgIGlmIChtYXRjaGVzWzBdLmluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlICs9IGZvcm1hdC5zdWJzdHJpbmcoMCwgbWF0Y2hlc1swXS5pbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMobWF0Y2hlcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBrID0gX2JbMF0sIG1hdGNoID0gX2JbMV07XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IE51bWJlcihrKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZSArPSB0aGlzLmZvcm1hdFRva2VucyhtYXRjaFswXSwgbGFuZyk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNba2V5ICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgKz0gZm9ybWF0LnN1YnN0cmluZyhtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCwgbWF0Y2hlc1trZXkgKyAxXS5pbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGFkZCBlbmQgbGluZSBpZiB0b2tlbnMgYXJlIG5vdCBhdCB0aGUgZW5kaW5nXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gbWF0Y2hlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlICs9IGZvcm1hdC5zdWJzdHJpbmcobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZW1vdmUgZXNjYXBlIGNoYXJhY3RlcnNcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnJlcGxhY2UoL1xcXFwvZywgJycpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnRpbWVzdGFtcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSwgMCwgMCwgMCwgMCkuZ2V0VGltZSgpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmZvcm1hdFRva2VucyA9IGZ1bmN0aW9uICh0b2tlbiwgbGFuZykge1xuICAgICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgICAgICBjYXNlICdZWSc6IHJldHVybiBTdHJpbmcodGhpcy5nZXRGdWxsWWVhcigpKS5zbGljZSgtMik7XG4gICAgICAgICAgICBjYXNlICdZWVlZJzogcmV0dXJuIFN0cmluZyh0aGlzLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgY2FzZSAnTSc6IHJldHVybiBTdHJpbmcodGhpcy5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICBjYXNlICdNTSc6IHJldHVybiAoXCIwXCIgKyAodGhpcy5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgIGNhc2UgJ01NTSc6IHJldHVybiBEYXRlVGltZS5zaG9ydE1vbnRocyhsYW5nKVt0aGlzLmdldE1vbnRoKCldO1xuICAgICAgICAgICAgY2FzZSAnTU1NTSc6IHJldHVybiBEYXRlVGltZS5sb25nTW9udGhzKGxhbmcpW3RoaXMuZ2V0TW9udGgoKV07XG4gICAgICAgICAgICBjYXNlICdEJzogcmV0dXJuIFN0cmluZyh0aGlzLmdldERhdGUoKSk7XG4gICAgICAgICAgICBjYXNlICdERCc6IHJldHVybiAoXCIwXCIgKyB0aGlzLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyByZXBsYWNlIHRvIHJlZ2V4cCBsb29rYmVoaW5kIHdoZW4gbW9zdCBwb3B1bGFyIGJyb3dzZXJzIHdpbGwgc3VwcG9ydFxuICAgIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9anMtcmVnZXhwLWxvb2tiZWhpbmRcbiAgICAvLyAvKD88IVxcXFwpKFl7Miw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fV0pL2dcbiAgICBEYXRlVGltZS5yZWdleCA9IC8oXFxcXCk/KFl7Miw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fSkvZztcbiAgICBEYXRlVGltZS5NT05USF9KUyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdO1xuICAgIHJldHVybiBEYXRlVGltZTtcbn0oKSk7XG5leHBvcnRzLkRhdGVUaW1lID0gRGF0ZVRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBsaXRlcGlja2VyXzEgPSByZXF1aXJlKFwiLi9saXRlcGlja2VyXCIpO1xuZXhwb3J0cy5MaXRlcGlja2VyID0gbGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXI7XG5yZXF1aXJlKFwiLi9tZXRob2RzXCIpO1xud2luZG93LkxpdGVwaWNrZXIgPSBsaXRlcGlja2VyXzEuTGl0ZXBpY2tlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IGxpdGVwaWNrZXJfMS5MaXRlcGlja2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgcltrXSA9IGFbal07XG4gICAgcmV0dXJuIHI7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNhbGVuZGFyXzEgPSByZXF1aXJlKFwiLi9jYWxlbmRhclwiKTtcbnZhciBkYXRldGltZV8xID0gcmVxdWlyZShcIi4vZGF0ZXRpbWVcIik7XG52YXIgc3R5bGUgPSByZXF1aXJlKFwiLi9zY3NzL21haW4uc2Nzc1wiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG52YXIgTGl0ZXBpY2tlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTGl0ZXBpY2tlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMaXRlcGlja2VyKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucHJldmVudENsaWNrID0gZmFsc2U7XG4gICAgICAgIC8vXG4gICAgICAgIF90aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zY3JvbGxUb0RhdGUgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zY3JvbGxUb0RhdGUpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICB2YXIgc3RhcnREYXRlID0gdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUgPyB0aGlzLm9wdGlvbnMuc3RhcnREYXRlLmNsb25lKCkgOiBudWxsO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICAgIHZhciBlbmREYXRlID0gdGhpcy5vcHRpb25zLmVuZERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lID8gdGhpcy5vcHRpb25zLmVuZERhdGUuY2xvbmUoKSA6IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSAmJiAoIWVsIHx8IGVsID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBzdGFydERhdGUuc2V0RGF0ZSgxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1swXSA9IHN0YXJ0RGF0ZS5jbG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWwgJiYgdGhpcy5vcHRpb25zLmVuZERhdGUgJiYgZWwgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50RW5kKSB7XG4gICAgICAgICAgICAgICAgZW5kRGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHMgPiAxICYmIGVuZERhdGUuaXNBZnRlcihzdGFydERhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZERhdGUuc2V0TW9udGgoZW5kRGF0ZS5nZXRNb250aCgpIC0gKHRoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocyAtIDEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0gPSBlbmREYXRlLmNsb25lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcyksIHRydWUpO1xuICAgICAgICB0aGlzLnVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMudWkuY2xhc3NOYW1lID0gc3R5bGUubGl0ZXBpY2tlcjtcbiAgICAgICAgdGhpcy51aS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnVpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICAgICAgdGhpcy51aS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9SZWZyZXNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbklucHV0LmJpbmQodGhpcyksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25JbnB1dC5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbklucHV0LmJpbmQodGhpcyksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYXJlbnRFbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYXJlbnRFbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBhcmVudEVsLmFwcGVuZENoaWxkKHRoaXMudWkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMucGFyZW50RWwpLmFwcGVuZENoaWxkKHRoaXMudWkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMudWkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy51aSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnVpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNldHVwLmNhbGwodGhpcywgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUudXBkYXRlSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghKHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBzdGFydERhdGUgPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlO1xuICAgICAgICB2YXIgZW5kRGF0ZSA9IHRoaXMub3B0aW9ucy5lbmREYXRlO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgJiYgc3RhcnREYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZSA9IHN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiBzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgICAgICAgdmFyIHN0YXJ0VmFsdWUgPSBzdGFydERhdGUuZm9ybWF0KHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgICAgIHZhciBlbmRWYWx1ZSA9IGVuZERhdGUuZm9ybWF0KHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZSA9IHN0YXJ0VmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQudmFsdWUgPSBlbmRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlID0gXCJcIiArIHN0YXJ0VmFsdWUgKyB0aGlzLm9wdGlvbnMuZGVsaW1pdGVyICsgZW5kVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGFydERhdGUgJiYgIWVuZERhdGUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuaXNTYW1lUGlja2VyID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBwaWNrZXIgPSBlbC5jbG9zZXN0KFwiLlwiICsgc3R5bGUubGl0ZXBpY2tlcik7XG4gICAgICAgIHJldHVybiBwaWNrZXIgPT09IHRoaXMudWk7XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zaG91bGRTaG93biA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gIWVsLmRpc2FibGVkICYmIChlbCA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnRcbiAgICAgICAgICAgIHx8ICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCAmJiBlbCA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpKTtcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3VsZFJlc2V0RGF0ZVBpY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlIHx8IHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDI7XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zaG91bGRTd2FwRGF0ZVBpY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDJcbiAgICAgICAgICAgICYmIHRoaXMuZGF0ZVBpY2tlZFswXS5nZXRUaW1lKCkgPiB0aGlzLmRhdGVQaWNrZWRbMV0uZ2V0VGltZSgpO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdWxkQ2hlY2tMb2NrRGF5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kaXNhbGxvd0xvY2tEYXlzSW5SYW5nZVxuICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMjtcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICF0aGlzLnVpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xpY2sgb24gZWxlbWVudFxuICAgICAgICBpZiAodGhpcy5zaG91bGRTaG93bih0YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3codGFyZ2V0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGljayBvdXRzaWRlIHBpY2tlclxuICAgICAgICBpZiAoIXRhcmdldC5jbG9zZXN0KFwiLlwiICsgc3R5bGUubGl0ZXBpY2tlcikgJiYgdGhpcy5pc1Nob3duaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1NhbWVQaWNrZXIodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdCgnYmVmb3JlOmNsaWNrJywgdGFyZ2V0KTtcbiAgICAgICAgaWYgKHRoaXMucHJldmVudENsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnRDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsaWNrIG9uIGRhdGVcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuZGF5SXRlbSkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmlzTG9ja2VkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFJlc2V0RGF0ZVBpY2tlZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWRbdGhpcy5kYXRlUGlja2VkLmxlbmd0aF0gPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0YXJnZXQuZGF0YXNldC50aW1lKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFN3YXBEYXRlUGlja2VkKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcERhdGUgPSB0aGlzLmRhdGVQaWNrZWRbMV0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWRbMV0gPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWRbMF0gPSB0ZW1wRGF0ZS5jbG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ2hlY2tMb2NrRGF5cygpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2tlZCA9IHV0aWxzXzEucmFuZ2VJc0xvY2tlZCh0aGlzLmRhdGVQaWNrZWQsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOnJhbmdlJywgdGhpcy5kYXRlUGlja2VkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBfX3NwcmVhZEFycmF5cyhbJ3ByZXNlbGVjdCddLCBfX3NwcmVhZEFycmF5cyh0aGlzLmRhdGVQaWNrZWQpLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5jbG9uZSgpOyB9KSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvQXBwbHkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGUodGhpcy5kYXRlUGlja2VkWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZVJhbmdlKHRoaXMuZGF0ZVBpY2tlZFswXSwgdGhpcy5kYXRlUGlja2VkWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsaWNrIG9uIGJ1dHRvbiBwcmV2aW91cyBtb250aFxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5idXR0b25QcmV2aW91c01vbnRoKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZNb250aHMgPSB0aGlzLm9wdGlvbnMuc3dpdGNoaW5nTW9udGhzIHx8IHRoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocztcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3BsaXRWaWV3KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vbnRoSXRlbSA9IHRhcmdldC5jbG9zZXN0KFwiLlwiICsgc3R5bGUubW9udGhJdGVtKTtcbiAgICAgICAgICAgICAgICBpZHggPSB1dGlsc18xLmZpbmROZXN0ZWRNb250aEl0ZW0obW9udGhJdGVtKTtcbiAgICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1tpZHhdLnNldE1vbnRoKHRoaXMuY2FsZW5kYXJzW2lkeF0uZ2V0TW9udGgoKSAtIG51bWJlck9mTW9udGhzKTtcbiAgICAgICAgICAgIHRoaXMuZ290b0RhdGUodGhpcy5jYWxlbmRhcnNbaWR4XSwgaWR4KTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1vbnRoJywgdGhpcy5jYWxlbmRhcnNbaWR4XSwgaWR4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGljayBvbiBidXR0b24gbmV4dCBtb250aFxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5idXR0b25OZXh0TW9udGgpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgaWR4ID0gMDtcbiAgICAgICAgICAgIHZhciBudW1iZXJPZk1vbnRocyA9IHRoaXMub3B0aW9ucy5zd2l0Y2hpbmdNb250aHMgfHwgdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zcGxpdFZpZXcpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9udGhJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5tb250aEl0ZW0pO1xuICAgICAgICAgICAgICAgIGlkeCA9IHV0aWxzXzEuZmluZE5lc3RlZE1vbnRoSXRlbShtb250aEl0ZW0pO1xuICAgICAgICAgICAgICAgIG51bWJlck9mTW9udGhzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzW2lkeF0uc2V0TW9udGgodGhpcy5jYWxlbmRhcnNbaWR4XS5nZXRNb250aCgpICsgbnVtYmVyT2ZNb250aHMpO1xuICAgICAgICAgICAgdGhpcy5nb3RvRGF0ZSh0aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bW9udGgnLCB0aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsaWNrIG9uIGJ1dHRvbiBjYW5jZWxcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuYnV0dG9uQ2FuY2VsKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2J1dHRvbjpjYW5jZWwnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGljayBvbiBidXR0b24gYXBwbHlcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuYnV0dG9uQXBwbHkpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZSh0aGlzLmRhdGVQaWNrZWRbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGVSYW5nZSh0aGlzLmRhdGVQaWNrZWRbMF0sIHRoaXMuZGF0ZVBpY2tlZFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYnV0dG9uOmFwcGx5JywgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSwgdGhpcy5vcHRpb25zLmVuZERhdGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsaWNrIG9uIG1vbnRoXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLm1vbnRoSXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgbW9udGggPSBwYXJzZUludCh0YXJnZXQuZGF0YXNldC5tb250aCk7XG4gICAgICAgICAgICB2YXIgeWVhciA9IHBhcnNlSW50KHRhcmdldC5kYXRhc2V0LnllYXIpO1xuICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VkWzBdID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUobmV3IERhdGUoeWVhciwgbW9udGgsIDEpKTtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFsxXSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCkpO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlUmFuZ2UodGhpcy5kYXRlUGlja2VkWzBdLCB0aGlzLmRhdGVQaWNrZWRbMV0pO1xuICAgICAgICAgICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFsncHJlc2VsZWN0J10sIF9fc3ByZWFkQXJyYXlzKHRoaXMuZGF0ZVBpY2tlZCkubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmNsb25lKCk7IH0pKSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zaG93VG9vbHRpcCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0ZXh0KSB7XG4gICAgICAgIHZhciB0b29sdGlwID0gdGhpcy51aS5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUuY29udGFpbmVyVG9vbHRpcCk7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgdG9vbHRpcC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICB2YXIgcGlja2VyQkNSID0gdGhpcy51aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHRvb2x0aXBCQ1IgPSB0b29sdGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgZGF5QkNSID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHRvcCA9IGRheUJDUi50b3A7XG4gICAgICAgIHZhciBsZWZ0ID0gZGF5QkNSLmxlZnQ7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSAmJiB0aGlzLm9wdGlvbnMucGFyZW50RWwpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnRCQ1IgPSB0aGlzLnVpLnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB0b3AgLT0gcGFyZW50QkNSLnRvcDtcbiAgICAgICAgICAgIGxlZnQgLT0gcGFyZW50QkNSLmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b3AgLT0gcGlja2VyQkNSLnRvcDtcbiAgICAgICAgICAgIGxlZnQgLT0gcGlja2VyQkNSLmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgdG9wIC09IHRvb2x0aXBCQ1IuaGVpZ2h0O1xuICAgICAgICBsZWZ0IC09IHRvb2x0aXBCQ1Iud2lkdGggLyAyO1xuICAgICAgICBsZWZ0ICs9IGRheUJDUi53aWR0aCAvIDI7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xuICAgICAgICB0b29sdGlwLnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xuICAgICAgICB0aGlzLmVtaXQoJ3Rvb2x0aXAnLCB0b29sdGlwLCBlbGVtZW50KTtcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLmhpZGVUb29sdGlwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9vbHRpcCA9IHRoaXMudWkucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLmNvbnRhaW5lclRvb2x0aXApO1xuICAgICAgICB0b29sdGlwLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3VsZEFsbG93TW91c2VFbnRlciA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gIXRoaXMub3B0aW9ucy5zaW5nbGVNb2RlXG4gICAgICAgICAgICAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmlzTG9ja2VkKTtcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3VsZEFsbG93UmVwaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVsZW1lbnRFbmRcbiAgICAgICAgICAgICYmIHRoaXMub3B0aW9ucy5hbGxvd1JlcGlja1xuICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZVxuICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmVuZERhdGU7XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5pc0RheUl0ZW0gPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5kYXlJdGVtKTtcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLm9uTW91c2VFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRoaXMuaXNEYXlJdGVtKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaG91bGRBbGxvd01vdXNlRW50ZXIodGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkQWxsb3dSZXBpY2soKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyaWdnZXJFbGVtZW50ID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWRbMF0gPSB0aGlzLm9wdGlvbnMuZW5kRGF0ZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRyaWdnZXJFbGVtZW50ID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWRbMF0gPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhcnREYXRlRWxlbWVudCA9IHRoaXMudWlcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLmRheUl0ZW0gKyBcIltkYXRhLXRpbWU9XFxcIlwiICsgdGhpcy5kYXRlUGlja2VkWzBdLmdldFRpbWUoKSArIFwiXFxcIl1cIik7XG4gICAgICAgICAgICB2YXIgZGF0ZTFfMSA9IHRoaXMuZGF0ZVBpY2tlZFswXS5jbG9uZSgpO1xuICAgICAgICAgICAgdmFyIGRhdGUyXzEgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0YXJnZXQuZGF0YXNldC50aW1lKTtcbiAgICAgICAgICAgIHZhciBpc0ZsaXBwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChkYXRlMV8xLmdldFRpbWUoKSA+IGRhdGUyXzEuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBEYXRlID0gZGF0ZTFfMS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGRhdGUxXzEgPSBkYXRlMl8xLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgZGF0ZTJfMSA9IHRlbXBEYXRlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgaXNGbGlwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbGxEYXlJdGVtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMudWkucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIHN0eWxlLmRheUl0ZW0pKTtcbiAgICAgICAgICAgIGFsbERheUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGQuZGF0YXNldC50aW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgZGF5ID0gX3RoaXMucmVuZGVyRGF5KGRhdGUpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmlzQmV0d2VlbihkYXRlMV8xLCBkYXRlMl8xKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0luUmFuZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkLmNsYXNzTmFtZSA9IGRheS5jbGFzc05hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRW5kRGF0ZSk7XG4gICAgICAgICAgICBpZiAoaXNGbGlwcGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0RGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRmxpcHBlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRmxpcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnREYXRlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUuaXNGbGlwcGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUuaXNGbGlwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1Rvb2x0aXApIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IGRhdGUyXzEuZGlmZihkYXRlMV8xLCAnZGF5JykgKyAxO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnRvb2x0aXBOdW1iZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5cyA9IHRoaXMub3B0aW9ucy50b29sdGlwTnVtYmVyLmNhbGwodGhpcywgZGF5cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXlzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGx1cmFsTmFtZSA9IHRoaXMucGx1cmFsU2VsZWN0b3IoZGF5cyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwbHVyYWxUZXh0ID0gdGhpcy5vcHRpb25zLnRvb2x0aXBUZXh0W3BsdXJhbE5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy50b29sdGlwVGV4dFtwbHVyYWxOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIltcIiArIHBsdXJhbE5hbWUgKyBcIl1cIjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBkYXlzICsgXCIgXCIgKyBwbHVyYWxUZXh0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb29sdGlwKHRhcmdldCwgdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpeCBidWcgaU9TIDEwLTEyIC0gaHR0cHM6Ly9naXRodWIuY29tL3dha2lyaW4vTGl0ZXBpY2tlci9pc3N1ZXMvMTI0XG4gICAgICAgICAgICAgICAgICAgIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgaURldmljZSA9IC8oaXBob25lfGlwYWQpL2kudGVzdCh1YSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpT1MxMW9yMTIgPSAvT1MgMShbMC0yXSkvaS50ZXN0KHVhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlEZXZpY2UgJiYgaU9TMTFvcjEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVUb29sdGlwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5vbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYWxsb3dSZXBpY2tcbiAgICAgICAgICAgIHx8ICh0aGlzLm9wdGlvbnMuYWxsb3dSZXBpY2sgJiYgIXRoaXMub3B0aW9ucy5zdGFydERhdGUgJiYgIXRoaXMub3B0aW9ucy5lbmREYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUub25JbnB1dCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnBhcnNlSW5wdXQoKSwgc3RhcnRWYWx1ZSA9IF9hWzBdLCBlbmRWYWx1ZSA9IF9hWzFdO1xuICAgICAgICB2YXIgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZGF0ZUZvcm1hdCA9IHRoaXMub3B0aW9ucy5mb3JtYXQ7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xuICAgICAgICAgICAgaXNWYWxpZCA9IHN0YXJ0VmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lXG4gICAgICAgICAgICAgICAgJiYgZW5kVmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lXG4gICAgICAgICAgICAgICAgJiYgc3RhcnRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgJiYgZW5kVmFsdWUuZm9ybWF0KGRhdGVGb3JtYXQpID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSkge1xuICAgICAgICAgICAgaXNWYWxpZCA9IHN0YXJ0VmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lXG4gICAgICAgICAgICAgICAgJiYgc3RhcnRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaXNWYWxpZCA9IHN0YXJ0VmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lXG4gICAgICAgICAgICAgICAgJiYgZW5kVmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICAgICAgICAmJiBcIlwiICsgc3RhcnRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgKyB0aGlzLm9wdGlvbnMuZGVsaW1pdGVyICsgZW5kVmFsdWUuZm9ybWF0KGRhdGVGb3JtYXQpID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgaWYgKGVuZFZhbHVlICYmIHN0YXJ0VmFsdWUuZ2V0VGltZSgpID4gZW5kVmFsdWUuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBEYXRlID0gc3RhcnRWYWx1ZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWUgPSBlbmRWYWx1ZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGVuZFZhbHVlID0gdGVtcERhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zdGFydERhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShzdGFydFZhbHVlLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgICAgICBpZiAoZW5kVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGVuZFZhbHVlLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgdmFyIGRhdGVHbyA9IHN0YXJ0VmFsdWUuY2xvbmUoKTtcbiAgICAgICAgICAgIHZhciBtb250aElkeCA9IDA7XG4gICAgICAgICAgICB2YXIgaXNTdGFydCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpIHtcbiAgICAgICAgICAgICAgICBpc1N0YXJ0ID0gc3RhcnRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgPT09IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzU3RhcnQgPSBldmVudC50YXJnZXQudmFsdWUuc3RhcnRzV2l0aChzdGFydFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlzU3RhcnQpIHtcbiAgICAgICAgICAgICAgICBkYXRlR28gPSBlbmRWYWx1ZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIG1vbnRoSWR4ID0gdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc2VsZWN0ZWQnLCB0aGlzLmdldFN0YXJ0RGF0ZSgpLCB0aGlzLmdldEVuZERhdGUoKSk7XG4gICAgICAgICAgICB0aGlzLmdvdG9EYXRlKGRhdGVHbywgbW9udGhJZHgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTGl0ZXBpY2tlcjtcbn0oY2FsZW5kYXJfMS5DYWxlbmRhcikpO1xuZXhwb3J0cy5MaXRlcGlja2VyID0gTGl0ZXBpY2tlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkYXRldGltZV8xID0gcmVxdWlyZShcIi4vZGF0ZXRpbWVcIik7XG52YXIgbGl0ZXBpY2tlcl8xID0gcmVxdWlyZShcIi4vbGl0ZXBpY2tlclwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbCA9PT0gdm9pZCAwKSB7IGVsID0gbnVsbDsgfVxuICAgIHRoaXMuZW1pdCgnYmVmb3JlOnNob3cnLCBlbCk7XG4gICAgdmFyIGVsZW1lbnQgPSBlbCA/IGVsIDogdGhpcy5vcHRpb25zLmVsZW1lbnQ7XG4gICAgdGhpcy50cmlnZ2VyRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuaXNTaG93bmluZygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XG4gICAgICAgIHRoaXMudWkuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aGlzLnVpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgdGhpcy51aS5zdHlsZS50b3AgPSBudWxsO1xuICAgICAgICB0aGlzLnVpLnN0eWxlLmxlZnQgPSBudWxsO1xuICAgICAgICB0aGlzLnVpLnN0eWxlLmJvdHRvbSA9IG51bGw7XG4gICAgICAgIHRoaXMudWkuc3R5bGUucmlnaHQgPSBudWxsO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsVG9EYXRlKGVsKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMudWkuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMudWkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy51aS5zdHlsZS56SW5kZXggPSB0aGlzLm9wdGlvbnMuekluZGV4O1xuICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuZmluZFBvc2l0aW9uKGVsZW1lbnQpO1xuICAgIHRoaXMudWkuc3R5bGUudG9wID0gcG9zaXRpb24udG9wICsgXCJweFwiO1xuICAgIHRoaXMudWkuc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQgKyBcInB4XCI7XG4gICAgdGhpcy51aS5zdHlsZS5yaWdodCA9IG51bGw7XG4gICAgdGhpcy51aS5zdHlsZS5ib3R0b20gPSBudWxsO1xuICAgIHRoaXMuZW1pdCgnc2hvdycsIGVsKTtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuaXNTaG93bmluZygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9IDA7XG4gICAgdGhpcy51cGRhdGVJbnB1dCgpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudWkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmVtaXQoJ2hpZGUnKTtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuZ2V0RGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGFydERhdGUoKTtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuZ2V0U3RhcnREYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnREYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RhcnREYXRlLmNsb25lKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5nZXRFbmREYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5kRGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVuZERhdGUuY2xvbmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldERhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9yY2UpIHtcbiAgICBpZiAoZm9yY2UgPT09IHZvaWQgMCkgeyBmb3JjZSA9IGZhbHNlOyB9XG4gICAgdmFyIGQgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgdmFyIGlzTG9ja2VkID0gdXRpbHNfMS5kYXRlSXNMb2NrZWQoZCwgdGhpcy5vcHRpb25zLCBbZF0pO1xuICAgIGlmIChpc0xvY2tlZCAmJiAhZm9yY2UpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpkYXRlJywgZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShkYXRlKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdCgnc2VsZWN0ZWQnLCB0aGlzLmdldERhdGUoKSk7XG4gICAgfVxufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zZXRTdGFydERhdGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIGlmICghZGF0ZSlcbiAgICAgICAgcmV0dXJuO1xuICAgIHRoaXMub3B0aW9ucy5zdGFydERhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgdGhpcy51cGRhdGVJbnB1dCgpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zZXRFbmREYXRlID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICBpZiAoIWRhdGUpXG4gICAgICAgIHJldHVybjtcbiAgICB0aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgPiB0aGlzLm9wdGlvbnMuZW5kRGF0ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuZERhdGUgPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlLmNsb25lKCk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5zdGFydERhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0RGF0ZVJhbmdlID0gZnVuY3Rpb24gKGRhdGUxLCBkYXRlMiwgZm9yY2UpIHtcbiAgICBpZiAoZm9yY2UgPT09IHZvaWQgMCkgeyBmb3JjZSA9IGZhbHNlOyB9XG4gICAgLy8gc3RvcCByZXBpY2tpbmcgYnkgcmVzZXR0aW5nIHRoZSB0cmlnZ2VyIGVsZW1lbnRcbiAgICB0aGlzLnRyaWdnZXJFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHZhciBkMSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUxLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgdmFyIGQyID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZTIsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICB2YXIgaXNMb2NrZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FsbG93TG9ja0RheXNJblJhbmdlKSB7XG4gICAgICAgIGlzTG9ja2VkID0gdXRpbHNfMS5yYW5nZUlzTG9ja2VkKFtkMSwgZDJdLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaXNMb2NrZWQgPSB1dGlsc18xLmRhdGVJc0xvY2tlZChkMSwgdGhpcy5vcHRpb25zLCBbZDEsIGQyXSlcbiAgICAgICAgICAgIHx8IHV0aWxzXzEuZGF0ZUlzTG9ja2VkKGQyLCB0aGlzLm9wdGlvbnMsIFtkMSwgZDJdKTtcbiAgICB9XG4gICAgaWYgKGlzTG9ja2VkICYmICFmb3JjZSkge1xuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOnJhbmdlJywgW2QxLCBkMl0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGFydERhdGUoZDEpO1xuICAgICAgICB0aGlzLnNldEVuZERhdGUoZDIpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dCgpO1xuICAgICAgICB0aGlzLmVtaXQoJ3NlbGVjdGVkJywgdGhpcy5nZXRTdGFydERhdGUoKSwgdGhpcy5nZXRFbmREYXRlKCkpO1xuICAgIH1cbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuZ290b0RhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgaWR4KSB7XG4gICAgaWYgKGlkeCA9PT0gdm9pZCAwKSB7IGlkeCA9IDA7IH1cbiAgICB2YXIgdG9EYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZSk7XG4gICAgdG9EYXRlLnNldERhdGUoMSk7XG4gICAgdGhpcy5jYWxlbmRhcnNbaWR4XSA9IHRvRGF0ZS5jbG9uZSgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldExvY2tEYXlzID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgdGhpcy5vcHRpb25zLmxvY2tEYXlzID0gZGF0ZXRpbWVfMS5EYXRlVGltZS5jb252ZXJ0QXJyYXkoYXJyYXksIHRoaXMub3B0aW9ucy5sb2NrRGF5c0Zvcm1hdCk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMub3B0aW9ucy5sb2NrRGF5cycsIHRoaXMub3B0aW9ucy5sb2NrRGF5cyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0SGlnaGxpZ2h0ZWREYXlzID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cyA9IGRhdGV0aW1lXzEuRGF0ZVRpbWUuY29udmVydEFycmF5KGFycmF5LCB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzRm9ybWF0KTtcbiAgICB0aGlzLnJlbmRlcigpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBkZWxldGUgb3B0aW9ucy5lbGVtZW50O1xuICAgIGRlbGV0ZSBvcHRpb25zLmVsZW1lbnRFbmQ7XG4gICAgZGVsZXRlIG9wdGlvbnMucGFyZW50RWw7XG4gICAgaWYgKG9wdGlvbnMuc3RhcnREYXRlKSB7XG4gICAgICAgIG9wdGlvbnMuc3RhcnREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUob3B0aW9ucy5zdGFydERhdGUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZW5kRGF0ZSkge1xuICAgICAgICBvcHRpb25zLmVuZERhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShvcHRpb25zLmVuZERhdGUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICB9XG4gICAgdmFyIGRyb3Bkb3ducyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMuZHJvcGRvd25zKSwgb3B0aW9ucy5kcm9wZG93bnMpO1xuICAgIHZhciBidXR0b25UZXh0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy5idXR0b25UZXh0KSwgb3B0aW9ucy5idXR0b25UZXh0KTtcbiAgICB2YXIgdG9vbHRpcFRleHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zLnRvb2x0aXBUZXh0KSwgb3B0aW9ucy50b29sdGlwVGV4dCk7XG4gICAgdGhpcy5vcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucyksIG9wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9ucy5kcm9wZG93bnMgPSBfX2Fzc2lnbih7fSwgZHJvcGRvd25zKTtcbiAgICB0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dCA9IF9fYXNzaWduKHt9LCBidXR0b25UZXh0KTtcbiAgICB0aGlzLm9wdGlvbnMudG9vbHRpcFRleHQgPSBfX2Fzc2lnbih7fSwgdG9vbHRpcFRleHQpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiAhKHRoaXMub3B0aW9ucy5zdGFydERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuZERhdGUgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5zaW5nbGVNb2RlXG4gICAgICAgICYmICghKHRoaXMub3B0aW9ucy5zdGFydERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lKVxuICAgICAgICAgICAgfHwgISh0aGlzLm9wdGlvbnMuZW5kRGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUpKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuZERhdGUgPSBudWxsO1xuICAgIH1cbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCB0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHM7IGlkeCArPSAxKSB7XG4gICAgICAgIHZhciBkYXRlID0gdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZVxuICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMuc3RhcnREYXRlLmNsb25lKClcbiAgICAgICAgICAgIDogbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoKTtcbiAgICAgICAgZGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIGlkeCk7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJzW2lkeF0gPSBkYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmxvY2tEYXlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMubG9ja0RheXMgPSBkYXRldGltZV8xLkRhdGVUaW1lLmNvbnZlcnRBcnJheSh0aGlzLm9wdGlvbnMubG9ja0RheXMsIHRoaXMub3B0aW9ucy5sb2NrRGF5c0Zvcm1hdCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzID0gZGF0ZXRpbWVfMS5EYXRlVGltZS5jb252ZXJ0QXJyYXkodGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cywgdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5c0Zvcm1hdCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmNsZWFyU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMub3B0aW9ucy5zdGFydERhdGUgPSBudWxsO1xuICAgIHRoaXMub3B0aW9ucy5lbmREYXRlID0gbnVsbDtcbiAgICB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID0gMDtcbiAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XG4gICAgaWYgKHRoaXMuaXNTaG93bmluZygpKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIHRoaXMuZW1pdCgnY2xlYXI6c2VsZWN0aW9uJyk7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudWkgJiYgdGhpcy51aS5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMudWkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnVpKTtcbiAgICAgICAgdGhpcy51aSA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuZW1pdCgnZGVzdHJveScpO1xufTtcbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2R0cy1jc3MtbW9kdWxlcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0QXRUb3AoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAgICAgICAgICAgdmFyIGxhc3RJbnNlcnRlZEVsZW1lbnQgPSB3aW5kb3cuX2xhc3RFbGVtZW50SW5zZXJ0ZWRCeVN0eWxlTG9hZGVyO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuZGlzYWJsZUxpdGVwaWNrZXJTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghbGFzdEluc2VydGVkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdEluc2VydGVkRWxlbWVudC5uZXh0U2libGluZykge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGxhc3RJbnNlcnRlZEVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5fbGFzdEVsZW1lbnRJbnNlcnRlZEJ5U3R5bGVMb2FkZXIgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGZpbmROZXN0ZWRNb250aEl0ZW0obW9udGhJdGVtKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gbW9udGhJdGVtLnBhcmVudE5vZGUuY2hpbGROb2RlcztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSA9IGkgKyAxKSB7XG4gICAgICAgIHZhciBjdXJOb2RlID0gY2hpbGRyZW4uaXRlbShpKTtcbiAgICAgICAgaWYgKGN1ck5vZGUgPT09IG1vbnRoSXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG5leHBvcnRzLmZpbmROZXN0ZWRNb250aEl0ZW0gPSBmaW5kTmVzdGVkTW9udGhJdGVtO1xuZnVuY3Rpb24gZGF0ZUlzTG9ja2VkKGRhdGUsIG9wdGlvbnMsIHBpY2tlZERhdGVzKSB7XG4gICAgdmFyIGlzTG9ja2VkID0gZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMubG9ja0RheXMubGVuZ3RoKSB7XG4gICAgICAgIGlzTG9ja2VkID0gb3B0aW9ucy5sb2NrRGF5c1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmlzQmV0d2VlbihkWzBdLCBkWzFdLCBvcHRpb25zLmxvY2tEYXlzSW5jbHVzaXZpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGQuaXNTYW1lKGRhdGUsICdkYXknKTtcbiAgICAgICAgfSkubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoIWlzTG9ja2VkICYmIHR5cGVvZiBvcHRpb25zLmxvY2tEYXlzRmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlzTG9ja2VkID0gb3B0aW9ucy5sb2NrRGF5c0ZpbHRlci5jYWxsKHRoaXMsIGRhdGUuY2xvbmUoKSwgbnVsbCwgcGlja2VkRGF0ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gaXNMb2NrZWQ7XG59XG5leHBvcnRzLmRhdGVJc0xvY2tlZCA9IGRhdGVJc0xvY2tlZDtcbmZ1bmN0aW9uIHJhbmdlSXNMb2NrZWQoZGF5cywgb3B0aW9ucykge1xuICAgIHZhciBpc0xvY2tlZCA9IGZhbHNlO1xuICAgIGlmIChvcHRpb25zLmxvY2tEYXlzLmxlbmd0aCkge1xuICAgICAgICBpc0xvY2tlZCA9IG9wdGlvbnMubG9ja0RheXNcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmIChkIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNFcXVhbFRvUmFuZ2UgPSBkYXlzWzBdLnRvRGF0ZVN0cmluZygpID09PSBkWzBdLnRvRGF0ZVN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICYmIGRheXNbMV0udG9EYXRlU3RyaW5nKCkgPT09IGRbMV0udG9EYXRlU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRbMF0uaXNCZXR3ZWVuKGRheXNbMF0sIGRheXNbMV0sIG9wdGlvbnMubG9ja0RheXNJbmNsdXNpdml0eSlcbiAgICAgICAgICAgICAgICAgICAgfHwgZFsxXS5pc0JldHdlZW4oZGF5c1swXSwgZGF5c1sxXSwgb3B0aW9ucy5sb2NrRGF5c0luY2x1c2l2aXR5KVxuICAgICAgICAgICAgICAgICAgICB8fCBpc0VxdWFsVG9SYW5nZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkLmlzQmV0d2VlbihkYXlzWzBdLCBkYXlzWzFdLCBvcHRpb25zLmxvY2tEYXlzSW5jbHVzaXZpdHkpO1xuICAgICAgICB9KS5sZW5ndGg7XG4gICAgfVxuICAgIGlmICghaXNMb2NrZWQgJiYgdHlwZW9mIG9wdGlvbnMubG9ja0RheXNGaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaXNMb2NrZWQgPSBvcHRpb25zLmxvY2tEYXlzRmlsdGVyLmNhbGwodGhpcywgZGF5c1swXS5jbG9uZSgpLCBkYXlzWzFdLmNsb25lKCksIGRheXMpO1xuICAgIH1cbiAgICByZXR1cm4gaXNMb2NrZWQ7XG59XG5leHBvcnRzLnJhbmdlSXNMb2NrZWQgPSByYW5nZUlzTG9ja2VkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==