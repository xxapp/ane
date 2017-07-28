webpackJsonpindex([11],{

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_avalon2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_avalon2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ane__);


const name = 'component-demo-menu-menu';
/* harmony export (immutable) */ __webpack_exports__["name"] = name;
__WEBPACK_IMPORTED_MODULE_0_avalon2__["component"](name, {    template: `<div><h2>菜单</h2>
<h3>基本用法</h3>
<div :controller="doc-menu-basic" style="width: 300px;">
    <ms-menu :widget="{
                        menu:@menu,
                        openKeys:@openKeys,
                        selectedKeys:@selectedKeys,
                        onClick:@handleMenuClick,
                        onOpenChange:@handleOpenChange
    }"></ms-menu>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-menu-basic&quot; style=&quot;width: 300px;&quot;&gt;
    &lt;ms-menu :widget=&quot;{
                        menu:@menu,
                        openKeys:@openKeys,
                        selectedKeys:@selectedKeys,
                        onClick:@handleMenuClick,
                        onOpenChange:@handleOpenChange
    }&quot;&gt;&lt;/ms-menu&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">import 'ane';

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
</code></pre>
<h3>只展开当前父级菜单</h3>
<div :controller="doc-menu-single" style="width: 300px;">
    <ms-menu :widget="{
                        menu:@menu,
                        openKeys:@openKeys,
                        selectedKeys:@selectedKeys,
                        onClick:@handleMenuClick,
                        onOpenChange:@handleOpenChange
    }"></ms-menu>
</div>
<pre><code :skip="true" class="language-html">&lt;div :controller=&quot;doc-menu-single&quot; style=&quot;width: 300px;&quot;&gt;
    &lt;ms-menu :widget=&quot;{
                        menu:@menu,
                        openKeys:@openKeys,
                        selectedKeys:@selectedKeys,
                        onClick:@handleMenuClick,
                        onOpenChange:@handleOpenChange
    }&quot;&gt;&lt;/ms-menu&gt;
&lt;/div&gt;
</code></pre>
<pre><code :skip="true" class="language-js">import 'ane';

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
        const latestOpenKey = openKeys.filter(key =&gt; !(state.openKeys.indexOf(key) &gt; -1))[0] || undefined;
        const latestCloseKey = state.openKeys.filter(key =&gt; !(openKeys.indexOf(key) &gt; -1))[0] || undefined;

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
</code></pre>
<h3>组件参数</h3>
<table class="table table-bordered">
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>menu</td>
<td>菜单数据</td>
<td>{key:string,title:string,icon:string,children:[]}[]</td>
<td>[]</td>
</tr>
<tr>
<td>selectedKeys</td>
<td>选择的菜单的key的集合</td>
<td>string[]</td>
<td>[]</td>
</tr>
<tr>
<td>openKeys</td>
<td>展开的菜单的key的集合</td>
<td>string[]</td>
<td>[]</td>
</tr>
<tr>
<td>onClick</td>
<td>点击菜单项的回调</td>
<td>function(item, key, keyPath)</td>
<td>noop</td>
</tr>
<tr>
<td>onOpenChange</td>
<td>菜单展开/收起的回调</td>
<td>function(openKeys:string[])</td>
<td>noop</td>
</tr>
</tbody>
</table>
</div>`});

__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
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



__WEBPACK_IMPORTED_MODULE_0_avalon2__["define"]({
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
            submenu: ['nav2']
        };
        return map[key] || [];
    },
    onInit(event) {
    }
});


/***/ })

});