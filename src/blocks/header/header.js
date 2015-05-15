;(function ($) {
    'use strict';

    $.widget('bszal.header', {
        _create: function () {
            this.$background = this.element.find('.header__background');
            this.$slider = this.element.find('.header__slider');
            this.$video = this.element.find('.header__video');

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
            var isSliderEnabled = false;

            // если мобилка - скрываем блок с видео
            if (isMobile.any) {
                this.$video.hide();
                isSliderEnabled = true;
            } else {
                // если десктоп и есть видео - оставляем видео, скрываем слайдер
                if (this.$video.length) {
                    this.$slider.hide();
                } else {
                    isSliderEnabled = true;
                }
            }

            if (isSliderEnabled) {
                // иначе просто инициализируем слайдер
                this.$slider.slick({
                    autoplay: true,
                    autoplaySpeed: 2000
                });
            }

            // плавно показываем блок
            this.$background.fadeIn(1000);
        }
    });
})(jQuery);
