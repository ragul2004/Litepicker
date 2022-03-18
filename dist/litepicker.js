/*!
 * 
 * litepicker.js
 * Litepicker v2.0.11 (https://github.com/wakirin/Litepicker)
 * Package: litepicker (https://www.npmjs.com/package/litepicker)
 * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
 * Copyright 2019-2022 Rinat G.
 *     
 * Hash: ad4ca5db0b248599dfc2
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

/******/ })["Litepicker"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaXRlcGlja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9jYWxlbmRhci50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL2NvcmUudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9kYXRldGltZS50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvbGl0ZXBpY2tlci50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL21ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9zY3NzL21haW4uc2Nzcz9jYzFlIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7OztBQzdGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsaURBQWlELHlEQUF5RCwwQ0FBMEMsK0NBQStDLHdDQUF3QywwQ0FBMEMsa0RBQWtELGtEQUFrRCx3REFBd0Qsd0RBQXdELG9FQUFvRSw4Q0FBOEMsa0RBQWtELGlDQUFpQyxpQ0FBaUMsMENBQTBDLHlDQUF5Qyw0Q0FBNEMsMENBQTBDLHNDQUFzQyw0Q0FBNEMsb0NBQW9DLDBDQUEwQywyQ0FBMkMsaURBQWlELDBDQUEwQyxnREFBZ0QsNkNBQTZDLG1EQUFtRCw2Q0FBNkMsbURBQW1ELEVBQUUsd0JBQXdCLG9FQUFvRSxFQUFFLGlCQUFpQixnSEFBZ0gscUJBQXFCLGtCQUFrQixFQUFFLHdCQUF3QixtQkFBbUIsdUJBQXVCLEVBQUUsa0NBQWtDLDJCQUEyQiwyQkFBMkIsb0JBQW9CLEVBQUUsb0NBQW9DLDJCQUEyQiwyQkFBMkIsb0JBQW9CLDBCQUEwQiwwQkFBMEIsb0VBQW9FLHlCQUF5QixzRkFBc0Ysc0ZBQXNGLHdEQUF3RCxzQ0FBc0Msc0NBQXNDLEVBQUUsZ0RBQWdELGdFQUFnRSxFQUFFLGdEQUFnRCxnRUFBZ0UsRUFBRSxnREFBZ0QsZ0VBQWdFLEVBQUUsaUxBQWlMLDRCQUE0QixFQUFFLGtEQUFrRCxxQkFBcUIsNkNBQTZDLHdDQUF3Qyx3Q0FBd0MsRUFBRSwyREFBMkQsK0JBQStCLCtCQUErQix3QkFBd0Isb0NBQW9DLHFDQUFxQyxpREFBaUQsMkJBQTJCLDRCQUE0Qiw2QkFBNkIsb0NBQW9DLHFDQUFxQyxzQ0FBc0Msc0RBQXNELEVBQUUsaUVBQWlFLGdDQUFnQyw0QkFBNEIsNEJBQTRCLEVBQUUsc0ZBQXNGLGdDQUFnQyxFQUFFLHNGQUFzRix5QkFBeUIsRUFBRSwyRUFBMkUsd0RBQXdELEVBQUUsbUZBQW1GLHlEQUF5RCxFQUFFLCtFQUErRSxtQ0FBbUMsRUFBRSxtRkFBbUYsZ0VBQWdFLEVBQUUsMkZBQTJGLGlFQUFpRSxFQUFFLG1LQUFtSywrQkFBK0Isa0NBQWtDLDZCQUE2QiwrQkFBK0Isd0RBQXdELGdEQUFnRCw0QkFBNEIsRUFBRSwyS0FBMkssbUNBQW1DLEVBQUUsb0ZBQW9GLDZEQUE2RCxFQUFFLHVMQUF1TCw4REFBOEQsRUFBRSw0RkFBNEYscUVBQXFFLEVBQUUsb0dBQW9HLHNFQUFzRSxFQUFFLGdGQUFnRiw2REFBNkQsRUFBRSwrS0FBK0ssOERBQThELEVBQUUsd0ZBQXdGLHFFQUFxRSxFQUFFLGdHQUFnRyxzRUFBc0UsRUFBRSxpRUFBaUUsK0JBQStCLCtCQUErQix3QkFBd0IsK0JBQStCLGtDQUFrQyxtQ0FBbUMsOENBQThDLHVEQUF1RCxFQUFFLHlFQUF5RSwyQkFBMkIsMkJBQTJCLGdDQUFnQyw0QkFBNEIsNEJBQTRCLCtDQUErQywrQkFBK0IsRUFBRSx1RkFBdUYsOEJBQThCLEVBQUUsa0ZBQWtGLDhCQUE4QixFQUFFLDZGQUE2Riw2QkFBNkIsRUFBRSxxRkFBcUYsNkJBQTZCLEVBQUUsa0NBQWtDLDJCQUEyQiwyQkFBMkIsb0JBQW9CLDBCQUEwQiwwQkFBMEIsMkJBQTJCLDhCQUE4QiwrQkFBK0IsMENBQTBDLHlCQUF5QixzQ0FBc0Msc0NBQXNDLEVBQUUsaUZBQWlGLHVCQUF1QiwyQ0FBMkMsRUFBRSw4Q0FBOEMsMkNBQTJDLDJCQUEyQiw4QkFBOEIsMkJBQTJCLG9EQUFvRCw0Q0FBNEMsd0JBQXdCLEVBQUUsc0RBQXNELG1EQUFtRCxnRkFBZ0YsZ0ZBQWdGLEVBQUUseURBQXlELGtEQUFrRCxFQUFFLDBEQUEwRCxtREFBbUQsRUFBRSxrRUFBa0UscURBQXFELHFDQUFxQyxxQ0FBcUMsNEJBQTRCLEVBQUUsNERBQTRELGdFQUFnRSwyQkFBMkIsRUFBRSw4REFBOEQsa0RBQWtELGdFQUFnRSxzQ0FBc0MseUNBQXlDLHFDQUFxQyx3Q0FBd0MsRUFBRSwyRUFBMkUsc0NBQXNDLHlDQUF5Qyx5Q0FBeUMsNENBQTRDLEVBQUUsNERBQTRELGdEQUFnRCw4REFBOEQsb0NBQW9DLHVDQUF1Qyx1Q0FBdUMsMENBQTBDLEVBQUUseUVBQXlFLHdDQUF3QywyQ0FBMkMsdUNBQXVDLDBDQUEwQyxFQUFFLDBFQUEwRSxzQ0FBc0MseUNBQXlDLHVDQUF1QywwQ0FBMEMsRUFBRSwrREFBK0QseURBQXlELHVFQUF1RSxFQUFFLGlEQUFpRCw2QkFBNkIsNkJBQTZCLHNCQUFzQixrQ0FBa0MsbUNBQW1DLG9DQUFvQyxpQ0FBaUMsa0NBQWtDLHdDQUF3Qyx5REFBeUQsdUJBQXVCLEVBQUUsb0NBQW9DLHdCQUF3Qix3QkFBd0Isb0JBQW9CLDBEQUEwRCwwRkFBMEYsMEZBQTBGLHFDQUFxQyxzQ0FBc0MsRUFBRSwwREFBMEQsMkJBQTJCLHVCQUF1QixFQUFFLHFEQUFxRCxtRUFBbUUscURBQXFELGtCQUFrQiw2QkFBNkIsMkJBQTJCLEVBQUUseURBQXlELCtCQUErQixFQUFFLG9EQUFvRCxrRUFBa0Usb0RBQW9ELGtCQUFrQiw2QkFBNkIsMkJBQTJCLDBCQUEwQiwyQkFBMkIsRUFBRSwrREFBK0QsdUJBQXVCLEVBQUUsd0RBQXdELCtCQUErQixFQUFFLHFDQUFxQyx5QkFBeUIsdUJBQXVCLHVCQUF1Qix5QkFBeUIsMkRBQTJELHdEQUF3RCx3REFBd0QsMEJBQTBCLHNCQUFzQiwyQkFBMkIseUJBQXlCLEVBQUUsOENBQThDLDJCQUEyQixxQkFBcUIsOEJBQThCLGtEQUFrRCw0Q0FBNEMsMkNBQTJDLHNCQUFzQixFQUFFLDZDQUE2QywyQkFBMkIscUJBQXFCLDhCQUE4QixpRUFBaUUsNENBQTRDLDJDQUEyQyxzQkFBc0IsRUFBRTtBQUM3c2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtCQUFrQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0JBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGdCQUFnQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSTtBQUMzQyw4QkFBOEIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSTtBQUN2RDtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbGFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsbUJBQW1CLG1CQUFPLENBQUMseUNBQWM7QUFDekM7QUFDQSxtQkFBTyxDQUFDLG1DQUFXO0FBQ25CO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaURBQWlELFFBQVE7QUFDekQsd0NBQXdDLFFBQVE7QUFDaEQsd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUJBQWlCLG1CQUFPLENBQUMscUNBQVk7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMscUNBQVk7QUFDckMsWUFBWSxtQkFBTyxDQUFDLDhDQUFrQjtBQUN0QyxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtIQUFrSCxrQkFBa0IsRUFBRTtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0hBQWtILGtCQUFrQixFQUFFO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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Ozs7Ozs7Ozs7OztBQ2xOQSxjQUFjLG1CQUFPLENBQUMsdVpBQW9POztBQUUxUDtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzSkFBMkU7O0FBRWhHO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJsaXRlcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1saXRlcGlja2VyLWNvbnRhaW5lci1tb250aHMtY29sb3ItYmc6ICNmZmY7XFxuICAtLWxpdGVwaWNrZXItY29udGFpbmVyLW1vbnRocy1ib3gtc2hhZG93LWNvbG9yOiAjZGRkO1xcbiAgLS1saXRlcGlja2VyLWZvb3Rlci1jb2xvci1iZzogI2ZhZmFmYTtcXG4gIC0tbGl0ZXBpY2tlci1mb290ZXItYm94LXNoYWRvdy1jb2xvcjogI2RkZDtcXG4gIC0tbGl0ZXBpY2tlci10b29sdGlwLWNvbG9yLWJnOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLW1vbnRoLWhlYWRlci1jb2xvcjogIzMzMztcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tcHJldi1tb250aC1jb2xvcjogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tbmV4dC1tb250aC1jb2xvcjogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tcHJldi1tb250aC1jb2xvci1ob3ZlcjogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tbmV4dC1tb250aC1jb2xvci1ob3ZlcjogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1tb250aC13aWR0aDogY2FsYyh2YXIoLS1saXRlcGlja2VyLWRheS13aWR0aCkgKiA3KTtcXG4gIC0tbGl0ZXBpY2tlci1tb250aC13ZWVrZGF5LWNvbG9yOiAjOWU5ZTllO1xcbiAgLS1saXRlcGlja2VyLW1vbnRoLXdlZWstbnVtYmVyLWNvbG9yOiAjOWU5ZTllO1xcbiAgLS1saXRlcGlja2VyLWRheS13aWR0aDogMzhweDtcXG4gIC0tbGl0ZXBpY2tlci1kYXktY29sb3I6ICMzMzM7XFxuICAtLWxpdGVwaWNrZXItZGF5LWNvbG9yLWhvdmVyOiAjMjE5NmYzO1xcbiAgLS1saXRlcGlja2VyLWlzLXRvZGF5LWNvbG9yOiAjZjQ0MzM2O1xcbiAgLS1saXRlcGlja2VyLWlzLWluLXJhbmdlLWNvbG9yOiAjYmJkZWZiO1xcbiAgLS1saXRlcGlja2VyLWlzLWxvY2tlZC1jb2xvcjogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1pcy1zdGFydC1jb2xvcjogI2ZmZjtcXG4gIC0tbGl0ZXBpY2tlci1pcy1zdGFydC1jb2xvci1iZzogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1pcy1lbmQtY29sb3I6ICNmZmY7XFxuICAtLWxpdGVwaWNrZXItaXMtZW5kLWNvbG9yLWJnOiAjMjE5NmYzO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1jYW5jZWwtY29sb3I6ICNmZmY7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLWNhbmNlbC1jb2xvci1iZzogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tYXBwbHktY29sb3I6ICNmZmY7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLWFwcGx5LWNvbG9yLWJnOiAjMjE5NmYzO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1yZXNldC1jb2xvcjogIzkwOTA5MDtcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3ItaG92ZXI6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItaGlnaGxpZ2h0ZWQtZGF5LWNvbG9yOiAjMzMzO1xcbiAgLS1saXRlcGlja2VyLWhpZ2hsaWdodGVkLWRheS1jb2xvci1iZzogI2ZmZWIzYjsgfVxcblxcbi5zaG93LXdlZWstbnVtYmVycyB7XFxuICAtLWxpdGVwaWNrZXItbW9udGgtd2lkdGg6IGNhbGModmFyKC0tbGl0ZXBpY2tlci1kYXktd2lkdGgpICogOCk7IH1cXG5cXG4ubGl0ZXBpY2tlciB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5saXRlcGlja2VyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTsgfVxcbiAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbWFpbiB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDsgfVxcbiAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWNvbnRhaW5lci1tb250aHMtY29sb3ItYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1saXRlcGlja2VyLWNvbnRhaW5lci1tb250aHMtYm94LXNoYWRvdy1jb2xvcik7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1saXRlcGlja2VyLWNvbnRhaW5lci1tb250aHMtYm94LXNoYWRvdy1jb2xvcik7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWxpdGVwaWNrZXItbW9udGgtd2lkdGgpICsgMTBweCk7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzLmNvbHVtbnMtMiB7XFxuICAgICAgd2lkdGg6IGNhbGMoKHZhcigtLWxpdGVwaWNrZXItbW9udGgtd2lkdGgpICogMikgKyAyMHB4KTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMuY29sdW1ucy0zIHtcXG4gICAgICB3aWR0aDogY2FsYygodmFyKC0tbGl0ZXBpY2tlci1tb250aC13aWR0aCkgKiAzKSArIDMwcHgpOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocy5jb2x1bW5zLTQge1xcbiAgICAgIHdpZHRoOiBjYWxjKCh2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoKSAqIDQpICsgNDBweCk7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzLnNwbGl0LXZpZXcgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGgsXFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocy5zcGxpdC12aWV3IC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLW5leHQtbW9udGgge1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtIHtcXG4gICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgd2lkdGg6IHZhcigtLWxpdGVwaWNrZXItbW9udGgtd2lkdGgpO1xcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLW1vbnRoLWhlYWRlci1jb2xvcik7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgZGl2IHtcXG4gICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgICAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDE7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciBkaXYgPiAubW9udGgtaXRlbS1uYW1lIHtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIGRpdiA+IC5tb250aC1pdGVtLXllYXIge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLnJlc2V0LWJ1dHRvbiB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1yZXNldC1jb2xvcik7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAucmVzZXQtYnV0dG9uID4gc3ZnIHtcXG4gICAgICAgICAgICBmaWxsOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1yZXNldC1jb2xvcik7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAucmVzZXQtYnV0dG9uICoge1xcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLnJlc2V0LWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXJlc2V0LWNvbG9yLWhvdmVyKTsgfVxcbiAgICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLnJlc2V0LWJ1dHRvbjpob3ZlciA+IHN2ZyB7XFxuICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1yZXNldC1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1wcmV2aW91cy1tb250aCxcXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoIHtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXIgMC4zcztcXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyIDAuM3M7XFxuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGggKixcXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLW5leHQtbW9udGggKiB7XFxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1wcmV2aW91cy1tb250aCB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1wcmV2LW1vbnRoLWNvbG9yKTsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGggPiBzdmcsXFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1wcmV2aW91cy1tb250aCA+IGltZyB7XFxuICAgICAgICAgICAgZmlsbDogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcHJldi1tb250aC1jb2xvcik7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcHJldi1tb250aC1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGg6aG92ZXIgPiBzdmcge1xcbiAgICAgICAgICAgICAgZmlsbDogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcHJldi1tb250aC1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoID4gc3ZnLFxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aCA+IGltZyB7XFxuICAgICAgICAgICAgZmlsbDogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tbmV4dC1tb250aC1jb2xvcik7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLW5leHQtbW9udGg6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1uZXh0LW1vbnRoLWNvbG9yLWhvdmVyKTsgfVxcbiAgICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoOmhvdmVyID4gc3ZnIHtcXG4gICAgICAgICAgICAgIGZpbGw6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3ItaG92ZXIpOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLXdlZWtkYXlzLXJvdyB7XFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdlZWtkYXktY29sb3IpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0td2Vla2RheXMtcm93ID4gZGl2IHtcXG4gICAgICAgICAgcGFkZGluZzogNXB4IDA7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogODUlO1xcbiAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgICAgd2lkdGg6IHZhcigtLWxpdGVwaWNrZXItZGF5LXdpZHRoKTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtOmZpcnN0LWNoaWxkIC5idXR0b24tcHJldmlvdXMtbW9udGgge1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbTpsYXN0LWNoaWxkIC5idXR0b24tbmV4dC1tb250aCB7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLm5vLXByZXZpb3VzLW1vbnRoIC5idXR0b24tcHJldmlvdXMtbW9udGgge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLm5vLW5leHQtbW9udGggLmJ1dHRvbi1uZXh0LW1vbnRoIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyA+IGRpdixcXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyA+IGEge1xcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICAgIHdpZHRoOiB2YXIoLS1saXRlcGlja2VyLWRheS13aWR0aCk7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWRheS1jb2xvcik7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXIgMC4zcztcXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXIgMC4zcztcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbTpob3ZlciB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1kYXktY29sb3ItaG92ZXIpO1xcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyKC0tbGl0ZXBpY2tlci1kYXktY29sb3ItaG92ZXIpO1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyKC0tbGl0ZXBpY2tlci1kYXktY29sb3ItaG92ZXIpOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtdG9kYXkge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaXMtdG9kYXktY29sb3IpOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtbG9ja2VkIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLWxvY2tlZC1jb2xvcik7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLWxvY2tlZDpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLWxvY2tlZC1jb2xvcik7XFxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1pbi1yYW5nZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLWluLXJhbmdlLWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1zdGFydC1kYXRlIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLXN0YXJ0LWNvbG9yKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaXMtc3RhcnQtY29sb3ItYmcpO1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtc3RhcnQtZGF0ZS5pcy1mbGlwcGVkIHtcXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLWVuZC1kYXRlIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLWVuZC1jb2xvcik7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLWVuZC1jb2xvci1iZyk7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1lbmQtZGF0ZS5pcy1mbGlwcGVkIHtcXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLXN0YXJ0LWRhdGUuaXMtZW5kLWRhdGUge1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1oaWdobGlnaHRlZCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1oaWdobGlnaHRlZC1kYXktY29sb3IpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1oaWdobGlnaHRlZC1kYXktY29sb3ItYmcpOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLndlZWstbnVtYmVyIHtcXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItbW9udGgtd2Vlay1udW1iZXItY29sb3IpO1xcbiAgICAgIGZvbnQtc2l6ZTogODUlOyB9XFxuICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItZm9vdGVyLWNvbG9yLWJnKTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggM3B4IDNweCAwcHggdmFyKC0tbGl0ZXBpY2tlci1mb290ZXItYm94LXNoYWRvdy1jb2xvcik7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDNweCAzcHggMHB4IHZhcigtLWxpdGVwaWNrZXItZm9vdGVyLWJveC1zaGFkb3ctY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZm9vdGVyIC5wcmV2aWV3LWRhdGUtcmFuZ2Uge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICBmb250LXNpemU6IDkwJTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1jYW5jZWwge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLWNhbmNlbC1jb2xvci1iZyk7XFxuICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLWNhbmNlbC1jb2xvcik7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIHBhZGRpbmc6IDNweCA3cHggNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2Zvb3RlciAuYnV0dG9uLWNhbmNlbCAqIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2Zvb3RlciAuYnV0dG9uLWFwcGx5IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1hcHBseS1jb2xvci1iZyk7XFxuICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLWFwcGx5LWNvbG9yKTtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgcGFkZGluZzogM3B4IDdweCA0cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2Zvb3RlciAuYnV0dG9uLWFwcGx5OmRpc2FibGVkIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuNzsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2Zvb3RlciAuYnV0dG9uLWFwcGx5ICoge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gIC5saXRlcGlja2VyIC5jb250YWluZXJfX3Rvb2x0aXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi10b3A6IC00cHg7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci10b29sdGlwLWNvbG9yLWJnKTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX3Rvb2x0aXA6YmVmb3JlIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAtNXB4O1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNXB4KTtcXG4gICAgICBib3JkZXItdG9wOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX3Rvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IC00cHg7XFxuICAgICAgbGVmdDogY2FsYyg1MCUgLSA0cHgpO1xcbiAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB2YXIoLS1saXRlcGlja2VyLXRvb2x0aXAtY29sb3ItYmcpO1xcbiAgICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2hvd1dlZWtOdW1iZXJzXCI6IFwic2hvdy13ZWVrLW51bWJlcnNcIixcblx0XCJsaXRlcGlja2VyXCI6IFwibGl0ZXBpY2tlclwiLFxuXHRcImNvbnRhaW5lck1haW5cIjogXCJjb250YWluZXJfX21haW5cIixcblx0XCJjb250YWluZXJNb250aHNcIjogXCJjb250YWluZXJfX21vbnRoc1wiLFxuXHRcImNvbHVtbnMyXCI6IFwiY29sdW1ucy0yXCIsXG5cdFwiY29sdW1uczNcIjogXCJjb2x1bW5zLTNcIixcblx0XCJjb2x1bW5zNFwiOiBcImNvbHVtbnMtNFwiLFxuXHRcInNwbGl0Vmlld1wiOiBcInNwbGl0LXZpZXdcIixcblx0XCJtb250aEl0ZW1IZWFkZXJcIjogXCJtb250aC1pdGVtLWhlYWRlclwiLFxuXHRcImJ1dHRvblByZXZpb3VzTW9udGhcIjogXCJidXR0b24tcHJldmlvdXMtbW9udGhcIixcblx0XCJidXR0b25OZXh0TW9udGhcIjogXCJidXR0b24tbmV4dC1tb250aFwiLFxuXHRcIm1vbnRoSXRlbVwiOiBcIm1vbnRoLWl0ZW1cIixcblx0XCJtb250aEl0ZW1OYW1lXCI6IFwibW9udGgtaXRlbS1uYW1lXCIsXG5cdFwibW9udGhJdGVtWWVhclwiOiBcIm1vbnRoLWl0ZW0teWVhclwiLFxuXHRcInJlc2V0QnV0dG9uXCI6IFwicmVzZXQtYnV0dG9uXCIsXG5cdFwibW9udGhJdGVtV2Vla2RheXNSb3dcIjogXCJtb250aC1pdGVtLXdlZWtkYXlzLXJvd1wiLFxuXHRcIm5vUHJldmlvdXNNb250aFwiOiBcIm5vLXByZXZpb3VzLW1vbnRoXCIsXG5cdFwibm9OZXh0TW9udGhcIjogXCJuby1uZXh0LW1vbnRoXCIsXG5cdFwiY29udGFpbmVyRGF5c1wiOiBcImNvbnRhaW5lcl9fZGF5c1wiLFxuXHRcImRheUl0ZW1cIjogXCJkYXktaXRlbVwiLFxuXHRcImlzVG9kYXlcIjogXCJpcy10b2RheVwiLFxuXHRcImlzTG9ja2VkXCI6IFwiaXMtbG9ja2VkXCIsXG5cdFwiaXNJblJhbmdlXCI6IFwiaXMtaW4tcmFuZ2VcIixcblx0XCJpc1N0YXJ0RGF0ZVwiOiBcImlzLXN0YXJ0LWRhdGVcIixcblx0XCJpc0ZsaXBwZWRcIjogXCJpcy1mbGlwcGVkXCIsXG5cdFwiaXNFbmREYXRlXCI6IFwiaXMtZW5kLWRhdGVcIixcblx0XCJpc0hpZ2hsaWdodGVkXCI6IFwiaXMtaGlnaGxpZ2h0ZWRcIixcblx0XCJ3ZWVrTnVtYmVyXCI6IFwid2Vlay1udW1iZXJcIixcblx0XCJjb250YWluZXJGb290ZXJcIjogXCJjb250YWluZXJfX2Zvb3RlclwiLFxuXHRcInByZXZpZXdEYXRlUmFuZ2VcIjogXCJwcmV2aWV3LWRhdGUtcmFuZ2VcIixcblx0XCJidXR0b25DYW5jZWxcIjogXCJidXR0b24tY2FuY2VsXCIsXG5cdFwiYnV0dG9uQXBwbHlcIjogXCJidXR0b24tYXBwbHlcIixcblx0XCJjb250YWluZXJUb29sdGlwXCI6IFwiY29udGFpbmVyX190b29sdGlwXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gJGdldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gJGdldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9ICRnZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBSZWZsZWN0QXBwbHkodGhpcy5saXN0ZW5lciwgdGhpcy50YXJnZXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29yZV8xID0gcmVxdWlyZShcIi4vY29yZVwiKTtcbnZhciBkYXRldGltZV8xID0gcmVxdWlyZShcIi4vZGF0ZXRpbWVcIik7XG52YXIgc3R5bGUgPSByZXF1aXJlKFwiLi9zY3NzL21haW4uc2Nzc1wiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG52YXIgQ2FsZW5kYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENhbGVuZGFyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENhbGVuZGFyKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgICAgIC8vXG4gICAgfVxuICAgIENhbGVuZGFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZW1pdCgnYmVmb3JlOnJlbmRlcicsIHRoaXMudWkpO1xuICAgICAgICB2YXIgbWFpbkJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5CbG9jay5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJNYWluO1xuICAgICAgICB2YXIgbW9udGhzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vbnRocy5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJNb250aHM7XG4gICAgICAgIGlmIChzdHlsZVtcImNvbHVtbnNcIiArIHRoaXMub3B0aW9ucy5udW1iZXJPZkNvbHVtbnNdKSB7XG4gICAgICAgICAgICBtb250aHMuY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5jb2x1bW5zMiwgc3R5bGUuY29sdW1uczMsIHN0eWxlLmNvbHVtbnM0KTtcbiAgICAgICAgICAgIG1vbnRocy5jbGFzc0xpc3QuYWRkKHN0eWxlW1wiY29sdW1uc1wiICsgdGhpcy5vcHRpb25zLm51bWJlck9mQ29sdW1uc10pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3BsaXRWaWV3KSB7XG4gICAgICAgICAgICBtb250aHMuY2xhc3NMaXN0LmFkZChzdHlsZS5zcGxpdFZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzKSB7XG4gICAgICAgICAgICBtb250aHMuY2xhc3NMaXN0LmFkZChzdHlsZS5zaG93V2Vla051bWJlcnMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydERhdGUgPSB0aGlzLmNhbGVuZGFyc1swXS5jbG9uZSgpO1xuICAgICAgICB2YXIgc3RhcnRNb250aElkeCA9IHN0YXJ0RGF0ZS5nZXRNb250aCgpO1xuICAgICAgICB2YXIgdG90YWxNb250aHMgPSBzdGFydERhdGUuZ2V0TW9udGgoKSArIHRoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocztcbiAgICAgICAgdmFyIGNhbGVuZGFySWR4ID0gMDtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXG4gICAgICAgIGZvciAodmFyIGlkeCA9IHN0YXJ0TW9udGhJZHg7IGlkeCA8IHRvdGFsTW9udGhzOyBpZHggKz0gMSkge1xuICAgICAgICAgICAgdmFyIGRhdGVJdGVyYXRvciA9IHN0YXJ0RGF0ZS5jbG9uZSgpO1xuICAgICAgICAgICAgZGF0ZUl0ZXJhdG9yLnNldERhdGUoMSk7XG4gICAgICAgICAgICBkYXRlSXRlcmF0b3Iuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xuICAgICAgICAgICAgICAgIGRhdGVJdGVyYXRvciA9IHRoaXMuY2FsZW5kYXJzW2NhbGVuZGFySWR4XS5jbG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0ZUl0ZXJhdG9yLnNldE1vbnRoKGlkeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb250aHMuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJNb250aChkYXRlSXRlcmF0b3IsIGNhbGVuZGFySWR4KSk7XG4gICAgICAgICAgICBjYWxlbmRhcklkeCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIG1haW5CbG9jay5hcHBlbmRDaGlsZChtb250aHMpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlc2V0QnV0dG9uKSB7XG4gICAgICAgICAgICB2YXIgcmVzZXRCdXR0b24gPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5yZXNldEJ1dHRvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uID0gdGhpcy5vcHRpb25zLnJlc2V0QnV0dG9uLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbi5jbGFzc05hbWUgPSBzdHlsZS5yZXNldEJ1dHRvbjtcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dC5yZXNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zdHJpbmctbGl0ZXJhbFxuICAgICAgICAgICAgICAgIF90aGlzWydjbGVhclNlbGVjdGlvbiddKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1haW5CbG9ja1xuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUubW9udGhJdGVtICsgXCI6bGFzdC1jaGlsZFwiKVxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUubW9udGhJdGVtSGVhZGVyKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aS5hcHBlbmRDaGlsZChtYWluQmxvY2spO1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hdXRvQXBwbHkgfHwgdGhpcy5vcHRpb25zLmZvb3RlckhUTUwpIHtcbiAgICAgICAgICAgIHRoaXMudWkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJGb290ZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93VG9vbHRpcCkge1xuICAgICAgICAgICAgdGhpcy51aS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclRvb2x0aXAoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aS5kYXRhc2V0LnBsdWdpbnMgPSAodGhpcy5vcHRpb25zLnBsdWdpbnMgfHwgW10pLmpvaW4oJ3wnKTtcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5kZXInLCB0aGlzLnVpKTtcbiAgICB9O1xuICAgIENhbGVuZGFyLnByb3RvdHlwZS5yZW5kZXJNb250aCA9IGZ1bmN0aW9uIChkYXRlLCBjYWxlbmRhcklkeCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhcnREYXRlID0gZGF0ZS5jbG9uZSgpO1xuICAgICAgICB2YXIgdG90YWxEYXlzID0gMzIgLSBuZXcgRGF0ZShzdGFydERhdGUuZ2V0RnVsbFllYXIoKSwgc3RhcnREYXRlLmdldE1vbnRoKCksIDMyKS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtb250aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb250aC5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW07XG4gICAgICAgIHZhciBtb250aEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb250aEhlYWRlci5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1IZWFkZXI7XG4gICAgICAgIHZhciBtb250aEFuZFllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcm9wZG93bnMubW9udGhzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0TW9udGhzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBzZWxlY3RNb250aHMuY2xhc3NOYW1lID0gc3R5bGUubW9udGhJdGVtTmFtZTtcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgMTI7IHggKz0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAvLyBkYXkgMiBiZWNhdXNlIGlPUyBidWcgd2l0aCBgdG9Mb2NhbGVTdHJpbmdgXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dha2lyaW4vTGl0ZXBpY2tlci9pc3N1ZXMvMTEzXG4gICAgICAgICAgICAgICAgdmFyIG1vbnRoTmFtZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgeCwgMiwgMCwgMCwgMCkpO1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25Nb250aCA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgeCwgMSwgMCwgMCwgMCkpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyh4KTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IG1vbnRoTmFtZS50b0xvY2FsZVN0cmluZyh0aGlzLm9wdGlvbnMubGFuZywgeyBtb250aDogJ2xvbmcnIH0pO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9ICh0aGlzLm9wdGlvbnMubWluRGF0ZVxuICAgICAgICAgICAgICAgICAgICAmJiBvcHRpb25Nb250aC5pc0JlZm9yZShuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWluRGF0ZSksICdtb250aCcpKVxuICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5vcHRpb25zLm1heERhdGUgJiYgb3B0aW9uTW9udGguaXNBZnRlcihuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWF4RGF0ZSksICdtb250aCcpKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb25Nb250aC5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0TW9udGhzLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RNb250aHMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc3BsaXRWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb250aEl0ZW0gPSB0YXJnZXQuY2xvc2VzdChcIi5cIiArIHN0eWxlLm1vbnRoSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IHV0aWxzXzEuZmluZE5lc3RlZE1vbnRoSXRlbShtb250aEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5jYWxlbmRhcnNbaWR4XS5zZXRNb250aChOdW1iZXIodGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnY2hhbmdlOm1vbnRoJywgX3RoaXMuY2FsZW5kYXJzW2lkeF0sIGlkeCwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1vbnRoQW5kWWVhci5hcHBlbmRDaGlsZChzZWxlY3RNb250aHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1vbnRoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xuICAgICAgICAgICAgbW9udGhOYW1lLmNsYXNzTmFtZSA9IHN0eWxlLm1vbnRoSXRlbU5hbWU7XG4gICAgICAgICAgICBtb250aE5hbWUuZGF0YXNldC5tb250aCA9IGRhdGUuZ2V0TW9udGgoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgbW9udGhOYW1lLmRhdGFzZXQueWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgbW9udGhOYW1lLmlubmVySFRNTCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcodGhpcy5vcHRpb25zLmxhbmcsIHsgbW9udGg6ICdsb25nJyB9KTtcbiAgICAgICAgICAgIG1vbnRoQW5kWWVhci5hcHBlbmRDaGlsZChtb250aE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJvcGRvd25zLnllYXJzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0WWVhcnNfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1ZZWFyO1xuICAgICAgICAgICAgdmFyIG1pblllYXIgPSB0aGlzLm9wdGlvbnMuZHJvcGRvd25zLm1pblllYXI7XG4gICAgICAgICAgICB2YXIgbWF4WWVhciA9IHRoaXMub3B0aW9ucy5kcm9wZG93bnMubWF4WWVhclxuICAgICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmRyb3Bkb3ducy5tYXhZZWFyXG4gICAgICAgICAgICAgICAgOiAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPiBtYXhZZWFyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGVjdFllYXJzXzEuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIHggPSBtYXhZZWFyOyB4ID49IG1pblllYXI7IHggLT0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uWWVhciA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG5ldyBEYXRlKHgsIDAsIDEsIDAsIDAsIDApKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBTdHJpbmcoeCk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBTdHJpbmcoeCk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gKHRoaXMub3B0aW9ucy5taW5EYXRlXG4gICAgICAgICAgICAgICAgICAgICYmIG9wdGlvblllYXIuaXNCZWZvcmUobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1pbkRhdGUpLCAneWVhcicpKVxuICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5vcHRpb25zLm1heERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIG9wdGlvblllYXIuaXNBZnRlcihuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWF4RGF0ZSksICd5ZWFyJykpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0geDtcbiAgICAgICAgICAgICAgICBzZWxlY3RZZWFyc18xLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpIDwgbWluWWVhcikge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxlY3RZZWFyc18xLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRyb3Bkb3ducy55ZWFycyA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2VsZWN0WWVhcnNfMS5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGNoaWxkcy5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgICAgICAgICAgeS5pbm5lckhUTUwgPSB5LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RZZWFyc18xLmFwcGVuZENoaWxkKHkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgaWR4ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zcGxpdFZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vbnRoSXRlbSA9IHRhcmdldC5jbG9zZXN0KFwiLlwiICsgc3R5bGUubW9udGhJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWR4ID0gdXRpbHNfMS5maW5kTmVzdGVkTW9udGhJdGVtKG1vbnRoSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLmNhbGVuZGFyc1tpZHhdLnNldEZ1bGxZZWFyKE51bWJlcih0YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdjaGFuZ2U6eWVhcicsIF90aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtb250aEFuZFllYXIuYXBwZW5kQ2hpbGQoc2VsZWN0WWVhcnNfMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbW9udGhZZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbW9udGhZZWFyLmNsYXNzTmFtZSA9IHN0eWxlLm1vbnRoSXRlbVllYXI7XG4gICAgICAgICAgICBtb250aFllYXIuaW5uZXJIVE1MID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICBtb250aEFuZFllYXIuYXBwZW5kQ2hpbGQobW9udGhZZWFyKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJldmlvdXNNb250aEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcmV2aW91c01vbnRoQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgcHJldmlvdXNNb250aEJ1dHRvbi5jbGFzc05hbWUgPSBzdHlsZS5idXR0b25QcmV2aW91c01vbnRoO1xuICAgICAgICBwcmV2aW91c01vbnRoQnV0dG9uLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5idXR0b25UZXh0LnByZXZpb3VzTW9udGg7XG4gICAgICAgIHZhciBuZXh0TW9udGhCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV4dE1vbnRoQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgbmV4dE1vbnRoQnV0dG9uLmNsYXNzTmFtZSA9IHN0eWxlLmJ1dHRvbk5leHRNb250aDtcbiAgICAgICAgbmV4dE1vbnRoQnV0dG9uLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5idXR0b25UZXh0Lm5leHRNb250aDtcbiAgICAgICAgbW9udGhIZWFkZXIuYXBwZW5kQ2hpbGQocHJldmlvdXNNb250aEJ1dHRvbik7XG4gICAgICAgIG1vbnRoSGVhZGVyLmFwcGVuZENoaWxkKG1vbnRoQW5kWWVhcik7XG4gICAgICAgIG1vbnRoSGVhZGVyLmFwcGVuZENoaWxkKG5leHRNb250aEJ1dHRvbik7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWluRGF0ZVxuICAgICAgICAgICAgJiYgc3RhcnREYXRlLmlzU2FtZU9yQmVmb3JlKG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5taW5EYXRlKSwgJ21vbnRoJykpIHtcbiAgICAgICAgICAgIG1vbnRoLmNsYXNzTGlzdC5hZGQoc3R5bGUubm9QcmV2aW91c01vbnRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1heERhdGVcbiAgICAgICAgICAgICYmIHN0YXJ0RGF0ZS5pc1NhbWVPckFmdGVyKG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5tYXhEYXRlKSwgJ21vbnRoJykpIHtcbiAgICAgICAgICAgIG1vbnRoLmNsYXNzTGlzdC5hZGQoc3R5bGUubm9OZXh0TW9udGgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3ZWVrZGF5c1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3ZWVrZGF5c1Jvdy5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1XZWVrZGF5c1JvdztcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93V2Vla051bWJlcnMpIHtcbiAgICAgICAgICAgIHdlZWtkYXlzUm93LmlubmVySFRNTCA9ICc8ZGl2Plc8L2Rpdj4nO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDw9IDc7IHcgKz0gMSkge1xuICAgICAgICAgICAgLy8gNyBkYXlzLCA0IGlzIMKrVGh1cnNkYXnCuyAobmV3IERhdGUoMTk3MCwgMCwgMSwgMTIsIDAsIDAsIDApKVxuICAgICAgICAgICAgdmFyIGRheUlkeCA9IDcgLSA0ICsgdGhpcy5vcHRpb25zLmZpcnN0RGF5ICsgdztcbiAgICAgICAgICAgIHZhciB3ZWVrZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB3ZWVrZGF5LmlubmVySFRNTCA9IHRoaXMud2Vla2RheU5hbWUoZGF5SWR4KTtcbiAgICAgICAgICAgIHdlZWtkYXkudGl0bGUgPSB0aGlzLndlZWtkYXlOYW1lKGRheUlkeCwgJ2xvbmcnKTtcbiAgICAgICAgICAgIHdlZWtkYXkuY2xhc3NMaXN0LmFkZCgnd2Vlay1pZHgtJyArICgodyAtIDEgKyB0aGlzLm9wdGlvbnMuZmlyc3REYXkpICUgNykpO1xuICAgICAgICAgICAgd2Vla2RheXNSb3cuYXBwZW5kQ2hpbGQod2Vla2RheSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRhaW5lckRheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyRGF5cy5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJEYXlzO1xuICAgICAgICB2YXIgd2Vla0RheXNJZHggPSAwO1xuICAgICAgICB2YXIgd2Vla0RheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd2Vla0RheXMuY2xhc3NOYW1lID0gXCJyb3dcIjtcbiAgICAgICAgdmFyIHNraXBEYXlzID0gdGhpcy5jYWxjU2tpcERheXMoc3RhcnREYXRlKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93V2Vla051bWJlcnMgJiYgc2tpcERheXMpIHtcbiAgICAgICAgICAgIHdlZWtEYXlzLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyV2Vla051bWJlcihzdGFydERhdGUpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBza2lwRGF5czsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd2Vla0RheXMuYXBwZW5kQ2hpbGQoZHVtbXkpO1xuICAgICAgICAgICAgd2Vla0RheXNJZHgrKztcbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMTsgaWR4IDw9IHRvdGFsRGF5czsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgIHN0YXJ0RGF0ZS5zZXREYXRlKGlkeCk7XG4gICAgICAgICAgICBpZiAod2Vla0RheXNJZHggPT09IDcpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXJEYXlzLmFwcGVuZENoaWxkKHdlZWtEYXlzKTtcbiAgICAgICAgICAgICAgICB3ZWVrRGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHdlZWtEYXlzLmNsYXNzTmFtZSA9IFwicm93XCI7XG4gICAgICAgICAgICAgICAgd2Vla0RheXNJZHggPSB3ZWVrRGF5c0lkeCAlIDc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dXZWVrTnVtYmVycyAmJiBzdGFydERhdGUuZ2V0RGF5KCkgPT09IHRoaXMub3B0aW9ucy5maXJzdERheSkge1xuICAgICAgICAgICAgICAgIHdlZWtEYXlzLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyV2Vla051bWJlcihzdGFydERhdGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdlZWtEYXlzLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyRGF5KHN0YXJ0RGF0ZSkpO1xuICAgICAgICAgICAgd2Vla0RheXNJZHgrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpZHggPSB3ZWVrRGF5c0lkeDsgaWR4IDwgNzsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd2Vla0RheXMuYXBwZW5kQ2hpbGQoZHVtbXkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lckRheXMuYXBwZW5kQ2hpbGQod2Vla0RheXMpO1xuICAgICAgICBtb250aC5hcHBlbmRDaGlsZChtb250aEhlYWRlcik7XG4gICAgICAgIG1vbnRoLmFwcGVuZENoaWxkKHdlZWtkYXlzUm93KTtcbiAgICAgICAgbW9udGguYXBwZW5kQ2hpbGQoY29udGFpbmVyRGF5cyk7XG4gICAgICAgIHRoaXMuZW1pdCgncmVuZGVyOm1vbnRoJywgbW9udGgsIGRhdGUpO1xuICAgICAgICByZXR1cm4gbW9udGg7XG4gICAgfTtcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyRGF5ID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgZGF0ZS5zZXRIb3VycygpO1xuICAgICAgICB2YXIgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRheS5jbGFzc05hbWUgPSBzdHlsZS5kYXlJdGVtO1xuICAgICAgICBkYXkuaW5uZXJIVE1MID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgZGF5LmRhdGFzZXQudGltZSA9IFN0cmluZyhkYXRlLmdldFRpbWUoKSk7XG4gICAgICAgIGlmIChkYXRlLnRvRGF0ZVN0cmluZygpID09PSAobmV3IERhdGUoKSkudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzVG9kYXkpO1xuICAgICAgICB9XG4gICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKCd3ZWVrLScgKyBkYXRlLmdldERheSgpKTtcbiAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWRbMF0udG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc1N0YXJ0RGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRW5kRGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWRbMV0udG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0VuZERhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5pc0JldHdlZW4odGhpcy5kYXRlUGlja2VkWzBdLCB0aGlzLmRhdGVQaWNrZWRbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzSW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zdGFydERhdGUpIHtcbiAgICAgICAgICAgIHZhciBzdGFydERhdGUgPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlO1xuICAgICAgICAgICAgdmFyIGVuZERhdGUgPSB0aGlzLm9wdGlvbnMuZW5kRGF0ZTtcbiAgICAgICAgICAgIGlmIChzdGFydERhdGUudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc1N0YXJ0RGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRW5kRGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZERhdGUgJiYgZW5kRGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gZGF0ZS50b0RhdGVTdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRW5kRGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5pc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0luUmFuZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1pbkRhdGUgJiYgZGF0ZS5pc0JlZm9yZShuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWluRGF0ZSkpKSB7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXhEYXRlICYmIGRhdGUuaXNBZnRlcihuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWF4RGF0ZSkpKSB7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5taW5EYXlzID4gMVxuICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdmFyIG1pbkRheXMgPSB0aGlzLm9wdGlvbnMubWluRGF5cyAtIDE7IC8vIHN1YnRyYWN0IHNlbGVjdGVkIGRheVxuICAgICAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKS5zdWJ0cmFjdChtaW5EYXlzLCAnZGF5Jyk7XG4gICAgICAgICAgICB2YXIgcmlnaHQgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKS5hZGQobWluRGF5cywgJ2RheScpO1xuICAgICAgICAgICAgaWYgKGRhdGUuaXNCZXR3ZWVuKGxlZnQsIHRoaXMuZGF0ZVBpY2tlZFswXSwgJyhdJykpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0ZS5pc0JldHdlZW4odGhpcy5kYXRlUGlja2VkWzBdLCByaWdodCwgJ1spJykpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXhEYXlzXG4gICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB2YXIgbWF4RGF5cyA9IHRoaXMub3B0aW9ucy5tYXhEYXlzO1xuICAgICAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKS5zdWJ0cmFjdChtYXhEYXlzLCAnZGF5Jyk7XG4gICAgICAgICAgICB2YXIgcmlnaHQgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKS5hZGQobWF4RGF5cywgJ2RheScpO1xuICAgICAgICAgICAgaWYgKGRhdGUuaXNTYW1lT3JCZWZvcmUobGVmdCkpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0ZS5pc1NhbWVPckFmdGVyKHJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdEZvcndhcmRcbiAgICAgICAgICAgICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICYmIGRhdGUuaXNCZWZvcmUodGhpcy5kYXRlUGlja2VkWzBdKSkge1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0QmFja3dhcmRcbiAgICAgICAgICAgICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICYmIGRhdGUuaXNBZnRlcih0aGlzLmRhdGVQaWNrZWRbMF0pKSB7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxvY2tlZCA9IHV0aWxzXzEuZGF0ZUlzTG9ja2VkKGRhdGUsIHRoaXMub3B0aW9ucywgdGhpcy5kYXRlUGlja2VkKTtcbiAgICAgICAgaWYgKGxvY2tlZCkge1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGlzSGlnaGxpZ2h0ZWQgPSB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIGlmIChkIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuaXNCZXR3ZWVuKGRbMF0sIGRbMV0sICdbXScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZC5pc1NhbWUoZGF0ZSwgJ2RheScpO1xuICAgICAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGlzSGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0hpZ2hsaWdodGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBmaXggYnVnIGlPUyAxMC0xMiAtIGh0dHBzOi8vZ2l0aHViLmNvbS93YWtpcmluL0xpdGVwaWNrZXIvaXNzdWVzLzEyNFxuICAgICAgICBkYXkudGFiSW5kZXggPSAhZGF5LmNsYXNzTGlzdC5jb250YWlucygnaXMtbG9ja2VkJykgPyAwIDogLTE7XG4gICAgICAgIHRoaXMuZW1pdCgncmVuZGVyOmRheScsIGRheSwgZGF0ZSk7XG4gICAgICAgIHJldHVybiBkYXk7XG4gICAgfTtcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyRm9vdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb3Rlci5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJGb290ZXI7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZm9vdGVySFRNTCkge1xuICAgICAgICAgICAgZm9vdGVyLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5mb290ZXJIVE1MO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9vdGVyLmlubmVySFRNTCA9IFwiXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcIlwiICsgc3R5bGUucHJldmlld0RhdGVSYW5nZSArIFwiXFxcIj48L3NwYW4+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIiArIHN0eWxlLmJ1dHRvbkNhbmNlbCArIFwiXFxcIj5cIiArIHRoaXMub3B0aW9ucy5idXR0b25UZXh0LmNhbmNlbCArIFwiPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIiArIHN0eWxlLmJ1dHRvbkFwcGx5ICsgXCJcXFwiPlwiICsgdGhpcy5vcHRpb25zLmJ1dHRvblRleHQuYXBwbHkgKyBcIjwvYnV0dG9uPlxcbiAgICAgIFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlZFswXS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICAgICAgICAgIGZvb3Rlci5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUucHJldmlld0RhdGVSYW5nZSkuaW5uZXJIVE1MID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZm9vdGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5idXR0b25BcHBseSkuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0VmFsdWUgPSB0aGlzLmRhdGVQaWNrZWRbMF0uZm9ybWF0KHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgICAgICAgICB2YXIgZW5kVmFsdWUgPSB0aGlzLmRhdGVQaWNrZWRbMV0uZm9ybWF0KHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgICAgICAgICBmb290ZXIucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLnByZXZpZXdEYXRlUmFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIC5pbm5lckhUTUwgPSBcIlwiICsgc3RhcnRWYWx1ZSArIHRoaXMub3B0aW9ucy5kZWxpbWl0ZXIgKyBlbmRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmRlcjpmb290ZXInLCBmb290ZXIpO1xuICAgICAgICByZXR1cm4gZm9vdGVyO1xuICAgIH07XG4gICAgQ2FsZW5kYXIucHJvdG90eXBlLnJlbmRlcldlZWtOdW1iZXIgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICB2YXIgd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIHdlZWsgPSBkYXRlLmdldFdlZWsodGhpcy5vcHRpb25zLmZpcnN0RGF5KTtcbiAgICAgICAgd24uY2xhc3NOYW1lID0gc3R5bGUud2Vla051bWJlcjtcbiAgICAgICAgd24uaW5uZXJIVE1MID0gd2VlayA9PT0gNTMgJiYgZGF0ZS5nZXRNb250aCgpID09PSAwID8gJzUzIC8gMScgOiB3ZWVrO1xuICAgICAgICByZXR1cm4gd247XG4gICAgfTtcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyVG9vbHRpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdC5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJUb29sdGlwO1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIENhbGVuZGFyLnByb3RvdHlwZS53ZWVrZGF5TmFtZSA9IGZ1bmN0aW9uIChkYXksIHJlcHJlc2VudGF0aW9uKSB7XG4gICAgICAgIGlmIChyZXByZXNlbnRhdGlvbiA9PT0gdm9pZCAwKSB7IHJlcHJlc2VudGF0aW9uID0gJ3Nob3J0JzsgfVxuICAgICAgICByZXR1cm4gbmV3IERhdGUoMTk3MCwgMCwgZGF5LCAxMiwgMCwgMCwgMClcbiAgICAgICAgICAgIC50b0xvY2FsZVN0cmluZyh0aGlzLm9wdGlvbnMubGFuZywgeyB3ZWVrZGF5OiByZXByZXNlbnRhdGlvbiB9KTtcbiAgICB9O1xuICAgIENhbGVuZGFyLnByb3RvdHlwZS5jYWxjU2tpcERheXMgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICB2YXIgdG90YWwgPSBkYXRlLmdldERheSgpIC0gdGhpcy5vcHRpb25zLmZpcnN0RGF5O1xuICAgICAgICBpZiAodG90YWwgPCAwKVxuICAgICAgICAgICAgdG90YWwgKz0gNztcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH07XG4gICAgcmV0dXJuIENhbGVuZGFyO1xufShjb3JlXzEuTFBDb3JlKSk7XG5leHBvcnRzLkNhbGVuZGFyID0gQ2FsZW5kYXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBldmVudHNfMSA9IHJlcXVpcmUoXCJldmVudHNcIik7XG52YXIgZGF0ZXRpbWVfMSA9IHJlcXVpcmUoXCIuL2RhdGV0aW1lXCIpO1xudmFyIGxpdGVwaWNrZXJfMSA9IHJlcXVpcmUoXCIuL2xpdGVwaWNrZXJcIik7XG52YXIgTFBDb3JlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMUENvcmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTFBDb3JlKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGF0ZVBpY2tlZCA9IFtdO1xuICAgICAgICBfdGhpcy5jYWxlbmRhcnMgPSBbXTtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgICAgICBlbGVtZW50RW5kOiBudWxsLFxuICAgICAgICAgICAgcGFyZW50RWw6IG51bGwsXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICAgICAgZmlyc3REYXk6IDEsXG4gICAgICAgICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICAgICAgICAgIGxhbmc6ICdlbi1VUycsXG4gICAgICAgICAgICBkZWxpbWl0ZXI6ICcgLSAnLFxuICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM6IDEsXG4gICAgICAgICAgICBudW1iZXJPZkNvbHVtbnM6IDEsXG4gICAgICAgICAgICBzdGFydERhdGU6IG51bGwsXG4gICAgICAgICAgICBlbmREYXRlOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgICAgcG9zaXRpb246ICdhdXRvJyxcbiAgICAgICAgICAgIHNlbGVjdEZvcndhcmQ6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0QmFja3dhcmQ6IGZhbHNlLFxuICAgICAgICAgICAgc3BsaXRWaWV3OiBmYWxzZSxcbiAgICAgICAgICAgIGlubGluZU1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgc2luZ2xlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9BcHBseTogdHJ1ZSxcbiAgICAgICAgICAgIGFsbG93UmVwaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVyczogZmFsc2UsXG4gICAgICAgICAgICBzaG93VG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbFRvRGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1vYmlsZUZyaWVuZGx5OiB0cnVlLFxuICAgICAgICAgICAgcmVzZXRCdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgYXV0b1JlZnJlc2g6IGZhbHNlLFxuICAgICAgICAgICAgbG9ja0RheXNGb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICAgICAgICAgIGxvY2tEYXlzOiBbXSxcbiAgICAgICAgICAgIGRpc2FsbG93TG9ja0RheXNJblJhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2tEYXlzSW5jbHVzaXZpdHk6ICdbXScsXG4gICAgICAgICAgICBoaWdobGlnaHRlZERheXNGb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkRGF5czogW10sXG4gICAgICAgICAgICBkcm9wZG93bnM6IHtcbiAgICAgICAgICAgICAgICBtaW5ZZWFyOiAxOTkwLFxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogb2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgICAgICAgICAgbWF4WWVhcjogbnVsbCxcbiAgICAgICAgICAgICAgICBtb250aHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHllYXJzOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25UZXh0OiB7XG4gICAgICAgICAgICAgICAgYXBwbHk6ICdBcHBseScsXG4gICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICBwcmV2aW91c01vbnRoOiAnPHN2ZyB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03LjkxOSAwbDIuNzQ4IDIuNjY3TDUuMzMzIDhsNS4zMzQgNS4zMzNMNy45MTkgMTYgMCA4elwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+PC9zdmc+JyxcbiAgICAgICAgICAgICAgICBuZXh0TW9udGg6ICc8c3ZnIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTIuNzQ4IDE2TDAgMTMuMzMzIDUuMzMzIDggMCAyLjY2NyAyLjc0OCAwbDcuOTE5IDh6XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz48L3N2Zz4nLFxuICAgICAgICAgICAgICAgIHJlc2V0OiBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHdpZHRoPVxcXCIyNFxcXCI+XFxuICAgICAgICA8cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIi8+XFxuICAgICAgICA8cGF0aCBkPVxcXCJNMTMgM2MtNC45NyAwLTkgNC4wMy05IDlIMWwzLjg5IDMuODkuMDcuMTRMOSAxMkg2YzAtMy44NyAzLjEzLTcgNy03czcgMy4xMyA3IDctMy4xMyA3LTcgN2MtMS45MyAwLTMuNjgtLjc5LTQuOTQtMi4wNmwtMS40MiAxLjQyQzguMjcgMTkuOTkgMTAuNTEgMjEgMTMgMjFjNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6bS0xIDV2NWw0LjI4IDIuNTQuNzItMS4yMS0zLjUtMi4wOFY4SDEyelxcXCIvPlxcbiAgICAgIDwvc3ZnPlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXBUZXh0OiB7XG4gICAgICAgICAgICAgICAgb25lOiAnZGF5JyxcbiAgICAgICAgICAgICAgICBvdGhlcjogJ2RheXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5vcHRpb25zKSwgb3B0aW9ucy5lbGVtZW50LmRhdGFzZXQpO1xuICAgICAgICBPYmplY3Qua2V5cyhfdGhpcy5vcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zW29wdF0gPT09ICd0cnVlJyB8fCBfdGhpcy5vcHRpb25zW29wdF0gPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcHRpb25zW29wdF0gPSBfdGhpcy5vcHRpb25zW29wdF0gPT09ICd0cnVlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBkcm9wZG93bnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMub3B0aW9ucy5kcm9wZG93bnMpLCBvcHRpb25zLmRyb3Bkb3ducyk7XG4gICAgICAgIHZhciBidXR0b25UZXh0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLm9wdGlvbnMuYnV0dG9uVGV4dCksIG9wdGlvbnMuYnV0dG9uVGV4dCk7XG4gICAgICAgIHZhciB0b29sdGlwVGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5vcHRpb25zLnRvb2x0aXBUZXh0KSwgb3B0aW9ucy50b29sdGlwVGV4dCk7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMub3B0aW9ucyksIG9wdGlvbnMpO1xuICAgICAgICBfdGhpcy5vcHRpb25zLmRyb3Bkb3ducyA9IF9fYXNzaWduKHt9LCBkcm9wZG93bnMpO1xuICAgICAgICBfdGhpcy5vcHRpb25zLmJ1dHRvblRleHQgPSBfX2Fzc2lnbih7fSwgYnV0dG9uVGV4dCk7XG4gICAgICAgIF90aGlzLm9wdGlvbnMudG9vbHRpcFRleHQgPSBfX2Fzc2lnbih7fSwgdG9vbHRpcFRleHQpO1xuICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5hbGxvd1JlcGljayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLmxvY2tEYXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5sb2NrRGF5cyA9IGRhdGV0aW1lXzEuRGF0ZVRpbWUuY29udmVydEFycmF5KF90aGlzLm9wdGlvbnMubG9ja0RheXMsIF90aGlzLm9wdGlvbnMubG9ja0RheXNGb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzID0gZGF0ZXRpbWVfMS5EYXRlVGltZS5jb252ZXJ0QXJyYXkoX3RoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMsIF90aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzRm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSBfdGhpcy5wYXJzZUlucHV0KCksIHN0YXJ0VmFsdWUgPSBfYVswXSwgZW5kVmFsdWUgPSBfYVsxXTtcbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc3RhcnREYXRlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zaW5nbGVNb2RlIHx8IF90aGlzLm9wdGlvbnMuZW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSwgX3RoaXMub3B0aW9ucy5mb3JtYXQsIF90aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0VmFsdWUgJiYgX3RoaXMub3B0aW9ucy5lbmREYXRlKSB7XG4gICAgICAgICAgICBlbmRWYWx1ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKF90aGlzLm9wdGlvbnMuZW5kRGF0ZSwgX3RoaXMub3B0aW9ucy5mb3JtYXQsIF90aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0VmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lICYmICFpc05hTihzdGFydFZhbHVlLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zdGFydERhdGUgJiYgZW5kVmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lICYmICFpc05hTihlbmRWYWx1ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLmVuZERhdGUgPSBlbmRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmICEoX3RoaXMub3B0aW9ucy5zdGFydERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lKSkge1xuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5zdGFydERhdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghX3RoaXMub3B0aW9ucy5zaW5nbGVNb2RlXG4gICAgICAgICAgICAmJiAoIShfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUpXG4gICAgICAgICAgICAgICAgfHwgIShfdGhpcy5vcHRpb25zLmVuZERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lKSkpIHtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbnVsbDtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgX3RoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRoczsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gX3RoaXMub3B0aW9ucy5zdGFydERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lXG4gICAgICAgICAgICAgICAgPyBfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZS5jbG9uZSgpXG4gICAgICAgICAgICAgICAgOiBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSgpO1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSAmJiAoaWR4ID09PSAwIHx8IF90aGlzLm9wdGlvbnMuc3BsaXRWaWV3KSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXhEYXRlID0gX3RoaXMub3B0aW9ucy5tYXhEYXRlID8gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoX3RoaXMub3B0aW9ucy5tYXhEYXRlKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIG1pbkRhdGUgPSBfdGhpcy5vcHRpb25zLm1pbkRhdGUgPyBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShfdGhpcy5vcHRpb25zLm1pbkRhdGUpIDogbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0TW9udGhzID0gX3RoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocyAtIDE7XG4gICAgICAgICAgICAgICAgdmFyIGlzRGF0ZVJhbmdlID0gbWluRGF0ZSAmJiBtYXhEYXRlICYmIGRhdGUuaXNBZnRlcihtYXhEYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNEYXRlUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG1pbkRhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghbWluRGF0ZSAmJiBtYXhEYXRlICYmIGRhdGUuaXNBZnRlcihtYXhEYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlID0gbWF4RGF0ZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpIC0gb2Zmc2V0TW9udGhzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRlLnNldERhdGUoMSk7XG4gICAgICAgICAgICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIGlkeCk7XG4gICAgICAgICAgICBfdGhpcy5jYWxlbmRhcnNbaWR4XSA9IGRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc2hvd1Rvb2x0aXApIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnRvb2x0aXBQbHVyYWxTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLnBsdXJhbFNlbGVjdG9yID0gX3RoaXMub3B0aW9ucy50b29sdGlwUGx1cmFsU2VsZWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGx1cmFsUnVsZXMgPSBuZXcgSW50bC5QbHVyYWxSdWxlcyhfdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbHVyYWxTZWxlY3RvciA9IHBsdXJhbFJ1bGVzLnNlbGVjdC5iaW5kKHBsdXJhbFJ1bGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKF9iKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsdXJhbFNlbGVjdG9yID0gZnVuY3Rpb24gKGFyZzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhhcmcwKSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ29uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ290aGVyJztcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMUENvcmUuYWRkID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEpIHtcbiAgICAgICAgbGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlW25hbWVdID0gZGF0YTtcbiAgICB9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZnVuY3Rpb24tbmFtZVxuICAgIExQQ29yZS5wcm90b3R5cGUuRGF0ZVRpbWUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0KSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZSwgZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoKTtcbiAgICB9O1xuICAgIExQQ29yZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wbHVnaW5zICYmIHRoaXMub3B0aW9ucy5wbHVnaW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShwbHVnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZVtwbHVnaW5dLmluaXQuY2FsbChfdGhpcywgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTGl0ZXBpY2tlcjogcGx1Z2luIFxcdTAwQUJcIiArIHBsdWdpbiArIFwiXFx1MDBCQiBub3QgZm91bmQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMUENvcmUucHJvdG90eXBlLnBhcnNlSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZWxpbWl0ZXIgPSB0aGlzLm9wdGlvbnMuZGVsaW1pdGVyO1xuICAgICAgICB2YXIgZGVsaW1pdGVyUmVnZXggPSBuZXcgUmVnRXhwKFwiXCIgKyBkZWxpbWl0ZXIpO1xuICAgICAgICB2YXIgc3BsaXR0ZWRWYWx1ZSA9IHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZS5zcGxpdChkZWxpbWl0ZXIpXG4gICAgICAgICAgICA6IFtdO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZS5sZW5ndGhcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLnZhbHVlLCB0aGlzLm9wdGlvbnMuZm9ybWF0KSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUsIHRoaXMub3B0aW9ucy5mb3JtYXQpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICAmJiBkZWxpbWl0ZXJSZWdleC50ZXN0KHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlKVxuICAgICAgICAgICAgJiYgc3BsaXR0ZWRWYWx1ZS5sZW5ndGhcbiAgICAgICAgICAgICYmIHNwbGl0dGVkVmFsdWUubGVuZ3RoICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgdmFyIGQxID0gc3BsaXR0ZWRWYWx1ZS5zbGljZSgwLCBzcGxpdHRlZFZhbHVlLmxlbmd0aCAvIDIpLmpvaW4oZGVsaW1pdGVyKTtcbiAgICAgICAgICAgIHZhciBkMiA9IHNwbGl0dGVkVmFsdWUuc2xpY2Uoc3BsaXR0ZWRWYWx1ZS5sZW5ndGggLyAyKS5qb2luKGRlbGltaXRlcik7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGQxLCB0aGlzLm9wdGlvbnMuZm9ybWF0KSxcbiAgICAgICAgICAgICAgICBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkMiwgdGhpcy5vcHRpb25zLmZvcm1hdCksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9O1xuICAgIExQQ29yZS5wcm90b3R5cGUuaXNTaG93bmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWkgJiYgdGhpcy51aS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG4gICAgfTtcbiAgICBMUENvcmUucHJvdG90eXBlLmZpbmRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGNhbFJlY3QgPSB0aGlzLnVpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgb3JpZW50YXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgdmFyIHNjcm9sbFggPSB3aW5kb3cuc2Nyb2xsWCB8fCB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgIHZhciBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICB2YXIgdG9wID0gMDtcbiAgICAgICAgdmFyIGxlZnQgPSAwO1xuICAgICAgICBpZiAob3JpZW50YXRpb25bMF0gPT09ICdhdXRvJyB8fCAhKC90b3B8Ym90dG9tLy50ZXN0KG9yaWVudGF0aW9uWzBdKSkpIHtcbiAgICAgICAgICAgIHRvcCA9IHJlY3QuYm90dG9tICsgc2Nyb2xsWTtcbiAgICAgICAgICAgIHZhciBpc091dEJvdW5kcyA9IHJlY3QuYm90dG9tICsgY2FsUmVjdC5oZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgaGFzVG9wU3BhY2UgPSAocmVjdC50b3AgKyBzY3JvbGxZKSAtIGNhbFJlY3QuaGVpZ2h0ID49IGNhbFJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKGlzT3V0Qm91bmRzICYmIGhhc1RvcFNwYWNlKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gKHJlY3QudG9wICsgc2Nyb2xsWSkgLSBjYWxSZWN0LmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvcCA9IHJlY3Rbb3JpZW50YXRpb25bMF1dICsgc2Nyb2xsWTtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvblswXSA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICB0b3AgLT0gY2FsUmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoL2xlZnR8cmlnaHQvLnRlc3Qob3JpZW50YXRpb25bMF0pKSAmJiAoIW9yaWVudGF0aW9uWzFdIHx8IG9yaWVudGF0aW9uWzFdID09PSAnYXV0bycgfHwgISgvbGVmdHxyaWdodC8udGVzdChvcmllbnRhdGlvblsxXSkpKSkge1xuICAgICAgICAgICAgbGVmdCA9IHJlY3QubGVmdCArIHNjcm9sbFg7XG4gICAgICAgICAgICB2YXIgaXNPdXRCb3VuZHMgPSByZWN0LmxlZnQgKyBjYWxSZWN0LndpZHRoID4gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB2YXIgaGFzTGVmdFNwYWNlID0gKHJlY3QucmlnaHQgKyBzY3JvbGxYKSAtIGNhbFJlY3Qud2lkdGggPj0gMDtcbiAgICAgICAgICAgIGlmIChpc091dEJvdW5kcyAmJiBoYXNMZWZ0U3BhY2UpIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gKHJlY3QucmlnaHQgKyBzY3JvbGxYKSAtIGNhbFJlY3Qud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoL2xlZnR8cmlnaHQvLnRlc3Qob3JpZW50YXRpb25bMF0pKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IHJlY3Rbb3JpZW50YXRpb25bMF1dICsgc2Nyb2xsWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxlZnQgPSByZWN0W29yaWVudGF0aW9uWzFdXSArIHNjcm9sbFg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb25bMF0gPT09ICdyaWdodCcgfHwgb3JpZW50YXRpb25bMV0gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICBsZWZ0IC09IGNhbFJlY3Qud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBMUENvcmU7XG59KGV2ZW50c18xLkV2ZW50RW1pdHRlcikpO1xuZXhwb3J0cy5MUENvcmUgPSBMUENvcmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEYXRlVGltZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEYXRlVGltZShkYXRlLCBmb3JtYXQsIGxhbmcpIHtcbiAgICAgICAgaWYgKGRhdGUgPT09IHZvaWQgMCkgeyBkYXRlID0gbnVsbDsgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSB2b2lkIDApIHsgZm9ybWF0ID0gbnVsbDsgfVxuICAgICAgICBpZiAobGFuZyA9PT0gdm9pZCAwKSB7IGxhbmcgPSAnZW4tVVMnOyB9XG4gICAgICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnb2JqZWN0JyAmJiBmb3JtYXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICB0aGlzLmRhdGVJbnN0YW5jZSA9IGZvcm1hdC5wYXJzZShkYXRlIGluc3RhbmNlb2YgRGF0ZVRpbWUgPyBkYXRlLmNsb25lKCkudG9KU0RhdGUoKSA6IGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVJbnN0YW5jZSA9IChEYXRlVGltZS5wYXJzZURhdGVUaW1lKGRhdGUsIGZvcm1hdCwgbGFuZykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZUluc3RhbmNlID0gKERhdGVUaW1lLnBhcnNlRGF0ZVRpbWUoZGF0ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRlSW5zdGFuY2UgPSAoRGF0ZVRpbWUucGFyc2VEYXRlVGltZShuZXcgRGF0ZSgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYW5nID0gbGFuZztcbiAgICB9XG4gICAgRGF0ZVRpbWUucGFyc2VEYXRlVGltZSA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQsIGxhbmcpIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9ICdZWVlZLU1NLUREJzsgfVxuICAgICAgICBpZiAobGFuZyA9PT0gdm9pZCAwKSB7IGxhbmcgPSAnZW4tVVMnOyB9XG4gICAgICAgIGlmICghZGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZVRpbWUpXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5jbG9uZSgpLnRvSlNEYXRlKCk7XG4gICAgICAgIGlmICgvXi0/XFxkezEwLH0kLy50ZXN0KGRhdGUpKVxuICAgICAgICAgICAgcmV0dXJuIERhdGVUaW1lLmdldERhdGVaZXJvVGltZShuZXcgRGF0ZShOdW1iZXIoZGF0ZSkpKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBtID0gbnVsbDtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uZGl0aW9uYWwtYXNzaWdubWVudFxuICAgICAgICAgICAgd2hpbGUgKChtID0gRGF0ZVRpbWUucmVnZXguZXhlYyhmb3JtYXQpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1bMV0gPT09ICdcXFxcJylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7IC8vIGRlbGV0ZSB3aGVuIHJlZ2V4cCBsb29rYmVoaW5kXG4gICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGVQYXR0ZXJuID0ge1xuICAgICAgICAgICAgICAgICAgICB5ZWFyOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBtb250aDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRNb250aDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbG9uZ01vbnRoOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkYXk6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzWzBdLmluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlUGF0dGVybi52YWx1ZSArPSAnLio/JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKG1hdGNoZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGsgPSBfYlswXSwgbWF0Y2ggPSBfYlsxXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IE51bWJlcihrKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jID0gRGF0ZVRpbWUuZm9ybWF0UGF0dGVybnMobWF0Y2hbMF0sIGxhbmcpLCBncm91cCA9IF9jLmdyb3VwLCBwYXR0ZXJuID0gX2MucGF0dGVybjtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBhdHRlcm5bZ3JvdXBdID0ga2V5ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBhdHRlcm4udmFsdWUgKz0gcGF0dGVybjtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBhdHRlcm4udmFsdWUgKz0gJy4qPyc7IC8vIGFueSBkZWxpbWl0ZXJzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkYXRlUmVnZXggPSBuZXcgUmVnRXhwKFwiXlwiICsgZGF0ZVBhdHRlcm4udmFsdWUgKyBcIiRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVSZWdleC50ZXN0KGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gZGF0ZVJlZ2V4LmV4ZWMoZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyID0gTnVtYmVyKGRbZGF0ZVBhdHRlcm4ueWVhcl0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGggPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZVBhdHRlcm4ubW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoID0gTnVtYmVyKGRbZGF0ZVBhdHRlcm4ubW9udGhdKSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0ZVBhdHRlcm4uc2hvcnRNb250aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSBEYXRlVGltZS5zaG9ydE1vbnRocyhsYW5nKS5pbmRleE9mKGRbZGF0ZVBhdHRlcm4uc2hvcnRNb250aF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGVQYXR0ZXJuLmxvbmdNb250aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSBEYXRlVGltZS5sb25nTW9udGhzKGxhbmcpLmluZGV4T2YoZFtkYXRlUGF0dGVybi5sb25nTW9udGhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF5ID0gTnVtYmVyKGRbZGF0ZVBhdHRlcm4uZGF5XSkgfHwgMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRGF0ZVRpbWUuZ2V0RGF0ZVplcm9UaW1lKG5ldyBEYXRlKGRhdGUpKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLmNvbnZlcnRBcnJheSA9IGZ1bmN0aW9uIChhcnJheSwgZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLm1hcChmdW5jdGlvbiAoZDEpIHsgcmV0dXJuIG5ldyBEYXRlVGltZShkMSwgZm9ybWF0KTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKGQsIGZvcm1hdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGF0ZVRpbWUuZ2V0RGF0ZVplcm9UaW1lID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgMCwgMCwgMCwgMCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5zaG9ydE1vbnRocyA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgIHJldHVybiBEYXRlVGltZS5NT05USF9KU1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4gbmV3IERhdGUoMjAxOSwgeCkudG9Mb2NhbGVTdHJpbmcobGFuZywgeyBtb250aDogJ3Nob3J0JyB9KTsgfSk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5sb25nTW9udGhzID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgcmV0dXJuIERhdGVUaW1lLk1PTlRIX0pTXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBuZXcgRGF0ZSgyMDE5LCB4KS50b0xvY2FsZVN0cmluZyhsYW5nLCB7IG1vbnRoOiAnbG9uZycgfSk7IH0pO1xuICAgIH07XG4gICAgRGF0ZVRpbWUuZm9ybWF0UGF0dGVybnMgPSBmdW5jdGlvbiAodG9rZW4sIGxhbmcpIHtcbiAgICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAgICAgY2FzZSAnWVknOlxuICAgICAgICAgICAgY2FzZSAnWVlZWSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICd5ZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogXCIoXFxcXGR7XCIgKyB0b2tlbi5sZW5ndGggKyBcIn0pXCIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiAnbW9udGgnLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnKFxcXFxkezEsMn0pJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnTU0nOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiAnbW9udGgnLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnKFxcXFxkezJ9KScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICdzaG9ydE1vbnRoJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogXCIoXCIgKyBEYXRlVGltZS5zaG9ydE1vbnRocyhsYW5nKS5qb2luKCd8JykgKyBcIilcIixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICdsb25nTW9udGgnLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIihcIiArIERhdGVUaW1lLmxvbmdNb250aHMobGFuZykuam9pbignfCcpICsgXCIpXCIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiAnZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJyhcXFxcZHsxLDJ9KScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ0REJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBncm91cDogJ2RheScsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46ICcoXFxcXGR7Mn0pJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUudG9KU0RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS50b0xvY2FsZVN0cmluZyhhcmcwLCBhcmcxKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS50b0RhdGVTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS50b0RhdGVTdHJpbmcoKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5nZXRTZWNvbmRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2UuZ2V0U2Vjb25kcygpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldERheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldERheSgpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5nZXRUaW1lKCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0RGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldERhdGUoKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5nZXRNb250aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldE1vbnRoKCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0RnVsbFllYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5nZXRGdWxsWWVhcigpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnNldE1vbnRoID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2Uuc2V0TW9udGgoYXJnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5zZXRIb3VycyA9IGZ1bmN0aW9uIChob3VycywgbWludXRlcywgc2Vjb25kcywgbXMpIHtcbiAgICAgICAgaWYgKGhvdXJzID09PSB2b2lkIDApIHsgaG91cnMgPSAwOyB9XG4gICAgICAgIGlmIChtaW51dGVzID09PSB2b2lkIDApIHsgbWludXRlcyA9IDA7IH1cbiAgICAgICAgaWYgKHNlY29uZHMgPT09IHZvaWQgMCkgeyBzZWNvbmRzID0gMDsgfVxuICAgICAgICBpZiAobXMgPT09IHZvaWQgMCkgeyBtcyA9IDA7IH1cbiAgICAgICAgdGhpcy5kYXRlSW5zdGFuY2Uuc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1zKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5zZXRTZWNvbmRzID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2Uuc2V0U2Vjb25kcyhhcmcpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnNldERhdGUgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5zZXREYXRlKGFyZyk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuc2V0RnVsbFllYXIgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5zZXRGdWxsWWVhcihhcmcpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldFdlZWsgPSBmdW5jdGlvbiAoZmlyc3REYXkpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IG5ldyBEYXRlKHRoaXMudGltZXN0YW1wKCkpO1xuICAgICAgICB2YXIgZGF5TnIgPSAodGhpcy5nZXREYXkoKSArICg3IC0gZmlyc3REYXkpKSAlIDc7XG4gICAgICAgIHRhcmdldC5zZXREYXRlKHRhcmdldC5nZXREYXRlKCkgLSBkYXlOcik7XG4gICAgICAgIHZhciBzdGFydFdlZWtkYXkgPSB0YXJnZXQuZ2V0VGltZSgpO1xuICAgICAgICB0YXJnZXQuc2V0TW9udGgoMCwgMSk7XG4gICAgICAgIGlmICh0YXJnZXQuZ2V0RGF5KCkgIT09IGZpcnN0RGF5KSB7XG4gICAgICAgICAgICB0YXJnZXQuc2V0TW9udGgoMCwgMSArICgoNCAtIHRhcmdldC5nZXREYXkoKSkgKyA3KSAlIDcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxICsgTWF0aC5jZWlsKChzdGFydFdlZWtkYXkgLSB0YXJnZXQuZ2V0VGltZSgpKSAvIDYwNDgwMDAwMCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUodGhpcy50b0pTRGF0ZSgpKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc0JldHdlZW4gPSBmdW5jdGlvbiAoZGF0ZTEsIGRhdGUyLCBpbmNsdXNpdml0eSkge1xuICAgICAgICBpZiAoaW5jbHVzaXZpdHkgPT09IHZvaWQgMCkgeyBpbmNsdXNpdml0eSA9ICcoKSc7IH1cbiAgICAgICAgc3dpdGNoIChpbmNsdXNpdml0eSkge1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhc2UgJygpJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lc3RhbXAoKSA+IGRhdGUxLmdldFRpbWUoKSAmJiB0aGlzLnRpbWVzdGFtcCgpIDwgZGF0ZTIuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnWyknOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVzdGFtcCgpID49IGRhdGUxLmdldFRpbWUoKSAmJiB0aGlzLnRpbWVzdGFtcCgpIDwgZGF0ZTIuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnKF0nOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVzdGFtcCgpID4gZGF0ZTEuZ2V0VGltZSgpICYmIHRoaXMudGltZXN0YW1wKCkgPD0gZGF0ZTIuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnW10nOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVzdGFtcCgpID49IGRhdGUxLmdldFRpbWUoKSAmJiB0aGlzLnRpbWVzdGFtcCgpIDw9IGRhdGUyLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmlzQmVmb3JlID0gZnVuY3Rpb24gKGRhdGUsIHVuaXQpIHtcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmdldFRpbWUoKSA+IHRoaXMuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCAxKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgIGNhc2UgJ3llYXJzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpID4gdGhpcy5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaXNCZWZvcmU6IEludmFsaWQgdW5pdCEnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc1NhbWVPckJlZm9yZSA9IGZ1bmN0aW9uIChkYXRlLCB1bml0KSB7XG4gICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmRzJzsgfVxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPj0gdGhpcy5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID49IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+PSBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaXNTYW1lT3JCZWZvcmU6IEludmFsaWQgdW5pdCEnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc0FmdGVyID0gZnVuY3Rpb24gKGRhdGUsIHVuaXQpIHtcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRpbWUoKSA+IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgIGNhc2UgJ3llYXJzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGdWxsWWVhcigpID4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaXNBZnRlcjogSW52YWxpZCB1bml0IScpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmlzU2FtZU9yQWZ0ZXIgPSBmdW5jdGlvbiAoZGF0ZSwgdW5pdCkge1xuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cbiAgICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGltZSgpID49IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+PSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCAxKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPj0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lzU2FtZU9yQWZ0ZXI6IEludmFsaWQgdW5pdCEnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc1NhbWUgPSBmdW5jdGlvbiAoZGF0ZSwgdW5pdCkge1xuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cbiAgICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGltZSgpID09PSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPT09IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA9PT0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lzU2FtZTogSW52YWxpZCB1bml0IScpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgdW5pdCkge1xuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cbiAgICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWNvbmRzKHRoaXMuZ2V0U2Vjb25kcygpICsgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZSh0aGlzLmdldERhdGUoKSArIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNb250aCh0aGlzLmdldE1vbnRoKCkgKyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAoZHVyYXRpb24sIHVuaXQpIHtcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2Vjb25kcyh0aGlzLmdldFNlY29uZHMoKSAtIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgLSBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9udGgodGhpcy5nZXRNb250aCgpIC0gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmRpZmYgPSBmdW5jdGlvbiAoZGF0ZSwgdW5pdCkge1xuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cbiAgICAgICAgdmFyIG9uZURheSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgodGhpcy50aW1lc3RhbXAoKSAtIGRhdGUuZ2V0VGltZSgpKSAvIG9uZURheSk7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxuICAgICAgICAgICAgLy8gQFRPRE9cbiAgICAgICAgfVxuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQsIGxhbmcpIHtcbiAgICAgICAgaWYgKGxhbmcgPT09IHZvaWQgMCkgeyBsYW5nID0gJ2VuLVVTJzsgfVxuICAgICAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQub3V0cHV0KHRoaXMuY2xvbmUoKS50b0pTRGF0ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzcG9uc2UgPSAnJztcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgdmFyIG0gPSBudWxsO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbmRpdGlvbmFsLWFzc2lnbm1lbnRcbiAgICAgICAgd2hpbGUgKChtID0gRGF0ZVRpbWUucmVnZXguZXhlYyhmb3JtYXQpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobVsxXSA9PT0gJ1xcXFwnKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBkZWxldGUgd2hlbiByZWdleHAgbG9va2JlaGluZFxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gYWRkIHN0YXJ0IGxpbmUgb2YgdG9rZW5zIGFyZSBub3QgYXQgdGhlIGJlZ2lubmluZ1xuICAgICAgICAgICAgaWYgKG1hdGNoZXNbMF0uaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgKz0gZm9ybWF0LnN1YnN0cmluZygwLCBtYXRjaGVzWzBdLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3QuZW50cmllcyhtYXRjaGVzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGsgPSBfYlswXSwgbWF0Y2ggPSBfYlsxXTtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gTnVtYmVyKGspO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlICs9IHRoaXMuZm9ybWF0VG9rZW5zKG1hdGNoWzBdLCBsYW5nKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlc1trZXkgKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSArPSBmb3JtYXQuc3Vic3RyaW5nKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoLCBtYXRjaGVzW2tleSArIDFdLmluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYWRkIGVuZCBsaW5lIGlmIHRva2VucyBhcmUgbm90IGF0IHRoZSBlbmRpbmdcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBtYXRjaGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgKz0gZm9ybWF0LnN1YnN0cmluZyhtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSBlc2NhcGUgY2hhcmFjdGVyc1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVwbGFjZSgvXFxcXC9nLCAnJyk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUudGltZXN0YW1wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpLCAwLCAwLCAwLCAwKS5nZXRUaW1lKCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZm9ybWF0VG9rZW5zID0gZnVuY3Rpb24gKHRva2VuLCBsYW5nKSB7XG4gICAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgICAgIGNhc2UgJ1lZJzogcmV0dXJuIFN0cmluZyh0aGlzLmdldEZ1bGxZZWFyKCkpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgIGNhc2UgJ1lZWVknOiByZXR1cm4gU3RyaW5nKHRoaXMuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICBjYXNlICdNJzogcmV0dXJuIFN0cmluZyh0aGlzLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIGNhc2UgJ01NJzogcmV0dXJuIChcIjBcIiArICh0aGlzLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xuICAgICAgICAgICAgY2FzZSAnTU1NJzogcmV0dXJuIERhdGVUaW1lLnNob3J0TW9udGhzKGxhbmcpW3RoaXMuZ2V0TW9udGgoKV07XG4gICAgICAgICAgICBjYXNlICdNTU1NJzogcmV0dXJuIERhdGVUaW1lLmxvbmdNb250aHMobGFuZylbdGhpcy5nZXRNb250aCgpXTtcbiAgICAgICAgICAgIGNhc2UgJ0QnOiByZXR1cm4gU3RyaW5nKHRoaXMuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgIGNhc2UgJ0REJzogcmV0dXJuIChcIjBcIiArIHRoaXMuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIHJlcGxhY2UgdG8gcmVnZXhwIGxvb2tiZWhpbmQgd2hlbiBtb3N0IHBvcHVsYXIgYnJvd3NlcnMgd2lsbCBzdXBwb3J0XG4gICAgLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD1qcy1yZWdleHAtbG9va2JlaGluZFxuICAgIC8vIC8oPzwhXFxcXCkoWXsyLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9XSkvZ1xuICAgIERhdGVUaW1lLnJlZ2V4ID0gLyhcXFxcKT8oWXsyLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9KS9nO1xuICAgIERhdGVUaW1lLk1PTlRIX0pTID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMV07XG4gICAgcmV0dXJuIERhdGVUaW1lO1xufSgpKTtcbmV4cG9ydHMuRGF0ZVRpbWUgPSBEYXRlVGltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGxpdGVwaWNrZXJfMSA9IHJlcXVpcmUoXCIuL2xpdGVwaWNrZXJcIik7XG5leHBvcnRzLkxpdGVwaWNrZXIgPSBsaXRlcGlja2VyXzEuTGl0ZXBpY2tlcjtcbnJlcXVpcmUoXCIuL21ldGhvZHNcIik7XG53aW5kb3cuTGl0ZXBpY2tlciA9IGxpdGVwaWNrZXJfMS5MaXRlcGlja2VyO1xuZXhwb3J0cy5kZWZhdWx0ID0gbGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY2FsZW5kYXJfMSA9IHJlcXVpcmUoXCIuL2NhbGVuZGFyXCIpO1xudmFyIGRhdGV0aW1lXzEgPSByZXF1aXJlKFwiLi9kYXRldGltZVwiKTtcbnZhciBzdHlsZSA9IHJlcXVpcmUoXCIuL3Njc3MvbWFpbi5zY3NzXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbnZhciBMaXRlcGlja2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMaXRlcGlja2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExpdGVwaWNrZXIob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcmV2ZW50Q2xpY2sgPSBmYWxzZTtcbiAgICAgICAgLy9cbiAgICAgICAgX3RoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNjcm9sbFRvRGF0ZSA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNjcm9sbFRvRGF0ZSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICAgIHZhciBzdGFydERhdGUgPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSA/IHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKSA6IG51bGw7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgdmFyIGVuZERhdGUgPSB0aGlzLm9wdGlvbnMuZW5kRGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUgPyB0aGlzLm9wdGlvbnMuZW5kRGF0ZS5jbG9uZSgpIDogbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnREYXRlICYmICghZWwgfHwgZWwgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzWzBdID0gc3RhcnREYXRlLmNsb25lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbCAmJiB0aGlzLm9wdGlvbnMuZW5kRGF0ZSAmJiBlbCA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpIHtcbiAgICAgICAgICAgICAgICBlbmREYXRlLnNldERhdGUoMSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocyA+IDEgJiYgZW5kRGF0ZS5pc0FmdGVyKHN0YXJ0RGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZS5zZXRNb250aChlbmREYXRlLmdldE1vbnRoKCkgLSAodGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzIC0gMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1swXSA9IGVuZERhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy51aS5jbGFzc05hbWUgPSBzdHlsZS5saXRlcGlja2VyO1xuICAgICAgICB0aGlzLnVpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMudWkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcyksIHRydWUpO1xuICAgICAgICB0aGlzLnVpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b1JlZnJlc2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbklucHV0LmJpbmQodGhpcyksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25JbnB1dC5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhcmVudEVsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhcmVudEVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucGFyZW50RWwuYXBwZW5kQ2hpbGQodGhpcy51aSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5wYXJlbnRFbCkuYXBwZW5kQ2hpbGQodGhpcy51aSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy51aSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnVpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudWkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnNldHVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2V0dXAuY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS51cGRhdGVJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IHRoaXMub3B0aW9ucy5zdGFydERhdGU7XG4gICAgICAgIHZhciBlbmREYXRlID0gdGhpcy5vcHRpb25zLmVuZERhdGU7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiBzdGFydERhdGUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlID0gc3RhcnREYXRlLmZvcm1hdCh0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmIHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICAgICAgICB2YXIgc3RhcnRWYWx1ZSA9IHN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICAgICAgdmFyIGVuZFZhbHVlID0gZW5kRGF0ZS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZC52YWx1ZSA9IGVuZFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUgPSBcIlwiICsgc3RhcnRWYWx1ZSArIHRoaXMub3B0aW9ucy5kZWxpbWl0ZXIgKyBlbmRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YXJ0RGF0ZSAmJiAhZW5kRGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5pc1NhbWVQaWNrZXIgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIHBpY2tlciA9IGVsLmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5saXRlcGlja2VyKTtcbiAgICAgICAgcmV0dXJuIHBpY2tlciA9PT0gdGhpcy51aTtcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3VsZFNob3duID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiAhZWwuZGlzYWJsZWQgJiYgKGVsID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudFxuICAgICAgICAgICAgfHwgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kICYmIGVsID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkpO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdWxkUmVzZXREYXRlUGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgfHwgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMjtcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3VsZFN3YXBEYXRlUGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMlxuICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkWzBdLmdldFRpbWUoKSA+IHRoaXMuZGF0ZVBpY2tlZFsxXS5nZXRUaW1lKCk7XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zaG91bGRDaGVja0xvY2tEYXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRpc2FsbG93TG9ja0RheXNJblJhbmdlXG4gICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAyO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIXRoaXMudWkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGljayBvbiBlbGVtZW50XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFNob3duKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdyh0YXJnZXQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsaWNrIG91dHNpZGUgcGlja2VyXG4gICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5saXRlcGlja2VyKSAmJiB0aGlzLmlzU2hvd25pbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzU2FtZVBpY2tlcih0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCdiZWZvcmU6Y2xpY2snLCB0YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5wcmV2ZW50Q2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudENsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xpY2sgb24gZGF0ZVxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5kYXlJdGVtKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuaXNMb2NrZWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkUmVzZXREYXRlUGlja2VkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFt0aGlzLmRhdGVQaWNrZWQubGVuZ3RoXSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRhcmdldC5kYXRhc2V0LnRpbWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkU3dhcERhdGVQaWNrZWQoKSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wRGF0ZSA9IHRoaXMuZGF0ZVBpY2tlZFsxXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFsxXSA9IHRoaXMuZGF0ZVBpY2tlZFswXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFswXSA9IHRlbXBEYXRlLmNsb25lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRDaGVja0xvY2tEYXlzKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbG9ja2VkID0gdXRpbHNfMS5yYW5nZUlzTG9ja2VkKHRoaXMuZGF0ZVBpY2tlZCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAobG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6cmFuZ2UnLCB0aGlzLmRhdGVQaWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFsncHJlc2VsZWN0J10sIF9fc3ByZWFkQXJyYXlzKHRoaXMuZGF0ZVBpY2tlZCkubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmNsb25lKCk7IH0pKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9BcHBseSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZSh0aGlzLmRhdGVQaWNrZWRbMF0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRlUmFuZ2UodGhpcy5kYXRlUGlja2VkWzBdLCB0aGlzLmRhdGVQaWNrZWRbMV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xpY2sgb24gYnV0dG9uIHByZXZpb3VzIG1vbnRoXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmJ1dHRvblByZXZpb3VzTW9udGgpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgaWR4ID0gMDtcbiAgICAgICAgICAgIHZhciBudW1iZXJPZk1vbnRocyA9IHRoaXMub3B0aW9ucy5zd2l0Y2hpbmdNb250aHMgfHwgdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zcGxpdFZpZXcpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9udGhJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5tb250aEl0ZW0pO1xuICAgICAgICAgICAgICAgIGlkeCA9IHV0aWxzXzEuZmluZE5lc3RlZE1vbnRoSXRlbShtb250aEl0ZW0pO1xuICAgICAgICAgICAgICAgIG51bWJlck9mTW9udGhzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzW2lkeF0uc2V0TW9udGgodGhpcy5jYWxlbmRhcnNbaWR4XS5nZXRNb250aCgpIC0gbnVtYmVyT2ZNb250aHMpO1xuICAgICAgICAgICAgdGhpcy5nb3RvRGF0ZSh0aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bW9udGgnLCB0aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsaWNrIG9uIGJ1dHRvbiBuZXh0IG1vbnRoXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmJ1dHRvbk5leHRNb250aCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBpZHggPSAwO1xuICAgICAgICAgICAgdmFyIG51bWJlck9mTW9udGhzID0gdGhpcy5vcHRpb25zLnN3aXRjaGluZ01vbnRocyB8fCB0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHM7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xuICAgICAgICAgICAgICAgIHZhciBtb250aEl0ZW0gPSB0YXJnZXQuY2xvc2VzdChcIi5cIiArIHN0eWxlLm1vbnRoSXRlbSk7XG4gICAgICAgICAgICAgICAgaWR4ID0gdXRpbHNfMS5maW5kTmVzdGVkTW9udGhJdGVtKG1vbnRoSXRlbSk7XG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHMgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbaWR4XS5zZXRNb250aCh0aGlzLmNhbGVuZGFyc1tpZHhdLmdldE1vbnRoKCkgKyBudW1iZXJPZk1vbnRocyk7XG4gICAgICAgICAgICB0aGlzLmdvdG9EYXRlKHRoaXMuY2FsZW5kYXJzW2lkeF0sIGlkeCk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTptb250aCcsIHRoaXMuY2FsZW5kYXJzW2lkeF0sIGlkeCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xpY2sgb24gYnV0dG9uIGNhbmNlbFxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5idXR0b25DYW5jZWwpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYnV0dG9uOmNhbmNlbCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsaWNrIG9uIGJ1dHRvbiBhcHBseVxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5idXR0b25BcHBseSkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuZGF0ZVBpY2tlZFswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZVJhbmdlKHRoaXMuZGF0ZVBpY2tlZFswXSwgdGhpcy5kYXRlUGlja2VkWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdidXR0b246YXBwbHknLCB0aGlzLm9wdGlvbnMuc3RhcnREYXRlLCB0aGlzLm9wdGlvbnMuZW5kRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xpY2sgb24gbW9udGhcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUubW9udGhJdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBtb250aCA9IHBhcnNlSW50KHRhcmdldC5kYXRhc2V0Lm1vbnRoKTtcbiAgICAgICAgICAgIHZhciB5ZWFyID0gcGFyc2VJbnQodGFyZ2V0LmRhdGFzZXQueWVhcik7XG4gICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWRbMF0gPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSkpO1xuICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VkWzFdID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUobmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKSk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGVSYW5nZSh0aGlzLmRhdGVQaWNrZWRbMF0sIHRoaXMuZGF0ZVBpY2tlZFsxXSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoWydwcmVzZWxlY3QnXSwgX19zcHJlYWRBcnJheXModGhpcy5kYXRlUGlja2VkKS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuY2xvbmUoKTsgfSkpKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3dUb29sdGlwID0gZnVuY3Rpb24gKGVsZW1lbnQsIHRleHQpIHtcbiAgICAgICAgdmFyIHRvb2x0aXAgPSB0aGlzLnVpLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5jb250YWluZXJUb29sdGlwKTtcbiAgICAgICAgdG9vbHRpcC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICB0b29sdGlwLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgIHZhciBwaWNrZXJCQ1IgPSB0aGlzLnVpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgdG9vbHRpcEJDUiA9IHRvb2x0aXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBkYXlCQ1IgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgdG9wID0gZGF5QkNSLnRvcDtcbiAgICAgICAgdmFyIGxlZnQgPSBkYXlCQ1IubGVmdDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlICYmIHRoaXMub3B0aW9ucy5wYXJlbnRFbCkge1xuICAgICAgICAgICAgdmFyIHBhcmVudEJDUiA9IHRoaXMudWkucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHRvcCAtPSBwYXJlbnRCQ1IudG9wO1xuICAgICAgICAgICAgbGVmdCAtPSBwYXJlbnRCQ1IubGVmdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvcCAtPSBwaWNrZXJCQ1IudG9wO1xuICAgICAgICAgICAgbGVmdCAtPSBwaWNrZXJCQ1IubGVmdDtcbiAgICAgICAgfVxuICAgICAgICB0b3AgLT0gdG9vbHRpcEJDUi5oZWlnaHQ7XG4gICAgICAgIGxlZnQgLT0gdG9vbHRpcEJDUi53aWR0aCAvIDI7XG4gICAgICAgIGxlZnQgKz0gZGF5QkNSLndpZHRoIC8gMjtcbiAgICAgICAgdG9vbHRpcC5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgICAgIHRoaXMuZW1pdCgndG9vbHRpcCcsIHRvb2x0aXAsIGVsZW1lbnQpO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuaGlkZVRvb2x0aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b29sdGlwID0gdGhpcy51aS5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUuY29udGFpbmVyVG9vbHRpcCk7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdWxkQWxsb3dNb3VzZUVudGVyID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5vcHRpb25zLnNpbmdsZU1vZGVcbiAgICAgICAgICAgICYmICFlbC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuaXNMb2NrZWQpO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdWxkQWxsb3dSZXBpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZFxuICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmFsbG93UmVwaWNrXG4gICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuc3RhcnREYXRlXG4gICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZW5kRGF0ZTtcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLmlzRGF5SXRlbSA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmRheUl0ZW0pO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGhpcy5pc0RheUl0ZW0odGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNob3VsZEFsbG93TW91c2VFbnRlcih0YXJnZXQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRBbGxvd1JlcGljaygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJpZ2dlckVsZW1lbnQgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFswXSA9IHRoaXMub3B0aW9ucy5lbmREYXRlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudHJpZ2dlckVsZW1lbnQgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50RW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFswXSA9IHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGFydERhdGVFbGVtZW50ID0gdGhpcy51aVxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUuZGF5SXRlbSArIFwiW2RhdGEtdGltZT1cXFwiXCIgKyB0aGlzLmRhdGVQaWNrZWRbMF0uZ2V0VGltZSgpICsgXCJcXFwiXVwiKTtcbiAgICAgICAgICAgIHZhciBkYXRlMV8xID0gdGhpcy5kYXRlUGlja2VkWzBdLmNsb25lKCk7XG4gICAgICAgICAgICB2YXIgZGF0ZTJfMSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRhcmdldC5kYXRhc2V0LnRpbWUpO1xuICAgICAgICAgICAgdmFyIGlzRmxpcHBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGRhdGUxXzEuZ2V0VGltZSgpID4gZGF0ZTJfMS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcERhdGUgPSBkYXRlMV8xLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgZGF0ZTFfMSA9IGRhdGUyXzEuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBkYXRlMl8xID0gdGVtcERhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBpc0ZsaXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFsbERheUl0ZW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy51aS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiICsgc3R5bGUuZGF5SXRlbSkpO1xuICAgICAgICAgICAgYWxsRGF5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZC5kYXRhc2V0LnRpbWUpO1xuICAgICAgICAgICAgICAgIHZhciBkYXkgPSBfdGhpcy5yZW5kZXJEYXkoZGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuaXNCZXR3ZWVuKGRhdGUxXzEsIGRhdGUyXzEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzSW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGQuY2xhc3NOYW1lID0gZGF5LmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNFbmREYXRlKTtcbiAgICAgICAgICAgIGlmIChpc0ZsaXBwZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnREYXRlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNGbGlwcGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNGbGlwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzdGFydERhdGVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5pc0ZsaXBwZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5pc0ZsaXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93VG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXlzID0gZGF0ZTJfMS5kaWZmKGRhdGUxXzEsICdkYXknKSArIDE7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMudG9vbHRpcE51bWJlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBkYXlzID0gdGhpcy5vcHRpb25zLnRvb2x0aXBOdW1iZXIuY2FsbCh0aGlzLCBkYXlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRheXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwbHVyYWxOYW1lID0gdGhpcy5wbHVyYWxTZWxlY3RvcihkYXlzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsdXJhbFRleHQgPSB0aGlzLm9wdGlvbnMudG9vbHRpcFRleHRbcGx1cmFsTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnRvb2x0aXBUZXh0W3BsdXJhbE5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiW1wiICsgcGx1cmFsTmFtZSArIFwiXVwiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IGRheXMgKyBcIiBcIiArIHBsdXJhbFRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAodGFyZ2V0LCB0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZml4IGJ1ZyBpT1MgMTAtMTIgLSBodHRwczovL2dpdGh1Yi5jb20vd2FraXJpbi9MaXRlcGlja2VyL2lzc3Vlcy8xMjRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpRGV2aWNlID0gLyhpcGhvbmV8aXBhZCkvaS50ZXN0KHVhKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlPUzExb3IxMiA9IC9PUyAxKFswLTJdKS9pLnRlc3QodWEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaURldmljZSAmJiBpT1MxMW9yMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbGxvd1JlcGlja1xuICAgICAgICAgICAgfHwgKHRoaXMub3B0aW9ucy5hbGxvd1JlcGljayAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSAmJiAhdGhpcy5vcHRpb25zLmVuZERhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5vbklucHV0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucGFyc2VJbnB1dCgpLCBzdGFydFZhbHVlID0gX2FbMF0sIGVuZFZhbHVlID0gX2FbMV07XG4gICAgICAgIHZhciBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIHZhciBkYXRlRm9ybWF0ID0gdGhpcy5vcHRpb25zLmZvcm1hdDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gc3RhcnRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcbiAgICAgICAgICAgICAgICAmJiBlbmRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcbiAgICAgICAgICAgICAgICAmJiBzdGFydFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAmJiBlbmRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gc3RhcnRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcbiAgICAgICAgICAgICAgICAmJiBzdGFydFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gc3RhcnRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcbiAgICAgICAgICAgICAgICAmJiBlbmRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgICAgICYmIFwiXCIgKyBzdGFydFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSArIHRoaXMub3B0aW9ucy5kZWxpbWl0ZXIgKyBlbmRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICBpZiAoZW5kVmFsdWUgJiYgc3RhcnRWYWx1ZS5nZXRUaW1lKCkgPiBlbmRWYWx1ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcERhdGUgPSBzdGFydFZhbHVlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZSA9IGVuZFZhbHVlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgZW5kVmFsdWUgPSB0ZW1wRGF0ZS5jbG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHN0YXJ0VmFsdWUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgICAgIGlmIChlbmRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbmREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZW5kVmFsdWUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICB2YXIgZGF0ZUdvID0gc3RhcnRWYWx1ZS5jbG9uZSgpO1xuICAgICAgICAgICAgdmFyIG1vbnRoSWR4ID0gMDtcbiAgICAgICAgICAgIHZhciBpc1N0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xuICAgICAgICAgICAgICAgIGlzU3RhcnQgPSBzdGFydFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSA9PT0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXNTdGFydCA9IGV2ZW50LnRhcmdldC52YWx1ZS5zdGFydHNXaXRoKHN0YXJ0VmFsdWUuZm9ybWF0KGRhdGVGb3JtYXQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNTdGFydCkge1xuICAgICAgICAgICAgICAgIGRhdGVHbyA9IGVuZFZhbHVlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgbW9udGhJZHggPSB0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHMgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdzZWxlY3RlZCcsIHRoaXMuZ2V0U3RhcnREYXRlKCksIHRoaXMuZ2V0RW5kRGF0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMuZ290b0RhdGUoZGF0ZUdvLCBtb250aElkeCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBMaXRlcGlja2VyO1xufShjYWxlbmRhcl8xLkNhbGVuZGFyKSk7XG5leHBvcnRzLkxpdGVwaWNrZXIgPSBMaXRlcGlja2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRhdGV0aW1lXzEgPSByZXF1aXJlKFwiLi9kYXRldGltZVwiKTtcbnZhciBsaXRlcGlja2VyXzEgPSByZXF1aXJlKFwiLi9saXRlcGlja2VyXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsID09PSB2b2lkIDApIHsgZWwgPSBudWxsOyB9XG4gICAgdGhpcy5lbWl0KCdiZWZvcmU6c2hvdycsIGVsKTtcbiAgICB2YXIgZWxlbWVudCA9IGVsID8gZWwgOiB0aGlzLm9wdGlvbnMuZWxlbWVudDtcbiAgICB0aGlzLnRyaWdnZXJFbGVtZW50ID0gZWxlbWVudDtcbiAgICBpZiAodGhpcy5pc1Nob3duaW5nKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcbiAgICAgICAgdGhpcy51aS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRoaXMudWkuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB0aGlzLnVpLnN0eWxlLnRvcCA9IG51bGw7XG4gICAgICAgIHRoaXMudWkuc3R5bGUubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMudWkuc3R5bGUuYm90dG9tID0gbnVsbDtcbiAgICAgICAgdGhpcy51aS5zdHlsZS5yaWdodCA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zY3JvbGxUb0RhdGUoZWwpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy51aS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy51aS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aGlzLnVpLnN0eWxlLnpJbmRleCA9IHRoaXMub3B0aW9ucy56SW5kZXg7XG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5maW5kUG9zaXRpb24oZWxlbWVudCk7XG4gICAgdGhpcy51aS5zdHlsZS50b3AgPSBwb3NpdGlvbi50b3AgKyBcInB4XCI7XG4gICAgdGhpcy51aS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdCArIFwicHhcIjtcbiAgICB0aGlzLnVpLnN0eWxlLnJpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLnVpLnN0eWxlLmJvdHRvbSA9IG51bGw7XG4gICAgdGhpcy5lbWl0KCdzaG93JywgZWwpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc1Nob3duaW5nKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID0gMDtcbiAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51aS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuZW1pdCgnaGlkZScpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5nZXREYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0YXJ0RGF0ZSgpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5nZXRTdGFydERhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGFydERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmdldEVuZERhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmREYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW5kRGF0ZS5jbG9uZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlLCBmb3JjZSkge1xuICAgIGlmIChmb3JjZSA9PT0gdm9pZCAwKSB7IGZvcmNlID0gZmFsc2U7IH1cbiAgICB2YXIgZCA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICB2YXIgaXNMb2NrZWQgPSB1dGlsc18xLmRhdGVJc0xvY2tlZChkLCB0aGlzLm9wdGlvbnMsIFtkXSk7XG4gICAgaWYgKGlzTG9ja2VkICYmICFmb3JjZSkge1xuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmRhdGUnLCBkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGRhdGUpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCdzZWxlY3RlZCcsIHRoaXMuZ2V0RGF0ZSgpKTtcbiAgICB9XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldFN0YXJ0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgaWYgKCFkYXRlKVxuICAgICAgICByZXR1cm47XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldEVuZERhdGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIGlmICghZGF0ZSlcbiAgICAgICAgcmV0dXJuO1xuICAgIHRoaXMub3B0aW9ucy5lbmREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnREYXRlLmdldFRpbWUoKSA+IHRoaXMub3B0aW9ucy5lbmREYXRlLmdldFRpbWUoKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJbnB1dCgpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zZXREYXRlUmFuZ2UgPSBmdW5jdGlvbiAoZGF0ZTEsIGRhdGUyLCBmb3JjZSkge1xuICAgIGlmIChmb3JjZSA9PT0gdm9pZCAwKSB7IGZvcmNlID0gZmFsc2U7IH1cbiAgICAvLyBzdG9wIHJlcGlja2luZyBieSByZXNldHRpbmcgdGhlIHRyaWdnZXIgZWxlbWVudFxuICAgIHRoaXMudHJpZ2dlckVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdmFyIGQxID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZTEsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICB2YXIgZDIgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlMiwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgIHZhciBpc0xvY2tlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWxsb3dMb2NrRGF5c0luUmFuZ2UpIHtcbiAgICAgICAgaXNMb2NrZWQgPSB1dGlsc18xLnJhbmdlSXNMb2NrZWQoW2QxLCBkMl0sIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpc0xvY2tlZCA9IHV0aWxzXzEuZGF0ZUlzTG9ja2VkKGQxLCB0aGlzLm9wdGlvbnMsIFtkMSwgZDJdKVxuICAgICAgICAgICAgfHwgdXRpbHNfMS5kYXRlSXNMb2NrZWQoZDIsIHRoaXMub3B0aW9ucywgW2QxLCBkMl0pO1xuICAgIH1cbiAgICBpZiAoaXNMb2NrZWQgJiYgIWZvcmNlKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6cmFuZ2UnLCBbZDEsIGQyXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShkMSk7XG4gICAgICAgIHRoaXMuc2V0RW5kRGF0ZShkMik7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XG4gICAgICAgIHRoaXMuZW1pdCgnc2VsZWN0ZWQnLCB0aGlzLmdldFN0YXJ0RGF0ZSgpLCB0aGlzLmdldEVuZERhdGUoKSk7XG4gICAgfVxufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5nb3RvRGF0ZSA9IGZ1bmN0aW9uIChkYXRlLCBpZHgpIHtcbiAgICBpZiAoaWR4ID09PSB2b2lkIDApIHsgaWR4ID0gMDsgfVxuICAgIHZhciB0b0RhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlKTtcbiAgICB0b0RhdGUuc2V0RGF0ZSgxKTtcbiAgICB0aGlzLmNhbGVuZGFyc1tpZHhdID0gdG9EYXRlLmNsb25lKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0TG9ja0RheXMgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICB0aGlzLm9wdGlvbnMubG9ja0RheXMgPSBkYXRldGltZV8xLkRhdGVUaW1lLmNvbnZlcnRBcnJheShhcnJheSwgdGhpcy5vcHRpb25zLmxvY2tEYXlzRm9ybWF0KTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5vcHRpb25zLmxvY2tEYXlzJywgdGhpcy5vcHRpb25zLmxvY2tEYXlzKTtcbiAgICB0aGlzLnJlbmRlcigpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zZXRIaWdobGlnaHRlZERheXMgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzID0gZGF0ZXRpbWVfMS5EYXRlVGltZS5jb252ZXJ0QXJyYXkoYXJyYXksIHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXNGb3JtYXQpO1xuICAgIHRoaXMucmVuZGVyKCk7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGRlbGV0ZSBvcHRpb25zLmVsZW1lbnQ7XG4gICAgZGVsZXRlIG9wdGlvbnMuZWxlbWVudEVuZDtcbiAgICBkZWxldGUgb3B0aW9ucy5wYXJlbnRFbDtcbiAgICBpZiAob3B0aW9ucy5zdGFydERhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5zdGFydERhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShvcHRpb25zLnN0YXJ0RGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5lbmREYXRlKSB7XG4gICAgICAgIG9wdGlvbnMuZW5kRGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG9wdGlvbnMuZW5kRGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgIH1cbiAgICB2YXIgZHJvcGRvd25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy5kcm9wZG93bnMpLCBvcHRpb25zLmRyb3Bkb3ducyk7XG4gICAgdmFyIGJ1dHRvblRleHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zLmJ1dHRvblRleHQpLCBvcHRpb25zLmJ1dHRvblRleHQpO1xuICAgIHZhciB0b29sdGlwVGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMudG9vbHRpcFRleHQpLCBvcHRpb25zLnRvb2x0aXBUZXh0KTtcbiAgICB0aGlzLm9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5vcHRpb25zLmRyb3Bkb3ducyA9IF9fYXNzaWduKHt9LCBkcm9wZG93bnMpO1xuICAgIHRoaXMub3B0aW9ucy5idXR0b25UZXh0ID0gX19hc3NpZ24oe30sIGJ1dHRvblRleHQpO1xuICAgIHRoaXMub3B0aW9ucy50b29sdGlwVGV4dCA9IF9fYXNzaWduKHt9LCB0b29sdGlwVGV4dCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmICEodGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5zdGFydERhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IG51bGw7XG4gICAgfVxuICAgIGlmICghdGhpcy5vcHRpb25zLnNpbmdsZU1vZGVcbiAgICAgICAgJiYgKCEodGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUpXG4gICAgICAgICAgICB8fCAhKHRoaXMub3B0aW9ucy5lbmREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSkpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5zdGFydERhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IG51bGw7XG4gICAgfVxuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IHRoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRoczsgaWR4ICs9IDEpIHtcbiAgICAgICAgdmFyIGRhdGUgPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKVxuICAgICAgICAgICAgOiBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSgpO1xuICAgICAgICBkYXRlLnNldERhdGUoMSk7XG4gICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgaWR4KTtcbiAgICAgICAgdGhpcy5jYWxlbmRhcnNbaWR4XSA9IGRhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMubG9ja0RheXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5sb2NrRGF5cyA9IGRhdGV0aW1lXzEuRGF0ZVRpbWUuY29udmVydEFycmF5KHRoaXMub3B0aW9ucy5sb2NrRGF5cywgdGhpcy5vcHRpb25zLmxvY2tEYXlzRm9ybWF0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMgPSBkYXRldGltZV8xLkRhdGVUaW1lLmNvbnZlcnRBcnJheSh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzLCB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzRm9ybWF0KTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuY2xlYXJTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG51bGw7XG4gICAgdGhpcy5vcHRpb25zLmVuZERhdGUgPSBudWxsO1xuICAgIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPSAwO1xuICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcbiAgICBpZiAodGhpcy5pc1Nob3duaW5nKCkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgdGhpcy5lbWl0KCdjbGVhcjpzZWxlY3Rpb24nKTtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy51aSAmJiB0aGlzLnVpLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy51aS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMudWkpO1xuICAgICAgICB0aGlzLnVpID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5lbWl0KCdkZXN0cm95Jyk7XG59O1xuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZHRzLWNzcy1tb2R1bGVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS0zIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnRBdFRvcChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgICAgICAgICB2YXIgbGFzdEluc2VydGVkRWxlbWVudCA9IHdpbmRvdy5fbGFzdEVsZW1lbnRJbnNlcnRlZEJ5U3R5bGVMb2FkZXI7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5kaXNhYmxlTGl0ZXBpY2tlclN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFsYXN0SW5zZXJ0ZWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxlbWVudCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXN0SW5zZXJ0ZWRFbGVtZW50Lm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxlbWVudCwgbGFzdEluc2VydGVkRWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICAgICAgICAgICAgd2luZG93Ll9sYXN0RWxlbWVudEluc2VydGVkQnlTdHlsZUxvYWRlciA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZmluZE5lc3RlZE1vbnRoSXRlbShtb250aEl0ZW0pIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBtb250aEl0ZW0ucGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpID0gaSArIDEpIHtcbiAgICAgICAgdmFyIGN1ck5vZGUgPSBjaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgICBpZiAoY3VyTm9kZSA9PT0gbW9udGhJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbmV4cG9ydHMuZmluZE5lc3RlZE1vbnRoSXRlbSA9IGZpbmROZXN0ZWRNb250aEl0ZW07XG5mdW5jdGlvbiBkYXRlSXNMb2NrZWQoZGF0ZSwgb3B0aW9ucywgcGlja2VkRGF0ZXMpIHtcbiAgICB2YXIgaXNMb2NrZWQgPSBmYWxzZTtcbiAgICBpZiAob3B0aW9ucy5sb2NrRGF5cy5sZW5ndGgpIHtcbiAgICAgICAgaXNMb2NrZWQgPSBvcHRpb25zLmxvY2tEYXlzXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAoZCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuaXNCZXR3ZWVuKGRbMF0sIGRbMV0sIG9wdGlvbnMubG9ja0RheXNJbmNsdXNpdml0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZC5pc1NhbWUoZGF0ZSwgJ2RheScpO1xuICAgICAgICB9KS5sZW5ndGg7XG4gICAgfVxuICAgIGlmICghaXNMb2NrZWQgJiYgdHlwZW9mIG9wdGlvbnMubG9ja0RheXNGaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaXNMb2NrZWQgPSBvcHRpb25zLmxvY2tEYXlzRmlsdGVyLmNhbGwodGhpcywgZGF0ZS5jbG9uZSgpLCBudWxsLCBwaWNrZWREYXRlcyk7XG4gICAgfVxuICAgIHJldHVybiBpc0xvY2tlZDtcbn1cbmV4cG9ydHMuZGF0ZUlzTG9ja2VkID0gZGF0ZUlzTG9ja2VkO1xuZnVuY3Rpb24gcmFuZ2VJc0xvY2tlZChkYXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIGlzTG9ja2VkID0gZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMubG9ja0RheXMubGVuZ3RoKSB7XG4gICAgICAgIGlzTG9ja2VkID0gb3B0aW9ucy5sb2NrRGF5c1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHZhciBpc0VxdWFsVG9SYW5nZSA9IGRheXNbMF0udG9EYXRlU3RyaW5nKCkgPT09IGRbMF0udG9EYXRlU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgJiYgZGF5c1sxXS50b0RhdGVTdHJpbmcoKSA9PT0gZFsxXS50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZFswXS5pc0JldHdlZW4oZGF5c1swXSwgZGF5c1sxXSwgb3B0aW9ucy5sb2NrRGF5c0luY2x1c2l2aXR5KVxuICAgICAgICAgICAgICAgICAgICB8fCBkWzFdLmlzQmV0d2VlbihkYXlzWzBdLCBkYXlzWzFdLCBvcHRpb25zLmxvY2tEYXlzSW5jbHVzaXZpdHkpXG4gICAgICAgICAgICAgICAgICAgIHx8IGlzRXF1YWxUb1JhbmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGQuaXNCZXR3ZWVuKGRheXNbMF0sIGRheXNbMV0sIG9wdGlvbnMubG9ja0RheXNJbmNsdXNpdml0eSk7XG4gICAgICAgIH0pLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKCFpc0xvY2tlZCAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NrRGF5c0ZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpc0xvY2tlZCA9IG9wdGlvbnMubG9ja0RheXNGaWx0ZXIuY2FsbCh0aGlzLCBkYXlzWzBdLmNsb25lKCksIGRheXNbMV0uY2xvbmUoKSwgZGF5cyk7XG4gICAgfVxuICAgIHJldHVybiBpc0xvY2tlZDtcbn1cbmV4cG9ydHMucmFuZ2VJc0xvY2tlZCA9IHJhbmdlSXNMb2NrZWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9