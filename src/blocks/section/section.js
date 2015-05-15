;(function ($) {
    'use strict';

    $.widget('bszal.section', {
        _create: function () {
            this.$background = this.element.find('.section__background');
            this.$video = this.element.find('.section__video');

            this._initPlugins();
            this._initEvents();
        },

        _initEvents: function () {
        },

        _initPlugins: function () {
        
            // если мобилка - скрываем блок с видео
            if (isMobile.any) {
                this.$video.hide();
                this.element.addClass('_no_video');
            }

            // плавно показываем блок
            this.$background.fadeIn(1000);
        }
    });
})(jQuery);
