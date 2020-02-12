// Common js

import jQueryBridget from 'jquery-bridget';
import Flickity from 'flickity/dist/flickity.pkgd.js';
import Waypoints from 'waypoints/lib/jquery.waypoints.js';
import Masonry from 'masonry-layout';
import ImagesLoaded from 'imagesloaded';
import Lazysizes from 'lazysizes';

import appState from '../util/appState';

// Shared vars
let $window = $(window),
    $body = $('body'),
    $document = $(document),
    $imageGrid,
    $toTop = $('#to-top');

let gridOptions = {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  transitionDuration: 0
}

// Lazy Sizes Config
lazySizes.cfg.expand = 600;

document.addEventListener('lazyloaded', function(e){
  $(e.target).closest('figure').addClass('-loaded');
});

export default {
  // JavaScript to be fired on all pages
  init() {
    // Set up libraries to be used with jQuery
    jQueryBridget('flickity', Flickity, $);
    jQueryBridget( 'masonry', Masonry, $ );
    ImagesLoaded.makeJQueryPlugin( $ );

    // Init Functions
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

      if (!appState.breakpoints['md'] && $('.masonry-grid').data('masonry')) {
        $('.masonry-grid').masonry('destroy');
      } else if (appState.breakpoints['md']) {
        var $imageGrid = $('.masonry-grid').masonry(gridOptions);

        $imageGrid.imagesLoaded().progress( function() {
          $imageGrid.masonry('layout');
        });

        document.addEventListener('lazyloaded', function(e) {
          $imageGrid.masonry('layout');
        });
      }
    }

    function _initToTopButton() {
      $toTop.on('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
    }

    function _resize() {
      _initMasonry();
    }

    $(window).resize(_resize);
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
