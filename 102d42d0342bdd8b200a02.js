webpackJsonpindex([10],{

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ane_1 = __webpack_require__(198);
exports.name = 'component-demo-components-message-message';
avalon.component(exports.name, { template: "<div><h2>\u5168\u5C40\u63D0\u793A</h2>\n<h3>\u57FA\u672C\u7528\u6CD5</h3>\n<div :controller=\"doc-message-basic\">\n    <button type=\"button\" class=\"btn btn-primary\" :click=\"@info\">\u666E\u901A\u63D0\u793A</button>\n    <button type=\"button\" class=\"btn btn-default\" :click=\"@success\">\u6210\u529F\u63D0\u793A</button>\n    <button type=\"button\" class=\"btn btn-default\" :click=\"@error\">\u5931\u8D25\u63D0\u793A</button>\n    <button type=\"button\" class=\"btn btn-default\" :click=\"@warning\">\u8B66\u544A\u63D0\u793A</button>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-message-basic&quot;&gt;\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; :click=&quot;@info&quot;&gt;\u666E\u901A\u63D0\u793A&lt;/button&gt;\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; :click=&quot;@success&quot;&gt;\u6210\u529F\u63D0\u793A&lt;/button&gt;\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; :click=&quot;@error&quot;&gt;\u5931\u8D25\u63D0\u793A&lt;/button&gt;\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; :click=&quot;@warning&quot;&gt;\u8B66\u544A\u63D0\u793A&lt;/button&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport { message } from 'ane';\n\navalon.define({\n    $id: 'doc-message-basic',\n    info() {\n        message.info({\n            content: '\u8FD9\u662F\u4E00\u6761\u666E\u901A\u63D0\u793A'\n        });\n    },\n    success() {\n        message.success({\n            content: '\u8FD9\u662F\u4E00\u6761\u6210\u529F\u63D0\u793A'\n        });\n    },\n    error() {\n        message.error({\n            content: '\u8FD9\u662F\u4E00\u6761\u5931\u8D25\u63D0\u793A'\n        });\n    },\n    warning() {\n        message.warn({\n            content: '\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A'\n        });\n    }\n});\n</code></pre>\n<h3>API</h3>\n<ul>\n<li><code>message.success({ content, duration })</code></li>\n<li><code>message.error({ content, duration })</code></li>\n<li><code>message.info({ content, duration })</code></li>\n<li><code>message.warning({ content, duration })</code></li>\n<li><code>message.warn({ content, duration })</code> \u540C message.warning</li>\n</ul>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u662F\u5426\u53EF\u9009</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>\u63D0\u793A\u5185\u5BB9</td>\n<td>string</td>\n<td>-</td>\n<td>\u5FC5\u9009</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2</td>\n<td>number</td>\n<td>1500</td>\n<td>\u53EF\u9009</td>\n</tr>\n</tbody>\n</table>\n<p>\u53EF\u4EE5\u6539\u53D8\u9ED8\u8BA4\u53C2\u6570</p>\n<ul>\n<li><code>message.config({ duration })</code></li>\n</ul>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u662F\u5426\u53EF\u9009</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>duration</td>\n<td>\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2</td>\n<td>number</td>\n<td>1500</td>\n<td>\u53EF\u9009</td>\n</tr>\n</tbody>\n</table>\n</div>" });
avalon.define({
    $id: 'doc-message-basic',
    info: function () {
        ane_1.message.info({
            content: '这是一条普通提示'
        });
    },
    success: function () {
        ane_1.message.success({
            content: '这是一条成功提示'
        });
    },
    error: function () {
        ane_1.message.error({
            content: '这是一条失败提示'
        });
    },
    warning: function () {
        ane_1.message.warn({
            content: '这是一条警告提示'
        });
    }
});


/***/ })

});