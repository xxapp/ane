## 分页组件

### 基本用法

```html
<div :controller="doc-pagination-basic">
    <ms-pagination :widget="{current:@current,pageSize:@pageSize,total:@total,onChange:@handlePageChange}"></ms-pagination>
</div>
```

```js
import * as avalon from 'avalon2';
import 'ane';

const vm = avalon.define({
    $id: 'doc-pagination-basic',
    current: 1,
    pageSize: 10,
    total: 30,
    handlePageChange(currentPage) {
        console.log('当前第' + currentPage + '页');
    }
});
```

### 组件参数

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| current | 当前页，从 1 开始 | number | 1 |
| pageSize | 每页条数 | number | 10 |
| total | 数据总数 | total | 0 |
| onChange | 翻页时的回调 | function(currentPage:number) | noop |