webpackJsonpindex([2],{

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

const name = 'component-demo-timepicker-timepicker';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
avalon.component(name, {    template: `<div><h2>时间选择器</h2>
<h3>基本用法</h3>
<div>
    <ms-timepicker :widget="{
        placeholder:'请选择打卡时间'
    }"></ms-timepicker>
</div>
<pre><code :skip="true" class="language-html">&lt;div&gt;
    &lt;ms-timepicker :widget=&quot;{
        placeholder:'请选择打卡时间'
    }&quot;&gt;&lt;/ms-timepicker&gt;
&lt;/div&gt;
</code></pre>
<h3>格式化时间</h3>
<div>
    <ms-timepicker :widget="{
        placeholder:'请选择打卡时间',
        format:'HH:mm'
    }"></ms-timepicker>
</div>
<pre><code :skip="true" class="language-html">&lt;div&gt;
    &lt;ms-timepicker :widget=&quot;{
        placeholder:'请选择打卡时间',
        format:'HH:mm'
    }&quot;&gt;&lt;/ms-timepicker&gt;
&lt;/div&gt;
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
<td>format</td>
<td>日期格式，参考 momentjs</td>
<td>string</td>
<td><code>'HH:mm:ss'</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p>继承 <a href="#!/form-control">ms-control 组件</a> 的所有参数</p>
</blockquote>
</div>`});

/***/ })

});