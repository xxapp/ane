webpackJsonpindex([13],{

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(198);
exports.name = 'component-demo-components-input-input';
avalon.component(exports.name, { template: "<div><h2>\u8F93\u5165\u7EC4\u4EF6</h2>\n<h3>\u4EE3\u7801\u6F14\u793A</h3>\n<h4>\u57FA\u672C\u4F7F\u7528</h4>\n<div :controller=\"doc-input-basic\">\n    <xmp is=\"ms-input\" :widget=\"{col:'name',value:@value,$rules:{required:true,message:'\u8BF7\u8F93\u5165\u540D\u5B57'}}\"></xmp>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-input-basic&quot;&gt;\n    &lt;xmp is=&quot;ms-input&quot; :widget=&quot;{col:'name',value:@value,$rules:{required:true,message:'\u8BF7\u8F93\u5165\u540D\u5B57'}}&quot;&gt;&lt;/xmp&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport 'ane';\n\nconst vm = avalon.define({\n    $id: 'doc-input-basic',\n    value: '123'\n});\n</code></pre>\n<blockquote>\n<p>\u7EE7\u627F <a href=\"#!/form-control\">ms-control \u7EC4\u4EF6</a> \u7684\u6240\u6709\u53C2\u6570</p>\n</blockquote>\n</div>" });
var vm = avalon.define({
    $id: 'doc-input-basic',
    value: '123'
});


/***/ })

});