webpackJsonpindex([14],{

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(381);

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ane_1 = __webpack_require__(193);
exports.name = 'component-demo-components-form-form';
avalon.component(exports.name, { template: "<div><h2>\u8868\u5355\u7EC4\u4EF6</h2>\n<h3>\u5E26\u9A8C\u8BC1\u529F\u80FD\u7684\u8868\u5355</h3>\n<div :controller=\"doc-form-validate\">\n    <xmp is=\"ms-form\" :widget=\"{$form:@$form}\">\n        <ms-form-item :widget=\"{label:'\u6807\u9898'}\">\n            <ms-input :widget=\"{col:'title',$rules:{required:true}}\"></ms-input>\n        </ms-form-item>\n        <ms-form-item :widget=\"{label:'\u5185\u5BB9'}\">\n            <ms-textarea :widget=\"{col:'content',$rules:{required:true}}\"></ms-textarea>\n        </ms-form-item>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" :click=\"@save\">\u4FDD\u5B58</button>\n    </xmp>\n    <pre>{{@json}}</pre>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-form-validate&quot;&gt;\n    &lt;xmp is=&quot;ms-form&quot; :widget=&quot;{$form:@$form}&quot;&gt;\n        &lt;ms-form-item :widget=&quot;{label:'\u6807\u9898'}&quot;&gt;\n            &lt;ms-input :widget=&quot;{col:'title',$rules:{required:true}}&quot;&gt;&lt;/ms-input&gt;\n        &lt;/ms-form-item&gt;\n        &lt;ms-form-item :widget=&quot;{label:'\u5185\u5BB9'}&quot;&gt;\n            &lt;ms-textarea :widget=&quot;{col:'content',$rules:{required:true}}&quot;&gt;&lt;/ms-textarea&gt;\n        &lt;/ms-form-item&gt;\n        &lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-sm&quot; :click=&quot;@save&quot;&gt;\u4FDD\u5B58&lt;/button&gt;\n    &lt;/xmp&gt;\n    &lt;pre&gt;{{@json}}&lt;/pre&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport { createForm, message } from 'ane';\n\nconst vm = avalon.define({\n    $id: 'doc-form-validate',\n    json: '',\n    $form: createForm({\n        onFieldsChange(fields, record) {\n            vm.json = JSON.stringify(record);\n        }\n    }),\n    save() {\n        vm.$form.validateFields().then(isAllValid =&gt; {\n            if (isAllValid) {\n                message.success({\n                    content: '\u4FDD\u5B58\u6210\u529F'\n                });\n            }\n        })\n        /*\n        // \u9A8C\u8BC1\u67D0\u4E2A\u5B57\u6BB5\n        vm.$form.validateField('title').then(result =&gt; {\n            if (!result.isOk) {\n                message.success({\n                    content: result.message\n                });\n            }\n        })\n        */\n    }\n});\n</code></pre>\n<h3>\u7528\u4E8E\u641C\u7D22\u7684\u8868\u5355</h3>\n<div :controller=\"doc-form-search\">\n    <xmp is=\"ms-form\" :widget=\"{$form:@$form,type:'search',inline:true}\">\n        <ms-form-item :widget=\"{label:'\u6807\u9898\uFF1A'}\">\n            <ms-input :widget=\"{col:'title'}\"></ms-input>\n        </ms-form-item>\n        <ms-form-item :widget=\"{label:'\u5185\u5BB9\uFF1A'}\">\n            <ms-input :widget=\"{col:'content'}\"></ms-input>\n        </ms-form-item>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" :click=\"@save\">\u641C\u7D22</button>\n    </xmp>\n    <pre>{{@json}}</pre>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-form-search&quot;&gt;\n    &lt;xmp is=&quot;ms-form&quot; :widget=&quot;{$form:@$form,type:'search',inline:true}&quot;&gt;\n        &lt;ms-form-item :widget=&quot;{label:'\u6807\u9898\uFF1A'}&quot;&gt;\n            &lt;ms-input :widget=&quot;{col:'title'}&quot;&gt;&lt;/ms-input&gt;\n        &lt;/ms-form-item&gt;\n        &lt;ms-form-item :widget=&quot;{label:'\u5185\u5BB9\uFF1A'}&quot;&gt;\n            &lt;ms-input :widget=&quot;{col:'content'}&quot;&gt;&lt;/ms-input&gt;\n        &lt;/ms-form-item&gt;\n        &lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-sm&quot; :click=&quot;@save&quot;&gt;\u641C\u7D22&lt;/button&gt;\n    &lt;/xmp&gt;\n    &lt;pre&gt;{{@json}}&lt;/pre&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport { createForm, message } from 'ane';\n\nconst vm1 = avalon.define({\n    $id: 'doc-form-search',\n    json: '',\n    $form: createForm({\n        onFieldsChange(fields, record) {\n            vm1.json = JSON.stringify(record);\n        }\n    }),\n    save() {\n        vm1.$form.validateFields().then(isAllValid =&gt; {\n            if (isAllValid) {\n                message.success({\n                    content: JSON.stringify(vm1.$form.record)\n                });\n            }\n        })\n    }\n});\n</code></pre>\n<h3>\u7EC4\u4EF6\u53C2\u6570</h3>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>$form</td>\n<td>\u8868\u5355\u6570\u636E\u96C6\u6563\u4E2D\u5FC3\uFF0C\u8BE6\u89C1\u4E0B\u6587</td>\n<td>createForm()</td>\n<td>null</td>\n</tr>\n<tr>\n<td>type</td>\n<td>\u5982\u679C\u4E3A search\uFF0C\u5219\u53EA\u5728\u8868\u5355\u9879\u7684\u503C\u88AB\u7528\u6237\u624B\u52A8\u4FEE\u6539\u65F6\uFF0C\u624D\u4F1A\u52A0\u5165\u5230\u6700\u540E\u8981\u63D0\u4EA4\u7684\u6570\u636E\u5BF9\u8C61\u4E0A\uFF0C\u7528\u4E8E\u641C\u7D22\u8868\u5355</td>\n<td>string</td>\n<td>''</td>\n</tr>\n<tr>\n<td>horizontal</td>\n<td>\u662F\u5426\u6DFB\u52A0 form-horizontal \u5230 class</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>inline</td>\n<td>\u662F\u5426\u6DFB\u52A0 form-inline \u5230 class</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n<h4>createFrom(options)</h4>\n<p>\u7531\u4E8E avalon2 \u81EA\u5E26\u7684\u8868\u5355\u9A8C\u8BC1\u53EA\u80FD\u914D\u5408 ms-duplex \u4F7F\u7528\uFF0C\u8868\u5355\u4E2D\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u5199 onChnage \u914D\u7F6E\u53C8\u5F88\u7E41\u7410\uFF0C\u5E76\u4E14\u4E3A\u4E86\u65B9\u4FBF\u7684\u6536\u96C6\u548C\u5206\u53D1\u8868\u5355\u6570\u636E\uFF0C\u6240\u4EE5\u6709\u4E86\u8FD9\u4E2A <code>\u201C\u8868\u5355\u6570\u636E\u96C6\u6563\u4E2D\u5FC3\u201D</code>\u3002</p>\n<p>options \u914D\u7F6E\uFF1A</p>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>record</td>\n<td>\u8868\u5355\u6570\u636E</td>\n<td>any</td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td>autoAsyncChange</td>\n<td>\u662F\u5426\u5728\u8868\u5355\u9879\u6539\u53D8\u65F6\u540C\u6B65\u6570\u636E\u5230 record</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>onFieldsChange</td>\n<td>\u8868\u5355\u9879\u6539\u53D8\u7684\u56DE\u8C03</td>\n<td>function(fields, record)</td>\n<td>noop</td>\n</tr>\n</tbody>\n</table>\n<p>$form \u5BF9\u8C61\u53EF\u8BBF\u95EE\u7684\u5C5E\u6027\u5982\u4E0B\uFF1A</p>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>fields</td>\n<td>\u6240\u6709\u7684\u5B57\u6BB5\u96C6\u5408</td>\n<td>{ [string]: meta }</td>\n</tr>\n<tr>\n<td>setFieldsValue</td>\n<td>\u8BBE\u7F6E\u5B57\u6BB5\u503C\u7684\u65B9\u6CD5</td>\n<td>(fields) =&gt; void</td>\n</tr>\n<tr>\n<td>addFields</td>\n<td>\u6DFB\u52A0\u5B57\u6BB5</td>\n<td>(fields) =&gt; void</td>\n</tr>\n<tr>\n<td>validateField</td>\n<td>\u9A8C\u8BC1\u67D0\u4E2A\u5B57\u6BB5</td>\n<td>(fieldName) =&gt; Promise&lt;{isOk: boolean, name: string, message: string}&gt;</td>\n</tr>\n<tr>\n<td>validateFields</td>\n<td>\u9A8C\u8BC1\u591A\u4E2A\u6216\u8005\u6240\u6709\u5B57\u6BB5</td>\n<td>(field?) =&gt; Promise&lt;boolean&gt;</td>\n</tr>\n<tr>\n<td>resetFields</td>\n<td>\u91CD\u7F6E\u591A\u4E2A\u6216\u8005\u6240\u6709\u5B57\u6BB5</td>\n<td>(field?) =&gt; void</td>\n</tr>\n</tbody>\n</table>\n</div>" });
var vm = avalon.define({
    $id: 'doc-form-validate',
    json: '',
    $form: ane_1.createForm({
        onFieldsChange: function (fields, record) {
            vm.json = JSON.stringify(record);
        }
    }),
    save: function () {
        vm.$form.validateFields().then(function (isAllValid) {
            if (isAllValid) {
                ane_1.message.success({
                    content: '保存成功'
                });
            }
        });
        /*
        // 验证某个字段
        vm.$form.validateField('title').then(result => {
            if (!result.isOk) {
                message.success({
                    content: result.message
                });
            }
        })
        */
    }
});
var vm1 = avalon.define({
    $id: 'doc-form-search',
    json: '',
    $form: ane_1.createForm({
        onFieldsChange: function (fields, record) {
            vm1.json = JSON.stringify(record);
        }
    }),
    save: function () {
        vm1.$form.validateFields().then(function (isAllValid) {
            if (isAllValid) {
                ane_1.message.success({
                    content: JSON.stringify(vm1.$form.record)
                });
            }
        });
    }
});


/***/ })

});