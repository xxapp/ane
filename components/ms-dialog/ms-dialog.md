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
        console.count('hidden');
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
    $id: 'doc-dialog-size_form',
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
    $id: 'doc-dialog-custom_form',
    title: '弹出框'
});
```

### 完全自定义 footer

``` html
<div :controller="doc-dialog-custom-footer">
    <ms-dialog :widget="{$innerVm: 'doc-dialog-custom-footer_form', show: @show, onCancel: @handleCancel}">
        <div slot="body" ms-skip>
            <xmp is="ms-form">
                <ms-form-item :widget="{label: '标题'}">
                    <ms-input :widget="{col: 'title'}"></ms-input>
                </ms-form-item>
            </xmp>
        </div>
        <div slot="footer" class="modal-footer" ms-skip>
            <a class="btn btn-primary" :click="@handleOk">保存</a>
            <a class="btn btn-default" :click="@handleCancel">不保存</a>
            <a class="btn btn-default" :click="@handleCancel">取消</a>
        </div>
    </ms-dialog>
    <button type="button" class="btn btn-primary" :click="@show = true">弹出对话框</button>
</div>
```

``` js
import * as avalon from 'avalon2';
import 'ane';

const vm3 = avalon.define({
    $id: 'doc-dialog-custom-footer',
    show: false,
    handleCancel(e) {
        vm3.show = false;
    }
});

avalon.define({
    $id: 'doc-dialog-custom-footer_form',
    title: '弹出框',
    handleCancel(e) {
        // 上面的 handelCancel 是控制 dialog 右上角关闭的
        // 这里只控制自定义 footer 的取消按钮
        vm3.show = false;
    },
    handleOk() {
        vm3.show = false;
    }
});
```

### 组件参数

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| show | 控制对话框是否显示 | boolean | false |
| className | 自定义 dialog 的 className | string | '' |
| size | 对话框尺寸 | 'large' \| 'small' | '' |
| okText | 自定义确认按钮文字 | string | '保存' |
| cancelText | 自定义取消按钮文字 | string | '取消' |
| $innerVm | 对话框内部视图的 VM id | string | '' |
| onOk | 点击确定的回调 | function | noop |
| onCancel | 点击取消的回调 | function | noop |