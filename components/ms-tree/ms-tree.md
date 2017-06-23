## 树组件

### 基本用法

```html
<div :controller="tree">
    <ms-tree :widget="{tree: @data}"></ms-tree>
</div>
```

```js
import * as avalon from 'avalon2';
import 'ane';

avalon.define({
    $id: "tree",
    data: [
        {text: "aaa", open: 1, subtree: [
                {text: 1111, open: 1, subtree: []},
                {text: 2222, open: 1, subtree: [
                        {text: 777, open: 1, subtree: []}
                    ]},
                {text: 3333, open: 1, subtree: [
                        {text: 8888, open: 1, subtree: []},
                        {text: 9999, open: 1, subtree: [
                                {text: '司徒正美', open: 1, subtree: []}
                            ]}
                    ]}
            ]},
        {text: "bbb", open: 1, subtree: [
                {text: 4444, open: 1, subtree: []},
                {text: 5555, open: 1, subtree: []},
                {text: 6666, open: 1, subtree: []}
            ]},
        {text: "ccc", open: 1, subtree: []},
        {text: "ddd", open: 1, subtree: []},
        {text: "eee", open: 1, subtree: [
                {text: 1234, open: 1, subtree: []}
            ]},
        {text: "fff", open: 1, subtree: []}
    ]

})
```