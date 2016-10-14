# plugin-i18n

This plugin adds i18n buttons in the GitBook website toolbar to implement i18n according different url.

### Use this plugin

add a `book.json` configuration to use this plugin:

```
{
    plugins: ["i18n"]
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

