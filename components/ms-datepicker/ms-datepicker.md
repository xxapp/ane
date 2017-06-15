## 日期选择器

### 基本用法

```html
<div>
    <ms-datepicker :widget="{
        placeholder:'请选择入学时间'
    }"></ms-datepicker>
</div>
```

### 格式化日期

```html
<div>
    <ms-datepicker :widget="{
        placeholder:'请选择入学时间',
        format:'YYYY/MM/DD'
    }"></ms-datepicker>
</div>
```

### 不可选择的日期

```html
<div>
    <ms-datepicker :widget="{
        placeholder:'请选择入学时间',
        startDate:'2017/5/26',
        endDate:'2018/7/26'
    }"></ms-datepicker>
</div>
```

### 日期时间选择

```html
<div>
    <ms-datepicker :widget="{
        placeholder:'请选择抢购开始时间',
        showTime: true
    }"></ms-datepicker>
</div>
```

### 组件参数

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| format | 日期格式，参考 momentjs | string | `'YYYY-MM-DD'` |
| startDate | 控制可以选择的日期范围的开始日期 | string | '' |
| endDate | 控制可以选择的日期范围的结束日期 | string | '' |
| disabledDate | 不可选择日期的判断函数，传入 current（当前遍历日期的毫秒值），返回 true 表示此日期不可选 | function(current:number) | `() => false` |
| showTime | 是否需要选择时间，如果此项为 true，则 format 默认为 YYYY-MM-DD HH:mm:ss | boolean | false |

> 继承 [ms-control 组件](#!/form-control) 的所有参数