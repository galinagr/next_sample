webpackHotUpdate("static/development/pages/news.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_error */ \"./pages/_error.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_error__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/gadar/Workplace/sample_next/pages/news.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar News = function News(_ref) {\n  _s();\n\n  var news = _ref.news;\n\n  // const [searchQuery, setSearchQuery] = useState('react')\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    text: 'react',\n    coolMsg: ''\n  }),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var text = value.text,\n      coolMsg = value.coolMsg;\n\n  var handleChange = function handleChange(name) {\n    return function (e) {\n      // setSearchQuery(e.target.value)\n      setValue(_objectSpread(_objectSpread({}, value), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, name, e.target.value)));\n    };\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(\"/news/?searchTerm=\".concat(text));\n  };\n\n  var searchForm = function searchForm() {\n    return __jsx(\"form\", {\n      onSubmit: handleSubmit,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      value: text,\n      onChange: handleChange('text'),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    }), __jsx(\"input\", {\n      type: \"text\",\n      placeholder: \"Something....\",\n      onChange: handleChange('coolMsg'),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }\n    }), __jsx(\"button\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }\n    }, \"Search button\"));\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    mainTitle: \"News\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, \"List of News\"), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }), coolMsg, __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }), searchForm(), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  }), news.map(function (n, i) {\n    return __jsx(\"p\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      href: n.url,\n      target: \"_blank\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 25\n      }\n    }, n.title));\n  })));\n};\n\n_s(News, \"qc4DLzAmT6zKq4zuOH17Deu+MpM=\");\n\n_c = News;\n\nNews.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(query) {\n    var news, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default()(\"https://hn.algolia.com/api/v1/search?query=\".concat(query.searchTerm));\n\n          case 3:\n            res = _context.sent;\n            _context.next = 6;\n            return res.json();\n\n          case 6:\n            news = _context.sent;\n            _context.next = 13;\n            break;\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(\"Error\", _context.t0);\n            news = [];\n\n          case 13:\n            return _context.abrupt(\"return\", {\n              news: news.hits\n            });\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 9]]);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\nvar _c;\n\n$RefreshReg$(_c, \"News\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXdzLmpzPzJhYmYiXSwibmFtZXMiOlsiTmV3cyIsIm5ld3MiLCJ1c2VTdGF0ZSIsInRleHQiLCJjb29sTXNnIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJSb3V0ZXIiLCJwdXNoIiwic2VhcmNoRm9ybSIsIm1hcCIsIm4iLCJpIiwidXJsIiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImZldGNoIiwic2VhcmNoVGVybSIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaGl0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFDckI7QUFEcUIsa0JBR0tDLHNEQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRSxPQUR5QjtBQUUvQkMsV0FBTyxFQUFFO0FBRnNCLEdBQUQsQ0FIYjtBQUFBLE1BR2RDLEtBSGM7QUFBQSxNQUdQQyxRQUhPOztBQUFBLE1BUWRILElBUmMsR0FRR0UsS0FSSCxDQVFkRixJQVJjO0FBQUEsTUFRUkMsT0FSUSxHQVFHQyxLQVJILENBUVJELE9BUlE7O0FBVXJCLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLElBQUk7QUFBQSxXQUFJLFVBQUFDLENBQUMsRUFBSTtBQUM5QjtBQUNBSCxjQUFRLGlDQUFLRCxLQUFMLHFHQUFhRyxJQUFiLEVBQXFCQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0wsS0FBOUIsR0FBUjtBQUNILEtBSHdCO0FBQUEsR0FBekI7O0FBS0EsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUYsQ0FBQyxFQUFJO0FBQ3RCQSxLQUFDLENBQUNHLGNBQUY7QUFDQUMsc0RBQU0sQ0FBQ0MsSUFBUCw2QkFBaUNYLElBQWpDO0FBQ0gsR0FIRDs7QUFLQSxNQUFNWSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQ2Y7QUFBTSxjQUFRLEVBQUVKLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFdBQUssRUFBRVIsSUFBMUI7QUFBZ0MsY0FBUSxFQUFFSSxZQUFZLENBQUMsTUFBRCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFXLEVBQUMsZUFBL0I7QUFBK0MsY0FBUSxFQUFFQSxZQUFZLENBQUMsU0FBRCxDQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLENBRGU7QUFBQSxHQUFuQjs7QUFRQSxTQUNJLE1BQUMsMERBQUQ7QUFBUSxhQUFTLEVBQUMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0tILE9BSEwsRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLS1csVUFBVSxFQUxmLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBT0tkLElBQUksQ0FBQ2UsR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQ047QUFBRyxTQUFHLEVBQUVBLENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsVUFBSSxFQUFFRCxDQUFDLENBQUNFLEdBQVg7QUFBZ0IsWUFBTSxFQUFDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUNGLENBQUMsQ0FBQ0csS0FBbkMsQ0FESixDQURNO0FBQUEsR0FBVCxDQVBMLENBREosQ0FESjtBQWdCSCxDQTVDRDs7R0FBTXBCLEk7O0tBQUFBLEk7O0FBOENOQSxJQUFJLENBQUNxQixlQUFMO0FBQUEsK0xBQXVCLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFJR0MsdURBQUssc0RBQStDRCxLQUFLLENBQUNFLFVBQXJELEVBSlI7O0FBQUE7QUFJVEMsZUFKUztBQUFBO0FBQUEsbUJBS0ZBLEdBQUcsQ0FBQ0MsSUFBSixFQUxFOztBQUFBO0FBS2Z6QixnQkFMZTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUWYwQixtQkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBM0IsZ0JBQUksR0FBRyxFQUFQOztBQVRlO0FBQUEsNkNBV1o7QUFBQ0Esa0JBQUksRUFBRUEsSUFBSSxDQUFDNEI7QUFBWixhQVhZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNlN0IsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9uZXdzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IEVycm9yIGZyb20gJy4vX2Vycm9yJ1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmNvbnN0IE5ld3MgPSAoe25ld3N9KSA9PiB7XG4gICAgLy8gY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgncmVhY3QnKVxuXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHRleHQ6ICdyZWFjdCcsXG4gICAgICAgIGNvb2xNc2c6ICcnXG4gICAgfSlcblxuICAgIGNvbnN0IHt0ZXh0LCBjb29sTXNnfSA9IHZhbHVlXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4ge1xuICAgICAgICAvLyBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgc2V0VmFsdWUoey4uLnZhbHVlLCBbbmFtZV0gOiBlLnRhcmdldC52YWx1ZX0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBSb3V0ZXIucHVzaChgL25ld3MvP3NlYXJjaFRlcm09JHt0ZXh0fWApXG4gICAgfVxuXG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9ICgpID0+IChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGV4dCcpfS8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNvbWV0aGluZy4uLi5cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdjb29sTXNnJyl9Lz5cbiAgICAgICAgICAgIDxidXR0b24+U2VhcmNoIGJ1dHRvbjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCBtYWluVGl0bGU9XCJOZXdzXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5MaXN0IG9mIE5ld3M8L2gyPlxuICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAge2Nvb2xNc2d9XG4gICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICB7c2VhcmNoRm9ybSgpfVxuICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAge25ld3MubWFwKChuLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtuLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+e24udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3A+KSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5OZXdzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChxdWVyeSkgPT4ge1xuICAgIGxldCBuZXdzXG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9obi5hbGdvbGlhLmNvbS9hcGkvdjEvc2VhcmNoP3F1ZXJ5PSR7cXVlcnkuc2VhcmNoVGVybX1gKVxuICAgICAgICBuZXdzID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIiwgZXJyKVxuICAgICAgICBuZXdzID0gW11cbiAgICB9XG4gICAgcmV0dXJuIHtuZXdzOiBuZXdzLmhpdHN9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news.js\n");

/***/ })

})