;(function ($) {
    'use strict';

    var isInited = false;

    $.widget('bszal.map', {
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
            //this._initEvents();
            //this._initMap();
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

                var HintLayout = ymaps.templateLayoutFactory.createClass(
                    '<div class="map-hint" style="background: #fff;">' +
                    '<img class="map-hint__photo" src="{{ properties.imageSrc }}" width="245" height="123" alt="">' +
                    '<div class="map-hint__description">{{ properties.description }}</div>' +
                    '</div>', {
                        getShape: function () {
                            var el = this.getElement(),
                                result = null;
                            if (el) {
                                var firstChild = el.firstChild;
                                result = new ymaps.shape.Rectangle(
                                    new ymaps.geometry.pixel.Rectangle([
                                        [0, 0],
                                        [firstChild.offsetWidth, firstChild.offsetHeight]
                                    ])
                                );
                            }
                            return result;
                        }
                    }
                );

                var getPointData = function () {
                    return {
                    };
                };
                
                var getPointOptions = function() {
                    return {
                        iconLayout: 'default#imageWithContent',
                        iconImageHref: '/images/map-marker.png',
                        iconImageSize: [45, 72],
                        iconImageOffset: [-3, -12],
                        showEmptyHint: true,
                        hintLayout: HintLayout
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
                        //that.myMap.setZoom(zoom - 3);
                    }
                );
                
            }
        }
    });
})(jQuery);
