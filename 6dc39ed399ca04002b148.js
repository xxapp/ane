webpackJsonpindex([6],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_avalon2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ane__);


const name = 'component-demo-radio-radio';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
__WEBPACK_IMPORTED_MODULE_0_avalon2__["component"](name, {    template: `<div><h2>单选框</h2>
<h3>基本用法</h3>
<div>
    <ms-radio>radio</ms-radio>
</div>
<pre><code :skip="true" class="language-html">&lt;div&gt;
    &lt;ms-radio&gt;radio&lt;/ms-radio&gt;
&lt;/div&gt;
</code></pre>
<h3>单选框组</h3>
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
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-radio-group&quot;&gt;
    &lt;ms-radio-group :widget=&quot;{
        options:[
            { label: '男', value: 'M' },
            { label: '女', value: 'F' }
        ],
        onChange:@handleChange
    }&quot;&gt;
    &lt;/ms-radio-group&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">import 'ane';

const vm = avalon.define({
    $id: 'doc-radio-group',
    handleChange(e) {
        console.log(e.target.value);
    }
});
</code></pre>
<h3>组件参数</h3>
<p>radio</p>
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
<td>label</td>
<td>展示值</td>
<td>string</td>
<td>''</td>
</tr>
<tr>
<td>checked</td>
<td>当前选择的 value 值</td>
<td>string</td>
<td>''</td>
</tr>
<tr>
<td>value</td>
<td>此选项的 value 值</td>
<td>string</td>
<td>''</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onChange</td>
<td>选择改变时的回调</td>
<td>function(e)</td>
<td>noop</td>
</tr>
</tbody>
</table>
<p>radio-group</p>
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
<td>disabled</td>
<td>是否禁用所有选项</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>options</td>
<td>选项数组</td>
<td>Array&lt;{ label: string value: string disabled?: boolean }&gt;</td>
<td>[]</td>
</tr>
</tbody>
</table>
<blockquote>
<p>radio-group 继承 <a href="#!/form-control">ms-control 组件</a> 的所有参数</p>
</blockquote>
</div>`});

const vm = __WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-radio-group',
    handleChange(e) {
        console.log(e.target.value);
    }
});


/***/ })

});