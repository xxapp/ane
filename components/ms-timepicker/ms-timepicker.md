## 时间选择器

### 基本用法

```html
<div :controller="test">
    <ms-timepicker :widget="{
        placeholder:'请选择打卡时间'
    }"></ms-timepicker>
</div>
```

### 格式化时间

```html
<div :controller="test">
    <ms-timepicker :widget="{
        placeholder:'请选择打卡时间',
        format:'HH:mm'
    }"></ms-timepicker>
</div>
```

### 组件参数

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| format | 日期格式，参考 momentjs | string | `'HH:mm:ss'` |

> 继承 [ms-control 组件](#!/form-control) 的所有参数