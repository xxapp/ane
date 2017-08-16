0.1.4 / 2017-08-16
------------------

- table 组件，修复外部更新 tree 数据，不会重新渲染的问题
- table 组件，修复 onSelect 回调事件对象属性名错误的问题

0.1.3 / 2017-08-14
------------------

- table 组件，增加自动序号列

    ``` html
    <ms-table-header :widget="{title:'序号',type:'index'}"></ms-table-header>
    ```

0.1.2 / 2017-08-14
------------------

- form 组件，validateField 方法只需传字段名称

0.1.1 / 2017-07-28
------------------

- 添加组件文档
- 解决菜单没有 active 状态的问题
- 解决表单组件共享一个 record 对象导致的数据错乱问题
- loading 组件，调整蒙版高度获取方式，将整体loading方法通过ane入口模块暴露出去
- 用 less 替代 sass 重写组件样式，并和 bootstrap less 源文件结合
- 增加组件：tree/tree-select