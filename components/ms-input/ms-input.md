## 输入组件

### 代码演示

#### 基本使用

``` html
<div :controller="doc-input-basic">
    <xmp is="ms-input" :widget="{col:'name',value:@value,$rules:{required:true,message:'请输入名字'}}"></xmp>
</div>
```

``` js
import * as avalon from 'avalon2';
import 'ane';

const vm = avalon.define({
    $id: 'doc-input-basic',
    value: '123'
});
```

> 继承 [ms-control 组件](#!/form-control) 的所有参数