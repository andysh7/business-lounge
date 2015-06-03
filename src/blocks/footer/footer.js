;(function ($) {
    'use strict';

    $.widget('bszal.footer', {
        _create: function () {
            this.$plane = this.element.find('.footer__plane').not('._fake');
            this.$planeFake = this.element.find('.footer__plane._fake');
            this.$map = $('.map'); // такого желательно избегать
            
            this._initPlanePosition();
            this._initPlugins();
            this._initEvents();
        },

        _initEvents: function () {
            this._on({
                
            });

            var $plane = this.$planeFake;
            var planePos = this.planePos;

            $(window).on({
                'scroll': function() {
                    var currentPlanePos = $plane.offset();

                    // if ($(window).scrollTop() >= planePos.top) {
                    //     $plane.css({
                    //         top: currentPlanePos.top * 1.5,
                    //         left: Math.abs(currentPlanePos.left * 1.5) * (-1)
                    //     });
                    // }
                }
            })
        },

        _initPlugins: function () {
            
        },

        _initPlanePosition: function() {
            var windowW = $(window).outerWidth();
            var planeW = this.$plane.outerWidth();
            var planeH = this.$plane.outerHeight();
            var mapPos = this.$map.offset();
            var planePos = this.$plane.offset();

            // this.planePos = {
            //     top: - (planePos.top - mapPos.top + planeH),
            //     left: windowW - planePos.left
            // }
            
            this.$planeFake.css(planePos);
            this.$plane.addClass('_hidden');
        }
    });
})(jQuery);
