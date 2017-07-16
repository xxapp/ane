webpackJsonpindex([2],{

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_avalon2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ane__);


const name = 'component-demo-tree-select-tree-select';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
__WEBPACK_IMPORTED_MODULE_0_avalon2__["component"](name, {    template: `<div><h2>树选择组件</h2>
<h3>基本用法</h3>
<div :controller="tree">
    <ms-tree-select :widget="{treeData: @data,multiple:false}"></ms-tree>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;tree&quot;&gt;
    &lt;ms-tree-select :widget=&quot;{treeData: @data,multiple:false}&quot;&gt;&lt;/ms-tree&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">import 'ane';

avalon.define({
    $id: &quot;tree&quot;,
    data: [
        {key: 1, title: &quot;aaa&quot;, children: [
                {key: 7, title: 1111, children: []},
                {key: 8, title: 2222, children: [
                        {key: 14, title: 777, children: []}
                    ]},
                {key: 9, title: 3333, children: [
                        {key: 15, title: 8888, children: []},
                        {key: 16, title: 9999, children: [
                                {key: 17, title: '司徒正美', children: []}
                            ]}
                    ]}
            ]},
        {key: 2, title: &quot;bbb&quot;, children: [
                {key: 10, title: 4444, children: []},
                {key: 11, title: 5555, children: []},
                {key: 12, title: 6666, children: []}
            ]},
        {key: 3, title: &quot;ccc&quot;, children: []},
        {key: 4, title: &quot;ddd&quot;, children: []},
        {key: 5, title: &quot;eee&quot;, children: [
                {key: 13, title: 1234, children: []}
            ]},
        {key: 6, title: &quot;fff&quot;, children: []}
    ]
})
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
<tbody></tbody>
</table>
</div>`});

__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: "tree",
    data: [
        {key: 1, title: "aaa", children: [
                {key: 7, title: 1111, children: []},
                {key: 8, title: 2222, children: [
                        {key: 14, title: 777, children: []}
                    ]},
                {key: 9, title: 3333, children: [
                        {key: 15, title: 8888, children: []},
                        {key: 16, title: 9999, children: [
                                {key: 17, title: '司徒正美', children: []}
                            ]}
                    ]}
            ]},
        {key: 2, title: "bbb", children: [
                {key: 10, title: 4444, children: []},
                {key: 11, title: 5555, children: []},
                {key: 12, title: 6666, children: []}
            ]},
        {key: 3, title: "ccc", children: []},
        {key: 4, title: "ddd", children: []},
        {key: 5, title: "eee", children: [
                {key: 13, title: 1234, children: []}
            ]},
        {key: 6, title: "fff", children: []}
    ]
})


/***/ })

});