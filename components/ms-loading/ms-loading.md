## 加载中蒙版

### 基本用法

```html
<div :controller="doc-loading-basic">
    <div :loading="@loading" style="width: 300px; height: 150px; line-height: 150px; font-size: 20px; text-align: center; background: #c0c0c0;">
        hello world!
    </div>
    <button type="button" class="btn btn-primary" :click="@loading = !@loading">开关</button>
</div>
```

```js
import * as avalon from 'avalon2';
import 'ane';

avalon.define({
    $id: 'doc-loading-basic',
    loading: true
});
```

### 全局 loading 方法

```html
<div :controller="doc-loading-global">
    <button type="button" class="btn btn-primary" :click="@show">全局loading，三秒后关闭</button>
</div>
```

```js
import { Loading } from 'ane';

avalon.define({
    $id: 'doc-loading-global',
    show() {
        Loading.show();

        setTimeout(function () {
            Loading.hide();
        }, 3000);
    }
});
```