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
        children: ">> question1"
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcTIuanMiXSwibmFtZXMiOlsiUTEiLCJ1c2VTdGF0ZSIsImRhdGFTdGF0ZSIsInNldGRhdGFTdGF0ZSIsImlucHV0U3RhdGUiLCJzZXRpbnB1dFN0YXRlIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwidXNlRWZmZWN0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwibWFwIiwiZGF0YSIsImluY2x1ZGVzIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEVBQVQsR0FBYztBQUFBOztBQUFBOztBQUFBLGtCQUNPQywrQ0FBUSxDQUFDLElBQUQsQ0FEZjtBQUFBLE1BQ3BCQyxTQURvQjtBQUFBLE1BQ1RDLFlBRFM7O0FBQUEsbUJBRVNGLCtDQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRXBCRyxVQUZvQjtBQUFBLE1BRVJDLGFBRlE7O0FBSTNCLE1BQU1DLFNBQVM7QUFBQSxtU0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNFQyxLQUFLLENBQUMsdUNBQUQsQ0FEUDs7QUFBQTtBQUNWQyxpQkFEVTtBQUFBLDRCQUdoQkwsWUFIZ0I7QUFBQTtBQUFBLHFCQUdHSyxHQUFHLENBQUNDLElBQUosRUFISDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEgsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQUtBSSxrREFBUyxDQUFDLFlBQU07QUFDZEosYUFBUztBQUNWLEdBRlEsRUFFTixFQUZNLENBQVQsQ0FUMkIsQ0FZM0I7QUFDQTtBQUNBOztBQUVBLHNCQUNFO0FBQUEsd0NBRUU7QUFDRSxjQUFRLEVBQUUsa0JBQUNLLENBQUQsRUFBTztBQUNmTixxQkFBYSxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQ0Q7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFPRTtBQUFPLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUU7QUFBVixPQUFkO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUFBLGlDQUNFO0FBQUksaUJBQUssRUFBRTtBQUFFQyw2QkFBZSxFQUFFLFNBQW5CO0FBQThCQyxvQkFBTSxFQUFFO0FBQXRDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBQSxrQkFDR2QsU0FESCxhQUNHQSxTQURILHVCQUNHQSxTQUFTLENBQUVlLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQVU7QUFDeEIsY0FBSUEsSUFBSSxDQUFDQyxRQUFMLENBQWNmLFVBQWQsQ0FBSixFQUNFLG9CQUNFO0FBQUEsbUNBQ0U7QUFBQSx3QkFBS2M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBU0EsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBS0gsU0FQQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQXdCRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFFRSx3RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7O0dBOUN1QnBCLEU7O0tBQUFBLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcTIuNjJkZTc2Mzc3YzVmNzE1MTZlNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvcHJldGVzdC5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRMSgpIHtcbiAgY29uc3QgW2RhdGFTdGF0ZSwgc2V0ZGF0YVN0YXRlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpbnB1dFN0YXRlLCBzZXRpbnB1dFN0YXRlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkucHVibGljYXBpcy5vcmcvY2F0ZWdvcmllcycpXG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vc2VjcmV0LW9jZWFuLTQ5Nzk5Lmhlcm9rdWFwcC5jb20vaHR0cDovL2NvZGVxdWl6LmF6dXJld2Vic2l0ZXMubmV0L2RhdGEnKVxuICAgIHNldGRhdGFTdGF0ZShhd2FpdCByZXMuanNvbigpKVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coeyBkYXRhU3RhdGUgfSlcbiAgLy8gfSwgW2RhdGFTdGF0ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgZmlsdGVyIDpcbiAgICAgIDxpbnB1dFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBzZXRpbnB1dFN0YXRlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDx0YWJsZSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNkMWQxZDEnLCBtYXJnaW46IDIgfX0+Y2F0ZWdvcmllczwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtkYXRhU3RhdGU/Lm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuaW5jbHVkZXMoaW5wdXRTdGF0ZSkpXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17ZGF0YX0+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2RhdGF9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PiZndDsmZ3Q7IHF1ZXN0aW9uMTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==