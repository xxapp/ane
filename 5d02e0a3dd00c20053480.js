webpackJsonpindex([5],{

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_avalon2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ane__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);




const name = 'component-demo-select-select';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
__WEBPACK_IMPORTED_MODULE_0_avalon2__["component"](name, {    template: `<div><h2>选择组件</h2>
<h3>基本用法</h3>
<div :controller="doc-select-basic">
    <xmp is="ms-form" :widget="{$form: @$form}">
        <ms-form-item>
            <ms-select :widget="{col:'comic'}">
                <ms-select-option :widget="{value:'onepiece'}">海贼王</ms-select-option>
                <ms-select-option :widget="{value:'conna'}">名侦探柯南</ms-select-option>
                <ms-select-option :widget="{value:'titan'}">进击的巨人</ms-select-option>
                <ms-select-option :widget="{value:'disabled', disabled:true}">禁用</ms-select-option>
                <ms-select-option :widget="{value:'onepunchman'}">一拳超人</ms-select-option>
            </ms-select>
        </ms-form-item>
    </xmp>
    <pre>{{@json}}</pre>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-select-basic&quot;&gt;
    &lt;xmp is=&quot;ms-form&quot; :widget=&quot;{$form: @$form}&quot;&gt;
        &lt;ms-form-item&gt;
            &lt;ms-select :widget=&quot;{col:'comic'}&quot;&gt;
                &lt;ms-select-option :widget=&quot;{value:'onepiece'}&quot;&gt;海贼王&lt;/ms-select-option&gt;
                &lt;ms-select-option :widget=&quot;{value:'conna'}&quot;&gt;名侦探柯南&lt;/ms-select-option&gt;
                &lt;ms-select-option :widget=&quot;{value:'titan'}&quot;&gt;进击的巨人&lt;/ms-select-option&gt;
                &lt;ms-select-option :widget=&quot;{value:'disabled', disabled:true}&quot;&gt;禁用&lt;/ms-select-option&gt;
                &lt;ms-select-option :widget=&quot;{value:'onepunchman'}&quot;&gt;一拳超人&lt;/ms-select-option&gt;
            &lt;/ms-select&gt;
        &lt;/ms-form-item&gt;
    &lt;/xmp&gt;
    &lt;pre&gt;{{@json}}&lt;/pre&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">
const vm = avalon.define({
    $id: 'doc-select-basic',
    json: '',
    $form: createForm({
        onFieldsChange(fields, record) {
            vm.json = JSON.stringify(record);
        }
    })
});
</code></pre>
<h3>多选</h3>
<div :controller="doc-select-multiple">
    <ms-select :widget="{col:'comic',mode:'multiple'}">
        <ms-select-option :widget="{value:'onepiece'}">海贼王</ms-select-option>
        <ms-select-option :widget="{value:'conna'}">名侦探柯南</ms-select-option>
        <ms-select-option :widget="{value:'titan'}">进击的巨人</ms-select-option>
        <ms-select-option :widget="{value:'disabled', disabled:true}">禁用</ms-select-option>
        <ms-select-option :widget="{value:'onepunchman'}">一拳超人</ms-select-option>
    </ms-select>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-select-multiple&quot;&gt;
    &lt;ms-select :widget=&quot;{col:'comic',mode:'multiple'}&quot;&gt;
        &lt;ms-select-option :widget=&quot;{value:'onepiece'}&quot;&gt;海贼王&lt;/ms-select-option&gt;
        &lt;ms-select-option :widget=&quot;{value:'conna'}&quot;&gt;名侦探柯南&lt;/ms-select-option&gt;
        &lt;ms-select-option :widget=&quot;{value:'titan'}&quot;&gt;进击的巨人&lt;/ms-select-option&gt;
        &lt;ms-select-option :widget=&quot;{value:'disabled', disabled:true}&quot;&gt;禁用&lt;/ms-select-option&gt;
        &lt;ms-select-option :widget=&quot;{value:'onepunchman'}&quot;&gt;一拳超人&lt;/ms-select-option&gt;
    &lt;/ms-select&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">
avalon.define({
    $id: 'doc-select-multiple'
});
</code></pre>
<h3>带搜索框</h3>
<div :controller="doc-select-multiple">
    <ms-select :widget="{col:'comic',showSearch:true}">
        <ms-select-option :widget="{value:'onepiece'}">海贼王</ms-select-option>
        <ms-select-option :widget="{value:'conna'}">名侦探柯南</ms-select-option>
        <ms-select-option :widget="{value:'titan'}">进击的巨人</ms-select-option>
        <ms-select-option :widget="{value:'disabled', disabled:true}">禁用</ms-select-option>
        <ms-select-option :widget="{value:'onepunchman'}">一拳超人</ms-select-option>
    </ms-select>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-select-multiple&quot;&gt;
    &lt;ms-select :widget=&quot;{col:'comic',showSearch:true}&quot;&gt;
        &lt;ms-select-option :widget=&quot;{value:'onepiece'}&quot;&gt;海贼王&lt;/ms-select-option&gt;
        &lt;ms-select-option :widget=&quot;{value:'conna'}&quot;&gt;名侦探柯南&lt;/ms-select-option&gt;
        &lt;ms-select-option :widget=&quot;{value:'titan'}&quot;&gt;进击的巨人&lt;/ms-select-option&gt;
        &lt;ms-select-option :widget=&quot;{value:'disabled', disabled:true}&quot;&gt;禁用&lt;/ms-select-option&gt;
        &lt;ms-select-option :widget=&quot;{value:'onepunchman'}&quot;&gt;一拳超人&lt;/ms-select-option&gt;
    &lt;/ms-select&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">
avalon.define({
    $id: 'doc-select-multiple'
});
</code></pre>
<h3>远程加载数据</h3>
<div :controller="doc-select-remote">
    <ms-select :widget="{mode:'multiple',showSearch:true,remote:true,remoteMethod:@fetchOptions}"></ms-select>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-select-remote&quot;&gt;
    &lt;ms-select :widget=&quot;{mode:'multiple',showSearch:true,remote:true,remoteMethod:@fetchOptions}&quot;&gt;&lt;/ms-select&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">
avalon.define({
    $id: 'doc-select-remote',
    fetchOptions(query) {
        return $.getJSON('https://randomuser.me/api/?results=5').then(json =&gt; {
            return json.results.map(user =&gt; ({
                label: user.name.first + user.name.last,
                value: user.login.username
            }));
        });
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
<td>默认值</td>
<td>string[]</td>
<td>[]</td>
</tr>
<tr>
<td>mode</td>
<td>模式</td>
<td>'combobox' | 'multiple' | 'tags'</td>
<td>''</td>
</tr>
<tr>
<td>options</td>
<td>下拉选项，可以替代ms-select-option</td>
<td>{label:string,value:string,disabled:boolean}[]</td>
<td>[]</td>
</tr>
<tr>
<td>showSearch</td>
<td>是否显示搜索框</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>remote</td>
<td>是否为远程搜索</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>remoteMethod</td>
<td>remoteMethod 当remote为true时调用，包含远程搜索要执行的请求，要求返回一个Promise&lt;options&gt;</td>
<td>function(query)</td>
<td>noop</td>
</tr>
<tr>
<td>onChange</td>
<td>组件值改变回调</td>
<td>function(e:{target:{value:string[]},type:string})</td>
<td>noop</td>
</tr>
</tbody>
</table>
<blockquote>
<p>继承 <a href="#!/form-control">ms-control 组件</a> 的所有参数</p>
</blockquote>
</div>`});
const vm = __WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-select-basic',
    json: '',
    $form: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ane__["createForm"])({
        onFieldsChange(fields, record) {
            vm.json = JSON.stringify(record);
        }
    })
});


__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-select-multiple'
});


__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-select-multiple'
});


__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-select-remote',
    fetchOptions(query) {
        return __WEBPACK_IMPORTED_MODULE_2_jquery__["getJSON"]('https://randomuser.me/api/?results=5').then(json => {
            return json.results.map(user => ({
                label: user.name.first + user.name.last,
                value: user.login.username
            }));
        });
    }
});


/***/ })

});