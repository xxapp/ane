webpackJsonpindex([9],{

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_avalon2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ane__);



const name = 'component-demo-notification-notification';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
__WEBPACK_IMPORTED_MODULE_0_avalon2__["component"](name, {    template: `<div><h2>通知提醒框</h2>
<h3>基本用法</h3>
<div :controller="doc-notification-basic">
    <button type="button" class="btn btn-primary" :click="@info">普通通知</button>
    <button type="button" class="btn btn-default" :click="@success">成功通知</button>
    <button type="button" class="btn btn-default" :click="@error">失败通知</button>
    <button type="button" class="btn btn-default" :click="@warning">警告通知</button>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-notification-basic&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; :click=&quot;@info&quot;&gt;普通通知&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; :click=&quot;@success&quot;&gt;成功通知&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; :click=&quot;@error&quot;&gt;失败通知&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; :click=&quot;@warning&quot;&gt;警告通知&lt;/button&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">
avalon.define({
    $id: 'doc-notification-basic',
    info() {
        notification.info({
            message: '这是一条普通通知',
            title: '通知'
        });
    },
    success() {
        notification.success({
            message: '这是一条成功通知',
            title: '通知'
        });
    },
    error() {
        notification.error({
            message: '这是一条失败通知',
            title: '通知'
        });
    },
    warning() {
        notification.warn({
            message: '这是一条警告通知',
            title: '通知'
        });
    }
});
</code></pre>
<h3>API</h3>
<ul>
<li><code>notification.success({ message, title, timeout })</code></li>
<li><code>notification.error({ message, title, timeout })</code></li>
<li><code>notification.info({ message, title, timeout })</code></li>
<li><code>notification.warning({ message, title, timeout })</code></li>
<li><code>notification.warn({ message, title, timeout })</code> 同 notification.warning</li>
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
<td>message</td>
<td>通知内容</td>
<td>string</td>
<td>-</td>
<td>必选</td>
</tr>
<tr>
<td>title</td>
<td>通知标题</td>
<td>string</td>
<td>-</td>
<td>可选</td>
</tr>
<tr>
<td>timeout</td>
<td>自动关闭的延时，单位毫秒</td>
<td>number</td>
<td>3000</td>
<td>可选</td>
</tr>
</tbody>
</table>
<p>可以改变默认参数</p>
<ul>
<li><code>notification.config({ timeout })</code></li>
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
<td>timeout</td>
<td>自动关闭的延时，单位毫秒</td>
<td>number</td>
<td>3000</td>
<td>可选</td>
</tr>
</tbody>
</table>
</div>`});
__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-notification-basic',
    info() {
        __WEBPACK_IMPORTED_MODULE_1_ane__["notification"].info({
            message: '这是一条普通通知',
            title: '通知'
        });
    },
    success() {
        __WEBPACK_IMPORTED_MODULE_1_ane__["notification"].success({
            message: '这是一条成功通知',
            title: '通知'
        });
    },
    error() {
        __WEBPACK_IMPORTED_MODULE_1_ane__["notification"].error({
            message: '这是一条失败通知',
            title: '通知'
        });
    },
    warning() {
        __WEBPACK_IMPORTED_MODULE_1_ane__["notification"].warn({
            message: '这是一条警告通知',
            title: '通知'
        });
    }
});


/***/ })

});