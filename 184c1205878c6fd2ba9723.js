webpackJsonpindex([18],{

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(382);

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(198);
exports.name = 'component-demo-components-checkbox-checkbox';
avalon.component(exports.name, { template: "<div><h2>\u591A\u9009\u6846</h2>\n<h3>\u57FA\u672C\u7528\u6CD5</h3>\n<div>\n    <ms-checkbox>checkbox</ms-checkbox>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div&gt;\n    &lt;ms-checkbox&gt;checkbox&lt;/ms-checkbox&gt;\n&lt;/div&gt;\n</code></pre>\n<h3>\u5355\u9009\u6846\u7EC4</h3>\n<div :controller=\"doc-checkbox-group\">\n    <ms-checkbox-group :widget=\"{\n        options:[\n            { label: '\u7F16\u7A0B', value: 'code' },\n            { label: '\u5176\u4ED6', value: 'other' }\n        ],\n        onChange:@handleChange\n    }\">\n    </ms-checkbox-group>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-checkbox-group&quot;&gt;\n    &lt;ms-checkbox-group :widget=&quot;{\n        options:[\n            { label: '\u7F16\u7A0B', value: 'code' },\n            { label: '\u5176\u4ED6', value: 'other' }\n        ],\n        onChange:@handleChange\n    }&quot;&gt;\n    &lt;/ms-checkbox-group&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport 'ane';\n\nconst vm = avalon.define({\n    $id: 'doc-checkbox-group',\n    handleChange(e) {\n        console.log(e.target.value);\n    }\n});\n</code></pre>\n<h3>\u7EC4\u4EF6\u53C2\u6570</h3>\n<p>checkbox</p>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>label</td>\n<td>\u5C55\u793A\u503C</td>\n<td>string</td>\n<td>''</td>\n</tr>\n<tr>\n<td>checked</td>\n<td>\u5F53\u524D\u9009\u62E9\u7684 value \u503C</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>value</td>\n<td>\u6B64\u9009\u9879\u7684 value \u503C</td>\n<td>string</td>\n<td>''</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>\u9009\u62E9\u6539\u53D8\u65F6\u7684\u56DE\u8C03</td>\n<td>function(e)</td>\n<td>noop</td>\n</tr>\n<tr>\n<td>indeterminate</td>\n<td>\u8BBE\u7F6E\u534A\u9009\u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n<p>radio-checkbox</p>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>\u9009\u4E2D\u7684\u503C\u6570\u7EC4</td>\n<td>string[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528\u6240\u6709\u9009\u9879</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>options</td>\n<td>\u9009\u9879\u6570\u7EC4</td>\n<td>Array&lt;{ label: string value: string disabled?: boolean }&gt;</td>\n<td>[]</td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>radio-checkbox \u7EE7\u627F <a href=\"#!/form-control\">ms-control \u7EC4\u4EF6</a> \u7684\u6240\u6709\u53C2\u6570</p>\n</blockquote>\n</div>" });
var vm = avalon.define({
    $id: 'doc-checkbox-group',
    handleChange: function (e) {
        console.log(e.target.value);
    }
});


/***/ })

});