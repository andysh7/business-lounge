;(function ($) {
    'use strict';

    $.widget('bszal.gallery', {
        _create: function () {
            this.$photosSlider = this.element.find('.gallery__photos');
            this.$photosLinks = this.element.find('.gallery__image-link');
            this.$previews = this.element.find('.gallery__nav-item');
            this.items = [];

            this._initPlugins();
            this._initEvents();
        },

        _initEvents: function () {
            var self = this;

            this._on(this.$previews, {
                'click': function(e) {
                    var $el = $(e.currentTarget);
                    var index = $el.index();

                    self.$photosSlider.slick('slickGoTo', index);
                }
            });
        },

        _initPlugins: function () {
            this.$photosSlider.slick({
                autoplay: true,
                autoplaySpeed: 2000
            });

            if (!isMobile.any) {
                this.element.magnificPopup({
                    delegate: '.gallery__image-link',
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    mainClass: 'mfp-img-mobile',
                    closeBtnInside: false,                
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        tCounter: '', // markup of counter
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                    },
                    image: {
                        tError: '<a href="%url%">Изображение #%curr%</a> не может быть загружено.'
                    }
                });
            }
        }
    });
})(jQuery);
