## 输入组件

#### 基本使用

``` html
<div :controller="doc-textarea-basic">
    <ms-textarea :widget="{value:@value}"></ms-textarea>
</div>
```

``` js
import * as avalon from 'avalon2';
import 'ane';

const vm = avalon.define({
    $id: 'doc-textarea-basic',
    value: '这个家伙很懒，什么也没留下'
});
```

> 继承 [ms-control 组件](#!/form-control) 的所有参数