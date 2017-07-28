webpackJsonpindex([17],{

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

const name = 'component-demo-datepicker-datepicker';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
avalon.component(name, {    template: `<div><h2>日期选择器</h2>
<h3>基本用法</h3>
<div>
    <ms-datepicker :widget="{
        placeholder:'请选择入学时间'
    }"></ms-datepicker>
</div>
<pre><code :skip="true" class="language-html">&lt;div&gt;
    &lt;ms-datepicker :widget=&quot;{
        placeholder:'请选择入学时间'
    }&quot;&gt;&lt;/ms-datepicker&gt;
&lt;/div&gt;
</code></pre>
<h3>格式化日期</h3>
<div>
    <ms-datepicker :widget="{
        placeholder:'请选择入学时间',
        format:'YYYY/MM/DD'
    }"></ms-datepicker>
</div>
<pre><code :skip="true" class="language-html">&lt;div&gt;
    &lt;ms-datepicker :widget=&quot;{
        placeholder:'请选择入学时间',
        format:'YYYY/MM/DD'
    }&quot;&gt;&lt;/ms-datepicker&gt;
&lt;/div&gt;
</code></pre>
<h3>不可选择的日期</h3>
<div>
    <ms-datepicker :widget="{
        placeholder:'请选择入学时间',
        startDate:'2017/5/26',
        endDate:'2018/7/26'
    }"></ms-datepicker>
</div>
<pre><code :skip="true" class="language-html">&lt;div&gt;
    &lt;ms-datepicker :widget=&quot;{
        placeholder:'请选择入学时间',
        startDate:'2017/5/26',
        endDate:'2018/7/26'
    }&quot;&gt;&lt;/ms-datepicker&gt;
&lt;/div&gt;
</code></pre>
<h3>日期时间选择</h3>
<div>
    <ms-datepicker :widget="{
        placeholder:'请选择抢购开始时间',
        showTime: true
    }"></ms-datepicker>
</div>
<pre><code :skip="true" class="language-html">&lt;div&gt;
    &lt;ms-datepicker :widget=&quot;{
        placeholder:'请选择抢购开始时间',
        showTime: true
    }&quot;&gt;&lt;/ms-datepicker&gt;
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
<td><code>'YYYY-MM-DD'</code></td>
</tr>
<tr>
<td>startDate</td>
<td>控制可以选择的日期范围的开始日期</td>
<td>string</td>
<td>''</td>
</tr>
<tr>
<td>endDate</td>
<td>控制可以选择的日期范围的结束日期</td>
<td>string</td>
<td>''</td>
</tr>
<tr>
<td>disabledDate</td>
<td>不可选择日期的判断函数，传入 current（当前遍历日期的毫秒值），返回 true 表示此日期不可选</td>
<td>function(current:number)</td>
<td><code>() =&gt; false</code></td>
</tr>
<tr>
<td>showTime</td>
<td>是否需要选择时间，如果此项为 true，则 format 默认为 YYYY-MM-DD HH:mm:ss</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table>
<blockquote>
<p>继承 <a href="#!/form-control">ms-control 组件</a> 的所有参数</p>
</blockquote>
</div>`});

/***/ })

});