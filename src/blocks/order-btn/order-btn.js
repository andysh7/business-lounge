;(function ($) {
    'use strict';

    var isInited = false;

    $.widget('bszal.orderBtn', {
        _create: function () {
            this.$orderForm = $('.order-form');

            this._initPlugins();
            this._initEvents();
        },

        _initEvents: function () {
            this._on({
            });
        },

        _initPlugins: function () {
            this.element.magnificPopup({
              type:'inline',
              midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
            });
        }
    });
})(jQuery);
