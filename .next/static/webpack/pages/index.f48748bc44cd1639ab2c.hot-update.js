self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Q1; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pretest.module.css */ "./styles/pretest.module.css");
/* harmony import */ var _styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\JST\\Desktop\\works\\nextjs-pretest\\pages\\index.js",
    _s = $RefreshSig$();

// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'



var methods = ['isPrime', 'isFibonacci'];
function Q1() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      inputState = _useState[0],
      setinputState = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      resultState = _useState2[0],
      setresultState = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(methods[0]),
      selectMethod = _useState3[0],
      setselectMethod = _useState3[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setresultState(checkNum(selectMethod, inputState));
  }, [selectMethod, inputState]);

  var validateNum = function validateNum(getNumber) {
    var number = Math.round(getNumber);

    if (number < 1) {
      return 1;
    }

    return number;
  };

  var checkNum = function checkNum(method, num) {
    console.log({
      method: method
    }, {
      num: num
    });

    if (method = methods[0]) {
      for (var i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
      }

      return num > 1;
    } else if (method = methods[1]) {
      if (num === 1) {
        return [0, 1];
      } else {
        var arr = fib(num - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
      }
    } else {
      return 'Error';
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_3___default().first),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          min: 1,
          value: inputState,
          onChange: function onChange(e) {
            setinputState(validateNum(e.target.value));
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_3___default().second),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
          name: "method",
          value: selectMethod || methods[0],
          onChange: function onChange(e) {
            setselectMethod(e.target.value);
          },
          children: methods.map(function (name) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: name,
              children: name
            }, name, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_3___default().third),
        children: [inputState, " ", selectMethod, "? : ", "".concat(resultState)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/q2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: (_styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),
        children: "question2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Q1, "OdbnRhnIQHR3HBwY2xFTOy4XUuk=");

_c = Q1;

var _c;

$RefreshReg$(_c, "Q1");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./styles/pretest.module.css":
/*!***********************************!*\
  !*** ./styles/pretest.module.css ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./pretest.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/pretest.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./pretest.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/pretest.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./pretest.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/pretest.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/pretest.module.css":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/pretest.module.css ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pretest_main__GwdD0 {\n  min-width:600px;\n  min-height: 500px;\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: justify;\n       justify-content: space-between;\n  /* background-color: blue; */\n  /* align-items: center;   */\n}\n\n.pretest_first__AZ9B8 {\nwidth: 200px;\nmin-width: 200px;\n/* background-color: red; */\n}\n.pretest_second__1rFNR {\n  min-width: 100px;\n  width:100%;\n  /* width: -webkit-fill-available; */\n  /* width: -moz-available; */\n  /* background-color: green; */\n}\n.pretest_third__1la4d {\n  width: 300px;\n  min-width: 300px;\n  /* background-color: blue; */\n}\n\n.pretest_link__1Tu-i {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  text-decoration: underline;\n  color: blue;\n}\n\n@media (max-width: 600px) {\n  .pretest_grid__3DvPJ {\n    width: 100%;\n    -moz-box-orient: vertical;\n    -moz-box-direction: normal;\n         flex-direction: column;\n  }\n}\n", "",{"version":3,"sources":["webpack://styles/pretest.module.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,iBAAiB;EACjB,iBAAa;EAAb,aAAa;EACb,sBAA8B;OAA9B,8BAA8B;EAC9B,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;AACA,YAAY;AACZ,gBAAgB;AAChB,2BAA2B;AAC3B;AACA;EACE,gBAAgB;EAChB,UAAU;EACV,mCAAmC;EACnC,2BAA2B;EAC3B,6BAA6B;AAC/B;AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,0BAA0B;EAC1B,WAAW;AACb;;AAEA;EACE;IACE,WAAW;IACX,yBAAsB;IAAtB,0BAAsB;SAAtB,sBAAsB;EACxB;AACF","sourcesContent":[".main {\n  min-width:600px;\n  min-height: 500px;\n  display: flex;\n  justify-content: space-between;\n  /* background-color: blue; */\n  /* align-items: center;   */\n}\n\n.first {\nwidth: 200px;\nmin-width: 200px;\n/* background-color: red; */\n}\n.second {\n  min-width: 100px;\n  width:100%;\n  /* width: -webkit-fill-available; */\n  /* width: -moz-available; */\n  /* background-color: green; */\n}\n.third {\n  width: 300px;\n  min-width: 300px;\n  /* background-color: blue; */\n}\n\n.link {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  text-decoration: underline;\n  color: blue;\n}\n\n@media (max-width: 600px) {\n  .grid {\n    width: 100%;\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "pretest_main__GwdD0",
	"first": "pretest_first__AZ9B8",
	"second": "pretest_second__1rFNR",
	"third": "pretest_third__1la4d",
	"link": "pretest_link__1Tu-i",
	"grid": "pretest_grid__3DvPJ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9wcmV0ZXN0Lm1vZHVsZS5jc3M/NzU3OSIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3ByZXRlc3QubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJtZXRob2RzIiwiUTEiLCJ1c2VTdGF0ZSIsImlucHV0U3RhdGUiLCJzZXRpbnB1dFN0YXRlIiwicmVzdWx0U3RhdGUiLCJzZXRyZXN1bHRTdGF0ZSIsInNlbGVjdE1ldGhvZCIsInNldHNlbGVjdE1ldGhvZCIsInVzZUVmZmVjdCIsImNoZWNrTnVtIiwidmFsaWRhdGVOdW0iLCJnZXROdW1iZXIiLCJudW1iZXIiLCJNYXRoIiwicm91bmQiLCJtZXRob2QiLCJudW0iLCJjb25zb2xlIiwibG9nIiwiaSIsInMiLCJzcXJ0IiwiYXJyIiwiZmliIiwicHVzaCIsImxlbmd0aCIsInN0eWxlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FBQyxTQUFELEVBQVksYUFBWixDQUFoQjtBQUNlLFNBQVNDLEVBQVQsR0FBYztBQUFBOztBQUFBOztBQUFBLGtCQUNTQywrQ0FBUSxDQUFDLENBQUQsQ0FEakI7QUFBQSxNQUNwQkMsVUFEb0I7QUFBQSxNQUNSQyxhQURROztBQUFBLG1CQUVXRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGbkI7QUFBQSxNQUVwQkcsV0FGb0I7QUFBQSxNQUVQQyxjQUZPOztBQUFBLG1CQUdhSiwrQ0FBUSxDQUFDRixPQUFPLENBQUMsQ0FBRCxDQUFSLENBSHJCO0FBQUEsTUFHcEJPLFlBSG9CO0FBQUEsTUFHTkMsZUFITTs7QUFLM0JDLGtEQUFTLENBQUMsWUFBTTtBQUNkSCxrQkFBYyxDQUFDSSxRQUFRLENBQUNILFlB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O0FBQ2hHO0FBQ0E7QUFDQSxnRUFBZ0Usb0JBQW9CLHNCQUFzQixzQkFBc0Isa0JBQWtCLDJCQUEyQix3Q0FBd0MsOEJBQThCLDhCQUE4QixRQUFRLDJCQUEyQixlQUFlLG1CQUFtQiwyQkFBMkIsTUFBTSwwQkFBMEIscUJBQXFCLGVBQWUscUNBQXFDLGdDQUFnQyxrQ0FBa0MsTUFBTSx5QkFBeUIsaUJBQWlCLHFCQUFxQiw4QkFBOEIsTUFBTSwwQkFBMEIsdUJBQXVCLGdCQUFnQixlQUFlLCtCQUErQixnQkFBZ0IsR0FBRywrQkFBK0IsMEJBQTBCLGtCQUFrQixnQ0FBZ0MsaUNBQWlDLGtDQUFrQyxLQUFLLEdBQUcsU0FBUywwRkFBMEYsVUFBVSxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxnQ0FBZ0Msb0JBQW9CLHNCQUFzQixrQkFBa0IsbUNBQW1DLDhCQUE4Qiw4QkFBOEIsUUFBUSxZQUFZLGVBQWUsbUJBQW1CLDJCQUEyQixNQUFNLFdBQVcscUJBQXFCLGVBQWUscUNBQXFDLGdDQUFnQyxrQ0FBa0MsTUFBTSxVQUFVLGlCQUFpQixxQkFBcUIsOEJBQThCLE1BQU0sV0FBVyx1QkFBdUIsZ0JBQWdCLGVBQWUsK0JBQStCLGdCQUFnQixHQUFHLCtCQUErQixXQUFXLGtCQUFrQiw2QkFBNkIsS0FBSyxHQUFHLHFCQUFxQjtBQUN6cEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjQ4NzQ4YmM0NGNkMTYzOWFiMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvcHJldGVzdC5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBtZXRob2RzID0gWydpc1ByaW1lJywgJ2lzRmlib25hY2NpJ11cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFExKCkge1xuICBjb25zdCBbaW5wdXRTdGF0ZSwgc2V0aW5wdXRTdGF0ZV0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbcmVzdWx0U3RhdGUsIHNldHJlc3VsdFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2VsZWN0TWV0aG9kLCBzZXRzZWxlY3RNZXRob2RdID0gdXNlU3RhdGUobWV0aG9kc1swXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldHJlc3VsdFN0YXRlKGNoZWNrTnVtKHNlbGVjdE1ldGhvZCwgaW5wdXRTdGF0ZSkpXG4gIH0sIFtzZWxlY3RNZXRob2QsIGlucHV0U3RhdGVdKVxuXG4gIGNvbnN0IHZhbGlkYXRlTnVtID0gKGdldE51bWJlcikgPT4ge1xuICAgIGNvbnN0IG51bWJlciA9IE1hdGgucm91bmQoZ2V0TnVtYmVyKVxuICAgIGlmIChudW1iZXIgPCAxKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cbiAgICByZXR1cm4gbnVtYmVyXG4gIH1cbiAgY29uc3QgY2hlY2tOdW0gPSAobWV0aG9kLCBudW0pID0+IHtcbiAgICBjb25zb2xlLmxvZyh7IG1ldGhvZCB9LCB7IG51bSB9KVxuICAgIGlmICgobWV0aG9kID0gbWV0aG9kc1swXSkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAyLCBzID0gTWF0aC5zcXJ0KG51bSk7IGkgPD0gczsgaSsrKSBpZiAobnVtICUgaSA9PT0gMCkgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gbnVtID4gMVxuICAgIH0gZWxzZSBpZiAoKG1ldGhvZCA9IG1ldGhvZHNbMV0pKSB7XG4gICAgICBpZiAobnVtID09PSAxKSB7XG4gICAgICAgIHJldHVybiBbMCwgMV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBhcnIgPSBmaWIobnVtIC0gMSlcbiAgICAgICAgYXJyLnB1c2goYXJyW2Fyci5sZW5ndGggLSAxXSArIGFyclthcnIubGVuZ3RoIC0gMl0pXG4gICAgICAgIHJldHVybiBhcnJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdFcnJvcidcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpcnN0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFN0YXRlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldGlucHV0U3RhdGUodmFsaWRhdGVOdW0oZS50YXJnZXQudmFsdWUpKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmR9PlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9J21ldGhvZCdcbiAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RNZXRob2QgfHwgbWV0aG9kc1swXX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRzZWxlY3RNZXRob2QoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHttZXRob2RzLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtuYW1lfSB2YWx1ZT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRoaXJkfT5cbiAgICAgICAgICB7aW5wdXRTdGF0ZX0ge3NlbGVjdE1ldGhvZH0/IDoge2Ake3Jlc3VsdFN0YXRlfWB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TGluayBocmVmPScvcTInPlxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5xdWVzdGlvbjI8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC8+XG4gIClcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9wcmV0ZXN0Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vcHJldGVzdC5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9wcmV0ZXN0Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByZXRlc3RfbWFpbl9fR3dkRDAge1xcbiAgbWluLXdpZHRoOjYwMHB4O1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgICAqL1xcbn1cXG5cXG4ucHJldGVzdF9maXJzdF9fQVo5Qjgge1xcbndpZHRoOiAyMDBweDtcXG5taW4td2lkdGg6IDIwMHB4O1xcbi8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXG59XFxuLnByZXRlc3Rfc2Vjb25kX18xckZOUiB7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgd2lkdGg6MTAwJTtcXG4gIC8qIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyAqL1xcbiAgLyogd2lkdGg6IC1tb3otYXZhaWxhYmxlOyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXFxufVxcbi5wcmV0ZXN0X3RoaXJkX18xbGE0ZCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cXG59XFxuXFxuLnByZXRlc3RfbGlua19fMVR1LWkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucHJldGVzdF9ncmlkX18zRHZQSiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3ByZXRlc3QubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWE7RUFBYixhQUFhO0VBQ2Isc0JBQThCO09BQTlCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQiwyQkFBMkI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLHlCQUFzQjtJQUF0QiwwQkFBc0I7U0FBdEIsc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4ge1xcbiAgbWluLXdpZHRoOjYwMHB4O1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgKi9cXG59XFxuXFxuLmZpcnN0IHtcXG53aWR0aDogMjAwcHg7XFxubWluLXdpZHRoOiAyMDBweDtcXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxufVxcbi5zZWNvbmQge1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIHdpZHRoOjEwMCU7XFxuICAvKiB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgKi9cXG4gIC8qIHdpZHRoOiAtbW96LWF2YWlsYWJsZTsgKi9cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xcbn1cXG4udGhpcmQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXFxufVxcblxcbi5saW5rIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmdyaWQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpblwiOiBcInByZXRlc3RfbWFpbl9fR3dkRDBcIixcblx0XCJmaXJzdFwiOiBcInByZXRlc3RfZmlyc3RfX0FaOUI4XCIsXG5cdFwic2Vjb25kXCI6IFwicHJldGVzdF9zZWNvbmRfXzFyRk5SXCIsXG5cdFwidGhpcmRcIjogXCJwcmV0ZXN0X3RoaXJkX18xbGE0ZFwiLFxuXHRcImxpbmtcIjogXCJwcmV0ZXN0X2xpbmtfXzFUdS1pXCIsXG5cdFwiZ3JpZFwiOiBcInByZXRlc3RfZ3JpZF9fM0R2UEpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9