webpackHotUpdate("static/development/pages/news.js",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_error */ \"./pages/_error.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_error__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/gadar/Workplace/sample_next/pages/news.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar News = function News(_ref) {\n  _s();\n\n  var news = _ref.news;\n\n  // const [searchQuery, setSearchQuery] = useState('react')\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    text: 'react',\n    coolMsg: ''\n  }),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var text = value.text,\n      coolMsg = value.coolMsg;\n\n  var handleChange = function handleChange(name) {\n    return function (e) {\n      // setSearchQuery(e.target.value)\n      setValue(_objectSpread(_objectSpread({}, value), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, name, e.target.value)));\n    };\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(\"/news/?searchTerm=\".concat(text));\n  };\n\n  var searchForm = function searchForm() {\n    return __jsx(\"form\", {\n      onSubmit: handleSubmit,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      value: text,\n      onChange: handleChange('text'),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 13\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      placeholder: \"Something....\",\n      onChange: handleChange('coolMsg'),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }\n    }), __jsx(\"button\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    }, \"Search button\"));\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    mainTitle: \"News\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, \"List of News\"), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }), coolMsg, __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }), searchForm(), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }), news.map(function (n, i) {\n    return __jsx(\"p\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      href: n.url,\n      target: \"_blank\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 25\n      }\n    }, n.title));\n  })));\n};\n\n_s(News, \"qc4DLzAmT6zKq4zuOH17Deu+MpM=\");\n\n_c = News;\n\nNews.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(query) {\n    var news, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()(\"https://hn.algolia.com/api/v1/search?query=\".concat(query.searchTerm));\n\n          case 3:\n            res = _context.sent;\n            _context.next = 6;\n            return res.json();\n\n          case 6:\n            news = _context.sent;\n            _context.next = 13;\n            break;\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(\"Error\", _context.t0);\n            news = [];\n\n          case 13:\n            return _context.abrupt(\"return\", {\n              news: news.hits\n            });\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 9]]);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\nvar _c;\n\n$RefreshReg$(_c, \"News\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXdzLmpzPzJhYmYiXSwibmFtZXMiOlsiTmV3cyIsIm5ld3MiLCJ1c2VTdGF0ZSIsInRleHQiLCJjb29sTXNnIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJSb3V0ZXIiLCJwdXNoIiwic2VhcmNoRm9ybSIsIm1hcCIsIm4iLCJpIiwidXJsIiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImZldGNoIiwic2VhcmNoVGVybSIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaGl0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQ3JCO0FBRHFCLGtCQUdLQyxzREFBUSxDQUFDO0FBQy9CQyxRQUFJLEVBQUUsT0FEeUI7QUFFL0JDLFdBQU8sRUFBRTtBQUZzQixHQUFELENBSGI7QUFBQSxNQUdkQyxLQUhjO0FBQUEsTUFHUEMsUUFITzs7QUFBQSxNQVFkSCxJQVJjLEdBUUdFLEtBUkgsQ0FRZEYsSUFSYztBQUFBLE1BUVJDLE9BUlEsR0FRR0MsS0FSSCxDQVFSRCxPQVJROztBQVVyQixNQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxJQUFJO0FBQUEsV0FBSSxVQUFBQyxDQUFDLEVBQUk7QUFDOUI7QUFDQUgsY0FBUSxpQ0FBS0QsS0FBTCxxR0FBYUcsSUFBYixFQUFxQkMsQ0FBQyxDQUFDQyxNQUFGLENBQVNMLEtBQTlCLEdBQVI7QUFDSCxLQUh3QjtBQUFBLEdBQXpCOztBQUtBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFGLENBQUMsRUFBSTtBQUN0QkEsS0FBQyxDQUFDRyxjQUFGO0FBQ0FDLHNEQUFNLENBQUNDLElBQVAsNkJBQWlDWCxJQUFqQztBQUNILEdBSEQ7O0FBS0EsTUFBTVksVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUNmO0FBQU0sY0FBUSxFQUFFSixZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixXQUFLLEVBQUVSLElBQTFCO0FBQWdDLGNBQVEsRUFBRUksWUFBWSxDQUFDLE1BQUQsQ0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUk7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBVyxFQUFDLGVBQS9CO0FBQStDLGNBQVEsRUFBRUEsWUFBWSxDQUFDLFNBQUQsQ0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISixDQURlO0FBQUEsR0FBbkI7O0FBUUEsU0FDSSxNQUFDLDBEQUFEO0FBQVEsYUFBUyxFQUFDLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdLSCxPQUhMLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0tXLFVBQVUsRUFMZixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQU9LZCxJQUFJLENBQUNlLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUNOO0FBQUcsU0FBRyxFQUFFQSxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLFVBQUksRUFBRUQsQ0FBQyxDQUFDRSxHQUFYO0FBQWdCLFlBQU0sRUFBQyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlDRixDQUFDLENBQUNHLEtBQW5DLENBREosQ0FETTtBQUFBLEdBQVQsQ0FQTCxDQURKLENBREo7QUFnQkgsQ0E1Q0Q7O0dBQU1wQixJOztLQUFBQSxJOztBQThDTkEsSUFBSSxDQUFDcUIsZUFBTDtBQUFBLCtMQUF1QixpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSUdDLHVEQUFLLHNEQUErQ0QsS0FBSyxDQUFDRSxVQUFyRCxFQUpSOztBQUFBO0FBSVRDLGVBSlM7QUFBQTtBQUFBLG1CQUtGQSxHQUFHLENBQUNDLElBQUosRUFMRTs7QUFBQTtBQUtmekIsZ0JBTGU7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFmMEIsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQTNCLGdCQUFJLEdBQUcsRUFBUDs7QUFUZTtBQUFBLDZDQVdaO0FBQUNBLGtCQUFJLEVBQUVBLElBQUksQ0FBQzRCO0FBQVosYUFYWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjZTdCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbmV3cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvcidcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jb25zdCBOZXdzID0gKHtuZXdzfSkgPT4ge1xuICAgIC8vIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJ3JlYWN0JylcblxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xuICAgICAgICB0ZXh0OiAncmVhY3QnLFxuICAgICAgICBjb29sTXNnOiAnJ1xuICAgIH0pXG5cbiAgICBjb25zdCB7dGV4dCwgY29vbE1zZ30gPSB2YWx1ZVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcbiAgICAgICAgLy8gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgW25hbWVdIDogZS50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgUm91dGVyLnB1c2goYC9uZXdzLz9zZWFyY2hUZXJtPSR7dGV4dH1gKVxuICAgIH1cblxuICAgIGNvbnN0IHNlYXJjaEZvcm0gPSAoKSA9PiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3RleHQnKX0vPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTb21ldGhpbmcuLi4uXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnY29vbE1zZycpfS8+XG4gICAgICAgICAgICA8YnV0dG9uPlNlYXJjaCBidXR0b248L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQgbWFpblRpdGxlPVwiTmV3c1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+TGlzdCBvZiBOZXdzPC9oMj5cbiAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgIHtjb29sTXNnfVxuICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAge3NlYXJjaEZvcm0oKX1cbiAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgIHtuZXdzLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bi51cmx9IHRhcmdldD1cIl9ibGFua1wiPntuLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9wPikpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuTmV3cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocXVlcnkpID0+IHtcbiAgICBsZXQgbmV3c1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaG4uYWxnb2xpYS5jb20vYXBpL3YxL3NlYXJjaD9xdWVyeT0ke3F1ZXJ5LnNlYXJjaFRlcm19YClcbiAgICAgICAgbmV3cyA9IGF3YWl0IHJlcy5qc29uKClcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIsIGVycilcbiAgICAgICAgbmV3cyA9IFtdXG4gICAgfVxuICAgIHJldHVybiB7bmV3czogbmV3cy5oaXRzfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news.js\n");

/***/ })

})