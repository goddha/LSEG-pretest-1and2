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
        children: ">> question2"
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWV0aG9kcyIsIlExIiwidXNlU3RhdGUiLCJpbnB1dFN0YXRlIiwic2V0aW5wdXRTdGF0ZSIsInJlc3VsdFN0YXRlIiwic2V0cmVzdWx0U3RhdGUiLCJzZWxlY3RNZXRob2QiLCJzZXRzZWxlY3RNZXRob2QiLCJ1c2VFZmZlY3QiLCJjaGVja051bSIsInZhbGlkYXRlTnVtIiwiZ2V0TnVtYmVyIiwibnVtYmVyIiwiTWF0aCIsInJvdW5kIiwibWV0aG9kIiwibnVtIiwiY29uc29sZSIsImxvZyIsImkiLCJzIiwic3FydCIsImFyciIsImZpYiIsInB1c2giLCJsZW5ndGgiLCJzdHlsZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsU0FBRCxFQUFZLGFBQVosQ0FBaEI7QUFDZSxTQUFTQyxFQUFULEdBQWM7QUFBQTs7QUFBQTs7QUFBQSxrQkFDU0MsK0NBQVEsQ0FBQyxDQUFELENBRGpCO0FBQUEsTUFDcEJDLFVBRG9CO0FBQUEsTUFDUkMsYUFEUTs7QUFBQSxtQkFFV0YsK0NBQVEsQ0FBQyxLQUFELENBRm5CO0FBQUEsTUFFcEJHLFdBRm9CO0FBQUEsTUFFUEMsY0FGTzs7QUFBQSxtQkFHYUosK0NBQVEsQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUixDQUhyQjtBQUFBLE1BR3BCTyxZQUhvQjtBQUFBLE1BR05DLGVBSE07O0FBSzNCQyxrREFBUyxDQUFDLFlBQU07QUFDZEgsa0JBQWMsQ0FBQ0ksUUFBUSxDQUFDSCxZQUFELEVBQWVKLFVBQWYsQ0FBVCxDQUFkO0FBQ0QsR0FGUSxFQUVOLENBQUNJLFlBQUQsRUFBZUosVUFBZixDQUZNLENBQVQ7O0FBSUEsTUFBTVEsV0FBVyxHQUFHLFNB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O0FBQUE7QUFBQTtBQUFBLFlBREYsZUFnQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsS0FBWDtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBRXNCLHdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDRjtBQUFBLGtCQURGO0FBc0NEOztHQXhFdUIxQixFOztLQUFBQSxFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhiOGNkNjhmMTBjOTg5NzY3YWIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3ByZXRlc3QubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgbWV0aG9kcyA9IFsnaXNQcmltZScsICdpc0ZpYm9uYWNjaSddXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRMSgpIHtcbiAgY29uc3QgW2lucHV0U3RhdGUsIHNldGlucHV0U3RhdGVdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgW3Jlc3VsdFN0YXRlLCBzZXRyZXN1bHRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NlbGVjdE1ldGhvZCwgc2V0c2VsZWN0TWV0aG9kXSA9IHVzZVN0YXRlKG1ldGhvZHNbMF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRyZXN1bHRTdGF0ZShjaGVja051bShzZWxlY3RNZXRob2QsIGlucHV0U3RhdGUpKVxuICB9LCBbc2VsZWN0TWV0aG9kLCBpbnB1dFN0YXRlXSlcblxuICBjb25zdCB2YWxpZGF0ZU51bSA9IChnZXROdW1iZXIpID0+IHtcbiAgICBjb25zdCBudW1iZXIgPSBNYXRoLnJvdW5kKGdldE51bWJlcilcbiAgICBpZiAobnVtYmVyIDwgMSkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgcmV0dXJuIG51bWJlclxuICB9XG4gIGNvbnN0IGNoZWNrTnVtID0gKG1ldGhvZCwgbnVtKSA9PiB7XG4gICAgY29uc29sZS5sb2coeyBtZXRob2QgfSwgeyBudW0gfSlcbiAgICBpZiAoKG1ldGhvZCA9IG1ldGhvZHNbMF0pKSB7XG4gICAgICBmb3IgKGxldCBpID0gMiwgcyA9IE1hdGguc3FydChudW0pOyBpIDw9IHM7IGkrKykgaWYgKG51bSAlIGkgPT09IDApIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIG51bSA+IDFcbiAgICB9IGVsc2UgaWYgKChtZXRob2QgPSBtZXRob2RzWzFdKSkge1xuICAgICAgaWYgKG51bSA9PT0gMSkge1xuICAgICAgICByZXR1cm4gWzAsIDFdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYXJyID0gZmliKG51bSAtIDEpXG4gICAgICAgIGFyci5wdXNoKGFyclthcnIubGVuZ3RoIC0gMV0gKyBhcnJbYXJyLmxlbmd0aCAtIDJdKVxuICAgICAgICByZXR1cm4gYXJyXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnRXJyb3InXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maXJzdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRTdGF0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRpbnB1dFN0YXRlKHZhbGlkYXRlTnVtKGUudGFyZ2V0LnZhbHVlKSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kfT5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBuYW1lPSdtZXRob2QnXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0TWV0aG9kIHx8IG1ldGhvZHNbMF19XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0c2VsZWN0TWV0aG9kKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICB7bWV0aG9kcy5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17bmFtZX0gdmFsdWU9e25hbWV9PlxuICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aGlyZH0+XG4gICAgICAgICAge2lucHV0U3RhdGV9IHtzZWxlY3RNZXRob2R9PyA6IHtgJHtyZXN1bHRTdGF0ZX1gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPExpbmsgaHJlZj0nL3EyJz5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+Jmd0OyZndDsgcXVlc3Rpb24yPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9