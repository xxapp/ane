webpackJsonpindex([12],{

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(383);

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(194);
var ane_1 = __webpack_require__(194);
exports.name = 'component-demo-components-loading-loading';
avalon.component(exports.name, { template: "<div><h2>\u52A0\u8F7D\u4E2D\u8499\u7248</h2>\n<h3>\u57FA\u672C\u7528\u6CD5</h3>\n<div :controller=\"doc-loading-basic\">\n    <div :loading=\"@loading\" style=\"width: 300px; height: 150px; line-height: 150px; font-size: 20px; text-align: center; background: #c0c0c0;\">\n        hello world!\n    </div>\n    <button type=\"button\" class=\"btn btn-primary\" :click=\"@loading = !@loading\">\u5F00\u5173</button>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-loading-basic&quot;&gt;\n    &lt;div :loading=&quot;@loading&quot; style=&quot;width: 300px; height: 150px; line-height: 150px; font-size: 20px; text-align: center; background: #c0c0c0;&quot;&gt;\n        hello world!\n    &lt;/div&gt;\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; :click=&quot;@loading = !@loading&quot;&gt;\u5F00\u5173&lt;/button&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport 'ane';\n\navalon.define({\n    $id: 'doc-loading-basic',\n    loading: true\n});\n</code></pre>\n<h3>\u5168\u5C40 loading \u65B9\u6CD5</h3>\n<div :controller=\"doc-loading-global\">\n    <button type=\"button\" class=\"btn btn-primary\" :click=\"@show\">\u5168\u5C40loading\uFF0C\u4E09\u79D2\u540E\u5173\u95ED</button>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-loading-global&quot;&gt;\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; :click=&quot;@show&quot;&gt;\u5168\u5C40loading\uFF0C\u4E09\u79D2\u540E\u5173\u95ED&lt;/button&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import { Loading } from 'ane';\n\navalon.define({\n    $id: 'doc-loading-global',\n    show() {\n        Loading.show();\n\n        setTimeout(function () {\n            Loading.hide();\n        }, 3000);\n    }\n});\n</code></pre>\n</div>" });
avalon.define({
    $id: 'doc-loading-basic',
    loading: true
});
avalon.define({
    $id: 'doc-loading-global',
    show: function () {
        ane_1.Loading.show();
        setTimeout(function () {
            ane_1.Loading.hide();
        }, 3000);
    }
});


/***/ })

});