webpackJsonpindex([0],{

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_avalon2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ane__);



const name = 'component-demo-upload-upload';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
__WEBPACK_IMPORTED_MODULE_0_avalon2__["component"](name, {    template: `<div><h2>文件上传</h2>
<h3>基本用法</h3>
<div :controller="doc-upload-basic">
    <ms-upload :widget="{action: @fileUploadUrl,listType:'text-list',onChange:@handleChange}">
        <i class="fa fa-upload"></i>选择文件
    </ms-upload>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-upload-basic&quot;&gt;
    &lt;ms-upload :widget=&quot;{action: @fileUploadUrl,listType:'text-list',onChange:@handleChange}&quot;&gt;
        &lt;i class=&quot;fa fa-upload&quot;&gt;&lt;/i&gt;选择文件
    &lt;/ms-upload&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">import 'ane';

avalon.define({
    $id: 'doc-upload-basic',
    fileUploadUrl: '/api/file/uploadFile',
    handleChange(e) {
        console.log(e.target.value);
    }
});
</code></pre>
<h3>照片墙模式</h3>
<div :controller="doc-upload-card">
    <ms-upload :widget="{action:@fileUploadUrl,listType:'picture-card',beforeUpload:@handleBeforeUpload,onChange:@handleChange}">
        <i class="fa fa-plus"></i>选择图片
    </ms-upload>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-upload-card&quot;&gt;
    &lt;ms-upload :widget=&quot;{action:@fileUploadUrl,listType:'picture-card',beforeUpload:@handleBeforeUpload,onChange:@handleChange}&quot;&gt;
        &lt;i class=&quot;fa fa-plus&quot;&gt;&lt;/i&gt;选择图片
    &lt;/ms-upload&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">
avalon.define({
    $id: 'doc-upload-card',
    fileUploadUrl: '/api/file/uploadFile',
    handleBeforeUpload(file) {
        if (file.type !== 'image/jpeg' &amp;&amp; file.type !== 'image/png') {
            message.error({
                content: '只能选择jpg或者png类型的图片！'
            });
            return false;
        }
        if (file.size / 1024 / 1024 &gt; 1) {
            message.error({
                content: '选择的图片必须小于1MB！'
            });
            return false;
        }
        return true;
    },
    handleChange(e) {
        console.log(e.target.value);
    }
});
</code></pre>
<h3>上传头像</h3>
<div :controller="doc-upload-avatar">
    <ms-upload :widget="{value:[@avatar],action:@fileUploadUrl,listType:'picture-card',showUploadList:false,onChange:@handleChange}">
        <i class="fa fa-plus"></i>选择图片
    </ms-upload>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-upload-avatar&quot;&gt;
    &lt;ms-upload :widget=&quot;{value:[@avatar],action:@fileUploadUrl,listType:'picture-card',showUploadList:false,onChange:@handleChange}&quot;&gt;
        &lt;i class=&quot;fa fa-plus&quot;&gt;&lt;/i&gt;选择图片
    &lt;/ms-upload&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">import 'ane';

avalon.define({
    $id: 'doc-upload-avatar',
    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    fileUploadUrl: '/api/file/uploadFile',
    handleChange(e) {
        console.log(e.target.value);
    }
});
</code></pre>
<h3>组件参数</h3>
<table class="table table-bordered">
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>文件 url 数组</td>
<td>string[]</td>
<td>[]</td>
</tr>
<tr>
<td>action</td>
<td>必选，文件上传地址</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>listType</td>
<td>文件列表展示方式</td>
<td>'text-list' | 'picture-card'</td>
<td>'text-list'</td>
</tr>
<tr>
<td>showUploadList</td>
<td>是否显示文件列表，在照片墙模式下，如果此项为 false，则为单文件模式</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>btnClass</td>
<td>上传按钮 class，只在非照片墙模式下有效</td>
<td>string</td>
<td>'btn btn-default'</td>
</tr>
<tr>
<td>beforeUpload</td>
<td>在文件开始上传前触发的回调，如果返回 false，则不上传文件</td>
<td>function(file:File)</td>
<td><code>() =&gt; true</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p>继承 <a href="#!/form-control">ms-control 组件</a> 的所有参数</p>
</blockquote>
<blockquote>
<p>beforeUpload 参数在 IE8 下不能获取文件大小，类型只能根据文件后缀名判断。只能和服务器端配合做到准确判断</p>
</blockquote>
</div>`});

__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-upload-basic',
    fileUploadUrl: '/api/file/uploadFile',
    handleChange(e) {
        console.log(e.target.value);
    }
});


__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-upload-card',
    fileUploadUrl: '/api/file/uploadFile',
    handleBeforeUpload(file) {
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
            __WEBPACK_IMPORTED_MODULE_1_ane__["message"].error({
                content: '只能选择jpg或者png类型的图片！'
            });
            return false;
        }
        if (file.size / 1024 / 1024 > 1) {
            __WEBPACK_IMPORTED_MODULE_1_ane__["message"].error({
                content: '选择的图片必须小于1MB！'
            });
            return false;
        }
        return true;
    },
    handleChange(e) {
        console.log(e.target.value);
    }
});



__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-upload-avatar',
    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    fileUploadUrl: '/api/file/uploadFile',
    handleChange(e) {
        console.log(e.target.value);
    }
});


/***/ })

});