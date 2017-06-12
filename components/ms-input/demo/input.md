# 输入组件

基本用法

``` html
<div :controller="doc-input-basic">
    <xmp is="ms-form" :widget="{$form: @$form}">
        <ms-form-item :widget="{label:'名字'}">
            <ms-input :widget="{id:'test-value',col:'name',value:@value,$rules:{required:true,message:'请输入名字'}}"></ms-input>
        </ms-form-item>
    </xmp>
</div>
```

``` js
import * as avalon from 'avalon2';
import { createForm } from 'ane';

const vm = avalon.define({
    $id: 'doc-input-basic',
    value: '123',
    json: '',
    $form: createForm({
        onFieldsChange(fields, record) {
            vm.json = JSON.stringify(record);
        }
    })
});
```