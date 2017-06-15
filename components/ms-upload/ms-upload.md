## 文件上传

### 基本用法

```html
<div :controller="doc-upload-basic">
    <ms-upload :widget="{action: @fileUploadUrl,listType:'text-list',onChange:@handleChange}">
        <i class="fa fa-upload"></i>选择文件
    </ms-upload>
</div>
```

```js
import * as avalon from 'avalon2';
import 'ane';

avalon.define({
    $id: 'doc-upload-basic',
    fileUploadUrl: '/api/file/uploadFile',
    handleChange(e) {
        console.log(e.target.value);
    }
});
```

### 照片墙模式

```html
<div :controller="doc-upload-card">
    <ms-upload :widget="{action:@fileUploadUrl,listType:'picture-card',beforeUpload:@handleBeforeUpload,onChange:@handleChange}">
        <i class="fa fa-plus"></i>选择图片
    </ms-upload>
</div>
```

```js
import * as avalon from 'avalon2';
import { message } from 'ane';

avalon.define({
    $id: 'doc-upload-card',
    fileUploadUrl: '/api/file/uploadFile',
    handleBeforeUpload(file) {
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
            message.error({
                content: '只能选择jpg或者png类型的图片！'
            });
            return false;
        }
        if (file.size / 1024 / 1024 > 1) {
            message.error({
                content: '选择的图片必须小于1MB！'
            });
            return false;
        }
        return true;
    },
    handleChange(e) {
        console.log(e.target.value);
    }
});
```

### 上传头像

```html
<div :controller="doc-upload-avatar">
    <ms-upload :widget="{value:[@avatar],action:@fileUploadUrl,listType:'picture-card',showUploadList:false,onChange:@handleChange}">
        <i class="fa fa-plus"></i>选择图片
    </ms-upload>
</div>
```

```js
import * as avalon from 'avalon2';
import 'ane';

avalon.define({
    $id: 'doc-upload-avatar',
    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    fileUploadUrl: '/api/file/uploadFile',
    handleChange(e) {
        console.log(e.target.value);
    }
});
```

### 组件参数

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| value | 文件 url 数组 | string\[\] | \[\] |
| action | 必选，文件上传地址 | string | - |
| listType | 文件列表展示方式 | 'text-list' \| 'picture-card' | 'text-list' |
| showUploadList | 是否显示文件列表，在照片墙模式下，如果此项为 false，则为单文件模式 | boolean | true |
| btnClass | 上传按钮 class，只在非照片墙模式下有效 | string | 'btn btn-default' |
| beforeUpload | 在文件开始上传前触发的回调，如果返回 false，则不上传文件 | function(file:File) | `() => true` |

> 继承 [ms-control 组件](#!/form-control) 的所有参数

> beforeUpload 参数在 IE8 下不能获取文件大小，类型只能根据文件后缀名判断。只能和服务器端配合做到准确判断