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
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: ["Filter :", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      onChange: function onChange(e) {
        setinputState(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
            lineNumber: 31,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: dataState === null || dataState === void 0 ? void 0 : dataState.map(function (data) {
          if (data.toLowerCase().includes(inputState.toLocaleLowerCase())) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: data
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 19
            }, _this)
          }, data, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: (_styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
        children: ">> question1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcTIuanMiXSwibmFtZXMiOlsiUTEiLCJ1c2VTdGF0ZSIsImRhdGFTdGF0ZSIsInNldGRhdGFTdGF0ZSIsImlucHV0U3RhdGUiLCJzZXRpbnB1dFN0YXRlIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwidXNlRWZmZWN0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwibWFwIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxFQUFULEdBQWM7QUFBQTs7QUFBQTs7QUFBQSxrQkFDT0MsK0NBQVEsQ0FBQyxJQUFELENBRGY7QUFBQSxNQUNwQkMsU0FEb0I7QUFBQSxNQUNUQyxZQURTOztBQUFBLG1CQUVTRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVwQkcsVUFGb0I7QUFBQSxNQUVSQyxhQUZROztBQUkzQixNQUFNQyxTQUFTO0FBQUEsbVNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRUMsS0FBSyxDQUFDLHVDQUFELENBRFA7O0FBQUE7QUFDVkMsaUJBRFU7QUFBQSw0QkFFaEJMLFlBRmdCO0FBQUE7QUFBQSxxQkFFR0ssR0FBRyxDQUFDQyxJQUFKLEVBRkg7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVRILFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFJQUksa0RBQVMsQ0FBQyxZQUFNO0FBQ2RKLGFBQVM7QUFDVixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBQSx3Q0FFRTtBQUNFLGNBQVEsRUFBRSxrQkFBQ0ssQ0FBRCxFQUFPO0FBQ2ZOLHFCQUFhLENBQUNNLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDRDtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQU9FO0FBQU8sV0FBSyxFQUFFO0FBQUVDLGNBQU0sRUFBRTtBQUFWLE9BQWQ7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUEsaUNBQ0U7QUFBSSxpQkFBSyxFQUFFO0FBQUVDLDZCQUFlLEVBQUUsU0FBbkI7QUFBOEJDLG9CQUFNLEVBQUU7QUFBdEMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFBLGtCQUNHZCxTQURILGFBQ0dBLFNBREgsdUJBQ0dBLFNBQVMsQ0FBRWUsR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUN4QixjQUFJQSxJQUFJLENBQUNDLFdBQUwsR0FBbUJDLFFBQW5CLENBQTRCaEIsVUFBVSxDQUFDaUIsaUJBQVgsRUFBNUIsQ0FBSixFQUNFLG9CQUNFO0FBQUEsbUNBQ0U7QUFBQSx3QkFBS0g7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBU0EsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBS0gsU0FQQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQXdCRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFFSSx3RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7O0dBMUN1QnRCLEU7O0tBQUFBLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcTIuZjM3M2MyOWU1YzhlYTMxZmU1ZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvcHJldGVzdC5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRMSgpIHtcbiAgY29uc3QgW2RhdGFTdGF0ZSwgc2V0ZGF0YVN0YXRlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpbnB1dFN0YXRlLCBzZXRpbnB1dFN0YXRlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkucHVibGljYXBpcy5vcmcvY2F0ZWdvcmllcycpXG4gICAgc2V0ZGF0YVN0YXRlKGF3YWl0IHJlcy5qc29uKCkpXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBGaWx0ZXIgOlxuICAgICAgPGlucHV0XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIHNldGlucHV0U3RhdGUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPHRhYmxlIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2QxZDFkMScsIG1hcmdpbjogMiB9fT5jYXRlZ29yaWVzPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2RhdGFTdGF0ZT8ubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0U3RhdGUudG9Mb2NhbGVMb3dlckNhc2UoKSkpXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17ZGF0YX0+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2RhdGF9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PiZndDsmZ3Q7IHF1ZXN0aW9uMTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==