## 多选框

### 基本用法

```html
<div>
    <ms-checkbox>checkbox</ms-checkbox>
</div>
```

### 单选框组

```html
<div :controller="doc-checkbox-group">
    <ms-checkbox-group :widget="{
        options:[
            { label: '编程', value: 'code' },
            { label: '其他', value: 'other' }
        ],
        onChange:@handleChange
    }">
    </ms-checkbox-group>
</div>
```

```js
import * as avalon from 'avalon2';
import 'ane';

const vm = avalon.define({
    $id: 'doc-checkbox-group',
    handleChange(e) {
        console.log(e.target.value);
    }
});
```

### 组件参数

checkbox

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| label | 展示值 | string | '' |
| checked | 当前选择的 value 值 | boolean | false |
| value | 此选项的 value 值 | string | '' |
| disabled | 是否禁用 | boolean | false |
| onChange | 选择改变时的回调 | function(e) | noop |
| indeterminate | 设置半选状态，只负责样式控制 | boolean | false |

radio-checkbox

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| value | 选中的值数组 | string\[\] | \[\] |
| disabled | 是否禁用所有选项 | boolean | false |
| options | 选项数组 | Array<{ label: string value: string disabled?: boolean }> | \[\] |

> radio-checkbox 继承 [ms-control 组件](#!/form-control) 的所有参数