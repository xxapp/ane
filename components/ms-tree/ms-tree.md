## 树组件

### 基本用法

```html
<div :controller="tree">
    <ms-tree :widget="{tree: @data, checkedKeys: @checkedKeys, onCheck:@handleCheck}"></ms-tree>
</div>
```

```js
import * as avalon from 'avalon2';
import 'ane';

avalon.define({
    $id: "tree",
    data: [
        {key: 1, label: "aaa", children: [
                {key: 7, label: 1111, children: []},
                {key: 8, label: 2222, children: [
                        {key: 14, label: 777, children: []}
                    ]},
                {key: 9, label: 3333, children: [
                        {key: 15, label: 8888, children: []},
                        {key: 16, label: 9999, children: [
                                {key: 17, label: '司徒正美', children: []}
                            ]}
                    ]}
            ]},
        {key: 2, label: "bbb", children: [
                {key: 10, label: 4444, children: []},
                {key: 11, label: 5555, children: []},
                {key: 12, label: 6666, children: []}
            ]},
        {key: 3, label: "ccc", children: []},
        {key: 4, label: "ddd", children: []},
        {key: 5, label: "eee", children: [
                {key: 13, label: 1234, children: []}
            ]},
        {key: 6, label: "fff", children: []}
    ],
    checkedKeys: [],
    handleCheck(checkedKeys) {
        console.log(checkedKeys);
    }
})
```