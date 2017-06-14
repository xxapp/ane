## 表单组件

### 带验证功能的表单

```html
<div :controller="doc-form-validate">
    <xmp is="ms-form" :widget="{$form:@$form}">
        <ms-form-item :widget="{label:'标题'}">
            <ms-input :widget="{col:'title',$rules:{required:true}}"></ms-input>
        </ms-form-item>
        <ms-form-item :widget="{label:'内容'}">
            <ms-textarea :widget="{col:'content',$rules:{required:true}}"></ms-textarea>
        </ms-form-item>
        <button type="button" class="btn btn-primary btn-sm" :click="@save">保存</button>
    </xmp>
    <pre>{{@json}}</pre>
</div>
```

```js
import * as avalon from 'avalon2';
import { createForm, message } from 'ane';

const vm = avalon.define({
    $id: 'doc-form-validate',
    json: '',
    $form: createForm({
        onFieldsChange(fields, record) {
            vm.json = JSON.stringify(record);
        }
    }),
    save() {
        vm.$form.validateFields().then(isAllValid => {
            if (isAllValid) {
                message.success({
                    content: '保存成功'
                });
            }
        })
    }
});
```

### 用于搜索的表单

```html
<div :controller="doc-form-search">
    <xmp is="ms-form" :widget="{$form:@$form,type:'search',inline:true}">
        <ms-form-item :widget="{label:'标题：'}">
            <ms-input :widget="{col:'title'}"></ms-input>
        </ms-form-item>
        <ms-form-item :widget="{label:'内容：'}">
            <ms-input :widget="{col:'content'}"></ms-input>
        </ms-form-item>
        <button type="button" class="btn btn-primary btn-sm" :click="@save">搜索</button>
    </xmp>
    <pre>{{@json}}</pre>
</div>
```

```js
import * as avalon from 'avalon2';
import { createForm, message } from 'ane';

const vm1 = avalon.define({
    $id: 'doc-form-search',
    json: '',
    $form: createForm({
        onFieldsChange(fields, record) {
            vm1.json = JSON.stringify(record);
        }
    }),
    save() {
        vm1.$form.validateFields().then(isAllValid => {
            if (isAllValid) {
                message.success({
                    content: JSON.stringify(vm1.$form.record)
                });
            }
        })
    }
});
```

### 组件参数

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| $form | 表单数据集散中心 | createForm() | null |
| type | 如果为 search，则只在表单项的值被用户手动修改时，才会加入到最后要提交的数据对象上，用于搜索表单 | string | '' |
| horizontal | 是否添加 form-horizontal 到 class | boolean | false |
| inline | 是否添加 form-inline 到 class | boolean | false |