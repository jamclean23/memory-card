/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index/React/App.js":
/*!********************************!*\
  !*** ./src/index/React/App.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppHeader_AppHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AppHeader/AppHeader.js */ \"./src/index/React/components/AppHeader/AppHeader.js\");\n/* harmony import */ var _components_GameInfo_GameInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/GameInfo/GameInfo.js */ \"./src/index/React/components/GameInfo/GameInfo.js\");\n/* harmony import */ var _components_CardsContainer_CardsContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CardsContainer/CardsContainer.js */ \"./src/index/React/components/CardsContainer/CardsContainer.js\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.css */ \"./src/index/React/app.css\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_5__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n// Main app\n\n// ====== IMPORTS ======\n\n// React\n\n\n\n\n\n\n\n// ====== FUNCTIONS ======\n\n// Main app function \nfunction App(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState2 = _slicedToArray(_useState, 2),\n    targetTree = _useState2[0],\n    setTargetTree = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState4 = _slicedToArray(_useState3, 2),\n    slideNumber = _useState4[0],\n    setSlideNumber = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState6 = _slicedToArray(_useState5, 2),\n    totalSlides = _useState6[0],\n    setTotalSlides = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(uniqid__WEBPACK_IMPORTED_MODULE_5___default()()),\n    _useState8 = _slicedToArray(_useState7, 2),\n    gameKey = _useState8[0],\n    setGameKey = _useState8[1];\n\n  // Mounting actions\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, []);\n  function resetGame() {\n    setSlideNumber(0);\n    setGameKey(uniqid__WEBPACK_IMPORTED_MODULE_5___default()());\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AppHeader_AppHeader_js__WEBPACK_IMPORTED_MODULE_1__.AppHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_GameInfo_GameInfo_js__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n    totalSlides: totalSlides,\n    slideNumber: slideNumber,\n    targetTree: targetTree\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CardsContainer_CardsContainer_js__WEBPACK_IMPORTED_MODULE_3__.CardsContainer, {\n    setTotalSlides: setTotalSlides,\n    setSlideNumber: setSlideNumber,\n    slideNumber: slideNumber,\n    key: gameKey,\n    setTargetTree: setTargetTree,\n    resetGame: resetGame\n  }));\n}\n\n// ====== EXPORTS ======\n\n\n\n//# sourceURL=webpack://webpack/./src/index/React/App.js?");

/***/ }),

/***/ "./src/index/React/components/AppHeader/AppHeader.js":
/*!***********************************************************!*\
  !*** ./src/index/React/components/AppHeader/AppHeader.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppHeader\": () => (/* binding */ AppHeader)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-header.css */ \"./src/index/React/components/AppHeader/app-header.css\");\n/* harmony import */ var _HamburgerModal_HamburgerModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HamburgerModal/HamburgerModal */ \"./src/index/React/components/AppHeader/HamburgerModal/HamburgerModal.js\");\n/* harmony import */ var _assets_icons_hamburger_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/hamburger.png */ \"./src/index/assets/icons/hamburger.png\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n// Header for Tree ID game app\n// ####################################\n// IMPORTS\n// ####################################\n\n\n\n\n\n\n// ####################################\n// REACT COMPONENT\n// ####################################\n\nfunction AppHeader(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState2 = _slicedToArray(_useState, 2),\n    modal = _useState2[0],\n    setModal = _useState2[1];\n  var hamburgerModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HamburgerModal_HamburgerModal__WEBPACK_IMPORTED_MODULE_2__.HamburgerModal, {\n    handleMenuClick: handleMenuClick\n  });\n  function handleMenuClick(modal) {\n    var hamburgerBtn = document.querySelector('.hamburger');\n\n    // Show modal\n    if (!modal) {\n      setModal(hamburgerModal);\n      hamburgerBtn.style.backgroundColor = 'beige';\n    } else {\n      setModal('');\n      hamburgerBtn.style.backgroundColor = '';\n    }\n  }\n  handleMenuClick = handleMenuClick.bind(this, modal);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"AppHeader\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"hero\"\n  }, \"ID That Tree!!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    draggable: \"false\",\n    className: \"hamburger\",\n    src: _assets_icons_hamburger_png__WEBPACK_IMPORTED_MODULE_3__,\n    alt: \"menu\",\n    onClick: handleMenuClick\n  }), modal);\n}\n\n// #####################################\n// EXPORTS\n// #####################################\n\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/AppHeader.js?");

/***/ }),

/***/ "./src/index/React/components/AppHeader/HamburgerModal/Attributions/Attributions.js":
/*!******************************************************************************************!*\
  !*** ./src/index/React/components/AppHeader/HamburgerModal/Attributions/Attributions.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributions\": () => (/* binding */ Attributions)\n/* harmony export */ });\n/* harmony import */ var _attributions_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributions.css */ \"./src/index/React/components/AppHeader/HamburgerModal/Attributions/attributions.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_attributions_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/attributions.json */ \"./src/index/assets/attributions.json\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Attributions(props) {\n  var content = function () {\n    var result = [];\n    for (var category in _assets_attributions_json__WEBPACK_IMPORTED_MODULE_2__) {\n      var catJsx = [];\n      for (var type in _assets_attributions_json__WEBPACK_IMPORTED_MODULE_2__[category]) {\n        var dataJsx = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", {\n          className: \"type\",\n          key: uniqid__WEBPACK_IMPORTED_MODULE_3__()\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"a\", {\n          target: \"_blank\",\n          href: _assets_attributions_json__WEBPACK_IMPORTED_MODULE_2__[category][type]\n        }, type))];\n        catJsx.push(dataJsx);\n      }\n      result.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"section\", {\n        key: uniqid__WEBPACK_IMPORTED_MODULE_3__()\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h4\", null, category), catJsx));\n    }\n    return result;\n  }();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"Attributions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"article\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h3\", null, \"Attributions\"), content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    className: \"exitAttributions\",\n    onClick: props.handleSubMenuBack\n  }, \"Back\"));\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/HamburgerModal/Attributions/Attributions.js?");

/***/ }),

/***/ "./src/index/React/components/AppHeader/HamburgerModal/Donate/Donate.js":
/*!******************************************************************************!*\
  !*** ./src/index/React/components/AppHeader/HamburgerModal/Donate/Donate.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Donate\": () => (/* binding */ Donate)\n/* harmony export */ });\n/* harmony import */ var _donate_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donate.css */ \"./src/index/React/components/AppHeader/HamburgerModal/Donate/donate.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Donate(props) {\n  function handleDonateClick() {\n    window.open('https://www.buymeacoffee.com/rooseveltcat');\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: 'Donate'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"article\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h3\", null, \"Donate\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h4\", null, \"Like this app?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"We would love to keep producing quality outdoors content!\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), \"Follow the link to support this app as well as more to come.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    className: \"donateLink\",\n    onClick: handleDonateClick\n  }, \"Support us \\uD83D\\uDE0A\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    className: \"exitDonate\",\n    onClick: props.handleSubMenuBack\n  }, \"Back\"));\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/HamburgerModal/Donate/Donate.js?");

/***/ }),

/***/ "./src/index/React/components/AppHeader/HamburgerModal/HamburgerModal.js":
/*!*******************************************************************************!*\
  !*** ./src/index/React/components/AppHeader/HamburgerModal/HamburgerModal.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HamburgerModal\": () => (/* binding */ HamburgerModal)\n/* harmony export */ });\n/* harmony import */ var _hamburgermodal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburgermodal.css */ \"./src/index/React/components/AppHeader/HamburgerModal/hamburgermodal.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Menu_HamburgerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu/HamburgerMenu */ \"./src/index/React/components/AppHeader/HamburgerModal/Menu/HamburgerMenu.js\");\n/* harmony import */ var _Attributions_Attributions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Attributions/Attributions */ \"./src/index/React/components/AppHeader/HamburgerModal/Attributions/Attributions.js\");\n/* harmony import */ var _Donate_Donate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Donate/Donate */ \"./src/index/React/components/AppHeader/HamburgerModal/Donate/Donate.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction HamburgerModal(props) {\n  var menuButtons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    className: \"attributionsBtn\",\n    onClick: function onClick() {\n      handleButtonClicks('attributions');\n    }\n  }, \"Attributions\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    className: \"donateBtn\",\n    onClick: handleButtonClicks.bind(this, 'donate')\n  }, \"Donate\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    className: \"backBtn\",\n    onClick: props.handleMenuClick\n  }, \"Back\"));\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(menuButtons),\n    _useState2 = _slicedToArray(_useState, 2),\n    buttonContent = _useState2[0],\n    setButtonContent = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Menu_HamburgerMenu__WEBPACK_IMPORTED_MODULE_2__.HamburgerMenu, {\n      buttonContent: buttonContent\n    })),\n    _useState4 = _slicedToArray(_useState3, 2),\n    menuContent = _useState4[0],\n    setMenuContent = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n    _useState6 = _slicedToArray(_useState5, 2),\n    content = _useState6[0],\n    setContent = _useState6[1];\n  function handleButtonClicks(btnClicked) {\n    setMenuContent('');\n    switch (btnClicked) {\n      case 'attributions':\n        setContent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Attributions_Attributions__WEBPACK_IMPORTED_MODULE_3__.Attributions, {\n          handleSubMenuBack: handleSubMenuBack\n        }));\n        break;\n      case 'donate':\n        setContent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Donate_Donate__WEBPACK_IMPORTED_MODULE_4__.Donate, {\n          handleSubMenuBack: handleSubMenuBack\n        }));\n        break;\n    }\n  }\n  function handleSubMenuBack() {\n    setContent('');\n    setMenuContent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Menu_HamburgerMenu__WEBPACK_IMPORTED_MODULE_2__.HamburgerMenu, {\n      buttonContent: buttonContent\n    }));\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"HamburgerModal\"\n  }, menuContent, content);\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/HamburgerModal/HamburgerModal.js?");

/***/ }),

/***/ "./src/index/React/components/AppHeader/HamburgerModal/Menu/HamburgerMenu.js":
/*!***********************************************************************************!*\
  !*** ./src/index/React/components/AppHeader/HamburgerModal/Menu/HamburgerMenu.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HamburgerMenu\": () => (/* binding */ HamburgerMenu)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hamburgermenu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hamburgermenu.css */ \"./src/index/React/components/AppHeader/HamburgerModal/Menu/hamburgermenu.css\");\n\n\nfunction HamburgerMenu(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"HamburgerMenu\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"menuHeader\"\n  }, \"Menu\"), props.buttonContent);\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/HamburgerModal/Menu/HamburgerMenu.js?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/Card/Card.js":
/*!****************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/Card/Card.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.css */ \"./src/index/React/components/CardsContainer/Card/card.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable */ \"./node_modules/react-swipeable/es/index.js\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n// Individual card to contain tree pics and names\n\n// ###################################\n// Imports\n// ###################################\n\n\n\n\nfunction Card(props) {\n  // Props:\n  // props.treeImgs.conefruit\n  // props.treeImgs.overview\n  // props.treeImgs.needleleaf\n  // props.treeImgs.name\n\n  var handlers = (0,react_swipeable__WEBPACK_IMPORTED_MODULE_2__.useSwipeable)({\n    delta: 10,\n    onSwipedRight: props.handleRightSwipe,\n    onSwiping: props.handleSwiping,\n    onTouchEndOrOnMouseUp: props.handleUp\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", _extends({}, handlers, {\n    className: 'Card ' + props.treeImgs.catName\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"imgsWrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"imgFrame overviewFrame\",\n    onClick: props.handleCardClick.bind(this, props.treeImgs.overview, props.treeImgs.catName, 'overviewImg')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    onLoad: props.reportImageLoaded,\n    draggable: \"false\",\n    className: \"overviewImg treeImg\",\n    src: props.treeImgs.overview\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"imgFrame coneFruitFrame\",\n    onClick: props.handleCardClick.bind(this, props.treeImgs.conefruit, props.treeImgs.catName, 'coneFruitImg')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    onLoad: props.reportImageLoaded,\n    draggable: \"false\",\n    className: \"coneFruitImg treeImg\",\n    src: props.treeImgs.conefruit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    draggable: \"false\",\n    className: \"imgFrame needleLeafFrame\",\n    onClick: props.handleCardClick.bind(this, props.treeImgs.needleleaf, props.treeImgs.catName, 'needleLeafImg')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    onLoad: props.reportImageLoaded,\n    draggable: \"false\",\n    className: \"needleLeafImg treeImg\",\n    src: props.treeImgs.needleleaf\n  }))));\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/Card/Card.js?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/CardsContainer.js":
/*!*********************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/CardsContainer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsContainer\": () => (/* binding */ CardsContainer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SelectionResultSplash_SelectionResultSplash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectionResultSplash/SelectionResultSplash.js */ \"./src/index/React/components/CardsContainer/SelectionResultSplash/SelectionResultSplash.js\");\n/* harmony import */ var _EndCard_EndCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndCard/EndCard.js */ \"./src/index/React/components/CardsContainer/EndCard/EndCard.js\");\n/* harmony import */ var _treeImageHandling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../treeImageHandling.js */ \"./src/index/treeImageHandling.js\");\n/* harmony import */ var _generateCards_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateCards.js */ \"./src/index/React/components/CardsContainer/generateCards.js\");\n/* harmony import */ var _Modal_Modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal/Modal.js */ \"./src/index/React/components/CardsContainer/Modal/Modal.js\");\n/* harmony import */ var _cardscontainer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cardscontainer.css */ \"./src/index/React/components/CardsContainer/cardscontainer.css\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n// Container for card components\n\n\n\n\n\n\n\n\nfunction CardsContainer(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_treeImageHandling_js__WEBPACK_IMPORTED_MODULE_3__.getTrees)()),\n    _useState2 = _slicedToArray(_useState, 2),\n    treesImgs = _useState2[0],\n    setTreesImgs = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_generateCards_js__WEBPACK_IMPORTED_MODULE_4__.generateCardsArray)(treesImgs, handleCardClick, handleRightSwipe, handleSwiping, handleUp)),\n    _useState4 = _slicedToArray(_useState3, 2),\n    cards = _useState4[0],\n    setCards = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cards),\n    _useState6 = _slicedToArray(_useState5, 2),\n    ongoingCards = _useState6[0],\n    setOngoingCards = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState8 = _slicedToArray(_useState7, 2),\n    cardsToDisplay = _useState8[0],\n    setCardsToDisplay = _useState8[1];\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState10 = _slicedToArray(_useState9, 2),\n    correctCard = _useState10[0],\n    setCorrectCard = _useState10[1];\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState12 = _slicedToArray(_useState11, 2),\n    modal = _useState12[0],\n    setModal = _useState12[1];\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState14 = _slicedToArray(_useState13, 2),\n    selection = _useState14[0],\n    setSelection = _useState14[1];\n  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState16 = _slicedToArray(_useState15, 2),\n    rightAnswers = _useState16[0],\n    setRightAnswers = _useState16[1];\n  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState18 = _slicedToArray(_useState17, 2),\n    complete = _useState18[0],\n    setComplete = _useState18[1];\n  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState20 = _slicedToArray(_useState19, 2),\n    content = _useState20[0],\n    setContent = _useState20[1];\n  var cardsContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, cardsToDisplay[0], cardsToDisplay[1], cardsToDisplay[2], modal);\n\n  // On Mount\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    newTurn();\n  }, []);\n\n  // On settings total cards\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    props.setTotalSlides(cards.length);\n  }, [cards]);\n\n  // On selection change\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (selection) {\n      if (isSelectionCorrect(correctCard.key, reactKeyFromElement(selection))) {\n        setRightAnswers(function () {\n          return rightAnswers + 1;\n        });\n        setSelection('');\n        props.setTargetTree('Correct!');\n        selectionResultSplash('correct');\n      } else {\n        setSelection('');\n        props.setTargetTree('Oops!');\n        selectionResultSplash('incorrect');\n      }\n      ;\n    }\n  }, [selection]);\n\n  // On complete change\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (complete) {\n      props.setTargetTree('Congrats!');\n      props.setSlideNumber(cards.length);\n      setContent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EndCard_EndCard_js__WEBPACK_IMPORTED_MODULE_2__.EndCard, {\n        resetGame: props.resetGame,\n        rightAnswers: rightAnswers,\n        length: cards.length\n      }));\n    } else {\n      setContent(cardsContent);\n    }\n  }, [complete, cardsToDisplay, modal]);\n  function isSelectionCorrect(correctKey, chosenKey) {\n    if (correctKey === chosenKey) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  function selectionResultSplash(result) {\n    setContent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SelectionResultSplash_SelectionResultSplash_js__WEBPACK_IMPORTED_MODULE_1__.SelectionResultSplash, {\n      newTurn: newTurn,\n      result: result,\n      correctCard: correctCard,\n      selection: cardFromReactKey(reactKeyFromElement(selection))\n    }));\n  }\n  function newTurn() {\n    props.setSlideNumber(function () {\n      return props.slideNumber + 1;\n    });\n    setContent(cardsContent);\n    if (ongoingCards.length > 0) {\n      var shuffleArray = function shuffleArray(array) {\n        var resultArray = [];\n        var possibleIndexes = [];\n        for (var _i2 = 0; _i2 < array.length; _i2++) {\n          possibleIndexes.push(_i2);\n        }\n        array.forEach(function (element) {\n          var possibleIndexesRandomIndex = getRandomIndex(possibleIndexes);\n          var randomIndex = possibleIndexes[possibleIndexesRandomIndex];\n          resultArray[randomIndex] = element;\n          possibleIndexes.splice(possibleIndexesRandomIndex, 1);\n        });\n        return resultArray;\n      };\n      var getRandomIndex = function getRandomIndex(array) {\n        var result = Math.floor(Math.random() * array.length);\n        return result;\n      };\n      var removeCardFromArray = function removeCardFromArray(cardToBeRemoved, array) {\n        var result = array.filter(function (currentCard) {\n          return !(currentCard === cardToBeRemoved);\n        });\n        return result;\n      };\n      // Determine new correct card and set message\n      var currentCards = ongoingCards;\n      var currentCorrectCard = currentCards[getRandomIndex(currentCards)];\n      props.setTargetTree(currentCorrectCard.props.treeImgs.name);\n      setCorrectCard(currentCorrectCard);\n\n      // Remove correct card from current cards, and update to ongoingCards\n      currentCards = removeCardFromArray(currentCorrectCard, currentCards);\n\n      // If there are no more choices for a correct card, mark the game as completed\n      if (!currentCards) {\n        setComplete(true);\n      }\n      setOngoingCards(currentCards);\n\n      // Generate card choices\n      var cardChoices = [currentCorrectCard];\n      var choicesLeft = removeCardFromArray(currentCorrectCard, cards);\n\n      // Wrong choices\n      for (var i = 1; i < 3; i++) {\n        var wrongChoiceIndex = getRandomIndex(choicesLeft);\n        cardChoices.push(choicesLeft[wrongChoiceIndex]);\n        choicesLeft = removeCardFromArray(choicesLeft[wrongChoiceIndex], choicesLeft);\n      }\n      cardChoices = shuffleArray(cardChoices);\n      setCardsToDisplay(cardChoices);\n    } else {\n      setComplete(true);\n    }\n  }\n  function handleCardClick(treeImg, catName, treeClass) {\n    setModal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal_Modal_js__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n      treeImg: treeImg,\n      catName: catName,\n      treeClass: treeClass,\n      handleModalXClick: handleModalXClick\n    }));\n  }\n  function handleModalXClick() {\n    setModal('');\n  }\n  function handleRightSwipe() {}\n  function handleSwiping(event) {\n    var card = getCardFromTarget(event.event.target);\n\n    // Move card with swipe\n    if (event.deltaX > 0) {\n      card.style.left = event.deltaX + 'px';\n    }\n    if (event.deltaX > 100) {\n      card.style.backgroundColor = 'green';\n    } else {\n      card.style.backgroundColor = 'beige';\n    }\n  }\n  function handleUp(event) {\n    var card = getCardFromTarget(event.event.target);\n\n    // If card position is in the desired range, register a confirm\n    var cardPosition = getComputedStyle(card).left.split('px')[0];\n    if (cardPosition > 100) {\n      // Check for correct selection\n      setSelection(card);\n    }\n\n    // Reset Card position\n    card.style.left = '0px';\n    card.style.backgroundColor = 'beige';\n  }\n  function getCardFromTarget(target) {\n    if (target.classList.contains('Card')) {\n      return target;\n    } else {\n      return getCardFromTarget(target.parentElement);\n    }\n  }\n  function reactKeyFromElement(element) {\n    var key = Object.keys(element).find(function (key) {\n      return key.startsWith('__reactFiber');\n    });\n    return element[key][\"return\"].key;\n  }\n  function cardFromReactKey(key) {\n    var result = cards.find(function (card) {\n      return card.key === key;\n    });\n    return result || 'not found';\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"cardsContainer\"\n  }, content));\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/CardsContainer.js?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/EndCard/EndCard.js":
/*!**********************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/EndCard/EndCard.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EndCard\": () => (/* binding */ EndCard)\n/* harmony export */ });\n/* harmony import */ var _endcard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endcard.css */ \"./src/index/React/components/CardsContainer/EndCard/endcard.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction EndCard(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"EndCard\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h3\", null, \"You Finished the Quiz!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"You scored \", props.rightAnswers, \" out of \", props.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    onClick: props.resetGame\n  }, \"Restart\"));\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/EndCard/EndCard.js?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/Modal/Modal.js":
/*!******************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/Modal/Modal.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.css */ \"./src/index/React/components/CardsContainer/Modal/modal.css\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nfunction Modal(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState2 = _slicedToArray(_useState, 2),\n    currentImg = _useState2[0],\n    setCurrentImg = _useState2[1];\n  var imgElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: 'imgZoomed ' + props.catName + ' ' + props.treeClass,\n    alt: \"Overview Img\",\n    src: props.treeImg\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setCurrentImg(imgElement);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"cardsModal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"xBtn\",\n    onClick: props.handleModalXClick\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"modalImgWrapper\"\n  }, currentImg));\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/Modal/Modal.js?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/SelectionResultSplash/SelectionResultSplash.js":
/*!**************************************************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/SelectionResultSplash/SelectionResultSplash.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SelectionResultSplash\": () => (/* binding */ SelectionResultSplash)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _selectionresultsplash_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectionresultsplash.css */ \"./src/index/React/components/CardsContainer/SelectionResultSplash/selectionresultsplash.css\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nfunction SelectionResultSplash(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState2 = _slicedToArray(_useState, 2),\n    resultContent = _useState2[0],\n    setResultContent = _useState2[1];\n  var correctContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: \"selectionResultsSplashHeader correct\"\n  }, \"Your Answer: \", props.correctCard.props.treeImgs.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: 'Card ' + props.correctCard.props.treeImgs.catName\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"imgsWrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"imgFrame overviewFrame\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"overviewImg treeImg\",\n    src: props.correctCard.props.treeImgs.overview\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"imgFrame coneFruitFrame\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"coneFruitImg treeImg\",\n    src: props.correctCard.props.treeImgs.conefruit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"imgFrame needleLeafFrame\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"needleLeafImg treeImg\",\n    src: props.correctCard.props.treeImgs.needleleaf\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"selectionResultsSplashButton\",\n    onClick: props.newTurn\n  }, \"Next\"));\n  var incorrectContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: \"selectionResultsSplashHeader incorrect\"\n  }, \"You Chose: \", props.selection.props.treeImgs.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: 'Card ' + props.selection.props.treeImgs.catName\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"imgsWrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"imgFrame overviewFrame\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"overviewImg treeImg\",\n    src: props.selection.props.treeImgs.overview\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"imgFrame coneFruitFrame\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"coneFruitImg treeImg\",\n    src: props.selection.props.treeImgs.conefruit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"imgFrame needleLeafFrame\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"needleLeafImg treeImg\",\n    src: props.selection.props.treeImgs.needleleaf\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: \"selectionResultsSplashHeader correct\"\n  }, \"Correct Answer: \", props.correctCard.props.treeImgs.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: 'Card ' + props.correctCard.props.treeImgs.catName\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"imgsWrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"imgFrame overviewFrame\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"overviewImg treeImg\",\n    src: props.correctCard.props.treeImgs.overview\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"imgFrame coneFruitFrame\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"coneFruitImg treeImg\",\n    src: props.correctCard.props.treeImgs.conefruit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"imgFrame needleLeafFrame\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"needleLeafImg treeImg\",\n    src: props.correctCard.props.treeImgs.needleleaf\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"selectionResultsSplashButton\",\n    onClick: props.newTurn\n  }, \"Next\"));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.result === 'correct') {\n      setResultContent(correctContent);\n    } else {\n      setResultContent(incorrectContent);\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, resultContent);\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/SelectionResultSplash/SelectionResultSplash.js?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/generateCards.js":
/*!********************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/generateCards.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateCardsArray\": () => (/* binding */ generateCardsArray)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card/Card */ \"./src/index/React/components/CardsContainer/Card/Card.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);\n// Module for generating list of cards\n\n\n\nfunction generateCardsArray(treesImgs, handleCardClick, handleRightSwipe, handleSwiping, handleUp, reportImageLoaded) {\n  var cardsArray = [];\n  for (var tree in treesImgs) {\n    cardsArray.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n      key: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),\n      reportImageLoaded: reportImageLoaded,\n      treeName: tree,\n      treeImgs: treesImgs[tree],\n      handleCardClick: handleCardClick,\n      handleRightSwipe: handleRightSwipe,\n      handleSwiping: handleSwiping,\n      handleUp: handleUp\n    }));\n  }\n  return cardsArray;\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/generateCards.js?");

/***/ }),

/***/ "./src/index/React/components/GameInfo/GameInfo.js":
/*!*********************************************************!*\
  !*** ./src/index/React/components/GameInfo/GameInfo.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameInfo\": () => (/* binding */ GameInfo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_info_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-info.css */ \"./src/index/React/components/GameInfo/game-info.css\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n// Displays prompt and stats\n\n// ############################\n// IMPORTS\n// ############################\n\n\n\n\n// ############################\n// REACT COMPONENTS\n// ############################\n\nfunction GameInfo(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState2 = _slicedToArray(_useState, 2),\n    message = _useState2[0],\n    setMessage = _useState2[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.targetTree === 'Oops!') {\n      setMessage(props.targetTree);\n      document.querySelector('.findTreeContainer').classList.add('incorrect');\n    } else if (props.targetTree === 'Correct!') {\n      setMessage(props.targetTree);\n      document.querySelector('.findTreeContainer').classList.add('correct');\n    } else if (props.targetTree === 'Congrats!') {\n      setMessage(props.targetTree);\n      document.querySelector('.findTreeContainer').classList = 'findTreeContainer';\n    } else {\n      var tree;\n      if (props.targetTree) {\n        tree = props.targetTree;\n      } else {\n        tree = '';\n      }\n      setMessage('Swipe right on this tree: ' + tree + ' →');\n      document.querySelector('.findTreeContainer').classList = 'findTreeContainer';\n    }\n  }, [props.targetTree]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"GameInfo\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"slidesCounter\"\n  }, props.slideNumber, \"/\", props.totalSlides), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"findTreeContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"GameInfoMessage\"\n  }, message)));\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/GameInfo/GameInfo.js?");

/***/ }),

/***/ "./src/index/index.js":
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/index/styles.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _React_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./React/App.js */ \"./src/index/React/App.js\");\n// Entry point\n\n// ====== IMPORTS ======\n\n// Styling\n\n\n// React\n\n\n\n// Main React App\n\n\n// ====== WINDOW ======\n\nwindow.oncontextmenu = function (event) {\n  event.preventDefault();\n  event.stopPropagation();\n  return false;\n};\nfunction documentHeight() {\n  var doc = document.documentElement;\n  doc.style.setProperty('--doc-height', \"\".concat(window.innerHeight, \"px\"));\n}\nfunction documentWidth() {\n  var doc = document.documentElement;\n  doc.style.setProperty('--doc-width', \"\".concat(window.innerWidth, \"px\"));\n}\nfunction updateWindow() {\n  documentHeight();\n  documentWidth();\n}\nupdateWindow();\n\n// Event Listeners\n\nwindow.addEventListener('resize', updateWindow);\n\n// ====== RENDER ======\n\nvar reactRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(document.querySelector('#root'));\nreactRoot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_React_App_js__WEBPACK_IMPORTED_MODULE_3__.App, null));\n\n//# sourceURL=webpack://webpack/./src/index/index.js?");

/***/ }),

/***/ "./src/index/treeImageHandling.js":
/*!****************************************!*\
  !*** ./src/index/treeImageHandling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTrees\": () => (/* binding */ getTrees)\n/* harmony export */ });\n// Import images and assign to object\nfunction getTrees() {\n  var trees = {};\n  var treesImports = __webpack_require__(\"./src/index/assets/trees sync recursive \\\\.jpg$\");\n  treesImports.keys().forEach(function (key) {\n    // parse filename to category name and type name\n    var category = key.split('/')[1];\n    var type = key.split('/')[2].split('.')[0];\n\n    // if category has not been created, then create it\n    if (!trees.hasOwnProperty(category)) trees[category] = {};\n    trees[category][type] = treesImports(key);\n\n    // Get tree name from category name and assign to object\n    trees[category].name = getTreeName(category);\n    trees[category].catName = category;\n    function getTreeName(category) {\n      switch (category) {\n        case 'americanhornbeam':\n          return 'American Hornbeam';\n        case 'easternhemlock':\n          return 'Eastern Hemlock';\n        case 'easternredcedar':\n          return 'Eastern Red Cedar';\n        case 'floweringdogwood':\n          return 'Flowering Dogwood';\n        case 'fraserfir':\n          return 'Fraser Fir';\n        case 'northernredoak':\n          return 'Northern Red Oak';\n        case 'redspruce':\n          return 'Red Spruce';\n        case 'rvrbirch':\n          return 'River Birch';\n        case 'tblmtnpine':\n          return 'Table Mountain Pine';\n        case 'tuliptree':\n          return 'Tulip Tree';\n        case 'whitepine':\n          return 'White Pine';\n        case 'ylwbuckeye':\n          return 'Yellow Buckeye';\n        case 'americanbasswood':\n          return 'American Basswood';\n        case 'southerncatalpa':\n          return 'Southern Catalpa';\n        case 'blackcherry':\n          return 'Black Cherry';\n        default:\n          return 'Set tree name in \"treeImageHandling.js\"';\n        case 'slipperyelm':\n          return 'Slippery Elm';\n        case 'wingedelm':\n          return 'Winged Elm';\n        case 'mountainash':\n          return 'Mountain Ash';\n        case 'sassafras':\n          return 'Sassafras';\n        case 'blacklocust':\n          return 'Black Locust';\n        case 'postoak':\n          return 'Post Oak';\n        case 'chestnutoak':\n          return 'Chestnut Oak';\n        case 'blackjackoak':\n          return 'Blackjack Oak';\n        case 'southernredoak':\n          return 'Southern Red Oak';\n        case 'scarletoak':\n          return 'Scarlet Oak';\n        case 'whiteoak':\n          return 'White Oak';\n        case 'firecherry':\n          return 'Fire Cherry';\n        case 'sycamore':\n          return 'Sycamore';\n        case 'virginiapine':\n          return 'Virginia Pine';\n        case 'loblollypine':\n          return 'Loblolly Pine';\n        case 'pitchpine':\n          return 'Pitch Pine';\n      }\n    }\n  });\n  return trees;\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/treeImageHandling.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/app.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/app.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Stylesheet for App.js */\\r\\n* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.App {\\r\\n    width: 100%;\\r\\n    display: grid;\\r\\n    user-select: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/app.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/HamburgerModal/Attributions/attributions.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/HamburgerModal/Attributions/attributions.css ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n.Attributions {\\r\\n    background-color: var(--main-background-color);\\r\\n    border-top: 1px solid black;\\r\\n    display: grid;\\r\\n    grid-template-rows: 100%;\\r\\n    align-content: center;\\r\\n    justify-content: stretch;\\r\\n    height: calc(var(--doc-height) - 4.1rem - (var(--doc-height) * .08));\\r\\n    padding: .2rem;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.Attributions article {\\r\\n    background-color: var(--card-background-color);\\r\\n    border-radius: 4px;\\r\\n    width: 100%;\\r\\n    padding: .25rem;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.Attributions h3 {\\r\\n    align-self: center;\\r\\n}\\r\\n\\r\\n.Attributions button {\\r\\n    height: 4rem;\\r\\n    width: var(--doc-width);\\r\\n}\\r\\n\\r\\n.exitAttributions {\\r\\n    position: fixed;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n}\\r\\n\\r\\n.type {\\r\\n    padding-left: 2rem;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/HamburgerModal/Attributions/attributions.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/HamburgerModal/Donate/donate.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/HamburgerModal/Donate/donate.css ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n.Donate {\\r\\n    background-color: var(--main-background-color);\\r\\n    border-top: 1px solid black;\\r\\n    display: grid;\\r\\n    grid-template-rows: 100%;\\r\\n    align-content: center;\\r\\n    justify-content: stretch;\\r\\n    height: calc(var(--doc-height) - 4.1rem - (var(--doc-height) * .08));\\r\\n    padding: .2rem;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.Donate article {\\r\\n    background-color: var(--card-background-color);\\r\\n    border-radius: 4px;\\r\\n    width: 100%;\\r\\n    padding: .25rem;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    overflow-y: scroll;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.Donate p {\\r\\n    width: 80%;\\r\\n}\\r\\n\\r\\n.Donate h4 {\\r\\n    margin-top: 1rem;\\r\\n    margin-bottom: .5rem;\\r\\n}\\r\\n\\r\\n.donateLink {\\r\\n    margin-top: 5rem;\\r\\n    font-size: 1rem;\\r\\n    border-radius: 4px;\\r\\n    padding: .25rem .5rem;\\r\\n}\\r\\n\\r\\n.exitDonate {\\r\\n    height: 4rem;\\r\\n    width: var(--doc-width);\\r\\n}\\r\\n\\r\\n.exitDonate {\\r\\n    position: fixed;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/HamburgerModal/Donate/donate.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/HamburgerModal/Menu/hamburgermenu.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/HamburgerModal/Menu/hamburgermenu.css ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".HamburgerMenu {\\r\\n    display: grid;\\r\\n    grid-auto-rows: 4rem;\\r\\n    align-items: stretch;\\r\\n    border-bottom: 1px solid black;\\r\\n}\\r\\n\\r\\n.HamburgerMenu .menuHeader {\\r\\n    background-color: lightgrey;\\r\\n    font-size: 1.2rem;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.HamburgerMenu button {\\r\\n    border: none;\\r\\n    border-top: 1px solid black;\\r\\n    background-color: white;\\r\\n}\\r\\n\\r\\n.HamburgerMenu button:active {\\r\\n    background-color: lightgray;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/HamburgerModal/Menu/hamburgermenu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/HamburgerModal/hamburgermodal.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/HamburgerModal/hamburgermodal.css ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".HamburgerModal {\\r\\n    left: 0;\\r\\n    top: calc(var(--doc-height) * .084);\\r\\n    position: fixed;\\r\\n    height: var(--doc-height);\\r\\n    width: var(--doc-width);\\r\\n    background-color: beige;\\r\\n    z-index: 1;\\r\\n    overflow: auto;\\r\\n}\\r\\n\\r\\n.testScrollDiv {\\r\\n    height: calc(var(--doc-height) * 2);\\r\\n    background-color: gray;\\r\\n    width: 30%;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/HamburgerModal/hamburgermodal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/app-header.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/app-header.css ***!
  \***************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/pine-forest.otf */ \"./src/index/React/components/AppHeader/assets/fonts/pine-forest.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Stylesheet for Appheader.js */\\r\\n\\r\\n* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n    font-family: pine;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n.AppHeader {\\r\\n    background-color: var(--header-background-color);\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n    padding: 0;\\r\\n    align-items: center;\\r\\n    padding-inline: .4rem;\\r\\n    height: calc(var(--doc-height) * .08);\\r\\n    box-shadow: 0 0 4px black;\\r\\n    z-index: 1;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.hero {\\r\\n    font-family: pine;\\r\\n    font-size: calc(var(--doc-height) * .06);\\r\\n    white-space: nowrap;\\r\\n    grid-column: 2/3;\\r\\n    justify-self: center;\\r\\n    align-self: center;\\r\\n}\\r\\n\\r\\n.hamburger {\\r\\n    border-radius: 2px;\\r\\n    height: 2rem;\\r\\n    grid-column: 3/4;\\r\\n    justify-self: right;\\r\\n    padding: .2rem;\\r\\n}\\r\\n\\r\\n.hamburger:active {\\r\\n    background-color: beige;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/app-header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/Card/card.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/Card/card.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Stylesheet for Card.js */\\r\\n\\r\\n.Card {\\r\\n    height: 30%;\\r\\n    width: calc(var(--doc-width) * .9);\\r\\n    box-shadow: 0 0 4px black;\\r\\n    background-color: beige ;\\r\\n    border-radius: 2px;\\r\\n    padding: .25rem;\\r\\n    overflow: hidden;\\r\\n    margin-bottom: 10px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.imgsWrapper {\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    gap: .5rem;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.treeImg {\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.imgFrame {\\r\\n    height: 100%;\\r\\n    width: 30%;\\r\\n    border-radius: 6px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    overflow: hidden;\\r\\n    position: relative;\\r\\n    box-shadow: 0 0 4px 0 black;\\r\\n    background-color: black;\\r\\n}\\r\\n\\r\\n/* AMERICAN HORNBEAM */\\r\\n.americanhornbeam .needleLeafImg, .americanhornbeam.needleLeafImg {\\r\\n    height: 80%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n/* EASTERN HEMLOCK */\\r\\n.easternhemlock .needleLeafImg, .easternhemlock.needleLeafImg {\\r\\n    height: 70%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n.easternhemlock.coneFruitImg {\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n/* EASTER RED CEDAR */\\r\\n.easternredcedar .overviewImg, .easternredcedar.overviewImg {\\r\\n    height: 110%;\\r\\n}\\r\\n\\r\\n.easternredcedar .needleLeafImg, .easternredcedar.needleLeafImg {\\r\\n    height: 90%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n/* FLOWERING DOGWOOD */\\r\\n.floweringdogwood .overviewImg {\\r\\n    height: 70%\\r\\n}\\r\\n\\r\\n.floweringdogwood.overviewImg {\\r\\n    height: 30% !important;\\r\\n}\\r\\n\\r\\n.floweringdogwood .coneFruitImg {\\r\\n    position: relative;\\r\\n    height: 80%;\\r\\n    transform: rotate(-.25turn) translate(0, calc(var(--doc-height) * .01));\\r\\n}\\r\\n\\r\\n.floweringdogwood.coneFruitImg {\\r\\n    position: relative;\\r\\n    transform: translate(calc(var(--doc-width) * .05), calc(var(--doc-height) * -.2)) rotate(-.25turn);\\r\\n}\\r\\n\\r\\n.floweringdogwood .needleLeafImg, .floweringdogwood.needleLeafImg {\\r\\n    height: 80%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n/* FRASER FIR */\\r\\n.fraserfir .needleLeafImg, .fraserfir.needleLeafImg {\\r\\n    height: 60%;\\r\\n}\\r\\n\\r\\n.fraserfir.overviewImg {\\r\\n    height: 30% !important;\\r\\n}\\r\\n\\r\\n/* RIVER BIRCH */\\r\\n.rvrbirch .needleLeafImg, .rvrbirch.needleLeafImg {\\r\\n    height: 70%;\\r\\n    transform: rotate(-.25turn);\\r\\n}\\r\\n\\r\\n/* TULIP TREE */\\r\\n.tuliptree .needleLeafImg, .tuliptree.needleLeafImg {\\r\\n    height: 70%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n/* WHITE PINE */\\r\\n.whitepine .needleLeafImg, .whitepine.needleLeafImg {\\r\\n    height: 75%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n.whitepine.overviewImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n\\r\\n/* YELLOW BUCKEYE */\\r\\n.ylwbuckeye .coneFruitImg, .ylwbuckeye.coneFruitImg {\\r\\n    height: 80%;\\r\\n}\\r\\n\\r\\n.ylwbuckeye.overviewImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n\\r\\n/* SOUTHERN CATALPA */\\r\\n.southerncatalpa .overviewImg {\\r\\n    height: 60%;\\r\\n}\\r\\n\\r\\n.southerncatalpa.overviewImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n\\r\\n.southerncatalpa .needleLeafImg, .southerncatalpa.needleLeafImg {\\r\\n    height: 80%;\\r\\n    transform: rotate(-.25turn);\\r\\n}\\r\\n\\r\\n/* AMERICAN BASSWOOD */\\r\\n.americanbasswood .overviewImg, .americanbasswood.overviewImg {\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n.americanbasswood .needleLeafImg, .americanbasswood.needleLeafImg {\\r\\n    height: 65%;\\r\\n}\\r\\n\\r\\n.americanbasswood .needleLeafFrame, .americanbasswood.needleLeafFrame {\\r\\n    background-color: white;\\r\\n}\\r\\n\\r\\n/* RED SPRUCE */\\r\\n.redspruce.overviewImg {\\r\\n    height: 40% !important;\\r\\n    position: relative;\\r\\n    top: calc(var(--doc-height) * .1)\\r\\n}\\r\\n\\r\\n/* TABLE MOUNTAIN PINE */\\r\\n.tblmtnpine .overviewImg {\\r\\n    height: 80%;\\r\\n}\\r\\n\\r\\n.tblmtnpine.overviewImg {\\r\\n    height: 40% !important;\\r\\n}\\r\\n\\r\\n/* Black Cherry */\\r\\n.blackcherry.needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n\\r\\n/* Slippery Elm */\\r\\n.slipperyelm .needleLeafImg, .slipperyelm.needleLeafImg {\\r\\n    transform: rotate(.5turn);\\r\\n}\\r\\n.slipperyelm.needleLeafImg {\\r\\n    height: 80%;\\r\\n}\\r\\n.slipperyelm .coneFruitImg, .slipperyelm.coneFruitImg {\\r\\n    height: 80%;\\r\\n}\\r\\n.slipperyelm .coneFruitFrame {\\r\\n    background-color: black;\\r\\n}\\r\\n\\r\\n/* Sassafras */\\r\\n.sassafras .needleLeafImg, .sassafras.needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n\\r\\n/* Black Locust */\\r\\n.blacklocust.needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n\\r\\n/* Post Oak */\\r\\n.postoak .overviewImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.postoak.needleLeafImg {\\r\\n    height: 70%;;\\r\\n}\\r\\n\\r\\n/* Chestnut Oak */\\r\\n.chestnutoak.needleLeafImg {\\r\\n    height: 60%;\\r\\n}\\r\\n\\r\\n/* Blackjack Oak */\\r\\n.blackjackoak.needleLeafImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.blackjackoak.overviewImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n\\r\\n/* Southern Red Oak */\\r\\n.southernredoak .coneFruitImg {\\r\\n    height: 50%;\\r\\n}\\r\\n.southernredoak.coneFruitImg {\\r\\n    height: 40%;\\r\\n}\\r\\n\\r\\n/* Scarlet Oak */\\r\\n.scarletoak.needleLeafImg {\\r\\n    height: 80%;\\r\\n}\\r\\n\\r\\n/* White Oak */\\r\\n.whiteoak .overviewImg {\\r\\n    height: 55%;\\r\\n    transform: translate(5%, 0);\\r\\n}\\r\\n.whiteoak.overviewImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n.whiteoak.coneFruitImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.whiteoak .needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.whiteoak.needleLeafImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n\\r\\n/* Sycamore */\\r\\n.sycamore .coneFruitImg, .sycamore.coneFruitImg {\\r\\n    height: 70%;\\r\\n    transform: translate(10%, 0);\\r\\n}\\r\\n.sycamore .needleLeafImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.sycamore.needleLeafImg {\\r\\n    height: 50%;\\r\\n}\\r\\n\\r\\n/* Virginia Pine */\\r\\n.virginiapine .coneFruitImg {\\r\\n    height: 80%;\\r\\n}\\r\\n.virginiapine.coneFruitImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.virginiapine.needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n\\r\\n/* Loblolly Pine */\\r\\n.loblollypine.overviewImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n.loblollypine.needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n\\r\\n/* Pitch Pine */\\r\\n.pitchpine.overviewImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n.pitchpine.coneFruitImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.pitchpine .needleLeafImg {\\r\\n    height: 80%;\\r\\n}\\r\\n.pitchpine.needleLeafImg {\\r\\n    height: 40% !important;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/Card/card.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/EndCard/endcard.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/EndCard/endcard.css ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".EndCard {\\r\\n    height: 90%;\\r\\n    width: calc(var(--doc-width) * .9);\\r\\n    box-shadow: 0 0 4px black;\\r\\n    background-color: white ;\\r\\n    border-radius: 2px;\\r\\n    padding: .25rem;\\r\\n    overflow: hidden;\\r\\n    margin-bottom: 10px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.EndCard button {\\r\\n    position: fixed;\\r\\n    bottom: .25rem;\\r\\n    right: .25rem;\\r\\n    padding: .5rem 2rem;\\r\\n    font-size: 1rem;\\r\\n    border-radius: 6px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/EndCard/endcard.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/Modal/modal.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/Modal/modal.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/xBtn.png */ \"./src/index/React/components/CardsContainer/Modal/assets/xBtn.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n.cardsModal {\\r\\n    --modalbg: rgba(0, 0, 0, .85);\\r\\n    background-color: var(--modalbg);\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    padding: 2rem;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.modalImgWrapper {\\r\\n    overflow: hidden;\\r\\n    display: grid;\\r\\n    justify-content: center;\\r\\n    align-content: center;\\r\\n    align-items: center;\\r\\n    height: 90%;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.cardsModal .xBtn {\\r\\n    position: absolute;\\r\\n    top: 5px;\\r\\n    right: 5px;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-size: 100% 100%;\\r\\n    height: 5vh;\\r\\n    width: 5vh;\\r\\n    border: none;\\r\\n    background-color: transparent;\\r\\n}\\r\\n\\r\\n.cardsModal .overviewImg {\\r\\n    height: 70%;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/Modal/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/SelectionResultSplash/selectionresultsplash.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/SelectionResultSplash/selectionresultsplash.css ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n.staticCard {\\r\\n    height: 50% !important;\\r\\n    width: calc(var(--doc-width) * .9);\\r\\n    box-shadow: 0 0 4px black;\\r\\n    background-color: white ;\\r\\n    border-radius: 2px;\\r\\n    padding: .25rem;\\r\\n    overflow: hidden;\\r\\n    margin-bottom: 10px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.selectionResultsSplashHeader {\\r\\n    border-radius: 6px;\\r\\n    background-color: white;\\r\\n    width: calc(var(--doc-width) * .9);\\r\\n    padding: .25rem;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.selectionResultsSplashHeader.correct {\\r\\n    border: 2px solid green;\\r\\n}\\r\\n\\r\\n.selectionResultsSplashHeader.incorrect {\\r\\n    border: 2px solid red;\\r\\n}\\r\\n\\r\\n.selectionResultsSplashButton {\\r\\n    position: fixed;\\r\\n    bottom: .25rem;\\r\\n    right: .25rem;\\r\\n    padding: .5rem 2rem;\\r\\n    font-size: 1rem;\\r\\n    border-radius: 6px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/SelectionResultSplash/selectionresultsplash.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/cardscontainer.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/cardscontainer.css ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n.cardsContainer {\\r\\n    position: relative;\\r\\n    padding-inline: calc(var(--doc-width)*.06);\\r\\n    padding-top: .5rem;\\r\\n    --cards-container-height: calc(var(--doc-height)*.835);\\r\\n    height: var(--cards-container-height);\\r\\n    overflow: hidden;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/cardscontainer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/GameInfo/game-info.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/GameInfo/game-info.css ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/DellaRespira.ttf */ \"./src/index/React/components/GameInfo/assets/fonts/DellaRespira.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Stylesheet for GameInfo.js */\\r\\n\\r\\n@font-face {\\r\\n    font-family: DellaRespira;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n.GameInfo {\\r\\n    padding-top: .2rem;\\r\\n    white-space: nowrap;\\r\\n    font-family: DellaRespira;\\r\\n    background-color: white;\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n    justify-items: center;\\r\\n    height: calc(var(--doc-height) * .08);\\r\\n    box-shadow: 0 0 4px 0 black;\\r\\n}\\r\\n\\r\\n.findTreeContainer {\\r\\n    grid-column: 2/3;\\r\\n    display: grid;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.findTreeContainer.correct, .findTreeContainer.incorrect {\\r\\n    font-weight: bolder;\\r\\n    font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.findTreeContainer.correct {\\r\\n    color: green;\\r\\n}\\r\\n\\r\\n.findTreeContainer.incorrect {\\r\\n    color: red;\\r\\n}\\r\\n\\r\\n.slidesCounter {\\r\\n    position: fixed;\\r\\n    bottom: .25rem;\\r\\n    left: .25rem;\\r\\n    background-color: white;\\r\\n    padding: .05rem .125rem;\\r\\n    border-radius: 2px;\\r\\n    box-shadow: 0 0 2px 0 black;;\\r\\n\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/GameInfo/game-info.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/styles.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n:root {\\r\\n    --header-background-color: #ABC4A1;\\r\\n    --main-background-color: #9DB4AB;\\r\\n    --card-background-color: white;\\r\\n    /* --doc-height: 100%; */\\r\\n}\\r\\n\\r\\nbody {\\r\\n    overflow: hidden;\\r\\n    height: var(--doc-height);\\r\\n}\\r\\n\\r\\nhtml {\\r\\n    background-color: var(--main-background-color);\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/index/React/app.css":
/*!*********************************!*\
  !*** ./src/index/React/app.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./app.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/React/app.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/app.css?");

/***/ }),

/***/ "./src/index/React/components/AppHeader/HamburgerModal/Attributions/attributions.css":
/*!*******************************************************************************************!*\
  !*** ./src/index/React/components/AppHeader/HamburgerModal/Attributions/attributions.css ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_attributions_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!./attributions.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/HamburgerModal/Attributions/attributions.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_attributions_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_attributions_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_attributions_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_attributions_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/HamburgerModal/Attributions/attributions.css?");

/***/ }),

/***/ "./src/index/React/components/AppHeader/HamburgerModal/Donate/donate.css":
/*!*******************************************************************************!*\
  !*** ./src/index/React/components/AppHeader/HamburgerModal/Donate/donate.css ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_donate_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!./donate.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/HamburgerModal/Donate/donate.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_donate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_donate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_donate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_donate_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/HamburgerModal/Donate/donate.css?");

/***/ }),

/***/ "./src/index/React/components/AppHeader/HamburgerModal/Menu/hamburgermenu.css":
/*!************************************************************************************!*\
  !*** ./src/index/React/components/AppHeader/HamburgerModal/Menu/hamburgermenu.css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hamburgermenu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!./hamburgermenu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/HamburgerModal/Menu/hamburgermenu.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hamburgermenu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hamburgermenu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_hamburgermenu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_hamburgermenu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/HamburgerModal/Menu/hamburgermenu.css?");

/***/ }),

/***/ "./src/index/React/components/AppHeader/HamburgerModal/hamburgermodal.css":
/*!********************************************************************************!*\
  !*** ./src/index/React/components/AppHeader/HamburgerModal/hamburgermodal.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hamburgermodal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./hamburgermodal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/HamburgerModal/hamburgermodal.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hamburgermodal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hamburgermodal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_hamburgermodal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_hamburgermodal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/HamburgerModal/hamburgermodal.css?");

/***/ }),

/***/ "./src/index/React/components/AppHeader/app-header.css":
/*!*************************************************************!*\
  !*** ./src/index/React/components/AppHeader/app-header.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./app-header.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/React/components/AppHeader/app-header.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_app_header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_app_header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/app-header.css?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/Card/card.css":
/*!*****************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/Card/card.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./card.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/Card/card.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/Card/card.css?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/EndCard/endcard.css":
/*!***********************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/EndCard/endcard.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_endcard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./endcard.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/EndCard/endcard.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_endcard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_endcard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_endcard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_endcard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/EndCard/endcard.css?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/Modal/modal.css":
/*!*******************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/Modal/modal.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/Modal/modal.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/Modal/modal.css?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/SelectionResultSplash/selectionresultsplash.css":
/*!***************************************************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/SelectionResultSplash/selectionresultsplash.css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_selectionresultsplash_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./selectionresultsplash.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/SelectionResultSplash/selectionresultsplash.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_selectionresultsplash_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_selectionresultsplash_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_selectionresultsplash_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_selectionresultsplash_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/SelectionResultSplash/selectionresultsplash.css?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/cardscontainer.css":
/*!**********************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/cardscontainer.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cardscontainer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./cardscontainer.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/cardscontainer.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cardscontainer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cardscontainer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_cardscontainer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_cardscontainer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/cardscontainer.css?");

/***/ }),

/***/ "./src/index/React/components/GameInfo/game-info.css":
/*!***********************************************************!*\
  !*** ./src/index/React/components/GameInfo/game-info.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_game_info_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./game-info.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/React/components/GameInfo/game-info.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_game_info_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_game_info_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_game_info_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_game_info_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/GameInfo/game-info.css?");

/***/ }),

/***/ "./src/index/styles.css":
/*!******************************!*\
  !*** ./src/index/styles.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index/styles.css?");

/***/ }),

/***/ "./src/index/assets/trees sync recursive \\.jpg$":
/*!*********************************************!*\
  !*** ./src/index/assets/trees/ sync \.jpg$ ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./americanbasswood/conefruit.jpg\": \"./src/index/assets/trees/americanbasswood/conefruit.jpg\",\n\t\"./americanbasswood/needleleaf.jpg\": \"./src/index/assets/trees/americanbasswood/needleleaf.jpg\",\n\t\"./americanbasswood/overview.jpg\": \"./src/index/assets/trees/americanbasswood/overview.jpg\",\n\t\"./americanhornbeam/conefruit.jpg\": \"./src/index/assets/trees/americanhornbeam/conefruit.jpg\",\n\t\"./americanhornbeam/needleleaf.jpg\": \"./src/index/assets/trees/americanhornbeam/needleleaf.jpg\",\n\t\"./americanhornbeam/overview.jpg\": \"./src/index/assets/trees/americanhornbeam/overview.jpg\",\n\t\"./blackcherry/conefruit.jpg\": \"./src/index/assets/trees/blackcherry/conefruit.jpg\",\n\t\"./blackcherry/needleleaf.jpg\": \"./src/index/assets/trees/blackcherry/needleleaf.jpg\",\n\t\"./blackcherry/overview.jpg\": \"./src/index/assets/trees/blackcherry/overview.jpg\",\n\t\"./blackjackoak/conefruit.jpg\": \"./src/index/assets/trees/blackjackoak/conefruit.jpg\",\n\t\"./blackjackoak/needleleaf.jpg\": \"./src/index/assets/trees/blackjackoak/needleleaf.jpg\",\n\t\"./blackjackoak/overview.jpg\": \"./src/index/assets/trees/blackjackoak/overview.jpg\",\n\t\"./blacklocust/conefruit.jpg\": \"./src/index/assets/trees/blacklocust/conefruit.jpg\",\n\t\"./blacklocust/needleleaf.jpg\": \"./src/index/assets/trees/blacklocust/needleleaf.jpg\",\n\t\"./blacklocust/overview.jpg\": \"./src/index/assets/trees/blacklocust/overview.jpg\",\n\t\"./chestnutoak/conefruit.jpg\": \"./src/index/assets/trees/chestnutoak/conefruit.jpg\",\n\t\"./chestnutoak/needleleaf.jpg\": \"./src/index/assets/trees/chestnutoak/needleleaf.jpg\",\n\t\"./chestnutoak/overview.jpg\": \"./src/index/assets/trees/chestnutoak/overview.jpg\",\n\t\"./easternhemlock/conefruit.jpg\": \"./src/index/assets/trees/easternhemlock/conefruit.jpg\",\n\t\"./easternhemlock/needleleaf.jpg\": \"./src/index/assets/trees/easternhemlock/needleleaf.jpg\",\n\t\"./easternhemlock/overview.jpg\": \"./src/index/assets/trees/easternhemlock/overview.jpg\",\n\t\"./easternredcedar/conefruit.jpg\": \"./src/index/assets/trees/easternredcedar/conefruit.jpg\",\n\t\"./easternredcedar/needleleaf.jpg\": \"./src/index/assets/trees/easternredcedar/needleleaf.jpg\",\n\t\"./easternredcedar/overview.jpg\": \"./src/index/assets/trees/easternredcedar/overview.jpg\",\n\t\"./firecherry/conefruit.jpg\": \"./src/index/assets/trees/firecherry/conefruit.jpg\",\n\t\"./firecherry/needleleaf.jpg\": \"./src/index/assets/trees/firecherry/needleleaf.jpg\",\n\t\"./firecherry/overview.jpg\": \"./src/index/assets/trees/firecherry/overview.jpg\",\n\t\"./floweringdogwood/conefruit.jpg\": \"./src/index/assets/trees/floweringdogwood/conefruit.jpg\",\n\t\"./floweringdogwood/needleleaf.jpg\": \"./src/index/assets/trees/floweringdogwood/needleleaf.jpg\",\n\t\"./floweringdogwood/overview.jpg\": \"./src/index/assets/trees/floweringdogwood/overview.jpg\",\n\t\"./fraserfir/conefruit.jpg\": \"./src/index/assets/trees/fraserfir/conefruit.jpg\",\n\t\"./fraserfir/needleleaf.jpg\": \"./src/index/assets/trees/fraserfir/needleleaf.jpg\",\n\t\"./fraserfir/overview.jpg\": \"./src/index/assets/trees/fraserfir/overview.jpg\",\n\t\"./loblollypine/conefruit.jpg\": \"./src/index/assets/trees/loblollypine/conefruit.jpg\",\n\t\"./loblollypine/needleleaf.jpg\": \"./src/index/assets/trees/loblollypine/needleleaf.jpg\",\n\t\"./loblollypine/overview.jpg\": \"./src/index/assets/trees/loblollypine/overview.jpg\",\n\t\"./mountainash/conefruit.jpg\": \"./src/index/assets/trees/mountainash/conefruit.jpg\",\n\t\"./mountainash/needleleaf.jpg\": \"./src/index/assets/trees/mountainash/needleleaf.jpg\",\n\t\"./mountainash/overview.jpg\": \"./src/index/assets/trees/mountainash/overview.jpg\",\n\t\"./northernredoak/conefruit.jpg\": \"./src/index/assets/trees/northernredoak/conefruit.jpg\",\n\t\"./northernredoak/needleleaf.jpg\": \"./src/index/assets/trees/northernredoak/needleleaf.jpg\",\n\t\"./northernredoak/overview.jpg\": \"./src/index/assets/trees/northernredoak/overview.jpg\",\n\t\"./pitchpine/conefruit.jpg\": \"./src/index/assets/trees/pitchpine/conefruit.jpg\",\n\t\"./pitchpine/needleleaf.jpg\": \"./src/index/assets/trees/pitchpine/needleleaf.jpg\",\n\t\"./pitchpine/overview.jpg\": \"./src/index/assets/trees/pitchpine/overview.jpg\",\n\t\"./postoak/conefruit.jpg\": \"./src/index/assets/trees/postoak/conefruit.jpg\",\n\t\"./postoak/needleleaf.jpg\": \"./src/index/assets/trees/postoak/needleleaf.jpg\",\n\t\"./postoak/overview.jpg\": \"./src/index/assets/trees/postoak/overview.jpg\",\n\t\"./redspruce/conefruit.jpg\": \"./src/index/assets/trees/redspruce/conefruit.jpg\",\n\t\"./redspruce/needleleaf.jpg\": \"./src/index/assets/trees/redspruce/needleleaf.jpg\",\n\t\"./redspruce/overview.jpg\": \"./src/index/assets/trees/redspruce/overview.jpg\",\n\t\"./rvrbirch/conefruit.jpg\": \"./src/index/assets/trees/rvrbirch/conefruit.jpg\",\n\t\"./rvrbirch/needleleaf.jpg\": \"./src/index/assets/trees/rvrbirch/needleleaf.jpg\",\n\t\"./rvrbirch/overview.jpg\": \"./src/index/assets/trees/rvrbirch/overview.jpg\",\n\t\"./sassafras/conefruit.jpg\": \"./src/index/assets/trees/sassafras/conefruit.jpg\",\n\t\"./sassafras/needleleaf.jpg\": \"./src/index/assets/trees/sassafras/needleleaf.jpg\",\n\t\"./sassafras/overview.jpg\": \"./src/index/assets/trees/sassafras/overview.jpg\",\n\t\"./scarletoak/conefruit.jpg\": \"./src/index/assets/trees/scarletoak/conefruit.jpg\",\n\t\"./scarletoak/needleleaf.jpg\": \"./src/index/assets/trees/scarletoak/needleleaf.jpg\",\n\t\"./scarletoak/overview.jpg\": \"./src/index/assets/trees/scarletoak/overview.jpg\",\n\t\"./slipperyelm/conefruit.jpg\": \"./src/index/assets/trees/slipperyelm/conefruit.jpg\",\n\t\"./slipperyelm/needleleaf.jpg\": \"./src/index/assets/trees/slipperyelm/needleleaf.jpg\",\n\t\"./slipperyelm/overview.jpg\": \"./src/index/assets/trees/slipperyelm/overview.jpg\",\n\t\"./southerncatalpa/conefruit.jpg\": \"./src/index/assets/trees/southerncatalpa/conefruit.jpg\",\n\t\"./southerncatalpa/needleleaf.jpg\": \"./src/index/assets/trees/southerncatalpa/needleleaf.jpg\",\n\t\"./southerncatalpa/overview.jpg\": \"./src/index/assets/trees/southerncatalpa/overview.jpg\",\n\t\"./southernredoak/conefruit.jpg\": \"./src/index/assets/trees/southernredoak/conefruit.jpg\",\n\t\"./southernredoak/needleleaf.jpg\": \"./src/index/assets/trees/southernredoak/needleleaf.jpg\",\n\t\"./southernredoak/overview.jpg\": \"./src/index/assets/trees/southernredoak/overview.jpg\",\n\t\"./sycamore/conefruit.jpg\": \"./src/index/assets/trees/sycamore/conefruit.jpg\",\n\t\"./sycamore/needleleaf.jpg\": \"./src/index/assets/trees/sycamore/needleleaf.jpg\",\n\t\"./sycamore/overview.jpg\": \"./src/index/assets/trees/sycamore/overview.jpg\",\n\t\"./tblmtnpine/conefruit.jpg\": \"./src/index/assets/trees/tblmtnpine/conefruit.jpg\",\n\t\"./tblmtnpine/needleleaf.jpg\": \"./src/index/assets/trees/tblmtnpine/needleleaf.jpg\",\n\t\"./tblmtnpine/overview.jpg\": \"./src/index/assets/trees/tblmtnpine/overview.jpg\",\n\t\"./tuliptree/conefruit.jpg\": \"./src/index/assets/trees/tuliptree/conefruit.jpg\",\n\t\"./tuliptree/needleleaf.jpg\": \"./src/index/assets/trees/tuliptree/needleleaf.jpg\",\n\t\"./tuliptree/overview.jpg\": \"./src/index/assets/trees/tuliptree/overview.jpg\",\n\t\"./virginiapine/conefruit.jpg\": \"./src/index/assets/trees/virginiapine/conefruit.jpg\",\n\t\"./virginiapine/needleleaf.jpg\": \"./src/index/assets/trees/virginiapine/needleleaf.jpg\",\n\t\"./virginiapine/overview.jpg\": \"./src/index/assets/trees/virginiapine/overview.jpg\",\n\t\"./whiteoak/conefruit.jpg\": \"./src/index/assets/trees/whiteoak/conefruit.jpg\",\n\t\"./whiteoak/needleleaf.jpg\": \"./src/index/assets/trees/whiteoak/needleleaf.jpg\",\n\t\"./whiteoak/overview.jpg\": \"./src/index/assets/trees/whiteoak/overview.jpg\",\n\t\"./whitepine/conefruit.jpg\": \"./src/index/assets/trees/whitepine/conefruit.jpg\",\n\t\"./whitepine/needleleaf.jpg\": \"./src/index/assets/trees/whitepine/needleleaf.jpg\",\n\t\"./whitepine/overview.jpg\": \"./src/index/assets/trees/whitepine/overview.jpg\",\n\t\"./wingedelm/conefruit.jpg\": \"./src/index/assets/trees/wingedelm/conefruit.jpg\",\n\t\"./wingedelm/needleleaf.jpg\": \"./src/index/assets/trees/wingedelm/needleleaf.jpg\",\n\t\"./wingedelm/overview.jpg\": \"./src/index/assets/trees/wingedelm/overview.jpg\",\n\t\"./ylwbuckeye/conefruit.jpg\": \"./src/index/assets/trees/ylwbuckeye/conefruit.jpg\",\n\t\"./ylwbuckeye/needleleaf.jpg\": \"./src/index/assets/trees/ylwbuckeye/needleleaf.jpg\",\n\t\"./ylwbuckeye/overview.jpg\": \"./src/index/assets/trees/ylwbuckeye/overview.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/index/assets/trees sync recursive \\\\.jpg$\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/_sync_\\.jpg$?");

/***/ }),

/***/ "./src/index/React/components/AppHeader/assets/fonts/pine-forest.otf":
/*!***************************************************************************!*\
  !*** ./src/index/React/components/AppHeader/assets/fonts/pine-forest.otf ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9e8668abe15d23cbd32f.otf\";\n\n//# sourceURL=webpack://webpack/./src/index/React/components/AppHeader/assets/fonts/pine-forest.otf?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/Modal/assets/xBtn.png":
/*!*************************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/Modal/assets/xBtn.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9380805149bc775e5a7d.png\";\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/Modal/assets/xBtn.png?");

/***/ }),

/***/ "./src/index/React/components/GameInfo/assets/fonts/DellaRespira.ttf":
/*!***************************************************************************!*\
  !*** ./src/index/React/components/GameInfo/assets/fonts/DellaRespira.ttf ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9a5956f216d7e257d90d.ttf\";\n\n//# sourceURL=webpack://webpack/./src/index/React/components/GameInfo/assets/fonts/DellaRespira.ttf?");

/***/ }),

/***/ "./src/index/assets/icons/hamburger.png":
/*!**********************************************!*\
  !*** ./src/index/assets/icons/hamburger.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b91a143bb5e0d796d807.png\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/icons/hamburger.png?");

/***/ }),

/***/ "./src/index/assets/trees/americanbasswood/conefruit.jpg":
/*!***************************************************************!*\
  !*** ./src/index/assets/trees/americanbasswood/conefruit.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ca626d49eb0f44e25160.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanbasswood/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/americanbasswood/needleleaf.jpg":
/*!****************************************************************!*\
  !*** ./src/index/assets/trees/americanbasswood/needleleaf.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b51fff9761856f22a43d.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanbasswood/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/americanbasswood/overview.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/americanbasswood/overview.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"763f52acc52bfa371ec1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanbasswood/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/americanhornbeam/conefruit.jpg":
/*!***************************************************************!*\
  !*** ./src/index/assets/trees/americanhornbeam/conefruit.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6147a523ca65f48f4df6.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanhornbeam/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/americanhornbeam/needleleaf.jpg":
/*!****************************************************************!*\
  !*** ./src/index/assets/trees/americanhornbeam/needleleaf.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6a5aa9a887a80dfaf075.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanhornbeam/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/americanhornbeam/overview.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/americanhornbeam/overview.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9ff282d20882b3a42adc.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanhornbeam/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/blackcherry/conefruit.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/blackcherry/conefruit.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f7b376e1384e9196d1fe.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blackcherry/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/blackcherry/needleleaf.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/blackcherry/needleleaf.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"84ae76575e04d1faf16d.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blackcherry/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/blackcherry/overview.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/blackcherry/overview.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"40fda6f5b11a8839f626.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blackcherry/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/blackjackoak/conefruit.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/blackjackoak/conefruit.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cbf31bf2708a9154dd7e.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blackjackoak/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/blackjackoak/needleleaf.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/blackjackoak/needleleaf.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5cd545b1979dc1eebdf0.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blackjackoak/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/blackjackoak/overview.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/blackjackoak/overview.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0cb21c75da2db3cb16cd.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blackjackoak/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/blacklocust/conefruit.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/blacklocust/conefruit.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cd9b36bfa986a878c70b.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blacklocust/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/blacklocust/needleleaf.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/blacklocust/needleleaf.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3dc5f5461cd189695bbd.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blacklocust/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/blacklocust/overview.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/blacklocust/overview.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"94943d1c01493a48f9cf.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blacklocust/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/chestnutoak/conefruit.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/chestnutoak/conefruit.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"119df1a8f7a82959b828.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/chestnutoak/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/chestnutoak/needleleaf.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/chestnutoak/needleleaf.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b7e625c31e6399b57085.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/chestnutoak/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/chestnutoak/overview.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/chestnutoak/overview.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"26185d36403a366c6e0f.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/chestnutoak/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/easternhemlock/conefruit.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/easternhemlock/conefruit.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f65fd6b068a17330b496.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/easternhemlock/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/easternhemlock/needleleaf.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/easternhemlock/needleleaf.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bb13996d6e8c2ee6ce44.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/easternhemlock/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/easternhemlock/overview.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/easternhemlock/overview.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f786dd53652a862013a3.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/easternhemlock/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/easternredcedar/conefruit.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/easternredcedar/conefruit.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"160faa7dc765b657d4e0.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/easternredcedar/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/easternredcedar/needleleaf.jpg":
/*!***************************************************************!*\
  !*** ./src/index/assets/trees/easternredcedar/needleleaf.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"aa26c362869e18cd3d45.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/easternredcedar/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/easternredcedar/overview.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/easternredcedar/overview.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a9d39c5c823d45ca6ae6.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/easternredcedar/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/firecherry/conefruit.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/firecherry/conefruit.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3d21de4dbc7fed94d3f3.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/firecherry/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/firecherry/needleleaf.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/firecherry/needleleaf.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2c700c8038282d1f84fc.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/firecherry/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/firecherry/overview.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/firecherry/overview.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1c2f4cbf6ab8a6e915bc.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/firecherry/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/floweringdogwood/conefruit.jpg":
/*!***************************************************************!*\
  !*** ./src/index/assets/trees/floweringdogwood/conefruit.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3d31df639cd34e501c87.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/floweringdogwood/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/floweringdogwood/needleleaf.jpg":
/*!****************************************************************!*\
  !*** ./src/index/assets/trees/floweringdogwood/needleleaf.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"61bc86ddf7908587d7ba.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/floweringdogwood/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/floweringdogwood/overview.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/floweringdogwood/overview.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"796ea038f56f00abebf8.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/floweringdogwood/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/fraserfir/conefruit.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/fraserfir/conefruit.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bab6b0db2dd0659cb16b.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/fraserfir/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/fraserfir/needleleaf.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/fraserfir/needleleaf.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"52dbee14419025f515a0.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/fraserfir/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/fraserfir/overview.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/fraserfir/overview.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dc61d691b05a150af25a.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/fraserfir/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/loblollypine/conefruit.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/loblollypine/conefruit.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2d88aeeec2ab77d00110.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/loblollypine/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/loblollypine/needleleaf.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/loblollypine/needleleaf.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"51ff581449a7cb9ed938.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/loblollypine/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/loblollypine/overview.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/loblollypine/overview.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"77922a59f589226f4401.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/loblollypine/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/mountainash/conefruit.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/mountainash/conefruit.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ed13860ca701387be64b.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mountainash/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/mountainash/needleleaf.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/mountainash/needleleaf.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0017154db60e0a316b77.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mountainash/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/mountainash/overview.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/mountainash/overview.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d692c3d9470b4899ae1f.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mountainash/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/northernredoak/conefruit.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/northernredoak/conefruit.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ae994fca0a7d5356be7a.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/northernredoak/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/northernredoak/needleleaf.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/northernredoak/needleleaf.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"90132eb3f44b5958db10.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/northernredoak/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/northernredoak/overview.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/northernredoak/overview.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2a1cfc367e81c429477a.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/northernredoak/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/pitchpine/conefruit.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/pitchpine/conefruit.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b75969867e243d742157.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/pitchpine/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/pitchpine/needleleaf.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/pitchpine/needleleaf.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"28f5aacdc01f9aa23ae8.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/pitchpine/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/pitchpine/overview.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/pitchpine/overview.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"97379adbe1b22934210e.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/pitchpine/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/postoak/conefruit.jpg":
/*!******************************************************!*\
  !*** ./src/index/assets/trees/postoak/conefruit.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2ba2e54a4927adbb7e06.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/postoak/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/postoak/needleleaf.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/postoak/needleleaf.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0747db0f9902d03393b8.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/postoak/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/postoak/overview.jpg":
/*!*****************************************************!*\
  !*** ./src/index/assets/trees/postoak/overview.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0d778df15aa4e1c40aed.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/postoak/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/redspruce/conefruit.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/redspruce/conefruit.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6ba0b2f45ee4d1420cca.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/redspruce/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/redspruce/needleleaf.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/redspruce/needleleaf.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"18f52ad02ff0bb276b07.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/redspruce/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/redspruce/overview.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/redspruce/overview.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0e940133c14264dde765.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/redspruce/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/rvrbirch/conefruit.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/rvrbirch/conefruit.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"de43bfa1f757f067c120.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/rvrbirch/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/rvrbirch/needleleaf.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/rvrbirch/needleleaf.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c89de24bb53a174662f5.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/rvrbirch/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/rvrbirch/overview.jpg":
/*!******************************************************!*\
  !*** ./src/index/assets/trees/rvrbirch/overview.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"31ba4cb2c28310d924b4.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/rvrbirch/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sassafras/conefruit.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/sassafras/conefruit.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d60bdf4deafcb8a783c9.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sassafras/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sassafras/needleleaf.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/sassafras/needleleaf.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b5d4973854ed97914d5a.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sassafras/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sassafras/overview.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/sassafras/overview.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b16d86de15e5c1a9d931.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sassafras/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/scarletoak/conefruit.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/scarletoak/conefruit.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8122e9de01873e63c7e8.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/scarletoak/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/scarletoak/needleleaf.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/scarletoak/needleleaf.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a613b7d62b24da3d2286.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/scarletoak/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/scarletoak/overview.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/scarletoak/overview.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"934739d95fe745230616.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/scarletoak/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/slipperyelm/conefruit.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/slipperyelm/conefruit.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0e8076f7fc9382c17ef4.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/slipperyelm/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/slipperyelm/needleleaf.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/slipperyelm/needleleaf.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"61ae3978c6b98c3b9582.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/slipperyelm/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/slipperyelm/overview.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/slipperyelm/overview.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"63dad13d14b1b8c83784.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/slipperyelm/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/southerncatalpa/conefruit.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/southerncatalpa/conefruit.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"09d9c56e9e446283dbb9.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/southerncatalpa/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/southerncatalpa/needleleaf.jpg":
/*!***************************************************************!*\
  !*** ./src/index/assets/trees/southerncatalpa/needleleaf.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"847dcd6a08ad82ca4389.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/southerncatalpa/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/southerncatalpa/overview.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/southerncatalpa/overview.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e7a39e935c33e3102d07.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/southerncatalpa/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/southernredoak/conefruit.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/southernredoak/conefruit.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d06b3f4cfe2ff6236d98.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/southernredoak/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/southernredoak/needleleaf.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/southernredoak/needleleaf.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"23cc5d47a43939272e14.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/southernredoak/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/southernredoak/overview.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/southernredoak/overview.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c6caa7f2b563fd808262.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/southernredoak/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sycamore/conefruit.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/sycamore/conefruit.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"007a207ed0445c6bcbf2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sycamore/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sycamore/needleleaf.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/sycamore/needleleaf.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5b83a550e8873adba72c.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sycamore/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sycamore/overview.jpg":
/*!******************************************************!*\
  !*** ./src/index/assets/trees/sycamore/overview.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6b34a31891ecf6b47b0e.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sycamore/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/tblmtnpine/conefruit.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/tblmtnpine/conefruit.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"93c7de92df952ecf0424.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/tblmtnpine/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/tblmtnpine/needleleaf.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/tblmtnpine/needleleaf.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"17a190e3e789a72ba918.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/tblmtnpine/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/tblmtnpine/overview.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/tblmtnpine/overview.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cc651d5692f1bdd2c16f.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/tblmtnpine/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/tuliptree/conefruit.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/tuliptree/conefruit.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"834afeeb751d557cfb0b.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/tuliptree/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/tuliptree/needleleaf.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/tuliptree/needleleaf.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b94ab369c8f3317ba6d7.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/tuliptree/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/tuliptree/overview.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/tuliptree/overview.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3442cdd24ef65197f833.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/tuliptree/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/virginiapine/conefruit.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/virginiapine/conefruit.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"82632456ec54c5d16acd.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/virginiapine/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/virginiapine/needleleaf.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/virginiapine/needleleaf.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e71b90a1f985dd0e8a97.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/virginiapine/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/virginiapine/overview.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/virginiapine/overview.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b2438f05bfc0e7c0ab73.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/virginiapine/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/whiteoak/conefruit.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/whiteoak/conefruit.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a75b7ea67a5b20155c9c.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/whiteoak/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/whiteoak/needleleaf.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/whiteoak/needleleaf.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9f7c7c17df3454b506d7.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/whiteoak/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/whiteoak/overview.jpg":
/*!******************************************************!*\
  !*** ./src/index/assets/trees/whiteoak/overview.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fc95200e4c2c436f69ea.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/whiteoak/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/whitepine/conefruit.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/whitepine/conefruit.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"de234476d9661651bd2f.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/whitepine/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/whitepine/needleleaf.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/whitepine/needleleaf.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"50f4b737de36f66209d6.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/whitepine/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/whitepine/overview.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/whitepine/overview.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ef187cb71b80ba61190d.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/whitepine/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/wingedelm/conefruit.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/wingedelm/conefruit.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f1dfe450655fee4eda4e.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/wingedelm/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/wingedelm/needleleaf.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/wingedelm/needleleaf.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"880c6a01da8ddde61221.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/wingedelm/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/wingedelm/overview.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/wingedelm/overview.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3ba85cb0f61d70fea8b8.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/wingedelm/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/ylwbuckeye/conefruit.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/ylwbuckeye/conefruit.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"219ae1c3638dc9696ff4.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/ylwbuckeye/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/ylwbuckeye/needleleaf.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/ylwbuckeye/needleleaf.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8f0b3004f29a3adbb3f5.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/ylwbuckeye/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/ylwbuckeye/overview.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/ylwbuckeye/overview.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"48563fabf67f68fd0716.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/ylwbuckeye/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/attributions.json":
/*!********************************************!*\
  !*** ./src/index/assets/attributions.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"Icon\":{\"MenuIcon\":\"https://icons8.com/icon/vNkcTvQx93Sj/hamburger-menu\"},\"American Hornbeam\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:A30-1-Carpinus_caroliniana_(American_Hornbeam).JPG\",\"Fruit\":\"https://naturalresources.extension.iastate.edu/files/resize/encyclopedia/images/blue_beech4-400x300.jpg\",\"Leaf\":\"http://www.tree-guide.com/images/styles/600x450-copy_/public/american-hornbeam-leaf.jpg?itok=HmRmJyVz\"},\"Eastern Hemlock\":{\"Overview\":\"https://www.coniferousforest.com/wp-content/uploads/2016/06/Eastern-Hemlock.jpg\",\"Cone\":\"https://www.michigan.gov/-/media/Project/Websites/invasives/Documents/ID/Disease/hemlock_tree_ID_brochure.pdf?rev=a2d4ca0c46394725ba579b10ddf08122\",\"Needle\":\"https://ohiodnr.gov/wps/wcm/connect/gov/73f56108-818a-401c-a602-c316b5fc23e2/hmlck_est_lf3_lg.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_M1HGGIK0N0JO00QO9DDDDM3000-73f56108-818a-401c-a602-c316b5fc23e2-ne0WN-b\"},\"Eastern Red Cedar\":{\"Overview\":\"https://www.wildflower.org/gallery/result.php?id_image=41213\",\"Cone\":\"http://www.bio.brandeis.edu/fieldbio/pkenlan/HTML/Cupressaceae/juniperus_virginiana.html\",\"Needle\":\"http://www.bio.brandeis.edu/fieldbio/pkenlan/HTML/Cupressaceae/juniperus_virginiana.html\"},\"Flowering Dogwood\":{\"Overview\":\"https://www.peakpx.com/624959/dogwood-nature-tree-spring-green-tree-grass\",\"Fruit\":\"https://www.flickr.com/photos/carthamus/49370042316\",\"Leaf\":\"https://www.flickr.com/photos/texaseagle/5649245395\"},\"Fraser Fir\":{\"Overview\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Fraser_Fir.JPG/1024px-Fraser_Fir.JPG\",\"Cone\":\"https://commons.wikimedia.org/wiki/File:Abies_fraseri_cone.jpg\",\"Needle\":\"https://commons.wikimedia.org/wiki/File:Abies_fraseri_foliage.jpg\"},\"Northern Red Oak\":{\"Overview\":\"https://www.flickr.com/photos/treegrow/31086850246\",\"Fruit\":\"https://commons.wikimedia.org/wiki/File:Quercus_rubra_acorn_J1.jpg\",\"Leaf\":\"https://www.flickr.com/photos/chesbayprogram/37994963516\"},\"Red Spruce\":{\"Overview\":\"https://www.wncoutdoors.info/red-spruce-along-fs-482b/\",\"Cone\":\"https://commons.wikimedia.org/wiki/File:Picea_rubens_UGA.jpg\",\"Leaf\":\"https://pixnio.com/flora-plants/trees/conifer-spruce-trees-pictures/red-spruce-sprouts-leaves#\"},\"River Birch\":{\"Overview\":\"https://www.flickr.com/photos/fairfaxcounty/16775866715/\",\"Fruit\":\"https://www.flickr.com/photos/138014579@N08/23420494494\",\"Leaf\":\"https://www.flickr.com/photos/jsjgeology/27880297709\"},\"Table Mountain Pine\":{\"Overview\":\"http://www.cirrusimage.com/tree_table_mountain_pine.htm\",\"Cone\":\"http://www.cirrusimage.com/tree_table_mountain_pine.htm\",\"Needle\":\"https://www.invasive.org/browse/detail.cfm?imgnum=1342085\"},\"Tulip Tree\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:Liriodendron_tulipifera_%28arbre%29_-_Laeken.JPG\",\"Fruit\":\"https://picryl.com/media/blooming-tulip-poplar-liriodendron-tulipifera-on-rock-creek\",\"Leaf\":\"https://www.flickr.com/photos/stanzim/48332029362\"},\"White Pine\":{\"Overview\":\"https://www.flickr.com/photos/jsjgeology/39411252702\",\"Cone\":\"https://commons.wikimedia.org/wiki/File:2015-08-07_17_35_09_Eastern_White_Pine_cone_in_the_Franklin_Farm_section_of_Oak_Hill,_Virginia.jpg\",\"Needle\":\"https://www.flickr.com/photos/dendroica/8322433913\"},\"Yellow Buckeye\":{\"Overview\":\"https://www.flickr.com/photos/aliarda/49875523873\",\"Fruit\":\"https://mlbs.virginia.edu/sites/mlbs.virginia.edu/files/Buckeye%20Fruit%20N5.jpg\",\"Leaf\":\"https://www.flickr.com/photos/blueridgekitties/4654625449\"},\"Southern Catalpa\":{\"Overview\":\"https://www.flickr.com/photos/hornbeam/29531021158\",\"Fruit\":\"https://commons.wikimedia.org/wiki/File:Catalpa_bignoioides_004.JPG\",\"Leaf\":\"http://www.tree-guide.com/images/styles/600x450-copy_/public/indian-bean-tree-leaf-underside.jpg?itok=VYY6Umak\"},\"American Basswood\":{\"Overview\":\"https://picryl.com/media/maryland-state-champion-basswood-tree-98c5b4\",\"Fruit\":\"https://www.ontario.ca/page/basswood\",\"Leaf\":\"https://www.flickr.com/photos/evelynfitzgerald/3910571657\"},\"Black Cherry\":{\"Overview\":\"https://www.flickr.com/photos/nicholas_t/8736528289\",\"Fruit\":\"https://www.flickr.com/photos/38514062@N03/50017627587\",\"Leaf\":\"https://commons.wikimedia.org/wiki/File:Prunus_serotina_kz5.jpg\"},\"Slippery Elm\":{\"Overview\":\"https://www.flickr.com/photos/138425397@N05/52086258427\",\"Fruit\":\"https://commons.wikimedia.org/wiki/File:Ulmus_rubra_15-p.bot-ulmu.rubra-10.jpg\",\"Leaf\":\"https://www.flickr.com/photos/natureserve/17096546967\"},\"Winged Elm\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:Garden_of_the_Gods_-_Winged_Elm,_Wahoo_%28Ulmus_alata%29_-_Flickr_-_Jay_Sturner_%281%29.jpg\",\"Fruit\":\"https://www.flickr.com/photos/carthamus/2938233103\",\"Leaf\":\"https://commons.wikimedia.org/wiki/File:Ulmus_alata_071007c.jpg\"},\"Mountain Ash\":{\"Overview\":\"https://www.flickr.com/photos/blueridgekitties/6116641888\",\"Fruit\":\"https://commons.wikimedia.org/wiki/File:Western_mountain_ash_%28Sorbus_sitchensis%29_--_leaves_and_fruit.JPG\",\"Leaf\":\"https://commons.wikimedia.org/wiki/File:Sorbus_americana,_Whitefish_Island_2.JPG\"},\"Sassafras\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:Two_Old_Sassafras_Trees,_Green-Wood_Cemetery,_Brooklyn,_NY_-_September_19,_2015.jpg\",\"Fruit\":\"https://commons.wikimedia.org/wiki/File:Sassafras_albidum_seed.JPG\",\"Leaf\":\"https://commons.wikimedia.org/wiki/File:Sassafras_Leaves_June_Nbg_%28261691941%29.jpeg\"},\"Black Locust\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:Black_locust,_Isham_Park.jpg\",\"Fruit\":\"https://commons.wikimedia.org/wiki/File:Black_locust_robinia_pseudoacacia_172.JPG\",\"Leaf\":\"https://www.flickr.com/photos/mr_t_in_dc/7086034673\"},\"Post Oak\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:Houston_campsite_oak.jpg\",\"Fruit\":\"https://commons.wikimedia.org/wiki/File:Quercus_stellata.jpg\",\"Leaf\":\"https://www.flickr.com/photos/9428166@N03/4050881097\"},\"Chestnut Oak\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:Chestnut_Oak_in_Weiser_State_Forest.JPG\",\"Fruit\":\"https://www.flickr.com/photos/natureserve/13902098993\",\"Leaf\":\"https://www.flickr.com/photos/dendroica/14237208176\"},\"Blackjack Oak\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:Quercus_marilandica_Shawnee_National_Forest_1.jpg\",\"Fruit\":\"https://www.flickr.com/photos/brucekirchoff/19534640904/\",\"Leaf\":\"https://www.flickr.com/photos/brucekirchoff/24206701125/\"},\"Southern Red Oak\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:Quercus_falcata_in_Marengo_Alabama_USA.JPG\",\"Fruit\":\"https://www.flickr.com/photos/usgsbiml/10063034416\",\"Leaf\":\"https://www.flickr.com/photos/53817483@N00/2798875120\"},\"Scarlet Oak\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:2014-11-02_14_15_16_Scarlet_Oak_foliage_during_autumn_on_Hunters_Ridge_Drive_in_Hopewell_Township,_New_Jersey.jpg\",\"Fruit\":\"https://commons.wikimedia.org/wiki/File:Quercus_coccinea-Acorn_R_30_l_edit_%2823601803314%29.jpg\",\"Leaf\":\"https://www.flickr.com/photos/evelynfitzgerald/6706416599\"},\"White Oak\":{\"Overview\":\"https://www.flickr.com/photos/versicolor/4525056160\",\"Fruit\":\"https://commons.wikimedia.org/wiki/File:Quercus_alba_2-acorn_branch.jpg\",\"Leaf\":\"https://commons.wikimedia.org/wiki/File:Quercus_alba_22zz.jpg\"},\"Fire Cherry\":{\"Overview\":\"https://www.flickr.com/photos/blueridgekitties/50499075018\",\"Fruit\":\"https://commons.wikimedia.org/wiki/File:Prunus_pensylvanica_15-p.bot-prunu.pens-21.jpg\",\"Leaf\":\"https://commons.wikimedia.org/wiki/File:Prunus_pensylvanica_3_%285097486573%29.jpg\"},\"Sycamore\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:Sycamore_Platanus_occidentalis.jpg\",\"Fruit\":\"https://commons.wikimedia.org/wiki/File:American_sycamore_%28Platanus_occidentalis%29.jpg\",\"Leaf\":\"https://www.flickr.com/photos/treegrow/30851983355\"},\"Virginia Pine\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:2013-05-10_11_01_36_Virginia_Pine_along_the_Mount_Misery_Trail_in_Brendan_T._Byrne_State_Forest,_New_Jersey.jpg\",\"Cone\":\"https://commons.wikimedia.org/wiki/File:Pinus_virginiana_Scrub_Pine_Cone_1600px.jpg\",\"Needle\":\"https://www.flickr.com/photos/jwolf312/2483661103\"},\"Loblolly Pine\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:Pinus_taeda_loblolly_pine_large_crown.jpg\",\"Cone\":\"https://commons.wikimedia.org/wiki/File:Pinus_taeda_cones.jpg\",\"Needle\":\"https://commons.wikimedia.org/wiki/File:Pinus_taeda,_b,_naaldbundels.jpg\"},\"Pitch Pine\":{\"Overview\":\"https://commons.wikimedia.org/wiki/File:Pinus_rigida_in_the_Morris_Arboretum.jpg\",\"Cone\":\"https://commons.wikimedia.org/wiki/File:Pinus_rigida_cone_Poland.jpg\",\"Needle\":\"https://www.flickr.com/photos/9428166@N03/3296538530\"}}');\n\n//# sourceURL=webpack://webpack/./src/index/assets/attributions.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-cd547c"], () => (__webpack_require__("./src/index/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;