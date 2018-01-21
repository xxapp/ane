webpackJsonpindex([0],{

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(400);

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(198);
var ane_1 = __webpack_require__(198);
exports.name = 'component-demo-components-upload-upload';
avalon.component(exports.name, { template: "<div><h2>\u6587\u4EF6\u4E0A\u4F20</h2>\n<h3>\u57FA\u672C\u7528\u6CD5</h3>\n<div :controller=\"doc-upload-basic\">\n    <ms-upload :widget=\"{action: @fileUploadUrl,listType:'text-list',onChange:@handleChange}\">\n        <i class=\"fa fa-upload\"></i>\u9009\u62E9\u6587\u4EF6\n    </ms-upload>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-upload-basic&quot;&gt;\n    &lt;ms-upload :widget=&quot;{action: @fileUploadUrl,listType:'text-list',onChange:@handleChange}&quot;&gt;\n        &lt;i class=&quot;fa fa-upload&quot;&gt;&lt;/i&gt;\u9009\u62E9\u6587\u4EF6\n    &lt;/ms-upload&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport 'ane';\n\navalon.define({\n    $id: 'doc-upload-basic',\n    fileUploadUrl: '/api/file/uploadFile',\n    handleChange(e) {\n        console.log(e.target.value);\n    }\n});\n</code></pre>\n<h3>\u7167\u7247\u5899\u6A21\u5F0F</h3>\n<div :controller=\"doc-upload-card\">\n    <ms-upload :widget=\"{action:@fileUploadUrl,listType:'picture-card',beforeUpload:@handleBeforeUpload,onChange:@handleChange}\">\n        <i class=\"fa fa-plus\"></i>\u9009\u62E9\u56FE\u7247\n    </ms-upload>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-upload-card&quot;&gt;\n    &lt;ms-upload :widget=&quot;{action:@fileUploadUrl,listType:'picture-card',beforeUpload:@handleBeforeUpload,onChange:@handleChange}&quot;&gt;\n        &lt;i class=&quot;fa fa-plus&quot;&gt;&lt;/i&gt;\u9009\u62E9\u56FE\u7247\n    &lt;/ms-upload&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport { message } from 'ane';\n\navalon.define({\n    $id: 'doc-upload-card',\n    fileUploadUrl: '/api/file/uploadFile',\n    handleBeforeUpload(file) {\n        if (file.type !== 'image/jpeg' &amp;&amp; file.type !== 'image/png') {\n            message.error({\n                content: '\u53EA\u80FD\u9009\u62E9jpg\u6216\u8005png\u7C7B\u578B\u7684\u56FE\u7247\uFF01'\n            });\n            return false;\n        }\n        if (file.size / 1024 / 1024 &gt; 1) {\n            message.error({\n                content: '\u9009\u62E9\u7684\u56FE\u7247\u5FC5\u987B\u5C0F\u4E8E1MB\uFF01'\n            });\n            return false;\n        }\n        return true;\n    },\n    handleChange(e) {\n        console.log(e.target.value);\n    }\n});\n</code></pre>\n<h3>\u4E0A\u4F20\u5934\u50CF</h3>\n<div :controller=\"doc-upload-avatar\">\n    <ms-upload :widget=\"{value:[@avatar],action:@fileUploadUrl,listType:'picture-card',showUploadList:false,onChange:@handleChange}\">\n        <i class=\"fa fa-plus\"></i>\u9009\u62E9\u56FE\u7247\n    </ms-upload>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-upload-avatar&quot;&gt;\n    &lt;ms-upload :widget=&quot;{value:[@avatar],action:@fileUploadUrl,listType:'picture-card',showUploadList:false,onChange:@handleChange}&quot;&gt;\n        &lt;i class=&quot;fa fa-plus&quot;&gt;&lt;/i&gt;\u9009\u62E9\u56FE\u7247\n    &lt;/ms-upload&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport 'ane';\n\navalon.define({\n    $id: 'doc-upload-avatar',\n    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',\n    fileUploadUrl: '/api/file/uploadFile',\n    handleChange(e) {\n        console.log(e.target.value);\n    }\n});\n</code></pre>\n<h3>\u7EC4\u4EF6\u53C2\u6570</h3>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>\u6587\u4EF6 url \u6570\u7EC4</td>\n<td>string[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>action</td>\n<td>\u5FC5\u9009\uFF0C\u6587\u4EF6\u4E0A\u4F20\u5730\u5740</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>listType</td>\n<td>\u6587\u4EF6\u5217\u8868\u5C55\u793A\u65B9\u5F0F</td>\n<td>'text-list' | 'picture-card'</td>\n<td>'text-list'</td>\n</tr>\n<tr>\n<td>showUploadList</td>\n<td>\u662F\u5426\u663E\u793A\u6587\u4EF6\u5217\u8868\uFF0C\u5728\u7167\u7247\u5899\u6A21\u5F0F\u4E0B\uFF0C\u5982\u679C\u6B64\u9879\u4E3A false\uFF0C\u5219\u4E3A\u5355\u6587\u4EF6\u6A21\u5F0F</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>btnClass</td>\n<td>\u4E0A\u4F20\u6309\u94AE class\uFF0C\u53EA\u5728\u975E\u7167\u7247\u5899\u6A21\u5F0F\u4E0B\u6709\u6548</td>\n<td>string</td>\n<td>'btn btn-default'</td>\n</tr>\n<tr>\n<td>beforeUpload</td>\n<td>\u5728\u6587\u4EF6\u5F00\u59CB\u4E0A\u4F20\u524D\u89E6\u53D1\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u8FD4\u56DE false\uFF0C\u5219\u4E0D\u4E0A\u4F20\u6587\u4EF6</td>\n<td>function(file:File)</td>\n<td><code>() =&gt; true</code></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>\u7EE7\u627F <a href=\"#!/form-control\">ms-control \u7EC4\u4EF6</a> \u7684\u6240\u6709\u53C2\u6570</p>\n</blockquote>\n<blockquote>\n<p>beforeUpload \u53C2\u6570\u5728 IE8 \u4E0B\u4E0D\u80FD\u83B7\u53D6\u6587\u4EF6\u5927\u5C0F\uFF0C\u7C7B\u578B\u53EA\u80FD\u6839\u636E\u6587\u4EF6\u540E\u7F00\u540D\u5224\u65AD\u3002\u53EA\u80FD\u548C\u670D\u52A1\u5668\u7AEF\u914D\u5408\u505A\u5230\u51C6\u786E\u5224\u65AD</p>\n</blockquote>\n</div>" });
avalon.define({
    $id: 'doc-upload-basic',
    fileUploadUrl: '/api/file/uploadFile',
    handleChange: function (e) {
        console.log(e.target.value);
    }
});
avalon.define({
    $id: 'doc-upload-card',
    fileUploadUrl: '/api/file/uploadFile',
    handleBeforeUpload: function (file) {
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
            ane_1.message.error({
                content: '只能选择jpg或者png类型的图片！'
            });
            return false;
        }
        if (file.size / 1024 / 1024 > 1) {
            ane_1.message.error({
                content: '选择的图片必须小于1MB！'
            });
            return false;
        }
        return true;
    },
    handleChange: function (e) {
        console.log(e.target.value);
    }
});
avalon.define({
    $id: 'doc-upload-avatar',
    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    fileUploadUrl: '/api/file/uploadFile',
    handleChange: function (e) {
        console.log(e.target.value);
    }
});


/***/ })

});