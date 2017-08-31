webpackJsonpindex([5],{

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var $ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var ane_1 = __webpack_require__(193);
exports.name = 'component-demo-components-table-table';
avalon.component(exports.name, { template: "<div><h2>\u6570\u636E\u8868\u683C</h2>\n<h3>\u672C\u5730\u5206\u9875</h3>\n<div :controller=\"doc-table-local\">\n    <ms-table :widget=\"{data:@list,actions:@actions,onSelect:@handleSelect,onSelectAll:@handleSelectAll,selectionChange:@handleSelectionChange}\">\n        <ms-table-header :widget=\"{dataIndex:'id',type:'selection'}\"></ms-table-header>\n        <ms-table-header :widget=\"{title:'\u5E8F\u53F7',type:'index'}\"></ms-table-header>\n        <ms-table-header :widget=\"{title:'\u5730\u5740',dataIndex:'address'}\"></ms-table-header>\n        <ms-table-header :widget=\"{title:'\u7701\u4EFD',dataIndex:'province'}\"></ms-table-header>\n        <ms-table-header :widget=\"{title:'\u540D\u79F0'}\"><span :skip>{{record.name}}</span></ms-table-header>\n        <ms-table-header :widget=\"{title:'\u64CD\u4F5C',dataIndex:'name'}\">\n            <button type=\"button\" class=\"btn btn-danger btn-xs\" :click=\"handle('delete')\">\u5220\u9664</button>\n        </ms-table-header>\n    </ms-table>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-table-local&quot;&gt;\n    &lt;ms-table :widget=&quot;{data:@list,actions:@actions,onSelect:@handleSelect,onSelectAll:@handleSelectAll,selectionChange:@handleSelectionChange}&quot;&gt;\n        &lt;ms-table-header :widget=&quot;{dataIndex:'id',type:'selection'}&quot;&gt;&lt;/ms-table-header&gt;\n        &lt;ms-table-header :widget=&quot;{title:'\u5E8F\u53F7',type:'index'}&quot;&gt;&lt;/ms-table-header&gt;\n        &lt;ms-table-header :widget=&quot;{title:'\u5730\u5740',dataIndex:'address'}&quot;&gt;&lt;/ms-table-header&gt;\n        &lt;ms-table-header :widget=&quot;{title:'\u7701\u4EFD',dataIndex:'province'}&quot;&gt;&lt;/ms-table-header&gt;\n        &lt;ms-table-header :widget=&quot;{title:'\u540D\u79F0'}&quot;&gt;&lt;span :skip&gt;{{record.name}}&lt;/span&gt;&lt;/ms-table-header&gt;\n        &lt;ms-table-header :widget=&quot;{title:'\u64CD\u4F5C',dataIndex:'name'}&quot;&gt;\n            &lt;button type=&quot;button&quot; class=&quot;btn btn-danger btn-xs&quot; :click=&quot;handle('delete')&quot;&gt;\u5220\u9664&lt;/button&gt;\n        &lt;/ms-table-header&gt;\n    &lt;/ms-table&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport * as $ from 'jquery';\nimport { message } from 'ane';\n\nconst vm = avalon.define({\n    $id: 'doc-table-local',\n    list: avalon.range(29).map(n =&gt; ({\n        id: n, name: '\u8001\u72FC' + n, address: '\u6DF1\u5C71', province: '\u8001\u6797'\n    })),\n    actions(type, text, record, index) {\n        if (type == 'delete') {\n            vm.list.removeAll(el =&gt; el.id == record.id );\n            message.success({\n                content: '\u5220\u9664\u6210\u529F'\n            });\n        }\n    },\n    handleSelect(record, selected, selectedRows) {\n        console.log(record, selected, selectedRows);\n    },\n    handleSelectAll(selected, selectedRows) {\n        console.log(selected, selectedRows);\n    },\n    handleSelectionChange(selectedRowKeys, selectedRows) {\n        console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);\n    }\n});\n</code></pre>\n<h3>\u8FDC\u7A0B\u5206\u9875</h3>\n<div :controller=\"doc-table-remote\">\n    <ms-table :widget=\"{data:@remoteList,loading:@loading,pagination:@pagination,onChange:@handleTableChange}\">\n        <ms-table-header :widget=\"{dataIndex:'region_id',type:'selection'}\"></ms-table-header>\n        <ms-table-header :widget=\"{title:'\u5730\u533A',dataIndex:'region_name'}\"></ms-table-header>\n        <ms-table-header :widget=\"{title:'PID',dataIndex:'region_parent_id'}\"></ms-table-header>\n    </ms-table>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-table-remote&quot;&gt;\n    &lt;ms-table :widget=&quot;{data:@remoteList,loading:@loading,pagination:@pagination,onChange:@handleTableChange}&quot;&gt;\n        &lt;ms-table-header :widget=&quot;{dataIndex:'region_id',type:'selection'}&quot;&gt;&lt;/ms-table-header&gt;\n        &lt;ms-table-header :widget=&quot;{title:'\u5730\u533A',dataIndex:'region_name'}&quot;&gt;&lt;/ms-table-header&gt;\n        &lt;ms-table-header :widget=&quot;{title:'PID',dataIndex:'region_parent_id'}&quot;&gt;&lt;/ms-table-header&gt;\n    &lt;/ms-table&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport * as $ from 'jquery';\nimport { message } from 'ane';\n\nconst vm1 = avalon.define({\n    $id: 'doc-table-remote',\n    remoteList: [],\n    loading: false,\n    pagination: {\n        pageSize: 6, total: 0\n    },\n    fetch(params = {}) {\n        vm1.loading = true;\n        $.getJSON('http://easy-mock.com/mock/58ff1b7c5e43ae5dbea5eff3/api/demo', params).then(data =&gt; {\n            vm1.pagination.total = data.total;\n            data.rows[0].region_parent_id = Date.now();\n            vm1.remoteList = data.rows;\n            vm1.loading = false;\n        });\n    },\n    handleTableChange(pagination) {\n        if (this.pagination.hasOwnProperty('current')) {\n            vm1.pagination.current = pagination.current;\n        }\n        this.fetch({\n            start: pagination.pageSize * (pagination.current - 1),\n            limit: pagination.pageSize\n        });\n    }\n});\nvm1.fetch();\n</code></pre>\n<h3>\u7EC4\u4EF6\u53C2\u6570</h3>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>columns</td>\n<td>\u8868\u683C\u5217\u5B9A\u4E49</td>\n<td>{title:string,dataIndex:string,template:string}[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>data</td>\n<td>\u8868\u683C\u6570\u636E</td>\n<td>any[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>key</td>\n<td>\u6570\u636E\u884C\u7684\u552F\u4E00\u6807\u8BC6\u5B57\u6BB5</td>\n<td>string</td>\n<td>'id'</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>\u6570\u636E\u662F\u5426\u6B63\u5728\u52A0\u8F7D\u4E2D</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>needSelection</td>\n<td>\u662F\u5426\u9700\u8981\u9009\u62E9\u6570\u636E\u884C</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>actions</td>\n<td>handle\u65B9\u6CD5\u88AB\u8C03\u7528\u540E\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u5C31\u4F1A\u88AB\u8C03\u7528</td>\n<td>function(type:string,text:string,record,index:number,...extra)</td>\n<td>noop</td>\n</tr>\n<tr>\n<td>pagination</td>\n<td>\u5206\u9875\u5BF9\u8C61</td>\n<td>object</td>\n<td>{current: 1, pageSize: 10, total: NaN, onChange: avalon.noop}</td>\n</tr>\n<tr>\n<td>onSelect</td>\n<td>\u7528\u6237\u9009\u62E9/\u53D6\u6D88\u9009\u62E9\u884C\u7684\u56DE\u8C03\uFF0C\u4F20\u5165\u884C\u6570\u636E\u3001\u662F\u5426\u9009\u4E2D\u548C\u6240\u6709\u9009\u62E9\u7684\u884C\u6570\u636E</td>\n<td>function(record,selected:boolean,selectedRows)</td>\n<td>noop</td>\n</tr>\n<tr>\n<td>onSelectAll</td>\n<td>\u7528\u6237\u5168\u9009/\u53D6\u6D88\u5168\u9009\u7684\u56DE\u8C03\uFF0C\u4F20\u5165\u662F\u5426\u9009\u4E2D\u548C\u6240\u6709\u9009\u62E9\u7684\u884C\u6570\u636E</td>\n<td>function(selected:boolean,selectedRows)</td>\n<td>noop</td>\n</tr>\n<tr>\n<td>selectionChange</td>\n<td>\u9009\u62E9\u9879\u53D8\u5316\u65F6\u5019\u7684\u56DE\u8C03\uFF0C\u4F20\u5165\u6240\u6709\u9009\u62E9\u7684\u884C\u6570\u636Ekey\u7684\u96C6\u5408\u548C\u6240\u6709\u9009\u62E9\u7684\u884C\u6570\u636E</td>\n<td>function(selectedRowKeys:string[],selectedRows)</td>\n<td>noop</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>\u5206\u9875\u3001\u8FC7\u6EE4\u6216\u6392\u5E8F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td>\n<td>function(pagination)</td>\n<td>noop</td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>\u5F53 pagination \u4E2D\u7684 total \u5C5E\u6027\u4E3A <code>NaN</code> \u65F6\uFF0C\u8868\u793A\u672C\u5730\u5206\u9875\uFF0C\u5426\u5219\u8868\u793A\u8FDC\u7A0B\u5206\u9875</p>\n</blockquote>\n<blockquote>\n<p>handle \u662F\u4E00\u4E2A\u5185\u7F6E\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u76F8\u5E94\u81EA\u5B9A\u4E49\u7684\u8868\u683C\u6570\u636E\u64CD\u4F5C\uFF0C\u5E76\u4EA4\u7ED9 actions \u53C2\u6570\u7EDF\u4E00\u5904\u7406</p>\n</blockquote>\n</div>" });
var vm = avalon.define({
    $id: 'doc-table-local',
    list: avalon.range(29).map(function (n) { return ({
        id: n, name: '老狼' + n, address: '深山', province: '老林'
    }); }),
    actions: function (type, text, record, index) {
        if (type == 'delete') {
            vm.list.removeAll(function (el) { return el.id == record.id; });
            ane_1.message.success({
                content: '删除成功'
            });
        }
    },
    handleSelect: function (record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
    },
    handleSelectAll: function (selected, selectedRows) {
        console.log(selected, selectedRows);
    },
    handleSelectionChange: function (selectedRowKeys, selectedRows) {
        console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
    }
});
var vm1 = avalon.define({
    $id: 'doc-table-remote',
    remoteList: [],
    loading: false,
    pagination: {
        pageSize: 6, total: 0
    },
    fetch: function (params) {
        if (params === void 0) { params = {}; }
        vm1.loading = true;
        $.getJSON('http://easy-mock.com/mock/58ff1b7c5e43ae5dbea5eff3/api/demo', params).then(function (data) {
            vm1.pagination.total = data.total;
            data.rows[0].region_parent_id = Date.now();
            vm1.remoteList = data.rows;
            vm1.loading = false;
        });
    },
    handleTableChange: function (pagination) {
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