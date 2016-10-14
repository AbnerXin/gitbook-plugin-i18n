var _ = require('lodash');

module.exports = {
    book: {
        assets: './assets',
        js: [
            'buttons.js'
        ]
    },
    hooks: {
        // Compatibility layer for gitbook < 2.5.0
        config: function(cfg) {
            var language = _.get(cfg, 'links.i18n', {});

            _.each(language, function(type) {
                cfg.pluginsConfig.i18n[type] = [];
            });

            return cfg;
        }

    }
};
