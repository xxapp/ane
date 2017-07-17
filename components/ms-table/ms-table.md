## 数据表格

### 本地分页

```html
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
```

```js
import * as avalon from 'avalon2';
import * as $ from 'jquery';
import { message } from 'ane';

const vm = avalon.define({
    $id: 'doc-table-local',
    list: avalon.range(29).map(n => ({
        id: n, name: '老狼' + n, address: '深山', province: '老林'
    })),
    actions(type, text, record, index) {
        if (type == 'delete') {
            vm.list.removeAll(el => el.id == record.id );
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
```

### 远程分页

```html
<div :controller="doc-table-remote">
    <ms-table :widget="{data:@remoteList,loading:@loading,pagination:@pagination,onChange:@handleTableChange}">
        <ms-table-header :widget="{dataIndex:'region_id',type:'selection'}"></ms-table-header>
        <ms-table-header :widget="{title:'地区',dataIndex:'region_name'}"></ms-table-header>
        <ms-table-header :widget="{title:'PID',dataIndex:'region_parent_id'}"></ms-table-header>
    </ms-table>
</div>
```

```js
import * as avalon from 'avalon2';
import * as $ from 'jquery';
import { message } from 'ane';

const vm1 = avalon.define({
    $id: 'doc-table-remote',
    remoteList: [],
    loading: false,
    pagination: {
        pageSize: 6, total: 0
    },
    fetch(params = {}) {
        vm1.loading = true;
        $.getJSON('http://easy-mock.com/mock/58ff1b7c5e43ae5dbea5eff3/api/demo', params).then(data => {
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
```

### 组件参数

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| columns | 表格列定义 | {title:string,dataIndex:string,template:string}\[\] | \[\] |
| data | 表格数据 | any\[\] | \[\] |
| key | 数据行的唯一标识字段 | string | 'id' |
| loading | 数据是否正在加载中 | boolean | false |
| needSelection | 是否需要选择数据行 | boolean | false |
| actions | handle方法被调用后，这个方法就会被调用 | function(type:string,text:string,record,index:number,...extra) | noop |
| pagination | 分页对象 | object | {current: 1, pageSize: 10, total: NaN, onChange: avalon.noop} |
| onSelect | 用户选择/取消选择行的回调，传入行数据、是否选中和所有选择的行数据 | function(record,selected:boolean,selectedRows) | noop |
| onSelectAll | 用户全选/取消全选的回调，传入是否选中和所有选择的行数据 | function(selected:boolean,selectedRows) | noop |
| selectionChange | 选择项变化时候的回调，传入所有选择的行数据key的集合和所有选择的行数据 | function(selectedRowKeys:string\[\],selectedRows) | noop |
| onChange | 分页、过滤或排序变化时的回调 | function(pagination) | noop |

> 当 pagination 中的 total 属性为 `NaN` 时，表示本地分页，否则表示远程分页

> handle 是一个内置的方法，用于相应自定义的表格数据操作，并交给 actions 参数统一处理