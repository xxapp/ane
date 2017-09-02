webpackJsonpindex([4],{

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(194);
exports.name = 'component-demo-components-textarea-textarea';
avalon.component(exports.name, { template: "<div><h2>\u8F93\u5165\u7EC4\u4EF6</h2>\n<h4>\u57FA\u672C\u4F7F\u7528</h4>\n<div :controller=\"doc-textarea-basic\">\n    <ms-textarea :widget=\"{value:@value}\"></ms-textarea>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-textarea-basic&quot;&gt;\n    &lt;ms-textarea :widget=&quot;{value:@value}&quot;&gt;&lt;/ms-textarea&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport 'ane';\n\nconst vm = avalon.define({\n    $id: 'doc-textarea-basic',\n    value: '\u8FD9\u4E2A\u5BB6\u4F19\u5F88\u61D2\uFF0C\u4EC0\u4E48\u4E5F\u6CA1\u7559\u4E0B'\n});\n</code></pre>\n<blockquote>\n<p>\u7EE7\u627F <a href=\"#!/form-control\">ms-control \u7EC4\u4EF6</a> \u7684\u6240\u6709\u53C2\u6570</p>\n</blockquote>\n</div>" });
var vm = avalon.define({
    $id: 'doc-textarea-basic',
    value: '这个家伙很懒，什么也没留下'
});


/***/ })

});