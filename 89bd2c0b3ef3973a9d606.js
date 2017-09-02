webpackJsonpindex([8],{

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(194);
exports.name = 'component-demo-components-pagination-pagination';
avalon.component(exports.name, { template: "<div><h2>\u5206\u9875\u7EC4\u4EF6</h2>\n<h3>\u57FA\u672C\u7528\u6CD5</h3>\n<div :controller=\"doc-pagination-basic\">\n    <ms-pagination :widget=\"{current:@current,pageSize:@pageSize,total:@total,onChange:@handlePageChange}\"></ms-pagination>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-pagination-basic&quot;&gt;\n    &lt;ms-pagination :widget=&quot;{current:@current,pageSize:@pageSize,total:@total,onChange:@handlePageChange}&quot;&gt;&lt;/ms-pagination&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport 'ane';\n\nconst vm = avalon.define({\n    $id: 'doc-pagination-basic',\n    current: 1,\n    pageSize: 10,\n    total: 30,\n    handlePageChange(currentPage) {\n        console.log('\u5F53\u524D\u7B2C' + currentPage + '\u9875');\n    }\n});\n</code></pre>\n<h3>\u7EC4\u4EF6\u53C2\u6570</h3>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>current</td>\n<td>\u5F53\u524D\u9875\uFF0C\u4ECE 1 \u5F00\u59CB</td>\n<td>number</td>\n<td>1</td>\n</tr>\n<tr>\n<td>pageSize</td>\n<td>\u6BCF\u9875\u6761\u6570</td>\n<td>number</td>\n<td>10</td>\n</tr>\n<tr>\n<td>total</td>\n<td>\u6570\u636E\u603B\u6570</td>\n<td>total</td>\n<td>0</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>\u7FFB\u9875\u65F6\u7684\u56DE\u8C03</td>\n<td>function(currentPage:number)</td>\n<td>noop</td>\n</tr>\n</tbody>\n</table>\n</div>" });
var vm = avalon.define({
    $id: 'doc-pagination-basic',
    current: 1,
    pageSize: 10,
    total: 30,
    handlePageChange: function (currentPage) {
        console.log('当前第' + currentPage + '页');
    }
});


/***/ })

});