webpackJsonpindex([15],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

const name = 'component-demo-form-control';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
avalon.component(name, {    template: `<div><h2>表单控件</h2>
<p>此组件不应该直接被实例化，只能被其它组件继承。</p>
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
<td>string</td>
<td>''</td>
</tr>
<tr>
<td>col</td>
<td>字段路径</td>
<td>string</td>
<td>''</td>
</tr>
<tr>
<td>placeholder</td>
<td>占位提示</td>
<td>string</td>
<td>''</td>
</tr>
<tr>
<td>width</td>
<td>显示宽度</td>
<td>string</td>
<td>'x'</td>
</tr>
<tr>
<td>onChange</td>
<td>组件值改变回调</td>
<td>function(e:{target:{value:string},type:string})</td>
<td>noop</td>
</tr>
</tbody>
</table>
</div>`});

/***/ })

});