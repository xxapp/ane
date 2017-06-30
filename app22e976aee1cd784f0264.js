(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})(this, function() {
return webpackJsonpindex([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
exports["default"] = avalon.component('ms-control', {
    template: '&nbsp;',
    defaults: {
        $formItem: null,
        $rules: null,
        value: '',
        col: '',
        placeholder: '',
        width: 'x',
        onChange: avalon.noop,
        emitValue: function (e) {
            var v = e.target.value;
            this.$formItem && this.$formItem.onFormChange({
                name: this.col, value: v, denyValidate: e.denyValidate
            });
        },
        handleChange: function (e) {
            this.emitValue(e);
            this.onChange(e);
        }
    }
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var ane_util_1 = __webpack_require__(9);
function emitToFormItem(vmodel, options) {
    if (options === void 0) { options = {}; }
    vmodel.$formItem = ane_util_1.findParentComponent(vmodel, 'ms-form-item');
    if (vmodel.$formItem === null) {
        return;
    }
    vmodel.$formItem.onFieldChange(__assign({ name: vmodel.col, rules: vmodel.$rules, value: vmodel.value, denyValidate: true }, options));
}
exports.emitToFormItem = emitToFormItem;


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
function findParentComponent(vm, ctype) {
    var parent = vm.$element.parentElement;
    while (parent) {
        if (parent._vm_ && (!ctype || parent._ctype_ === ctype)) {
            return parent._vm_;
        }
        parent = parent.parentElement;
    }
    return null;
}
exports.findParentComponent = findParentComponent;
function parseSlotToVModel(vmodel, vnodes) {
    if (vnodes === undefined) {
        vnodes = vmodel.$render.root ? vmodel.$render.root.children : [];
    }
    vnodes.forEach(function (vnode) {
        if (!vnode || !vnode.nodeName || vnode.dom.nodeType !== 1)
            return true;
        var slotName = vnode.dom.getAttribute('slot');
        if (slotName) {
            delete vnode.props[':skip'];
            delete vnode.props['ms-skip'];
            vmodel[slotName] = avalon.vdom(vnode, 'toHTML');
        }
        else {
            parseSlotToVModel(vmodel, vnode.children);
        }
    });
}
exports.parseSlotToVModel = parseSlotToVModel;
function getChildTemplateDescriptor(vmodel, render) {
    if (render === void 0) { render = vmodel.$render; }
    if (render.directives === undefined) {
        return [];
    }
    return render.directives.reduce(function (acc, action) {
        if (action.is) {
            acc.push({
                is: action.is,
                props: action.value,
                inlineTemplate: action.fragment,
                children: getChildTemplateDescriptor(vmodel, action.innerRender || { directives: [] })
            });
        }
        return acc;
    }, []);
}
exports.getChildTemplateDescriptor = getChildTemplateDescriptor;
function debounce(func, wait, immediate) {
    if (wait === void 0) { wait = 300; }
    if (immediate === void 0) { immediate = false; }
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
exports.debounce = debounce;


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ane_util_1 = __webpack_require__(9);
if (avalon.msie <= 8) {
    var doc = document;
    var head = doc.getElementsByTagName('head')[0];
    var style = doc.createElement('style');
    var cssStr = "\n        .ane-checkbox-inner-ie input {\n            left: 0;\n            position: static !important;\n            margin-left: 0 !important;\n            margin-top: 6px !important;\n        }\n        .ane-checkbox-inner-ie span {\n            display: none !important;\n        }\n    ";
    style.setAttribute('type', 'text/css');
    if (style.styleSheet) {
        style.styleSheet.cssText = cssStr;
    }
    else {
        style.appendChild(doc.createTextNode(cssStr));
    }
    head.appendChild(style);
}
avalon.component('ms-checkbox', {
    soleSlot: 'label',
    template: __webpack_require__(247),
    defaults: {
        wrapper: 'checkbox',
        label: '',
        checked: false,
        indeterminate: false,
        group: false,
        disabled: false,
        onChange: avalon.noop,
        flush: avalon.noop,
        helpId: '',
        onInit: function (event) {
            this.helpId = this.$id;
            // // inline在IE8下显示有问题，待解决
            // if (this.inline != void 0) {
            //     this.wrapper = 'checkbox-inline';
            // }
        },
        onReady: function (event) {
            ane_util_1.parseSlotToVModel(this);
        },
        onDispose: function (vm, el) {
        }
    }
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(231);


/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ane_util_1 = __webpack_require__(9);
if (avalon.msie <= 8) {
    var doc = document;
    var head = doc.getElementsByTagName('head')[0];
    var style = doc.createElement('style');
    var cssStr = "\n        .ane-radio-inner-ie input {\n            left: 0;\n            position: static !important;\n            margin-left: 0 !important;\n            margin-top: 6px !important;\n        }\n        .ane-radio-inner-ie span {\n            display: none !important;\n        }\n    ";
    style.setAttribute('type', 'text/css');
    if (style.styleSheet) {
        style.styleSheet.cssText = cssStr;
    }
    else {
        style.appendChild(doc.createTextNode(cssStr));
    }
    head.appendChild(style);
}
avalon.component('ms-radio', {
    soleSlot: 'label',
    template: __webpack_require__(255),
    defaults: {
        wrapper: 'radio',
        label: '',
        checked: '',
        value: '',
        name: '',
        group: false,
        disabled: false,
        onChange: avalon.noop,
        helpId: '',
        onInit: function (event) {
            this.helpId = this.$id;
        },
        onReady: function (event) {
            ane_util_1.parseSlotToVModel(this);
        },
        onDispose: function (vm, el) {
        }
    }
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
/**
 * 分页组件
 * @prop {Number} [current=1] 当前页
 * @prop {Number} [pageSize=10] 每页的数据量
 * @prop {Number} total 数据总量
 * @event {Function} onChange 当页码改变时触发，参数current
 *
 * @example
 * ```
 * <ms-pagination :widget="{total:100,onChange:@handlePageChange}"></ms-pagination>
 *
 * <ms-pagination :widget="{current:@currentPage,pageSize:@pageSize,total:@total,onChange:@handlePageChange}"></ms-pagination>
 * ```
 */
avalon.component('ms-pagination', {
    template: __webpack_require__(253),
    defaults: {
        current: 1,
        pageSize: 10,
        total: 0,
        prevPage: function () {
            if (this.current > 1) {
                this.onChange(--this.current);
            }
        },
        nextPage: function () {
            if (this.current < Math.ceil(this.total / this.pageSize)) {
                this.onChange(++this.current);
            }
        },
        onChange: avalon.noop,
        onInit: function (event) {
        },
        onReady: function (event) {
        },
        onDispose: function (event) {
        }
    }
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(199);
__webpack_require__(224);
__webpack_require__(241);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(26);
__webpack_require__(46);
__webpack_require__(236);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_control_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(5);
__webpack_require__(26);
ms_control_1["default"].extend({
    displayName: 'ms-checkbox-group',
    template: __webpack_require__(246),
    defaults: {
        value: [],
        disabled: false,
        options: [],
        selection: [],
        toggleOption: function (option) {
            var optionIndex = this.selection.indexOf(option.value);
            if (optionIndex === -1) {
                this.selection.push(option.value);
            }
            else {
                this.selection.remove(option.value);
            }
            this.handleChange({
                target: { value: this.selection.toJSON() },
                type: 'checkbox-group'
            });
        },
        mapValueToSelection: function (value) {
            this.selection = this.options.filter(function (o) { return value.contains(o.value); }).map(function (o) { return o.value; });
        },
        onInit: function (event) {
            var _this = this;
            utils_1.emitToFormItem(this);
            this.$watch('value', function (v) {
                _this.mapValueToSelection(v);
                _this.handleChange({
                    target: { value: v.toJSON() },
                    denyValidate: true,
                    type: 'checkbox-group'
                });
            });
            this.mapValueToSelection(this.value);
        },
        onReady: function (event) {
            //vm.elHiddenInput = $(el).find('input:hidden');
        },
        onDispose: function (event) {
        }
    }
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_loading_directive_1 = __webpack_require__(219);
exports.Loading = ms_loading_directive_1.Loading;
__webpack_require__(203);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_control_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(5);
__webpack_require__(42);
ms_control_1["default"].extend({
    displayName: 'ms-radio-group',
    template: __webpack_require__(254),
    defaults: {
        value: '',
        disabled: false,
        options: [],
        selected: '',
        toggleOption: function (e, option) {
            this.selected = option.value;
            this.handleChange({
                target: { value: this.selected },
                type: 'radio-group'
            });
        },
        helpId: '',
        mapValueToSelected: function (value) {
            this.selected = value;
        },
        onInit: function (event) {
            var _this = this;
            this.helpId = this.$id;
            utils_1.emitToFormItem(this);
            this.$watch('value', function (v) {
                _this.mapValueToSelected(v);
                _this.handleChange({
                    target: { value: v },
                    denyValidate: true,
                    type: 'radio-group'
                });
            });
            this.mapValueToSelected(this.value);
        },
        onReady: function (event) {
        },
        onDispose: function (event) {
        }
    }
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var moment = __webpack_require__(0);
var OPTION_HEIGHT = 24;
avalon.component('ms-timepicker-view', {
    template: __webpack_require__(260),
    defaults: {
        value: '',
        currentHour: 0,
        currentMinute: 0,
        currentSecond: 0,
        hourOptions: avalon.range(24).map(function (n) { return ('0' + n).substr(-2); }),
        minuteOptions: avalon.range(60).map(function (n) { return ('0' + n).substr(-2); }),
        secondOptions: avalon.range(60).map(function (n) { return ('0' + n).substr(-2); }),
        onChange: avalon.noop,
        select: function (el, type) {
            this.$element.querySelector('.ane-timepicker-view-select[name=' + type + '-options]').scrollTop = el * 24;
            if (type === 'hour') {
                this.currentHour = el;
            }
            else if (type === 'minute') {
                this.currentMinute = el;
            }
            else {
                this.currentSecond = el;
            }
            this.onChange({
                target: {
                    hour: this.currentHour,
                    minute: this.currentMinute,
                    second: this.currentSecond
                },
                type: 'timepicker-view-changed'
            });
        },
        onInit: function () {
            var _this = this;
            this.$watch('value', function (v) {
                var m = moment(v.split(','));
                _this.currentHour = m.hour();
                _this.currentMinute = m.minute();
                _this.currentSecond = m.second();
                _this.$element.querySelector('.ane-timepicker-view-select[name=hour-options]').scrollTop = _this.currentHour * OPTION_HEIGHT;
                _this.$element.querySelector('.ane-timepicker-view-select[name=minute-options]').scrollTop = _this.currentMinute * OPTION_HEIGHT;
                _this.$element.querySelector('.ane-timepicker-view-select[name=second-options]').scrollTop = _this.currentSecond * OPTION_HEIGHT;
            });
            this.$fire('value', this.value);
        }
    }
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(238);
__webpack_require__(207);


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = [{
    key: 'components',
    title: '组件',
    children: [{
        key: 'component-demo-input-input',
        title: 'input 输入框',
        uri: '/input',
        location: 'ms-input/ms-input.md'
    }, {
        key: 'component-demo-textarea-textarea',
        title: 'textarea 多行输入框',
        uri: '/textarea',
        location: 'ms-textarea/ms-textarea.md'
    }, {
        key: 'component-demo-select-select',
        title: 'select 选择框',
        uri: '/select',
        location: 'ms-select/ms-select.md'
    }, {
        key: 'component-demo-radio-radio',
        title: 'radio 单选框',
        uri: '/radio',
        location: 'ms-radio/ms-radio.md'
    }, {
        key: 'component-demo-checkbox-checkbox',
        title: 'checkbox 多选框',
        uri: '/checkbox',
        location: 'ms-checkbox/ms-checkbox.md'
    }, {
        key: 'component-demo-datepicker-datepicker',
        title: 'datepicker 日期选择器',
        uri: '/datepicker',
        location: 'ms-datepicker/ms-datepicker.md'
    }, {
        key: 'component-demo-timepicker-timepicker',
        title: 'timepicker 时间选择器',
        uri: '/timepicker',
        location: 'ms-timepicker/ms-timepicker.md'
    }, {
        key: 'component-demo-upload-upload',
        title: 'upload 文件上传',
        uri: '/upload',
        location: 'ms-upload/ms-upload.md'
    }, {
        key: 'component-demo-form-control',
        title: 'form-control 表单控件',
        uri: '/form-control',
        location: 'ms-form/ms-control.md'
    }, {
        key: 'component-demo-form-form',
        title: 'form 表单',
        uri: '/form',
        location: 'ms-form/ms-form.md'
    }, {
        key: 'component-demo-menu-menu',
        title: 'menu 菜单',
        uri: '/menu',
        location: 'ms-menu/ms-menu.md'
    }, {
        key: 'component-demo-table-table',
        title: 'table 数据表格',
        uri: '/table',
        location: 'ms-table/ms-table.md'
    }, {
        key: 'component-demo-pagination-pagination',
        title: 'pagination 分页',
        uri: '/pagination',
        location: 'ms-pagination/ms-pagination.md'
    }, {
        key: 'component-demo-tree-tree',
        title: 'tree 树',
        uri: '/tree',
        location: 'ms-tree/ms-tree.md'
    }, {
        key: 'component-demo-dialog-dialog',
        title: 'dialog 对话框',
        uri: '/dialog',
        location: 'ms-dialog/ms-dialog.md'
    }, {
        key: 'component-demo-loading-loading',
        title: 'loading 加载中蒙版',
        uri: '/loading',
        location: 'ms-loading/ms-loading.md'
    }, {
        key: 'component-demo-message-message',
        title: 'message 全局提示',
        uri: '/message',
        location: 'ms-message/ms-message.md'
    }, {
        key: 'component-demo-notification-notification',
        title: 'notification 通知提醒框',
        uri: '/notification',
        location: 'ms-notification/ms-notification.md'
    }]
}];

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.menu = {
    selectedKeys$: Observable(),
    openKeys$: Observable()
};
function Observable() {
    return {
        onNextCbList: [],
        subscribe: function (onNext) {
            this.onNextCbList.push(onNext);
        },
        onNext: function (value) {
            this.onNextCbList.forEach(function (cb) {
                if (typeof cb === 'function') {
                    cb(value);
                }
            });
        }
    };
}


/***/ }),
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var navConfig = __webpack_require__(51);
__webpack_require__(193);
var stores_1 = __webpack_require__(183);
exports.name = 'doc-sidebar';
avalon.component(exports.name, {
    template: __webpack_require__(342),
    defaults: {
        menu: [],
        selectedKeys: [],
        openKeys: ['components'],
        handleMenuClick: function (item, key, keyPath) {
            avalon.history.setHash(item.uri);
        },
        handleOpenChange: function (openKeys) {
            this.openKeys = openKeys.slice(-1);
        },
        onInit: function (event) {
            var _this = this;
            this.menu = navConfig;
            stores_1.menu.selectedKeys$.subscribe(function (v) {
                _this.selectedKeys = v;
            });
        }
    }
});


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(340);
var stores_1 = __webpack_require__(183);
var navConfig = __webpack_require__(51);
function getPage(component) {
    var html = "<xmp is=\"" + component + "\" :widget=\"{id:'" + component.replace(/\-/g, '_') + "'}\"></xmp>";
    return html;
}
function applyRouteConfig(config, parentRoute, accPath) {
    if (accPath === void 0) { accPath = ''; }
    config.map(function (route) {
        var components = {};
        if (route.component) {
            components.currentPage = route.component;
        }
        if (route.components) {
            components = route.components;
        }
        avalon.router.add(accPath + route.path, function () {
            Object.keys(components).map(function (viewName) {
                var component = components[viewName];
                if (typeof component === 'function') {
                    component(function (m) {
                        stores_1.menu.selectedKeys$.onNext([m.name]);
                        avalon.vmodels[parentRoute.name][viewName] = getPage(m.name);
                    });
                }
                else {
                    avalon.vmodels[parentRoute.name][viewName] = getPage(component.name);
                }
            });
        });
        // TODO 支持嵌套路由
        //route.children && applyRouteConfig(route.children, route, accPath + route.path);
    });
}
var routeConfig = [];
var travel = function (item) {
    if (!item.children || item.children.length === 0) {
        routeConfig.push({
            path: item.uri,
            component: function (resolve) {
                __webpack_require__.e/* require.ensure */(0).then((function () {
                    resolve(__webpack_require__(346)("./" + item.location));
                }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
            }
        });
    }
    else {
        item.children.map(travel);
    }
};
navConfig.map(travel);
applyRouteConfig(routeConfig, {
    name: 'root'
});


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(220);
__webpack_require__(210);
__webpack_require__(43);
__webpack_require__(216);
__webpack_require__(196);
var create_form_1 = __webpack_require__(195);
exports.createForm = create_form_1.createForm;
__webpack_require__(218);
__webpack_require__(227);
__webpack_require__(44);
__webpack_require__(232);
__webpack_require__(214);
__webpack_require__(228);
__webpack_require__(45);
__webpack_require__(46);
__webpack_require__(223);
__webpack_require__(48);
__webpack_require__(230);
var ms_loading_1 = __webpack_require__(47);
exports.Loading = ms_loading_1.Loading;
var ms_notification_1 = __webpack_require__(222);
exports.notification = ms_notification_1["default"];
var ms_message_1 = __webpack_require__(221);
exports.message = ms_message_1["default"];


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ms_control_1 = __webpack_require__(4);
__webpack_require__(27);
__webpack_require__(212);
__webpack_require__(49);
var ms_datepicker_panel_1 = __webpack_require__(215);
var utils_1 = __webpack_require__(5);
/**
 * 日期选择组件
 * @prop value 组件值(inherit)
 * @prop col 字段路径(inherit)
 * @prop format 日期格式，参考 momentjs，默认为 YYYY-MM-DD
 * @prop startDate 控制可已选择的时间的开始日期，日期字符串，格式与 format 参数匹配，设置此项自动忽略 disabledDate
 * @prop endDate 控制可已选择的时间的结束日期，日期字符串，格式与 format 参数匹配，设置此项自动忽略 disabledDate
 * @prop disabledDate 不可选择日期的判断函数，传入 current（当前遍历日期），返回 true 表示此日期不可选
 * @prop showTime 是否显示时间选择，如果此项为 true，则 format 默认为 YYYY-MM-DD HH:mm:ss
 *
 * @example
 * ``` html
 *
 * ```
 */
ms_control_1["default"].extend({
    displayName: 'ms-datepicker',
    template: __webpack_require__(249),
    defaults: {
        selected: '',
        format: 'YYYY-MM-DD',
        startDate: '',
        endDate: '',
        disabledDate: function () { return false; },
        showTime: false,
        clear: function () {
            this.selected = '';
            avalon.vmodels[this.panelVmId].reset();
            this.handleChange({
                target: { value: '' },
                type: 'datepicker-changed'
            });
        },
        withInBox: function (el) {
            return this.$element === el || avalon.contains(this.$element, el);
        },
        getTarget: function () {
            return this.$element;
        },
        handleClick: function (e) {
            if (!this.panelVisible) {
                avalon.vmodels[this.panelVmId].reset();
                this.panelVisible = true;
            }
            else {
                this.panelVisible = false;
            }
        },
        panelVmId: '',
        panelVisible: false,
        panelClass: 'ane-datepicker-panel-container',
        panelTemplate: __webpack_require__(248),
        handlePanelHide: function () {
            this.panelVisible = false;
        },
        mapValueToSelected: function (value) {
            this.selected = value;
        },
        onInit: function (event) {
            var _this = this;
            var self = this;
            utils_1.emitToFormItem(this, {
                showIcon: false
            });
            this.$watch('value', function (v) {
                _this.mapValueToSelected(v);
                _this.handleChange({
                    target: { value: v },
                    denyValidate: true,
                    type: 'datepicker-changed'
                });
            });
            if (this.showTime && this.format === 'YYYY-MM-DD') {
                // 允许选择时间的模式下，用户如果没自定义格式，则自动转为日期时间格式
                this.format = 'YYYY-MM-DD HH:mm:ss';
            }
            this.panelVmId = this.$id + '_panel';
            var innerVm = ms_datepicker_panel_1["default"](this);
            this.mapValueToSelected(this.value);
            innerVm.reset();
        },
        onDispose: function () {
            delete avalon.vmodels[this.panelVmId];
        }
    }
});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var avalon = __webpack_require__(1);
var Schema = __webpack_require__(267);
function createForm(options) {
    return new Form(options);
}
exports.createForm = createForm;
var defaultOptions = {
    record: {},
    autoAsyncChange: true,
    onFieldsChange: avalon.noop
};
function Form(options) {
    this.cachedRecord = {};
    this.fields = {};
    this.all = {};
    avalon.mix(this, avalon.mix(true, {}, defaultOptions), options);
}
Form.prototype.setFieldsValue = function (fields) {
    var _this = this;
    if (!this.autoAsyncChange) {
        Object.keys(fields).forEach(function (name) {
            setValue(_this.cachedRecord, name, fields[name].value);
        });
        return;
    }
    Object.keys(fields).forEach(function (name) {
        var field = fields[name];
        setValue(_this.record, name, field.value);
        if (!field.denyValidate && _this.fields[name]) {
            _this.validateField(name, _this.fields[name]).then(function (result) {
                if (result.isOk) {
                    _this.trigger('error' + result.name, []);
                }
                else {
                    _this.trigger('error' + result.name, [{
                            message: result.message
                        }]);
                }
            });
        }
    });
    this.onFieldsChange(fields, this.record);
};
Form.prototype.addFields = function (fields) {
    var _this = this;
    Object.keys(fields).forEach(function (name) {
        _this.fields[name] = fields[name];
    });
};
Form.prototype.on = function (type, listener) {
    (this.all[type] || (this.all[type] = [])).push(listener);
};
Form.prototype.trigger = function (type, payload) {
    (this.all[type] || []).map(function (handler) { handler(payload); });
};
Form.prototype.validateField = function (fieldName, field) {
    return __awaiter(this, void 0, void 0, function () {
        var rules, value, result, validator, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    rules = field.rules;
                    value = getValue(this.record, fieldName);
                    result = { isOk: true, name: fieldName };
                    if (!rules)
                        return [2 /*return*/, result];
                    validator = new Schema((_a = {},
                        _a[fieldName] = rules,
                        _a));
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            validator.validate((_a = {}, _a[fieldName] = value, _a), function (errors, fields) {
                                if (errors) {
                                    resolve({
                                        isOk: false, name: fieldName, message: errors[0].message
                                    });
                                }
                                else {
                                    resolve({
                                        isOk: true, name: fieldName
                                    });
                                }
                            });
                            var _a;
                        })];
                case 1:
                    result = _b.sent();
                    return [2 /*return*/, result];
            }
        });
    });
};
Form.prototype.validateFields = function (fields) {
    var _this = this;
    if (fields === void 0) { fields = this.fields; }
    var flatRecord = {}, ruleMap = {};
    if (!this.autoAsyncChange) {
        this.record = avalon.mix(true, {}, this.record, this.cachedRecord);
    }
    Object.keys(fields).map(function (name) {
        ruleMap[name] = fields[name].rules;
        flatRecord[name] = getValue(_this.record, name);
    });
    var validator = new Schema(ruleMap);
    return new Promise(function (resolve, reject) {
        validator.validate(flatRecord, function (errors, fields) {
            var errorFields = Object.keys(fields || {});
            var isAllValid = true;
            Object.keys(_this.fields).map(function (name) {
                if (~errorFields.indexOf(name)) {
                    isAllValid = false;
                    _this.trigger('error' + name, fields[name]);
                }
                else {
                    _this.trigger('error' + name, []);
                }
            });
            resolve(isAllValid);
        });
    });
};
Form.prototype.resetFields = function (fields) {
    if (fields === void 0) { fields = this.fields; }
    this.record = {};
    this.trigger('reset', fields);
};
/**
 * 根据表达式构给对象赋值，属性路径中最多只允许存在一个数组
 * @param {*} record 数据对象
 * @param {String} expr 对象属性路径表达式
 * @param {*} val 值
 */
function setValue(record, expr, val) {
    var rSplit = /\.|\].|\[|\]/;
    var temp = record, prop;
    expr = expr.split(rSplit).filter(function (prop) { return !!prop; });
    var valType = Object.prototype.toString.call(val);
    var mirrorVal;
    if (valType == '[object Array]') {
        mirrorVal = avalon.mix(true, {}, { t: val }).t;
    }
    else if (valType == '[object Object]') {
        mirrorVal = avalon.mix(true, {}, val);
    }
    else {
        mirrorVal = val;
    }
    while (prop = expr.shift()) {
        if (expr.length === 0) {
            temp[prop] = mirrorVal;
        }
        else {
            temp = temp[prop] = temp[prop] || {};
        }
    }
}
/**
 * 根据表达式构从对象取值，属性路径中最多只允许存在一个数组
 * @param {*} record 数据对象
 * @param {String} expr 对象属性路径表达式
 */
function getValue(record, expr) {
    var rSplit = /\.|\].|\[|\]/;
    var temp = record, prop;
    expr = expr.split(rSplit).filter(function (prop) { return !!prop; });
    while ((prop = expr.shift()) && temp) {
        temp = temp[prop];
    }
    return temp;
}


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(206);
__webpack_require__(217);


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_control_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(5);
ms_control_1["default"].extend({
    displayName: 'ms-input',
    template: __webpack_require__(251),
    defaults: {
        text: '',
        mapValueToText: function (value) {
            this.text = value;
        },
        onInit: function (event) {
            var _this = this;
            utils_1.emitToFormItem(this);
            this.$watch('value', function (v) {
                _this.mapValueToText(v);
                _this.handleChange({
                    target: { value: v },
                    denyValidate: true,
                    type: 'changed'
                });
            });
            this.mapValueToText(this.value);
        }
    }
});


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
avalon.component('ms-menu', {
    template: __webpack_require__(252),
    defaults: {
        menu: [],
        selectedKeys: [],
        openKeys: [],
        onClick: avalon.noop,
        onOpenChange: avalon.noop,
        handleClick: function (item, key, keyPath) {
            if (!item.children || item.children.length === 0) {
                // 叶子节点
                //this.selectedKeys.ensure(item.key);
                this.selectedKeys = [item.key];
                this.onClick(item, key, keyPath);
            }
            else {
                // 非叶子节点
                if (this.openKeys.contains(item.key)) {
                    this.openKeys.remove(item.key);
                }
                else {
                    this.openKeys.push(item.key);
                }
                this.onOpenChange(this.openKeys.toJSON());
            }
        }
    }
});


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ms_control_1 = __webpack_require__(4);
__webpack_require__(27);
var ms_select_panel_1 = __webpack_require__(225);
var ane_util_1 = __webpack_require__(9);
var utils_1 = __webpack_require__(5);
ms_control_1["default"].extend({
    displayName: 'ms-select',
    template: __webpack_require__(257),
    defaults: {
        value: [],
        mode: '',
        options: [],
        selection: [],
        remote: false,
        remoteMethod: avalon.noop,
        // 下拉框展示和操作部分
        displayValue: '',
        showSearch: false,
        searchValue: '',
        focusSearch: function () {
            this.$element.getElementsByTagName('input').search.focus();
        },
        withInBox: function (el) {
            return this.$element === el || avalon.contains(this.$element, el);
        },
        getTarget: function () {
            return this.$element;
        },
        handleClick: function (e) {
            if (!this.panelVisible) {
                this.searchValue = '';
                this.panelWidth = this.$element.offsetWidth;
                this.panelVisible = true;
                this.focusSearch();
            }
            else if (!this.isMultiple) {
                this.panelVisible = false;
            }
        },
        handleDelete: function (e) {
            if ((e.which === 8 || e.which === 46) && this.searchValue === '') {
                this.selection.removeAt(this.selection.length - 1);
                var selection = this.selection.toJSON();
                var value = selection.map(function (s) { return s.value; });
                avalon.vmodels[this.panelVmId].selection = selection;
                this.handleChange({
                    target: { value: this.isMultiple ? value : value[0] || '' },
                    type: 'select'
                });
            }
        },
        removeSelection: function (e, option) {
            this.selection.removeAll(function (o) { return o.value === option.value; });
            var selection = this.selection.toJSON();
            var value = selection.map(function (s) { return s.value; });
            avalon.vmodels[this.panelVmId].selection = selection;
            this.focusSearch();
            this.handleChange({
                target: { value: this.isMultiple ? value : value[0] || '' },
                type: 'select'
            });
        },
        // 下拉框下拉列表部分
        panelWidth: 0,
        panelVmId: '',
        panelVisible: false,
        panelClass: 'ane-select-dropdown',
        panelTemplate: __webpack_require__(256),
        handlePanelHide: function () {
            this.panelVisible = false;
        },
        $computed: {
            isMultiple: {
                get: function () {
                    return this.mode === 'multiple' || this.mode === 'tags';
                }
            }
        },
        // 生命周期
        mapValueToSelection: function (value) {
            this.selection = this.options.filter(function (o) { return value.contains(o.value); });
            if (this.selection.length > 0) {
                this.displayValue = this.selection[0].label;
            }
            avalon.vmodels[this.panelVmId].selection = this.selection.toJSON();
        },
        onInit: function (event) {
            var _this = this;
            var self = this;
            if (this.options.length === 0) {
                var descriptor = ane_util_1.getChildTemplateDescriptor(this);
                this.options = getOptions(descriptor);
            }
            utils_1.emitToFormItem(this);
            this.$watch('value', function (v) {
                var value = v.toJSON();
                _this.mapValueToSelection(v);
                _this.handleChange({
                    target: { value: _this.isMultiple ? value : value[0] || '' },
                    denyValidate: true,
                    type: 'select'
                });
            });
            this.panelVmId = this.$id + '_panel';
            var innerVm = ms_select_panel_1["default"](this);
            this.$watch('searchValue', ane_util_1.debounce(function (v) {
                innerVm.searchValue = v;
                if (_this.remote && !!v) {
                    innerVm.loading = true;
                    _this.remoteMethod(v).then(function (options) {
                        innerVm.loading = false;
                        innerVm.options = options;
                    });
                }
            }));
            this.$watch('isMultiple', function (v) {
                innerVm.isMultiple = v;
            });
            this.mapValueToSelection(this.value);
        },
        onDispose: function () {
            delete avalon.vmodels[this.panelVmId];
        }
    }
});
function getOptions(descriptor) {
    return descriptor.reduce(function (acc, option) {
        if (option.is != 'ms-select-option')
            return acc;
        var label = option.inlineTemplate;
        acc.push({
            label: option.inlineTemplate || '',
            value: option.props.value || '',
            disabled: option.props.disabled || false
        });
        return acc;
    }, []);
}


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ms_control_1 = __webpack_require__(4);
__webpack_require__(27);
__webpack_require__(49);
var ms_timepicker_panel_1 = __webpack_require__(229);
var utils_1 = __webpack_require__(5);
/**
 * 时间选择组件
 * @prop value 组件值(inherit)
 * @prop col 字段路径(inherit)
 * @prop format 日期格式，参考 momentjs，默认为 HH:mm:ss
 *
 * @example
 * ``` html
 *
 * ```
 */
ms_control_1["default"].extend({
    displayName: 'ms-timepicker',
    template: __webpack_require__(261),
    defaults: {
        selected: '',
        format: 'HH:mm:ss',
        clear: function () {
            this.selected = '';
            avalon.vmodels[this.panelVmId].reset();
            this.handleChange({
                target: { value: '' },
                type: 'timepicker-changed'
            });
        },
        withInBox: function (el) {
            return this.$element === el || avalon.contains(this.$element, el);
        },
        getTarget: function () {
            return this.$element;
        },
        handleClick: function (e) {
            if (!this.panelVisible) {
                avalon.vmodels[this.panelVmId].reset();
                this.panelVisible = true;
            }
            else {
                this.panelVisible = false;
            }
        },
        panelVmId: '',
        panelVisible: false,
        panelClass: 'ane-timepicker-panel-container',
        panelTemplate: "<div class=\"ane-timepicker-panel\" style=\"overflow: auto\">\n                            <xmp is=\"ms-timepicker-view\" :widget=\"{value:@currentDateArray,onChange:@handleTimepickerChange}\"></xmp>\n                        </div>",
        handlePanelHide: function () {
            this.panelVisible = false;
        },
        mapValueToSelected: function (value) {
            this.selected = value;
        },
        onInit: function (event) {
            var _this = this;
            var self = this;
            utils_1.emitToFormItem(this, {
                showIcon: false
            });
            this.$watch('value', function (v) {
                _this.mapValueToSelected(v);
                _this.handleChange({
                    target: { value: v },
                    denyValidate: true,
                    type: 'timepicker-changed'
                });
            });
            this.panelVmId = this.$id + '_panel';
            var innerVm = ms_timepicker_panel_1["default"](this);
            this.mapValueToSelected(this.value);
            innerVm.reset();
        },
        onDispose: function () {
            delete avalon.vmodels[this.panelVmId];
        }
    }
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(45);
var treeID = 0;
avalon.component('ms-tree', {
    template: __webpack_require__(262),
    defaults: {
        tree: [],
        expandedKeys: [],
        checkedKeys: [],
        renderSubTree: function (el) {
            return el.children.length ?
                '<wbr :widget="{is:\'ms-tree\',$id:\'tree_' + (++treeID) + '\',tree:el.children,checkedKeys:@checkedKeys,handleCheck:@handleCheck}"/>' :
                '';
        },
        openSubTree: function (el) {
            if (this.isExpended(el)) {
                this.expandedKeys.remove(el.key);
            }
            else {
                this.expandedKeys.push(el.key);
            }
        },
        changeIcon: function (el) {
            if (!el.children.length) {
                return '';
            }
            return this.isExpended(el) ? 'fa-caret-down' : 'fa-caret-right';
        },
        isExpended: function (el) {
            return this.expandedKeys.contains(el.key);
        },
        isChecked: function (el) {
            return this.checkedKeys.contains(el.key);
        },
        onCheck: avalon.noop,
        onCheckInner: avalon.noop,
        handleCheck: function (el) {
            if (this.isChecked(el)) {
                this.checkedKeys.remove(el.key);
            }
            else {
                this.checkedKeys.push(el.key);
            }
            this.onCheck(this.checkedKeys.toJSON());
        }
    }
});


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../../typings/index.d.ts" />
exports.__esModule = true;
var ms_control_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(5);
__webpack_require__(234);
__webpack_require__(233);
var up_loader_1 = __webpack_require__(343);
/**
 * 文件上传组件
 * @prop value 组件值(inherit)
 * @prop col 字段路径(inherit)
 *
 * @example
 * ``` html
 * <ms-upload :widget="{value:@record.attachment,col:'attachment',$rules:{required:true,type:'array'}}">
 *      <i class="fa fa-upload"></i>选择附件
 * </ms-upload>
 * ```
 */
ms_control_1["default"].extend({
    displayName: 'ms-upload',
    template: __webpack_require__(265),
    soleSlot: 'trigger',
    defaults: {
        helpId: '',
        trigger: '',
        value: [],
        fileList: [],
        action: '',
        listType: 'text-list',
        showUploadList: true,
        btnClass: 'btn btn-default',
        cardClass: 'ane-upload-select-card ane-upload-card-item',
        blankImg: 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
        $uploader: null,
        beforeUpload: function () {
            return true;
        },
        handleRemove: function (file) {
            this.fileList.removeAll(function (f) { return f.uid === file.uid; });
            var value = this.fileList.filter(function (f) { return f.status === 'done'; }).map(function (f) { return f.url; });
            this.handleChange({
                target: { value: this.showUploadList ? value : value[0] },
                type: 'file-upload'
            });
        },
        mapValueToFileList: function (value) {
            var _this = this;
            value.map(function (url, i) {
                if (url === '') {
                    return;
                }
                _this.fileList.push({
                    uid: -(i + 1),
                    name: url.replace(/.*\/([^\/]+)\/?/, '$1'),
                    url: url,
                    status: 'done',
                    progress: 0
                });
            });
        },
        onInit: function (event) {
            var _this = this;
            utils_1.emitToFormItem(this);
            this.helpId = this.$id;
            this.mapValueToFileList(this.value);
            this.$watch('value', function (v) {
                var value = v.toJSON();
                _this.fileList.clear();
                _this.mapValueToFileList(value);
                _this.handleChange({
                    target: { value: _this.showUploadList ? value : value[0] },
                    denyValidate: true,
                    type: 'file-upload'
                });
            });
        },
        onReady: function (event) {
            var _this = this;
            this.$uploader = up_loader_1["default"].init({
                url: this.action,
                fileInput: event.target.getElementsByTagName('input').file,
                filter: function (files) {
                    // 如果不支持图片信息的预览，则不进行过滤和限制
                    return files.filter(function (file) { return !file.size || _this.beforeUpload(file); });
                },
                onSelect: function (files, allFiles) {
                    allFiles.map(function (file) {
                        if (!_this.showUploadList) {
                            _this.fileList.set(0, {
                                uid: file.index,
                                name: file.name,
                                status: 'uploading',
                                progress: 0,
                                url: _this.blankImg
                            });
                            return;
                        }
                        if (_this.fileList.every(function (f) { return f.uid !== file.index; })) {
                            _this.fileList.push({
                                uid: file.index,
                                name: file.name,
                                status: 'uploading',
                                progress: 0,
                                url: _this.blankImg
                            });
                        }
                        else {
                            updateFileObj(_this.fileList, file.index, function (f) {
                                f.status = 'uploading';
                                f.progress = 0;
                            });
                        }
                    });
                    _this.$uploader.upload();
                },
                onProgress: function (file, loaded, total) {
                    updateFileObj(_this.fileList, file.index, function (f) { return f.progress = (loaded / total * 100).toFixed(); });
                },
                onSuccess: function (file, response) {
                    updateFileObj(_this.fileList, file.index, function (f) {
                        f.status = 'done';
                        f.progress = 100;
                        f.url = response.url;
                    });
                },
                onFailure: function (file, err) {
                    updateFileObj(_this.fileList, file.index, function (f) {
                        f.status = 'error';
                        f.url = 'data:image/gif;base64,MA==';
                    });
                    throw err;
                },
                onComplete: function () {
                    var value = _this.fileList.filter(function (f) { return f.status === 'done'; }).map(function (f) { return f.url; });
                    _this.handleChange({
                        target: { value: _this.showUploadList ? value : value[0] },
                        type: 'file-upload'
                    });
                }
            });
        },
        onDispose: function (event) {
        }
    }
});
function updateFileObj(fileList, uid, callback) {
    fileList.forEach(function (f) {
        if (f.uid === uid) {
            callback(f);
            return false;
        }
    });
}


/***/ }),
/* 203 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var moment = __webpack_require__(0);
__webpack_require__(44);
__webpack_require__(213);
avalon.component('ms-calendar', {
    template: __webpack_require__(245),
    defaults: {
        value: '',
        $value: null,
        $selected: null,
        weekStart: 0,
        showHeader: true,
        disabledDate: function () { return false; },
        currentMonth: '',
        currentYear: 0,
        weekdays: [],
        currentYearOptions: [],
        monthOptions: [],
        table: [],
        handleYearChange: function (e) {
            this.$value.year(e.target.value);
            this.calcTable(this.$value.clone());
        },
        handleMonthChange: function (e) {
            this.$value.month(e.target.value);
            this.calcTable(this.$value.clone());
        },
        handleDateClick: function (el) {
            if (el.disabled) {
                return false;
            }
            this.$selected.year(this.currentYear).month(this.currentMonth).date(el.date);
            if (el.prevMonth) {
                this.$selected.subtract(1, 'months');
            }
            if (el.nextMonth) {
                this.$selected.add(1, 'months');
            }
            this.$value = this.$selected;
            this.onChange({
                target: {
                    value: this.$selected.clone()
                },
                type: 'calendar-changed'
            });
            // 是否有必要再计算更新一次？
            this.calcTable(this.$value.clone());
        },
        onChange: avalon.noop,
        calcTable: function (m) {
            var i, j;
            // 这个月的第一天
            var firstDayOfMonth = m.clone().startOf('month');
            // 这个月的最后一天
            var lastDayOfMonth = m.clone().endOf('month');
            // 上个月的最后一天
            var lastDayOfPrevMonth = firstDayOfMonth.clone().subtract(1, 'days');
            var firstDay = (firstDayOfMonth.day() - this.weekStart + 7) % 7;
            var prevLastDate = lastDayOfPrevMonth.date();
            var lastDate = lastDayOfMonth.date();
            var table = [];
            var passed = 0;
            for (i = 0; i < 6; i++) {
                var tableRow = [];
                for (j = 0; j < 7; j++) {
                    var className = [];
                    var disabled = false;
                    var prevMonth = false;
                    var nextMonth = false;
                    if (i === 0 && j < firstDay) {
                        // 上月结束部分
                        className.push('ane-calendar-prev-month-cell');
                        prevMonth = true;
                        if (this.disabledDate(+m.clone().subtract(1, 'months').date(prevLastDate - firstDay + j + 1))) {
                            disabled = true;
                            className.push('ane-calendar-disabled-cell');
                        }
                        tableRow.push({
                            className: className,
                            disabled: disabled,
                            prevMonth: prevMonth,
                            nextMonth: nextMonth,
                            date: prevLastDate - firstDay + j + 1
                        });
                    }
                    else if (passed + 1 > lastDate) {
                        // 下月开始部分
                        className.push('ane-calendar-next-month-cell');
                        nextMonth = true;
                        if (this.disabledDate(+m.clone().add(1, 'months').date(passed + 1 - lastDate))) {
                            disabled = true;
                            className.push('ane-calendar-disabled-cell');
                        }
                        tableRow.push({
                            className: className,
                            disabled: disabled,
                            prevMonth: prevMonth,
                            nextMonth: nextMonth,
                            date: ++passed - lastDate
                        });
                    }
                    else {
                        // 本月部分
                        if (moment().isSame(m.clone().date(passed + 1), 'day')) {
                            className.push('ane-calendar-today');
                        }
                        if (this.$selected.isSame(m.clone().date(passed + 1), 'day')) {
                            className.push('ane-calendar-selected-day');
                        }
                        if (this.disabledDate(+m.clone().date(passed + 1))) {
                            disabled = true;
                            className.push('ane-calendar-disabled-cell');
                        }
                        tableRow.push({
                            className: className,
                            disabled: disabled,
                            prevMonth: prevMonth,
                            nextMonth: nextMonth,
                            date: ++passed
                        });
                    }
                }
                table.push(tableRow);
            }
            this.table = table;
            this.currentMonth = m.format('MMM');
            this.currentYear = m.year();
            this.currentYearOptions = avalon.range(this.currentYear - 10, this.currentYear + 9).map(function (y) { return ({ label: y, value: y }); });
        },
        onInit: function (event) {
            var _this = this;
            this.$value = moment();
            this.$selected = moment();
            var weekdays = moment.localeData().weekdaysMin();
            avalon.range(this.weekStart).forEach(function (n) {
                weekdays.push(weekdays.shift());
            });
            this.weekdays = weekdays;
            var monthList = moment.localeData().monthsShort();
            this.monthOptions = monthList.map(function (m) { return ({ label: m, value: m }); });
            this.calcTable(this.$value.clone());
            this.value = this.$value.toArray().toString();
            this.$watch('value', function (v) {
                _this.$value = _this.$selected = moment(v.split(','));
                _this.calcTable(_this.$value.clone());
            });
        }
    }
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var bootbox = __webpack_require__(41);
var ane_util_1 = __webpack_require__(9);
var $ = __webpack_require__(14);
avalon.component('ms-dialog', {
    template: '<div style="display: none"><slot name="header" /><slot name="body"/></div>',
    defaults: {
        body: 'blank',
        $dialog: null,
        show: false,
        size: '',
        uploading: false,
        $innerVm: '',
        onOk: function () { },
        onCancel: function () { },
        onInit: function (event) {
            var _this = this;
            var vm = event.vmodel;
            vm.$watch('show', function (newV) {
                if (newV) {
                    vm.$dialog = bootbox.dialog({
                        message: vm.body,
                        title: '{{title}}',
                        size: vm.size,
                        buttons: {
                            save: {
                                label: '保存',
                                className: 'btn-primary',
                                callback: function () {
                                    vm.onOk();
                                    return false;
                                }
                            },
                            cancel: {
                                label: '取消',
                                className: 'btn-default',
                                callback: function () {
                                    vm.onCancel();
                                }
                            }
                        }
                    }).on('hidden.bs.modal', function (e) {
                        setTimeout(function () {
                            if ($('.modal.in').length) {
                                $('body').addClass('modal-open');
                            }
                            else {
                                $('body').removeClass('modal-open');
                            }
                        }, 100);
                    })
                        .on('shown.bs.modal', function () {
                    });
                    vm.$dialog.find('.modal-content').attr(':controller', _this.$innerVm);
                    avalon.scan(vm.$dialog.get(0));
                }
                else {
                    if (vm.$dialog) {
                        vm.$dialog.find('.bootbox-close-button').trigger('click');
                    }
                }
            });
        },
        onReady: function (event) {
            ane_util_1.parseSlotToVModel(this);
            this.show && this.$fire('show', true);
        },
        onDispose: function (event) {
        }
    }
});


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
avalon.component('ms-form', {
    template: "<form role=\"form\" :class=\"[(@horizontal ? 'form-horizontal' : ''), (@inline ? 'form-inline' : '')]\"><slot /></form>",
    defaults: {
        items: '',
        $form: null,
        type: '',
        horizontal: false,
        inline: false,
        onFormChange: function (meta) {
            if (this.$form) {
                this.$form.setFieldsValue((_a = {},
                    _a[meta.name] = { value: meta.value },
                    _a));
            }
            var _a;
        },
        onInit: function (event) {
            event.target._ctype_ = 'ms-form';
            event.target._vm_ = this;
        },
        onReady: function (event) {
        }
    },
    soleSlot: 'items'
});


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var layoutComponent = avalon.component('ms-layout', {
    template: "<div class=\"ane-layout\" :css=\"@style\" :class=\"@className\"><slot /></div>",
    soleSlot: 'slot',
    defaults: {
        style: {},
        className: ''
    }
});
layoutComponent.extend({
    displayName: 'ms-layout-sider',
    template: "<div class=\"ane-layout-sider\" :css=\"@style\" :class=\"@className\" :class-1=\"[@fixed?'ane-layout-fixed-sider':'']\"><div class=\"ane-layout-sider-inner\"><slot /></div></div>",
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '300px'
    }
});
layoutComponent.extend({
    displayName: 'ms-layout-header',
    template: "<div class=\"ane-layout-header\" :css=\"@style\" :class=\"@className\" :class-1=\"[@fixed?'ane-layout-fixed-header':'']\"><slot /></div>",
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '60px'
    }
});
layoutComponent.extend({
    displayName: 'ms-layout-content',
    template: "<div class=\"ane-layout-content\" :css=\"@style\" :class=\"@className\"><slot /></div>",
    soleSlot: 'slot',
    defaults: {
        fixed: false
    }
});
layoutComponent.extend({
    displayName: 'ms-layout-footer',
    template: "<div class=\"ane-layout-footer\" :css=\"@style\" :class=\"@className\" :class-1=\"[@fixed?'ane-layout-fixed-footer':'']\"><slot /></div>",
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '60px'
    }
});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var noty = __webpack_require__(181);
var defaultOptions = {
    duration: 1500
};
exports["default"] = {
    info: function (_a) {
        var content = _a.content, duration = _a.duration;
        noty({
            text: '<i class="fa fa-info-circle"></i>' + content,
            type: 'information',
            layout: 'topCenter',
            timeout: duration || defaultOptions.duration
        });
    },
    success: function (_a) {
        var content = _a.content, duration = _a.duration;
        noty({
            text: '<i class="fa fa-check-circle"></i>' + content,
            type: 'success',
            layout: 'topCenter',
            timeout: duration || defaultOptions.duration
        });
    },
    error: function (_a) {
        var content = _a.content, duration = _a.duration;
        noty({
            text: '<i class="fa fa-times-circle"></i>' + content,
            type: 'error',
            layout: 'topCenter',
            timeout: duration || defaultOptions.duration
        });
    },
    warning: function (_a) {
        var content = _a.content, duration = _a.duration;
        noty({
            text: '<i class="fa fa-warning"></i>' + content,
            type: 'warning',
            layout: 'topCenter',
            timeout: duration || defaultOptions.duration
        });
    },
    warn: function (_a) {
        var content = _a.content, duration = _a.duration;
        this.warning({ content: content, duration: duration });
    },
    config: function (options) {
        if (options.duration !== undefined) {
            defaultOptions.duration = options.duration;
        }
    }
};


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var noty = __webpack_require__(181);
var defaultOptions = {
    timeout: 3000
};
exports["default"] = {
    info: function (_a) {
        var message = _a.message, title = _a.title, timeout = _a.timeout;
        noty({
            text: template(title, message, 'fa fa-info-circle'),
            type: 'information',
            timeout: timeout || defaultOptions.timeout
        });
    },
    success: function (_a) {
        var message = _a.message, title = _a.title, timeout = _a.timeout;
        noty({
            text: template(title, message, 'fa fa-check-circle'),
            type: 'success',
            timeout: timeout || defaultOptions.timeout
        });
    },
    error: function (_a) {
        var message = _a.message, title = _a.title, timeout = _a.timeout;
        noty({
            text: template(title, message, 'fa fa-times-circle'),
            type: 'error',
            timeout: timeout || defaultOptions.timeout
        });
    },
    warning: function (_a) {
        var message = _a.message, title = _a.title, timeout = _a.timeout;
        noty({
            text: template(title, message, 'fa fa-warning'),
            type: 'warning',
            timeout: timeout || defaultOptions.timeout
        });
    },
    warn: function (_a) {
        var message = _a.message, title = _a.title, timeout = _a.timeout;
        this.warning({ message: message, title: title, timeout: timeout });
    },
    config: function (options) {
        if (options.timeout !== undefined) {
            defaultOptions.timeout = options.timeout;
        }
    }
};
function template(title, message, icon) {
    title = title ? "<strong>" + title + "</strong><br>" : '';
    return "<div>\n                <i class=\"" + icon + " pull-left\" style=\"font-size: 38px;min-width: 38px;text-align: center;\"></i>\n                " + title + "\n                " + message + "\n            </div>";
}


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(26);
__webpack_require__(226);
__webpack_require__(43);
var ane_util_1 = __webpack_require__(9);
__webpack_require__(47);
var defaultPagination = function () {
    return {
        current: 1, pageSize: 10, total: NaN, onChange: avalon.noop
    };
};
avalon.component('ms-table', {
    soleSlot: 'header',
    template: __webpack_require__(258),
    defaults: {
        header: '',
        columns: [],
        data: [],
        key: 'id',
        loading: false,
        needSelection: false,
        checked: [],
        selection: [],
        isAllChecked: false,
        onSelect: avalon.noop,
        onSelectAll: avalon.noop,
        selectionChange: avalon.noop,
        handleCheckAll: function (e) {
            var _this = this;
            var data = this.getCurrentPageData();
            if (e.target.checked) {
                data.forEach(function (record) {
                    _this.checked.ensure(record[_this.key]);
                    _this.selection.ensure(record);
                });
            }
            else {
                if (!isNaN(this.paginationConfig.total)) {
                    this.checked.clear();
                    this.selection.clear();
                }
                else {
                    this.checked.removeAll(function (el) { return data.map(function (record) { return record[_this.key]; }).indexOf(el) !== -1; });
                    this.selection.removeAll(function (el) { return data.indexOf(el) !== -1; });
                }
            }
            this.selectionChange(this.checked, this.selection.$model);
            this.onSelectAll(e.target.checked, this.selection.$model);
        },
        handleCheck: function (checked, record) {
            if (checked) {
                this.checked.ensure(record[this.key]);
                this.selection.ensure(record);
            }
            else {
                this.checked.remove(record[this.key]);
                this.selection.remove(record);
            }
            this.selectionChange(this.checked, this.selection.$model);
            this.onSelect(record.$model, checked, this.selection.$model);
        },
        actions: avalon.noop,
        handle: function (type, col, record, $index) {
            var extra = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                extra[_i - 4] = arguments[_i];
            }
            var text = record[col.dataIndex].$model || record[col.dataIndex];
            this.actions.apply(this, [type, text, record.$model, $index].concat(extra));
        },
        pagination: defaultPagination(),
        paginationConfig: defaultPagination(),
        handlePageChange: function (currentPage) {
            this.paginationConfig.onChange(currentPage);
            this.paginationConfig.current = currentPage;
            this.$fire('checked.length', this.checked.length);
            this.onChange(this.paginationConfig.$model);
        },
        getCurrentPageData: function () {
            return !isNaN(this.paginationConfig.total) ? this.data : this.data.slice(this.paginationConfig.pageSize * (this.paginationConfig.current - 1), this.paginationConfig.pageSize * this.paginationConfig.current);
        },
        $computed: {
            total: function () {
                return !isNaN(this.paginationConfig.total) ? this.paginationConfig.total : this.data.length;
            }
        },
        onChange: avalon.noop,
        onInit: function (event) {
            var _this = this;
            var descriptor = ane_util_1.getChildTemplateDescriptor(this);
            descriptor.forEach(function (column) {
                if (column.props.type == 'selection') {
                    _this.key = column.props.dataIndex || _this.key;
                    _this.needSelection = true;
                    return false;
                }
            });
            this.columns = getColumnConfig(descriptor);
            this.$watch('checked.length', function (newV) {
                var currentPageKeys = _this.getCurrentPageData()
                    .map(function (record) { return record[_this.key]; });
                _this.isAllChecked = currentPageKeys
                    .filter(function (key) { return _this.checked.contains(key); })
                    .length == currentPageKeys.length;
            });
            this.$watch('data', function (v) {
                _this.isAllChecked = false;
                _this.checked.clear();
                _this.selection.clear();
            });
            this.$watch('data.length', function (v) {
                _this.isAllChecked = false;
                _this.checked.clear();
                _this.selection.clear();
            });
            this.$watch('pagination', function (v) {
                avalon.mix(_this.paginationConfig, v);
            });
            this.$watch('pagination.current', function (v) {
                _this.paginationConfig.current = v;
            });
            this.$watch('pagination.pageSize', function (v) {
                _this.paginationConfig.pageSize = v;
            });
            this.$watch('pagination.total', function (v) {
                _this.paginationConfig.total = v;
            });
            this.$watch('pagination.onChange', function (v) {
                _this.paginationConfig.onChange = v;
            });
            this.$fire('pagination', this.pagination.$model);
        },
        onReady: function (event) {
        },
        onDispose: function (vm, el) {
        }
    }
});
function getColumnConfig(descriptor, level) {
    if (level === void 0) { level = 1; }
    return descriptor.reduce(function (acc, column) {
        if (column.is != 'ms-table-header')
            return acc;
        if (column.props.type == 'selection') {
            return acc;
        }
        var inlineTemplate = column.inlineTemplate;
        inlineTemplate = inlineTemplate.replace(/(ms-|:)skip="[^"]*"/g, '');
        inlineTemplate = inlineTemplate.replace(/<\s*ms-table-header[^>]*>.*<\/\s*ms-table-header\s*>/g, '');
        inlineTemplate = inlineTemplate.replace(/(ms-|:)click="handle\(([^"]*)\)"/g, function ($0, $1, $2, $3) {
            return ($1 + "click=\"handle(" + $2 + ",)\"").replace(/,/, ', col, record, $index,').replace(/,\)/, ')');
        });
        acc.push({
            title: column.props.title,
            dataIndex: column.props.dataIndex || '',
            template: /^\s*$/.test(inlineTemplate) ? '{{record.' + column.props.dataIndex + '}}' : inlineTemplate
        });
        return acc.concat(getColumnConfig(column.children, level + 1));
    }, []);
}


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_control_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(5);
/**
 * 多行文本输入组件
 * @prop value 组件值(inherit)
 * @prop col 字段路径(inherit)
 * @prop rows 文本框行数
 *
 * @example
 * ``` html
 * <ms-textarea :widget="{value: @bio, col: 'bio', rows: 3}"></ms-textarea>
 * ```
 */
ms_control_1["default"].extend({
    displayName: 'ms-textarea',
    template: __webpack_require__(259),
    defaults: {
        rows: '',
        text: '',
        mapValueToText: function (value) {
            this.text = value;
        },
        onInit: function (event) {
            var _this = this;
            utils_1.emitToFormItem(this);
            this.$watch('value', function (v) {
                _this.mapValueToText(v);
                _this.handleChange({
                    target: { value: v },
                    denyValidate: true,
                    type: 'changed'
                });
            });
            this.mapValueToText(this.value);
        }
    }
});


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(204);
__webpack_require__(235);


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var moment = __webpack_require__(0);
var monthTable = [];
avalon.component('ms-calendar-year-view', {
    template: __webpack_require__(244),
    defaults: {
        table: [],
        // 0-月视图，1-年视图，2-十年视图，3-百年视图
        view: 1,
        currentMonth: '',
        currentYear: 0,
        isSelected: function (el) {
            return false;
        },
        onSelect: avalon.noop,
        handleCellClick: function (el) {
            this.onSelect(el);
        },
        onInit: function () {
            var _this = this;
            var monthList = moment.localeData().monthsShort();
            if (monthTable.length === 0) {
                [0, 3, 6, 9].forEach(function (n) {
                    monthTable.push(monthList.slice(n, n + 3).map(function (m) { return ({ label: m, value: m }); }));
                });
            }
            this.$watch('view', function (v) {
                var startOfDecade = _this.currentYear - _this.currentYear % 10;
                var startOfCentury = _this.currentYear - _this.currentYear % 100;
                switch (v) {
                    case 1:
                        _this.table = monthTable;
                        break;
                    case 2:
                        _this.table = [0, 3, 6, 9].map(function (n) { return avalon.range(startOfDecade - 1, startOfDecade + 11)
                            .slice(n, n + 3)
                            .map(function (m) { return ({ label: m, value: m }); }); });
                        break;
                    case 3:
                        _this.table = [0, 3, 6, 9].map(function (n) { return avalon.range(startOfCentury - 10, startOfCentury + 110, 10)
                            .slice(n, n + 3)
                            .map(function (m) { return ({ label: m + "-" + (m + 9), value: m }); }); });
                        break;
                }
            });
            this.$watch('currentYear', function (v) {
                _this.$fire('view', _this.view);
            });
        }
    }
});


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(194);
__webpack_require__(237);


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var moment = __webpack_require__(0);
function default_1(cmpVm) {
    if (avalon.vmodels[cmpVm.panelVmId] !== undefined) {
        return avalon.vmodels[cmpVm.panelVmId];
    }
    return avalon.define({
        $id: cmpVm.panelVmId,
        currentDateArray: '',
        $moment: moment(),
        currentDay: 0,
        currentMonth: '',
        currentYear: 0,
        $startDate: null,
        $endDate: null,
        disabledDate: function () { return false; },
        showTime: false,
        // -1-天（时间）视图，0-月视图，1-年视图，2-十年视图，3-百年视图
        viewMode: 0,
        staged: 0,
        $computed: {
            startOfDecade: function () {
                return this.currentYear - this.currentYear % 10;
            },
            startOfCentury: function () {
                return this.currentYear - this.currentYear % 100;
            }
        },
        reset: function () {
            var _this = this;
            this.viewMode = 0;
            this.staged = 0;
            this.$moment = cmpVm.selected ? moment(cmpVm.selected, cmpVm.format) : moment();
            this.currentDay = this.$moment.date();
            this.currentMonth = this.$moment.format('MMM');
            this.currentYear = this.$moment.year();
            this.currentDateArray = this.$moment.toArray().toString();
            this.showTime = cmpVm.showTime;
            // 构造不可选择日期的判断函数
            if (cmpVm.startDate) {
                this.$startDate = moment(cmpVm.startDate, cmpVm.format);
            }
            if (cmpVm.endDate) {
                this.$endDate = moment(cmpVm.endDate, cmpVm.format);
            }
            if (cmpVm.startDate || cmpVm.endDate) {
                // 如果设置了开始日期和结束日期，则据此构造一个判断函数
                this.disabledDate = function (current) {
                    if (_this.$startDate === null && _this.$endDate === null) {
                        return false;
                    }
                    var currentMoment = moment(current);
                    var isSameOrAfterStartDate = currentMoment.isSameOrAfter(_this.$startDate, 'date');
                    var isSameOrBeforeEndDate = currentMoment.isSameOrBefore(_this.$endDate, 'date');
                    if (_this.$startDate === null) {
                        return !isSameOrBeforeEndDate;
                    }
                    if (_this.$endDate === null) {
                        return !isSameOrAfterStartDate;
                    }
                    return !(isSameOrAfterStartDate && isSameOrBeforeEndDate);
                };
            }
            else {
                // 否则使用默认的或者外部传进来的判断函数
                this.disabledDate = cmpVm.disabledDate;
            }
        },
        changeView: function (viewMode) {
            if (this.viewMode === 0 && viewMode === 2) {
                // 从月视图直接跳到十年视图后，返回时跳过年视图
                this.staged = 1;
            }
            this.viewMode = viewMode;
        },
        handleYearViewSelect: function (el) {
            if (this.viewMode === 1) {
                this.currentMonth = el.value;
                this.$moment.month(el.value);
                this.currentDateArray = this.$moment.toArray().toString();
            }
            if (this.viewMode === 3) {
                this.currentYear = el.value;
                this.$moment.year(el.value);
                this.currentDateArray = this.$moment.toArray().toString();
            }
            if (this.viewMode === 2) {
                this.currentYear = el.value;
                this.$moment.year(el.value);
                this.currentDateArray = this.$moment.toArray().toString();
                this.viewMode = this.viewMode - 1 - this.staged;
                this.staged = 0;
            }
            else {
                this.viewMode = this.viewMode - 1;
            }
        },
        mutate: function (action) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this.$moment[action].apply(this.$moment, args);
            this.currentDay = this.$moment.date();
            this.currentMonth = this.$moment.format('MMM');
            this.currentYear = this.$moment.year();
            this.currentDateArray = this.$moment.toArray().toString();
        },
        today: function () {
            this.handleCalendarChange({
                target: {
                    value: moment()
                },
                type: 'calendar-changed'
            });
            this.complete();
        },
        handleCalendarChange: function (e) {
            this.$moment = e.target.value;
            this.currentDay = this.$moment.date();
            this.currentMonth = this.$moment.format('MMM');
            this.currentYear = this.$moment.year();
            if (!this.showTime) {
                this.complete();
            }
        },
        handleTimepickerChange: function (e) {
            var _a = e.target, hour = _a.hour, minute = _a.minute, second = _a.second;
            this.$moment.hour(hour).minute(minute).second(second);
        },
        complete: function () {
            cmpVm.selected = this.$moment.format(cmpVm.format);
            cmpVm.panelVisible = false;
            cmpVm.handleChange({
                target: { value: cmpVm.selected },
                type: 'datepicker-changed'
            });
        }
    });
}
exports["default"] = default_1;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(205);


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ane_util_1 = __webpack_require__(9);
/**
 * 表单项组件
 * @prop label 表单项标签
 *
 * @example
 * ``` html
 * <ms-form-item :widget="{label: '标题'}">
        <ms-input :widget="{value: @title, col: 'title'}"></ms-input>
    </ms-form-item>
 * ```
 */
avalon.component('ms-form-item', {
    template: __webpack_require__(250),
    defaults: {
        $formVm: null,
        label: '',
        control: '',
        inline: false,
        dirty: false,
        reasons: [],
        hasRules: false,
        showIcon: true,
        className: '',
        inlineFormGroupStyle: { verticalAlign: 'top' },
        inlineMessageStyle: { marginBottom: 0 },
        onFieldChange: function (descriptor) {
            var _this = this;
            this.$formVm.type !== 'search' && this.$formVm.$form.setFieldsValue((_a = {},
                _a[descriptor.name] = { value: descriptor.value, denyValidate: descriptor.denyValidate },
                _a));
            if (!descriptor.rules)
                return;
            if (descriptor.showIcon === false) {
                this.showIcon = false;
            }
            delete descriptor.showIcon;
            this.hasRules = true;
            this.$formVm.$form.addFields((_b = {},
                _b[descriptor.name] = { rules: descriptor.rules },
                _b));
            this.$formVm.$form.on('error' + descriptor.name, function (reasons) {
                _this.dirty = true;
                _this.reasons = reasons;
            });
            this.$formVm.$form.on('reset', function (fields) {
                if (~Object.keys(fields).indexOf(descriptor.name)) {
                    _this.dirty = false;
                    _this.reasons = [];
                }
            });
            var _a, _b;
        },
        onFormChange: function (meta) {
            if (this.$formVm.$form.autoAsyncChange) {
                this.dirty = true;
            }
            this.$formVm.onFormChange(meta);
        },
        onInit: function (event) {
            event.target._ctype_ = 'ms-form-item';
            event.target._vm_ = this;
            this.$formVm = ane_util_1.findParentComponent(this, 'ms-form');
            if (this.$formVm === null) {
                throw 'ms-form-item 必须放在 ms-form 内';
            }
            this.inline = this.$formVm.inline;
        },
        onReady: function (event) {
        }
    },
    soleSlot: 'control'
});


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(197);


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
exports.__esModule = true;
var avalon = __webpack_require__(1);
/**
 * loading 指令
 *
 * @example
 * ``` html
 * <table :loading="true">...</table>
 * ```
 */
avalon.directive('loading', {
    init: function () {
        this.instance = null;
        this.oldPositionStyle = '';
    },
    update: function (vdom, value) {
        var _this = this;
        if (value) {
            if (!this.instance) {
                var t_1 = setInterval(function () {
                    var dom = vdom.dom;
                    var computedStyle = global.getComputedStyle ? global.getComputedStyle(dom) : dom.currentStyle;
                    var width = dom.offsetWidth, height = dom.scrollHeight, className = dom.className;
                    var borderLeftWidth = computedStyle.borderLeftWidth, borderTopWidth = computedStyle.borderTopWidth, display = computedStyle.display;
                    _this.oldPositionStyle = dom.style.position;
                    // 如果元素是隐藏的，什么都不做
                    if (display === 'none') {
                        clearInterval(t_1);
                    }
                    // 如果宽度和高度都不为0，则添加loading遮罩
                    if (width !== 0 && height !== 0) {
                        clearInterval(t_1);
                    }
                    else {
                        return;
                    }
                    var maskElement = global.document.createElement('div');
                    maskElement.className = 'ane-loading-mask';
                    maskElement.innerText = '加载中...';
                    maskElement.style.left = 0 - (borderLeftWidth === 'medium' ? 0 : parseFloat(borderLeftWidth)) + 'px';
                    maskElement.style.top = 0 - (borderTopWidth === 'medium' ? 0 : parseFloat(borderTopWidth)) + 'px';
                    maskElement.style.width = width + 'px';
                    maskElement.style.height = height + 'px';
                    maskElement.style.lineHeight = height + 'px';
                    dom.style.position = 'relative';
                    if (!~(" " + className + " ").indexOf(' masked ')) {
                        dom.className += ' masked';
                    }
                    dom.appendChild(maskElement);
                    _this.instance = maskElement;
                }, 100);
            }
            else {
                var dom = vdom.dom;
                var maskElement = this.instance;
                var className = dom.className;
                this.oldPositionStyle = dom.style.position;
                maskElement.style.display = 'block';
                dom.style.position = 'relative';
                if (!~(" " + className + " ").indexOf(' masked ')) {
                    dom.className = className + ' masked';
                }
            }
        }
        else {
            setTimeout(function () {
                if (_this.instance) {
                    var dom = vdom.dom;
                    var maskElement = _this.instance;
                    var className = dom.className;
                    maskElement.style.display = 'none';
                    if (_this.oldPositionStyle) {
                        dom.style.position = _this.oldPositionStyle;
                    }
                    dom.className = (" " + className + " ").replace(/\s*masked\s*/, ' ');
                }
            }, 100);
        }
    },
    beforeDispose: function () {
        var dom = this.node.dom;
        this.instance && dom.removeChild(this.instance);
    }
});
/**
 * 全局 loading 方法
 *
 * @example
 * ``` js
 * import { Loading } from './components/ms-loading';
 * Loading.show();
 * setTimeout(() => {
 *   Loading.hide();
 * }, 5000)
 * ```
 */
var loadingDirective = avalon.directives['loading'];
var globalLoadingContext = {
    node: { dom: document.body }
};
exports.Loading = {
    show: function () {
        if (globalLoadingContext.instance === undefined) {
            loadingDirective.init.call(globalLoadingContext);
            avalon.ready(function () {
                loadingDirective.update.call(globalLoadingContext, {
                    dom: globalLoadingContext.node.dom
                }, true);
            });
        }
        else {
            loadingDirective.update.call(globalLoadingContext, {
                dom: globalLoadingContext.node.dom
            }, true);
        }
    },
    hide: function () {
        if (globalLoadingContext.instance !== undefined) {
            loadingDirective.update.call(globalLoadingContext, {
                dom: globalLoadingContext.node.dom
            }, false);
        }
    }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(239);
__webpack_require__(198);


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_message_1 = __webpack_require__(208);
exports["default"] = ms_message_1["default"];


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_notification_1 = __webpack_require__(209);
exports["default"] = ms_notification_1["default"];


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(42);
__webpack_require__(48);
__webpack_require__(240);


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
avalon.component('ms-select-option', {
    template: '&nbsp;',
    soleSlot: 'label',
    defaults: {
        label: '',
        value: '',
        disabled: false
    }
});


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
function default_1(cmpVm) {
    if (avalon.vmodels[cmpVm.panelVmId] !== undefined) {
        return avalon.vmodels[cmpVm.panelVmId];
    }
    return avalon.define({
        $id: cmpVm.panelVmId,
        selection: [],
        loading: false,
        isMultiple: cmpVm.isMultiple,
        options: cmpVm.options.toJSON(),
        searchValue: '',
        getFilteredOptions: function () {
            return this.options.filter(this.filterFn);
        },
        filterFn: function (el) {
            if (this.loading) {
                return false;
            }
            if (cmpVm.remote) {
                return true;
            }
            var reg = new RegExp(avalon.escapeRegExp(this.searchValue), 'i');
            return reg.test(el.label) || reg.test(el.value);
        },
        handleOptionClick: function (e, option) {
            if (option.disabled) {
                return false;
            }
            if (cmpVm.isMultiple) {
                if (this.selection.some(function (o) { return o.value === option.value; })) {
                    this.selection.removeAll(function (o) { return o.value === option.value; });
                }
                else {
                    this.selection.push(option);
                }
                cmpVm.focusSearch();
            }
            else {
                this.selection = [option];
                cmpVm.panelVisible = false;
            }
            var selection = this.selection.toJSON();
            var value = selection.map(function (s) { return s.value; });
            cmpVm.handleChange({
                target: { value: cmpVm.isMultiple ? value : value[0] || '' },
                type: 'select'
            });
            cmpVm.displayValue = option.label;
            cmpVm.selection = selection;
        }
    });
}
exports["default"] = default_1;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
avalon.component('ms-table-header', {
    template: '<th><slot /></th>',
    soleSlot: 'content',
    defaults: {
        content: '',
        col: ''
    }
});


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(211);


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(200);
__webpack_require__(242);


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var moment = __webpack_require__(0);
function default_1(cmpVm) {
    if (avalon.vmodels[cmpVm.panelVmId] !== undefined) {
        return avalon.vmodels[cmpVm.panelVmId];
    }
    return avalon.define({
        $id: cmpVm.panelVmId,
        currentDateArray: '',
        $moment: moment(),
        reset: function () {
            this.$moment = cmpVm.selected ? moment(cmpVm.selected, cmpVm.format) : moment();
            this.currentDateArray = this.$moment.toArray().toString();
        },
        handleTimepickerChange: function (e) {
            var _a = e.target, hour = _a.hour, minute = _a.minute, second = _a.second;
            this.$moment.hour(hour).minute(minute).second(second);
            this.currentDateArray = this.$moment.toArray().toString();
            cmpVm.selected = this.$moment.format(cmpVm.format);
            cmpVm.handleChange({
                target: { value: cmpVm.selected },
                type: 'timepicker-changed'
            });
        }
    });
}
exports["default"] = default_1;
;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(201);


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var domAlign = __webpack_require__(338);
avalon.component('ms-trigger', {
    template: '<span style="display:none;"></span>',
    defaults: {
        width: 0,
        visible: false,
        innerVmId: '',
        innerClass: '',
        innerTemplate: '',
        initialized: false,
        withInBox: function () { return true; },
        getTarget: avalon.noop,
        onHide: avalon.noop,
        hide: function (panel) {
            panel.style.top = '-9999px';
            panel.style.left = '-9999px';
            this.onHide();
        },
        initPanel: function (panel) {
            var _this = this;
            var DOC = document, body = DOC.body;
            var medium = DOC.createElement('div');
            medium.setAttribute('id', this.$id);
            medium.setAttribute('style', 'position: absolute; top: 0px; left: 0px; width: 100%;');
            panel.setAttribute('class', this.innerClass);
            panel.setAttribute('style', 'z-index: 1050;left: -9999px;top: -9999px;position: absolute;outline: none;overflow: hidden;');
            panel.setAttribute(':important', this.innerVmId);
            panel.innerHTML = this.innerTemplate.replace(/\r|\n/g, '');
            medium.appendChild(panel);
            body.appendChild(medium);
            avalon.scan(panel, avalon.vmodels[this.innerVmId]);
            avalon.bind(DOC, 'click', function (e) {
                if (_this.visible && panel !== e.target && !avalon.contains(panel, e.target) && !_this.withInBox(e.target)) {
                    _this.hide(panel);
                }
            });
        },
        onInit: function (event) {
            var _this = this;
            var DOC = document;
            var panel = DOC.createElement('div');
            this.$watch('visible', function (v) {
                if (v) {
                    if (!_this.initialized) {
                        _this.initPanel(panel);
                        _this.initialized = true;
                    }
                    panel.style.width = _this.width === 0 ? 'auto' : (_this.width + 'px');
                    panel.scrollTop = 0;
                    domAlign(panel, _this.getTarget(), {
                        points: ['tl', 'bl'],
                        offset: [0, 1],
                        //targetOffset: ['0%','100%']
                        overflow: {
                            adjustY: true
                        }
                    });
                }
                else {
                    _this.hide(panel);
                }
            });
        },
        onDispose: function (event) {
            if (!this.initialized) {
                return;
            }
            var DOC = document, body = DOC.body;
            var medium = DOC.getElementById(this.$id);
            body.removeChild(medium);
        }
    }
});


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(202);
__webpack_require__(243);


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
avalon.component('ms-upload-card', {
    template: __webpack_require__(263),
    defaults: {
        fileList: [],
        getTextClass: function (file) {
            switch (file.status) {
                case 'done': return 'text-primary';
                case 'uploading': return 'text-muted';
                case 'error': return 'text-danger';
            }
            return '';
        },
        onRemove: avalon.noop,
        del: function (file) {
            this.onRemove(file);
        }
    }
});


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
avalon.component('ms-upload-list', {
    template: __webpack_require__(264),
    defaults: {
        fileList: [],
        getTextClass: function (file) {
            switch (file.status) {
                case 'done': return 'text-primary';
                case 'uploading': return 'text-muted';
                case 'error': return 'text-danger';
            }
            return '';
        },
        onRemove: avalon.noop,
        del: function (file) {
            this.onRemove(file);
        }
    }
});


/***/ }),
/* 235 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 236 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 237 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 238 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 239 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 240 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 241 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 242 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 243 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-calendar\">\n    <table class=\"ane-calendar-year-view\">\n        <tbody>\n            <tr :for=\"（i, row) in @table\">\n                <td class=\"ane-calendar-cell\"\n                    :class=\"[\n                                (@isSelected(cell) ? 'ane-calendar-selected-day' : ''),\n                                (@view > 1 && (i + j === 0 || i * j === 6) ? 'ane-calendar-prev-month-cell' : '')\n                            ]\"\n                    :for=\"(j, cell) in row\">\n                    <div class=\"ane-calendar-date\" :click=\"@handleCellClick(cell)\">{{cell.label}}</div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-calendar\">\n    <div class=\"row\" ms-if=\"@showHeader\">\n        <div class=\"col-md-2 col-md-offset-4\">\n            <ms-select :widget=\"{value:[@currentYear],options:@currentYearOptions,onChange:@handleYearChange}\"></ms-select>\n        </div>\n        <div class=\"col-md-2\">\n            <ms-select :widget=\"{value:[@currentMonth],options:@monthOptions,onChange:@handleMonthChange}\"></ms-select>\n        </div>\n    </div>\n    <table>\n        <thead>\n            <tr>\n                <th class=\"ane-calendar-column-header\" :for=\"day in @weekdays\">{{day}}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr :for=\"week in @table\">\n                <td class=\"ane-calendar-cell\" :class=\"el.className\" :for=\"el in week\">\n                    <div class=\"ane-calendar-date\" :click=\"@handleDateClick(el) | stop\">{{el.date}}</div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkbox-group\">\n    <ms-checkbox \n        :widget=\"{\n            checked:@selection.indexOf(option.value)!=-1,\n            group:true,\n            onChange:function(){\n                @toggleOption(option)\n            },\n            disabled:'disabled' in option?option.disabled:@disabled\n        }\" \n        :for=\"option in options\">{{option.label}}</ms-checkbox>\n</div>"

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = "<div :class=\"@wrapper\" class=\"ane-checkbox\" style=\"margin-top: 0; margin-bottom: 0;\">\n    <label class=\"ane-checkbox-inner ane-checkbox-inner-ie\">\n        <input type=\"checkbox\"\n            :class=\"[@indeterminate?'ane-checkbox-indeterminate':'']\"\n            :attr=\"{id:@helpId,disabled:@disabled}\"\n            :duplex-checked=\"@checked\"\n            data-duplex-changed=\"@onChange\"\n            />\n        <span class=\"text\"></span>\n    </label>\n    <label :attr=\"{'for':@helpId}\" style=\"padding-left: 0;\" :css=\"{marginRight:@group?8:0}\"><slot /></label>\n</div>"

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-datepicker-panel\" style=\"overflow: auto\">\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode === 0\">\n        <a class=\"ane-datepicker-prev-year-btn\" :click=\"mutate('subtract', 1, 'years')\">\n            <i class=\"fa fa-angle-double-left\"></i>\n        </a>\n        <a class=\"ane-datepicker-prev-month-btn\" :click=\"mutate('subtract', 1, 'months')\">\n            <i class=\"fa fa-angle-left\"></i>\n        </a>\n        <span>\n            <a class=\"ane-datepicker-month-select\" :click=\"@changeView(1)\">{{@currentMonth}}</a>\n            <a class=\"ane-datepicker-year-select\" :click=\"@changeView(2)\">{{@currentYear}}</a>\n        </span>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 1, 'years')\">\n            <i class=\"fa fa-angle-double-right\"></i>\n        </a>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 1, 'months')\">\n            <i class=\"fa fa-angle-right\"></i>\n        </a>\n    </div>\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode === 1\">\n        <a class=\"ane-datepicker-prev-year-btn\" :click=\"mutate('subtract', 1, 'years')\">\n            <i class=\"fa fa-angle-double-left\"></i>\n        </a>\n        <span>\n            <a class=\"ane-datepicker-month-select\" :click=\"@changeView(2)\">{{@currentYear}}</a>\n        </span>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 1, 'years')\">\n            <i class=\"fa fa-angle-double-right\"></i>\n        </a>\n    </div>\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode === 2\">\n        <a class=\"ane-datepicker-prev-year-btn\" :click=\"mutate('subtract', 10, 'years')\">\n            <i class=\"fa fa-angle-double-left\"></i>\n        </a>\n        <span>\n            <a class=\"ane-datepicker-month-select\" :click=\"@changeView(3)\">{{@startOfDecade + '-' + (@startOfDecade + 9)}}</a>\n        </span>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 10, 'years')\">\n            <i class=\"fa fa-angle-double-right\"></i>\n        </a>\n    </div>\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode === 3\">\n        <a class=\"ane-datepicker-prev-year-btn\" :click=\"mutate('subtract', 100, 'years')\">\n            <i class=\"fa fa-angle-double-left\"></i>\n        </a>\n        <span>{{@startOfCentury + '-' + (@startOfCentury + 99)}}</span>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 100, 'years')\">\n            <i class=\"fa fa-angle-double-right\"></i>\n        </a>\n    </div>\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode < 0 && @showTime\">\n        <span>\n            <a class=\"ane-datepicker-month-select\">{{@currentMonth}}</a>\n            <a class=\"ane-datepicker-month-select\">{{@currentDay}}</a>\n            <a class=\"ane-datepicker-year-select\">{{@currentYear}}</a>\n        </span>\n    </div>\n    <div class=\"ane-datepicker-panel-body\" :visible=\"@viewMode === 0\">\n        <ms-calendar :widget=\"{value:@currentDateArray,showHeader:false,disabledDate:@disabledDate,onChange:@handleCalendarChange}\"></ms-calendar>\n    </div>\n    <div class=\"ane-datepicker-panel-body\" :visible=\"@viewMode > 0\">\n        <ms-calendar-year-view :widget=\"{currentMonth:@currentMonth,currentYear:@currentYear,view:@viewMode,onSelect:@handleYearViewSelect}\"></ms-calendar-year-view>\n    </div>\n    <div class=\"ane-datepicker-panel-body\" :visible=\"@viewMode === -1\">\n        <ms-timepicker-view :widget=\"{value:@currentDateArray,onChange:@handleTimepickerChange}\"></ms-timepicker-view>\n    </div>\n    <div class=\"ane-datepicker-panel-footer\" :visible=\"@viewMode === 0 && !@showTime\">\n        <span class=\"ane-datepicker-panel-footer-btn\">\n            <a class=\"ane-datepicker-panel-today-btn\" :click=\"@today\">今天</a>\n        </span>\n    </div>\n    <div class=\"ane-datepicker-panel-footer\" :visible=\"@viewMode <= 0 && @showTime\">\n        <span class=\"ane-datepicker-panel-footer-btn\">\n            <a class=\"ane-datepicker-panel-now-btn\" :click=\"@today\">此刻</a>\n            <a class=\"ane-datepicker-panel-ok-btn\" :click=\"@complete\">确定</a>\n            <a class=\"ane-datepicker-panel-timepicker-btn\" :click=\"@changeView(@viewMode > -1 ? -1 : 0)\">{{@viewMode > -1 ? '选择时间' : '选择日期'}}</a>\n        </span>\n    </div>\n</div>"

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-datepicker\" :css=\"{width:@width}\">\n    <i class=\"fa fa-calendar ane-datepicker-icon\"></i>\n    <i class=\"fa fa-times-circle ane-datepicker-clear\" :if=\"@selected.length\" :click=\"@clear\"></i>\n    <input type=\"text\"\n        class=\"form-control ane-datepicker-input\"\n        :click=\"@handleClick\"\n        readonly\n        :attr=\"{placeholder:@placeholder}\"\n        :css=\"{width:'100%'}\"\n        :duplex=\"selected\" />\n    <ms-trigger :widget=\"{\n        visible: @panelVisible,\n        innerVmId: @panelVmId,\n        innerClass: @panelClass,\n        innerTemplate: @panelTemplate,\n        withInBox: @withInBox,\n        getTarget: @getTarget,\n        onHide: @handlePanelHide\n    }\">\n    </ms-trigger>\n</div>"

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group has-feedback\" :css=\"[@inline && @inlineFormGroupStyle]\" :class=\"[@className,(@hasRules && @dirty ? (@reasons.length ? 'has-error' : 'has-success') : '')]\">\n    <label class=\"control-label\" :if=\"@label.length\">{{@label}}</label>\n    <slot />\n    <i class=\"form-control-feedback\" :if=\"@hasRules && @showIcon\" :class=\"[(@dirty ? 'glyphicon' : ''), (@reasons.length ? 'glyphicon-remove' : 'glyphicon-ok')]\" :visible=\"@dirty\"></i>\n    <small class=\"help-block\" :css=\"[@inline && @inlineMessageStyle]\" :if=\"@hasRules && @reasons.length\">{{@reasons.length ? @reasons[0].message : ''}}</small>\n</div>"

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"form-control\" \n    :duplex=\"@text\" \n    :attr=\"{name:@col,placeholder:@placeholder}\" \n    :css=\"{width:@width}\"\n    data-duplex-changed=\"@handleChange\">"

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"ane-menu\">\n    <li :class=\"[\n                    !item.children || item.children.length === 0 ? 'ane-menu-item' : 'ane-menu-submenu',\n                    @openKeys.contains(item.key) ? 'ane-menu-open' : '',\n                    @selectedKeys.contains(item.key) ? 'ane-menu-item-selected' : ''\n                ]\"\n        :for=\"item in @menu\">\n        <a :click=\"handleClick(item, item.key, [item.key])\" style=\"padding-left: 24px;\">\n            <i :class=\"[item.icon]\"></i>\n            <span>{{item.title}}</span>\n            <i class=\"ane-menu-caret fa\" :class=\"[@openKeys.contains(item.key) ? 'fa-angle-up' : 'fa-angle-down']\"></i>\n        </a>\n        <ul class=\"ane-menu\">\n            <li :class=\"[\n                            !item2.children || item2.children.length === 0 ? 'ane-menu-item' : 'ane-menu-submenu',\n                                @openKeys.contains(item2.key) ? 'ane-menu-open' : '',\n                                @selectedKeys.contains(item2.key) ? 'ane-menu-item-selected' : ''\n                            ]\"\n                :for=\"item2 in item.children\">\n                <a :click=\"handleClick(item2, item2.key, [item2.key,item.key])\" style=\"padding-left: 48px;\">\n                    <span>{{item2.title}}</span>\n                    <i class=\"ane-menu-caret fa\" :class=\"[@openKeys.contains(item2.key) ? 'fa-angle-up' : 'fa-angle-down']\"></i>\n                </a>\n                <ul class=\"ane-menu\">\n                    <li :class=\"[\n                                    !item3.children || item3.children.length === 0 ? 'ane-menu-item' : 'ane-menu-submenu',\n                                    @selectedKeys.contains(item3.key) ? 'ane-menu-item-selected' : ''\n                                ]\"\n                        :for=\"item3 in item2.children\">\n                        <a :click=\"handleClick(item3, item3.key, [item3.key,item2.key,item.key])\" style=\"padding-left: 72px;\">{{item3.title}}</a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </li>\n</ul>"

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\">\n    <a class=\"btn blue\" :attr=\"{disabled:@current===1}\" :click=\"@prevPage\">\n        <i class=\"icon-step-backward\"></i>上一页\n    </a>\n    <a class=\"btn success\">{{ @current }}/{{ Math.ceil(@total/@pageSize) }}</a>\n    <a class=\"btn blue\" :attr=\"{disabled:@current===Math.ceil(@total/@pageSize)}\" :click=\"@nextPage\">\n        <i class=\"icon-step-forward\"></i>下一页\n    </a>\n</div>"

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkbox-group\">\n    <ms-radio \n        :widget=\"{\n            checked:@selected,\n            value:option.value,\n            name:@helpId,\n            group:true,\n            onChange:function(){\n                @toggleOption(arguments[0], option)\n            },\n            disabled:'disabled' in option?option.disabled:@disabled\n        }\" \n        :for=\"option in options\">{{option.label}}</ms-radio>\n</div>"

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = "<div :class=\"@wrapper\" class=\"ane-radio\" style=\"margin-top: 0; margin-bottom: 0;\">\n    <label class=\"ane-radio-inner ane-radio-inner-ie\">\n        <input type=\"radio\"\n            :attr=\"{id:@helpId,disabled:@disabled,value:@value,name:@name}\"\n            :duplex=\"@checked\"\n            data-duplex-changed=\"@onChange\"\n            />\n        <span class=\"text\"></span>\n    </label>\n    <label :attr=\"{'for':@helpId}\" style=\"padding-left: 0;\" :css=\"{marginRight:@group?8:0}\"><slot /></label>\n</div>"

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: auto\">\n    <ul class=\"ane-select-dropdown-menu\" role=\"menu\">\n        <li class=\"ane-select-dropdown-menu-item\"\n            :class=\"[\n                (@selection.some(function(){return arguments[0].value===option.value}) ? 'ane-select-dropdown-menu-item-selected' : ''),\n                (option.disabled ? 'ane-select-dropdown-menu-item-disabled' : '')\n            ]\"\n            :for=\"option in @getFilteredOptions()\"\n            :click=\"@handleOptionClick($event, option)\"\n            role=\"menuitem\">\n            {{option.label}}\n            <i class=\"fa fa-check\" :visible=\"@isMultiple\"></i>\n        </li>\n        <li class=\"ane-select-dropdown-menu-item ane-select-dropdown-menu-item-disabled\"\n            :visible=\"@getFilteredOptions().length <= 0 && @searchValue && !@loading\">无数据</li>\n        <li class=\"ane-select-dropdown-menu-item ane-select-dropdown-menu-item-disabled\"\n            :visible=\"@loading\">加载中</li>\n    </ul>\n</div>"

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-select form-control\"\n    :class=\"[(@isMultiple ? 'ane-select-multiple' : '')]\"\n    :css=\"{width:@width}\"\n    :click=\"@handleClick\"\n    role=\"combobox\"\n    aria-autocomplete=\"list\"\n    aria-haspopup=\"true\"\n    :attr=\"{'aria-expanded': @panelVisible + ''}\">\n    <ul class=\"ane-select-selection\" :class=\"[(@isMultiple ? 'ane-select-tags' : '')]\">\n        <li class=\"ane-select-selected\" :visible=\"!@isMultiple && (!@showSearch || !@panelVisible)\">{{@displayValue}}</li>\n        <li class=\"ane-select-choice\" :for=\"choice in @selection\">\n            <span>{{choice.label}}</span>\n            <i class=\"fa fa-times\" :click=\"@removeSelection($event, choice) | stop\"></i>\n        </li>\n        <li class=\"ane-select-search\">\n            <input class=\"ane-select-search-field\"\n                name=\"search\"\n                type=\"text\"\n                autocomplete=\"off\"\n                :duplex=\"@searchValue\"\n                :css=\"{visibility:(@showSearch && @panelVisible)?'visible':'hidden'}\"\n                :keydown=\"@handleDelete\" />\n        </li>\n    </ul>\n    <i class=\"fa ane-select-arrow\"\n        :class=\"[(@panelVisible ? 'fa-caret-up' : 'fa-caret-down')]\"\n        :visible=\"@mode === ''\"></i>\n    <ms-trigger :widget=\"{\n        width: @panelWidth,\n        visible: @panelVisible,\n        innerVmId: @panelVmId,\n        innerClass: @panelClass,\n        innerTemplate: @panelTemplate,\n        withInBox: @withInBox,\n        getTarget: @getTarget,\n        onHide: @handlePanelHide}\">\n    </ms-trigger>\n</div>"

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class=\"table\" :loading=\"!window.isNaN(@paginationConfig.total) && @loading\">\n        <thead>\n            <tr>\n                <th :if=\"@needSelection\">\n                    <ms-checkbox :widget=\"{checked:@isAllChecked,onChange:@handleCheckAll}\"></ms-checkbox>\n                </th>\n                <th :for=\"el in @columns\">{{el.title}}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr :for=\"($index, record) in @getCurrentPageData()\">\n                <td :if=\"@needSelection\">\n                    <ms-checkbox :widget=\"{checked:@checked.indexOf(record[@key])!=-1,onChange:function(){@handleCheck(arguments[0].target.checked,record)}}\"></ms-checkbox>\n                </td>\n                <td :for=\"col in @columns\" :html=\"col.template\"></td>\n            </tr>\n        </tbody>\n    </table>\n    <div class=\"pull-right\">\n        <ms-pagination :widget=\"{current:@paginationConfig.current,pageSize:@paginationConfig.pageSize,total:@total,onChange:@handlePageChange}\"></ms-pagination>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>"

/***/ }),
/* 259 */
/***/ (function(module, exports) {

module.exports = "<textarea class=\"form-control\" \n    :duplex=\"@text\" \n    :attr=\"{rows:@rows,name:@col}\"\n    data-duplex-changed=\"@handleChange\"></textarea>"

/***/ }),
/* 260 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-timepicker-view\">\n    <div class=\"ane-timepicker-view-combobox\">\n        <div class=\"ane-timepicker-view-select\" name=\"hour-options\">\n            <ul>\n                <li :for=\"hour in @hourOptions\"\n                    :class=\"[(hour==@currentHour?'ane-timepicker-view-select-option-selected':'')]\"\n                    :click=\"@select(hour, 'hour')\">{{hour}}</li>\n            </ul>\n        </div>\n        <div class=\"ane-timepicker-view-select\" name=\"minute-options\">\n            <ul>\n                <li :for=\"minute in @minuteOptions\"\n                    :class=\"[(minute==@currentMinute?'ane-timepicker-view-select-option-selected':'')]\"\n                    :click=\"@select(minute, 'minute')\">{{minute}}</li>\n            </ul>\n        </div>\n        <div class=\"ane-timepicker-view-select\" name=\"second-options\">\n            <ul>\n                <li :for=\"second in @secondOptions\"\n                    :class=\"[(second==@currentSecond?'ane-timepicker-view-select-option-selected':'')]\"\n                    :click=\"@select(second, 'second')\">{{second}}</li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-timepicker\" :css=\"{width:@width}\">\n    <i class=\"fa fa-clock-o ane-timepicker-icon\"></i>\n    <i class=\"fa fa-times-circle ane-timepicker-clear\" :if=\"@selected.length\" :click=\"@clear\"></i>\n    <input type=\"text\"\n        class=\"form-control ane-timepicker-input\"\n        :click=\"@handleClick\"\n        readonly\n        :attr=\"{placeholder:@placeholder}\"\n        :css=\"{width:'100%'}\"\n        :duplex=\"selected\" />\n    <ms-trigger :widget=\"{\n        visible: @panelVisible,\n        innerVmId: @panelVmId,\n        innerClass: @panelClass,\n        innerTemplate: @panelTemplate,\n        withInBox: @withInBox,\n        getTarget: @getTarget,\n        onHide: @handlePanelHide\n    }\">\n    </ms-trigger>\n</div>"

/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"ane-tree\">\n    <li :for=\"(index, el) in @tree | get(0)\">\n        <span class=\"ane-tree-icon fa\" :class=\"[@changeIcon(el)]\" :click=\"@openSubTree(el)\"></span>\n        <ms-checkbox :widget=\"{indeterminate:false,checked:@isChecked(el),onChange:function(){handleCheck(el)}}\"></ms-checkbox>\n        {{el.label}}\n        <div :visible=\"@isExpended(el)\" :html=\"@renderSubTree(el)\"></div>\n    </li>\n</ul>"

/***/ }),
/* 263 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-upload-card\">\n    <div class=\"ane-upload-card-item\" :class=\"[(file.status === 'error' ? 'bordered-danger' : '')]\" :for=\"($index, file) in @fileList\">\n        <img :attr=\"{src:file.url,alt:file.name,title:file.name}\">\n        <span class=\"ane-upload-card-progress\" :visible=\"file.status === 'uploading'\">上传中 {{file.progress}}%</span>\n        <span class=\"ane-upload-card-tool\">\n            <i class=\"fa fa-eye\"></i>\n            <i class=\"fa fa-trash-o\" :click=\"del(file)\"></i>\n        </span>\n    </div>\n</div>"

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"ane-upload-list\">\n    <li :for=\"($index, file) in @fileList\"\n        :class=\"[@getTextClass(file)]\">\n        <div class=\"ane-upload-list-info\">\n            <i class=\"fa fa-file-o text-muted\"></i>\n            <span :attr=\"{title:file.name}\">{{file.name}}</span>\n        </div>\n        <i class=\"fa fa-times ane-upload-btn-close\" :click=\"del(file)\"></i>\n        <span class=\"ane-upload-list-progress\" :visible=\"file.status === 'uploading'\">上传中 {{file.progress}}%</span>\n        <i class=\"fa fa-check-circle text-success\" :class=\"[(file.status === 'done' ? '' : 'hide')]\"></i>\n    </li>\n</ul>"

/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-upload-container\">\n    <div class=\"ane-upload-card-wall\" :if=\"@showUploadList && @listType==='picture-card'\">\n        <ms-upload-card :widget=\"{fileList: @fileList, onRemove: @handleRemove}\"></ms-upload-card>\n    </div>\n    <label :visible=\"!@showUploadList && @listType==='picture-card' && @fileList.length > 0\" class=\"ane-upload-card-item\" :attr=\"{'for':@helpId}\">\n        <img :attr=\"{src:@fileList[0]?@fileList[0].url:blankImg,alt:@fileList[0]?@fileList[0].name:'',title:@fileList[0]?@fileList[0].name:''}\">\n    </label>\n    <label :visible=\"@showUploadList || @fileList.length == 0\" :class=\"[(@listType==='picture-card'?@cardClass:@btnClass)]\" :attr=\"{'for':@helpId}\"><slot /></label>\n    <form><input type=\"file\" name=\"file\" :attr=\"{id:@helpId}\"></form>\n    <div :if=\"@showUploadList && @listType!=='picture-card'\">\n        <ms-upload-list :widget=\"{fileList: @fileList, onRemove: @handleRemove}\"></ms-upload-list>\n    </div>\n</div>"

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(188);
__webpack_require__(189);
__webpack_require__(190);

__webpack_require__(186);
__webpack_require__(187);

var jQuery = __webpack_require__(14);
window.$ = window.jQuery = jQuery;
__webpack_require__(184);
var bootbox = __webpack_require__(41);
bootbox.setLocale('zh_CN');

var avalon = __webpack_require__(1);
avalon.config({
    debug: true
});
if (avalon.msie === 8) {
    Object.defineProperty = function (obj, property, meta) {
        obj[property] = meta.value;
    }
}
__webpack_require__(185);
__webpack_require__(192);
__webpack_require__(50);
__webpack_require__(191);

avalon.define({
    $id: 'root',
    currentPage: '',
    breadcrumb: []
});
avalon.history.start({
    fireAnchor: false
});
if (!/#!/.test(global.location.hash)) {
    avalon.router.navigate('/', 2);
}
avalon.scan(document.body);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */
/***/ (function(module, exports) {

module.exports = "<ms-menu :widget=\"{menu:@menu,openKeys:@openKeys,selectedKeys:@selectedKeys,onClick:@handleMenuClick,onOpenChange:@handleOpenChange}\"></ms-menu>"

/***/ }),
/* 343 */,
/* 344 */,
/* 345 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[266]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZm9ybS9tcy1jb250cm9sLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZm9ybS91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9hbmUtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWNoZWNrYm94L21zLWNoZWNrYm94LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdHJpZ2dlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXJhZGlvL21zLXJhZGlvLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtcGFnaW5hdGlvbi9tcy1wYWdpbmF0aW9uLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtc2VsZWN0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1jaGVja2JveC9tcy1jaGVja2JveC1ncm91cC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWxvYWRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1yYWRpby9tcy1yYWRpby1ncm91cC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci12aWV3LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbGF5b3V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2RvY3MvbmF2LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kb2NzL3N0b3Jlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9kb2NzL2NvbXBvbmVudHMvZG9jLXNpZGViYXIvZG9jLXNpZGViYXIudHMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1kYXRlcGlja2VyL21zLWRhdGVwaWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1mb3JtL2NyZWF0ZS1mb3JtLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZm9ybS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWlucHV0L21zLWlucHV0LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbWVudS9tcy1tZW51LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtc2VsZWN0L21zLXNlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRyZWUvbXMtdHJlZS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXVwbG9hZC9tcy11cGxvYWQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1sb2FkaW5nL21zLWxvYWRpbmcubGVzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWNhbGVuZGFyL21zLWNhbGVuZGFyLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZGlhbG9nL21zLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWZvcm0vbXMtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWxheW91dC9tcy1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1tZXNzYWdlL21zLW1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1ub3RpZmljYXRpb24vbXMtbm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdGFibGUvbXMtdGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy10ZXh0YXJlYS9tcy10ZXh0YXJlYS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWNhbGVuZGFyL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtY2FsZW5kYXIvbXMtY2FsZW5kYXIteWVhci12aWV3LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZGF0ZXBpY2tlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci1wYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWRpYWxvZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWZvcm0vbXMtZm9ybS1pdGVtLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtaW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1sb2FkaW5nL21zLWxvYWRpbmctZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbWVudS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLW1lc3NhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1ub3RpZmljYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1yYWRpby9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3Qtb3B0aW9uLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtc2VsZWN0L21zLXNlbGVjdC1wYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRhYmxlL21zLXRhYmxlLWhlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRleHRhcmVhL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci1wYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRyZWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy10cmlnZ2VyL21zLXRyaWdnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy11cGxvYWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1jYWxlbmRhci9tcy1jYWxlbmRhci5sZXNzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvbXMtY2hlY2tib3gubGVzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci5sZXNzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbGF5b3V0L21zLWxheW91dC5sZXNzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbWVudS9tcy1tZW51Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1yYWRpby9tcy1yYWRpby5sZXNzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtc2VsZWN0L21zLXNlbGVjdC5sZXNzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlci9tcy10aW1lcGlja2VyLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1jYWxlbmRhci9tcy1jYWxlbmRhci15ZWFyLXZpZXcuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWNhbGVuZGFyL21zLWNhbGVuZGFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1jaGVja2JveC9tcy1jaGVja2JveC1ncm91cC5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvbXMtY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci1wYW5lbC5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZGF0ZXBpY2tlci9tcy1kYXRlcGlja2VyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1mb3JtL21zLWZvcm0taXRlbS5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtaW5wdXQvbXMtaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLW1lbnUvbXMtbWVudS5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtcGFnaW5hdGlvbi9tcy1wYWdpbmF0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1yYWRpby9tcy1yYWRpby1ncm91cC5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtcmFkaW8vbXMtcmFkaW8uaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3QtcGFuZWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRhYmxlL21zLXRhYmxlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy10ZXh0YXJlYS9tcy10ZXh0YXJlYS5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlci9tcy10aW1lcGlja2VyLXZpZXcuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdHJlZS9tcy10cmVlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLWNhcmQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXVwbG9hZC9tcy11cGxvYWQtbGlzdC5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdXBsb2FkL21zLXVwbG9hZC5odG1sIiwid2VicGFjazovLy8uL2RvY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9jb21wb25lbnRzL2RvYy1zaWRlYmFyL2RvYy1zaWRlYmFyLmh0bWwiLCJ3ZWJwYWNrOi8vL3ZlcnR4IChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7QUNWQSxvQ0FBa0M7QUFHbEMscUJBQWUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7SUFDMUMsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFO1FBQ04sU0FBUyxFQUFFLElBQUk7UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxFQUFFO1FBQ1QsR0FBRyxFQUFFLEVBQUU7UUFDUCxXQUFXLEVBQUUsRUFBRTtRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1FBQ3JCLFNBQVMsWUFBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztnQkFDMUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLFlBQVk7YUFDekQsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELFlB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dU8sK0RBQStELGlCQUFpQiw2QkFBNkIsVUFBVSxrRzs7Ozs7O0FDQTlWLHdOQUF3TiwyQ0FBMkMscUdBQXFHLGVBQWUsd007Ozs7OztBQ0F2WCwyUUFBMlEsZ0JBQWdCLEtBQUssV0FBVywwTUFBME0sZUFBZSwwSTs7Ozs7O0FDQXBnQiwyTEFBMkwsNkNBQTZDLHlLQUF5SyxjQUFjLDJCQUEyQix5SEFBeUgsNEpBQTRKLGNBQWMsMkVBQTJFLFdBQVcsZ0hBQWdILDZDQUE2Qyx5Qzs7Ozs7OzhDQ0FoOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0Esc0NBQXNDLGlIQUFpSCxjOzs7Ozs7OztBQ0F2SixlIiwiZmlsZSI6ImFwcDIyZTk3NmFlZTFjZDc4NGYwMjY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaW5kZXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiaW5kZXhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IHsgZmluZFBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2FuZS11dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgYXZhbG9uLmNvbXBvbmVudCgnbXMtY29udHJvbCcsIHtcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgJGZvcm1JdGVtOiBudWxsLFxuICAgICAgICAkcnVsZXM6IG51bGwsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgY29sOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICB3aWR0aDogJ3gnLFxuICAgICAgICBvbkNoYW5nZTogYXZhbG9uLm5vb3AsXG4gICAgICAgIGVtaXRWYWx1ZShlKSB7XG4gICAgICAgICAgICBsZXQgdiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy4kZm9ybUl0ZW0gJiYgdGhpcy4kZm9ybUl0ZW0ub25Gb3JtQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmNvbCwgdmFsdWU6IHYsIGRlbnlWYWxpZGF0ZTogZS5kZW55VmFsaWRhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0VmFsdWUoZSk7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1mb3JtL21zLWNvbnRyb2wudHMiLCJpbXBvcnQgeyBmaW5kUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdFRvRm9ybUl0ZW0odm1vZGVsLCBvcHRpb25zID0ge30pOiB2b2lkIHtcbiAgICB2bW9kZWwuJGZvcm1JdGVtID0gZmluZFBhcmVudENvbXBvbmVudCh2bW9kZWwsICdtcy1mb3JtLWl0ZW0nKTtcbiAgICBpZiAodm1vZGVsLiRmb3JtSXRlbSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZtb2RlbC4kZm9ybUl0ZW0ub25GaWVsZENoYW5nZSh7XG4gICAgICAgIG5hbWU6IHZtb2RlbC5jb2wsXG4gICAgICAgIHJ1bGVzOiB2bW9kZWwuJHJ1bGVzLFxuICAgICAgICB2YWx1ZTogdm1vZGVsLnZhbHVlLFxuICAgICAgICBkZW55VmFsaWRhdGU6IHRydWUsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWZvcm0vdXRpbHMudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFyZW50Q29tcG9uZW50KHZtLCBjdHlwZSkge1xuICAgIGxldCBwYXJlbnQgPSB2bS4kZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudC5fdm1fICYmICghY3R5cGUgfHwgcGFyZW50Ll9jdHlwZV8gPT09IGN0eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5fdm1fO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2xvdFRvVk1vZGVsKHZtb2RlbCwgdm5vZGVzPzogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodm5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdm5vZGVzID0gdm1vZGVsLiRyZW5kZXIucm9vdCA/IHZtb2RlbC4kcmVuZGVyLnJvb3QuY2hpbGRyZW4gOiBbXTtcbiAgICB9XG4gICAgdm5vZGVzLmZvckVhY2godm5vZGUgPT4ge1xuICAgICAgICBpZiAoIXZub2RlIHx8ICF2bm9kZS5ub2RlTmFtZSB8fCB2bm9kZS5kb20ubm9kZVR5cGUgIT09IDEpIHJldHVybiB0cnVlO1xuICAgICAgICBsZXQgc2xvdE5hbWUgPSB2bm9kZS5kb20uZ2V0QXR0cmlidXRlKCdzbG90Jyk7XG4gICAgICAgIGlmIChzbG90TmFtZSkge1xuICAgICAgICAgICAgZGVsZXRlIHZub2RlLnByb3BzWyc6c2tpcCddO1xuICAgICAgICAgICAgZGVsZXRlIHZub2RlLnByb3BzWydtcy1za2lwJ107XG4gICAgICAgICAgICB2bW9kZWxbc2xvdE5hbWVdID0gYXZhbG9uLnZkb20odm5vZGUsICd0b0hUTUwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlU2xvdFRvVk1vZGVsKHZtb2RlbCwgdm5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZFRlbXBsYXRlRGVzY3JpcHRvcih2bW9kZWwsIHJlbmRlciA9IHZtb2RlbC4kcmVuZGVyKTogYW55W10ge1xuICAgIGlmIChyZW5kZXIuZGlyZWN0aXZlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlbmRlci5kaXJlY3RpdmVzLnJlZHVjZSgoYWNjLCBhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbi5pcykge1xuICAgICAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgICAgIGlzOiBhY3Rpb24uaXMsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGFjdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICBpbmxpbmVUZW1wbGF0ZTogYWN0aW9uLmZyYWdtZW50LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBnZXRDaGlsZFRlbXBsYXRlRGVzY3JpcHRvcih2bW9kZWwsIGFjdGlvbi5pbm5lclJlbmRlciB8fCB7IGRpcmVjdGl2ZXM6IFtdIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQ6IG51bWJlciA9IDMwMCwgaW1tZWRpYXRlOiBib29sZWFuID0gZmFsc2UpIHtcblx0bGV0IHRpbWVvdXQ7XG5cdHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG5cdFx0bGV0IGNvbnRleHQgPSB0aGlzO1xuXHRcdGxldCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHR9O1xuXHRcdGxldCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYW5lLXV0aWwudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgeyBwYXJzZVNsb3RUb1ZNb2RlbCB9IGZyb20gJy4uLy4uL2FuZS11dGlsJztcblxuaWYgKGF2YWxvbi5tc2llIDw9IDgpIHtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudDtcbiAgICBjb25zdCBoZWFkID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgY29uc3Qgc3R5bGU6IGFueSA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGNzc1N0ciA9IGBcbiAgICAgICAgLmFuZS1jaGVja2JveC1pbm5lci1pZSBpbnB1dCB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5hbmUtY2hlY2tib3gtaW5uZXItaWUgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICBgO1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuXG4gICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzU3RyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZShjc3NTdHIpKTtcbiAgICB9XG5cbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtY2hlY2tib3gnLCB7XG4gICAgc29sZVNsb3Q6ICdsYWJlbCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtY2hlY2tib3guaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHdyYXBwZXI6ICdjaGVja2JveCcsXG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIGluZGV0ZXJtaW5hdGU6IGZhbHNlLFxuICAgICAgICBncm91cDogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgb25DaGFuZ2U6IGF2YWxvbi5ub29wLFxuICAgICAgICBmbHVzaDogYXZhbG9uLm5vb3AsXG4gICAgICAgIGhlbHBJZDogJycsXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5oZWxwSWQgPSB0aGlzLiRpZDtcbiAgICAgICAgICAgIC8vIC8vIGlubGluZeWcqElFOOS4i+aYvuekuuaciemXrumimO+8jOW+heino+WGs1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaW5saW5lICE9IHZvaWQgMCkge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMud3JhcHBlciA9ICdjaGVja2JveC1pbmxpbmUnO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9LFxuICAgICAgICBvblJlYWR5KGV2ZW50KSB7XG4gICAgICAgICAgICBwYXJzZVNsb3RUb1ZNb2RlbCh0aGlzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EaXNwb3NlKHZtLCBlbCkge1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1jaGVja2JveC9tcy1jaGVja2JveC50cyIsImltcG9ydCAnLi9tcy10cmlnZ2VyJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXRyaWdnZXIvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgeyBwYXJzZVNsb3RUb1ZNb2RlbCB9IGZyb20gJy4uLy4uL2FuZS11dGlsJztcblxuaWYgKGF2YWxvbi5tc2llIDw9IDgpIHtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudDtcbiAgICBjb25zdCBoZWFkID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgY29uc3Qgc3R5bGU6IGFueSA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGNzc1N0ciA9IGBcbiAgICAgICAgLmFuZS1yYWRpby1pbm5lci1pZSBpbnB1dCB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5hbmUtcmFkaW8taW5uZXItaWUgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICBgO1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuXG4gICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzU3RyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZShjc3NTdHIpKTtcbiAgICB9XG5cbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtcmFkaW8nLCB7XG4gICAgc29sZVNsb3Q6ICdsYWJlbCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtcmFkaW8uaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHdyYXBwZXI6ICdyYWRpbycsXG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgY2hlY2tlZDogJycsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGdyb3VwOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBvbkNoYW5nZTogYXZhbG9uLm5vb3AsXG4gICAgICAgIGhlbHBJZDogJycsXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5oZWxwSWQgPSB0aGlzLiRpZDtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICAgICAgcGFyc2VTbG90VG9WTW9kZWwodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRGlzcG9zZSh2bSwgZWwpIHtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtcmFkaW8vbXMtcmFkaW8udHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbi8qKlxuICog5YiG6aG157uE5Lu2XG4gKiBAcHJvcCB7TnVtYmVyfSBbY3VycmVudD0xXSDlvZPliY3pobVcbiAqIEBwcm9wIHtOdW1iZXJ9IFtwYWdlU2l6ZT0xMF0g5q+P6aG155qE5pWw5o2u6YePXG4gKiBAcHJvcCB7TnVtYmVyfSB0b3RhbCDmlbDmja7mgLvph49cbiAqIEBldmVudCB7RnVuY3Rpb259IG9uQ2hhbmdlIOW9k+mhteeggeaUueWPmOaXtuinpuWPke+8jOWPguaVsGN1cnJlbnRcbiAqIFxuICogQGV4YW1wbGVcbiAqIGBgYFxuICogPG1zLXBhZ2luYXRpb24gOndpZGdldD1cInt0b3RhbDoxMDAsb25DaGFuZ2U6QGhhbmRsZVBhZ2VDaGFuZ2V9XCI+PC9tcy1wYWdpbmF0aW9uPlxuICogXG4gKiA8bXMtcGFnaW5hdGlvbiA6d2lkZ2V0PVwie2N1cnJlbnQ6QGN1cnJlbnRQYWdlLHBhZ2VTaXplOkBwYWdlU2l6ZSx0b3RhbDpAdG90YWwsb25DaGFuZ2U6QGhhbmRsZVBhZ2VDaGFuZ2V9XCI+PC9tcy1wYWdpbmF0aW9uPlxuICogYGBgXG4gKi9cbmF2YWxvbi5jb21wb25lbnQoJ21zLXBhZ2luYXRpb24nLCB7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtcGFnaW5hdGlvbi5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgY3VycmVudDogMSxcbiAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgcHJldlBhZ2UoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoLS10aGlzLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBuZXh0UGFnZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPCBNYXRoLmNlaWwodGhpcy50b3RhbC90aGlzLnBhZ2VTaXplKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoKyt0aGlzLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZTogYXZhbG9uLm5vb3AsXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICB9LFxuICAgICAgICBvblJlYWR5KGV2ZW50KSB7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRGlzcG9zZShldmVudCkge1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1wYWdpbmF0aW9uL21zLXBhZ2luYXRpb24udHMiLCJpbXBvcnQgJy4vbXMtc2VsZWN0JztcbmltcG9ydCAnLi9tcy1zZWxlY3Qtb3B0aW9uJ1xuaW1wb3J0ICcuL21zLXNlbGVjdC5sZXNzJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXNlbGVjdC9pbmRleC50cyIsImltcG9ydCAnLi9tcy1jaGVja2JveCc7XG5pbXBvcnQgJy4vbXMtY2hlY2tib3gtZ3JvdXAnO1xuaW1wb3J0ICcuL21zLWNoZWNrYm94Lmxlc3MnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgY29udHJvbENvbXBvbmVudCBmcm9tICcuLi9tcy1mb3JtL21zLWNvbnRyb2wnO1xuaW1wb3J0IHsgZW1pdFRvRm9ybUl0ZW0gfSBmcm9tICcuLi9tcy1mb3JtL3V0aWxzJztcbmltcG9ydCB7IGZpbmRQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5pbXBvcnQgJy4vbXMtY2hlY2tib3gnO1xuXG5jb250cm9sQ29tcG9uZW50LmV4dGVuZCh7XG4gICAgZGlzcGxheU5hbWU6ICdtcy1jaGVja2JveC1ncm91cCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtY2hlY2tib3gtZ3JvdXAuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgICAgc2VsZWN0aW9uOiBbXSxcbiAgICAgICAgdG9nZ2xlT3B0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSW5kZXggPSB0aGlzLnNlbGVjdGlvbi5pbmRleE9mKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICBpZiAob3B0aW9uSW5kZXggPT09IC0xICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucmVtb3ZlKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB0aGlzLnNlbGVjdGlvbi50b0pTT04oKSB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveC1ncm91cCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBtYXBWYWx1ZVRvU2VsZWN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMub3B0aW9ucy5maWx0ZXIobyA9PiB2YWx1ZS5jb250YWlucyhvLnZhbHVlKSkubWFwKG8gPT4gby52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICAgICAgZW1pdFRvRm9ybUl0ZW0odGhpcyk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgndmFsdWUnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9TZWxlY3Rpb24odik7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHYudG9KU09OKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVueVZhbGlkYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gtZ3JvdXAnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb1NlbGVjdGlvbih0aGlzLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICAgICAgLy92bS5lbEhpZGRlbklucHV0ID0gJChlbCkuZmluZCgnaW5wdXQ6aGlkZGVuJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRGlzcG9zZShldmVudCkge1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1jaGVja2JveC9tcy1jaGVja2JveC1ncm91cC50cyIsImV4cG9ydCB7IExvYWRpbmcgfSBmcm9tICAnLi9tcy1sb2FkaW5nLWRpcmVjdGl2ZSc7XG5pbXBvcnQgJy4vbXMtbG9hZGluZy5sZXNzJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWxvYWRpbmcvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgY29udHJvbENvbXBvbmVudCBmcm9tICcuLi9tcy1mb3JtL21zLWNvbnRyb2wnO1xuaW1wb3J0IHsgZW1pdFRvRm9ybUl0ZW0gfSBmcm9tICcuLi9tcy1mb3JtL3V0aWxzJztcbmltcG9ydCB7IGZpbmRQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5pbXBvcnQgJy4vbXMtcmFkaW8nO1xuXG5jb250cm9sQ29tcG9uZW50LmV4dGVuZCh7XG4gICAgZGlzcGxheU5hbWU6ICdtcy1yYWRpby1ncm91cCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtcmFkaW8tZ3JvdXAuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgICAgc2VsZWN0ZWQ6ICcnLFxuICAgICAgICB0b2dnbGVPcHRpb24oZSwgb3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdGhpcy5zZWxlY3RlZCB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpby1ncm91cCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBoZWxwSWQ6ICcnLFxuICAgICAgICBtYXBWYWx1ZVRvU2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBJZCA9IHRoaXMuJGlkO1xuICAgICAgICAgICAgZW1pdFRvRm9ybUl0ZW0odGhpcyk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgndmFsdWUnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9TZWxlY3RlZCh2KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdiB9LFxuICAgICAgICAgICAgICAgICAgICBkZW55VmFsaWRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpby1ncm91cCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvU2VsZWN0ZWQodGhpcy52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgfSxcbiAgICAgICAgb25EaXNwb3NlKGV2ZW50KSB7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXJhZGlvL21zLXJhZGlvLWdyb3VwLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IE9QVElPTl9IRUlHSFQgPSAyNDtcblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtdGltZXBpY2tlci12aWV3Jywge1xuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXRpbWVwaWNrZXItdmlldy5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBjdXJyZW50SG91cjogMCxcbiAgICAgICAgY3VycmVudE1pbnV0ZTogMCxcbiAgICAgICAgY3VycmVudFNlY29uZDogMCxcbiAgICAgICAgaG91ck9wdGlvbnM6IGF2YWxvbi5yYW5nZSgyNCkubWFwKG4gPT4gKCcwJyArIG4pLnN1YnN0cigtMikpLFxuICAgICAgICBtaW51dGVPcHRpb25zOiBhdmFsb24ucmFuZ2UoNjApLm1hcChuID0+ICgnMCcgKyBuKS5zdWJzdHIoLTIpKSxcbiAgICAgICAgc2Vjb25kT3B0aW9uczogYXZhbG9uLnJhbmdlKDYwKS5tYXAobiA9PiAoJzAnICsgbikuc3Vic3RyKC0yKSksXG4gICAgICAgIG9uQ2hhbmdlOiBhdmFsb24ubm9vcCxcbiAgICAgICAgc2VsZWN0KGVsLCB0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmUtdGltZXBpY2tlci12aWV3LXNlbGVjdFtuYW1lPScgKyB0eXBlICsgJy1vcHRpb25zXScpLnNjcm9sbFRvcCA9IGVsICogMjQ7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2hvdXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SG91ciA9IGVsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbWludXRlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1pbnV0ZSA9IGVsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWNvbmQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICBob3VyOiB0aGlzLmN1cnJlbnRIb3VyLFxuICAgICAgICAgICAgICAgICAgICBtaW51dGU6IHRoaXMuY3VycmVudE1pbnV0ZSxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kOiB0aGlzLmN1cnJlbnRTZWNvbmQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGltZXBpY2tlci12aWV3LWNoYW5nZWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KCkge1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3ZhbHVlJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbSA9IG1vbWVudCh2LnNwbGl0KCcsJykpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhvdXIgPSBtLmhvdXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNaW51dGUgPSBtLm1pbnV0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNlY29uZCA9IG0uc2Vjb25kKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmUtdGltZXBpY2tlci12aWV3LXNlbGVjdFtuYW1lPWhvdXItb3B0aW9uc10nKS5zY3JvbGxUb3AgPSB0aGlzLmN1cnJlbnRIb3VyICogT1BUSU9OX0hFSUdIVDtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmUtdGltZXBpY2tlci12aWV3LXNlbGVjdFtuYW1lPW1pbnV0ZS1vcHRpb25zXScpLnNjcm9sbFRvcCA9IHRoaXMuY3VycmVudE1pbnV0ZSAqIE9QVElPTl9IRUlHSFQ7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW5lLXRpbWVwaWNrZXItdmlldy1zZWxlY3RbbmFtZT1zZWNvbmQtb3B0aW9uc10nKS5zY3JvbGxUb3AgPSB0aGlzLmN1cnJlbnRTZWNvbmQgKiBPUFRJT05fSEVJR0hUO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRmaXJlKCd2YWx1ZScsIHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy10aW1lcGlja2VyL21zLXRpbWVwaWNrZXItdmlldy50cyIsImltcG9ydCAnLi9tcy1sYXlvdXQubGVzcyc7XG5pbXBvcnQgJy4vbXMtbGF5b3V0JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWxheW91dC9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gW3tcbiAgICBrZXk6ICdjb21wb25lbnRzJyxcbiAgICB0aXRsZTogJ+e7hOS7ticsXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLWlucHV0LWlucHV0JyxcbiAgICAgICAgdGl0bGU6ICdpbnB1dCDovpPlhaXmoYYnLFxuICAgICAgICB1cmk6ICcvaW5wdXQnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLWlucHV0L21zLWlucHV0Lm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tdGV4dGFyZWEtdGV4dGFyZWEnLFxuICAgICAgICB0aXRsZTogJ3RleHRhcmVhIOWkmuihjOi+k+WFpeahhicsXG4gICAgICAgIHVyaTogJy90ZXh0YXJlYScsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtdGV4dGFyZWEvbXMtdGV4dGFyZWEubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1zZWxlY3Qtc2VsZWN0JyxcbiAgICAgICAgdGl0bGU6ICdzZWxlY3Qg6YCJ5oup5qGGJyxcbiAgICAgICAgdXJpOiAnL3NlbGVjdCcsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtc2VsZWN0L21zLXNlbGVjdC5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLXJhZGlvLXJhZGlvJyxcbiAgICAgICAgdGl0bGU6ICdyYWRpbyDljZXpgInmoYYnLFxuICAgICAgICB1cmk6ICcvcmFkaW8nLFxuICAgICAgICBsb2NhdGlvbjogJ21zLXJhZGlvL21zLXJhZGlvLm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tY2hlY2tib3gtY2hlY2tib3gnLFxuICAgICAgICB0aXRsZTogJ2NoZWNrYm94IOWkmumAieahhicsXG4gICAgICAgIHVyaTogJy9jaGVja2JveCcsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtY2hlY2tib3gvbXMtY2hlY2tib3gubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1kYXRlcGlja2VyLWRhdGVwaWNrZXInLFxuICAgICAgICB0aXRsZTogJ2RhdGVwaWNrZXIg5pel5pyf6YCJ5oup5ZmoJyxcbiAgICAgICAgdXJpOiAnL2RhdGVwaWNrZXInLFxuICAgICAgICBsb2NhdGlvbjogJ21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLXRpbWVwaWNrZXItdGltZXBpY2tlcicsXG4gICAgICAgIHRpdGxlOiAndGltZXBpY2tlciDml7bpl7TpgInmi6nlmagnLFxuICAgICAgICB1cmk6ICcvdGltZXBpY2tlcicsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtdGltZXBpY2tlci9tcy10aW1lcGlja2VyLm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tdXBsb2FkLXVwbG9hZCcsXG4gICAgICAgIHRpdGxlOiAndXBsb2FkIOaWh+S7tuS4iuS8oCcsXG4gICAgICAgIHVyaTogJy91cGxvYWQnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLXVwbG9hZC9tcy11cGxvYWQubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1mb3JtLWNvbnRyb2wnLFxuICAgICAgICB0aXRsZTogJ2Zvcm0tY29udHJvbCDooajljZXmjqfku7YnLFxuICAgICAgICB1cmk6ICcvZm9ybS1jb250cm9sJyxcbiAgICAgICAgbG9jYXRpb246ICdtcy1mb3JtL21zLWNvbnRyb2wubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1mb3JtLWZvcm0nLFxuICAgICAgICB0aXRsZTogJ2Zvcm0g6KGo5Y2VJyxcbiAgICAgICAgdXJpOiAnL2Zvcm0nLFxuICAgICAgICBsb2NhdGlvbjogJ21zLWZvcm0vbXMtZm9ybS5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLW1lbnUtbWVudScsXG4gICAgICAgIHRpdGxlOiAnbWVudSDoj5zljZUnLFxuICAgICAgICB1cmk6ICcvbWVudScsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtbWVudS9tcy1tZW51Lm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tdGFibGUtdGFibGUnLFxuICAgICAgICB0aXRsZTogJ3RhYmxlIOaVsOaNruihqOagvCcsXG4gICAgICAgIHVyaTogJy90YWJsZScsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtdGFibGUvbXMtdGFibGUubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1wYWdpbmF0aW9uLXBhZ2luYXRpb24nLFxuICAgICAgICB0aXRsZTogJ3BhZ2luYXRpb24g5YiG6aG1JyxcbiAgICAgICAgdXJpOiAnL3BhZ2luYXRpb24nLFxuICAgICAgICBsb2NhdGlvbjogJ21zLXBhZ2luYXRpb24vbXMtcGFnaW5hdGlvbi5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLXRyZWUtdHJlZScsXG4gICAgICAgIHRpdGxlOiAndHJlZSDmoJEnLFxuICAgICAgICB1cmk6ICcvdHJlZScsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtdHJlZS9tcy10cmVlLm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tZGlhbG9nLWRpYWxvZycsXG4gICAgICAgIHRpdGxlOiAnZGlhbG9nIOWvueivneahhicsXG4gICAgICAgIHVyaTogJy9kaWFsb2cnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLWRpYWxvZy9tcy1kaWFsb2cubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1sb2FkaW5nLWxvYWRpbmcnLFxuICAgICAgICB0aXRsZTogJ2xvYWRpbmcg5Yqg6L295Lit6JKZ54mIJyxcbiAgICAgICAgdXJpOiAnL2xvYWRpbmcnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLWxvYWRpbmcvbXMtbG9hZGluZy5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLW1lc3NhZ2UtbWVzc2FnZScsXG4gICAgICAgIHRpdGxlOiAnbWVzc2FnZSDlhajlsYDmj5DnpLonLFxuICAgICAgICB1cmk6ICcvbWVzc2FnZScsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtbWVzc2FnZS9tcy1tZXNzYWdlLm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tbm90aWZpY2F0aW9uLW5vdGlmaWNhdGlvbicsXG4gICAgICAgIHRpdGxlOiAnbm90aWZpY2F0aW9uIOmAmuefpeaPkOmGkuahhicsXG4gICAgICAgIHVyaTogJy9ub3RpZmljYXRpb24nLFxuICAgICAgICBsb2NhdGlvbjogJ21zLW5vdGlmaWNhdGlvbi9tcy1ub3RpZmljYXRpb24ubWQnXG4gICAgfV1cbn1dO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZG9jcy9uYXYuY29uZmlnLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnQgY29uc3QgbWVudSA9IHtcbiAgICBzZWxlY3RlZEtleXMkOiBPYnNlcnZhYmxlKCksXG4gICAgb3BlbktleXMkOiBPYnNlcnZhYmxlKClcbn07XG5cbmZ1bmN0aW9uIE9ic2VydmFibGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb25OZXh0Q2JMaXN0OiBbXSxcbiAgICAgICAgc3Vic2NyaWJlKG9uTmV4dCkge1xuICAgICAgICAgICAgdGhpcy5vbk5leHRDYkxpc3QucHVzaChvbk5leHQpO1xuICAgICAgICB9LFxuICAgICAgICBvbk5leHQodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMub25OZXh0Q2JMaXN0LmZvckVhY2goY2IgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzL3N0b3Jlcy9pbmRleC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcblxuaW1wb3J0ICogYXMgbmF2Q29uZmlnIGZyb20gJy4uLy4uL25hdi5jb25maWcuanMnO1xuaW1wb3J0ICdhbmUnO1xuaW1wb3J0IHsgbWVudSBhcyBtZW51U3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZXMnO1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdkb2Mtc2lkZWJhcic7XG5cbmF2YWxvbi5jb21wb25lbnQobmFtZSwge1xuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2RvYy1zaWRlYmFyLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBtZW51OiBbXSxcbiAgICAgICAgc2VsZWN0ZWRLZXlzOiBbXSxcbiAgICAgICAgb3BlbktleXM6IFsnY29tcG9uZW50cyddLFxuICAgICAgICBoYW5kbGVNZW51Q2xpY2soaXRlbSwga2V5LCBrZXlQYXRoKSB7XG4gICAgICAgICAgICBhdmFsb24uaGlzdG9yeS5zZXRIYXNoKGl0ZW0udXJpKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlT3BlbkNoYW5nZShvcGVuS2V5cykge1xuICAgICAgICAgICAgdGhpcy5vcGVuS2V5cyA9IG9wZW5LZXlzLnNsaWNlKC0xKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1lbnUgPSBuYXZDb25maWc7XG4gICAgICAgICAgICBtZW51U3RvcmUuc2VsZWN0ZWRLZXlzJC5zdWJzY3JpYmUodiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEtleXMgPSB2O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzL2NvbXBvbmVudHMvZG9jLXNpZGViYXIvZG9jLXNpZGViYXIudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgJ21tUm91dGVyJztcbmltcG9ydCB7IG1lbnUgYXMgbWVudVN0b3JlIH0gZnJvbSAnLi9zdG9yZXMnO1xuaW1wb3J0ICogYXMgbmF2Q29uZmlnIGZyb20gJy4vbmF2LmNvbmZpZy5qcyc7XG5cbmZ1bmN0aW9uIGdldFBhZ2UoY29tcG9uZW50KSB7XG4gICAgY29uc3QgaHRtbCA9IGA8eG1wIGlzPVwiJHtjb21wb25lbnR9XCIgOndpZGdldD1cIntpZDonJHtjb21wb25lbnQucmVwbGFjZSgvXFwtL2csICdfJyl9J31cIj48L3htcD5gO1xuICAgIHJldHVybiBodG1sXG59XG5cbmZ1bmN0aW9uIGFwcGx5Um91dGVDb25maWcoY29uZmlnLCBwYXJlbnRSb3V0ZSwgYWNjUGF0aCA9ICcnKSB7XG4gICAgY29uZmlnLm1hcChmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudHM6YW55ID0ge307XG4gICAgICAgIGlmIChyb3V0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuY3VycmVudFBhZ2UgPSByb3V0ZS5jb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMgPSByb3V0ZS5jb21wb25lbnRzO1xuICAgICAgICB9XG4gICAgICAgIGF2YWxvbi5yb3V0ZXIuYWRkKGFjY1BhdGggKyByb3V0ZS5wYXRoLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wb25lbnRzKS5tYXAodmlld05hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW3ZpZXdOYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVTdG9yZS5zZWxlY3RlZEtleXMkLm9uTmV4dChbbS5uYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdmFsb24udm1vZGVsc1twYXJlbnRSb3V0ZS5uYW1lXVt2aWV3TmFtZV0gPSBnZXRQYWdlKG0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF2YWxvbi52bW9kZWxzW3BhcmVudFJvdXRlLm5hbWVdW3ZpZXdOYW1lXSA9IGdldFBhZ2UoY29tcG9uZW50Lm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVE9ETyDmlK/mjIHltYzlpZfot6/nlLFcbiAgICAgICAgLy9yb3V0ZS5jaGlsZHJlbiAmJiBhcHBseVJvdXRlQ29uZmlnKHJvdXRlLmNoaWxkcmVuLCByb3V0ZSwgYWNjUGF0aCArIHJvdXRlLnBhdGgpO1xuICAgIH0pO1xufVxuXG5jb25zdCByb3V0ZUNvbmZpZyA9IFtdO1xuY29uc3QgdHJhdmVsID0gaXRlbSA9PiB7XG4gICAgaWYgKCFpdGVtLmNoaWxkcmVuIHx8IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJvdXRlQ29uZmlnLnB1c2goe1xuICAgICAgICAgICAgcGF0aDogaXRlbS51cmksXG4gICAgICAgICAgICBjb21wb25lbnQocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWlyZSgnLi4vY29tcG9uZW50cy8nICsgaXRlbS5sb2NhdGlvbikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNoaWxkcmVuLm1hcCh0cmF2ZWwpO1xuICAgIH1cbn07XG5uYXZDb25maWcubWFwKHRyYXZlbCk7XG5cbmFwcGx5Um91dGVDb25maWcocm91dGVDb25maWcsIHtcbiAgICBuYW1lOiAncm9vdCdcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RvY3Mvcm91dGVyLnRzIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvbXMtbWVudSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy10YWJsZS9tcy10YWJsZSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1wYWdpbmF0aW9uL21zLXBhZ2luYXRpb24nO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbXMtZGlhbG9nJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21zLWZvcm0nO1xuZXhwb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vY29tcG9uZW50cy9tcy1mb3JtL2NyZWF0ZS1mb3JtJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21zLWlucHV0JztcbmltcG9ydCAnLi9jb21wb25lbnRzL21zLXRleHRhcmVhJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21zLXNlbGVjdCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy11cGxvYWQnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbXMtZGF0ZXBpY2tlcic7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy10aW1lcGlja2VyJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21zLWNoZWNrYm94JztcbmltcG9ydCAnLi9jb21wb25lbnRzL21zLWNoZWNrYm94L21zLWNoZWNrYm94LWdyb3VwJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21zLXJhZGlvJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21zLXJhZGlvL21zLXJhZGlvLWdyb3VwJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21zLXRyZWUnXG5cbmV4cG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL2NvbXBvbmVudHMvbXMtbG9hZGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdGlmaWNhdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9tcy1ub3RpZmljYXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlIH0gZnJvbSAnLi9jb21wb25lbnRzL21zLW1lc3NhZ2UnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IGNvbnRyb2xDb21wb25lbnQgZnJvbSAnLi4vbXMtZm9ybS9tcy1jb250cm9sJztcbmltcG9ydCAnLi4vbXMtdHJpZ2dlcic7XG5pbXBvcnQgJy4uL21zLWNhbGVuZGFyJztcbmltcG9ydCAnLi4vbXMtdGltZXBpY2tlci9tcy10aW1lcGlja2VyLXZpZXcnXG5pbXBvcnQgZ2V0UGFuZWxWbSBmcm9tICcuL21zLWRhdGVwaWNrZXItcGFuZWwnO1xuaW1wb3J0IHsgZW1pdFRvRm9ybUl0ZW0gfSBmcm9tICcuLi9tcy1mb3JtL3V0aWxzJztcblxuLyoqXG4gKiDml6XmnJ/pgInmi6nnu4Tku7ZcbiAqIEBwcm9wIHZhbHVlIOe7hOS7tuWAvChpbmhlcml0KVxuICogQHByb3AgY29sIOWtl+autei3r+W+hChpbmhlcml0KVxuICogQHByb3AgZm9ybWF0IOaXpeacn+agvOW8j++8jOWPguiAgyBtb21lbnRqc++8jOm7mOiupOS4uiBZWVlZLU1NLUREXG4gKiBAcHJvcCBzdGFydERhdGUg5o6n5Yi25Y+v5bey6YCJ5oup55qE5pe26Ze055qE5byA5aeL5pel5pyf77yM5pel5pyf5a2X56ym5Liy77yM5qC85byP5LiOIGZvcm1hdCDlj4LmlbDljLnphY3vvIzorr7nva7mraTpobnoh6rliqjlv73nlaUgZGlzYWJsZWREYXRlXG4gKiBAcHJvcCBlbmREYXRlIOaOp+WItuWPr+W3sumAieaLqeeahOaXtumXtOeahOe7k+adn+aXpeacn++8jOaXpeacn+Wtl+espuS4su+8jOagvOW8j+S4jiBmb3JtYXQg5Y+C5pWw5Yy56YWN77yM6K6+572u5q2k6aG56Ieq5Yqo5b+955WlIGRpc2FibGVkRGF0ZVxuICogQHByb3AgZGlzYWJsZWREYXRlIOS4jeWPr+mAieaLqeaXpeacn+eahOWIpOaWreWHveaVsO+8jOS8oOWFpSBjdXJyZW5077yI5b2T5YmN6YGN5Y6G5pel5pyf77yJ77yM6L+U5ZueIHRydWUg6KGo56S65q2k5pel5pyf5LiN5Y+v6YCJXG4gKiBAcHJvcCBzaG93VGltZSDmmK/lkKbmmL7npLrml7bpl7TpgInmi6nvvIzlpoLmnpzmraTpobnkuLogdHJ1Ze+8jOWImSBmb3JtYXQg6buY6K6k5Li6IFlZWVktTU0tREQgSEg6bW06c3NcbiAqIFxuICogQGV4YW1wbGVcbiAqIGBgYCBodG1sXG4gKiBcbiAqIGBgYFxuICovXG5jb250cm9sQ29tcG9uZW50LmV4dGVuZCh7XG4gICAgZGlzcGxheU5hbWU6ICdtcy1kYXRlcGlja2VyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy1kYXRlcGlja2VyLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBzZWxlY3RlZDogJycsXG4gICAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQnLFxuICAgICAgICBzdGFydERhdGU6ICcnLFxuICAgICAgICBlbmREYXRlOiAnJyxcbiAgICAgICAgZGlzYWJsZWREYXRlKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgIHNob3dUaW1lOiBmYWxzZSxcbiAgICAgICAgY2xlYXIoKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gJyc7XG4gICAgICAgICAgICBhdmFsb24udm1vZGVsc1t0aGlzLnBhbmVsVm1JZF0ucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6ICcnIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ2RhdGVwaWNrZXItY2hhbmdlZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB3aXRoSW5Cb3goZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50ID09PSBlbCB8fCBhdmFsb24uY29udGFpbnModGhpcy4kZWxlbWVudCwgZWwpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRUYXJnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhbmVsVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGF2YWxvbi52bW9kZWxzW3RoaXMucGFuZWxWbUlkXS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwYW5lbFZtSWQ6ICcnLFxuICAgICAgICBwYW5lbFZpc2libGU6IGZhbHNlLFxuICAgICAgICBwYW5lbENsYXNzOiAnYW5lLWRhdGVwaWNrZXItcGFuZWwtY29udGFpbmVyJyxcbiAgICAgICAgcGFuZWxUZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy1kYXRlcGlja2VyLXBhbmVsLmh0bWwnKSxcbiAgICAgICAgaGFuZGxlUGFuZWxIaWRlKCkge1xuICAgICAgICAgICAgdGhpcy5wYW5lbFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICBtYXBWYWx1ZVRvU2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgZW1pdFRvRm9ybUl0ZW0odGhpcywge1xuICAgICAgICAgICAgICAgIHNob3dJY29uOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgndmFsdWUnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9TZWxlY3RlZCh2KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdiB9LFxuICAgICAgICAgICAgICAgICAgICBkZW55VmFsaWRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRlcGlja2VyLWNoYW5nZWQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dUaW1lICYmIHRoaXMuZm9ybWF0ID09PSAnWVlZWS1NTS1ERCcpIHtcbiAgICAgICAgICAgICAgICAvLyDlhYHorrjpgInmi6nml7bpl7TnmoTmqKHlvI/kuIvvvIznlKjmiLflpoLmnpzmsqHoh6rlrprkuYnmoLzlvI/vvIzliJnoh6rliqjovazkuLrml6XmnJ/ml7bpl7TmoLzlvI9cbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdCA9ICdZWVlZLU1NLUREIEhIOm1tOnNzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFuZWxWbUlkID0gdGhpcy4kaWQgKyAnX3BhbmVsJztcbiAgICAgICAgICAgIGNvbnN0IGlubmVyVm0gPSBnZXRQYW5lbFZtKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvU2VsZWN0ZWQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICBpbm5lclZtLnJlc2V0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRGlzcG9zZSgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBhdmFsb24udm1vZGVsc1t0aGlzLnBhbmVsVm1JZF07XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCAqIGFzIFNjaGVtYSBmcm9tICdhc3luYy12YWxpZGF0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybShvcHRpb25zPykge1xuICAgIHJldHVybiBuZXcgRm9ybShvcHRpb25zKTtcbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgcmVjb3JkOiB7fSxcbiAgICBhdXRvQXN5bmNDaGFuZ2U6IHRydWUsXG4gICAgb25GaWVsZHNDaGFuZ2U6IGF2YWxvbi5ub29wXG59O1xuXG5mdW5jdGlvbiBGb3JtKG9wdGlvbnMpIHtcbiAgICB0aGlzLmNhY2hlZFJlY29yZCA9IHt9O1xuICAgIHRoaXMuZmllbGRzID0ge307XG4gICAgdGhpcy5hbGwgPSB7fTtcbiAgICBhdmFsb24ubWl4KHRoaXMsIGF2YWxvbi5taXgodHJ1ZSwge30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucylcbn1cblxuRm9ybS5wcm90b3R5cGUuc2V0RmllbGRzVmFsdWUgPSBmdW5jdGlvbiAoZmllbGRzKSB7XG4gICAgaWYgKCF0aGlzLmF1dG9Bc3luY0NoYW5nZSkge1xuICAgICAgICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIHNldFZhbHVlKHRoaXMuY2FjaGVkUmVjb3JkLCBuYW1lLCBmaWVsZHNbbmFtZV0udmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIDtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbbmFtZV07XG5cbiAgICAgICAgc2V0VmFsdWUodGhpcy5yZWNvcmQsIG5hbWUsIGZpZWxkLnZhbHVlKTtcblxuICAgICAgICBpZiAoIWZpZWxkLmRlbnlWYWxpZGF0ZSAmJiB0aGlzLmZpZWxkc1tuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUZpZWxkKG5hbWUsIHRoaXMuZmllbGRzW25hbWVdKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pc09rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignZXJyb3InICsgcmVzdWx0Lm5hbWUsIFtdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2Vycm9yJyArIHJlc3VsdC5uYW1lLCBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzdWx0Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbkZpZWxkc0NoYW5nZShmaWVsZHMsIHRoaXMucmVjb3JkKTtcbn1cblxuRm9ybS5wcm90b3R5cGUuYWRkRmllbGRzID0gZnVuY3Rpb24gKGZpZWxkcykge1xuICAgIE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgdGhpcy5maWVsZHNbbmFtZV0gPSBmaWVsZHNbbmFtZV07XG4gICAgfSk7XG59XG5cbkZvcm0ucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKHR5cGU6IHN0cmluZywgbGlzdGVuZXIpIHtcbiAgICAodGhpcy5hbGxbdHlwZV0gfHwgKHRoaXMuYWxsW3R5cGVdID0gW10pKS5wdXNoKGxpc3RlbmVyKTtcbn1cblxuRm9ybS5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uICh0eXBlOiBzdHJpbmcsIHBheWxvYWQpIHtcbiAgICAodGhpcy5hbGxbdHlwZV0gfHwgW10pLm1hcChoYW5kbGVyID0+IHsgaGFuZGxlcihwYXlsb2FkKSB9KTtcbn1cblxuRm9ybS5wcm90b3R5cGUudmFsaWRhdGVGaWVsZCA9IGFzeW5jIGZ1bmN0aW9uIChmaWVsZE5hbWUsIGZpZWxkKSB7XG4gICAgY29uc3QgcnVsZXMgPSBmaWVsZC5ydWxlcztcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKHRoaXMucmVjb3JkLCBmaWVsZE5hbWUpO1xuICAgIGxldCByZXN1bHQ6IGFueSA9IHsgaXNPazogdHJ1ZSwgbmFtZTogZmllbGROYW1lIH07XG4gICAgaWYgKCFydWxlcykgcmV0dXJuIHJlc3VsdDtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgU2NoZW1hKHtcbiAgICAgICAgW2ZpZWxkTmFtZV06IHJ1bGVzXG4gICAgfSk7XG4gICAgcmVzdWx0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB2YWxpZGF0b3IudmFsaWRhdGUoeyBbZmllbGROYW1lXTogdmFsdWUgfSwgKGVycm9ycywgZmllbGRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGlzT2s6IGZhbHNlLCBuYW1lOiBmaWVsZE5hbWUsIG1lc3NhZ2U6IGVycm9yc1swXS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBpc09rOiB0cnVlLCBuYW1lOiBmaWVsZE5hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuRm9ybS5wcm90b3R5cGUudmFsaWRhdGVGaWVsZHMgPSBmdW5jdGlvbiAoZmllbGRzID0gdGhpcy5maWVsZHMpIHtcbiAgICBjb25zdCBmbGF0UmVjb3JkID0ge30sIHJ1bGVNYXAgPSB7fTtcbiAgICBpZiAoIXRoaXMuYXV0b0FzeW5jQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucmVjb3JkID0gYXZhbG9uLm1peCh0cnVlLCB7fSwgdGhpcy5yZWNvcmQsIHRoaXMuY2FjaGVkUmVjb3JkKTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoZmllbGRzKS5tYXAobmFtZSA9PiB7XG4gICAgICAgIHJ1bGVNYXBbbmFtZV0gPSBmaWVsZHNbbmFtZV0ucnVsZXM7XG4gICAgICAgIGZsYXRSZWNvcmRbbmFtZV0gPSBnZXRWYWx1ZSh0aGlzLnJlY29yZCwgbmFtZSk7XG4gICAgfSk7XG4gICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IFNjaGVtYShydWxlTWFwKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB2YWxpZGF0b3IudmFsaWRhdGUoZmxhdFJlY29yZCwgKGVycm9ycywgZmllbGRzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcnJvckZpZWxkcyA9IE9iamVjdC5rZXlzKGZpZWxkcyB8fCB7fSk7XG4gICAgICAgICAgICBsZXQgaXNBbGxWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZpZWxkcykubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh+ZXJyb3JGaWVsZHMuaW5kZXhPZihuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBpc0FsbFZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignZXJyb3InICsgbmFtZSwgZmllbGRzW25hbWVdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2Vycm9yJyArIG5hbWUsIFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlc29sdmUoaXNBbGxWYWxpZCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5cbkZvcm0ucHJvdG90eXBlLnJlc2V0RmllbGRzID0gZnVuY3Rpb24gKGZpZWxkcyA9IHRoaXMuZmllbGRzKSB7XG4gICAgdGhpcy5yZWNvcmQgPSB7fTtcbiAgICB0aGlzLnRyaWdnZXIoJ3Jlc2V0JywgZmllbGRzKTtcbn1cblxuLyoqXG4gKiDmoLnmja7ooajovr7lvI/mnoTnu5nlr7nosaHotYvlgLzvvIzlsZ7mgKfot6/lvoTkuK3mnIDlpJrlj6rlhYHorrjlrZjlnKjkuIDkuKrmlbDnu4RcbiAqIEBwYXJhbSB7Kn0gcmVjb3JkIOaVsOaNruWvueixoVxuICogQHBhcmFtIHtTdHJpbmd9IGV4cHIg5a+56LGh5bGe5oCn6Lev5b6E6KGo6L6+5byPXG4gKiBAcGFyYW0geyp9IHZhbCDlgLxcbiAqL1xuZnVuY3Rpb24gc2V0VmFsdWUocmVjb3JkLCBleHByLCB2YWwpIHtcbiAgICBjb25zdCByU3BsaXQgPSAvXFwufFxcXS58XFxbfFxcXS87XG4gICAgbGV0IHRlbXAgPSByZWNvcmQsIHByb3A7XG4gICAgZXhwciA9IGV4cHIuc3BsaXQoclNwbGl0KS5maWx0ZXIocHJvcCA9PiAhIXByb3ApO1xuICAgIGNvbnN0IHZhbFR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICBsZXQgbWlycm9yVmFsO1xuICAgIGlmICh2YWxUeXBlID09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgbWlycm9yVmFsID0gYXZhbG9uLm1peCh0cnVlLCB7fSwgeyB0OiB2YWwgfSkudDtcbiAgICB9IGVsc2UgaWYgKHZhbFR5cGUgPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAgbWlycm9yVmFsID0gYXZhbG9uLm1peCh0cnVlLCB7fSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtaXJyb3JWYWwgPSB2YWw7XG4gICAgfVxuXG4gICAgd2hpbGUgKHByb3AgPSBleHByLnNoaWZ0KCkpIHtcbiAgICAgICAgaWYgKGV4cHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0ZW1wW3Byb3BdID0gbWlycm9yVmFsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcCA9IHRlbXBbcHJvcF0gPSB0ZW1wW3Byb3BdIHx8IHt9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIOagueaNruihqOi+vuW8j+aehOS7juWvueixoeWPluWAvO+8jOWxnuaAp+i3r+W+hOS4reacgOWkmuWPquWFgeiuuOWtmOWcqOS4gOS4quaVsOe7hFxuICogQHBhcmFtIHsqfSByZWNvcmQg5pWw5o2u5a+56LGhXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwciDlr7nosaHlsZ7mgKfot6/lvoTooajovr7lvI9cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUocmVjb3JkLCBleHByKSB7XG4gICAgY29uc3QgclNwbGl0ID0gL1xcLnxcXF0ufFxcW3xcXF0vO1xuICAgIGxldCB0ZW1wID0gcmVjb3JkLCBwcm9wO1xuICAgIGV4cHIgPSBleHByLnNwbGl0KHJTcGxpdCkuZmlsdGVyKHByb3AgPT4gISFwcm9wKTtcbiAgICB3aGlsZSAoKHByb3AgPSBleHByLnNoaWZ0KCkpICYmIHRlbXApIHtcbiAgICAgICAgdGVtcCA9IHRlbXBbcHJvcF07XG4gICAgfVxuICAgIHJldHVybiB0ZW1wO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtZm9ybS9jcmVhdGUtZm9ybS50cyIsImltcG9ydCAnLi9tcy1mb3JtJztcbmltcG9ydCAnLi9tcy1mb3JtLWl0ZW0nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtZm9ybS9pbmRleC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCBjb250cm9sQ29tcG9uZW50IGZyb20gJy4uL21zLWZvcm0vbXMtY29udHJvbCc7XG5pbXBvcnQgeyBlbWl0VG9Gb3JtSXRlbSB9IGZyb20gJy4uL21zLWZvcm0vdXRpbHMnO1xuaW1wb3J0IHsgZmluZFBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2FuZS11dGlsJztcblxuY29udHJvbENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRpc3BsYXlOYW1lOiAnbXMtaW5wdXQnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLWlucHV0Lmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgbWFwVmFsdWVUb1RleHQodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZW1pdFRvRm9ybUl0ZW0odGhpcyk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgndmFsdWUnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9UZXh0KHYpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB2IH0sXG4gICAgICAgICAgICAgICAgICAgIGRlbnlWYWxpZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoYW5nZWQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb1RleHQodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWlucHV0L21zLWlucHV0LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuXG5hdmFsb24uY29tcG9uZW50KCdtcy1tZW51Jywge1xuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLW1lbnUuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIG1lbnU6IFtdLFxuICAgICAgICBzZWxlY3RlZEtleXM6IFtdLFxuICAgICAgICBvcGVuS2V5czogW10sXG4gICAgICAgIG9uQ2xpY2s6IGF2YWxvbi5ub29wLFxuICAgICAgICBvbk9wZW5DaGFuZ2U6IGF2YWxvbi5ub29wLFxuICAgICAgICBoYW5kbGVDbGljayhpdGVtLCBrZXksIGtleVBhdGgpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5jaGlsZHJlbiB8fCBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIOWPtuWtkOiKgueCuVxuICAgICAgICAgICAgICAgIC8vdGhpcy5zZWxlY3RlZEtleXMuZW5zdXJlKGl0ZW0ua2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkS2V5cyA9IFtpdGVtLmtleV07XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrKGl0ZW0sIGtleSwga2V5UGF0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOmdnuWPtuWtkOiKgueCuVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW5LZXlzLmNvbnRhaW5zKGl0ZW0ua2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5LZXlzLnJlbW92ZShpdGVtLmtleSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuS2V5cy5wdXNoKGl0ZW0ua2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wZW5DaGFuZ2UodGhpcy5vcGVuS2V5cy50b0pTT04oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLW1lbnUvbXMtbWVudS50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCBjb250cm9sQ29tcG9uZW50IGZyb20gXCIuLi9tcy1mb3JtL21zLWNvbnRyb2xcIjtcbmltcG9ydCAnLi4vbXMtdHJpZ2dlcic7XG5pbXBvcnQgZ2V0UGFuZWxWbSBmcm9tICcuL21zLXNlbGVjdC1wYW5lbCc7XG5cbmltcG9ydCB7IGdldENoaWxkVGVtcGxhdGVEZXNjcmlwdG9yLCBkZWJvdW5jZSB9IGZyb20gJy4uLy4uL2FuZS11dGlsJztcbmltcG9ydCB7IGVtaXRUb0Zvcm1JdGVtIH0gZnJvbSAnLi4vbXMtZm9ybS91dGlscyc7XG5cbmNvbnRyb2xDb21wb25lbnQuZXh0ZW5kKHtcbiAgICBkaXNwbGF5TmFtZTogJ21zLXNlbGVjdCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtc2VsZWN0Lmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgIG1vZGU6ICcnLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgICAgc2VsZWN0aW9uOiBbXSxcbiAgICAgICAgcmVtb3RlOiBmYWxzZSxcbiAgICAgICAgcmVtb3RlTWV0aG9kOiBhdmFsb24ubm9vcCxcblxuICAgICAgICAvLyDkuIvmi4nmoYblsZXnpLrlkozmk43kvZzpg6jliIZcbiAgICAgICAgZGlzcGxheVZhbHVlOiAnJyxcbiAgICAgICAgc2hvd1NlYXJjaDogZmFsc2UsXG4gICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICAgICAgZm9jdXNTZWFyY2goKSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpLnNlYXJjaC5mb2N1cygpO1xuICAgICAgICB9LFxuICAgICAgICB3aXRoSW5Cb3goZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50ID09PSBlbCB8fCBhdmFsb24uY29udGFpbnModGhpcy4kZWxlbWVudCwgZWwpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRUYXJnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhbmVsVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsV2lkdGggPSB0aGlzLiRlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzU2VhcmNoKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVEZWxldGUoZSkge1xuICAgICAgICAgICAgaWYgKChlLndoaWNoID09PSA4IHx8IGUud2hpY2ggPT09IDQ2KSAmJiB0aGlzLnNlYXJjaFZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnJlbW92ZUF0KHRoaXMuc2VsZWN0aW9uLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLnRvSlNPTigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0aW9uLm1hcChzID0+IHMudmFsdWUpO1xuICAgICAgICAgICAgICAgIGF2YWxvbi52bW9kZWxzW3RoaXMucGFuZWxWbUlkXS5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHRoaXMuaXNNdWx0aXBsZSA/IHZhbHVlIDogdmFsdWVbMF0gfHwgJycgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NlbGVjdCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlU2VsZWN0aW9uKGUsIG9wdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucmVtb3ZlQWxsKG8gPT4gby52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLnRvSlNPTigpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzZWxlY3Rpb24ubWFwKHMgPT4gcy52YWx1ZSk7XG4gICAgICAgICAgICBhdmFsb24udm1vZGVsc1t0aGlzLnBhbmVsVm1JZF0uc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5mb2N1c1NlYXJjaCgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdGhpcy5pc011bHRpcGxlID8gdmFsdWUgOiB2YWx1ZVswXSB8fCAnJyB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDkuIvmi4nmoYbkuIvmi4nliJfooajpg6jliIZcbiAgICAgICAgcGFuZWxXaWR0aDogMCxcbiAgICAgICAgcGFuZWxWbUlkOiAnJyxcbiAgICAgICAgcGFuZWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgcGFuZWxDbGFzczogJ2FuZS1zZWxlY3QtZHJvcGRvd24nLFxuICAgICAgICBwYW5lbFRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXNlbGVjdC1wYW5lbC5odG1sJyksXG4gICAgICAgIGhhbmRsZVBhbmVsSGlkZSgpIHtcbiAgICAgICAgICAgIHRoaXMucGFuZWxWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgJGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBpc011bHRpcGxlOiB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnbXVsdGlwbGUnIHx8IHRoaXMubW9kZSA9PT0gJ3RhZ3MnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8vIOeUn+WRveWRqOacn1xuICAgICAgICBtYXBWYWx1ZVRvU2VsZWN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMub3B0aW9ucy5maWx0ZXIobyA9PiB2YWx1ZS5jb250YWlucyhvLnZhbHVlKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdGhpcy5zZWxlY3Rpb25bMF0ubGFiZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdmFsb24udm1vZGVsc1t0aGlzLnBhbmVsVm1JZF0uc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24udG9KU09OKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBnZXRDaGlsZFRlbXBsYXRlRGVzY3JpcHRvcih0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBnZXRPcHRpb25zKGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbWl0VG9Gb3JtSXRlbSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCd2YWx1ZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdi50b0pTT04oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9TZWxlY3Rpb24odik7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHRoaXMuaXNNdWx0aXBsZSA/IHZhbHVlIDogdmFsdWVbMF0gfHwgJycgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVueVZhbGlkYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2VsZWN0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMucGFuZWxWbUlkID0gdGhpcy4kaWQgKyAnX3BhbmVsJztcbiAgICAgICAgICAgIGNvbnN0IGlubmVyVm0gPSBnZXRQYW5lbFZtKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3NlYXJjaFZhbHVlJywgZGVib3VuY2UodiA9PiB7XG4gICAgICAgICAgICAgICAgaW5uZXJWbS5zZWFyY2hWYWx1ZSA9IHY7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVtb3RlICYmICEhdikge1xuICAgICAgICAgICAgICAgICAgICBpbm5lclZtLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW90ZU1ldGhvZCh2KS50aGVuKG9wdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJWbS5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVm0ub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdpc011bHRpcGxlJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgaW5uZXJWbS5pc011bHRpcGxlID0gdjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvU2VsZWN0aW9uKHRoaXMudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRpc3Bvc2UoKSB7XG4gICAgICAgICAgICBkZWxldGUgYXZhbG9uLnZtb2RlbHNbdGhpcy5wYW5lbFZtSWRdO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnMoZGVzY3JpcHRvcikge1xuICAgIHJldHVybiBkZXNjcmlwdG9yLnJlZHVjZSgoYWNjLCBvcHRpb24pID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbi5pcyAhPSAnbXMtc2VsZWN0LW9wdGlvbicpIHJldHVybiBhY2M7XG4gICAgICAgIGxldCBsYWJlbCA9IG9wdGlvbi5pbmxpbmVUZW1wbGF0ZTtcbiAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5pbmxpbmVUZW1wbGF0ZSB8fCAnJyxcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb24ucHJvcHMudmFsdWUgfHwgJycsXG4gICAgICAgICAgICBkaXNhYmxlZDogb3B0aW9uLnByb3BzLmRpc2FibGVkIHx8IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3QudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgY29udHJvbENvbXBvbmVudCBmcm9tICcuLi9tcy1mb3JtL21zLWNvbnRyb2wnO1xuaW1wb3J0ICcuLi9tcy10cmlnZ2VyJztcbmltcG9ydCAnLi9tcy10aW1lcGlja2VyLXZpZXcnXG5pbXBvcnQgZ2V0UGFuZWxWbSBmcm9tICcuL21zLXRpbWVwaWNrZXItcGFuZWwnXG5pbXBvcnQgeyBlbWl0VG9Gb3JtSXRlbSB9IGZyb20gJy4uL21zLWZvcm0vdXRpbHMnO1xuXG4vKipcbiAqIOaXtumXtOmAieaLqee7hOS7tlxuICogQHByb3AgdmFsdWUg57uE5Lu25YC8KGluaGVyaXQpXG4gKiBAcHJvcCBjb2wg5a2X5q616Lev5b6EKGluaGVyaXQpXG4gKiBAcHJvcCBmb3JtYXQg5pel5pyf5qC85byP77yM5Y+C6ICDIG1vbWVudGpz77yM6buY6K6k5Li6IEhIOm1tOnNzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBgYGAgaHRtbFxuICogXG4gKiBgYGBcbiAqL1xuY29udHJvbENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRpc3BsYXlOYW1lOiAnbXMtdGltZXBpY2tlcicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtdGltZXBpY2tlci5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgc2VsZWN0ZWQ6ICcnLFxuICAgICAgICBmb3JtYXQ6ICdISDptbTpzcycsXG4gICAgICAgIGNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICcnO1xuICAgICAgICAgICAgYXZhbG9uLnZtb2RlbHNbdGhpcy5wYW5lbFZtSWRdLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiAnJyB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0aW1lcGlja2VyLWNoYW5nZWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgd2l0aEluQm94KGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudCA9PT0gZWwgfHwgYXZhbG9uLmNvbnRhaW5zKHRoaXMuJGVsZW1lbnQsIGVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGFyZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYW5lbFZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBhdmFsb24udm1vZGVsc1t0aGlzLnBhbmVsVm1JZF0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFuZWxWbUlkOiAnJyxcbiAgICAgICAgcGFuZWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgcGFuZWxDbGFzczogJ2FuZS10aW1lcGlja2VyLXBhbmVsLWNvbnRhaW5lcicsXG4gICAgICAgIHBhbmVsVGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYW5lLXRpbWVwaWNrZXItcGFuZWxcIiBzdHlsZT1cIm92ZXJmbG93OiBhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHhtcCBpcz1cIm1zLXRpbWVwaWNrZXItdmlld1wiIDp3aWRnZXQ9XCJ7dmFsdWU6QGN1cnJlbnREYXRlQXJyYXksb25DaGFuZ2U6QGhhbmRsZVRpbWVwaWNrZXJDaGFuZ2V9XCI+PC94bXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gLFxuICAgICAgICBoYW5kbGVQYW5lbEhpZGUoKSB7XG4gICAgICAgICAgICB0aGlzLnBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1hcFZhbHVlVG9TZWxlY3RlZCh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBlbWl0VG9Gb3JtSXRlbSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgc2hvd0ljb246IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCd2YWx1ZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb1NlbGVjdGVkKHYpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB2IH0sXG4gICAgICAgICAgICAgICAgICAgIGRlbnlWYWxpZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RpbWVwaWNrZXItY2hhbmdlZCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wYW5lbFZtSWQgPSB0aGlzLiRpZCArICdfcGFuZWwnO1xuICAgICAgICAgICAgY29uc3QgaW5uZXJWbSA9IGdldFBhbmVsVm0odGhpcyk7XG4gICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9TZWxlY3RlZCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIGlubmVyVm0ucmVzZXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EaXNwb3NlKCkge1xuICAgICAgICAgICAgZGVsZXRlIGF2YWxvbi52bW9kZWxzW3RoaXMucGFuZWxWbUlkXTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlci9tcy10aW1lcGlja2VyLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0ICcuLi9tcy1jaGVja2JveCc7XG5cbmxldCB0cmVlSUQgPSAwO1xuYXZhbG9uLmNvbXBvbmVudCgnbXMtdHJlZScsIHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy10cmVlLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICB0cmVlOiBbXSxcbiAgICAgICAgZXhwYW5kZWRLZXlzOiBbXSxcbiAgICAgICAgY2hlY2tlZEtleXM6IFtdLFxuICAgICAgICByZW5kZXJTdWJUcmVlOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiAgZWwuY2hpbGRyZW4ubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAnPHdiciA6d2lkZ2V0PVwie2lzOlxcJ21zLXRyZWVcXCcsJGlkOlxcJ3RyZWVfJyArICgrK3RyZWVJRCkgKyAnXFwnLHRyZWU6ZWwuY2hpbGRyZW4sY2hlY2tlZEtleXM6QGNoZWNrZWRLZXlzLGhhbmRsZUNoZWNrOkBoYW5kbGVDaGVja31cIi8+JyA6XG4gICAgICAgICAgICAgICAgJydcbiAgICAgICAgfSxcbiAgICAgICAgb3BlblN1YlRyZWU6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHBlbmRlZChlbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZGVkS2V5cy5yZW1vdmUoZWwua2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRlZEtleXMucHVzaChlbC5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VJY29uOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGlmICghZWwuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNFeHBlbmRlZChlbCkgPyAnZmEtY2FyZXQtZG93bicgOiAnZmEtY2FyZXQtcmlnaHQnO1xuICAgICAgICB9LFxuICAgICAgICBpc0V4cGVuZGVkKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHBhbmRlZEtleXMuY29udGFpbnMoZWwua2V5KTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNDaGVja2VkKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja2VkS2V5cy5jb250YWlucyhlbC5rZXkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoZWNrOiBhdmFsb24ubm9vcCxcbiAgICAgICAgb25DaGVja0lubmVyOiBhdmFsb24ubm9vcCxcbiAgICAgICAgaGFuZGxlQ2hlY2soZWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2hlY2tlZChlbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRLZXlzLnJlbW92ZShlbC5rZXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRLZXlzLnB1c2goZWwua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25DaGVjayh0aGlzLmNoZWNrZWRLZXlzLnRvSlNPTigpKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdHJlZS9tcy10cmVlLnRzIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XG5cblxuaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IGNvbnRyb2xDb21wb25lbnQgZnJvbSAnLi4vbXMtZm9ybS9tcy1jb250cm9sJztcbmltcG9ydCB7IGVtaXRUb0Zvcm1JdGVtIH0gZnJvbSAnLi4vbXMtZm9ybS91dGlscyc7XG5pbXBvcnQgJy4vbXMtdXBsb2FkLWxpc3QnO1xuaW1wb3J0ICcuL21zLXVwbG9hZC1jYXJkJztcbmltcG9ydCBVcGxvYWRlciBmcm9tICd1cC1sb2FkZXInO1xuXG4vKipcbiAqIOaWh+S7tuS4iuS8oOe7hOS7tlxuICogQHByb3AgdmFsdWUg57uE5Lu25YC8KGluaGVyaXQpXG4gKiBAcHJvcCBjb2wg5a2X5q616Lev5b6EKGluaGVyaXQpXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBgYGAgaHRtbFxuICogPG1zLXVwbG9hZCA6d2lkZ2V0PVwie3ZhbHVlOkByZWNvcmQuYXR0YWNobWVudCxjb2w6J2F0dGFjaG1lbnQnLCRydWxlczp7cmVxdWlyZWQ6dHJ1ZSx0eXBlOidhcnJheSd9fVwiPlxuICogICAgICA8aSBjbGFzcz1cImZhIGZhLXVwbG9hZFwiPjwvaT7pgInmi6npmYTku7ZcbiAqIDwvbXMtdXBsb2FkPlxuICogYGBgXG4gKi9cbmNvbnRyb2xDb21wb25lbnQuZXh0ZW5kKHtcbiAgICBkaXNwbGF5TmFtZTogJ21zLXVwbG9hZCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtdXBsb2FkLmh0bWwnKSxcbiAgICBzb2xlU2xvdDogJ3RyaWdnZXInLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGhlbHBJZDogJycsXG4gICAgICAgIHRyaWdnZXI6ICcnLFxuICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgIGZpbGVMaXN0OiBbXSxcbiAgICAgICAgYWN0aW9uOiAnJyxcbiAgICAgICAgbGlzdFR5cGU6ICd0ZXh0LWxpc3QnLFxuICAgICAgICBzaG93VXBsb2FkTGlzdDogdHJ1ZSxcbiAgICAgICAgYnRuQ2xhc3M6ICdidG4gYnRuLWRlZmF1bHQnLFxuICAgICAgICBjYXJkQ2xhc3M6ICdhbmUtdXBsb2FkLXNlbGVjdC1jYXJkIGFuZS11cGxvYWQtY2FyZC1pdGVtJyxcbiAgICAgICAgYmxhbmtJbWc6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQkFQLy8vd0FBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09JyxcbiAgICAgICAgJHVwbG9hZGVyOiBudWxsLFxuICAgICAgICBiZWZvcmVVcGxvYWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlUmVtb3ZlKGZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUxpc3QucmVtb3ZlQWxsKGYgPT4gZi51aWQgPT09IGZpbGUudWlkKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maWxlTGlzdC5maWx0ZXIoZiA9PiBmLnN0YXR1cyA9PT0gJ2RvbmUnKS5tYXAoZiA9PiBmLnVybCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB0aGlzLnNob3dVcGxvYWRMaXN0ID8gdmFsdWUgOiB2YWx1ZVswXSB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdmaWxlLXVwbG9hZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBtYXBWYWx1ZVRvRmlsZUxpc3QodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlLm1hcCgodXJsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVybCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB1aWQ6IC0oaSArIDEpLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB1cmwucmVwbGFjZSgvLipcXC8oW15cXC9dKylcXC8/LywgJyQxJyksXG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdkb25lJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGVtaXRUb0Zvcm1JdGVtKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5oZWxwSWQgPSB0aGlzLiRpZDtcbiAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb0ZpbGVMaXN0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3ZhbHVlJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdi50b0pTT04oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVMaXN0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvRmlsZUxpc3QodmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB0aGlzLnNob3dVcGxvYWRMaXN0ID8gdmFsdWUgOiB2YWx1ZVswXSB9LFxuICAgICAgICAgICAgICAgICAgICBkZW55VmFsaWRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmaWxlLXVwbG9hZCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblJlYWR5KGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiR1cGxvYWRlciA9IFVwbG9hZGVyLmluaXQoe1xuICAgICAgICAgICAgICAgIHVybDogdGhpcy5hY3Rpb24sXG4gICAgICAgICAgICAgICAgZmlsZUlucHV0OiBldmVudC50YXJnZXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JykuZmlsZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IChmaWxlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzkuI3mlK/mjIHlm77niYfkv6Hmga/nmoTpooTop4jvvIzliJnkuI3ov5vooYzov4fmu6TlkozpmZDliLZcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGVzLmZpbHRlcihmaWxlID0+ICFmaWxlLnNpemUgfHwgdGhpcy5iZWZvcmVVcGxvYWQoZmlsZSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q6IChmaWxlcywgYWxsRmlsZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxsRmlsZXMubWFwKGZpbGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dVcGxvYWRMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlTGlzdC5zZXQoMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGZpbGUuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAndXBsb2FkaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdGhpcy5ibGFua0ltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVMaXN0LmV2ZXJ5KGYgPT4gZi51aWQgIT09IGZpbGUuaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBmaWxlLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3VwbG9hZGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYmxhbmtJbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmlsZU9iaih0aGlzLmZpbGVMaXN0LCBmaWxlLmluZGV4LCBmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5zdGF0dXMgPSAndXBsb2FkaW5nJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiR1cGxvYWRlci51cGxvYWQoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3M6IChmaWxlLCBsb2FkZWQsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZpbGVPYmoodGhpcy5maWxlTGlzdCwgZmlsZS5pbmRleCwgZiA9PiBmLnByb2dyZXNzID0gKGxvYWRlZCAvIHRvdGFsICogMTAwKS50b0ZpeGVkKCkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzOiAoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmlsZU9iaih0aGlzLmZpbGVMaXN0LCBmaWxlLmluZGV4LCBmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYuc3RhdHVzID0gJ2RvbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZi5wcm9ncmVzcyA9IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYudXJsID0gcmVzcG9uc2UudXJsO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZTogKGZpbGUsIGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGaWxlT2JqKHRoaXMuZmlsZUxpc3QsIGZpbGUuaW5kZXgsIGYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZi5zdGF0dXMgPSAnZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICAgICAgZi51cmwgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LE1BPT0nO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maWxlTGlzdC5maWx0ZXIoZiA9PiBmLnN0YXR1cyA9PT0gJ2RvbmUnKS5tYXAoZiA9PiBmLnVybCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdGhpcy5zaG93VXBsb2FkTGlzdCA/IHZhbHVlIDogdmFsdWVbMF0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmaWxlLXVwbG9hZCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRGlzcG9zZShldmVudCkge1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIHVwZGF0ZUZpbGVPYmooZmlsZUxpc3QsIHVpZCwgY2FsbGJhY2spIHtcbiAgICBmaWxlTGlzdC5mb3JFYWNoKGYgPT4ge1xuICAgICAgICBpZiAoZi51aWQgPT09IHVpZCkge1xuICAgICAgICAgICAgY2FsbGJhY2soZik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXVwbG9hZC9tcy11cGxvYWQudHMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1sb2FkaW5nL21zLWxvYWRpbmcubGVzc1xuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICcuLi9tcy1zZWxlY3QnO1xuaW1wb3J0ICcuL21zLWNhbGVuZGFyLXllYXItdmlldyc7XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLWNhbGVuZGFyJywge1xuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLWNhbGVuZGFyLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICR2YWx1ZTogbnVsbCxcbiAgICAgICAgJHNlbGVjdGVkOiBudWxsLFxuICAgICAgICB3ZWVrU3RhcnQ6IDAsXG4gICAgICAgIHNob3dIZWFkZXI6IHRydWUsXG4gICAgICAgIGRpc2FibGVkRGF0ZSgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBcbiAgICAgICAgY3VycmVudE1vbnRoOiAnJyxcbiAgICAgICAgY3VycmVudFllYXI6IDAsXG4gICAgICAgIHdlZWtkYXlzOiBbXSxcbiAgICAgICAgY3VycmVudFllYXJPcHRpb25zOiBbXSxcbiAgICAgICAgbW9udGhPcHRpb25zOiBbXSxcbiAgICAgICAgdGFibGU6IFtdLFxuICAgICAgICBoYW5kbGVZZWFyQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgIHRoaXMuJHZhbHVlLnllYXIoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB0aGlzLmNhbGNUYWJsZSh0aGlzLiR2YWx1ZS5jbG9uZSgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlTW9udGhDaGFuZ2UoZSkge1xuICAgICAgICAgICAgdGhpcy4kdmFsdWUubW9udGgoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5jYWxjVGFibGUodGhpcy4kdmFsdWUuY2xvbmUoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZURhdGVDbGljayhlbCkge1xuICAgICAgICAgICAgaWYgKGVsLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kc2VsZWN0ZWQueWVhcih0aGlzLmN1cnJlbnRZZWFyKS5tb250aCh0aGlzLmN1cnJlbnRNb250aCkuZGF0ZShlbC5kYXRlKTtcbiAgICAgICAgICAgIGlmIChlbC5wcmV2TW9udGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3RlZC5zdWJ0cmFjdCgxLCAnbW9udGhzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWwubmV4dE1vbnRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0ZWQuYWRkKDEsICdtb250aHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJHZhbHVlID0gdGhpcy4kc2VsZWN0ZWQ7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuJHNlbGVjdGVkLmNsb25lKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjYWxlbmRhci1jaGFuZ2VkJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyDmmK/lkKbmnInlv4XopoHlho3orqHnrpfmm7TmlrDkuIDmrKHvvJ9cbiAgICAgICAgICAgIHRoaXMuY2FsY1RhYmxlKHRoaXMuJHZhbHVlLmNsb25lKCkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZTogYXZhbG9uLm5vb3AsXG4gICAgICAgIGNhbGNUYWJsZShtOiBtb21lbnQuTW9tZW50KSB7XG4gICAgICAgICAgICBsZXQgaSwgajtcbiAgICAgICAgICAgIC8vIOi/meS4quaciOeahOesrOS4gOWkqVxuICAgICAgICAgICAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gbS5jbG9uZSgpLnN0YXJ0T2YoJ21vbnRoJyk7XG4gICAgICAgICAgICAvLyDov5nkuKrmnIjnmoTmnIDlkI7kuIDlpKlcbiAgICAgICAgICAgIGNvbnN0IGxhc3REYXlPZk1vbnRoID0gbS5jbG9uZSgpLmVuZE9mKCdtb250aCcpO1xuICAgICAgICAgICAgLy8g5LiK5Liq5pyI55qE5pyA5ZCO5LiA5aSpXG4gICAgICAgICAgICBjb25zdCBsYXN0RGF5T2ZQcmV2TW9udGggPSBmaXJzdERheU9mTW9udGguY2xvbmUoKS5zdWJ0cmFjdCgxLCAnZGF5cycpO1xuICAgICAgICAgICAgY29uc3QgZmlyc3REYXkgPSAoZmlyc3REYXlPZk1vbnRoLmRheSgpIC0gdGhpcy53ZWVrU3RhcnQgKyA3KSAlIDc7XG4gICAgICAgICAgICBjb25zdCBwcmV2TGFzdERhdGUgPSBsYXN0RGF5T2ZQcmV2TW9udGguZGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgbGFzdERhdGUgPSBsYXN0RGF5T2ZNb250aC5kYXRlKCk7XG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IFtdO1xuICAgICAgICAgICAgbGV0IHBhc3NlZCA9IDA7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGVSb3cgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgNzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZNb250aCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dE1vbnRoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwICYmIGogPCBmaXJzdERheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5LiK5pyI57uT5p2f6YOo5YiGXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUucHVzaCgnYW5lLWNhbGVuZGFyLXByZXYtbW9udGgtY2VsbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldk1vbnRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkRGF0ZSgrbS5jbG9uZSgpLnN1YnRyYWN0KDEsICdtb250aHMnKS5kYXRlKHByZXZMYXN0RGF0ZSAtIGZpcnN0RGF5ICsgaiArIDEpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUucHVzaCgnYW5lLWNhbGVuZGFyLWRpc2FibGVkLWNlbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlUm93LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2TW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHByZXZMYXN0RGF0ZSAtIGZpcnN0RGF5ICsgaiArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhc3NlZCArIDEgPiBsYXN0RGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5LiL5pyI5byA5aeL6YOo5YiGXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUucHVzaCgnYW5lLWNhbGVuZGFyLW5leHQtbW9udGgtY2VsbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1vbnRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkRGF0ZSgrbS5jbG9uZSgpLmFkZCgxLCAnbW9udGhzJykuZGF0ZShwYXNzZWQgKyAxIC0gbGFzdERhdGUpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUucHVzaCgnYW5lLWNhbGVuZGFyLWRpc2FibGVkLWNlbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlUm93LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2TW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICsrcGFzc2VkIC0gbGFzdERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pys5pyI6YOo5YiGXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9tZW50KCkuaXNTYW1lKG0uY2xvbmUoKS5kYXRlKHBhc3NlZCArIDEpLCAnZGF5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUucHVzaCgnYW5lLWNhbGVuZGFyLXRvZGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4kc2VsZWN0ZWQuaXNTYW1lKG0uY2xvbmUoKS5kYXRlKHBhc3NlZCArIDEpLCAnZGF5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUucHVzaCgnYW5lLWNhbGVuZGFyLXNlbGVjdGVkLWRheScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWREYXRlKCttLmNsb25lKCkuZGF0ZShwYXNzZWQgKyAxKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2FuZS1jYWxlbmRhci1kaXNhYmxlZC1jZWxsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZVJvdy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldk1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb250aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiArK3Bhc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFibGUucHVzaCh0YWJsZVJvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRhYmxlID0gdGFibGU7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb250aCA9IG0uZm9ybWF0KCdNTU0nKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFllYXIgPSBtLnllYXIoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFllYXJPcHRpb25zID0gYXZhbG9uLnJhbmdlKHRoaXMuY3VycmVudFllYXIgLSAxMCwgdGhpcy5jdXJyZW50WWVhciArIDkpLm1hcCh5ID0+ICh7IGxhYmVsOiB5LCB2YWx1ZTogeSB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kdmFsdWUgPSBtb21lbnQoKTtcbiAgICAgICAgICAgIHRoaXMuJHNlbGVjdGVkID0gbW9tZW50KCk7XG4gICAgICAgICAgICBjb25zdCB3ZWVrZGF5cyA9IG1vbWVudC5sb2NhbGVEYXRhKCkud2Vla2RheXNNaW4oKTtcbiAgICAgICAgICAgIGF2YWxvbi5yYW5nZSh0aGlzLndlZWtTdGFydCkuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5cy5wdXNoKHdlZWtkYXlzLnNoaWZ0KCkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMud2Vla2RheXMgPSB3ZWVrZGF5cztcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoTGlzdCA9IG1vbWVudC5sb2NhbGVEYXRhKCkubW9udGhzU2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMubW9udGhPcHRpb25zID0gbW9udGhMaXN0Lm1hcChtID0+ICh7IGxhYmVsOiBtLCB2YWx1ZTogbSB9KSk7XG4gICAgICAgICAgICB0aGlzLmNhbGNUYWJsZSh0aGlzLiR2YWx1ZS5jbG9uZSgpKTtcblxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuJHZhbHVlLnRvQXJyYXkoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3ZhbHVlJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kdmFsdWUgPSB0aGlzLiRzZWxlY3RlZCA9IG1vbWVudCh2LnNwbGl0KCcsJykpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsY1RhYmxlKHRoaXMuJHZhbHVlLmNsb25lKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWNhbGVuZGFyL21zLWNhbGVuZGFyLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0ICogYXMgYm9vdGJveCBmcm9tICdib290Ym94JztcbmltcG9ydCB7IHBhcnNlU2xvdFRvVk1vZGVsIH0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5hdmFsb24uY29tcG9uZW50KCdtcy1kaWFsb2cnLCB7XG4gICAgdGVtcGxhdGU6ICc8ZGl2IHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIiAvPjxzbG90IG5hbWU9XCJib2R5XCIvPjwvZGl2PicsXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgYm9keTogJ2JsYW5rJyxcbiAgICAgICAgJGRpYWxvZzogbnVsbCxcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIHNpemU6ICcnLFxuICAgICAgICB1cGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAkaW5uZXJWbTogJycsXG4gICAgICAgIG9uT2soKSB7fSxcbiAgICAgICAgb25DYW5jZWwoKSB7fSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdm0gPSBldmVudC52bW9kZWw7XG4gICAgICAgICAgICB2bS4kd2F0Y2goJ3Nob3cnLCAobmV3VikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChuZXdWKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLiRkaWFsb2cgPSBib290Ym94LmRpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB2bS5ib2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICd7e3RpdGxlfX0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogdm0uc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAn5L+d5a2YJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLm9uT2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAn5Y+W5raIJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYnRuLWRlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLm9uQ2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLm9uKCdoaWRkZW4uYnMubW9kYWwnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5tb2RhbC5pbicpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oJ3Nob3duLmJzLm1vZGFsJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2bS4kZGlhbG9nLmZpbmQoJy5tb2RhbC1jb250ZW50JykuYXR0cignOmNvbnRyb2xsZXInLCB0aGlzLiRpbm5lclZtKTtcbiAgICAgICAgICAgICAgICAgICAgYXZhbG9uLnNjYW4odm0uJGRpYWxvZy5nZXQoMCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS4kZGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kZGlhbG9nLmZpbmQoJy5ib290Ym94LWNsb3NlLWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICAgICAgcGFyc2VTbG90VG9WTW9kZWwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnNob3cgJiYgdGhpcy4kZmlyZSgnc2hvdycsIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRpc3Bvc2UoZXZlbnQpIHtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtZGlhbG9nL21zLWRpYWxvZy50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCB7IGZpbmRQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLWZvcm0nLCB7XG4gICAgdGVtcGxhdGU6IGA8Zm9ybSByb2xlPVwiZm9ybVwiIDpjbGFzcz1cIlsoQGhvcml6b250YWwgPyAnZm9ybS1ob3Jpem9udGFsJyA6ICcnKSwgKEBpbmxpbmUgPyAnZm9ybS1pbmxpbmUnIDogJycpXVwiPjxzbG90IC8+PC9mb3JtPmAsXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgaXRlbXM6ICcnLFxuICAgICAgICAkZm9ybTogbnVsbCxcbiAgICAgICAgdHlwZTogJycsXG4gICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgICBpbmxpbmU6IGZhbHNlLFxuICAgICAgICBvbkZvcm1DaGFuZ2UobWV0YSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGZvcm0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRmb3JtLnNldEZpZWxkc1ZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgW21ldGEubmFtZV06IHsgdmFsdWU6IG1ldGEudmFsdWUgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5fY3R5cGVfID0gJ21zLWZvcm0nO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0Ll92bV8gPSB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBvblJlYWR5KGV2ZW50KSB7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNvbGVTbG90OiAnaXRlbXMnXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWZvcm0vbXMtZm9ybS50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcblxuY29uc3QgbGF5b3V0Q29tcG9uZW50ID0gYXZhbG9uLmNvbXBvbmVudCgnbXMtbGF5b3V0Jywge1xuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImFuZS1sYXlvdXRcIiA6Y3NzPVwiQHN0eWxlXCIgOmNsYXNzPVwiQGNsYXNzTmFtZVwiPjxzbG90IC8+PC9kaXY+YCxcbiAgICBzb2xlU2xvdDogJ3Nsb3QnLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgY2xhc3NOYW1lOiAnJ1xuICAgIH1cbn0pO1xuXG5sYXlvdXRDb21wb25lbnQuZXh0ZW5kKHtcbiAgICBkaXNwbGF5TmFtZTogJ21zLWxheW91dC1zaWRlcicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYW5lLWxheW91dC1zaWRlclwiIDpjc3M9XCJAc3R5bGVcIiA6Y2xhc3M9XCJAY2xhc3NOYW1lXCIgOmNsYXNzLTE9XCJbQGZpeGVkPydhbmUtbGF5b3V0LWZpeGVkLXNpZGVyJzonJ11cIj48ZGl2IGNsYXNzPVwiYW5lLWxheW91dC1zaWRlci1pbm5lclwiPjxzbG90IC8+PC9kaXY+PC9kaXY+YCxcbiAgICBzb2xlU2xvdDogJ3Nsb3QnLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGZpeGVkOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6ICczMDBweCdcbiAgICB9XG59KTtcblxubGF5b3V0Q29tcG9uZW50LmV4dGVuZCh7XG4gICAgZGlzcGxheU5hbWU6ICdtcy1sYXlvdXQtaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhbmUtbGF5b3V0LWhlYWRlclwiIDpjc3M9XCJAc3R5bGVcIiA6Y2xhc3M9XCJAY2xhc3NOYW1lXCIgOmNsYXNzLTE9XCJbQGZpeGVkPydhbmUtbGF5b3V0LWZpeGVkLWhlYWRlcic6JyddXCI+PHNsb3QgLz48L2Rpdj5gLFxuICAgIHNvbGVTbG90OiAnc2xvdCcsXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgZml4ZWQ6IGZhbHNlLFxuICAgICAgICB3aWR0aDogJzYwcHgnXG4gICAgfVxufSk7XG5cbmxheW91dENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRpc3BsYXlOYW1lOiAnbXMtbGF5b3V0LWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImFuZS1sYXlvdXQtY29udGVudFwiIDpjc3M9XCJAc3R5bGVcIiA6Y2xhc3M9XCJAY2xhc3NOYW1lXCI+PHNsb3QgLz48L2Rpdj5gLFxuICAgIHNvbGVTbG90OiAnc2xvdCcsXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgZml4ZWQ6IGZhbHNlXG4gICAgfVxufSk7XG5cbmxheW91dENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRpc3BsYXlOYW1lOiAnbXMtbGF5b3V0LWZvb3RlcicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYW5lLWxheW91dC1mb290ZXJcIiA6Y3NzPVwiQHN0eWxlXCIgOmNsYXNzPVwiQGNsYXNzTmFtZVwiIDpjbGFzcy0xPVwiW0BmaXhlZD8nYW5lLWxheW91dC1maXhlZC1mb290ZXInOicnXVwiPjxzbG90IC8+PC9kaXY+YCxcbiAgICBzb2xlU2xvdDogJ3Nsb3QnLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGZpeGVkOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6ICc2MHB4J1xuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtbGF5b3V0L21zLWxheW91dC50cyIsImltcG9ydCAqIGFzIG5vdHkgZnJvbSAnbm90eSc7XG5cbnR5cGUgbWVzc2FnZUFyZ3MgPSB7XG4gICAgY29udGVudDogc3RyaW5nLFxuICAgIGR1cmF0aW9uPzogbnVtYmVyXG59O1xuXG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgZHVyYXRpb246IDE1MDBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbmZvKHsgY29udGVudCwgZHVyYXRpb24gfTogbWVzc2FnZUFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1pbmZvLWNpcmNsZVwiPjwvaT4nICsgY29udGVudCxcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbicsXG4gICAgICAgICAgICBsYXlvdXQ6ICd0b3BDZW50ZXInLFxuICAgICAgICAgICAgdGltZW91dDogZHVyYXRpb24gfHwgZGVmYXVsdE9wdGlvbnMuZHVyYXRpb25cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzdWNjZXNzKHsgY29udGVudCwgZHVyYXRpb259OiBtZXNzYWdlQXJncyk6IHZvaWQge1xuICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT4nICsgY29udGVudCxcbiAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGxheW91dDogJ3RvcENlbnRlcicsXG4gICAgICAgICAgICB0aW1lb3V0OiBkdXJhdGlvbiB8fCBkZWZhdWx0T3B0aW9ucy5kdXJhdGlvblxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGVycm9yKHsgY29udGVudCwgZHVyYXRpb259OiBtZXNzYWdlQXJncyk6IHZvaWQge1xuICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT4nICsgY29udGVudCxcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICBsYXlvdXQ6ICd0b3BDZW50ZXInLFxuICAgICAgICAgICAgdGltZW91dDogZHVyYXRpb24gfHwgZGVmYXVsdE9wdGlvbnMuZHVyYXRpb25cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB3YXJuaW5nKHsgY29udGVudCwgZHVyYXRpb259OiBtZXNzYWdlQXJncyk6IHZvaWQge1xuICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXdhcm5pbmdcIj48L2k+JyArIGNvbnRlbnQsXG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgICAgICBsYXlvdXQ6ICd0b3BDZW50ZXInLFxuICAgICAgICAgICAgdGltZW91dDogZHVyYXRpb24gfHwgZGVmYXVsdE9wdGlvbnMuZHVyYXRpb25cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB3YXJuKHsgY29udGVudCwgZHVyYXRpb259OiBtZXNzYWdlQXJncyk6IHZvaWQge1xuICAgICAgICB0aGlzLndhcm5pbmcoeyBjb250ZW50LCBkdXJhdGlvbiB9KTtcbiAgICB9LFxuICAgIGNvbmZpZyhvcHRpb25zOiBtZXNzYWdlQXJncyk6IHZvaWQge1xuICAgICAgICBpZiAob3B0aW9ucy5kdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucy5kdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtbWVzc2FnZS9tcy1tZXNzYWdlLnRzIiwiaW1wb3J0ICogYXMgbm90eSBmcm9tICdub3R5JztcblxudHlwZSBub3RpZmljYXRpb25BcmdzID0ge1xuICAgIC8qKlxuICAgICAqIOmAmuefpeato+aWh1xuICAgICAqL1xuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICAvKipcbiAgICAgKiDpgJrnn6XmoIfpophcbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICAvKipcbiAgICAgKiDmsqHmnInnlKjmiLfmk43kvZznmoTmg4XlhrXkuIvpgJrnn6Xkv53mjIHmmL7npLrnmoTml7bpl7TvvIjmr6vnp5LvvInvvIzpu5jorqTkuLogNTAwMG1zXG4gICAgICovXG4gICAgdGltZW91dD86IG51bWJlclxufTtcblxubGV0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRpbWVvdXQ6IDMwMDBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbmZvKHsgbWVzc2FnZSwgdGl0bGUsIHRpbWVvdXQgfTogbm90aWZpY2F0aW9uQXJncyk6IHZvaWQge1xuICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHRleHQ6IHRlbXBsYXRlKHRpdGxlLCBtZXNzYWdlLCAnZmEgZmEtaW5mby1jaXJjbGUnKSxcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbicsXG4gICAgICAgICAgICB0aW1lb3V0OiB0aW1lb3V0IHx8IGRlZmF1bHRPcHRpb25zLnRpbWVvdXRcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzdWNjZXNzKHsgbWVzc2FnZSwgdGl0bGUsIHRpbWVvdXQgfTogbm90aWZpY2F0aW9uQXJncyk6IHZvaWQge1xuICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHRleHQ6IHRlbXBsYXRlKHRpdGxlLCBtZXNzYWdlLCAnZmEgZmEtY2hlY2stY2lyY2xlJyksXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICB0aW1lb3V0OiB0aW1lb3V0IHx8IGRlZmF1bHRPcHRpb25zLnRpbWVvdXRcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBlcnJvcih7IG1lc3NhZ2UsIHRpdGxlLCB0aW1lb3V0IH06IG5vdGlmaWNhdGlvbkFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiB0ZW1wbGF0ZSh0aXRsZSwgbWVzc2FnZSwgJ2ZhIGZhLXRpbWVzLWNpcmNsZScpLFxuICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRpbWVvdXQgfHwgZGVmYXVsdE9wdGlvbnMudGltZW91dFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHdhcm5pbmcoeyBtZXNzYWdlLCB0aXRsZSwgdGltZW91dCB9OiBub3RpZmljYXRpb25BcmdzKTogdm9pZCB7XG4gICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdGV4dDogdGVtcGxhdGUodGl0bGUsIG1lc3NhZ2UsICdmYSBmYS13YXJuaW5nJyksXG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgICAgICB0aW1lb3V0OiB0aW1lb3V0IHx8IGRlZmF1bHRPcHRpb25zLnRpbWVvdXRcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB3YXJuKHsgbWVzc2FnZSwgdGl0bGUsIHRpbWVvdXQgfTogbm90aWZpY2F0aW9uQXJncyk6IHZvaWQge1xuICAgICAgICB0aGlzLndhcm5pbmcoeyBtZXNzYWdlLCB0aXRsZSwgdGltZW91dCB9KTtcbiAgICB9LFxuICAgIGNvbmZpZyhvcHRpb25zOiBub3RpZmljYXRpb25BcmdzKTogdm9pZCB7XG4gICAgICAgIGlmIChvcHRpb25zLnRpbWVvdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgaWNvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB0aXRsZSA9IHRpdGxlID8gYDxzdHJvbmc+JHt0aXRsZX08L3N0cm9uZz48YnI+YCA6ICcnO1xuICAgIHJldHVybiBgPGRpdj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIiR7aWNvbn0gcHVsbC1sZWZ0XCIgc3R5bGU9XCJmb250LXNpemU6IDM4cHg7bWluLXdpZHRoOiAzOHB4O3RleHQtYWxpZ246IGNlbnRlcjtcIj48L2k+XG4gICAgICAgICAgICAgICAgJHt0aXRsZX1cbiAgICAgICAgICAgICAgICAke21lc3NhZ2V9XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtbm90aWZpY2F0aW9uL21zLW5vdGlmaWNhdGlvbi50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCAnLi4vbXMtY2hlY2tib3gvbXMtY2hlY2tib3gnO1xuaW1wb3J0ICcuL21zLXRhYmxlLWhlYWRlcidcbmltcG9ydCAnLi4vbXMtcGFnaW5hdGlvbi9tcy1wYWdpbmF0aW9uJztcbmltcG9ydCB7XG4gICAgZmluZFBhcmVudENvbXBvbmVudCxcbiAgICBwYXJzZVNsb3RUb1ZNb2RlbCxcbiAgICBnZXRDaGlsZFRlbXBsYXRlRGVzY3JpcHRvclxufSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5pbXBvcnQgJy4uL21zLWxvYWRpbmcnO1xuXG5jb25zdCBkZWZhdWx0UGFnaW5hdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50OiAxLCBwYWdlU2l6ZTogMTAsIHRvdGFsOiBOYU4sIG9uQ2hhbmdlOiBhdmFsb24ubm9vcFxuICAgIH07XG59O1xuXG5hdmFsb24uY29tcG9uZW50KCdtcy10YWJsZScsIHtcbiAgICBzb2xlU2xvdDogJ2hlYWRlcicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtdGFibGUuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGhlYWRlcjogJycsXG4gICAgICAgIGNvbHVtbnM6IFtdLFxuICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAga2V5OiAnaWQnLFxuXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBuZWVkU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgY2hlY2tlZDogW10sXG4gICAgICAgIHNlbGVjdGlvbjogW10sXG4gICAgICAgIGlzQWxsQ2hlY2tlZDogZmFsc2UsXG4gICAgICAgIG9uU2VsZWN0OiBhdmFsb24ubm9vcCxcbiAgICAgICAgb25TZWxlY3RBbGw6IGF2YWxvbi5ub29wLFxuICAgICAgICBzZWxlY3Rpb25DaGFuZ2U6IGF2YWxvbi5ub29wLFxuICAgICAgICBoYW5kbGVDaGVja0FsbChlKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRDdXJyZW50UGFnZURhdGEoKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZC5lbnN1cmUocmVjb3JkW3RoaXMua2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmVuc3VyZShyZWNvcmQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHRoaXMucGFnaW5hdGlvbkNvbmZpZy50b3RhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkLnJlbW92ZUFsbChlbCA9PiBkYXRhLm1hcChyZWNvcmQgPT4gcmVjb3JkW3RoaXMua2V5XSkuaW5kZXhPZihlbCkgIT09IC0xKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucmVtb3ZlQWxsKGVsID0+IGRhdGEuaW5kZXhPZihlbCkgIT09IC0xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZSh0aGlzLmNoZWNrZWQsIHRoaXMuc2VsZWN0aW9uLiRtb2RlbCk7XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0QWxsKGUudGFyZ2V0LmNoZWNrZWQsIHRoaXMuc2VsZWN0aW9uLiRtb2RlbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNoZWNrKGNoZWNrZWQsIHJlY29yZCkge1xuICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQuZW5zdXJlKHJlY29yZFt0aGlzLmtleV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmVuc3VyZShyZWNvcmQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQucmVtb3ZlKHJlY29yZFt0aGlzLmtleV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnJlbW92ZShyZWNvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UodGhpcy5jaGVja2VkLCB0aGlzLnNlbGVjdGlvbi4kbW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5vblNlbGVjdChyZWNvcmQuJG1vZGVsLCBjaGVja2VkLCB0aGlzLnNlbGVjdGlvbi4kbW9kZWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFjdGlvbnM6IGF2YWxvbi5ub29wLFxuICAgICAgICBoYW5kbGUodHlwZSwgY29sLCByZWNvcmQsICRpbmRleCwgLi4uZXh0cmEpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gcmVjb3JkW2NvbC5kYXRhSW5kZXhdLiRtb2RlbCB8fCByZWNvcmRbY29sLmRhdGFJbmRleF07XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnModHlwZSwgdGV4dCwgcmVjb3JkLiRtb2RlbCwgJGluZGV4LCAuLi5leHRyYSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFnaW5hdGlvbjogZGVmYXVsdFBhZ2luYXRpb24oKSxcbiAgICAgICAgcGFnaW5hdGlvbkNvbmZpZzogZGVmYXVsdFBhZ2luYXRpb24oKSxcbiAgICAgICAgaGFuZGxlUGFnZUNoYW5nZShjdXJyZW50UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uQ29uZmlnLm9uQ2hhbmdlKGN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkNvbmZpZy5jdXJyZW50ID0gY3VycmVudFBhZ2U7XG5cbiAgICAgICAgICAgIHRoaXMuJGZpcmUoJ2NoZWNrZWQubGVuZ3RoJywgdGhpcy5jaGVja2VkLmxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMucGFnaW5hdGlvbkNvbmZpZy4kbW9kZWwpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDdXJyZW50UGFnZURhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4gIWlzTmFOKHRoaXMucGFnaW5hdGlvbkNvbmZpZy50b3RhbCkgPyB0aGlzLmRhdGEgOiB0aGlzLmRhdGEuc2xpY2UoXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uQ29uZmlnLnBhZ2VTaXplICogKHRoaXMucGFnaW5hdGlvbkNvbmZpZy5jdXJyZW50IC0gMSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uQ29uZmlnLnBhZ2VTaXplICogdGhpcy5wYWdpbmF0aW9uQ29uZmlnLmN1cnJlbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgICRjb21wdXRlZDoge1xuICAgICAgICAgICAgdG90YWwoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFpc05hTih0aGlzLnBhZ2luYXRpb25Db25maWcudG90YWwpID8gdGhpcy5wYWdpbmF0aW9uQ29uZmlnLnRvdGFsIDogdGhpcy5kYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBvbkNoYW5nZTogYXZhbG9uLm5vb3AsXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGdldENoaWxkVGVtcGxhdGVEZXNjcmlwdG9yKHRoaXMpO1xuICAgICAgICAgICAgZGVzY3JpcHRvci5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5wcm9wcy50eXBlID09ICdzZWxlY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5ID0gY29sdW1uLnByb3BzLmRhdGFJbmRleCB8fCB0aGlzLmtleTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWVkU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zID0gZ2V0Q29sdW1uQ29uZmlnKGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ2NoZWNrZWQubGVuZ3RoJywgKG5ld1YpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZUtleXMgPSB0aGlzLmdldEN1cnJlbnRQYWdlRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVjb3JkID0+IHJlY29yZFt0aGlzLmtleV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBbGxDaGVja2VkID0gY3VycmVudFBhZ2VLZXlzXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IHRoaXMuY2hlY2tlZC5jb250YWlucyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICAubGVuZ3RoID09IGN1cnJlbnRQYWdlS2V5cy5sZW5ndGg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdkYXRhJywgKHYpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdkYXRhLmxlbmd0aCcsIHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3BhZ2luYXRpb24nLCB2ID0+IHtcbiAgICAgICAgICAgICAgICBhdmFsb24ubWl4KHRoaXMucGFnaW5hdGlvbkNvbmZpZywgdik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdwYWdpbmF0aW9uLmN1cnJlbnQnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25Db25maWcuY3VycmVudCA9IHY7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdwYWdpbmF0aW9uLnBhZ2VTaXplJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uQ29uZmlnLnBhZ2VTaXplID0gdjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3BhZ2luYXRpb24udG90YWwnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25Db25maWcudG90YWwgPSB2O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgncGFnaW5hdGlvbi5vbkNoYW5nZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkNvbmZpZy5vbkNoYW5nZSA9IHY7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJGZpcmUoJ3BhZ2luYXRpb24nLCB0aGlzLnBhZ2luYXRpb24uJG1vZGVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICB9LFxuICAgICAgICBvbkRpc3Bvc2Uodm0sIGVsKSB7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZnVuY3Rpb24gZ2V0Q29sdW1uQ29uZmlnKGRlc2NyaXB0b3IsIGxldmVsID0gMSkge1xuICAgIHJldHVybiBkZXNjcmlwdG9yLnJlZHVjZSgoYWNjLCBjb2x1bW4pID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi5pcyAhPSAnbXMtdGFibGUtaGVhZGVyJykgcmV0dXJuIGFjYztcbiAgICAgICAgaWYgKGNvbHVtbi5wcm9wcy50eXBlID09ICdzZWxlY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbmxpbmVUZW1wbGF0ZSA9IGNvbHVtbi5pbmxpbmVUZW1wbGF0ZTtcbiAgICAgICAgaW5saW5lVGVtcGxhdGUgPSBpbmxpbmVUZW1wbGF0ZS5yZXBsYWNlKC8obXMtfDopc2tpcD1cIlteXCJdKlwiL2csICcnKTtcbiAgICAgICAgaW5saW5lVGVtcGxhdGUgPSBpbmxpbmVUZW1wbGF0ZS5yZXBsYWNlKC88XFxzKm1zLXRhYmxlLWhlYWRlcltePl0qPi4qPFxcL1xccyptcy10YWJsZS1oZWFkZXJcXHMqPi9nLCAnJyk7XG4gICAgICAgIGlubGluZVRlbXBsYXRlID0gaW5saW5lVGVtcGxhdGUucmVwbGFjZSgvKG1zLXw6KWNsaWNrPVwiaGFuZGxlXFwoKFteXCJdKilcXClcIi9nLCAoJDAsICQxLCAkMiwgJDMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgJHskMX1jbGljaz1cImhhbmRsZSgkeyQyfSwpXCJgLnJlcGxhY2UoLywvLCAnLCBjb2wsIHJlY29yZCwgJGluZGV4LCcpLnJlcGxhY2UoLyxcXCkvLCAnKScpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IGNvbHVtbi5wcm9wcy50aXRsZSxcbiAgICAgICAgICAgIGRhdGFJbmRleDogY29sdW1uLnByb3BzLmRhdGFJbmRleCB8fCAnJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAvXlxccyokLy50ZXN0KGlubGluZVRlbXBsYXRlKSA/ICd7e3JlY29yZC4nICsgY29sdW1uLnByb3BzLmRhdGFJbmRleCArICd9fScgOiBpbmxpbmVUZW1wbGF0ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0Q29sdW1uQ29uZmlnKGNvbHVtbi5jaGlsZHJlbiwgbGV2ZWwgKyAxKSk7XG4gICAgfSwgW10pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdGFibGUvbXMtdGFibGUudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgY29udHJvbENvbXBvbmVudCBmcm9tICcuLi9tcy1mb3JtL21zLWNvbnRyb2wnO1xuaW1wb3J0IHsgZW1pdFRvRm9ybUl0ZW0gfSBmcm9tICcuLi9tcy1mb3JtL3V0aWxzJztcbmltcG9ydCB7IGZpbmRQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5cbi8qKlxuICog5aSa6KGM5paH5pys6L6T5YWl57uE5Lu2XG4gKiBAcHJvcCB2YWx1ZSDnu4Tku7blgLwoaW5oZXJpdClcbiAqIEBwcm9wIGNvbCDlrZfmrrXot6/lvoQoaW5oZXJpdClcbiAqIEBwcm9wIHJvd3Mg5paH5pys5qGG6KGM5pWwXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBgYGAgaHRtbFxuICogPG1zLXRleHRhcmVhIDp3aWRnZXQ9XCJ7dmFsdWU6IEBiaW8sIGNvbDogJ2JpbycsIHJvd3M6IDN9XCI+PC9tcy10ZXh0YXJlYT5cbiAqIGBgYFxuICovXG5jb250cm9sQ29tcG9uZW50LmV4dGVuZCh7XG4gICAgZGlzcGxheU5hbWU6ICdtcy10ZXh0YXJlYScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtdGV4dGFyZWEuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHJvd3M6ICcnLFxuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgbWFwVmFsdWVUb1RleHQodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGVtaXRUb0Zvcm1JdGVtKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3ZhbHVlJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvVGV4dCh2KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdiB9LFxuICAgICAgICAgICAgICAgICAgICBkZW55VmFsaWRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGFuZ2VkJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9UZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy10ZXh0YXJlYS9tcy10ZXh0YXJlYS50cyIsImltcG9ydCAnLi9tcy1jYWxlbmRhcic7XG5pbXBvcnQgJy4vbXMtY2FsZW5kYXIubGVzcyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1jYWxlbmRhci9pbmRleC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBtb250aFRhYmxlID0gW107XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLWNhbGVuZGFyLXllYXItdmlldycsIHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy1jYWxlbmRhci15ZWFyLXZpZXcuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHRhYmxlOiBbXSxcbiAgICAgICAgLy8gMC3mnIjop4blm77vvIwxLeW5tOinhuWbvu+8jDIt5Y2B5bm06KeG5Zu+77yMMy3nmb7lubTop4blm75cbiAgICAgICAgdmlldzogMSxcbiAgICAgICAgY3VycmVudE1vbnRoOiAnJyxcbiAgICAgICAgY3VycmVudFllYXI6IDAsXG4gICAgICAgIGlzU2VsZWN0ZWQoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TZWxlY3Q6IGF2YWxvbi5ub29wLFxuICAgICAgICBoYW5kbGVDZWxsQ2xpY2soZWwpIHtcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3QoZWwpO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXQoKSB7XG4gICAgICAgICAgICBjb25zdCBtb250aExpc3QgPSBtb21lbnQubG9jYWxlRGF0YSgpLm1vbnRoc1Nob3J0KCk7XG4gICAgICAgICAgICBpZiAobW9udGhUYWJsZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBbMCwgMywgNiwgOV0uZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW9udGhUYWJsZS5wdXNoKG1vbnRoTGlzdC5zbGljZShuLCBuICsgMykubWFwKG0gPT4gKHsgbGFiZWw6IG0sIHZhbHVlOiBtIH0pKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgndmlldycsIHYgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0T2ZEZWNhZGUgPSB0aGlzLmN1cnJlbnRZZWFyIC0gdGhpcy5jdXJyZW50WWVhciAlIDEwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0T2ZDZW50dXJ5ID0gdGhpcy5jdXJyZW50WWVhciAtIHRoaXMuY3VycmVudFllYXIgJSAxMDA7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGUgPSBtb250aFRhYmxlOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGUgPSBbMCwgMywgNiwgOV0ubWFwKG4gPT4gYXZhbG9uLnJhbmdlKHN0YXJ0T2ZEZWNhZGUgLSAxLCBzdGFydE9mRGVjYWRlICsgMTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKG4sIG4gKyAzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAobSA9PiAoeyBsYWJlbDogbSwgdmFsdWU6IG0gfSkpKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGUgPSBbMCwgMywgNiwgOV0ubWFwKG4gPT4gYXZhbG9uLnJhbmdlKHN0YXJ0T2ZDZW50dXJ5IC0gMTAsIHN0YXJ0T2ZDZW50dXJ5ICsgMTEwLCAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UobiwgbiArIDMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChtID0+ICh7IGxhYmVsOiBgJHttfS0ke20gKyA5fWAsIHZhbHVlOiBtIH0pKSk7IGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ2N1cnJlbnRZZWFyJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZmlyZSgndmlldycsIHRoaXMudmlldyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtY2FsZW5kYXIvbXMtY2FsZW5kYXIteWVhci12aWV3LnRzIiwiaW1wb3J0ICcuL21zLWRhdGVwaWNrZXInO1xuaW1wb3J0ICcuL21zLWRhdGVwaWNrZXIubGVzcyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1kYXRlcGlja2VyL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjbXBWbSkge1xuICAgIGlmIChhdmFsb24udm1vZGVsc1tjbXBWbS5wYW5lbFZtSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGF2YWxvbi52bW9kZWxzW2NtcFZtLnBhbmVsVm1JZF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGF2YWxvbi5kZWZpbmUoe1xuICAgICAgICAkaWQ6IGNtcFZtLnBhbmVsVm1JZCxcbiAgICAgICAgY3VycmVudERhdGVBcnJheTogJycsXG4gICAgICAgICRtb21lbnQ6IG1vbWVudCgpLFxuICAgICAgICBjdXJyZW50RGF5OiAwLFxuICAgICAgICBjdXJyZW50TW9udGg6ICcnLFxuICAgICAgICBjdXJyZW50WWVhcjogMCxcbiAgICAgICAgJHN0YXJ0RGF0ZTogbnVsbCxcbiAgICAgICAgJGVuZERhdGU6IG51bGwsXG4gICAgICAgIGRpc2FibGVkRGF0ZSgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBzaG93VGltZTogZmFsc2UsXG4gICAgICAgIC8vIC0xLeWkqe+8iOaXtumXtO+8ieinhuWbvu+8jDAt5pyI6KeG5Zu+77yMMS3lubTop4blm77vvIwyLeWNgeW5tOinhuWbvu+8jDMt55m+5bm06KeG5Zu+XG4gICAgICAgIHZpZXdNb2RlOiAwLFxuICAgICAgICBzdGFnZWQ6IDAsXG4gICAgICAgICRjb21wdXRlZDoge1xuICAgICAgICAgICAgc3RhcnRPZkRlY2FkZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WWVhciAtIHRoaXMuY3VycmVudFllYXIgJSAxMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFydE9mQ2VudHVyeSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WWVhciAtIHRoaXMuY3VycmVudFllYXIgJSAxMDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgIHRoaXMudmlld01vZGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5zdGFnZWQgPSAwO1xuICAgICAgICAgICAgdGhpcy4kbW9tZW50ID0gY21wVm0uc2VsZWN0ZWQgPyBtb21lbnQoY21wVm0uc2VsZWN0ZWQsIGNtcFZtLmZvcm1hdCkgOiBtb21lbnQoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERheSA9IHRoaXMuJG1vbWVudC5kYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb250aCA9IHRoaXMuJG1vbWVudC5mb3JtYXQoJ01NTScpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50WWVhciA9IHRoaXMuJG1vbWVudC55ZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlQXJyYXkgPSB0aGlzLiRtb21lbnQudG9BcnJheSgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dUaW1lID0gY21wVm0uc2hvd1RpbWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOaehOmAoOS4jeWPr+mAieaLqeaXpeacn+eahOWIpOaWreWHveaVsFxuICAgICAgICAgICAgaWYgKGNtcFZtLnN0YXJ0RGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0YXJ0RGF0ZSA9IG1vbWVudChjbXBWbS5zdGFydERhdGUsIGNtcFZtLmZvcm1hdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY21wVm0uZW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVuZERhdGUgPSBtb21lbnQoY21wVm0uZW5kRGF0ZSwgY21wVm0uZm9ybWF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbXBWbS5zdGFydERhdGUgfHwgY21wVm0uZW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOiuvue9ruS6huW8gOWni+aXpeacn+WSjOe7k+adn+aXpeacn++8jOWImeaNruatpOaehOmAoOS4gOS4quWIpOaWreWHveaVsFxuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWREYXRlID0gKGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXJ0RGF0ZSA9PT0gbnVsbCAmJiB0aGlzLiRlbmREYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudE1vbWVudCA9IG1vbWVudChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTYW1lT3JBZnRlclN0YXJ0RGF0ZSA9IGN1cnJlbnRNb21lbnQuaXNTYW1lT3JBZnRlcih0aGlzLiRzdGFydERhdGUsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2FtZU9yQmVmb3JlRW5kRGF0ZSA9IGN1cnJlbnRNb21lbnQuaXNTYW1lT3JCZWZvcmUodGhpcy4kZW5kRGF0ZSwgJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXJ0RGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWVPckJlZm9yZUVuZERhdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJGVuZERhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lT3JBZnRlclN0YXJ0RGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIShpc1NhbWVPckFmdGVyU3RhcnREYXRlICYmIGlzU2FtZU9yQmVmb3JlRW5kRGF0ZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5ZCm5YiZ5L2/55So6buY6K6k55qE5oiW6ICF5aSW6YOo5Lyg6L+b5p2l55qE5Yik5pat5Ye95pWwXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZERhdGUgPSBjbXBWbS5kaXNhYmxlZERhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoYW5nZVZpZXcodmlld01vZGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXdNb2RlID09PSAwICYmIHZpZXdNb2RlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgLy8g5LuO5pyI6KeG5Zu+55u05o6l6Lez5Yiw5Y2B5bm06KeG5Zu+5ZCO77yM6L+U5Zue5pe26Lez6L+H5bm06KeG5Zu+XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFnZWQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52aWV3TW9kZSA9IHZpZXdNb2RlO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVZZWFyVmlld1NlbGVjdChlbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlld01vZGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb250aCA9IGVsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJG1vbWVudC5tb250aChlbC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUFycmF5ID0gdGhpcy4kbW9tZW50LnRvQXJyYXkoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmlld01vZGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRZZWFyID0gZWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kbW9tZW50LnllYXIoZWwudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVBcnJheSA9IHRoaXMuJG1vbWVudC50b0FycmF5KCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXdNb2RlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50WWVhciA9IGVsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJG1vbWVudC55ZWFyKGVsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlQXJyYXkgPSB0aGlzLiRtb21lbnQudG9BcnJheSgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZSA9IHRoaXMudmlld01vZGUgLSAxIC0gdGhpcy5zdGFnZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFnZWQgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlID0gdGhpcy52aWV3TW9kZSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG11dGF0ZShhY3Rpb24sIC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIHRoaXMuJG1vbWVudFthY3Rpb25dLmFwcGx5KHRoaXMuJG1vbWVudCwgYXJncyk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXkgPSB0aGlzLiRtb21lbnQuZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9udGggPSB0aGlzLiRtb21lbnQuZm9ybWF0KCdNTU0nKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFllYXIgPSB0aGlzLiRtb21lbnQueWVhcigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUFycmF5ID0gdGhpcy4kbW9tZW50LnRvQXJyYXkoKS50b1N0cmluZygpO1xuICAgICAgICB9LFxuICAgICAgICB0b2RheSgpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2FsZW5kYXJDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9tZW50KClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjYWxlbmRhci1jaGFuZ2VkJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNhbGVuZGFyQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgIHRoaXMuJG1vbWVudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF5ID0gdGhpcy4kbW9tZW50LmRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbnRoID0gdGhpcy4kbW9tZW50LmZvcm1hdCgnTU1NJyk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRZZWFyID0gdGhpcy4kbW9tZW50LnllYXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG93VGltZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlVGltZXBpY2tlckNoYW5nZShlKSB7XG4gICAgICAgICAgICBjb25zdCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kIH0gPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuJG1vbWVudC5ob3VyKGhvdXIpLm1pbnV0ZShtaW51dGUpLnNlY29uZChzZWNvbmQpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgIGNtcFZtLnNlbGVjdGVkID0gdGhpcy4kbW9tZW50LmZvcm1hdChjbXBWbS5mb3JtYXQpO1xuICAgICAgICAgICAgY21wVm0ucGFuZWxWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBjbXBWbS5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogY21wVm0uc2VsZWN0ZWQgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZXBpY2tlci1jaGFuZ2VkJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci1wYW5lbC50cyIsImltcG9ydCAnLi9tcy1kaWFsb2cnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtZGlhbG9nL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IHsgZmluZFBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2FuZS11dGlsJztcblxuLyoqXG4gKiDooajljZXpobnnu4Tku7ZcbiAqIEBwcm9wIGxhYmVsIOihqOWNlemhueagh+etvlxuICogXG4gKiBAZXhhbXBsZVxuICogYGBgIGh0bWxcbiAqIDxtcy1mb3JtLWl0ZW0gOndpZGdldD1cIntsYWJlbDogJ+agh+mimCd9XCI+XG4gICAgICAgIDxtcy1pbnB1dCA6d2lkZ2V0PVwie3ZhbHVlOiBAdGl0bGUsIGNvbDogJ3RpdGxlJ31cIj48L21zLWlucHV0PlxuICAgIDwvbXMtZm9ybS1pdGVtPlxuICogYGBgXG4gKi9cbmF2YWxvbi5jb21wb25lbnQoJ21zLWZvcm0taXRlbScsIHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy1mb3JtLWl0ZW0uaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICRmb3JtVm06IG51bGwsXG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgY29udHJvbDogJycsXG4gICAgICAgIGlubGluZTogZmFsc2UsXG4gICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgcmVhc29uczogW10sXG4gICAgICAgIGhhc1J1bGVzOiBmYWxzZSxcbiAgICAgICAgc2hvd0ljb246IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgIGlubGluZUZvcm1Hcm91cFN0eWxlOiB7IHZlcnRpY2FsQWxpZ246ICd0b3AnIH0sXG4gICAgICAgIGlubGluZU1lc3NhZ2VTdHlsZTogeyBtYXJnaW5Cb3R0b206IDAgfSxcbiAgICAgICAgb25GaWVsZENoYW5nZShkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICB0aGlzLiRmb3JtVm0udHlwZSAhPT0gJ3NlYXJjaCcgJiYgdGhpcy4kZm9ybVZtLiRmb3JtLnNldEZpZWxkc1ZhbHVlKHtcbiAgICAgICAgICAgICAgICBbZGVzY3JpcHRvci5uYW1lXTogeyB2YWx1ZTogZGVzY3JpcHRvci52YWx1ZSwgZGVueVZhbGlkYXRlOiBkZXNjcmlwdG9yLmRlbnlWYWxpZGF0ZSB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghZGVzY3JpcHRvci5ydWxlcykgcmV0dXJuIDtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yLnNob3dJY29uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ljb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBkZXNjcmlwdG9yLnNob3dJY29uO1xuICAgICAgICAgICAgdGhpcy5oYXNSdWxlcyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiRmb3JtVm0uJGZvcm0uYWRkRmllbGRzKHtcbiAgICAgICAgICAgICAgICBbZGVzY3JpcHRvci5uYW1lXTogeyBydWxlczogZGVzY3JpcHRvci5ydWxlcyB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJGZvcm1WbS4kZm9ybS5vbignZXJyb3InICsgZGVzY3JpcHRvci5uYW1lLCAocmVhc29ucykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVhc29ucyA9IHJlYXNvbnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJGZvcm1WbS4kZm9ybS5vbigncmVzZXQnLCBmaWVsZHMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh+T2JqZWN0LmtleXMoZmllbGRzKS5pbmRleE9mKGRlc2NyaXB0b3IubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYXNvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Gb3JtQ2hhbmdlKG1ldGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRmb3JtVm0uJGZvcm0uYXV0b0FzeW5jQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRmb3JtVm0ub25Gb3JtQ2hhbmdlKG1ldGEpO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5fY3R5cGVfID0gJ21zLWZvcm0taXRlbSc7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuX3ZtXyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLiRmb3JtVm0gPSBmaW5kUGFyZW50Q29tcG9uZW50KHRoaXMsICdtcy1mb3JtJyk7XG4gICAgICAgICAgICBpZiAodGhpcy4kZm9ybVZtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ21zLWZvcm0taXRlbSDlv4XpobvmlL7lnKggbXMtZm9ybSDlhoUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmxpbmUgPSB0aGlzLiRmb3JtVm0uaW5saW5lO1xuICAgICAgICB9LFxuICAgICAgICBvblJlYWR5KGV2ZW50KSB7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNvbGVTbG90OiAnY29udHJvbCdcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtZm9ybS9tcy1mb3JtLWl0ZW0udHMiLCJpbXBvcnQgJy4vbXMtaW5wdXQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtaW5wdXQvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbi8qKlxuICogbG9hZGluZyDmjIfku6RcbiAqIFxuICogQGV4YW1wbGVcbiAqIGBgYCBodG1sXG4gKiA8dGFibGUgOmxvYWRpbmc9XCJ0cnVlXCI+Li4uPC90YWJsZT5cbiAqIGBgYFxuICovXG5hdmFsb24uZGlyZWN0aXZlKCdsb2FkaW5nJywge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICB0aGlzLm9sZFBvc2l0aW9uU3R5bGUgPSAnJztcbiAgICB9LFxuICAgIHVwZGF0ZSh2ZG9tLCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvbSA9IHZkb20uZG9tO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2xvYmFsLmdldENvbXB1dGVkU3R5bGUgPyBnbG9iYWwuZ2V0Q29tcHV0ZWRTdHlsZShkb20pIDogZG9tLmN1cnJlbnRTdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBkb20ub2Zmc2V0V2lkdGgsIGhlaWdodCA9IGRvbS5zY3JvbGxIZWlnaHQsIGNsYXNzTmFtZSA9IGRvbS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICB9ID0gY29tcHV0ZWRTdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbGRQb3NpdGlvblN0eWxlID0gZG9tLnN0eWxlLnBvc2l0aW9uO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWFg+e0oOaYr+makOiXj+eahO+8jOS7gOS5iOmDveS4jeWBmlxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5a695bqm5ZKM6auY5bqm6YO95LiN5Li6MO+8jOWImea3u+WKoGxvYWRpbmfpga7nvalcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoICE9PSAwICYmIGhlaWdodCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXNrRWxlbWVudCA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbWFza0VsZW1lbnQuY2xhc3NOYW1lID0gJ2FuZS1sb2FkaW5nLW1hc2snO1xuICAgICAgICAgICAgICAgICAgICBtYXNrRWxlbWVudC5pbm5lclRleHQgPSAn5Yqg6L295LitLi4uJztcbiAgICAgICAgICAgICAgICAgICAgbWFza0VsZW1lbnQuc3R5bGUubGVmdCA9IDAgLSAoYm9yZGVyTGVmdFdpZHRoID09PSAnbWVkaXVtJyA/IDAgOiBwYXJzZUZsb2F0KGJvcmRlckxlZnRXaWR0aCkpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgbWFza0VsZW1lbnQuc3R5bGUudG9wID0gMCAtIChib3JkZXJUb3BXaWR0aCA9PT0gJ21lZGl1bScgPyAwIDogcGFyc2VGbG9hdChib3JkZXJUb3BXaWR0aCkpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgbWFza0VsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50LnN0eWxlLmxpbmVIZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvbS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghfmAgJHtjbGFzc05hbWV9IGAuaW5kZXhPZignIG1hc2tlZCAnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLmNsYXNzTmFtZSArPSAnIG1hc2tlZCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZG9tLmFwcGVuZENoaWxkKG1hc2tFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG1hc2tFbGVtZW50O1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvbSA9IHZkb20uZG9tO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hc2tFbGVtZW50ID0gdGhpcy5pbnN0YW5jZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBkb20uY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMub2xkUG9zaXRpb25TdHlsZSA9IGRvbS5zdHlsZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBtYXNrRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBkb20uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgIGlmICghfmAgJHtjbGFzc05hbWV9IGAuaW5kZXhPZignIG1hc2tlZCAnKSkge1xuICAgICAgICAgICAgICAgICAgICBkb20uY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyBtYXNrZWQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvbSA9IHZkb20uZG9tO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXNrRWxlbWVudCA9IHRoaXMuaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGRvbS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9sZFBvc2l0aW9uU3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5zdHlsZS5wb3NpdGlvbiA9IHRoaXMub2xkUG9zaXRpb25TdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkb20uY2xhc3NOYW1lID0gYCAke2NsYXNzTmFtZX0gYC5yZXBsYWNlKC9cXHMqbWFza2VkXFxzKi8sICcgJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlRGlzcG9zZSgpIHtcbiAgICAgICAgY29uc3QgZG9tID0gdGhpcy5ub2RlLmRvbTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSAmJiBkb20ucmVtb3ZlQ2hpbGQodGhpcy5pbnN0YW5jZSk7XG4gICAgfVxufSk7XG5cbi8qKlxuICog5YWo5bGAIGxvYWRpbmcg5pa55rOVXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBgYGAganNcbiAqIGltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL2NvbXBvbmVudHMvbXMtbG9hZGluZyc7XG4gKiBMb2FkaW5nLnNob3coKTtcbiAqIHNldFRpbWVvdXQoKCkgPT4ge1xuICogICBMb2FkaW5nLmhpZGUoKTtcbiAqIH0sIDUwMDApXG4gKiBgYGBcbiAqL1xuY29uc3QgbG9hZGluZ0RpcmVjdGl2ZSA9IGF2YWxvbi5kaXJlY3RpdmVzWydsb2FkaW5nJ107XG5jb25zdCBnbG9iYWxMb2FkaW5nQ29udGV4dDoge1xuICAgIG5vZGU6IHsgZG9tOiBIVE1MRWxlbWVudCB9LFxuICAgIGluc3RhbmNlPzogSFRNTERpdkVsZW1lbnRcbn0gPSB7XG4gICAgbm9kZTogeyBkb206IGRvY3VtZW50LmJvZHkgfVxufTtcblxuZXhwb3J0IGNvbnN0IExvYWRpbmcgPSB7XG4gICAgc2hvdygpIHtcbiAgICAgICAgaWYgKGdsb2JhbExvYWRpbmdDb250ZXh0Lmluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUuaW5pdC5jYWxsKGdsb2JhbExvYWRpbmdDb250ZXh0KTtcbiAgICAgICAgICAgIGF2YWxvbi5yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZS51cGRhdGUuY2FsbChnbG9iYWxMb2FkaW5nQ29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICBkb206IGdsb2JhbExvYWRpbmdDb250ZXh0Lm5vZGUuZG9tXG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUudXBkYXRlLmNhbGwoZ2xvYmFsTG9hZGluZ0NvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBkb206IGdsb2JhbExvYWRpbmdDb250ZXh0Lm5vZGUuZG9tXG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGlkZSgpIHtcbiAgICAgICAgaWYgKGdsb2JhbExvYWRpbmdDb250ZXh0Lmluc3RhbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUudXBkYXRlLmNhbGwoZ2xvYmFsTG9hZGluZ0NvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBkb206IGdsb2JhbExvYWRpbmdDb250ZXh0Lm5vZGUuZG9tXG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtbG9hZGluZy9tcy1sb2FkaW5nLWRpcmVjdGl2ZS50cyIsImltcG9ydCAnLi9tcy1tZW51Lmxlc3MnO1xuaW1wb3J0ICcuL21zLW1lbnUnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtbWVudS9pbmRleC50cyIsImltcG9ydCBtZXNzYWdlIGZyb20gJy4vbXMtbWVzc2FnZSc7XG5leHBvcnQgZGVmYXVsdCBtZXNzYWdlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtbWVzc2FnZS9pbmRleC50cyIsImltcG9ydCBub3RpZmljYXRpb24gZnJvbSAnLi9tcy1ub3RpZmljYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgbm90aWZpY2F0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtbm90aWZpY2F0aW9uL2luZGV4LnRzIiwiaW1wb3J0ICcuL21zLXJhZGlvJztcbmltcG9ydCAnLi9tcy1yYWRpby1ncm91cCc7XG5pbXBvcnQgJy4vbXMtcmFkaW8ubGVzcyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1yYWRpby9pbmRleC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtc2VsZWN0LW9wdGlvbicsIHtcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgc29sZVNsb3Q6ICdsYWJlbCcsXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtc2VsZWN0L21zLXNlbGVjdC1vcHRpb24udHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjbXBWbSkge1xuICAgIGlmIChhdmFsb24udm1vZGVsc1tjbXBWbS5wYW5lbFZtSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGF2YWxvbi52bW9kZWxzW2NtcFZtLnBhbmVsVm1JZF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGF2YWxvbi5kZWZpbmUoe1xuICAgICAgICAkaWQ6IGNtcFZtLnBhbmVsVm1JZCxcbiAgICAgICAgc2VsZWN0aW9uOiBbXSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGlzTXVsdGlwbGU6IGNtcFZtLmlzTXVsdGlwbGUsXG4gICAgICAgIG9wdGlvbnM6IGNtcFZtLm9wdGlvbnMudG9KU09OKCksXG4gICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICAgICAgZ2V0RmlsdGVyZWRPcHRpb25zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIodGhpcy5maWx0ZXJGbik7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlckZuKGVsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNtcFZtLnJlbW90ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChhdmFsb24uZXNjYXBlUmVnRXhwKHRoaXMuc2VhcmNoVmFsdWUpLCAnaScpO1xuICAgICAgICAgICAgcmV0dXJuIHJlZy50ZXN0KGVsLmxhYmVsKSB8fCByZWcudGVzdChlbC52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZU9wdGlvbkNsaWNrKGUsIG9wdGlvbikge1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbXBWbS5pc011bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLnNvbWUobyA9PiBvLnZhbHVlID09PSBvcHRpb24udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnJlbW92ZUFsbChvID0+IG8udmFsdWUgPT09IG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucHVzaChvcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbXBWbS5mb2N1c1NlYXJjaCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFtvcHRpb25dO1xuICAgICAgICAgICAgICAgIGNtcFZtLnBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24udG9KU09OKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGlvbi5tYXAocyA9PiBzLnZhbHVlKTtcbiAgICAgICAgICAgIGNtcFZtLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiBjbXBWbS5pc011bHRpcGxlID8gdmFsdWUgOiB2YWx1ZVswXSB8fCAnJyB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNtcFZtLmRpc3BsYXlWYWx1ZSA9IG9wdGlvbi5sYWJlbDtcbiAgICAgICAgICAgIGNtcFZtLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtc2VsZWN0L21zLXNlbGVjdC1wYW5lbC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtdGFibGUtaGVhZGVyJywge1xuICAgIHRlbXBsYXRlOiAnPHRoPjxzbG90IC8+PC90aD4nLFxuICAgIHNvbGVTbG90OiAnY29udGVudCcsXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgY29udGVudDogJycsXG4gICAgICAgIGNvbDogJydcbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXRhYmxlL21zLXRhYmxlLWhlYWRlci50cyIsImltcG9ydCAnLi9tcy10ZXh0YXJlYSc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy10ZXh0YXJlYS9pbmRleC50cyIsImltcG9ydCAnLi9tcy10aW1lcGlja2VyJztcbmltcG9ydCAnLi9tcy10aW1lcGlja2VyLmxlc3MnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlci9pbmRleC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY21wVm0pIHtcbiAgICBpZiAoYXZhbG9uLnZtb2RlbHNbY21wVm0ucGFuZWxWbUlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhdmFsb24udm1vZGVsc1tjbXBWbS5wYW5lbFZtSWRdO1xuICAgIH1cblxuICAgIHJldHVybiBhdmFsb24uZGVmaW5lKHtcbiAgICAgICAgJGlkOiBjbXBWbS5wYW5lbFZtSWQsXG4gICAgICAgIGN1cnJlbnREYXRlQXJyYXk6ICcnLFxuICAgICAgICAkbW9tZW50OiBtb21lbnQoKSxcbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICB0aGlzLiRtb21lbnQgPSBjbXBWbS5zZWxlY3RlZCA/IG1vbWVudChjbXBWbS5zZWxlY3RlZCwgY21wVm0uZm9ybWF0KSA6IG1vbWVudCgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUFycmF5ID0gdGhpcy4kbW9tZW50LnRvQXJyYXkoKS50b1N0cmluZygpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVUaW1lcGlja2VyQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQgfSA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy4kbW9tZW50LmhvdXIoaG91cikubWludXRlKG1pbnV0ZSkuc2Vjb25kKHNlY29uZCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlQXJyYXkgPSB0aGlzLiRtb21lbnQudG9BcnJheSgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjbXBWbS5zZWxlY3RlZCA9IHRoaXMuJG1vbWVudC5mb3JtYXQoY21wVm0uZm9ybWF0KTtcblxuICAgICAgICAgICAgY21wVm0uaGFuZGxlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IGNtcFZtLnNlbGVjdGVkIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RpbWVwaWNrZXItY2hhbmdlZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlci9tcy10aW1lcGlja2VyLXBhbmVsLnRzIiwiaW1wb3J0ICcuL21zLXRyZWUnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdHJlZS9pbmRleC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCAqIGFzIGRvbUFsaWduIGZyb20gJ2RvbS1hbGlnbic7XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLXRyaWdnZXInLCB7XG4gICAgdGVtcGxhdGU6ICc8c3BhbiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L3NwYW4+JyxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIGlubmVyVm1JZDogJycsXG4gICAgICAgIGlubmVyQ2xhc3M6ICcnLFxuICAgICAgICBpbm5lclRlbXBsYXRlOiAnJyxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICB3aXRoSW5Cb3goKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICBnZXRUYXJnZXQ6IGF2YWxvbi5ub29wLFxuICAgICAgICBvbkhpZGU6IGF2YWxvbi5ub29wLFxuICAgICAgICBoaWRlKHBhbmVsKSB7XG4gICAgICAgICAgICBwYW5lbC5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG4gICAgICAgICAgICBwYW5lbC5zdHlsZS5sZWZ0ID0gJy05OTk5cHgnO1xuICAgICAgICAgICAgdGhpcy5vbkhpZGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdFBhbmVsKHBhbmVsOiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgRE9DID0gZG9jdW1lbnQsIGJvZHkgPSBET0MuYm9keTtcbiAgICAgICAgICAgIGNvbnN0IG1lZGl1bSA9IERPQy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lZGl1bS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy4kaWQpO1xuICAgICAgICAgICAgbWVkaXVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246IGFic29sdXRlOyB0b3A6IDBweDsgbGVmdDogMHB4OyB3aWR0aDogMTAwJTsnKTtcbiAgICAgICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLmlubmVyQ2xhc3MpO1xuICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICd6LWluZGV4OiAxMDUwO2xlZnQ6IC05OTk5cHg7dG9wOiAtOTk5OXB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTtvdXRsaW5lOiBub25lO292ZXJmbG93OiBoaWRkZW47Jyk7XG4gICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJzppbXBvcnRhbnQnLCB0aGlzLmlubmVyVm1JZCk7XG4gICAgICAgICAgICBwYW5lbC5pbm5lckhUTUwgPSB0aGlzLmlubmVyVGVtcGxhdGUucmVwbGFjZSgvXFxyfFxcbi9nLCAnJyk7XG4gICAgICAgICAgICBtZWRpdW0uYXBwZW5kQ2hpbGQocGFuZWwpO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtZWRpdW0pO1xuXG4gICAgICAgICAgICBhdmFsb24uc2NhbihwYW5lbCwgYXZhbG9uLnZtb2RlbHNbdGhpcy5pbm5lclZtSWRdKTtcblxuICAgICAgICAgICAgYXZhbG9uLmJpbmQoRE9DLCAnY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlICYmIHBhbmVsICE9PSBlLnRhcmdldCAmJiAhYXZhbG9uLmNvbnRhaW5zKHBhbmVsLCBlLnRhcmdldCkgJiYgICF0aGlzLndpdGhJbkJveChlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKHBhbmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBET0MgPSBkb2N1bWVudDtcbiAgICAgICAgICAgIGNvbnN0IHBhbmVsID0gRE9DLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3Zpc2libGUnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFBhbmVsKHBhbmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhbmVsLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCA9PT0gMCA/ICdhdXRvJyA6ICh0aGlzLndpZHRoICsgJ3B4Jyk7XG4gICAgICAgICAgICAgICAgICAgIHBhbmVsLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGRvbUFsaWduKHBhbmVsLCB0aGlzLmdldFRhcmdldCgpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogWzAsIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy90YXJnZXRPZmZzZXQ6IFsnMCUnLCcxMDAlJ11cbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0WTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZShwYW5lbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRGlzcG9zZShldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgRE9DID0gZG9jdW1lbnQsIGJvZHkgPSBET0MuYm9keTtcbiAgICAgICAgICAgIGNvbnN0IG1lZGl1bSA9IERPQy5nZXRFbGVtZW50QnlJZCh0aGlzLiRpZCk7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1lZGl1bSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXRyaWdnZXIvbXMtdHJpZ2dlci50cyIsImltcG9ydCAnLi9tcy11cGxvYWQnO1xuaW1wb3J0ICcuL21zLXVwbG9hZC5sZXNzJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXVwbG9hZC9pbmRleC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtdXBsb2FkLWNhcmQnLCB7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtdXBsb2FkLWNhcmQuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGZpbGVMaXN0OiBbXSxcbiAgICAgICAgZ2V0VGV4dENsYXNzKGZpbGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZmlsZS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdkb25lJzogcmV0dXJuICd0ZXh0LXByaW1hcnknO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3VwbG9hZGluZyc6IHJldHVybiAndGV4dC1tdXRlZCc7XG4gICAgICAgICAgICAgICAgY2FzZSAnZXJyb3InOiByZXR1cm4gJ3RleHQtZGFuZ2VyJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSxcbiAgICAgICAgb25SZW1vdmU6IGF2YWxvbi5ub29wLFxuICAgICAgICBkZWwoZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5vblJlbW92ZShmaWxlKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdXBsb2FkL21zLXVwbG9hZC1jYXJkLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuXG5hdmFsb24uY29tcG9uZW50KCdtcy11cGxvYWQtbGlzdCcsIHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy11cGxvYWQtbGlzdC5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgZmlsZUxpc3Q6IFtdLFxuICAgICAgICBnZXRUZXh0Q2xhc3MoZmlsZSkge1xuICAgICAgICAgICAgc3dpdGNoIChmaWxlLnN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2RvbmUnOiByZXR1cm4gJ3RleHQtcHJpbWFyeSc7XG4gICAgICAgICAgICAgICAgY2FzZSAndXBsb2FkaW5nJzogcmV0dXJuICd0ZXh0LW11dGVkJztcbiAgICAgICAgICAgICAgICBjYXNlICdlcnJvcic6IHJldHVybiAndGV4dC1kYW5nZXInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9LFxuICAgICAgICBvblJlbW92ZTogYXZhbG9uLm5vb3AsXG4gICAgICAgIGRlbChmaWxlKSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVtb3ZlKGZpbGUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLWxpc3QudHMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1jYWxlbmRhci9tcy1jYWxlbmRhci5sZXNzXG4vLyBtb2R1bGUgaWQgPSAyMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvbXMtY2hlY2tib3gubGVzc1xuLy8gbW9kdWxlIGlkID0gMjM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci5sZXNzXG4vLyBtb2R1bGUgaWQgPSAyMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtbGF5b3V0L21zLWxheW91dC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAyMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtbWVudS9tcy1tZW51Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDIzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1yYWRpby9tcy1yYWRpby5sZXNzXG4vLyBtb2R1bGUgaWQgPSAyNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtc2VsZWN0L21zLXNlbGVjdC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAyNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlci9tcy10aW1lcGlja2VyLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDI0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDI0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYW5lLWNhbGVuZGFyXFxcIj5cXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJhbmUtY2FsZW5kYXIteWVhci12aWV3XFxcIj5cXG4gICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICA8dHIgOmZvcj1cXFwi77yIaSwgcm93KSBpbiBAdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImFuZS1jYWxlbmRhci1jZWxsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQGlzU2VsZWN0ZWQoY2VsbCkgPyAnYW5lLWNhbGVuZGFyLXNlbGVjdGVkLWRheScgOiAnJyksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQHZpZXcgPiAxICYmIChpICsgaiA9PT0gMCB8fCBpICogaiA9PT0gNikgPyAnYW5lLWNhbGVuZGFyLXByZXYtbW9udGgtY2VsbCcgOiAnJylcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpmb3I9XFxcIihqLCBjZWxsKSBpbiByb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYW5lLWNhbGVuZGFyLWRhdGVcXFwiIDpjbGljaz1cXFwiQGhhbmRsZUNlbGxDbGljayhjZWxsKVxcXCI+e3tjZWxsLmxhYmVsfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90Ym9keT5cXG4gICAgPC90YWJsZT5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1jYWxlbmRhci9tcy1jYWxlbmRhci15ZWFyLXZpZXcuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhbmUtY2FsZW5kYXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIG1zLWlmPVxcXCJAc2hvd0hlYWRlclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMiBjb2wtbWQtb2Zmc2V0LTRcXFwiPlxcbiAgICAgICAgICAgIDxtcy1zZWxlY3QgOndpZGdldD1cXFwie3ZhbHVlOltAY3VycmVudFllYXJdLG9wdGlvbnM6QGN1cnJlbnRZZWFyT3B0aW9ucyxvbkNoYW5nZTpAaGFuZGxlWWVhckNoYW5nZX1cXFwiPjwvbXMtc2VsZWN0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMlxcXCI+XFxuICAgICAgICAgICAgPG1zLXNlbGVjdCA6d2lkZ2V0PVxcXCJ7dmFsdWU6W0BjdXJyZW50TW9udGhdLG9wdGlvbnM6QG1vbnRoT3B0aW9ucyxvbkNoYW5nZTpAaGFuZGxlTW9udGhDaGFuZ2V9XFxcIj48L21zLXNlbGVjdD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPHRhYmxlPlxcbiAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJhbmUtY2FsZW5kYXItY29sdW1uLWhlYWRlclxcXCIgOmZvcj1cXFwiZGF5IGluIEB3ZWVrZGF5c1xcXCI+e3tkYXl9fTwvdGg+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgPHRyIDpmb3I9XFxcIndlZWsgaW4gQHRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJhbmUtY2FsZW5kYXItY2VsbFxcXCIgOmNsYXNzPVxcXCJlbC5jbGFzc05hbWVcXFwiIDpmb3I9XFxcImVsIGluIHdlZWtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYW5lLWNhbGVuZGFyLWRhdGVcXFwiIDpjbGljaz1cXFwiQGhhbmRsZURhdGVDbGljayhlbCkgfCBzdG9wXFxcIj57e2VsLmRhdGV9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICA8L3Rib2R5PlxcbiAgICA8L3RhYmxlPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLWNhbGVuZGFyL21zLWNhbGVuZGFyLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY2hlY2tib3gtZ3JvdXBcXFwiPlxcbiAgICA8bXMtY2hlY2tib3ggXFxuICAgICAgICA6d2lkZ2V0PVxcXCJ7XFxuICAgICAgICAgICAgY2hlY2tlZDpAc2VsZWN0aW9uLmluZGV4T2Yob3B0aW9uLnZhbHVlKSE9LTEsXFxuICAgICAgICAgICAgZ3JvdXA6dHJ1ZSxcXG4gICAgICAgICAgICBvbkNoYW5nZTpmdW5jdGlvbigpe1xcbiAgICAgICAgICAgICAgICBAdG9nZ2xlT3B0aW9uKG9wdGlvbilcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRpc2FibGVkOidkaXNhYmxlZCcgaW4gb3B0aW9uP29wdGlvbi5kaXNhYmxlZDpAZGlzYWJsZWRcXG4gICAgICAgIH1cXFwiIFxcbiAgICAgICAgOmZvcj1cXFwib3B0aW9uIGluIG9wdGlvbnNcXFwiPnt7b3B0aW9uLmxhYmVsfX08L21zLWNoZWNrYm94PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLWNoZWNrYm94L21zLWNoZWNrYm94LWdyb3VwLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiA6Y2xhc3M9XFxcIkB3cmFwcGVyXFxcIiBjbGFzcz1cXFwiYW5lLWNoZWNrYm94XFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMDsgbWFyZ2luLWJvdHRvbTogMDtcXFwiPlxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImFuZS1jaGVja2JveC1pbm5lciBhbmUtY2hlY2tib3gtaW5uZXItaWVcXFwiPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcbiAgICAgICAgICAgIDpjbGFzcz1cXFwiW0BpbmRldGVybWluYXRlPydhbmUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSc6JyddXFxcIlxcbiAgICAgICAgICAgIDphdHRyPVxcXCJ7aWQ6QGhlbHBJZCxkaXNhYmxlZDpAZGlzYWJsZWR9XFxcIlxcbiAgICAgICAgICAgIDpkdXBsZXgtY2hlY2tlZD1cXFwiQGNoZWNrZWRcXFwiXFxuICAgICAgICAgICAgZGF0YS1kdXBsZXgtY2hhbmdlZD1cXFwiQG9uQ2hhbmdlXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dFxcXCI+PC9zcGFuPlxcbiAgICA8L2xhYmVsPlxcbiAgICA8bGFiZWwgOmF0dHI9XFxcInsnZm9yJzpAaGVscElkfVxcXCIgc3R5bGU9XFxcInBhZGRpbmctbGVmdDogMDtcXFwiIDpjc3M9XFxcInttYXJnaW5SaWdodDpAZ3JvdXA/ODowfVxcXCI+PHNsb3QgLz48L2xhYmVsPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLWNoZWNrYm94L21zLWNoZWNrYm94Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWxcXFwiIHN0eWxlPVxcXCJvdmVyZmxvdzogYXV0b1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLWhlYWRlclxcXCIgOnZpc2libGU9XFxcIkB2aWV3TW9kZSA9PT0gMFxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcHJldi15ZWFyLWJ0blxcXCIgOmNsaWNrPVxcXCJtdXRhdGUoJ3N1YnRyYWN0JywgMSwgJ3llYXJzJylcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1hbmdsZS1kb3VibGUtbGVmdFxcXCI+PC9pPlxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXByZXYtbW9udGgtYnRuXFxcIiA6Y2xpY2s9XFxcIm11dGF0ZSgnc3VidHJhY3QnLCAxLCAnbW9udGhzJylcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1hbmdsZS1sZWZ0XFxcIj48L2k+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItbW9udGgtc2VsZWN0XFxcIiA6Y2xpY2s9XFxcIkBjaGFuZ2VWaWV3KDEpXFxcIj57e0BjdXJyZW50TW9udGh9fTwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXIteWVhci1zZWxlY3RcXFwiIDpjbGljaz1cXFwiQGNoYW5nZVZpZXcoMilcXFwiPnt7QGN1cnJlbnRZZWFyfX08L2E+XFxuICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItbmV4dC1tb250aC1idG5cXFwiIDpjbGljaz1cXFwibXV0YXRlKCdhZGQnLCAxLCAneWVhcnMnKVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFxcXCI+PC9pPlxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLW5leHQtbW9udGgtYnRuXFxcIiA6Y2xpY2s9XFxcIm11dGF0ZSgnYWRkJywgMSwgJ21vbnRocycpXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYW5nbGUtcmlnaHRcXFwiPjwvaT5cXG4gICAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLWhlYWRlclxcXCIgOnZpc2libGU9XFxcIkB2aWV3TW9kZSA9PT0gMVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcHJldi15ZWFyLWJ0blxcXCIgOmNsaWNrPVxcXCJtdXRhdGUoJ3N1YnRyYWN0JywgMSwgJ3llYXJzJylcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1hbmdsZS1kb3VibGUtbGVmdFxcXCI+PC9pPlxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPHNwYW4+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLW1vbnRoLXNlbGVjdFxcXCIgOmNsaWNrPVxcXCJAY2hhbmdlVmlldygyKVxcXCI+e3tAY3VycmVudFllYXJ9fTwvYT5cXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1uZXh0LW1vbnRoLWJ0blxcXCIgOmNsaWNrPVxcXCJtdXRhdGUoJ2FkZCcsIDEsICd5ZWFycycpXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XFxcIj48L2k+XFxuICAgICAgICA8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1oZWFkZXJcXFwiIDp2aXNpYmxlPVxcXCJAdmlld01vZGUgPT09IDJcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXByZXYteWVhci1idG5cXFwiIDpjbGljaz1cXFwibXV0YXRlKCdzdWJ0cmFjdCcsIDEwLCAneWVhcnMnKVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0XFxcIj48L2k+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItbW9udGgtc2VsZWN0XFxcIiA6Y2xpY2s9XFxcIkBjaGFuZ2VWaWV3KDMpXFxcIj57e0BzdGFydE9mRGVjYWRlICsgJy0nICsgKEBzdGFydE9mRGVjYWRlICsgOSl9fTwvYT5cXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1uZXh0LW1vbnRoLWJ0blxcXCIgOmNsaWNrPVxcXCJtdXRhdGUoJ2FkZCcsIDEwLCAneWVhcnMnKVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFxcXCI+PC9pPlxcbiAgICAgICAgPC9hPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtaGVhZGVyXFxcIiA6dmlzaWJsZT1cXFwiQHZpZXdNb2RlID09PSAzXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wcmV2LXllYXItYnRuXFxcIiA6Y2xpY2s9XFxcIm11dGF0ZSgnc3VidHJhY3QnLCAxMDAsICd5ZWFycycpXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYW5nbGUtZG91YmxlLWxlZnRcXFwiPjwvaT5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxzcGFuPnt7QHN0YXJ0T2ZDZW50dXJ5ICsgJy0nICsgKEBzdGFydE9mQ2VudHVyeSArIDk5KX19PC9zcGFuPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLW5leHQtbW9udGgtYnRuXFxcIiA6Y2xpY2s9XFxcIm11dGF0ZSgnYWRkJywgMTAwLCAneWVhcnMnKVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFxcXCI+PC9pPlxcbiAgICAgICAgPC9hPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtaGVhZGVyXFxcIiA6dmlzaWJsZT1cXFwiQHZpZXdNb2RlIDwgMCAmJiBAc2hvd1RpbWVcXFwiPlxcbiAgICAgICAgPHNwYW4+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLW1vbnRoLXNlbGVjdFxcXCI+e3tAY3VycmVudE1vbnRofX08L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLW1vbnRoLXNlbGVjdFxcXCI+e3tAY3VycmVudERheX19PC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci15ZWFyLXNlbGVjdFxcXCI+e3tAY3VycmVudFllYXJ9fTwvYT5cXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLWJvZHlcXFwiIDp2aXNpYmxlPVxcXCJAdmlld01vZGUgPT09IDBcXFwiPlxcbiAgICAgICAgPG1zLWNhbGVuZGFyIDp3aWRnZXQ9XFxcInt2YWx1ZTpAY3VycmVudERhdGVBcnJheSxzaG93SGVhZGVyOmZhbHNlLGRpc2FibGVkRGF0ZTpAZGlzYWJsZWREYXRlLG9uQ2hhbmdlOkBoYW5kbGVDYWxlbmRhckNoYW5nZX1cXFwiPjwvbXMtY2FsZW5kYXI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1ib2R5XFxcIiA6dmlzaWJsZT1cXFwiQHZpZXdNb2RlID4gMFxcXCI+XFxuICAgICAgICA8bXMtY2FsZW5kYXIteWVhci12aWV3IDp3aWRnZXQ9XFxcIntjdXJyZW50TW9udGg6QGN1cnJlbnRNb250aCxjdXJyZW50WWVhcjpAY3VycmVudFllYXIsdmlldzpAdmlld01vZGUsb25TZWxlY3Q6QGhhbmRsZVllYXJWaWV3U2VsZWN0fVxcXCI+PC9tcy1jYWxlbmRhci15ZWFyLXZpZXc+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1ib2R5XFxcIiA6dmlzaWJsZT1cXFwiQHZpZXdNb2RlID09PSAtMVxcXCI+XFxuICAgICAgICA8bXMtdGltZXBpY2tlci12aWV3IDp3aWRnZXQ9XFxcInt2YWx1ZTpAY3VycmVudERhdGVBcnJheSxvbkNoYW5nZTpAaGFuZGxlVGltZXBpY2tlckNoYW5nZX1cXFwiPjwvbXMtdGltZXBpY2tlci12aWV3PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtZm9vdGVyXFxcIiA6dmlzaWJsZT1cXFwiQHZpZXdNb2RlID09PSAwICYmICFAc2hvd1RpbWVcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLWZvb3Rlci1idG5cXFwiPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC10b2RheS1idG5cXFwiIDpjbGljaz1cXFwiQHRvZGF5XFxcIj7ku4rlpKk8L2E+XFxuICAgICAgICA8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1mb290ZXJcXFwiIDp2aXNpYmxlPVxcXCJAdmlld01vZGUgPD0gMCAmJiBAc2hvd1RpbWVcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLWZvb3Rlci1idG5cXFwiPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1ub3ctYnRuXFxcIiA6Y2xpY2s9XFxcIkB0b2RheVxcXCI+5q2k5Yi7PC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1vay1idG5cXFwiIDpjbGljaz1cXFwiQGNvbXBsZXRlXFxcIj7noa7lrpo8L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLXRpbWVwaWNrZXItYnRuXFxcIiA6Y2xpY2s9XFxcIkBjaGFuZ2VWaWV3KEB2aWV3TW9kZSA+IC0xID8gLTEgOiAwKVxcXCI+e3tAdmlld01vZGUgPiAtMSA/ICfpgInmi6nml7bpl7QnIDogJ+mAieaLqeaXpeacnyd9fTwvYT5cXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtZGF0ZXBpY2tlci9tcy1kYXRlcGlja2VyLXBhbmVsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXJcXFwiIDpjc3M9XFxcInt3aWR0aDpAd2lkdGh9XFxcIj5cXG4gICAgPGkgY2xhc3M9XFxcImZhIGZhLWNhbGVuZGFyIGFuZS1kYXRlcGlja2VyLWljb25cXFwiPjwvaT5cXG4gICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzLWNpcmNsZSBhbmUtZGF0ZXBpY2tlci1jbGVhclxcXCIgOmlmPVxcXCJAc2VsZWN0ZWQubGVuZ3RoXFxcIiA6Y2xpY2s9XFxcIkBjbGVhclxcXCI+PC9pPlxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYW5lLWRhdGVwaWNrZXItaW5wdXRcXFwiXFxuICAgICAgICA6Y2xpY2s9XFxcIkBoYW5kbGVDbGlja1xcXCJcXG4gICAgICAgIHJlYWRvbmx5XFxuICAgICAgICA6YXR0cj1cXFwie3BsYWNlaG9sZGVyOkBwbGFjZWhvbGRlcn1cXFwiXFxuICAgICAgICA6Y3NzPVxcXCJ7d2lkdGg6JzEwMCUnfVxcXCJcXG4gICAgICAgIDpkdXBsZXg9XFxcInNlbGVjdGVkXFxcIiAvPlxcbiAgICA8bXMtdHJpZ2dlciA6d2lkZ2V0PVxcXCJ7XFxuICAgICAgICB2aXNpYmxlOiBAcGFuZWxWaXNpYmxlLFxcbiAgICAgICAgaW5uZXJWbUlkOiBAcGFuZWxWbUlkLFxcbiAgICAgICAgaW5uZXJDbGFzczogQHBhbmVsQ2xhc3MsXFxuICAgICAgICBpbm5lclRlbXBsYXRlOiBAcGFuZWxUZW1wbGF0ZSxcXG4gICAgICAgIHdpdGhJbkJveDogQHdpdGhJbkJveCxcXG4gICAgICAgIGdldFRhcmdldDogQGdldFRhcmdldCxcXG4gICAgICAgIG9uSGlkZTogQGhhbmRsZVBhbmVsSGlkZVxcbiAgICB9XFxcIj5cXG4gICAgPC9tcy10cmlnZ2VyPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXFxcIiA6Y3NzPVxcXCJbQGlubGluZSAmJiBAaW5saW5lRm9ybUdyb3VwU3R5bGVdXFxcIiA6Y2xhc3M9XFxcIltAY2xhc3NOYW1lLChAaGFzUnVsZXMgJiYgQGRpcnR5ID8gKEByZWFzb25zLmxlbmd0aCA/ICdoYXMtZXJyb3InIDogJ2hhcy1zdWNjZXNzJykgOiAnJyldXFxcIj5cXG4gICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiA6aWY9XFxcIkBsYWJlbC5sZW5ndGhcXFwiPnt7QGxhYmVsfX08L2xhYmVsPlxcbiAgICA8c2xvdCAvPlxcbiAgICA8aSBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIiA6aWY9XFxcIkBoYXNSdWxlcyAmJiBAc2hvd0ljb25cXFwiIDpjbGFzcz1cXFwiWyhAZGlydHkgPyAnZ2x5cGhpY29uJyA6ICcnKSwgKEByZWFzb25zLmxlbmd0aCA/ICdnbHlwaGljb24tcmVtb3ZlJyA6ICdnbHlwaGljb24tb2snKV1cXFwiIDp2aXNpYmxlPVxcXCJAZGlydHlcXFwiPjwvaT5cXG4gICAgPHNtYWxsIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIiA6Y3NzPVxcXCJbQGlubGluZSAmJiBAaW5saW5lTWVzc2FnZVN0eWxlXVxcXCIgOmlmPVxcXCJAaGFzUnVsZXMgJiYgQHJlYXNvbnMubGVuZ3RoXFxcIj57e0ByZWFzb25zLmxlbmd0aCA/IEByZWFzb25zWzBdLm1lc3NhZ2UgOiAnJ319PC9zbWFsbD5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1mb3JtL21zLWZvcm0taXRlbS5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBcXG4gICAgOmR1cGxleD1cXFwiQHRleHRcXFwiIFxcbiAgICA6YXR0cj1cXFwie25hbWU6QGNvbCxwbGFjZWhvbGRlcjpAcGxhY2Vob2xkZXJ9XFxcIiBcXG4gICAgOmNzcz1cXFwie3dpZHRoOkB3aWR0aH1cXFwiXFxuICAgIGRhdGEtZHVwbGV4LWNoYW5nZWQ9XFxcIkBoYW5kbGVDaGFuZ2VcXFwiPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLWlucHV0L21zLWlucHV0Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHVsIGNsYXNzPVxcXCJhbmUtbWVudVxcXCI+XFxuICAgIDxsaSA6Y2xhc3M9XFxcIltcXG4gICAgICAgICAgICAgICAgICAgICFpdGVtLmNoaWxkcmVuIHx8IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwID8gJ2FuZS1tZW51LWl0ZW0nIDogJ2FuZS1tZW51LXN1Ym1lbnUnLFxcbiAgICAgICAgICAgICAgICAgICAgQG9wZW5LZXlzLmNvbnRhaW5zKGl0ZW0ua2V5KSA/ICdhbmUtbWVudS1vcGVuJyA6ICcnLFxcbiAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkS2V5cy5jb250YWlucyhpdGVtLmtleSkgPyAnYW5lLW1lbnUtaXRlbS1zZWxlY3RlZCcgOiAnJ1xcbiAgICAgICAgICAgICAgICBdXFxcIlxcbiAgICAgICAgOmZvcj1cXFwiaXRlbSBpbiBAbWVudVxcXCI+XFxuICAgICAgICA8YSA6Y2xpY2s9XFxcImhhbmRsZUNsaWNrKGl0ZW0sIGl0ZW0ua2V5LCBbaXRlbS5rZXldKVxcXCIgc3R5bGU9XFxcInBhZGRpbmctbGVmdDogMjRweDtcXFwiPlxcbiAgICAgICAgICAgIDxpIDpjbGFzcz1cXFwiW2l0ZW0uaWNvbl1cXFwiPjwvaT5cXG4gICAgICAgICAgICA8c3Bhbj57e2l0ZW0udGl0bGV9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiYW5lLW1lbnUtY2FyZXQgZmFcXFwiIDpjbGFzcz1cXFwiW0BvcGVuS2V5cy5jb250YWlucyhpdGVtLmtleSkgPyAnZmEtYW5nbGUtdXAnIDogJ2ZhLWFuZ2xlLWRvd24nXVxcXCI+PC9pPlxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJhbmUtbWVudVxcXCI+XFxuICAgICAgICAgICAgPGxpIDpjbGFzcz1cXFwiW1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbTIuY2hpbGRyZW4gfHwgaXRlbTIuY2hpbGRyZW4ubGVuZ3RoID09PSAwID8gJ2FuZS1tZW51LWl0ZW0nIDogJ2FuZS1tZW51LXN1Ym1lbnUnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQG9wZW5LZXlzLmNvbnRhaW5zKGl0ZW0yLmtleSkgPyAnYW5lLW1lbnUtb3BlbicgOiAnJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZEtleXMuY29udGFpbnMoaXRlbTIua2V5KSA/ICdhbmUtbWVudS1pdGVtLXNlbGVjdGVkJyA6ICcnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cXFwiXFxuICAgICAgICAgICAgICAgIDpmb3I9XFxcIml0ZW0yIGluIGl0ZW0uY2hpbGRyZW5cXFwiPlxcbiAgICAgICAgICAgICAgICA8YSA6Y2xpY2s9XFxcImhhbmRsZUNsaWNrKGl0ZW0yLCBpdGVtMi5rZXksIFtpdGVtMi5rZXksaXRlbS5rZXldKVxcXCIgc3R5bGU9XFxcInBhZGRpbmctbGVmdDogNDhweDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtMi50aXRsZX19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImFuZS1tZW51LWNhcmV0IGZhXFxcIiA6Y2xhc3M9XFxcIltAb3BlbktleXMuY29udGFpbnMoaXRlbTIua2V5KSA/ICdmYS1hbmdsZS11cCcgOiAnZmEtYW5nbGUtZG93biddXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJhbmUtbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGkgOmNsYXNzPVxcXCJbXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0zLmNoaWxkcmVuIHx8IGl0ZW0zLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCA/ICdhbmUtbWVudS1pdGVtJyA6ICdhbmUtbWVudS1zdWJtZW51JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc2VsZWN0ZWRLZXlzLmNvbnRhaW5zKGl0ZW0zLmtleSkgPyAnYW5lLW1lbnUtaXRlbS1zZWxlY3RlZCcgOiAnJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6Zm9yPVxcXCJpdGVtMyBpbiBpdGVtMi5jaGlsZHJlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmNsaWNrPVxcXCJoYW5kbGVDbGljayhpdGVtMywgaXRlbTMua2V5LCBbaXRlbTMua2V5LGl0ZW0yLmtleSxpdGVtLmtleV0pXFxcIiBzdHlsZT1cXFwicGFkZGluZy1sZWZ0OiA3MnB4O1xcXCI+e3tpdGVtMy50aXRsZX19PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgPC9saT5cXG48L3VsPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLW1lbnUvbXMtbWVudS5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxuICAgIDxhIGNsYXNzPVxcXCJidG4gYmx1ZVxcXCIgOmF0dHI9XFxcIntkaXNhYmxlZDpAY3VycmVudD09PTF9XFxcIiA6Y2xpY2s9XFxcIkBwcmV2UGFnZVxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiaWNvbi1zdGVwLWJhY2t3YXJkXFxcIj48L2k+5LiK5LiA6aG1XFxuICAgIDwvYT5cXG4gICAgPGEgY2xhc3M9XFxcImJ0biBzdWNjZXNzXFxcIj57eyBAY3VycmVudCB9fS97eyBNYXRoLmNlaWwoQHRvdGFsL0BwYWdlU2l6ZSkgfX08L2E+XFxuICAgIDxhIGNsYXNzPVxcXCJidG4gYmx1ZVxcXCIgOmF0dHI9XFxcIntkaXNhYmxlZDpAY3VycmVudD09PU1hdGguY2VpbChAdG90YWwvQHBhZ2VTaXplKX1cXFwiIDpjbGljaz1cXFwiQG5leHRQYWdlXFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJpY29uLXN0ZXAtZm9yd2FyZFxcXCI+PC9pPuS4i+S4gOmhtVxcbiAgICA8L2E+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtcGFnaW5hdGlvbi9tcy1wYWdpbmF0aW9uLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY2hlY2tib3gtZ3JvdXBcXFwiPlxcbiAgICA8bXMtcmFkaW8gXFxuICAgICAgICA6d2lkZ2V0PVxcXCJ7XFxuICAgICAgICAgICAgY2hlY2tlZDpAc2VsZWN0ZWQsXFxuICAgICAgICAgICAgdmFsdWU6b3B0aW9uLnZhbHVlLFxcbiAgICAgICAgICAgIG5hbWU6QGhlbHBJZCxcXG4gICAgICAgICAgICBncm91cDp0cnVlLFxcbiAgICAgICAgICAgIG9uQ2hhbmdlOmZ1bmN0aW9uKCl7XFxuICAgICAgICAgICAgICAgIEB0b2dnbGVPcHRpb24oYXJndW1lbnRzWzBdLCBvcHRpb24pXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkaXNhYmxlZDonZGlzYWJsZWQnIGluIG9wdGlvbj9vcHRpb24uZGlzYWJsZWQ6QGRpc2FibGVkXFxuICAgICAgICB9XFxcIiBcXG4gICAgICAgIDpmb3I9XFxcIm9wdGlvbiBpbiBvcHRpb25zXFxcIj57e29wdGlvbi5sYWJlbH19PC9tcy1yYWRpbz5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1yYWRpby9tcy1yYWRpby1ncm91cC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgOmNsYXNzPVxcXCJAd3JhcHBlclxcXCIgY2xhc3M9XFxcImFuZS1yYWRpb1xcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDA7IG1hcmdpbi1ib3R0b206IDA7XFxcIj5cXG4gICAgPGxhYmVsIGNsYXNzPVxcXCJhbmUtcmFkaW8taW5uZXIgYW5lLXJhZGlvLWlubmVyLWllXFxcIj5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCJcXG4gICAgICAgICAgICA6YXR0cj1cXFwie2lkOkBoZWxwSWQsZGlzYWJsZWQ6QGRpc2FibGVkLHZhbHVlOkB2YWx1ZSxuYW1lOkBuYW1lfVxcXCJcXG4gICAgICAgICAgICA6ZHVwbGV4PVxcXCJAY2hlY2tlZFxcXCJcXG4gICAgICAgICAgICBkYXRhLWR1cGxleC1jaGFuZ2VkPVxcXCJAb25DaGFuZ2VcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0XFxcIj48L3NwYW4+XFxuICAgIDwvbGFiZWw+XFxuICAgIDxsYWJlbCA6YXR0cj1cXFwieydmb3InOkBoZWxwSWR9XFxcIiBzdHlsZT1cXFwicGFkZGluZy1sZWZ0OiAwO1xcXCIgOmNzcz1cXFwie21hcmdpblJpZ2h0OkBncm91cD84OjB9XFxcIj48c2xvdCAvPjwvbGFiZWw+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtcmFkaW8vbXMtcmFkaW8uaHRtbFxuLy8gbW9kdWxlIGlkID0gMjU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IHN0eWxlPVxcXCJvdmVyZmxvdzogYXV0b1xcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwiYW5lLXNlbGVjdC1kcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIj5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiYW5lLXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW1cXFwiXFxuICAgICAgICAgICAgOmNsYXNzPVxcXCJbXFxuICAgICAgICAgICAgICAgIChAc2VsZWN0aW9uLnNvbWUoZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzWzBdLnZhbHVlPT09b3B0aW9uLnZhbHVlfSkgPyAnYW5lLXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQnIDogJycpLFxcbiAgICAgICAgICAgICAgICAob3B0aW9uLmRpc2FibGVkID8gJ2FuZS1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkJyA6ICcnKVxcbiAgICAgICAgICAgIF1cXFwiXFxuICAgICAgICAgICAgOmZvcj1cXFwib3B0aW9uIGluIEBnZXRGaWx0ZXJlZE9wdGlvbnMoKVxcXCJcXG4gICAgICAgICAgICA6Y2xpY2s9XFxcIkBoYW5kbGVPcHRpb25DbGljaygkZXZlbnQsIG9wdGlvbilcXFwiXFxuICAgICAgICAgICAgcm9sZT1cXFwibWVudWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIHt7b3B0aW9uLmxhYmVsfX1cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2tcXFwiIDp2aXNpYmxlPVxcXCJAaXNNdWx0aXBsZVxcXCI+PC9pPlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiYW5lLXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0gYW5lLXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRcXFwiXFxuICAgICAgICAgICAgOnZpc2libGU9XFxcIkBnZXRGaWx0ZXJlZE9wdGlvbnMoKS5sZW5ndGggPD0gMCAmJiBAc2VhcmNoVmFsdWUgJiYgIUBsb2FkaW5nXFxcIj7ml6DmlbDmja48L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJhbmUtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbSBhbmUtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZFxcXCJcXG4gICAgICAgICAgICA6dmlzaWJsZT1cXFwiQGxvYWRpbmdcXFwiPuWKoOi9veS4rTwvbGk+XFxuICAgIDwvdWw+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtc2VsZWN0L21zLXNlbGVjdC1wYW5lbC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImFuZS1zZWxlY3QgZm9ybS1jb250cm9sXFxcIlxcbiAgICA6Y2xhc3M9XFxcIlsoQGlzTXVsdGlwbGUgPyAnYW5lLXNlbGVjdC1tdWx0aXBsZScgOiAnJyldXFxcIlxcbiAgICA6Y3NzPVxcXCJ7d2lkdGg6QHdpZHRofVxcXCJcXG4gICAgOmNsaWNrPVxcXCJAaGFuZGxlQ2xpY2tcXFwiXFxuICAgIHJvbGU9XFxcImNvbWJvYm94XFxcIlxcbiAgICBhcmlhLWF1dG9jb21wbGV0ZT1cXFwibGlzdFxcXCJcXG4gICAgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCJcXG4gICAgOmF0dHI9XFxcInsnYXJpYS1leHBhbmRlZCc6IEBwYW5lbFZpc2libGUgKyAnJ31cXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcImFuZS1zZWxlY3Qtc2VsZWN0aW9uXFxcIiA6Y2xhc3M9XFxcIlsoQGlzTXVsdGlwbGUgPyAnYW5lLXNlbGVjdC10YWdzJyA6ICcnKV1cXFwiPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJhbmUtc2VsZWN0LXNlbGVjdGVkXFxcIiA6dmlzaWJsZT1cXFwiIUBpc011bHRpcGxlICYmICghQHNob3dTZWFyY2ggfHwgIUBwYW5lbFZpc2libGUpXFxcIj57e0BkaXNwbGF5VmFsdWV9fTwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImFuZS1zZWxlY3QtY2hvaWNlXFxcIiA6Zm9yPVxcXCJjaG9pY2UgaW4gQHNlbGVjdGlvblxcXCI+XFxuICAgICAgICAgICAgPHNwYW4+e3tjaG9pY2UubGFiZWx9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiIDpjbGljaz1cXFwiQHJlbW92ZVNlbGVjdGlvbigkZXZlbnQsIGNob2ljZSkgfCBzdG9wXFxcIj48L2k+XFxuICAgICAgICA8L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJhbmUtc2VsZWN0LXNlYXJjaFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJhbmUtc2VsZWN0LXNlYXJjaC1maWVsZFxcXCJcXG4gICAgICAgICAgICAgICAgbmFtZT1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCJcXG4gICAgICAgICAgICAgICAgOmR1cGxleD1cXFwiQHNlYXJjaFZhbHVlXFxcIlxcbiAgICAgICAgICAgICAgICA6Y3NzPVxcXCJ7dmlzaWJpbGl0eTooQHNob3dTZWFyY2ggJiYgQHBhbmVsVmlzaWJsZSk/J3Zpc2libGUnOidoaWRkZW4nfVxcXCJcXG4gICAgICAgICAgICAgICAgOmtleWRvd249XFxcIkBoYW5kbGVEZWxldGVcXFwiIC8+XFxuICAgICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbiAgICA8aSBjbGFzcz1cXFwiZmEgYW5lLXNlbGVjdC1hcnJvd1xcXCJcXG4gICAgICAgIDpjbGFzcz1cXFwiWyhAcGFuZWxWaXNpYmxlID8gJ2ZhLWNhcmV0LXVwJyA6ICdmYS1jYXJldC1kb3duJyldXFxcIlxcbiAgICAgICAgOnZpc2libGU9XFxcIkBtb2RlID09PSAnJ1xcXCI+PC9pPlxcbiAgICA8bXMtdHJpZ2dlciA6d2lkZ2V0PVxcXCJ7XFxuICAgICAgICB3aWR0aDogQHBhbmVsV2lkdGgsXFxuICAgICAgICB2aXNpYmxlOiBAcGFuZWxWaXNpYmxlLFxcbiAgICAgICAgaW5uZXJWbUlkOiBAcGFuZWxWbUlkLFxcbiAgICAgICAgaW5uZXJDbGFzczogQHBhbmVsQ2xhc3MsXFxuICAgICAgICBpbm5lclRlbXBsYXRlOiBAcGFuZWxUZW1wbGF0ZSxcXG4gICAgICAgIHdpdGhJbkJveDogQHdpdGhJbkJveCxcXG4gICAgICAgIGdldFRhcmdldDogQGdldFRhcmdldCxcXG4gICAgICAgIG9uSGlkZTogQGhhbmRsZVBhbmVsSGlkZX1cXFwiPlxcbiAgICA8L21zLXRyaWdnZXI+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtc2VsZWN0L21zLXNlbGVjdC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIDpsb2FkaW5nPVxcXCIhd2luZG93LmlzTmFOKEBwYWdpbmF0aW9uQ29uZmlnLnRvdGFsKSAmJiBAbG9hZGluZ1xcXCI+XFxuICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggOmlmPVxcXCJAbmVlZFNlbGVjdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bXMtY2hlY2tib3ggOndpZGdldD1cXFwie2NoZWNrZWQ6QGlzQWxsQ2hlY2tlZCxvbkNoYW5nZTpAaGFuZGxlQ2hlY2tBbGx9XFxcIj48L21zLWNoZWNrYm94PlxcbiAgICAgICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggOmZvcj1cXFwiZWwgaW4gQGNvbHVtbnNcXFwiPnt7ZWwudGl0bGV9fTwvdGg+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgPHRyIDpmb3I9XFxcIigkaW5kZXgsIHJlY29yZCkgaW4gQGdldEN1cnJlbnRQYWdlRGF0YSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRkIDppZj1cXFwiQG5lZWRTZWxlY3Rpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPG1zLWNoZWNrYm94IDp3aWRnZXQ9XFxcIntjaGVja2VkOkBjaGVja2VkLmluZGV4T2YocmVjb3JkW0BrZXldKSE9LTEsb25DaGFuZ2U6ZnVuY3Rpb24oKXtAaGFuZGxlQ2hlY2soYXJndW1lbnRzWzBdLnRhcmdldC5jaGVja2VkLHJlY29yZCl9fVxcXCI+PC9tcy1jaGVja2JveD5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIDpmb3I9XFxcImNvbCBpbiBAY29sdW1uc1xcXCIgOmh0bWw9XFxcImNvbC50ZW1wbGF0ZVxcXCI+PC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90Ym9keT5cXG4gICAgPC90YWJsZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+XFxuICAgICAgICA8bXMtcGFnaW5hdGlvbiA6d2lkZ2V0PVxcXCJ7Y3VycmVudDpAcGFnaW5hdGlvbkNvbmZpZy5jdXJyZW50LHBhZ2VTaXplOkBwYWdpbmF0aW9uQ29uZmlnLnBhZ2VTaXplLHRvdGFsOkB0b3RhbCxvbkNoYW5nZTpAaGFuZGxlUGFnZUNoYW5nZX1cXFwiPjwvbXMtcGFnaW5hdGlvbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIj48L2Rpdj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy10YWJsZS9tcy10YWJsZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBcXG4gICAgOmR1cGxleD1cXFwiQHRleHRcXFwiIFxcbiAgICA6YXR0cj1cXFwie3Jvd3M6QHJvd3MsbmFtZTpAY29sfVxcXCJcXG4gICAgZGF0YS1kdXBsZXgtY2hhbmdlZD1cXFwiQGhhbmRsZUNoYW5nZVxcXCI+PC90ZXh0YXJlYT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy10ZXh0YXJlYS9tcy10ZXh0YXJlYS5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImFuZS10aW1lcGlja2VyLXZpZXdcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtdGltZXBpY2tlci12aWV3LWNvbWJvYm94XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFuZS10aW1lcGlja2VyLXZpZXctc2VsZWN0XFxcIiBuYW1lPVxcXCJob3VyLW9wdGlvbnNcXFwiPlxcbiAgICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICAgICAgPGxpIDpmb3I9XFxcImhvdXIgaW4gQGhvdXJPcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbKGhvdXI9PUBjdXJyZW50SG91cj8nYW5lLXRpbWVwaWNrZXItdmlldy1zZWxlY3Qtb3B0aW9uLXNlbGVjdGVkJzonJyldXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsaWNrPVxcXCJAc2VsZWN0KGhvdXIsICdob3VyJylcXFwiPnt7aG91cn19PC9saT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtdGltZXBpY2tlci12aWV3LXNlbGVjdFxcXCIgbmFtZT1cXFwibWludXRlLW9wdGlvbnNcXFwiPlxcbiAgICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICAgICAgPGxpIDpmb3I9XFxcIm1pbnV0ZSBpbiBAbWludXRlT3B0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyhtaW51dGU9PUBjdXJyZW50TWludXRlPydhbmUtdGltZXBpY2tlci12aWV3LXNlbGVjdC1vcHRpb24tc2VsZWN0ZWQnOicnKV1cXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y2xpY2s9XFxcIkBzZWxlY3QobWludXRlLCAnbWludXRlJylcXFwiPnt7bWludXRlfX08L2xpPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFuZS10aW1lcGlja2VyLXZpZXctc2VsZWN0XFxcIiBuYW1lPVxcXCJzZWNvbmQtb3B0aW9uc1xcXCI+XFxuICAgICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgICAgICA8bGkgOmZvcj1cXFwic2Vjb25kIGluIEBzZWNvbmRPcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbKHNlY29uZD09QGN1cnJlbnRTZWNvbmQ/J2FuZS10aW1lcGlja2VyLXZpZXctc2VsZWN0LW9wdGlvbi1zZWxlY3RlZCc6JycpXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGljaz1cXFwiQHNlbGVjdChzZWNvbmQsICdzZWNvbmQnKVxcXCI+e3tzZWNvbmR9fTwvbGk+XFxuICAgICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy10aW1lcGlja2VyL21zLXRpbWVwaWNrZXItdmlldy5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImFuZS10aW1lcGlja2VyXFxcIiA6Y3NzPVxcXCJ7d2lkdGg6QHdpZHRofVxcXCI+XFxuICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jbG9jay1vIGFuZS10aW1lcGlja2VyLWljb25cXFwiPjwvaT5cXG4gICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzLWNpcmNsZSBhbmUtdGltZXBpY2tlci1jbGVhclxcXCIgOmlmPVxcXCJAc2VsZWN0ZWQubGVuZ3RoXFxcIiA6Y2xpY2s9XFxcIkBjbGVhclxcXCI+PC9pPlxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYW5lLXRpbWVwaWNrZXItaW5wdXRcXFwiXFxuICAgICAgICA6Y2xpY2s9XFxcIkBoYW5kbGVDbGlja1xcXCJcXG4gICAgICAgIHJlYWRvbmx5XFxuICAgICAgICA6YXR0cj1cXFwie3BsYWNlaG9sZGVyOkBwbGFjZWhvbGRlcn1cXFwiXFxuICAgICAgICA6Y3NzPVxcXCJ7d2lkdGg6JzEwMCUnfVxcXCJcXG4gICAgICAgIDpkdXBsZXg9XFxcInNlbGVjdGVkXFxcIiAvPlxcbiAgICA8bXMtdHJpZ2dlciA6d2lkZ2V0PVxcXCJ7XFxuICAgICAgICB2aXNpYmxlOiBAcGFuZWxWaXNpYmxlLFxcbiAgICAgICAgaW5uZXJWbUlkOiBAcGFuZWxWbUlkLFxcbiAgICAgICAgaW5uZXJDbGFzczogQHBhbmVsQ2xhc3MsXFxuICAgICAgICBpbm5lclRlbXBsYXRlOiBAcGFuZWxUZW1wbGF0ZSxcXG4gICAgICAgIHdpdGhJbkJveDogQHdpdGhJbkJveCxcXG4gICAgICAgIGdldFRhcmdldDogQGdldFRhcmdldCxcXG4gICAgICAgIG9uSGlkZTogQGhhbmRsZVBhbmVsSGlkZVxcbiAgICB9XFxcIj5cXG4gICAgPC9tcy10cmlnZ2VyPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx1bCBjbGFzcz1cXFwiYW5lLXRyZWVcXFwiPlxcbiAgICA8bGkgOmZvcj1cXFwiKGluZGV4LCBlbCkgaW4gQHRyZWUgfCBnZXQoMClcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImFuZS10cmVlLWljb24gZmFcXFwiIDpjbGFzcz1cXFwiW0BjaGFuZ2VJY29uKGVsKV1cXFwiIDpjbGljaz1cXFwiQG9wZW5TdWJUcmVlKGVsKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgPG1zLWNoZWNrYm94IDp3aWRnZXQ9XFxcIntpbmRldGVybWluYXRlOmZhbHNlLGNoZWNrZWQ6QGlzQ2hlY2tlZChlbCksb25DaGFuZ2U6ZnVuY3Rpb24oKXtoYW5kbGVDaGVjayhlbCl9fVxcXCI+PC9tcy1jaGVja2JveD5cXG4gICAgICAgIHt7ZWwubGFiZWx9fVxcbiAgICAgICAgPGRpdiA6dmlzaWJsZT1cXFwiQGlzRXhwZW5kZWQoZWwpXFxcIiA6aHRtbD1cXFwiQHJlbmRlclN1YlRyZWUoZWwpXFxcIj48L2Rpdj5cXG4gICAgPC9saT5cXG48L3VsPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXRyZWUvbXMtdHJlZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImFuZS11cGxvYWQtY2FyZFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuZS11cGxvYWQtY2FyZC1pdGVtXFxcIiA6Y2xhc3M9XFxcIlsoZmlsZS5zdGF0dXMgPT09ICdlcnJvcicgPyAnYm9yZGVyZWQtZGFuZ2VyJyA6ICcnKV1cXFwiIDpmb3I9XFxcIigkaW5kZXgsIGZpbGUpIGluIEBmaWxlTGlzdFxcXCI+XFxuICAgICAgICA8aW1nIDphdHRyPVxcXCJ7c3JjOmZpbGUudXJsLGFsdDpmaWxlLm5hbWUsdGl0bGU6ZmlsZS5uYW1lfVxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYW5lLXVwbG9hZC1jYXJkLXByb2dyZXNzXFxcIiA6dmlzaWJsZT1cXFwiZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnXFxcIj7kuIrkvKDkuK0ge3tmaWxlLnByb2dyZXNzfX0lPC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImFuZS11cGxvYWQtY2FyZC10b29sXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZXllXFxcIj48L2k+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRyYXNoLW9cXFwiIDpjbGljaz1cXFwiZGVsKGZpbGUpXFxcIj48L2k+XFxuICAgICAgICA8L3NwYW4+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXVwbG9hZC9tcy11cGxvYWQtY2FyZC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx1bCBjbGFzcz1cXFwiYW5lLXVwbG9hZC1saXN0XFxcIj5cXG4gICAgPGxpIDpmb3I9XFxcIigkaW5kZXgsIGZpbGUpIGluIEBmaWxlTGlzdFxcXCJcXG4gICAgICAgIDpjbGFzcz1cXFwiW0BnZXRUZXh0Q2xhc3MoZmlsZSldXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFuZS11cGxvYWQtbGlzdC1pbmZvXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZmlsZS1vIHRleHQtbXV0ZWRcXFwiPjwvaT5cXG4gICAgICAgICAgICA8c3BhbiA6YXR0cj1cXFwie3RpdGxlOmZpbGUubmFtZX1cXFwiPnt7ZmlsZS5uYW1lfX08L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBhbmUtdXBsb2FkLWJ0bi1jbG9zZVxcXCIgOmNsaWNrPVxcXCJkZWwoZmlsZSlcXFwiPjwvaT5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhbmUtdXBsb2FkLWxpc3QtcHJvZ3Jlc3NcXFwiIDp2aXNpYmxlPVxcXCJmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZydcXFwiPuS4iuS8oOS4rSB7e2ZpbGUucHJvZ3Jlc3N9fSU8L3NwYW4+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2stY2lyY2xlIHRleHQtc3VjY2Vzc1xcXCIgOmNsYXNzPVxcXCJbKGZpbGUuc3RhdHVzID09PSAnZG9uZScgPyAnJyA6ICdoaWRlJyldXFxcIj48L2k+XFxuICAgIDwvbGk+XFxuPC91bD5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLWxpc3QuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhbmUtdXBsb2FkLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuZS11cGxvYWQtY2FyZC13YWxsXFxcIiA6aWY9XFxcIkBzaG93VXBsb2FkTGlzdCAmJiBAbGlzdFR5cGU9PT0ncGljdHVyZS1jYXJkJ1xcXCI+XFxuICAgICAgICA8bXMtdXBsb2FkLWNhcmQgOndpZGdldD1cXFwie2ZpbGVMaXN0OiBAZmlsZUxpc3QsIG9uUmVtb3ZlOiBAaGFuZGxlUmVtb3ZlfVxcXCI+PC9tcy11cGxvYWQtY2FyZD5cXG4gICAgPC9kaXY+XFxuICAgIDxsYWJlbCA6dmlzaWJsZT1cXFwiIUBzaG93VXBsb2FkTGlzdCAmJiBAbGlzdFR5cGU9PT0ncGljdHVyZS1jYXJkJyAmJiBAZmlsZUxpc3QubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcImFuZS11cGxvYWQtY2FyZC1pdGVtXFxcIiA6YXR0cj1cXFwieydmb3InOkBoZWxwSWR9XFxcIj5cXG4gICAgICAgIDxpbWcgOmF0dHI9XFxcIntzcmM6QGZpbGVMaXN0WzBdP0BmaWxlTGlzdFswXS51cmw6YmxhbmtJbWcsYWx0OkBmaWxlTGlzdFswXT9AZmlsZUxpc3RbMF0ubmFtZTonJyx0aXRsZTpAZmlsZUxpc3RbMF0/QGZpbGVMaXN0WzBdLm5hbWU6Jyd9XFxcIj5cXG4gICAgPC9sYWJlbD5cXG4gICAgPGxhYmVsIDp2aXNpYmxlPVxcXCJAc2hvd1VwbG9hZExpc3QgfHwgQGZpbGVMaXN0Lmxlbmd0aCA9PSAwXFxcIiA6Y2xhc3M9XFxcIlsoQGxpc3RUeXBlPT09J3BpY3R1cmUtY2FyZCc/QGNhcmRDbGFzczpAYnRuQ2xhc3MpXVxcXCIgOmF0dHI9XFxcInsnZm9yJzpAaGVscElkfVxcXCI+PHNsb3QgLz48L2xhYmVsPlxcbiAgICA8Zm9ybT48aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgbmFtZT1cXFwiZmlsZVxcXCIgOmF0dHI9XFxcIntpZDpAaGVscElkfVxcXCI+PC9mb3JtPlxcbiAgICA8ZGl2IDppZj1cXFwiQHNob3dVcGxvYWRMaXN0ICYmIEBsaXN0VHlwZSE9PSdwaWN0dXJlLWNhcmQnXFxcIj5cXG4gICAgICAgIDxtcy11cGxvYWQtbGlzdCA6d2lkZ2V0PVxcXCJ7ZmlsZUxpc3Q6IEBmaWxlTGlzdCwgb25SZW1vdmU6IEBoYW5kbGVSZW1vdmV9XFxcIj48L21zLXVwbG9hZC1saXN0PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJyZXF1aXJlKCdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcycpO1xucmVxdWlyZSgnZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUuY3NzJyk7XG5yZXF1aXJlKCdoaWdobGlnaHQuanMvc3R5bGVzL2F0b20tb25lLWxpZ2h0LmNzcycpO1xuXG5yZXF1aXJlKCdlczUtc2hpbScpO1xucmVxdWlyZSgnZXM2LXByb21pc2UvZGlzdC9lczYtcHJvbWlzZS5hdXRvJyk7XG5cbnZhciBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcbndpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IGpRdWVyeTtcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xudmFyIGJvb3Rib3ggPSByZXF1aXJlKCdib290Ym94Jyk7XG5ib290Ym94LnNldExvY2FsZSgnemhfQ04nKTtcblxudmFyIGF2YWxvbiA9IHJlcXVpcmUoJ2F2YWxvbjInKTtcbmF2YWxvbi5jb25maWcoe1xuICAgIGRlYnVnOiB0cnVlXG59KTtcbmlmIChhdmFsb24ubXNpZSA9PT0gOCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIHByb3BlcnR5LCBtZXRhKSB7XG4gICAgICAgIG9ialtwcm9wZXJ0eV0gPSBtZXRhLnZhbHVlO1xuICAgIH1cbn1cbnJlcXVpcmUoJ2VzNS1zaGltL2VzNS1zaGFtJyk7XG5yZXF1aXJlKCcuL3JvdXRlcicpO1xucmVxdWlyZSgnLi4vY29tcG9uZW50cy9tcy1sYXlvdXQnKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9kb2Mtc2lkZWJhci9kb2Mtc2lkZWJhcicpO1xuXG5hdmFsb24uZGVmaW5lKHtcbiAgICAkaWQ6ICdyb290JyxcbiAgICBjdXJyZW50UGFnZTogJycsXG4gICAgYnJlYWRjcnVtYjogW11cbn0pO1xuYXZhbG9uLmhpc3Rvcnkuc3RhcnQoe1xuICAgIGZpcmVBbmNob3I6IGZhbHNlXG59KTtcbmlmICghLyMhLy50ZXN0KGdsb2JhbC5sb2NhdGlvbi5oYXNoKSkge1xuICAgIGF2YWxvbi5yb3V0ZXIubmF2aWdhdGUoJy8nLCAyKTtcbn1cbmF2YWxvbi5zY2FuKGRvY3VtZW50LmJvZHkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZG9jcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8bXMtbWVudSA6d2lkZ2V0PVxcXCJ7bWVudTpAbWVudSxvcGVuS2V5czpAb3BlbktleXMsc2VsZWN0ZWRLZXlzOkBzZWxlY3RlZEtleXMsb25DbGljazpAaGFuZGxlTWVudUNsaWNrLG9uT3BlbkNoYW5nZTpAaGFuZGxlT3BlbkNoYW5nZX1cXFwiPjwvbXMtbWVudT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZG9jcy9jb21wb25lbnRzL2RvYy1zaWRlYmFyL2RvYy1zaWRlYmFyLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyB2ZXJ0eCAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDM0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9