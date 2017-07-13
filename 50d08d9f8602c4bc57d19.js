webpackJsonpindex([5],{

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_avalon2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ane__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ane__);




const name = 'component-demo-table-table';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
__WEBPACK_IMPORTED_MODULE_0_avalon2__["component"](name, {    template: `<div><h2>数据表格</h2>
<h3>本地分页</h3>
<div :controller="doc-table-local">
    <ms-table :widget="{data:@list,actions:@actions,onSelect:@handleSelect,onSelectAll:@handleSelectAll,selectionChange:@handleSelectionChange}">
        <ms-table-header :widget="{dataIndex:'id',type:'selection'}"></ms-table-header>
        <ms-table-header :widget="{title:'地址',dataIndex:'address'}"></ms-table-header>
        <ms-table-header :widget="{title:'省份',dataIndex:'province'}"></ms-table-header>
        <ms-table-header :widget="{title:'名称'}"><span :skip>{{record.name}}</span></ms-table-header>
        <ms-table-header :widget="{title:'操作',dataIndex:'name'}">
            <button type="button" class="btn btn-danger btn-xs" :click="handle('delete')">删除</button>
        </ms-table-header>
    </ms-table>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-table-local&quot;&gt;
    &lt;ms-table :widget=&quot;{data:@list,actions:@actions,onSelect:@handleSelect,onSelectAll:@handleSelectAll,selectionChange:@handleSelectionChange}&quot;&gt;
        &lt;ms-table-header :widget=&quot;{dataIndex:'id',type:'selection'}&quot;&gt;&lt;/ms-table-header&gt;
        &lt;ms-table-header :widget=&quot;{title:'地址',dataIndex:'address'}&quot;&gt;&lt;/ms-table-header&gt;
        &lt;ms-table-header :widget=&quot;{title:'省份',dataIndex:'province'}&quot;&gt;&lt;/ms-table-header&gt;
        &lt;ms-table-header :widget=&quot;{title:'名称'}&quot;&gt;&lt;span :skip&gt;{{record.name}}&lt;/span&gt;&lt;/ms-table-header&gt;
        &lt;ms-table-header :widget=&quot;{title:'操作',dataIndex:'name'}&quot;&gt;
            &lt;button type=&quot;button&quot; class=&quot;btn btn-danger btn-xs&quot; :click=&quot;handle('delete')&quot;&gt;删除&lt;/button&gt;
        &lt;/ms-table-header&gt;
    &lt;/ms-table&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">
const vm = avalon.define({
    $id: 'doc-table-local',
    list: avalon.range(29).map(n =&gt; ({
        id: n, name: '老狼' + n, address: '深山', province: '老林'
    })),
    actions(type, text, record, index) {
        if (type == 'delete') {
            vm.list.removeAll(el =&gt; el.id == record.id );
            message.success({
                content: '删除成功'
            });
        }
    },
    handleSelect(record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
    },
    handleSelectAll(selected, selectedRows) {
        console.log(selected, selectedRows);
    },
    handleSelectionChange(selectedRowKeys, selectedRows) {
        console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
    }
});
</code></pre>
<h3>远程分页</h3>
<div :controller="doc-table-remote">
    <ms-table :widget="{data:@remoteList,loading:@loading,pagination:@pagination,onChange:@handleTableChange}">
        <ms-table-header :widget="{dataIndex:'region_id',type:'selection'}"></ms-table-header>
        <ms-table-header :widget="{title:'地区',dataIndex:'region_name'}"></ms-table-header>
        <ms-table-header :widget="{title:'PID',dataIndex:'region_parent_id'}"></ms-table-header>
    </ms-table>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-table-remote&quot;&gt;
    &lt;ms-table :widget=&quot;{data:@remoteList,loading:@loading,pagination:@pagination,onChange:@handleTableChange}&quot;&gt;
        &lt;ms-table-header :widget=&quot;{dataIndex:'region_id',type:'selection'}&quot;&gt;&lt;/ms-table-header&gt;
        &lt;ms-table-header :widget=&quot;{title:'地区',dataIndex:'region_name'}&quot;&gt;&lt;/ms-table-header&gt;
        &lt;ms-table-header :widget=&quot;{title:'PID',dataIndex:'region_parent_id'}&quot;&gt;&lt;/ms-table-header&gt;
    &lt;/ms-table&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">
const vm1 = avalon.define({
    $id: 'doc-table-remote',
    remoteList: [],
    loading: false,
    pagination: {
        pageSize: 6, total: 0
    },
    fetch(params = {}) {
        vm1.loading = true;
        $.getJSON('/api/demo', params).then(data =&gt; {
            vm1.pagination.total = data.total;
            data.rows[0].region_parent_id = Date.now();
            vm1.remoteList = data.rows;
            vm1.loading = false;
        });
    },
    handleTableChange(pagination) {
        if (this.pagination.hasOwnProperty('current')) {
            vm1.pagination.current = pagination.current;
        }
        this.fetch({
            start: pagination.pageSize * (pagination.current - 1),
            limit: pagination.pageSize
        });
    }
});
vm1.fetch();
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
<td>columns</td>
<td>表格列定义</td>
<td>{title:string,dataIndex:string,template:string}[]</td>
<td>[]</td>
</tr>
<tr>
<td>data</td>
<td>表格数据</td>
<td>any[]</td>
<td>[]</td>
</tr>
<tr>
<td>key</td>
<td>数据行的唯一标识字段</td>
<td>string</td>
<td>'id'</td>
</tr>
<tr>
<td>loading</td>
<td>数据是否正在加载中</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>needSelection</td>
<td>是否需要选择数据行</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>actions</td>
<td>handle方法被调用后，这个方法就会被调用</td>
<td>function(type:string,text:string,record,index:number,...extra)</td>
<td>noop</td>
</tr>
<tr>
<td>pagination</td>
<td>分页对象</td>
<td>object</td>
<td>{current: 1, pageSize: 10, total: NaN, onChange: avalon.noop}</td>
</tr>
<tr>
<td>onSelect</td>
<td>用户选择/取消选择行的回调，传入行数据、是否选中和所有选择的行数据</td>
<td>function(record,selected:boolean,selectedRows)</td>
<td>noop</td>
</tr>
<tr>
<td>onSelectAll</td>
<td>用户全选/取消全选的回调，传入是否选中和所有选择的行数据</td>
<td>function(selected:boolean,selectedRows)</td>
<td>noop</td>
</tr>
<tr>
<td>selectionChange</td>
<td>选择项变化时候的回调，传入所有选择的行数据key的集合和所有选择的行数据</td>
<td>function(selectedRowKeys:string[],selectedRows)</td>
<td>noop</td>
</tr>
<tr>
<td>onChange</td>
<td>分页、过滤或排序变化时的回调</td>
<td>function(pagination)</td>
<td>noop</td>
</tr>
</tbody>
</table>
<blockquote>
<p>当 pagination 中的 total 属性为 <code>NaN</code> 时，表示本地分页，否则表示远程分页</p>
</blockquote>
<blockquote>
<p>handle 是一个内置的方法，用于相应自定义的表格数据操作，并交给 actions 参数统一处理</p>
</blockquote>
</div>`});
const vm = __WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-table-local',
    list: __WEBPACK_IMPORTED_MODULE_0_avalon2__["range"](29).map(n => ({
        id: n, name: '老狼' + n, address: '深山', province: '老林'
    })),
    actions(type, text, record, index) {
        if (type == 'delete') {
            vm.list.removeAll(el => el.id == record.id );
            __WEBPACK_IMPORTED_MODULE_2_ane__["message"].success({
                content: '删除成功'
            });
        }
    },
    handleSelect(record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
    },
    handleSelectAll(selected, selectedRows) {
        console.log(selected, selectedRows);
    },
    handleSelectionChange(selectedRowKeys, selectedRows) {
        console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
    }
});


const vm1 = __WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
    $id: 'doc-table-remote',
    remoteList: [],
    loading: false,
    pagination: {
        pageSize: 6, total: 0
    },
    fetch(params = {}) {
        vm1.loading = true;
        __WEBPACK_IMPORTED_MODULE_1_jquery__["getJSON"]('/api/demo', params).then(data => {
            vm1.pagination.total = data.total;
            data.rows[0].region_parent_id = Date.now();
            vm1.remoteList = data.rows;
            vm1.loading = false;
        });
    },
    handleTableChange(pagination) {
        if (this.pagination.hasOwnProperty('current')) {
            vm1.pagination.current = pagination.current;
        }
        this.fetch({
            start: pagination.pageSize * (pagination.current - 1),
            limit: pagination.pageSize
        });
    }
});
vm1.fetch();


/***/ })

});