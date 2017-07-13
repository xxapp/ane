webpackJsonpindex([7],{

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_avalon2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ane__);


const name = 'component-demo-pagination-pagination';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
__WEBPACK_IMPORTED_MODULE_0_avalon2__["component"](name, {    template: `<div><h2>分页组件</h2>
<h3>基本用法</h3>
<div :controller="doc-pagination-basic">
    <ms-pagination :widget="{current:@current,pageSize:@pageSize,total:@total,onChange:@handlePageChange}"></ms-pagination>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-pagination-basic&quot;&gt;
    &lt;ms-pagination :widget=&quot;{current:@current,pageSize:@pageSize,total:@total,onChange:@handlePageChange}&quot;&gt;&lt;/ms-pagination&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">import 'ane';

const vm = avalon.define({
    $id: 'doc-pagination-basic',
    current: 1,
    pageSize: 10,
    total: 30,
    handlePageChange(currentPage) {
        console.log('当前第' + currentPage + '页');
    }
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
<td>current</td>
<td>当前页，从 1 开始</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>pageSize</td>
<td>每页条数</td>
<td>number</td>
<td>10</td>
</tr>
<tr>
<td>total</td>
<td>数据总数</td>
<td>total</td>
<td>0</td>
</tr>
<tr>
<td>onChange</td>
<td>翻页时的回调</td>
<td>function(currentPage:number)</td>
<td>noop</td>
</tr>
</tbody>
</table>
</div>`});

const vm = __WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-pagination-basic',
    current: 1,
    pageSize: 10,
    total: 30,
    handlePageChange(currentPage) {
        console.log('当前第' + currentPage + '页');
    }
});


/***/ })

});