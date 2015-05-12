;(function ($) {
    'use strict';

    var isInited = false;

    $.widget('bvforme.map', {
        _create: function () {
            this.$mapContainer = this.$container;
            this.myMap = null;
            this.isInited = false;
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
            
            if (isInited) return;

            isInited = true;

            ymaps.ready(init);

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
                        iconImageHref: '/images/map-marker.png',
                        iconImageSize: [45, 72],
                        iconImageOffset: [-3, -12]
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
                        that.myMap.setZoom(zoom - 3);
                    }
                );
                
            }
        }
    });
})(jQuery);
