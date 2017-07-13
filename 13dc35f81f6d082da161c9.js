webpackJsonpindex([13],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_avalon2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ane__);


const name = 'component-demo-input-input';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
__WEBPACK_IMPORTED_MODULE_0_avalon2__["component"](name, {    template: `<div><h2>输入组件</h2>
<h3>代码演示</h3>
<h4>基本使用</h4>
<div :controller="doc-input-basic">
    <xmp is="ms-input" :widget="{col:'name',value:@value,$rules:{required:true,message:'请输入名字'}}"></xmp>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-input-basic&quot;&gt;
    &lt;xmp is=&quot;ms-input&quot; :widget=&quot;{col:'name',value:@value,$rules:{required:true,message:'请输入名字'}}&quot;&gt;&lt;/xmp&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">import 'ane';

const vm = avalon.define({
    $id: 'doc-input-basic',
    value: '123'
});
</code></pre>
<blockquote>
<p>继承 <a href="#!/form-control">ms-control 组件</a> 的所有参数</p>
</blockquote>
</div>`});

const vm = __WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-input-basic',
    value: '123'
});


/***/ })

});