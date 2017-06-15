## 单选框

### 基本用法

```html
<div>
    <ms-radio>radio</ms-radio>
</div>
```

### 单选框组

```html
<div :controller="doc-radio-group">
    <ms-radio-group :widget="{
        options:[
            { label: '男', value: 'M' },
            { label: '女', value: 'F' }
        ],
        onChange:@handleChange
    }">
    </ms-radio-group>
</div>
```

```js
import * as avalon from 'avalon2';
import 'ane';

const vm = avalon.define({
    $id: 'doc-radio-group',
    handleChange(e) {
        console.log(e.target.value);
    }
});
```

### 组件参数

radio

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| label | 展示值 | string | '' |
| checked | 当前选择的 value 值 | string | '' |
| value | 此选项的 value 值 | string | '' |
| disabled | 是否禁用 | boolean | false |
| onChange | 选择改变时的回调 | function(e) | noop |

radio-group

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| disabled | 是否禁用所有选项 | boolean | false |
| options | 选项数组 | Array<{ label: string value: string disabled?: boolean }> | \[\] |

> radio-group 继承 [ms-control 组件](#!/form-control) 的所有参数