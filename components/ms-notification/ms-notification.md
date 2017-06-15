## 通知提醒框

### 基本用法

```html
<div :controller="doc-notification-basic">
    <button type="button" class="btn btn-primary" :click="@info">普通通知</button>
    <button type="button" class="btn btn-default" :click="@success">成功通知</button>
    <button type="button" class="btn btn-default" :click="@error">失败通知</button>
    <button type="button" class="btn btn-default" :click="@warning">警告通知</button>
</div>
```

```js
import * as avalon from 'avalon2';
import { notification } from 'ane';

avalon.define({
    $id: 'doc-notification-basic',
    info() {
        notification.info({
            message: '这是一条普通通知',
            title: '通知'
        });
    },
    success() {
        notification.success({
            message: '这是一条成功通知',
            title: '通知'
        });
    },
    error() {
        notification.error({
            message: '这是一条失败通知',
            title: '通知'
        });
    },
    warning() {
        notification.warn({
            message: '这是一条警告通知',
            title: '通知'
        });
    }
});
```

### API

- `notification.success({ message, title, timeout })`
- `notification.error({ message, title, timeout })`
- `notification.info({ message, title, timeout })`
- `notification.warning({ message, title, timeout })`
- `notification.warn({ message, title, timeout })` 同 notification.warning

| 参数 | 说明 | 类型 | 默认值 | 是否可选 |
| --- | --- | --- | --- | --- |
| message | 通知内容 | string | - | 必选 |
| title | 通知标题 | string | - | 可选 |
| timeout | 自动关闭的延时，单位毫秒 | number | 3000 | 可选 |

可以改变默认参数

- `notification.config({ timeout })`

| 参数 | 说明 | 类型 | 默认值 | 是否可选 |
| --- | --- | --- | --- | --- |
| timeout | 自动关闭的延时，单位毫秒 | number | 3000 | 可选 |