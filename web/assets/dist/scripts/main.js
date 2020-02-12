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
/* harmony import */ var flickity_dist_flickity_pkgd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flickity/dist/flickity.pkgd.js */ "./node_modules/flickity/dist/flickity.pkgd.js");
/* harmony import */ var flickity_dist_flickity_pkgd_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flickity_dist_flickity_pkgd_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var waypoints_lib_jquery_waypoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! waypoints/lib/jquery.waypoints.js */ "./node_modules/waypoints/lib/jquery.waypoints.js");
/* harmony import */ var waypoints_lib_jquery_waypoints_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(waypoints_lib_jquery_waypoints_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! masonry-layout */ "./node_modules/masonry-layout/masonry.js");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_appState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/appState */ "./assets/scripts/util/appState.js");
// Common js






 // Shared vars

var $window = $(window),
    $body = $('body'),
    $document = $(document),
    $imageGrid,
    $toTop = $('#to-top');
var gridOptions = {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  transitionDuration: 0
}; // Lazy Sizes Config

lazySizes.cfg.expand = 600;
document.addEventListener('lazyloaded', function (e) {
  $(e.target).closest('figure').addClass('-loaded');
});
/* harmony default export */ __webpack_exports__["default"] = ({
  // JavaScript to be fired on all pages
  init: function init() {
    // Set up libraries to be used with jQuery
    jquery_bridget__WEBPACK_IMPORTED_MODULE_0___default()('flickity', flickity_dist_flickity_pkgd_js__WEBPACK_IMPORTED_MODULE_1___default.a, $);
    jquery_bridget__WEBPACK_IMPORTED_MODULE_0___default()('masonry', masonry_layout__WEBPACK_IMPORTED_MODULE_3___default.a, $);
    imagesloaded__WEBPACK_IMPORTED_MODULE_4___default.a.makeJQueryPlugin($); // Init Functions

    _initCarousels();

    _initMasonry();

    _initToTopButton();

    function _initCarousels() {
      $('.image-carousel').flickity({
        prevNextButtons: false,
        lazyLoad: 4,
        imagesLoaded: true,
        pageDots: false,
        adaptiveHeight: true
      });
    }

    function _initMasonry() {
      if (!$('.masonry-grid').length) {
        return;
      }

      if (!_util_appState__WEBPACK_IMPORTED_MODULE_6__["default"].breakpoints['md'] && $('.masonry-grid').data('masonry')) {
        $('.masonry-grid').masonry('destroy');
      } else if (_util_appState__WEBPACK_IMPORTED_MODULE_6__["default"].breakpoints['md']) {
        var $imageGrid = $('.masonry-grid').masonry(gridOptions);
        $imageGrid.imagesLoaded().progress(function () {
          $imageGrid.masonry('layout');
        });
        document.addEventListener('lazyloaded', function (e) {
          $imageGrid.masonry('layout');
        });
      }
    }

    function _initToTopButton() {
      $toTop.on('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    }

    function _resize() {
      _initMasonry();
    }

    $(window).resize(_resize);
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