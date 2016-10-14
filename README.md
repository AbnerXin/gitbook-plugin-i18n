# plugin-i18n

This plugin adds i18n buttons in the GitBook website toolbar to share book on social networks.

### Disable this plugin

This is a default plugin and it can be disabled using a `book.json` configuration:

```
{
    plugins: ["-i18n"]
}
```

### Configuration

This plugin can be configured in the `book.json`:

configuration is:

```js
{
    "pluginsConfig": {
        "i18n": {
            "all": [
                "english", "chinese"
            ],
            "ChineseUrl": "../zh-CN",
            "EnglishUrl": "../en-US"
        }
    }
}
```

