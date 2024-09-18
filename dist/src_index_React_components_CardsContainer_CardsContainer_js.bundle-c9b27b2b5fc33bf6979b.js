/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["src_index_React_components_CardsContainer_CardsContainer_js"],{

/***/ "./src/index/React/components/CardsContainer/Card/Card.js":
/*!****************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/Card/Card.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.css */ \"./src/index/React/components/CardsContainer/Card/card.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable */ \"./node_modules/react-swipeable/es/index.js\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n// Individual card to contain tree pics and names\n\n// ###################################\n// Imports\n// ###################################\n\n\n\n\nfunction Card(props) {\n  // Props:\n  // props.treeImgs.conefruit\n  // props.treeImgs.overview\n  // props.treeImgs.needleleaf\n  // props.treeImgs.name\n\n  var handlers = (0,react_swipeable__WEBPACK_IMPORTED_MODULE_2__.useSwipeable)({\n    delta: 10,\n    onSwipedRight: props.handleRightSwipe,\n    onSwiping: props.handleSwiping,\n    onTouchEndOrOnMouseUp: props.handleUp,\n    trackMouse: true\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", _extends({}, handlers, {\n    className: 'Card ' + props.treeImgs.catName\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"imgsWrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"imgFrame overviewFrame\",\n    onClick: props.handleCardClick.bind(this, props.treeImgs.overview, props.treeImgs.catName, 'overviewImg')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    onLoad: props.reportImageLoaded,\n    draggable: \"false\",\n    className: \"overviewImg treeImg\",\n    src: props.treeImgs.overview\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"imgFrame coneFruitFrame\",\n    onClick: props.handleCardClick.bind(this, props.treeImgs.conefruit, props.treeImgs.catName, 'coneFruitImg')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    onLoad: props.reportImageLoaded,\n    draggable: \"false\",\n    className: \"coneFruitImg treeImg\",\n    src: props.treeImgs.conefruit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    draggable: \"false\",\n    className: \"imgFrame needleLeafFrame\",\n    onClick: props.handleCardClick.bind(this, props.treeImgs.needleleaf, props.treeImgs.catName, 'needleLeafImg')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    onLoad: props.reportImageLoaded,\n    draggable: \"false\",\n    className: \"needleLeafImg treeImg\",\n    src: props.treeImgs.needleleaf\n  }))));\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/Card/Card.js?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/CardsContainer.js":
/*!*********************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/CardsContainer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsContainer\": () => (/* binding */ CardsContainer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SelectionResultSplash_SelectionResultSplash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectionResultSplash/SelectionResultSplash.js */ \"./src/index/React/components/CardsContainer/SelectionResultSplash/SelectionResultSplash.js\");\n/* harmony import */ var _EndCard_EndCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndCard/EndCard.js */ \"./src/index/React/components/CardsContainer/EndCard/EndCard.js\");\n/* harmony import */ var _treeImageHandling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../treeImageHandling.js */ \"./src/index/treeImageHandling.js\");\n/* harmony import */ var _generateCards_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateCards.js */ \"./src/index/React/components/CardsContainer/generateCards.js\");\n/* harmony import */ var _Modal_Modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal/Modal.js */ \"./src/index/React/components/CardsContainer/Modal/Modal.js\");\n/* harmony import */ var _cardscontainer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cardscontainer.css */ \"./src/index/React/components/CardsContainer/cardscontainer.css\");\n/* harmony import */ var _LoadingBar_LoadingBar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoadingBar/LoadingBar.js */ \"./src/index/React/components/CardsContainer/LoadingBar/LoadingBar.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n// Container for card components\n\n\n\n\n\n\n\n\n\nfunction CardsContainer(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_treeImageHandling_js__WEBPACK_IMPORTED_MODULE_3__.getTrees)()),\n    _useState2 = _slicedToArray(_useState, 2),\n    treesImgs = _useState2[0],\n    setTreesImgs = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_generateCards_js__WEBPACK_IMPORTED_MODULE_4__.generateCardsArray)(treesImgs, handleCardClick, handleRightSwipe, handleSwiping, handleUp, reportImageLoaded)),\n    _useState4 = _slicedToArray(_useState3, 2),\n    cards = _useState4[0],\n    setCards = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cards),\n    _useState6 = _slicedToArray(_useState5, 2),\n    ongoingCards = _useState6[0],\n    setOngoingCards = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState8 = _slicedToArray(_useState7, 2),\n    cardsToDisplay = _useState8[0],\n    setCardsToDisplay = _useState8[1];\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState10 = _slicedToArray(_useState9, 2),\n    correctCard = _useState10[0],\n    setCorrectCard = _useState10[1];\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState12 = _slicedToArray(_useState11, 2),\n    modal = _useState12[0],\n    setModal = _useState12[1];\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState14 = _slicedToArray(_useState13, 2),\n    selection = _useState14[0],\n    setSelection = _useState14[1];\n  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState16 = _slicedToArray(_useState15, 2),\n    rightAnswers = _useState16[0],\n    setRightAnswers = _useState16[1];\n  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState18 = _slicedToArray(_useState17, 2),\n    complete = _useState18[0],\n    setComplete = _useState18[1];\n  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState20 = _slicedToArray(_useState19, 2),\n    content = _useState20[0],\n    setContent = _useState20[1];\n  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState22 = _slicedToArray(_useState21, 2),\n    imagesLoaded = _useState22[0],\n    setImagesLoaded = _useState22[1];\n  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState24 = _slicedToArray(_useState23, 2),\n    loadingBar = _useState24[0],\n    setLoadingBar = _useState24[1];\n  var isSwiping = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n  var cardsContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, cardsToDisplay[0], cardsToDisplay[1], cardsToDisplay[2], modal);\n\n  // == LISTENERS\n\n  // Images loaded counter\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // All images loaded\n    if (imagesLoaded === 9) {\n      var cardsContainerDom = document.querySelector('.cardsContainer');\n      cardsContainerDom.style.display = 'block';\n      setLoadingBar('');\n    } else {\n      var _cardsContainerDom = document.querySelector('.cardsContainer');\n      _cardsContainerDom.style.display = 'none';\n      setLoadingBar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LoadingBar_LoadingBar_js__WEBPACK_IMPORTED_MODULE_7__.LoadingBar, null));\n    }\n  }, [imagesLoaded]);\n\n  // On Mount\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    newTurn();\n  }, []);\n\n  // On settings total cards\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    props.setTotalSlides(cards.length);\n  }, [cards]);\n\n  // On selection change\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (selection) {\n      if (isSelectionCorrect(correctCard.key, reactKeyFromElement(selection))) {\n        setRightAnswers(function () {\n          return rightAnswers + 1;\n        });\n        setSelection('');\n        props.setTargetTree('Correct!');\n        selectionResultSplash('correct');\n      } else {\n        setSelection('');\n        props.setTargetTree('Oops!');\n        selectionResultSplash('incorrect');\n      }\n      ;\n    }\n  }, [selection]);\n\n  // On complete change\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (complete) {\n      props.setTargetTree('Congrats!');\n      props.setSlideNumber(cards.length);\n      setImagesLoaded(9);\n      setContent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EndCard_EndCard_js__WEBPACK_IMPORTED_MODULE_2__.EndCard, {\n        resetGame: props.resetGame,\n        rightAnswers: rightAnswers,\n        length: cards.length\n      }));\n    } else {\n      setContent(cardsContent);\n    }\n  }, [complete, cardsToDisplay, modal]);\n\n  // == FUNCTIONS\n\n  // Increment images loaded counter \n  function reportImageLoaded() {\n    setImagesLoaded(function (imagesLoaded) {\n      return imagesLoaded + 1;\n    });\n  }\n  function isSelectionCorrect(correctKey, chosenKey) {\n    if (correctKey === chosenKey) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  function selectionResultSplash(result) {\n    setContent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SelectionResultSplash_SelectionResultSplash_js__WEBPACK_IMPORTED_MODULE_1__.SelectionResultSplash, {\n      newTurn: newTurn,\n      result: result,\n      correctCard: correctCard,\n      selection: cardFromReactKey(reactKeyFromElement(selection))\n    }));\n  }\n  function newTurn() {\n    // Reset loaded images counter\n    setImagesLoaded(0);\n    props.setSlideNumber(function () {\n      return props.slideNumber + 1;\n    });\n    setContent(cardsContent);\n    if (ongoingCards.length > 0) {\n      var shuffleArray = function shuffleArray(array) {\n        var resultArray = [];\n        var possibleIndexes = [];\n        for (var _i2 = 0; _i2 < array.length; _i2++) {\n          possibleIndexes.push(_i2);\n        }\n        array.forEach(function (element) {\n          var possibleIndexesRandomIndex = getRandomIndex(possibleIndexes);\n          var randomIndex = possibleIndexes[possibleIndexesRandomIndex];\n          resultArray[randomIndex] = element;\n          possibleIndexes.splice(possibleIndexesRandomIndex, 1);\n        });\n        return resultArray;\n      };\n      var getRandomIndex = function getRandomIndex(array) {\n        var result = Math.floor(Math.random() * array.length);\n        return result;\n      };\n      var removeCardFromArray = function removeCardFromArray(cardToBeRemoved, array) {\n        var result = array.filter(function (currentCard) {\n          return !(currentCard === cardToBeRemoved);\n        });\n        return result;\n      };\n      // Determine new correct card and set message\n      var currentCards = ongoingCards;\n      var currentCorrectCard = currentCards[getRandomIndex(currentCards)];\n      props.setTargetTree(currentCorrectCard.props.treeImgs.name);\n      setCorrectCard(currentCorrectCard);\n\n      // Remove correct card from current cards, and update to ongoingCards\n      currentCards = removeCardFromArray(currentCorrectCard, currentCards);\n\n      // If there are no more choices for a correct card, mark the game as completed\n      if (!currentCards) {\n        setComplete(true);\n      }\n      setOngoingCards(currentCards);\n\n      // Generate card choices\n      var cardChoices = [currentCorrectCard];\n      var choicesLeft = removeCardFromArray(currentCorrectCard, cards);\n\n      // Wrong choices\n      for (var i = 1; i < 3; i++) {\n        var wrongChoiceIndex = getRandomIndex(choicesLeft);\n        cardChoices.push(choicesLeft[wrongChoiceIndex]);\n        choicesLeft = removeCardFromArray(choicesLeft[wrongChoiceIndex], choicesLeft);\n      }\n      cardChoices = shuffleArray(cardChoices);\n      setCardsToDisplay(cardChoices);\n    } else {\n      setComplete(true);\n    }\n  }\n  function handleCardClick(treeImg, catName, treeClass) {\n    setModal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal_Modal_js__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n      treeImg: treeImg,\n      catName: catName,\n      treeClass: treeClass,\n      handleModalXClick: handleModalXClick\n    }));\n  }\n  function handleModalXClick() {\n    setModal('');\n  }\n  function handleRightSwipe() {}\n  function handleSwiping(event) {\n    if (!event.event.target) {\n      return;\n    }\n    var card = getCardFromTarget(event.event.target);\n    if (!card) {\n      return;\n    }\n\n    // Get child image frames and disable pointer events\n    var imgFrames = card.querySelectorAll('.imgFrame');\n    imgFrames.forEach(function (imgFrame) {\n      imgFrame.style.pointerEvents = 'none';\n    });\n    if (!isSwiping.current) {\n      isSwiping.current = true;\n    }\n\n    // Move card with swipe\n    if (event.deltaX > 0) {\n      card.style.left = event.deltaX + 'px';\n    }\n    if (event.deltaX > 100) {\n      card.style.backgroundColor = 'green';\n    } else {\n      card.style.backgroundColor = 'beige';\n    }\n  }\n  function handleUp(event) {\n    if (!event.event.target) {\n      return;\n    }\n    var card = getCardFromTarget(event.event.target);\n    if (!card) {\n      return;\n    }\n    // Get child image frames and enable pointer events\n    if (card && \"classList\" in card) {\n      var imgFrames = card.querySelectorAll('.imgFrame');\n      imgFrames.forEach(function (imgFrame) {\n        imgFrame.style.pointerEvents = 'all';\n      });\n    }\n\n    // If card position is in the desired range, register a confirm\n    var cardPosition = getComputedStyle(card).left.split('px')[0];\n    if (cardPosition > 100) {\n      // Check for correct selection\n      setSelection(card);\n    }\n\n    // Reset Card position\n    card.style.left = '0px';\n    card.style.backgroundColor = 'beige';\n  }\n  function getCardFromTarget(target) {\n    if (target) {\n      if (\"classList\" in target && target.classList.contains('Card')) {\n        return target;\n      } else {\n        return getCardFromTarget(target.parentElement);\n      }\n    }\n  }\n  function reactKeyFromElement(element) {\n    var key = Object.keys(element).find(function (key) {\n      return key.startsWith('__reactFiber');\n    });\n    return element[key][\"return\"].key;\n  }\n  function cardFromReactKey(key) {\n    var result = cards.find(function (card) {\n      return card.key === key;\n    });\n    return result || 'not found';\n  }\n\n  // ==RENDER \n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"cardsContainer\"\n  }, content), loadingBar);\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/CardsContainer.js?");

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

/***/ "./src/index/treeImageHandling.js":
/*!****************************************!*\
  !*** ./src/index/treeImageHandling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTrees\": () => (/* binding */ getTrees)\n/* harmony export */ });\n// Import images and assign to object\nfunction getTrees() {\n  var trees = {};\n  var treesImports = __webpack_require__(\"./src/index/assets/trees sync recursive \\\\.jpg$\");\n  treesImports.keys().forEach(function (key) {\n    // parse filename to category name and type name\n    var category = key.split('/')[1];\n    var type = key.split('/')[2].split('.')[0];\n\n    // if category has not been created, then create it\n    if (!trees.hasOwnProperty(category)) trees[category] = {};\n    trees[category][type] = treesImports(key);\n\n    // Get tree name from category name and assign to object\n    trees[category].name = getTreeName(category);\n    trees[category].catName = category;\n    function getTreeName(category) {\n      switch (category) {\n        default:\n          return 'Set tree name in \"treeImageHandling.js\"';\n        case 'americanhornbeam':\n          return 'American Hornbeam';\n        case 'easternhemlock':\n          return 'Eastern Hemlock';\n        case 'easternredcedar':\n          return 'Eastern Red Cedar';\n        case 'floweringdogwood':\n          return 'Flowering Dogwood';\n        case 'fraserfir':\n          return 'Fraser Fir';\n        case 'northernredoak':\n          return 'Northern Red Oak';\n        case 'redspruce':\n          return 'Red Spruce';\n        case 'rvrbirch':\n          return 'River Birch';\n        case 'tblmtnpine':\n          return 'Table Mountain Pine';\n        case 'tuliptree':\n          return 'Tulip Tree';\n        case 'whitepine':\n          return 'White Pine';\n        case 'ylwbuckeye':\n          return 'Yellow Buckeye';\n        case 'americanbasswood':\n          return 'American Basswood';\n        case 'southerncatalpa':\n          return 'Southern Catalpa';\n        case 'blackcherry':\n          return 'Black Cherry';\n        case 'slipperyelm':\n          return 'Slippery Elm';\n        case 'wingedelm':\n          return 'Winged Elm';\n        case 'mountainash':\n          return 'Mountain Ash';\n        case 'sassafras':\n          return 'Sassafras';\n        case 'blacklocust':\n          return 'Black Locust';\n        case 'postoak':\n          return 'Post Oak';\n        case 'chestnutoak':\n          return 'Chestnut Oak';\n        case 'blackjackoak':\n          return 'Blackjack Oak';\n        case 'southernredoak':\n          return 'Southern Red Oak';\n        case 'scarletoak':\n          return 'Scarlet Oak';\n        case 'whiteoak':\n          return 'White Oak';\n        case 'firecherry':\n          return 'Fire Cherry';\n        case 'sycamore':\n          return 'Sycamore';\n        case 'virginiapine':\n          return 'Virginia Pine';\n        case 'loblollypine':\n          return 'Loblolly Pine';\n        case 'pitchpine':\n          return 'Pitch Pine';\n        case 'shortleafpine':\n          return 'Shortleaf Pine';\n        case 'sweetgum':\n          return 'Sweet Gum';\n        case 'blackwalnut':\n          return 'Black Walnut';\n        case 'americanholly':\n          return 'American Holly';\n        case 'whiteash':\n          return 'White Ash';\n        case 'americanbeech':\n          return 'American Beech';\n        case 'hawthorn':\n          return 'Hawthorn';\n        case 'easternredbud':\n          return 'Eastern Redbud';\n        case 'americanchestnut':\n          return 'American Chestnut';\n        case 'sourwood':\n          return 'Sourwood';\n        case 'persimmon':\n          return 'Persimmon';\n        case 'blackhaw':\n          return 'Blackhaw';\n        case 'elderberry':\n          return 'Elderberry';\n        case 'tagalder':\n          return 'Tag Alder';\n        case 'mountainwinterberry':\n          return 'Mountain Winterberry';\n        case 'pawpaw':\n          return 'Pawpaw Tree';\n        case 'staghornsumac':\n          return 'Staghorn Sumac';\n        case 'mockernuthickory':\n          return 'Mockernut Hickory';\n        case 'shagbarkhickory':\n          return 'Shagbark Hickory';\n        case 'pignuthickory':\n          return 'Pignut Hickory';\n        case 'yellowbirch':\n          return 'Yellow Birch';\n        case 'mimosa':\n          return 'Mimosa';\n        case 'mountainmaple':\n          return 'Mountain Maple';\n        case 'sugarmaple':\n          return 'Sugar Maple';\n        case 'redmaple':\n          return 'Red Maple';\n        case 'stripedmaple':\n          return 'Striped Maple';\n        case 'carolinahemlock':\n          return 'Carolina Hemlock';\n        case 'umbrellamagnolia':\n          return 'Umbrella Magnolia';\n        case 'cucumbermagnolia':\n          return 'Cucumber Magnolia';\n      }\n    }\n  });\n  return trees;\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/treeImageHandling.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/Card/card.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/Card/card.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Stylesheet for Card.js */\\r\\n\\r\\n.Card {\\r\\n    height: 30%;\\r\\n    /* width: calc(var(--doc-width) * .9); */\\r\\n    box-shadow: 0 0 4px black;\\r\\n    background-color: beige ;\\r\\n    border-radius: 2px;\\r\\n    padding: .25rem;\\r\\n    overflow: hidden;\\r\\n    margin-bottom: 10px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.imgsWrapper {\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    gap: .5rem;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.treeImg {\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.imgFrame {\\r\\n    height: 100%;\\r\\n    width: 30%;\\r\\n    border-radius: 6px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    overflow: hidden;\\r\\n    position: relative;\\r\\n    box-shadow: 0 0 4px 0 black;\\r\\n    background-color: black;\\r\\n}\\r\\n\\r\\n/* AMERICAN HORNBEAM */\\r\\n.americanhornbeam .needleLeafImg, .americanhornbeam.needleLeafImg {\\r\\n    height: 80%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n/* EASTERN HEMLOCK */\\r\\n.easternhemlock .needleLeafImg, .easternhemlock.needleLeafImg {\\r\\n    height: 70%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n.easternhemlock.coneFruitImg {\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n/* EASTER RED CEDAR */\\r\\n.easternredcedar .overviewImg, .easternredcedar.overviewImg {\\r\\n    height: 110%;\\r\\n}\\r\\n\\r\\n.easternredcedar .needleLeafImg, .easternredcedar.needleLeafImg {\\r\\n    height: 90%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n/* FLOWERING DOGWOOD */\\r\\n.floweringdogwood .overviewImg {\\r\\n    height: 70%\\r\\n}\\r\\n\\r\\n.floweringdogwood.overviewImg {\\r\\n    height: 30% !important;\\r\\n}\\r\\n\\r\\n.floweringdogwood .coneFruitImg {\\r\\n    position: relative;\\r\\n    height: 80%;\\r\\n    transform: rotate(-.25turn) translate(0, calc(var(--doc-height) * .01));\\r\\n}\\r\\n\\r\\n.floweringdogwood.coneFruitImg {\\r\\n    position: relative;\\r\\n    transform: translate(calc(var(--doc-width) * .05), calc(var(--doc-height) * -.2)) rotate(-.25turn);\\r\\n}\\r\\n\\r\\n.floweringdogwood .needleLeafImg, .floweringdogwood.needleLeafImg {\\r\\n    height: 80%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n/* FRASER FIR */\\r\\n.fraserfir .needleLeafImg, .fraserfir.needleLeafImg {\\r\\n    height: 60%;\\r\\n}\\r\\n\\r\\n.fraserfir.overviewImg {\\r\\n    height: 30% !important;\\r\\n}\\r\\n\\r\\n/* RIVER BIRCH */\\r\\n.rvrbirch .needleLeafImg, .rvrbirch.needleLeafImg {\\r\\n    height: 70%;\\r\\n    transform: rotate(-.25turn);\\r\\n}\\r\\n\\r\\n/* TULIP TREE */\\r\\n.tuliptree .needleLeafImg, .tuliptree.needleLeafImg {\\r\\n    height: 70%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n/* WHITE PINE */\\r\\n.whitepine .needleLeafImg, .whitepine.needleLeafImg {\\r\\n    height: 75%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n.whitepine.overviewImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n\\r\\n/* YELLOW BUCKEYE */\\r\\n.ylwbuckeye .coneFruitImg, .ylwbuckeye.coneFruitImg {\\r\\n    height: 80%;\\r\\n}\\r\\n\\r\\n.ylwbuckeye.overviewImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n\\r\\n/* SOUTHERN CATALPA */\\r\\n.southerncatalpa .overviewImg {\\r\\n    height: 60%;\\r\\n}\\r\\n\\r\\n.southerncatalpa.overviewImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n\\r\\n.southerncatalpa .needleLeafImg, .southerncatalpa.needleLeafImg {\\r\\n    height: 80%;\\r\\n    transform: rotate(-.25turn);\\r\\n}\\r\\n\\r\\n/* AMERICAN BASSWOOD */\\r\\n.americanbasswood .overviewImg, .americanbasswood.overviewImg {\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n.americanbasswood .needleLeafImg, .americanbasswood.needleLeafImg {\\r\\n    height: 65%;\\r\\n}\\r\\n\\r\\n.americanbasswood .needleLeafFrame, .americanbasswood.needleLeafFrame {\\r\\n    background-color: white;\\r\\n}\\r\\n\\r\\n/* RED SPRUCE */\\r\\n.redspruce.overviewImg {\\r\\n    height: 40% !important;\\r\\n    position: relative;\\r\\n    top: calc(var(--doc-height) * .1)\\r\\n}\\r\\n\\r\\n/* TABLE MOUNTAIN PINE */\\r\\n.tblmtnpine .overviewImg {\\r\\n    height: 80%;\\r\\n}\\r\\n\\r\\n.tblmtnpine.overviewImg {\\r\\n    height: 40% !important;\\r\\n}\\r\\n\\r\\n/* Black Cherry */\\r\\n.blackcherry.needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n\\r\\n/* Slippery Elm */\\r\\n.slipperyelm .needleLeafImg, .slipperyelm.needleLeafImg {\\r\\n    transform: rotate(.5turn);\\r\\n}\\r\\n.slipperyelm.needleLeafImg {\\r\\n    height: 80%;\\r\\n}\\r\\n.slipperyelm .coneFruitImg, .slipperyelm.coneFruitImg {\\r\\n    height: 80%;\\r\\n}\\r\\n.slipperyelm .coneFruitFrame {\\r\\n    background-color: black;\\r\\n}\\r\\n\\r\\n/* Sassafras */\\r\\n.sassafras .needleLeafImg, .sassafras.needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n\\r\\n/* Black Locust */\\r\\n.blacklocust.needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n\\r\\n/* Post Oak */\\r\\n.postoak .overviewImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.postoak.needleLeafImg {\\r\\n    height: 70%;;\\r\\n}\\r\\n\\r\\n/* Chestnut Oak */\\r\\n.chestnutoak.needleLeafImg {\\r\\n    height: 60%;\\r\\n}\\r\\n\\r\\n/* Blackjack Oak */\\r\\n.blackjackoak.needleLeafImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.blackjackoak.overviewImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n\\r\\n/* Southern Red Oak */\\r\\n.southernredoak .coneFruitImg {\\r\\n    height: 50%;\\r\\n}\\r\\n.southernredoak.coneFruitImg {\\r\\n    height: 40%;\\r\\n}\\r\\n\\r\\n/* Scarlet Oak */\\r\\n.scarletoak.needleLeafImg {\\r\\n    height: 80%;\\r\\n}\\r\\n\\r\\n/* White Oak */\\r\\n.whiteoak .overviewImg {\\r\\n    height: 55%;\\r\\n    transform: translate(5%, 0);\\r\\n}\\r\\n.whiteoak.overviewImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n.whiteoak.coneFruitImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.whiteoak .needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.whiteoak.needleLeafImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n\\r\\n/* Sycamore */\\r\\n.sycamore .coneFruitImg, .sycamore.coneFruitImg {\\r\\n    height: 70%;\\r\\n    transform: translate(10%, 0);\\r\\n}\\r\\n.sycamore .needleLeafImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.sycamore.needleLeafImg {\\r\\n    height: 50%;\\r\\n}\\r\\n\\r\\n/* Virginia Pine */\\r\\n.virginiapine .coneFruitImg {\\r\\n    height: 80%;\\r\\n}\\r\\n.virginiapine.coneFruitImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.virginiapine.needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n\\r\\n/* Loblolly Pine */\\r\\n.loblollypine.overviewImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n.loblollypine.needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n\\r\\n/* Pitch Pine */\\r\\n.pitchpine.overviewImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n.pitchpine.coneFruitImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.pitchpine .needleLeafImg {\\r\\n    height: 80%;\\r\\n}\\r\\n.pitchpine.needleLeafImg {\\r\\n    height: 40% !important;\\r\\n}\\r\\n\\r\\n/* Shortleaf Pine */\\r\\n.shortleafpine .coneFruitImg {\\r\\n    height: 80%;\\r\\n}\\r\\n.shortleafpine.coneFruitImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n.shortleafpine.needleLeafImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n\\r\\n/* Sweet Gum */\\r\\n.sweetgum .needleLeafImg {\\r\\n    height: 90%;\\r\\n}\\r\\n.sweetgum.needleLeafImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n.sweetgum.coneFruitImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n\\r\\n/* White Ash */\\r\\n.whiteash.coneFruitImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n.whiteash .needleLeafImg {\\r\\n    height: 55%;\\r\\n}\\r\\n.whiteash.needleLeafImg {\\r\\n    height: 45%;\\r\\n}\\r\\n\\r\\n/* American Beech */\\r\\n.americanbeech .overviewImg {\\r\\n    height: 80%;\\r\\n}\\r\\n.americanbeech.overviewImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n.americanbeech .coneFruitImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.americanbeech.coneFruitImg {\\r\\n    height: 50%;\\r\\n}\\r\\n.americanbeech.needleLeafImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n\\r\\n/* Hawthorn */\\r\\n.hawthorn .coneFruitImg, .hawthorn.coneFruitImg {\\r\\n    height: 80%;\\r\\n}\\r\\n.hawthorn.needleLeafImg {\\r\\n    height: 55%;\\r\\n}\\r\\n\\r\\n/* Easter Redbud */\\r\\n.easternredbud .overviewImg {\\r\\n    height: 90%;\\r\\n    transform: translate(8%, 0);\\r\\n}\\r\\n.easternredbud.coneFruitImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n.easternredbud .needleLeafImg {\\r\\n    height: 80%;\\r\\n    transform: translate(-8%, 0);\\r\\n}\\r\\n.easternredbud.needleLeafImg {\\r\\n    height: 80% !important;\\r\\n    transform: translate(-8%, 0);\\r\\n}\\r\\n\\r\\n/* American Chestnut */\\r\\n.americanchestnut .overviewImg {\\r\\n    height: 90%;\\r\\n}\\r\\n.americanchestnut .coneFruitImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.americanchestnut.coneFruitImg {\\r\\n    height: 50%;\\r\\n}\\r\\n.americanchestnut .needleLeafImg {\\r\\n    height: 90%;\\r\\n}\\r\\n.americanchestnut.needleLeafImg {\\r\\n    height: 50%;\\r\\n}\\r\\n\\r\\n/* Sourwood */\\r\\n.sourwood .overviewImg {\\r\\n    height: 84%;\\r\\n}\\r\\n.sourwood.overviewImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n.sourwood .needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.sourwood.needleLeafImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n\\r\\n/* Persimmon */\\r\\n.persimmon .coneFruitImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.persimmon.coneFruitImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.persimmon.needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n\\r\\n/* Blackhaw */\\r\\n.blackhaw .overviewImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.blackhaw.overviewImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n.blackhaw .coneFruitImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.blackhaw.coneFruitImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n.blackhaw.needleLeafImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n\\r\\n/* Elderberry */\\r\\n.elderberry.needleLeafImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n\\r\\n/* Tag Alder */\\r\\n.tagalder.coneFruitImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n\\r\\n/* Mountain Winterberry */\\r\\n.mountainwinterberry .overviewImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.mountainwinterberry.overviewImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n\\r\\n/* Pawpaw Tree */\\r\\n.pawpaw .overviewImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.pawpaw.overviewImg {\\r\\n    height: 40% !important;\\r\\n}\\r\\n.pawpaw .coneFruitImg {\\r\\n    height: 50%;\\r\\n}\\r\\n.pawpaw.coneFruitImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n.pawpaw .needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.pawpaw.needleLeafImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n\\r\\n/* Staghorn Sumac */\\r\\n.staghornsumac .overviewImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.staghornsumac.overviewImg {\\r\\n    height: 40% !important;\\r\\n}\\r\\n.staghornsumac.coneFruitImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n.staghornsumac.needleLeafImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n\\r\\n/* Mockernut Hickory */\\r\\n.mockernuthickory .coneFruitImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.mockernuthickory.coneFruitImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n.mockernuthickory.needleLeafImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n\\r\\n/* Shagbark Hickory */\\r\\n.shagbarkhickory.coneFruitImg {\\r\\n    height: 80% !important;\\r\\n}\\r\\n.shagbarkhickory.needleLeafImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n\\r\\n/* Pignut Hickory */\\r\\n.pignuthickory .coneFruitImg {\\r\\n    height: 90%;\\r\\n}\\r\\n.pignuthickory.coneFruitImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n.pignuthickory .needleLeafImg {\\r\\n    height: 90%;\\r\\n}\\r\\n.pignuthickory.needleLeafImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n\\r\\n/* Yellow Birch */\\r\\n.yellowbirch.needleLeafImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n\\r\\n/* Mimosa */\\r\\n.mimosa.coneFruitImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n.mimosa.needleLeafImg {\\r\\n    height: 55% !important;\\r\\n}\\r\\n\\r\\n/* Mountain Maple */\\r\\n.mountainmaple.needleLeafImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n\\r\\n/* Sugar Maple */\\r\\n.sugarmaple.coneFruitImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n.sugarmaple.needleLeafImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n\\r\\n/* Red Maple */\\r\\n.redmaple.coneFruitImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n.redmaple.needleLeafImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n\\r\\n/* Carolina Hemlock */\\r\\n.carolinahemlock .needleLeafImg {\\r\\n    height: 70%;\\r\\n}\\r\\n.carolinahemlock.needleLeafImg {\\r\\n    height: 70% !important;\\r\\n}\\r\\n\\r\\n/* Umbrella Magnolia */\\r\\n.umbrellamagnolia .overviewImg {\\r\\n    height: 80%;\\r\\n}\\r\\n.umbrellamagnolia.overviewImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n.umbrellamagnolia.coneFruitImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n.umbrellamagnolia .needleLeafImg {\\r\\n    height: 50%;\\r\\n}\\r\\n.umbrellamagnolia.needleLeafImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n\\r\\n/* Cucumber Magnolia */\\r\\n.cucumbermagnolia .overviewImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.cucumbermagnolia.overviewImg {\\r\\n    height: 40% !important;\\r\\n}\\r\\n.cucumbermagnolia.coneFruitImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n.cucumbermagnolia .needleLeafImg {\\r\\n    height: 60%;\\r\\n}\\r\\n.cucumbermagnolia.needleLeafImg {\\r\\n    height: 50% !important;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/Card/card.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/EndCard/endcard.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/EndCard/endcard.css ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".EndCard {\\r\\n    height: 90%;\\r\\n    box-shadow: 0 0 4px black;\\r\\n    background-color: white ;\\r\\n    border-radius: 2px;\\r\\n    padding: .25rem;\\r\\n    overflow: hidden;\\r\\n    margin-bottom: 10px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.EndCard button {\\r\\n    position: absolute;\\r\\n    bottom: .25rem;\\r\\n    right: .25rem;\\r\\n    padding: .5rem 2rem;\\r\\n    font-size: 1rem;\\r\\n    border-radius: 6px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/EndCard/endcard.css?./node_modules/css-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n.staticCard {\\r\\n    height: 50% !important;\\r\\n    box-shadow: 0 0 4px black;\\r\\n    background-color: white ;\\r\\n    border-radius: 2px;\\r\\n    padding: .25rem;\\r\\n    overflow: hidden;\\r\\n    margin-bottom: 10px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.selectionResultsSplashHeader {\\r\\n    border-radius: 6px;\\r\\n    background-color: white;\\r\\n    padding: .25rem;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.selectionResultsSplashHeader.correct {\\r\\n    border: 2px solid green;\\r\\n}\\r\\n\\r\\n.selectionResultsSplashHeader.incorrect {\\r\\n    border: 2px solid red;\\r\\n}\\r\\n\\r\\n.selectionResultsSplashButton {\\r\\n    position: absolute;\\r\\n    bottom: .25rem;\\r\\n    right: .25rem;\\r\\n    padding: .5rem 2rem;\\r\\n    font-size: 1rem;\\r\\n    border-radius: 6px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/SelectionResultSplash/selectionresultsplash.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/cardscontainer.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/cardscontainer.css ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n.cardsContainer {\\r\\n    position: relative;\\r\\n    padding-inline: 1rem;\\r\\n    padding-top: .5rem;\\r\\n    --cards-container-height: calc(var(--doc-height)*.835);\\r\\n    height: var(--cards-container-height);\\r\\n    overflow: hidden;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/cardscontainer.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/index/assets/trees sync recursive \\.jpg$":
/*!*********************************************!*\
  !*** ./src/index/assets/trees/ sync \.jpg$ ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./americanbasswood/conefruit.jpg\": \"./src/index/assets/trees/americanbasswood/conefruit.jpg\",\n\t\"./americanbasswood/needleleaf.jpg\": \"./src/index/assets/trees/americanbasswood/needleleaf.jpg\",\n\t\"./americanbasswood/overview.jpg\": \"./src/index/assets/trees/americanbasswood/overview.jpg\",\n\t\"./americanbeech/conefruit.jpg\": \"./src/index/assets/trees/americanbeech/conefruit.jpg\",\n\t\"./americanbeech/needleleaf.jpg\": \"./src/index/assets/trees/americanbeech/needleleaf.jpg\",\n\t\"./americanbeech/overview.jpg\": \"./src/index/assets/trees/americanbeech/overview.jpg\",\n\t\"./americanchestnut/conefruit.jpg\": \"./src/index/assets/trees/americanchestnut/conefruit.jpg\",\n\t\"./americanchestnut/needleleaf.jpg\": \"./src/index/assets/trees/americanchestnut/needleleaf.jpg\",\n\t\"./americanchestnut/overview.jpg\": \"./src/index/assets/trees/americanchestnut/overview.jpg\",\n\t\"./americanholly/conefruit.jpg\": \"./src/index/assets/trees/americanholly/conefruit.jpg\",\n\t\"./americanholly/needleleaf.jpg\": \"./src/index/assets/trees/americanholly/needleleaf.jpg\",\n\t\"./americanholly/overview.jpg\": \"./src/index/assets/trees/americanholly/overview.jpg\",\n\t\"./americanhornbeam/conefruit.jpg\": \"./src/index/assets/trees/americanhornbeam/conefruit.jpg\",\n\t\"./americanhornbeam/needleleaf.jpg\": \"./src/index/assets/trees/americanhornbeam/needleleaf.jpg\",\n\t\"./americanhornbeam/overview.jpg\": \"./src/index/assets/trees/americanhornbeam/overview.jpg\",\n\t\"./blackcherry/conefruit.jpg\": \"./src/index/assets/trees/blackcherry/conefruit.jpg\",\n\t\"./blackcherry/needleleaf.jpg\": \"./src/index/assets/trees/blackcherry/needleleaf.jpg\",\n\t\"./blackcherry/overview.jpg\": \"./src/index/assets/trees/blackcherry/overview.jpg\",\n\t\"./blackhaw/conefruit.jpg\": \"./src/index/assets/trees/blackhaw/conefruit.jpg\",\n\t\"./blackhaw/needleleaf.jpg\": \"./src/index/assets/trees/blackhaw/needleleaf.jpg\",\n\t\"./blackhaw/overview.jpg\": \"./src/index/assets/trees/blackhaw/overview.jpg\",\n\t\"./blackjackoak/conefruit.jpg\": \"./src/index/assets/trees/blackjackoak/conefruit.jpg\",\n\t\"./blackjackoak/needleleaf.jpg\": \"./src/index/assets/trees/blackjackoak/needleleaf.jpg\",\n\t\"./blackjackoak/overview.jpg\": \"./src/index/assets/trees/blackjackoak/overview.jpg\",\n\t\"./blacklocust/conefruit.jpg\": \"./src/index/assets/trees/blacklocust/conefruit.jpg\",\n\t\"./blacklocust/needleleaf.jpg\": \"./src/index/assets/trees/blacklocust/needleleaf.jpg\",\n\t\"./blacklocust/overview.jpg\": \"./src/index/assets/trees/blacklocust/overview.jpg\",\n\t\"./blackwalnut/conefruit.jpg\": \"./src/index/assets/trees/blackwalnut/conefruit.jpg\",\n\t\"./blackwalnut/needleleaf.jpg\": \"./src/index/assets/trees/blackwalnut/needleleaf.jpg\",\n\t\"./blackwalnut/overview.jpg\": \"./src/index/assets/trees/blackwalnut/overview.jpg\",\n\t\"./carolinahemlock/conefruit.jpg\": \"./src/index/assets/trees/carolinahemlock/conefruit.jpg\",\n\t\"./carolinahemlock/needleleaf.jpg\": \"./src/index/assets/trees/carolinahemlock/needleleaf.jpg\",\n\t\"./carolinahemlock/overview.jpg\": \"./src/index/assets/trees/carolinahemlock/overview.jpg\",\n\t\"./chestnutoak/conefruit.jpg\": \"./src/index/assets/trees/chestnutoak/conefruit.jpg\",\n\t\"./chestnutoak/needleleaf.jpg\": \"./src/index/assets/trees/chestnutoak/needleleaf.jpg\",\n\t\"./chestnutoak/overview.jpg\": \"./src/index/assets/trees/chestnutoak/overview.jpg\",\n\t\"./cucumbermagnolia/conefruit.jpg\": \"./src/index/assets/trees/cucumbermagnolia/conefruit.jpg\",\n\t\"./cucumbermagnolia/needleleaf.jpg\": \"./src/index/assets/trees/cucumbermagnolia/needleleaf.jpg\",\n\t\"./cucumbermagnolia/overview.jpg\": \"./src/index/assets/trees/cucumbermagnolia/overview.jpg\",\n\t\"./easternhemlock/conefruit.jpg\": \"./src/index/assets/trees/easternhemlock/conefruit.jpg\",\n\t\"./easternhemlock/needleleaf.jpg\": \"./src/index/assets/trees/easternhemlock/needleleaf.jpg\",\n\t\"./easternhemlock/overview.jpg\": \"./src/index/assets/trees/easternhemlock/overview.jpg\",\n\t\"./easternredbud/conefruit.jpg\": \"./src/index/assets/trees/easternredbud/conefruit.jpg\",\n\t\"./easternredbud/needleleaf.jpg\": \"./src/index/assets/trees/easternredbud/needleleaf.jpg\",\n\t\"./easternredbud/overview.jpg\": \"./src/index/assets/trees/easternredbud/overview.jpg\",\n\t\"./easternredcedar/conefruit.jpg\": \"./src/index/assets/trees/easternredcedar/conefruit.jpg\",\n\t\"./easternredcedar/needleleaf.jpg\": \"./src/index/assets/trees/easternredcedar/needleleaf.jpg\",\n\t\"./easternredcedar/overview.jpg\": \"./src/index/assets/trees/easternredcedar/overview.jpg\",\n\t\"./elderberry/conefruit.jpg\": \"./src/index/assets/trees/elderberry/conefruit.jpg\",\n\t\"./elderberry/needleleaf.jpg\": \"./src/index/assets/trees/elderberry/needleleaf.jpg\",\n\t\"./elderberry/overview.jpg\": \"./src/index/assets/trees/elderberry/overview.jpg\",\n\t\"./firecherry/conefruit.jpg\": \"./src/index/assets/trees/firecherry/conefruit.jpg\",\n\t\"./firecherry/needleleaf.jpg\": \"./src/index/assets/trees/firecherry/needleleaf.jpg\",\n\t\"./firecherry/overview.jpg\": \"./src/index/assets/trees/firecherry/overview.jpg\",\n\t\"./floweringdogwood/conefruit.jpg\": \"./src/index/assets/trees/floweringdogwood/conefruit.jpg\",\n\t\"./floweringdogwood/needleleaf.jpg\": \"./src/index/assets/trees/floweringdogwood/needleleaf.jpg\",\n\t\"./floweringdogwood/overview.jpg\": \"./src/index/assets/trees/floweringdogwood/overview.jpg\",\n\t\"./fraserfir/conefruit.jpg\": \"./src/index/assets/trees/fraserfir/conefruit.jpg\",\n\t\"./fraserfir/needleleaf.jpg\": \"./src/index/assets/trees/fraserfir/needleleaf.jpg\",\n\t\"./fraserfir/overview.jpg\": \"./src/index/assets/trees/fraserfir/overview.jpg\",\n\t\"./hawthorn/conefruit.jpg\": \"./src/index/assets/trees/hawthorn/conefruit.jpg\",\n\t\"./hawthorn/needleleaf.jpg\": \"./src/index/assets/trees/hawthorn/needleleaf.jpg\",\n\t\"./hawthorn/overview.jpg\": \"./src/index/assets/trees/hawthorn/overview.jpg\",\n\t\"./loblollypine/conefruit.jpg\": \"./src/index/assets/trees/loblollypine/conefruit.jpg\",\n\t\"./loblollypine/needleleaf.jpg\": \"./src/index/assets/trees/loblollypine/needleleaf.jpg\",\n\t\"./loblollypine/overview.jpg\": \"./src/index/assets/trees/loblollypine/overview.jpg\",\n\t\"./mimosa/conefruit.jpg\": \"./src/index/assets/trees/mimosa/conefruit.jpg\",\n\t\"./mimosa/needleleaf.jpg\": \"./src/index/assets/trees/mimosa/needleleaf.jpg\",\n\t\"./mimosa/overview.jpg\": \"./src/index/assets/trees/mimosa/overview.jpg\",\n\t\"./mockernuthickory/conefruit.jpg\": \"./src/index/assets/trees/mockernuthickory/conefruit.jpg\",\n\t\"./mockernuthickory/needleleaf.jpg\": \"./src/index/assets/trees/mockernuthickory/needleleaf.jpg\",\n\t\"./mockernuthickory/overview.jpg\": \"./src/index/assets/trees/mockernuthickory/overview.jpg\",\n\t\"./mountainash/conefruit.jpg\": \"./src/index/assets/trees/mountainash/conefruit.jpg\",\n\t\"./mountainash/needleleaf.jpg\": \"./src/index/assets/trees/mountainash/needleleaf.jpg\",\n\t\"./mountainash/overview.jpg\": \"./src/index/assets/trees/mountainash/overview.jpg\",\n\t\"./mountainmaple/conefruit.jpg\": \"./src/index/assets/trees/mountainmaple/conefruit.jpg\",\n\t\"./mountainmaple/needleleaf.jpg\": \"./src/index/assets/trees/mountainmaple/needleleaf.jpg\",\n\t\"./mountainmaple/overview.jpg\": \"./src/index/assets/trees/mountainmaple/overview.jpg\",\n\t\"./mountainwinterberry/conefruit.jpg\": \"./src/index/assets/trees/mountainwinterberry/conefruit.jpg\",\n\t\"./mountainwinterberry/needleleaf.jpg\": \"./src/index/assets/trees/mountainwinterberry/needleleaf.jpg\",\n\t\"./mountainwinterberry/overview.jpg\": \"./src/index/assets/trees/mountainwinterberry/overview.jpg\",\n\t\"./northernredoak/conefruit.jpg\": \"./src/index/assets/trees/northernredoak/conefruit.jpg\",\n\t\"./northernredoak/needleleaf.jpg\": \"./src/index/assets/trees/northernredoak/needleleaf.jpg\",\n\t\"./northernredoak/overview.jpg\": \"./src/index/assets/trees/northernredoak/overview.jpg\",\n\t\"./pawpaw/conefruit.jpg\": \"./src/index/assets/trees/pawpaw/conefruit.jpg\",\n\t\"./pawpaw/needleleaf.jpg\": \"./src/index/assets/trees/pawpaw/needleleaf.jpg\",\n\t\"./pawpaw/overview.jpg\": \"./src/index/assets/trees/pawpaw/overview.jpg\",\n\t\"./persimmon/conefruit.jpg\": \"./src/index/assets/trees/persimmon/conefruit.jpg\",\n\t\"./persimmon/needleleaf.jpg\": \"./src/index/assets/trees/persimmon/needleleaf.jpg\",\n\t\"./persimmon/overview.jpg\": \"./src/index/assets/trees/persimmon/overview.jpg\",\n\t\"./pignuthickory/conefruit.jpg\": \"./src/index/assets/trees/pignuthickory/conefruit.jpg\",\n\t\"./pignuthickory/needleleaf.jpg\": \"./src/index/assets/trees/pignuthickory/needleleaf.jpg\",\n\t\"./pignuthickory/overview.jpg\": \"./src/index/assets/trees/pignuthickory/overview.jpg\",\n\t\"./pitchpine/conefruit.jpg\": \"./src/index/assets/trees/pitchpine/conefruit.jpg\",\n\t\"./pitchpine/needleleaf.jpg\": \"./src/index/assets/trees/pitchpine/needleleaf.jpg\",\n\t\"./pitchpine/overview.jpg\": \"./src/index/assets/trees/pitchpine/overview.jpg\",\n\t\"./postoak/conefruit.jpg\": \"./src/index/assets/trees/postoak/conefruit.jpg\",\n\t\"./postoak/needleleaf.jpg\": \"./src/index/assets/trees/postoak/needleleaf.jpg\",\n\t\"./postoak/overview.jpg\": \"./src/index/assets/trees/postoak/overview.jpg\",\n\t\"./redmaple/conefruit.jpg\": \"./src/index/assets/trees/redmaple/conefruit.jpg\",\n\t\"./redmaple/needleleaf.jpg\": \"./src/index/assets/trees/redmaple/needleleaf.jpg\",\n\t\"./redmaple/overview.jpg\": \"./src/index/assets/trees/redmaple/overview.jpg\",\n\t\"./redspruce/conefruit.jpg\": \"./src/index/assets/trees/redspruce/conefruit.jpg\",\n\t\"./redspruce/needleleaf.jpg\": \"./src/index/assets/trees/redspruce/needleleaf.jpg\",\n\t\"./redspruce/overview.jpg\": \"./src/index/assets/trees/redspruce/overview.jpg\",\n\t\"./rvrbirch/conefruit.jpg\": \"./src/index/assets/trees/rvrbirch/conefruit.jpg\",\n\t\"./rvrbirch/needleleaf.jpg\": \"./src/index/assets/trees/rvrbirch/needleleaf.jpg\",\n\t\"./rvrbirch/overview.jpg\": \"./src/index/assets/trees/rvrbirch/overview.jpg\",\n\t\"./sassafras/conefruit.jpg\": \"./src/index/assets/trees/sassafras/conefruit.jpg\",\n\t\"./sassafras/needleleaf.jpg\": \"./src/index/assets/trees/sassafras/needleleaf.jpg\",\n\t\"./sassafras/overview.jpg\": \"./src/index/assets/trees/sassafras/overview.jpg\",\n\t\"./scarletoak/conefruit.jpg\": \"./src/index/assets/trees/scarletoak/conefruit.jpg\",\n\t\"./scarletoak/needleleaf.jpg\": \"./src/index/assets/trees/scarletoak/needleleaf.jpg\",\n\t\"./scarletoak/overview.jpg\": \"./src/index/assets/trees/scarletoak/overview.jpg\",\n\t\"./shagbarkhickory/conefruit.jpg\": \"./src/index/assets/trees/shagbarkhickory/conefruit.jpg\",\n\t\"./shagbarkhickory/needleleaf.jpg\": \"./src/index/assets/trees/shagbarkhickory/needleleaf.jpg\",\n\t\"./shagbarkhickory/overview.jpg\": \"./src/index/assets/trees/shagbarkhickory/overview.jpg\",\n\t\"./shortleafpine/conefruit.jpg\": \"./src/index/assets/trees/shortleafpine/conefruit.jpg\",\n\t\"./shortleafpine/needleleaf.jpg\": \"./src/index/assets/trees/shortleafpine/needleleaf.jpg\",\n\t\"./shortleafpine/overview.jpg\": \"./src/index/assets/trees/shortleafpine/overview.jpg\",\n\t\"./slipperyelm/conefruit.jpg\": \"./src/index/assets/trees/slipperyelm/conefruit.jpg\",\n\t\"./slipperyelm/needleleaf.jpg\": \"./src/index/assets/trees/slipperyelm/needleleaf.jpg\",\n\t\"./slipperyelm/overview.jpg\": \"./src/index/assets/trees/slipperyelm/overview.jpg\",\n\t\"./sourwood/conefruit.jpg\": \"./src/index/assets/trees/sourwood/conefruit.jpg\",\n\t\"./sourwood/needleleaf.jpg\": \"./src/index/assets/trees/sourwood/needleleaf.jpg\",\n\t\"./sourwood/overview.jpg\": \"./src/index/assets/trees/sourwood/overview.jpg\",\n\t\"./southerncatalpa/conefruit.jpg\": \"./src/index/assets/trees/southerncatalpa/conefruit.jpg\",\n\t\"./southerncatalpa/needleleaf.jpg\": \"./src/index/assets/trees/southerncatalpa/needleleaf.jpg\",\n\t\"./southerncatalpa/overview.jpg\": \"./src/index/assets/trees/southerncatalpa/overview.jpg\",\n\t\"./southernredoak/conefruit.jpg\": \"./src/index/assets/trees/southernredoak/conefruit.jpg\",\n\t\"./southernredoak/needleleaf.jpg\": \"./src/index/assets/trees/southernredoak/needleleaf.jpg\",\n\t\"./southernredoak/overview.jpg\": \"./src/index/assets/trees/southernredoak/overview.jpg\",\n\t\"./staghornsumac/conefruit.jpg\": \"./src/index/assets/trees/staghornsumac/conefruit.jpg\",\n\t\"./staghornsumac/needleleaf.jpg\": \"./src/index/assets/trees/staghornsumac/needleleaf.jpg\",\n\t\"./staghornsumac/overview.jpg\": \"./src/index/assets/trees/staghornsumac/overview.jpg\",\n\t\"./stripedmaple/conefruit.jpg\": \"./src/index/assets/trees/stripedmaple/conefruit.jpg\",\n\t\"./stripedmaple/needleleaf.jpg\": \"./src/index/assets/trees/stripedmaple/needleleaf.jpg\",\n\t\"./stripedmaple/overview.jpg\": \"./src/index/assets/trees/stripedmaple/overview.jpg\",\n\t\"./sugarmaple/conefruit.jpg\": \"./src/index/assets/trees/sugarmaple/conefruit.jpg\",\n\t\"./sugarmaple/needleleaf.jpg\": \"./src/index/assets/trees/sugarmaple/needleleaf.jpg\",\n\t\"./sugarmaple/overview.jpg\": \"./src/index/assets/trees/sugarmaple/overview.jpg\",\n\t\"./sweetgum/conefruit.jpg\": \"./src/index/assets/trees/sweetgum/conefruit.jpg\",\n\t\"./sweetgum/needleleaf.jpg\": \"./src/index/assets/trees/sweetgum/needleleaf.jpg\",\n\t\"./sweetgum/overview.jpg\": \"./src/index/assets/trees/sweetgum/overview.jpg\",\n\t\"./sycamore/conefruit.jpg\": \"./src/index/assets/trees/sycamore/conefruit.jpg\",\n\t\"./sycamore/needleleaf.jpg\": \"./src/index/assets/trees/sycamore/needleleaf.jpg\",\n\t\"./sycamore/overview.jpg\": \"./src/index/assets/trees/sycamore/overview.jpg\",\n\t\"./tagalder/conefruit.jpg\": \"./src/index/assets/trees/tagalder/conefruit.jpg\",\n\t\"./tagalder/needleleaf.jpg\": \"./src/index/assets/trees/tagalder/needleleaf.jpg\",\n\t\"./tagalder/overview.jpg\": \"./src/index/assets/trees/tagalder/overview.jpg\",\n\t\"./tblmtnpine/conefruit.jpg\": \"./src/index/assets/trees/tblmtnpine/conefruit.jpg\",\n\t\"./tblmtnpine/needleleaf.jpg\": \"./src/index/assets/trees/tblmtnpine/needleleaf.jpg\",\n\t\"./tblmtnpine/overview.jpg\": \"./src/index/assets/trees/tblmtnpine/overview.jpg\",\n\t\"./tuliptree/conefruit.jpg\": \"./src/index/assets/trees/tuliptree/conefruit.jpg\",\n\t\"./tuliptree/needleleaf.jpg\": \"./src/index/assets/trees/tuliptree/needleleaf.jpg\",\n\t\"./tuliptree/overview.jpg\": \"./src/index/assets/trees/tuliptree/overview.jpg\",\n\t\"./umbrellamagnolia/conefruit.jpg\": \"./src/index/assets/trees/umbrellamagnolia/conefruit.jpg\",\n\t\"./umbrellamagnolia/needleleaf.jpg\": \"./src/index/assets/trees/umbrellamagnolia/needleleaf.jpg\",\n\t\"./umbrellamagnolia/overview.jpg\": \"./src/index/assets/trees/umbrellamagnolia/overview.jpg\",\n\t\"./virginiapine/conefruit.jpg\": \"./src/index/assets/trees/virginiapine/conefruit.jpg\",\n\t\"./virginiapine/needleleaf.jpg\": \"./src/index/assets/trees/virginiapine/needleleaf.jpg\",\n\t\"./virginiapine/overview.jpg\": \"./src/index/assets/trees/virginiapine/overview.jpg\",\n\t\"./whiteash/conefruit.jpg\": \"./src/index/assets/trees/whiteash/conefruit.jpg\",\n\t\"./whiteash/needleleaf.jpg\": \"./src/index/assets/trees/whiteash/needleleaf.jpg\",\n\t\"./whiteash/overview.jpg\": \"./src/index/assets/trees/whiteash/overview.jpg\",\n\t\"./whiteoak/conefruit.jpg\": \"./src/index/assets/trees/whiteoak/conefruit.jpg\",\n\t\"./whiteoak/needleleaf.jpg\": \"./src/index/assets/trees/whiteoak/needleleaf.jpg\",\n\t\"./whiteoak/overview.jpg\": \"./src/index/assets/trees/whiteoak/overview.jpg\",\n\t\"./whitepine/conefruit.jpg\": \"./src/index/assets/trees/whitepine/conefruit.jpg\",\n\t\"./whitepine/needleleaf.jpg\": \"./src/index/assets/trees/whitepine/needleleaf.jpg\",\n\t\"./whitepine/overview.jpg\": \"./src/index/assets/trees/whitepine/overview.jpg\",\n\t\"./wingedelm/conefruit.jpg\": \"./src/index/assets/trees/wingedelm/conefruit.jpg\",\n\t\"./wingedelm/needleleaf.jpg\": \"./src/index/assets/trees/wingedelm/needleleaf.jpg\",\n\t\"./wingedelm/overview.jpg\": \"./src/index/assets/trees/wingedelm/overview.jpg\",\n\t\"./yellowbirch/conefruit.jpg\": \"./src/index/assets/trees/yellowbirch/conefruit.jpg\",\n\t\"./yellowbirch/needleleaf.jpg\": \"./src/index/assets/trees/yellowbirch/needleleaf.jpg\",\n\t\"./yellowbirch/overview.jpg\": \"./src/index/assets/trees/yellowbirch/overview.jpg\",\n\t\"./ylwbuckeye/conefruit.jpg\": \"./src/index/assets/trees/ylwbuckeye/conefruit.jpg\",\n\t\"./ylwbuckeye/needleleaf.jpg\": \"./src/index/assets/trees/ylwbuckeye/needleleaf.jpg\",\n\t\"./ylwbuckeye/overview.jpg\": \"./src/index/assets/trees/ylwbuckeye/overview.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/index/assets/trees sync recursive \\\\.jpg$\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/_sync_\\.jpg$?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/Modal/assets/xBtn.png":
/*!*************************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/Modal/assets/xBtn.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9380805149bc775e5a7d.png\";\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/Modal/assets/xBtn.png?");

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

/***/ "./src/index/assets/trees/americanbeech/conefruit.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/americanbeech/conefruit.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a59fbf70b3d99746b6c1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanbeech/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/americanbeech/needleleaf.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/americanbeech/needleleaf.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a53625b3aa832780db92.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanbeech/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/americanbeech/overview.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/americanbeech/overview.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bc515141e8200720e348.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanbeech/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/americanchestnut/conefruit.jpg":
/*!***************************************************************!*\
  !*** ./src/index/assets/trees/americanchestnut/conefruit.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"27f2677bb9cd5850fa5b.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanchestnut/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/americanchestnut/needleleaf.jpg":
/*!****************************************************************!*\
  !*** ./src/index/assets/trees/americanchestnut/needleleaf.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ed747d4b87bc46d39f7f.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanchestnut/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/americanchestnut/overview.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/americanchestnut/overview.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ba0fcdf3f8503494f846.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanchestnut/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/americanholly/conefruit.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/americanholly/conefruit.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2e91a87396aee548f12b.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanholly/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/americanholly/needleleaf.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/americanholly/needleleaf.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fdc9c4df90b4d40083e0.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanholly/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/americanholly/overview.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/americanholly/overview.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3afcac260255b2e4fcef.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/americanholly/overview.jpg?");

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

/***/ "./src/index/assets/trees/blackhaw/conefruit.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/blackhaw/conefruit.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"02a76dedac838361c39e.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blackhaw/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/blackhaw/needleleaf.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/blackhaw/needleleaf.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"43c45c412c6a25d8fca5.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blackhaw/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/blackhaw/overview.jpg":
/*!******************************************************!*\
  !*** ./src/index/assets/trees/blackhaw/overview.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1b2aad6fa73bf610b5e4.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blackhaw/overview.jpg?");

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

/***/ "./src/index/assets/trees/blackwalnut/conefruit.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/blackwalnut/conefruit.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"124d10dcf47bfc171448.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blackwalnut/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/blackwalnut/needleleaf.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/blackwalnut/needleleaf.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"295c64d6f461064b7a9b.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blackwalnut/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/blackwalnut/overview.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/blackwalnut/overview.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"73b65deed8a9663b4023.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/blackwalnut/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/carolinahemlock/conefruit.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/carolinahemlock/conefruit.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f9c9c2abb928ed62cd5b.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/carolinahemlock/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/carolinahemlock/needleleaf.jpg":
/*!***************************************************************!*\
  !*** ./src/index/assets/trees/carolinahemlock/needleleaf.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0281bf752058d3ef1a76.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/carolinahemlock/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/carolinahemlock/overview.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/carolinahemlock/overview.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c5b1a99120841a37a468.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/carolinahemlock/overview.jpg?");

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

/***/ "./src/index/assets/trees/cucumbermagnolia/conefruit.jpg":
/*!***************************************************************!*\
  !*** ./src/index/assets/trees/cucumbermagnolia/conefruit.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f857812e3bf41a97d735.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/cucumbermagnolia/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/cucumbermagnolia/needleleaf.jpg":
/*!****************************************************************!*\
  !*** ./src/index/assets/trees/cucumbermagnolia/needleleaf.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"05aafb3ae6e8070d9b12.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/cucumbermagnolia/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/cucumbermagnolia/overview.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/cucumbermagnolia/overview.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"04bb30d02998b60a9026.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/cucumbermagnolia/overview.jpg?");

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

/***/ "./src/index/assets/trees/easternredbud/conefruit.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/easternredbud/conefruit.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3de781c1111dfe1f3e57.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/easternredbud/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/easternredbud/needleleaf.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/easternredbud/needleleaf.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dd4dc19c79d45aeb4de9.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/easternredbud/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/easternredbud/overview.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/easternredbud/overview.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"24a2d1121a851b9eb0f6.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/easternredbud/overview.jpg?");

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

/***/ "./src/index/assets/trees/elderberry/conefruit.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/elderberry/conefruit.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f2bf64313deaf4980493.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/elderberry/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/elderberry/needleleaf.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/elderberry/needleleaf.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0a0eac3e03f6f1bf88ff.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/elderberry/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/elderberry/overview.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/elderberry/overview.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"27397c35f1d4dc78bdd3.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/elderberry/overview.jpg?");

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

/***/ "./src/index/assets/trees/hawthorn/conefruit.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/hawthorn/conefruit.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5f5770add1f2f50506db.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/hawthorn/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/hawthorn/needleleaf.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/hawthorn/needleleaf.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d3c69ffc4123ab1a4dfa.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/hawthorn/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/hawthorn/overview.jpg":
/*!******************************************************!*\
  !*** ./src/index/assets/trees/hawthorn/overview.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cf1d15645c95e3c562b8.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/hawthorn/overview.jpg?");

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

/***/ "./src/index/assets/trees/mimosa/conefruit.jpg":
/*!*****************************************************!*\
  !*** ./src/index/assets/trees/mimosa/conefruit.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"deab742b6e56d3a15e78.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mimosa/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/mimosa/needleleaf.jpg":
/*!******************************************************!*\
  !*** ./src/index/assets/trees/mimosa/needleleaf.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c4dea9d97592cd159eb8.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mimosa/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/mimosa/overview.jpg":
/*!****************************************************!*\
  !*** ./src/index/assets/trees/mimosa/overview.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"100b826ffea974a410a5.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mimosa/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/mockernuthickory/conefruit.jpg":
/*!***************************************************************!*\
  !*** ./src/index/assets/trees/mockernuthickory/conefruit.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9b43042feb6f8c8bbf92.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mockernuthickory/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/mockernuthickory/needleleaf.jpg":
/*!****************************************************************!*\
  !*** ./src/index/assets/trees/mockernuthickory/needleleaf.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c9eb690746842231982f.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mockernuthickory/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/mockernuthickory/overview.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/mockernuthickory/overview.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c4d307fdef1703a04b60.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mockernuthickory/overview.jpg?");

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

/***/ "./src/index/assets/trees/mountainmaple/conefruit.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/mountainmaple/conefruit.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"96b5bfd1c5495057f021.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mountainmaple/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/mountainmaple/needleleaf.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/mountainmaple/needleleaf.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ea850968405b09a0154f.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mountainmaple/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/mountainmaple/overview.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/mountainmaple/overview.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dabb1e41887054008195.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mountainmaple/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/mountainwinterberry/conefruit.jpg":
/*!******************************************************************!*\
  !*** ./src/index/assets/trees/mountainwinterberry/conefruit.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d79b7b4080c8fc8877bf.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mountainwinterberry/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/mountainwinterberry/needleleaf.jpg":
/*!*******************************************************************!*\
  !*** ./src/index/assets/trees/mountainwinterberry/needleleaf.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b1d2ab4afd1404e7dc69.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mountainwinterberry/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/mountainwinterberry/overview.jpg":
/*!*****************************************************************!*\
  !*** ./src/index/assets/trees/mountainwinterberry/overview.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a7295673638610049997.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/mountainwinterberry/overview.jpg?");

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

/***/ "./src/index/assets/trees/pawpaw/conefruit.jpg":
/*!*****************************************************!*\
  !*** ./src/index/assets/trees/pawpaw/conefruit.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ebb530db18bc63db2806.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/pawpaw/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/pawpaw/needleleaf.jpg":
/*!******************************************************!*\
  !*** ./src/index/assets/trees/pawpaw/needleleaf.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d5e913fa15ae3fb926d7.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/pawpaw/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/pawpaw/overview.jpg":
/*!****************************************************!*\
  !*** ./src/index/assets/trees/pawpaw/overview.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"12d516faff3920e6dc8f.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/pawpaw/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/persimmon/conefruit.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/persimmon/conefruit.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1543c59c8dde7a89aad8.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/persimmon/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/persimmon/needleleaf.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/persimmon/needleleaf.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7aada413e2b2e42f0a6e.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/persimmon/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/persimmon/overview.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/persimmon/overview.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"03e8ad09b09ff891df2b.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/persimmon/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/pignuthickory/conefruit.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/pignuthickory/conefruit.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f58aadf78fdd593ad02b.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/pignuthickory/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/pignuthickory/needleleaf.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/pignuthickory/needleleaf.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"800b9dae85d4700772ea.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/pignuthickory/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/pignuthickory/overview.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/pignuthickory/overview.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"63fc48dd0154549fc8a5.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/pignuthickory/overview.jpg?");

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

/***/ "./src/index/assets/trees/redmaple/conefruit.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/redmaple/conefruit.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f572a2db0fcdf21086c9.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/redmaple/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/redmaple/needleleaf.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/redmaple/needleleaf.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a140151243954240a84c.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/redmaple/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/redmaple/overview.jpg":
/*!******************************************************!*\
  !*** ./src/index/assets/trees/redmaple/overview.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8f7f9d36df6548cd3890.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/redmaple/overview.jpg?");

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

/***/ "./src/index/assets/trees/shagbarkhickory/conefruit.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/shagbarkhickory/conefruit.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"57bd43ed432391f3b6dc.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/shagbarkhickory/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/shagbarkhickory/needleleaf.jpg":
/*!***************************************************************!*\
  !*** ./src/index/assets/trees/shagbarkhickory/needleleaf.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"70aad6e62805219c7adc.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/shagbarkhickory/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/shagbarkhickory/overview.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/shagbarkhickory/overview.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"23522745c1954b5c1e93.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/shagbarkhickory/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/shortleafpine/conefruit.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/shortleafpine/conefruit.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"95085f737f9ff130e711.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/shortleafpine/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/shortleafpine/needleleaf.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/shortleafpine/needleleaf.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"029bed0ef786d94ca175.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/shortleafpine/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/shortleafpine/overview.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/shortleafpine/overview.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5a5df1a77df6023a113f.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/shortleafpine/overview.jpg?");

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

/***/ "./src/index/assets/trees/sourwood/conefruit.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/sourwood/conefruit.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d06f7d4f2ead7bf80055.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sourwood/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sourwood/needleleaf.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/sourwood/needleleaf.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"841373d7a44df6cbbdd2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sourwood/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sourwood/overview.jpg":
/*!******************************************************!*\
  !*** ./src/index/assets/trees/sourwood/overview.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7930c1f4b212c8d25b7e.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sourwood/overview.jpg?");

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

/***/ "./src/index/assets/trees/staghornsumac/conefruit.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/staghornsumac/conefruit.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0067c3de98988b7253d6.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/staghornsumac/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/staghornsumac/needleleaf.jpg":
/*!*************************************************************!*\
  !*** ./src/index/assets/trees/staghornsumac/needleleaf.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"662426d18556a64cb5f7.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/staghornsumac/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/staghornsumac/overview.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/staghornsumac/overview.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c3bfccd5d0863f86665c.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/staghornsumac/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/stripedmaple/conefruit.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/stripedmaple/conefruit.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2a70ab6d54c099ff00e4.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/stripedmaple/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/stripedmaple/needleleaf.jpg":
/*!************************************************************!*\
  !*** ./src/index/assets/trees/stripedmaple/needleleaf.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f9443e95538968b529c1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/stripedmaple/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/stripedmaple/overview.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/stripedmaple/overview.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2c6c7228ac50ff8ee34f.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/stripedmaple/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sugarmaple/conefruit.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/sugarmaple/conefruit.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d0a4636ccf3a964ed2d7.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sugarmaple/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sugarmaple/needleleaf.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/sugarmaple/needleleaf.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1820391dfc13e21a95b7.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sugarmaple/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sugarmaple/overview.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/sugarmaple/overview.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"07a07c11b2f6196de3bc.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sugarmaple/overview.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sweetgum/conefruit.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/sweetgum/conefruit.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"476f78ee6875b3d2ab67.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sweetgum/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sweetgum/needleleaf.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/sweetgum/needleleaf.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d4e95f5590cb15c861d1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sweetgum/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/sweetgum/overview.jpg":
/*!******************************************************!*\
  !*** ./src/index/assets/trees/sweetgum/overview.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2b9fbc465995150738d2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/sweetgum/overview.jpg?");

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

/***/ "./src/index/assets/trees/tagalder/conefruit.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/tagalder/conefruit.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"62edb7e123acaaaa4b41.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/tagalder/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/tagalder/needleleaf.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/tagalder/needleleaf.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"52183e594491012244ee.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/tagalder/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/tagalder/overview.jpg":
/*!******************************************************!*\
  !*** ./src/index/assets/trees/tagalder/overview.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5a42ede501cb300dd09c.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/tagalder/overview.jpg?");

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

/***/ "./src/index/assets/trees/umbrellamagnolia/conefruit.jpg":
/*!***************************************************************!*\
  !*** ./src/index/assets/trees/umbrellamagnolia/conefruit.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d5bb1fcff774c758e30d.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/umbrellamagnolia/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/umbrellamagnolia/needleleaf.jpg":
/*!****************************************************************!*\
  !*** ./src/index/assets/trees/umbrellamagnolia/needleleaf.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d7d27d0e0855608c04f5.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/umbrellamagnolia/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/umbrellamagnolia/overview.jpg":
/*!**************************************************************!*\
  !*** ./src/index/assets/trees/umbrellamagnolia/overview.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5c25b04f67be9c72b772.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/umbrellamagnolia/overview.jpg?");

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

/***/ "./src/index/assets/trees/whiteash/conefruit.jpg":
/*!*******************************************************!*\
  !*** ./src/index/assets/trees/whiteash/conefruit.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1de2a5ceae54296887f8.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/whiteash/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/whiteash/needleleaf.jpg":
/*!********************************************************!*\
  !*** ./src/index/assets/trees/whiteash/needleleaf.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"66a07fb8fa683489636f.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/whiteash/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/whiteash/overview.jpg":
/*!******************************************************!*\
  !*** ./src/index/assets/trees/whiteash/overview.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7ab6aa75b384ecd33dcc.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/whiteash/overview.jpg?");

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

/***/ "./src/index/assets/trees/yellowbirch/conefruit.jpg":
/*!**********************************************************!*\
  !*** ./src/index/assets/trees/yellowbirch/conefruit.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4f14266bd973a13c81d5.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/yellowbirch/conefruit.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/yellowbirch/needleleaf.jpg":
/*!***********************************************************!*\
  !*** ./src/index/assets/trees/yellowbirch/needleleaf.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"080f5bddcd2ea2d19dce.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/yellowbirch/needleleaf.jpg?");

/***/ }),

/***/ "./src/index/assets/trees/yellowbirch/overview.jpg":
/*!*********************************************************!*\
  !*** ./src/index/assets/trees/yellowbirch/overview.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d31b2083f0c1b2a797b8.jpg\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/yellowbirch/overview.jpg?");

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

/***/ })

}]);