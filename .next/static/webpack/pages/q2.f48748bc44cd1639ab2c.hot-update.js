self["webpackHotUpdate_N_E"]("pages/q2",{

/***/ "./pages/q2.js":
/*!*********************!*\
  !*** ./pages/q2.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Q1; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JST_Desktop_works_nextjs_pretest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JST_Desktop_works_nextjs_pretest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_JST_Desktop_works_nextjs_pretest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_JST_Desktop_works_nextjs_pretest_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pretest.module.css */ "./styles/pretest.module.css");
/* harmony import */ var _styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\JST\\Desktop\\works\\nextjs-pretest\\pages\\q2.js",
    _s = $RefreshSig$();

// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'



function Q1() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      dataState = _useState[0],
      setdataState = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      inputState = _useState2[0],
      setinputState = _useState2[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref = (0,C_Users_JST_Desktop_works_nextjs_pretest_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_JST_Desktop_works_nextjs_pretest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var res;
      return C_Users_JST_Desktop_works_nextjs_pretest_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://api.publicapis.org/categories');

            case 2:
              res = _context.sent;
              _context.t0 = setdataState;
              _context.next = 6;
              return res.json();

            case 6:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    fetchData();
  }, []); // useEffect(() => {
  //   console.log({ dataState })
  // }, [dataState])

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: ["filter :", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      onChange: function onChange(e) {
        setinputState(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      style: {
        border: '1px solid black'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          style: {
            padding: 2
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            style: {
              backgroundColor: '#d1d1d1',
              margin: 2
            },
            children: "categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: dataState === null || dataState === void 0 ? void 0 : dataState.map(function (data) {
          if (data.includes(inputState)) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            style: {
              padding: 2
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: data
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 19
            }, _this)
          }, data, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: (_styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
        children: "question1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(Q1, "cSWohwyYpyswk1UnTkiIoHYVbK4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcTIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9wcmV0ZXN0Lm1vZHVsZS5jc3M/NzU3OSIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3ByZXRlc3QubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJRMSIsInVzZVN0YXRlIiwiZGF0YVN0YXRlIiwic2V0ZGF0YVN0YXRlIiwiaW5wdXRTdGF0ZSIsInNldGlucHV0U3RhdGUiLCJmZXRjaERhdGEiLCJmZXRjaCIsInJlcyIsImpzb24iLCJ1c2VFZmZlY3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJib3JkZXIiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwibWFwIiwiZGF0YSIsImluY2x1ZGVzIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEVBQVQsR0FBYztBQUFBOztBQUFBOztBQUFBLGtCQUNPQywrQ0FBUSxDQUFDLElBQUQsQ0FEZjtBQUFBLE1BQ3BCQyxTQURvQjtBQUFBLE1BQ1RDLFlBRFM7O0FBQUEsbUJBRVNGLCtDQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRXBCRyxVQUZvQjtBQUFBLE1BRVJDLGFBRlE7O0FBSTNCLE1BQU1DLFNBQVM7QUFBQSxtU0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNFQyxLQUFLLENBQUMsdUNBQUQsQ0FEUDs7QUFBQTtBQUNWQyxpQkFEVTtBQUFBLDRCQUdoQkwsWUFIZ0I7QUFBQTtBQUFBLHFCQUdHSyxHQUFHLENBQUNDLElBQUosRUFISDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEgsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQUtBSSxrREFBUyxDQUFDLFlBQU07QUFDZEosYUFBUztBQUNWLEdBRlEsRUFFTixFQUZNLENBQVQsQ0FUMkIsQ0FZM0I7QUFDQTtBQUNBOztBQUVBLHNCQUNFO0FBQUEsd0NBRUU7QUFDRSxjQUFRLEVBQUUsa0JBQUNLLENBQUQsRUFBTztBQUNmTixxQkFBYSxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQ0Q7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFPRTtBQUFPLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUU7QUFBVixPQUFkO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUFJLGVBQUssRUFBRTtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBWDtBQUFBLGlDQUNFO0FBQUksaUJBQUssRUFBRTtBQUFFQyw2QkFBZSxFQUFFLFNBQW5CO0FBQThCQyxvQkFBTSxFQUFFO0FBQXRDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBQSxrQkFDR2YsU0FESCxhQUNHQSxTQURILHVCQUNHQSxTQUFTLENBQUVnQixHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hCLGNBQUlBLElBQUksQ0FBQ0MsUUFBTCxDQUFjaEIsVUFBZCxDQUFKLEVBQ0Usb0JBQ0U7QUFBSSxpQkFBSyxFQUFFO0FBQUVXLHFCQUFPLEVBQUU7QUFBWCxhQUFYO0FBQUEsbUNBQ0U7QUFBQSx3QkFBS0k7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBZ0NBLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFLSCxTQVBBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBd0JFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUVFLHdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7R0E5Q3VCckIsRTs7S0FBQUEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B4QixVQUFVLG1CQUFPLENBQUMsb05BQXdHO0FBQzFILDBCQUEwQixtQkFBTyxDQUFDLHlhQUFnTjs7QUFFbFA7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2QseUJBQXlCLFVBQVU7QUFDbkMsa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLHlhQUFnTjtBQUN0TjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHlhQUFnTjs7QUFFMU87O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7QUMzREE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLGdFQUFnRSxvQkFBb0Isc0JBQXNCLHNCQUFzQixrQkFBa0IsMkJBQTJCLHdDQUF3Qyw4QkFBOEIsOEJBQThCLFFBQVEsMkJBQTJCLGVBQWUsbUJBQW1CLDJCQUEyQixNQUFNLDBCQUEwQixxQkFBcUIsZUFBZSxxQ0FBcUMsZ0NBQWdDLGtDQUFrQyxNQUFNLHlCQUF5QixpQkFBaUIscUJBQXFCLDhCQUE4QixNQUFNLDBCQUEwQix1QkFBdUIsZ0JBQWdCLGVBQWUsK0JBQStCLGdCQUFnQixHQUFHLCtCQUErQiwwQkFBMEIsa0JBQWtCLGdDQUFnQyxpQ0FBaUMsa0NBQWtDLEtBQUssR0FBRyxTQUFTLDBGQUEwRixVQUFVLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLGdDQUFnQyxvQkFBb0Isc0JBQXNCLGtCQUFrQixtQ0FBbUMsOEJBQThCLDhCQUE4QixRQUFRLFlBQVksZUFBZSxtQkFBbUIsMkJBQTJCLE1BQU0sV0FBVyxxQkFBcUIsZUFBZSxxQ0FBcUMsZ0NBQWdDLGtDQUFrQyxNQUFNLFVBQVUsaUJBQWlCLHFCQUFxQiw4QkFBOEIsTUFBTSxXQUFXLHVCQUF1QixnQkFBZ0IsZUFBZSwrQkFBK0IsZ0JBQWdCLEdBQUcsK0JBQStCLFdBQVcsa0JBQWtCLDZCQUE2QixLQUFLLEdBQUcscUJBQXFCO0FBQ3pwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9xMi5mNDg3NDhiYzQ0Y2QxNjM5YWIyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wcmV0ZXN0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFExKCkge1xuICBjb25zdCBbZGF0YVN0YXRlLCBzZXRkYXRhU3RhdGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lucHV0U3RhdGUsIHNldGlucHV0U3RhdGVdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5wdWJsaWNhcGlzLm9yZy9jYXRlZ29yaWVzJylcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zZWNyZXQtb2NlYW4tNDk3OTkuaGVyb2t1YXBwLmNvbS9odHRwOi8vY29kZXF1aXouYXp1cmV3ZWJzaXRlcy5uZXQvZGF0YScpXG4gICAgc2V0ZGF0YVN0YXRlKGF3YWl0IHJlcy5qc29uKCkpXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyh7IGRhdGFTdGF0ZSB9KVxuICAvLyB9LCBbZGF0YVN0YXRlXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBmaWx0ZXIgOlxuICAgICAgPGlucHV0XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIHNldGlucHV0U3RhdGUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPHRhYmxlIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHIgc3R5bGU9e3sgcGFkZGluZzogMiB9fT5cbiAgICAgICAgICAgIDx0aCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZDFkMWQxJywgbWFyZ2luOiAyIH19PmNhdGVnb3JpZXM8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGF0YVN0YXRlPy5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLmluY2x1ZGVzKGlucHV0U3RhdGUpKVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBwYWRkaW5nOiAyIH19IGtleT17ZGF0YX0+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2RhdGF9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PnF1ZXN0aW9uMTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL3ByZXRlc3QubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9wcmV0ZXN0Lm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL3ByZXRlc3QubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJldGVzdF9tYWluX19Hd2REMCB7XFxuICBtaW4td2lkdGg6NjAwcHg7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAgICovXFxufVxcblxcbi5wcmV0ZXN0X2ZpcnN0X19BWjlCOCB7XFxud2lkdGg6IDIwMHB4O1xcbm1pbi13aWR0aDogMjAwcHg7XFxuLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbn1cXG4ucHJldGVzdF9zZWNvbmRfXzFyRk5SIHtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICB3aWR0aDoxMDAlO1xcbiAgLyogd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7ICovXFxuICAvKiB3aWR0aDogLW1vei1hdmFpbGFibGU7ICovXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cXG59XFxuLnByZXRlc3RfdGhpcmRfXzFsYTRkIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xcbn1cXG5cXG4ucHJldGVzdF9saW5rX18xVHUtaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5wcmV0ZXN0X2dyaWRfXzNEdlBKIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvcHJldGVzdC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBYTtFQUFiLGFBQWE7RUFDYixzQkFBOEI7T0FBOUIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7QUFDQSxZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLDJCQUEyQjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBQzNCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gseUJBQXNCO0lBQXRCLDBCQUFzQjtTQUF0QixzQkFBc0I7RUFDeEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxuICBtaW4td2lkdGg6NjAwcHg7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgICAqL1xcbn1cXG5cXG4uZmlyc3Qge1xcbndpZHRoOiAyMDBweDtcXG5taW4td2lkdGg6IDIwMHB4O1xcbi8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXG59XFxuLnNlY29uZCB7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgd2lkdGg6MTAwJTtcXG4gIC8qIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyAqL1xcbiAgLyogd2lkdGg6IC1tb3otYXZhaWxhYmxlOyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXFxufVxcbi50aGlyZCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cXG59XFxuXFxuLmxpbmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtYWluXCI6IFwicHJldGVzdF9tYWluX19Hd2REMFwiLFxuXHRcImZpcnN0XCI6IFwicHJldGVzdF9maXJzdF9fQVo5QjhcIixcblx0XCJzZWNvbmRcIjogXCJwcmV0ZXN0X3NlY29uZF9fMXJGTlJcIixcblx0XCJ0aGlyZFwiOiBcInByZXRlc3RfdGhpcmRfXzFsYTRkXCIsXG5cdFwibGlua1wiOiBcInByZXRlc3RfbGlua19fMVR1LWlcIixcblx0XCJncmlkXCI6IFwicHJldGVzdF9ncmlkX18zRHZQSlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=