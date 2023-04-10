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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.css */ \"./src/index/React/components/CardsContainer/Card/card.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable */ \"./node_modules/react-swipeable/es/index.js\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n// Individual card to contain tree pics and names\n\n// ###################################\n// Imports\n// ###################################\n\n\n\n\nfunction Card(props) {\n  // Props:\n  // props.treeImgs.conefruit\n  // props.treeImgs.overview\n  // props.treeImgs.needleleaf\n  // props.treeImgs.name\n\n  var handlers = (0,react_swipeable__WEBPACK_IMPORTED_MODULE_2__.useSwipeable)({\n    delta: 10,\n    onSwipedRight: props.handleRightSwipe,\n    onSwiping: props.handleSwiping,\n    onTouchEndOrOnMouseUp: props.handleUp\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", _extends({}, handlers, {\n    className: 'Card ' + props.treeImgs.catName\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"imgsWrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"imgFrame overviewFrame\",\n    onClick: props.handleCardClick.bind(this, props.treeImgs.overview, props.treeImgs.catName, 'overviewImg')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    onLoad: props.reportImageLoaded,\n    draggable: \"false\",\n    className: \"overviewImg treeImg\",\n    src: props.treeImgs.overview\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"imgFrame coneFruitFrame\",\n    onClick: props.handleCardClick.bind(this, props.treeImgs.conefruit, props.treeImgs.catName, 'coneFruitImg')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    onLoad: props.reportImageLoaded,\n    draggable: \"false\",\n    className: \"coneFruitImg treeImg\",\n    src: props.treeImgs.conefruit\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    draggable: \"false\",\n    className: \"imgFrame needleLeafFrame\",\n    onClick: props.handleCardClick.bind(this, props.treeImgs.needleleaf, props.treeImgs.catName, 'needleLeafImg')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    onLoad: props.reportImageLoaded,\n    draggable: \"false\",\n    className: \"needleLeafImg treeImg\",\n    src: props.treeImgs.needleleaf\n  }))));\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/Card/Card.js?");

/***/ }),

/***/ "./src/index/React/components/CardsContainer/CardsContainer.js":
/*!*********************************************************************!*\
  !*** ./src/index/React/components/CardsContainer/CardsContainer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsContainer\": () => (/* binding */ CardsContainer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SelectionResultSplash_SelectionResultSplash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectionResultSplash/SelectionResultSplash.js */ \"./src/index/React/components/CardsContainer/SelectionResultSplash/SelectionResultSplash.js\");\n/* harmony import */ var _EndCard_EndCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndCard/EndCard.js */ \"./src/index/React/components/CardsContainer/EndCard/EndCard.js\");\n/* harmony import */ var _treeImageHandling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../treeImageHandling.js */ \"./src/index/treeImageHandling.js\");\n/* harmony import */ var _generateCards_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateCards.js */ \"./src/index/React/components/CardsContainer/generateCards.js\");\n/* harmony import */ var _Modal_Modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal/Modal.js */ \"./src/index/React/components/CardsContainer/Modal/Modal.js\");\n/* harmony import */ var _cardscontainer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cardscontainer.css */ \"./src/index/React/components/CardsContainer/cardscontainer.css\");\n/* harmony import */ var _LoadingBar_LoadingBar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoadingBar/LoadingBar.js */ \"./src/index/React/components/CardsContainer/LoadingBar/LoadingBar.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n// Container for card components\n\n\n\n\n\n\n\n\n\nfunction CardsContainer(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_treeImageHandling_js__WEBPACK_IMPORTED_MODULE_3__.getTrees)()),\n    _useState2 = _slicedToArray(_useState, 2),\n    treesImgs = _useState2[0],\n    setTreesImgs = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_generateCards_js__WEBPACK_IMPORTED_MODULE_4__.generateCardsArray)(treesImgs, handleCardClick, handleRightSwipe, handleSwiping, handleUp, reportImageLoaded)),\n    _useState4 = _slicedToArray(_useState3, 2),\n    cards = _useState4[0],\n    setCards = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cards),\n    _useState6 = _slicedToArray(_useState5, 2),\n    ongoingCards = _useState6[0],\n    setOngoingCards = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState8 = _slicedToArray(_useState7, 2),\n    cardsToDisplay = _useState8[0],\n    setCardsToDisplay = _useState8[1];\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState10 = _slicedToArray(_useState9, 2),\n    correctCard = _useState10[0],\n    setCorrectCard = _useState10[1];\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState12 = _slicedToArray(_useState11, 2),\n    modal = _useState12[0],\n    setModal = _useState12[1];\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState14 = _slicedToArray(_useState13, 2),\n    selection = _useState14[0],\n    setSelection = _useState14[1];\n  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState16 = _slicedToArray(_useState15, 2),\n    rightAnswers = _useState16[0],\n    setRightAnswers = _useState16[1];\n  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState18 = _slicedToArray(_useState17, 2),\n    complete = _useState18[0],\n    setComplete = _useState18[1];\n  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState20 = _slicedToArray(_useState19, 2),\n    content = _useState20[0],\n    setContent = _useState20[1];\n  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState22 = _slicedToArray(_useState21, 2),\n    imagesLoaded = _useState22[0],\n    setImagesLoaded = _useState22[1];\n  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState24 = _slicedToArray(_useState23, 2),\n    loadingBar = _useState24[0],\n    setLoadingBar = _useState24[1];\n  var cardsContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, cardsToDisplay[0], cardsToDisplay[1], cardsToDisplay[2], modal);\n\n  // Images loaded counter\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // All images loaded\n    if (imagesLoaded === 9) {\n      console.log('All loaded');\n      var cardsContainerDom = document.querySelector('.cardsContainer');\n      cardsContainerDom.style.display = 'block';\n      setLoadingBar('');\n    } else {\n      var _cardsContainerDom = document.querySelector('.cardsContainer');\n      _cardsContainerDom.style.display = 'none';\n      console.log(loadingBar);\n      setLoadingBar( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LoadingBar_LoadingBar_js__WEBPACK_IMPORTED_MODULE_7__.LoadingBar, null));\n    }\n  }, [imagesLoaded]);\n\n  // On Mount\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    newTurn();\n  }, []);\n\n  // On settings total cards\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    props.setTotalSlides(cards.length);\n  }, [cards]);\n\n  // On selection change\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (selection) {\n      if (isSelectionCorrect(correctCard.key, reactKeyFromElement(selection))) {\n        setRightAnswers(function () {\n          return rightAnswers + 1;\n        });\n        setSelection('');\n        props.setTargetTree('Correct!');\n        selectionResultSplash('correct');\n      } else {\n        setSelection('');\n        props.setTargetTree('Oops!');\n        selectionResultSplash('incorrect');\n      }\n      ;\n    }\n  }, [selection]);\n\n  // On complete change\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (complete) {\n      props.setTargetTree('Congrats!');\n      props.setSlideNumber(cards.length);\n      setImagesLoaded(9);\n      setContent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EndCard_EndCard_js__WEBPACK_IMPORTED_MODULE_2__.EndCard, {\n        resetGame: props.resetGame,\n        rightAnswers: rightAnswers,\n        length: cards.length\n      }));\n    } else {\n      setContent(cardsContent);\n    }\n  }, [complete, cardsToDisplay, modal]);\n\n  // Increment images loaded counter \n  function reportImageLoaded() {\n    setImagesLoaded(function (imagesLoaded) {\n      return imagesLoaded + 1;\n    });\n  }\n  function isSelectionCorrect(correctKey, chosenKey) {\n    if (correctKey === chosenKey) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  function selectionResultSplash(result) {\n    setContent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SelectionResultSplash_SelectionResultSplash_js__WEBPACK_IMPORTED_MODULE_1__.SelectionResultSplash, {\n      newTurn: newTurn,\n      result: result,\n      correctCard: correctCard,\n      selection: cardFromReactKey(reactKeyFromElement(selection))\n    }));\n  }\n  function newTurn() {\n    // Reset loaded images counter\n    setImagesLoaded(0);\n    props.setSlideNumber(function () {\n      return props.slideNumber + 1;\n    });\n    setContent(cardsContent);\n    if (ongoingCards.length > 0) {\n      var shuffleArray = function shuffleArray(array) {\n        var resultArray = [];\n        var possibleIndexes = [];\n        for (var _i2 = 0; _i2 < array.length; _i2++) {\n          possibleIndexes.push(_i2);\n        }\n        array.forEach(function (element) {\n          var possibleIndexesRandomIndex = getRandomIndex(possibleIndexes);\n          var randomIndex = possibleIndexes[possibleIndexesRandomIndex];\n          resultArray[randomIndex] = element;\n          possibleIndexes.splice(possibleIndexesRandomIndex, 1);\n        });\n        return resultArray;\n      };\n      var getRandomIndex = function getRandomIndex(array) {\n        var result = Math.floor(Math.random() * array.length);\n        return result;\n      };\n      var removeCardFromArray = function removeCardFromArray(cardToBeRemoved, array) {\n        var result = array.filter(function (currentCard) {\n          return !(currentCard === cardToBeRemoved);\n        });\n        return result;\n      };\n      // Determine new correct card and set message\n      var currentCards = ongoingCards;\n      var currentCorrectCard = currentCards[getRandomIndex(currentCards)];\n      props.setTargetTree(currentCorrectCard.props.treeImgs.name);\n      setCorrectCard(currentCorrectCard);\n\n      // Remove correct card from current cards, and update to ongoingCards\n      currentCards = removeCardFromArray(currentCorrectCard, currentCards);\n\n      // If there are no more choices for a correct card, mark the game as completed\n      if (!currentCards) {\n        setComplete(true);\n      }\n      setOngoingCards(currentCards);\n\n      // Generate card choices\n      var cardChoices = [currentCorrectCard];\n      var choicesLeft = removeCardFromArray(currentCorrectCard, cards);\n\n      // Wrong choices\n      for (var i = 1; i < 3; i++) {\n        var wrongChoiceIndex = getRandomIndex(choicesLeft);\n        cardChoices.push(choicesLeft[wrongChoiceIndex]);\n        choicesLeft = removeCardFromArray(choicesLeft[wrongChoiceIndex], choicesLeft);\n      }\n      cardChoices = shuffleArray(cardChoices);\n      setCardsToDisplay(cardChoices);\n    } else {\n      setComplete(true);\n    }\n  }\n  function handleCardClick(treeImg, catName, treeClass) {\n    setModal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal_Modal_js__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n      treeImg: treeImg,\n      catName: catName,\n      treeClass: treeClass,\n      handleModalXClick: handleModalXClick\n    }));\n  }\n  function handleModalXClick() {\n    setModal('');\n  }\n  function handleRightSwipe() {}\n  function handleSwiping(event) {\n    var card = getCardFromTarget(event.event.target);\n\n    // Move card with swipe\n    if (event.deltaX > 0) {\n      card.style.left = event.deltaX + 'px';\n    }\n    if (event.deltaX > 100) {\n      card.style.backgroundColor = 'green';\n    } else {\n      card.style.backgroundColor = 'beige';\n    }\n  }\n  function handleUp(event) {\n    var card = getCardFromTarget(event.event.target);\n\n    // If card position is in the desired range, register a confirm\n    var cardPosition = getComputedStyle(card).left.split('px')[0];\n    if (cardPosition > 100) {\n      // Check for correct selection\n      setSelection(card);\n    }\n\n    // Reset Card position\n    card.style.left = '0px';\n    card.style.backgroundColor = 'beige';\n  }\n  function getCardFromTarget(target) {\n    if (target.classList.contains('Card')) {\n      return target;\n    } else {\n      return getCardFromTarget(target.parentElement);\n    }\n  }\n  function reactKeyFromElement(element) {\n    var key = Object.keys(element).find(function (key) {\n      return key.startsWith('__reactFiber');\n    });\n    return element[key][\"return\"].key;\n  }\n  function cardFromReactKey(key) {\n    var result = cards.find(function (card) {\n      return card.key === key;\n    });\n    return result || 'not found';\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"cardsContainer\"\n  }, content), loadingBar);\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/CardsContainer.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTrees\": () => (/* binding */ getTrees)\n/* harmony export */ });\n// Import images and assign to object\nfunction getTrees() {\n  var trees = {};\n  var treesImports = __webpack_require__(\"./src/index/assets/trees sync recursive \\\\.jpg$\");\n  treesImports.keys().forEach(function (key) {\n    // parse filename to category name and type name\n    var category = key.split('/')[1];\n    var type = key.split('/')[2].split('.')[0];\n\n    // if category has not been created, then create it\n    if (!trees.hasOwnProperty(category)) trees[category] = {};\n    trees[category][type] = treesImports(key);\n\n    // Get tree name from category name and assign to object\n    trees[category].name = getTreeName(category);\n    trees[category].catName = category;\n    function getTreeName(category) {\n      switch (category) {\n        case 'americanhornbeam':\n          return 'American Hornbeam';\n        case 'easternhemlock':\n          return 'Eastern Hemlock';\n        case 'easternredcedar':\n          return 'Eastern Red Cedar';\n        case 'floweringdogwood':\n          return 'Flowering Dogwood';\n        case 'fraserfir':\n          return 'Fraser Fir';\n        case 'northernredoak':\n          return 'Northern Red Oak';\n        case 'redspruce':\n          return 'Red Spruce';\n        case 'rvrbirch':\n          return 'River Birch';\n        case 'tblmtnpine':\n          return 'Table Mountain Pine';\n        case 'tuliptree':\n          return 'Tulip Tree';\n        case 'whitepine':\n          return 'White Pine';\n        case 'ylwbuckeye':\n          return 'Yellow Buckeye';\n        case 'americanbasswood':\n          return 'American Basswood';\n        case 'southerncatalpa':\n          return 'Southern Catalpa';\n        default:\n          return 'Set tree name in \"treeImageHandling.js\"';\n      }\n    }\n  });\n  return trees;\n}\n\n\n//# sourceURL=webpack://webpack/./src/index/treeImageHandling.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/Card/card.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/React/components/CardsContainer/Card/card.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Stylesheet for Card.js */\\r\\n\\r\\n.Card {\\r\\n    height: 30%;\\r\\n    width: calc(var(--doc-width) * .9);\\r\\n    box-shadow: 0 0 4px black;\\r\\n    background-color: beige ;\\r\\n    border-radius: 2px;\\r\\n    padding: .25rem;\\r\\n    overflow: hidden;\\r\\n    margin-bottom: 10px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.imgsWrapper {\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    gap: .5rem;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.treeImg {\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.imgFrame {\\r\\n    height: 100%;\\r\\n    width: 30%;\\r\\n    border-radius: 6px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    overflow: hidden;\\r\\n    position: relative;\\r\\n    box-shadow: 0 0 4px 0 black;\\r\\n    background-color: white;\\r\\n}\\r\\n\\r\\n/* AMERICAN HORNBEAM */\\r\\n.americanhornbeam .needleLeafImg, .americanhornbeam.needleLeafImg {\\r\\n    height: 80%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n/* EASTERN HEMLOCK */\\r\\n.easternhemlock .needleLeafImg, .easternhemlock.needleLeafImg {\\r\\n    height: 70%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n.easternhemlock.coneFruitImg {\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n/* EASTER RED CEDAR */\\r\\n.easternredcedar .overviewImg, .easternredcedar.overviewImg {\\r\\n    height: 110%;\\r\\n}\\r\\n\\r\\n.easternredcedar .needleLeafImg, .easternredcedar.needleLeafImg {\\r\\n    height: 90%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n/* FLOWERING DOGWOOD */\\r\\n.floweringdogwood .overviewImg {\\r\\n    height: 70%\\r\\n}\\r\\n\\r\\n.floweringdogwood.overviewImg {\\r\\n    height: 30% !important;\\r\\n}\\r\\n\\r\\n.floweringdogwood .coneFruitImg {\\r\\n    position: relative;\\r\\n    height: 80%;\\r\\n    transform: rotate(-.25turn) translate(0, calc(var(--doc-height) * .01));\\r\\n}\\r\\n\\r\\n.floweringdogwood.coneFruitImg {\\r\\n    position: relative;\\r\\n    transform: translate(calc(var(--doc-width) * .05), calc(var(--doc-height) * -.2)) rotate(-.25turn);\\r\\n}\\r\\n\\r\\n.floweringdogwood .needleLeafImg, .floweringdogwood.needleLeafImg {\\r\\n    height: 80%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n.floweringdogwood .imgFrame, .floweringdogwood.imgFrame {\\r\\n    background-color: rgb(201, 217, 243);\\r\\n}\\r\\n\\r\\n/* FRASER FIR */\\r\\n.fraserfir .needleLeafImg, .fraserfir.needleLeafImg {\\r\\n    height: 60%;\\r\\n}\\r\\n\\r\\n.fraserfir.overviewImg {\\r\\n    height: 30% !important;\\r\\n}\\r\\n\\r\\n.fraserfir .needleLeafFrame, .fraserfir.needleLeafFrame {\\r\\n    background-color: rgb(23, 47, 18);\\r\\n}\\r\\n\\r\\n/* RIVER BIRCH */\\r\\n.rvrbirch .needleLeafImg, .rvrbirch.needleLeafImg {\\r\\n    height: 70%;\\r\\n    transform: rotate(-.25turn);\\r\\n}\\r\\n\\r\\n.rvrbirch .needleLeafFrame,.rvrbirch.needleLeafFrame {\\r\\n    background-color: rgb(27, 40, 29);\\r\\n}\\r\\n\\r\\n/* TULIP TREE */\\r\\n.tuliptree .needleLeafImg, .tuliptree.needleLeafImg {\\r\\n    height: 70%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n.tuliptree .needleLeafFrame, .tuliptree.needleLeafFrame {\\r\\n    background-color: rgb(212, 231, 245);\\r\\n}\\r\\n\\r\\n/* WHITE PINE */\\r\\n.whitepine .needleLeafImg, .whitepine.needleLeafImg {\\r\\n    height: 75%;\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n.whitepine.overviewImg {\\r\\n    height: 60% !important;\\r\\n}\\r\\n\\r\\n/* YELLOW BUCKEYE */\\r\\n.ylwbuckeye .coneFruitImg, .ylwbuckeye.coneFruitImg {\\r\\n    height: 80%;\\r\\n}\\r\\n\\r\\n.ylwbuckeye .imgFrame, .ylwbuckeye.imgFrame {\\r\\n    background-color: rgb(208, 211, 219);\\r\\n}\\r\\n\\r\\n.ylwbuckeye.overviewImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n\\r\\n/* SOUTHERN CATALPA */\\r\\n.southerncatalpa .overviewImg {\\r\\n    height: 60%;\\r\\n}\\r\\n\\r\\n.southerncatalpa.overviewImg {\\r\\n    height: 50% !important;\\r\\n}\\r\\n\\r\\n.southerncatalpa .needleLeafImg, .southerncatalpa.needleLeafImg {\\r\\n    height: 80%;\\r\\n    transform: rotate(-.25turn);\\r\\n}\\r\\n\\r\\n.southerncatalpa .imgFrame, .southerncatalpa.imgFrame {\\r\\n    background-color: rgb(193, 237, 254);\\r\\n}\\r\\n\\r\\n/* AMERICAN BASSWOOD */\\r\\n.americanbasswood .overviewImg, .americanbasswood.overviewImg {\\r\\n    transform: rotate(.25turn);\\r\\n}\\r\\n\\r\\n.americanbasswood .needleLeafImg, .americanbasswood.needleLeafImg {\\r\\n    height: 65%;\\r\\n}\\r\\n\\r\\n.americanbasswood .needleLeafFrame, .americanbasswood.needleLeafFrame {\\r\\n    background-color: white;\\r\\n}\\r\\n\\r\\n/* RED SPRUCE */\\r\\n.redspruce.overviewImg {\\r\\n    height: 40% !important;\\r\\n    position: relative;\\r\\n    top: calc(var(--doc-height) * .1)\\r\\n}\\r\\n\\r\\n/* TABLE MOUNTAIN PINE */\\r\\n.tblmtnpine .overviewImg {\\r\\n    height: 80%;\\r\\n}\\r\\n\\r\\n.tblmtnpine.overviewImg {\\r\\n    height: 40% !important;\\r\\n}\\r\\n\\r\\n.tblmtnpine .imgFrame {\\r\\n    background-color: rgb(148, 228, 252);\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index/React/components/CardsContainer/Card/card.css?./node_modules/css-loader/dist/cjs.js");

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

eval("var map = {\n\t\"./americanbasswood/conefruit.jpg\": \"./src/index/assets/trees/americanbasswood/conefruit.jpg\",\n\t\"./americanbasswood/needleleaf.jpg\": \"./src/index/assets/trees/americanbasswood/needleleaf.jpg\",\n\t\"./americanbasswood/overview.jpg\": \"./src/index/assets/trees/americanbasswood/overview.jpg\",\n\t\"./americanhornbeam/conefruit.jpg\": \"./src/index/assets/trees/americanhornbeam/conefruit.jpg\",\n\t\"./americanhornbeam/needleleaf.jpg\": \"./src/index/assets/trees/americanhornbeam/needleleaf.jpg\",\n\t\"./americanhornbeam/overview.jpg\": \"./src/index/assets/trees/americanhornbeam/overview.jpg\",\n\t\"./easternhemlock/conefruit.jpg\": \"./src/index/assets/trees/easternhemlock/conefruit.jpg\",\n\t\"./easternhemlock/needleleaf.jpg\": \"./src/index/assets/trees/easternhemlock/needleleaf.jpg\",\n\t\"./easternhemlock/overview.jpg\": \"./src/index/assets/trees/easternhemlock/overview.jpg\",\n\t\"./easternredcedar/conefruit.jpg\": \"./src/index/assets/trees/easternredcedar/conefruit.jpg\",\n\t\"./easternredcedar/needleleaf.jpg\": \"./src/index/assets/trees/easternredcedar/needleleaf.jpg\",\n\t\"./easternredcedar/overview.jpg\": \"./src/index/assets/trees/easternredcedar/overview.jpg\",\n\t\"./floweringdogwood/conefruit.jpg\": \"./src/index/assets/trees/floweringdogwood/conefruit.jpg\",\n\t\"./floweringdogwood/needleleaf.jpg\": \"./src/index/assets/trees/floweringdogwood/needleleaf.jpg\",\n\t\"./floweringdogwood/overview.jpg\": \"./src/index/assets/trees/floweringdogwood/overview.jpg\",\n\t\"./fraserfir/conefruit.jpg\": \"./src/index/assets/trees/fraserfir/conefruit.jpg\",\n\t\"./fraserfir/needleleaf.jpg\": \"./src/index/assets/trees/fraserfir/needleleaf.jpg\",\n\t\"./fraserfir/overview.jpg\": \"./src/index/assets/trees/fraserfir/overview.jpg\",\n\t\"./northernredoak/conefruit.jpg\": \"./src/index/assets/trees/northernredoak/conefruit.jpg\",\n\t\"./northernredoak/needleleaf.jpg\": \"./src/index/assets/trees/northernredoak/needleleaf.jpg\",\n\t\"./northernredoak/overview.jpg\": \"./src/index/assets/trees/northernredoak/overview.jpg\",\n\t\"./redspruce/conefruit.jpg\": \"./src/index/assets/trees/redspruce/conefruit.jpg\",\n\t\"./redspruce/needleleaf.jpg\": \"./src/index/assets/trees/redspruce/needleleaf.jpg\",\n\t\"./redspruce/overview.jpg\": \"./src/index/assets/trees/redspruce/overview.jpg\",\n\t\"./rvrbirch/conefruit.jpg\": \"./src/index/assets/trees/rvrbirch/conefruit.jpg\",\n\t\"./rvrbirch/needleleaf.jpg\": \"./src/index/assets/trees/rvrbirch/needleleaf.jpg\",\n\t\"./rvrbirch/overview.jpg\": \"./src/index/assets/trees/rvrbirch/overview.jpg\",\n\t\"./southerncatalpa/conefruit.jpg\": \"./src/index/assets/trees/southerncatalpa/conefruit.jpg\",\n\t\"./southerncatalpa/needleleaf.jpg\": \"./src/index/assets/trees/southerncatalpa/needleleaf.jpg\",\n\t\"./southerncatalpa/overview.jpg\": \"./src/index/assets/trees/southerncatalpa/overview.jpg\",\n\t\"./tblmtnpine/conefruit.jpg\": \"./src/index/assets/trees/tblmtnpine/conefruit.jpg\",\n\t\"./tblmtnpine/needleleaf.jpg\": \"./src/index/assets/trees/tblmtnpine/needleleaf.jpg\",\n\t\"./tblmtnpine/overview.jpg\": \"./src/index/assets/trees/tblmtnpine/overview.jpg\",\n\t\"./tuliptree/conefruit.jpg\": \"./src/index/assets/trees/tuliptree/conefruit.jpg\",\n\t\"./tuliptree/needleleaf.jpg\": \"./src/index/assets/trees/tuliptree/needleleaf.jpg\",\n\t\"./tuliptree/overview.jpg\": \"./src/index/assets/trees/tuliptree/overview.jpg\",\n\t\"./whitepine/conefruit.jpg\": \"./src/index/assets/trees/whitepine/conefruit.jpg\",\n\t\"./whitepine/needleleaf.jpg\": \"./src/index/assets/trees/whitepine/needleleaf.jpg\",\n\t\"./whitepine/overview.jpg\": \"./src/index/assets/trees/whitepine/overview.jpg\",\n\t\"./ylwbuckeye/conefruit.jpg\": \"./src/index/assets/trees/ylwbuckeye/conefruit.jpg\",\n\t\"./ylwbuckeye/needleleaf.jpg\": \"./src/index/assets/trees/ylwbuckeye/needleleaf.jpg\",\n\t\"./ylwbuckeye/overview.jpg\": \"./src/index/assets/trees/ylwbuckeye/overview.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/index/assets/trees sync recursive \\\\.jpg$\";\n\n//# sourceURL=webpack://webpack/./src/index/assets/trees/_sync_\\.jpg$?");

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