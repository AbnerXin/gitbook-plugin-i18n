
require(['gitbook', 'jquery'], function(gitbook, $) {

    gitbook.events.bind('start', function(e, config) {
        var SITES = {
            'english': {
                'label': 'English',
                'icon': 'fa fa-globe',
                'onClick': function(e) {
                    e.preventDefault();
                    var URL= GetUrlRelativePath();
                    var newUrl ='';
                    if (URL.includes('/zh-CN/')){
                        newUrl=URL.replace('/zh-CN/', config.i18n.EnglishUrl);
                    }else {
                        newUrl=URL;
                    }
                    window.open(newUrl, '_self');
                }
            },
            'chinese': {
                'label': '中文',
                'icon': 'fa fa-language',
                'onClick': function(e) {
                    e.preventDefault();
                    var URL= GetUrlRelativePath();
                    var newUrl ='';
                    if (URL.includes('/en-US/')){
                        newUrl=URL.replace('/en-US/', config.i18n.ChineseUrl);
                    }else {
                        newUrl=URL;
                    }
                    window.open(newUrl, '_self');
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

function GetUrlRelativePath() {
    var url = document.location.toString();
    var arrUrl = url.split('//');

    var start = arrUrl[1].indexOf('/');
    var relUrl = arrUrl[1].substring(start);// stop省略，截取从start开始到结尾的所有字符

    if(relUrl.indexOf('?') != -1){
        relUrl = relUrl.split('?')[0];
    }
    return relUrl;
}
