## 表单控件

此组件不应该直接被实例化，只能被其它组件继承。

### 组件参数

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| value | 默认值 | string | '' |
| col | 字段路径 | string | '' |
| placeholder | 占位提示 | string | '' |
| width | 显示宽度 | string | 'x' |
| onChange | 组件值改变回调 | function(e:{target:{value:string},type:string}) | noop |