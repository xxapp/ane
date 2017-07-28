webpackJsonpindex([12],{

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_avalon2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ane__);



const name = 'component-demo-loading-loading';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
__WEBPACK_IMPORTED_MODULE_0_avalon2__["component"](name, {    template: `<div><h2>加载中蒙版</h2>
<h3>基本用法</h3>
<div :controller="doc-loading-basic">
    <div :loading="@loading" style="width: 300px; height: 150px; line-height: 150px; font-size: 20px; text-align: center; background: #c0c0c0;">
        hello world!
    </div>
    <button type="button" class="btn btn-primary" :click="@loading = !@loading">开关</button>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-loading-basic&quot;&gt;
    &lt;div :loading=&quot;@loading&quot; style=&quot;width: 300px; height: 150px; line-height: 150px; font-size: 20px; text-align: center; background: #c0c0c0;&quot;&gt;
        hello world!
    &lt;/div&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; :click=&quot;@loading = !@loading&quot;&gt;开关&lt;/button&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">import 'ane';

avalon.define({
    $id: 'doc-loading-basic',
    loading: true
});
</code></pre>
<h3>全局 loading 方法</h3>
<div :controller="doc-loading-global">
    <button type="button" class="btn btn-primary" :click="@show">全局loading，三秒后关闭</button>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-loading-global&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; :click=&quot;@show&quot;&gt;全局loading，三秒后关闭&lt;/button&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">
avalon.define({
    $id: 'doc-loading-global',
    show() {
        Loading.show();

        setTimeout(function () {
            Loading.hide();
        }, 3000);
    }
});
</code></pre>
</div>`});

__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-loading-basic',
    loading: true
});


__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-loading-global',
    show() {
        __WEBPACK_IMPORTED_MODULE_1_ane__["Loading"].show();

        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_1_ane__["Loading"].hide();
        }, 3000);
    }
});


/***/ })

});