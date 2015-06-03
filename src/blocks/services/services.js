;(function ($) {
    'use strict';

    var self = this;

    $.widget('bszal.services', {
        _create: function () {

            this.servicesHeight = this.element.outerHeight();
            this.servicesOffsetTop = this.element.offset().top;
            
            this.$overlay = this.element.find('.services__overlay');
            this.$window = $(window);

            self = this;

            this._initPlugins();
            this._initEvents();
        },

        _initEvents: function () {
            this._on({
                
            });

            $(window).on('scroll', function() {
                var screenBottom  = self.$window.scrollTop() + self.$window.outerHeight();
                var visibleHeight = screenBottom - self.servicesOffsetTop;
                var overlayHeight;

                overlayHeight = visibleHeight < 0 ? 0 : self.servicesHeight - visibleHeight + 200;
                
                self.$overlay.css({height: overlayHeight});

                console.log(visibleHeight, overlayHeight);
            });
        },

        _initPlugins: function () {
            
        }
    });
})(jQuery);
