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
          lineNumber: 44,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
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
              lineNumber: 62,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_3___default().third),
        children: [inputState, " ", selectMethod, "? : ", "".concat(resultState)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/q2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: (_styles_pretest_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),
        children: ">> question2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWV0aG9kcyIsIlExIiwidXNlU3RhdGUiLCJpbnB1dFN0YXRlIiwic2V0aW5wdXRTdGF0ZSIsInJlc3VsdFN0YXRlIiwic2V0cmVzdWx0U3RhdGUiLCJzZWxlY3RNZXRob2QiLCJzZXRzZWxlY3RNZXRob2QiLCJ1c2VFZmZlY3QiLCJjaGVja051bSIsInZhbGlkYXRlTnVtIiwiZ2V0TnVtYmVyIiwibnVtYmVyIiwiTWF0aCIsInJvdW5kIiwibWV0aG9kIiwibnVtIiwiY29uc29sZSIsImxvZyIsImkiLCJzIiwic3FydCIsImFyciIsImZpYiIsInB1c2giLCJsZW5ndGgiLCJzdHlsZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsU0FBRCxFQUFZLGFBQVosQ0FBaEI7QUFDZSxTQUFTQyxFQUFULEdBQWM7QUFBQTs7QUFBQTs7QUFBQSxrQkFDU0MsK0NBQVEsQ0FBQyxDQUFELENBRGpCO0FBQUEsTUFDcEJDLFVBRG9CO0FBQUEsTUFDUkMsYUFEUTs7QUFBQSxtQkFFV0YsK0NBQVEsQ0FBQyxLQUFELENBRm5CO0FBQUEsTUFFcEJHLFdBRm9CO0FBQUEsTUFFUEMsY0FGTzs7QUFBQSxtQkFHYUosK0NBQVEsQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUixDQUhyQjtBQUFBLE1BR3BCTyxZQUhvQjtBQUFBLE1BR05DLGVBSE07O0FBSzNCQyxrREFBUyxDQUFDLFlBQU07QUFDZEgsa0JBQWMsQ0FBQ0ksUUFBUSxDQUFDSCxZQUFELEVBQWVKLFVBQWYsQ0FBVCxDQUFkO0FBQ0QsR0FGUSxFQUVOLENBQUNJLFlBQUQsRUFBZUosVUFBZixDQUZNLENBQVQ7O0FBSUEsTUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUFlO0FBQ2pDLFFBQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFNBQVgsQ0FBZjs7QUFDQSxRQUFJQyxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNkLGFBQU8sQ0FBUDtBQUNEOztBQUNELFdBQU9BLE1BQVA7QUFDRCxHQU5EOztBQU9BLE1BQU1ILFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNNLE1BQUQsRUFBU0MsR0FBVCxFQUFpQjtBQUNoQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUgsWUFBTSxFQUFOQTtBQUFGLEtBQVosRUFBd0I7QUFBRUMsU0FBRyxFQUFIQTtBQUFGLEtBQXhCOztBQUNBLFFBQUtELE1BQU0sR0FBR2hCLE9BQU8sQ0FBQyxDQUFELENBQXJCLEVBQTJCO0FBQ3pCLFdBQUssSUFBSW9CLENBQUMsR0FBRyxDQUFSLEVBQVdDLENBQUMsR0FBR1AsSUFBSSxDQUFDUSxJQUFMLENBQVVMLEdBQVYsQ0FBcEIsRUFBb0NHLENBQUMsSUFBSUMsQ0FBekMsRUFBNENELENBQUMsRUFBN0M7QUFBaUQsWUFBSUgsR0FBRyxHQUFHRyxDQUFOLEtBQVksQ0FBaEIsRUFBbUIsT0FBTyxLQUFQO0FBQXBFOztBQUNBLGFBQU9ILEdBQUcsR0FBRyxDQUFiO0FBQ0QsS0FIRCxNQUdPLElBQUtELE1BQU0sR0FBR2hCLE9BQU8sQ0FBQyxDQUFELENBQXJCLEVBQTJCO0FBQ2hDLFVBQUlpQixHQUFHLEtBQUssQ0FBWixFQUFlO0FBQ2IsZUFBTyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJTSxHQUFHLEdBQUdDLEdBQUcsQ0FBQ1AsR0FBRyxHQUFHLENBQVAsQ0FBYjtBQUNBTSxXQUFHLENBQUNFLElBQUosQ0FBU0YsR0FBRyxDQUFDQSxHQUFHLENBQUNHLE1BQUosR0FBYSxDQUFkLENBQUgsR0FBc0JILEdBQUcsQ0FBQ0EsR0FBRyxDQUFDRyxNQUFKLEdBQWEsQ0FBZCxDQUFsQztBQUNBLGVBQU9ILEdBQVA7QUFDRDtBQUNGLEtBUk0sTUFRQTtBQUNMLGFBQU8sT0FBUDtBQUNEO0FBQ0YsR0FoQkQ7O0FBa0JBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVJLHdFQUFoQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEseUVBQWhCO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGFBQUcsRUFBRSxDQUZQO0FBR0UsZUFBSyxFQUFFeEIsVUFIVDtBQUlFLGtCQUFRLEVBQUUsa0JBQUN5QixDQUFELEVBQU87QUFDZnhCLHlCQUFhLENBQUNPLFdBQVcsQ0FBQ2lCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVosQ0FBYjtBQUNEO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFO0FBQUssaUJBQVMsRUFBRUgsMEVBQWhCO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGVBQUssRUFBRXBCLFlBQVksSUFBSVAsT0FBTyxDQUFDLENBQUQsQ0FGaEM7QUFHRSxrQkFBUSxFQUFFLGtCQUFDNEIsQ0FBRCxFQUFPO0FBQ2ZwQiwyQkFBZSxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUNELFdBTEg7QUFBQSxvQkFNRzlCLE9BQU8sQ0FBQytCLEdBQVIsQ0FBWSxVQUFDQyxJQUFELEVBQVU7QUFDckIsZ0NBQ0U7QUFBbUIsbUJBQUssRUFBRUEsSUFBMUI7QUFBQSx3QkFDR0E7QUFESCxlQUFhQSxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFLRCxXQU5BO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRixlQTJCRTtBQUFLLGlCQUFTLEVBQUVMLHlFQUFoQjtBQUFBLG1CQUNHeEIsVUFESCxPQUNnQkksWUFEaEIsb0JBQ3FDRixXQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFnQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsS0FBWDtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBRXNCLHdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDRjtBQUFBLGtCQURGO0FBc0NEOztHQXhFdUIxQixFOztLQUFBQSxFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY5M2ZhZTk4YmNjODk1MTdiODgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wcmV0ZXN0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IG1ldGhvZHMgPSBbJ2lzUHJpbWUnLCAnaXNGaWJvbmFjY2knXVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUTEoKSB7XG4gIGNvbnN0IFtpbnB1dFN0YXRlLCBzZXRpbnB1dFN0YXRlXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFtyZXN1bHRTdGF0ZSwgc2V0cmVzdWx0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzZWxlY3RNZXRob2QsIHNldHNlbGVjdE1ldGhvZF0gPSB1c2VTdGF0ZShtZXRob2RzWzBdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0cmVzdWx0U3RhdGUoY2hlY2tOdW0oc2VsZWN0TWV0aG9kLCBpbnB1dFN0YXRlKSlcbiAgfSwgW3NlbGVjdE1ldGhvZCwgaW5wdXRTdGF0ZV0pXG5cbiAgY29uc3QgdmFsaWRhdGVOdW0gPSAoZ2V0TnVtYmVyKSA9PiB7XG4gICAgY29uc3QgbnVtYmVyID0gTWF0aC5yb3VuZChnZXROdW1iZXIpXG4gICAgaWYgKG51bWJlciA8IDEpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICAgIHJldHVybiBudW1iZXJcbiAgfVxuICBjb25zdCBjaGVja051bSA9IChtZXRob2QsIG51bSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHsgbWV0aG9kIH0sIHsgbnVtIH0pXG4gICAgaWYgKChtZXRob2QgPSBtZXRob2RzWzBdKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDIsIHMgPSBNYXRoLnNxcnQobnVtKTsgaSA8PSBzOyBpKyspIGlmIChudW0gJSBpID09PSAwKSByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiBudW0gPiAxXG4gICAgfSBlbHNlIGlmICgobWV0aG9kID0gbWV0aG9kc1sxXSkpIHtcbiAgICAgIGlmIChudW0gPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIFswLCAxXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGFyciA9IGZpYihudW0gLSAxKVxuICAgICAgICBhcnIucHVzaChhcnJbYXJyLmxlbmd0aCAtIDFdICsgYXJyW2Fyci5sZW5ndGggLSAyXSlcbiAgICAgICAgcmV0dXJuIGFyclxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ0Vycm9yJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlyc3R9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgdmFsdWU9e2lucHV0U3RhdGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0aW5wdXRTdGF0ZSh2YWxpZGF0ZU51bShlLnRhcmdldC52YWx1ZSkpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZH0+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgbmFtZT0nbWV0aG9kJ1xuICAgICAgICAgICAgdmFsdWU9e3NlbGVjdE1ldGhvZCB8fCBtZXRob2RzWzBdfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldHNlbGVjdE1ldGhvZChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAge21ldGhvZHMubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e25hbWV9IHZhbHVlPXtuYW1lfT5cbiAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGhpcmR9PlxuICAgICAgICAgIHtpbnB1dFN0YXRlfSB7c2VsZWN0TWV0aG9kfT8gOiB7YCR7cmVzdWx0U3RhdGV9YH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMaW5rIGhyZWY9Jy9xMic+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PiZndDsmZ3Q7IHF1ZXN0aW9uMjwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==