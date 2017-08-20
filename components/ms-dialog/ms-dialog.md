## 对话框

### 基本用法

``` html
<div :controller="doc-dialog-basic">
    <ms-dialog :widget="{$innerVm: 'doc-dialog-basic_form', show: @show, onCancel: @handleCancel, onOk: @handleOk}">
        <div slot="body" ms-skip>
            <xmp is="ms-form">
                <ms-form-item :widget="{label: '标题'}">
                    <ms-input :widget="{col: 'title'}"></ms-input>
                </ms-form-item>
            </xmp>
        </div>
    </ms-dialog>
    <button type="button" class="btn btn-primary" :click="@show = true">弹出对话框</button>
</div>
```

``` js
import * as avalon from 'avalon2';
import 'ane';

const vm = avalon.define({
    $id: 'doc-dialog-basic',
    show: false,
    handleCancel(e) {
        this.show = false;
    },
    handleOk() {
        this.show = false;
    }
});

avalon.define({
    $id: 'doc-dialog-basic_form',
    title: '弹出框'
});
```

### 改变对话框尺寸

``` html
<div :controller="doc-dialog-size">
    <ms-dialog :widget="{$innerVm: 'doc-dialog-basic_form', show: @show, size: 'large', onCancel: @handleCancel, onOk: @handleOk}">
        <div slot="body" ms-skip>
            <xmp is="ms-form">
                <ms-form-item :widget="{label: '标题'}">
                    <ms-input :widget="{col: 'title'}"></ms-input>
                </ms-form-item>
            </xmp>
        </div>
    </ms-dialog>
    <button type="button" class="btn btn-primary" :click="@show = true">弹出大尺寸对话框</button>
</div>
```

``` js
import * as avalon from 'avalon2';
import 'ane';

const vm1 = avalon.define({
    $id: 'doc-dialog-size',
    show: false,
    handleCancel(e) {
        this.show = false;
    },
    handleOk() {
        this.show = false;
    }
});

avalon.define({
    $id: 'doc-dialog-basic_form',
    title: '弹出框'
});
```

### 自定义按钮文字

``` html
<div :controller="doc-dialog-custom-btn">
    <ms-dialog :widget="{$innerVm: 'doc-dialog-basic_form', show: @show, okText: '安装', cancelText: '放弃', onCancel: @handleCancel, onOk: @handleOk}">
        <div slot="body" ms-skip>
            <xmp is="ms-form">
                <ms-form-item :widget="{label: '标题'}">
                    <ms-input :widget="{col: 'title'}"></ms-input>
                </ms-form-item>
            </xmp>
        </div>
    </ms-dialog>
    <button type="button" class="btn btn-primary" :click="@show = true">弹出自定义按钮文字的对话框</button>
</div>
```

``` js
import * as avalon from 'avalon2';
import 'ane';

const vm2 = avalon.define({
    $id: 'doc-dialog-custom-btn',
    show: false,
    handleCancel(e) {
        this.show = false;
    },
    handleOk() {
        this.show = false;
    }
});

avalon.define({
    $id: 'doc-dialog-basic_form',
    title: '弹出框'
});
```

### 组件参数

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| show | 控制对话框是否显示 | boolean | false |
| size | 对话框尺寸 | 'large' \| 'small' | '' |
| $innerVm | 对话框内部视图的 VM id | string | '' |
| onOk | 点击确定的回调 | function | noop |
| onCancel | 点击取消的回调 | function | noop |