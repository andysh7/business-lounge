;(function ($) {
    'use strict';

    $.widget('bszal.langSwitcher', {
        _create: function () {
          this.$select = this.element.find('.lang-switcher__select');

          this.element.hide();

          this._initPlugins();
          this._initEvents();
      },
      _initEvents: function () {
          this._on({});
      },
      _initPlugins: function () {
          var self = this;

          this.$select.selectric({
              disableOnMobile: false,
              responsive: true,
              onInit: function () {
                  self._updateCurrentOption();
                  self.element.show();
              },
              optionsItemBuilder: function (itemData, element, index) {
                  var item = {};
                  var $elem = $(element);

                  item.flag = $elem.data('flag-src');
                  item.value = itemData.value;

                  return self._buildItem(item);
              },
              onChange: function (elem) {
                  self._updateCurrentOption();
                  self._onItemChange();
              }
          });
      },
      _buildItem: function (item) {
          return '<span class="lang-switcher__item">' +
                    '<span class="lang-switcher__label">' + item.value + '</span>' +
                 '</span>';
      },
      _updateCurrentOption: function () {
          var optionContent = this._getSelectedContent()
          this.element.find('.selectric .label').html(optionContent);
      },
      _getSelectedContent: function () {
          return this.element.find('li.selected').html();
      },
      _onItemChange: function () {
          var $currentOption = this.$select.find('option:selected');

          var url = $currentOption.data('url');


          document.location.href = url;
          
          // var langCode = $currentOption.data('lang');

          // if (langCode !== undefined) {
          //     var cookiePrefix = BX.message('COOKIE_PREFIX');
          //     var cookieName = cookiePrefix + '_LANG';
          //     if (getCookie(cookieName) !== langCode) {
          //         var date = new Date( new Date().getTime() + 14*24*60*60*1000 );
          //         document.cookie = cookieName + '=' + langCode + "; path=/; expires="+date.toUTCString();
          //     }
          //     document.location.href = '/';
          // } else {
          //     document.location.href = url;
          // }

      }
    });
})(jQuery);
