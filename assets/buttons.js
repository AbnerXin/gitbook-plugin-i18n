require(['gitbook', 'jquery'], function(gitbook, $) {

    gitbook.events.bind('start', function(e, config) {
        var SITES = {
            'english': {
                'label': 'English',
                'icon': 'fa fa-globe',
                'onClick': function(e) {
                    e.preventDefault();
                    window.open(config.i18n.EnglishUrl, '_self');
                }
            },
            'chinese': {
                'label': '中文',
                'icon': 'fa fa-language',
                'onClick': function(e) {
                    e.preventDefault();
                    window.open(config.i18n.ChineseUrl, '_self');
                }
            }
        };

        var opts = config.i18n;

        var menu = $.map(opts.all, function(id) {
            var site = SITES[id];

            return {
                text: site.label,
                onClick: site.onClick
            };
        });

        if (menu.length > 0) {
            gitbook.toolbar.createButton({
                icon: 'fa fa-language',
                label: 'Share',
                position: 'left',
                dropdown: [menu]
            });
        }

    });
});
