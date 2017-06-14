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