/*!
 * 
 * litepicker.umd.js
 * Litepicker v2.0.11 (https://github.com/wakirin/Litepicker)
 * Package: litepicker (https://www.npmjs.com/package/litepicker)
 * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
 * Copyright 2019-2021 Rinat G.
 *     
 * Hash: d7e70e6367ff3ddde14d
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Litepicker", [], factory);
	else if(typeof exports === 'object')
		exports["Litepicker"] = factory();
	else
		root["Litepicker"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaXRlcGlja2VyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9MaXRlcGlja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9jYWxlbmRhci50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL2NvcmUudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9kYXRldGltZS50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvbGl0ZXBpY2tlci50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL21ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9zY3NzL21haW4uc2Nzcz9jYzFlIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7OztBQzdGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsaURBQWlELHlEQUF5RCwwQ0FBMEMsK0NBQStDLHdDQUF3QywwQ0FBMEMsa0RBQWtELGtEQUFrRCx3REFBd0Qsd0RBQXdELG9FQUFvRSw4Q0FBOEMsa0RBQWtELGlDQUFpQyxpQ0FBaUMsMENBQTBDLHlDQUF5Qyw0Q0FBNEMsMENBQTBDLHNDQUFzQyw0Q0FBNEMsb0NBQW9DLDBDQUEwQywyQ0FBMkMsaURBQWlELDBDQUEwQyxnREFBZ0QsNkNBQTZDLG1EQUFtRCw2Q0FBNkMsbURBQW1ELEVBQUUsd0JBQXdCLG9FQUFvRSxFQUFFLGlCQUFpQixnSEFBZ0gscUJBQXFCLGtCQUFrQixFQUFFLHdCQUF3QixtQkFBbUIsdUJBQXVCLEVBQUUsa0NBQWtDLDJCQUEyQiwyQkFBMkIsb0JBQW9CLEVBQUUsb0NBQW9DLDJCQUEyQiwyQkFBMkIsb0JBQW9CLDBCQUEwQiwwQkFBMEIsb0VBQW9FLHlCQUF5QixzRkFBc0Ysc0ZBQXNGLHdEQUF3RCxzQ0FBc0Msc0NBQXNDLEVBQUUsZ0RBQWdELGdFQUFnRSxFQUFFLGdEQUFnRCxnRUFBZ0UsRUFBRSxnREFBZ0QsZ0VBQWdFLEVBQUUsaUxBQWlMLDRCQUE0QixFQUFFLGtEQUFrRCxxQkFBcUIsNkNBQTZDLHdDQUF3Qyx3Q0FBd0MsRUFBRSwyREFBMkQsK0JBQStCLCtCQUErQix3QkFBd0Isb0NBQW9DLHFDQUFxQyxpREFBaUQsMkJBQTJCLDRCQUE0Qiw2QkFBNkIsb0NBQW9DLHFDQUFxQyxzQ0FBc0Msc0RBQXNELEVBQUUsaUVBQWlFLGdDQUFnQyw0QkFBNEIsNEJBQTRCLEVBQUUsc0ZBQXNGLGdDQUFnQyxFQUFFLHNGQUFzRix5QkFBeUIsRUFBRSwyRUFBMkUsd0RBQXdELEVBQUUsbUZBQW1GLHlEQUF5RCxFQUFFLCtFQUErRSxtQ0FBbUMsRUFBRSxtRkFBbUYsZ0VBQWdFLEVBQUUsMkZBQTJGLGlFQUFpRSxFQUFFLG1LQUFtSywrQkFBK0Isa0NBQWtDLDZCQUE2QiwrQkFBK0Isd0RBQXdELGdEQUFnRCw0QkFBNEIsRUFBRSwyS0FBMkssbUNBQW1DLEVBQUUsb0ZBQW9GLDZEQUE2RCxFQUFFLHVMQUF1TCw4REFBOEQsRUFBRSw0RkFBNEYscUVBQXFFLEVBQUUsb0dBQW9HLHNFQUFzRSxFQUFFLGdGQUFnRiw2REFBNkQsRUFBRSwrS0FBK0ssOERBQThELEVBQUUsd0ZBQXdGLHFFQUFxRSxFQUFFLGdHQUFnRyxzRUFBc0UsRUFBRSxpRUFBaUUsK0JBQStCLCtCQUErQix3QkFBd0IsK0JBQStCLGtDQUFrQyxtQ0FBbUMsOENBQThDLHVEQUF1RCxFQUFFLHlFQUF5RSwyQkFBMkIsMkJBQTJCLGdDQUFnQyw0QkFBNEIsNEJBQTRCLCtDQUErQywrQkFBK0IsRUFBRSx1RkFBdUYsOEJBQThCLEVBQUUsa0ZBQWtGLDhCQUE4QixFQUFFLDZGQUE2Riw2QkFBNkIsRUFBRSxxRkFBcUYsNkJBQTZCLEVBQUUsa0NBQWtDLDJCQUEyQiwyQkFBMkIsb0JBQW9CLDBCQUEwQiwwQkFBMEIsMkJBQTJCLDhCQUE4QiwrQkFBK0IsMENBQTBDLHlCQUF5QixzQ0FBc0Msc0NBQXNDLEVBQUUsaUZBQWlGLHVCQUF1QiwyQ0FBMkMsRUFBRSw4Q0FBOEMsMkNBQTJDLDJCQUEyQiw4QkFBOEIsMkJBQTJCLG9EQUFvRCw0Q0FBNEMsd0JBQXdCLEVBQUUsc0RBQXNELG1EQUFtRCxnRkFBZ0YsZ0ZBQWdGLEVBQUUseURBQXlELGtEQUFrRCxFQUFFLDBEQUEwRCxtREFBbUQsRUFBRSxrRUFBa0UscURBQXFELHFDQUFxQyxxQ0FBcUMsNEJBQTRCLEVBQUUsNERBQTRELGdFQUFnRSwyQkFBMkIsRUFBRSw4REFBOEQsa0RBQWtELGdFQUFnRSxzQ0FBc0MseUNBQXlDLHFDQUFxQyx3Q0FBd0MsRUFBRSwyRUFBMkUsc0NBQXNDLHlDQUF5Qyx5Q0FBeUMsNENBQTRDLEVBQUUsNERBQTRELGdEQUFnRCw4REFBOEQsb0NBQW9DLHVDQUF1Qyx1Q0FBdUMsMENBQTBDLEVBQUUseUVBQXlFLHdDQUF3QywyQ0FBMkMsdUNBQXVDLDBDQUEwQyxFQUFFLDBFQUEwRSxzQ0FBc0MseUNBQXlDLHVDQUF1QywwQ0FBMEMsRUFBRSwrREFBK0QseURBQXlELHVFQUF1RSxFQUFFLGlEQUFpRCw2QkFBNkIsNkJBQTZCLHNCQUFzQixrQ0FBa0MsbUNBQW1DLG9DQUFvQyxpQ0FBaUMsa0NBQWtDLHdDQUF3Qyx5REFBeUQsdUJBQXVCLEVBQUUsb0NBQW9DLHdCQUF3Qix3QkFBd0Isb0JBQW9CLDBEQUEwRCwwRkFBMEYsMEZBQTBGLHFDQUFxQyxzQ0FBc0MsRUFBRSwwREFBMEQsMkJBQTJCLHVCQUF1QixFQUFFLHFEQUFxRCxtRUFBbUUscURBQXFELGtCQUFrQiw2QkFBNkIsMkJBQTJCLEVBQUUseURBQXlELCtCQUErQixFQUFFLG9EQUFvRCxrRUFBa0Usb0RBQW9ELGtCQUFrQiw2QkFBNkIsMkJBQTJCLDBCQUEwQiwyQkFBMkIsRUFBRSwrREFBK0QsdUJBQXVCLEVBQUUsd0RBQXdELCtCQUErQixFQUFFLHFDQUFxQyx5QkFBeUIsdUJBQXVCLHVCQUF1Qix5QkFBeUIsMkRBQTJELHdEQUF3RCx3REFBd0QsMEJBQTBCLHNCQUFzQiwyQkFBMkIseUJBQXlCLEVBQUUsOENBQThDLDJCQUEyQixxQkFBcUIsOEJBQThCLGtEQUFrRCw0Q0FBNEMsMkNBQTJDLHNCQUFzQixFQUFFLDZDQUE2QywyQkFBMkIscUJBQXFCLDhCQUE4QixpRUFBaUUsNENBQTRDLDJDQUEyQyxzQkFBc0IsRUFBRTtBQUM3c2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbFNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLDhCQUE4QixhQUFhO0FBQzNDLGdDQUFnQyxlQUFlO0FBQy9DLDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdUJBQXVCO0FBQ3ZELDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0hBQWtILGtCQUFrQixFQUFFO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pOQSxjQUFjLG1CQUFPLENBQUMsdVpBQW9POztBQUUxUDtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzSkFBMkU7O0FBRWhHO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJsaXRlcGlja2VyLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiTGl0ZXBpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJMaXRlcGlja2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxpdGVwaWNrZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbGl0ZXBpY2tlci1jb250YWluZXItbW9udGhzLWNvbG9yLWJnOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLWNvbnRhaW5lci1tb250aHMtYm94LXNoYWRvdy1jb2xvcjogI2RkZDtcXG4gIC0tbGl0ZXBpY2tlci1mb290ZXItY29sb3ItYmc6ICNmYWZhZmE7XFxuICAtLWxpdGVwaWNrZXItZm9vdGVyLWJveC1zaGFkb3ctY29sb3I6ICNkZGQ7XFxuICAtLWxpdGVwaWNrZXItdG9vbHRpcC1jb2xvci1iZzogI2ZmZjtcXG4gIC0tbGl0ZXBpY2tlci1tb250aC1oZWFkZXItY29sb3I6ICMzMzM7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3I6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3I6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3ItaG92ZXI6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3ItaG92ZXI6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItbW9udGgtd2lkdGg6IGNhbGModmFyKC0tbGl0ZXBpY2tlci1kYXktd2lkdGgpICogNyk7XFxuICAtLWxpdGVwaWNrZXItbW9udGgtd2Vla2RheS1jb2xvcjogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1tb250aC13ZWVrLW51bWJlci1jb2xvcjogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1kYXktd2lkdGg6IDM4cHg7XFxuICAtLWxpdGVwaWNrZXItZGF5LWNvbG9yOiAjMzMzO1xcbiAgLS1saXRlcGlja2VyLWRheS1jb2xvci1ob3ZlcjogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1pcy10b2RheS1jb2xvcjogI2Y0NDMzNjtcXG4gIC0tbGl0ZXBpY2tlci1pcy1pbi1yYW5nZS1jb2xvcjogI2JiZGVmYjtcXG4gIC0tbGl0ZXBpY2tlci1pcy1sb2NrZWQtY29sb3I6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItaXMtc3RhcnQtY29sb3I6ICNmZmY7XFxuICAtLWxpdGVwaWNrZXItaXMtc3RhcnQtY29sb3ItYmc6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItaXMtZW5kLWNvbG9yOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLWlzLWVuZC1jb2xvci1iZzogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tY2FuY2VsLWNvbG9yOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1jYW5jZWwtY29sb3ItYmc6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLWFwcGx5LWNvbG9yOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1hcHBseS1jb2xvci1iZzogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3I6ICM5MDkwOTA7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLXJlc2V0LWNvbG9yLWhvdmVyOiAjMjE5NmYzO1xcbiAgLS1saXRlcGlja2VyLWhpZ2hsaWdodGVkLWRheS1jb2xvcjogIzMzMztcXG4gIC0tbGl0ZXBpY2tlci1oaWdobGlnaHRlZC1kYXktY29sb3ItYmc6ICNmZmViM2I7IH1cXG5cXG4uc2hvdy13ZWVrLW51bWJlcnMge1xcbiAgLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoOiBjYWxjKHZhcigtLWxpdGVwaWNrZXItZGF5LXdpZHRoKSAqIDgpOyB9XFxuXFxuLmxpdGVwaWNrZXIge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBkaXNwbGF5OiBub25lOyB9XFxuICAubGl0ZXBpY2tlciBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7IH1cXG4gIC5saXRlcGlja2VyIC5jb250YWluZXJfX21haW4ge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1jb250YWluZXItbW9udGhzLWNvbG9yLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbGl0ZXBpY2tlci1jb250YWluZXItbW9udGhzLWJveC1zaGFkb3ctY29sb3IpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbGl0ZXBpY2tlci1jb250YWluZXItbW9udGhzLWJveC1zaGFkb3ctY29sb3IpO1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoKSArIDEwcHgpO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocy5jb2x1bW5zLTIge1xcbiAgICAgIHdpZHRoOiBjYWxjKCh2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoKSAqIDIpICsgMjBweCk7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzLmNvbHVtbnMtMyB7XFxuICAgICAgd2lkdGg6IGNhbGMoKHZhcigtLWxpdGVwaWNrZXItbW9udGgtd2lkdGgpICogMykgKyAzMHB4KTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMuY29sdW1ucy00IHtcXG4gICAgICB3aWR0aDogY2FsYygodmFyKC0tbGl0ZXBpY2tlci1tb250aC13aWR0aCkgKiA0KSArIDQwcHgpOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocy5zcGxpdC12aWV3IC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoLFxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMuc3BsaXQtdmlldyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoIHtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbSB7XFxuICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgIHdpZHRoOiB2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoKTtcXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1tb250aC1oZWFkZXItY29sb3IpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIGRpdiB7XFxuICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgICAgICAgICBmbGV4OiAxOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgZGl2ID4gLm1vbnRoLWl0ZW0tbmFtZSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciBkaXYgPiAubW9udGgtaXRlbS15ZWFyIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5yZXNldC1idXR0b24ge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLnJlc2V0LWJ1dHRvbiA+IHN2ZyB7XFxuICAgICAgICAgICAgZmlsbDogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLnJlc2V0LWJ1dHRvbiAqIHtcXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5yZXNldC1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1yZXNldC1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5yZXNldC1idXR0b246aG92ZXIgPiBzdmcge1xcbiAgICAgICAgICAgICAgZmlsbDogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3ItaG92ZXIpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGgsXFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aCB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyIDAuM3M7XFxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlciAwLjNzO1xcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoICosXFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoICoge1xcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGgge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcHJldi1tb250aC1jb2xvcik7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoID4gc3ZnLFxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGggPiBpbWcge1xcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1wcmV2aW91cy1tb250aDpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3ItaG92ZXIpOyB9XFxuICAgICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoOmhvdmVyID4gc3ZnIHtcXG4gICAgICAgICAgICAgIGZpbGw6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3ItaG92ZXIpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aCB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1uZXh0LW1vbnRoLWNvbG9yKTsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aCA+IHN2ZyxcXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLW5leHQtbW9udGggPiBpbWcge1xcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tbmV4dC1tb250aC1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aDpob3ZlciA+IHN2ZyB7XFxuICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1uZXh0LW1vbnRoLWNvbG9yLWhvdmVyKTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS13ZWVrZGF5cy1yb3cge1xcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1tb250aC13ZWVrZGF5LWNvbG9yKTsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLXdlZWtkYXlzLXJvdyA+IGRpdiB7XFxuICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICAgICAgICBmb250LXNpemU6IDg1JTtcXG4gICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgICAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgIHdpZHRoOiB2YXIoLS1saXRlcGlja2VyLWRheS13aWR0aCk7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbTpmaXJzdC1jaGlsZCAuYnV0dG9uLXByZXZpb3VzLW1vbnRoIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW06bGFzdC1jaGlsZCAuYnV0dG9uLW5leHQtbW9udGgge1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS5uby1wcmV2aW91cy1tb250aCAuYnV0dG9uLXByZXZpb3VzLW1vbnRoIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS5uby1uZXh0LW1vbnRoIC5idXR0b24tbmV4dC1tb250aCB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG4gIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgPiBkaXYsXFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgPiBhIHtcXG4gICAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgICB3aWR0aDogdmFyKC0tbGl0ZXBpY2tlci1kYXktd2lkdGgpOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtIHtcXG4gICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1kYXktY29sb3IpO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyIDAuM3M7XFxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyIDAuM3M7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW06aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItZGF5LWNvbG9yLWhvdmVyKTtcXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLWxpdGVwaWNrZXItZGF5LWNvbG9yLWhvdmVyKTtcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLWxpdGVwaWNrZXItZGF5LWNvbG9yLWhvdmVyKTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLXRvZGF5IHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLXRvZGF5LWNvbG9yKTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLWxvY2tlZCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1sb2NrZWQtY29sb3IpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1sb2NrZWQ6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1sb2NrZWQtY29sb3IpO1xcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtaW4tcmFuZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1pbi1yYW5nZS1jb2xvcik7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtc3RhcnQtZGF0ZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1zdGFydC1jb2xvcik7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLXN0YXJ0LWNvbG9yLWJnKTtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLXN0YXJ0LWRhdGUuaXMtZmxpcHBlZCB7XFxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1lbmQtZGF0ZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1lbmQtY29sb3IpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1lbmQtY29sb3ItYmcpO1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtZW5kLWRhdGUuaXMtZmxpcHBlZCB7XFxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1zdGFydC1kYXRlLmlzLWVuZC1kYXRlIHtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtaGlnaGxpZ2h0ZWQge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaGlnaGxpZ2h0ZWQtZGF5LWNvbG9yKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaGlnaGxpZ2h0ZWQtZGF5LWNvbG9yLWJnKTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC53ZWVrLW51bWJlciB7XFxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdlZWstbnVtYmVyLWNvbG9yKTtcXG4gICAgICBmb250LXNpemU6IDg1JTsgfVxcbiAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWZvb3Rlci1jb2xvci1iZyk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDNweCAzcHggMHB4IHZhcigtLWxpdGVwaWNrZXItZm9vdGVyLWJveC1zaGFkb3ctY29sb3IpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAzcHggM3B4IDBweCB2YXIoLS1saXRlcGlja2VyLWZvb3Rlci1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2Zvb3RlciAucHJldmlldy1kYXRlLXJhbmdlIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgZm9udC1zaXplOiA5MCU7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZm9vdGVyIC5idXR0b24tY2FuY2VsIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1jYW5jZWwtY29sb3ItYmcpO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1jYW5jZWwtY29sb3IpO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBwYWRkaW5nOiAzcHggN3B4IDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1jYW5jZWwgKiB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1hcHBseSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tYXBwbHktY29sb3ItYmcpO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1hcHBseS1jb2xvcik7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIHBhZGRpbmc6IDNweCA3cHggNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1hcHBseTpkaXNhYmxlZCB7XFxuICAgICAgICBvcGFjaXR5OiAwLjc7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1hcHBseSAqIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAubGl0ZXBpY2tlciAuY29udGFpbmVyX190b29sdGlwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItdG9vbHRpcC1jb2xvci1iZyk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX190b29sdGlwOmJlZm9yZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLTVweDtcXG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDVweCk7XFxuICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX190b29sdGlwOmFmdGVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAtNHB4O1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcXG4gICAgICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tbGl0ZXBpY2tlci10b29sdGlwLWNvbG9yLWJnKTtcXG4gICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNob3dXZWVrTnVtYmVyc1wiOiBcInNob3ctd2Vlay1udW1iZXJzXCIsXG5cdFwibGl0ZXBpY2tlclwiOiBcImxpdGVwaWNrZXJcIixcblx0XCJjb250YWluZXJNYWluXCI6IFwiY29udGFpbmVyX19tYWluXCIsXG5cdFwiY29udGFpbmVyTW9udGhzXCI6IFwiY29udGFpbmVyX19tb250aHNcIixcblx0XCJjb2x1bW5zMlwiOiBcImNvbHVtbnMtMlwiLFxuXHRcImNvbHVtbnMzXCI6IFwiY29sdW1ucy0zXCIsXG5cdFwiY29sdW1uczRcIjogXCJjb2x1bW5zLTRcIixcblx0XCJzcGxpdFZpZXdcIjogXCJzcGxpdC12aWV3XCIsXG5cdFwibW9udGhJdGVtSGVhZGVyXCI6IFwibW9udGgtaXRlbS1oZWFkZXJcIixcblx0XCJidXR0b25QcmV2aW91c01vbnRoXCI6IFwiYnV0dG9uLXByZXZpb3VzLW1vbnRoXCIsXG5cdFwiYnV0dG9uTmV4dE1vbnRoXCI6IFwiYnV0dG9uLW5leHQtbW9udGhcIixcblx0XCJtb250aEl0ZW1cIjogXCJtb250aC1pdGVtXCIsXG5cdFwibW9udGhJdGVtTmFtZVwiOiBcIm1vbnRoLWl0ZW0tbmFtZVwiLFxuXHRcIm1vbnRoSXRlbVllYXJcIjogXCJtb250aC1pdGVtLXllYXJcIixcblx0XCJyZXNldEJ1dHRvblwiOiBcInJlc2V0LWJ1dHRvblwiLFxuXHRcIm1vbnRoSXRlbVdlZWtkYXlzUm93XCI6IFwibW9udGgtaXRlbS13ZWVrZGF5cy1yb3dcIixcblx0XCJub1ByZXZpb3VzTW9udGhcIjogXCJuby1wcmV2aW91cy1tb250aFwiLFxuXHRcIm5vTmV4dE1vbnRoXCI6IFwibm8tbmV4dC1tb250aFwiLFxuXHRcImNvbnRhaW5lckRheXNcIjogXCJjb250YWluZXJfX2RheXNcIixcblx0XCJkYXlJdGVtXCI6IFwiZGF5LWl0ZW1cIixcblx0XCJpc1RvZGF5XCI6IFwiaXMtdG9kYXlcIixcblx0XCJpc0xvY2tlZFwiOiBcImlzLWxvY2tlZFwiLFxuXHRcImlzSW5SYW5nZVwiOiBcImlzLWluLXJhbmdlXCIsXG5cdFwiaXNTdGFydERhdGVcIjogXCJpcy1zdGFydC1kYXRlXCIsXG5cdFwiaXNGbGlwcGVkXCI6IFwiaXMtZmxpcHBlZFwiLFxuXHRcImlzRW5kRGF0ZVwiOiBcImlzLWVuZC1kYXRlXCIsXG5cdFwiaXNIaWdobGlnaHRlZFwiOiBcImlzLWhpZ2hsaWdodGVkXCIsXG5cdFwid2Vla051bWJlclwiOiBcIndlZWstbnVtYmVyXCIsXG5cdFwiY29udGFpbmVyRm9vdGVyXCI6IFwiY29udGFpbmVyX19mb290ZXJcIixcblx0XCJwcmV2aWV3RGF0ZVJhbmdlXCI6IFwicHJldmlldy1kYXRlLXJhbmdlXCIsXG5cdFwiYnV0dG9uQ2FuY2VsXCI6IFwiYnV0dG9uLWNhbmNlbFwiLFxuXHRcImJ1dHRvbkFwcGx5XCI6IFwiYnV0dG9uLWFwcGx5XCIsXG5cdFwiY29udGFpbmVyVG9vbHRpcFwiOiBcImNvbnRhaW5lcl9fdG9vbHRpcFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uICRnZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuICRnZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSAkZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgUmVmbGVjdEFwcGx5KHRoaXMubGlzdGVuZXIsIHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCIuL2NvcmVcIik7XG52YXIgZGF0ZXRpbWVfMSA9IHJlcXVpcmUoXCIuL2RhdGV0aW1lXCIpO1xudmFyIHN0eWxlID0gcmVxdWlyZShcIi4vc2Nzcy9tYWluLnNjc3NcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIENhbGVuZGFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDYWxlbmRhciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDYWxlbmRhcihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgICAgICAvL1xuICAgIH1cbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmVtaXQoJ2JlZm9yZTpyZW5kZXInLCB0aGlzLnVpKTtcbiAgICAgICAgdmFyIG1haW5CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluQmxvY2suY2xhc3NOYW1lID0gc3R5bGUuY29udGFpbmVyTWFpbjtcbiAgICAgICAgdmFyIG1vbnRocyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb250aHMuY2xhc3NOYW1lID0gc3R5bGUuY29udGFpbmVyTW9udGhzO1xuICAgICAgICBpZiAoc3R5bGVbXCJjb2x1bW5zXCIgKyB0aGlzLm9wdGlvbnMubnVtYmVyT2ZDb2x1bW5zXSkge1xuICAgICAgICAgICAgbW9udGhzLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUuY29sdW1uczIsIHN0eWxlLmNvbHVtbnMzLCBzdHlsZS5jb2x1bW5zNCk7XG4gICAgICAgICAgICBtb250aHMuY2xhc3NMaXN0LmFkZChzdHlsZVtcImNvbHVtbnNcIiArIHRoaXMub3B0aW9ucy5udW1iZXJPZkNvbHVtbnNdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xuICAgICAgICAgICAgbW9udGhzLmNsYXNzTGlzdC5hZGQoc3R5bGUuc3BsaXRWaWV3KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dXZWVrTnVtYmVycykge1xuICAgICAgICAgICAgbW9udGhzLmNsYXNzTGlzdC5hZGQoc3R5bGUuc2hvd1dlZWtOdW1iZXJzKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhcnREYXRlID0gdGhpcy5jYWxlbmRhcnNbMF0uY2xvbmUoKTtcbiAgICAgICAgdmFyIHN0YXJ0TW9udGhJZHggPSBzdGFydERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgdmFyIHRvdGFsTW9udGhzID0gc3RhcnREYXRlLmdldE1vbnRoKCkgKyB0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHM7XG4gICAgICAgIHZhciBjYWxlbmRhcklkeCA9IDA7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWZvci1vZlxuICAgICAgICBmb3IgKHZhciBpZHggPSBzdGFydE1vbnRoSWR4OyBpZHggPCB0b3RhbE1vbnRoczsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBkYXRlSXRlcmF0b3IgPSBzdGFydERhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgIGRhdGVJdGVyYXRvci5zZXREYXRlKDEpO1xuICAgICAgICAgICAgZGF0ZUl0ZXJhdG9yLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zcGxpdFZpZXcpIHtcbiAgICAgICAgICAgICAgICBkYXRlSXRlcmF0b3IgPSB0aGlzLmNhbGVuZGFyc1tjYWxlbmRhcklkeF0uY2xvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGVJdGVyYXRvci5zZXRNb250aChpZHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9udGhzLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyTW9udGgoZGF0ZUl0ZXJhdG9yLCBjYWxlbmRhcklkeCkpO1xuICAgICAgICAgICAgY2FsZW5kYXJJZHggKz0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBtYWluQmxvY2suYXBwZW5kQ2hpbGQobW9udGhzKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXNldEJ1dHRvbikge1xuICAgICAgICAgICAgdmFyIHJlc2V0QnV0dG9uID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucmVzZXRCdXR0b24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbiA9IHRoaXMub3B0aW9ucy5yZXNldEJ1dHRvbi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b24uY2xhc3NOYW1lID0gc3R5bGUucmVzZXRCdXR0b247XG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmJ1dHRvblRleHQucmVzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc3RyaW5nLWxpdGVyYWxcbiAgICAgICAgICAgICAgICBfdGhpc1snY2xlYXJTZWxlY3Rpb24nXSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtYWluQmxvY2tcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLm1vbnRoSXRlbSArIFwiOmxhc3QtY2hpbGRcIilcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLm1vbnRoSXRlbUhlYWRlcilcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWkuYXBwZW5kQ2hpbGQobWFpbkJsb2NrKTtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYXV0b0FwcGx5IHx8IHRoaXMub3B0aW9ucy5mb290ZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLnVpLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyRm9vdGVyKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1Rvb2x0aXApIHtcbiAgICAgICAgICAgIHRoaXMudWkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJUb29sdGlwKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWkuZGF0YXNldC5wbHVnaW5zID0gKHRoaXMub3B0aW9ucy5wbHVnaW5zIHx8IFtdKS5qb2luKCd8Jyk7XG4gICAgICAgIHRoaXMuZW1pdCgncmVuZGVyJywgdGhpcy51aSk7XG4gICAgfTtcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyTW9udGggPSBmdW5jdGlvbiAoZGF0ZSwgY2FsZW5kYXJJZHgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IGRhdGUuY2xvbmUoKTtcbiAgICAgICAgdmFyIHRvdGFsRGF5cyA9IDMyIC0gbmV3IERhdGUoc3RhcnREYXRlLmdldEZ1bGxZZWFyKCksIHN0YXJ0RGF0ZS5nZXRNb250aCgpLCAzMikuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9udGguY2xhc3NOYW1lID0gc3R5bGUubW9udGhJdGVtO1xuICAgICAgICB2YXIgbW9udGhIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9udGhIZWFkZXIuY2xhc3NOYW1lID0gc3R5bGUubW9udGhJdGVtSGVhZGVyO1xuICAgICAgICB2YXIgbW9udGhBbmRZZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJvcGRvd25zLm1vbnRocykge1xuICAgICAgICAgICAgdmFyIHNlbGVjdE1vbnRocyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgc2VsZWN0TW9udGhzLmNsYXNzTmFtZSA9IHN0eWxlLm1vbnRoSXRlbU5hbWU7XG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IDEyOyB4ICs9IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgLy8gZGF5IDIgYmVjYXVzZSBpT1MgYnVnIHdpdGggYHRvTG9jYWxlU3RyaW5nYFxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93YWtpcmluL0xpdGVwaWNrZXIvaXNzdWVzLzExM1xuICAgICAgICAgICAgICAgIHZhciBtb250aE5hbWUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIHgsIDIsIDAsIDAsIDApKTtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uTW9udGggPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIHgsIDEsIDAsIDAsIDApKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBTdHJpbmcoeCk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBtb250aE5hbWUudG9Mb2NhbGVTdHJpbmcodGhpcy5vcHRpb25zLmxhbmcsIHsgbW9udGg6ICdsb25nJyB9KTtcbiAgICAgICAgICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSAodGhpcy5vcHRpb25zLm1pbkRhdGVcbiAgICAgICAgICAgICAgICAgICAgJiYgb3B0aW9uTW9udGguaXNCZWZvcmUobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1pbkRhdGUpLCAnbW9udGgnKSlcbiAgICAgICAgICAgICAgICAgICAgfHwgKHRoaXMub3B0aW9ucy5tYXhEYXRlICYmIG9wdGlvbk1vbnRoLmlzQWZ0ZXIobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1heERhdGUpLCAnbW9udGgnKSk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uTW9udGguZ2V0TW9udGgoKSA9PT0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICAgICAgICAgIHNlbGVjdE1vbnRocy5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0TW9udGhzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBpZHggPSAwO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGhJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5tb250aEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBpZHggPSB1dGlsc18xLmZpbmROZXN0ZWRNb250aEl0ZW0obW9udGhJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMuY2FsZW5kYXJzW2lkeF0uc2V0TW9udGgoTnVtYmVyKHRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2NoYW5nZTptb250aCcsIF90aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtb250aEFuZFllYXIuYXBwZW5kQ2hpbGQoc2VsZWN0TW9udGhzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtb250aE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcbiAgICAgICAgICAgIG1vbnRoTmFtZS5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1OYW1lO1xuICAgICAgICAgICAgbW9udGhOYW1lLmlubmVySFRNTCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcodGhpcy5vcHRpb25zLmxhbmcsIHsgbW9udGg6ICdsb25nJyB9KTtcbiAgICAgICAgICAgIG1vbnRoQW5kWWVhci5hcHBlbmRDaGlsZChtb250aE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJvcGRvd25zLnllYXJzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0WWVhcnNfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1ZZWFyO1xuICAgICAgICAgICAgdmFyIG1pblllYXIgPSB0aGlzLm9wdGlvbnMuZHJvcGRvd25zLm1pblllYXI7XG4gICAgICAgICAgICB2YXIgbWF4WWVhciA9IHRoaXMub3B0aW9ucy5kcm9wZG93bnMubWF4WWVhclxuICAgICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmRyb3Bkb3ducy5tYXhZZWFyXG4gICAgICAgICAgICAgICAgOiAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPiBtYXhZZWFyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGVjdFllYXJzXzEuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIHggPSBtYXhZZWFyOyB4ID49IG1pblllYXI7IHggLT0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uWWVhciA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG5ldyBEYXRlKHgsIDAsIDEsIDAsIDAsIDApKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBTdHJpbmcoeCk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBTdHJpbmcoeCk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gKHRoaXMub3B0aW9ucy5taW5EYXRlXG4gICAgICAgICAgICAgICAgICAgICYmIG9wdGlvblllYXIuaXNCZWZvcmUobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1pbkRhdGUpLCAneWVhcicpKVxuICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5vcHRpb25zLm1heERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIG9wdGlvblllYXIuaXNBZnRlcihuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWF4RGF0ZSksICd5ZWFyJykpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0geDtcbiAgICAgICAgICAgICAgICBzZWxlY3RZZWFyc18xLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpIDwgbWluWWVhcikge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxlY3RZZWFyc18xLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRyb3Bkb3ducy55ZWFycyA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2VsZWN0WWVhcnNfMS5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGNoaWxkcy5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgICAgICAgICAgeS5pbm5lckhUTUwgPSB5LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RZZWFyc18xLmFwcGVuZENoaWxkKHkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgaWR4ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zcGxpdFZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vbnRoSXRlbSA9IHRhcmdldC5jbG9zZXN0KFwiLlwiICsgc3R5bGUubW9udGhJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWR4ID0gdXRpbHNfMS5maW5kTmVzdGVkTW9udGhJdGVtKG1vbnRoSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLmNhbGVuZGFyc1tpZHhdLnNldEZ1bGxZZWFyKE51bWJlcih0YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdjaGFuZ2U6eWVhcicsIF90aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtb250aEFuZFllYXIuYXBwZW5kQ2hpbGQoc2VsZWN0WWVhcnNfMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbW9udGhZZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbW9udGhZZWFyLmNsYXNzTmFtZSA9IHN0eWxlLm1vbnRoSXRlbVllYXI7XG4gICAgICAgICAgICBtb250aFllYXIuaW5uZXJIVE1MID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICBtb250aEFuZFllYXIuYXBwZW5kQ2hpbGQobW9udGhZZWFyKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJldmlvdXNNb250aEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcmV2aW91c01vbnRoQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgcHJldmlvdXNNb250aEJ1dHRvbi5jbGFzc05hbWUgPSBzdHlsZS5idXR0b25QcmV2aW91c01vbnRoO1xuICAgICAgICBwcmV2aW91c01vbnRoQnV0dG9uLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5idXR0b25UZXh0LnByZXZpb3VzTW9udGg7XG4gICAgICAgIHZhciBuZXh0TW9udGhCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV4dE1vbnRoQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgbmV4dE1vbnRoQnV0dG9uLmNsYXNzTmFtZSA9IHN0eWxlLmJ1dHRvbk5leHRNb250aDtcbiAgICAgICAgbmV4dE1vbnRoQnV0dG9uLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5idXR0b25UZXh0Lm5leHRNb250aDtcbiAgICAgICAgbW9udGhIZWFkZXIuYXBwZW5kQ2hpbGQocHJldmlvdXNNb250aEJ1dHRvbik7XG4gICAgICAgIG1vbnRoSGVhZGVyLmFwcGVuZENoaWxkKG1vbnRoQW5kWWVhcik7XG4gICAgICAgIG1vbnRoSGVhZGVyLmFwcGVuZENoaWxkKG5leHRNb250aEJ1dHRvbik7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWluRGF0ZVxuICAgICAgICAgICAgJiYgc3RhcnREYXRlLmlzU2FtZU9yQmVmb3JlKG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5taW5EYXRlKSwgJ21vbnRoJykpIHtcbiAgICAgICAgICAgIG1vbnRoLmNsYXNzTGlzdC5hZGQoc3R5bGUubm9QcmV2aW91c01vbnRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1heERhdGVcbiAgICAgICAgICAgICYmIHN0YXJ0RGF0ZS5pc1NhbWVPckFmdGVyKG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5tYXhEYXRlKSwgJ21vbnRoJykpIHtcbiAgICAgICAgICAgIG1vbnRoLmNsYXNzTGlzdC5hZGQoc3R5bGUubm9OZXh0TW9udGgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3ZWVrZGF5c1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3ZWVrZGF5c1Jvdy5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1XZWVrZGF5c1JvdztcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93V2Vla051bWJlcnMpIHtcbiAgICAgICAgICAgIHdlZWtkYXlzUm93LmlubmVySFRNTCA9ICc8ZGl2Plc8L2Rpdj4nO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDw9IDc7IHcgKz0gMSkge1xuICAgICAgICAgICAgLy8gNyBkYXlzLCA0IGlzIMKrVGh1cnNkYXnCuyAobmV3IERhdGUoMTk3MCwgMCwgMSwgMTIsIDAsIDAsIDApKVxuICAgICAgICAgICAgdmFyIGRheUlkeCA9IDcgLSA0ICsgdGhpcy5vcHRpb25zLmZpcnN0RGF5ICsgdztcbiAgICAgICAgICAgIHZhciB3ZWVrZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB3ZWVrZGF5LmlubmVySFRNTCA9IHRoaXMud2Vla2RheU5hbWUoZGF5SWR4KTtcbiAgICAgICAgICAgIHdlZWtkYXkudGl0bGUgPSB0aGlzLndlZWtkYXlOYW1lKGRheUlkeCwgJ2xvbmcnKTtcbiAgICAgICAgICAgIHdlZWtkYXkuY2xhc3NMaXN0LmFkZCgnd2Vlay1pZHgtJyArICgodyAtIDEgKyB0aGlzLm9wdGlvbnMuZmlyc3REYXkpICUgNykpO1xuICAgICAgICAgICAgd2Vla2RheXNSb3cuYXBwZW5kQ2hpbGQod2Vla2RheSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRhaW5lckRheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyRGF5cy5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJEYXlzO1xuICAgICAgICB2YXIgd2Vla0RheXNJZHggPSAwO1xuICAgICAgICB2YXIgd2Vla0RheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd2Vla0RheXMuY2xhc3NOYW1lID0gXCJyb3dcIjtcbiAgICAgICAgdmFyIHNraXBEYXlzID0gdGhpcy5jYWxjU2tpcERheXMoc3RhcnREYXRlKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93V2Vla051bWJlcnMgJiYgc2tpcERheXMpIHtcbiAgICAgICAgICAgIHdlZWtEYXlzLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyV2Vla051bWJlcihzdGFydERhdGUpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBza2lwRGF5czsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd2Vla0RheXMuYXBwZW5kQ2hpbGQoZHVtbXkpO1xuICAgICAgICAgICAgd2Vla0RheXNJZHgrKztcbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMTsgaWR4IDw9IHRvdGFsRGF5czsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgIHN0YXJ0RGF0ZS5zZXREYXRlKGlkeCk7XG4gICAgICAgICAgICBpZiAod2Vla0RheXNJZHggPT09IDcpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXJEYXlzLmFwcGVuZENoaWxkKHdlZWtEYXlzKTtcbiAgICAgICAgICAgICAgICB3ZWVrRGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHdlZWtEYXlzLmNsYXNzTmFtZSA9IFwicm93XCI7XG4gICAgICAgICAgICAgICAgd2Vla0RheXNJZHggPSB3ZWVrRGF5c0lkeCAlIDc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dXZWVrTnVtYmVycyAmJiBzdGFydERhdGUuZ2V0RGF5KCkgPT09IHRoaXMub3B0aW9ucy5maXJzdERheSkge1xuICAgICAgICAgICAgICAgIHdlZWtEYXlzLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyV2Vla051bWJlcihzdGFydERhdGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdlZWtEYXlzLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyRGF5KHN0YXJ0RGF0ZSkpO1xuICAgICAgICAgICAgd2Vla0RheXNJZHgrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpZHggPSB3ZWVrRGF5c0lkeDsgaWR4IDwgNzsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd2Vla0RheXMuYXBwZW5kQ2hpbGQoZHVtbXkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lckRheXMuYXBwZW5kQ2hpbGQod2Vla0RheXMpO1xuICAgICAgICBtb250aC5hcHBlbmRDaGlsZChtb250aEhlYWRlcik7XG4gICAgICAgIG1vbnRoLmFwcGVuZENoaWxkKHdlZWtkYXlzUm93KTtcbiAgICAgICAgbW9udGguYXBwZW5kQ2hpbGQoY29udGFpbmVyRGF5cyk7XG4gICAgICAgIHRoaXMuZW1pdCgncmVuZGVyOm1vbnRoJywgbW9udGgsIGRhdGUpO1xuICAgICAgICByZXR1cm4gbW9udGg7XG4gICAgfTtcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyRGF5ID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgZGF0ZS5zZXRIb3VycygpO1xuICAgICAgICB2YXIgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRheS5jbGFzc05hbWUgPSBzdHlsZS5kYXlJdGVtO1xuICAgICAgICBkYXkuaW5uZXJIVE1MID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgZGF5LmRhdGFzZXQudGltZSA9IFN0cmluZyhkYXRlLmdldFRpbWUoKSk7XG4gICAgICAgIGlmIChkYXRlLnRvRGF0ZVN0cmluZygpID09PSAobmV3IERhdGUoKSkudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzVG9kYXkpO1xuICAgICAgICB9XG4gICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKCd3ZWVrLScgKyBkYXRlLmdldERheSgpKTtcbiAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWRbMF0udG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc1N0YXJ0RGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRW5kRGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWRbMV0udG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0VuZERhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5pc0JldHdlZW4odGhpcy5kYXRlUGlja2VkWzBdLCB0aGlzLmRhdGVQaWNrZWRbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzSW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zdGFydERhdGUpIHtcbiAgICAgICAgICAgIHZhciBzdGFydERhdGUgPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlO1xuICAgICAgICAgICAgdmFyIGVuZERhdGUgPSB0aGlzLm9wdGlvbnMuZW5kRGF0ZTtcbiAgICAgICAgICAgIGlmIChzdGFydERhdGUudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc1N0YXJ0RGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRW5kRGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZERhdGUgJiYgZW5kRGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gZGF0ZS50b0RhdGVTdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRW5kRGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5pc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0luUmFuZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1pbkRhdGUgJiYgZGF0ZS5pc0JlZm9yZShuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWluRGF0ZSkpKSB7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXhEYXRlICYmIGRhdGUuaXNBZnRlcihuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWF4RGF0ZSkpKSB7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5taW5EYXlzID4gMVxuICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdmFyIG1pbkRheXMgPSB0aGlzLm9wdGlvbnMubWluRGF5cyAtIDE7IC8vIHN1YnRyYWN0IHNlbGVjdGVkIGRheVxuICAgICAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKS5zdWJ0cmFjdChtaW5EYXlzLCAnZGF5Jyk7XG4gICAgICAgICAgICB2YXIgcmlnaHQgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKS5hZGQobWluRGF5cywgJ2RheScpO1xuICAgICAgICAgICAgaWYgKGRhdGUuaXNCZXR3ZWVuKGxlZnQsIHRoaXMuZGF0ZVBpY2tlZFswXSwgJyhdJykpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0ZS5pc0JldHdlZW4odGhpcy5kYXRlUGlja2VkWzBdLCByaWdodCwgJ1spJykpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXhEYXlzXG4gICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB2YXIgbWF4RGF5cyA9IHRoaXMub3B0aW9ucy5tYXhEYXlzO1xuICAgICAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKS5zdWJ0cmFjdChtYXhEYXlzLCAnZGF5Jyk7XG4gICAgICAgICAgICB2YXIgcmlnaHQgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKS5hZGQobWF4RGF5cywgJ2RheScpO1xuICAgICAgICAgICAgaWYgKGRhdGUuaXNTYW1lT3JCZWZvcmUobGVmdCkpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0ZS5pc1NhbWVPckFmdGVyKHJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdEZvcndhcmRcbiAgICAgICAgICAgICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICYmIGRhdGUuaXNCZWZvcmUodGhpcy5kYXRlUGlja2VkWzBdKSkge1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0QmFja3dhcmRcbiAgICAgICAgICAgICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICYmIGRhdGUuaXNBZnRlcih0aGlzLmRhdGVQaWNrZWRbMF0pKSB7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxvY2tlZCA9IHV0aWxzXzEuZGF0ZUlzTG9ja2VkKGRhdGUsIHRoaXMub3B0aW9ucywgdGhpcy5kYXRlUGlja2VkKTtcbiAgICAgICAgaWYgKGxvY2tlZCkge1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGlzSGlnaGxpZ2h0ZWQgPSB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIGlmIChkIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuaXNCZXR3ZWVuKGRbMF0sIGRbMV0sICdbXScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZC5pc1NhbWUoZGF0ZSwgJ2RheScpO1xuICAgICAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGlzSGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0hpZ2hsaWdodGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBmaXggYnVnIGlPUyAxMC0xMiAtIGh0dHBzOi8vZ2l0aHViLmNvbS93YWtpcmluL0xpdGVwaWNrZXIvaXNzdWVzLzEyNFxuICAgICAgICBkYXkudGFiSW5kZXggPSAhZGF5LmNsYXNzTGlzdC5jb250YWlucygnaXMtbG9ja2VkJykgPyAwIDogLTE7XG4gICAgICAgIHRoaXMuZW1pdCgncmVuZGVyOmRheScsIGRheSwgZGF0ZSk7XG4gICAgICAgIHJldHVybiBkYXk7XG4gICAgfTtcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyRm9vdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb3Rlci5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJGb290ZXI7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZm9vdGVySFRNTCkge1xuICAgICAgICAgICAgZm9vdGVyLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5mb290ZXJIVE1MO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9vdGVyLmlubmVySFRNTCA9IFwiXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcIlwiICsgc3R5bGUucHJldmlld0RhdGVSYW5nZSArIFwiXFxcIj48L3NwYW4+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIiArIHN0eWxlLmJ1dHRvbkNhbmNlbCArIFwiXFxcIj5cIiArIHRoaXMub3B0aW9ucy5idXR0b25UZXh0LmNhbmNlbCArIFwiPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIiArIHN0eWxlLmJ1dHRvbkFwcGx5ICsgXCJcXFwiPlwiICsgdGhpcy5vcHRpb25zLmJ1dHRvblRleHQuYXBwbHkgKyBcIjwvYnV0dG9uPlxcbiAgICAgIFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlZFswXS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICAgICAgICAgIGZvb3Rlci5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUucHJldmlld0RhdGVSYW5nZSkuaW5uZXJIVE1MID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZm9vdGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5idXR0b25BcHBseSkuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0VmFsdWUgPSB0aGlzLmRhdGVQaWNrZWRbMF0uZm9ybWF0KHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgICAgICAgICB2YXIgZW5kVmFsdWUgPSB0aGlzLmRhdGVQaWNrZWRbMV0uZm9ybWF0KHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgICAgICAgICBmb290ZXIucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLnByZXZpZXdEYXRlUmFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIC5pbm5lckhUTUwgPSBcIlwiICsgc3RhcnRWYWx1ZSArIHRoaXMub3B0aW9ucy5kZWxpbWl0ZXIgKyBlbmRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmRlcjpmb290ZXInLCBmb290ZXIpO1xuICAgICAgICByZXR1cm4gZm9vdGVyO1xuICAgIH07XG4gICAgQ2FsZW5kYXIucHJvdG90eXBlLnJlbmRlcldlZWtOdW1iZXIgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICB2YXIgd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIHdlZWsgPSBkYXRlLmdldFdlZWsodGhpcy5vcHRpb25zLmZpcnN0RGF5KTtcbiAgICAgICAgd24uY2xhc3NOYW1lID0gc3R5bGUud2Vla051bWJlcjtcbiAgICAgICAgd24uaW5uZXJIVE1MID0gd2VlayA9PT0gNTMgJiYgZGF0ZS5nZXRNb250aCgpID09PSAwID8gJzUzIC8gMScgOiB3ZWVrO1xuICAgICAgICByZXR1cm4gd247XG4gICAgfTtcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyVG9vbHRpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdC5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJUb29sdGlwO1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIENhbGVuZGFyLnByb3RvdHlwZS53ZWVrZGF5TmFtZSA9IGZ1bmN0aW9uIChkYXksIHJlcHJlc2VudGF0aW9uKSB7XG4gICAgICAgIGlmIChyZXByZXNlbnRhdGlvbiA9PT0gdm9pZCAwKSB7IHJlcHJlc2VudGF0aW9uID0gJ3Nob3J0JzsgfVxuICAgICAgICByZXR1cm4gbmV3IERhdGUoMTk3MCwgMCwgZGF5LCAxMiwgMCwgMCwgMClcbiAgICAgICAgICAgIC50b0xvY2FsZVN0cmluZyh0aGlzLm9wdGlvbnMubGFuZywgeyB3ZWVrZGF5OiByZXByZXNlbnRhdGlvbiB9KTtcbiAgICB9O1xuICAgIENhbGVuZGFyLnByb3RvdHlwZS5jYWxjU2tpcERheXMgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICB2YXIgdG90YWwgPSBkYXRlLmdldERheSgpIC0gdGhpcy5vcHRpb25zLmZpcnN0RGF5O1xuICAgICAgICBpZiAodG90YWwgPCAwKVxuICAgICAgICAgICAgdG90YWwgKz0gNztcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH07XG4gICAgcmV0dXJuIENhbGVuZGFyO1xufShjb3JlXzEuTFBDb3JlKSk7XG5leHBvcnRzLkNhbGVuZGFyID0gQ2FsZW5kYXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBldmVudHNfMSA9IHJlcXVpcmUoXCJldmVudHNcIik7XG52YXIgZGF0ZXRpbWVfMSA9IHJlcXVpcmUoXCIuL2RhdGV0aW1lXCIpO1xudmFyIGxpdGVwaWNrZXJfMSA9IHJlcXVpcmUoXCIuL2xpdGVwaWNrZXJcIik7XG52YXIgTFBDb3JlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMUENvcmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTFBDb3JlKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGF0ZVBpY2tlZCA9IFtdO1xuICAgICAgICBfdGhpcy5jYWxlbmRhcnMgPSBbXTtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgICAgICBlbGVtZW50RW5kOiBudWxsLFxuICAgICAgICAgICAgcGFyZW50RWw6IG51bGwsXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICAgICAgZmlyc3REYXk6IDEsXG4gICAgICAgICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICAgICAgICAgIGxhbmc6ICdlbi1VUycsXG4gICAgICAgICAgICBkZWxpbWl0ZXI6ICcgLSAnLFxuICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM6IDEsXG4gICAgICAgICAgICBudW1iZXJPZkNvbHVtbnM6IDEsXG4gICAgICAgICAgICBzdGFydERhdGU6IG51bGwsXG4gICAgICAgICAgICBlbmREYXRlOiBudWxsLFxuICAgICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgICAgcG9zaXRpb246ICdhdXRvJyxcbiAgICAgICAgICAgIHNlbGVjdEZvcndhcmQ6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0QmFja3dhcmQ6IGZhbHNlLFxuICAgICAgICAgICAgc3BsaXRWaWV3OiBmYWxzZSxcbiAgICAgICAgICAgIGlubGluZU1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgc2luZ2xlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9BcHBseTogdHJ1ZSxcbiAgICAgICAgICAgIGFsbG93UmVwaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVyczogZmFsc2UsXG4gICAgICAgICAgICBzaG93VG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbFRvRGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1vYmlsZUZyaWVuZGx5OiB0cnVlLFxuICAgICAgICAgICAgcmVzZXRCdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgYXV0b1JlZnJlc2g6IGZhbHNlLFxuICAgICAgICAgICAgbG9ja0RheXNGb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICAgICAgICAgIGxvY2tEYXlzOiBbXSxcbiAgICAgICAgICAgIGRpc2FsbG93TG9ja0RheXNJblJhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2tEYXlzSW5jbHVzaXZpdHk6ICdbXScsXG4gICAgICAgICAgICBoaWdobGlnaHRlZERheXNGb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkRGF5czogW10sXG4gICAgICAgICAgICBkcm9wZG93bnM6IHtcbiAgICAgICAgICAgICAgICBtaW5ZZWFyOiAxOTkwLFxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogb2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgICAgICAgICAgbWF4WWVhcjogbnVsbCxcbiAgICAgICAgICAgICAgICBtb250aHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHllYXJzOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25UZXh0OiB7XG4gICAgICAgICAgICAgICAgYXBwbHk6ICdBcHBseScsXG4gICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICBwcmV2aW91c01vbnRoOiAnPHN2ZyB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03LjkxOSAwbDIuNzQ4IDIuNjY3TDUuMzMzIDhsNS4zMzQgNS4zMzNMNy45MTkgMTYgMCA4elwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+PC9zdmc+JyxcbiAgICAgICAgICAgICAgICBuZXh0TW9udGg6ICc8c3ZnIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTIuNzQ4IDE2TDAgMTMuMzMzIDUuMzMzIDggMCAyLjY2NyAyLjc0OCAwbDcuOTE5IDh6XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz48L3N2Zz4nLFxuICAgICAgICAgICAgICAgIHJlc2V0OiBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHdpZHRoPVxcXCIyNFxcXCI+XFxuICAgICAgICA8cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIi8+XFxuICAgICAgICA8cGF0aCBkPVxcXCJNMTMgM2MtNC45NyAwLTkgNC4wMy05IDlIMWwzLjg5IDMuODkuMDcuMTRMOSAxMkg2YzAtMy44NyAzLjEzLTcgNy03czcgMy4xMyA3IDctMy4xMyA3LTcgN2MtMS45MyAwLTMuNjgtLjc5LTQuOTQtMi4wNmwtMS40MiAxLjQyQzguMjcgMTkuOTkgMTAuNTEgMjEgMTMgMjFjNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6bS0xIDV2NWw0LjI4IDIuNTQuNzItMS4yMS0zLjUtMi4wOFY4SDEyelxcXCIvPlxcbiAgICAgIDwvc3ZnPlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXBUZXh0OiB7XG4gICAgICAgICAgICAgICAgb25lOiAnZGF5JyxcbiAgICAgICAgICAgICAgICBvdGhlcjogJ2RheXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5vcHRpb25zKSwgb3B0aW9ucy5lbGVtZW50LmRhdGFzZXQpO1xuICAgICAgICBPYmplY3Qua2V5cyhfdGhpcy5vcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zW29wdF0gPT09ICd0cnVlJyB8fCBfdGhpcy5vcHRpb25zW29wdF0gPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcHRpb25zW29wdF0gPSBfdGhpcy5vcHRpb25zW29wdF0gPT09ICd0cnVlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBkcm9wZG93bnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMub3B0aW9ucy5kcm9wZG93bnMpLCBvcHRpb25zLmRyb3Bkb3ducyk7XG4gICAgICAgIHZhciBidXR0b25UZXh0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLm9wdGlvbnMuYnV0dG9uVGV4dCksIG9wdGlvbnMuYnV0dG9uVGV4dCk7XG4gICAgICAgIHZhciB0b29sdGlwVGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5vcHRpb25zLnRvb2x0aXBUZXh0KSwgb3B0aW9ucy50b29sdGlwVGV4dCk7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMub3B0aW9ucyksIG9wdGlvbnMpO1xuICAgICAgICBfdGhpcy5vcHRpb25zLmRyb3Bkb3ducyA9IF9fYXNzaWduKHt9LCBkcm9wZG93bnMpO1xuICAgICAgICBfdGhpcy5vcHRpb25zLmJ1dHRvblRleHQgPSBfX2Fzc2lnbih7fSwgYnV0dG9uVGV4dCk7XG4gICAgICAgIF90aGlzLm9wdGlvbnMudG9vbHRpcFRleHQgPSBfX2Fzc2lnbih7fSwgdG9vbHRpcFRleHQpO1xuICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5hbGxvd1JlcGljayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLmxvY2tEYXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5sb2NrRGF5cyA9IGRhdGV0aW1lXzEuRGF0ZVRpbWUuY29udmVydEFycmF5KF90aGlzLm9wdGlvbnMubG9ja0RheXMsIF90aGlzLm9wdGlvbnMubG9ja0RheXNGb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzID0gZGF0ZXRpbWVfMS5EYXRlVGltZS5jb252ZXJ0QXJyYXkoX3RoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMsIF90aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzRm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSBfdGhpcy5wYXJzZUlucHV0KCksIHN0YXJ0VmFsdWUgPSBfYVswXSwgZW5kVmFsdWUgPSBfYVsxXTtcbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc3RhcnREYXRlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zaW5nbGVNb2RlIHx8IF90aGlzLm9wdGlvbnMuZW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSwgX3RoaXMub3B0aW9ucy5mb3JtYXQsIF90aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0VmFsdWUgJiYgX3RoaXMub3B0aW9ucy5lbmREYXRlKSB7XG4gICAgICAgICAgICBlbmRWYWx1ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKF90aGlzLm9wdGlvbnMuZW5kRGF0ZSwgX3RoaXMub3B0aW9ucy5mb3JtYXQsIF90aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0VmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lICYmICFpc05hTihzdGFydFZhbHVlLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zdGFydERhdGUgJiYgZW5kVmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lICYmICFpc05hTihlbmRWYWx1ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLmVuZERhdGUgPSBlbmRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmICEoX3RoaXMub3B0aW9ucy5zdGFydERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lKSkge1xuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5zdGFydERhdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghX3RoaXMub3B0aW9ucy5zaW5nbGVNb2RlXG4gICAgICAgICAgICAmJiAoIShfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUpXG4gICAgICAgICAgICAgICAgfHwgIShfdGhpcy5vcHRpb25zLmVuZERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lKSkpIHtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbnVsbDtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgX3RoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRoczsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gX3RoaXMub3B0aW9ucy5zdGFydERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lXG4gICAgICAgICAgICAgICAgPyBfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZS5jbG9uZSgpXG4gICAgICAgICAgICAgICAgOiBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSgpO1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSAmJiAoaWR4ID09PSAwIHx8IF90aGlzLm9wdGlvbnMuc3BsaXRWaWV3KSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXhEYXRlID0gX3RoaXMub3B0aW9ucy5tYXhEYXRlID8gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoX3RoaXMub3B0aW9ucy5tYXhEYXRlKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIG1pbkRhdGUgPSBfdGhpcy5vcHRpb25zLm1pbkRhdGUgPyBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShfdGhpcy5vcHRpb25zLm1pbkRhdGUpIDogbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0TW9udGhzID0gX3RoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocyAtIDE7XG4gICAgICAgICAgICAgICAgdmFyIGlzRGF0ZVJhbmdlID0gbWluRGF0ZSAmJiBtYXhEYXRlICYmIGRhdGUuaXNBZnRlcihtYXhEYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNEYXRlUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG1pbkRhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghbWluRGF0ZSAmJiBtYXhEYXRlICYmIGRhdGUuaXNBZnRlcihtYXhEYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlID0gbWF4RGF0ZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpIC0gb2Zmc2V0TW9udGhzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRlLnNldERhdGUoMSk7XG4gICAgICAgICAgICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIGlkeCk7XG4gICAgICAgICAgICBfdGhpcy5jYWxlbmRhcnNbaWR4XSA9IGRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc2hvd1Rvb2x0aXApIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnRvb2x0aXBQbHVyYWxTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLnBsdXJhbFNlbGVjdG9yID0gX3RoaXMub3B0aW9ucy50b29sdGlwUGx1cmFsU2VsZWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGx1cmFsUnVsZXMgPSBuZXcgSW50bC5QbHVyYWxSdWxlcyhfdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbHVyYWxTZWxlY3RvciA9IHBsdXJhbFJ1bGVzLnNlbGVjdC5iaW5kKHBsdXJhbFJ1bGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKF9iKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsdXJhbFNlbGVjdG9yID0gZnVuY3Rpb24gKGFyZzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhhcmcwKSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ29uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ290aGVyJztcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMUENvcmUuYWRkID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEpIHtcbiAgICAgICAgbGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlW25hbWVdID0gZGF0YTtcbiAgICB9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZnVuY3Rpb24tbmFtZVxuICAgIExQQ29yZS5wcm90b3R5cGUuRGF0ZVRpbWUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0KSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZSwgZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoKTtcbiAgICB9O1xuICAgIExQQ29yZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wbHVnaW5zICYmIHRoaXMub3B0aW9ucy5wbHVnaW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShwbHVnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZVtwbHVnaW5dLmluaXQuY2FsbChfdGhpcywgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTGl0ZXBpY2tlcjogcGx1Z2luIFxcdTAwQUJcIiArIHBsdWdpbiArIFwiXFx1MDBCQiBub3QgZm91bmQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMUENvcmUucHJvdG90eXBlLnBhcnNlSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZWxpbWl0ZXIgPSB0aGlzLm9wdGlvbnMuZGVsaW1pdGVyO1xuICAgICAgICB2YXIgZGVsaW1pdGVyUmVnZXggPSBuZXcgUmVnRXhwKFwiXCIgKyBkZWxpbWl0ZXIpO1xuICAgICAgICB2YXIgc3BsaXR0ZWRWYWx1ZSA9IHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZS5zcGxpdChkZWxpbWl0ZXIpXG4gICAgICAgICAgICA6IFtdO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZS5sZW5ndGhcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLnZhbHVlLCB0aGlzLm9wdGlvbnMuZm9ybWF0KSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUsIHRoaXMub3B0aW9ucy5mb3JtYXQpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICAmJiBkZWxpbWl0ZXJSZWdleC50ZXN0KHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlKVxuICAgICAgICAgICAgJiYgc3BsaXR0ZWRWYWx1ZS5sZW5ndGhcbiAgICAgICAgICAgICYmIHNwbGl0dGVkVmFsdWUubGVuZ3RoICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgdmFyIGQxID0gc3BsaXR0ZWRWYWx1ZS5zbGljZSgwLCBzcGxpdHRlZFZhbHVlLmxlbmd0aCAvIDIpLmpvaW4oZGVsaW1pdGVyKTtcbiAgICAgICAgICAgIHZhciBkMiA9IHNwbGl0dGVkVmFsdWUuc2xpY2Uoc3BsaXR0ZWRWYWx1ZS5sZW5ndGggLyAyKS5qb2luKGRlbGltaXRlcik7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGQxLCB0aGlzLm9wdGlvbnMuZm9ybWF0KSxcbiAgICAgICAgICAgICAgICBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkMiwgdGhpcy5vcHRpb25zLmZvcm1hdCksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9O1xuICAgIExQQ29yZS5wcm90b3R5cGUuaXNTaG93bmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWkgJiYgdGhpcy51aS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG4gICAgfTtcbiAgICBMUENvcmUucHJvdG90eXBlLmZpbmRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGNhbFJlY3QgPSB0aGlzLnVpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgb3JpZW50YXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgdmFyIHNjcm9sbFggPSB3aW5kb3cuc2Nyb2xsWCB8fCB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgIHZhciBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICB2YXIgdG9wID0gMDtcbiAgICAgICAgdmFyIGxlZnQgPSAwO1xuICAgICAgICBpZiAob3JpZW50YXRpb25bMF0gPT09ICdhdXRvJyB8fCAhKC90b3B8Ym90dG9tLy50ZXN0KG9yaWVudGF0aW9uWzBdKSkpIHtcbiAgICAgICAgICAgIHRvcCA9IHJlY3QuYm90dG9tICsgc2Nyb2xsWTtcbiAgICAgICAgICAgIHZhciBpc091dEJvdW5kcyA9IHJlY3QuYm90dG9tICsgY2FsUmVjdC5oZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgaGFzVG9wU3BhY2UgPSAocmVjdC50b3AgKyBzY3JvbGxZKSAtIGNhbFJlY3QuaGVpZ2h0ID49IGNhbFJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKGlzT3V0Qm91bmRzICYmIGhhc1RvcFNwYWNlKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gKHJlY3QudG9wICsgc2Nyb2xsWSkgLSBjYWxSZWN0LmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvcCA9IHJlY3Rbb3JpZW50YXRpb25bMF1dICsgc2Nyb2xsWTtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvblswXSA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICB0b3AgLT0gY2FsUmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoL2xlZnR8cmlnaHQvLnRlc3Qob3JpZW50YXRpb25bMF0pKSAmJiAoIW9yaWVudGF0aW9uWzFdIHx8IG9yaWVudGF0aW9uWzFdID09PSAnYXV0bycgfHwgISgvbGVmdHxyaWdodC8udGVzdChvcmllbnRhdGlvblsxXSkpKSkge1xuICAgICAgICAgICAgbGVmdCA9IHJlY3QubGVmdCArIHNjcm9sbFg7XG4gICAgICAgICAgICB2YXIgaXNPdXRCb3VuZHMgPSByZWN0LmxlZnQgKyBjYWxSZWN0LndpZHRoID4gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB2YXIgaGFzTGVmdFNwYWNlID0gKHJlY3QucmlnaHQgKyBzY3JvbGxYKSAtIGNhbFJlY3Qud2lkdGggPj0gMDtcbiAgICAgICAgICAgIGlmIChpc091dEJvdW5kcyAmJiBoYXNMZWZ0U3BhY2UpIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gKHJlY3QucmlnaHQgKyBzY3JvbGxYKSAtIGNhbFJlY3Qud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoL2xlZnR8cmlnaHQvLnRlc3Qob3JpZW50YXRpb25bMF0pKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IHJlY3Rbb3JpZW50YXRpb25bMF1dICsgc2Nyb2xsWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxlZnQgPSByZWN0W29yaWVudGF0aW9uWzFdXSArIHNjcm9sbFg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb25bMF0gPT09ICdyaWdodCcgfHwgb3JpZW50YXRpb25bMV0gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICBsZWZ0IC09IGNhbFJlY3Qud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBMUENvcmU7XG59KGV2ZW50c18xLkV2ZW50RW1pdHRlcikpO1xuZXhwb3J0cy5MUENvcmUgPSBMUENvcmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEYXRlVGltZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEYXRlVGltZShkYXRlLCBmb3JtYXQsIGxhbmcpIHtcbiAgICAgICAgaWYgKGRhdGUgPT09IHZvaWQgMCkgeyBkYXRlID0gbnVsbDsgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSB2b2lkIDApIHsgZm9ybWF0ID0gbnVsbDsgfVxuICAgICAgICBpZiAobGFuZyA9PT0gdm9pZCAwKSB7IGxhbmcgPSAnZW4tVVMnOyB9XG4gICAgICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnb2JqZWN0JyAmJiBmb3JtYXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICB0aGlzLmRhdGVJbnN0YW5jZSA9IGZvcm1hdC5wYXJzZShkYXRlIGluc3RhbmNlb2YgRGF0ZVRpbWUgPyBkYXRlLmNsb25lKCkudG9KU0RhdGUoKSA6IGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVJbnN0YW5jZSA9IChEYXRlVGltZS5wYXJzZURhdGVUaW1lKGRhdGUsIGZvcm1hdCwgbGFuZykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZUluc3RhbmNlID0gKERhdGVUaW1lLnBhcnNlRGF0ZVRpbWUoZGF0ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRlSW5zdGFuY2UgPSAoRGF0ZVRpbWUucGFyc2VEYXRlVGltZShuZXcgRGF0ZSgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYW5nID0gbGFuZztcbiAgICB9XG4gICAgRGF0ZVRpbWUucGFyc2VEYXRlVGltZSA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQsIGxhbmcpIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9ICdZWVlZLU1NLUREJzsgfVxuICAgICAgICBpZiAobGFuZyA9PT0gdm9pZCAwKSB7IGxhbmcgPSAnZW4tVVMnOyB9XG4gICAgICAgIGlmICghZGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZVRpbWUpXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5jbG9uZSgpLnRvSlNEYXRlKCk7XG4gICAgICAgIGlmICgvXi0/XFxkezEwLH0kLy50ZXN0KGRhdGUpKVxuICAgICAgICAgICAgcmV0dXJuIERhdGVUaW1lLmdldERhdGVaZXJvVGltZShuZXcgRGF0ZShOdW1iZXIoZGF0ZSkpKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBtID0gbnVsbDtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uZGl0aW9uYWwtYXNzaWdubWVudFxuICAgICAgICAgICAgd2hpbGUgKChtID0gRGF0ZVRpbWUucmVnZXguZXhlYyhmb3JtYXQpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1bMV0gPT09ICdcXFxcJylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7IC8vIGRlbGV0ZSB3aGVuIHJlZ2V4cCBsb29rYmVoaW5kXG4gICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGVQYXR0ZXJuID0ge1xuICAgICAgICAgICAgICAgICAgICB5ZWFyOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBtb250aDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRNb250aDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbG9uZ01vbnRoOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkYXk6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzWzBdLmluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlUGF0dGVybi52YWx1ZSArPSAnLio/JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKG1hdGNoZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGsgPSBfYlswXSwgbWF0Y2ggPSBfYlsxXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IE51bWJlcihrKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jID0gRGF0ZVRpbWUuZm9ybWF0UGF0dGVybnMobWF0Y2hbMF0sIGxhbmcpLCBncm91cCA9IF9jLmdyb3VwLCBwYXR0ZXJuID0gX2MucGF0dGVybjtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBhdHRlcm5bZ3JvdXBdID0ga2V5ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBhdHRlcm4udmFsdWUgKz0gcGF0dGVybjtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBhdHRlcm4udmFsdWUgKz0gJy4qPyc7IC8vIGFueSBkZWxpbWl0ZXJzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkYXRlUmVnZXggPSBuZXcgUmVnRXhwKFwiXlwiICsgZGF0ZVBhdHRlcm4udmFsdWUgKyBcIiRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVSZWdleC50ZXN0KGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gZGF0ZVJlZ2V4LmV4ZWMoZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyID0gTnVtYmVyKGRbZGF0ZVBhdHRlcm4ueWVhcl0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGggPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZVBhdHRlcm4ubW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoID0gTnVtYmVyKGRbZGF0ZVBhdHRlcm4ubW9udGhdKSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0ZVBhdHRlcm4uc2hvcnRNb250aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSBEYXRlVGltZS5zaG9ydE1vbnRocyhsYW5nKS5pbmRleE9mKGRbZGF0ZVBhdHRlcm4uc2hvcnRNb250aF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGVQYXR0ZXJuLmxvbmdNb250aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSBEYXRlVGltZS5sb25nTW9udGhzKGxhbmcpLmluZGV4T2YoZFtkYXRlUGF0dGVybi5sb25nTW9udGhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF5ID0gTnVtYmVyKGRbZGF0ZVBhdHRlcm4uZGF5XSkgfHwgMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRGF0ZVRpbWUuZ2V0RGF0ZVplcm9UaW1lKG5ldyBEYXRlKGRhdGUpKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLmNvbnZlcnRBcnJheSA9IGZ1bmN0aW9uIChhcnJheSwgZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLm1hcChmdW5jdGlvbiAoZDEpIHsgcmV0dXJuIG5ldyBEYXRlVGltZShkMSwgZm9ybWF0KTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKGQsIGZvcm1hdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGF0ZVRpbWUuZ2V0RGF0ZVplcm9UaW1lID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgMCwgMCwgMCwgMCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5zaG9ydE1vbnRocyA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgIHJldHVybiBEYXRlVGltZS5NT05USF9KU1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4gbmV3IERhdGUoMjAxOSwgeCkudG9Mb2NhbGVTdHJpbmcobGFuZywgeyBtb250aDogJ3Nob3J0JyB9KTsgfSk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5sb25nTW9udGhzID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgcmV0dXJuIERhdGVUaW1lLk1PTlRIX0pTXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBuZXcgRGF0ZSgyMDE5LCB4KS50b0xvY2FsZVN0cmluZyhsYW5nLCB7IG1vbnRoOiAnbG9uZycgfSk7IH0pO1xuICAgIH07XG4gICAgRGF0ZVRpbWUuZm9ybWF0UGF0dGVybnMgPSBmdW5jdGlvbiAodG9rZW4sIGxhbmcpIHtcbiAgICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAgICAgY2FzZSAnWVknOlxuICAgICAgICAgICAgY2FzZSAnWVlZWSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICd5ZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogXCIoXFxcXGR7XCIgKyB0b2tlbi5sZW5ndGggKyBcIn0pXCIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiAnbW9udGgnLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnKFxcXFxkezEsMn0pJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnTU0nOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiAnbW9udGgnLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnKFxcXFxkezJ9KScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICdzaG9ydE1vbnRoJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogXCIoXCIgKyBEYXRlVGltZS5zaG9ydE1vbnRocyhsYW5nKS5qb2luKCd8JykgKyBcIilcIixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICdsb25nTW9udGgnLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIihcIiArIERhdGVUaW1lLmxvbmdNb250aHMobGFuZykuam9pbignfCcpICsgXCIpXCIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiAnZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJyhcXFxcZHsxLDJ9KScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ0REJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBncm91cDogJ2RheScsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46ICcoXFxcXGR7Mn0pJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUudG9KU0RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS50b0xvY2FsZVN0cmluZyhhcmcwLCBhcmcxKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS50b0RhdGVTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS50b0RhdGVTdHJpbmcoKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5nZXRTZWNvbmRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2UuZ2V0U2Vjb25kcygpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldERheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldERheSgpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5nZXRUaW1lKCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0RGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldERhdGUoKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5nZXRNb250aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldE1vbnRoKCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0RnVsbFllYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5nZXRGdWxsWWVhcigpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnNldE1vbnRoID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2Uuc2V0TW9udGgoYXJnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5zZXRIb3VycyA9IGZ1bmN0aW9uIChob3VycywgbWludXRlcywgc2Vjb25kcywgbXMpIHtcbiAgICAgICAgaWYgKGhvdXJzID09PSB2b2lkIDApIHsgaG91cnMgPSAwOyB9XG4gICAgICAgIGlmIChtaW51dGVzID09PSB2b2lkIDApIHsgbWludXRlcyA9IDA7IH1cbiAgICAgICAgaWYgKHNlY29uZHMgPT09IHZvaWQgMCkgeyBzZWNvbmRzID0gMDsgfVxuICAgICAgICBpZiAobXMgPT09IHZvaWQgMCkgeyBtcyA9IDA7IH1cbiAgICAgICAgdGhpcy5kYXRlSW5zdGFuY2Uuc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1zKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5zZXRTZWNvbmRzID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2Uuc2V0U2Vjb25kcyhhcmcpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnNldERhdGUgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5zZXREYXRlKGFyZyk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuc2V0RnVsbFllYXIgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5zZXRGdWxsWWVhcihhcmcpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldFdlZWsgPSBmdW5jdGlvbiAoZmlyc3REYXkpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IG5ldyBEYXRlKHRoaXMudGltZXN0YW1wKCkpO1xuICAgICAgICB2YXIgZGF5TnIgPSAodGhpcy5nZXREYXkoKSArICg3IC0gZmlyc3REYXkpKSAlIDc7XG4gICAgICAgIHRhcmdldC5zZXREYXRlKHRhcmdldC5nZXREYXRlKCkgLSBkYXlOcik7XG4gICAgICAgIHZhciBzdGFydFdlZWtkYXkgPSB0YXJnZXQuZ2V0VGltZSgpO1xuICAgICAgICB0YXJnZXQuc2V0TW9udGgoMCwgMSk7XG4gICAgICAgIGlmICh0YXJnZXQuZ2V0RGF5KCkgIT09IGZpcnN0RGF5KSB7XG4gICAgICAgICAgICB0YXJnZXQuc2V0TW9udGgoMCwgMSArICgoNCAtIHRhcmdldC5nZXREYXkoKSkgKyA3KSAlIDcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxICsgTWF0aC5jZWlsKChzdGFydFdlZWtkYXkgLSB0YXJnZXQuZ2V0VGltZSgpKSAvIDYwNDgwMDAwMCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUodGhpcy50b0pTRGF0ZSgpKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc0JldHdlZW4gPSBmdW5jdGlvbiAoZGF0ZTEsIGRhdGUyLCBpbmNsdXNpdml0eSkge1xuICAgICAgICBpZiAoaW5jbHVzaXZpdHkgPT09IHZvaWQgMCkgeyBpbmNsdXNpdml0eSA9ICcoKSc7IH1cbiAgICAgICAgc3dpdGNoIChpbmNsdXNpdml0eSkge1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhc2UgJygpJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lc3RhbXAoKSA+IGRhdGUxLmdldFRpbWUoKSAmJiB0aGlzLnRpbWVzdGFtcCgpIDwgZGF0ZTIuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnWyknOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVzdGFtcCgpID49IGRhdGUxLmdldFRpbWUoKSAmJiB0aGlzLnRpbWVzdGFtcCgpIDwgZGF0ZTIuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnKF0nOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVzdGFtcCgpID4gZGF0ZTEuZ2V0VGltZSgpICYmIHRoaXMudGltZXN0YW1wKCkgPD0gZGF0ZTIuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnW10nOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVzdGFtcCgpID49IGRhdGUxLmdldFRpbWUoKSAmJiB0aGlzLnRpbWVzdGFtcCgpIDw9IGRhdGUyLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmlzQmVmb3JlID0gZnVuY3Rpb24gKGRhdGUsIHVuaXQpIHtcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmdldFRpbWUoKSA+IHRoaXMuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCAxKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgIGNhc2UgJ3llYXJzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpID4gdGhpcy5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaXNCZWZvcmU6IEludmFsaWQgdW5pdCEnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc1NhbWVPckJlZm9yZSA9IGZ1bmN0aW9uIChkYXRlLCB1bml0KSB7XG4gICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmRzJzsgfVxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPj0gdGhpcy5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID49IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+PSBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaXNTYW1lT3JCZWZvcmU6IEludmFsaWQgdW5pdCEnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc0FmdGVyID0gZnVuY3Rpb24gKGRhdGUsIHVuaXQpIHtcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRpbWUoKSA+IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgIGNhc2UgJ3llYXJzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGdWxsWWVhcigpID4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaXNBZnRlcjogSW52YWxpZCB1bml0IScpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmlzU2FtZU9yQWZ0ZXIgPSBmdW5jdGlvbiAoZGF0ZSwgdW5pdCkge1xuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cbiAgICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGltZSgpID49IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA+PSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCAxKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPj0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lzU2FtZU9yQWZ0ZXI6IEludmFsaWQgdW5pdCEnKTtcbiAgICB9O1xuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc1NhbWUgPSBmdW5jdGlvbiAoZGF0ZSwgdW5pdCkge1xuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cbiAgICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGltZSgpID09PSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPT09IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA9PT0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lzU2FtZTogSW52YWxpZCB1bml0IScpO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgdW5pdCkge1xuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cbiAgICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWNvbmRzKHRoaXMuZ2V0U2Vjb25kcygpICsgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZSh0aGlzLmdldERhdGUoKSArIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNb250aCh0aGlzLmdldE1vbnRoKCkgKyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAoZHVyYXRpb24sIHVuaXQpIHtcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2Vjb25kcyh0aGlzLmdldFNlY29uZHMoKSAtIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgLSBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9udGgodGhpcy5nZXRNb250aCgpIC0gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmRpZmYgPSBmdW5jdGlvbiAoZGF0ZSwgdW5pdCkge1xuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cbiAgICAgICAgdmFyIG9uZURheSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgodGhpcy50aW1lc3RhbXAoKSAtIGRhdGUuZ2V0VGltZSgpKSAvIG9uZURheSk7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxuICAgICAgICAgICAgLy8gQFRPRE9cbiAgICAgICAgfVxuICAgIH07XG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQsIGxhbmcpIHtcbiAgICAgICAgaWYgKGxhbmcgPT09IHZvaWQgMCkgeyBsYW5nID0gJ2VuLVVTJzsgfVxuICAgICAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQub3V0cHV0KHRoaXMuY2xvbmUoKS50b0pTRGF0ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzcG9uc2UgPSAnJztcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgdmFyIG0gPSBudWxsO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbmRpdGlvbmFsLWFzc2lnbm1lbnRcbiAgICAgICAgd2hpbGUgKChtID0gRGF0ZVRpbWUucmVnZXguZXhlYyhmb3JtYXQpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobVsxXSA9PT0gJ1xcXFwnKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBkZWxldGUgd2hlbiByZWdleHAgbG9va2JlaGluZFxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gYWRkIHN0YXJ0IGxpbmUgb2YgdG9rZW5zIGFyZSBub3QgYXQgdGhlIGJlZ2lubmluZ1xuICAgICAgICAgICAgaWYgKG1hdGNoZXNbMF0uaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgKz0gZm9ybWF0LnN1YnN0cmluZygwLCBtYXRjaGVzWzBdLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3QuZW50cmllcyhtYXRjaGVzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGsgPSBfYlswXSwgbWF0Y2ggPSBfYlsxXTtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gTnVtYmVyKGspO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlICs9IHRoaXMuZm9ybWF0VG9rZW5zKG1hdGNoWzBdLCBsYW5nKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlc1trZXkgKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSArPSBmb3JtYXQuc3Vic3RyaW5nKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoLCBtYXRjaGVzW2tleSArIDFdLmluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYWRkIGVuZCBsaW5lIGlmIHRva2VucyBhcmUgbm90IGF0IHRoZSBlbmRpbmdcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBtYXRjaGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgKz0gZm9ybWF0LnN1YnN0cmluZyhtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSBlc2NhcGUgY2hhcmFjdGVyc1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVwbGFjZSgvXFxcXC9nLCAnJyk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUudGltZXN0YW1wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpLCAwLCAwLCAwLCAwKS5nZXRUaW1lKCk7XG4gICAgfTtcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZm9ybWF0VG9rZW5zID0gZnVuY3Rpb24gKHRva2VuLCBsYW5nKSB7XG4gICAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgICAgIGNhc2UgJ1lZJzogcmV0dXJuIFN0cmluZyh0aGlzLmdldEZ1bGxZZWFyKCkpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgIGNhc2UgJ1lZWVknOiByZXR1cm4gU3RyaW5nKHRoaXMuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICBjYXNlICdNJzogcmV0dXJuIFN0cmluZyh0aGlzLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIGNhc2UgJ01NJzogcmV0dXJuIChcIjBcIiArICh0aGlzLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xuICAgICAgICAgICAgY2FzZSAnTU1NJzogcmV0dXJuIERhdGVUaW1lLnNob3J0TW9udGhzKGxhbmcpW3RoaXMuZ2V0TW9udGgoKV07XG4gICAgICAgICAgICBjYXNlICdNTU1NJzogcmV0dXJuIERhdGVUaW1lLmxvbmdNb250aHMobGFuZylbdGhpcy5nZXRNb250aCgpXTtcbiAgICAgICAgICAgIGNhc2UgJ0QnOiByZXR1cm4gU3RyaW5nKHRoaXMuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgIGNhc2UgJ0REJzogcmV0dXJuIChcIjBcIiArIHRoaXMuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIHJlcGxhY2UgdG8gcmVnZXhwIGxvb2tiZWhpbmQgd2hlbiBtb3N0IHBvcHVsYXIgYnJvd3NlcnMgd2lsbCBzdXBwb3J0XG4gICAgLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD1qcy1yZWdleHAtbG9va2JlaGluZFxuICAgIC8vIC8oPzwhXFxcXCkoWXsyLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9XSkvZ1xuICAgIERhdGVUaW1lLnJlZ2V4ID0gLyhcXFxcKT8oWXsyLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9KS9nO1xuICAgIERhdGVUaW1lLk1PTlRIX0pTID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMV07XG4gICAgcmV0dXJuIERhdGVUaW1lO1xufSgpKTtcbmV4cG9ydHMuRGF0ZVRpbWUgPSBEYXRlVGltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGxpdGVwaWNrZXJfMSA9IHJlcXVpcmUoXCIuL2xpdGVwaWNrZXJcIik7XG5leHBvcnRzLkxpdGVwaWNrZXIgPSBsaXRlcGlja2VyXzEuTGl0ZXBpY2tlcjtcbnJlcXVpcmUoXCIuL21ldGhvZHNcIik7XG53aW5kb3cuTGl0ZXBpY2tlciA9IGxpdGVwaWNrZXJfMS5MaXRlcGlja2VyO1xuZXhwb3J0cy5kZWZhdWx0ID0gbGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY2FsZW5kYXJfMSA9IHJlcXVpcmUoXCIuL2NhbGVuZGFyXCIpO1xudmFyIGRhdGV0aW1lXzEgPSByZXF1aXJlKFwiLi9kYXRldGltZVwiKTtcbnZhciBzdHlsZSA9IHJlcXVpcmUoXCIuL3Njc3MvbWFpbi5zY3NzXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbnZhciBMaXRlcGlja2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMaXRlcGlja2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExpdGVwaWNrZXIob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcmV2ZW50Q2xpY2sgPSBmYWxzZTtcbiAgICAgICAgLy9cbiAgICAgICAgX3RoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNjcm9sbFRvRGF0ZSA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNjcm9sbFRvRGF0ZSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICAgIHZhciBzdGFydERhdGUgPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSA/IHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKSA6IG51bGw7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgdmFyIGVuZERhdGUgPSB0aGlzLm9wdGlvbnMuZW5kRGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUgPyB0aGlzLm9wdGlvbnMuZW5kRGF0ZS5jbG9uZSgpIDogbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnREYXRlICYmICghZWwgfHwgZWwgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzWzBdID0gc3RhcnREYXRlLmNsb25lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbCAmJiB0aGlzLm9wdGlvbnMuZW5kRGF0ZSAmJiBlbCA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpIHtcbiAgICAgICAgICAgICAgICBlbmREYXRlLnNldERhdGUoMSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocyA+IDEgJiYgZW5kRGF0ZS5pc0FmdGVyKHN0YXJ0RGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZS5zZXRNb250aChlbmREYXRlLmdldE1vbnRoKCkgLSAodGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzIC0gMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1swXSA9IGVuZERhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy51aS5jbGFzc05hbWUgPSBzdHlsZS5saXRlcGlja2VyO1xuICAgICAgICB0aGlzLnVpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMudWkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcyksIHRydWUpO1xuICAgICAgICB0aGlzLnVpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b1JlZnJlc2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbklucHV0LmJpbmQodGhpcyksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25JbnB1dC5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhcmVudEVsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhcmVudEVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucGFyZW50RWwuYXBwZW5kQ2hpbGQodGhpcy51aSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5wYXJlbnRFbCkuYXBwZW5kQ2hpbGQodGhpcy51aSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy51aSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnVpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudWkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnNldHVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2V0dXAuY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS51cGRhdGVJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IHRoaXMub3B0aW9ucy5zdGFydERhdGU7XG4gICAgICAgIHZhciBlbmREYXRlID0gdGhpcy5vcHRpb25zLmVuZERhdGU7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiBzdGFydERhdGUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlID0gc3RhcnREYXRlLmZvcm1hdCh0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmIHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICAgICAgICB2YXIgc3RhcnRWYWx1ZSA9IHN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICAgICAgdmFyIGVuZFZhbHVlID0gZW5kRGF0ZS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZC52YWx1ZSA9IGVuZFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUgPSBcIlwiICsgc3RhcnRWYWx1ZSArIHRoaXMub3B0aW9ucy5kZWxpbWl0ZXIgKyBlbmRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YXJ0RGF0ZSAmJiAhZW5kRGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5pc1NhbWVQaWNrZXIgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIHBpY2tlciA9IGVsLmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5saXRlcGlja2VyKTtcbiAgICAgICAgcmV0dXJuIHBpY2tlciA9PT0gdGhpcy51aTtcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3VsZFNob3duID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiAhZWwuZGlzYWJsZWQgJiYgKGVsID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudFxuICAgICAgICAgICAgfHwgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kICYmIGVsID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkpO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdWxkUmVzZXREYXRlUGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgfHwgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMjtcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3VsZFN3YXBEYXRlUGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMlxuICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkWzBdLmdldFRpbWUoKSA+IHRoaXMuZGF0ZVBpY2tlZFsxXS5nZXRUaW1lKCk7XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zaG91bGRDaGVja0xvY2tEYXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRpc2FsbG93TG9ja0RheXNJblJhbmdlXG4gICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAyO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIXRoaXMudWkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGljayBvbiBlbGVtZW50XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFNob3duKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdyh0YXJnZXQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsaWNrIG91dHNpZGUgcGlja2VyXG4gICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5saXRlcGlja2VyKSAmJiB0aGlzLmlzU2hvd25pbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzU2FtZVBpY2tlcih0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCdiZWZvcmU6Y2xpY2snLCB0YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5wcmV2ZW50Q2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudENsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xpY2sgb24gZGF0ZVxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5kYXlJdGVtKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuaXNMb2NrZWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkUmVzZXREYXRlUGlja2VkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFt0aGlzLmRhdGVQaWNrZWQubGVuZ3RoXSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRhcmdldC5kYXRhc2V0LnRpbWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkU3dhcERhdGVQaWNrZWQoKSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wRGF0ZSA9IHRoaXMuZGF0ZVBpY2tlZFsxXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFsxXSA9IHRoaXMuZGF0ZVBpY2tlZFswXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFswXSA9IHRlbXBEYXRlLmNsb25lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRDaGVja0xvY2tEYXlzKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbG9ja2VkID0gdXRpbHNfMS5yYW5nZUlzTG9ja2VkKHRoaXMuZGF0ZVBpY2tlZCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAobG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6cmFuZ2UnLCB0aGlzLmRhdGVQaWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFsncHJlc2VsZWN0J10sIF9fc3ByZWFkQXJyYXlzKHRoaXMuZGF0ZVBpY2tlZCkubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmNsb25lKCk7IH0pKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9BcHBseSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZSh0aGlzLmRhdGVQaWNrZWRbMF0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRlUmFuZ2UodGhpcy5kYXRlUGlja2VkWzBdLCB0aGlzLmRhdGVQaWNrZWRbMV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xpY2sgb24gYnV0dG9uIHByZXZpb3VzIG1vbnRoXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmJ1dHRvblByZXZpb3VzTW9udGgpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgaWR4ID0gMDtcbiAgICAgICAgICAgIHZhciBudW1iZXJPZk1vbnRocyA9IHRoaXMub3B0aW9ucy5zd2l0Y2hpbmdNb250aHMgfHwgdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zcGxpdFZpZXcpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9udGhJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5tb250aEl0ZW0pO1xuICAgICAgICAgICAgICAgIGlkeCA9IHV0aWxzXzEuZmluZE5lc3RlZE1vbnRoSXRlbShtb250aEl0ZW0pO1xuICAgICAgICAgICAgICAgIG51bWJlck9mTW9udGhzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzW2lkeF0uc2V0TW9udGgodGhpcy5jYWxlbmRhcnNbaWR4XS5nZXRNb250aCgpIC0gbnVtYmVyT2ZNb250aHMpO1xuICAgICAgICAgICAgdGhpcy5nb3RvRGF0ZSh0aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bW9udGgnLCB0aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsaWNrIG9uIGJ1dHRvbiBuZXh0IG1vbnRoXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmJ1dHRvbk5leHRNb250aCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBpZHggPSAwO1xuICAgICAgICAgICAgdmFyIG51bWJlck9mTW9udGhzID0gdGhpcy5vcHRpb25zLnN3aXRjaGluZ01vbnRocyB8fCB0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHM7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xuICAgICAgICAgICAgICAgIHZhciBtb250aEl0ZW0gPSB0YXJnZXQuY2xvc2VzdChcIi5cIiArIHN0eWxlLm1vbnRoSXRlbSk7XG4gICAgICAgICAgICAgICAgaWR4ID0gdXRpbHNfMS5maW5kTmVzdGVkTW9udGhJdGVtKG1vbnRoSXRlbSk7XG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHMgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbaWR4XS5zZXRNb250aCh0aGlzLmNhbGVuZGFyc1tpZHhdLmdldE1vbnRoKCkgKyBudW1iZXJPZk1vbnRocyk7XG4gICAgICAgICAgICB0aGlzLmdvdG9EYXRlKHRoaXMuY2FsZW5kYXJzW2lkeF0sIGlkeCk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTptb250aCcsIHRoaXMuY2FsZW5kYXJzW2lkeF0sIGlkeCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xpY2sgb24gYnV0dG9uIGNhbmNlbFxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5idXR0b25DYW5jZWwpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYnV0dG9uOmNhbmNlbCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsaWNrIG9uIGJ1dHRvbiBhcHBseVxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5idXR0b25BcHBseSkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuZGF0ZVBpY2tlZFswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZVJhbmdlKHRoaXMuZGF0ZVBpY2tlZFswXSwgdGhpcy5kYXRlUGlja2VkWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdidXR0b246YXBwbHknLCB0aGlzLm9wdGlvbnMuc3RhcnREYXRlLCB0aGlzLm9wdGlvbnMuZW5kRGF0ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3dUb29sdGlwID0gZnVuY3Rpb24gKGVsZW1lbnQsIHRleHQpIHtcbiAgICAgICAgdmFyIHRvb2x0aXAgPSB0aGlzLnVpLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5jb250YWluZXJUb29sdGlwKTtcbiAgICAgICAgdG9vbHRpcC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICB0b29sdGlwLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgIHZhciBwaWNrZXJCQ1IgPSB0aGlzLnVpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgdG9vbHRpcEJDUiA9IHRvb2x0aXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBkYXlCQ1IgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgdG9wID0gZGF5QkNSLnRvcDtcbiAgICAgICAgdmFyIGxlZnQgPSBkYXlCQ1IubGVmdDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlICYmIHRoaXMub3B0aW9ucy5wYXJlbnRFbCkge1xuICAgICAgICAgICAgdmFyIHBhcmVudEJDUiA9IHRoaXMudWkucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHRvcCAtPSBwYXJlbnRCQ1IudG9wO1xuICAgICAgICAgICAgbGVmdCAtPSBwYXJlbnRCQ1IubGVmdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvcCAtPSBwaWNrZXJCQ1IudG9wO1xuICAgICAgICAgICAgbGVmdCAtPSBwaWNrZXJCQ1IubGVmdDtcbiAgICAgICAgfVxuICAgICAgICB0b3AgLT0gdG9vbHRpcEJDUi5oZWlnaHQ7XG4gICAgICAgIGxlZnQgLT0gdG9vbHRpcEJDUi53aWR0aCAvIDI7XG4gICAgICAgIGxlZnQgKz0gZGF5QkNSLndpZHRoIC8gMjtcbiAgICAgICAgdG9vbHRpcC5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgICAgIHRoaXMuZW1pdCgndG9vbHRpcCcsIHRvb2x0aXAsIGVsZW1lbnQpO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuaGlkZVRvb2x0aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b29sdGlwID0gdGhpcy51aS5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUuY29udGFpbmVyVG9vbHRpcCk7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdWxkQWxsb3dNb3VzZUVudGVyID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5vcHRpb25zLnNpbmdsZU1vZGVcbiAgICAgICAgICAgICYmICFlbC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuaXNMb2NrZWQpO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdWxkQWxsb3dSZXBpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZFxuICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmFsbG93UmVwaWNrXG4gICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuc3RhcnREYXRlXG4gICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZW5kRGF0ZTtcbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLmlzRGF5SXRlbSA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmRheUl0ZW0pO1xuICAgIH07XG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGhpcy5pc0RheUl0ZW0odGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNob3VsZEFsbG93TW91c2VFbnRlcih0YXJnZXQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRBbGxvd1JlcGljaygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJpZ2dlckVsZW1lbnQgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFswXSA9IHRoaXMub3B0aW9ucy5lbmREYXRlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudHJpZ2dlckVsZW1lbnQgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50RW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFswXSA9IHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGFydERhdGVFbGVtZW50ID0gdGhpcy51aVxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUuZGF5SXRlbSArIFwiW2RhdGEtdGltZT1cXFwiXCIgKyB0aGlzLmRhdGVQaWNrZWRbMF0uZ2V0VGltZSgpICsgXCJcXFwiXVwiKTtcbiAgICAgICAgICAgIHZhciBkYXRlMV8xID0gdGhpcy5kYXRlUGlja2VkWzBdLmNsb25lKCk7XG4gICAgICAgICAgICB2YXIgZGF0ZTJfMSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRhcmdldC5kYXRhc2V0LnRpbWUpO1xuICAgICAgICAgICAgdmFyIGlzRmxpcHBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGRhdGUxXzEuZ2V0VGltZSgpID4gZGF0ZTJfMS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcERhdGUgPSBkYXRlMV8xLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgZGF0ZTFfMSA9IGRhdGUyXzEuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBkYXRlMl8xID0gdGVtcERhdGUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBpc0ZsaXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFsbERheUl0ZW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy51aS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiICsgc3R5bGUuZGF5SXRlbSkpO1xuICAgICAgICAgICAgYWxsRGF5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZC5kYXRhc2V0LnRpbWUpO1xuICAgICAgICAgICAgICAgIHZhciBkYXkgPSBfdGhpcy5yZW5kZXJEYXkoZGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuaXNCZXR3ZWVuKGRhdGUxXzEsIGRhdGUyXzEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzSW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGQuY2xhc3NOYW1lID0gZGF5LmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNFbmREYXRlKTtcbiAgICAgICAgICAgIGlmIChpc0ZsaXBwZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnREYXRlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNGbGlwcGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNGbGlwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzdGFydERhdGVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5pc0ZsaXBwZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5pc0ZsaXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93VG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXlzID0gZGF0ZTJfMS5kaWZmKGRhdGUxXzEsICdkYXknKSArIDE7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMudG9vbHRpcE51bWJlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBkYXlzID0gdGhpcy5vcHRpb25zLnRvb2x0aXBOdW1iZXIuY2FsbCh0aGlzLCBkYXlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRheXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwbHVyYWxOYW1lID0gdGhpcy5wbHVyYWxTZWxlY3RvcihkYXlzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsdXJhbFRleHQgPSB0aGlzLm9wdGlvbnMudG9vbHRpcFRleHRbcGx1cmFsTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnRvb2x0aXBUZXh0W3BsdXJhbE5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiW1wiICsgcGx1cmFsTmFtZSArIFwiXVwiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IGRheXMgKyBcIiBcIiArIHBsdXJhbFRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAodGFyZ2V0LCB0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZml4IGJ1ZyBpT1MgMTAtMTIgLSBodHRwczovL2dpdGh1Yi5jb20vd2FraXJpbi9MaXRlcGlja2VyL2lzc3Vlcy8xMjRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpRGV2aWNlID0gLyhpcGhvbmV8aXBhZCkvaS50ZXN0KHVhKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlPUzExb3IxMiA9IC9PUyAxKFswLTJdKS9pLnRlc3QodWEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaURldmljZSAmJiBpT1MxMW9yMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbGxvd1JlcGlja1xuICAgICAgICAgICAgfHwgKHRoaXMub3B0aW9ucy5hbGxvd1JlcGljayAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSAmJiAhdGhpcy5vcHRpb25zLmVuZERhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5vbklucHV0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucGFyc2VJbnB1dCgpLCBzdGFydFZhbHVlID0gX2FbMF0sIGVuZFZhbHVlID0gX2FbMV07XG4gICAgICAgIHZhciBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIHZhciBkYXRlRm9ybWF0ID0gdGhpcy5vcHRpb25zLmZvcm1hdDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gc3RhcnRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcbiAgICAgICAgICAgICAgICAmJiBlbmRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcbiAgICAgICAgICAgICAgICAmJiBzdGFydFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICAmJiBlbmRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gc3RhcnRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcbiAgICAgICAgICAgICAgICAmJiBzdGFydFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gc3RhcnRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcbiAgICAgICAgICAgICAgICAmJiBlbmRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgICAgICYmIFwiXCIgKyBzdGFydFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSArIHRoaXMub3B0aW9ucy5kZWxpbWl0ZXIgKyBlbmRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICBpZiAoZW5kVmFsdWUgJiYgc3RhcnRWYWx1ZS5nZXRUaW1lKCkgPiBlbmRWYWx1ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcERhdGUgPSBzdGFydFZhbHVlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZSA9IGVuZFZhbHVlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgZW5kVmFsdWUgPSB0ZW1wRGF0ZS5jbG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHN0YXJ0VmFsdWUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgICAgIGlmIChlbmRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbmREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZW5kVmFsdWUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICB2YXIgZGF0ZUdvID0gc3RhcnRWYWx1ZS5jbG9uZSgpO1xuICAgICAgICAgICAgdmFyIG1vbnRoSWR4ID0gMDtcbiAgICAgICAgICAgIHZhciBpc1N0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xuICAgICAgICAgICAgICAgIGlzU3RhcnQgPSBzdGFydFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSA9PT0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXNTdGFydCA9IGV2ZW50LnRhcmdldC52YWx1ZS5zdGFydHNXaXRoKHN0YXJ0VmFsdWUuZm9ybWF0KGRhdGVGb3JtYXQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNTdGFydCkge1xuICAgICAgICAgICAgICAgIGRhdGVHbyA9IGVuZFZhbHVlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgbW9udGhJZHggPSB0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHMgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdzZWxlY3RlZCcsIHRoaXMuZ2V0U3RhcnREYXRlKCksIHRoaXMuZ2V0RW5kRGF0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMuZ290b0RhdGUoZGF0ZUdvLCBtb250aElkeCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBMaXRlcGlja2VyO1xufShjYWxlbmRhcl8xLkNhbGVuZGFyKSk7XG5leHBvcnRzLkxpdGVwaWNrZXIgPSBMaXRlcGlja2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRhdGV0aW1lXzEgPSByZXF1aXJlKFwiLi9kYXRldGltZVwiKTtcbnZhciBsaXRlcGlja2VyXzEgPSByZXF1aXJlKFwiLi9saXRlcGlja2VyXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsID09PSB2b2lkIDApIHsgZWwgPSBudWxsOyB9XG4gICAgdGhpcy5lbWl0KCdiZWZvcmU6c2hvdycsIGVsKTtcbiAgICB2YXIgZWxlbWVudCA9IGVsID8gZWwgOiB0aGlzLm9wdGlvbnMuZWxlbWVudDtcbiAgICB0aGlzLnRyaWdnZXJFbGVtZW50ID0gZWxlbWVudDtcbiAgICBpZiAodGhpcy5pc1Nob3duaW5nKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcbiAgICAgICAgdGhpcy51aS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRoaXMudWkuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB0aGlzLnVpLnN0eWxlLnRvcCA9IG51bGw7XG4gICAgICAgIHRoaXMudWkuc3R5bGUubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMudWkuc3R5bGUuYm90dG9tID0gbnVsbDtcbiAgICAgICAgdGhpcy51aS5zdHlsZS5yaWdodCA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zY3JvbGxUb0RhdGUoZWwpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy51aS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy51aS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aGlzLnVpLnN0eWxlLnpJbmRleCA9IHRoaXMub3B0aW9ucy56SW5kZXg7XG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5maW5kUG9zaXRpb24oZWxlbWVudCk7XG4gICAgdGhpcy51aS5zdHlsZS50b3AgPSBwb3NpdGlvbi50b3AgKyBcInB4XCI7XG4gICAgdGhpcy51aS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdCArIFwicHhcIjtcbiAgICB0aGlzLnVpLnN0eWxlLnJpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLnVpLnN0eWxlLmJvdHRvbSA9IG51bGw7XG4gICAgdGhpcy5lbWl0KCdzaG93JywgZWwpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc1Nob3duaW5nKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID0gMDtcbiAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51aS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuZW1pdCgnaGlkZScpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5nZXREYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0YXJ0RGF0ZSgpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5nZXRTdGFydERhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGFydERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmdldEVuZERhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmREYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW5kRGF0ZS5jbG9uZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlLCBmb3JjZSkge1xuICAgIGlmIChmb3JjZSA9PT0gdm9pZCAwKSB7IGZvcmNlID0gZmFsc2U7IH1cbiAgICB2YXIgZCA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICB2YXIgaXNMb2NrZWQgPSB1dGlsc18xLmRhdGVJc0xvY2tlZChkLCB0aGlzLm9wdGlvbnMsIFtkXSk7XG4gICAgaWYgKGlzTG9ja2VkICYmICFmb3JjZSkge1xuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmRhdGUnLCBkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGRhdGUpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCdzZWxlY3RlZCcsIHRoaXMuZ2V0RGF0ZSgpKTtcbiAgICB9XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldFN0YXJ0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgaWYgKCFkYXRlKVxuICAgICAgICByZXR1cm47XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldEVuZERhdGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIGlmICghZGF0ZSlcbiAgICAgICAgcmV0dXJuO1xuICAgIHRoaXMub3B0aW9ucy5lbmREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnREYXRlLmdldFRpbWUoKSA+IHRoaXMub3B0aW9ucy5lbmREYXRlLmdldFRpbWUoKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJbnB1dCgpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zZXREYXRlUmFuZ2UgPSBmdW5jdGlvbiAoZGF0ZTEsIGRhdGUyLCBmb3JjZSkge1xuICAgIGlmIChmb3JjZSA9PT0gdm9pZCAwKSB7IGZvcmNlID0gZmFsc2U7IH1cbiAgICAvLyBzdG9wIHJlcGlja2luZyBieSByZXNldHRpbmcgdGhlIHRyaWdnZXIgZWxlbWVudFxuICAgIHRoaXMudHJpZ2dlckVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdmFyIGQxID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZTEsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcbiAgICB2YXIgZDIgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlMiwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgIHZhciBpc0xvY2tlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWxsb3dMb2NrRGF5c0luUmFuZ2UpIHtcbiAgICAgICAgaXNMb2NrZWQgPSB1dGlsc18xLnJhbmdlSXNMb2NrZWQoW2QxLCBkMl0sIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpc0xvY2tlZCA9IHV0aWxzXzEuZGF0ZUlzTG9ja2VkKGQxLCB0aGlzLm9wdGlvbnMsIFtkMSwgZDJdKVxuICAgICAgICAgICAgfHwgdXRpbHNfMS5kYXRlSXNMb2NrZWQoZDIsIHRoaXMub3B0aW9ucywgW2QxLCBkMl0pO1xuICAgIH1cbiAgICBpZiAoaXNMb2NrZWQgJiYgIWZvcmNlKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6cmFuZ2UnLCBbZDEsIGQyXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShkMSk7XG4gICAgICAgIHRoaXMuc2V0RW5kRGF0ZShkMik7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XG4gICAgICAgIHRoaXMuZW1pdCgnc2VsZWN0ZWQnLCB0aGlzLmdldFN0YXJ0RGF0ZSgpLCB0aGlzLmdldEVuZERhdGUoKSk7XG4gICAgfVxufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5nb3RvRGF0ZSA9IGZ1bmN0aW9uIChkYXRlLCBpZHgpIHtcbiAgICBpZiAoaWR4ID09PSB2b2lkIDApIHsgaWR4ID0gMDsgfVxuICAgIHZhciB0b0RhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlKTtcbiAgICB0b0RhdGUuc2V0RGF0ZSgxKTtcbiAgICB0aGlzLmNhbGVuZGFyc1tpZHhdID0gdG9EYXRlLmNsb25lKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0TG9ja0RheXMgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICB0aGlzLm9wdGlvbnMubG9ja0RheXMgPSBkYXRldGltZV8xLkRhdGVUaW1lLmNvbnZlcnRBcnJheShhcnJheSwgdGhpcy5vcHRpb25zLmxvY2tEYXlzRm9ybWF0KTtcbiAgICB0aGlzLnJlbmRlcigpO1xufTtcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zZXRIaWdobGlnaHRlZERheXMgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzID0gZGF0ZXRpbWVfMS5EYXRlVGltZS5jb252ZXJ0QXJyYXkoYXJyYXksIHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXNGb3JtYXQpO1xuICAgIHRoaXMucmVuZGVyKCk7XG59O1xubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGRlbGV0ZSBvcHRpb25zLmVsZW1lbnQ7XG4gICAgZGVsZXRlIG9wdGlvbnMuZWxlbWVudEVuZDtcbiAgICBkZWxldGUgb3B0aW9ucy5wYXJlbnRFbDtcbiAgICBpZiAob3B0aW9ucy5zdGFydERhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5zdGFydERhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShvcHRpb25zLnN0YXJ0RGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5lbmREYXRlKSB7XG4gICAgICAgIG9wdGlvbnMuZW5kRGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG9wdGlvbnMuZW5kRGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xuICAgIH1cbiAgICB2YXIgZHJvcGRvd25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy5kcm9wZG93bnMpLCBvcHRpb25zLmRyb3Bkb3ducyk7XG4gICAgdmFyIGJ1dHRvblRleHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zLmJ1dHRvblRleHQpLCBvcHRpb25zLmJ1dHRvblRleHQpO1xuICAgIHZhciB0b29sdGlwVGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMudG9vbHRpcFRleHQpLCBvcHRpb25zLnRvb2x0aXBUZXh0KTtcbiAgICB0aGlzLm9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5vcHRpb25zLmRyb3Bkb3ducyA9IF9fYXNzaWduKHt9LCBkcm9wZG93bnMpO1xuICAgIHRoaXMub3B0aW9ucy5idXR0b25UZXh0ID0gX19hc3NpZ24oe30sIGJ1dHRvblRleHQpO1xuICAgIHRoaXMub3B0aW9ucy50b29sdGlwVGV4dCA9IF9fYXNzaWduKHt9LCB0b29sdGlwVGV4dCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmICEodGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5zdGFydERhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IG51bGw7XG4gICAgfVxuICAgIGlmICghdGhpcy5vcHRpb25zLnNpbmdsZU1vZGVcbiAgICAgICAgJiYgKCEodGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUpXG4gICAgICAgICAgICB8fCAhKHRoaXMub3B0aW9ucy5lbmREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSkpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5zdGFydERhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IG51bGw7XG4gICAgfVxuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IHRoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRoczsgaWR4ICs9IDEpIHtcbiAgICAgICAgdmFyIGRhdGUgPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKVxuICAgICAgICAgICAgOiBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSgpO1xuICAgICAgICBkYXRlLnNldERhdGUoMSk7XG4gICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgaWR4KTtcbiAgICAgICAgdGhpcy5jYWxlbmRhcnNbaWR4XSA9IGRhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMubG9ja0RheXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5sb2NrRGF5cyA9IGRhdGV0aW1lXzEuRGF0ZVRpbWUuY29udmVydEFycmF5KHRoaXMub3B0aW9ucy5sb2NrRGF5cywgdGhpcy5vcHRpb25zLmxvY2tEYXlzRm9ybWF0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMgPSBkYXRldGltZV8xLkRhdGVUaW1lLmNvbnZlcnRBcnJheSh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzLCB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzRm9ybWF0KTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuY2xlYXJTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG51bGw7XG4gICAgdGhpcy5vcHRpb25zLmVuZERhdGUgPSBudWxsO1xuICAgIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPSAwO1xuICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcbiAgICBpZiAodGhpcy5pc1Nob3duaW5nKCkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgdGhpcy5lbWl0KCdjbGVhcjpzZWxlY3Rpb24nKTtcbn07XG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy51aSAmJiB0aGlzLnVpLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy51aS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMudWkpO1xuICAgICAgICB0aGlzLnVpID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5lbWl0KCdkZXN0cm95Jyk7XG59O1xuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZHRzLWNzcy1tb2R1bGVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS0zIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnRBdFRvcChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgICAgICAgICB2YXIgbGFzdEluc2VydGVkRWxlbWVudCA9IHdpbmRvdy5fbGFzdEVsZW1lbnRJbnNlcnRlZEJ5U3R5bGVMb2FkZXI7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5kaXNhYmxlTGl0ZXBpY2tlclN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFsYXN0SW5zZXJ0ZWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxlbWVudCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXN0SW5zZXJ0ZWRFbGVtZW50Lm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxlbWVudCwgbGFzdEluc2VydGVkRWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICAgICAgICAgICAgd2luZG93Ll9sYXN0RWxlbWVudEluc2VydGVkQnlTdHlsZUxvYWRlciA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZmluZE5lc3RlZE1vbnRoSXRlbShtb250aEl0ZW0pIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBtb250aEl0ZW0ucGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpID0gaSArIDEpIHtcbiAgICAgICAgdmFyIGN1ck5vZGUgPSBjaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgICBpZiAoY3VyTm9kZSA9PT0gbW9udGhJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbmV4cG9ydHMuZmluZE5lc3RlZE1vbnRoSXRlbSA9IGZpbmROZXN0ZWRNb250aEl0ZW07XG5mdW5jdGlvbiBkYXRlSXNMb2NrZWQoZGF0ZSwgb3B0aW9ucywgcGlja2VkRGF0ZXMpIHtcbiAgICB2YXIgaXNMb2NrZWQgPSBmYWxzZTtcbiAgICBpZiAob3B0aW9ucy5sb2NrRGF5cy5sZW5ndGgpIHtcbiAgICAgICAgaXNMb2NrZWQgPSBvcHRpb25zLmxvY2tEYXlzXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAoZCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuaXNCZXR3ZWVuKGRbMF0sIGRbMV0sIG9wdGlvbnMubG9ja0RheXNJbmNsdXNpdml0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZC5pc1NhbWUoZGF0ZSwgJ2RheScpO1xuICAgICAgICB9KS5sZW5ndGg7XG4gICAgfVxuICAgIGlmICghaXNMb2NrZWQgJiYgdHlwZW9mIG9wdGlvbnMubG9ja0RheXNGaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaXNMb2NrZWQgPSBvcHRpb25zLmxvY2tEYXlzRmlsdGVyLmNhbGwodGhpcywgZGF0ZS5jbG9uZSgpLCBudWxsLCBwaWNrZWREYXRlcyk7XG4gICAgfVxuICAgIHJldHVybiBpc0xvY2tlZDtcbn1cbmV4cG9ydHMuZGF0ZUlzTG9ja2VkID0gZGF0ZUlzTG9ja2VkO1xuZnVuY3Rpb24gcmFuZ2VJc0xvY2tlZChkYXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIGlzTG9ja2VkID0gZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMubG9ja0RheXMubGVuZ3RoKSB7XG4gICAgICAgIGlzTG9ja2VkID0gb3B0aW9ucy5sb2NrRGF5c1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHZhciBpc0VxdWFsVG9SYW5nZSA9IGRheXNbMF0udG9EYXRlU3RyaW5nKCkgPT09IGRbMF0udG9EYXRlU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgJiYgZGF5c1sxXS50b0RhdGVTdHJpbmcoKSA9PT0gZFsxXS50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZFswXS5pc0JldHdlZW4oZGF5c1swXSwgZGF5c1sxXSwgb3B0aW9ucy5sb2NrRGF5c0luY2x1c2l2aXR5KVxuICAgICAgICAgICAgICAgICAgICB8fCBkWzFdLmlzQmV0d2VlbihkYXlzWzBdLCBkYXlzWzFdLCBvcHRpb25zLmxvY2tEYXlzSW5jbHVzaXZpdHkpXG4gICAgICAgICAgICAgICAgICAgIHx8IGlzRXF1YWxUb1JhbmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGQuaXNCZXR3ZWVuKGRheXNbMF0sIGRheXNbMV0sIG9wdGlvbnMubG9ja0RheXNJbmNsdXNpdml0eSk7XG4gICAgICAgIH0pLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKCFpc0xvY2tlZCAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NrRGF5c0ZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpc0xvY2tlZCA9IG9wdGlvbnMubG9ja0RheXNGaWx0ZXIuY2FsbCh0aGlzLCBkYXlzWzBdLmNsb25lKCksIGRheXNbMV0uY2xvbmUoKSwgZGF5cyk7XG4gICAgfVxuICAgIHJldHVybiBpc0xvY2tlZDtcbn1cbmV4cG9ydHMucmFuZ2VJc0xvY2tlZCA9IHJhbmdlSXNMb2NrZWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9