/*!
 * 
 * litepicker.js
 * Litepicker v2.0.11 (https://github.com/wakirin/Litepicker)
 * Package: litepicker (https://www.npmjs.com/package/litepicker)
 * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
 * Copyright 2019-2021 Rinat G.
 *     
 * Hash: ffb94ab13b1df199c95a
 * 
 */
var Litepicker =
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

/******/ })["Litepicker"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaXRlcGlja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9jYWxlbmRhci50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL2NvcmUudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9kYXRldGltZS50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvbGl0ZXBpY2tlci50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL21ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9zY3NzL21haW4uc2Nzcz9jYzFlIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFB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QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxvQkFBb0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJO0FBQzNDLDhCQUE4QixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJO0FBQ3ZEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNsYWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN6QztBQUNBLG1CQUFPLENBQUMsbUNBQVc7QUFDbkI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpREFBaUQsUUFBUTtBQUN6RCx3Q0FBd0MsUUFBUTtBQUNoRCx3REFBd0QsUUFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUNyQyxZQUFZLG1CQUFPLENBQUMsOENBQWtCO0FBQ3RDLGNBQWMsbUJBQU8sQ0FBQywrQkFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0hBQWtILGtCQUFrQixFQUFFO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzSkFBMkU7O0FBRWhHO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJsaXRlcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1saXRlcGlja2VyLWNvbnRhaW5lci1tb250aHMtY29sb3ItYmc6ICNmZmY7XFxuICAtLWxpdGVwaWNrZXItY29udGFpbmVyLW1vbnRocy1ib3gtc2hhZG93LWNvbG9yOiAjZGRkO1xcbiAgLS1saXRlcGlja2VyLWZvb3Rlci1jb2xvci1iZzogI2ZhZmFmYTtcXG4gIC0tbGl0ZXBpY2tlci1mb290ZXItYm94LXNoYWRvdy1jb2xvcjogI2RkZDtcXG4gIC0tbGl0ZXBpY2tlci10b29sdGlwLWNvbG9yLWJnOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLW1vbnRoLWhlYWRlci1jb2xvcjogIzMzMztcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tcHJldi1tb250aC1jb2xvcjogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tbmV4dC1tb250aC1jb2xvcjogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tcHJldi1tb250aC1jb2xvci1ob3ZlcjogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tbmV4dC1tb250aC1jb2xvci1ob3ZlcjogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1tb250aC13aWR0aDogY2FsYyh2YXIoLS1saXRlcGlja2VyLWRheS13aWR0aCkgKiA3KTtcXG4gIC0tbGl0ZXBpY2tlci1tb250aC13ZWVrZGF5LWNvbG9yOiAjOWU5ZTllO1xcbiAgLS1saXRlcGlja2VyLW1vbnRoLXdlZWstbnVtYmVyLWNvbG9yOiAjOWU5ZTllO1xcbiAgLS1saXRlcGlja2VyLWRheS13aWR0aDogMzhweDtcXG4gIC0tbGl0ZXBpY2tlci1kYXktY29sb3I6ICMzMzM7XFxuICAtLWxpdGVwaWNrZXItZGF5LWNvbG9yLWhvdmVyOiAjMjE5NmYzO1xcbiAgLS1saXRlcGlja2VyLWlzLXRvZGF5LWNvbG9yOiAjZjQ0MzM2O1xcbiAgLS1saXRlcGlja2VyLWlzLWluLXJhbmdlLWNvbG9yOiAjYmJkZWZiO1xcbiAgLS1saXRlcGlja2VyLWlzLWxvY2tlZC1jb2xvcjogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1pcy1zdGFydC1jb2xvcjogI2ZmZjtcXG4gIC0tbGl0ZXBpY2tlci1pcy1zdGFydC1jb2xvci1iZzogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1pcy1lbmQtY29sb3I6ICNmZmY7XFxuICAtLWxpdGVwaWNrZXItaXMtZW5kLWNvbG9yLWJnOiAjMjE5NmYzO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1jYW5jZWwtY29sb3I6ICNmZmY7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLWNhbmNlbC1jb2xvci1iZzogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tYXBwbHktY29sb3I6ICNmZmY7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLWFwcGx5LWNvbG9yLWJnOiAjMjE5NmYzO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1yZXNldC1jb2xvcjogIzkwOTA5MDtcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3ItaG92ZXI6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItaGlnaGxpZ2h0ZWQtZGF5LWNvbG9yOiAjMzMzO1xcbiAgLS1saXRlcGlja2VyLWhpZ2hsaWdodGVkLWRheS1jb2xvci1iZzogI2ZmZWIzYjsgfVxcblxcbi5zaG93LXdlZWstbnVtYmVycyB7XFxuICAtLWxpdGVwaWNrZXItbW9udGgtd2lkdGg6IGNhbGModmFyKC0tbGl0ZXBpY2tlci1kYXktd2lkdGgpICogOCk7IH1cXG5cXG4ubGl0ZXBpY2tlciB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5saXRlcGlja2VyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTsgfVxcbiAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbWFpbiB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDsgfVxcbiAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWNvbnRhaW5lci1tb250aHMtY29sb3ItYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1saXRlcGlja2VyLWNvbnRhaW5lci1tb250aHMtYm94LXNoYWRvdy1jb2xvcik7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1saXRlcGlja2VyLWNvbnRhaW5lci1tb250aHMtYm94LXNoYWRvdy1jb2xvcik7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWxpdGVwaWNrZXItbW9udGgtd2lkdGgpICsgMTBweCk7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzLmNvbHVtbnMtMiB7XFxuICAgICAgd2lkdGg6IGNhbGMoKHZhcigtLWxpdGVwaWNrZXItbW9udGgtd2lkdGgpICogMikgKyAyMHB4KTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMuY29sdW1ucy0zIHtcXG4gICAgICB3aWR0aDogY2FsYygodmFyKC0tbGl0ZXBpY2tlci1tb250aC13aWR0aCkgKiAzKSArIDMwcHgpOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocy5jb2x1bW5zLTQge1xcbiAgICAgIHdpZHRoOiBjYWxjKCh2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoKSAqIDQpICsgNDBweCk7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzLnNwbGl0LXZpZXcgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGgsXFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocy5zcGxpdC12aWV3IC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLW5leHQtbW9udGgge1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtIHtcXG4gICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgd2lkdGg6IHZhcigtLWxpdGVwaWNrZXItbW9udGgtd2lkdGgpO1xcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLW1vbnRoLWhlYWRlci1jb2xvcik7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgZGl2IHtcXG4gICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgICAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDE7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciBkaXYgPiAubW9udGgtaXRlbS1uYW1lIHtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIGRpdiA+IC5tb250aC1pdGVtLXllYXIge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLnJlc2V0LWJ1dHRvbiB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1yZXNldC1jb2xvcik7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAucmVzZXQtYnV0dG9uID4gc3ZnIHtcXG4gICAgICAgICAgICBmaWxsOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1yZXNldC1jb2xvcik7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAucmVzZXQtYnV0dG9uICoge1xcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLnJlc2V0LWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXJlc2V0LWNvbG9yLWhvdmVyKTsgfVxcbiAgICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLnJlc2V0LWJ1dHRvbjpob3ZlciA+IHN2ZyB7XFxuICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1yZXNldC1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1wcmV2aW91cy1tb250aCxcXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoIHtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXIgMC4zcztcXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyIDAuM3M7XFxuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGggKixcXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLW5leHQtbW9udGggKiB7XFxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1wcmV2aW91cy1tb250aCB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1wcmV2LW1vbnRoLWNvbG9yKTsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGggPiBzdmcsXFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1wcmV2aW91cy1tb250aCA+IGltZyB7XFxuICAgICAgICAgICAgZmlsbDogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcHJldi1tb250aC1jb2xvcik7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcHJldi1tb250aC1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGg6aG92ZXIgPiBzdmcge1xcbiAgICAgICAgICAgICAgZmlsbDogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcHJldi1tb250aC1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoID4gc3ZnLFxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aCA+IGltZyB7XFxuICAgICAgICAgICAgZmlsbDogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tbmV4dC1tb250aC1jb2xvcik7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLW5leHQtbW9udGg6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1uZXh0LW1vbnRoLWNvbG9yLWhvdmVyKTsgfVxcbiAgICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoOmhvdmVyID4gc3ZnIHtcXG4gICAgICAgICAgICAgIGZpbGw6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3ItaG92ZXIpOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLXdlZWtkYXlzLXJvdyB7XFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdlZWtkYXktY29sb3IpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0td2Vla2RheXMtcm93ID4gZGl2IHtcXG4gICAgICAgICAgcGFkZGluZzogNXB4IDA7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogODUlO1xcbiAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgICAgd2lkdGg6IHZhcigtLWxpdGVwaWNrZXItZGF5LXdpZHRoKTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtOmZpcnN0LWNoaWxkIC5idXR0b24tcHJldmlvdXMtbW9udGgge1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbTpsYXN0LWNoaWxkIC5idXR0b24tbmV4dC1tb250aCB7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLm5vLXByZXZpb3VzLW1vbnRoIC5idXR0b24tcHJldmlvdXMtbW9udGgge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLm5vLW5leHQtbW9udGggLmJ1dHRvbi1uZXh0LW1vbnRoIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyA+IGRpdixcXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyA+IGEge1xcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICAgIHdpZHRoOiB2YXIoLS1saXRlcGlja2VyLWRheS13aWR0aCk7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWRheS1jb2xvcik7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXIgMC4zcztcXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXIgMC4zcztcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbTpob3ZlciB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1kYXktY29sb3ItaG92ZXIpO1xcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyKC0tbGl0ZXBpY2tlci1kYXktY29sb3ItaG92ZXIpO1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyKC0tbGl0ZXBpY2tlci1kYXktY29sb3ItaG92ZXIpOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtdG9kYXkge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaXMtdG9kYXktY29sb3IpOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtbG9ja2VkIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLWxvY2tlZC1jb2xvcik7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLWxvY2tlZDpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLWxvY2tlZC1jb2xvcik7XFxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1pbi1yYW5nZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLWluLXJhbmdlLWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1zdGFydC1kYXRlIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLXN0YXJ0LWNvbG9yKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaXMtc3RhcnQtY29sb3ItYmcpO1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtc3RhcnQtZGF0ZS5pcy1mbGlwcGVkIHtcXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLWVuZC1kYXRlIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLWVuZC1jb2xvcik7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLWVuZC1jb2xvci1iZyk7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1lbmQtZGF0ZS5pcy1mbGlwcGVkIHtcXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLXN0YXJ0LWRhdGUuaXMtZW5kLWRhdGUge1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1oaWdobGlnaHRlZCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1oaWdobGlnaHRlZC1kYXktY29sb3IpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1oaWdobGlnaHRlZC1kYXktY29sb3ItYmcpOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLndlZWstbnVtYmVyIHtcXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItbW9udGgtd2Vlay1udW1iZXItY29sb3IpO1xcbiAgICAgIGZvbnQtc2l6ZTogODUlOyB9XFxuICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItZm9vdGVyLWNvbG9yLWJnKTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggM3B4IDNweCAwcHggdmFyKC0tbGl0ZXBpY2tlci1mb290ZXItYm94LXNoYWRvdy1jb2xvcik7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDNweCAzcHggMHB4IHZhcigtLWxpdGVwaWNrZXItZm9vdGVyLWJveC1zaGFkb3ctY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZm9vdGVyIC5wcmV2aWV3LWRhdGUtcmFuZ2Uge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICBmb250LXNpemU6IDkwJTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1jYW5jZWwge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLWNhbmNlbC1jb2xvci1iZyk7XFxuICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLWNhbmNlbC1jb2xvcik7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIHBhZGRpbmc6IDNweCA3cHggNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2Zvb3RlciAuYnV0dG9uLWNhbmNlbCAqIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2Zvb3RlciAuYnV0dG9uLWFwcGx5IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1hcHBseS1jb2xvci1iZyk7XFxuICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLWFwcGx5LWNvbG9yKTtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgcGFkZGluZzogM3B4IDdweCA0cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2Zvb3RlciAuYnV0dG9uLWFwcGx5OmRpc2FibGVkIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuNzsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2Zvb3RlciAuYnV0dG9uLWFwcGx5ICoge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gIC5saXRlcGlja2VyIC5jb250YWluZXJfX3Rvb2x0aXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi10b3A6IC00cHg7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci10b29sdGlwLWNvbG9yLWJnKTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX3Rvb2x0aXA6YmVmb3JlIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAtNXB4O1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNXB4KTtcXG4gICAgICBib3JkZXItdG9wOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX3Rvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IC00cHg7XFxuICAgICAgbGVmdDogY2FsYyg1MCUgLSA0cHgpO1xcbiAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB2YXIoLS1saXRlcGlja2VyLXRvb2x0aXAtY29sb3ItYmcpO1xcbiAgICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2hvd1dlZWtOdW1iZXJzXCI6IFwic2hvdy13ZWVrLW51bWJlcnNcIixcblx0XCJsaXRlcGlja2VyXCI6IFwibGl0ZXBpY2tlclwiLFxuXHRcImNvbnRhaW5lck1haW5cIjogXCJjb250YWluZXJfX21haW5cIixcblx0XCJjb250YWluZXJNb250aHNcIjogXCJjb250YWluZXJfX21vbnRoc1wiLFxuXHRcImNvbHVtbnMyXCI6IFwiY29sdW1ucy0yXCIsXG5cdFwiY29sdW1uczNcIjogXCJjb2x1bW5zLTNcIixcblx0XCJjb2x1bW5zNFwiOiBcImNvbHVtbnMtNFwiLFxuXHRcInNwbGl0Vmlld1wiOiBcInNwbGl0LXZpZXdcIixcblx0XCJtb250aEl0ZW1IZWFkZXJcIjogXCJtb250aC1pdGVtLWhlYWRlclwiLFxuXHRcImJ1dHRvblByZXZpb3VzTW9udGhcIjogXCJidXR0b24tcHJldmlvdXMtbW9udGhcIixcblx0XCJidXR0b25OZXh0TW9udGhcIjogXCJidXR0b24tbmV4dC1tb250aFwiLFxuXHRcIm1vbnRoSXRlbVwiOiBcIm1vbnRoLWl0ZW1cIixcblx0XCJtb250aEl0ZW1OYW1lXCI6IFwibW9udGgtaXRlbS1uYW1lXCIsXG5cdFwibW9udGhJdGVtWWVhclwiOiBcIm1vbnRoLWl0ZW0teWVhclwiLFxuXHRcInJlc2V0QnV0dG9uXCI6IFwicmVzZXQtYnV0dG9uXCIsXG5cdFwibW9udGhJdGVtV2Vla2RheXNSb3dcIjogXCJtb250aC1pdGVtLXdlZWtkYXlzLXJvd1wiLFxuXHRcIm5vUHJldmlvdXNNb250aFwiOiBcIm5vLXByZXZpb3VzLW1vbnRoXCIsXG5cdFwibm9OZXh0TW9udGhcIjogXCJuby1uZXh0LW1vbnRoXCIsXG5cdFwiY29udGFpbmVyRGF5c1wiOiBcImNvbnRhaW5lcl9fZGF5c1wiLFxuXHRcImRheUl0ZW1cIjogXCJkYXktaXRlbVwiLFxuXHRcImlzVG9kYXlcIjogXCJpcy10b2RheVwiLFxuXHRcImlzTG9ja2VkXCI6IFwiaXMtbG9ja2VkXCIsXG5cdFwiaXNJblJhbmdlXCI6IFwiaXMtaW4tcmFuZ2VcIixcblx0XCJpc1N0YXJ0RGF0ZVwiOiBcImlzLXN0YXJ0LWRhdGVcIixcblx0XCJpc0ZsaXBwZWRcIjogXCJpcy1mbGlwcGVkXCIsXG5cdFwiaXNFbmREYXRlXCI6IFwiaXMtZW5kLWRhdGVcIixcblx0XCJpc0hpZ2hsaWdodGVkXCI6IFwiaXMtaGlnaGxpZ2h0ZWRcIixcblx0XCJ3ZWVrTnVtYmVyXCI6IFwid2Vlay1udW1iZXJcIixcblx0XCJjb250YWluZXJGb290ZXJcIjogXCJjb250YWluZXJfX2Zvb3RlclwiLFxuXHRcInByZXZpZXdEYXRlUmFuZ2VcIjogXCJwcmV2aWV3LWRhdGUtcmFuZ2VcIixcblx0XCJidXR0b25DYW5jZWxcIjogXCJidXR0b24tY2FuY2VsXCIsXG5cdFwiYnV0dG9uQXBwbHlcIjogXCJidXR0b24tYXBwbHlcIixcblx0XCJjb250YWluZXJUb29sdGlwXCI6IFwiY29udGFpbmVyX190b29sdGlwXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gJGdldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gJGdldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9ICRnZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBSZWZsZWN0QXBwbHkodGhpcy5saXN0ZW5lciwgdGhpcy50YXJnZXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29yZV8xID0gcmVxdWlyZShcIi4vY29yZVwiKTtcbnZhciBkYXRldGltZV8xID0gcmVxdWlyZShcIi4vZGF0ZXRpbWVcIik7XG52YXIgc3R5bGUgPSByZXF1aXJlKFwiLi9zY3NzL21haW4uc2Nzc1wiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG52YXIgQ2FsZW5kYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENhbGVuZGFyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENhbGVuZGFyKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgICAgIC8vXG4gICAgfVxuICAgIENhbGVuZGFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZW1pdCgnYmVmb3JlOnJlbmRlcicsIHRoaXMudWkpO1xuICAgICAgICB2YXIgbWFpbkJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5CbG9jay5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJNYWluO1xuICAgICAgICB2YXIgbW9udGhzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vbnRocy5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJNb250aHM7XG4gICAgICAgIGlmIChzdHlsZVtcImNvbHVtbnNcIiArIHRoaXMub3B0aW9ucy5udW1iZXJPZkNvbHVtbnNdKSB7XG4gICAgICAgICAgICBtb250aHMuY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5jb2x1bW5zMiwgc3R5bGUuY29sdW1uczMsIHN0eWxlLmNvbHVtbnM0KTtcbiAgICAgICAgICAgIG1vbnRocy5jbGFzc0xpc3QuYWRkKHN0eWxlW1wiY29sdW1uc1wiICsgdGhpcy5vcHRpb25zLm51bWJlck9mQ29sdW1uc10pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3BsaXRWaWV3KSB7XG4gICAgICAgICAgICBtb250aHMuY2xhc3NMaXN0LmFkZChzdHlsZS5zcGxpdFZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzKSB7XG4gICAgICAgICAgICBtb250aHMuY2xhc3NMaXN0LmFkZChzdHlsZS5zaG93V2Vla051bWJlcnMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydERhdGUgPSB0aGlzLmNhbGVuZGFyc1swXS5jbG9uZSgpO1xuICAgICAgICB2YXIgc3RhcnRNb250aElkeCA9IHN0YXJ0RGF0ZS5nZXRNb250aCgpO1xuICAgICAgICB2YXIgdG90YWxNb250aHMgPSBzdGFydERhdGUuZ2V0TW9udGgoKSArIHRoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocztcbiAgICAgICAgdmFyIGNhbGVuZGFySWR4ID0gMDtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXG4gICAgICAgIGZvciAodmFyIGlkeCA9IHN0YXJ0TW9udGhJZHg7IGlkeCA8IHRvdGFsTW9udGhzOyBpZHggKz0gMSkge1xuICAgICAgICAgICAgdmFyIGRhdGVJdGVyYXRvciA9IHN0YXJ0RGF0ZS5jbG9uZSgpO1xuICAgICAgICAgICAgZGF0ZUl0ZXJhdG9yLnNldERhdGUoMSk7XG4gICAgICAgICAgICBkYXRlSXRlcmF0b3Iuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xuICAgICAgICAgICAgICAgIGRhdGVJdGVyYXRvciA9IHRoaXMuY2FsZW5kYXJzW2NhbGVuZGFySWR4XS5jbG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0ZUl0ZXJhdG9yLnNldE1vbnRoKGlkeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb250aHMuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJNb250aChkYXRlSXRlcmF0b3IsIGNhbGVuZGFySWR4KSk7XG4gICAgICAgICAgICBjYWxlbmRhcklkeCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIG1haW5CbG9jay5hcHBlbmRDaGlsZChtb250aHMpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlc2V0QnV0dG9uKSB7XG4gICAgICAgICAgICB2YXIgcmVzZXRCdXR0b24gPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5yZXNldEJ1dHRvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uID0gdGhpcy5vcHRpb25zLnJlc2V0QnV0dG9uLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbi5jbGFzc05hbWUgPSBzdHlsZS5yZXNldEJ1dHRvbjtcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dC5yZXNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zdHJpbmctbGl0ZXJhbFxuICAgICAgICAgICAgICAgIF90aGlzWydjbGVhclNlbGVjdGlvbiddKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1haW5CbG9ja1xuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUubW9udGhJdGVtICsgXCI6bGFzdC1jaGlsZFwiKVxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUubW9udGhJdGVtSGVhZGVyKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aS5hcHBlbmRDaGlsZChtYWluQmxvY2spO1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hdXRvQXBwbHkgfHwgdGhpcy5vcHRpb25zLmZvb3RlckhUTUwpIHtcbiAgICAgICAgICAgIHRoaXMudWkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJGb290ZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93VG9vbHRpcCkge1xuICAgICAgICAgICAgdGhpcy51aS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclRvb2x0aXAoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aS5kYXRhc2V0LnBsdWdpbnMgPSAodGhpcy5vcHRpb25zLnBsdWdpbnMgfHwgW10pLmpvaW4oJ3wnKTtcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5kZXInLCB0aGlzLnVpKTtcbiAgICB9O1xuICAgIENhbGVuZGFyLnByb3RvdHlwZS5yZW5kZXJNb250aCA9IGZ1bmN0aW9uIChkYXRlLCBjYWxlbmRhcklkeCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhcnREYXRlID0gZGF0ZS5jbG9uZSgpO1xuICAgICAgICB2YXIgdG90YWxEYXlzID0gMzIgLSBuZXcgRGF0ZShzdGFydERhdGUuZ2V0RnVsbFllYXIoKSwgc3RhcnREYXRlLmdldE1vbnRoKCksIDMyKS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtb250aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb250aC5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW07XG4gICAgICAgIHZhciBtb250aEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb250aEhlYWRlci5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1IZWFkZXI7XG4gICAgICAgIHZhciBtb250aEFuZFllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcm9wZG93bnMubW9udGhzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0TW9udGhzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBzZWxlY3RNb250aHMuY2xhc3NOYW1lID0gc3R5bGUubW9udGhJdGVtTmFtZTtcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgMTI7IHggKz0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAvLyBkYXkgMiBiZWNhdXNlIGlPUyBidWcgd2l0aCBgdG9Mb2NhbGVTdHJpbmdgXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dha2lyaW4vTGl0ZXBpY2tlci9pc3N1ZXMvMTEzXG4gICAgICAgICAgICAgICAgdmFyIG1vbnRoTmFtZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgeCwgMiwgMCwgMCwgMCkpO1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25Nb250aCA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgeCwgMSwgMCwgMCwgMCkpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyh4KTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IG1vbnRoTmFtZS50b0xvY2FsZVN0cmluZyh0aGlzLm9wdGlvbnMubGFuZywgeyBtb250aDogJ2xvbmcnIH0pO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9ICh0aGlzLm9wdGlvbnMubWluRGF0ZVxuICAgICAgICAgICAgICAgICAgICAmJiBvcHRpb25Nb250aC5pc0JlZm9yZShuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWluRGF0ZSksICdtb250aCcpKVxuICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5vcHRpb25zLm1heERhdGUgJiYgb3B0aW9uTW9udGguaXNBZnRlcihuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWF4RGF0ZSksICdtb250aCcpKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb25Nb250aC5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0TW9udGhzLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RNb250aHMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc3BsaXRWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb250aEl0ZW0gPSB0YXJnZXQuY2xvc2VzdChcIi5cIiArIHN0eWxlLm1vbnRoSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IHV0aWxzXzEuZmluZE5lc3RlZE1vbnRoSXRlbShtb250aEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5jYWxlbmRhcnNbaWR4XS5zZXRNb250aChOdW1iZXIodGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnY2hhbmdlOm1vbnRoJywgX3RoaXMuY2FsZW5kYXJzW2lkeF0sIGlkeCwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1vbnRoQW5kWWVhci5hcHBlbmRDaGlsZChzZWxlY3RNb250aHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1vbnRoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xuICAgICAgICAgICAgbW9udGhOYW1lLmNsYXNzTmFtZSA9IHN0eWxlLm1vbnRoSXRlbU5hbWU7XG4gICAgICAgICAgICBtb250aE5hbWUuaW5uZXJIVE1MID0gZGF0ZS50b0xvY2FsZVN0cmluZyh0aGlzLm9wdGlvbnMubGFuZywgeyBtb250aDogJ2xvbmcnIH0pO1xuICAgICAgICAgICAgbW9udGhBbmRZZWFyLmFwcGVuZENoaWxkKG1vbnRoTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcm9wZG93bnMueWVhcnMpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RZZWFyc18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBzZWxlY3RZZWFyc18xLmNsYXNzTmFtZSA9IHN0eWxlLm1vbnRoSXRlbVllYXI7XG4gICAgICAgICAgICB2YXIgbWluWWVhciA9IHRoaXMub3B0aW9ucy5kcm9wZG93bnMubWluWWVhcjtcbiAgICAgICAgICAgIHZhciBtYXhZZWFyID0gdGhpcy5vcHRpb25zLmRyb3Bkb3ducy5tYXhZZWFyXG4gICAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMuZHJvcGRvd25zLm1heFllYXJcbiAgICAgICAgICAgICAgICA6IChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSA+IG1heFllYXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IG1heFllYXI7IHggPj0gbWluWWVhcjsgeCAtPSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25ZZWFyID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUobmV3IERhdGUoeCwgMCwgMSwgMCwgMCwgMCkpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyh4KTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IFN0cmluZyh4KTtcbiAgICAgICAgICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSAodGhpcy5vcHRpb25zLm1pbkRhdGVcbiAgICAgICAgICAgICAgICAgICAgJiYgb3B0aW9uWWVhci5pc0JlZm9yZShuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWluRGF0ZSksICd5ZWFyJykpXG4gICAgICAgICAgICAgICAgICAgIHx8ICh0aGlzLm9wdGlvbnMubWF4RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgb3B0aW9uWWVhci5pc0FmdGVyKG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5tYXhEYXRlKSwgJ3llYXInKSk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZGF0ZS5nZXRGdWxsWWVhcigpID09PSB4O1xuICAgICAgICAgICAgICAgIHNlbGVjdFllYXJzXzEuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPCBtaW5ZZWFyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGVjdFllYXJzXzEuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJvcGRvd25zLnllYXJzID09PSAnYXNjJykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzZWxlY3RZZWFyc18xLmNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gY2hpbGRzLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RZZWFyc18xLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgICAgICAgICB5LmlubmVySFRNTCA9IHkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFllYXJzXzEuYXBwZW5kQ2hpbGQoeSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RZZWFyc18xLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBpZHggPSAwO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGhJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5tb250aEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBpZHggPSB1dGlsc18xLmZpbmROZXN0ZWRNb250aEl0ZW0obW9udGhJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMuY2FsZW5kYXJzW2lkeF0uc2V0RnVsbFllYXIoTnVtYmVyKHRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2NoYW5nZTp5ZWFyJywgX3RoaXMuY2FsZW5kYXJzW2lkeF0sIGlkeCwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1vbnRoQW5kWWVhci5hcHBlbmRDaGlsZChzZWxlY3RZZWFyc18xKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtb250aFllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBtb250aFllYXIuY2xhc3NOYW1lID0gc3R5bGUubW9udGhJdGVtWWVhcjtcbiAgICAgICAgICAgIG1vbnRoWWVhci5pbm5lckhUTUwgPSBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgIG1vbnRoQW5kWWVhci5hcHBlbmRDaGlsZChtb250aFllYXIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2aW91c01vbnRoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByZXZpb3VzTW9udGhCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBwcmV2aW91c01vbnRoQnV0dG9uLmNsYXNzTmFtZSA9IHN0eWxlLmJ1dHRvblByZXZpb3VzTW9udGg7XG4gICAgICAgIHByZXZpb3VzTW9udGhCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmJ1dHRvblRleHQucHJldmlvdXNNb250aDtcbiAgICAgICAgdmFyIG5leHRNb250aEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuZXh0TW9udGhCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBuZXh0TW9udGhCdXR0b24uY2xhc3NOYW1lID0gc3R5bGUuYnV0dG9uTmV4dE1vbnRoO1xuICAgICAgICBuZXh0TW9udGhCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmJ1dHRvblRleHQubmV4dE1vbnRoO1xuICAgICAgICBtb250aEhlYWRlci5hcHBlbmRDaGlsZChwcmV2aW91c01vbnRoQnV0dG9uKTtcbiAgICAgICAgbW9udGhIZWFkZXIuYXBwZW5kQ2hpbGQobW9udGhBbmRZZWFyKTtcbiAgICAgICAgbW9udGhIZWFkZXIuYXBwZW5kQ2hpbGQobmV4dE1vbnRoQnV0dG9uKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5taW5EYXRlXG4gICAgICAgICAgICAmJiBzdGFydERhdGUuaXNTYW1lT3JCZWZvcmUobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1pbkRhdGUpLCAnbW9udGgnKSkge1xuICAgICAgICAgICAgbW9udGguY2xhc3NMaXN0LmFkZChzdHlsZS5ub1ByZXZpb3VzTW9udGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWF4RGF0ZVxuICAgICAgICAgICAgJiYgc3RhcnREYXRlLmlzU2FtZU9yQWZ0ZXIobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1heERhdGUpLCAnbW9udGgnKSkge1xuICAgICAgICAgICAgbW9udGguY2xhc3NMaXN0LmFkZChzdHlsZS5ub05leHRNb250aCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdlZWtkYXlzUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlZWtkYXlzUm93LmNsYXNzTmFtZSA9IHN0eWxlLm1vbnRoSXRlbVdlZWtkYXlzUm93O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dXZWVrTnVtYmVycykge1xuICAgICAgICAgICAgd2Vla2RheXNSb3cuaW5uZXJIVE1MID0gJzxkaXY+VzwvZGl2Pic7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgdyA9IDE7IHcgPD0gNzsgdyArPSAxKSB7XG4gICAgICAgICAgICAvLyA3IGRheXMsIDQgaXMgwqtUaHVyc2RhecK7IChuZXcgRGF0ZSgxOTcwLCAwLCAxLCAxMiwgMCwgMCwgMCkpXG4gICAgICAgICAgICB2YXIgZGF5SWR4ID0gNyAtIDQgKyB0aGlzLm9wdGlvbnMuZmlyc3REYXkgKyB3O1xuICAgICAgICAgICAgdmFyIHdlZWtkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHdlZWtkYXkuaW5uZXJIVE1MID0gdGhpcy53ZWVrZGF5TmFtZShkYXlJZHgpO1xuICAgICAgICAgICAgd2Vla2RheS50aXRsZSA9IHRoaXMud2Vla2RheU5hbWUoZGF5SWR4LCAnbG9uZycpO1xuICAgICAgICAgICAgd2Vla2RheS5jbGFzc0xpc3QuYWRkKCd3ZWVrLWlkeC0nICsgKCh3IC0gMSArIHRoaXMub3B0aW9ucy5maXJzdERheSkgJSA3KSk7XG4gICAgICAgICAgICB3ZWVrZGF5c1Jvdy5hcHBlbmRDaGlsZCh3ZWVrZGF5KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29udGFpbmVyRGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXJEYXlzLmNsYXNzTmFtZSA9IHN0eWxlLmNvbnRhaW5lckRheXM7XG4gICAgICAgIHZhciB3ZWVrRGF5c0lkeCA9IDA7XG4gICAgICAgIHZhciB3ZWVrRGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3ZWVrRGF5cy5jbGFzc05hbWUgPSBcInJvd1wiO1xuICAgICAgICB2YXIgc2tpcERheXMgPSB0aGlzLmNhbGNTa2lwRGF5cyhzdGFydERhdGUpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dXZWVrTnVtYmVycyAmJiBza2lwRGF5cykge1xuICAgICAgICAgICAgd2Vla0RheXMuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJXZWVrTnVtYmVyKHN0YXJ0RGF0ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IHNraXBEYXlzOyBpZHggKz0gMSkge1xuICAgICAgICAgICAgdmFyIGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB3ZWVrRGF5cy5hcHBlbmRDaGlsZChkdW1teSk7XG4gICAgICAgICAgICB3ZWVrRGF5c0lkeCsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWZvci1vZlxuICAgICAgICBmb3IgKHZhciBpZHggPSAxOyBpZHggPD0gdG90YWxEYXlzOyBpZHggKz0gMSkge1xuICAgICAgICAgICAgc3RhcnREYXRlLnNldERhdGUoaWR4KTtcbiAgICAgICAgICAgIGlmICh3ZWVrRGF5c0lkeCA9PT0gNykge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRheXMuYXBwZW5kQ2hpbGQod2Vla0RheXMpO1xuICAgICAgICAgICAgICAgIHdlZWtEYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgd2Vla0RheXMuY2xhc3NOYW1lID0gXCJyb3dcIjtcbiAgICAgICAgICAgICAgICB3ZWVrRGF5c0lkeCA9IHdlZWtEYXlzSWR4ICUgNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzICYmIHN0YXJ0RGF0ZS5nZXREYXkoKSA9PT0gdGhpcy5vcHRpb25zLmZpcnN0RGF5KSB7XG4gICAgICAgICAgICAgICAgd2Vla0RheXMuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJXZWVrTnVtYmVyKHN0YXJ0RGF0ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2Vla0RheXMuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJEYXkoc3RhcnREYXRlKSk7XG4gICAgICAgICAgICB3ZWVrRGF5c0lkeCsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGlkeCA9IHdlZWtEYXlzSWR4OyBpZHggPCA3OyBpZHggKz0gMSkge1xuICAgICAgICAgICAgdmFyIGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB3ZWVrRGF5cy5hcHBlbmRDaGlsZChkdW1teSk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyRGF5cy5hcHBlbmRDaGlsZCh3ZWVrRGF5cyk7XG4gICAgICAgIG1vbnRoLmFwcGVuZENoaWxkKG1vbnRoSGVhZGVyKTtcbiAgICAgICAgbW9udGguYXBwZW5kQ2hpbGQod2Vla2RheXNSb3cpO1xuICAgICAgICBtb250aC5hcHBlbmRDaGlsZChjb250YWluZXJEYXlzKTtcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5kZXI6bW9udGgnLCBtb250aCwgZGF0ZSk7XG4gICAgICAgIHJldHVybiBtb250aDtcbiAgICB9O1xuICAgIENhbGVuZGFyLnByb3RvdHlwZS5yZW5kZXJEYXkgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICBkYXRlLnNldEhvdXJzKCk7XG4gICAgICAgIHZhciBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5LmNsYXNzTmFtZSA9IHN0eWxlLmRheUl0ZW07XG4gICAgICAgIGRheS5pbm5lckhUTUwgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICBkYXkuZGF0YXNldC50aW1lID0gU3RyaW5nKGRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgaWYgKGRhdGUudG9EYXRlU3RyaW5nKCkgPT09IChuZXcgRGF0ZSgpKS50b0RhdGVTdHJpbmcoKSkge1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNUb2RheSk7XG4gICAgICAgIH1cbiAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ3dlZWstJyArIGRhdGUuZ2V0RGF5KCkpO1xuICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZFswXS50b0RhdGVTdHJpbmcoKSA9PT0gZGF0ZS50b0RhdGVTdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzU3RhcnREYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNFbmREYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMlxuICAgICAgICAgICAgICAgICYmIHRoaXMuZGF0ZVBpY2tlZFsxXS50b0RhdGVTdHJpbmcoKSA9PT0gZGF0ZS50b0RhdGVTdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRW5kRGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmlzQmV0d2Vlbih0aGlzLmRhdGVQaWNrZWRbMF0sIHRoaXMuZGF0ZVBpY2tlZFsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNJblJhbmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSkge1xuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IHRoaXMub3B0aW9ucy5zdGFydERhdGU7XG4gICAgICAgICAgICB2YXIgZW5kRGF0ZSA9IHRoaXMub3B0aW9ucy5lbmREYXRlO1xuICAgICAgICAgICAgaWYgKHN0YXJ0RGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gZGF0ZS50b0RhdGVTdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzU3RhcnREYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNFbmREYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW5kRGF0ZSAmJiBlbmREYXRlLnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNFbmREYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLmlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzSW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWluRGF0ZSAmJiBkYXRlLmlzQmVmb3JlKG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5taW5EYXRlKSkpIHtcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1heERhdGUgJiYgZGF0ZS5pc0FmdGVyKG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5tYXhEYXRlKSkpIHtcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1pbkRheXMgPiAxXG4gICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB2YXIgbWluRGF5cyA9IHRoaXMub3B0aW9ucy5taW5EYXlzIC0gMTsgLy8gc3VidHJhY3Qgc2VsZWN0ZWQgZGF5XG4gICAgICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZGF0ZVBpY2tlZFswXS5jbG9uZSgpLnN1YnRyYWN0KG1pbkRheXMsICdkYXknKTtcbiAgICAgICAgICAgIHZhciByaWdodCA9IHRoaXMuZGF0ZVBpY2tlZFswXS5jbG9uZSgpLmFkZChtaW5EYXlzLCAnZGF5Jyk7XG4gICAgICAgICAgICBpZiAoZGF0ZS5pc0JldHdlZW4obGVmdCwgdGhpcy5kYXRlUGlja2VkWzBdLCAnKF0nKSkge1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRlLmlzQmV0d2Vlbih0aGlzLmRhdGVQaWNrZWRbMF0sIHJpZ2h0LCAnWyknKSkge1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1heERheXNcbiAgICAgICAgICAgICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHZhciBtYXhEYXlzID0gdGhpcy5vcHRpb25zLm1heERheXM7XG4gICAgICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZGF0ZVBpY2tlZFswXS5jbG9uZSgpLnN1YnRyYWN0KG1heERheXMsICdkYXknKTtcbiAgICAgICAgICAgIHZhciByaWdodCA9IHRoaXMuZGF0ZVBpY2tlZFswXS5jbG9uZSgpLmFkZChtYXhEYXlzLCAnZGF5Jyk7XG4gICAgICAgICAgICBpZiAoZGF0ZS5pc1NhbWVPckJlZm9yZShsZWZ0KSkge1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRlLmlzU2FtZU9yQWZ0ZXIocmlnaHQpKSB7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0Rm9yd2FyZFxuICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgJiYgZGF0ZS5pc0JlZm9yZSh0aGlzLmRhdGVQaWNrZWRbMF0pKSB7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RCYWNrd2FyZFxuICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgJiYgZGF0ZS5pc0FmdGVyKHRoaXMuZGF0ZVBpY2tlZFswXSkpIHtcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbG9ja2VkID0gdXRpbHNfMS5kYXRlSXNMb2NrZWQoZGF0ZSwgdGhpcy5vcHRpb25zLCB0aGlzLmRhdGVQaWNrZWQpO1xuICAgICAgICBpZiAobG9ja2VkKSB7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgaXNIaWdobGlnaHRlZCA9IHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5pc0JldHdlZW4oZFswXSwgZFsxXSwgJ1tdJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkLmlzU2FtZShkYXRlLCAnZGF5Jyk7XG4gICAgICAgICAgICB9KS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoaXNIaWdobGlnaHRlZCkge1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzSGlnaGxpZ2h0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGZpeCBidWcgaU9TIDEwLTEyIC0gaHR0cHM6Ly9naXRodWIuY29tL3dha2lyaW4vTGl0ZXBpY2tlci9pc3N1ZXMvMTI0XG4gICAgICAgIGRheS50YWJJbmRleCA9ICFkYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1sb2NrZWQnKSA/IDAgOiAtMTtcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5kZXI6ZGF5JywgZGF5LCBkYXRlKTtcbiAgICAgICAgcmV0dXJuIGRheTtcbiAgICB9O1xuICAgIENhbGVuZGFyLnByb3RvdHlwZS5yZW5kZXJGb290ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vdGVyLmNsYXNzTmFtZSA9IHN0eWxlLmNvbnRhaW5lckZvb3RlcjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mb290ZXJIVE1MKSB7XG4gICAgICAgICAgICBmb290ZXIuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmZvb3RlckhUTUw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb290ZXIuaW5uZXJIVE1MID0gXCJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiXCIgKyBzdHlsZS5wcmV2aWV3RGF0ZVJhbmdlICsgXCJcXFwiPjwvc3Bhbj5cXG4gICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiICsgc3R5bGUuYnV0dG9uQ2FuY2VsICsgXCJcXFwiPlwiICsgdGhpcy5vcHRpb25zLmJ1dHRvblRleHQuY2FuY2VsICsgXCI8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiICsgc3R5bGUuYnV0dG9uQXBwbHkgKyBcIlxcXCI+XCIgKyB0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dC5hcHBseSArIFwiPC9idXR0b24+XFxuICAgICAgXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBzdGFydFZhbHVlID0gdGhpcy5kYXRlUGlja2VkWzBdLmZvcm1hdCh0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgICAgICAgICAgZm9vdGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5wcmV2aWV3RGF0ZVJhbmdlKS5pbm5lckhUTUwgPSBzdGFydFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBmb290ZXIucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLmJ1dHRvbkFwcGx5KS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlZFswXS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICAgICAgICAgIHZhciBlbmRWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlZFsxXS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICAgICAgICAgIGZvb3Rlci5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUucHJldmlld0RhdGVSYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgLmlubmVySFRNTCA9IFwiXCIgKyBzdGFydFZhbHVlICsgdGhpcy5vcHRpb25zLmRlbGltaXRlciArIGVuZFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdCgncmVuZGVyOmZvb3RlcicsIGZvb3Rlcik7XG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfTtcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyV2Vla051bWJlciA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHZhciB3biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgd2VlayA9IGRhdGUuZ2V0V2Vlayh0aGlzLm9wdGlvbnMuZmlyc3REYXkpO1xuICAgICAgICB3bi5jbGFzc05hbWUgPSBzdHlsZS53ZWVrTnVtYmVyO1xuICAgICAgICB3bi5pbm5lckhUTUwgPSB3ZWVrID09PSA1MyAmJiBkYXRlLmdldE1vbnRoKCkgPT09IDAgPyAnNTMgLyAxJyA6IHdlZWs7XG4gICAgICAgIHJldHVybiB3bjtcbiAgICB9O1xuICAgIENhbGVuZGFyLnByb3RvdHlwZS5yZW5kZXJUb29sdGlwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0LmNsYXNzTmFtZSA9IHN0eWxlLmNvbnRhaW5lclRvb2x0aXA7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgQ2FsZW5kYXIucHJvdG90eXBlLndlZWtkYXlOYW1lID0gZnVuY3Rpb24gKGRheSwgcmVwcmVzZW50YXRpb24pIHtcbiAgICAgICAgaWYgKHJlcHJlc2VudGF0aW9uID09PSB2b2lkIDApIHsgcmVwcmVzZW50YXRpb24gPSAnc2hvcnQnOyB9XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgxOTcwLCAwLCBkYXksIDEyLCAwLCAwLCAwKVxuICAgICAgICAgICAgLnRvTG9jYWxlU3RyaW5nKHRoaXMub3B0aW9ucy5sYW5nLCB7IHdlZWtkYXk6IHJlcHJlc2VudGF0aW9uIH0pO1xuICAgIH07XG4gICAgQ2FsZW5kYXIucHJvdG90eXBlLmNhbGNTa2lwRGF5cyA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHZhciB0b3RhbCA9IGRhdGUuZ2V0RGF5KCkgLSB0aGlzLm9wdGlvbnMuZmlyc3REYXk7XG4gICAgICAgIGlmICh0b3RhbCA8IDApXG4gICAgICAgICAgICB0b3RhbCArPSA3O1xuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgfTtcbiAgICByZXR1cm4gQ2FsZW5kYXI7XG59KGNvcmVfMS5MUENvcmUpKTtcbmV4cG9ydHMuQ2FsZW5kYXIgPSBDYWxlbmRhcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV2ZW50c18xID0gcmVxdWlyZShcImV2ZW50c1wiKTtcbnZhciBkYXRldGltZV8xID0gcmVxdWlyZShcIi4vZGF0ZXRpbWVcIik7XG52YXIgbGl0ZXBpY2tlcl8xID0gcmVxdWlyZShcIi4vbGl0ZXBpY2tlclwiKTtcbnZhciBMUENvcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExQQ29yZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMUENvcmUob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kYXRlUGlja2VkID0gW107XG4gICAgICAgIF90aGlzLmNhbGVuZGFycyA9IFtdO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgZWxlbWVudDogbnVsbCxcbiAgICAgICAgICAgIGVsZW1lbnRFbmQ6IG51bGwsXG4gICAgICAgICAgICBwYXJlbnRFbDogbnVsbCxcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogb2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgICAgICBmaXJzdERheTogMSxcbiAgICAgICAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQnLFxuICAgICAgICAgICAgbGFuZzogJ2VuLVVTJyxcbiAgICAgICAgICAgIGRlbGltaXRlcjogJyAtICcsXG4gICAgICAgICAgICBudW1iZXJPZk1vbnRoczogMSxcbiAgICAgICAgICAgIG51bWJlck9mQ29sdW1uczogMSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbnVsbCxcbiAgICAgICAgICAgIGVuZERhdGU6IG51bGwsXG4gICAgICAgICAgICB6SW5kZXg6IDk5OTksXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2F1dG8nLFxuICAgICAgICAgICAgc2VsZWN0Rm9yd2FyZDogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RCYWNrd2FyZDogZmFsc2UsXG4gICAgICAgICAgICBzcGxpdFZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgaW5saW5lTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBzaW5nbGVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgYXV0b0FwcGx5OiB0cnVlLFxuICAgICAgICAgICAgYWxsb3dSZXBpY2s6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dUb29sdGlwOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsVG9EYXRlOiB0cnVlLFxuICAgICAgICAgICAgbW9iaWxlRnJpZW5kbHk6IHRydWUsXG4gICAgICAgICAgICByZXNldEJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICBhdXRvUmVmcmVzaDogZmFsc2UsXG4gICAgICAgICAgICBsb2NrRGF5c0Zvcm1hdDogJ1lZWVktTU0tREQnLFxuICAgICAgICAgICAgbG9ja0RheXM6IFtdLFxuICAgICAgICAgICAgZGlzYWxsb3dMb2NrRGF5c0luUmFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgbG9ja0RheXNJbmNsdXNpdml0eTogJ1tdJyxcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkRGF5c0Zvcm1hdDogJ1lZWVktTU0tREQnLFxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWREYXlzOiBbXSxcbiAgICAgICAgICAgIGRyb3Bkb3duczoge1xuICAgICAgICAgICAgICAgIG1pblllYXI6IDE5OTAsXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgICAgICAgICBtYXhZZWFyOiBudWxsLFxuICAgICAgICAgICAgICAgIG1vbnRoczogZmFsc2UsXG4gICAgICAgICAgICAgICAgeWVhcnM6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IHtcbiAgICAgICAgICAgICAgICBhcHBseTogJ0FwcGx5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgICAgICAgIHByZXZpb3VzTW9udGg6ICc8c3ZnIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTcuOTE5IDBsMi43NDggMi42NjdMNS4zMzMgOGw1LjMzNCA1LjMzM0w3LjkxOSAxNiAwIDh6XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz48L3N2Zz4nLFxuICAgICAgICAgICAgICAgIG5leHRNb250aDogJzxzdmcgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjE2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMi43NDggMTZMMCAxMy4zMzMgNS4zMzMgOCAwIDIuNjY3IDIuNzQ4IDBsNy45MTkgOHpcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPjwvc3ZnPicsXG4gICAgICAgICAgICAgICAgcmVzZXQ6IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgd2lkdGg9XFxcIjI0XFxcIj5cXG4gICAgICAgIDxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiLz5cXG4gICAgICAgIDxwYXRoIGQ9XFxcIk0xMyAzYy00Ljk3IDAtOSA0LjAzLTkgOUgxbDMuODkgMy44OS4wNy4xNEw5IDEySDZjMC0zLjg3IDMuMTMtNyA3LTdzNyAzLjEzIDcgNy0zLjEzIDctNyA3Yy0xLjkzIDAtMy42OC0uNzktNC45NC0yLjA2bC0xLjQyIDEuNDJDOC4yNyAxOS45OSAxMC41MSAyMSAxMyAyMWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXptLTEgNXY1bDQuMjggMi41NC43Mi0xLjIxLTMuNS0yLjA4VjhIMTJ6XFxcIi8+XFxuICAgICAgPC9zdmc+XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcFRleHQ6IHtcbiAgICAgICAgICAgICAgICBvbmU6ICdkYXknLFxuICAgICAgICAgICAgICAgIG90aGVyOiAnZGF5cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLm9wdGlvbnMpLCBvcHRpb25zLmVsZW1lbnQuZGF0YXNldCk7XG4gICAgICAgIE9iamVjdC5rZXlzKF90aGlzLm9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnNbb3B0XSA9PT0gJ3RydWUnIHx8IF90aGlzLm9wdGlvbnNbb3B0XSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgIF90aGlzLm9wdGlvbnNbb3B0XSA9IF90aGlzLm9wdGlvbnNbb3B0XSA9PT0gJ3RydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGRyb3Bkb3ducyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5vcHRpb25zLmRyb3Bkb3ducyksIG9wdGlvbnMuZHJvcGRvd25zKTtcbiAgICAgICAgdmFyIGJ1dHRvblRleHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMub3B0aW9ucy5idXR0b25UZXh0KSwgb3B0aW9ucy5idXR0b25UZXh0KTtcbiAgICAgICAgdmFyIHRvb2x0aXBUZXh0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLm9wdGlvbnMudG9vbHRpcFRleHQpLCBvcHRpb25zLnRvb2x0aXBUZXh0KTtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5vcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgICAgIF90aGlzLm9wdGlvbnMuZHJvcGRvd25zID0gX19hc3NpZ24oe30sIGRyb3Bkb3ducyk7XG4gICAgICAgIF90aGlzLm9wdGlvbnMuYnV0dG9uVGV4dCA9IF9fYXNzaWduKHt9LCBidXR0b25UZXh0KTtcbiAgICAgICAgX3RoaXMub3B0aW9ucy50b29sdGlwVGV4dCA9IF9fYXNzaWduKHt9LCB0b29sdGlwVGV4dCk7XG4gICAgICAgIGlmICghX3RoaXMub3B0aW9ucy5lbGVtZW50RW5kKSB7XG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLmFsbG93UmVwaWNrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMubG9ja0RheXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLmxvY2tEYXlzID0gZGF0ZXRpbWVfMS5EYXRlVGltZS5jb252ZXJ0QXJyYXkoX3RoaXMub3B0aW9ucy5sb2NrRGF5cywgX3RoaXMub3B0aW9ucy5sb2NrRGF5c0Zvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMgPSBkYXRldGltZV8xLkRhdGVUaW1lLmNvbnZlcnRBcnJheShfdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cywgX3RoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXNGb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYSA9IF90aGlzLnBhcnNlSW5wdXQoKSwgc3RhcnRWYWx1ZSA9IF9hWzBdLCBlbmRWYWx1ZSA9IF9hWzFdO1xuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zdGFydERhdGUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgfHwgX3RoaXMub3B0aW9ucy5lbmREYXRlKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKF90aGlzLm9wdGlvbnMuc3RhcnREYXRlLCBfdGhpcy5vcHRpb25zLmZvcm1hdCwgX3RoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRWYWx1ZSAmJiBfdGhpcy5vcHRpb25zLmVuZERhdGUpIHtcbiAgICAgICAgICAgIGVuZFZhbHVlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoX3RoaXMub3B0aW9ucy5lbmREYXRlLCBfdGhpcy5vcHRpb25zLmZvcm1hdCwgX3RoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUgJiYgIWlzTmFOKHN0YXJ0VmFsdWUuZ2V0VGltZSgpKSkge1xuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5zdGFydERhdGUgPSBzdGFydFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSAmJiBlbmRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUgJiYgIWlzTmFOKGVuZFZhbHVlLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IGVuZFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgJiYgIShfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUpKSB7XG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLnNpbmdsZU1vZGVcbiAgICAgICAgICAgICYmICghKF90aGlzLm9wdGlvbnMuc3RhcnREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSlcbiAgICAgICAgICAgICAgICB8fCAhKF90aGlzLm9wdGlvbnMuZW5kRGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUpKSkge1xuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5zdGFydERhdGUgPSBudWxsO1xuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5lbmREYXRlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBfdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzOyBpZHggKz0gMSkge1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcbiAgICAgICAgICAgICAgICA/IF90aGlzLm9wdGlvbnMuc3RhcnREYXRlLmNsb25lKClcbiAgICAgICAgICAgICAgICA6IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKCk7XG4gICAgICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMuc3RhcnREYXRlICYmIChpZHggPT09IDAgfHwgX3RoaXMub3B0aW9ucy5zcGxpdFZpZXcpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1heERhdGUgPSBfdGhpcy5vcHRpb25zLm1heERhdGUgPyBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShfdGhpcy5vcHRpb25zLm1heERhdGUpIDogbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgbWluRGF0ZSA9IF90aGlzLm9wdGlvbnMubWluRGF0ZSA/IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKF90aGlzLm9wdGlvbnMubWluRGF0ZSkgOiBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXRNb250aHMgPSBfdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzIC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgaXNEYXRlUmFuZ2UgPSBtaW5EYXRlICYmIG1heERhdGUgJiYgZGF0ZS5pc0FmdGVyKG1heERhdGUpO1xuICAgICAgICAgICAgICAgIGlmIChpc0RhdGVSYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlID0gbWluRGF0ZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFtaW5EYXRlICYmIG1heERhdGUgJiYgZGF0ZS5pc0FmdGVyKG1heERhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSBtYXhEYXRlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgLSBvZmZzZXRNb250aHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgxKTtcbiAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgaWR4KTtcbiAgICAgICAgICAgIF90aGlzLmNhbGVuZGFyc1tpZHhdID0gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zaG93VG9vbHRpcCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMudG9vbHRpcFBsdXJhbFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucGx1cmFsU2VsZWN0b3IgPSBfdGhpcy5vcHRpb25zLnRvb2x0aXBQbHVyYWxTZWxlY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwbHVyYWxSdWxlcyA9IG5ldyBJbnRsLlBsdXJhbFJ1bGVzKF90aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsdXJhbFNlbGVjdG9yID0gcGx1cmFsUnVsZXMuc2VsZWN0LmJpbmQocGx1cmFsUnVsZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoX2IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGx1cmFsU2VsZWN0b3IgPSBmdW5jdGlvbiAoYXJnMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFyZzApID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnb25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnb3RoZXInO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExQQ29yZS5hZGQgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xuICAgICAgICBsaXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGVbbmFtZV0gPSBkYXRhO1xuICAgIH07XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBmdW5jdGlvbi1uYW1lXG4gICAgTFBDb3JlLnByb3RvdHlwZS5EYXRlVGltZSA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlLCBmb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSgpO1xuICAgIH07XG4gICAgTFBDb3JlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBsdWdpbnMgJiYgdGhpcy5vcHRpb25zLnBsdWdpbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICBpZiAobGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmhhc093blByb3BlcnR5KHBsdWdpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlW3BsdWdpbl0uaW5pdC5jYWxsKF90aGlzLCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJMaXRlcGlja2VyOiBwbHVnaW4gXFx1MDBBQlwiICsgcGx1Z2luICsgXCJcXHUwMEJCIG5vdCBmb3VuZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExQQ29yZS5wcm90b3R5cGUucGFyc2VJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRlbGltaXRlciA9IHRoaXMub3B0aW9ucy5kZWxpbWl0ZXI7XG4gICAgICAgIHZhciBkZWxpbWl0ZXJSZWdleCA9IG5ldyBSZWdFeHAoXCJcIiArIGRlbGltaXRlcik7XG4gICAgICAgIHZhciBzcGxpdHRlZFZhbHVlID0gdGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlLnNwbGl0KGRlbGltaXRlcilcbiAgICAgICAgICAgIDogW107XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICYmIHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlLmxlbmd0aFxuICAgICAgICAgICAgICAgICYmIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICYmIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlLCB0aGlzLm9wdGlvbnMuZm9ybWF0KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQudmFsdWUsIHRoaXMub3B0aW9ucy5mb3JtYXQpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICYmIGRlbGltaXRlclJlZ2V4LnRlc3QodGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUpXG4gICAgICAgICAgICAmJiBzcGxpdHRlZFZhbHVlLmxlbmd0aFxuICAgICAgICAgICAgJiYgc3BsaXR0ZWRWYWx1ZS5sZW5ndGggJSAyID09PSAwKSB7XG4gICAgICAgICAgICB2YXIgZDEgPSBzcGxpdHRlZFZhbHVlLnNsaWNlKDAsIHNwbGl0dGVkVmFsdWUubGVuZ3RoIC8gMikuam9pbihkZWxpbWl0ZXIpO1xuICAgICAgICAgICAgdmFyIGQyID0gc3BsaXR0ZWRWYWx1ZS5zbGljZShzcGxpdHRlZFZhbHVlLmxlbmd0aCAvIDIpLmpvaW4oZGVsaW1pdGVyKTtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZDEsIHRoaXMub3B0aW9ucy5mb3JtYXQpLFxuICAgICAgICAgICAgICAgIG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGQyLCB0aGlzLm9wdGlvbnMuZm9ybWF0KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH07XG4gICAgTFBDb3JlLnByb3RvdHlwZS5pc1Nob3duaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51aSAmJiB0aGlzLnVpLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJztcbiAgICB9O1xuICAgIExQQ29yZS5wcm90b3R5cGUuZmluZFBvc2l0aW9uID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgY2FsUmVjdCA9IHRoaXMudWkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICB2YXIgc2Nyb2xsWCA9IHdpbmRvdy5zY3JvbGxYIHx8IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICAgICAgdmFyIHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIHZhciB0b3AgPSAwO1xuICAgICAgICB2YXIgbGVmdCA9IDA7XG4gICAgICAgIGlmIChvcmllbnRhdGlvblswXSA9PT0gJ2F1dG8nIHx8ICEoL3RvcHxib3R0b20vLnRlc3Qob3JpZW50YXRpb25bMF0pKSkge1xuICAgICAgICAgICAgdG9wID0gcmVjdC5ib3R0b20gKyBzY3JvbGxZO1xuICAgICAgICAgICAgdmFyIGlzT3V0Qm91bmRzID0gcmVjdC5ib3R0b20gKyBjYWxSZWN0LmhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIHZhciBoYXNUb3BTcGFjZSA9IChyZWN0LnRvcCArIHNjcm9sbFkpIC0gY2FsUmVjdC5oZWlnaHQgPj0gY2FsUmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICBpZiAoaXNPdXRCb3VuZHMgJiYgaGFzVG9wU3BhY2UpIHtcbiAgICAgICAgICAgICAgICB0b3AgPSAocmVjdC50b3AgKyBzY3JvbGxZKSAtIGNhbFJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9wID0gcmVjdFtvcmllbnRhdGlvblswXV0gKyBzY3JvbGxZO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uWzBdID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgIHRvcCAtPSBjYWxSZWN0LmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoISgvbGVmdHxyaWdodC8udGVzdChvcmllbnRhdGlvblswXSkpICYmICghb3JpZW50YXRpb25bMV0gfHwgb3JpZW50YXRpb25bMV0gPT09ICdhdXRvJyB8fCAhKC9sZWZ0fHJpZ2h0Ly50ZXN0KG9yaWVudGF0aW9uWzFdKSkpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gcmVjdC5sZWZ0ICsgc2Nyb2xsWDtcbiAgICAgICAgICAgIHZhciBpc091dEJvdW5kcyA9IHJlY3QubGVmdCArIGNhbFJlY3Qud2lkdGggPiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIHZhciBoYXNMZWZ0U3BhY2UgPSAocmVjdC5yaWdodCArIHNjcm9sbFgpIC0gY2FsUmVjdC53aWR0aCA+PSAwO1xuICAgICAgICAgICAgaWYgKGlzT3V0Qm91bmRzICYmIGhhc0xlZnRTcGFjZSkge1xuICAgICAgICAgICAgICAgIGxlZnQgPSAocmVjdC5yaWdodCArIHNjcm9sbFgpIC0gY2FsUmVjdC53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICgvbGVmdHxyaWdodC8udGVzdChvcmllbnRhdGlvblswXSkpIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gcmVjdFtvcmllbnRhdGlvblswXV0gKyBzY3JvbGxYO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IHJlY3Rbb3JpZW50YXRpb25bMV1dICsgc2Nyb2xsWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvblswXSA9PT0gJ3JpZ2h0JyB8fCBvcmllbnRhdGlvblsxXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIGxlZnQgLT0gY2FsUmVjdC53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIExQQ29yZTtcbn0oZXZlbnRzXzEuRXZlbnRFbWl0dGVyKSk7XG5leHBvcnRzLkxQQ29yZSA9IExQQ29yZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERhdGVUaW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERhdGVUaW1lKGRhdGUsIGZvcm1hdCwgbGFuZykge1xuICAgICAgICBpZiAoZGF0ZSA9PT0gdm9pZCAwKSB7IGRhdGUgPSBudWxsOyB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSBudWxsOyB9XG4gICAgICAgIGlmIChsYW5nID09PSB2b2lkIDApIHsgbGFuZyA9ICdlbi1VUyc7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdvYmplY3QnICYmIGZvcm1hdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICAgIHRoaXMuZGF0ZUluc3RhbmNlID0gZm9ybWF0LnBhcnNlKGRhdGUgaW5zdGFuY2VvZiBEYXRlVGltZSA/IGRhdGUuY2xvbmUoKS50b0pTRGF0ZSgpIDogZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZUluc3RhbmNlID0gKERhdGVUaW1lLnBhcnNlRGF0ZVRpbWUoZGF0ZSwgZm9ybWF0LCBsYW5nKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlSW5zdGFuY2UgPSAoRGF0ZVRpbWUucGFyc2VEYXRlVGltZShkYXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVJbnN0YW5jZSA9IChEYXRlVGltZS5wYXJzZURhdGVUaW1lKG5ldyBEYXRlKCkpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhbmcgPSBsYW5nO1xuICAgIH1cbiAgICBEYXRlVGltZS5wYXJzZURhdGVUaW1lID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCwgbGFuZykge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSB2b2lkIDApIHsgZm9ybWF0ID0gJ1lZWVktTU0tREQnOyB9XG4gICAgICAgIGlmIChsYW5nID09PSB2b2lkIDApIHsgbGFuZyA9ICdlbi1VUyc7IH1cbiAgICAgICAgaWYgKCFkYXRlKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlVGltZSlcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmNsb25lKCkudG9KU0RhdGUoKTtcbiAgICAgICAgaWYgKC9eLT9cXGR7MTAsfSQvLnRlc3QoZGF0ZSkpXG4gICAgICAgICAgICByZXR1cm4gRGF0ZVRpbWUuZ2V0RGF0ZVplcm9UaW1lKG5ldyBEYXRlKE51bWJlcihkYXRlKSkpO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIG0gPSBudWxsO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25kaXRpb25hbC1hc3NpZ25tZW50XG4gICAgICAgICAgICB3aGlsZSAoKG0gPSBEYXRlVGltZS5yZWdleC5leGVjKGZvcm1hdCkpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobVsxXSA9PT0gJ1xcXFwnKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gZGVsZXRlIHdoZW4gcmVnZXhwIGxvb2tiZWhpbmRcbiAgICAgICAgICAgICAgICBtYXRjaGVzLnB1c2gobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZVBhdHRlcm4gPSB7XG4gICAgICAgICAgICAgICAgICAgIHllYXI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydE1vbnRoOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBsb25nTW9udGg6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRheTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNbMF0uaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVQYXR0ZXJuLnZhbHVlICs9ICcuKj8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMobWF0Y2hlcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwgayA9IF9iWzBdLCBtYXRjaCA9IF9iWzFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gTnVtYmVyKGspO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2MgPSBEYXRlVGltZS5mb3JtYXRQYXR0ZXJucyhtYXRjaFswXSwgbGFuZyksIGdyb3VwID0gX2MuZ3JvdXAsIHBhdHRlcm4gPSBfYy5wYXR0ZXJuO1xuICAgICAgICAgICAgICAgICAgICBkYXRlUGF0dGVybltncm91cF0gPSBrZXkgKyAxO1xuICAgICAgICAgICAgICAgICAgICBkYXRlUGF0dGVybi52YWx1ZSArPSBwYXR0ZXJuO1xuICAgICAgICAgICAgICAgICAgICBkYXRlUGF0dGVybi52YWx1ZSArPSAnLio/JzsgLy8gYW55IGRlbGltaXRlcnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGRhdGVSZWdleCA9IG5ldyBSZWdFeHAoXCJeXCIgKyBkYXRlUGF0dGVybi52YWx1ZSArIFwiJFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZVJlZ2V4LnRlc3QoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBkYXRlUmVnZXguZXhlYyhkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHllYXIgPSBOdW1iZXIoZFtkYXRlUGF0dGVybi55ZWFyXSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb250aCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRlUGF0dGVybi5tb250aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSBOdW1iZXIoZFtkYXRlUGF0dGVybi5tb250aF0pIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRlUGF0dGVybi5zaG9ydE1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aCA9IERhdGVUaW1lLnNob3J0TW9udGhzKGxhbmcpLmluZGV4T2YoZFtkYXRlUGF0dGVybi5zaG9ydE1vbnRoXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0ZVBhdHRlcm4ubG9uZ01vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aCA9IERhdGVUaW1lLmxvbmdNb250aHMobGFuZykuaW5kZXhPZihkW2RhdGVQYXR0ZXJuLmxvbmdNb250aF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXkgPSBOdW1iZXIoZFtkYXRlUGF0dGVybi5kYXldKSB8fCAxO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSwgMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBEYXRlVGltZS5nZXREYXRlWmVyb1RpbWUobmV3IERhdGUoZGF0ZSkpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUuY29udmVydEFycmF5ID0gZnVuY3Rpb24gKGFycmF5LCBmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAoZCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQubWFwKGZ1bmN0aW9uIChkMSkgeyByZXR1cm4gbmV3IERhdGVUaW1lKGQxLCBmb3JtYXQpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoZCwgZm9ybWF0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5nZXREYXRlWmVyb1RpbWUgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCAwLCAwLCAwLCAwKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnNob3J0TW9udGhzID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgcmV0dXJuIERhdGVUaW1lLk1PTlRIX0pTXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBuZXcgRGF0ZSgyMDE5LCB4KS50b0xvY2FsZVN0cmluZyhsYW5nLCB7IG1vbnRoOiAnc2hvcnQnIH0pOyB9KTtcbiAgICB9O1xuICAgIERhdGVUaW1lLmxvbmdNb250aHMgPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICByZXR1cm4gRGF0ZVRpbWUuTU9OVEhfSlNcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIG5ldyBEYXRlKDIwMTksIHgpLnRvTG9jYWxlU3RyaW5nKGxhbmcsIHsgbW9udGg6ICdsb25nJyB9KTsgfSk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5mb3JtYXRQYXR0ZXJucyA9IGZ1bmN0aW9uICh0b2tlbiwgbGFuZykge1xuICAgICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgICAgICBjYXNlICdZWSc6XG4gICAgICAgICAgICBjYXNlICdZWVlZJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBncm91cDogJ3llYXInLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIihcXFxcZHtcIiArIHRva2VuLmxlbmd0aCArIFwifSlcIixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICdtb250aCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46ICcoXFxcXGR7MSwyfSknLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlICdNTSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICdtb250aCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46ICcoXFxcXGR7Mn0pJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBncm91cDogJ3Nob3J0TW9udGgnLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIihcIiArIERhdGVUaW1lLnNob3J0TW9udGhzKGxhbmcpLmpvaW4oJ3wnKSArIFwiKVwiLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlICdNTU1NJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBncm91cDogJ2xvbmdNb250aCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiKFwiICsgRGF0ZVRpbWUubG9uZ01vbnRocyhsYW5nKS5qb2luKCd8JykgKyBcIilcIixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICdkYXknLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnKFxcXFxkezEsMn0pJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnREQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiAnZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJyhcXFxcZHsyfSknLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS50b0pTRGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLnRvTG9jYWxlU3RyaW5nKGFyZzAsIGFyZzEpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnRvRGF0ZVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLnRvRGF0ZVN0cmluZygpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldFNlY29uZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5nZXRTZWNvbmRzKCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0RGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2UuZ2V0RGF5KCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldFRpbWUoKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5nZXREYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2UuZ2V0RGF0ZSgpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldE1vbnRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2UuZ2V0TW9udGgoKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5nZXRGdWxsWWVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldEZ1bGxZZWFyKCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuc2V0TW9udGggPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5zZXRNb250aChhcmcpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnNldEhvdXJzID0gZnVuY3Rpb24gKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtcykge1xuICAgICAgICBpZiAoaG91cnMgPT09IHZvaWQgMCkgeyBob3VycyA9IDA7IH1cbiAgICAgICAgaWYgKG1pbnV0ZXMgPT09IHZvaWQgMCkgeyBtaW51dGVzID0gMDsgfVxuICAgICAgICBpZiAoc2Vjb25kcyA9PT0gdm9pZCAwKSB7IHNlY29uZHMgPSAwOyB9XG4gICAgICAgIGlmIChtcyA9PT0gdm9pZCAwKSB7IG1zID0gMDsgfVxuICAgICAgICB0aGlzLmRhdGVJbnN0YW5jZS5zZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcywgbXMpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnNldFNlY29uZHMgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5zZXRTZWNvbmRzKGFyZyk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuc2V0RGF0ZSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLnNldERhdGUoYXJnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5zZXRGdWxsWWVhciA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLnNldEZ1bGxZZWFyKGFyZyk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0V2VlayA9IGZ1bmN0aW9uIChmaXJzdERheSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gbmV3IERhdGUodGhpcy50aW1lc3RhbXAoKSk7XG4gICAgICAgIHZhciBkYXlOciA9ICh0aGlzLmdldERheSgpICsgKDcgLSBmaXJzdERheSkpICUgNztcbiAgICAgICAgdGFyZ2V0LnNldERhdGUodGFyZ2V0LmdldERhdGUoKSAtIGRheU5yKTtcbiAgICAgICAgdmFyIHN0YXJ0V2Vla2RheSA9IHRhcmdldC5nZXRUaW1lKCk7XG4gICAgICAgIHRhcmdldC5zZXRNb250aCgwLCAxKTtcbiAgICAgICAgaWYgKHRhcmdldC5nZXREYXkoKSAhPT0gZmlyc3REYXkpIHtcbiAgICAgICAgICAgIHRhcmdldC5zZXRNb250aCgwLCAxICsgKCg0IC0gdGFyZ2V0LmdldERheSgpKSArIDcpICUgNyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDEgKyBNYXRoLmNlaWwoKHN0YXJ0V2Vla2RheSAtIHRhcmdldC5nZXRUaW1lKCkpIC8gNjA0ODAwMDAwKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh0aGlzLnRvSlNEYXRlKCkpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmlzQmV0d2VlbiA9IGZ1bmN0aW9uIChkYXRlMSwgZGF0ZTIsIGluY2x1c2l2aXR5KSB7XG4gICAgICAgIGlmIChpbmNsdXNpdml0eSA9PT0gdm9pZCAwKSB7IGluY2x1c2l2aXR5ID0gJygpJzsgfVxuICAgICAgICBzd2l0Y2ggKGluY2x1c2l2aXR5KSB7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FzZSAnKCknOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVzdGFtcCgpID4gZGF0ZTEuZ2V0VGltZSgpICYmIHRoaXMudGltZXN0YW1wKCkgPCBkYXRlMi5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdbKSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZXN0YW1wKCkgPj0gZGF0ZTEuZ2V0VGltZSgpICYmIHRoaXMudGltZXN0YW1wKCkgPCBkYXRlMi5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICcoXSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZXN0YW1wKCkgPiBkYXRlMS5nZXRUaW1lKCkgJiYgdGhpcy50aW1lc3RhbXAoKSA8PSBkYXRlMi5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdbXSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZXN0YW1wKCkgPj0gZGF0ZTEuZ2V0VGltZSgpICYmIHRoaXMudGltZXN0YW1wKCkgPD0gZGF0ZTIuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuaXNCZWZvcmUgPSBmdW5jdGlvbiAoZGF0ZSwgdW5pdCkge1xuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cbiAgICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gdGhpcy5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgY2FzZSAneWVhcnMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgPiB0aGlzLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpc0JlZm9yZTogSW52YWxpZCB1bml0IScpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmlzU2FtZU9yQmVmb3JlID0gZnVuY3Rpb24gKGRhdGUsIHVuaXQpIHtcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmdldFRpbWUoKSA+PSB0aGlzLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPj0gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID49IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCAxKS5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpc1NhbWVPckJlZm9yZTogSW52YWxpZCB1bml0IScpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmlzQWZ0ZXIgPSBmdW5jdGlvbiAoZGF0ZSwgdW5pdCkge1xuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cbiAgICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGltZSgpID4gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgY2FzZSAneWVhcnMnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZ1bGxZZWFyKCkgPiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpc0FmdGVyOiBJbnZhbGlkIHVuaXQhJyk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuaXNTYW1lT3JBZnRlciA9IGZ1bmN0aW9uIChkYXRlLCB1bml0KSB7XG4gICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmRzJzsgfVxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUaW1lKCkgPj0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID49IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+PSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaXNTYW1lT3JBZnRlcjogSW52YWxpZCB1bml0IScpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmlzU2FtZSA9IGZ1bmN0aW9uIChkYXRlLCB1bml0KSB7XG4gICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmRzJzsgfVxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUaW1lKCkgPT09IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA9PT0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID09PSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaXNTYW1lOiBJbnZhbGlkIHVuaXQhJyk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGR1cmF0aW9uLCB1bml0KSB7XG4gICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmRzJzsgfVxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlY29uZHModGhpcy5nZXRTZWNvbmRzKCkgKyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuZ2V0RGF0ZSgpICsgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1vbnRoKHRoaXMuZ2V0TW9udGgoKSArIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgdW5pdCkge1xuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cbiAgICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWNvbmRzKHRoaXMuZ2V0U2Vjb25kcygpIC0gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZSh0aGlzLmdldERhdGUoKSAtIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNb250aCh0aGlzLmdldE1vbnRoKCkgLSBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZGlmZiA9IGZ1bmN0aW9uIChkYXRlLCB1bml0KSB7XG4gICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmRzJzsgfVxuICAgICAgICB2YXIgb25lRGF5ID0gMTAwMCAqIDYwICogNjAgKiAyNDtcbiAgICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRpbWUoKSAtIGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCh0aGlzLnRpbWVzdGFtcCgpIC0gZGF0ZS5nZXRUaW1lKCkpIC8gb25lRGF5KTtcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICAgICAgICAvLyBAVE9ET1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdCwgbGFuZykge1xuICAgICAgICBpZiAobGFuZyA9PT0gdm9pZCAwKSB7IGxhbmcgPSAnZW4tVVMnOyB9XG4gICAgICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdC5vdXRwdXQodGhpcy5jbG9uZSgpLnRvSlNEYXRlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXNwb25zZSA9ICcnO1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgICAgICB2YXIgbSA9IG51bGw7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uZGl0aW9uYWwtYXNzaWdubWVudFxuICAgICAgICB3aGlsZSAoKG0gPSBEYXRlVGltZS5yZWdleC5leGVjKGZvcm1hdCkpICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChtWzFdID09PSAnXFxcXCcpXG4gICAgICAgICAgICAgICAgY29udGludWU7IC8vIGRlbGV0ZSB3aGVuIHJlZ2V4cCBsb29rYmVoaW5kXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gobSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBhZGQgc3RhcnQgbGluZSBvZiB0b2tlbnMgYXJlIG5vdCBhdCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICBpZiAobWF0Y2hlc1swXS5pbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZSArPSBmb3JtYXQuc3Vic3RyaW5nKDAsIG1hdGNoZXNbMF0uaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKG1hdGNoZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwgayA9IF9iWzBdLCBtYXRjaCA9IF9iWzFdO1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBOdW1iZXIoayk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgKz0gdGhpcy5mb3JtYXRUb2tlbnMobWF0Y2hbMF0sIGxhbmcpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzW2tleSArIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlICs9IGZvcm1hdC5zdWJzdHJpbmcobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgsIG1hdGNoZXNba2V5ICsgMV0uaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhZGQgZW5kIGxpbmUgaWYgdG9rZW5zIGFyZSBub3QgYXQgdGhlIGVuZGluZ1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG1hdGNoZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSArPSBmb3JtYXQuc3Vic3RyaW5nKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIGVzY2FwZSBjaGFyYWN0ZXJzXG4gICAgICAgIHJldHVybiByZXNwb25zZS5yZXBsYWNlKC9cXFxcL2csICcnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS50aW1lc3RhbXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCksIDAsIDAsIDAsIDApLmdldFRpbWUoKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5mb3JtYXRUb2tlbnMgPSBmdW5jdGlvbiAodG9rZW4sIGxhbmcpIHtcbiAgICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAgICAgY2FzZSAnWVknOiByZXR1cm4gU3RyaW5nKHRoaXMuZ2V0RnVsbFllYXIoKSkuc2xpY2UoLTIpO1xuICAgICAgICAgICAgY2FzZSAnWVlZWSc6IHJldHVybiBTdHJpbmcodGhpcy5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgIGNhc2UgJ00nOiByZXR1cm4gU3RyaW5nKHRoaXMuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgY2FzZSAnTU0nOiByZXR1cm4gKFwiMFwiICsgKHRoaXMuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMik7XG4gICAgICAgICAgICBjYXNlICdNTU0nOiByZXR1cm4gRGF0ZVRpbWUuc2hvcnRNb250aHMobGFuZylbdGhpcy5nZXRNb250aCgpXTtcbiAgICAgICAgICAgIGNhc2UgJ01NTU0nOiByZXR1cm4gRGF0ZVRpbWUubG9uZ01vbnRocyhsYW5nKVt0aGlzLmdldE1vbnRoKCldO1xuICAgICAgICAgICAgY2FzZSAnRCc6IHJldHVybiBTdHJpbmcodGhpcy5nZXREYXRlKCkpO1xuICAgICAgICAgICAgY2FzZSAnREQnOiByZXR1cm4gKFwiMFwiICsgdGhpcy5nZXREYXRlKCkpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gcmVwbGFjZSB0byByZWdleHAgbG9va2JlaGluZCB3aGVuIG1vc3QgcG9wdWxhciBicm93c2VycyB3aWxsIHN1cHBvcnRcbiAgICAvLyBodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PWpzLXJlZ2V4cC1sb29rYmVoaW5kXG4gICAgLy8gLyg/PCFcXFxcKShZezIsNH18TXsxLDR9fER7MSwyfXxkezEsNH1dKS9nXG4gICAgRGF0ZVRpbWUucmVnZXggPSAvKFxcXFwpPyhZezIsNH18TXsxLDR9fER7MSwyfXxkezEsNH0pL2c7XG4gICAgRGF0ZVRpbWUuTU9OVEhfSlMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExXTtcbiAgICByZXR1cm4gRGF0ZVRpbWU7XG59KCkpO1xuZXhwb3J0cy5EYXRlVGltZSA9IERhdGVUaW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbGl0ZXBpY2tlcl8xID0gcmVxdWlyZShcIi4vbGl0ZXBpY2tlclwiKTtcbmV4cG9ydHMuTGl0ZXBpY2tlciA9IGxpdGVwaWNrZXJfMS5MaXRlcGlja2VyO1xucmVxdWlyZShcIi4vbWV0aG9kc1wiKTtcbndpbmRvdy5MaXRlcGlja2VyID0gbGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBsaXRlcGlja2VyXzEuTGl0ZXBpY2tlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjYWxlbmRhcl8xID0gcmVxdWlyZShcIi4vY2FsZW5kYXJcIik7XG52YXIgZGF0ZXRpbWVfMSA9IHJlcXVpcmUoXCIuL2RhdGV0aW1lXCIpO1xudmFyIHN0eWxlID0gcmVxdWlyZShcIi4vc2Nzcy9tYWluLnNjc3NcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIExpdGVwaWNrZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExpdGVwaWNrZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGl0ZXBpY2tlcihvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnByZXZlbnRDbGljayA9IGZhbHNlO1xuICAgICAgICAvL1xuICAgICAgICBfdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2Nyb2xsVG9EYXRlID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2Nyb2xsVG9EYXRlKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IHRoaXMub3B0aW9ucy5zdGFydERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lID8gdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZS5jbG9uZSgpIDogbnVsbDtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICB2YXIgZW5kRGF0ZSA9IHRoaXMub3B0aW9ucy5lbmREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSA/IHRoaXMub3B0aW9ucy5lbmREYXRlLmNsb25lKCkgOiBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGFydERhdGUgJiYgKCFlbCB8fCBlbCA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgc3RhcnREYXRlLnNldERhdGUoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0gPSBzdGFydERhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsICYmIHRoaXMub3B0aW9ucy5lbmREYXRlICYmIGVsID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xuICAgICAgICAgICAgICAgIGVuZERhdGUuc2V0RGF0ZSgxKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzID4gMSAmJiBlbmREYXRlLmlzQWZ0ZXIoc3RhcnREYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBlbmREYXRlLnNldE1vbnRoKGVuZERhdGUuZ2V0TW9udGgoKSAtICh0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHMgLSAxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzWzBdID0gZW5kRGF0ZS5jbG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICAgICAgdGhpcy51aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnVpLmNsYXNzTmFtZSA9IHN0eWxlLmxpdGVwaWNrZXI7XG4gICAgICAgIHRoaXMudWkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy51aS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5vbk1vdXNlRW50ZXIuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudWkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvUmVmcmVzaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25JbnB1dC5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25JbnB1dC5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbklucHV0LmJpbmQodGhpcyksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFyZW50RWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFyZW50RWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnRFbC5hcHBlbmRDaGlsZCh0aGlzLnVpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLnBhcmVudEVsKS5hcHBlbmRDaGlsZCh0aGlzLnVpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLnVpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMudWkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy51aSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dCgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2V0dXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZXR1cC5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnVwZGF0ZUlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgc3RhcnREYXRlID0gdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZTtcbiAgICAgICAgdmFyIGVuZERhdGUgPSB0aGlzLm9wdGlvbnMuZW5kRGF0ZTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmIHN0YXJ0RGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUgPSBzdGFydERhdGUuZm9ybWF0KHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgJiYgc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgICAgICAgIHZhciBzdGFydFZhbHVlID0gc3RhcnREYXRlLmZvcm1hdCh0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgICAgICB2YXIgZW5kVmFsdWUgPSBlbmREYXRlLmZvcm1hdCh0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUgPSBzdGFydFZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLnZhbHVlID0gZW5kVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZSA9IFwiXCIgKyBzdGFydFZhbHVlICsgdGhpcy5vcHRpb25zLmRlbGltaXRlciArIGVuZFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghc3RhcnREYXRlICYmICFlbmREYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLmlzU2FtZVBpY2tlciA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgcGlja2VyID0gZWwuY2xvc2VzdChcIi5cIiArIHN0eWxlLmxpdGVwaWNrZXIpO1xuICAgICAgICByZXR1cm4gcGlja2VyID09PSB0aGlzLnVpO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdWxkU2hvd24gPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuICFlbC5kaXNhYmxlZCAmJiAoZWwgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50XG4gICAgICAgICAgICB8fCAodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQgJiYgZWwgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50RW5kKSk7XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zaG91bGRSZXNldERhdGVQaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSB8fCB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAyO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdWxkU3dhcERhdGVQaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAyXG4gICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWRbMF0uZ2V0VGltZSgpID4gdGhpcy5kYXRlUGlja2VkWzFdLmdldFRpbWUoKTtcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3VsZENoZWNrTG9ja0RheXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZGlzYWxsb3dMb2NrRGF5c0luUmFuZ2VcbiAgICAgICAgICAgICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDI7XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCB8fCAhdGhpcy51aSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsaWNrIG9uIGVsZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkU2hvd24odGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5zaG93KHRhcmdldCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xpY2sgb3V0c2lkZSBwaWNrZXJcbiAgICAgICAgaWYgKCF0YXJnZXQuY2xvc2VzdChcIi5cIiArIHN0eWxlLmxpdGVwaWNrZXIpICYmIHRoaXMuaXNTaG93bmluZygpKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNTYW1lUGlja2VyKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXQoJ2JlZm9yZTpjbGljaycsIHRhcmdldCk7XG4gICAgICAgIGlmICh0aGlzLnByZXZlbnRDbGljaykge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50Q2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGljayBvbiBkYXRlXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmRheUl0ZW0pKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5pc0xvY2tlZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRSZXNldERhdGVQaWNrZWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VkW3RoaXMuZGF0ZVBpY2tlZC5sZW5ndGhdID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGFyZ2V0LmRhdGFzZXQudGltZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRTd2FwRGF0ZVBpY2tlZCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBEYXRlID0gdGhpcy5kYXRlUGlja2VkWzFdLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VkWzFdID0gdGhpcy5kYXRlUGlja2VkWzBdLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VkWzBdID0gdGVtcERhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZENoZWNrTG9ja0RheXMoKSkge1xuICAgICAgICAgICAgICAgIHZhciBsb2NrZWQgPSB1dGlsc18xLnJhbmdlSXNMb2NrZWQodGhpcy5kYXRlUGlja2VkLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChsb2NrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpyYW5nZScsIHRoaXMuZGF0ZVBpY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoWydwcmVzZWxlY3QnXSwgX19zcHJlYWRBcnJheXModGhpcy5kYXRlUGlja2VkKS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuY2xvbmUoKTsgfSkpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b0FwcGx5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuZGF0ZVBpY2tlZFswXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghdGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGVSYW5nZSh0aGlzLmRhdGVQaWNrZWRbMF0sIHRoaXMuZGF0ZVBpY2tlZFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGljayBvbiBidXR0b24gcHJldmlvdXMgbW9udGhcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuYnV0dG9uUHJldmlvdXNNb250aCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBpZHggPSAwO1xuICAgICAgICAgICAgdmFyIG51bWJlck9mTW9udGhzID0gdGhpcy5vcHRpb25zLnN3aXRjaGluZ01vbnRocyB8fCB0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHM7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xuICAgICAgICAgICAgICAgIHZhciBtb250aEl0ZW0gPSB0YXJnZXQuY2xvc2VzdChcIi5cIiArIHN0eWxlLm1vbnRoSXRlbSk7XG4gICAgICAgICAgICAgICAgaWR4ID0gdXRpbHNfMS5maW5kTmVzdGVkTW9udGhJdGVtKG1vbnRoSXRlbSk7XG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHMgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbaWR4XS5zZXRNb250aCh0aGlzLmNhbGVuZGFyc1tpZHhdLmdldE1vbnRoKCkgLSBudW1iZXJPZk1vbnRocyk7XG4gICAgICAgICAgICB0aGlzLmdvdG9EYXRlKHRoaXMuY2FsZW5kYXJzW2lkeF0sIGlkeCk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTptb250aCcsIHRoaXMuY2FsZW5kYXJzW2lkeF0sIGlkeCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xpY2sgb24gYnV0dG9uIG5leHQgbW9udGhcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuYnV0dG9uTmV4dE1vbnRoKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZNb250aHMgPSB0aGlzLm9wdGlvbnMuc3dpdGNoaW5nTW9udGhzIHx8IHRoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocztcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3BsaXRWaWV3KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vbnRoSXRlbSA9IHRhcmdldC5jbG9zZXN0KFwiLlwiICsgc3R5bGUubW9udGhJdGVtKTtcbiAgICAgICAgICAgICAgICBpZHggPSB1dGlsc18xLmZpbmROZXN0ZWRNb250aEl0ZW0obW9udGhJdGVtKTtcbiAgICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1tpZHhdLnNldE1vbnRoKHRoaXMuY2FsZW5kYXJzW2lkeF0uZ2V0TW9udGgoKSArIG51bWJlck9mTW9udGhzKTtcbiAgICAgICAgICAgIHRoaXMuZ290b0RhdGUodGhpcy5jYWxlbmRhcnNbaWR4XSwgaWR4KTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1vbnRoJywgdGhpcy5jYWxlbmRhcnNbaWR4XSwgaWR4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGljayBvbiBidXR0b24gY2FuY2VsXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmJ1dHRvbkNhbmNlbCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdidXR0b246Y2FuY2VsJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xpY2sgb24gYnV0dG9uIGFwcGx5XG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmJ1dHRvbkFwcGx5KSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGUodGhpcy5kYXRlUGlja2VkWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRlUmFuZ2UodGhpcy5kYXRlUGlja2VkWzBdLCB0aGlzLmRhdGVQaWNrZWRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2J1dHRvbjphcHBseScsIHRoaXMub3B0aW9ucy5zdGFydERhdGUsIHRoaXMub3B0aW9ucy5lbmREYXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvd1Rvb2x0aXAgPSBmdW5jdGlvbiAoZWxlbWVudCwgdGV4dCkge1xuICAgICAgICB2YXIgdG9vbHRpcCA9IHRoaXMudWkucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLmNvbnRhaW5lclRvb2x0aXApO1xuICAgICAgICB0b29sdGlwLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIHRvb2x0aXAuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgdmFyIHBpY2tlckJDUiA9IHRoaXMudWkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB0b29sdGlwQkNSID0gdG9vbHRpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGRheUJDUiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB0b3AgPSBkYXlCQ1IudG9wO1xuICAgICAgICB2YXIgbGVmdCA9IGRheUJDUi5sZWZ0O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUgJiYgdGhpcy5vcHRpb25zLnBhcmVudEVsKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50QkNSID0gdGhpcy51aS5wYXJlbnROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdG9wIC09IHBhcmVudEJDUi50b3A7XG4gICAgICAgICAgICBsZWZ0IC09IHBhcmVudEJDUi5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9wIC09IHBpY2tlckJDUi50b3A7XG4gICAgICAgICAgICBsZWZ0IC09IHBpY2tlckJDUi5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIHRvcCAtPSB0b29sdGlwQkNSLmhlaWdodDtcbiAgICAgICAgbGVmdCAtPSB0b29sdGlwQkNSLndpZHRoIC8gMjtcbiAgICAgICAgbGVmdCArPSBkYXlCQ1Iud2lkdGggLyAyO1xuICAgICAgICB0b29sdGlwLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcbiAgICAgICAgdG9vbHRpcC5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcbiAgICAgICAgdGhpcy5lbWl0KCd0b29sdGlwJywgdG9vbHRpcCwgZWxlbWVudCk7XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5oaWRlVG9vbHRpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRvb2x0aXAgPSB0aGlzLnVpLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5jb250YWluZXJUb29sdGlwKTtcbiAgICAgICAgdG9vbHRpcC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zaG91bGRBbGxvd01vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZVxuICAgICAgICAgICAgJiYgIWVsLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5pc0xvY2tlZCk7XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zaG91bGRBbGxvd1JlcGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kXG4gICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuYWxsb3dSZXBpY2tcbiAgICAgICAgICAgICYmIHRoaXMub3B0aW9ucy5zdGFydERhdGVcbiAgICAgICAgICAgICYmIHRoaXMub3B0aW9ucy5lbmREYXRlO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuaXNEYXlJdGVtID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuZGF5SXRlbSk7XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGF5SXRlbSh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkQWxsb3dNb3VzZUVudGVyKHRhcmdldCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZEFsbG93UmVwaWNrKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmlnZ2VyRWxlbWVudCA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VkWzBdID0gdGhpcy5vcHRpb25zLmVuZERhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50cmlnZ2VyRWxlbWVudCA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VkWzBdID0gdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWQubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZUVsZW1lbnQgPSB0aGlzLnVpXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5kYXlJdGVtICsgXCJbZGF0YS10aW1lPVxcXCJcIiArIHRoaXMuZGF0ZVBpY2tlZFswXS5nZXRUaW1lKCkgKyBcIlxcXCJdXCIpO1xuICAgICAgICAgICAgdmFyIGRhdGUxXzEgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKTtcbiAgICAgICAgICAgIHZhciBkYXRlMl8xID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGFyZ2V0LmRhdGFzZXQudGltZSk7XG4gICAgICAgICAgICB2YXIgaXNGbGlwcGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoZGF0ZTFfMS5nZXRUaW1lKCkgPiBkYXRlMl8xLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wRGF0ZSA9IGRhdGUxXzEuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBkYXRlMV8xID0gZGF0ZTJfMS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGRhdGUyXzEgPSB0ZW1wRGF0ZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGlzRmxpcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWxsRGF5SXRlbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLnVpLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBzdHlsZS5kYXlJdGVtKSk7XG4gICAgICAgICAgICBhbGxEYXlJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkLmRhdGFzZXQudGltZSk7XG4gICAgICAgICAgICAgICAgdmFyIGRheSA9IF90aGlzLnJlbmRlckRheShkYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5pc0JldHdlZW4oZGF0ZTFfMSwgZGF0ZTJfMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNJblJhbmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZC5jbGFzc05hbWUgPSBkYXkuY2xhc3NOYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0VuZERhdGUpO1xuICAgICAgICAgICAgaWYgKGlzRmxpcHBlZCkge1xuICAgICAgICAgICAgICAgIGlmIChzdGFydERhdGVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0ZsaXBwZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0ZsaXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0RGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlLmlzRmxpcHBlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlLmlzRmxpcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dUb29sdGlwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRheXMgPSBkYXRlMl8xLmRpZmYoZGF0ZTFfMSwgJ2RheScpICsgMTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy50b29sdGlwTnVtYmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheXMgPSB0aGlzLm9wdGlvbnMudG9vbHRpcE51bWJlci5jYWxsKHRoaXMsIGRheXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF5cyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsdXJhbE5hbWUgPSB0aGlzLnBsdXJhbFNlbGVjdG9yKGRheXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGx1cmFsVGV4dCA9IHRoaXMub3B0aW9ucy50b29sdGlwVGV4dFtwbHVyYWxOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMudG9vbHRpcFRleHRbcGx1cmFsTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJbXCIgKyBwbHVyYWxOYW1lICsgXCJdXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gZGF5cyArIFwiIFwiICsgcGx1cmFsVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbHRpcCh0YXJnZXQsIHRleHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBmaXggYnVnIGlPUyAxMC0xMiAtIGh0dHBzOi8vZ2l0aHViLmNvbS93YWtpcmluL0xpdGVwaWNrZXIvaXNzdWVzLzEyNFxuICAgICAgICAgICAgICAgICAgICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlEZXZpY2UgPSAvKGlwaG9uZXxpcGFkKS9pLnRlc3QodWEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaU9TMTFvcjEyID0gL09TIDEoWzAtMl0pL2kudGVzdCh1YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpRGV2aWNlICYmIGlPUzExb3IxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlVG9vbHRpcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmFsbG93UmVwaWNrXG4gICAgICAgICAgICB8fCAodGhpcy5vcHRpb25zLmFsbG93UmVwaWNrICYmICF0aGlzLm9wdGlvbnMuc3RhcnREYXRlICYmICF0aGlzLm9wdGlvbnMuZW5kRGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLm9uSW5wdXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wYXJzZUlucHV0KCksIHN0YXJ0VmFsdWUgPSBfYVswXSwgZW5kVmFsdWUgPSBfYVsxXTtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGVGb3JtYXQgPSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBzdGFydFZhbHVlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZVxuICAgICAgICAgICAgICAgICYmIGVuZFZhbHVlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZVxuICAgICAgICAgICAgICAgICYmIHN0YXJ0VmFsdWUuZm9ybWF0KGRhdGVGb3JtYXQpID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgICYmIGVuZFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUpIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBzdGFydFZhbHVlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZVxuICAgICAgICAgICAgICAgICYmIHN0YXJ0VmFsdWUuZm9ybWF0KGRhdGVGb3JtYXQpID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBzdGFydFZhbHVlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZVxuICAgICAgICAgICAgICAgICYmIGVuZFZhbHVlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZVxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICAgICAgJiYgXCJcIiArIHN0YXJ0VmFsdWUuZm9ybWF0KGRhdGVGb3JtYXQpICsgdGhpcy5vcHRpb25zLmRlbGltaXRlciArIGVuZFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgIGlmIChlbmRWYWx1ZSAmJiBzdGFydFZhbHVlLmdldFRpbWUoKSA+IGVuZFZhbHVlLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wRGF0ZSA9IHN0YXJ0VmFsdWUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBzdGFydFZhbHVlID0gZW5kVmFsdWUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBlbmRWYWx1ZSA9IHRlbXBEYXRlLmNsb25lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoc3RhcnRWYWx1ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICAgICAgaWYgKGVuZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVuZERhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShlbmRWYWx1ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnB1dCgpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIHZhciBkYXRlR28gPSBzdGFydFZhbHVlLmNsb25lKCk7XG4gICAgICAgICAgICB2YXIgbW9udGhJZHggPSAwO1xuICAgICAgICAgICAgdmFyIGlzU3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kKSB7XG4gICAgICAgICAgICAgICAgaXNTdGFydCA9IHN0YXJ0VmFsdWUuZm9ybWF0KGRhdGVGb3JtYXQpID09PSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpc1N0YXJ0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnN0YXJ0c1dpdGgoc3RhcnRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1N0YXJ0KSB7XG4gICAgICAgICAgICAgICAgZGF0ZUdvID0gZW5kVmFsdWUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBtb250aElkeCA9IHRoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocyAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3NlbGVjdGVkJywgdGhpcy5nZXRTdGFydERhdGUoKSwgdGhpcy5nZXRFbmREYXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5nb3RvRGF0ZShkYXRlR28sIG1vbnRoSWR4KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIExpdGVwaWNrZXI7XG59KGNhbGVuZGFyXzEuQ2FsZW5kYXIpKTtcbmV4cG9ydHMuTGl0ZXBpY2tlciA9IExpdGVwaWNrZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGF0ZXRpbWVfMSA9IHJlcXVpcmUoXCIuL2RhdGV0aW1lXCIpO1xudmFyIGxpdGVwaWNrZXJfMSA9IHJlcXVpcmUoXCIuL2xpdGVwaWNrZXJcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwgPT09IHZvaWQgMCkgeyBlbCA9IG51bGw7IH1cbiAgICB0aGlzLmVtaXQoJ2JlZm9yZTpzaG93JywgZWwpO1xuICAgIHZhciBlbGVtZW50ID0gZWwgPyBlbCA6IHRoaXMub3B0aW9ucy5lbGVtZW50O1xuICAgIHRoaXMudHJpZ2dlckVsZW1lbnQgPSBlbGVtZW50O1xuICAgIGlmICh0aGlzLmlzU2hvd25pbmcoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSkge1xuICAgICAgICB0aGlzLnVpLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgdGhpcy51aS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHRoaXMudWkuc3R5bGUudG9wID0gbnVsbDtcbiAgICAgICAgdGhpcy51aS5zdHlsZS5sZWZ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy51aS5zdHlsZS5ib3R0b20gPSBudWxsO1xuICAgICAgICB0aGlzLnVpLnN0eWxlLnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNjcm9sbFRvRGF0ZShlbCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLnVpLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0aGlzLnVpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMudWkuc3R5bGUuekluZGV4ID0gdGhpcy5vcHRpb25zLnpJbmRleDtcbiAgICB2YXIgcG9zaXRpb24gPSB0aGlzLmZpbmRQb3NpdGlvbihlbGVtZW50KTtcbiAgICB0aGlzLnVpLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcCArIFwicHhcIjtcbiAgICB0aGlzLnVpLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgXCJweFwiO1xuICAgIHRoaXMudWkuc3R5bGUucmlnaHQgPSBudWxsO1xuICAgIHRoaXMudWkuc3R5bGUuYm90dG9tID0gbnVsbDtcbiAgICB0aGlzLmVtaXQoJ3Nob3cnLCBlbCk7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzU2hvd25pbmcoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPSAwO1xuICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5lbWl0KCdoaWRlJyk7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmdldERhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnREYXRlKCk7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmdldFN0YXJ0RGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZS5jbG9uZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuZ2V0RW5kRGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVuZERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5lbmREYXRlLmNsb25lKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zZXREYXRlID0gZnVuY3Rpb24gKGRhdGUsIGZvcmNlKSB7XG4gICAgaWYgKGZvcmNlID09PSB2b2lkIDApIHsgZm9yY2UgPSBmYWxzZTsgfVxuICAgIHZhciBkID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgIHZhciBpc0xvY2tlZCA9IHV0aWxzXzEuZGF0ZUlzTG9ja2VkKGQsIHRoaXMub3B0aW9ucywgW2RdKTtcbiAgICBpZiAoaXNMb2NrZWQgJiYgIWZvcmNlKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6ZGF0ZScsIGQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGFydERhdGUoZGF0ZSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXQoJ3NlbGVjdGVkJywgdGhpcy5nZXREYXRlKCkpO1xuICAgIH1cbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0U3RhcnREYXRlID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICBpZiAoIWRhdGUpXG4gICAgICAgIHJldHVybjtcbiAgICB0aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0RW5kRGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgaWYgKCFkYXRlKVxuICAgICAgICByZXR1cm47XG4gICAgdGhpcy5vcHRpb25zLmVuZERhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGFydERhdGUuZ2V0VGltZSgpID4gdGhpcy5vcHRpb25zLmVuZERhdGUuZ2V0VGltZSgpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmREYXRlID0gdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZS5jbG9uZSgpO1xuICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldERhdGVSYW5nZSA9IGZ1bmN0aW9uIChkYXRlMSwgZGF0ZTIsIGZvcmNlKSB7XG4gICAgaWYgKGZvcmNlID09PSB2b2lkIDApIHsgZm9yY2UgPSBmYWxzZTsgfVxuICAgIC8vIHN0b3AgcmVwaWNraW5nIGJ5IHJlc2V0dGluZyB0aGUgdHJpZ2dlciBlbGVtZW50XG4gICAgdGhpcy50cmlnZ2VyRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB2YXIgZDEgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlMSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgIHZhciBkMiA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUyLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgdmFyIGlzTG9ja2VkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhbGxvd0xvY2tEYXlzSW5SYW5nZSkge1xuICAgICAgICBpc0xvY2tlZCA9IHV0aWxzXzEucmFuZ2VJc0xvY2tlZChbZDEsIGQyXSwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlzTG9ja2VkID0gdXRpbHNfMS5kYXRlSXNMb2NrZWQoZDEsIHRoaXMub3B0aW9ucywgW2QxLCBkMl0pXG4gICAgICAgICAgICB8fCB1dGlsc18xLmRhdGVJc0xvY2tlZChkMiwgdGhpcy5vcHRpb25zLCBbZDEsIGQyXSk7XG4gICAgfVxuICAgIGlmIChpc0xvY2tlZCAmJiAhZm9yY2UpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpyYW5nZScsIFtkMSwgZDJdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGQxKTtcbiAgICAgICAgdGhpcy5zZXRFbmREYXRlKGQyKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcbiAgICAgICAgdGhpcy5lbWl0KCdzZWxlY3RlZCcsIHRoaXMuZ2V0U3RhcnREYXRlKCksIHRoaXMuZ2V0RW5kRGF0ZSgpKTtcbiAgICB9XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmdvdG9EYXRlID0gZnVuY3Rpb24gKGRhdGUsIGlkeCkge1xuICAgIGlmIChpZHggPT09IHZvaWQgMCkgeyBpZHggPSAwOyB9XG4gICAgdmFyIHRvRGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUpO1xuICAgIHRvRGF0ZS5zZXREYXRlKDEpO1xuICAgIHRoaXMuY2FsZW5kYXJzW2lkeF0gPSB0b0RhdGUuY2xvbmUoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zZXRMb2NrRGF5cyA9IGZ1bmN0aW9uIChhcnJheSkge1xuICAgIHRoaXMub3B0aW9ucy5sb2NrRGF5cyA9IGRhdGV0aW1lXzEuRGF0ZVRpbWUuY29udmVydEFycmF5KGFycmF5LCB0aGlzLm9wdGlvbnMubG9ja0RheXNGb3JtYXQpO1xuICAgIHRoaXMucmVuZGVyKCk7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldEhpZ2hsaWdodGVkRGF5cyA9IGZ1bmN0aW9uIChhcnJheSkge1xuICAgIHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMgPSBkYXRldGltZV8xLkRhdGVUaW1lLmNvbnZlcnRBcnJheShhcnJheSwgdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5c0Zvcm1hdCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgZGVsZXRlIG9wdGlvbnMuZWxlbWVudDtcbiAgICBkZWxldGUgb3B0aW9ucy5lbGVtZW50RW5kO1xuICAgIGRlbGV0ZSBvcHRpb25zLnBhcmVudEVsO1xuICAgIGlmIChvcHRpb25zLnN0YXJ0RGF0ZSkge1xuICAgICAgICBvcHRpb25zLnN0YXJ0RGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG9wdGlvbnMuc3RhcnREYXRlLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmVuZERhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5lbmREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUob3B0aW9ucy5lbmREYXRlLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgfVxuICAgIHZhciBkcm9wZG93bnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zLmRyb3Bkb3ducyksIG9wdGlvbnMuZHJvcGRvd25zKTtcbiAgICB2YXIgYnV0dG9uVGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dCksIG9wdGlvbnMuYnV0dG9uVGV4dCk7XG4gICAgdmFyIHRvb2x0aXBUZXh0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy50b29sdGlwVGV4dCksIG9wdGlvbnMudG9vbHRpcFRleHQpO1xuICAgIHRoaXMub3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICB0aGlzLm9wdGlvbnMuZHJvcGRvd25zID0gX19hc3NpZ24oe30sIGRyb3Bkb3ducyk7XG4gICAgdGhpcy5vcHRpb25zLmJ1dHRvblRleHQgPSBfX2Fzc2lnbih7fSwgYnV0dG9uVGV4dCk7XG4gICAgdGhpcy5vcHRpb25zLnRvb2x0aXBUZXh0ID0gX19hc3NpZ24oe30sIHRvb2x0aXBUZXh0KTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgJiYgISh0aGlzLm9wdGlvbnMuc3RhcnREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSkpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmREYXRlID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZVxuICAgICAgICAmJiAoISh0aGlzLm9wdGlvbnMuc3RhcnREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSlcbiAgICAgICAgICAgIHx8ICEodGhpcy5vcHRpb25zLmVuZERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lKSkpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmREYXRlID0gbnVsbDtcbiAgICB9XG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzOyBpZHggKz0gMSkge1xuICAgICAgICB2YXIgZGF0ZSA9IHRoaXMub3B0aW9ucy5zdGFydERhdGVcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZS5jbG9uZSgpXG4gICAgICAgICAgICA6IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKCk7XG4gICAgICAgIGRhdGUuc2V0RGF0ZSgxKTtcbiAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBpZHgpO1xuICAgICAgICB0aGlzLmNhbGVuZGFyc1tpZHhdID0gZGF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5sb2NrRGF5cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmxvY2tEYXlzID0gZGF0ZXRpbWVfMS5EYXRlVGltZS5jb252ZXJ0QXJyYXkodGhpcy5vcHRpb25zLmxvY2tEYXlzLCB0aGlzLm9wdGlvbnMubG9ja0RheXNGb3JtYXQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cyA9IGRhdGV0aW1lXzEuRGF0ZVRpbWUuY29udmVydEFycmF5KHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMsIHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXNGb3JtYXQpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSkge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJbnB1dCgpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5jbGVhclNlbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IG51bGw7XG4gICAgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9IDA7XG4gICAgdGhpcy51cGRhdGVJbnB1dCgpO1xuICAgIGlmICh0aGlzLmlzU2hvd25pbmcoKSkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICB0aGlzLmVtaXQoJ2NsZWFyOnNlbGVjdGlvbicpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnVpICYmIHRoaXMudWkucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLnVpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy51aSk7XG4gICAgICAgIHRoaXMudWkgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knKTtcbn07XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9kdHMtY3NzLW1vZHVsZXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydEF0VG9wKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICAgICAgICAgIHZhciBsYXN0SW5zZXJ0ZWRFbGVtZW50ID0gd2luZG93Ll9sYXN0RWxlbWVudEluc2VydGVkQnlTdHlsZUxvYWRlcjtcblxuICAgICAgICAgICAgICAgIGlmICghd2luZG93LmRpc2FibGVMaXRlcGlja2VyU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWxhc3RJbnNlcnRlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShlbGVtZW50LCBwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RJbnNlcnRlZEVsZW1lbnQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShlbGVtZW50LCBsYXN0SW5zZXJ0ZWRFbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuX2xhc3RFbGVtZW50SW5zZXJ0ZWRCeVN0eWxlTG9hZGVyID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBmaW5kTmVzdGVkTW9udGhJdGVtKG1vbnRoSXRlbSkge1xuICAgIHZhciBjaGlsZHJlbiA9IG1vbnRoSXRlbS5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkgPSBpICsgMSkge1xuICAgICAgICB2YXIgY3VyTm9kZSA9IGNoaWxkcmVuLml0ZW0oaSk7XG4gICAgICAgIGlmIChjdXJOb2RlID09PSBtb250aEl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuZXhwb3J0cy5maW5kTmVzdGVkTW9udGhJdGVtID0gZmluZE5lc3RlZE1vbnRoSXRlbTtcbmZ1bmN0aW9uIGRhdGVJc0xvY2tlZChkYXRlLCBvcHRpb25zLCBwaWNrZWREYXRlcykge1xuICAgIHZhciBpc0xvY2tlZCA9IGZhbHNlO1xuICAgIGlmIChvcHRpb25zLmxvY2tEYXlzLmxlbmd0aCkge1xuICAgICAgICBpc0xvY2tlZCA9IG9wdGlvbnMubG9ja0RheXNcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmIChkIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5pc0JldHdlZW4oZFswXSwgZFsxXSwgb3B0aW9ucy5sb2NrRGF5c0luY2x1c2l2aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkLmlzU2FtZShkYXRlLCAnZGF5Jyk7XG4gICAgICAgIH0pLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKCFpc0xvY2tlZCAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NrRGF5c0ZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpc0xvY2tlZCA9IG9wdGlvbnMubG9ja0RheXNGaWx0ZXIuY2FsbCh0aGlzLCBkYXRlLmNsb25lKCksIG51bGwsIHBpY2tlZERhdGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzTG9ja2VkO1xufVxuZXhwb3J0cy5kYXRlSXNMb2NrZWQgPSBkYXRlSXNMb2NrZWQ7XG5mdW5jdGlvbiByYW5nZUlzTG9ja2VkKGRheXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgaXNMb2NrZWQgPSBmYWxzZTtcbiAgICBpZiAob3B0aW9ucy5sb2NrRGF5cy5sZW5ndGgpIHtcbiAgICAgICAgaXNMb2NrZWQgPSBvcHRpb25zLmxvY2tEYXlzXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAoZCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzRXF1YWxUb1JhbmdlID0gZGF5c1swXS50b0RhdGVTdHJpbmcoKSA9PT0gZFswXS50b0RhdGVTdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAmJiBkYXlzWzFdLnRvRGF0ZVN0cmluZygpID09PSBkWzFdLnRvRGF0ZVN0cmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkWzBdLmlzQmV0d2VlbihkYXlzWzBdLCBkYXlzWzFdLCBvcHRpb25zLmxvY2tEYXlzSW5jbHVzaXZpdHkpXG4gICAgICAgICAgICAgICAgICAgIHx8IGRbMV0uaXNCZXR3ZWVuKGRheXNbMF0sIGRheXNbMV0sIG9wdGlvbnMubG9ja0RheXNJbmNsdXNpdml0eSlcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNFcXVhbFRvUmFuZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZC5pc0JldHdlZW4oZGF5c1swXSwgZGF5c1sxXSwgb3B0aW9ucy5sb2NrRGF5c0luY2x1c2l2aXR5KTtcbiAgICAgICAgfSkubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoIWlzTG9ja2VkICYmIHR5cGVvZiBvcHRpb25zLmxvY2tEYXlzRmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlzTG9ja2VkID0gb3B0aW9ucy5sb2NrRGF5c0ZpbHRlci5jYWxsKHRoaXMsIGRheXNbMF0uY2xvbmUoKSwgZGF5c1sxXS5jbG9uZSgpLCBkYXlzKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzTG9ja2VkO1xufVxuZXhwb3J0cy5yYW5nZUlzTG9ja2VkID0gcmFuZ2VJc0xvY2tlZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=