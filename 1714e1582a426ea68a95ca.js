webpackJsonpindex([17],{

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(379);

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.name = 'component-demo-components-datepicker-datepicker';
avalon.component(exports.name, { template: "<div><h2>\u65E5\u671F\u9009\u62E9\u5668</h2>\n<h3>\u57FA\u672C\u7528\u6CD5</h3>\n<div>\n    <ms-datepicker :widget=\"{\n        placeholder:'\u8BF7\u9009\u62E9\u5165\u5B66\u65F6\u95F4'\n    }\"></ms-datepicker>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div&gt;\n    &lt;ms-datepicker :widget=&quot;{\n        placeholder:'\u8BF7\u9009\u62E9\u5165\u5B66\u65F6\u95F4'\n    }&quot;&gt;&lt;/ms-datepicker&gt;\n&lt;/div&gt;\n</code></pre>\n<h3>\u683C\u5F0F\u5316\u65E5\u671F</h3>\n<div>\n    <ms-datepicker :widget=\"{\n        placeholder:'\u8BF7\u9009\u62E9\u5165\u5B66\u65F6\u95F4',\n        format:'YYYY/MM/DD'\n    }\"></ms-datepicker>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div&gt;\n    &lt;ms-datepicker :widget=&quot;{\n        placeholder:'\u8BF7\u9009\u62E9\u5165\u5B66\u65F6\u95F4',\n        format:'YYYY/MM/DD'\n    }&quot;&gt;&lt;/ms-datepicker&gt;\n&lt;/div&gt;\n</code></pre>\n<h3>\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F</h3>\n<div>\n    <ms-datepicker :widget=\"{\n        placeholder:'\u8BF7\u9009\u62E9\u5165\u5B66\u65F6\u95F4',\n        startDate:'2017/5/26',\n        endDate:'2018/7/26'\n    }\"></ms-datepicker>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div&gt;\n    &lt;ms-datepicker :widget=&quot;{\n        placeholder:'\u8BF7\u9009\u62E9\u5165\u5B66\u65F6\u95F4',\n        startDate:'2017/5/26',\n        endDate:'2018/7/26'\n    }&quot;&gt;&lt;/ms-datepicker&gt;\n&lt;/div&gt;\n</code></pre>\n<h3>\u65E5\u671F\u65F6\u95F4\u9009\u62E9</h3>\n<div>\n    <ms-datepicker :widget=\"{\n        placeholder:'\u8BF7\u9009\u62E9\u62A2\u8D2D\u5F00\u59CB\u65F6\u95F4',\n        showTime: true\n    }\"></ms-datepicker>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div&gt;\n    &lt;ms-datepicker :widget=&quot;{\n        placeholder:'\u8BF7\u9009\u62E9\u62A2\u8D2D\u5F00\u59CB\u65F6\u95F4',\n        showTime: true\n    }&quot;&gt;&lt;/ms-datepicker&gt;\n&lt;/div&gt;\n</code></pre>\n<h3>\u7EC4\u4EF6\u53C2\u6570</h3>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>format</td>\n<td>\u65E5\u671F\u683C\u5F0F\uFF0C\u53C2\u8003 momentjs</td>\n<td>string</td>\n<td><code>'YYYY-MM-DD'</code></td>\n</tr>\n<tr>\n<td>startDate</td>\n<td>\u63A7\u5236\u53EF\u4EE5\u9009\u62E9\u7684\u65E5\u671F\u8303\u56F4\u7684\u5F00\u59CB\u65E5\u671F</td>\n<td>string</td>\n<td>''</td>\n</tr>\n<tr>\n<td>endDate</td>\n<td>\u63A7\u5236\u53EF\u4EE5\u9009\u62E9\u7684\u65E5\u671F\u8303\u56F4\u7684\u7ED3\u675F\u65E5\u671F</td>\n<td>string</td>\n<td>''</td>\n</tr>\n<tr>\n<td>disabledDate</td>\n<td>\u4E0D\u53EF\u9009\u62E9\u65E5\u671F\u7684\u5224\u65AD\u51FD\u6570\uFF0C\u4F20\u5165 current\uFF08\u5F53\u524D\u904D\u5386\u65E5\u671F\u7684\u6BEB\u79D2\u503C\uFF09\uFF0C\u8FD4\u56DE true \u8868\u793A\u6B64\u65E5\u671F\u4E0D\u53EF\u9009</td>\n<td>function(current:number)</td>\n<td><code>() =&gt; false</code></td>\n</tr>\n<tr>\n<td>showTime</td>\n<td>\u662F\u5426\u9700\u8981\u9009\u62E9\u65F6\u95F4\uFF0C\u5982\u679C\u6B64\u9879\u4E3A true\uFF0C\u5219 format \u9ED8\u8BA4\u4E3A YYYY-MM-DD HH:mm:ss</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>\u7EE7\u627F <a href=\"#!/form-control\">ms-control \u7EC4\u4EF6</a> \u7684\u6240\u6709\u53C2\u6570</p>\n</blockquote>\n</div>" });


/***/ })

});