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
var ane_util_1 = __webpack_require__(17);
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
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
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
    template: __webpack_require__(246),
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
        }
    }
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(230);


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
    template: __webpack_require__(254),
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
    template: __webpack_require__(252),
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
__webpack_require__(198);
__webpack_require__(223);
__webpack_require__(240);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(26);
__webpack_require__(46);
__webpack_require__(235);


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
    template: __webpack_require__(245),
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
var ms_loading_directive_1 = __webpack_require__(218);
exports.Loading = ms_loading_directive_1.Loading;
__webpack_require__(202);


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
    template: __webpack_require__(253),
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
    template: __webpack_require__(259),
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
__webpack_require__(237);
__webpack_require__(206);


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
/* 182 */
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
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var navConfig = __webpack_require__(51);
__webpack_require__(192);
var stores_1 = __webpack_require__(182);
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
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(339);
var stores_1 = __webpack_require__(182);
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
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(219);
__webpack_require__(209);
__webpack_require__(43);
__webpack_require__(215);
__webpack_require__(195);
var create_form_1 = __webpack_require__(194);
exports.createForm = create_form_1.createForm;
__webpack_require__(217);
__webpack_require__(226);
__webpack_require__(44);
__webpack_require__(231);
__webpack_require__(213);
__webpack_require__(227);
__webpack_require__(45);
__webpack_require__(46);
__webpack_require__(222);
__webpack_require__(48);
__webpack_require__(229);
var ms_loading_1 = __webpack_require__(47);
exports.Loading = ms_loading_1.Loading;
var ms_notification_1 = __webpack_require__(221);
exports.notification = ms_notification_1["default"];
var ms_message_1 = __webpack_require__(220);
exports.message = ms_message_1["default"];


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ms_control_1 = __webpack_require__(4);
__webpack_require__(27);
__webpack_require__(211);
__webpack_require__(49);
var ms_datepicker_panel_1 = __webpack_require__(214);
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
    template: __webpack_require__(248),
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
        panelTemplate: __webpack_require__(247),
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
/* 194 */
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
var Schema = __webpack_require__(266);
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
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(205);
__webpack_require__(216);


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_control_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(5);
ms_control_1["default"].extend({
    displayName: 'ms-input',
    template: __webpack_require__(250),
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
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
avalon.component('ms-menu', {
    template: __webpack_require__(251),
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
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ms_control_1 = __webpack_require__(4);
__webpack_require__(27);
var ms_select_panel_1 = __webpack_require__(224);
var ane_util_1 = __webpack_require__(17);
var utils_1 = __webpack_require__(5);
ms_control_1["default"].extend({
    displayName: 'ms-select',
    template: __webpack_require__(256),
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
        panelTemplate: __webpack_require__(255),
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
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ms_control_1 = __webpack_require__(4);
__webpack_require__(27);
__webpack_require__(49);
var ms_timepicker_panel_1 = __webpack_require__(228);
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
    template: __webpack_require__(260),
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
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(45);
var treeID = 0;
avalon.component('ms-tree', {
    template: __webpack_require__(261),
    defaults: {
        checkable: false,
        tree: [],
        expandedKeys: [],
        checkedKeys: [],
        indeterminatedKeys: [],
        $bufferedTree: {},
        root: true,
        renderSubTree: function (el) {
            return el.children.length ?
                '<wbr :widget="{is:\'ms-tree\',$id:\'tree_' + (++treeID) + '\',checkable:@checkable,tree:el.children,checkedKeys:@checkedKeys,indeterminatedKeys:@indeterminatedKeys,handleCheck:@handleCheck,root:false}"/>' :
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
        isIndeterminated: function (el) {
            return this.indeterminatedKeys.contains(el.key);
        },
        onCheck: avalon.noop,
        onCheckInner: avalon.noop,
        handleCheck: function (el) {
            if (this.isChecked(el)) {
                this.checkedKeys.remove(el.key);
                travelForCheckChildren(el.children, this.checkedKeys, false);
            }
            else {
                this.checkedKeys.push(el.key);
                travelForCheckChildren(el.children, this.checkedKeys, true);
            }
            this.indeterminatedKeys.remove(el.key);
            influenceParent(this.$bufferedTree[el.key], this.checkedKeys, this.indeterminatedKeys);
            this.onCheck(this.checkedKeys.toJSON());
        },
        onInit: function () {
            if (this.root) {
                travelForBuffer(this.tree.toJSON(), this.$bufferedTree);
            }
        }
    }
});
function travelForBuffer(treelet, bufferedTree, parent) {
    if (parent === void 0) { parent = null; }
    treelet.forEach(function (node) {
        node.parent = parent;
        bufferedTree[node.key] = node;
        travelForBuffer(node.children, bufferedTree, node);
    });
}
function travelForCheckChildren(treelet, checkedKeys, isCheck) {
    treelet.forEach(function (node) {
        if (isCheck) {
            checkedKeys.ensure(node.key);
        }
        else {
            checkedKeys.remove(node.key);
        }
        travelForCheckChildren(node.children, checkedKeys, isCheck);
    });
}
function influenceParent(node, checkedKeys, indeterminatedKeys, isIndeterminate) {
    if (isIndeterminate === void 0) { isIndeterminate = false; }
    if (node.parent === null) {
        return;
    }
    var count = 0;
    for (var _i = 0, _a = node.parent.children; _i < _a.length; _i++) {
        var child = _a[_i];
        if (checkedKeys.contains(child.key)) {
            count++;
        }
        if (indeterminatedKeys.contains(child.key)) {
            count += 0.5;
        }
    }
    if (!isIndeterminate) {
        if (count === 0) {
            indeterminatedKeys.remove(node.parent.key);
            checkedKeys.remove(node.parent.key);
            influenceParent(node.parent, checkedKeys, indeterminatedKeys);
            return;
        }
        else if (count === node.parent.children.length) {
            indeterminatedKeys.remove(node.parent.key);
            checkedKeys.ensure(node.parent.key);
            influenceParent(node.parent, checkedKeys, indeterminatedKeys);
            return;
        }
    }
    checkedKeys.remove(node.parent.key);
    indeterminatedKeys.ensure(node.parent.key);
    influenceParent(node.parent, checkedKeys, indeterminatedKeys, true);
}


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../../typings/index.d.ts" />
exports.__esModule = true;
var ms_control_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(5);
__webpack_require__(233);
__webpack_require__(232);
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
    template: __webpack_require__(264),
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
/* 202 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var moment = __webpack_require__(0);
__webpack_require__(44);
__webpack_require__(212);
avalon.component('ms-calendar', {
    template: __webpack_require__(244),
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
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var bootbox = __webpack_require__(41);
var ane_util_1 = __webpack_require__(17);
var $ = __webpack_require__(13);
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
/* 205 */
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
/* 206 */
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
/* 207 */
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
/* 208 */
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
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(26);
__webpack_require__(225);
__webpack_require__(43);
var ane_util_1 = __webpack_require__(17);
__webpack_require__(47);
var defaultPagination = function () {
    return {
        current: 1, pageSize: 10, total: NaN, onChange: avalon.noop
    };
};
avalon.component('ms-table', {
    soleSlot: 'header',
    template: __webpack_require__(257),
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
/* 210 */
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
    template: __webpack_require__(258),
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
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(203);
__webpack_require__(234);


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var moment = __webpack_require__(0);
var monthTable = [];
avalon.component('ms-calendar-year-view', {
    template: __webpack_require__(243),
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
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(193);
__webpack_require__(236);


/***/ }),
/* 214 */
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
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(204);


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var ane_util_1 = __webpack_require__(17);
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
    template: __webpack_require__(249),
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
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(196);


/***/ }),
/* 218 */
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
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(238);
__webpack_require__(197);


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_message_1 = __webpack_require__(207);
exports["default"] = ms_message_1["default"];


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_notification_1 = __webpack_require__(208);
exports["default"] = ms_notification_1["default"];


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(42);
__webpack_require__(48);
__webpack_require__(239);


/***/ }),
/* 223 */
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
/* 224 */
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
/* 225 */
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
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(210);


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(199);
__webpack_require__(241);


/***/ }),
/* 228 */
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
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(200);


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var domAlign = __webpack_require__(337);
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
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(201);
__webpack_require__(242);


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
avalon.component('ms-upload-card', {
    template: __webpack_require__(262),
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
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
avalon.component('ms-upload-list', {
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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

module.exports = "<div class=\"ane-calendar\">\n    <table class=\"ane-calendar-year-view\">\n        <tbody>\n            <tr :for=\"（i, row) in @table\">\n                <td class=\"ane-calendar-cell\"\n                    :class=\"[\n                                (@isSelected(cell) ? 'ane-calendar-selected-day' : ''),\n                                (@view > 1 && (i + j === 0 || i * j === 6) ? 'ane-calendar-prev-month-cell' : '')\n                            ]\"\n                    :for=\"(j, cell) in row\">\n                    <div class=\"ane-calendar-date\" :click=\"@handleCellClick(cell)\">{{cell.label}}</div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-calendar\">\n    <div class=\"row\" ms-if=\"@showHeader\">\n        <div class=\"col-md-2 col-md-offset-4\">\n            <ms-select :widget=\"{value:[@currentYear],options:@currentYearOptions,onChange:@handleYearChange}\"></ms-select>\n        </div>\n        <div class=\"col-md-2\">\n            <ms-select :widget=\"{value:[@currentMonth],options:@monthOptions,onChange:@handleMonthChange}\"></ms-select>\n        </div>\n    </div>\n    <table>\n        <thead>\n            <tr>\n                <th class=\"ane-calendar-column-header\" :for=\"day in @weekdays\">{{day}}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr :for=\"week in @table\">\n                <td class=\"ane-calendar-cell\" :class=\"el.className\" :for=\"el in week\">\n                    <div class=\"ane-calendar-date\" :click=\"@handleDateClick(el) | stop\">{{el.date}}</div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkbox-group\">\n    <ms-checkbox \n        :widget=\"{\n            checked:@selection.indexOf(option.value)!=-1,\n            group:true,\n            onChange:function(){\n                @toggleOption(option)\n            },\n            disabled:'disabled' in option?option.disabled:@disabled\n        }\" \n        :for=\"option in options\">{{option.label}}</ms-checkbox>\n</div>"

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = "<div :class=\"@wrapper\" class=\"ane-checkbox\" style=\"margin-top: 0; margin-bottom: 0;\">\n    <label class=\"ane-checkbox-inner ane-checkbox-inner-ie\">\n        <input type=\"checkbox\"\n            :class=\"[@indeterminate?'ane-checkbox-indeterminate':'']\"\n            :attr=\"{id:@helpId,disabled:@disabled}\"\n            :duplex-checked=\"@checked\"\n            data-duplex-changed=\"@onChange\"\n            />\n        <span class=\"text\"></span>\n    </label>\n    <label :attr=\"{'for':@helpId}\" style=\"padding-left: 0;\" :css=\"{marginRight:@group?8:0}\"><slot /></label>\n</div>"

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-datepicker-panel\" style=\"overflow: auto\">\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode === 0\">\n        <a class=\"ane-datepicker-prev-year-btn\" :click=\"mutate('subtract', 1, 'years')\">\n            <i class=\"fa fa-angle-double-left\"></i>\n        </a>\n        <a class=\"ane-datepicker-prev-month-btn\" :click=\"mutate('subtract', 1, 'months')\">\n            <i class=\"fa fa-angle-left\"></i>\n        </a>\n        <span>\n            <a class=\"ane-datepicker-month-select\" :click=\"@changeView(1)\">{{@currentMonth}}</a>\n            <a class=\"ane-datepicker-year-select\" :click=\"@changeView(2)\">{{@currentYear}}</a>\n        </span>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 1, 'years')\">\n            <i class=\"fa fa-angle-double-right\"></i>\n        </a>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 1, 'months')\">\n            <i class=\"fa fa-angle-right\"></i>\n        </a>\n    </div>\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode === 1\">\n        <a class=\"ane-datepicker-prev-year-btn\" :click=\"mutate('subtract', 1, 'years')\">\n            <i class=\"fa fa-angle-double-left\"></i>\n        </a>\n        <span>\n            <a class=\"ane-datepicker-month-select\" :click=\"@changeView(2)\">{{@currentYear}}</a>\n        </span>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 1, 'years')\">\n            <i class=\"fa fa-angle-double-right\"></i>\n        </a>\n    </div>\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode === 2\">\n        <a class=\"ane-datepicker-prev-year-btn\" :click=\"mutate('subtract', 10, 'years')\">\n            <i class=\"fa fa-angle-double-left\"></i>\n        </a>\n        <span>\n            <a class=\"ane-datepicker-month-select\" :click=\"@changeView(3)\">{{@startOfDecade + '-' + (@startOfDecade + 9)}}</a>\n        </span>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 10, 'years')\">\n            <i class=\"fa fa-angle-double-right\"></i>\n        </a>\n    </div>\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode === 3\">\n        <a class=\"ane-datepicker-prev-year-btn\" :click=\"mutate('subtract', 100, 'years')\">\n            <i class=\"fa fa-angle-double-left\"></i>\n        </a>\n        <span>{{@startOfCentury + '-' + (@startOfCentury + 99)}}</span>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 100, 'years')\">\n            <i class=\"fa fa-angle-double-right\"></i>\n        </a>\n    </div>\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode < 0 && @showTime\">\n        <span>\n            <a class=\"ane-datepicker-month-select\">{{@currentMonth}}</a>\n            <a class=\"ane-datepicker-month-select\">{{@currentDay}}</a>\n            <a class=\"ane-datepicker-year-select\">{{@currentYear}}</a>\n        </span>\n    </div>\n    <div class=\"ane-datepicker-panel-body\" :visible=\"@viewMode === 0\">\n        <ms-calendar :widget=\"{value:@currentDateArray,showHeader:false,disabledDate:@disabledDate,onChange:@handleCalendarChange}\"></ms-calendar>\n    </div>\n    <div class=\"ane-datepicker-panel-body\" :visible=\"@viewMode > 0\">\n        <ms-calendar-year-view :widget=\"{currentMonth:@currentMonth,currentYear:@currentYear,view:@viewMode,onSelect:@handleYearViewSelect}\"></ms-calendar-year-view>\n    </div>\n    <div class=\"ane-datepicker-panel-body\" :visible=\"@viewMode === -1\">\n        <ms-timepicker-view :widget=\"{value:@currentDateArray,onChange:@handleTimepickerChange}\"></ms-timepicker-view>\n    </div>\n    <div class=\"ane-datepicker-panel-footer\" :visible=\"@viewMode === 0 && !@showTime\">\n        <span class=\"ane-datepicker-panel-footer-btn\">\n            <a class=\"ane-datepicker-panel-today-btn\" :click=\"@today\">今天</a>\n        </span>\n    </div>\n    <div class=\"ane-datepicker-panel-footer\" :visible=\"@viewMode <= 0 && @showTime\">\n        <span class=\"ane-datepicker-panel-footer-btn\">\n            <a class=\"ane-datepicker-panel-now-btn\" :click=\"@today\">此刻</a>\n            <a class=\"ane-datepicker-panel-ok-btn\" :click=\"@complete\">确定</a>\n            <a class=\"ane-datepicker-panel-timepicker-btn\" :click=\"@changeView(@viewMode > -1 ? -1 : 0)\">{{@viewMode > -1 ? '选择时间' : '选择日期'}}</a>\n        </span>\n    </div>\n</div>"

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-datepicker\" :css=\"{width:@width}\">\n    <i class=\"fa fa-calendar ane-datepicker-icon\"></i>\n    <i class=\"fa fa-times-circle ane-datepicker-clear\" :if=\"@selected.length\" :click=\"@clear\"></i>\n    <input type=\"text\"\n        class=\"form-control ane-datepicker-input\"\n        :click=\"@handleClick\"\n        readonly\n        :attr=\"{placeholder:@placeholder}\"\n        :css=\"{width:'100%'}\"\n        :duplex=\"selected\" />\n    <ms-trigger :widget=\"{\n        visible: @panelVisible,\n        innerVmId: @panelVmId,\n        innerClass: @panelClass,\n        innerTemplate: @panelTemplate,\n        withInBox: @withInBox,\n        getTarget: @getTarget,\n        onHide: @handlePanelHide\n    }\">\n    </ms-trigger>\n</div>"

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group has-feedback\" :css=\"[@inline && @inlineFormGroupStyle]\" :class=\"[@className,(@hasRules && @dirty ? (@reasons.length ? 'has-error' : 'has-success') : '')]\">\n    <label class=\"control-label\" :if=\"@label.length\">{{@label}}</label>\n    <slot />\n    <i class=\"form-control-feedback\" :if=\"@hasRules && @showIcon\" :class=\"[(@dirty ? 'glyphicon' : ''), (@reasons.length ? 'glyphicon-remove' : 'glyphicon-ok')]\" :visible=\"@dirty\"></i>\n    <small class=\"help-block\" :css=\"[@inline && @inlineMessageStyle]\" :if=\"@hasRules && @reasons.length\">{{@reasons.length ? @reasons[0].message : ''}}</small>\n</div>"

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"form-control\" \n    :duplex=\"@text\" \n    :attr=\"{name:@col,placeholder:@placeholder}\" \n    :css=\"{width:@width}\"\n    data-duplex-changed=\"@handleChange\">"

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"ane-menu\">\n    <li :class=\"[\n                    !item.children || item.children.length === 0 ? 'ane-menu-item' : 'ane-menu-submenu',\n                    @openKeys.contains(item.key) ? 'ane-menu-open' : '',\n                    @selectedKeys.contains(item.key) ? 'ane-menu-item-selected' : ''\n                ]\"\n        :for=\"item in @menu\">\n        <a :click=\"handleClick(item, item.key, [item.key])\" style=\"padding-left: 24px;\">\n            <i :class=\"[item.icon]\"></i>\n            <span>{{item.title}}</span>\n            <i class=\"ane-menu-caret fa\" :class=\"[@openKeys.contains(item.key) ? 'fa-angle-up' : 'fa-angle-down']\"></i>\n        </a>\n        <ul class=\"ane-menu\">\n            <li :class=\"[\n                            !item2.children || item2.children.length === 0 ? 'ane-menu-item' : 'ane-menu-submenu',\n                                @openKeys.contains(item2.key) ? 'ane-menu-open' : '',\n                                @selectedKeys.contains(item2.key) ? 'ane-menu-item-selected' : ''\n                            ]\"\n                :for=\"item2 in item.children\">\n                <a :click=\"handleClick(item2, item2.key, [item2.key,item.key])\" style=\"padding-left: 48px;\">\n                    <span>{{item2.title}}</span>\n                    <i class=\"ane-menu-caret fa\" :class=\"[@openKeys.contains(item2.key) ? 'fa-angle-up' : 'fa-angle-down']\"></i>\n                </a>\n                <ul class=\"ane-menu\">\n                    <li :class=\"[\n                                    !item3.children || item3.children.length === 0 ? 'ane-menu-item' : 'ane-menu-submenu',\n                                    @selectedKeys.contains(item3.key) ? 'ane-menu-item-selected' : ''\n                                ]\"\n                        :for=\"item3 in item2.children\">\n                        <a :click=\"handleClick(item3, item3.key, [item3.key,item2.key,item.key])\" style=\"padding-left: 72px;\">{{item3.title}}</a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </li>\n</ul>"

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\">\n    <a class=\"btn blue\" :attr=\"{disabled:@current===1}\" :click=\"@prevPage\">\n        <i class=\"icon-step-backward\"></i>上一页\n    </a>\n    <a class=\"btn success\">{{ @current }}/{{ Math.ceil(@total/@pageSize) }}</a>\n    <a class=\"btn blue\" :attr=\"{disabled:@current===Math.ceil(@total/@pageSize)}\" :click=\"@nextPage\">\n        <i class=\"icon-step-forward\"></i>下一页\n    </a>\n</div>"

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkbox-group\">\n    <ms-radio \n        :widget=\"{\n            checked:@selected,\n            value:option.value,\n            name:@helpId,\n            group:true,\n            onChange:function(){\n                @toggleOption(arguments[0], option)\n            },\n            disabled:'disabled' in option?option.disabled:@disabled\n        }\" \n        :for=\"option in options\">{{option.label}}</ms-radio>\n</div>"

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = "<div :class=\"@wrapper\" class=\"ane-radio\" style=\"margin-top: 0; margin-bottom: 0;\">\n    <label class=\"ane-radio-inner ane-radio-inner-ie\">\n        <input type=\"radio\"\n            :attr=\"{id:@helpId,disabled:@disabled,value:@value,name:@name}\"\n            :duplex=\"@checked\"\n            data-duplex-changed=\"@onChange\"\n            />\n        <span class=\"text\"></span>\n    </label>\n    <label :attr=\"{'for':@helpId}\" style=\"padding-left: 0;\" :css=\"{marginRight:@group?8:0}\"><slot /></label>\n</div>"

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: auto\">\n    <ul class=\"ane-select-dropdown-menu\" role=\"menu\">\n        <li class=\"ane-select-dropdown-menu-item\"\n            :class=\"[\n                (@selection.some(function(){return arguments[0].value===option.value}) ? 'ane-select-dropdown-menu-item-selected' : ''),\n                (option.disabled ? 'ane-select-dropdown-menu-item-disabled' : '')\n            ]\"\n            :for=\"option in @getFilteredOptions()\"\n            :click=\"@handleOptionClick($event, option)\"\n            role=\"menuitem\">\n            {{option.label}}\n            <i class=\"fa fa-check\" :visible=\"@isMultiple\"></i>\n        </li>\n        <li class=\"ane-select-dropdown-menu-item ane-select-dropdown-menu-item-disabled\"\n            :visible=\"@getFilteredOptions().length <= 0 && @searchValue && !@loading\">无数据</li>\n        <li class=\"ane-select-dropdown-menu-item ane-select-dropdown-menu-item-disabled\"\n            :visible=\"@loading\">加载中</li>\n    </ul>\n</div>"

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-select form-control\"\n    :class=\"[(@isMultiple ? 'ane-select-multiple' : '')]\"\n    :css=\"{width:@width}\"\n    :click=\"@handleClick\"\n    role=\"combobox\"\n    aria-autocomplete=\"list\"\n    aria-haspopup=\"true\"\n    :attr=\"{'aria-expanded': @panelVisible + ''}\">\n    <ul class=\"ane-select-selection\" :class=\"[(@isMultiple ? 'ane-select-tags' : '')]\">\n        <li class=\"ane-select-selected\" :visible=\"!@isMultiple && (!@showSearch || !@panelVisible)\">{{@displayValue}}</li>\n        <li class=\"ane-select-choice\" :for=\"choice in @selection\">\n            <span>{{choice.label}}</span>\n            <i class=\"fa fa-times\" :click=\"@removeSelection($event, choice) | stop\"></i>\n        </li>\n        <li class=\"ane-select-search\">\n            <input class=\"ane-select-search-field\"\n                name=\"search\"\n                type=\"text\"\n                autocomplete=\"off\"\n                :duplex=\"@searchValue\"\n                :css=\"{visibility:(@showSearch && @panelVisible)?'visible':'hidden'}\"\n                :keydown=\"@handleDelete\" />\n        </li>\n    </ul>\n    <i class=\"fa ane-select-arrow\"\n        :class=\"[(@panelVisible ? 'fa-caret-up' : 'fa-caret-down')]\"\n        :visible=\"@mode === ''\"></i>\n    <ms-trigger :widget=\"{\n        width: @panelWidth,\n        visible: @panelVisible,\n        innerVmId: @panelVmId,\n        innerClass: @panelClass,\n        innerTemplate: @panelTemplate,\n        withInBox: @withInBox,\n        getTarget: @getTarget,\n        onHide: @handlePanelHide}\">\n    </ms-trigger>\n</div>"

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class=\"table\" :loading=\"!window.isNaN(@paginationConfig.total) && @loading\">\n        <thead>\n            <tr>\n                <th :if=\"@needSelection\">\n                    <ms-checkbox :widget=\"{checked:@isAllChecked,onChange:@handleCheckAll}\"></ms-checkbox>\n                </th>\n                <th :for=\"el in @columns\">{{el.title}}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr :for=\"($index, record) in @getCurrentPageData()\">\n                <td :if=\"@needSelection\">\n                    <ms-checkbox :widget=\"{checked:@checked.indexOf(record[@key])!=-1,onChange:function(){@handleCheck(arguments[0].target.checked,record)}}\"></ms-checkbox>\n                </td>\n                <td :for=\"col in @columns\" :html=\"col.template\"></td>\n            </tr>\n        </tbody>\n    </table>\n    <div class=\"pull-right\">\n        <ms-pagination :widget=\"{current:@paginationConfig.current,pageSize:@paginationConfig.pageSize,total:@total,onChange:@handlePageChange}\"></ms-pagination>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>"

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = "<textarea class=\"form-control\" \n    :duplex=\"@text\" \n    :attr=\"{rows:@rows,name:@col}\"\n    data-duplex-changed=\"@handleChange\"></textarea>"

/***/ }),
/* 259 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-timepicker-view\">\n    <div class=\"ane-timepicker-view-combobox\">\n        <div class=\"ane-timepicker-view-select\" name=\"hour-options\">\n            <ul>\n                <li :for=\"hour in @hourOptions\"\n                    :class=\"[(hour==@currentHour?'ane-timepicker-view-select-option-selected':'')]\"\n                    :click=\"@select(hour, 'hour')\">{{hour}}</li>\n            </ul>\n        </div>\n        <div class=\"ane-timepicker-view-select\" name=\"minute-options\">\n            <ul>\n                <li :for=\"minute in @minuteOptions\"\n                    :class=\"[(minute==@currentMinute?'ane-timepicker-view-select-option-selected':'')]\"\n                    :click=\"@select(minute, 'minute')\">{{minute}}</li>\n            </ul>\n        </div>\n        <div class=\"ane-timepicker-view-select\" name=\"second-options\">\n            <ul>\n                <li :for=\"second in @secondOptions\"\n                    :class=\"[(second==@currentSecond?'ane-timepicker-view-select-option-selected':'')]\"\n                    :click=\"@select(second, 'second')\">{{second}}</li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),
/* 260 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-timepicker\" :css=\"{width:@width}\">\n    <i class=\"fa fa-clock-o ane-timepicker-icon\"></i>\n    <i class=\"fa fa-times-circle ane-timepicker-clear\" :if=\"@selected.length\" :click=\"@clear\"></i>\n    <input type=\"text\"\n        class=\"form-control ane-timepicker-input\"\n        :click=\"@handleClick\"\n        readonly\n        :attr=\"{placeholder:@placeholder}\"\n        :css=\"{width:'100%'}\"\n        :duplex=\"selected\" />\n    <ms-trigger :widget=\"{\n        visible: @panelVisible,\n        innerVmId: @panelVmId,\n        innerClass: @panelClass,\n        innerTemplate: @panelTemplate,\n        withInBox: @withInBox,\n        getTarget: @getTarget,\n        onHide: @handlePanelHide\n    }\">\n    </ms-trigger>\n</div>"

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"ane-tree\">\n    <li :for=\"(index, el) in @tree | get(0)\">\n        <span class=\"ane-tree-icon fa\" :class=\"[@changeIcon(el)]\" :click=\"@openSubTree(el)\"></span>\n        <span :if=\"@checkable\">\n            <ms-checkbox :widget=\"{indeterminate:@isIndeterminated(el),checked:@isChecked(el),onChange:function(){handleCheck(el)}}\"></ms-checkbox>\n        </span>\n        {{el.title}}\n        <div :visible=\"@isExpended(el)\" :html=\"@renderSubTree(el)\"></div>\n    </li>\n</ul>"

/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-upload-card\">\n    <div class=\"ane-upload-card-item\" :class=\"[(file.status === 'error' ? 'bordered-danger' : '')]\" :for=\"($index, file) in @fileList\">\n        <img :attr=\"{src:file.url,alt:file.name,title:file.name}\">\n        <span class=\"ane-upload-card-progress\" :visible=\"file.status === 'uploading'\">上传中 {{file.progress}}%</span>\n        <span class=\"ane-upload-card-tool\">\n            <i class=\"fa fa-eye\"></i>\n            <i class=\"fa fa-trash-o\" :click=\"del(file)\"></i>\n        </span>\n    </div>\n</div>"

/***/ }),
/* 263 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"ane-upload-list\">\n    <li :for=\"($index, file) in @fileList\"\n        :class=\"[@getTextClass(file)]\">\n        <div class=\"ane-upload-list-info\">\n            <i class=\"fa fa-file-o text-muted\"></i>\n            <span :attr=\"{title:file.name}\">{{file.name}}</span>\n        </div>\n        <i class=\"fa fa-times ane-upload-btn-close\" :click=\"del(file)\"></i>\n        <span class=\"ane-upload-list-progress\" :visible=\"file.status === 'uploading'\">上传中 {{file.progress}}%</span>\n        <i class=\"fa fa-check-circle text-success\" :class=\"[(file.status === 'done' ? '' : 'hide')]\"></i>\n    </li>\n</ul>"

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-upload-container\">\n    <div class=\"ane-upload-card-wall\" :if=\"@showUploadList && @listType==='picture-card'\">\n        <ms-upload-card :widget=\"{fileList: @fileList, onRemove: @handleRemove}\"></ms-upload-card>\n    </div>\n    <label :visible=\"!@showUploadList && @listType==='picture-card' && @fileList.length > 0\" class=\"ane-upload-card-item\" :attr=\"{'for':@helpId}\">\n        <img :attr=\"{src:@fileList[0]?@fileList[0].url:blankImg,alt:@fileList[0]?@fileList[0].name:'',title:@fileList[0]?@fileList[0].name:''}\">\n    </label>\n    <label :visible=\"@showUploadList || @fileList.length == 0\" :class=\"[(@listType==='picture-card'?@cardClass:@btnClass)]\" :attr=\"{'for':@helpId}\"><slot /></label>\n    <form><input type=\"file\" name=\"file\" :attr=\"{id:@helpId}\"></form>\n    <div :if=\"@showUploadList && @listType!=='picture-card'\">\n        <ms-upload-list :widget=\"{fileList: @fileList, onRemove: @handleRemove}\"></ms-upload-list>\n    </div>\n</div>"

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);

__webpack_require__(185);
__webpack_require__(186);

var jQuery = __webpack_require__(13);
window.$ = window.jQuery = jQuery;
__webpack_require__(183);
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
__webpack_require__(184);
__webpack_require__(191);
__webpack_require__(50);
__webpack_require__(190);

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
/* 266 */,
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
],[265]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZm9ybS9tcy1jb250cm9sLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZm9ybS91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9hbmUtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWNoZWNrYm94L21zLWNoZWNrYm94LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdHJpZ2dlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXJhZGlvL21zLXJhZGlvLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtcGFnaW5hdGlvbi9tcy1wYWdpbmF0aW9uLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtc2VsZWN0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1jaGVja2JveC9tcy1jaGVja2JveC1ncm91cC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWxvYWRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1yYWRpby9tcy1yYWRpby1ncm91cC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci12aWV3LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbGF5b3V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2RvY3MvbmF2LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kb2NzL3N0b3Jlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9kb2NzL2NvbXBvbmVudHMvZG9jLXNpZGViYXIvZG9jLXNpZGViYXIudHMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1kYXRlcGlja2VyL21zLWRhdGVwaWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1mb3JtL2NyZWF0ZS1mb3JtLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZm9ybS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWlucHV0L21zLWlucHV0LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbWVudS9tcy1tZW51LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtc2VsZWN0L21zLXNlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRyZWUvbXMtdHJlZS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXVwbG9hZC9tcy11cGxvYWQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1sb2FkaW5nL21zLWxvYWRpbmcubGVzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWNhbGVuZGFyL21zLWNhbGVuZGFyLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZGlhbG9nL21zLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWZvcm0vbXMtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWxheW91dC9tcy1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1tZXNzYWdlL21zLW1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1ub3RpZmljYXRpb24vbXMtbm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdGFibGUvbXMtdGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy10ZXh0YXJlYS9tcy10ZXh0YXJlYS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWNhbGVuZGFyL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtY2FsZW5kYXIvbXMtY2FsZW5kYXIteWVhci12aWV3LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZGF0ZXBpY2tlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci1wYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWRpYWxvZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWZvcm0vbXMtZm9ybS1pdGVtLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtaW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1sb2FkaW5nL21zLWxvYWRpbmctZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbWVudS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLW1lc3NhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1ub3RpZmljYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1yYWRpby9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3Qtb3B0aW9uLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtc2VsZWN0L21zLXNlbGVjdC1wYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRhYmxlL21zLXRhYmxlLWhlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRleHRhcmVhL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci1wYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRyZWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy10cmlnZ2VyL21zLXRyaWdnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy11cGxvYWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1jYWxlbmRhci9tcy1jYWxlbmRhci5sZXNzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvbXMtY2hlY2tib3gubGVzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci5sZXNzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbGF5b3V0L21zLWxheW91dC5sZXNzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbWVudS9tcy1tZW51Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1yYWRpby9tcy1yYWRpby5sZXNzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtc2VsZWN0L21zLXNlbGVjdC5sZXNzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlci9tcy10aW1lcGlja2VyLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1jYWxlbmRhci9tcy1jYWxlbmRhci15ZWFyLXZpZXcuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWNhbGVuZGFyL21zLWNhbGVuZGFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1jaGVja2JveC9tcy1jaGVja2JveC1ncm91cC5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvbXMtY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci1wYW5lbC5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZGF0ZXBpY2tlci9tcy1kYXRlcGlja2VyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1mb3JtL21zLWZvcm0taXRlbS5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtaW5wdXQvbXMtaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLW1lbnUvbXMtbWVudS5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtcGFnaW5hdGlvbi9tcy1wYWdpbmF0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1yYWRpby9tcy1yYWRpby1ncm91cC5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtcmFkaW8vbXMtcmFkaW8uaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3QtcGFuZWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRhYmxlL21zLXRhYmxlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy10ZXh0YXJlYS9tcy10ZXh0YXJlYS5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlci9tcy10aW1lcGlja2VyLXZpZXcuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdHJlZS9tcy10cmVlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLWNhcmQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXVwbG9hZC9tcy11cGxvYWQtbGlzdC5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdXBsb2FkL21zLXVwbG9hZC5odG1sIiwid2VicGFjazovLy8uL2RvY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9jb21wb25lbnRzL2RvYy1zaWRlYmFyL2RvYy1zaWRlYmFyLmh0bWwiLCJ3ZWJwYWNrOi8vL3ZlcnR4IChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7QUNWQSxvQ0FBa0M7QUFHbEMscUJBQWUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7SUFDMUMsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFO1FBQ04sU0FBUyxFQUFFLElBQUk7UUFDZixNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxFQUFFO1FBQ1QsR0FBRyxFQUFFLEVBQUU7UUFDUCxXQUFXLEVBQUUsRUFBRTtRQUNmLEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1FBQ3JCLFNBQVMsWUFBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztnQkFDMUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLFlBQVk7YUFDekQsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELFlB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBLHNDQUFzQyxpSEFBaUgsYzs7Ozs7Ozs7QUNBdkosZSIsImZpbGUiOiJhcHBiZDgzNDVlYzUzNjE2MjlkMGM3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImluZGV4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImluZGV4XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCB7IGZpbmRQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGF2YWxvbi5jb21wb25lbnQoJ21zLWNvbnRyb2wnLCB7XG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICRmb3JtSXRlbTogbnVsbCxcbiAgICAgICAgJHJ1bGVzOiBudWxsLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIGNvbDogJycsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgd2lkdGg6ICd4JyxcbiAgICAgICAgb25DaGFuZ2U6IGF2YWxvbi5ub29wLFxuICAgICAgICBlbWl0VmFsdWUoZSkge1xuICAgICAgICAgICAgbGV0IHYgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuJGZvcm1JdGVtICYmIHRoaXMuJGZvcm1JdGVtLm9uRm9ybUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5jb2wsIHZhbHVlOiB2LCBkZW55VmFsaWRhdGU6IGUuZGVueVZhbGlkYXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdFZhbHVlKGUpO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShlKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtZm9ybS9tcy1jb250cm9sLnRzIiwiaW1wb3J0IHsgZmluZFBhcmVudENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2FuZS11dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRUb0Zvcm1JdGVtKHZtb2RlbCwgb3B0aW9ucyA9IHt9KTogdm9pZCB7XG4gICAgdm1vZGVsLiRmb3JtSXRlbSA9IGZpbmRQYXJlbnRDb21wb25lbnQodm1vZGVsLCAnbXMtZm9ybS1pdGVtJyk7XG4gICAgaWYgKHZtb2RlbC4kZm9ybUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2bW9kZWwuJGZvcm1JdGVtLm9uRmllbGRDaGFuZ2Uoe1xuICAgICAgICBuYW1lOiB2bW9kZWwuY29sLFxuICAgICAgICBydWxlczogdm1vZGVsLiRydWxlcyxcbiAgICAgICAgdmFsdWU6IHZtb2RlbC52YWx1ZSxcbiAgICAgICAgZGVueVZhbGlkYXRlOiB0cnVlLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1mb3JtL3V0aWxzLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhcmVudENvbXBvbmVudCh2bSwgY3R5cGUpIHtcbiAgICBsZXQgcGFyZW50ID0gdm0uJGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQuX3ZtXyAmJiAoIWN0eXBlIHx8IHBhcmVudC5fY3R5cGVfID09PSBjdHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuX3ZtXztcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNsb3RUb1ZNb2RlbCh2bW9kZWwsIHZub2Rlcz86IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKHZub2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZub2RlcyA9IHZtb2RlbC4kcmVuZGVyLnJvb3QgPyB2bW9kZWwuJHJlbmRlci5yb290LmNoaWxkcmVuIDogW107XG4gICAgfVxuICAgIHZub2Rlcy5mb3JFYWNoKHZub2RlID0+IHtcbiAgICAgICAgaWYgKCF2bm9kZSB8fCAhdm5vZGUubm9kZU5hbWUgfHwgdm5vZGUuZG9tLm5vZGVUeXBlICE9PSAxKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgbGV0IHNsb3ROYW1lID0gdm5vZGUuZG9tLmdldEF0dHJpYnV0ZSgnc2xvdCcpO1xuICAgICAgICBpZiAoc2xvdE5hbWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB2bm9kZS5wcm9wc1snOnNraXAnXTtcbiAgICAgICAgICAgIGRlbGV0ZSB2bm9kZS5wcm9wc1snbXMtc2tpcCddO1xuICAgICAgICAgICAgdm1vZGVsW3Nsb3ROYW1lXSA9IGF2YWxvbi52ZG9tKHZub2RlLCAndG9IVE1MJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZVNsb3RUb1ZNb2RlbCh2bW9kZWwsIHZub2RlLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hpbGRUZW1wbGF0ZURlc2NyaXB0b3Iodm1vZGVsLCByZW5kZXIgPSB2bW9kZWwuJHJlbmRlcik6IGFueVtdIHtcbiAgICBpZiAocmVuZGVyLmRpcmVjdGl2ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiByZW5kZXIuZGlyZWN0aXZlcy5yZWR1Y2UoKGFjYywgYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24uaXMpIHtcbiAgICAgICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpczogYWN0aW9uLmlzLFxuICAgICAgICAgICAgICAgIHByb3BzOiBhY3Rpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgaW5saW5lVGVtcGxhdGU6IGFjdGlvbi5mcmFnbWVudCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogZ2V0Q2hpbGRUZW1wbGF0ZURlc2NyaXB0b3Iodm1vZGVsLCBhY3Rpb24uaW5uZXJSZW5kZXIgfHwgeyBkaXJlY3RpdmVzOiBbXSB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0OiBudW1iZXIgPSAzMDAsIGltbWVkaWF0ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdGxldCB0aW1lb3V0O1xuXHRyZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuXHRcdGxldCBjb250ZXh0ID0gdGhpcztcblx0XHRsZXQgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0aWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0fTtcblx0XHRsZXQgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHR9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FuZS11dGlsLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IHsgcGFyc2VTbG90VG9WTW9kZWwgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5cbmlmIChhdmFsb24ubXNpZSA8PSA4KSB7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQ7XG4gICAgY29uc3QgaGVhZCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGNvbnN0IHN0eWxlOiBhbnkgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBjc3NTdHIgPSBgXG4gICAgICAgIC5hbmUtY2hlY2tib3gtaW5uZXItaWUgaW5wdXQge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuYW5lLWNoZWNrYm94LWlubmVyLWllIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgYDtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcblxuICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1N0cjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUoY3NzU3RyKSk7XG4gICAgfVxuXG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLWNoZWNrYm94Jywge1xuICAgIHNvbGVTbG90OiAnbGFiZWwnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLWNoZWNrYm94Lmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICB3cmFwcGVyOiAnY2hlY2tib3gnLFxuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICBpbmRldGVybWluYXRlOiBmYWxzZSxcbiAgICAgICAgZ3JvdXA6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIG9uQ2hhbmdlOiBhdmFsb24ubm9vcCxcbiAgICAgICAgZmx1c2g6IGF2YWxvbi5ub29wLFxuICAgICAgICBoZWxwSWQ6ICcnLFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaGVscElkID0gdGhpcy4kaWQ7XG4gICAgICAgICAgICAvLyAvLyBpbmxpbmXlnKhJRTjkuIvmmL7npLrmnInpl67popjvvIzlvoXop6PlhrNcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmlubGluZSAhPSB2b2lkIDApIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLndyYXBwZXIgPSAnY2hlY2tib3gtaW5saW5lJztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvbXMtY2hlY2tib3gudHMiLCJpbXBvcnQgJy4vbXMtdHJpZ2dlcic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy10cmlnZ2VyL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IHsgcGFyc2VTbG90VG9WTW9kZWwgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5cbmlmIChhdmFsb24ubXNpZSA8PSA4KSB7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQ7XG4gICAgY29uc3QgaGVhZCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGNvbnN0IHN0eWxlOiBhbnkgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBjc3NTdHIgPSBgXG4gICAgICAgIC5hbmUtcmFkaW8taW5uZXItaWUgaW5wdXQge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuYW5lLXJhZGlvLWlubmVyLWllIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgYDtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcblxuICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1N0cjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUoY3NzU3RyKSk7XG4gICAgfVxuXG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLXJhZGlvJywge1xuICAgIHNvbGVTbG90OiAnbGFiZWwnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXJhZGlvLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICB3cmFwcGVyOiAncmFkaW8nLFxuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIGNoZWNrZWQ6ICcnLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBncm91cDogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgb25DaGFuZ2U6IGF2YWxvbi5ub29wLFxuICAgICAgICBoZWxwSWQ6ICcnLFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaGVscElkID0gdGhpcy4kaWQ7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXJhZGlvL21zLXJhZGlvLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuXG4vKipcbiAqIOWIhumhtee7hOS7tlxuICogQHByb3Age051bWJlcn0gW2N1cnJlbnQ9MV0g5b2T5YmN6aG1XG4gKiBAcHJvcCB7TnVtYmVyfSBbcGFnZVNpemU9MTBdIOavj+mhteeahOaVsOaNrumHj1xuICogQHByb3Age051bWJlcn0gdG90YWwg5pWw5o2u5oC76YePXG4gKiBAZXZlbnQge0Z1bmN0aW9ufSBvbkNoYW5nZSDlvZPpobXnoIHmlLnlj5jml7bop6blj5HvvIzlj4LmlbBjdXJyZW50XG4gKiBcbiAqIEBleGFtcGxlXG4gKiBgYGBcbiAqIDxtcy1wYWdpbmF0aW9uIDp3aWRnZXQ9XCJ7dG90YWw6MTAwLG9uQ2hhbmdlOkBoYW5kbGVQYWdlQ2hhbmdlfVwiPjwvbXMtcGFnaW5hdGlvbj5cbiAqIFxuICogPG1zLXBhZ2luYXRpb24gOndpZGdldD1cIntjdXJyZW50OkBjdXJyZW50UGFnZSxwYWdlU2l6ZTpAcGFnZVNpemUsdG90YWw6QHRvdGFsLG9uQ2hhbmdlOkBoYW5kbGVQYWdlQ2hhbmdlfVwiPjwvbXMtcGFnaW5hdGlvbj5cbiAqIGBgYFxuICovXG5hdmFsb24uY29tcG9uZW50KCdtcy1wYWdpbmF0aW9uJywge1xuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXBhZ2luYXRpb24uaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGN1cnJlbnQ6IDEsXG4gICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICAgIHByZXZQYWdlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKC0tdGhpcy5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbmV4dFBhZ2UoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50IDwgTWF0aC5jZWlsKHRoaXMudG90YWwvdGhpcy5wYWdlU2l6ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCsrdGhpcy5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2U6IGF2YWxvbi5ub29wLFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICB9LFxuICAgICAgICBvbkRpc3Bvc2UoZXZlbnQpIHtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtcGFnaW5hdGlvbi9tcy1wYWdpbmF0aW9uLnRzIiwiaW1wb3J0ICcuL21zLXNlbGVjdCc7XG5pbXBvcnQgJy4vbXMtc2VsZWN0LW9wdGlvbidcbmltcG9ydCAnLi9tcy1zZWxlY3QubGVzcyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1zZWxlY3QvaW5kZXgudHMiLCJpbXBvcnQgJy4vbXMtY2hlY2tib3gnO1xuaW1wb3J0ICcuL21zLWNoZWNrYm94LWdyb3VwJztcbmltcG9ydCAnLi9tcy1jaGVja2JveC5sZXNzJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWNoZWNrYm94L2luZGV4LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IGNvbnRyb2xDb21wb25lbnQgZnJvbSAnLi4vbXMtZm9ybS9tcy1jb250cm9sJztcbmltcG9ydCB7IGVtaXRUb0Zvcm1JdGVtIH0gZnJvbSAnLi4vbXMtZm9ybS91dGlscyc7XG5pbXBvcnQgeyBmaW5kUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuaW1wb3J0ICcuL21zLWNoZWNrYm94JztcblxuY29udHJvbENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRpc3BsYXlOYW1lOiAnbXMtY2hlY2tib3gtZ3JvdXAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLWNoZWNrYm94LWdyb3VwLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgb3B0aW9uczogW10sXG4gICAgICAgIHNlbGVjdGlvbjogW10sXG4gICAgICAgIHRvZ2dsZU9wdGlvbihvcHRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkluZGV4ID0gdGhpcy5zZWxlY3Rpb24uaW5kZXhPZihvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbkluZGV4ID09PSAtMSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnJlbW92ZShvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdGhpcy5zZWxlY3Rpb24udG9KU09OKCkgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gtZ3JvdXAnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWFwVmFsdWVUb1NlbGVjdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLm9wdGlvbnMuZmlsdGVyKG8gPT4gdmFsdWUuY29udGFpbnMoby52YWx1ZSkpLm1hcChvID0+IG8udmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGVtaXRUb0Zvcm1JdGVtKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3ZhbHVlJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvU2VsZWN0aW9uKHYpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB2LnRvSlNPTigpIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlbnlWYWxpZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94LWdyb3VwJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9TZWxlY3Rpb24odGhpcy52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vdm0uZWxIaWRkZW5JbnB1dCA9ICQoZWwpLmZpbmQoJ2lucHV0OmhpZGRlbicpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRpc3Bvc2UoZXZlbnQpIHtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvbXMtY2hlY2tib3gtZ3JvdXAudHMiLCJleHBvcnQgeyBMb2FkaW5nIH0gZnJvbSAgJy4vbXMtbG9hZGluZy1kaXJlY3RpdmUnO1xuaW1wb3J0ICcuL21zLWxvYWRpbmcubGVzcyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1sb2FkaW5nL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IGNvbnRyb2xDb21wb25lbnQgZnJvbSAnLi4vbXMtZm9ybS9tcy1jb250cm9sJztcbmltcG9ydCB7IGVtaXRUb0Zvcm1JdGVtIH0gZnJvbSAnLi4vbXMtZm9ybS91dGlscyc7XG5pbXBvcnQgeyBmaW5kUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuaW1wb3J0ICcuL21zLXJhZGlvJztcblxuY29udHJvbENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRpc3BsYXlOYW1lOiAnbXMtcmFkaW8tZ3JvdXAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXJhZGlvLWdyb3VwLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgb3B0aW9uczogW10sXG4gICAgICAgIHNlbGVjdGVkOiAnJyxcbiAgICAgICAgdG9nZ2xlT3B0aW9uKGUsIG9wdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWQgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFkaW8tZ3JvdXAnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGVscElkOiAnJyxcbiAgICAgICAgbWFwVmFsdWVUb1NlbGVjdGVkKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5oZWxwSWQgPSB0aGlzLiRpZDtcbiAgICAgICAgICAgIGVtaXRUb0Zvcm1JdGVtKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3ZhbHVlJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvU2VsZWN0ZWQodik7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHYgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVueVZhbGlkYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmFkaW8tZ3JvdXAnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb1NlbGVjdGVkKHRoaXMudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvblJlYWR5KGV2ZW50KSB7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRGlzcG9zZShldmVudCkge1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1yYWRpby9tcy1yYWRpby1ncm91cC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBPUFRJT05fSEVJR0hUID0gMjQ7XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLXRpbWVwaWNrZXItdmlldycsIHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy10aW1lcGlja2VyLXZpZXcuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgY3VycmVudEhvdXI6IDAsXG4gICAgICAgIGN1cnJlbnRNaW51dGU6IDAsXG4gICAgICAgIGN1cnJlbnRTZWNvbmQ6IDAsXG4gICAgICAgIGhvdXJPcHRpb25zOiBhdmFsb24ucmFuZ2UoMjQpLm1hcChuID0+ICgnMCcgKyBuKS5zdWJzdHIoLTIpKSxcbiAgICAgICAgbWludXRlT3B0aW9uczogYXZhbG9uLnJhbmdlKDYwKS5tYXAobiA9PiAoJzAnICsgbikuc3Vic3RyKC0yKSksXG4gICAgICAgIHNlY29uZE9wdGlvbnM6IGF2YWxvbi5yYW5nZSg2MCkubWFwKG4gPT4gKCcwJyArIG4pLnN1YnN0cigtMikpLFxuICAgICAgICBvbkNoYW5nZTogYXZhbG9uLm5vb3AsXG4gICAgICAgIHNlbGVjdChlbCwgdHlwZSkge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW5lLXRpbWVwaWNrZXItdmlldy1zZWxlY3RbbmFtZT0nICsgdHlwZSArICctb3B0aW9uc10nKS5zY3JvbGxUb3AgPSBlbCAqIDI0O1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdob3VyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhvdXIgPSBlbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ21pbnV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNaW51dGUgPSBlbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2Vjb25kID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaG91cjogdGhpcy5jdXJyZW50SG91cixcbiAgICAgICAgICAgICAgICAgICAgbWludXRlOiB0aGlzLmN1cnJlbnRNaW51dGUsXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZDogdGhpcy5jdXJyZW50U2Vjb25kLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RpbWVwaWNrZXItdmlldy1jaGFuZ2VkJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCd2YWx1ZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBtb21lbnQodi5zcGxpdCgnLCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRIb3VyID0gbS5ob3VyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWludXRlID0gbS5taW51dGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWNvbmQgPSBtLnNlY29uZCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW5lLXRpbWVwaWNrZXItdmlldy1zZWxlY3RbbmFtZT1ob3VyLW9wdGlvbnNdJykuc2Nyb2xsVG9wID0gdGhpcy5jdXJyZW50SG91ciAqIE9QVElPTl9IRUlHSFQ7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW5lLXRpbWVwaWNrZXItdmlldy1zZWxlY3RbbmFtZT1taW51dGUtb3B0aW9uc10nKS5zY3JvbGxUb3AgPSB0aGlzLmN1cnJlbnRNaW51dGUgKiBPUFRJT05fSEVJR0hUO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFuZS10aW1lcGlja2VyLXZpZXctc2VsZWN0W25hbWU9c2Vjb25kLW9wdGlvbnNdJykuc2Nyb2xsVG9wID0gdGhpcy5jdXJyZW50U2Vjb25kICogT1BUSU9OX0hFSUdIVDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kZmlyZSgndmFsdWUnLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlci9tcy10aW1lcGlja2VyLXZpZXcudHMiLCJpbXBvcnQgJy4vbXMtbGF5b3V0Lmxlc3MnO1xuaW1wb3J0ICcuL21zLWxheW91dCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1sYXlvdXQvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XG4gICAga2V5OiAnY29tcG9uZW50cycsXG4gICAgdGl0bGU6ICfnu4Tku7YnLFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1pbnB1dC1pbnB1dCcsXG4gICAgICAgIHRpdGxlOiAnaW5wdXQg6L6T5YWl5qGGJyxcbiAgICAgICAgdXJpOiAnL2lucHV0JyxcbiAgICAgICAgbG9jYXRpb246ICdtcy1pbnB1dC9tcy1pbnB1dC5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLXRleHRhcmVhLXRleHRhcmVhJyxcbiAgICAgICAgdGl0bGU6ICd0ZXh0YXJlYSDlpJrooYzovpPlhaXmoYYnLFxuICAgICAgICB1cmk6ICcvdGV4dGFyZWEnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLXRleHRhcmVhL21zLXRleHRhcmVhLm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tc2VsZWN0LXNlbGVjdCcsXG4gICAgICAgIHRpdGxlOiAnc2VsZWN0IOmAieaLqeahhicsXG4gICAgICAgIHVyaTogJy9zZWxlY3QnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLXNlbGVjdC9tcy1zZWxlY3QubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1yYWRpby1yYWRpbycsXG4gICAgICAgIHRpdGxlOiAncmFkaW8g5Y2V6YCJ5qGGJyxcbiAgICAgICAgdXJpOiAnL3JhZGlvJyxcbiAgICAgICAgbG9jYXRpb246ICdtcy1yYWRpby9tcy1yYWRpby5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLWNoZWNrYm94LWNoZWNrYm94JyxcbiAgICAgICAgdGl0bGU6ICdjaGVja2JveCDlpJrpgInmoYYnLFxuICAgICAgICB1cmk6ICcvY2hlY2tib3gnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLWNoZWNrYm94L21zLWNoZWNrYm94Lm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tZGF0ZXBpY2tlci1kYXRlcGlja2VyJyxcbiAgICAgICAgdGl0bGU6ICdkYXRlcGlja2VyIOaXpeacn+mAieaLqeWZqCcsXG4gICAgICAgIHVyaTogJy9kYXRlcGlja2VyJyxcbiAgICAgICAgbG9jYXRpb246ICdtcy1kYXRlcGlja2VyL21zLWRhdGVwaWNrZXIubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby10aW1lcGlja2VyLXRpbWVwaWNrZXInLFxuICAgICAgICB0aXRsZTogJ3RpbWVwaWNrZXIg5pe26Ze06YCJ5oup5ZmoJyxcbiAgICAgICAgdXJpOiAnL3RpbWVwaWNrZXInLFxuICAgICAgICBsb2NhdGlvbjogJ21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLXVwbG9hZC11cGxvYWQnLFxuICAgICAgICB0aXRsZTogJ3VwbG9hZCDmlofku7bkuIrkvKAnLFxuICAgICAgICB1cmk6ICcvdXBsb2FkJyxcbiAgICAgICAgbG9jYXRpb246ICdtcy11cGxvYWQvbXMtdXBsb2FkLm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tZm9ybS1jb250cm9sJyxcbiAgICAgICAgdGl0bGU6ICdmb3JtLWNvbnRyb2wg6KGo5Y2V5o6n5Lu2JyxcbiAgICAgICAgdXJpOiAnL2Zvcm0tY29udHJvbCcsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtZm9ybS9tcy1jb250cm9sLm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tZm9ybS1mb3JtJyxcbiAgICAgICAgdGl0bGU6ICdmb3JtIOihqOWNlScsXG4gICAgICAgIHVyaTogJy9mb3JtJyxcbiAgICAgICAgbG9jYXRpb246ICdtcy1mb3JtL21zLWZvcm0ubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1tZW51LW1lbnUnLFxuICAgICAgICB0aXRsZTogJ21lbnUg6I+c5Y2VJyxcbiAgICAgICAgdXJpOiAnL21lbnUnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLW1lbnUvbXMtbWVudS5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLXRhYmxlLXRhYmxlJyxcbiAgICAgICAgdGl0bGU6ICd0YWJsZSDmlbDmja7ooajmoLwnLFxuICAgICAgICB1cmk6ICcvdGFibGUnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLXRhYmxlL21zLXRhYmxlLm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tcGFnaW5hdGlvbi1wYWdpbmF0aW9uJyxcbiAgICAgICAgdGl0bGU6ICdwYWdpbmF0aW9uIOWIhumhtScsXG4gICAgICAgIHVyaTogJy9wYWdpbmF0aW9uJyxcbiAgICAgICAgbG9jYXRpb246ICdtcy1wYWdpbmF0aW9uL21zLXBhZ2luYXRpb24ubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby10cmVlLXRyZWUnLFxuICAgICAgICB0aXRsZTogJ3RyZWUg5qCRJyxcbiAgICAgICAgdXJpOiAnL3RyZWUnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLXRyZWUvbXMtdHJlZS5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLWRpYWxvZy1kaWFsb2cnLFxuICAgICAgICB0aXRsZTogJ2RpYWxvZyDlr7nor53moYYnLFxuICAgICAgICB1cmk6ICcvZGlhbG9nJyxcbiAgICAgICAgbG9jYXRpb246ICdtcy1kaWFsb2cvbXMtZGlhbG9nLm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tbG9hZGluZy1sb2FkaW5nJyxcbiAgICAgICAgdGl0bGU6ICdsb2FkaW5nIOWKoOi9veS4reiSmeeJiCcsXG4gICAgICAgIHVyaTogJy9sb2FkaW5nJyxcbiAgICAgICAgbG9jYXRpb246ICdtcy1sb2FkaW5nL21zLWxvYWRpbmcubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1tZXNzYWdlLW1lc3NhZ2UnLFxuICAgICAgICB0aXRsZTogJ21lc3NhZ2Ug5YWo5bGA5o+Q56S6JyxcbiAgICAgICAgdXJpOiAnL21lc3NhZ2UnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLW1lc3NhZ2UvbXMtbWVzc2FnZS5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLW5vdGlmaWNhdGlvbi1ub3RpZmljYXRpb24nLFxuICAgICAgICB0aXRsZTogJ25vdGlmaWNhdGlvbiDpgJrnn6Xmj5DphpLmoYYnLFxuICAgICAgICB1cmk6ICcvbm90aWZpY2F0aW9uJyxcbiAgICAgICAgbG9jYXRpb246ICdtcy1ub3RpZmljYXRpb24vbXMtbm90aWZpY2F0aW9uLm1kJ1xuICAgIH1dXG59XTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2RvY3MvbmF2LmNvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0IGNvbnN0IG1lbnUgPSB7XG4gICAgc2VsZWN0ZWRLZXlzJDogT2JzZXJ2YWJsZSgpLFxuICAgIG9wZW5LZXlzJDogT2JzZXJ2YWJsZSgpXG59O1xuXG5mdW5jdGlvbiBPYnNlcnZhYmxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uTmV4dENiTGlzdDogW10sXG4gICAgICAgIHN1YnNjcmliZShvbk5leHQpIHtcbiAgICAgICAgICAgIHRoaXMub25OZXh0Q2JMaXN0LnB1c2gob25OZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25OZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm9uTmV4dENiTGlzdC5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZG9jcy9zdG9yZXMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbmltcG9ydCAqIGFzIG5hdkNvbmZpZyBmcm9tICcuLi8uLi9uYXYuY29uZmlnLmpzJztcbmltcG9ydCAnYW5lJztcbmltcG9ydCB7IG1lbnUgYXMgbWVudVN0b3JlIH0gZnJvbSAnLi4vLi4vc3RvcmVzJztcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZG9jLXNpZGViYXInO1xuXG5hdmFsb24uY29tcG9uZW50KG5hbWUsIHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9kb2Mtc2lkZWJhci5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgbWVudTogW10sXG4gICAgICAgIHNlbGVjdGVkS2V5czogW10sXG4gICAgICAgIG9wZW5LZXlzOiBbJ2NvbXBvbmVudHMnXSxcbiAgICAgICAgaGFuZGxlTWVudUNsaWNrKGl0ZW0sIGtleSwga2V5UGF0aCkge1xuICAgICAgICAgICAgYXZhbG9uLmhpc3Rvcnkuc2V0SGFzaChpdGVtLnVyaSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZU9wZW5DaGFuZ2Uob3BlbktleXMpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbktleXMgPSBvcGVuS2V5cy5zbGljZSgtMSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5tZW51ID0gbmF2Q29uZmlnO1xuICAgICAgICAgICAgbWVudVN0b3JlLnNlbGVjdGVkS2V5cyQuc3Vic2NyaWJlKHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRLZXlzID0gdjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZG9jcy9jb21wb25lbnRzL2RvYy1zaWRlYmFyL2RvYy1zaWRlYmFyLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0ICdtbVJvdXRlcic7XG5pbXBvcnQgeyBtZW51IGFzIG1lbnVTdG9yZSB9IGZyb20gJy4vc3RvcmVzJztcbmltcG9ydCAqIGFzIG5hdkNvbmZpZyBmcm9tICcuL25hdi5jb25maWcuanMnO1xuXG5mdW5jdGlvbiBnZXRQYWdlKGNvbXBvbmVudCkge1xuICAgIGNvbnN0IGh0bWwgPSBgPHhtcCBpcz1cIiR7Y29tcG9uZW50fVwiIDp3aWRnZXQ9XCJ7aWQ6JyR7Y29tcG9uZW50LnJlcGxhY2UoL1xcLS9nLCAnXycpfSd9XCI+PC94bXA+YDtcbiAgICByZXR1cm4gaHRtbFxufVxuXG5mdW5jdGlvbiBhcHBseVJvdXRlQ29uZmlnKGNvbmZpZywgcGFyZW50Um91dGUsIGFjY1BhdGggPSAnJykge1xuICAgIGNvbmZpZy5tYXAoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgIGxldCBjb21wb25lbnRzOmFueSA9IHt9O1xuICAgICAgICBpZiAocm91dGUuY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmN1cnJlbnRQYWdlID0gcm91dGUuY29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZS5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzID0gcm91dGUuY29tcG9uZW50cztcbiAgICAgICAgfVxuICAgICAgICBhdmFsb24ucm91dGVyLmFkZChhY2NQYXRoICsgcm91dGUucGF0aCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcG9uZW50cykubWFwKHZpZXdOYW1lID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1t2aWV3TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50KGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51U3RvcmUuc2VsZWN0ZWRLZXlzJC5vbk5leHQoW20ubmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXZhbG9uLnZtb2RlbHNbcGFyZW50Um91dGUubmFtZV1bdmlld05hbWVdID0gZ2V0UGFnZShtLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdmFsb24udm1vZGVsc1twYXJlbnRSb3V0ZS5uYW1lXVt2aWV3TmFtZV0gPSBnZXRQYWdlKGNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRPRE8g5pSv5oyB5bWM5aWX6Lev55SxXG4gICAgICAgIC8vcm91dGUuY2hpbGRyZW4gJiYgYXBwbHlSb3V0ZUNvbmZpZyhyb3V0ZS5jaGlsZHJlbiwgcm91dGUsIGFjY1BhdGggKyByb3V0ZS5wYXRoKTtcbiAgICB9KTtcbn1cblxuY29uc3Qgcm91dGVDb25maWcgPSBbXTtcbmNvbnN0IHRyYXZlbCA9IGl0ZW0gPT4ge1xuICAgIGlmICghaXRlbS5jaGlsZHJlbiB8fCBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByb3V0ZUNvbmZpZy5wdXNoKHtcbiAgICAgICAgICAgIHBhdGg6IGl0ZW0udXJpLFxuICAgICAgICAgICAgY29tcG9uZW50KHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvJyArIGl0ZW0ubG9jYXRpb24pKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jaGlsZHJlbi5tYXAodHJhdmVsKTtcbiAgICB9XG59O1xubmF2Q29uZmlnLm1hcCh0cmF2ZWwpO1xuXG5hcHBseVJvdXRlQ29uZmlnKHJvdXRlQ29uZmlnLCB7XG4gICAgbmFtZTogJ3Jvb3QnXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzL3JvdXRlci50cyIsImltcG9ydCAnLi9jb21wb25lbnRzL21zLW1lbnUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbXMtdGFibGUvbXMtdGFibGUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbXMtcGFnaW5hdGlvbi9tcy1wYWdpbmF0aW9uJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21zLWRpYWxvZyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1mb3JtJztcbmV4cG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvbXMtZm9ybS9jcmVhdGUtZm9ybSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1pbnB1dCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy10ZXh0YXJlYSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1zZWxlY3QnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbXMtdXBsb2FkJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXInO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlcic7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1jaGVja2JveCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1jaGVja2JveC9tcy1jaGVja2JveC1ncm91cCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1yYWRpbyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1yYWRpby9tcy1yYWRpby1ncm91cCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy10cmVlJ1xuXG5leHBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9jb21wb25lbnRzL21zLWxvYWRpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3RpZmljYXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvbXMtbm90aWZpY2F0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZSB9IGZyb20gJy4vY29tcG9uZW50cy9tcy1tZXNzYWdlJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCBjb250cm9sQ29tcG9uZW50IGZyb20gJy4uL21zLWZvcm0vbXMtY29udHJvbCc7XG5pbXBvcnQgJy4uL21zLXRyaWdnZXInO1xuaW1wb3J0ICcuLi9tcy1jYWxlbmRhcic7XG5pbXBvcnQgJy4uL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci12aWV3J1xuaW1wb3J0IGdldFBhbmVsVm0gZnJvbSAnLi9tcy1kYXRlcGlja2VyLXBhbmVsJztcbmltcG9ydCB7IGVtaXRUb0Zvcm1JdGVtIH0gZnJvbSAnLi4vbXMtZm9ybS91dGlscyc7XG5cbi8qKlxuICog5pel5pyf6YCJ5oup57uE5Lu2XG4gKiBAcHJvcCB2YWx1ZSDnu4Tku7blgLwoaW5oZXJpdClcbiAqIEBwcm9wIGNvbCDlrZfmrrXot6/lvoQoaW5oZXJpdClcbiAqIEBwcm9wIGZvcm1hdCDml6XmnJ/moLzlvI/vvIzlj4LogIMgbW9tZW50anPvvIzpu5jorqTkuLogWVlZWS1NTS1ERFxuICogQHByb3Agc3RhcnREYXRlIOaOp+WItuWPr+W3sumAieaLqeeahOaXtumXtOeahOW8gOWni+aXpeacn++8jOaXpeacn+Wtl+espuS4su+8jOagvOW8j+S4jiBmb3JtYXQg5Y+C5pWw5Yy56YWN77yM6K6+572u5q2k6aG56Ieq5Yqo5b+955WlIGRpc2FibGVkRGF0ZVxuICogQHByb3AgZW5kRGF0ZSDmjqfliLblj6/lt7LpgInmi6nnmoTml7bpl7TnmoTnu5PmnZ/ml6XmnJ/vvIzml6XmnJ/lrZfnrKbkuLLvvIzmoLzlvI/kuI4gZm9ybWF0IOWPguaVsOWMuemFje+8jOiuvue9ruatpOmhueiHquWKqOW/veeVpSBkaXNhYmxlZERhdGVcbiAqIEBwcm9wIGRpc2FibGVkRGF0ZSDkuI3lj6/pgInmi6nml6XmnJ/nmoTliKTmlq3lh73mlbDvvIzkvKDlhaUgY3VycmVudO+8iOW9k+WJjemBjeWOhuaXpeacn++8ie+8jOi/lOWbniB0cnVlIOihqOekuuatpOaXpeacn+S4jeWPr+mAiVxuICogQHByb3Agc2hvd1RpbWUg5piv5ZCm5pi+56S65pe26Ze06YCJ5oup77yM5aaC5p6c5q2k6aG55Li6IHRydWXvvIzliJkgZm9ybWF0IOm7mOiupOS4uiBZWVlZLU1NLUREIEhIOm1tOnNzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBgYGAgaHRtbFxuICogXG4gKiBgYGBcbiAqL1xuY29udHJvbENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRpc3BsYXlOYW1lOiAnbXMtZGF0ZXBpY2tlcicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtZGF0ZXBpY2tlci5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgc2VsZWN0ZWQ6ICcnLFxuICAgICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICAgICAgc3RhcnREYXRlOiAnJyxcbiAgICAgICAgZW5kRGF0ZTogJycsXG4gICAgICAgIGRpc2FibGVkRGF0ZSgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBzaG93VGltZTogZmFsc2UsXG4gICAgICAgIGNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICcnO1xuICAgICAgICAgICAgYXZhbG9uLnZtb2RlbHNbdGhpcy5wYW5lbFZtSWRdLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiAnJyB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRlcGlja2VyLWNoYW5nZWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgd2l0aEluQm94KGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudCA9PT0gZWwgfHwgYXZhbG9uLmNvbnRhaW5zKHRoaXMuJGVsZW1lbnQsIGVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGFyZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYW5lbFZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBhdmFsb24udm1vZGVsc1t0aGlzLnBhbmVsVm1JZF0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFuZWxWbUlkOiAnJyxcbiAgICAgICAgcGFuZWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgcGFuZWxDbGFzczogJ2FuZS1kYXRlcGlja2VyLXBhbmVsLWNvbnRhaW5lcicsXG4gICAgICAgIHBhbmVsVGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtZGF0ZXBpY2tlci1wYW5lbC5odG1sJyksXG4gICAgICAgIGhhbmRsZVBhbmVsSGlkZSgpIHtcbiAgICAgICAgICAgIHRoaXMucGFuZWxWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWFwVmFsdWVUb1NlbGVjdGVkKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGVtaXRUb0Zvcm1JdGVtKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBzaG93SWNvbjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3ZhbHVlJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvU2VsZWN0ZWQodik7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHYgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVueVZhbGlkYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZXBpY2tlci1jaGFuZ2VkJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG93VGltZSAmJiB0aGlzLmZvcm1hdCA9PT0gJ1lZWVktTU0tREQnKSB7XG4gICAgICAgICAgICAgICAgLy8g5YWB6K646YCJ5oup5pe26Ze055qE5qih5byP5LiL77yM55So5oi35aaC5p6c5rKh6Ieq5a6a5LmJ5qC85byP77yM5YiZ6Ieq5Yqo6L2s5Li65pel5pyf5pe26Ze05qC85byPXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtYXQgPSAnWVlZWS1NTS1ERCBISDptbTpzcyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhbmVsVm1JZCA9IHRoaXMuJGlkICsgJ19wYW5lbCc7XG4gICAgICAgICAgICBjb25zdCBpbm5lclZtID0gZ2V0UGFuZWxWbSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb1NlbGVjdGVkKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgaW5uZXJWbS5yZXNldCgpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRpc3Bvc2UoKSB7XG4gICAgICAgICAgICBkZWxldGUgYXZhbG9uLnZtb2RlbHNbdGhpcy5wYW5lbFZtSWRdO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1kYXRlcGlja2VyL21zLWRhdGVwaWNrZXIudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgKiBhcyBTY2hlbWEgZnJvbSAnYXN5bmMtdmFsaWRhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm0ob3B0aW9ucz8pIHtcbiAgICByZXR1cm4gbmV3IEZvcm0ob3B0aW9ucyk7XG59XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHJlY29yZDoge30sXG4gICAgYXV0b0FzeW5jQ2hhbmdlOiB0cnVlLFxuICAgIG9uRmllbGRzQ2hhbmdlOiBhdmFsb24ubm9vcFxufTtcblxuZnVuY3Rpb24gRm9ybShvcHRpb25zKSB7XG4gICAgdGhpcy5jYWNoZWRSZWNvcmQgPSB7fTtcbiAgICB0aGlzLmZpZWxkcyA9IHt9O1xuICAgIHRoaXMuYWxsID0ge307XG4gICAgYXZhbG9uLm1peCh0aGlzLCBhdmFsb24ubWl4KHRydWUsIHt9LCBkZWZhdWx0T3B0aW9ucyksIG9wdGlvbnMpXG59XG5cbkZvcm0ucHJvdG90eXBlLnNldEZpZWxkc1ZhbHVlID0gZnVuY3Rpb24gKGZpZWxkcykge1xuICAgIGlmICghdGhpcy5hdXRvQXN5bmNDaGFuZ2UpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBzZXRWYWx1ZSh0aGlzLmNhY2hlZFJlY29yZCwgbmFtZSwgZmllbGRzW25hbWVdLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiA7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW25hbWVdO1xuXG4gICAgICAgIHNldFZhbHVlKHRoaXMucmVjb3JkLCBuYW1lLCBmaWVsZC52YWx1ZSk7XG5cbiAgICAgICAgaWYgKCFmaWVsZC5kZW55VmFsaWRhdGUgJiYgdGhpcy5maWVsZHNbbmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVGaWVsZChuYW1lLCB0aGlzLmZpZWxkc1tuYW1lXSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNPaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2Vycm9yJyArIHJlc3VsdC5uYW1lLCBbXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdlcnJvcicgKyByZXN1bHQubmFtZSwgW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25GaWVsZHNDaGFuZ2UoZmllbGRzLCB0aGlzLnJlY29yZCk7XG59XG5cbkZvcm0ucHJvdG90eXBlLmFkZEZpZWxkcyA9IGZ1bmN0aW9uIChmaWVsZHMpIHtcbiAgICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIHRoaXMuZmllbGRzW25hbWVdID0gZmllbGRzW25hbWVdO1xuICAgIH0pO1xufVxuXG5Gb3JtLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICh0eXBlOiBzdHJpbmcsIGxpc3RlbmVyKSB7XG4gICAgKHRoaXMuYWxsW3R5cGVdIHx8ICh0aGlzLmFsbFt0eXBlXSA9IFtdKSkucHVzaChsaXN0ZW5lcik7XG59XG5cbkZvcm0ucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAodHlwZTogc3RyaW5nLCBwYXlsb2FkKSB7XG4gICAgKHRoaXMuYWxsW3R5cGVdIHx8IFtdKS5tYXAoaGFuZGxlciA9PiB7IGhhbmRsZXIocGF5bG9hZCkgfSk7XG59XG5cbkZvcm0ucHJvdG90eXBlLnZhbGlkYXRlRmllbGQgPSBhc3luYyBmdW5jdGlvbiAoZmllbGROYW1lLCBmaWVsZCkge1xuICAgIGNvbnN0IHJ1bGVzID0gZmllbGQucnVsZXM7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZSh0aGlzLnJlY29yZCwgZmllbGROYW1lKTtcbiAgICBsZXQgcmVzdWx0OiBhbnkgPSB7IGlzT2s6IHRydWUsIG5hbWU6IGZpZWxkTmFtZSB9O1xuICAgIGlmICghcnVsZXMpIHJldHVybiByZXN1bHQ7XG4gICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IFNjaGVtYSh7XG4gICAgICAgIFtmaWVsZE5hbWVdOiBydWxlc1xuICAgIH0pO1xuICAgIHJlc3VsdCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKHsgW2ZpZWxkTmFtZV06IHZhbHVlIH0sIChlcnJvcnMsIGZpZWxkcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBpc09rOiBmYWxzZSwgbmFtZTogZmllbGROYW1lLCBtZXNzYWdlOiBlcnJvcnNbMF0ubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgaXNPazogdHJ1ZSwgbmFtZTogZmllbGROYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbkZvcm0ucHJvdG90eXBlLnZhbGlkYXRlRmllbGRzID0gZnVuY3Rpb24gKGZpZWxkcyA9IHRoaXMuZmllbGRzKSB7XG4gICAgY29uc3QgZmxhdFJlY29yZCA9IHt9LCBydWxlTWFwID0ge307XG4gICAgaWYgKCF0aGlzLmF1dG9Bc3luY0NoYW5nZSkge1xuICAgICAgICB0aGlzLnJlY29yZCA9IGF2YWxvbi5taXgodHJ1ZSwge30sIHRoaXMucmVjb3JkLCB0aGlzLmNhY2hlZFJlY29yZCk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGZpZWxkcykubWFwKG5hbWUgPT4ge1xuICAgICAgICBydWxlTWFwW25hbWVdID0gZmllbGRzW25hbWVdLnJ1bGVzO1xuICAgICAgICBmbGF0UmVjb3JkW25hbWVdID0gZ2V0VmFsdWUodGhpcy5yZWNvcmQsIG5hbWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBTY2hlbWEocnVsZU1hcCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKGZsYXRSZWNvcmQsIChlcnJvcnMsIGZpZWxkcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JGaWVsZHMgPSBPYmplY3Qua2V5cyhmaWVsZHMgfHwge30pO1xuICAgICAgICAgICAgbGV0IGlzQWxsVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5maWVsZHMpLm1hcChuYW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZiAofmVycm9yRmllbGRzLmluZGV4T2YobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNBbGxWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2Vycm9yJyArIG5hbWUsIGZpZWxkc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdlcnJvcicgKyBuYW1lLCBbXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXNvbHZlKGlzQWxsVmFsaWQpO1xuICAgICAgICB9KVxuICAgIH0pO1xufVxuXG5Gb3JtLnByb3RvdHlwZS5yZXNldEZpZWxkcyA9IGZ1bmN0aW9uIChmaWVsZHMgPSB0aGlzLmZpZWxkcykge1xuICAgIHRoaXMucmVjb3JkID0ge307XG4gICAgdGhpcy50cmlnZ2VyKCdyZXNldCcsIGZpZWxkcyk7XG59XG5cbi8qKlxuICog5qC55o2u6KGo6L6+5byP5p6E57uZ5a+56LGh6LWL5YC877yM5bGe5oCn6Lev5b6E5Lit5pyA5aSa5Y+q5YWB6K645a2Y5Zyo5LiA5Liq5pWw57uEXG4gKiBAcGFyYW0geyp9IHJlY29yZCDmlbDmja7lr7nosaFcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHByIOWvueixoeWxnuaAp+i3r+W+hOihqOi+vuW8j1xuICogQHBhcmFtIHsqfSB2YWwg5YC8XG4gKi9cbmZ1bmN0aW9uIHNldFZhbHVlKHJlY29yZCwgZXhwciwgdmFsKSB7XG4gICAgY29uc3QgclNwbGl0ID0gL1xcLnxcXF0ufFxcW3xcXF0vO1xuICAgIGxldCB0ZW1wID0gcmVjb3JkLCBwcm9wO1xuICAgIGV4cHIgPSBleHByLnNwbGl0KHJTcGxpdCkuZmlsdGVyKHByb3AgPT4gISFwcm9wKTtcbiAgICBjb25zdCB2YWxUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCk7XG4gICAgbGV0IG1pcnJvclZhbDtcbiAgICBpZiAodmFsVHlwZSA9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgIG1pcnJvclZhbCA9IGF2YWxvbi5taXgodHJ1ZSwge30sIHsgdDogdmFsIH0pLnQ7XG4gICAgfSBlbHNlIGlmICh2YWxUeXBlID09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgIG1pcnJvclZhbCA9IGF2YWxvbi5taXgodHJ1ZSwge30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWlycm9yVmFsID0gdmFsO1xuICAgIH1cblxuICAgIHdoaWxlIChwcm9wID0gZXhwci5zaGlmdCgpKSB7XG4gICAgICAgIGlmIChleHByLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGVtcFtwcm9wXSA9IG1pcnJvclZhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wW3Byb3BdID0gdGVtcFtwcm9wXSB8fCB7fTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiDmoLnmja7ooajovr7lvI/mnoTku47lr7nosaHlj5blgLzvvIzlsZ7mgKfot6/lvoTkuK3mnIDlpJrlj6rlhYHorrjlrZjlnKjkuIDkuKrmlbDnu4RcbiAqIEBwYXJhbSB7Kn0gcmVjb3JkIOaVsOaNruWvueixoVxuICogQHBhcmFtIHtTdHJpbmd9IGV4cHIg5a+56LGh5bGe5oCn6Lev5b6E6KGo6L6+5byPXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKHJlY29yZCwgZXhwcikge1xuICAgIGNvbnN0IHJTcGxpdCA9IC9cXC58XFxdLnxcXFt8XFxdLztcbiAgICBsZXQgdGVtcCA9IHJlY29yZCwgcHJvcDtcbiAgICBleHByID0gZXhwci5zcGxpdChyU3BsaXQpLmZpbHRlcihwcm9wID0+ICEhcHJvcCk7XG4gICAgd2hpbGUgKChwcm9wID0gZXhwci5zaGlmdCgpKSAmJiB0ZW1wKSB7XG4gICAgICAgIHRlbXAgPSB0ZW1wW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWZvcm0vY3JlYXRlLWZvcm0udHMiLCJpbXBvcnQgJy4vbXMtZm9ybSc7XG5pbXBvcnQgJy4vbXMtZm9ybS1pdGVtJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWZvcm0vaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgY29udHJvbENvbXBvbmVudCBmcm9tICcuLi9tcy1mb3JtL21zLWNvbnRyb2wnO1xuaW1wb3J0IHsgZW1pdFRvRm9ybUl0ZW0gfSBmcm9tICcuLi9tcy1mb3JtL3V0aWxzJztcbmltcG9ydCB7IGZpbmRQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5cbmNvbnRyb2xDb21wb25lbnQuZXh0ZW5kKHtcbiAgICBkaXNwbGF5TmFtZTogJ21zLWlucHV0JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy1pbnB1dC5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIG1hcFZhbHVlVG9UZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGVtaXRUb0Zvcm1JdGVtKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3ZhbHVlJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvVGV4dCh2KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdiB9LFxuICAgICAgICAgICAgICAgICAgICBkZW55VmFsaWRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGFuZ2VkJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9UZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1pbnB1dC9tcy1pbnB1dC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtbWVudScsIHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy1tZW51Lmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBtZW51OiBbXSxcbiAgICAgICAgc2VsZWN0ZWRLZXlzOiBbXSxcbiAgICAgICAgb3BlbktleXM6IFtdLFxuICAgICAgICBvbkNsaWNrOiBhdmFsb24ubm9vcCxcbiAgICAgICAgb25PcGVuQ2hhbmdlOiBhdmFsb24ubm9vcCxcbiAgICAgICAgaGFuZGxlQ2xpY2soaXRlbSwga2V5LCBrZXlQYXRoKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uY2hpbGRyZW4gfHwgaXRlbS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyDlj7blrZDoioLngrlcbiAgICAgICAgICAgICAgICAvL3RoaXMuc2VsZWN0ZWRLZXlzLmVuc3VyZShpdGVtLmtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEtleXMgPSBbaXRlbS5rZXldO1xuICAgICAgICAgICAgICAgIHRoaXMub25DbGljayhpdGVtLCBrZXksIGtleVBhdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDpnZ7lj7blrZDoioLngrlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuS2V5cy5jb250YWlucyhpdGVtLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuS2V5cy5yZW1vdmUoaXRlbS5rZXkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbktleXMucHVzaChpdGVtLmtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub25PcGVuQ2hhbmdlKHRoaXMub3BlbktleXMudG9KU09OKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1tZW51L21zLW1lbnUudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgY29udHJvbENvbXBvbmVudCBmcm9tIFwiLi4vbXMtZm9ybS9tcy1jb250cm9sXCI7XG5pbXBvcnQgJy4uL21zLXRyaWdnZXInO1xuaW1wb3J0IGdldFBhbmVsVm0gZnJvbSAnLi9tcy1zZWxlY3QtcGFuZWwnO1xuXG5pbXBvcnQgeyBnZXRDaGlsZFRlbXBsYXRlRGVzY3JpcHRvciwgZGVib3VuY2UgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5pbXBvcnQgeyBlbWl0VG9Gb3JtSXRlbSB9IGZyb20gJy4uL21zLWZvcm0vdXRpbHMnO1xuXG5jb250cm9sQ29tcG9uZW50LmV4dGVuZCh7XG4gICAgZGlzcGxheU5hbWU6ICdtcy1zZWxlY3QnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXNlbGVjdC5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICBtb2RlOiAnJyxcbiAgICAgICAgb3B0aW9uczogW10sXG4gICAgICAgIHNlbGVjdGlvbjogW10sXG4gICAgICAgIHJlbW90ZTogZmFsc2UsXG4gICAgICAgIHJlbW90ZU1ldGhvZDogYXZhbG9uLm5vb3AsXG5cbiAgICAgICAgLy8g5LiL5ouJ5qGG5bGV56S65ZKM5pON5L2c6YOo5YiGXG4gICAgICAgIGRpc3BsYXlWYWx1ZTogJycsXG4gICAgICAgIHNob3dTZWFyY2g6IGZhbHNlLFxuICAgICAgICBzZWFyY2hWYWx1ZTogJycsXG4gICAgICAgIGZvY3VzU2VhcmNoKCkge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKS5zZWFyY2guZm9jdXMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2l0aEluQm94KGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudCA9PT0gZWwgfHwgYXZhbG9uLmNvbnRhaW5zKHRoaXMuJGVsZW1lbnQsIGVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGFyZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYW5lbFZpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbFdpZHRoID0gdGhpcy4kZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c1NlYXJjaCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlRGVsZXRlKGUpIHtcbiAgICAgICAgICAgIGlmICgoZS53aGljaCA9PT0gOCB8fCBlLndoaWNoID09PSA0NikgJiYgdGhpcy5zZWFyY2hWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5yZW1vdmVBdCh0aGlzLnNlbGVjdGlvbi5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi50b0pTT04oKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGlvbi5tYXAocyA9PiBzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBhdmFsb24udm1vZGVsc1t0aGlzLnBhbmVsVm1JZF0uc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB0aGlzLmlzTXVsdGlwbGUgPyB2YWx1ZSA6IHZhbHVlWzBdIHx8ICcnIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZVNlbGVjdGlvbihlLCBvcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnJlbW92ZUFsbChvID0+IG8udmFsdWUgPT09IG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi50b0pTT04oKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0aW9uLm1hcChzID0+IHMudmFsdWUpO1xuICAgICAgICAgICAgYXZhbG9uLnZtb2RlbHNbdGhpcy5wYW5lbFZtSWRdLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNTZWFyY2goKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHRoaXMuaXNNdWx0aXBsZSA/IHZhbHVlIDogdmFsdWVbMF0gfHwgJycgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VsZWN0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5LiL5ouJ5qGG5LiL5ouJ5YiX6KGo6YOo5YiGXG4gICAgICAgIHBhbmVsV2lkdGg6IDAsXG4gICAgICAgIHBhbmVsVm1JZDogJycsXG4gICAgICAgIHBhbmVsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHBhbmVsQ2xhc3M6ICdhbmUtc2VsZWN0LWRyb3Bkb3duJyxcbiAgICAgICAgcGFuZWxUZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy1zZWxlY3QtcGFuZWwuaHRtbCcpLFxuICAgICAgICBoYW5kbGVQYW5lbEhpZGUoKSB7XG4gICAgICAgICAgICB0aGlzLnBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgICRjb21wdXRlZDoge1xuICAgICAgICAgICAgaXNNdWx0aXBsZToge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ211bHRpcGxlJyB8fCB0aGlzLm1vZGUgPT09ICd0YWdzJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvLyDnlJ/lkb3lkajmnJ9cbiAgICAgICAgbWFwVmFsdWVUb1NlbGVjdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLm9wdGlvbnMuZmlsdGVyKG8gPT4gdmFsdWUuY29udGFpbnMoby52YWx1ZSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHRoaXMuc2VsZWN0aW9uWzBdLmxhYmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXZhbG9uLnZtb2RlbHNbdGhpcy5wYW5lbFZtSWRdLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLnRvSlNPTigpO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gZ2V0Q2hpbGRUZW1wbGF0ZURlc2NyaXB0b3IodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gZ2V0T3B0aW9ucyhkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZW1pdFRvRm9ybUl0ZW0odGhpcyk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgndmFsdWUnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHYudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvU2VsZWN0aW9uKHYpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB0aGlzLmlzTXVsdGlwbGUgPyB2YWx1ZSA6IHZhbHVlWzBdIHx8ICcnIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlbnlWYWxpZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NlbGVjdCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnBhbmVsVm1JZCA9IHRoaXMuJGlkICsgJ19wYW5lbCc7XG4gICAgICAgICAgICBjb25zdCBpbm5lclZtID0gZ2V0UGFuZWxWbSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdzZWFyY2hWYWx1ZScsIGRlYm91bmNlKHYgPT4ge1xuICAgICAgICAgICAgICAgIGlubmVyVm0uc2VhcmNoVmFsdWUgPSB2O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbW90ZSAmJiAhIXYpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJWbS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdGVNZXRob2QodikudGhlbihvcHRpb25zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyVm0ubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclZtLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgnaXNNdWx0aXBsZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIGlubmVyVm0uaXNNdWx0aXBsZSA9IHY7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb1NlbGVjdGlvbih0aGlzLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EaXNwb3NlKCkge1xuICAgICAgICAgICAgZGVsZXRlIGF2YWxvbi52bW9kZWxzW3RoaXMucGFuZWxWbUlkXTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRPcHRpb25zKGRlc2NyaXB0b3IpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5yZWR1Y2UoKGFjYywgb3B0aW9uKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb24uaXMgIT0gJ21zLXNlbGVjdC1vcHRpb24nKSByZXR1cm4gYWNjO1xuICAgICAgICBsZXQgbGFiZWwgPSBvcHRpb24uaW5saW5lVGVtcGxhdGU7XG4gICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBvcHRpb24uaW5saW5lVGVtcGxhdGUgfHwgJycsXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnByb3BzLnZhbHVlIHx8ICcnLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IG9wdGlvbi5wcm9wcy5kaXNhYmxlZCB8fCBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1zZWxlY3QvbXMtc2VsZWN0LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IGNvbnRyb2xDb21wb25lbnQgZnJvbSAnLi4vbXMtZm9ybS9tcy1jb250cm9sJztcbmltcG9ydCAnLi4vbXMtdHJpZ2dlcic7XG5pbXBvcnQgJy4vbXMtdGltZXBpY2tlci12aWV3J1xuaW1wb3J0IGdldFBhbmVsVm0gZnJvbSAnLi9tcy10aW1lcGlja2VyLXBhbmVsJ1xuaW1wb3J0IHsgZW1pdFRvRm9ybUl0ZW0gfSBmcm9tICcuLi9tcy1mb3JtL3V0aWxzJztcblxuLyoqXG4gKiDml7bpl7TpgInmi6nnu4Tku7ZcbiAqIEBwcm9wIHZhbHVlIOe7hOS7tuWAvChpbmhlcml0KVxuICogQHByb3AgY29sIOWtl+autei3r+W+hChpbmhlcml0KVxuICogQHByb3AgZm9ybWF0IOaXpeacn+agvOW8j++8jOWPguiAgyBtb21lbnRqc++8jOm7mOiupOS4uiBISDptbTpzc1xuICogXG4gKiBAZXhhbXBsZVxuICogYGBgIGh0bWxcbiAqIFxuICogYGBgXG4gKi9cbmNvbnRyb2xDb21wb25lbnQuZXh0ZW5kKHtcbiAgICBkaXNwbGF5TmFtZTogJ21zLXRpbWVwaWNrZXInLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXRpbWVwaWNrZXIuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHNlbGVjdGVkOiAnJyxcbiAgICAgICAgZm9ybWF0OiAnSEg6bW06c3MnLFxuICAgICAgICBjbGVhcigpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAnJztcbiAgICAgICAgICAgIGF2YWxvbi52bW9kZWxzW3RoaXMucGFuZWxWbUlkXS5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogJycgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGltZXBpY2tlci1jaGFuZ2VkJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhJbkJveChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQgPT09IGVsIHx8IGF2YWxvbi5jb250YWlucyh0aGlzLiRlbGVtZW50LCBlbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRhcmdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFuZWxWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgYXZhbG9uLnZtb2RlbHNbdGhpcy5wYW5lbFZtSWRdLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbFZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHBhbmVsVm1JZDogJycsXG4gICAgICAgIHBhbmVsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHBhbmVsQ2xhc3M6ICdhbmUtdGltZXBpY2tlci1wYW5lbC1jb250YWluZXInLFxuICAgICAgICBwYW5lbFRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImFuZS10aW1lcGlja2VyLXBhbmVsXCIgc3R5bGU9XCJvdmVyZmxvdzogYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx4bXAgaXM9XCJtcy10aW1lcGlja2VyLXZpZXdcIiA6d2lkZ2V0PVwie3ZhbHVlOkBjdXJyZW50RGF0ZUFycmF5LG9uQ2hhbmdlOkBoYW5kbGVUaW1lcGlja2VyQ2hhbmdlfVwiPjwveG1wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCxcbiAgICAgICAgaGFuZGxlUGFuZWxIaWRlKCkge1xuICAgICAgICAgICAgdGhpcy5wYW5lbFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICBtYXBWYWx1ZVRvU2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgZW1pdFRvRm9ybUl0ZW0odGhpcywge1xuICAgICAgICAgICAgICAgIHNob3dJY29uOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgndmFsdWUnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9TZWxlY3RlZCh2KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdiB9LFxuICAgICAgICAgICAgICAgICAgICBkZW55VmFsaWRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0aW1lcGlja2VyLWNoYW5nZWQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucGFuZWxWbUlkID0gdGhpcy4kaWQgKyAnX3BhbmVsJztcbiAgICAgICAgICAgIGNvbnN0IGlubmVyVm0gPSBnZXRQYW5lbFZtKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvU2VsZWN0ZWQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICBpbm5lclZtLnJlc2V0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRGlzcG9zZSgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBhdmFsb24udm1vZGVsc1t0aGlzLnBhbmVsVm1JZF07XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCAnLi4vbXMtY2hlY2tib3gnO1xuXG5sZXQgdHJlZUlEID0gMDtcbmF2YWxvbi5jb21wb25lbnQoJ21zLXRyZWUnLCB7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtdHJlZS5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgY2hlY2thYmxlOiBmYWxzZSxcbiAgICAgICAgdHJlZTogW10sXG4gICAgICAgIGV4cGFuZGVkS2V5czogW10sXG4gICAgICAgIGNoZWNrZWRLZXlzOiBbXSxcbiAgICAgICAgaW5kZXRlcm1pbmF0ZWRLZXlzOiBbXSxcbiAgICAgICAgJGJ1ZmZlcmVkVHJlZToge30sXG4gICAgICAgIHJvb3Q6IHRydWUsXG4gICAgICAgIHJlbmRlclN1YlRyZWU6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuICBlbC5jaGlsZHJlbi5sZW5ndGggP1xuICAgICAgICAgICAgICAgICc8d2JyIDp3aWRnZXQ9XCJ7aXM6XFwnbXMtdHJlZVxcJywkaWQ6XFwndHJlZV8nICsgKCsrdHJlZUlEKSArICdcXCcsY2hlY2thYmxlOkBjaGVja2FibGUsdHJlZTplbC5jaGlsZHJlbixjaGVja2VkS2V5czpAY2hlY2tlZEtleXMsaW5kZXRlcm1pbmF0ZWRLZXlzOkBpbmRldGVybWluYXRlZEtleXMsaGFuZGxlQ2hlY2s6QGhhbmRsZUNoZWNrLHJvb3Q6ZmFsc2V9XCIvPicgOlxuICAgICAgICAgICAgICAgICcnXG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5TdWJUcmVlOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwZW5kZWQoZWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRlZEtleXMucmVtb3ZlKGVsLmtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRLZXlzLnB1c2goZWwua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hhbmdlSWNvbjogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBpZiAoIWVsLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRXhwZW5kZWQoZWwpID8gJ2ZhLWNhcmV0LWRvd24nIDogJ2ZhLWNhcmV0LXJpZ2h0JztcbiAgICAgICAgfSxcbiAgICAgICAgaXNFeHBlbmRlZChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwYW5kZWRLZXlzLmNvbnRhaW5zKGVsLmtleSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzQ2hlY2tlZChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZEtleXMuY29udGFpbnMoZWwua2V5KTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNJbmRldGVybWluYXRlZChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXRlcm1pbmF0ZWRLZXlzLmNvbnRhaW5zKGVsLmtleSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hlY2s6IGF2YWxvbi5ub29wLFxuICAgICAgICBvbkNoZWNrSW5uZXI6IGF2YWxvbi5ub29wLFxuICAgICAgICBoYW5kbGVDaGVjayhlbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDaGVja2VkKGVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEtleXMucmVtb3ZlKGVsLmtleSk7XG4gICAgICAgICAgICAgICAgdHJhdmVsRm9yQ2hlY2tDaGlsZHJlbihlbC5jaGlsZHJlbiwgdGhpcy5jaGVja2VkS2V5cywgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRLZXlzLnB1c2goZWwua2V5KTtcbiAgICAgICAgICAgICAgICB0cmF2ZWxGb3JDaGVja0NoaWxkcmVuKGVsLmNoaWxkcmVuLCB0aGlzLmNoZWNrZWRLZXlzLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZWRLZXlzLnJlbW92ZShlbC5rZXkpO1xuICAgICAgICAgICAgaW5mbHVlbmNlUGFyZW50KHRoaXMuJGJ1ZmZlcmVkVHJlZVtlbC5rZXldLCB0aGlzLmNoZWNrZWRLZXlzLCB0aGlzLmluZGV0ZXJtaW5hdGVkS2V5cyk7XG4gICAgICAgICAgICB0aGlzLm9uQ2hlY2sodGhpcy5jaGVja2VkS2V5cy50b0pTT04oKSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgICAgICB0cmF2ZWxGb3JCdWZmZXIodGhpcy50cmVlLnRvSlNPTigpLCB0aGlzLiRidWZmZXJlZFRyZWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIHRyYXZlbEZvckJ1ZmZlcih0cmVlbGV0LCBidWZmZXJlZFRyZWUsIHBhcmVudCA9IG51bGwpIHtcbiAgICB0cmVlbGV0LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBidWZmZXJlZFRyZWVbbm9kZS5rZXldID0gbm9kZTtcbiAgICAgICAgdHJhdmVsRm9yQnVmZmVyKG5vZGUuY2hpbGRyZW4sIGJ1ZmZlcmVkVHJlZSwgbm9kZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYXZlbEZvckNoZWNrQ2hpbGRyZW4odHJlZWxldCwgY2hlY2tlZEtleXMsIGlzQ2hlY2spIHtcbiAgICB0cmVlbGV0LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmIChpc0NoZWNrKSB7XG4gICAgICAgICAgICBjaGVja2VkS2V5cy5lbnN1cmUobm9kZS5rZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tlZEtleXMucmVtb3ZlKG5vZGUua2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0cmF2ZWxGb3JDaGVja0NoaWxkcmVuKG5vZGUuY2hpbGRyZW4sIGNoZWNrZWRLZXlzLCBpc0NoZWNrKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpbmZsdWVuY2VQYXJlbnQobm9kZSwgY2hlY2tlZEtleXMsIGluZGV0ZXJtaW5hdGVkS2V5cywgaXNJbmRldGVybWluYXRlID0gZmFsc2UpIHtcbiAgICBpZiAobm9kZS5wYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAobGV0IGNoaWxkIG9mIG5vZGUucGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChjaGVja2VkS2V5cy5jb250YWlucyhjaGlsZC5rZXkpKSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRldGVybWluYXRlZEtleXMuY29udGFpbnMoY2hpbGQua2V5KSkge1xuICAgICAgICAgICAgY291bnQgKz0gMC41O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNJbmRldGVybWluYXRlKSB7XG4gICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZWRLZXlzLnJlbW92ZShub2RlLnBhcmVudC5rZXkpO1xuICAgICAgICAgICAgY2hlY2tlZEtleXMucmVtb3ZlKG5vZGUucGFyZW50LmtleSk7XG4gICAgICAgICAgICBpbmZsdWVuY2VQYXJlbnQobm9kZS5wYXJlbnQsIGNoZWNrZWRLZXlzLCBpbmRldGVybWluYXRlZEtleXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID09PSBub2RlLnBhcmVudC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGVkS2V5cy5yZW1vdmUobm9kZS5wYXJlbnQua2V5KTtcbiAgICAgICAgICAgIGNoZWNrZWRLZXlzLmVuc3VyZShub2RlLnBhcmVudC5rZXkpO1xuICAgICAgICAgICAgaW5mbHVlbmNlUGFyZW50KG5vZGUucGFyZW50LCBjaGVja2VkS2V5cywgaW5kZXRlcm1pbmF0ZWRLZXlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja2VkS2V5cy5yZW1vdmUobm9kZS5wYXJlbnQua2V5KTtcbiAgICBpbmRldGVybWluYXRlZEtleXMuZW5zdXJlKG5vZGUucGFyZW50LmtleSk7XG4gICAgaW5mbHVlbmNlUGFyZW50KG5vZGUucGFyZW50LCBjaGVja2VkS2V5cywgaW5kZXRlcm1pbmF0ZWRLZXlzLCB0cnVlKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXRyZWUvbXMtdHJlZS50cyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxuXG5cbmltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCBjb250cm9sQ29tcG9uZW50IGZyb20gJy4uL21zLWZvcm0vbXMtY29udHJvbCc7XG5pbXBvcnQgeyBlbWl0VG9Gb3JtSXRlbSB9IGZyb20gJy4uL21zLWZvcm0vdXRpbHMnO1xuaW1wb3J0ICcuL21zLXVwbG9hZC1saXN0JztcbmltcG9ydCAnLi9tcy11cGxvYWQtY2FyZCc7XG5pbXBvcnQgVXBsb2FkZXIgZnJvbSAndXAtbG9hZGVyJztcblxuLyoqXG4gKiDmlofku7bkuIrkvKDnu4Tku7ZcbiAqIEBwcm9wIHZhbHVlIOe7hOS7tuWAvChpbmhlcml0KVxuICogQHByb3AgY29sIOWtl+autei3r+W+hChpbmhlcml0KVxuICogXG4gKiBAZXhhbXBsZVxuICogYGBgIGh0bWxcbiAqIDxtcy11cGxvYWQgOndpZGdldD1cInt2YWx1ZTpAcmVjb3JkLmF0dGFjaG1lbnQsY29sOidhdHRhY2htZW50JywkcnVsZXM6e3JlcXVpcmVkOnRydWUsdHlwZTonYXJyYXknfX1cIj5cbiAqICAgICAgPGkgY2xhc3M9XCJmYSBmYS11cGxvYWRcIj48L2k+6YCJ5oup6ZmE5Lu2XG4gKiA8L21zLXVwbG9hZD5cbiAqIGBgYFxuICovXG5jb250cm9sQ29tcG9uZW50LmV4dGVuZCh7XG4gICAgZGlzcGxheU5hbWU6ICdtcy11cGxvYWQnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXVwbG9hZC5odG1sJyksXG4gICAgc29sZVNsb3Q6ICd0cmlnZ2VyJyxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBoZWxwSWQ6ICcnLFxuICAgICAgICB0cmlnZ2VyOiAnJyxcbiAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICBmaWxlTGlzdDogW10sXG4gICAgICAgIGFjdGlvbjogJycsXG4gICAgICAgIGxpc3RUeXBlOiAndGV4dC1saXN0JyxcbiAgICAgICAgc2hvd1VwbG9hZExpc3Q6IHRydWUsXG4gICAgICAgIGJ0bkNsYXNzOiAnYnRuIGJ0bi1kZWZhdWx0JyxcbiAgICAgICAgY2FyZENsYXNzOiAnYW5lLXVwbG9hZC1zZWxlY3QtY2FyZCBhbmUtdXBsb2FkLWNhcmQtaXRlbScsXG4gICAgICAgIGJsYW5rSW1nOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PScsXG4gICAgICAgICR1cGxvYWRlcjogbnVsbCxcbiAgICAgICAgYmVmb3JlVXBsb2FkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZVJlbW92ZShmaWxlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVMaXN0LnJlbW92ZUFsbChmID0+IGYudWlkID09PSBmaWxlLnVpZCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmlsZUxpc3QuZmlsdGVyKGYgPT4gZi5zdGF0dXMgPT09ICdkb25lJykubWFwKGYgPT4gZi51cmwpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdGhpcy5zaG93VXBsb2FkTGlzdCA/IHZhbHVlIDogdmFsdWVbMF0gfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZmlsZS11cGxvYWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWFwVmFsdWVUb0ZpbGVMaXN0KHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZS5tYXAoKHVybCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1cmwgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdWlkOiAtKGkgKyAxKSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdXJsLnJlcGxhY2UoLy4qXFwvKFteXFwvXSspXFwvPy8sICckMScpLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZG9uZScsXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICBlbWl0VG9Gb3JtSXRlbSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaGVscElkID0gdGhpcy4kaWQ7XG4gICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9GaWxlTGlzdCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCd2YWx1ZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHYudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlTGlzdC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb0ZpbGVMaXN0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdGhpcy5zaG93VXBsb2FkTGlzdCA/IHZhbHVlIDogdmFsdWVbMF0gfSxcbiAgICAgICAgICAgICAgICAgICAgZGVueVZhbGlkYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmlsZS11cGxvYWQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkZXIgPSBVcGxvYWRlci5pbml0KHtcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYWN0aW9uLFxuICAgICAgICAgICAgICAgIGZpbGVJbnB1dDogZXZlbnQudGFyZ2V0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpLmZpbGUsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiAoZmlsZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5LiN5pSv5oyB5Zu+54mH5L+h5oGv55qE6aKE6KeI77yM5YiZ5LiN6L+b6KGM6L+H5ruk5ZKM6ZmQ5Yi2XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoZmlsZSA9PiAhZmlsZS5zaXplIHx8IHRoaXMuYmVmb3JlVXBsb2FkKGZpbGUpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU2VsZWN0OiAoZmlsZXMsIGFsbEZpbGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsbEZpbGVzLm1hcChmaWxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaG93VXBsb2FkTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUxpc3Quc2V0KDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBmaWxlLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3VwbG9hZGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYmxhbmtJbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlTGlzdC5ldmVyeShmID0+IGYudWlkICE9PSBmaWxlLmluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogZmlsZS5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICd1cGxvYWRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLmJsYW5rSW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZpbGVPYmoodGhpcy5maWxlTGlzdCwgZmlsZS5pbmRleCwgZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYuc3RhdHVzID0gJ3VwbG9hZGluZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdXBsb2FkZXIudXBsb2FkKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzOiAoZmlsZSwgbG9hZGVkLCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGaWxlT2JqKHRoaXMuZmlsZUxpc3QsIGZpbGUuaW5kZXgsIGYgPT4gZi5wcm9ncmVzcyA9IChsb2FkZWQgLyB0b3RhbCAqIDEwMCkudG9GaXhlZCgpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3VjY2VzczogKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZpbGVPYmoodGhpcy5maWxlTGlzdCwgZmlsZS5pbmRleCwgZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmLnN0YXR1cyA9ICdkb25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGYucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmLnVybCA9IHJlc3BvbnNlLnVybDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU6IChmaWxlLCBlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmlsZU9iaih0aGlzLmZpbGVMaXN0LCBmaWxlLmluZGV4LCBmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYuc3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGYudXJsID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxNQT09JztcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmlsZUxpc3QuZmlsdGVyKGYgPT4gZi5zdGF0dXMgPT09ICdkb25lJykubWFwKGYgPT4gZi51cmwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHRoaXMuc2hvd1VwbG9hZExpc3QgPyB2YWx1ZSA6IHZhbHVlWzBdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmlsZS11cGxvYWQnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkRpc3Bvc2UoZXZlbnQpIHtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVGaWxlT2JqKGZpbGVMaXN0LCB1aWQsIGNhbGxiYWNrKSB7XG4gICAgZmlsZUxpc3QuZm9yRWFjaChmID0+IHtcbiAgICAgICAgaWYgKGYudWlkID09PSB1aWQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGYpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtbG9hZGluZy9tcy1sb2FkaW5nLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDIwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCAnLi4vbXMtc2VsZWN0JztcbmltcG9ydCAnLi9tcy1jYWxlbmRhci15ZWFyLXZpZXcnO1xuXG5hdmFsb24uY29tcG9uZW50KCdtcy1jYWxlbmRhcicsIHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy1jYWxlbmRhci5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAkdmFsdWU6IG51bGwsXG4gICAgICAgICRzZWxlY3RlZDogbnVsbCxcbiAgICAgICAgd2Vla1N0YXJ0OiAwLFxuICAgICAgICBzaG93SGVhZGVyOiB0cnVlLFxuICAgICAgICBkaXNhYmxlZERhdGUoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRNb250aDogJycsXG4gICAgICAgIGN1cnJlbnRZZWFyOiAwLFxuICAgICAgICB3ZWVrZGF5czogW10sXG4gICAgICAgIGN1cnJlbnRZZWFyT3B0aW9uczogW10sXG4gICAgICAgIG1vbnRoT3B0aW9uczogW10sXG4gICAgICAgIHRhYmxlOiBbXSxcbiAgICAgICAgaGFuZGxlWWVhckNoYW5nZShlKSB7XG4gICAgICAgICAgICB0aGlzLiR2YWx1ZS55ZWFyKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgdGhpcy5jYWxjVGFibGUodGhpcy4kdmFsdWUuY2xvbmUoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZU1vbnRoQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgIHRoaXMuJHZhbHVlLm1vbnRoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2FsY1RhYmxlKHRoaXMuJHZhbHVlLmNsb25lKCkpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVEYXRlQ2xpY2soZWwpIHtcbiAgICAgICAgICAgIGlmIChlbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJHNlbGVjdGVkLnllYXIodGhpcy5jdXJyZW50WWVhcikubW9udGgodGhpcy5jdXJyZW50TW9udGgpLmRhdGUoZWwuZGF0ZSk7XG4gICAgICAgICAgICBpZiAoZWwucHJldk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0ZWQuc3VidHJhY3QoMSwgJ21vbnRocycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsLm5leHRNb250aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGVkLmFkZCgxLCAnbW9udGhzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiR2YWx1ZSA9IHRoaXMuJHNlbGVjdGVkO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLiRzZWxlY3RlZC5jbG9uZSgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2FsZW5kYXItY2hhbmdlZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g5piv5ZCm5pyJ5b+F6KaB5YaN6K6h566X5pu05paw5LiA5qyh77yfXG4gICAgICAgICAgICB0aGlzLmNhbGNUYWJsZSh0aGlzLiR2YWx1ZS5jbG9uZSgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2U6IGF2YWxvbi5ub29wLFxuICAgICAgICBjYWxjVGFibGUobTogbW9tZW50Lk1vbWVudCkge1xuICAgICAgICAgICAgbGV0IGksIGo7XG4gICAgICAgICAgICAvLyDov5nkuKrmnIjnmoTnrKzkuIDlpKlcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG0uY2xvbmUoKS5zdGFydE9mKCdtb250aCcpO1xuICAgICAgICAgICAgLy8g6L+Z5Liq5pyI55qE5pyA5ZCO5LiA5aSpXG4gICAgICAgICAgICBjb25zdCBsYXN0RGF5T2ZNb250aCA9IG0uY2xvbmUoKS5lbmRPZignbW9udGgnKTtcbiAgICAgICAgICAgIC8vIOS4iuS4quaciOeahOacgOWQjuS4gOWkqVxuICAgICAgICAgICAgY29uc3QgbGFzdERheU9mUHJldk1vbnRoID0gZmlyc3REYXlPZk1vbnRoLmNsb25lKCkuc3VidHJhY3QoMSwgJ2RheXMnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gKGZpcnN0RGF5T2ZNb250aC5kYXkoKSAtIHRoaXMud2Vla1N0YXJ0ICsgNykgJSA3O1xuICAgICAgICAgICAgY29uc3QgcHJldkxhc3REYXRlID0gbGFzdERheU9mUHJldk1vbnRoLmRhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3REYXRlID0gbGFzdERheU9mTW9udGguZGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgdGFibGUgPSBbXTtcbiAgICAgICAgICAgIGxldCBwYXNzZWQgPSAwO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlUm93ID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IDc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2TW9udGggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRNb250aCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCAmJiBqIDwgZmlyc3REYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS4iuaciOe7k+adn+mDqOWIhlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2FuZS1jYWxlbmRhci1wcmV2LW1vbnRoLWNlbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZNb250aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZERhdGUoK20uY2xvbmUoKS5zdWJ0cmFjdCgxLCAnbW9udGhzJykuZGF0ZShwcmV2TGFzdERhdGUgLSBmaXJzdERheSArIGogKyAxKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2FuZS1jYWxlbmRhci1kaXNhYmxlZC1jZWxsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZVJvdy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldk1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb250aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBwcmV2TGFzdERhdGUgLSBmaXJzdERheSArIGogKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXNzZWQgKyAxID4gbGFzdERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS4i+aciOW8gOWni+mDqOWIhlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2FuZS1jYWxlbmRhci1uZXh0LW1vbnRoLWNlbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb250aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZERhdGUoK20uY2xvbmUoKS5hZGQoMSwgJ21vbnRocycpLmRhdGUocGFzc2VkICsgMSAtIGxhc3REYXRlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2FuZS1jYWxlbmRhci1kaXNhYmxlZC1jZWxsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZVJvdy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldk1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb250aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiArK3Bhc3NlZCAtIGxhc3REYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacrOaciOmDqOWIhlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vbWVudCgpLmlzU2FtZShtLmNsb25lKCkuZGF0ZShwYXNzZWQgKyAxKSwgJ2RheScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2FuZS1jYWxlbmRhci10b2RheScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJHNlbGVjdGVkLmlzU2FtZShtLmNsb25lKCkuZGF0ZShwYXNzZWQgKyAxKSwgJ2RheScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2FuZS1jYWxlbmRhci1zZWxlY3RlZC1kYXknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkRGF0ZSgrbS5jbG9uZSgpLmRhdGUocGFzc2VkICsgMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKCdhbmUtY2FsZW5kYXItZGlzYWJsZWQtY2VsbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVSb3cucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZNb250aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogKytwYXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhYmxlLnB1c2godGFibGVSb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50YWJsZSA9IHRhYmxlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9udGggPSBtLmZvcm1hdCgnTU1NJyk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRZZWFyID0gbS55ZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRZZWFyT3B0aW9ucyA9IGF2YWxvbi5yYW5nZSh0aGlzLmN1cnJlbnRZZWFyIC0gMTAsIHRoaXMuY3VycmVudFllYXIgKyA5KS5tYXAoeSA9PiAoeyBsYWJlbDogeSwgdmFsdWU6IHkgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJHZhbHVlID0gbW9tZW50KCk7XG4gICAgICAgICAgICB0aGlzLiRzZWxlY3RlZCA9IG1vbWVudCgpO1xuICAgICAgICAgICAgY29uc3Qgd2Vla2RheXMgPSBtb21lbnQubG9jYWxlRGF0YSgpLndlZWtkYXlzTWluKCk7XG4gICAgICAgICAgICBhdmFsb24ucmFuZ2UodGhpcy53ZWVrU3RhcnQpLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICAgICAgd2Vla2RheXMucHVzaCh3ZWVrZGF5cy5zaGlmdCgpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLndlZWtkYXlzID0gd2Vla2RheXM7XG4gICAgICAgICAgICBjb25zdCBtb250aExpc3QgPSBtb21lbnQubG9jYWxlRGF0YSgpLm1vbnRoc1Nob3J0KCk7XG4gICAgICAgICAgICB0aGlzLm1vbnRoT3B0aW9ucyA9IG1vbnRoTGlzdC5tYXAobSA9PiAoeyBsYWJlbDogbSwgdmFsdWU6IG0gfSkpO1xuICAgICAgICAgICAgdGhpcy5jYWxjVGFibGUodGhpcy4kdmFsdWUuY2xvbmUoKSk7XG5cbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLiR2YWx1ZS50b0FycmF5KCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCd2YWx1ZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHZhbHVlID0gdGhpcy4kc2VsZWN0ZWQgPSBtb21lbnQodi5zcGxpdCgnLCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNUYWJsZSh0aGlzLiR2YWx1ZS5jbG9uZSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1jYWxlbmRhci9tcy1jYWxlbmRhci50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCAqIGFzIGJvb3Rib3ggZnJvbSAnYm9vdGJveCc7XG5pbXBvcnQgeyBwYXJzZVNsb3RUb1ZNb2RlbCB9IGZyb20gJy4uLy4uL2FuZS11dGlsJztcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtZGlhbG9nJywge1xuICAgIHRlbXBsYXRlOiAnPGRpdiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCIgLz48c2xvdCBuYW1lPVwiYm9keVwiLz48L2Rpdj4nLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGJvZHk6ICdibGFuaycsXG4gICAgICAgICRkaWFsb2c6IG51bGwsXG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBzaXplOiAnJyxcbiAgICAgICAgdXBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgJGlubmVyVm06ICcnLFxuICAgICAgICBvbk9rKCkge30sXG4gICAgICAgIG9uQ2FuY2VsKCkge30sXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICAgICAgdmFyIHZtID0gZXZlbnQudm1vZGVsO1xuICAgICAgICAgICAgdm0uJHdhdGNoKCdzaG93JywgKG5ld1YpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobmV3Vikge1xuICAgICAgICAgICAgICAgICAgICB2bS4kZGlhbG9nID0gYm9vdGJveC5kaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdm0uYm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAne3t0aXRsZX19JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHZtLnNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+S/neWtmCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5vbk9rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+WPlua2iCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J0bi1kZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5vbkNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS5vbignaGlkZGVuLmJzLm1vZGFsJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcubW9kYWwuaW4nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdzaG93bi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdm0uJGRpYWxvZy5maW5kKCcubW9kYWwtY29udGVudCcpLmF0dHIoJzpjb250cm9sbGVyJywgdGhpcy4kaW5uZXJWbSk7XG4gICAgICAgICAgICAgICAgICAgIGF2YWxvbi5zY2FuKHZtLiRkaWFsb2cuZ2V0KDApKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm0uJGRpYWxvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJGRpYWxvZy5maW5kKCcuYm9vdGJveC1jbG9zZS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgICAgIHBhcnNlU2xvdFRvVk1vZGVsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5zaG93ICYmIHRoaXMuJGZpcmUoJ3Nob3cnLCB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EaXNwb3NlKGV2ZW50KSB7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWRpYWxvZy9tcy1kaWFsb2cudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgeyBmaW5kUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuXG5hdmFsb24uY29tcG9uZW50KCdtcy1mb3JtJywge1xuICAgIHRlbXBsYXRlOiBgPGZvcm0gcm9sZT1cImZvcm1cIiA6Y2xhc3M9XCJbKEBob3Jpem9udGFsID8gJ2Zvcm0taG9yaXpvbnRhbCcgOiAnJyksIChAaW5saW5lID8gJ2Zvcm0taW5saW5lJyA6ICcnKV1cIj48c2xvdCAvPjwvZm9ybT5gLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGl0ZW1zOiAnJyxcbiAgICAgICAgJGZvcm06IG51bGwsXG4gICAgICAgIHR5cGU6ICcnLFxuICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgICAgaW5saW5lOiBmYWxzZSxcbiAgICAgICAgb25Gb3JtQ2hhbmdlKG1ldGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRmb3JtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgIFttZXRhLm5hbWVdOiB7IHZhbHVlOiBtZXRhLnZhbHVlIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuX2N0eXBlXyA9ICdtcy1mb3JtJztcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5fdm1fID0gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzb2xlU2xvdDogJ2l0ZW1zJ1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1mb3JtL21zLWZvcm0udHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbmNvbnN0IGxheW91dENvbXBvbmVudCA9IGF2YWxvbi5jb21wb25lbnQoJ21zLWxheW91dCcsIHtcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhbmUtbGF5b3V0XCIgOmNzcz1cIkBzdHlsZVwiIDpjbGFzcz1cIkBjbGFzc05hbWVcIj48c2xvdCAvPjwvZGl2PmAsXG4gICAgc29sZVNsb3Q6ICdzbG90JyxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBzdHlsZToge30sXG4gICAgICAgIGNsYXNzTmFtZTogJydcbiAgICB9XG59KTtcblxubGF5b3V0Q29tcG9uZW50LmV4dGVuZCh7XG4gICAgZGlzcGxheU5hbWU6ICdtcy1sYXlvdXQtc2lkZXInLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImFuZS1sYXlvdXQtc2lkZXJcIiA6Y3NzPVwiQHN0eWxlXCIgOmNsYXNzPVwiQGNsYXNzTmFtZVwiIDpjbGFzcy0xPVwiW0BmaXhlZD8nYW5lLWxheW91dC1maXhlZC1zaWRlcic6JyddXCI+PGRpdiBjbGFzcz1cImFuZS1sYXlvdXQtc2lkZXItaW5uZXJcIj48c2xvdCAvPjwvZGl2PjwvZGl2PmAsXG4gICAgc29sZVNsb3Q6ICdzbG90JyxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBmaXhlZDogZmFsc2UsXG4gICAgICAgIHdpZHRoOiAnMzAwcHgnXG4gICAgfVxufSk7XG5cbmxheW91dENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRpc3BsYXlOYW1lOiAnbXMtbGF5b3V0LWhlYWRlcicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYW5lLWxheW91dC1oZWFkZXJcIiA6Y3NzPVwiQHN0eWxlXCIgOmNsYXNzPVwiQGNsYXNzTmFtZVwiIDpjbGFzcy0xPVwiW0BmaXhlZD8nYW5lLWxheW91dC1maXhlZC1oZWFkZXInOicnXVwiPjxzbG90IC8+PC9kaXY+YCxcbiAgICBzb2xlU2xvdDogJ3Nsb3QnLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGZpeGVkOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6ICc2MHB4J1xuICAgIH1cbn0pO1xuXG5sYXlvdXRDb21wb25lbnQuZXh0ZW5kKHtcbiAgICBkaXNwbGF5TmFtZTogJ21zLWxheW91dC1jb250ZW50JyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhbmUtbGF5b3V0LWNvbnRlbnRcIiA6Y3NzPVwiQHN0eWxlXCIgOmNsYXNzPVwiQGNsYXNzTmFtZVwiPjxzbG90IC8+PC9kaXY+YCxcbiAgICBzb2xlU2xvdDogJ3Nsb3QnLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGZpeGVkOiBmYWxzZVxuICAgIH1cbn0pO1xuXG5sYXlvdXRDb21wb25lbnQuZXh0ZW5kKHtcbiAgICBkaXNwbGF5TmFtZTogJ21zLWxheW91dC1mb290ZXInLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImFuZS1sYXlvdXQtZm9vdGVyXCIgOmNzcz1cIkBzdHlsZVwiIDpjbGFzcz1cIkBjbGFzc05hbWVcIiA6Y2xhc3MtMT1cIltAZml4ZWQ/J2FuZS1sYXlvdXQtZml4ZWQtZm9vdGVyJzonJ11cIj48c2xvdCAvPjwvZGl2PmAsXG4gICAgc29sZVNsb3Q6ICdzbG90JyxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBmaXhlZDogZmFsc2UsXG4gICAgICAgIHdpZHRoOiAnNjBweCdcbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWxheW91dC9tcy1sYXlvdXQudHMiLCJpbXBvcnQgKiBhcyBub3R5IGZyb20gJ25vdHknO1xuXG50eXBlIG1lc3NhZ2VBcmdzID0ge1xuICAgIGNvbnRlbnQ6IHN0cmluZyxcbiAgICBkdXJhdGlvbj86IG51bWJlclxufTtcblxubGV0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGR1cmF0aW9uOiAxNTAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5mbyh7IGNvbnRlbnQsIGR1cmF0aW9uIH06IG1lc3NhZ2VBcmdzKTogdm9pZCB7XG4gICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtaW5mby1jaXJjbGVcIj48L2k+JyArIGNvbnRlbnQsXG4gICAgICAgICAgICB0eXBlOiAnaW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgbGF5b3V0OiAndG9wQ2VudGVyJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IGR1cmF0aW9uIHx8IGRlZmF1bHRPcHRpb25zLmR1cmF0aW9uXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc3VjY2Vzcyh7IGNvbnRlbnQsIGR1cmF0aW9ufTogbWVzc2FnZUFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGVjay1jaXJjbGVcIj48L2k+JyArIGNvbnRlbnQsXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBsYXlvdXQ6ICd0b3BDZW50ZXInLFxuICAgICAgICAgICAgdGltZW91dDogZHVyYXRpb24gfHwgZGVmYXVsdE9wdGlvbnMuZHVyYXRpb25cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBlcnJvcih7IGNvbnRlbnQsIGR1cmF0aW9ufTogbWVzc2FnZUFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIj48L2k+JyArIGNvbnRlbnQsXG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgbGF5b3V0OiAndG9wQ2VudGVyJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IGR1cmF0aW9uIHx8IGRlZmF1bHRPcHRpb25zLmR1cmF0aW9uXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgd2FybmluZyh7IGNvbnRlbnQsIGR1cmF0aW9ufTogbWVzc2FnZUFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS13YXJuaW5nXCI+PC9pPicgKyBjb250ZW50LFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgbGF5b3V0OiAndG9wQ2VudGVyJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IGR1cmF0aW9uIHx8IGRlZmF1bHRPcHRpb25zLmR1cmF0aW9uXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgd2Fybih7IGNvbnRlbnQsIGR1cmF0aW9ufTogbWVzc2FnZUFyZ3MpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53YXJuaW5nKHsgY29udGVudCwgZHVyYXRpb24gfSk7XG4gICAgfSxcbiAgICBjb25maWcob3B0aW9uczogbWVzc2FnZUFyZ3MpOiB2b2lkIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMuZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLW1lc3NhZ2UvbXMtbWVzc2FnZS50cyIsImltcG9ydCAqIGFzIG5vdHkgZnJvbSAnbm90eSc7XG5cbnR5cGUgbm90aWZpY2F0aW9uQXJncyA9IHtcbiAgICAvKipcbiAgICAgKiDpgJrnn6XmraPmlodcbiAgICAgKi9cbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgLyoqXG4gICAgICog6YCa55+l5qCH6aKYXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgLyoqXG4gICAgICog5rKh5pyJ55So5oi35pON5L2c55qE5oOF5Ya15LiL6YCa55+l5L+d5oyB5pi+56S655qE5pe26Ze077yI5q+r56eS77yJ77yM6buY6K6k5Li6IDUwMDBtc1xuICAgICAqL1xuICAgIHRpbWVvdXQ/OiBudW1iZXJcbn07XG5cbmxldCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0aW1lb3V0OiAzMDAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5mbyh7IG1lc3NhZ2UsIHRpdGxlLCB0aW1lb3V0IH06IG5vdGlmaWNhdGlvbkFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiB0ZW1wbGF0ZSh0aXRsZSwgbWVzc2FnZSwgJ2ZhIGZhLWluZm8tY2lyY2xlJyksXG4gICAgICAgICAgICB0eXBlOiAnaW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgdGltZW91dDogdGltZW91dCB8fCBkZWZhdWx0T3B0aW9ucy50aW1lb3V0XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc3VjY2Vzcyh7IG1lc3NhZ2UsIHRpdGxlLCB0aW1lb3V0IH06IG5vdGlmaWNhdGlvbkFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiB0ZW1wbGF0ZSh0aXRsZSwgbWVzc2FnZSwgJ2ZhIGZhLWNoZWNrLWNpcmNsZScpLFxuICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgdGltZW91dDogdGltZW91dCB8fCBkZWZhdWx0T3B0aW9ucy50aW1lb3V0XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZXJyb3IoeyBtZXNzYWdlLCB0aXRsZSwgdGltZW91dCB9OiBub3RpZmljYXRpb25BcmdzKTogdm9pZCB7XG4gICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdGV4dDogdGVtcGxhdGUodGl0bGUsIG1lc3NhZ2UsICdmYSBmYS10aW1lcy1jaXJjbGUnKSxcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB0aW1lb3V0OiB0aW1lb3V0IHx8IGRlZmF1bHRPcHRpb25zLnRpbWVvdXRcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB3YXJuaW5nKHsgbWVzc2FnZSwgdGl0bGUsIHRpbWVvdXQgfTogbm90aWZpY2F0aW9uQXJncyk6IHZvaWQge1xuICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHRleHQ6IHRlbXBsYXRlKHRpdGxlLCBtZXNzYWdlLCAnZmEgZmEtd2FybmluZycpLFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgdGltZW91dDogdGltZW91dCB8fCBkZWZhdWx0T3B0aW9ucy50aW1lb3V0XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgd2Fybih7IG1lc3NhZ2UsIHRpdGxlLCB0aW1lb3V0IH06IG5vdGlmaWNhdGlvbkFyZ3MpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53YXJuaW5nKHsgbWVzc2FnZSwgdGl0bGUsIHRpbWVvdXQgfSk7XG4gICAgfSxcbiAgICBjb25maWcob3B0aW9uczogbm90aWZpY2F0aW9uQXJncyk6IHZvaWQge1xuICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZSh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGljb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdGl0bGUgPSB0aXRsZSA/IGA8c3Ryb25nPiR7dGl0bGV9PC9zdHJvbmc+PGJyPmAgOiAnJztcbiAgICByZXR1cm4gYDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCIke2ljb259IHB1bGwtbGVmdFwiIHN0eWxlPVwiZm9udC1zaXplOiAzOHB4O21pbi13aWR0aDogMzhweDt0ZXh0LWFsaWduOiBjZW50ZXI7XCI+PC9pPlxuICAgICAgICAgICAgICAgICR7dGl0bGV9XG4gICAgICAgICAgICAgICAgJHttZXNzYWdlfVxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLW5vdGlmaWNhdGlvbi9tcy1ub3RpZmljYXRpb24udHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgJy4uL21zLWNoZWNrYm94L21zLWNoZWNrYm94JztcbmltcG9ydCAnLi9tcy10YWJsZS1oZWFkZXInXG5pbXBvcnQgJy4uL21zLXBhZ2luYXRpb24vbXMtcGFnaW5hdGlvbic7XG5pbXBvcnQge1xuICAgIGZpbmRQYXJlbnRDb21wb25lbnQsXG4gICAgcGFyc2VTbG90VG9WTW9kZWwsXG4gICAgZ2V0Q2hpbGRUZW1wbGF0ZURlc2NyaXB0b3Jcbn0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuaW1wb3J0ICcuLi9tcy1sb2FkaW5nJztcblxuY29uc3QgZGVmYXVsdFBhZ2luYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudDogMSwgcGFnZVNpemU6IDEwLCB0b3RhbDogTmFOLCBvbkNoYW5nZTogYXZhbG9uLm5vb3BcbiAgICB9O1xufTtcblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtdGFibGUnLCB7XG4gICAgc29sZVNsb3Q6ICdoZWFkZXInLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXRhYmxlLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBoZWFkZXI6ICcnLFxuICAgICAgICBjb2x1bW5zOiBbXSxcbiAgICAgICAgZGF0YTogW10sXG4gICAgICAgIGtleTogJ2lkJyxcblxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgbmVlZFNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIGNoZWNrZWQ6IFtdLFxuICAgICAgICBzZWxlY3Rpb246IFtdLFxuICAgICAgICBpc0FsbENoZWNrZWQ6IGZhbHNlLFxuICAgICAgICBvblNlbGVjdDogYXZhbG9uLm5vb3AsXG4gICAgICAgIG9uU2VsZWN0QWxsOiBhdmFsb24ubm9vcCxcbiAgICAgICAgc2VsZWN0aW9uQ2hhbmdlOiBhdmFsb24ubm9vcCxcbiAgICAgICAgaGFuZGxlQ2hlY2tBbGwoZSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0Q3VycmVudFBhZ2VEYXRhKCk7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQuZW5zdXJlKHJlY29yZFt0aGlzLmtleV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5lbnN1cmUocmVjb3JkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih0aGlzLnBhZ2luYXRpb25Db25maWcudG90YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZC5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZC5yZW1vdmVBbGwoZWwgPT4gZGF0YS5tYXAocmVjb3JkID0+IHJlY29yZFt0aGlzLmtleV0pLmluZGV4T2YoZWwpICE9PSAtMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnJlbW92ZUFsbChlbCA9PiBkYXRhLmluZGV4T2YoZWwpICE9PSAtMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UodGhpcy5jaGVja2VkLCB0aGlzLnNlbGVjdGlvbi4kbW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5vblNlbGVjdEFsbChlLnRhcmdldC5jaGVja2VkLCB0aGlzLnNlbGVjdGlvbi4kbW9kZWwpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVDaGVjayhjaGVja2VkLCByZWNvcmQpIHtcbiAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkLmVuc3VyZShyZWNvcmRbdGhpcy5rZXldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5lbnN1cmUocmVjb3JkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkLnJlbW92ZShyZWNvcmRbdGhpcy5rZXldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5yZW1vdmUocmVjb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlKHRoaXMuY2hlY2tlZCwgdGhpcy5zZWxlY3Rpb24uJG1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3QocmVjb3JkLiRtb2RlbCwgY2hlY2tlZCwgdGhpcy5zZWxlY3Rpb24uJG1vZGVsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhY3Rpb25zOiBhdmFsb24ubm9vcCxcbiAgICAgICAgaGFuZGxlKHR5cGUsIGNvbCwgcmVjb3JkLCAkaW5kZXgsIC4uLmV4dHJhKSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IHJlY29yZFtjb2wuZGF0YUluZGV4XS4kbW9kZWwgfHwgcmVjb3JkW2NvbC5kYXRhSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zKHR5cGUsIHRleHQsIHJlY29yZC4kbW9kZWwsICRpbmRleCwgLi4uZXh0cmEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhZ2luYXRpb246IGRlZmF1bHRQYWdpbmF0aW9uKCksXG4gICAgICAgIHBhZ2luYXRpb25Db25maWc6IGRlZmF1bHRQYWdpbmF0aW9uKCksXG4gICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2UoY3VycmVudFBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkNvbmZpZy5vbkNoYW5nZShjdXJyZW50UGFnZSk7XG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25Db25maWcuY3VycmVudCA9IGN1cnJlbnRQYWdlO1xuXG4gICAgICAgICAgICB0aGlzLiRmaXJlKCdjaGVja2VkLmxlbmd0aCcsIHRoaXMuY2hlY2tlZC5sZW5ndGgpO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnBhZ2luYXRpb25Db25maWcuJG1vZGVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q3VycmVudFBhZ2VEYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuICFpc05hTih0aGlzLnBhZ2luYXRpb25Db25maWcudG90YWwpID8gdGhpcy5kYXRhIDogdGhpcy5kYXRhLnNsaWNlKFxuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkNvbmZpZy5wYWdlU2l6ZSAqICh0aGlzLnBhZ2luYXRpb25Db25maWcuY3VycmVudCAtIDEpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkNvbmZpZy5wYWdlU2l6ZSAqIHRoaXMucGFnaW5hdGlvbkNvbmZpZy5jdXJyZW50XG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICAkY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHRvdGFsKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNOYU4odGhpcy5wYWdpbmF0aW9uQ29uZmlnLnRvdGFsKSA/IHRoaXMucGFnaW5hdGlvbkNvbmZpZy50b3RhbCA6IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25DaGFuZ2U6IGF2YWxvbi5ub29wLFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBnZXRDaGlsZFRlbXBsYXRlRGVzY3JpcHRvcih0aGlzKTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4ucHJvcHMudHlwZSA9PSAnc2VsZWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleSA9IGNvbHVtbi5wcm9wcy5kYXRhSW5kZXggfHwgdGhpcy5rZXk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmVlZFNlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IGdldENvbHVtbkNvbmZpZyhkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdjaGVja2VkLmxlbmd0aCcsIChuZXdWKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2VLZXlzID0gdGhpcy5nZXRDdXJyZW50UGFnZURhdGEoKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHJlY29yZCA9PiByZWNvcmRbdGhpcy5rZXldKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWxsQ2hlY2tlZCA9IGN1cnJlbnRQYWdlS2V5c1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGtleSA9PiB0aGlzLmNoZWNrZWQuY29udGFpbnMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA9PSBjdXJyZW50UGFnZUtleXMubGVuZ3RoO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgnZGF0YScsICh2KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgnZGF0YS5sZW5ndGgnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdwYWdpbmF0aW9uJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgYXZhbG9uLm1peCh0aGlzLnBhZ2luYXRpb25Db25maWcsIHYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgncGFnaW5hdGlvbi5jdXJyZW50JywgdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uQ29uZmlnLmN1cnJlbnQgPSB2O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgncGFnaW5hdGlvbi5wYWdlU2l6ZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkNvbmZpZy5wYWdlU2l6ZSA9IHY7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdwYWdpbmF0aW9uLnRvdGFsJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uQ29uZmlnLnRvdGFsID0gdjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3BhZ2luYXRpb24ub25DaGFuZ2UnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25Db25maWcub25DaGFuZ2UgPSB2O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRmaXJlKCdwYWdpbmF0aW9uJywgdGhpcy5wYWdpbmF0aW9uLiRtb2RlbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgfSxcbiAgICAgICAgb25EaXNwb3NlKHZtLCBlbCkge1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGdldENvbHVtbkNvbmZpZyhkZXNjcmlwdG9yLCBsZXZlbCA9IDEpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5yZWR1Y2UoKGFjYywgY29sdW1uKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uaXMgIT0gJ21zLXRhYmxlLWhlYWRlcicpIHJldHVybiBhY2M7XG4gICAgICAgIGlmIChjb2x1bW4ucHJvcHMudHlwZSA9PSAnc2VsZWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5saW5lVGVtcGxhdGUgPSBjb2x1bW4uaW5saW5lVGVtcGxhdGU7XG4gICAgICAgIGlubGluZVRlbXBsYXRlID0gaW5saW5lVGVtcGxhdGUucmVwbGFjZSgvKG1zLXw6KXNraXA9XCJbXlwiXSpcIi9nLCAnJyk7XG4gICAgICAgIGlubGluZVRlbXBsYXRlID0gaW5saW5lVGVtcGxhdGUucmVwbGFjZSgvPFxccyptcy10YWJsZS1oZWFkZXJbXj5dKj4uKjxcXC9cXHMqbXMtdGFibGUtaGVhZGVyXFxzKj4vZywgJycpO1xuICAgICAgICBpbmxpbmVUZW1wbGF0ZSA9IGlubGluZVRlbXBsYXRlLnJlcGxhY2UoLyhtcy18OiljbGljaz1cImhhbmRsZVxcKChbXlwiXSopXFwpXCIvZywgKCQwLCAkMSwgJDIsICQzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7JDF9Y2xpY2s9XCJoYW5kbGUoJHskMn0sKVwiYC5yZXBsYWNlKC8sLywgJywgY29sLCByZWNvcmQsICRpbmRleCwnKS5yZXBsYWNlKC8sXFwpLywgJyknKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBjb2x1bW4ucHJvcHMudGl0bGUsXG4gICAgICAgICAgICBkYXRhSW5kZXg6IGNvbHVtbi5wcm9wcy5kYXRhSW5kZXggfHwgJycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogL15cXHMqJC8udGVzdChpbmxpbmVUZW1wbGF0ZSkgPyAne3tyZWNvcmQuJyArIGNvbHVtbi5wcm9wcy5kYXRhSW5kZXggKyAnfX0nIDogaW5saW5lVGVtcGxhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2MuY29uY2F0KGdldENvbHVtbkNvbmZpZyhjb2x1bW4uY2hpbGRyZW4sIGxldmVsICsgMSkpO1xuICAgIH0sIFtdKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXRhYmxlL21zLXRhYmxlLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IGNvbnRyb2xDb21wb25lbnQgZnJvbSAnLi4vbXMtZm9ybS9tcy1jb250cm9sJztcbmltcG9ydCB7IGVtaXRUb0Zvcm1JdGVtIH0gZnJvbSAnLi4vbXMtZm9ybS91dGlscyc7XG5pbXBvcnQgeyBmaW5kUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuXG4vKipcbiAqIOWkmuihjOaWh+acrOi+k+WFpee7hOS7tlxuICogQHByb3AgdmFsdWUg57uE5Lu25YC8KGluaGVyaXQpXG4gKiBAcHJvcCBjb2wg5a2X5q616Lev5b6EKGluaGVyaXQpXG4gKiBAcHJvcCByb3dzIOaWh+acrOahhuihjOaVsFxuICogXG4gKiBAZXhhbXBsZVxuICogYGBgIGh0bWxcbiAqIDxtcy10ZXh0YXJlYSA6d2lkZ2V0PVwie3ZhbHVlOiBAYmlvLCBjb2w6ICdiaW8nLCByb3dzOiAzfVwiPjwvbXMtdGV4dGFyZWE+XG4gKiBgYGBcbiAqL1xuY29udHJvbENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRpc3BsYXlOYW1lOiAnbXMtdGV4dGFyZWEnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXRleHRhcmVhLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICByb3dzOiAnJyxcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIG1hcFZhbHVlVG9UZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICBlbWl0VG9Gb3JtSXRlbSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCd2YWx1ZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb1RleHQodik7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHYgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVueVZhbGlkYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hhbmdlZCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvVGV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdGV4dGFyZWEvbXMtdGV4dGFyZWEudHMiLCJpbXBvcnQgJy4vbXMtY2FsZW5kYXInO1xuaW1wb3J0ICcuL21zLWNhbGVuZGFyLmxlc3MnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtY2FsZW5kYXIvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY29uc3QgbW9udGhUYWJsZSA9IFtdO1xuXG5hdmFsb24uY29tcG9uZW50KCdtcy1jYWxlbmRhci15ZWFyLXZpZXcnLCB7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtY2FsZW5kYXIteWVhci12aWV3Lmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICB0YWJsZTogW10sXG4gICAgICAgIC8vIDAt5pyI6KeG5Zu+77yMMS3lubTop4blm77vvIwyLeWNgeW5tOinhuWbvu+8jDMt55m+5bm06KeG5Zu+XG4gICAgICAgIHZpZXc6IDEsXG4gICAgICAgIGN1cnJlbnRNb250aDogJycsXG4gICAgICAgIGN1cnJlbnRZZWFyOiAwLFxuICAgICAgICBpc1NlbGVjdGVkKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2VsZWN0OiBhdmFsb24ubm9vcCxcbiAgICAgICAgaGFuZGxlQ2VsbENsaWNrKGVsKSB7XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0KGVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KCkge1xuICAgICAgICAgICAgY29uc3QgbW9udGhMaXN0ID0gbW9tZW50LmxvY2FsZURhdGEoKS5tb250aHNTaG9ydCgpO1xuICAgICAgICAgICAgaWYgKG1vbnRoVGFibGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgWzAsIDMsIDYsIDldLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vbnRoVGFibGUucHVzaChtb250aExpc3Quc2xpY2UobiwgbiArIDMpLm1hcChtID0+ICh7IGxhYmVsOiBtLCB2YWx1ZTogbSB9KSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3ZpZXcnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydE9mRGVjYWRlID0gdGhpcy5jdXJyZW50WWVhciAtIHRoaXMuY3VycmVudFllYXIgJSAxMDtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydE9mQ2VudHVyeSA9IHRoaXMuY3VycmVudFllYXIgLSB0aGlzLmN1cnJlbnRZZWFyICUgMTAwO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlID0gbW9udGhUYWJsZTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlID0gWzAsIDMsIDYsIDldLm1hcChuID0+IGF2YWxvbi5yYW5nZShzdGFydE9mRGVjYWRlIC0gMSwgc3RhcnRPZkRlY2FkZSArIDExKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShuLCBuICsgMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKG0gPT4gKHsgbGFiZWw6IG0sIHZhbHVlOiBtIH0pKSk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlID0gWzAsIDMsIDYsIDldLm1hcChuID0+IGF2YWxvbi5yYW5nZShzdGFydE9mQ2VudHVyeSAtIDEwLCBzdGFydE9mQ2VudHVyeSArIDExMCwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKG4sIG4gKyAzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAobSA9PiAoeyBsYWJlbDogYCR7bX0tJHttICsgOX1gLCB2YWx1ZTogbSB9KSkpOyBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdjdXJyZW50WWVhcicsIHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGZpcmUoJ3ZpZXcnLCB0aGlzLnZpZXcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWNhbGVuZGFyL21zLWNhbGVuZGFyLXllYXItdmlldy50cyIsImltcG9ydCAnLi9tcy1kYXRlcGlja2VyJztcbmltcG9ydCAnLi9tcy1kYXRlcGlja2VyLmxlc3MnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtZGF0ZXBpY2tlci9pbmRleC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY21wVm0pIHtcbiAgICBpZiAoYXZhbG9uLnZtb2RlbHNbY21wVm0ucGFuZWxWbUlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhdmFsb24udm1vZGVsc1tjbXBWbS5wYW5lbFZtSWRdO1xuICAgIH1cblxuICAgIHJldHVybiBhdmFsb24uZGVmaW5lKHtcbiAgICAgICAgJGlkOiBjbXBWbS5wYW5lbFZtSWQsXG4gICAgICAgIGN1cnJlbnREYXRlQXJyYXk6ICcnLFxuICAgICAgICAkbW9tZW50OiBtb21lbnQoKSxcbiAgICAgICAgY3VycmVudERheTogMCxcbiAgICAgICAgY3VycmVudE1vbnRoOiAnJyxcbiAgICAgICAgY3VycmVudFllYXI6IDAsXG4gICAgICAgICRzdGFydERhdGU6IG51bGwsXG4gICAgICAgICRlbmREYXRlOiBudWxsLFxuICAgICAgICBkaXNhYmxlZERhdGUoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgc2hvd1RpbWU6IGZhbHNlLFxuICAgICAgICAvLyAtMS3lpKnvvIjml7bpl7TvvInop4blm77vvIwwLeaciOinhuWbvu+8jDEt5bm06KeG5Zu+77yMMi3ljYHlubTop4blm77vvIwzLeeZvuW5tOinhuWbvlxuICAgICAgICB2aWV3TW9kZTogMCxcbiAgICAgICAgc3RhZ2VkOiAwLFxuICAgICAgICAkY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHN0YXJ0T2ZEZWNhZGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFllYXIgLSB0aGlzLmN1cnJlbnRZZWFyICUgMTA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnRPZkNlbnR1cnkoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFllYXIgLSB0aGlzLmN1cnJlbnRZZWFyICUgMTAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VkID0gMDtcbiAgICAgICAgICAgIHRoaXMuJG1vbWVudCA9IGNtcFZtLnNlbGVjdGVkID8gbW9tZW50KGNtcFZtLnNlbGVjdGVkLCBjbXBWbS5mb3JtYXQpIDogbW9tZW50KCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXkgPSB0aGlzLiRtb21lbnQuZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9udGggPSB0aGlzLiRtb21lbnQuZm9ybWF0KCdNTU0nKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFllYXIgPSB0aGlzLiRtb21lbnQueWVhcigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUFycmF5ID0gdGhpcy4kbW9tZW50LnRvQXJyYXkoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5zaG93VGltZSA9IGNtcFZtLnNob3dUaW1lO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDmnoTpgKDkuI3lj6/pgInmi6nml6XmnJ/nmoTliKTmlq3lh73mlbBcbiAgICAgICAgICAgIGlmIChjbXBWbS5zdGFydERhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGFydERhdGUgPSBtb21lbnQoY21wVm0uc3RhcnREYXRlLCBjbXBWbS5mb3JtYXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNtcFZtLmVuZERhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbmREYXRlID0gbW9tZW50KGNtcFZtLmVuZERhdGUsIGNtcFZtLmZvcm1hdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY21wVm0uc3RhcnREYXRlIHx8IGNtcFZtLmVuZERhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzorr7nva7kuoblvIDlp4vml6XmnJ/lkoznu5PmnZ/ml6XmnJ/vvIzliJnmja7mraTmnoTpgKDkuIDkuKrliKTmlq3lh73mlbBcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkRGF0ZSA9IChjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRzdGFydERhdGUgPT09IG51bGwgJiYgdGhpcy4kZW5kRGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRNb21lbnQgPSBtb21lbnQoY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2FtZU9yQWZ0ZXJTdGFydERhdGUgPSBjdXJyZW50TW9tZW50LmlzU2FtZU9yQWZ0ZXIodGhpcy4kc3RhcnREYXRlLCAnZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NhbWVPckJlZm9yZUVuZERhdGUgPSBjdXJyZW50TW9tZW50LmlzU2FtZU9yQmVmb3JlKHRoaXMuJGVuZERhdGUsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRzdGFydERhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lT3JCZWZvcmVFbmREYXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRlbmREYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZU9yQWZ0ZXJTdGFydERhdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEoaXNTYW1lT3JBZnRlclN0YXJ0RGF0ZSAmJiBpc1NhbWVPckJlZm9yZUVuZERhdGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWQpuWImeS9v+eUqOm7mOiupOeahOaIluiAheWklumDqOS8oOi/m+adpeeahOWIpOaWreWHveaVsFxuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWREYXRlID0gY21wVm0uZGlzYWJsZWREYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VWaWV3KHZpZXdNb2RlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aWV3TW9kZSA9PT0gMCAmJiB2aWV3TW9kZSA9PT0gMikge1xuICAgICAgICAgICAgICAgIC8vIOS7juaciOinhuWbvuebtOaOpei3s+WIsOWNgeW5tOinhuWbvuWQju+8jOi/lOWbnuaXtui3s+i/h+W5tOinhuWbvlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhZ2VkID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlld01vZGUgPSB2aWV3TW9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlWWVhclZpZXdTZWxlY3QoZWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXdNb2RlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9udGggPSBlbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRtb21lbnQubW9udGgoZWwudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVBcnJheSA9IHRoaXMuJG1vbWVudC50b0FycmF5KCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXdNb2RlID09PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50WWVhciA9IGVsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJG1vbWVudC55ZWFyKGVsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlQXJyYXkgPSB0aGlzLiRtb21lbnQudG9BcnJheSgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52aWV3TW9kZSA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFllYXIgPSBlbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRtb21lbnQueWVhcihlbC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUFycmF5ID0gdGhpcy4kbW9tZW50LnRvQXJyYXkoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGUgPSB0aGlzLnZpZXdNb2RlIC0gMSAtIHRoaXMuc3RhZ2VkO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhZ2VkID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZSA9IHRoaXMudmlld01vZGUgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtdXRhdGUoYWN0aW9uLCAuLi5hcmdzKSB7XG4gICAgICAgICAgICB0aGlzLiRtb21lbnRbYWN0aW9uXS5hcHBseSh0aGlzLiRtb21lbnQsIGFyZ3MpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF5ID0gdGhpcy4kbW9tZW50LmRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbnRoID0gdGhpcy4kbW9tZW50LmZvcm1hdCgnTU1NJyk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRZZWFyID0gdGhpcy4kbW9tZW50LnllYXIoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVBcnJheSA9IHRoaXMuJG1vbWVudC50b0FycmF5KCkudG9TdHJpbmcoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9kYXkoKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNhbGVuZGFyQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vbWVudCgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2FsZW5kYXItY2hhbmdlZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVDYWxlbmRhckNoYW5nZShlKSB7XG4gICAgICAgICAgICB0aGlzLiRtb21lbnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERheSA9IHRoaXMuJG1vbWVudC5kYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb250aCA9IHRoaXMuJG1vbWVudC5mb3JtYXQoJ01NTScpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50WWVhciA9IHRoaXMuJG1vbWVudC55ZWFyKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvd1RpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZVRpbWVwaWNrZXJDaGFuZ2UoZSkge1xuICAgICAgICAgICAgY29uc3QgeyBob3VyLCBtaW51dGUsIHNlY29uZCB9ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLiRtb21lbnQuaG91cihob3VyKS5taW51dGUobWludXRlKS5zZWNvbmQoc2Vjb25kKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGUoKSB7XG4gICAgICAgICAgICBjbXBWbS5zZWxlY3RlZCA9IHRoaXMuJG1vbWVudC5mb3JtYXQoY21wVm0uZm9ybWF0KTtcbiAgICAgICAgICAgIGNtcFZtLnBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgY21wVm0uaGFuZGxlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IGNtcFZtLnNlbGVjdGVkIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ2RhdGVwaWNrZXItY2hhbmdlZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1kYXRlcGlja2VyL21zLWRhdGVwaWNrZXItcGFuZWwudHMiLCJpbXBvcnQgJy4vbXMtZGlhbG9nJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWRpYWxvZy9pbmRleC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCB7IGZpbmRQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5cbi8qKlxuICog6KGo5Y2V6aG557uE5Lu2XG4gKiBAcHJvcCBsYWJlbCDooajljZXpobnmoIfnrb5cbiAqIFxuICogQGV4YW1wbGVcbiAqIGBgYCBodG1sXG4gKiA8bXMtZm9ybS1pdGVtIDp3aWRnZXQ9XCJ7bGFiZWw6ICfmoIfpopgnfVwiPlxuICAgICAgICA8bXMtaW5wdXQgOndpZGdldD1cInt2YWx1ZTogQHRpdGxlLCBjb2w6ICd0aXRsZSd9XCI+PC9tcy1pbnB1dD5cbiAgICA8L21zLWZvcm0taXRlbT5cbiAqIGBgYFxuICovXG5hdmFsb24uY29tcG9uZW50KCdtcy1mb3JtLWl0ZW0nLCB7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtZm9ybS1pdGVtLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICAkZm9ybVZtOiBudWxsLFxuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIGNvbnRyb2w6ICcnLFxuICAgICAgICBpbmxpbmU6IGZhbHNlLFxuICAgICAgICBkaXJ0eTogZmFsc2UsXG4gICAgICAgIHJlYXNvbnM6IFtdLFxuICAgICAgICBoYXNSdWxlczogZmFsc2UsXG4gICAgICAgIHNob3dJY29uOiB0cnVlLFxuICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICBpbmxpbmVGb3JtR3JvdXBTdHlsZTogeyB2ZXJ0aWNhbEFsaWduOiAndG9wJyB9LFxuICAgICAgICBpbmxpbmVNZXNzYWdlU3R5bGU6IHsgbWFyZ2luQm90dG9tOiAwIH0sXG4gICAgICAgIG9uRmllbGRDaGFuZ2UoZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgdGhpcy4kZm9ybVZtLnR5cGUgIT09ICdzZWFyY2gnICYmIHRoaXMuJGZvcm1WbS4kZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XG4gICAgICAgICAgICAgICAgW2Rlc2NyaXB0b3IubmFtZV06IHsgdmFsdWU6IGRlc2NyaXB0b3IudmFsdWUsIGRlbnlWYWxpZGF0ZTogZGVzY3JpcHRvci5kZW55VmFsaWRhdGUgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWRlc2NyaXB0b3IucnVsZXMpIHJldHVybiA7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5zaG93SWNvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJY29uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgZGVzY3JpcHRvci5zaG93SWNvbjtcbiAgICAgICAgICAgIHRoaXMuaGFzUnVsZXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kZm9ybVZtLiRmb3JtLmFkZEZpZWxkcyh7XG4gICAgICAgICAgICAgICAgW2Rlc2NyaXB0b3IubmFtZV06IHsgcnVsZXM6IGRlc2NyaXB0b3IucnVsZXMgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRmb3JtVm0uJGZvcm0ub24oJ2Vycm9yJyArIGRlc2NyaXB0b3IubmFtZSwgKHJlYXNvbnMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYXNvbnMgPSByZWFzb25zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRmb3JtVm0uJGZvcm0ub24oJ3Jlc2V0JywgZmllbGRzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAofk9iamVjdC5rZXlzKGZpZWxkcykuaW5kZXhPZihkZXNjcmlwdG9yLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFzb25zID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRm9ybUNoYW5nZShtZXRhKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZm9ybVZtLiRmb3JtLmF1dG9Bc3luY0NoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kZm9ybVZtLm9uRm9ybUNoYW5nZShtZXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuX2N0eXBlXyA9ICdtcy1mb3JtLWl0ZW0nO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0Ll92bV8gPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy4kZm9ybVZtID0gZmluZFBhcmVudENvbXBvbmVudCh0aGlzLCAnbXMtZm9ybScpO1xuICAgICAgICAgICAgaWYgKHRoaXMuJGZvcm1WbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93ICdtcy1mb3JtLWl0ZW0g5b+F6aG75pS+5ZyoIG1zLWZvcm0g5YaFJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5saW5lID0gdGhpcy4kZm9ybVZtLmlubGluZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzb2xlU2xvdDogJ2NvbnRyb2wnXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWZvcm0vbXMtZm9ybS1pdGVtLnRzIiwiaW1wb3J0ICcuL21zLWlucHV0JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWlucHV0L2luZGV4LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuXG4vKipcbiAqIGxvYWRpbmcg5oyH5LukXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBgYGAgaHRtbFxuICogPHRhYmxlIDpsb2FkaW5nPVwidHJ1ZVwiPi4uLjwvdGFibGU+XG4gKiBgYGBcbiAqL1xuYXZhbG9uLmRpcmVjdGl2ZSgnbG9hZGluZycsIHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRQb3NpdGlvblN0eWxlID0gJyc7XG4gICAgfSxcbiAgICB1cGRhdGUodmRvbSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb20gPSB2ZG9tLmRvbTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdsb2JhbC5nZXRDb21wdXRlZFN0eWxlID8gZ2xvYmFsLmdldENvbXB1dGVkU3R5bGUoZG9tKSA6IGRvbS5jdXJyZW50U3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZG9tLm9mZnNldFdpZHRoLCBoZWlnaHQgPSBkb20uc2Nyb2xsSGVpZ2h0LCBjbGFzc05hbWUgPSBkb20uY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgfSA9IGNvbXB1dGVkU3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2xkUG9zaXRpb25TdHlsZSA9IGRvbS5zdHlsZS5wb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzlhYPntKDmmK/pmpDol4/nmoTvvIzku4DkuYjpg73kuI3lgZpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWuveW6puWSjOmrmOW6pumDveS4jeS4ujDvvIzliJnmt7vliqBsb2FkaW5n6YGu572pXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCAhPT0gMCAmJiBoZWlnaHQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFza0VsZW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50LmNsYXNzTmFtZSA9ICdhbmUtbG9hZGluZy1tYXNrJztcbiAgICAgICAgICAgICAgICAgICAgbWFza0VsZW1lbnQuaW5uZXJUZXh0ID0gJ+WKoOi9veS4rS4uLic7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50LnN0eWxlLmxlZnQgPSAwIC0gKGJvcmRlckxlZnRXaWR0aCA9PT0gJ21lZGl1bScgPyAwIDogcGFyc2VGbG9hdChib3JkZXJMZWZ0V2lkdGgpKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50LnN0eWxlLnRvcCA9IDAgLSAoYm9yZGVyVG9wV2lkdGggPT09ICdtZWRpdW0nID8gMCA6IHBhcnNlRmxvYXQoYm9yZGVyVG9wV2lkdGgpKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBtYXNrRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBtYXNrRWxlbWVudC5zdHlsZS5saW5lSGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgICAgICAgICAgICBkb20uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIX5gICR7Y2xhc3NOYW1lfSBgLmluZGV4T2YoJyBtYXNrZWQgJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5jbGFzc05hbWUgKz0gJyBtYXNrZWQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRvbS5hcHBlbmRDaGlsZChtYXNrRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBtYXNrRWxlbWVudDtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkb20gPSB2ZG9tLmRvbTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXNrRWxlbWVudCA9IHRoaXMuaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZG9tLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9sZFBvc2l0aW9uU3R5bGUgPSBkb20uc3R5bGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgbWFza0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgZG9tLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICBpZiAoIX5gICR7Y2xhc3NOYW1lfSBgLmluZGV4T2YoJyBtYXNrZWQgJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLmNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgbWFza2VkJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb20gPSB2ZG9tLmRvbTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFza0VsZW1lbnQgPSB0aGlzLmluc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBkb20uY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICBtYXNrRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vbGRQb3NpdGlvblN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb20uc3R5bGUucG9zaXRpb24gPSB0aGlzLm9sZFBvc2l0aW9uU3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZG9tLmNsYXNzTmFtZSA9IGAgJHtjbGFzc05hbWV9IGAucmVwbGFjZSgvXFxzKm1hc2tlZFxccyovLCAnICcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZURpc3Bvc2UoKSB7XG4gICAgICAgIGNvbnN0IGRvbSA9IHRoaXMubm9kZS5kb207XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgJiYgZG9tLnJlbW92ZUNoaWxkKHRoaXMuaW5zdGFuY2UpO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIOWFqOWxgCBsb2FkaW5nIOaWueazlVxuICogXG4gKiBAZXhhbXBsZVxuICogYGBgIGpzXG4gKiBpbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9jb21wb25lbnRzL21zLWxvYWRpbmcnO1xuICogTG9hZGluZy5zaG93KCk7XG4gKiBzZXRUaW1lb3V0KCgpID0+IHtcbiAqICAgTG9hZGluZy5oaWRlKCk7XG4gKiB9LCA1MDAwKVxuICogYGBgXG4gKi9cbmNvbnN0IGxvYWRpbmdEaXJlY3RpdmUgPSBhdmFsb24uZGlyZWN0aXZlc1snbG9hZGluZyddO1xuY29uc3QgZ2xvYmFsTG9hZGluZ0NvbnRleHQ6IHtcbiAgICBub2RlOiB7IGRvbTogSFRNTEVsZW1lbnQgfSxcbiAgICBpbnN0YW5jZT86IEhUTUxEaXZFbGVtZW50XG59ID0ge1xuICAgIG5vZGU6IHsgZG9tOiBkb2N1bWVudC5ib2R5IH1cbn07XG5cbmV4cG9ydCBjb25zdCBMb2FkaW5nID0ge1xuICAgIHNob3coKSB7XG4gICAgICAgIGlmIChnbG9iYWxMb2FkaW5nQ29udGV4dC5pbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlLmluaXQuY2FsbChnbG9iYWxMb2FkaW5nQ29udGV4dCk7XG4gICAgICAgICAgICBhdmFsb24ucmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUudXBkYXRlLmNhbGwoZ2xvYmFsTG9hZGluZ0NvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tOiBnbG9iYWxMb2FkaW5nQ29udGV4dC5ub2RlLmRvbVxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlLnVwZGF0ZS5jYWxsKGdsb2JhbExvYWRpbmdDb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgZG9tOiBnbG9iYWxMb2FkaW5nQ29udGV4dC5ub2RlLmRvbVxuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhpZGUoKSB7XG4gICAgICAgIGlmIChnbG9iYWxMb2FkaW5nQ29udGV4dC5pbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlLnVwZGF0ZS5jYWxsKGdsb2JhbExvYWRpbmdDb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgZG9tOiBnbG9iYWxMb2FkaW5nQ29udGV4dC5ub2RlLmRvbVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWxvYWRpbmcvbXMtbG9hZGluZy1kaXJlY3RpdmUudHMiLCJpbXBvcnQgJy4vbXMtbWVudS5sZXNzJztcbmltcG9ydCAnLi9tcy1tZW51JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLW1lbnUvaW5kZXgudHMiLCJpbXBvcnQgbWVzc2FnZSBmcm9tICcuL21zLW1lc3NhZ2UnO1xuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLW1lc3NhZ2UvaW5kZXgudHMiLCJpbXBvcnQgbm90aWZpY2F0aW9uIGZyb20gJy4vbXMtbm90aWZpY2F0aW9uJztcbmV4cG9ydCBkZWZhdWx0IG5vdGlmaWNhdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLW5vdGlmaWNhdGlvbi9pbmRleC50cyIsImltcG9ydCAnLi9tcy1yYWRpbyc7XG5pbXBvcnQgJy4vbXMtcmFkaW8tZ3JvdXAnO1xuaW1wb3J0ICcuL21zLXJhZGlvLmxlc3MnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtcmFkaW8vaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLXNlbGVjdC1vcHRpb24nLCB7XG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIHNvbGVTbG90OiAnbGFiZWwnLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3Qtb3B0aW9uLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY21wVm0pIHtcbiAgICBpZiAoYXZhbG9uLnZtb2RlbHNbY21wVm0ucGFuZWxWbUlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhdmFsb24udm1vZGVsc1tjbXBWbS5wYW5lbFZtSWRdO1xuICAgIH1cblxuICAgIHJldHVybiBhdmFsb24uZGVmaW5lKHtcbiAgICAgICAgJGlkOiBjbXBWbS5wYW5lbFZtSWQsXG4gICAgICAgIHNlbGVjdGlvbjogW10sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBpc011bHRpcGxlOiBjbXBWbS5pc011bHRpcGxlLFxuICAgICAgICBvcHRpb25zOiBjbXBWbS5vcHRpb25zLnRvSlNPTigpLFxuICAgICAgICBzZWFyY2hWYWx1ZTogJycsXG4gICAgICAgIGdldEZpbHRlcmVkT3B0aW9ucygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKHRoaXMuZmlsdGVyRm4pO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJGbihlbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbXBWbS5yZW1vdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYXZhbG9uLmVzY2FwZVJlZ0V4cCh0aGlzLnNlYXJjaFZhbHVlKSwgJ2knKTtcbiAgICAgICAgICAgIHJldHVybiByZWcudGVzdChlbC5sYWJlbCkgfHwgcmVnLnRlc3QoZWwudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVPcHRpb25DbGljayhlLCBvcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY21wVm0uaXNNdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5zb21lKG8gPT4gby52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5yZW1vdmVBbGwobyA9PiBvLnZhbHVlID09PSBvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2gob3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY21wVm0uZm9jdXNTZWFyY2goKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbb3B0aW9uXTtcbiAgICAgICAgICAgICAgICBjbXBWbS5wYW5lbFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLnRvSlNPTigpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzZWxlY3Rpb24ubWFwKHMgPT4gcy52YWx1ZSk7XG4gICAgICAgICAgICBjbXBWbS5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogY21wVm0uaXNNdWx0aXBsZSA/IHZhbHVlIDogdmFsdWVbMF0gfHwgJycgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VsZWN0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjbXBWbS5kaXNwbGF5VmFsdWUgPSBvcHRpb24ubGFiZWw7XG4gICAgICAgICAgICBjbXBWbS5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3QtcGFuZWwudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLXRhYmxlLWhlYWRlcicsIHtcbiAgICB0ZW1wbGF0ZTogJzx0aD48c2xvdCAvPjwvdGg+JyxcbiAgICBzb2xlU2xvdDogJ2NvbnRlbnQnLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICBjb2w6ICcnXG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy10YWJsZS9tcy10YWJsZS1oZWFkZXIudHMiLCJpbXBvcnQgJy4vbXMtdGV4dGFyZWEnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdGV4dGFyZWEvaW5kZXgudHMiLCJpbXBvcnQgJy4vbXMtdGltZXBpY2tlcic7XG5pbXBvcnQgJy4vbXMtdGltZXBpY2tlci5sZXNzJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNtcFZtKSB7XG4gICAgaWYgKGF2YWxvbi52bW9kZWxzW2NtcFZtLnBhbmVsVm1JZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gYXZhbG9uLnZtb2RlbHNbY21wVm0ucGFuZWxWbUlkXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXZhbG9uLmRlZmluZSh7XG4gICAgICAgICRpZDogY21wVm0ucGFuZWxWbUlkLFxuICAgICAgICBjdXJyZW50RGF0ZUFycmF5OiAnJyxcbiAgICAgICAgJG1vbWVudDogbW9tZW50KCksXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy4kbW9tZW50ID0gY21wVm0uc2VsZWN0ZWQgPyBtb21lbnQoY21wVm0uc2VsZWN0ZWQsIGNtcFZtLmZvcm1hdCkgOiBtb21lbnQoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVBcnJheSA9IHRoaXMuJG1vbWVudC50b0FycmF5KCkudG9TdHJpbmcoKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlVGltZXBpY2tlckNoYW5nZShlKSB7XG4gICAgICAgICAgICBjb25zdCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kIH0gPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuJG1vbWVudC5ob3VyKGhvdXIpLm1pbnV0ZShtaW51dGUpLnNlY29uZChzZWNvbmQpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUFycmF5ID0gdGhpcy4kbW9tZW50LnRvQXJyYXkoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgY21wVm0uc2VsZWN0ZWQgPSB0aGlzLiRtb21lbnQuZm9ybWF0KGNtcFZtLmZvcm1hdCk7XG5cbiAgICAgICAgICAgIGNtcFZtLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiBjbXBWbS5zZWxlY3RlZCB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0aW1lcGlja2VyLWNoYW5nZWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci1wYW5lbC50cyIsImltcG9ydCAnLi9tcy10cmVlJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXRyZWUvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgKiBhcyBkb21BbGlnbiBmcm9tICdkb20tYWxpZ24nO1xuXG5hdmFsb24uY29tcG9uZW50KCdtcy10cmlnZ2VyJywge1xuICAgIHRlbXBsYXRlOiAnPHNwYW4gc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCI+PC9zcGFuPicsXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBpbm5lclZtSWQ6ICcnLFxuICAgICAgICBpbm5lckNsYXNzOiAnJyxcbiAgICAgICAgaW5uZXJUZW1wbGF0ZTogJycsXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgd2l0aEluQm94KCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgZ2V0VGFyZ2V0OiBhdmFsb24ubm9vcCxcbiAgICAgICAgb25IaWRlOiBhdmFsb24ubm9vcCxcbiAgICAgICAgaGlkZShwYW5lbCkge1xuICAgICAgICAgICAgcGFuZWwuc3R5bGUudG9wID0gJy05OTk5cHgnO1xuICAgICAgICAgICAgcGFuZWwuc3R5bGUubGVmdCA9ICctOTk5OXB4JztcbiAgICAgICAgICAgIHRoaXMub25IaWRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXRQYW5lbChwYW5lbDogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IERPQyA9IGRvY3VtZW50LCBib2R5ID0gRE9DLmJvZHk7XG4gICAgICAgICAgICBjb25zdCBtZWRpdW0gPSBET0MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtZWRpdW0uc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuJGlkKTtcbiAgICAgICAgICAgIG1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgd2lkdGg6IDEwMCU7Jyk7XG4gICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5pbm5lckNsYXNzKTtcbiAgICAgICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnei1pbmRleDogMTA1MDtsZWZ0OiAtOTk5OXB4O3RvcDogLTk5OTlweDtwb3NpdGlvbjogYWJzb2x1dGU7b3V0bGluZTogbm9uZTtvdmVyZmxvdzogaGlkZGVuOycpO1xuICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCc6aW1wb3J0YW50JywgdGhpcy5pbm5lclZtSWQpO1xuICAgICAgICAgICAgcGFuZWwuaW5uZXJIVE1MID0gdGhpcy5pbm5lclRlbXBsYXRlLnJlcGxhY2UoL1xccnxcXG4vZywgJycpO1xuICAgICAgICAgICAgbWVkaXVtLmFwcGVuZENoaWxkKHBhbmVsKTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVkaXVtKTtcblxuICAgICAgICAgICAgYXZhbG9uLnNjYW4ocGFuZWwsIGF2YWxvbi52bW9kZWxzW3RoaXMuaW5uZXJWbUlkXSk7XG5cbiAgICAgICAgICAgIGF2YWxvbi5iaW5kKERPQywgJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZSAmJiBwYW5lbCAhPT0gZS50YXJnZXQgJiYgIWF2YWxvbi5jb250YWlucyhwYW5lbCwgZS50YXJnZXQpICYmICAhdGhpcy53aXRoSW5Cb3goZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZShwYW5lbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgRE9DID0gZG9jdW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBwYW5lbCA9IERPQy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCd2aXNpYmxlJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRQYW5lbChwYW5lbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYW5lbC5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggPT09IDAgPyAnYXV0bycgOiAodGhpcy53aWR0aCArICdweCcpO1xuICAgICAgICAgICAgICAgICAgICBwYW5lbC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgICAgICAgICBkb21BbGlnbihwYW5lbCwgdGhpcy5nZXRUYXJnZXQoKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IFswLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGFyZ2V0T2Zmc2V0OiBbJzAlJywnMTAwJSddXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdFk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUocGFuZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkRpc3Bvc2UoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IERPQyA9IGRvY3VtZW50LCBib2R5ID0gRE9DLmJvZHk7XG4gICAgICAgICAgICBjb25zdCBtZWRpdW0gPSBET0MuZ2V0RWxlbWVudEJ5SWQodGhpcy4kaWQpO1xuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtZWRpdW0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy10cmlnZ2VyL21zLXRyaWdnZXIudHMiLCJpbXBvcnQgJy4vbXMtdXBsb2FkJztcbmltcG9ydCAnLi9tcy11cGxvYWQubGVzcyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy11cGxvYWQvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLXVwbG9hZC1jYXJkJywge1xuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXVwbG9hZC1jYXJkLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBmaWxlTGlzdDogW10sXG4gICAgICAgIGdldFRleHRDbGFzcyhmaWxlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGZpbGUuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZG9uZSc6IHJldHVybiAndGV4dC1wcmltYXJ5JztcbiAgICAgICAgICAgICAgICBjYXNlICd1cGxvYWRpbmcnOiByZXR1cm4gJ3RleHQtbXV0ZWQnO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzogcmV0dXJuICd0ZXh0LWRhbmdlcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVtb3ZlOiBhdmFsb24ubm9vcCxcbiAgICAgICAgZGVsKGZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMub25SZW1vdmUoZmlsZSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXVwbG9hZC9tcy11cGxvYWQtY2FyZC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtdXBsb2FkLWxpc3QnLCB7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtdXBsb2FkLWxpc3QuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGZpbGVMaXN0OiBbXSxcbiAgICAgICAgZ2V0VGV4dENsYXNzKGZpbGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZmlsZS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdkb25lJzogcmV0dXJuICd0ZXh0LXByaW1hcnknO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3VwbG9hZGluZyc6IHJldHVybiAndGV4dC1tdXRlZCc7XG4gICAgICAgICAgICAgICAgY2FzZSAnZXJyb3InOiByZXR1cm4gJ3RleHQtZGFuZ2VyJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSxcbiAgICAgICAgb25SZW1vdmU6IGF2YWxvbi5ub29wLFxuICAgICAgICBkZWwoZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5vblJlbW92ZShmaWxlKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdXBsb2FkL21zLXVwbG9hZC1saXN0LnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtY2FsZW5kYXIvbXMtY2FsZW5kYXIubGVzc1xuLy8gbW9kdWxlIGlkID0gMjM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLWNoZWNrYm94L21zLWNoZWNrYm94Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDIzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1kYXRlcGlja2VyL21zLWRhdGVwaWNrZXIubGVzc1xuLy8gbW9kdWxlIGlkID0gMjM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLWxheW91dC9tcy1sYXlvdXQubGVzc1xuLy8gbW9kdWxlIGlkID0gMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLW1lbnUvbXMtbWVudS5sZXNzXG4vLyBtb2R1bGUgaWQgPSAyMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtcmFkaW8vbXMtcmFkaW8ubGVzc1xuLy8gbW9kdWxlIGlkID0gMjM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3QubGVzc1xuLy8gbW9kdWxlIGlkID0gMjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci5sZXNzXG4vLyBtb2R1bGUgaWQgPSAyNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtdXBsb2FkL21zLXVwbG9hZC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAyNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImFuZS1jYWxlbmRhclxcXCI+XFxuICAgIDx0YWJsZSBjbGFzcz1cXFwiYW5lLWNhbGVuZGFyLXllYXItdmlld1xcXCI+XFxuICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgPHRyIDpmb3I9XFxcIu+8iGksIHJvdykgaW4gQHRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJhbmUtY2FsZW5kYXItY2VsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiW1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEBpc1NlbGVjdGVkKGNlbGwpID8gJ2FuZS1jYWxlbmRhci1zZWxlY3RlZC1kYXknIDogJycpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEB2aWV3ID4gMSAmJiAoaSArIGogPT09IDAgfHwgaSAqIGogPT09IDYpID8gJ2FuZS1jYWxlbmRhci1wcmV2LW1vbnRoLWNlbGwnIDogJycpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Zm9yPVxcXCIoaiwgY2VsbCkgaW4gcm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFuZS1jYWxlbmRhci1kYXRlXFxcIiA6Y2xpY2s9XFxcIkBoYW5kbGVDZWxsQ2xpY2soY2VsbClcXFwiPnt7Y2VsbC5sYWJlbH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGJvZHk+XFxuICAgIDwvdGFibGU+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtY2FsZW5kYXIvbXMtY2FsZW5kYXIteWVhci12aWV3Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYW5lLWNhbGVuZGFyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBtcy1pZj1cXFwiQHNob3dIZWFkZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTIgY29sLW1kLW9mZnNldC00XFxcIj5cXG4gICAgICAgICAgICA8bXMtc2VsZWN0IDp3aWRnZXQ9XFxcInt2YWx1ZTpbQGN1cnJlbnRZZWFyXSxvcHRpb25zOkBjdXJyZW50WWVhck9wdGlvbnMsb25DaGFuZ2U6QGhhbmRsZVllYXJDaGFuZ2V9XFxcIj48L21zLXNlbGVjdD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTJcXFwiPlxcbiAgICAgICAgICAgIDxtcy1zZWxlY3QgOndpZGdldD1cXFwie3ZhbHVlOltAY3VycmVudE1vbnRoXSxvcHRpb25zOkBtb250aE9wdGlvbnMsb25DaGFuZ2U6QGhhbmRsZU1vbnRoQ2hhbmdlfVxcXCI+PC9tcy1zZWxlY3Q+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDx0YWJsZT5cXG4gICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiYW5lLWNhbGVuZGFyLWNvbHVtbi1oZWFkZXJcXFwiIDpmb3I9XFxcImRheSBpbiBAd2Vla2RheXNcXFwiPnt7ZGF5fX08L3RoPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgIDx0ciA6Zm9yPVxcXCJ3ZWVrIGluIEB0YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiYW5lLWNhbGVuZGFyLWNlbGxcXFwiIDpjbGFzcz1cXFwiZWwuY2xhc3NOYW1lXFxcIiA6Zm9yPVxcXCJlbCBpbiB3ZWVrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFuZS1jYWxlbmRhci1kYXRlXFxcIiA6Y2xpY2s9XFxcIkBoYW5kbGVEYXRlQ2xpY2soZWwpIHwgc3RvcFxcXCI+e3tlbC5kYXRlfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90Ym9keT5cXG4gICAgPC90YWJsZT5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1jYWxlbmRhci9tcy1jYWxlbmRhci5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNoZWNrYm94LWdyb3VwXFxcIj5cXG4gICAgPG1zLWNoZWNrYm94IFxcbiAgICAgICAgOndpZGdldD1cXFwie1xcbiAgICAgICAgICAgIGNoZWNrZWQ6QHNlbGVjdGlvbi5pbmRleE9mKG9wdGlvbi52YWx1ZSkhPS0xLFxcbiAgICAgICAgICAgIGdyb3VwOnRydWUsXFxuICAgICAgICAgICAgb25DaGFuZ2U6ZnVuY3Rpb24oKXtcXG4gICAgICAgICAgICAgICAgQHRvZ2dsZU9wdGlvbihvcHRpb24pXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkaXNhYmxlZDonZGlzYWJsZWQnIGluIG9wdGlvbj9vcHRpb24uZGlzYWJsZWQ6QGRpc2FibGVkXFxuICAgICAgICB9XFxcIiBcXG4gICAgICAgIDpmb3I9XFxcIm9wdGlvbiBpbiBvcHRpb25zXFxcIj57e29wdGlvbi5sYWJlbH19PC9tcy1jaGVja2JveD5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1jaGVja2JveC9tcy1jaGVja2JveC1ncm91cC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgOmNsYXNzPVxcXCJAd3JhcHBlclxcXCIgY2xhc3M9XFxcImFuZS1jaGVja2JveFxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDA7IG1hcmdpbi1ib3R0b206IDA7XFxcIj5cXG4gICAgPGxhYmVsIGNsYXNzPVxcXCJhbmUtY2hlY2tib3gtaW5uZXIgYW5lLWNoZWNrYm94LWlubmVyLWllXFxcIj5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCJcXG4gICAgICAgICAgICA6Y2xhc3M9XFxcIltAaW5kZXRlcm1pbmF0ZT8nYW5lLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUnOicnXVxcXCJcXG4gICAgICAgICAgICA6YXR0cj1cXFwie2lkOkBoZWxwSWQsZGlzYWJsZWQ6QGRpc2FibGVkfVxcXCJcXG4gICAgICAgICAgICA6ZHVwbGV4LWNoZWNrZWQ9XFxcIkBjaGVja2VkXFxcIlxcbiAgICAgICAgICAgIGRhdGEtZHVwbGV4LWNoYW5nZWQ9XFxcIkBvbkNoYW5nZVxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHRcXFwiPjwvc3Bhbj5cXG4gICAgPC9sYWJlbD5cXG4gICAgPGxhYmVsIDphdHRyPVxcXCJ7J2Zvcic6QGhlbHBJZH1cXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6IDA7XFxcIiA6Y3NzPVxcXCJ7bWFyZ2luUmlnaHQ6QGdyb3VwPzg6MH1cXFwiPjxzbG90IC8+PC9sYWJlbD5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1jaGVja2JveC9tcy1jaGVja2JveC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsXFxcIiBzdHlsZT1cXFwib3ZlcmZsb3c6IGF1dG9cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1oZWFkZXJcXFwiIDp2aXNpYmxlPVxcXCJAdmlld01vZGUgPT09IDBcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXByZXYteWVhci1idG5cXFwiIDpjbGljaz1cXFwibXV0YXRlKCdzdWJ0cmFjdCcsIDEsICd5ZWFycycpXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYW5nbGUtZG91YmxlLWxlZnRcXFwiPjwvaT5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wcmV2LW1vbnRoLWJ0blxcXCIgOmNsaWNrPVxcXCJtdXRhdGUoJ3N1YnRyYWN0JywgMSwgJ21vbnRocycpXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYW5nbGUtbGVmdFxcXCI+PC9pPlxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPHNwYW4+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLW1vbnRoLXNlbGVjdFxcXCIgOmNsaWNrPVxcXCJAY2hhbmdlVmlldygxKVxcXCI+e3tAY3VycmVudE1vbnRofX08L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXllYXItc2VsZWN0XFxcIiA6Y2xpY2s9XFxcIkBjaGFuZ2VWaWV3KDIpXFxcIj57e0BjdXJyZW50WWVhcn19PC9hPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLW5leHQtbW9udGgtYnRuXFxcIiA6Y2xpY2s9XFxcIm11dGF0ZSgnYWRkJywgMSwgJ3llYXJzJylcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcXFwiPjwvaT5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1uZXh0LW1vbnRoLWJ0blxcXCIgOmNsaWNrPVxcXCJtdXRhdGUoJ2FkZCcsIDEsICdtb250aHMnKVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFuZ2xlLXJpZ2h0XFxcIj48L2k+XFxuICAgICAgICA8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1oZWFkZXJcXFwiIDp2aXNpYmxlPVxcXCJAdmlld01vZGUgPT09IDFcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXByZXYteWVhci1idG5cXFwiIDpjbGljaz1cXFwibXV0YXRlKCdzdWJ0cmFjdCcsIDEsICd5ZWFycycpXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYW5nbGUtZG91YmxlLWxlZnRcXFwiPjwvaT5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1tb250aC1zZWxlY3RcXFwiIDpjbGljaz1cXFwiQGNoYW5nZVZpZXcoMilcXFwiPnt7QGN1cnJlbnRZZWFyfX08L2E+XFxuICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItbmV4dC1tb250aC1idG5cXFwiIDpjbGljaz1cXFwibXV0YXRlKCdhZGQnLCAxLCAneWVhcnMnKVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFxcXCI+PC9pPlxcbiAgICAgICAgPC9hPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtaGVhZGVyXFxcIiA6dmlzaWJsZT1cXFwiQHZpZXdNb2RlID09PSAyXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wcmV2LXllYXItYnRuXFxcIiA6Y2xpY2s9XFxcIm11dGF0ZSgnc3VidHJhY3QnLCAxMCwgJ3llYXJzJylcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1hbmdsZS1kb3VibGUtbGVmdFxcXCI+PC9pPlxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPHNwYW4+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLW1vbnRoLXNlbGVjdFxcXCIgOmNsaWNrPVxcXCJAY2hhbmdlVmlldygzKVxcXCI+e3tAc3RhcnRPZkRlY2FkZSArICctJyArIChAc3RhcnRPZkRlY2FkZSArIDkpfX08L2E+XFxuICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItbmV4dC1tb250aC1idG5cXFwiIDpjbGljaz1cXFwibXV0YXRlKCdhZGQnLCAxMCwgJ3llYXJzJylcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcXFwiPjwvaT5cXG4gICAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLWhlYWRlclxcXCIgOnZpc2libGU9XFxcIkB2aWV3TW9kZSA9PT0gM1xcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcHJldi15ZWFyLWJ0blxcXCIgOmNsaWNrPVxcXCJtdXRhdGUoJ3N1YnRyYWN0JywgMTAwLCAneWVhcnMnKVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0XFxcIj48L2k+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8c3Bhbj57e0BzdGFydE9mQ2VudHVyeSArICctJyArIChAc3RhcnRPZkNlbnR1cnkgKyA5OSl9fTwvc3Bhbj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1uZXh0LW1vbnRoLWJ0blxcXCIgOmNsaWNrPVxcXCJtdXRhdGUoJ2FkZCcsIDEwMCwgJ3llYXJzJylcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcXFwiPjwvaT5cXG4gICAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLWhlYWRlclxcXCIgOnZpc2libGU9XFxcIkB2aWV3TW9kZSA8IDAgJiYgQHNob3dUaW1lXFxcIj5cXG4gICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1tb250aC1zZWxlY3RcXFwiPnt7QGN1cnJlbnRNb250aH19PC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1tb250aC1zZWxlY3RcXFwiPnt7QGN1cnJlbnREYXl9fTwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXIteWVhci1zZWxlY3RcXFwiPnt7QGN1cnJlbnRZZWFyfX08L2E+XFxuICAgICAgICA8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1ib2R5XFxcIiA6dmlzaWJsZT1cXFwiQHZpZXdNb2RlID09PSAwXFxcIj5cXG4gICAgICAgIDxtcy1jYWxlbmRhciA6d2lkZ2V0PVxcXCJ7dmFsdWU6QGN1cnJlbnREYXRlQXJyYXksc2hvd0hlYWRlcjpmYWxzZSxkaXNhYmxlZERhdGU6QGRpc2FibGVkRGF0ZSxvbkNoYW5nZTpAaGFuZGxlQ2FsZW5kYXJDaGFuZ2V9XFxcIj48L21zLWNhbGVuZGFyPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtYm9keVxcXCIgOnZpc2libGU9XFxcIkB2aWV3TW9kZSA+IDBcXFwiPlxcbiAgICAgICAgPG1zLWNhbGVuZGFyLXllYXItdmlldyA6d2lkZ2V0PVxcXCJ7Y3VycmVudE1vbnRoOkBjdXJyZW50TW9udGgsY3VycmVudFllYXI6QGN1cnJlbnRZZWFyLHZpZXc6QHZpZXdNb2RlLG9uU2VsZWN0OkBoYW5kbGVZZWFyVmlld1NlbGVjdH1cXFwiPjwvbXMtY2FsZW5kYXIteWVhci12aWV3PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtYm9keVxcXCIgOnZpc2libGU9XFxcIkB2aWV3TW9kZSA9PT0gLTFcXFwiPlxcbiAgICAgICAgPG1zLXRpbWVwaWNrZXItdmlldyA6d2lkZ2V0PVxcXCJ7dmFsdWU6QGN1cnJlbnREYXRlQXJyYXksb25DaGFuZ2U6QGhhbmRsZVRpbWVwaWNrZXJDaGFuZ2V9XFxcIj48L21zLXRpbWVwaWNrZXItdmlldz5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLWZvb3RlclxcXCIgOnZpc2libGU9XFxcIkB2aWV3TW9kZSA9PT0gMCAmJiAhQHNob3dUaW1lXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1mb290ZXItYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtdG9kYXktYnRuXFxcIiA6Y2xpY2s9XFxcIkB0b2RheVxcXCI+5LuK5aSpPC9hPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtZm9vdGVyXFxcIiA6dmlzaWJsZT1cXFwiQHZpZXdNb2RlIDw9IDAgJiYgQHNob3dUaW1lXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1mb290ZXItYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtbm93LWJ0blxcXCIgOmNsaWNrPVxcXCJAdG9kYXlcXFwiPuatpOWIuzwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtb2stYnRuXFxcIiA6Y2xpY2s9XFxcIkBjb21wbGV0ZVxcXCI+56Gu5a6aPC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC10aW1lcGlja2VyLWJ0blxcXCIgOmNsaWNrPVxcXCJAY2hhbmdlVmlldyhAdmlld01vZGUgPiAtMSA/IC0xIDogMClcXFwiPnt7QHZpZXdNb2RlID4gLTEgPyAn6YCJ5oup5pe26Ze0JyA6ICfpgInmi6nml6XmnJ8nfX08L2E+XFxuICAgICAgICA8L3NwYW4+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci1wYW5lbC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyXFxcIiA6Y3NzPVxcXCJ7d2lkdGg6QHdpZHRofVxcXCI+XFxuICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jYWxlbmRhciBhbmUtZGF0ZXBpY2tlci1pY29uXFxcIj48L2k+XFxuICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcy1jaXJjbGUgYW5lLWRhdGVwaWNrZXItY2xlYXJcXFwiIDppZj1cXFwiQHNlbGVjdGVkLmxlbmd0aFxcXCIgOmNsaWNrPVxcXCJAY2xlYXJcXFwiPjwvaT5cXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGFuZS1kYXRlcGlja2VyLWlucHV0XFxcIlxcbiAgICAgICAgOmNsaWNrPVxcXCJAaGFuZGxlQ2xpY2tcXFwiXFxuICAgICAgICByZWFkb25seVxcbiAgICAgICAgOmF0dHI9XFxcIntwbGFjZWhvbGRlcjpAcGxhY2Vob2xkZXJ9XFxcIlxcbiAgICAgICAgOmNzcz1cXFwie3dpZHRoOicxMDAlJ31cXFwiXFxuICAgICAgICA6ZHVwbGV4PVxcXCJzZWxlY3RlZFxcXCIgLz5cXG4gICAgPG1zLXRyaWdnZXIgOndpZGdldD1cXFwie1xcbiAgICAgICAgdmlzaWJsZTogQHBhbmVsVmlzaWJsZSxcXG4gICAgICAgIGlubmVyVm1JZDogQHBhbmVsVm1JZCxcXG4gICAgICAgIGlubmVyQ2xhc3M6IEBwYW5lbENsYXNzLFxcbiAgICAgICAgaW5uZXJUZW1wbGF0ZTogQHBhbmVsVGVtcGxhdGUsXFxuICAgICAgICB3aXRoSW5Cb3g6IEB3aXRoSW5Cb3gsXFxuICAgICAgICBnZXRUYXJnZXQ6IEBnZXRUYXJnZXQsXFxuICAgICAgICBvbkhpZGU6IEBoYW5kbGVQYW5lbEhpZGVcXG4gICAgfVxcXCI+XFxuICAgIDwvbXMtdHJpZ2dlcj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1kYXRlcGlja2VyL21zLWRhdGVwaWNrZXIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1xcXCIgOmNzcz1cXFwiW0BpbmxpbmUgJiYgQGlubGluZUZvcm1Hcm91cFN0eWxlXVxcXCIgOmNsYXNzPVxcXCJbQGNsYXNzTmFtZSwoQGhhc1J1bGVzICYmIEBkaXJ0eSA/IChAcmVhc29ucy5sZW5ndGggPyAnaGFzLWVycm9yJyA6ICdoYXMtc3VjY2VzcycpIDogJycpXVxcXCI+XFxuICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgOmlmPVxcXCJAbGFiZWwubGVuZ3RoXFxcIj57e0BsYWJlbH19PC9sYWJlbD5cXG4gICAgPHNsb3QgLz5cXG4gICAgPGkgY2xhc3M9XFxcImZvcm0tY29udHJvbC1mZWVkYmFja1xcXCIgOmlmPVxcXCJAaGFzUnVsZXMgJiYgQHNob3dJY29uXFxcIiA6Y2xhc3M9XFxcIlsoQGRpcnR5ID8gJ2dseXBoaWNvbicgOiAnJyksIChAcmVhc29ucy5sZW5ndGggPyAnZ2x5cGhpY29uLXJlbW92ZScgOiAnZ2x5cGhpY29uLW9rJyldXFxcIiA6dmlzaWJsZT1cXFwiQGRpcnR5XFxcIj48L2k+XFxuICAgIDxzbWFsbCBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCIgOmNzcz1cXFwiW0BpbmxpbmUgJiYgQGlubGluZU1lc3NhZ2VTdHlsZV1cXFwiIDppZj1cXFwiQGhhc1J1bGVzICYmIEByZWFzb25zLmxlbmd0aFxcXCI+e3tAcmVhc29ucy5sZW5ndGggPyBAcmVhc29uc1swXS5tZXNzYWdlIDogJyd9fTwvc21hbGw+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtZm9ybS9tcy1mb3JtLWl0ZW0uaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgXFxuICAgIDpkdXBsZXg9XFxcIkB0ZXh0XFxcIiBcXG4gICAgOmF0dHI9XFxcIntuYW1lOkBjb2wscGxhY2Vob2xkZXI6QHBsYWNlaG9sZGVyfVxcXCIgXFxuICAgIDpjc3M9XFxcInt3aWR0aDpAd2lkdGh9XFxcIlxcbiAgICBkYXRhLWR1cGxleC1jaGFuZ2VkPVxcXCJAaGFuZGxlQ2hhbmdlXFxcIj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1pbnB1dC9tcy1pbnB1dC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx1bCBjbGFzcz1cXFwiYW5lLW1lbnVcXFwiPlxcbiAgICA8bGkgOmNsYXNzPVxcXCJbXFxuICAgICAgICAgICAgICAgICAgICAhaXRlbS5jaGlsZHJlbiB8fCBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCA/ICdhbmUtbWVudS1pdGVtJyA6ICdhbmUtbWVudS1zdWJtZW51JyxcXG4gICAgICAgICAgICAgICAgICAgIEBvcGVuS2V5cy5jb250YWlucyhpdGVtLmtleSkgPyAnYW5lLW1lbnUtb3BlbicgOiAnJyxcXG4gICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZEtleXMuY29udGFpbnMoaXRlbS5rZXkpID8gJ2FuZS1tZW51LWl0ZW0tc2VsZWN0ZWQnIDogJydcXG4gICAgICAgICAgICAgICAgXVxcXCJcXG4gICAgICAgIDpmb3I9XFxcIml0ZW0gaW4gQG1lbnVcXFwiPlxcbiAgICAgICAgPGEgOmNsaWNrPVxcXCJoYW5kbGVDbGljayhpdGVtLCBpdGVtLmtleSwgW2l0ZW0ua2V5XSlcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6IDI0cHg7XFxcIj5cXG4gICAgICAgICAgICA8aSA6Y2xhc3M9XFxcIltpdGVtLmljb25dXFxcIj48L2k+XFxuICAgICAgICAgICAgPHNwYW4+e3tpdGVtLnRpdGxlfX08L3NwYW4+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImFuZS1tZW51LWNhcmV0IGZhXFxcIiA6Y2xhc3M9XFxcIltAb3BlbktleXMuY29udGFpbnMoaXRlbS5rZXkpID8gJ2ZhLWFuZ2xlLXVwJyA6ICdmYS1hbmdsZS1kb3duJ11cXFwiPjwvaT5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwiYW5lLW1lbnVcXFwiPlxcbiAgICAgICAgICAgIDxsaSA6Y2xhc3M9XFxcIltcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0yLmNoaWxkcmVuIHx8IGl0ZW0yLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCA/ICdhbmUtbWVudS1pdGVtJyA6ICdhbmUtbWVudS1zdWJtZW51JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBvcGVuS2V5cy5jb250YWlucyhpdGVtMi5rZXkpID8gJ2FuZS1tZW51LW9wZW4nIDogJycsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc2VsZWN0ZWRLZXlzLmNvbnRhaW5zKGl0ZW0yLmtleSkgPyAnYW5lLW1lbnUtaXRlbS1zZWxlY3RlZCcgOiAnJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXFxcIlxcbiAgICAgICAgICAgICAgICA6Zm9yPVxcXCJpdGVtMiBpbiBpdGVtLmNoaWxkcmVuXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgOmNsaWNrPVxcXCJoYW5kbGVDbGljayhpdGVtMiwgaXRlbTIua2V5LCBbaXRlbTIua2V5LGl0ZW0ua2V5XSlcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6IDQ4cHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7aXRlbTIudGl0bGV9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJhbmUtbWVudS1jYXJldCBmYVxcXCIgOmNsYXNzPVxcXCJbQG9wZW5LZXlzLmNvbnRhaW5zKGl0ZW0yLmtleSkgPyAnZmEtYW5nbGUtdXAnIDogJ2ZhLWFuZ2xlLWRvd24nXVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiYW5lLW1lbnVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpIDpjbGFzcz1cXFwiW1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtMy5jaGlsZHJlbiB8fCBpdGVtMy5jaGlsZHJlbi5sZW5ndGggPT09IDAgPyAnYW5lLW1lbnUtaXRlbScgOiAnYW5lLW1lbnUtc3VibWVudScsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkS2V5cy5jb250YWlucyhpdGVtMy5rZXkpID8gJ2FuZS1tZW51LWl0ZW0tc2VsZWN0ZWQnIDogJydcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmZvcj1cXFwiaXRlbTMgaW4gaXRlbTIuY2hpbGRyZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpjbGljaz1cXFwiaGFuZGxlQ2xpY2soaXRlbTMsIGl0ZW0zLmtleSwgW2l0ZW0zLmtleSxpdGVtMi5rZXksaXRlbS5rZXldKVxcXCIgc3R5bGU9XFxcInBhZGRpbmctbGVmdDogNzJweDtcXFwiPnt7aXRlbTMudGl0bGV9fTwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvbGk+XFxuPC91bD5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1tZW51L21zLW1lbnUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcbiAgICA8YSBjbGFzcz1cXFwiYnRuIGJsdWVcXFwiIDphdHRyPVxcXCJ7ZGlzYWJsZWQ6QGN1cnJlbnQ9PT0xfVxcXCIgOmNsaWNrPVxcXCJAcHJldlBhZ2VcXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImljb24tc3RlcC1iYWNrd2FyZFxcXCI+PC9pPuS4iuS4gOmhtVxcbiAgICA8L2E+XFxuICAgIDxhIGNsYXNzPVxcXCJidG4gc3VjY2Vzc1xcXCI+e3sgQGN1cnJlbnQgfX0ve3sgTWF0aC5jZWlsKEB0b3RhbC9AcGFnZVNpemUpIH19PC9hPlxcbiAgICA8YSBjbGFzcz1cXFwiYnRuIGJsdWVcXFwiIDphdHRyPVxcXCJ7ZGlzYWJsZWQ6QGN1cnJlbnQ9PT1NYXRoLmNlaWwoQHRvdGFsL0BwYWdlU2l6ZSl9XFxcIiA6Y2xpY2s9XFxcIkBuZXh0UGFnZVxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiaWNvbi1zdGVwLWZvcndhcmRcXFwiPjwvaT7kuIvkuIDpobVcXG4gICAgPC9hPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXBhZ2luYXRpb24vbXMtcGFnaW5hdGlvbi5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNoZWNrYm94LWdyb3VwXFxcIj5cXG4gICAgPG1zLXJhZGlvIFxcbiAgICAgICAgOndpZGdldD1cXFwie1xcbiAgICAgICAgICAgIGNoZWNrZWQ6QHNlbGVjdGVkLFxcbiAgICAgICAgICAgIHZhbHVlOm9wdGlvbi52YWx1ZSxcXG4gICAgICAgICAgICBuYW1lOkBoZWxwSWQsXFxuICAgICAgICAgICAgZ3JvdXA6dHJ1ZSxcXG4gICAgICAgICAgICBvbkNoYW5nZTpmdW5jdGlvbigpe1xcbiAgICAgICAgICAgICAgICBAdG9nZ2xlT3B0aW9uKGFyZ3VtZW50c1swXSwgb3B0aW9uKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGlzYWJsZWQ6J2Rpc2FibGVkJyBpbiBvcHRpb24/b3B0aW9uLmRpc2FibGVkOkBkaXNhYmxlZFxcbiAgICAgICAgfVxcXCIgXFxuICAgICAgICA6Zm9yPVxcXCJvcHRpb24gaW4gb3B0aW9uc1xcXCI+e3tvcHRpb24ubGFiZWx9fTwvbXMtcmFkaW8+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtcmFkaW8vbXMtcmFkaW8tZ3JvdXAuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IDpjbGFzcz1cXFwiQHdyYXBwZXJcXFwiIGNsYXNzPVxcXCJhbmUtcmFkaW9cXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAwOyBtYXJnaW4tYm90dG9tOiAwO1xcXCI+XFxuICAgIDxsYWJlbCBjbGFzcz1cXFwiYW5lLXJhZGlvLWlubmVyIGFuZS1yYWRpby1pbm5lci1pZVxcXCI+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiXFxuICAgICAgICAgICAgOmF0dHI9XFxcIntpZDpAaGVscElkLGRpc2FibGVkOkBkaXNhYmxlZCx2YWx1ZTpAdmFsdWUsbmFtZTpAbmFtZX1cXFwiXFxuICAgICAgICAgICAgOmR1cGxleD1cXFwiQGNoZWNrZWRcXFwiXFxuICAgICAgICAgICAgZGF0YS1kdXBsZXgtY2hhbmdlZD1cXFwiQG9uQ2hhbmdlXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dFxcXCI+PC9zcGFuPlxcbiAgICA8L2xhYmVsPlxcbiAgICA8bGFiZWwgOmF0dHI9XFxcInsnZm9yJzpAaGVscElkfVxcXCIgc3R5bGU9XFxcInBhZGRpbmctbGVmdDogMDtcXFwiIDpjc3M9XFxcInttYXJnaW5SaWdodDpAZ3JvdXA/ODowfVxcXCI+PHNsb3QgLz48L2xhYmVsPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXJhZGlvL21zLXJhZGlvLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBzdHlsZT1cXFwib3ZlcmZsb3c6IGF1dG9cXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcImFuZS1zZWxlY3QtZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImFuZS1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtXFxcIlxcbiAgICAgICAgICAgIDpjbGFzcz1cXFwiW1xcbiAgICAgICAgICAgICAgICAoQHNlbGVjdGlvbi5zb21lKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c1swXS52YWx1ZT09PW9wdGlvbi52YWx1ZX0pID8gJ2FuZS1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkJyA6ICcnKSxcXG4gICAgICAgICAgICAgICAgKG9wdGlvbi5kaXNhYmxlZCA/ICdhbmUtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZCcgOiAnJylcXG4gICAgICAgICAgICBdXFxcIlxcbiAgICAgICAgICAgIDpmb3I9XFxcIm9wdGlvbiBpbiBAZ2V0RmlsdGVyZWRPcHRpb25zKClcXFwiXFxuICAgICAgICAgICAgOmNsaWNrPVxcXCJAaGFuZGxlT3B0aW9uQ2xpY2soJGV2ZW50LCBvcHRpb24pXFxcIlxcbiAgICAgICAgICAgIHJvbGU9XFxcIm1lbnVpdGVtXFxcIj5cXG4gICAgICAgICAgICB7e29wdGlvbi5sYWJlbH19XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrXFxcIiA6dmlzaWJsZT1cXFwiQGlzTXVsdGlwbGVcXFwiPjwvaT5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImFuZS1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtIGFuZS1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXFxcIlxcbiAgICAgICAgICAgIDp2aXNpYmxlPVxcXCJAZ2V0RmlsdGVyZWRPcHRpb25zKCkubGVuZ3RoIDw9IDAgJiYgQHNlYXJjaFZhbHVlICYmICFAbG9hZGluZ1xcXCI+5peg5pWw5o2uPC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiYW5lLXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0gYW5lLXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRcXFwiXFxuICAgICAgICAgICAgOnZpc2libGU9XFxcIkBsb2FkaW5nXFxcIj7liqDovb3kuK08L2xpPlxcbiAgICA8L3VsPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3QtcGFuZWwuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhbmUtc2VsZWN0IGZvcm0tY29udHJvbFxcXCJcXG4gICAgOmNsYXNzPVxcXCJbKEBpc011bHRpcGxlID8gJ2FuZS1zZWxlY3QtbXVsdGlwbGUnIDogJycpXVxcXCJcXG4gICAgOmNzcz1cXFwie3dpZHRoOkB3aWR0aH1cXFwiXFxuICAgIDpjbGljaz1cXFwiQGhhbmRsZUNsaWNrXFxcIlxcbiAgICByb2xlPVxcXCJjb21ib2JveFxcXCJcXG4gICAgYXJpYS1hdXRvY29tcGxldGU9XFxcImxpc3RcXFwiXFxuICAgIGFyaWEtaGFzcG9wdXA9XFxcInRydWVcXFwiXFxuICAgIDphdHRyPVxcXCJ7J2FyaWEtZXhwYW5kZWQnOiBAcGFuZWxWaXNpYmxlICsgJyd9XFxcIj5cXG4gICAgPHVsIGNsYXNzPVxcXCJhbmUtc2VsZWN0LXNlbGVjdGlvblxcXCIgOmNsYXNzPVxcXCJbKEBpc011bHRpcGxlID8gJ2FuZS1zZWxlY3QtdGFncycgOiAnJyldXFxcIj5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiYW5lLXNlbGVjdC1zZWxlY3RlZFxcXCIgOnZpc2libGU9XFxcIiFAaXNNdWx0aXBsZSAmJiAoIUBzaG93U2VhcmNoIHx8ICFAcGFuZWxWaXNpYmxlKVxcXCI+e3tAZGlzcGxheVZhbHVlfX08L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJhbmUtc2VsZWN0LWNob2ljZVxcXCIgOmZvcj1cXFwiY2hvaWNlIGluIEBzZWxlY3Rpb25cXFwiPlxcbiAgICAgICAgICAgIDxzcGFuPnt7Y2hvaWNlLmxhYmVsfX08L3NwYW4+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzXFxcIiA6Y2xpY2s9XFxcIkByZW1vdmVTZWxlY3Rpb24oJGV2ZW50LCBjaG9pY2UpIHwgc3RvcFxcXCI+PC9pPlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiYW5lLXNlbGVjdC1zZWFyY2hcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiYW5lLXNlbGVjdC1zZWFyY2gtZmllbGRcXFwiXFxuICAgICAgICAgICAgICAgIG5hbWU9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiXFxuICAgICAgICAgICAgICAgIDpkdXBsZXg9XFxcIkBzZWFyY2hWYWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgOmNzcz1cXFwie3Zpc2liaWxpdHk6KEBzaG93U2VhcmNoICYmIEBwYW5lbFZpc2libGUpPyd2aXNpYmxlJzonaGlkZGVuJ31cXFwiXFxuICAgICAgICAgICAgICAgIDprZXlkb3duPVxcXCJAaGFuZGxlRGVsZXRlXFxcIiAvPlxcbiAgICAgICAgPC9saT5cXG4gICAgPC91bD5cXG4gICAgPGkgY2xhc3M9XFxcImZhIGFuZS1zZWxlY3QtYXJyb3dcXFwiXFxuICAgICAgICA6Y2xhc3M9XFxcIlsoQHBhbmVsVmlzaWJsZSA/ICdmYS1jYXJldC11cCcgOiAnZmEtY2FyZXQtZG93bicpXVxcXCJcXG4gICAgICAgIDp2aXNpYmxlPVxcXCJAbW9kZSA9PT0gJydcXFwiPjwvaT5cXG4gICAgPG1zLXRyaWdnZXIgOndpZGdldD1cXFwie1xcbiAgICAgICAgd2lkdGg6IEBwYW5lbFdpZHRoLFxcbiAgICAgICAgdmlzaWJsZTogQHBhbmVsVmlzaWJsZSxcXG4gICAgICAgIGlubmVyVm1JZDogQHBhbmVsVm1JZCxcXG4gICAgICAgIGlubmVyQ2xhc3M6IEBwYW5lbENsYXNzLFxcbiAgICAgICAgaW5uZXJUZW1wbGF0ZTogQHBhbmVsVGVtcGxhdGUsXFxuICAgICAgICB3aXRoSW5Cb3g6IEB3aXRoSW5Cb3gsXFxuICAgICAgICBnZXRUYXJnZXQ6IEBnZXRUYXJnZXQsXFxuICAgICAgICBvbkhpZGU6IEBoYW5kbGVQYW5lbEhpZGV9XFxcIj5cXG4gICAgPC9tcy10cmlnZ2VyPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3QuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiA6bG9hZGluZz1cXFwiIXdpbmRvdy5pc05hTihAcGFnaW5hdGlvbkNvbmZpZy50b3RhbCkgJiYgQGxvYWRpbmdcXFwiPlxcbiAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRoIDppZj1cXFwiQG5lZWRTZWxlY3Rpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPG1zLWNoZWNrYm94IDp3aWRnZXQ9XFxcIntjaGVja2VkOkBpc0FsbENoZWNrZWQsb25DaGFuZ2U6QGhhbmRsZUNoZWNrQWxsfVxcXCI+PC9tcy1jaGVja2JveD5cXG4gICAgICAgICAgICAgICAgPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIDpmb3I9XFxcImVsIGluIEBjb2x1bW5zXFxcIj57e2VsLnRpdGxlfX08L3RoPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgIDx0ciA6Zm9yPVxcXCIoJGluZGV4LCByZWNvcmQpIGluIEBnZXRDdXJyZW50UGFnZURhdGEoKVxcXCI+XFxuICAgICAgICAgICAgICAgIDx0ZCA6aWY9XFxcIkBuZWVkU2VsZWN0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxtcy1jaGVja2JveCA6d2lkZ2V0PVxcXCJ7Y2hlY2tlZDpAY2hlY2tlZC5pbmRleE9mKHJlY29yZFtAa2V5XSkhPS0xLG9uQ2hhbmdlOmZ1bmN0aW9uKCl7QGhhbmRsZUNoZWNrKGFyZ3VtZW50c1swXS50YXJnZXQuY2hlY2tlZCxyZWNvcmQpfX1cXFwiPjwvbXMtY2hlY2tib3g+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCA6Zm9yPVxcXCJjb2wgaW4gQGNvbHVtbnNcXFwiIDpodG1sPVxcXCJjb2wudGVtcGxhdGVcXFwiPjwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGJvZHk+XFxuICAgIDwvdGFibGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlxcbiAgICAgICAgPG1zLXBhZ2luYXRpb24gOndpZGdldD1cXFwie2N1cnJlbnQ6QHBhZ2luYXRpb25Db25maWcuY3VycmVudCxwYWdlU2l6ZTpAcGFnaW5hdGlvbkNvbmZpZy5wYWdlU2l6ZSx0b3RhbDpAdG90YWwsb25DaGFuZ2U6QGhhbmRsZVBhZ2VDaGFuZ2V9XFxcIj48L21zLXBhZ2luYXRpb24+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhcmZpeFxcXCI+PC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtdGFibGUvbXMtdGFibGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgXFxuICAgIDpkdXBsZXg9XFxcIkB0ZXh0XFxcIiBcXG4gICAgOmF0dHI9XFxcIntyb3dzOkByb3dzLG5hbWU6QGNvbH1cXFwiXFxuICAgIGRhdGEtZHVwbGV4LWNoYW5nZWQ9XFxcIkBoYW5kbGVDaGFuZ2VcXFwiPjwvdGV4dGFyZWE+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtdGV4dGFyZWEvbXMtdGV4dGFyZWEuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhbmUtdGltZXBpY2tlci12aWV3XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5lLXRpbWVwaWNrZXItdmlldy1jb21ib2JveFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtdGltZXBpY2tlci12aWV3LXNlbGVjdFxcXCIgbmFtZT1cXFwiaG91ci1vcHRpb25zXFxcIj5cXG4gICAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgICAgIDxsaSA6Zm9yPVxcXCJob3VyIGluIEBob3VyT3B0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyhob3VyPT1AY3VycmVudEhvdXI/J2FuZS10aW1lcGlja2VyLXZpZXctc2VsZWN0LW9wdGlvbi1zZWxlY3RlZCc6JycpXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGljaz1cXFwiQHNlbGVjdChob3VyLCAnaG91cicpXFxcIj57e2hvdXJ9fTwvbGk+XFxuICAgICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYW5lLXRpbWVwaWNrZXItdmlldy1zZWxlY3RcXFwiIG5hbWU9XFxcIm1pbnV0ZS1vcHRpb25zXFxcIj5cXG4gICAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgICAgIDxsaSA6Zm9yPVxcXCJtaW51dGUgaW4gQG1pbnV0ZU9wdGlvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsobWludXRlPT1AY3VycmVudE1pbnV0ZT8nYW5lLXRpbWVwaWNrZXItdmlldy1zZWxlY3Qtb3B0aW9uLXNlbGVjdGVkJzonJyldXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsaWNrPVxcXCJAc2VsZWN0KG1pbnV0ZSwgJ21pbnV0ZScpXFxcIj57e21pbnV0ZX19PC9saT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtdGltZXBpY2tlci12aWV3LXNlbGVjdFxcXCIgbmFtZT1cXFwic2Vjb25kLW9wdGlvbnNcXFwiPlxcbiAgICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICAgICAgPGxpIDpmb3I9XFxcInNlY29uZCBpbiBAc2Vjb25kT3B0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyhzZWNvbmQ9PUBjdXJyZW50U2Vjb25kPydhbmUtdGltZXBpY2tlci12aWV3LXNlbGVjdC1vcHRpb24tc2VsZWN0ZWQnOicnKV1cXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y2xpY2s9XFxcIkBzZWxlY3Qoc2Vjb25kLCAnc2Vjb25kJylcXFwiPnt7c2Vjb25kfX08L2xpPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlci9tcy10aW1lcGlja2VyLXZpZXcuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhbmUtdGltZXBpY2tlclxcXCIgOmNzcz1cXFwie3dpZHRoOkB3aWR0aH1cXFwiPlxcbiAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2xvY2stbyBhbmUtdGltZXBpY2tlci1pY29uXFxcIj48L2k+XFxuICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcy1jaXJjbGUgYW5lLXRpbWVwaWNrZXItY2xlYXJcXFwiIDppZj1cXFwiQHNlbGVjdGVkLmxlbmd0aFxcXCIgOmNsaWNrPVxcXCJAY2xlYXJcXFwiPjwvaT5cXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGFuZS10aW1lcGlja2VyLWlucHV0XFxcIlxcbiAgICAgICAgOmNsaWNrPVxcXCJAaGFuZGxlQ2xpY2tcXFwiXFxuICAgICAgICByZWFkb25seVxcbiAgICAgICAgOmF0dHI9XFxcIntwbGFjZWhvbGRlcjpAcGxhY2Vob2xkZXJ9XFxcIlxcbiAgICAgICAgOmNzcz1cXFwie3dpZHRoOicxMDAlJ31cXFwiXFxuICAgICAgICA6ZHVwbGV4PVxcXCJzZWxlY3RlZFxcXCIgLz5cXG4gICAgPG1zLXRyaWdnZXIgOndpZGdldD1cXFwie1xcbiAgICAgICAgdmlzaWJsZTogQHBhbmVsVmlzaWJsZSxcXG4gICAgICAgIGlubmVyVm1JZDogQHBhbmVsVm1JZCxcXG4gICAgICAgIGlubmVyQ2xhc3M6IEBwYW5lbENsYXNzLFxcbiAgICAgICAgaW5uZXJUZW1wbGF0ZTogQHBhbmVsVGVtcGxhdGUsXFxuICAgICAgICB3aXRoSW5Cb3g6IEB3aXRoSW5Cb3gsXFxuICAgICAgICBnZXRUYXJnZXQ6IEBnZXRUYXJnZXQsXFxuICAgICAgICBvbkhpZGU6IEBoYW5kbGVQYW5lbEhpZGVcXG4gICAgfVxcXCI+XFxuICAgIDwvbXMtdHJpZ2dlcj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy10aW1lcGlja2VyL21zLXRpbWVwaWNrZXIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dWwgY2xhc3M9XFxcImFuZS10cmVlXFxcIj5cXG4gICAgPGxpIDpmb3I9XFxcIihpbmRleCwgZWwpIGluIEB0cmVlIHwgZ2V0KDApXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhbmUtdHJlZS1pY29uIGZhXFxcIiA6Y2xhc3M9XFxcIltAY2hhbmdlSWNvbihlbCldXFxcIiA6Y2xpY2s9XFxcIkBvcGVuU3ViVHJlZShlbClcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIDppZj1cXFwiQGNoZWNrYWJsZVxcXCI+XFxuICAgICAgICAgICAgPG1zLWNoZWNrYm94IDp3aWRnZXQ9XFxcIntpbmRldGVybWluYXRlOkBpc0luZGV0ZXJtaW5hdGVkKGVsKSxjaGVja2VkOkBpc0NoZWNrZWQoZWwpLG9uQ2hhbmdlOmZ1bmN0aW9uKCl7aGFuZGxlQ2hlY2soZWwpfX1cXFwiPjwvbXMtY2hlY2tib3g+XFxuICAgICAgICA8L3NwYW4+XFxuICAgICAgICB7e2VsLnRpdGxlfX1cXG4gICAgICAgIDxkaXYgOnZpc2libGU9XFxcIkBpc0V4cGVuZGVkKGVsKVxcXCIgOmh0bWw9XFxcIkByZW5kZXJTdWJUcmVlKGVsKVxcXCI+PC9kaXY+XFxuICAgIDwvbGk+XFxuPC91bD5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy10cmVlL21zLXRyZWUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhbmUtdXBsb2FkLWNhcmRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtdXBsb2FkLWNhcmQtaXRlbVxcXCIgOmNsYXNzPVxcXCJbKGZpbGUuc3RhdHVzID09PSAnZXJyb3InID8gJ2JvcmRlcmVkLWRhbmdlcicgOiAnJyldXFxcIiA6Zm9yPVxcXCIoJGluZGV4LCBmaWxlKSBpbiBAZmlsZUxpc3RcXFwiPlxcbiAgICAgICAgPGltZyA6YXR0cj1cXFwie3NyYzpmaWxlLnVybCxhbHQ6ZmlsZS5uYW1lLHRpdGxlOmZpbGUubmFtZX1cXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImFuZS11cGxvYWQtY2FyZC1wcm9ncmVzc1xcXCIgOnZpc2libGU9XFxcImZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJ1xcXCI+5LiK5Lyg5LitIHt7ZmlsZS5wcm9ncmVzc319JTwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhbmUtdXBsb2FkLWNhcmQtdG9vbFxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWV5ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10cmFzaC1vXFxcIiA6Y2xpY2s9XFxcImRlbChmaWxlKVxcXCI+PC9pPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLWNhcmQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dWwgY2xhc3M9XFxcImFuZS11cGxvYWQtbGlzdFxcXCI+XFxuICAgIDxsaSA6Zm9yPVxcXCIoJGluZGV4LCBmaWxlKSBpbiBAZmlsZUxpc3RcXFwiXFxuICAgICAgICA6Y2xhc3M9XFxcIltAZ2V0VGV4dENsYXNzKGZpbGUpXVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtdXBsb2FkLWxpc3QtaW5mb1xcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWZpbGUtbyB0ZXh0LW11dGVkXFxcIj48L2k+XFxuICAgICAgICAgICAgPHNwYW4gOmF0dHI9XFxcInt0aXRsZTpmaWxlLm5hbWV9XFxcIj57e2ZpbGUubmFtZX19PC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXMgYW5lLXVwbG9hZC1idG4tY2xvc2VcXFwiIDpjbGljaz1cXFwiZGVsKGZpbGUpXFxcIj48L2k+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYW5lLXVwbG9hZC1saXN0LXByb2dyZXNzXFxcIiA6dmlzaWJsZT1cXFwiZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnXFxcIj7kuIrkvKDkuK0ge3tmaWxlLnByb2dyZXNzfX0lPC9zcGFuPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrLWNpcmNsZSB0ZXh0LXN1Y2Nlc3NcXFwiIDpjbGFzcz1cXFwiWyhmaWxlLnN0YXR1cyA9PT0gJ2RvbmUnID8gJycgOiAnaGlkZScpXVxcXCI+PC9pPlxcbiAgICA8L2xpPlxcbjwvdWw+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtdXBsb2FkL21zLXVwbG9hZC1saXN0Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYW5lLXVwbG9hZC1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtdXBsb2FkLWNhcmQtd2FsbFxcXCIgOmlmPVxcXCJAc2hvd1VwbG9hZExpc3QgJiYgQGxpc3RUeXBlPT09J3BpY3R1cmUtY2FyZCdcXFwiPlxcbiAgICAgICAgPG1zLXVwbG9hZC1jYXJkIDp3aWRnZXQ9XFxcIntmaWxlTGlzdDogQGZpbGVMaXN0LCBvblJlbW92ZTogQGhhbmRsZVJlbW92ZX1cXFwiPjwvbXMtdXBsb2FkLWNhcmQ+XFxuICAgIDwvZGl2PlxcbiAgICA8bGFiZWwgOnZpc2libGU9XFxcIiFAc2hvd1VwbG9hZExpc3QgJiYgQGxpc3RUeXBlPT09J3BpY3R1cmUtY2FyZCcgJiYgQGZpbGVMaXN0Lmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJhbmUtdXBsb2FkLWNhcmQtaXRlbVxcXCIgOmF0dHI9XFxcInsnZm9yJzpAaGVscElkfVxcXCI+XFxuICAgICAgICA8aW1nIDphdHRyPVxcXCJ7c3JjOkBmaWxlTGlzdFswXT9AZmlsZUxpc3RbMF0udXJsOmJsYW5rSW1nLGFsdDpAZmlsZUxpc3RbMF0/QGZpbGVMaXN0WzBdLm5hbWU6JycsdGl0bGU6QGZpbGVMaXN0WzBdP0BmaWxlTGlzdFswXS5uYW1lOicnfVxcXCI+XFxuICAgIDwvbGFiZWw+XFxuICAgIDxsYWJlbCA6dmlzaWJsZT1cXFwiQHNob3dVcGxvYWRMaXN0IHx8IEBmaWxlTGlzdC5sZW5ndGggPT0gMFxcXCIgOmNsYXNzPVxcXCJbKEBsaXN0VHlwZT09PSdwaWN0dXJlLWNhcmQnP0BjYXJkQ2xhc3M6QGJ0bkNsYXNzKV1cXFwiIDphdHRyPVxcXCJ7J2Zvcic6QGhlbHBJZH1cXFwiPjxzbG90IC8+PC9sYWJlbD5cXG4gICAgPGZvcm0+PGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIG5hbWU9XFxcImZpbGVcXFwiIDphdHRyPVxcXCJ7aWQ6QGhlbHBJZH1cXFwiPjwvZm9ybT5cXG4gICAgPGRpdiA6aWY9XFxcIkBzaG93VXBsb2FkTGlzdCAmJiBAbGlzdFR5cGUhPT0ncGljdHVyZS1jYXJkJ1xcXCI+XFxuICAgICAgICA8bXMtdXBsb2FkLWxpc3QgOndpZGdldD1cXFwie2ZpbGVMaXN0OiBAZmlsZUxpc3QsIG9uUmVtb3ZlOiBAaGFuZGxlUmVtb3ZlfVxcXCI+PC9tcy11cGxvYWQtbGlzdD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtdXBsb2FkL21zLXVwbG9hZC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwicmVxdWlyZSgnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnKTtcbnJlcXVpcmUoJ2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLmNzcycpO1xucmVxdWlyZSgnaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1saWdodC5jc3MnKTtcblxucmVxdWlyZSgnZXM1LXNoaW0nKTtcbnJlcXVpcmUoJ2VzNi1wcm9taXNlL2Rpc3QvZXM2LXByb21pc2UuYXV0bycpO1xuXG52YXIgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSBqUXVlcnk7XG5yZXF1aXJlKCdib290c3RyYXAnKTtcbnZhciBib290Ym94ID0gcmVxdWlyZSgnYm9vdGJveCcpO1xuYm9vdGJveC5zZXRMb2NhbGUoJ3poX0NOJyk7XG5cbnZhciBhdmFsb24gPSByZXF1aXJlKCdhdmFsb24yJyk7XG5hdmFsb24uY29uZmlnKHtcbiAgICBkZWJ1ZzogdHJ1ZVxufSk7XG5pZiAoYXZhbG9uLm1zaWUgPT09IDgpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBwcm9wZXJ0eSwgbWV0YSkge1xuICAgICAgICBvYmpbcHJvcGVydHldID0gbWV0YS52YWx1ZTtcbiAgICB9XG59XG5yZXF1aXJlKCdlczUtc2hpbS9lczUtc2hhbScpO1xucmVxdWlyZSgnLi9yb3V0ZXInKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvbXMtbGF5b3V0Jyk7XG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvZG9jLXNpZGViYXIvZG9jLXNpZGViYXInKTtcblxuYXZhbG9uLmRlZmluZSh7XG4gICAgJGlkOiAncm9vdCcsXG4gICAgY3VycmVudFBhZ2U6ICcnLFxuICAgIGJyZWFkY3J1bWI6IFtdXG59KTtcbmF2YWxvbi5oaXN0b3J5LnN0YXJ0KHtcbiAgICBmaXJlQW5jaG9yOiBmYWxzZVxufSk7XG5pZiAoIS8jIS8udGVzdChnbG9iYWwubG9jYXRpb24uaGFzaCkpIHtcbiAgICBhdmFsb24ucm91dGVyLm5hdmlnYXRlKCcvJywgMik7XG59XG5hdmFsb24uc2Nhbihkb2N1bWVudC5ib2R5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2RvY3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG1zLW1lbnUgOndpZGdldD1cXFwie21lbnU6QG1lbnUsb3BlbktleXM6QG9wZW5LZXlzLHNlbGVjdGVkS2V5czpAc2VsZWN0ZWRLZXlzLG9uQ2xpY2s6QGhhbmRsZU1lbnVDbGljayxvbk9wZW5DaGFuZ2U6QGhhbmRsZU9wZW5DaGFuZ2V9XFxcIj48L21zLW1lbnU+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2RvY3MvY29tcG9uZW50cy9kb2Mtc2lkZWJhci9kb2Mtc2lkZWJhci5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gdmVydHggKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSAzNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==