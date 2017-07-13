webpackJsonpindex([9],{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_avalon2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ane__);



const name = 'component-demo-message-message';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
__WEBPACK_IMPORTED_MODULE_0_avalon2__["component"](name, {    template: `<div><h2>全局提示</h2>
<h3>基本用法</h3>
<div :controller="doc-message-basic">
    <button type="button" class="btn btn-primary" :click="@info">普通提示</button>
    <button type="button" class="btn btn-default" :click="@success">成功提示</button>
    <button type="button" class="btn btn-default" :click="@error">失败提示</button>
    <button type="button" class="btn btn-default" :click="@warning">警告提示</button>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-message-basic&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; :click=&quot;@info&quot;&gt;普通提示&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; :click=&quot;@success&quot;&gt;成功提示&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; :click=&quot;@error&quot;&gt;失败提示&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; :click=&quot;@warning&quot;&gt;警告提示&lt;/button&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">
avalon.define({
    $id: 'doc-message-basic',
    info() {
        message.info({
            content: '这是一条普通提示'
        });
    },
    success() {
        message.success({
            content: '这是一条成功提示'
        });
    },
    error() {
        message.error({
            content: '这是一条失败提示'
        });
    },
    warning() {
        message.warn({
            content: '这是一条警告提示'
        });
    }
});
</code></pre>
<h3>API</h3>
<ul>
<li><code>message.success({ content, duration })</code></li>
<li><code>message.error({ content, duration })</code></li>
<li><code>message.info({ content, duration })</code></li>
<li><code>message.warning({ content, duration })</code></li>
<li><code>message.warn({ content, duration })</code> 同 message.warning</li>
</ul>
<table class="table table-bordered">
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>是否可选</th>
</tr>
</thead>
<tbody>
<tr>
<td>content</td>
<td>提示内容</td>
<td>string</td>
<td>-</td>
<td>必选</td>
</tr>
<tr>
<td>duration</td>
<td>自动关闭的延时，单位毫秒</td>
<td>number</td>
<td>1500</td>
<td>可选</td>
</tr>
</tbody>
</table>
<p>可以改变默认参数</p>
<ul>
<li><code>message.config({ duration })</code></li>
</ul>
<table class="table table-bordered">
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>是否可选</th>
</tr>
</thead>
<tbody>
<tr>
<td>duration</td>
<td>自动关闭的延时，单位毫秒</td>
<td>number</td>
<td>1500</td>
<td>可选</td>
</tr>
</tbody>
</table>
</div>`});
__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-message-basic',
    info() {
        __WEBPACK_IMPORTED_MODULE_1_ane__["message"].info({
            content: '这是一条普通提示'
        });
    },
    success() {
        __WEBPACK_IMPORTED_MODULE_1_ane__["message"].success({
            content: '这是一条成功提示'
        });
    },
    error() {
        __WEBPACK_IMPORTED_MODULE_1_ane__["message"].error({
            content: '这是一条失败提示'
        });
    },
    warning() {
        __WEBPACK_IMPORTED_MODULE_1_ane__["message"].warn({
            content: '这是一条警告提示'
        });
    }
});


/***/ })

});