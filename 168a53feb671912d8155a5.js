webpackJsonpindex([16],{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_avalon2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ane__);


const name = 'component-demo-dialog-dialog';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
__WEBPACK_IMPORTED_MODULE_0_avalon2__["component"](name, {    template: `<div><h2>对话框</h2>
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
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-dialog-basic&quot;&gt;
    &lt;ms-dialog :widget=&quot;{$innerVm: 'doc-dialog-basic_form', show: @show, onCancel: @handleCancel, onOk: @handleOk}&quot;&gt;
        &lt;div slot=&quot;body&quot; ms-skip&gt;
            &lt;xmp is=&quot;ms-form&quot;&gt;
                &lt;ms-form-item :widget=&quot;{label: '标题'}&quot;&gt;
                    &lt;ms-input :widget=&quot;{col: 'title'}&quot;&gt;&lt;/ms-input&gt;
                &lt;/ms-form-item&gt;
            &lt;/xmp&gt;
        &lt;/div&gt;
    &lt;/ms-dialog&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; :click=&quot;@show = true&quot;&gt;弹出对话框&lt;/button&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">import 'ane';

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
</code></pre>
<h3>组件参数</h3>
<table class="table table-bordered">
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>show</td>
<td>控制对话框是否显示</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>对话框尺寸</td>
<td>'large' | 'small'</td>
<td>''</td>
</tr>
<tr>
<td>$innerVm</td>
<td>对话框内部视图的 VM id</td>
<td>string</td>
<td>''</td>
</tr>
<tr>
<td>onOk</td>
<td>点击确定的回调</td>
<td>function</td>
<td>noop</td>
</tr>
<tr>
<td>onCancel</td>
<td>点击取消的回调</td>
<td>function</td>
<td>noop</td>
</tr>
</tbody>
</table>
</div>`});

const vm = __WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-dialog-basic',
    show: false,
    handleCancel(e) {
        this.show = false;
    },
    handleOk() {
        this.show = false;
    }
});

__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-dialog-basic_form',
    title: '弹出框'
});


/***/ })

});