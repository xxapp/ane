webpackJsonpindex([13],{

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_avalon2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ane__);



const name = 'component-demo-form-form';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
__WEBPACK_IMPORTED_MODULE_0_avalon2__["component"](name, {    template: `<div><h2>表单组件</h2>
<h3>带验证功能的表单</h3>
<div :controller="doc-form-validate">
    <xmp is="ms-form" :widget="{$form:@$form}">
        <ms-form-item :widget="{label:'标题'}">
            <ms-input :widget="{col:'title',$rules:{required:true}}"></ms-input>
        </ms-form-item>
        <ms-form-item :widget="{label:'内容'}">
            <ms-textarea :widget="{col:'content',$rules:{required:true}}"></ms-textarea>
        </ms-form-item>
        <button type="button" class="btn btn-primary btn-sm" :click="@save">保存</button>
    </xmp>
    <pre>{{@json}}</pre>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-form-validate&quot;&gt;
    &lt;xmp is=&quot;ms-form&quot; :widget=&quot;{$form:@$form}&quot;&gt;
        &lt;ms-form-item :widget=&quot;{label:'标题'}&quot;&gt;
            &lt;ms-input :widget=&quot;{col:'title',$rules:{required:true}}&quot;&gt;&lt;/ms-input&gt;
        &lt;/ms-form-item&gt;
        &lt;ms-form-item :widget=&quot;{label:'内容'}&quot;&gt;
            &lt;ms-textarea :widget=&quot;{col:'content',$rules:{required:true}}&quot;&gt;&lt;/ms-textarea&gt;
        &lt;/ms-form-item&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-sm&quot; :click=&quot;@save&quot;&gt;保存&lt;/button&gt;
    &lt;/xmp&gt;
    &lt;pre&gt;{{@json}}&lt;/pre&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">
const vm = avalon.define({
    $id: 'doc-form-validate',
    json: '',
    $form: createForm({
        onFieldsChange(fields, record) {
            vm.json = JSON.stringify(record);
        }
    }),
    save() {
        vm.$form.validateFields().then(isAllValid =&gt; {
            if (isAllValid) {
                message.success({
                    content: '保存成功'
                });
            }
        })
    }
});
</code></pre>
<h3>用于搜索的表单</h3>
<div :controller="doc-form-search">
    <xmp is="ms-form" :widget="{$form:@$form,type:'search',inline:true}">
        <ms-form-item :widget="{label:'标题：'}">
            <ms-input :widget="{col:'title'}"></ms-input>
        </ms-form-item>
        <ms-form-item :widget="{label:'内容：'}">
            <ms-input :widget="{col:'content'}"></ms-input>
        </ms-form-item>
        <button type="button" class="btn btn-primary btn-sm" :click="@save">搜索</button>
    </xmp>
    <pre>{{@json}}</pre>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-form-search&quot;&gt;
    &lt;xmp is=&quot;ms-form&quot; :widget=&quot;{$form:@$form,type:'search',inline:true}&quot;&gt;
        &lt;ms-form-item :widget=&quot;{label:'标题：'}&quot;&gt;
            &lt;ms-input :widget=&quot;{col:'title'}&quot;&gt;&lt;/ms-input&gt;
        &lt;/ms-form-item&gt;
        &lt;ms-form-item :widget=&quot;{label:'内容：'}&quot;&gt;
            &lt;ms-input :widget=&quot;{col:'content'}&quot;&gt;&lt;/ms-input&gt;
        &lt;/ms-form-item&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-sm&quot; :click=&quot;@save&quot;&gt;搜索&lt;/button&gt;
    &lt;/xmp&gt;
    &lt;pre&gt;{{@json}}&lt;/pre&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">
const vm1 = avalon.define({
    $id: 'doc-form-search',
    json: '',
    $form: createForm({
        onFieldsChange(fields, record) {
            vm1.json = JSON.stringify(record);
        }
    }),
    save() {
        vm1.$form.validateFields().then(isAllValid =&gt; {
            if (isAllValid) {
                message.success({
                    content: JSON.stringify(vm1.$form.record)
                });
            }
        })
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
<td>$form</td>
<td>表单数据集散中心，详见下文</td>
<td>createForm()</td>
<td>null</td>
</tr>
<tr>
<td>type</td>
<td>如果为 search，则只在表单项的值被用户手动修改时，才会加入到最后要提交的数据对象上，用于搜索表单</td>
<td>string</td>
<td>''</td>
</tr>
<tr>
<td>horizontal</td>
<td>是否添加 form-horizontal 到 class</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>inline</td>
<td>是否添加 form-inline 到 class</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table>
<h4>createFrom(options)</h4>
<p>由于 avalon2 自带的表单验证只能配合 ms-duplex 使用，表单中每个组件都写 onChnage 配置又很繁琐，并且为了方便的收集和分发表单数据，所以有了这个 <code>“表单数据集散中心”</code>。</p>
<p>options 配置：</p>
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
<td>record</td>
<td>表单数据</td>
<td>any</td>
<td><code>{}</code></td>
</tr>
<tr>
<td>autoAsyncChange</td>
<td>是否在表单项改变时同步数据到 record</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>onFieldsChange</td>
<td>表单项改变的回调</td>
<td>function(fields, record)</td>
<td>noop</td>
</tr>
</tbody>
</table>
<p>$form 对象可访问的属性如下：</p>
<table class="table table-bordered">
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>fields</td>
<td>所有的字段集合</td>
<td>{ [string]: meta }</td>
</tr>
<tr>
<td>setFieldsValue</td>
<td>设置字段值的方法</td>
<td>(fields) =&gt; void</td>
</tr>
<tr>
<td>addFields</td>
<td>添加字段</td>
<td>(fields) =&gt; void</td>
</tr>
<tr>
<td>validateField</td>
<td>验证某个字段</td>
<td>(fieldName, field) =&gt; Promise&lt;{isOk: boolean, name: string, message: string}&gt;</td>
</tr>
<tr>
<td>validateFields</td>
<td>验证多个或者所有字段</td>
<td>(field?) =&gt; Promise&lt;boolean&gt;</td>
</tr>
<tr>
<td>resetFields</td>
<td>重置多个或者所有字段</td>
<td>(field?) =&gt; void</td>
</tr>
</tbody>
</table>
</div>`});
const vm = __WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-form-validate',
    json: '',
    $form: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ane__["createForm"])({
        onFieldsChange(fields, record) {
            vm.json = JSON.stringify(record);
        }
    }),
    save() {
        vm.$form.validateFields().then(isAllValid => {
            if (isAllValid) {
                __WEBPACK_IMPORTED_MODULE_1_ane__["message"].success({
                    content: '保存成功'
                });
            }
        })
    }
});


const vm1 = __WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-form-search',
    json: '',
    $form: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ane__["createForm"])({
        onFieldsChange(fields, record) {
            vm1.json = JSON.stringify(record);
        }
    }),
    save() {
        vm1.$form.validateFields().then(isAllValid => {
            if (isAllValid) {
                __WEBPACK_IMPORTED_MODULE_1_ane__["message"].success({
                    content: JSON.stringify(vm1.$form.record)
                });
            }
        })
    }
});


/***/ })

});