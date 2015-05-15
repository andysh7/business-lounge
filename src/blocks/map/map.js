;(function ($) {
    'use strict';

    $.widget('bszal.yaMap', {
        _create: function () {
            this.$container = this.element.find('.map__container');
            this.myMap = null;
            this.coords = this.element.data('coords') || [];
            this.mapOptions = {
                center: [55.76, 37.64],
                controls: ['fullscreenControl', 'zoomControl', ],
                zoom: 13
            };

            this._initPlugins();
            this._initEvents();
            this._initMap();
        },

        _initEvents: function () {
            this._on({
            });
        },

        _initPlugins: function () {
            
        },

        _initMap: function() {
            var that = this;

            if (typeof ymaps !== 'undefined') {
                ymaps.ready(init);
            }

            function init() {

                that.myMap = new ymaps.Map('map', that.mapOptions);
                
                that.myMap.behaviors.disable('scrollZoom');

                var getPointData = function () {
                    return {
                    };
                };
                
                var getPointOptions = function() {
                    return {
                        iconLayout: 'default#imageWithContent',
                        iconImageHref: './images/map-marker.png',
                        iconImageSize: [45, 72],
                        iconImageOffset: [-25, -92]
                    }
                };
                

                var placemark = new ymaps.Placemark(that.coords, getPointData(), getPointOptions());
                    
                that.myMap.geoObjects.add(placemark);

                that.myMap.setBounds(that.myMap.geoObjects.getBounds(), {
                    checkZoomRange: true,
                    duration: 700
                }).then(
                    function() {
                        var zoom = that.myMap.getZoom();
                        that.myMap.setZoom(zoom - 2);
                    }
                );
                
            }
        }
    });
})(jQuery);
