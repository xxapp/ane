webpackJsonpindex([2],{

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(195);
exports.name = 'component-demo-components-tree-select-tree-select';
avalon.component(exports.name, { template: "<div><h2>\u6811\u9009\u62E9\u7EC4\u4EF6</h2>\n<h3>\u57FA\u672C\u7528\u6CD5</h3>\n<div :controller=\"tree\">\n    <ms-tree-select :widget=\"{treeData: @data,multiple:true}\"></ms-tree>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;tree&quot;&gt;\n    &lt;ms-tree-select :widget=&quot;{treeData: @data,multiple:true}&quot;&gt;&lt;/ms-tree&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport 'ane';\n\navalon.define({\n    $id: &quot;tree&quot;,\n    data: [\n        {key: 1, title: &quot;aaa&quot;, children: [\n                {key: 7, title: 1111, children: []},\n                {key: 8, title: 2222, children: [\n                        {key: 14, title: 777, children: []}\n                    ]},\n                {key: 9, title: 3333, children: [\n                        {key: 15, title: 8888, children: []},\n                        {key: 16, title: 9999, children: [\n                                {key: 17, title: '\u53F8\u5F92\u6B63\u7F8E', children: []}\n                            ]}\n                    ]}\n            ]},\n        {key: 2, title: &quot;bbb&quot;, children: [\n                {key: 10, title: 4444, children: []},\n                {key: 11, title: 5555, children: []},\n                {key: 12, title: 6666, children: []}\n            ]},\n        {key: 3, title: &quot;ccc&quot;, children: []},\n        {key: 4, title: &quot;ddd&quot;, children: []},\n        {key: 5, title: &quot;eee&quot;, children: [\n                {key: 13, title: 1234, children: []}\n            ]},\n        {key: 6, title: &quot;fff&quot;, children: []}\n    ]\n})\n</code></pre>\n<h3>\u7EC4\u4EF6\u53C2\u6570</h3>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>\u9ED8\u8BA4\u503C</td>\n<td>string[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>\u662F\u5426\u591A\u9009</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>treeData</td>\n<td>\u6811\u6570\u636E</td>\n<td>TreeNode[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>showSearch</td>\n<td>\u662F\u5426\u663E\u793A\u641C\u7D22\u6846</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>\u7EE7\u627F <a href=\"#!/form-control\">ms-control \u7EC4\u4EF6</a> \u7684\u6240\u6709\u53C2\u6570</p>\n</blockquote>\n<p>TreeNode</p>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>\u6807\u9898</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>key</td>\n<td>\u8282\u70B9\u6807\u8BC6</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>children</td>\n<td>\u5B50\u8282\u70B9</td>\n<td>TreeNode[]</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>" });
avalon.define({
    $id: "tree",
    data: [
        { key: 1, title: "aaa", children: [
                { key: 7, title: 1111, children: [] },
                { key: 8, title: 2222, children: [
                        { key: 14, title: 777, children: [] }
                    ] },
                { key: 9, title: 3333, children: [
                        { key: 15, title: 8888, children: [] },
                        { key: 16, title: 9999, children: [
                                { key: 17, title: '司徒正美', children: [] }
                            ] }
                    ] }
            ] },
        { key: 2, title: "bbb", children: [
                { key: 10, title: 4444, children: [] },
                { key: 11, title: 5555, children: [] },
                { key: 12, title: 6666, children: [] }
            ] },
        { key: 3, title: "ccc", children: [] },
        { key: 4, title: "ddd", children: [] },
        { key: 5, title: "eee", children: [
                { key: 13, title: 1234, children: [] }
            ] },
        { key: 6, title: "fff", children: [] }
    ]
});


/***/ })

});