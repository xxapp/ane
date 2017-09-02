webpackJsonpindex([9],{

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(386);

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ane_1 = __webpack_require__(194);
exports.name = 'component-demo-components-notification-notification';
avalon.component(exports.name, { template: "<div><h2>\u901A\u77E5\u63D0\u9192\u6846</h2>\n<h3>\u57FA\u672C\u7528\u6CD5</h3>\n<div :controller=\"doc-notification-basic\">\n    <button type=\"button\" class=\"btn btn-primary\" :click=\"@info\">\u666E\u901A\u901A\u77E5</button>\n    <button type=\"button\" class=\"btn btn-default\" :click=\"@success\">\u6210\u529F\u901A\u77E5</button>\n    <button type=\"button\" class=\"btn btn-default\" :click=\"@error\">\u5931\u8D25\u901A\u77E5</button>\n    <button type=\"button\" class=\"btn btn-default\" :click=\"@warning\">\u8B66\u544A\u901A\u77E5</button>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-notification-basic&quot;&gt;\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; :click=&quot;@info&quot;&gt;\u666E\u901A\u901A\u77E5&lt;/button&gt;\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; :click=&quot;@success&quot;&gt;\u6210\u529F\u901A\u77E5&lt;/button&gt;\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; :click=&quot;@error&quot;&gt;\u5931\u8D25\u901A\u77E5&lt;/button&gt;\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; :click=&quot;@warning&quot;&gt;\u8B66\u544A\u901A\u77E5&lt;/button&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport { notification } from 'ane';\n\navalon.define({\n    $id: 'doc-notification-basic',\n    info() {\n        notification.info({\n            message: '\u8FD9\u662F\u4E00\u6761\u666E\u901A\u901A\u77E5',\n            title: '\u901A\u77E5'\n        });\n    },\n    success() {\n        notification.success({\n            message: '\u8FD9\u662F\u4E00\u6761\u6210\u529F\u901A\u77E5',\n            title: '\u901A\u77E5'\n        });\n    },\n    error() {\n        notification.error({\n            message: '\u8FD9\u662F\u4E00\u6761\u5931\u8D25\u901A\u77E5',\n            title: '\u901A\u77E5'\n        });\n    },\n    warning() {\n        notification.warn({\n            message: '\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u901A\u77E5',\n            title: '\u901A\u77E5'\n        });\n    }\n});\n</code></pre>\n<h3>API</h3>\n<ul>\n<li><code>notification.success({ message, title, timeout })</code></li>\n<li><code>notification.error({ message, title, timeout })</code></li>\n<li><code>notification.info({ message, title, timeout })</code></li>\n<li><code>notification.warning({ message, title, timeout })</code></li>\n<li><code>notification.warn({ message, title, timeout })</code> \u540C notification.warning</li>\n</ul>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u662F\u5426\u53EF\u9009</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>message</td>\n<td>\u901A\u77E5\u5185\u5BB9</td>\n<td>string</td>\n<td>-</td>\n<td>\u5FC5\u9009</td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u901A\u77E5\u6807\u9898</td>\n<td>string</td>\n<td>-</td>\n<td>\u53EF\u9009</td>\n</tr>\n<tr>\n<td>timeout</td>\n<td>\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2</td>\n<td>number</td>\n<td>3000</td>\n<td>\u53EF\u9009</td>\n</tr>\n</tbody>\n</table>\n<p>\u53EF\u4EE5\u6539\u53D8\u9ED8\u8BA4\u53C2\u6570</p>\n<ul>\n<li><code>notification.config({ timeout })</code></li>\n</ul>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u662F\u5426\u53EF\u9009</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>timeout</td>\n<td>\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2</td>\n<td>number</td>\n<td>3000</td>\n<td>\u53EF\u9009</td>\n</tr>\n</tbody>\n</table>\n</div>" });
avalon.define({
    $id: 'doc-notification-basic',
    info: function () {
        ane_1.notification.info({
            message: '这是一条普通通知',
            title: '通知'
        });
    },
    success: function () {
        ane_1.notification.success({
            message: '这是一条成功通知',
            title: '通知'
        });
    },
    error: function () {
        ane_1.notification.error({
            message: '这是一条失败通知',
            title: '通知'
        });
    },
    warning: function () {
        ane_1.notification.warn({
            message: '这是一条警告通知',
            title: '通知'
        });
    }
});


/***/ })

});