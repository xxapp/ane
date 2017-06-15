## 菜单

### 基本用法

```html
<div :controller="doc-menu-basic" style="width: 300px;">
    <ms-menu :widget="{
                        menu:@menu,
                        openKeys:@openKeys,
                        selectedKeys:@selectedKeys,
                        onClick:@handleMenuClick,
                        onOpenChange:@handleOpenChange
    }"></ms-menu>
</div>
```

```js
import * as avalon from 'avalon2';
import 'ane';

avalon.define({
    $id: 'doc-menu-basic',
    menu: [{
        key: 'nav1',
        title: '导航一',
        icon: 'fa fa-home',
        children: [{
            key: 'option1',
            title: '选项一'
        }, {
            key: 'option2',
            title: '选项二'
        }, {
            key: 'option3',
            title: '选项三'
        }]
    }, {
        key: 'nav2',
        title: '导航二',
        icon: 'fa fa-book',
        children: [{
            key: 'option4',
            title: '选项四'
        }, {
            key: 'option5',
            title: '选项五'
        }, {
            key: 'submenu',
            title: '子菜单',
            children: [{
                key: 'option6',
                title: '选项六'
            }, {
                key: 'option7',
                title: '选项七'
            }]
        }]
    }],
    selectedKeys: ['option1'],
    openKeys: ['nav1'],
    handleMenuClick(item, key, keyPath) {
        console.log(item, key, keyPath);
    },
    onInit(event) {
    }
});
```

### 只展开当前父级菜单

```html
<div :controller="doc-menu-single" style="width: 300px;">
    <ms-menu :widget="{
                        menu:@menu,
                        openKeys:@openKeys,
                        selectedKeys:@selectedKeys,
                        onClick:@handleMenuClick,
                        onOpenChange:@handleOpenChange
    }"></ms-menu>
</div>
```

```js
import * as avalon from 'avalon2';
import 'ane';

avalon.define({
    $id: 'doc-menu-single',
    menu: [{
        key: 'nav1',
        title: '导航一',
        icon: 'fa fa-home',
        children: [{
            key: 'option1',
            title: '选项一'
        }, {
            key: 'option2',
            title: '选项二'
        }, {
            key: 'option3',
            title: '选项三'
        }]
    }, {
        key: 'nav2',
        title: '导航二',
        icon: 'fa fa-book',
        children: [{
            key: 'option4',
            title: '选项四'
        }, {
            key: 'option5',
            title: '选项五'
        }, {
            key: 'submenu',
            title: '子菜单',
            children: [{
                key: 'option6',
                title: '选项六'
            }, {
                key: 'option7',
                title: '选项七'
            }]
        }]
    }],
    selectedKeys: ['option1'],
    openKeys: ['nav1'],
    handleMenuClick(item, key, keyPath) {
        console.log(item, key, keyPath);
        this.selectedKeys = [key];
    },
    handleOpenChange(openKeys) {
        const state = this;
        const latestOpenKey = openKeys.filter(key => !(state.openKeys.indexOf(key) > -1))[0] || undefined;
        const latestCloseKey = state.openKeys.filter(key => !(openKeys.indexOf(key) > -1))[0] || undefined;

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        state.openKeys = nextOpenKeys;
    },
    getAncestorKeys(key) {
        const map = {
            submenu: ['nav2'],
        };
        return map[key] || [];
    },
    onInit(event) {
    }
});
```

### 组件参数

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| menu | 菜单数据 | {key:string,title:string,icon:string,children:\[\]}\[\] | \[\] |
| selectedKeys | 选择的菜单的key的集合 | string\[\] | \[\] |
| openKeys | 展开的菜单的key的集合 | string\[\] | \[\] |
| onClick | 点击菜单项的回调 | function(item, key, keyPath) | noop |
| onOpenChange | 菜单展开/收起的回调 | function(openKeys:string\[\]) | noop |