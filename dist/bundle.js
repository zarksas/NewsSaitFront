/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./footer.js":
/*!*******************!*\
  !*** ./footer.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getFooter = function getFooter() {
  var footer = document.querySelector("footer");
  var blockFirst = document.createElement("div");
  var blockFooter = document.createElement("div");
  var ul = document.createElement("ul");
  var mainFooter = document.createElement("li");
  var categoryFooter = document.createElement("li");
  var weFooter = document.createElement("li");
  var urlMain = document.createElement("a");
  var urlCategory = document.createElement("a");
  var urlWe = document.createElement("a");
  var breakingNews = document.createElement("div");
  footer.classList.add("footer");
  blockFirst.classList.add("blockFirst");
  blockFooter.classList.add("blockFooter");
  breakingNews.classList.add("breakingNews");
  urlMain.textContent = "Новости";
  urlCategory.textContent = "Категории";
  urlWe.textContent = "О нас";
  breakingNews.textContent = "@Breaking-News";
  urlMain.href = "#";
  urlMain.target = "_blank";
  urlCategory.href = "#";
  urlCategory.target = "_blank";
  urlWe.href = "#";
  urlWe.target = "_blank";
  weFooter.append(urlWe);
  categoryFooter.append(urlCategory);
  mainFooter.append(urlMain);
  blockFooter.append(mainFooter, categoryFooter, weFooter);
  blockFirst.append(blockFooter, breakingNews);
  footer.append(blockFirst);
};

/* harmony default export */ __webpack_exports__["default"] = (getFooter);

/***/ }),

/***/ "./getCategory.js":
/*!************************!*\
  !*** ./getCategory.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./state.js");
/* harmony import */ var _renders_renderCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renders/renderCategory */ "./renders/renderCategory.js");



var getCategory = function getCategory() {
  fetch("http://localhost:3000/category").then(function (res) {
    return res.json();
  }).then(function (categoryList) {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].categories = categoryList;
    (0,_renders_renderCategory__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getCategory);

/***/ }),

/***/ "./getComments.js":
/*!************************!*\
  !*** ./getComments.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./state.js");
/* harmony import */ var _renders_renderComments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renders/renderComments */ "./renders/renderComments.js");



var getComments = function getComments(id) {
  fetch("http://localhost:3000/comment/news/".concat(id)).then(function (res) {
    return res.json();
  }).then(function (commentsList) {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].comments = commentsList;
    (0,_renders_renderComments__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getComments);

/***/ }),

/***/ "./getNews.js":
/*!********************!*\
  !*** ./getNews.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./state.js");
/* harmony import */ var _renders_renderNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renders/renderNews */ "./renders/renderNews.js");



var getNews = function getNews() {
  fetch("http://localhost:3000/news").then(function (res) {
    return res.json();
  }).then(function (newsList) {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].news = newsList;
    (0,_renders_renderNews__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getNews);

/***/ }),

/***/ "./getNewsCategory.js":
/*!****************************!*\
  !*** ./getNewsCategory.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./state.js");
/* harmony import */ var _renders_renderNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renders/renderNews */ "./renders/renderNews.js");



var getNewsCategory = function getNewsCategory(id) {
  fetch("http://localhost:3000/news/category/".concat(id)).then(function (res) {
    return res.json();
  }).then(function (news) {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].news = news;
    (0,_renders_renderNews__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getNewsCategory);

/***/ }),

/***/ "./header.js":
/*!*******************!*\
  !*** ./header.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renders_renderNews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renders/renderNews */ "./renders/renderNews.js");


var header = function header() {
  var headerMain = document.createElement("header");
  var titleDiv = document.createElement("div");
  var headerHome = document.createElement("div");
  var homeDiv = document.createElement("div");
  var newsDiv = document.createElement("div");
  var categoryDiv = document.createElement("div");
  titleDiv.textContent = "Breaking News";
  homeDiv.textContent = "Home";
  newsDiv.textContent = "News";
  categoryDiv.textContent = "Categories";
  headerMain.classList.add("headermain");
  titleDiv.classList.add("title");
  headerHome.classList.add("headerhome");
  homeDiv.classList.add("homeHeader");
  newsDiv.classList.add("newsHeader");
  categoryDiv.classList.add("categoryHeader");
  headerHome.append(homeDiv, newsDiv, categoryDiv);
  headerMain.append(titleDiv, headerHome);
  document.body.prepend(headerMain);
};

/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reklama1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reklama1 */ "./reklama1.png");


var addBlocks = function addBlocks() {
  var main = document.createElement("main");
  var mainBlock = document.createElement("div");
  var allNewsBlock = document.createElement("div");
  var leftBlock = document.createElement("div");
  var categoriesBlock = document.createElement("div");
  var lastNews = document.createElement("div");
  var img = document.createElement("img");
  img.src = _reklama1__WEBPACK_IMPORTED_MODULE_0__["default"];
  img.classList.add("img");
  mainBlock.classList.add("main_block");
  allNewsBlock.classList.add("all_news_block");
  leftBlock.classList.add("left_block");
  categoriesBlock.classList.add("categories_block");
  lastNews.classList.add("last_news");
  lastNews.append(img);
  leftBlock.append(categoriesBlock, lastNews);
  mainBlock.append(leftBlock, allNewsBlock);
  main.append(mainBlock);
  document.body.prepend(main);
};

/* harmony default export */ __webpack_exports__["default"] = (addBlocks);

/***/ }),

/***/ "./renders/renderCategory.js":
/*!***********************************!*\
  !*** ./renders/renderCategory.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./state.js");
/* harmony import */ var _getNewsCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getNewsCategory */ "./getNewsCategory.js");



var renderCategory = function renderCategory() {
  var categoriesBlock = document.querySelector(".categories_block");
  categoriesBlock.textContent = "";
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].categories.forEach(function (category) {
    var categoryParagraph = document.createElement("p");
    categoryParagraph.classList.add("category_paragraph");
    categoryParagraph.textContent = category.title;
    categoryParagraph.addEventListener("click", function () {
      (0,_getNewsCategory__WEBPACK_IMPORTED_MODULE_1__["default"])(category._id);
    });
    categoriesBlock.append(categoryParagraph);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (renderCategory);

/***/ }),

/***/ "./renders/renderComments.js":
/*!***********************************!*\
  !*** ./renders/renderComments.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./state.js");




var renderComments = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var lastNews, commetnsChap, comentatorParagraph;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            lastNews = document.querySelector(".all_news_block");
            commetnsChap = document.createElement("p");
            commetnsChap.classList.add("comments_chap");
            commetnsChap.textContent = "Comments:";
            _state__WEBPACK_IMPORTED_MODULE_2__["default"].comments.forEach(function (comment) {
              var titleParagraph = document.createElement("p");
              var comentatorParagraph = document.createElement("p");
              comentatorParagraph.classList.add("commentator_paragraph");
              titleParagraph.classList.add("title_paragraph");
              titleParagraph.textContent = comment.title;
              comentatorParagraph.textContent = comment.nameCommentator;
              lastNews.append(comentatorParagraph, titleParagraph);
            });
            comentatorParagraph = document.querySelector(".commentator_paragraph");
            comentatorParagraph.before(commetnsChap);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderComments() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (renderComments);

/***/ }),

/***/ "./renders/renderNews.js":
/*!*******************************!*\
  !*** ./renders/renderNews.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./state.js");
/* harmony import */ var _getComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getComments */ "./getComments.js");





var renderNews = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var News;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            News = document.querySelector(".all_news_block");
            News.textContent = "";
            _state__WEBPACK_IMPORTED_MODULE_2__["default"].news.forEach(function (news, indexNews) {
              var p = document.createElement("p");
              p.classList.add("title_p");
              p.textContent = news.title;
              News.append(p);
              p.addEventListener("click", function () {
                News.textContent = "";
                var title = document.createElement("h1");
                title.textContent = news.title;
                p.textContent = news.text;
                p.classList.remove("title_p");
                p.style.fontSize = "16.5px";
                var back = document.createElement("p");
                back.classList.add("back");
                back.textContent = "Back";
                (0,_getComments__WEBPACK_IMPORTED_MODULE_3__["default"])(_state__WEBPACK_IMPORTED_MODULE_2__["default"].news[indexNews]._id);
                back.addEventListener("click", function () {
                  renderNews();
                });
                News.append(title, p, back);
              });
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderNews() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (renderNews);

/***/ }),

/***/ "./state.js":
/*!******************!*\
  !*** ./state.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var initialisationState = {
  news: [],
  categories: [],
  comments: []
};
/* harmony default export */ __webpack_exports__["default"] = (initialisationState);

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./style.css":
/*!**********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style.css ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "footer {\r\n  margin: auto;\r\n}\r\n\r\n.blockFirst {\r\n  height: 150px;\r\n  background-color: rgb(48, 42, 42);\r\n  text-align: center;\r\n  border-radius: 10px;\r\n}\r\n\r\n.blockFooter {\r\n  font-size: 16px;\r\n  line-height: 30px;\r\n  padding-top: 20px;\r\n}\r\n\r\nfooter a {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\nfooter a:hover {\r\n  color: orange;\r\n}\r\n\r\n.breakingNews {\r\n  margin-top: 10px;\r\n  height: 30px;\r\n  color: white;\r\n  cursor: pointer;\r\n  line-height: 25px;\r\n  background-color: red;\r\n}\r\n\r\n.breakingNews:hover {\r\n  color: orange;\r\n}\r\n\r\nfooter li {\r\n  color: white;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  margin: 0;\r\n}\r\n.title_p {\r\n  font-size: 18px;\r\n  margin-bottom: 40px;\r\n  border-bottom: 1px dotted black;\r\n  cursor: pointer;\r\n}\r\n.title_p:hover {\r\n  color: blue;\r\n  font-size: 22px;\r\n}\r\n.headermain {\r\n  width: 100%;\r\n  text-align: center;\r\n  /* border: 2px solid red; */\r\n  border-radius: 10px 10px 0 0;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  margin-bottom: 30px;\r\n}\r\n.title {\r\n  background-color: rgb(209, 3, 3);\r\n  color: bisque;\r\n  width: 100%;\r\n  margin: auto;\r\n  text-align: center;\r\n  font-size: 30px;\r\n  height: 90px;\r\n  /* border-radius: 10px 10px 0 0; */\r\n  line-height: 90px;\r\n  /* border: 0.5px solid white; */\r\n}\r\n.headerhome {\r\n  font-size: 10px;\r\n  background-color: black;\r\n  color: bisque;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  height: 40px;\r\n  padding: 0 200px;\r\n  /* border-radius: 0 0 10px 10px; */\r\n  /* border: 0.5px solid white; */\r\n}\r\n.homeHeader {\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin-left: 20px;\r\n}\r\n.homeHeader:hover {\r\n  color: orange;\r\n}\r\n.newsHeader {\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  margin: auto;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n.newsHeader:hover {\r\n  color: orange;\r\n}\r\n.categoryHeader {\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  margin: auto;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin-right: 20px;\r\n}\r\n.categoryHeader:hover {\r\n  color: orange;\r\n}\r\n.main_block {\r\n  display: flex;\r\n  max-width: 1140px;\r\n  min-height: 1140px;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n}\r\n\r\n.all_news_block {\r\n  background-color: white;\r\n  height: 50%;\r\n  width: 70%;\r\n  box-shadow: 14px 10px 36px -4px rgba(34, 60, 80, 0.2);  border-radius: 20px;\r\n  padding: 20px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.left_block {\r\n  min-height: 1000px;\r\n  width: 25%;\r\n  border-radius: 20px;\r\n}\r\n\r\n.categories_block {\r\n  min-height: 150px;\r\n  height: 100px;\r\n  background-color: white;\r\n  margin-bottom: 50px;\r\n  box-shadow: 14px 10px 36px -4px rgba(34, 60, 80, 0.2);\r\n    border-radius: 20px;\r\n    border: 2px solid black;\r\n    text-align: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n.categories_block p:hover{\r\n  color: blue;\r\n}\r\n\r\n.last_news {\r\n  min-height: 300px;\r\n  background-color: white;\r\n  box-shadow: 14px 10px 36px -4px rgba(34, 60, 80, 0.2);\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.back {\r\n  text-align: right;\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n  color: blue;\r\n  font-size: 18px;\r\n}\r\n.commentator_paragraph {\r\n  color: rgb(5, 5, 104);\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  font-family: sans-serif;\r\n}\r\n.commentator_paragraph:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n.title_paragraph {\r\n  /* border-bottom: 1px solid black; */\r\n  /* opacity: 0.25; */\r\n  margin-left: 10px;\r\n}\r\n.comments_chap{\r\n  font-weight: bold;\r\n  margin-top: 90px;\r\n  border-top: 1px solid black;\r\n  line-height: 80px;\r\n  font-size: 24px;\r\n}\r\n.img{\r\n  width: 100%;\r\n  border-radius: 20px;\r\n  /* border: 2px solid black; */\r\n  display: block;\r\n}\r\n", "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,+BAA+B;EAC/B,eAAe;AACjB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,2BAA2B;EAC3B,4BAA4B;EAC5B,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,gCAAgC;EAChC,aAAa;EACb,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,kCAAkC;EAClC,iBAAiB;EACjB,+BAA+B;AACjC;AACA;EACE,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,gBAAgB;EAChB,kCAAkC;EAClC,+BAA+B;AACjC;AACA;EACE,eAAe;EACf,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,aAAa;AACf;AACA;EACE,eAAe;EACf,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;EACE,eAAe;EACf,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,UAAU;EACV,qDAAqD,GAAG,mBAAmB;EAC3E,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qDAAqD;IACnD,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,0BAA0B;AAC9B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,qDAAqD;EACrD,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,eAAe;EACf,WAAW;EACX,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,0BAA0B;EAC1B,eAAe;AACjB;AACA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,2BAA2B;EAC3B,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,WAAW;EACX,mBAAmB;EACnB,6BAA6B;EAC7B,cAAc;AAChB","sourcesContent":["footer {\r\n  margin: auto;\r\n}\r\n\r\n.blockFirst {\r\n  height: 150px;\r\n  background-color: rgb(48, 42, 42);\r\n  text-align: center;\r\n  border-radius: 10px;\r\n}\r\n\r\n.blockFooter {\r\n  font-size: 16px;\r\n  line-height: 30px;\r\n  padding-top: 20px;\r\n}\r\n\r\nfooter a {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\nfooter a:hover {\r\n  color: orange;\r\n}\r\n\r\n.breakingNews {\r\n  margin-top: 10px;\r\n  height: 30px;\r\n  color: white;\r\n  cursor: pointer;\r\n  line-height: 25px;\r\n  background-color: red;\r\n}\r\n\r\n.breakingNews:hover {\r\n  color: orange;\r\n}\r\n\r\nfooter li {\r\n  color: white;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  margin: 0;\r\n}\r\n.title_p {\r\n  font-size: 18px;\r\n  margin-bottom: 40px;\r\n  border-bottom: 1px dotted black;\r\n  cursor: pointer;\r\n}\r\n.title_p:hover {\r\n  color: blue;\r\n  font-size: 22px;\r\n}\r\n.headermain {\r\n  width: 100%;\r\n  text-align: center;\r\n  /* border: 2px solid red; */\r\n  border-radius: 10px 10px 0 0;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  margin-bottom: 30px;\r\n}\r\n.title {\r\n  background-color: rgb(209, 3, 3);\r\n  color: bisque;\r\n  width: 100%;\r\n  margin: auto;\r\n  text-align: center;\r\n  font-size: 30px;\r\n  height: 90px;\r\n  /* border-radius: 10px 10px 0 0; */\r\n  line-height: 90px;\r\n  /* border: 0.5px solid white; */\r\n}\r\n.headerhome {\r\n  font-size: 10px;\r\n  background-color: black;\r\n  color: bisque;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  height: 40px;\r\n  padding: 0 200px;\r\n  /* border-radius: 0 0 10px 10px; */\r\n  /* border: 0.5px solid white; */\r\n}\r\n.homeHeader {\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin-left: 20px;\r\n}\r\n.homeHeader:hover {\r\n  color: orange;\r\n}\r\n.newsHeader {\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  margin: auto;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n.newsHeader:hover {\r\n  color: orange;\r\n}\r\n.categoryHeader {\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  margin: auto;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin-right: 20px;\r\n}\r\n.categoryHeader:hover {\r\n  color: orange;\r\n}\r\n.main_block {\r\n  display: flex;\r\n  max-width: 1140px;\r\n  min-height: 1140px;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n}\r\n\r\n.all_news_block {\r\n  background-color: white;\r\n  height: 50%;\r\n  width: 70%;\r\n  box-shadow: 14px 10px 36px -4px rgba(34, 60, 80, 0.2);  border-radius: 20px;\r\n  padding: 20px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.left_block {\r\n  min-height: 1000px;\r\n  width: 25%;\r\n  border-radius: 20px;\r\n}\r\n\r\n.categories_block {\r\n  min-height: 150px;\r\n  height: 100px;\r\n  background-color: white;\r\n  margin-bottom: 50px;\r\n  box-shadow: 14px 10px 36px -4px rgba(34, 60, 80, 0.2);\r\n    border-radius: 20px;\r\n    border: 2px solid black;\r\n    text-align: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n.categories_block p:hover{\r\n  color: blue;\r\n}\r\n\r\n.last_news {\r\n  min-height: 300px;\r\n  background-color: white;\r\n  box-shadow: 14px 10px 36px -4px rgba(34, 60, 80, 0.2);\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.back {\r\n  text-align: right;\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n  color: blue;\r\n  font-size: 18px;\r\n}\r\n.commentator_paragraph {\r\n  color: rgb(5, 5, 104);\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  font-family: sans-serif;\r\n}\r\n.commentator_paragraph:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n.title_paragraph {\r\n  /* border-bottom: 1px solid black; */\r\n  /* opacity: 0.25; */\r\n  margin-left: 10px;\r\n}\r\n.comments_chap{\r\n  font-weight: bold;\r\n  margin-top: 90px;\r\n  border-top: 1px solid black;\r\n  line-height: 80px;\r\n  font-size: 24px;\r\n}\r\n.img{\r\n  width: 100%;\r\n  border-radius: 20px;\r\n  /* border: 2px solid black; */\r\n  display: block;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./reklama1.png":
/*!**********************!*\
  !*** ./reklama1.png ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "745b80d96a929fb05cb6fce564e46819.png");

/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js!./style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ (function(module) {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
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
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./footer.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./header.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./main.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./style.css");
/* harmony import */ var _getCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCategory */ "./getCategory.js");
/* harmony import */ var _getNews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getNews */ "./getNews.js");
// eslint-disable-next-line import/no-unresolved






(0,_main__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_getNews__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_getCategory__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_footer__WEBPACK_IMPORTED_MODULE_0__["default"])();
var homeDiv = document.querySelector(".homeHeader");
homeDiv.addEventListener("click", function () {
  (0,_getNews__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map