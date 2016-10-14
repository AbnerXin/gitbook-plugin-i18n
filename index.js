var _ = require('lodash');

module.exports = {
    book: {
        assets: './assets',
        js: [
            'buttons.js'
        ]
    },
    hooks: {
        config: function(cfg) {
            var language = _.get(cfg, 'links.i18n', {});

            _.each(language, function(type) {
                cfg.pluginsConfig.i18n[type] = [];
            });

            return cfg;
        }

    }
};
