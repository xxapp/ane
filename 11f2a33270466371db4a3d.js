webpackJsonpindex([11],{

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(198);
exports.name = 'component-demo-components-menu-menu';
avalon.component(exports.name, { template: "<div><h2>\u83DC\u5355</h2>\n<h3>\u57FA\u672C\u7528\u6CD5</h3>\n<div :controller=\"doc-menu-basic\" style=\"width: 300px;\">\n    <ms-menu :widget=\"{\n                        menu:@menu,\n                        openKeys:@openKeys,\n                        selectedKeys:@selectedKeys,\n                        onClick:@handleMenuClick,\n                        onOpenChange:@handleOpenChange\n    }\"></ms-menu>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-menu-basic&quot; style=&quot;width: 300px;&quot;&gt;\n    &lt;ms-menu :widget=&quot;{\n                        menu:@menu,\n                        openKeys:@openKeys,\n                        selectedKeys:@selectedKeys,\n                        onClick:@handleMenuClick,\n                        onOpenChange:@handleOpenChange\n    }&quot;&gt;&lt;/ms-menu&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport 'ane';\n\navalon.define({\n    $id: 'doc-menu-basic',\n    menu: [{\n        key: 'nav1',\n        title: '\u5BFC\u822A\u4E00',\n        icon: 'fa fa-home',\n        children: [{\n            key: 'option1',\n            title: '\u9009\u9879\u4E00'\n        }, {\n            key: 'option2',\n            title: '\u9009\u9879\u4E8C'\n        }, {\n            key: 'option3',\n            title: '\u9009\u9879\u4E09'\n        }]\n    }, {\n        key: 'nav2',\n        title: '\u5BFC\u822A\u4E8C',\n        icon: 'fa fa-book',\n        children: [{\n            key: 'option4',\n            title: '\u9009\u9879\u56DB'\n        }, {\n            key: 'option5',\n            title: '\u9009\u9879\u4E94'\n        }, {\n            key: 'submenu',\n            title: '\u5B50\u83DC\u5355',\n            children: [{\n                key: 'option6',\n                title: '\u9009\u9879\u516D'\n            }, {\n                key: 'option7',\n                title: '\u9009\u9879\u4E03'\n            }]\n        }]\n    }],\n    selectedKeys: ['option1'],\n    openKeys: ['nav1'],\n    handleMenuClick(item, key, keyPath) {\n        console.log(item, key, keyPath);\n    },\n    onInit(event) {\n    }\n});\n</code></pre>\n<h3>\u53EA\u5C55\u5F00\u5F53\u524D\u7236\u7EA7\u83DC\u5355</h3>\n<div :controller=\"doc-menu-single\" style=\"width: 300px;\">\n    <ms-menu :widget=\"{\n                        menu:@menu,\n                        openKeys:@openKeys,\n                        selectedKeys:@selectedKeys,\n                        onClick:@handleMenuClick,\n                        onOpenChange:@handleOpenChange\n    }\"></ms-menu>\n</div>\n<pre><code :skip=\"true\" class=\"language-html\">&lt;div :controller=&quot;doc-menu-single&quot; style=&quot;width: 300px;&quot;&gt;\n    &lt;ms-menu :widget=&quot;{\n                        menu:@menu,\n                        openKeys:@openKeys,\n                        selectedKeys:@selectedKeys,\n                        onClick:@handleMenuClick,\n                        onOpenChange:@handleOpenChange\n    }&quot;&gt;&lt;/ms-menu&gt;\n&lt;/div&gt;\n</code></pre>\n<pre><code :skip=\"true\" class=\"language-js\">import * as avalon from 'avalon2';\nimport 'ane';\n\navalon.define({\n    $id: 'doc-menu-single',\n    menu: [{\n        key: 'nav1',\n        title: '\u5BFC\u822A\u4E00',\n        icon: 'fa fa-home',\n        children: [{\n            key: 'option1',\n            title: '\u9009\u9879\u4E00'\n        }, {\n            key: 'option2',\n            title: '\u9009\u9879\u4E8C'\n        }, {\n            key: 'option3',\n            title: '\u9009\u9879\u4E09'\n        }]\n    }, {\n        key: 'nav2',\n        title: '\u5BFC\u822A\u4E8C',\n        icon: 'fa fa-book',\n        children: [{\n            key: 'option4',\n            title: '\u9009\u9879\u56DB'\n        }, {\n            key: 'option5',\n            title: '\u9009\u9879\u4E94'\n        }, {\n            key: 'submenu',\n            title: '\u5B50\u83DC\u5355',\n            children: [{\n                key: 'option6',\n                title: '\u9009\u9879\u516D'\n            }, {\n                key: 'option7',\n                title: '\u9009\u9879\u4E03'\n            }]\n        }]\n    }],\n    selectedKeys: ['option1'],\n    openKeys: ['nav1'],\n    handleMenuClick(item, key, keyPath) {\n        console.log(item, key, keyPath);\n        this.selectedKeys = [key];\n    },\n    handleOpenChange(openKeys) {\n        const state = this;\n        const latestOpenKey = openKeys.filter(key =&gt; !(state.openKeys.indexOf(key) &gt; -1))[0] || undefined;\n        const latestCloseKey = state.openKeys.filter(key =&gt; !(openKeys.indexOf(key) &gt; -1))[0] || undefined;\n\n        let nextOpenKeys = [];\n        if (latestOpenKey) {\n            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);\n        }\n        if (latestCloseKey) {\n            nextOpenKeys = this.getAncestorKeys(latestCloseKey);\n        }\n        state.openKeys = nextOpenKeys;\n    },\n    getAncestorKeys(key) {\n        const map = {\n            submenu: ['nav2'],\n        };\n        return map[key] || [];\n    },\n    onInit(event) {\n    }\n});\n</code></pre>\n<h3>\u7EC4\u4EF6\u53C2\u6570</h3>\n<table class=\"table table-bordered\">\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>menu</td>\n<td>\u83DC\u5355\u6570\u636E</td>\n<td>{key:string,title:string,icon:string,children:[]}[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>selectedKeys</td>\n<td>\u9009\u62E9\u7684\u83DC\u5355\u7684key\u7684\u96C6\u5408</td>\n<td>string[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>openKeys</td>\n<td>\u5C55\u5F00\u7684\u83DC\u5355\u7684key\u7684\u96C6\u5408</td>\n<td>string[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>onClick</td>\n<td>\u70B9\u51FB\u83DC\u5355\u9879\u7684\u56DE\u8C03</td>\n<td>function(item, key, keyPath)</td>\n<td>noop</td>\n</tr>\n<tr>\n<td>onOpenChange</td>\n<td>\u83DC\u5355\u5C55\u5F00/\u6536\u8D77\u7684\u56DE\u8C03</td>\n<td>function(openKeys:string[])</td>\n<td>noop</td>\n</tr>\n</tbody>\n</table>\n</div>" });
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
    handleMenuClick: function (item, key, keyPath) {
        console.log(item, key, keyPath);
    },
    onInit: function (event) {
    }
});
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
    handleMenuClick: function (item, key, keyPath) {
        console.log(item, key, keyPath);
        this.selectedKeys = [key];
    },
    handleOpenChange: function (openKeys) {
        var state = this;
        var latestOpenKey = openKeys.filter(function (key) { return !(state.openKeys.indexOf(key) > -1); })[0] || undefined;
        var latestCloseKey = state.openKeys.filter(function (key) { return !(openKeys.indexOf(key) > -1); })[0] || undefined;
        var nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        state.openKeys = nextOpenKeys;
    },
    getAncestorKeys: function (key) {
        var map = {
            submenu: ['nav2']
        };
        return map[key] || [];
    },
    onInit: function (event) {
    }
});


/***/ })

});