# Web Extension Store
 
Node library to publish to Chrome extension web store and
Firefox extension web store.

## Chrome

### Basic Usage:

```typescript
import {ChromeWebStore} from "webextension-store";

const store = new ChromeWebStore(
    extensionId,
    clientId,
    refreshToken,
    clientSecret,
);
const chrome_res = await store.uploadExisting(zipfile)
console.log(JSON.stringify(chrome_res))
const publish_res = await store.publish()
console.log(JSON.stringify(publish_res))
```

### Access token:

Read: https://github.com/maoserr/chrome_extension_publish/blob/main/README.md

## Firefox

### Basic Usage:

```typescript
import {MozillaWebStore} from "webextension-store";
const store = new MozillaWebStore(
    extensionId,
    apiKey,
    apiSecret
)
const ff_res = await store.uploadPackage(zipfile)
console.log(JSON.stringify(ff_res))
const new_res = await store.createNewVersion(ff_res.uuid, srcFile)
console.log(JSON.stringify(new_res))
```


### Access token:

Read: https://github.com/maoserr/firefox_extension_publish/blob/main/README.md
