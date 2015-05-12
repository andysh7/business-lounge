;(function ($) {
    'use strict';

    $.widget('bszal.orderForm', {
        _create: function () {
            this.$select = this.element.find('.order-form__select select');
            this.$calendarInput = this.element.find('.order-form__input._calendar');
            this.$submitBtn = this.element.find('.order-form__btn');
            
            this._initPlugins();
            this._initEvents();
        },

        _initEvents: function () {
            this._on(this.$submitBtn, {
                'click': function(e) {
                    console.log('button clicked');
                }
            });

            // if form submited, prevent default beahviour
            this._on(this.element, {
                'submit': function(e) {
                    e.preventDefault();

                    console.log('form submited');

                    // do some stuff here...
                }
            });
        },

        _initPlugins: function () {
            this.$select.selectric();
            this.$calendarInput.datepicker({
                language: 'ru'
            });
        }
    });
})(jQuery);
