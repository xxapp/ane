webpackJsonpindex([6],{

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ane_1 = __webpack_require__(198);
var $ = __webpack_require__(8);
exports.name = 'component-demo-components-select-select';
avalon.component(exports.name, { template: "<div><h2>\u9009\u62E9\u7EC4\u4EF6</h2>\n<h3>\u57FA\u672C\u7528\u6CD5</h3>\n<div :controller=\"doc-select-basic\">\n    <xmp is=\"ms-form\" :widget=\"{$form: @$form}\">\n        <ms-form-item>\n            <ms-select :widget=\"{col:'comic'}\">\n                <ms-select-option :widget=\"{value:'onepiece'}\">\u6D77\u8D3C\u738B</ms-select-option>\n                <ms-select-option :widget=\"{value:'conna'}\">\u540D\u4FA6\u63A2\u67EF\u5357</ms-select-option>\n                <ms-select-option :widget=\"{value:'titan'}\">\u8FDB\u51FB\u7684\u5DE8\u4EBA</ms-select-option>\n                <ms-select-option :widget=\"{value:'disabled', disabled:true}\">\u7981\u7528</ms-select-option>\n                <ms-select-option :widget=\"{value:'onepunchman'}\">\u4E00\u62F3\u8D85\u4EBA</ms-select-option>\n            </ms-select>\n        </ms-form-item>\n    </xmp>\n    <pre>{{@json}}</pre>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-select-basic&quot;&gt;\n    &lt;xmp is=&quot;ms-form&quot; :widget=&quot;{$form: @$form}&quot;&gt;\n        &lt;ms-form-item&gt;\n            &lt;ms-select :widget=&quot;{col:'comic'}&quot;&gt;\n                &lt;ms-select-option :widget=&quot;{value:'onepiece'}&quot;&gt;\u6D77\u8D3C\u738B&lt;/ms-select-option&gt;\n                &lt;ms-select-option :widget=&quot;{value:'conna'}&quot;&gt;\u540D\u4FA6\u63A2\u67EF\u5357&lt;/ms-select-option&gt;\n                &lt;ms-select-option :widget=&quot;{value:'titan'}&quot;&gt;\u8FDB\u51FB\u7684\u5DE8\u4EBA&lt;/ms-select-option&gt;\n                &lt;ms-select-option :widget=&quot;{value:'disabled', disabled:true}&quot;&gt;\u7981\u7528&lt;/ms-select-option&gt;\n                &lt;ms-select-option :widget=&quot;{value:'onepunchman'}&quot;&gt;\u4E00\u62F3\u8D85\u4EBA&lt;/ms-select-option&gt;\n            &lt;/ms-select&gt;\n        &lt;/ms-form-item&gt;\n    &lt;/xmp&gt;\n    &lt;pre&gt;{{@json}}&lt;/pre&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport { createForm } from 'ane';\n\nconst vm = avalon.define({\n    $id: 'doc-select-basic',\n    json: '',\n    $form: createForm({\n        onFieldsChange(fields, record) {\n            vm.json = JSON.stringify(record);\n        }\n    })\n});\n</code></pre>\n<h3>\u591A\u9009</h3>\n<div :controller=\"doc-select-multiple\">\n    <ms-select :widget=\"{col:'comic',mode:'multiple'}\">\n        <ms-select-option :widget=\"{value:'onepiece'}\">\u6D77\u8D3C\u738B</ms-select-option>\n        <ms-select-option :widget=\"{value:'conna'}\">\u540D\u4FA6\u63A2\u67EF\u5357</ms-select-option>\n        <ms-select-option :widget=\"{value:'titan'}\">\u8FDB\u51FB\u7684\u5DE8\u4EBA</ms-select-option>\n        <ms-select-option :widget=\"{value:'disabled', disabled:true}\">\u7981\u7528</ms-select-option>\n        <ms-select-option :widget=\"{value:'onepunchman'}\">\u4E00\u62F3\u8D85\u4EBA</ms-select-option>\n    </ms-select>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-select-multiple&quot;&gt;\n    &lt;ms-select :widget=&quot;{col:'comic',mode:'multiple'}&quot;&gt;\n        &lt;ms-select-option :widget=&quot;{value:'onepiece'}&quot;&gt;\u6D77\u8D3C\u738B&lt;/ms-select-option&gt;\n        &lt;ms-select-option :widget=&quot;{value:'conna'}&quot;&gt;\u540D\u4FA6\u63A2\u67EF\u5357&lt;/ms-select-option&gt;\n        &lt;ms-select-option :widget=&quot;{value:'titan'}&quot;&gt;\u8FDB\u51FB\u7684\u5DE8\u4EBA&lt;/ms-select-option&gt;\n        &lt;ms-select-option :widget=&quot;{value:'disabled', disabled:true}&quot;&gt;\u7981\u7528&lt;/ms-select-option&gt;\n        &lt;ms-select-option :widget=&quot;{value:'onepunchman'}&quot;&gt;\u4E00\u62F3\u8D85\u4EBA&lt;/ms-select-option&gt;\n    &lt;/ms-select&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport { createForm } from 'ane';\n\navalon.define({\n    $id: 'doc-select-multiple'\n});\n</code></pre>\n<h3>\u5E26\u641C\u7D22\u6846</h3>\n<div :controller=\"doc-select-multiple\">\n    <ms-select :widget=\"{col:'comic',showSearch:true}\">\n        <ms-select-option :widget=\"{value:'onepiece'}\">\u6D77\u8D3C\u738B</ms-select-option>\n        <ms-select-option :widget=\"{value:'conna'}\">\u540D\u4FA6\u63A2\u67EF\u5357</ms-select-option>\n        <ms-select-option :widget=\"{value:'titan'}\">\u8FDB\u51FB\u7684\u5DE8\u4EBA</ms-select-option>\n        <ms-select-option :widget=\"{value:'disabled', disabled:true}\">\u7981\u7528</ms-select-option>\n        <ms-select-option :widget=\"{value:'onepunchman'}\">\u4E00\u62F3\u8D85\u4EBA</ms-select-option>\n    </ms-select>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-select-multiple&quot;&gt;\n    &lt;ms-select :widget=&quot;{col:'comic',showSearch:true}&quot;&gt;\n        &lt;ms-select-option :widget=&quot;{value:'onepiece'}&quot;&gt;\u6D77\u8D3C\u738B&lt;/ms-select-option&gt;\n        &lt;ms-select-option :widget=&quot;{value:'conna'}&quot;&gt;\u540D\u4FA6\u63A2\u67EF\u5357&lt;/ms-select-option&gt;\n        &lt;ms-select-option :widget=&quot;{value:'titan'}&quot;&gt;\u8FDB\u51FB\u7684\u5DE8\u4EBA&lt;/ms-select-option&gt;\n        &lt;ms-select-option :widget=&quot;{value:'disabled', disabled:true}&quot;&gt;\u7981\u7528&lt;/ms-select-option&gt;\n        &lt;ms-select-option :widget=&quot;{value:'onepunchman'}&quot;&gt;\u4E00\u62F3\u8D85\u4EBA&lt;/ms-select-option&gt;\n    &lt;/ms-select&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport { createForm } from 'ane';\n\navalon.define({\n    $id: 'doc-select-multiple'\n});\n</code></pre>\n<h3>\u8FDC\u7A0B\u52A0\u8F7D\u6570\u636E</h3>\n<div :controller=\"doc-select-remote\">\n    <ms-select :widget=\"{mode:'multiple',showSearch:true,remote:true,remoteMethod:@fetchOptions}\"></ms-select>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-select-remote&quot;&gt;\n    &lt;ms-select :widget=&quot;{mode:'multiple',showSearch:true,remote:true,remoteMethod:@fetchOptions}&quot;&gt;&lt;/ms-select&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport { createForm } from 'ane';\nimport * as $ from 'jquery';\n\navalon.define({\n    $id: 'doc-select-remote',\n    fetchOptions(query) {\n        return $.getJSON('https://randomuser.me/api/?results=5').then(json =&gt; {\n            return json.results.map(user =&gt; ({\n                label: user.name.first + user.name.last,\n                value: user.login.username\n            }));\n        });\n    }\n});\n</code></pre>\n<h3>\u7EC4\u4EF6\u53C2\u6570</h3>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>\u9ED8\u8BA4\u503C</td>\n<td>string[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>mode</td>\n<td>\b\u6A21\u5F0F</td>\n<td>'combobox' | 'multiple' | 'tags'</td>\n<td>''</td>\n</tr>\n<tr>\n<td>options</td>\n<td>\u4E0B\u62C9\u9009\u9879\uFF0C\u53EF\u4EE5\u66FF\u4EE3ms-select-option</td>\n<td>{label:string,value:string,disabled:boolean}[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>showSearch</td>\n<td>\u662F\u5426\u663E\u793A\u641C\u7D22\u6846</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>remote</td>\n<td>\u662F\u5426\u4E3A\u8FDC\u7A0B\u641C\u7D22</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>remoteMethod</td>\n<td>remoteMethod \u5F53remote\u4E3Atrue\u65F6\u8C03\u7528\uFF0C\u5305\u542B\u8FDC\u7A0B\u641C\u7D22\u8981\u6267\u884C\u7684\u8BF7\u6C42\uFF0C\u8981\u6C42\u8FD4\u56DE\u4E00\u4E2APromise&lt;options&gt;</td>\n<td>function(query)</td>\n<td>noop</td>\n</tr>\n<tr>\n<td>direction</td>\n<td>\u4E0B\u62C9\u6846\u5F39\u51FA\u65B9\u5411\uFF0C\u76EE\u524D\u53EA\u6709 <code>up</code>/<code>down</code> \u4E24\u4E2A\u9009\u9879</td>\n<td>string</td>\n<td><code>down</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>\u7EC4\u4EF6\u503C\u6539\u53D8\u56DE\u8C03</td>\n<td>function(e:{target:{value:string[]},type:string})</td>\n<td>noop</td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>\u7EE7\u627F <a href=\"#!/form-control\">ms-control \u7EC4\u4EF6</a> \u7684\u6240\u6709\u53C2\u6570</p>\n</blockquote>\n</div>" });
var vm = avalon.define({
    $id: 'doc-select-basic',
    json: '',
    $form: ane_1.createForm({
        onFieldsChange: function (fields, record) {
            vm.json = JSON.stringify(record);
        }
    })
});
avalon.define({
    $id: 'doc-select-multiple'
});
avalon.define({
    $id: 'doc-select-multiple'
});
avalon.define({
    $id: 'doc-select-remote',
    fetchOptions: function (query) {
        return $.getJSON('https://randomuser.me/api/?results=5').then(function (json) {
            return json.results.map(function (user) { return ({
                label: user.name.first + user.name.last,
                value: user.login.username
            }); });
        });
    }
});


/***/ })

});