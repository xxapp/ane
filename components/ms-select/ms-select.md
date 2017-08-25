## 选择组件

### 基本用法

``` html
<div :controller="doc-select-basic">
    <xmp is="ms-form" :widget="{$form: @$form}">
        <ms-form-item>
            <ms-select :widget="{col:'comic'}">
                <ms-select-option :widget="{value:'onepiece'}">海贼王</ms-select-option>
                <ms-select-option :widget="{value:'conna'}">名侦探柯南</ms-select-option>
                <ms-select-option :widget="{value:'titan'}">进击的巨人</ms-select-option>
                <ms-select-option :widget="{value:'disabled', disabled:true}">禁用</ms-select-option>
                <ms-select-option :widget="{value:'onepunchman'}">一拳超人</ms-select-option>
            </ms-select>
        </ms-form-item>
    </xmp>
    <pre>{{@json}}</pre>
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

### 多选

``` html
<div :controller="doc-select-multiple">
    <ms-select :widget="{col:'comic',mode:'multiple'}">
        <ms-select-option :widget="{value:'onepiece'}">海贼王</ms-select-option>
        <ms-select-option :widget="{value:'conna'}">名侦探柯南</ms-select-option>
        <ms-select-option :widget="{value:'titan'}">进击的巨人</ms-select-option>
        <ms-select-option :widget="{value:'disabled', disabled:true}">禁用</ms-select-option>
        <ms-select-option :widget="{value:'onepunchman'}">一拳超人</ms-select-option>
    </ms-select>
</div>
```

``` js
import * as avalon from 'avalon2';
import { createForm } from 'ane';

avalon.define({
    $id: 'doc-select-multiple'
});
```

### 带搜索框

``` html
<div :controller="doc-select-multiple">
    <ms-select :widget="{col:'comic',showSearch:true}">
        <ms-select-option :widget="{value:'onepiece'}">海贼王</ms-select-option>
        <ms-select-option :widget="{value:'conna'}">名侦探柯南</ms-select-option>
        <ms-select-option :widget="{value:'titan'}">进击的巨人</ms-select-option>
        <ms-select-option :widget="{value:'disabled', disabled:true}">禁用</ms-select-option>
        <ms-select-option :widget="{value:'onepunchman'}">一拳超人</ms-select-option>
    </ms-select>
</div>
```

``` js
import * as avalon from 'avalon2';
import { createForm } from 'ane';

avalon.define({
    $id: 'doc-select-multiple'
});
```

### 远程加载数据

``` html
<div :controller="doc-select-remote">
    <ms-select :widget="{mode:'multiple',showSearch:true,remote:true,remoteMethod:@fetchOptions}"></ms-select>
</div>
```

``` js
import * as avalon from 'avalon2';
import { createForm } from 'ane';
import * as $ from 'jquery';

avalon.define({
    $id: 'doc-select-remote',
    fetchOptions(query) {
        return $.getJSON('https://randomuser.me/api/?results=5').then(json => {
            return json.results.map(user => ({
                label: user.name.first + user.name.last,
                value: user.login.username
            }));
        });
    }
});
```

### 组件参数

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| value | 默认值 | string\[\] | \[\] |
| mode | 模式 | 'combobox' \| 'multiple' \| 'tags' | '' |
| options | 下拉选项，可以替代ms-select-option | {label:string,value:string,disabled:boolean}\[\] | \[\] |
| showSearch | 是否显示搜索框 | boolean | false |
| remote | 是否为远程搜索 | boolean | false |
| remoteMethod | remoteMethod 当remote为true时调用，包含远程搜索要执行的请求，要求返回一个Promise&#x3C;options&#x3E; | function(query) | noop |
| direction | 下拉框弹出方向，目前只有 `up`/`down` 两个选项 | string | `down` |
| onChange | 组件值改变回调 | function(e:{target:{value:string\[\]},type:string}) | noop |

> 继承 [ms-control 组件](#!/form-control) 的所有参数