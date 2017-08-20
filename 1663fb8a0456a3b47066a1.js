webpackJsonpindex([16],{

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(380);

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(195);
exports.name = 'component-demo-components-dialog-dialog';
avalon.component(exports.name, { template: "<div><h2>\u5BF9\u8BDD\u6846</h2>\n<h3>\u57FA\u672C\u7528\u6CD5</h3>\n<div :controller=\"doc-dialog-basic\">\n    <ms-dialog :widget=\"{$innerVm: 'doc-dialog-basic_form', show: @show, onCancel: @handleCancel, onOk: @handleOk}\">\n        <div slot=\"body\" ms-skip>\n            <xmp is=\"ms-form\">\n                <ms-form-item :widget=\"{label: '\u6807\u9898'}\">\n                    <ms-input :widget=\"{col: 'title'}\"></ms-input>\n                </ms-form-item>\n            </xmp>\n        </div>\n    </ms-dialog>\n    <button type=\"button\" class=\"btn btn-primary\" :click=\"@show = true\">\u5F39\u51FA\u5BF9\u8BDD\u6846</button>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-dialog-basic&quot;&gt;\n    &lt;ms-dialog :widget=&quot;{$innerVm: 'doc-dialog-basic_form', show: @show, onCancel: @handleCancel, onOk: @handleOk}&quot;&gt;\n        &lt;div slot=&quot;body&quot; ms-skip&gt;\n            &lt;xmp is=&quot;ms-form&quot;&gt;\n                &lt;ms-form-item :widget=&quot;{label: '\u6807\u9898'}&quot;&gt;\n                    &lt;ms-input :widget=&quot;{col: 'title'}&quot;&gt;&lt;/ms-input&gt;\n                &lt;/ms-form-item&gt;\n            &lt;/xmp&gt;\n        &lt;/div&gt;\n    &lt;/ms-dialog&gt;\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; :click=&quot;@show = true&quot;&gt;\u5F39\u51FA\u5BF9\u8BDD\u6846&lt;/button&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport 'ane';\n\nconst vm = avalon.define({\n    $id: 'doc-dialog-basic',\n    show: false,\n    handleCancel(e) {\n        this.show = false;\n    },\n    handleOk() {\n        this.show = false;\n    }\n});\n\navalon.define({\n    $id: 'doc-dialog-basic_form',\n    title: '\u5F39\u51FA\u6846'\n});\n</code></pre>\n<h3>\u6539\u53D8\u5BF9\u8BDD\u6846\u5C3A\u5BF8</h3>\n<div :controller=\"doc-dialog-size\">\n    <ms-dialog :widget=\"{$innerVm: 'doc-dialog-basic_form', show: @show, size: 'large', onCancel: @handleCancel, onOk: @handleOk}\">\n        <div slot=\"body\" ms-skip>\n            <xmp is=\"ms-form\">\n                <ms-form-item :widget=\"{label: '\u6807\u9898'}\">\n                    <ms-input :widget=\"{col: 'title'}\"></ms-input>\n                </ms-form-item>\n            </xmp>\n        </div>\n    </ms-dialog>\n    <button type=\"button\" class=\"btn btn-primary\" :click=\"@show = true\">\u5F39\u51FA\u5927\u5C3A\u5BF8\u5BF9\u8BDD\u6846</button>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-dialog-size&quot;&gt;\n    &lt;ms-dialog :widget=&quot;{$innerVm: 'doc-dialog-basic_form', show: @show, size: 'large', onCancel: @handleCancel, onOk: @handleOk}&quot;&gt;\n        &lt;div slot=&quot;body&quot; ms-skip&gt;\n            &lt;xmp is=&quot;ms-form&quot;&gt;\n                &lt;ms-form-item :widget=&quot;{label: '\u6807\u9898'}&quot;&gt;\n                    &lt;ms-input :widget=&quot;{col: 'title'}&quot;&gt;&lt;/ms-input&gt;\n                &lt;/ms-form-item&gt;\n            &lt;/xmp&gt;\n        &lt;/div&gt;\n    &lt;/ms-dialog&gt;\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; :click=&quot;@show = true&quot;&gt;\u5F39\u51FA\u5927\u5C3A\u5BF8\u5BF9\u8BDD\u6846&lt;/button&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport 'ane';\n\nconst vm1 = avalon.define({\n    $id: 'doc-dialog-size',\n    show: false,\n    handleCancel(e) {\n        this.show = false;\n    },\n    handleOk() {\n        this.show = false;\n    }\n});\n\navalon.define({\n    $id: 'doc-dialog-basic_form',\n    title: '\u5F39\u51FA\u6846'\n});\n</code></pre>\n<h3>\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57</h3>\n<div :controller=\"doc-dialog-custom-btn\">\n    <ms-dialog :widget=\"{$innerVm: 'doc-dialog-basic_form', show: @show, okText: '\u5B89\u88C5', cancelText: '\u653E\u5F03', onCancel: @handleCancel, onOk: @handleOk}\">\n        <div slot=\"body\" ms-skip>\n            <xmp is=\"ms-form\">\n                <ms-form-item :widget=\"{label: '\u6807\u9898'}\">\n                    <ms-input :widget=\"{col: 'title'}\"></ms-input>\n                </ms-form-item>\n            </xmp>\n        </div>\n    </ms-dialog>\n    <button type=\"button\" class=\"btn btn-primary\" :click=\"@show = true\">\u5F39\u51FA\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57\u7684\u5BF9\u8BDD\u6846</button>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-dialog-custom-btn&quot;&gt;\n    &lt;ms-dialog :widget=&quot;{$innerVm: 'doc-dialog-basic_form', show: @show, okText: '\u5B89\u88C5', cancelText: '\u653E\u5F03', onCancel: @handleCancel, onOk: @handleOk}&quot;&gt;\n        &lt;div slot=&quot;body&quot; ms-skip&gt;\n            &lt;xmp is=&quot;ms-form&quot;&gt;\n                &lt;ms-form-item :widget=&quot;{label: '\u6807\u9898'}&quot;&gt;\n                    &lt;ms-input :widget=&quot;{col: 'title'}&quot;&gt;&lt;/ms-input&gt;\n                &lt;/ms-form-item&gt;\n            &lt;/xmp&gt;\n        &lt;/div&gt;\n    &lt;/ms-dialog&gt;\n    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; :click=&quot;@show = true&quot;&gt;\u5F39\u51FA\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57\u7684\u5BF9\u8BDD\u6846&lt;/button&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport 'ane';\n\nconst vm2 = avalon.define({\n    $id: 'doc-dialog-custom-btn',\n    show: false,\n    handleCancel(e) {\n        this.show = false;\n    },\n    handleOk() {\n        this.show = false;\n    }\n});\n\navalon.define({\n    $id: 'doc-dialog-basic_form',\n    title: '\u5F39\u51FA\u6846'\n});\n</code></pre>\n<h3>\u7EC4\u4EF6\u53C2\u6570</h3>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>show</td>\n<td>\u63A7\u5236\u5BF9\u8BDD\u6846\u662F\u5426\u663E\u793A</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>size</td>\n<td>\u5BF9\u8BDD\u6846\u5C3A\u5BF8</td>\n<td>'large' | 'small'</td>\n<td>''</td>\n</tr>\n<tr>\n<td>okText</td>\n<td>\u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td>\n<td>string</td>\n<td>'\u4FDD\u5B58'</td>\n</tr>\n<tr>\n<td>cancelText</td>\n<td>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td>\n<td>string</td>\n<td>'\u53D6\u6D88'</td>\n</tr>\n<tr>\n<td>$innerVm</td>\n<td>\u5BF9\u8BDD\u6846\u5185\u90E8\u89C6\u56FE\u7684 VM id</td>\n<td>string</td>\n<td>''</td>\n</tr>\n<tr>\n<td>onOk</td>\n<td>\u70B9\u51FB\u786E\u5B9A\u7684\u56DE\u8C03</td>\n<td>function</td>\n<td>noop</td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>\u70B9\u51FB\u53D6\u6D88\u7684\u56DE\u8C03</td>\n<td>function</td>\n<td>noop</td>\n</tr>\n</tbody>\n</table>\n</div>" });
var vm = avalon.define({
    $id: 'doc-dialog-basic',
    show: false,
    handleCancel: function (e) {
        this.show = false;
    },
    handleOk: function () {
        this.show = false;
    }
});
avalon.define({
    $id: 'doc-dialog-basic_form',
    title: '弹出框'
});
var vm1 = avalon.define({
    $id: 'doc-dialog-size',
    show: false,
    handleCancel: function (e) {
        this.show = false;
    },
    handleOk: function () {
        this.show = false;
    }
});
avalon.define({
    $id: 'doc-dialog-basic_form',
    title: '弹出框'
});
var vm2 = avalon.define({
    $id: 'doc-dialog-custom-btn',
    show: false,
    handleCancel: function (e) {
        this.show = false;
    },
    handleOk: function () {
        this.show = false;
    }
});
avalon.define({
    $id: 'doc-dialog-basic_form',
    title: '弹出框'
});


/***/ })

});