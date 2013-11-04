/*!
 * jQuery preload image plugin
 * Original author: zhailin
 */

; (function ($, window, document, undefined) {
    var pluginName = 'preloadImage',
        defaults = {
            fadeIn: 'true',
            duration: '1s',
            distance: '50'
        };
    
    function Plugin(element, options) {
        this.element = $(element);
        this.options = $.extend({}, defaults, options);

        this.init(this.element, this.options);
    }

    Plugin.prototype.init = function (element, options) {
        var img = new Image(),
            imgUrl = options.url || element.css('background-image').slice(4, -1),
            self = this;

        img.onload = function () {
            img.onload = null;
            self.showImage(element, options, img);
        };

        img.src = imgUrl;
    };

    Plugin.prototype.showImage = function (element, options, img) {
            options.url && element.css('background-image', 'url(' + options.url + ')');
            options.direction && element.css(options.direction, '-=' + options.distance);

            if (options.fadeIn) {
                var asyncShow = function () {
                    options.direction && element.css(options.direction, '+=' + options.distance);

                    element.css({
                        'transition': 'all ' + (options.duration),
                        'opacity': '1'
                    });
                };

                setTimeout(asyncShow, 0);
            } else {
                element.show();
            }

            delete img;

            options.nextImage && $(options.nextImage.selector).preloadImage(options.nextImage);
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };
})(jQuery, window, document);