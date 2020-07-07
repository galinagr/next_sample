webpackHotUpdate("static/development/pages/news.js",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_error */ \"./pages/_error.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/gadar/Workplace/sample_next/pages/news.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar News = function News(_ref) {\n  _s();\n\n  var news = _ref.news;\n\n  // const [searchQuery, setSearchQuery] = useState('react')\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    text: 'react',\n    coolMsg: ''\n  }),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var text = value.text,\n      coolMsg = value.coolMsg;\n\n  var handleChange = function handleChange(name) {\n    return function (e) {\n      // setSearchQuery(e.target.value)\n      setValue(_objectSpread(_objectSpread({}, value), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, name, e.target.value)));\n    };\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(\"/news/?searchTerm=\".concat(text));\n  };\n\n  var searchForm = function searchForm() {\n    return __jsx(\"form\", {\n      onSubmit: handleSubmit,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      value: text,\n      onChange: handleChange('text'),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 13\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      placeholder: \"Something....\",\n      onChange: handleChange('coolMsg'),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }\n    }), __jsx(\"button\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    }, \"Search button\"));\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    mainTitle: \"News\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, \"List of News\"), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }), coolMsg, __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }), searchForm(), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }), news.map(function (n, i) {\n    return __jsx(\"p\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      href: n.url,\n      target: \"_blank\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 25\n      }\n    }, n.title));\n  })));\n};\n\n_s(News, \"qc4DLzAmT6zKq4zuOH17Deu+MpM=\");\n\n_c = News;\n\nNews.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, news, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            _context.prev = 1;\n            _context.next = 4;\n            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()(\"https://hn.algolia.com/api/v1/search?query=\".concat(query.searchTerm || \"react\"));\n\n          case 4:\n            res = _context.sent;\n            _context.next = 7;\n            return res.json();\n\n          case 7:\n            news = _context.sent;\n            _context.next = 14;\n            break;\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](1);\n            console.log(\"Error\", _context.t0);\n            news = [];\n\n          case 14:\n            return _context.abrupt(\"return\", {\n              news: news.hits\n            });\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 10]]);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\nvar _c;\n\n$RefreshReg$(_c, \"News\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXdzLmpzPzJhYmYiXSwibmFtZXMiOlsiTmV3cyIsIm5ld3MiLCJ1c2VTdGF0ZSIsInRleHQiLCJjb29sTXNnIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJSb3V0ZXIiLCJwdXNoIiwic2VhcmNoRm9ybSIsIm1hcCIsIm4iLCJpIiwidXJsIiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImZldGNoIiwic2VhcmNoVGVybSIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaGl0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFDckI7QUFEcUIsa0JBR0tDLHNEQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRSxPQUR5QjtBQUUvQkMsV0FBTyxFQUFFO0FBRnNCLEdBQUQsQ0FIYjtBQUFBLE1BR2RDLEtBSGM7QUFBQSxNQUdQQyxRQUhPOztBQUFBLE1BUWRILElBUmMsR0FRR0UsS0FSSCxDQVFkRixJQVJjO0FBQUEsTUFRUkMsT0FSUSxHQVFHQyxLQVJILENBUVJELE9BUlE7O0FBVXJCLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLElBQUk7QUFBQSxXQUFJLFVBQUFDLENBQUMsRUFBSTtBQUM5QjtBQUNBSCxjQUFRLGlDQUFLRCxLQUFMLHFHQUFhRyxJQUFiLEVBQXFCQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0wsS0FBOUIsR0FBUjtBQUNILEtBSHdCO0FBQUEsR0FBekI7O0FBS0EsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUYsQ0FBQyxFQUFJO0FBQ3RCQSxLQUFDLENBQUNHLGNBQUY7QUFDQUMsc0RBQU0sQ0FBQ0MsSUFBUCw2QkFBaUNYLElBQWpDO0FBQ0gsR0FIRDs7QUFLQSxNQUFNWSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQ2Y7QUFBTSxjQUFRLEVBQUVKLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFdBQUssRUFBRVIsSUFBMUI7QUFBZ0MsY0FBUSxFQUFFSSxZQUFZLENBQUMsTUFBRCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFXLEVBQUMsZUFBL0I7QUFBK0MsY0FBUSxFQUFFQSxZQUFZLENBQUMsU0FBRCxDQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLENBRGU7QUFBQSxHQUFuQjs7QUFRQSxTQUNJLE1BQUMsMERBQUQ7QUFBUSxhQUFTLEVBQUMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0tILE9BSEwsRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLS1csVUFBVSxFQUxmLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBT0tkLElBQUksQ0FBQ2UsR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQ047QUFBRyxTQUFHLEVBQUVBLENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsVUFBSSxFQUFFRCxDQUFDLENBQUNFLEdBQVg7QUFBZ0IsWUFBTSxFQUFDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUNGLENBQUMsQ0FBQ0csS0FBbkMsQ0FESixDQURNO0FBQUEsR0FBVCxDQVBMLENBREosQ0FESjtBQWdCSCxDQTVDRDs7R0FBTXBCLEk7O0tBQUFBLEk7O0FBOENOQSxJQUFJLENBQUNxQixlQUFMO0FBQUEsK0xBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRQyxpQkFBUixTQUFRQSxLQUFSO0FBQUE7QUFBQTtBQUFBLG1CQUlHQyx1REFBSyxzREFBK0NELEtBQUssQ0FBQ0UsVUFBTixJQUFvQixPQUFuRSxFQUpSOztBQUFBO0FBSVRDLGVBSlM7QUFBQTtBQUFBLG1CQUtGQSxHQUFHLENBQUNDLElBQUosRUFMRTs7QUFBQTtBQUtmekIsZ0JBTGU7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFmMEIsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQTNCLGdCQUFJLEdBQUcsRUFBUDs7QUFUZTtBQUFBLDZDQVdaO0FBQUNBLGtCQUFJLEVBQUVBLElBQUksQ0FBQzRCO0FBQVosYUFYWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjZTdCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbmV3cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvcidcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jb25zdCBOZXdzID0gKHtuZXdzfSkgPT4ge1xuICAgIC8vIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJ3JlYWN0JylcblxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xuICAgICAgICB0ZXh0OiAncmVhY3QnLFxuICAgICAgICBjb29sTXNnOiAnJ1xuICAgIH0pXG5cbiAgICBjb25zdCB7dGV4dCwgY29vbE1zZ30gPSB2YWx1ZVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcbiAgICAgICAgLy8gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIHNldFZhbHVlKHsuLi52YWx1ZSwgW25hbWVdIDogZS50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgUm91dGVyLnB1c2goYC9uZXdzLz9zZWFyY2hUZXJtPSR7dGV4dH1gKVxuICAgIH1cblxuICAgIGNvbnN0IHNlYXJjaEZvcm0gPSAoKSA9PiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3RleHQnKX0vPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTb21ldGhpbmcuLi4uXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnY29vbE1zZycpfS8+XG4gICAgICAgICAgICA8YnV0dG9uPlNlYXJjaCBidXR0b248L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQgbWFpblRpdGxlPVwiTmV3c1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+TGlzdCBvZiBOZXdzPC9oMj5cbiAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgIHtjb29sTXNnfVxuICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAge3NlYXJjaEZvcm0oKX1cbiAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgIHtuZXdzLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bi51cmx9IHRhcmdldD1cIl9ibGFua1wiPntuLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9wPikpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuTmV3cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3F1ZXJ5fSkgPT4ge1xuICAgIGxldCBuZXdzXG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9obi5hbGdvbGlhLmNvbS9hcGkvdjEvc2VhcmNoP3F1ZXJ5PSR7cXVlcnkuc2VhcmNoVGVybSB8fCBcInJlYWN0XCJ9YClcbiAgICAgICAgbmV3cyA9IGF3YWl0IHJlcy5qc29uKClcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIsIGVycilcbiAgICAgICAgbmV3cyA9IFtdXG4gICAgfVxuICAgIHJldHVybiB7bmV3czogbmV3cy5oaXRzfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news.js\n");

/***/ })

})