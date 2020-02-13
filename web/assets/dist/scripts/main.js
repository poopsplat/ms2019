(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/main"],{

/***/ "./assets/scripts/main.js":
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js");
/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(velocity_animate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var waypoints_lib_jquery_waypoints_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! waypoints/lib/jquery.waypoints.js */ "./node_modules/waypoints/lib/jquery.waypoints.js");
/* harmony import */ var waypoints_lib_jquery_waypoints_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(waypoints_lib_jquery_waypoints_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/Router */ "./assets/scripts/util/Router.js");
/* harmony import */ var _util_imageReveals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/imageReveals */ "./assets/scripts/util/imageReveals.js");
/* harmony import */ var _util_appState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/appState */ "./assets/scripts/util/appState.js");
/* harmony import */ var _routes_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/common */ "./assets/scripts/routes/common.js");
/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/home */ "./assets/scripts/routes/home.js");
/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes_home__WEBPACK_IMPORTED_MODULE_6__);
// Import external dependencies

 // Import local dependencies



 // Routes


 // Populate Router instance with DOM routes

var routes = new _util_Router__WEBPACK_IMPORTED_MODULE_2__["default"]({
  common: _routes_common__WEBPACK_IMPORTED_MODULE_5__["default"],
  home: _routes_home__WEBPACK_IMPORTED_MODULE_6___default.a
}); // Inits

_util_imageReveals__WEBPACK_IMPORTED_MODULE_3__["default"].init();
_util_appState__WEBPACK_IMPORTED_MODULE_4__["default"].init(); // Load events

$(document).ready(function () {
  return routes.loadEvents();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/routes/common.js":
/*!*****************************************!*\
  !*** ./assets/scripts/routes/common.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var jquery_bridget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-bridget */ "./node_modules/jquery-bridget/jquery-bridget.js");
/* harmony import */ var jquery_bridget__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_bridget__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! masonry-layout */ "./node_modules/masonry-layout/masonry.js");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_appState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/appState */ "./assets/scripts/util/appState.js");
// Common js




 // Shared vars

var $window = $(window),
    $body = $('body'),
    $document = $(document),
    $imageGrid,
    $toTop = $('#to-top'),
    $smiley = $('.smiley svg'),
    $newSmiley,
    smileyDump,
    smileyCount;
var gridOptions = {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  transitionDuration: 0
};
var smileyMarkup = '<svg class="new-smiley" x="0px" y="0px" viewBox="0 0 798.9 711.2" style="enable-background:new 0 0 798.9 711.2;" xml:space="preserve"><path class="smiley-background" d="M544.6,675.9c-71.3,30.8-158.6,40.9-236,32.7c-40.1-4.3-86.5-18-121.7-38 c-19.3-11-37.4-23.7-55.2-36.8C113,620.1,94.8,609,79.5,591.3c-22.4-25.9-41.5-56.5-50.3-89c-4.4-16.2-15.1-29.6-19.5-46.3 c-5.1-19.5-11-38.9-9-59.4c7.5-76.7,17.9-166.3,66.7-229c20.9-26.8,41.5-57.8,68.9-78.5c13.4-10.2,26.4-20.5,39.8-30.4 c6.9-5.1,14.8-8.5,21.7-13.7c7.9-6,12.4-6.4,21.5-9.6c7.7-2.7,12.6-9.4,20-12.7c7.2-3.3,16-4.4,23.6-7.1 c21.6-7.5,43.5-10.5,66.3-9.8c39.7,1.2,78.7-8.4,119-2.9c18.1,2.5,36.3,4.6,54.4,6.9c22.6,2.9,41.9,9.9,63.7,15.8 c16.6,4.5,32.9,11.8,48.1,19.8c8.9,4.7,16.6,11.9,25.1,16.4c9.9,5.2,20.8,7.1,30.7,13.1c73.7,44.9,114.4,120.4,126.3,204.5 c6.6,46.6-3.2,89.9-11.8,135.2c-7.7,40.5-26.6,76.2-44.6,112.9c-18.4,37.5-54.1,72.1-88.7,94.8c-18.5,12.2-38.1,22.8-57.1,34.1 C589.1,659.6,546.2,679.5,544.6,675.9z"/><path class="smiley-face" d="M544.6,675.9c-71.3,30.8-158.6,40.9-236,32.7c-40.1-4.3-86.5-18-121.7-38c-19.3-11-37.4-23.7-55.2-36.8 C113,620.1,94.8,609,79.5,591.3c-22.4-25.9-41.5-56.5-50.3-89c-4.4-16.2-15.1-29.6-19.5-46.3c-5.1-19.5-11-38.9-9-59.4 c7.5-76.7,17.9-166.3,66.7-229c20.9-26.8,41.5-57.8,68.9-78.5c13.4-10.2,26.4-20.5,39.8-30.4c6.9-5.1,14.8-8.5,21.7-13.7 c7.9-6,12.4-6.4,21.5-9.6c7.7-2.7,12.6-9.4,20-12.7c7.2-3.3,16-4.4,23.6-7.1c21.6-7.5,43.5-10.5,66.3-9.8c39.7,1.2,78.7-8.4,119-2.9 c18.1,2.5,36.3,4.6,54.4,6.9c22.6,2.9,41.9,9.9,63.7,15.8c16.6,4.5,32.9,11.8,48.1,19.8c8.9,4.7,16.6,11.9,25.1,16.4 c9.9,5.2,20.8,7.1,30.7,13.1c73.7,44.9,114.4,120.4,126.3,204.5c6.6,46.6-3.2,89.9-11.8,135.2c-7.7,40.5-26.6,76.2-44.6,112.9 c-18.4,37.5-54.1,72.1-88.7,94.8c-18.5,12.2-38.1,22.8-57.1,34.1C589.1,659.6,546.2,679.5,544.6,675.9z M243.9,66.6 c-1.7-8.7-41.3,17.2-44.5,19.7c-13.3,10.3-27.6,18.4-40.5,29.1c-22.3,18.4-46.7,42.8-62.2,67.7c-10.5,16.9-21.9,35-28.8,53.7 c-6.7,18.3-10.2,37.4-16.3,55.7c-5.8,17.2-6.2,35.1-9,53.2c-3.4,21.8-6.7,43.1-4.8,65.2c1.6,18.1,6.9,36.9,13.5,53.8 c3,7.6,6.1,13.9,7.3,22c1.5,11.1,2.8,12.5,8.9,22.2c3.3,5.2,4.9,10.8,7.5,16.3c3.2,6.9,8.2,10.7,12.7,16.5 c5.2,6.6,8.7,14.3,14.2,20.8c6.2,7.3,13.9,12,20.7,18.5c9.3,9,19.2,17.3,30,24.3c7.5,4.8,15.3,9.1,22.9,13.7 c8,4.9,13.4,12.9,21.3,17.3c14.4,8.1,34.6,12.7,50.2,18.2c18.9,6.6,37,10.3,56.3,15.5c36.6,9.7,80.8,5,118,0.1 c34-4.5,67.7-14.5,101.4-22c20.1-4.5,36.2-17.1,54.6-25.5c18.1-8.2,35.3-17.1,52.2-27.6c30.6-19,56.1-48.7,76.6-78.1 c10.9-15.7,20.6-35.1,27.4-52.9c2.7-7,4.5-13.6,7.9-20.1c4.7-8.9,4.4-16.3,6.4-26.9c2.5-13.2,6.8-24.7,8.8-37.8 c0.9-5.5,2.3-10.3,2.9-15.8c1.1-11.3,3.3-20.6,5-31.6c2.6-16.7-0.2-38.9-2.9-55.3c-3-17.8-7.2-34.8-11.7-52.2 c-8.6-33.6-38.4-70.6-63.6-92.7c-13-11.4-28.2-20.3-43.5-29.1C626.6,93,608.2,82,590.3,76.2c-8.1-2.7-12.7-7.9-20.3-10.9 c-1.2-0.5-3.8,1.2-5.5,0.9c-5.5-1.2-12.5-5.4-17.6-7.6c-16.3-7-37.8-11.4-55.7-12.8c-19.6-1.5-39.1-4.5-58.7-5.3 c-21.7-0.8-42.1,0.9-63.6,2.8c-21,1.8-43.4,0.4-64.1,4.5C283.3,52.1,265.3,66.6,243.9,66.6z M477.7,521.6 c-27.1,4.2-53.3,8.2-80.9,6.4c-26.4-1.7-53.7-11.1-79.4-17.3c-25.1-6.1-52.3-13.3-74.3-27.1c-14.2-8.9-29.7-13.2-44.3-21.7 c-18.2-10.5-33.5-24.9-50-37.7c-12.9-9.9-47.6-22.6-40.5-42.6c10.2-28.9,38.3,1.3,52.2,9.4c18.5,10.9,34.5,25.5,52.3,37.4 c38.8,26,87.3,39.4,130.6,53.1c40.4,12.7,94.3,14.1,134.6,1.6c42-13,82.3-38.3,115.4-66.9c16.1-13.9,26-32.5,36.3-50.5 c3.4-5.9,9.5-19.7,19-19.2c9.3,0.4,6.4,8.2,9.1,14.9c3.8,9.6,7.6,10.1,4.5,21.3c-3.6,13-12.4,18-19.6,27.8 c-12.6,17-22.9,32.8-40.3,46.7c-19.7,15.7-42.8,31.1-65.4,41.6C531.9,501.2,477.8,522.2,477.7,521.6z M451,411.6 c-16.5-4.7-34.5-5.7-50.5-11.8c-16.7-6.4-34.7-19.4-48.5-31.2c-10.5-9-20.3-26.3-0.9-32.4c12.9-4.1,27.2,13.3,38.5,19.4 c14.9,8,28.3,13.8,44.5,18.5c17.8,5.1,28.5,6,40.6-10.5c19.4-26.4-14.2-65.5-27.4-87.8c-11-18.6-65.5-56.7-42.9-79.6 c14.5-14.7,24.6,2.5,33.2,13.6c11.8,15.1,25.3,29.4,36.4,44.9c18.8,26.3,42.7,65.5,42.8,99.2C517,385,479,409.5,451,411.6z  M666.2,222.9c12.4,10.9-16.3,35.7-25.5,41.7c-19.4,12.8-41.5,13.1-62.8,17.9c-18.7,4.2-41.2-9.9-56.6-19.3 c-12.4-7.5-44.6-29.6-16.8-44.6c14.4-7.8,32.8,15.1,45.7,20.4c13.6,5.6,41.7,8.4,56.5,3.5c17.5-5.7,21.4-24.3,35.2-32 c7.5-4.2,11.7-2.3,17.7,2.7C666.4,219.2,650.9,225.1,666.2,222.9z M194.7,255.9c9.2,3.8,18.1,12.8,28.2,13.7 c6.5,0.6,17.5-2.4,24.7-3.2c17.3-1.9,33.1-11.1,47.8-20.3c10.7-6.7,29.3-32.2,43.1-29.6c23.5,4.4,5.1,31.9-4.1,39.7 c-26,22-56.7,37.8-90.5,42.1c-16.1,2.1-29.7-2.2-44.4-9.1c-7.7-3.6-17.9-3.3-21-13.7C175.4,265.3,182.7,256.3,194.7,255.9z"/></svg>'; // Lazy Sizes Config

lazySizes.cfg.expand = 600;
document.addEventListener('lazyloaded', function (e) {
  $(e.target).closest('figure').addClass('-loaded');
});
/* harmony default export */ __webpack_exports__["default"] = ({
  // JavaScript to be fired on all pages
  init: function init() {
    // Set up libraries to be used with jQuery
    jquery_bridget__WEBPACK_IMPORTED_MODULE_0___default()('masonry', masonry_layout__WEBPACK_IMPORTED_MODULE_1___default.a, $);
    imagesloaded__WEBPACK_IMPORTED_MODULE_2___default.a.makeJQueryPlugin($); // Init Functions

    _initMasonry();

    _initToTopButton();

    _initSmileys();

    function _initMasonry() {
      if (!$('.masonry-grid').length) {
        return;
      }

      var $imageGrid = $('.masonry-grid').masonry(gridOptions);
      $imageGrid.imagesLoaded().progress(function () {
        $imageGrid.masonry('layout');
      });
      document.addEventListener('lazyloaded', function (e) {
        $imageGrid.masonry('layout');
      });
    }

    function _initToTopButton() {
      $toTop.on('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    }

    function _initSmileys() {
      smileyCount = 0;
      $smiley.on('click', function () {
        smileyDump = setInterval(newSmiley, 500);
      });

      function newSmiley() {
        if (smileyCount == 0) {
          $body.append(smileyMarkup);
          $newSmiley = $('.new-smiley');
        } else {
          $newSmiley = $newSmiley.clone().appendTo($body);
        }

        var newX = randomPercentage();
        var newY = randomPercentage();
        var newScale = Math.random() * 10;
        var newAngle = Math.floor(Math.random() * (360 - 1) + 1);

        var newColor = _getRandomColor();

        $newSmiley.css({
          'top': newY,
          'left': newX,
          'transform': 'scale(' + newScale + ') translate(-50%, -50%) rotate(' + newAngle + 'deg)'
        }).find('.smiley-background').css('fill', newColor);
        smileyCount++;
      }

      function randomPercentage() {
        var percentage = Math.floor(Math.random() * (100 - 2)) + 1;
        return percentage + '%';
      }

      function _getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';

        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
      }

      $document.on('click', '.new-smiley', function () {
        clearInterval(smileyDump);
        var smileys = $('.new-smiley');

        var _loop = function _loop() {
          var $this = $(smileys[i]);
          setTimeout(function () {
            $this.remove();
            smileyCount--;
          }, i * 10);
        };

        for (var i = 0; i < smileys.length; i++) {
          _loop();
        }
      });
    }
  },
  finalize: function finalize() {// JavaScript to be fired on all pages, after page specific JS is fired
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scripts/routes/home.js":
/*!***************************************!*\
  !*** ./assets/scripts/routes/home.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/scripts/util/Router.js":
/*!***************************************!*\
  !*** ./assets/scripts/util/Router.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _camelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camelCase */ "./assets/scripts/util/camelCase.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * DOM-based Routing
 *
 * Based on {@link http://goo.gl/EUTi53|Markup-based Unobtrusive Comprehensive DOM-ready Execution} by Paul Irish
 *
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing e.g. a finalize event
 */

var Router =
/*#__PURE__*/
function () {
  /**
   * Create a new Router
   * @param {Object} routes
   */
  function Router(routes) {
    _classCallCheck(this, Router);

    this.routes = routes;
  }
  /**
   * Fire Router events
   * @param {string} route DOM-based route derived from body classes (`<body class="...">`)
   * @param {string} [event] Events on the route. By default, `init` and `finalize` events are called.
   * @param {string} [arg] Any custom argument to be passed to the event.
   */


  _createClass(Router, [{
    key: "fire",
    value: function fire(route) {
      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'init';
      var arg = arguments.length > 2 ? arguments[2] : undefined;
      document.dispatchEvent(new CustomEvent('routed', {
        bubbles: true,
        detail: {
          route: route,
          fn: event
        }
      }));
      var fire = route !== '' && this.routes[route] && typeof this.routes[route][event] === 'function';

      if (fire) {
        this.routes[route][event](arg);
      }
    }
    /**
     * Automatically load and fire Router events
     *
     * Events are fired in the following order:
     *  * common init
     *  * page-specific init
     *  * page-specific finalize
     *  * common finalize
     */

  }, {
    key: "loadEvents",
    value: function loadEvents() {
      var _this = this;

      // Fire common init JS
      this.fire('common'); // Fire page-specific init JS, and then finalize JS

      if (document.body.className.match(/page\-/)) {
        document.body.className.match(/page\-([^ ]+)/).map(_camelCase__WEBPACK_IMPORTED_MODULE_0__["default"]).forEach(function (className) {
          _this.fire(className);

          _this.fire(className, 'finalize');
        });
      } // Fire common finalize JS


      this.fire('common', 'finalize');
    }
    /**
     * Cleanup called from swup for live page reloads
     *
     * e.g. any carousels, scroll handlers, etc
     */

  }, {
    key: "unload",
    value: function unload() {
      var _this2 = this;

      // Fire common unload JS
      this.fire('common', 'unload'); // Fire page-specific unload JS

      if (document.body.className.match(/page\-/)) {
        document.body.className.match(/page\-([^ ]+)/).map(_camelCase__WEBPACK_IMPORTED_MODULE_0__["default"]).forEach(function (className) {
          _this2.fire(className, 'unload');
        });
      }
    }
  }]);

  return Router;
}();

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./assets/scripts/util/appState.js":
/*!*****************************************!*\
  !*** ./assets/scripts/util/appState.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Shared var storage for state
var appState = {
  isAnimating: false,
  navOpen: false,
  modalOpen: false,
  navStuck: false,
  requestInProgress: false,
  breakpoints: {},
  init: function init() {
    // Bind updateBreakpoints to domready and resize
    document.addEventListener('DOMContentLoaded', appState.updateBreakpoints);
    window.addEventListener('resize', appState.updateBreakpoints);
  },
  updateBreakpoints: function updateBreakpoints() {
    // Check breakpoint indicator in DOM ( :after { content } is controlled by CSS media queries )
    var breakpointIndicatorString = window.getComputedStyle(document.querySelector('#breakpoint-indicator'), ':after').getPropertyValue('content').replace(/['"]+/g, '');
    appState.breakpoints['xl'] = breakpointIndicatorString === 'xl';
    appState.breakpoints['lg'] = breakpointIndicatorString === 'lg' || appState.breakpoints['xl'];
    appState.breakpoints['nav'] = breakpointIndicatorString === 'nav' || appState.breakpoints['lg'];
    appState.breakpoints['md'] = breakpointIndicatorString === 'md' || appState.breakpoints['nav'];
    appState.breakpoints['sm'] = breakpointIndicatorString === 'sm' || appState.breakpoints['md'];
    appState.breakpoints['xs'] = breakpointIndicatorString === 'xs' || appState.breakpoints['sm'];
  }
};
/* harmony default export */ __webpack_exports__["default"] = (appState);

/***/ }),

/***/ "./assets/scripts/util/camelCase.js":
/*!******************************************!*\
  !*** ./assets/scripts/util/camelCase.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * the most terrible camelizer on the internet, guaranteed!
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */
/* harmony default export */ __webpack_exports__["default"] = (function (str) {
  return "".concat(str.charAt(0).toLowerCase()).concat(str.replace(/[\W_]/g, '|').split('|').map(function (part) {
    return "".concat(part.charAt(0).toUpperCase()).concat(part.slice(1));
  }).join('').slice(1));
});

/***/ }),

/***/ "./assets/scripts/util/imageReveals.js":
/*!*********************************************!*\
  !*** ./assets/scripts/util/imageReveals.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {// Image reveal treatment as you scroll
//
// Fades and slides in images as they appear in the viewport
var $reveals,
    activated = [],
    $window = $(window),
    windowHeight,
    scrollTop,
    ticking;
var imageReveals = {
  // Init sticky headers
  init: function init() {
    if (!$('.-reveal').length) {
      return;
    } // Reset activated


    activated = [];
    $reveals = $('.-reveal');
    imageReveals.resize();
    imageReveals.update();
    $window.on('scroll.reveals', imageReveals.scrolling);
    $window.on('resize.reveals', imageReveals.resize);
    $window.on('load.reveals', imageReveals.resize); // Reposition after lazyloaded images show

    document.addEventListener('lazyloaded', function (e) {
      imageReveals.resize();
    });
  },
  // Request update using requestAnimationFrame
  requestTick: function requestTick() {
    if (!ticking) {
      requestAnimationFrame(imageReveals.update);
    }

    ticking = true;
  },
  // Update image reveal
  update: function update() {
    ticking = false;
    scrollTop = $window.scrollTop(); // Find current sticky section title based on scroll position

    $reveals.each(function (i) {
      if (!activated[i] && this.getAttribute('data-originalPosition') <= scrollTop + windowHeight - windowHeight * 0.05) {
        $(this).addClass('-active');
        activated[i] = 1;
      }
    });
  },
  // Resize, recalculate positions
  resize: function resize(event) {
    windowHeight = $window.height();
    $reveals.each(function (i) {
      var $this = $(this);
      $this.attr('data-originalPosition', $this.offset().top);
    });
  },
  // Scrolling
  scrolling: function scrolling(event) {
    imageReveals.requestTick();
  },
  // Garbage collection
  unload: function unload() {
    $window.off('scroll.reveals resize.reveals load.reveals');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (imageReveals);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************************!*\
  !*** multi ./assets/scripts/main.js ./assets/styles/main.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/developer/Sites/ms2019/assets/scripts/main.js */"./assets/scripts/main.js");
module.exports = __webpack_require__(/*! /Users/developer/Sites/ms2019/assets/styles/main.scss */"./assets/styles/main.scss");


/***/ })

},[[0,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=main.js.map