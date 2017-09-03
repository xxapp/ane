0.1.8 / 2017-08-31
------------------

- select 组件，修复外部更新 options 数据，不会重新渲染的问题

0.1.7 / 2017-08-25
------------------

- tree-select 组件，增加 direction （“下拉”方向）属性，同时 select/datepicker/timepicker 也增加了此属性
- tree-select 组件，onChange 回调传入更多信息

0.1.6 / 2017-08-23
------------------

- dialog 组件，修复通过叉叉关闭后无法再次打开的问题

0.1.5 / 2017-08-20
------------------

- dialog 组件，增加自定义弹出框按钮文字的功能

0.1.4 / 2017-08-16
------------------

- tree 组件，修复外部更新 tree 数据，不会重新渲染的问题
- tree 组件，修复 onSelect 回调事件对象属性名错误的问题

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