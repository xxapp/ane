# 选择组件

基本用法

``` html
<div :controller="doc-select-basic">
    <xmp is="ms-form" :widget="{$form: @$form}">
        <ms-form-item :widget="{label:'想看的动漫'}">
            <ms-select :widget="{col:'comic',showSearch:true,mode:'multiple'}">
                <ms-select-option :widget="{value:'onepiece'}">海贼王</ms-select-option>
                <ms-select-option :widget="{value:'conna'}">名侦探柯南</ms-select-option>
                <ms-select-option :widget="{value:'titan'}">进击的巨人</ms-select-option>
                <ms-select-option :widget="{value:'disabled', disabled:true}">禁用</ms-select-option>
                <ms-select-option :widget="{value:'onepunchman'}">一拳超人</ms-select-option>
            </ms-select>
        </ms-form-item>
    </xmp>
</div>
```

``` js
import * as avalon from 'avalon2';
import { createForm } from 'ane';

const vm = avalon.define({
    $id: 'doc-select-basic',
    json: '',
    $form: createForm({
        onFieldsChange(fields, record) {
            vm.json = JSON.stringify(record);
        }
    })
});
```