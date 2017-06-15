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
    template: __webpack_require__(242),
    defaults: {
        wrapper: 'checkbox',
        label: '',
        checked: false,
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
__webpack_require__(226);


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
    template: __webpack_require__(250),
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
    template: __webpack_require__(248),
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
__webpack_require__(222);
__webpack_require__(236);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_control_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(5);
__webpack_require__(26);
ms_control_1["default"].extend({
    displayName: 'ms-checkbox-group',
    template: __webpack_require__(241),
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_loading_directive_1 = __webpack_require__(217);
exports.Loading = ms_loading_directive_1.Loading;
__webpack_require__(201);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_control_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(5);
__webpack_require__(42);
ms_control_1["default"].extend({
    displayName: 'ms-radio-group',
    template: __webpack_require__(249),
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var moment = __webpack_require__(0);
var OPTION_HEIGHT = 24;
avalon.component('ms-timepicker-view', {
    template: __webpack_require__(255),
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(233);
__webpack_require__(205);


/***/ }),
/* 50 */
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
/* 51 */,
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
var navConfig = __webpack_require__(50);
__webpack_require__(192);
var stores_1 = __webpack_require__(182);
exports.name = 'doc-sidebar';
avalon.component(exports.name, {
    template: __webpack_require__(336),
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
__webpack_require__(334);
var stores_1 = __webpack_require__(182);
var navConfig = __webpack_require__(50);
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
                    resolve(__webpack_require__(340)("./" + item.location));
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
__webpack_require__(218);
__webpack_require__(208);
__webpack_require__(43);
__webpack_require__(214);
__webpack_require__(195);
var create_form_1 = __webpack_require__(194);
exports.createForm = create_form_1.createForm;
__webpack_require__(216);
__webpack_require__(224);
__webpack_require__(44);
__webpack_require__(227);
__webpack_require__(213);
__webpack_require__(225);
__webpack_require__(212);
__webpack_require__(45);
__webpack_require__(221);
__webpack_require__(47);
var ms_loading_1 = __webpack_require__(46);
exports.Loading = ms_loading_1.Loading;
var ms_notification_1 = __webpack_require__(220);
exports.notification = ms_notification_1["default"];
var ms_message_1 = __webpack_require__(219);
exports.message = ms_message_1["default"];


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var moment = __webpack_require__(0);
var ms_control_1 = __webpack_require__(4);
__webpack_require__(27);
__webpack_require__(210);
__webpack_require__(48);
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
    template: __webpack_require__(244),
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
        panelTemplate: __webpack_require__(243),
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
            var innerVm = avalon.define({
                $id: this.panelVmId,
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
                    this.$moment = self.selected ? moment(self.selected, self.format) : moment();
                    this.currentDay = this.$moment.date();
                    this.currentMonth = this.$moment.format('MMM');
                    this.currentYear = this.$moment.year();
                    this.currentDateArray = this.$moment.toArray().toString();
                    this.showTime = self.showTime;
                    // 构造不可选择日期的判断函数
                    if (self.startDate) {
                        this.$startDate = moment(self.startDate, self.format);
                    }
                    if (self.endDate) {
                        this.$endDate = moment(self.endDate, self.format);
                    }
                    if (self.startDate || self.endDate) {
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
                        this.disabledDate = self.disabledDate;
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
                    self.selected = this.$moment.format(self.format);
                    self.panelVisible = false;
                    self.handleChange({
                        target: { value: self.selected },
                        type: 'datepicker-changed'
                    });
                }
            });
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
var Schema = __webpack_require__(261);
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
__webpack_require__(204);
__webpack_require__(215);


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_control_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(5);
ms_control_1["default"].extend({
    displayName: 'ms-input',
    template: __webpack_require__(246),
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
    template: __webpack_require__(247),
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
var ane_util_1 = __webpack_require__(9);
var utils_1 = __webpack_require__(5);
ms_control_1["default"].extend({
    displayName: 'ms-select',
    template: __webpack_require__(252),
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
        panelTemplate: __webpack_require__(251),
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
            var innerVm = avalon.define({
                $id: this.panelVmId,
                selection: [],
                loading: false,
                isMultiple: this.isMultiple,
                options: this.options.toJSON(),
                searchValue: '',
                getFilteredOptions: function () {
                    return this.options.filter(this.filterFn);
                },
                filterFn: function (el) {
                    if (this.loading) {
                        return false;
                    }
                    if (self.remote) {
                        return true;
                    }
                    var reg = new RegExp(avalon.escapeRegExp(this.searchValue), 'i');
                    return reg.test(el.label) || reg.test(el.value);
                },
                handleOptionClick: function (e, option) {
                    if (option.disabled) {
                        return false;
                    }
                    if (self.isMultiple) {
                        if (this.selection.some(function (o) { return o.value === option.value; })) {
                            this.selection.removeAll(function (o) { return o.value === option.value; });
                        }
                        else {
                            this.selection.push(option);
                        }
                        self.focusSearch();
                    }
                    else {
                        this.selection = [option];
                        self.panelVisible = false;
                    }
                    var selection = this.selection.toJSON();
                    var value = selection.map(function (s) { return s.value; });
                    self.handleChange({
                        target: { value: self.isMultiple ? value : value[0] || '' },
                        type: 'select'
                    });
                    self.displayValue = option.label;
                    self.selection = selection;
                }
            });
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
var moment = __webpack_require__(0);
var ms_control_1 = __webpack_require__(4);
__webpack_require__(27);
__webpack_require__(48);
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
    template: __webpack_require__(256),
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
            var innerVm = avalon.define({
                $id: this.panelVmId,
                currentDateArray: '',
                $moment: moment(),
                reset: function () {
                    this.$moment = self.selected ? moment(self.selected, self.format) : moment();
                    this.currentDateArray = this.$moment.toArray().toString();
                },
                handleTimepickerChange: function (e) {
                    var _a = e.target, hour = _a.hour, minute = _a.minute, second = _a.second;
                    this.$moment.hour(hour).minute(minute).second(second);
                    this.currentDateArray = this.$moment.toArray().toString();
                    self.selected = this.$moment.format(self.format);
                    self.handleChange({
                        target: { value: self.selected },
                        type: 'timepicker-changed'
                    });
                }
            });
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

/// <reference path="../../typings/index.d.ts" />
exports.__esModule = true;
var ms_control_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(5);
__webpack_require__(229);
__webpack_require__(228);
var up_loader_1 = __webpack_require__(337);
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
    template: __webpack_require__(259),
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
/* 201 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var moment = __webpack_require__(0);
__webpack_require__(44);
__webpack_require__(211);
avalon.component('ms-calendar', {
    template: __webpack_require__(240),
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
/* 203 */
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
/* 204 */
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
/* 205 */
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
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var noty = __webpack_require__(180);
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
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var noty = __webpack_require__(180);
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
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
__webpack_require__(26);
__webpack_require__(223);
__webpack_require__(43);
var ane_util_1 = __webpack_require__(9);
__webpack_require__(46);
var defaultPagination = function () {
    return {
        current: 1, pageSize: 10, total: NaN, onChange: avalon.noop
    };
};
avalon.component('ms-table', {
    soleSlot: 'header',
    template: __webpack_require__(253),
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
/* 209 */
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
    template: __webpack_require__(254),
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
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(202);
__webpack_require__(230);


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var moment = __webpack_require__(0);
var monthTable = [];
avalon.component('ms-calendar-year-view', {
    template: __webpack_require__(239),
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
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(26);
__webpack_require__(45);
__webpack_require__(231);


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(193);
__webpack_require__(232);


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(203);


/***/ }),
/* 215 */
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
    template: __webpack_require__(245),
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
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(196);


/***/ }),
/* 217 */
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
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(234);
__webpack_require__(197);


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_message_1 = __webpack_require__(206);
exports["default"] = ms_message_1["default"];


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ms_notification_1 = __webpack_require__(207);
exports["default"] = ms_notification_1["default"];


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(42);
__webpack_require__(47);
__webpack_require__(235);


/***/ }),
/* 222 */
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
/* 223 */
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
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(209);


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(199);
__webpack_require__(237);


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
var domAlign = __webpack_require__(332);
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
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(200);
__webpack_require__(238);


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
avalon.component('ms-upload-card', {
    template: __webpack_require__(257),
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
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var avalon = __webpack_require__(1);
avalon.component('ms-upload-list', {
    template: __webpack_require__(258),
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
/* 230 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 231 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 232 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 233 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

module.exports = "<div class=\"ane-calendar\">\n    <table class=\"ane-calendar-year-view\">\n        <tbody>\n            <tr :for=\"（i, row) in @table\">\n                <td class=\"ane-calendar-cell\"\n                    :class=\"[\n                                (@isSelected(cell) ? 'ane-calendar-selected-day' : ''),\n                                (@view > 1 && (i + j === 0 || i * j === 6) ? 'ane-calendar-prev-month-cell' : '')\n                            ]\"\n                    :for=\"(j, cell) in row\">\n                    <div class=\"ane-calendar-date\" :click=\"@handleCellClick(cell)\">{{cell.label}}</div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-calendar\">\n    <div class=\"row\" ms-if=\"@showHeader\">\n        <div class=\"col-md-2 col-md-offset-4\">\n            <ms-select :widget=\"{value:[@currentYear],options:@currentYearOptions,onChange:@handleYearChange}\"></ms-select>\n        </div>\n        <div class=\"col-md-2\">\n            <ms-select :widget=\"{value:[@currentMonth],options:@monthOptions,onChange:@handleMonthChange}\"></ms-select>\n        </div>\n    </div>\n    <table>\n        <thead>\n            <tr>\n                <th class=\"ane-calendar-column-header\" :for=\"day in @weekdays\">{{day}}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr :for=\"week in @table\">\n                <td class=\"ane-calendar-cell\" :class=\"el.className\" :for=\"el in week\">\n                    <div class=\"ane-calendar-date\" :click=\"@handleDateClick(el) | stop\">{{el.date}}</div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkbox-group\">\n    <ms-checkbox \n        :widget=\"{\n            checked:@selection.indexOf(option.value)!=-1,\n            group:true,\n            onChange:function(){\n                @toggleOption(option)\n            },\n            disabled:'disabled' in option?option.disabled:@disabled\n        }\" \n        :for=\"option in options\">{{option.label}}</ms-checkbox>\n</div>"

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = "<div :class=\"@wrapper\" class=\"ane-checkbox\" style=\"margin-top: 0; margin-bottom: 0;\">\n    <label class=\"ane-checkbox-inner ane-checkbox-inner-ie\">\n        <input type=\"checkbox\"\n            :attr=\"{id:@helpId,disabled:@disabled}\"\n            :duplex-checked=\"@checked\"\n            data-duplex-changed=\"@onChange\"\n            />\n        <span class=\"text\"></span>\n    </label>\n    <label :attr=\"{'for':@helpId}\" style=\"padding-left: 0;\" :css=\"{marginRight:@group?8:0}\"><slot /></label>\n</div>"

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-datepicker-panel\" style=\"overflow: auto\">\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode === 0\">\n        <a class=\"ane-datepicker-prev-year-btn\" :click=\"mutate('subtract', 1, 'years')\">\n            <i class=\"fa fa-angle-double-left\"></i>\n        </a>\n        <a class=\"ane-datepicker-prev-month-btn\" :click=\"mutate('subtract', 1, 'months')\">\n            <i class=\"fa fa-angle-left\"></i>\n        </a>\n        <span>\n            <a class=\"ane-datepicker-month-select\" :click=\"@changeView(1)\">{{@currentMonth}}</a>\n            <a class=\"ane-datepicker-year-select\" :click=\"@changeView(2)\">{{@currentYear}}</a>\n        </span>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 1, 'years')\">\n            <i class=\"fa fa-angle-double-right\"></i>\n        </a>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 1, 'months')\">\n            <i class=\"fa fa-angle-right\"></i>\n        </a>\n    </div>\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode === 1\">\n        <a class=\"ane-datepicker-prev-year-btn\" :click=\"mutate('subtract', 1, 'years')\">\n            <i class=\"fa fa-angle-double-left\"></i>\n        </a>\n        <span>\n            <a class=\"ane-datepicker-month-select\" :click=\"@changeView(2)\">{{@currentYear}}</a>\n        </span>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 1, 'years')\">\n            <i class=\"fa fa-angle-double-right\"></i>\n        </a>\n    </div>\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode === 2\">\n        <a class=\"ane-datepicker-prev-year-btn\" :click=\"mutate('subtract', 10, 'years')\">\n            <i class=\"fa fa-angle-double-left\"></i>\n        </a>\n        <span>\n            <a class=\"ane-datepicker-month-select\" :click=\"@changeView(3)\">{{@startOfDecade + '-' + (@startOfDecade + 9)}}</a>\n        </span>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 10, 'years')\">\n            <i class=\"fa fa-angle-double-right\"></i>\n        </a>\n    </div>\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode === 3\">\n        <a class=\"ane-datepicker-prev-year-btn\" :click=\"mutate('subtract', 100, 'years')\">\n            <i class=\"fa fa-angle-double-left\"></i>\n        </a>\n        <span>{{@startOfCentury + '-' + (@startOfCentury + 99)}}</span>\n        <a class=\"ane-datepicker-next-month-btn\" :click=\"mutate('add', 100, 'years')\">\n            <i class=\"fa fa-angle-double-right\"></i>\n        </a>\n    </div>\n    <div class=\"ane-datepicker-panel-header\" :visible=\"@viewMode < 0 && @showTime\">\n        <span>\n            <a class=\"ane-datepicker-month-select\">{{@currentMonth}}</a>\n            <a class=\"ane-datepicker-month-select\">{{@currentDay}}</a>\n            <a class=\"ane-datepicker-year-select\">{{@currentYear}}</a>\n        </span>\n    </div>\n    <div class=\"ane-datepicker-panel-body\" :visible=\"@viewMode === 0\">\n        <ms-calendar :widget=\"{value:@currentDateArray,showHeader:false,disabledDate:@disabledDate,onChange:@handleCalendarChange}\"></ms-calendar>\n    </div>\n    <div class=\"ane-datepicker-panel-body\" :visible=\"@viewMode > 0\">\n        <ms-calendar-year-view :widget=\"{currentMonth:@currentMonth,currentYear:@currentYear,view:@viewMode,onSelect:@handleYearViewSelect}\"></ms-calendar-year-view>\n    </div>\n    <div class=\"ane-datepicker-panel-body\" :visible=\"@viewMode === -1\">\n        <ms-timepicker-view :widget=\"{value:@currentDateArray,onChange:@handleTimepickerChange}\"></ms-timepicker-view>\n    </div>\n    <div class=\"ane-datepicker-panel-footer\" :visible=\"@viewMode === 0 && !@showTime\">\n        <span class=\"ane-datepicker-panel-footer-btn\">\n            <a class=\"ane-datepicker-panel-today-btn\" :click=\"@today\">今天</a>\n        </span>\n    </div>\n    <div class=\"ane-datepicker-panel-footer\" :visible=\"@viewMode <= 0 && @showTime\">\n        <span class=\"ane-datepicker-panel-footer-btn\">\n            <a class=\"ane-datepicker-panel-now-btn\" :click=\"@today\">此刻</a>\n            <a class=\"ane-datepicker-panel-ok-btn\" :click=\"@complete\">确定</a>\n            <a class=\"ane-datepicker-panel-timepicker-btn\" :click=\"@changeView(@viewMode > -1 ? -1 : 0)\">{{@viewMode > -1 ? '选择时间' : '选择日期'}}</a>\n        </span>\n    </div>\n</div>"

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-datepicker\" :css=\"{width:@width}\">\n    <i class=\"fa fa-calendar ane-datepicker-icon\"></i>\n    <i class=\"fa fa-times-circle ane-datepicker-clear\" :if=\"@selected.length\" :click=\"@clear\"></i>\n    <input type=\"text\"\n        class=\"form-control ane-datepicker-input\"\n        :click=\"@handleClick\"\n        readonly\n        :attr=\"{placeholder:@placeholder}\"\n        :css=\"{width:'100%'}\"\n        :duplex=\"selected\" />\n    <ms-trigger :widget=\"{\n        visible: @panelVisible,\n        innerVmId: @panelVmId,\n        innerClass: @panelClass,\n        innerTemplate: @panelTemplate,\n        withInBox: @withInBox,\n        getTarget: @getTarget,\n        onHide: @handlePanelHide\n    }\">\n    </ms-trigger>\n</div>"

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group has-feedback\" :css=\"[@inline && @inlineFormGroupStyle]\" :class=\"[@className,(@hasRules && @dirty ? (@reasons.length ? 'has-error' : 'has-success') : '')]\">\n    <label class=\"control-label\" :if=\"@label.length\">{{@label}}</label>\n    <slot />\n    <i class=\"form-control-feedback\" :if=\"@hasRules && @showIcon\" :class=\"[(@dirty ? 'glyphicon' : ''), (@reasons.length ? 'glyphicon-remove' : 'glyphicon-ok')]\" :visible=\"@dirty\"></i>\n    <small class=\"help-block\" :css=\"[@inline && @inlineMessageStyle]\" :if=\"@hasRules && @reasons.length\">{{@reasons.length ? @reasons[0].message : ''}}</small>\n</div>"

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"form-control\" \n    :duplex=\"@text\" \n    :attr=\"{name:@col,placeholder:@placeholder}\" \n    :css=\"{width:@width}\"\n    data-duplex-changed=\"@handleChange\">"

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"ane-menu\">\n    <li :class=\"[\n                    !item.children || item.children.length === 0 ? 'ane-menu-item' : 'ane-menu-submenu',\n                    @openKeys.contains(item.key) ? 'ane-menu-open' : '',\n                    @selectedKeys.contains(item.key) ? 'ane-menu-item-selected' : ''\n                ]\"\n        :for=\"item in @menu\">\n        <a :click=\"handleClick(item, item.key, [item.key])\" style=\"padding-left: 24px;\">\n            <i :class=\"[item.icon]\"></i>\n            <span>{{item.title}}</span>\n            <i class=\"ane-menu-caret fa\" :class=\"[@openKeys.contains(item.key) ? 'fa-angle-up' : 'fa-angle-down']\"></i>\n        </a>\n        <ul class=\"ane-menu\">\n            <li :class=\"[\n                            !item2.children || item2.children.length === 0 ? 'ane-menu-item' : 'ane-menu-submenu',\n                                @openKeys.contains(item2.key) ? 'ane-menu-open' : '',\n                                @selectedKeys.contains(item2.key) ? 'ane-menu-item-selected' : ''\n                            ]\"\n                :for=\"item2 in item.children\">\n                <a :click=\"handleClick(item2, item2.key, [item2.key,item.key])\" style=\"padding-left: 48px;\">\n                    <span>{{item2.title}}</span>\n                    <i class=\"ane-menu-caret fa\" :class=\"[@openKeys.contains(item2.key) ? 'fa-angle-up' : 'fa-angle-down']\"></i>\n                </a>\n                <ul class=\"ane-menu\">\n                    <li :class=\"[\n                                    !item3.children || item3.children.length === 0 ? 'ane-menu-item' : 'ane-menu-submenu',\n                                    @selectedKeys.contains(item3.key) ? 'ane-menu-item-selected' : ''\n                                ]\"\n                        :for=\"item3 in item2.children\">\n                        <a :click=\"handleClick(item3, item3.key, [item3.key,item2.key,item.key])\" style=\"padding-left: 72px;\">{{item3.title}}</a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </li>\n</ul>"

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\">\n    <a class=\"btn blue\" :attr=\"{disabled:@current===1}\" :click=\"@prevPage\">\n        <i class=\"icon-step-backward\"></i>上一页\n    </a>\n    <a class=\"btn success\">{{ @current }}/{{ Math.ceil(@total/@pageSize) }}</a>\n    <a class=\"btn blue\" :attr=\"{disabled:@current===Math.ceil(@total/@pageSize)}\" :click=\"@nextPage\">\n        <i class=\"icon-step-forward\"></i>下一页\n    </a>\n</div>"

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkbox-group\">\n    <ms-radio \n        :widget=\"{\n            checked:@selected,\n            value:option.value,\n            name:@helpId,\n            group:true,\n            onChange:function(){\n                @toggleOption(arguments[0], option)\n            },\n            disabled:'disabled' in option?option.disabled:@disabled\n        }\" \n        :for=\"option in options\">{{option.label}}</ms-radio>\n</div>"

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = "<div :class=\"@wrapper\" class=\"ane-radio\" style=\"margin-top: 0; margin-bottom: 0;\">\n    <label class=\"ane-radio-inner ane-radio-inner-ie\">\n        <input type=\"radio\"\n            :attr=\"{id:@helpId,disabled:@disabled,value:@value,name:@name}\"\n            :duplex=\"@checked\"\n            data-duplex-changed=\"@onChange\"\n            />\n        <span class=\"text\"></span>\n    </label>\n    <label :attr=\"{'for':@helpId}\" style=\"padding-left: 0;\" :css=\"{marginRight:@group?8:0}\"><slot /></label>\n</div>"

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: auto\">\n    <ul class=\"ane-select-dropdown-menu\" role=\"menu\">\n        <li class=\"ane-select-dropdown-menu-item\"\n            :class=\"[\n                (@selection.some(function(){return arguments[0].value===option.value}) ? 'ane-select-dropdown-menu-item-selected' : ''),\n                (option.disabled ? 'ane-select-dropdown-menu-item-disabled' : '')\n            ]\"\n            :for=\"option in @getFilteredOptions()\"\n            :click=\"@handleOptionClick($event, option)\"\n            role=\"menuitem\">\n            {{option.label}}\n            <i class=\"fa fa-check\" :visible=\"@isMultiple\"></i>\n        </li>\n        <li class=\"ane-select-dropdown-menu-item ane-select-dropdown-menu-item-disabled\"\n            :visible=\"@getFilteredOptions().length <= 0 && @searchValue && !@loading\">无数据</li>\n        <li class=\"ane-select-dropdown-menu-item ane-select-dropdown-menu-item-disabled\"\n            :visible=\"@loading\">加载中</li>\n    </ul>\n</div>"

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-select form-control\"\n    :class=\"[(@isMultiple ? 'ane-select-multiple' : '')]\"\n    :css=\"{width:@width}\"\n    :click=\"@handleClick\"\n    role=\"combobox\"\n    aria-autocomplete=\"list\"\n    aria-haspopup=\"true\"\n    :attr=\"{'aria-expanded': @panelVisible + ''}\">\n    <ul class=\"ane-select-selection\" :class=\"[(@isMultiple ? 'ane-select-tags' : '')]\">\n        <li class=\"ane-select-selected\" :visible=\"!@isMultiple && (!@showSearch || !@panelVisible)\">{{@displayValue}}</li>\n        <li class=\"ane-select-choice\" :for=\"choice in @selection\">\n            <span>{{choice.label}}</span>\n            <i class=\"fa fa-times\" :click=\"@removeSelection($event, choice) | stop\"></i>\n        </li>\n        <li class=\"ane-select-search\">\n            <input class=\"ane-select-search-field\"\n                name=\"search\"\n                type=\"text\"\n                autocomplete=\"off\"\n                :duplex=\"@searchValue\"\n                :css=\"{visibility:(@showSearch && @panelVisible)?'visible':'hidden'}\"\n                :keydown=\"@handleDelete\" />\n        </li>\n    </ul>\n    <i class=\"fa ane-select-arrow\"\n        :class=\"[(@panelVisible ? 'fa-caret-up' : 'fa-caret-down')]\"\n        :visible=\"@mode === ''\"></i>\n    <ms-trigger :widget=\"{\n        width: @panelWidth,\n        visible: @panelVisible,\n        innerVmId: @panelVmId,\n        innerClass: @panelClass,\n        innerTemplate: @panelTemplate,\n        withInBox: @withInBox,\n        getTarget: @getTarget,\n        onHide: @handlePanelHide}\">\n    </ms-trigger>\n</div>"

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class=\"table\" :loading=\"!window.isNaN(@paginationConfig.total) && @loading\">\n        <thead>\n            <tr>\n                <th :if=\"@needSelection\">\n                    <ms-checkbox :widget=\"{checked:@isAllChecked,onChange:@handleCheckAll}\"></ms-checkbox>\n                </th>\n                <th :for=\"el in @columns\">{{el.title}}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr :for=\"($index, record) in @getCurrentPageData()\">\n                <td :if=\"@needSelection\">\n                    <ms-checkbox :widget=\"{checked:@checked.indexOf(record[@key])!=-1,onChange:function(){@handleCheck(arguments[0].target.checked,record)}}\"></ms-checkbox>\n                </td>\n                <td :for=\"col in @columns\" :html=\"col.template\"></td>\n            </tr>\n        </tbody>\n    </table>\n    <div class=\"pull-right\">\n        <ms-pagination :widget=\"{current:@paginationConfig.current,pageSize:@paginationConfig.pageSize,total:@total,onChange:@handlePageChange}\"></ms-pagination>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>"

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = "<textarea class=\"form-control\" \n    :duplex=\"@text\" \n    :attr=\"{rows:@rows,name:@col}\"\n    data-duplex-changed=\"@handleChange\"></textarea>"

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-timepicker-view\">\n    <div class=\"ane-timepicker-view-combobox\">\n        <div class=\"ane-timepicker-view-select\" name=\"hour-options\">\n            <ul>\n                <li :for=\"hour in @hourOptions\"\n                    :class=\"[(hour==@currentHour?'ane-timepicker-view-select-option-selected':'')]\"\n                    :click=\"@select(hour, 'hour')\">{{hour}}</li>\n            </ul>\n        </div>\n        <div class=\"ane-timepicker-view-select\" name=\"minute-options\">\n            <ul>\n                <li :for=\"minute in @minuteOptions\"\n                    :class=\"[(minute==@currentMinute?'ane-timepicker-view-select-option-selected':'')]\"\n                    :click=\"@select(minute, 'minute')\">{{minute}}</li>\n            </ul>\n        </div>\n        <div class=\"ane-timepicker-view-select\" name=\"second-options\">\n            <ul>\n                <li :for=\"second in @secondOptions\"\n                    :class=\"[(second==@currentSecond?'ane-timepicker-view-select-option-selected':'')]\"\n                    :click=\"@select(second, 'second')\">{{second}}</li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-timepicker\" :css=\"{width:@width}\">\n    <i class=\"fa fa-clock-o ane-timepicker-icon\"></i>\n    <i class=\"fa fa-times-circle ane-timepicker-clear\" :if=\"@selected.length\" :click=\"@clear\"></i>\n    <input type=\"text\"\n        class=\"form-control ane-timepicker-input\"\n        :click=\"@handleClick\"\n        readonly\n        :attr=\"{placeholder:@placeholder}\"\n        :css=\"{width:'100%'}\"\n        :duplex=\"selected\" />\n    <ms-trigger :widget=\"{\n        visible: @panelVisible,\n        innerVmId: @panelVmId,\n        innerClass: @panelClass,\n        innerTemplate: @panelTemplate,\n        withInBox: @withInBox,\n        getTarget: @getTarget,\n        onHide: @handlePanelHide\n    }\">\n    </ms-trigger>\n</div>"

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-upload-card\">\n    <div class=\"ane-upload-card-item\" :class=\"[(file.status === 'error' ? 'bordered-danger' : '')]\" :for=\"($index, file) in @fileList\">\n        <img :attr=\"{src:file.url,alt:file.name,title:file.name}\">\n        <span class=\"ane-upload-card-progress\" :visible=\"file.status === 'uploading'\">上传中 {{file.progress}}%</span>\n        <span class=\"ane-upload-card-tool\">\n            <i class=\"fa fa-eye\"></i>\n            <i class=\"fa fa-trash-o\" :click=\"del(file)\"></i>\n        </span>\n    </div>\n</div>"

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"ane-upload-list\">\n    <li :for=\"($index, file) in @fileList\"\n        :class=\"[@getTextClass(file)]\">\n        <div class=\"ane-upload-list-info\">\n            <i class=\"fa fa-file-o text-muted\"></i>\n            <span :attr=\"{title:file.name}\">{{file.name}}</span>\n        </div>\n        <i class=\"fa fa-times ane-upload-btn-close\" :click=\"del(file)\"></i>\n        <span class=\"ane-upload-list-progress\" :visible=\"file.status === 'uploading'\">上传中 {{file.progress}}%</span>\n        <i class=\"fa fa-check-circle text-success\" :class=\"[(file.status === 'done' ? '' : 'hide')]\"></i>\n    </li>\n</ul>"

/***/ }),
/* 259 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ane-upload-container\">\n    <div class=\"ane-upload-card-wall\" :if=\"@showUploadList && @listType==='picture-card'\">\n        <ms-upload-card :widget=\"{fileList: @fileList, onRemove: @handleRemove}\"></ms-upload-card>\n    </div>\n    <label :visible=\"!@showUploadList && @listType==='picture-card' && @fileList.length > 0\" class=\"ane-upload-card-item\" :attr=\"{'for':@helpId}\">\n        <img :attr=\"{src:@fileList[0]?@fileList[0].url:blankImg,alt:@fileList[0]?@fileList[0].name:'',title:@fileList[0]?@fileList[0].name:''}\">\n    </label>\n    <label :visible=\"@showUploadList || @fileList.length == 0\" :class=\"[(@listType==='picture-card'?@cardClass:@btnClass)]\" :attr=\"{'for':@helpId}\"><slot /></label>\n    <form><input type=\"file\" name=\"file\" :attr=\"{id:@helpId}\"></form>\n    <div :if=\"@showUploadList && @listType!=='picture-card'\">\n        <ms-upload-list :widget=\"{fileList: @fileList, onRemove: @handleRemove}\"></ms-upload-list>\n    </div>\n</div>"

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);

__webpack_require__(185);
__webpack_require__(186);

var jQuery = __webpack_require__(14);
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
__webpack_require__(49);
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
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
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
/* 336 */
/***/ (function(module, exports) {

module.exports = "<ms-menu :widget=\"{menu:@menu,openKeys:@openKeys,selectedKeys:@selectedKeys,onClick:@handleMenuClick,onOpenChange:@handleOpenChange}\"></ms-menu>"

/***/ }),
/* 337 */,
/* 338 */,
/* 339 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[260]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZm9ybS9tcy1jb250cm9sLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZm9ybS91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9hbmUtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWNoZWNrYm94L21zLWNoZWNrYm94LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdHJpZ2dlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXJhZGlvL21zLXJhZGlvLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtcGFnaW5hdGlvbi9tcy1wYWdpbmF0aW9uLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtc2VsZWN0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvbXMtY2hlY2tib3gtZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1sb2FkaW5nL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtcmFkaW8vbXMtcmFkaW8tZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy10aW1lcGlja2VyL21zLXRpbWVwaWNrZXItdmlldy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWxheW91dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9kb2NzL25hdi5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9zdG9yZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9jb21wb25lbnRzL2RvYy1zaWRlYmFyL2RvYy1zaWRlYmFyLnRzIiwid2VicGFjazovLy8uL2RvY3Mvcm91dGVyLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZGF0ZXBpY2tlci9tcy1kYXRlcGlja2VyLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZm9ybS9jcmVhdGUtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWZvcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1pbnB1dC9tcy1pbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLW1lbnUvbXMtbWVudS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy10aW1lcGlja2VyL21zLXRpbWVwaWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbG9hZGluZy9tcy1sb2FkaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1jYWxlbmRhci9tcy1jYWxlbmRhci50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWRpYWxvZy9tcy1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1mb3JtL21zLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1sYXlvdXQvbXMtbGF5b3V0LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbWVzc2FnZS9tcy1tZXNzYWdlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbm90aWZpY2F0aW9uL21zLW5vdGlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRhYmxlL21zLXRhYmxlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdGV4dGFyZWEvbXMtdGV4dGFyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1jYWxlbmRhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWNhbGVuZGFyL21zLWNhbGVuZGFyLXllYXItdmlldy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWNoZWNrYm94L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZGF0ZXBpY2tlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWRpYWxvZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWZvcm0vbXMtZm9ybS1pdGVtLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtaW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1sb2FkaW5nL21zLWxvYWRpbmctZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtbWVudS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLW1lc3NhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1ub3RpZmljYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1yYWRpby9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3Qtb3B0aW9uLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdGFibGUvbXMtdGFibGUtaGVhZGVyLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdGV4dGFyZWEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy10aW1lcGlja2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdHJpZ2dlci9tcy10cmlnZ2VyLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdXBsb2FkL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdXBsb2FkL21zLXVwbG9hZC1jYXJkLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdXBsb2FkL21zLXVwbG9hZC1saXN0LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtY2FsZW5kYXIvbXMtY2FsZW5kYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWNoZWNrYm94L21zLWNoZWNrYm94LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1kYXRlcGlja2VyL21zLWRhdGVwaWNrZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWxheW91dC9tcy1sYXlvdXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLW1lbnUvbXMtbWVudS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtcmFkaW8vbXMtcmFkaW8uc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdXBsb2FkL21zLXVwbG9hZC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtY2FsZW5kYXIvbXMtY2FsZW5kYXIteWVhci12aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1jYWxlbmRhci9tcy1jYWxlbmRhci5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvbXMtY2hlY2tib3gtZ3JvdXAuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWNoZWNrYm94L21zLWNoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1kYXRlcGlja2VyL21zLWRhdGVwaWNrZXItcGFuZWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtZm9ybS9tcy1mb3JtLWl0ZW0uaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLWlucHV0L21zLWlucHV0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1tZW51L21zLW1lbnUuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXBhZ2luYXRpb24vbXMtcGFnaW5hdGlvbi5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtcmFkaW8vbXMtcmFkaW8tZ3JvdXAuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXJhZGlvL21zLXJhZGlvLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1zZWxlY3QvbXMtc2VsZWN0LXBhbmVsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy1zZWxlY3QvbXMtc2VsZWN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy10YWJsZS9tcy10YWJsZS5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdGV4dGFyZWEvbXMtdGV4dGFyZWEuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci12aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy10aW1lcGlja2VyL21zLXRpbWVwaWNrZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21zLXVwbG9hZC9tcy11cGxvYWQtY2FyZC5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbXMtdXBsb2FkL21zLXVwbG9hZC1saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kb2NzL2NvbXBvbmVudHMvZG9jLXNpZGViYXIvZG9jLXNpZGViYXIuaHRtbCIsIndlYnBhY2s6Ly8vdmVydHggKGlnbm9y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QUEwRixxQkFBcUIsMEQ7Ozs7OztBQ0EvRyxzWkFBc1osTUFBTSxxV0FBcVcsUUFBUSxxV0FBcVcsUUFBUSw2RDs7Ozs7O0FDQXRuQyx3REFBd0QsYUFBYSwyVEFBMlQseUJBQXlCLG9CQUFvQixhQUFhLGdFQUFnRSxvUEFBb1AsK0I7Ozs7OztBQ0E5dUIsd05BQXdOLDJDQUEyQyxxR0FBcUcsZUFBZSx3TTs7Ozs7O0FDQXZYLDJRQUEyUSxnQkFBZ0IsS0FBSyxXQUFXLDBNQUEwTSxlQUFlLDBJOzs7Ozs7QUNBcGdCLDJMQUEyTCw2Q0FBNkMseUtBQXlLLGNBQWMsMkJBQTJCLHlIQUF5SCw0SkFBNEosY0FBYywyRUFBMkUsV0FBVyxnSEFBZ0gsNkNBQTZDLHlDOzs7Ozs7OENDQWg5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxzQ0FBc0MsaUhBQWlILGM7Ozs7Ozs7O0FDQXZKLGUiLCJmaWxlIjoiYXBwYTkzODMwYzdkODU4MmU0OTdkZGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJpbmRleFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpbmRleFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgeyBmaW5kUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBhdmFsb24uY29tcG9uZW50KCdtcy1jb250cm9sJywge1xuICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICAkZm9ybUl0ZW06IG51bGwsXG4gICAgICAgICRydWxlczogbnVsbCxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBjb2w6ICcnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgIHdpZHRoOiAneCcsXG4gICAgICAgIG9uQ2hhbmdlOiBhdmFsb24ubm9vcCxcbiAgICAgICAgZW1pdFZhbHVlKGUpIHtcbiAgICAgICAgICAgIGxldCB2ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLiRmb3JtSXRlbSAmJiB0aGlzLiRmb3JtSXRlbS5vbkZvcm1DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuY29sLCB2YWx1ZTogdiwgZGVueVZhbGlkYXRlOiBlLmRlbnlWYWxpZGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRWYWx1ZShlKTtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoZSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWZvcm0vbXMtY29udHJvbC50cyIsImltcG9ydCB7IGZpbmRQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0VG9Gb3JtSXRlbSh2bW9kZWwsIG9wdGlvbnMgPSB7fSk6IHZvaWQge1xuICAgIHZtb2RlbC4kZm9ybUl0ZW0gPSBmaW5kUGFyZW50Q29tcG9uZW50KHZtb2RlbCwgJ21zLWZvcm0taXRlbScpO1xuICAgIGlmICh2bW9kZWwuJGZvcm1JdGVtID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdm1vZGVsLiRmb3JtSXRlbS5vbkZpZWxkQ2hhbmdlKHtcbiAgICAgICAgbmFtZTogdm1vZGVsLmNvbCxcbiAgICAgICAgcnVsZXM6IHZtb2RlbC4kcnVsZXMsXG4gICAgICAgIHZhbHVlOiB2bW9kZWwudmFsdWUsXG4gICAgICAgIGRlbnlWYWxpZGF0ZTogdHJ1ZSxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtZm9ybS91dGlscy50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYXJlbnRDb21wb25lbnQodm0sIGN0eXBlKSB7XG4gICAgbGV0IHBhcmVudCA9IHZtLiRlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBpZiAocGFyZW50Ll92bV8gJiYgKCFjdHlwZSB8fCBwYXJlbnQuX2N0eXBlXyA9PT0gY3R5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Ll92bV87XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTbG90VG9WTW9kZWwodm1vZGVsLCB2bm9kZXM/OiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh2bm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2bm9kZXMgPSB2bW9kZWwuJHJlbmRlci5yb290ID8gdm1vZGVsLiRyZW5kZXIucm9vdC5jaGlsZHJlbiA6IFtdO1xuICAgIH1cbiAgICB2bm9kZXMuZm9yRWFjaCh2bm9kZSA9PiB7XG4gICAgICAgIGlmICghdm5vZGUgfHwgIXZub2RlLm5vZGVOYW1lIHx8IHZub2RlLmRvbS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuIHRydWU7XG4gICAgICAgIGxldCBzbG90TmFtZSA9IHZub2RlLmRvbS5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKTtcbiAgICAgICAgaWYgKHNsb3ROYW1lKSB7XG4gICAgICAgICAgICBkZWxldGUgdm5vZGUucHJvcHNbJzpza2lwJ107XG4gICAgICAgICAgICBkZWxldGUgdm5vZGUucHJvcHNbJ21zLXNraXAnXTtcbiAgICAgICAgICAgIHZtb2RlbFtzbG90TmFtZV0gPSBhdmFsb24udmRvbSh2bm9kZSwgJ3RvSFRNTCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VTbG90VG9WTW9kZWwodm1vZGVsLCB2bm9kZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaWxkVGVtcGxhdGVEZXNjcmlwdG9yKHZtb2RlbCwgcmVuZGVyID0gdm1vZGVsLiRyZW5kZXIpOiBhbnlbXSB7XG4gICAgaWYgKHJlbmRlci5kaXJlY3RpdmVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gcmVuZGVyLmRpcmVjdGl2ZXMucmVkdWNlKChhY2MsIGFjdGlvbikgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uLmlzKSB7XG4gICAgICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgICAgICAgaXM6IGFjdGlvbi5pcyxcbiAgICAgICAgICAgICAgICBwcm9wczogYWN0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIGlubGluZVRlbXBsYXRlOiBhY3Rpb24uZnJhZ21lbnQsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGdldENoaWxkVGVtcGxhdGVEZXNjcmlwdG9yKHZtb2RlbCwgYWN0aW9uLmlubmVyUmVuZGVyIHx8IHsgZGlyZWN0aXZlczogW10gfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdDogbnVtYmVyID0gMzAwLCBpbW1lZGlhdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRsZXQgdGltZW91dDtcblx0cmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblx0XHRsZXQgY29udGV4dCA9IHRoaXM7XG5cdFx0bGV0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdH07XG5cdFx0bGV0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XHRpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0fTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hbmUtdXRpbC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCB7IHBhcnNlU2xvdFRvVk1vZGVsIH0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuXG5pZiAoYXZhbG9uLm1zaWUgPD0gOCkge1xuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50O1xuICAgIGNvbnN0IGhlYWQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICBjb25zdCBzdHlsZTogYW55ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3QgY3NzU3RyID0gYFxuICAgICAgICAuYW5lLWNoZWNrYm94LWlubmVyLWllIGlucHV0IHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmFuZS1jaGVja2JveC1pbm5lci1pZSBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIGA7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG5cbiAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NTdHI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKGNzc1N0cikpO1xuICAgIH1cblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5hdmFsb24uY29tcG9uZW50KCdtcy1jaGVja2JveCcsIHtcbiAgICBzb2xlU2xvdDogJ2xhYmVsJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy1jaGVja2JveC5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgd3JhcHBlcjogJ2NoZWNrYm94JyxcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgZ3JvdXA6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIG9uQ2hhbmdlOiBhdmFsb24ubm9vcCxcbiAgICAgICAgZmx1c2g6IGF2YWxvbi5ub29wLFxuICAgICAgICBoZWxwSWQ6ICcnLFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaGVscElkID0gdGhpcy4kaWQ7XG4gICAgICAgICAgICAvLyAvLyBpbmxpbmXlnKhJRTjkuIvmmL7npLrmnInpl67popjvvIzlvoXop6PlhrNcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmlubGluZSAhPSB2b2lkIDApIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLndyYXBwZXIgPSAnY2hlY2tib3gtaW5saW5lJztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICAgICAgcGFyc2VTbG90VG9WTW9kZWwodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRGlzcG9zZSh2bSwgZWwpIHtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvbXMtY2hlY2tib3gudHMiLCJpbXBvcnQgJy4vbXMtdHJpZ2dlcic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy10cmlnZ2VyL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IHsgcGFyc2VTbG90VG9WTW9kZWwgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5cbmlmIChhdmFsb24ubXNpZSA8PSA4KSB7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQ7XG4gICAgY29uc3QgaGVhZCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGNvbnN0IHN0eWxlOiBhbnkgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBjc3NTdHIgPSBgXG4gICAgICAgIC5hbmUtcmFkaW8taW5uZXItaWUgaW5wdXQge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuYW5lLXJhZGlvLWlubmVyLWllIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgYDtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcblxuICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1N0cjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUoY3NzU3RyKSk7XG4gICAgfVxuXG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLXJhZGlvJywge1xuICAgIHNvbGVTbG90OiAnbGFiZWwnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXJhZGlvLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICB3cmFwcGVyOiAncmFkaW8nLFxuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIGNoZWNrZWQ6ICcnLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBncm91cDogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgb25DaGFuZ2U6IGF2YWxvbi5ub29wLFxuICAgICAgICBoZWxwSWQ6ICcnLFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaGVscElkID0gdGhpcy4kaWQ7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgICAgIHBhcnNlU2xvdFRvVk1vZGVsKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRpc3Bvc2Uodm0sIGVsKSB7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXJhZGlvL21zLXJhZGlvLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuXG4vKipcbiAqIOWIhumhtee7hOS7tlxuICogQHByb3Age051bWJlcn0gW2N1cnJlbnQ9MV0g5b2T5YmN6aG1XG4gKiBAcHJvcCB7TnVtYmVyfSBbcGFnZVNpemU9MTBdIOavj+mhteeahOaVsOaNrumHj1xuICogQHByb3Age051bWJlcn0gdG90YWwg5pWw5o2u5oC76YePXG4gKiBAZXZlbnQge0Z1bmN0aW9ufSBvbkNoYW5nZSDlvZPpobXnoIHmlLnlj5jml7bop6blj5HvvIzlj4LmlbBjdXJyZW50XG4gKiBcbiAqIEBleGFtcGxlXG4gKiBgYGBcbiAqIDxtcy1wYWdpbmF0aW9uIDp3aWRnZXQ9XCJ7dG90YWw6MTAwLG9uQ2hhbmdlOkBoYW5kbGVQYWdlQ2hhbmdlfVwiPjwvbXMtcGFnaW5hdGlvbj5cbiAqIFxuICogPG1zLXBhZ2luYXRpb24gOndpZGdldD1cIntjdXJyZW50OkBjdXJyZW50UGFnZSxwYWdlU2l6ZTpAcGFnZVNpemUsdG90YWw6QHRvdGFsLG9uQ2hhbmdlOkBoYW5kbGVQYWdlQ2hhbmdlfVwiPjwvbXMtcGFnaW5hdGlvbj5cbiAqIGBgYFxuICovXG5hdmFsb24uY29tcG9uZW50KCdtcy1wYWdpbmF0aW9uJywge1xuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXBhZ2luYXRpb24uaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGN1cnJlbnQ6IDEsXG4gICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICAgIHByZXZQYWdlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKC0tdGhpcy5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbmV4dFBhZ2UoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50IDwgTWF0aC5jZWlsKHRoaXMudG90YWwvdGhpcy5wYWdlU2l6ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCsrdGhpcy5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2U6IGF2YWxvbi5ub29wLFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICB9LFxuICAgICAgICBvbkRpc3Bvc2UoZXZlbnQpIHtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtcGFnaW5hdGlvbi9tcy1wYWdpbmF0aW9uLnRzIiwiaW1wb3J0ICcuL21zLXNlbGVjdCc7XG5pbXBvcnQgJy4vbXMtc2VsZWN0LW9wdGlvbidcbmltcG9ydCAnLi9tcy1zZWxlY3Quc2Nzcyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1zZWxlY3QvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgY29udHJvbENvbXBvbmVudCBmcm9tICcuLi9tcy1mb3JtL21zLWNvbnRyb2wnO1xuaW1wb3J0IHsgZW1pdFRvRm9ybUl0ZW0gfSBmcm9tICcuLi9tcy1mb3JtL3V0aWxzJztcbmltcG9ydCB7IGZpbmRQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5pbXBvcnQgJy4vbXMtY2hlY2tib3gnO1xuXG5jb250cm9sQ29tcG9uZW50LmV4dGVuZCh7XG4gICAgZGlzcGxheU5hbWU6ICdtcy1jaGVja2JveC1ncm91cCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtY2hlY2tib3gtZ3JvdXAuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgICAgc2VsZWN0aW9uOiBbXSxcbiAgICAgICAgdG9nZ2xlT3B0aW9uKG9wdGlvbikge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSW5kZXggPSB0aGlzLnNlbGVjdGlvbi5pbmRleE9mKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICBpZiAob3B0aW9uSW5kZXggPT09IC0xICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucmVtb3ZlKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB0aGlzLnNlbGVjdGlvbi50b0pTT04oKSB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveC1ncm91cCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBtYXBWYWx1ZVRvU2VsZWN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMub3B0aW9ucy5maWx0ZXIobyA9PiB2YWx1ZS5jb250YWlucyhvLnZhbHVlKSkubWFwKG8gPT4gby52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICAgICAgZW1pdFRvRm9ybUl0ZW0odGhpcyk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgndmFsdWUnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9TZWxlY3Rpb24odik7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHYudG9KU09OKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVueVZhbGlkYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gtZ3JvdXAnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb1NlbGVjdGlvbih0aGlzLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICAgICAgLy92bS5lbEhpZGRlbklucHV0ID0gJChlbCkuZmluZCgnaW5wdXQ6aGlkZGVuJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRGlzcG9zZShldmVudCkge1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1jaGVja2JveC9tcy1jaGVja2JveC1ncm91cC50cyIsImV4cG9ydCB7IExvYWRpbmcgfSBmcm9tICAnLi9tcy1sb2FkaW5nLWRpcmVjdGl2ZSc7XG5pbXBvcnQgJy4vbXMtbG9hZGluZy5zY3NzJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWxvYWRpbmcvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgY29udHJvbENvbXBvbmVudCBmcm9tICcuLi9tcy1mb3JtL21zLWNvbnRyb2wnO1xuaW1wb3J0IHsgZW1pdFRvRm9ybUl0ZW0gfSBmcm9tICcuLi9tcy1mb3JtL3V0aWxzJztcbmltcG9ydCB7IGZpbmRQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5pbXBvcnQgJy4vbXMtcmFkaW8nO1xuXG5jb250cm9sQ29tcG9uZW50LmV4dGVuZCh7XG4gICAgZGlzcGxheU5hbWU6ICdtcy1yYWRpby1ncm91cCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtcmFkaW8tZ3JvdXAuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgICAgc2VsZWN0ZWQ6ICcnLFxuICAgICAgICB0b2dnbGVPcHRpb24oZSwgb3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdGhpcy5zZWxlY3RlZCB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpby1ncm91cCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBoZWxwSWQ6ICcnLFxuICAgICAgICBtYXBWYWx1ZVRvU2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBJZCA9IHRoaXMuJGlkO1xuICAgICAgICAgICAgZW1pdFRvRm9ybUl0ZW0odGhpcyk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgndmFsdWUnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9TZWxlY3RlZCh2KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdiB9LFxuICAgICAgICAgICAgICAgICAgICBkZW55VmFsaWRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpby1ncm91cCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvU2VsZWN0ZWQodGhpcy52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgfSxcbiAgICAgICAgb25EaXNwb3NlKGV2ZW50KSB7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXJhZGlvL21zLXJhZGlvLWdyb3VwLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IE9QVElPTl9IRUlHSFQgPSAyNDtcblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtdGltZXBpY2tlci12aWV3Jywge1xuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXRpbWVwaWNrZXItdmlldy5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBjdXJyZW50SG91cjogMCxcbiAgICAgICAgY3VycmVudE1pbnV0ZTogMCxcbiAgICAgICAgY3VycmVudFNlY29uZDogMCxcbiAgICAgICAgaG91ck9wdGlvbnM6IGF2YWxvbi5yYW5nZSgyNCkubWFwKG4gPT4gKCcwJyArIG4pLnN1YnN0cigtMikpLFxuICAgICAgICBtaW51dGVPcHRpb25zOiBhdmFsb24ucmFuZ2UoNjApLm1hcChuID0+ICgnMCcgKyBuKS5zdWJzdHIoLTIpKSxcbiAgICAgICAgc2Vjb25kT3B0aW9uczogYXZhbG9uLnJhbmdlKDYwKS5tYXAobiA9PiAoJzAnICsgbikuc3Vic3RyKC0yKSksXG4gICAgICAgIG9uQ2hhbmdlOiBhdmFsb24ubm9vcCxcbiAgICAgICAgc2VsZWN0KGVsLCB0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmUtdGltZXBpY2tlci12aWV3LXNlbGVjdFtuYW1lPScgKyB0eXBlICsgJy1vcHRpb25zXScpLnNjcm9sbFRvcCA9IGVsICogMjQ7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2hvdXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SG91ciA9IGVsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbWludXRlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1pbnV0ZSA9IGVsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWNvbmQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICBob3VyOiB0aGlzLmN1cnJlbnRIb3VyLFxuICAgICAgICAgICAgICAgICAgICBtaW51dGU6IHRoaXMuY3VycmVudE1pbnV0ZSxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kOiB0aGlzLmN1cnJlbnRTZWNvbmQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGltZXBpY2tlci12aWV3LWNoYW5nZWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KCkge1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3ZhbHVlJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbSA9IG1vbWVudCh2LnNwbGl0KCcsJykpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhvdXIgPSBtLmhvdXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNaW51dGUgPSBtLm1pbnV0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNlY29uZCA9IG0uc2Vjb25kKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmUtdGltZXBpY2tlci12aWV3LXNlbGVjdFtuYW1lPWhvdXItb3B0aW9uc10nKS5zY3JvbGxUb3AgPSB0aGlzLmN1cnJlbnRIb3VyICogT1BUSU9OX0hFSUdIVDtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmUtdGltZXBpY2tlci12aWV3LXNlbGVjdFtuYW1lPW1pbnV0ZS1vcHRpb25zXScpLnNjcm9sbFRvcCA9IHRoaXMuY3VycmVudE1pbnV0ZSAqIE9QVElPTl9IRUlHSFQ7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW5lLXRpbWVwaWNrZXItdmlldy1zZWxlY3RbbmFtZT1zZWNvbmQtb3B0aW9uc10nKS5zY3JvbGxUb3AgPSB0aGlzLmN1cnJlbnRTZWNvbmQgKiBPUFRJT05fSEVJR0hUO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRmaXJlKCd2YWx1ZScsIHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy10aW1lcGlja2VyL21zLXRpbWVwaWNrZXItdmlldy50cyIsImltcG9ydCAnLi9tcy1sYXlvdXQuc2Nzcyc7XG5pbXBvcnQgJy4vbXMtbGF5b3V0JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWxheW91dC9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gW3tcbiAgICBrZXk6ICdjb21wb25lbnRzJyxcbiAgICB0aXRsZTogJ+e7hOS7ticsXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLWlucHV0LWlucHV0JyxcbiAgICAgICAgdGl0bGU6ICdpbnB1dCDovpPlhaXmoYYnLFxuICAgICAgICB1cmk6ICcvaW5wdXQnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLWlucHV0L21zLWlucHV0Lm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tdGV4dGFyZWEtdGV4dGFyZWEnLFxuICAgICAgICB0aXRsZTogJ3RleHRhcmVhIOWkmuihjOi+k+WFpeahhicsXG4gICAgICAgIHVyaTogJy90ZXh0YXJlYScsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtdGV4dGFyZWEvbXMtdGV4dGFyZWEubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1zZWxlY3Qtc2VsZWN0JyxcbiAgICAgICAgdGl0bGU6ICdzZWxlY3Qg6YCJ5oup5qGGJyxcbiAgICAgICAgdXJpOiAnL3NlbGVjdCcsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtc2VsZWN0L21zLXNlbGVjdC5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLXJhZGlvLXJhZGlvJyxcbiAgICAgICAgdGl0bGU6ICdyYWRpbyDljZXpgInmoYYnLFxuICAgICAgICB1cmk6ICcvcmFkaW8nLFxuICAgICAgICBsb2NhdGlvbjogJ21zLXJhZGlvL21zLXJhZGlvLm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tY2hlY2tib3gtY2hlY2tib3gnLFxuICAgICAgICB0aXRsZTogJ2NoZWNrYm94IOWkmumAieahhicsXG4gICAgICAgIHVyaTogJy9jaGVja2JveCcsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtY2hlY2tib3gvbXMtY2hlY2tib3gubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1kYXRlcGlja2VyLWRhdGVwaWNrZXInLFxuICAgICAgICB0aXRsZTogJ2RhdGVwaWNrZXIg5pel5pyf6YCJ5oup5ZmoJyxcbiAgICAgICAgdXJpOiAnL2RhdGVwaWNrZXInLFxuICAgICAgICBsb2NhdGlvbjogJ21zLWRhdGVwaWNrZXIvbXMtZGF0ZXBpY2tlci5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLXRpbWVwaWNrZXItdGltZXBpY2tlcicsXG4gICAgICAgIHRpdGxlOiAndGltZXBpY2tlciDml7bpl7TpgInmi6nlmagnLFxuICAgICAgICB1cmk6ICcvdGltZXBpY2tlcicsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtdGltZXBpY2tlci9tcy10aW1lcGlja2VyLm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tdXBsb2FkLXVwbG9hZCcsXG4gICAgICAgIHRpdGxlOiAndXBsb2FkIOaWh+S7tuS4iuS8oCcsXG4gICAgICAgIHVyaTogJy91cGxvYWQnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLXVwbG9hZC9tcy11cGxvYWQubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1mb3JtLWNvbnRyb2wnLFxuICAgICAgICB0aXRsZTogJ2Zvcm0tY29udHJvbCDooajljZXmjqfku7YnLFxuICAgICAgICB1cmk6ICcvZm9ybS1jb250cm9sJyxcbiAgICAgICAgbG9jYXRpb246ICdtcy1mb3JtL21zLWNvbnRyb2wubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1mb3JtLWZvcm0nLFxuICAgICAgICB0aXRsZTogJ2Zvcm0g6KGo5Y2VJyxcbiAgICAgICAgdXJpOiAnL2Zvcm0nLFxuICAgICAgICBsb2NhdGlvbjogJ21zLWZvcm0vbXMtZm9ybS5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLW1lbnUtbWVudScsXG4gICAgICAgIHRpdGxlOiAnbWVudSDoj5zljZUnLFxuICAgICAgICB1cmk6ICcvbWVudScsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtbWVudS9tcy1tZW51Lm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tdGFibGUtdGFibGUnLFxuICAgICAgICB0aXRsZTogJ3RhYmxlIOaVsOaNruihqOagvCcsXG4gICAgICAgIHVyaTogJy90YWJsZScsXG4gICAgICAgIGxvY2F0aW9uOiAnbXMtdGFibGUvbXMtdGFibGUubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1wYWdpbmF0aW9uLXBhZ2luYXRpb24nLFxuICAgICAgICB0aXRsZTogJ3BhZ2luYXRpb24g5YiG6aG1JyxcbiAgICAgICAgdXJpOiAnL3BhZ2luYXRpb24nLFxuICAgICAgICBsb2NhdGlvbjogJ21zLXBhZ2luYXRpb24vbXMtcGFnaW5hdGlvbi5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLWRpYWxvZy1kaWFsb2cnLFxuICAgICAgICB0aXRsZTogJ2RpYWxvZyDlr7nor53moYYnLFxuICAgICAgICB1cmk6ICcvZGlhbG9nJyxcbiAgICAgICAgbG9jYXRpb246ICdtcy1kaWFsb2cvbXMtZGlhbG9nLm1kJ1xuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50LWRlbW8tbG9hZGluZy1sb2FkaW5nJyxcbiAgICAgICAgdGl0bGU6ICdsb2FkaW5nIOWKoOi9veS4reiSmeeJiCcsXG4gICAgICAgIHVyaTogJy9sb2FkaW5nJyxcbiAgICAgICAgbG9jYXRpb246ICdtcy1sb2FkaW5nL21zLWxvYWRpbmcubWQnXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnQtZGVtby1tZXNzYWdlLW1lc3NhZ2UnLFxuICAgICAgICB0aXRsZTogJ21lc3NhZ2Ug5YWo5bGA5o+Q56S6JyxcbiAgICAgICAgdXJpOiAnL21lc3NhZ2UnLFxuICAgICAgICBsb2NhdGlvbjogJ21zLW1lc3NhZ2UvbXMtbWVzc2FnZS5tZCdcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudC1kZW1vLW5vdGlmaWNhdGlvbi1ub3RpZmljYXRpb24nLFxuICAgICAgICB0aXRsZTogJ25vdGlmaWNhdGlvbiDpgJrnn6Xmj5DphpLmoYYnLFxuICAgICAgICB1cmk6ICcvbm90aWZpY2F0aW9uJyxcbiAgICAgICAgbG9jYXRpb246ICdtcy1ub3RpZmljYXRpb24vbXMtbm90aWZpY2F0aW9uLm1kJ1xuICAgIH1dXG59XTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2RvY3MvbmF2LmNvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0IGNvbnN0IG1lbnUgPSB7XG4gICAgc2VsZWN0ZWRLZXlzJDogT2JzZXJ2YWJsZSgpLFxuICAgIG9wZW5LZXlzJDogT2JzZXJ2YWJsZSgpXG59O1xuXG5mdW5jdGlvbiBPYnNlcnZhYmxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uTmV4dENiTGlzdDogW10sXG4gICAgICAgIHN1YnNjcmliZShvbk5leHQpIHtcbiAgICAgICAgICAgIHRoaXMub25OZXh0Q2JMaXN0LnB1c2gob25OZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25OZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm9uTmV4dENiTGlzdC5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZG9jcy9zdG9yZXMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbmltcG9ydCAqIGFzIG5hdkNvbmZpZyBmcm9tICcuLi8uLi9uYXYuY29uZmlnLmpzJztcbmltcG9ydCAnYW5lJztcbmltcG9ydCB7IG1lbnUgYXMgbWVudVN0b3JlIH0gZnJvbSAnLi4vLi4vc3RvcmVzJztcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZG9jLXNpZGViYXInO1xuXG5hdmFsb24uY29tcG9uZW50KG5hbWUsIHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9kb2Mtc2lkZWJhci5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgbWVudTogW10sXG4gICAgICAgIHNlbGVjdGVkS2V5czogW10sXG4gICAgICAgIG9wZW5LZXlzOiBbJ2NvbXBvbmVudHMnXSxcbiAgICAgICAgaGFuZGxlTWVudUNsaWNrKGl0ZW0sIGtleSwga2V5UGF0aCkge1xuICAgICAgICAgICAgYXZhbG9uLmhpc3Rvcnkuc2V0SGFzaChpdGVtLnVyaSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZU9wZW5DaGFuZ2Uob3BlbktleXMpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbktleXMgPSBvcGVuS2V5cy5zbGljZSgtMSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5tZW51ID0gbmF2Q29uZmlnO1xuICAgICAgICAgICAgbWVudVN0b3JlLnNlbGVjdGVkS2V5cyQuc3Vic2NyaWJlKHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRLZXlzID0gdjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZG9jcy9jb21wb25lbnRzL2RvYy1zaWRlYmFyL2RvYy1zaWRlYmFyLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0ICdtbVJvdXRlcic7XG5pbXBvcnQgeyBtZW51IGFzIG1lbnVTdG9yZSB9IGZyb20gJy4vc3RvcmVzJztcbmltcG9ydCAqIGFzIG5hdkNvbmZpZyBmcm9tICcuL25hdi5jb25maWcuanMnO1xuXG5mdW5jdGlvbiBnZXRQYWdlKGNvbXBvbmVudCkge1xuICAgIGNvbnN0IGh0bWwgPSBgPHhtcCBpcz1cIiR7Y29tcG9uZW50fVwiIDp3aWRnZXQ9XCJ7aWQ6JyR7Y29tcG9uZW50LnJlcGxhY2UoL1xcLS9nLCAnXycpfSd9XCI+PC94bXA+YDtcbiAgICByZXR1cm4gaHRtbFxufVxuXG5mdW5jdGlvbiBhcHBseVJvdXRlQ29uZmlnKGNvbmZpZywgcGFyZW50Um91dGUsIGFjY1BhdGggPSAnJykge1xuICAgIGNvbmZpZy5tYXAoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgIGxldCBjb21wb25lbnRzOmFueSA9IHt9O1xuICAgICAgICBpZiAocm91dGUuY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmN1cnJlbnRQYWdlID0gcm91dGUuY29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZS5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzID0gcm91dGUuY29tcG9uZW50cztcbiAgICAgICAgfVxuICAgICAgICBhdmFsb24ucm91dGVyLmFkZChhY2NQYXRoICsgcm91dGUucGF0aCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcG9uZW50cykubWFwKHZpZXdOYW1lID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1t2aWV3TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50KGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51U3RvcmUuc2VsZWN0ZWRLZXlzJC5vbk5leHQoW20ubmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXZhbG9uLnZtb2RlbHNbcGFyZW50Um91dGUubmFtZV1bdmlld05hbWVdID0gZ2V0UGFnZShtLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdmFsb24udm1vZGVsc1twYXJlbnRSb3V0ZS5uYW1lXVt2aWV3TmFtZV0gPSBnZXRQYWdlKGNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRPRE8g5pSv5oyB5bWM5aWX6Lev55SxXG4gICAgICAgIC8vcm91dGUuY2hpbGRyZW4gJiYgYXBwbHlSb3V0ZUNvbmZpZyhyb3V0ZS5jaGlsZHJlbiwgcm91dGUsIGFjY1BhdGggKyByb3V0ZS5wYXRoKTtcbiAgICB9KTtcbn1cblxuY29uc3Qgcm91dGVDb25maWcgPSBbXTtcbmNvbnN0IHRyYXZlbCA9IGl0ZW0gPT4ge1xuICAgIGlmICghaXRlbS5jaGlsZHJlbiB8fCBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByb3V0ZUNvbmZpZy5wdXNoKHtcbiAgICAgICAgICAgIHBhdGg6IGl0ZW0udXJpLFxuICAgICAgICAgICAgY29tcG9uZW50KHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvJyArIGl0ZW0ubG9jYXRpb24pKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jaGlsZHJlbi5tYXAodHJhdmVsKTtcbiAgICB9XG59O1xubmF2Q29uZmlnLm1hcCh0cmF2ZWwpO1xuXG5hcHBseVJvdXRlQ29uZmlnKHJvdXRlQ29uZmlnLCB7XG4gICAgbmFtZTogJ3Jvb3QnXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzL3JvdXRlci50cyIsImltcG9ydCAnLi9jb21wb25lbnRzL21zLW1lbnUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbXMtdGFibGUvbXMtdGFibGUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbXMtcGFnaW5hdGlvbi9tcy1wYWdpbmF0aW9uJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21zLWRpYWxvZyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1mb3JtJztcbmV4cG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvbXMtZm9ybS9jcmVhdGUtZm9ybSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1pbnB1dCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy10ZXh0YXJlYSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1zZWxlY3QnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbXMtdXBsb2FkJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXInO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlcic7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1jaGVja2JveCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1jaGVja2JveC9tcy1jaGVja2JveC1ncm91cCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1yYWRpbyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tcy1yYWRpby9tcy1yYWRpby1ncm91cCc7XG5cbmV4cG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL2NvbXBvbmVudHMvbXMtbG9hZGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdGlmaWNhdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9tcy1ub3RpZmljYXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlIH0gZnJvbSAnLi9jb21wb25lbnRzL21zLW1lc3NhZ2UnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgY29udHJvbENvbXBvbmVudCBmcm9tICcuLi9tcy1mb3JtL21zLWNvbnRyb2wnO1xuaW1wb3J0ICcuLi9tcy10cmlnZ2VyJztcbmltcG9ydCAnLi4vbXMtY2FsZW5kYXInO1xuaW1wb3J0ICcuLi9tcy10aW1lcGlja2VyL21zLXRpbWVwaWNrZXItdmlldydcbmltcG9ydCB7IGVtaXRUb0Zvcm1JdGVtIH0gZnJvbSAnLi4vbXMtZm9ybS91dGlscyc7XG5cbi8qKlxuICog5pel5pyf6YCJ5oup57uE5Lu2XG4gKiBAcHJvcCB2YWx1ZSDnu4Tku7blgLwoaW5oZXJpdClcbiAqIEBwcm9wIGNvbCDlrZfmrrXot6/lvoQoaW5oZXJpdClcbiAqIEBwcm9wIGZvcm1hdCDml6XmnJ/moLzlvI/vvIzlj4LogIMgbW9tZW50anPvvIzpu5jorqTkuLogWVlZWS1NTS1ERFxuICogQHByb3Agc3RhcnREYXRlIOaOp+WItuWPr+W3sumAieaLqeeahOaXtumXtOeahOW8gOWni+aXpeacn++8jOaXpeacn+Wtl+espuS4su+8jOagvOW8j+S4jiBmb3JtYXQg5Y+C5pWw5Yy56YWN77yM6K6+572u5q2k6aG56Ieq5Yqo5b+955WlIGRpc2FibGVkRGF0ZVxuICogQHByb3AgZW5kRGF0ZSDmjqfliLblj6/lt7LpgInmi6nnmoTml7bpl7TnmoTnu5PmnZ/ml6XmnJ/vvIzml6XmnJ/lrZfnrKbkuLLvvIzmoLzlvI/kuI4gZm9ybWF0IOWPguaVsOWMuemFje+8jOiuvue9ruatpOmhueiHquWKqOW/veeVpSBkaXNhYmxlZERhdGVcbiAqIEBwcm9wIGRpc2FibGVkRGF0ZSDkuI3lj6/pgInmi6nml6XmnJ/nmoTliKTmlq3lh73mlbDvvIzkvKDlhaUgY3VycmVudO+8iOW9k+WJjemBjeWOhuaXpeacn++8ie+8jOi/lOWbniB0cnVlIOihqOekuuatpOaXpeacn+S4jeWPr+mAiVxuICogQHByb3Agc2hvd1RpbWUg5piv5ZCm5pi+56S65pe26Ze06YCJ5oup77yM5aaC5p6c5q2k6aG55Li6IHRydWXvvIzliJkgZm9ybWF0IOm7mOiupOS4uiBZWVlZLU1NLUREIEhIOm1tOnNzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBgYGAgaHRtbFxuICogXG4gKiBgYGBcbiAqL1xuY29udHJvbENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRpc3BsYXlOYW1lOiAnbXMtZGF0ZXBpY2tlcicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtZGF0ZXBpY2tlci5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgc2VsZWN0ZWQ6ICcnLFxuICAgICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcbiAgICAgICAgc3RhcnREYXRlOiAnJyxcbiAgICAgICAgZW5kRGF0ZTogJycsXG4gICAgICAgIGRpc2FibGVkRGF0ZSgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBzaG93VGltZTogZmFsc2UsXG4gICAgICAgIGNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICcnO1xuICAgICAgICAgICAgYXZhbG9uLnZtb2RlbHNbdGhpcy5wYW5lbFZtSWRdLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiAnJyB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRlcGlja2VyLWNoYW5nZWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgd2l0aEluQm94KGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudCA9PT0gZWwgfHwgYXZhbG9uLmNvbnRhaW5zKHRoaXMuJGVsZW1lbnQsIGVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGFyZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYW5lbFZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBhdmFsb24udm1vZGVsc1t0aGlzLnBhbmVsVm1JZF0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFuZWxWbUlkOiAnJyxcbiAgICAgICAgcGFuZWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgcGFuZWxDbGFzczogJ2FuZS1kYXRlcGlja2VyLXBhbmVsLWNvbnRhaW5lcicsXG4gICAgICAgIHBhbmVsVGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtZGF0ZXBpY2tlci1wYW5lbC5odG1sJyksXG4gICAgICAgIGhhbmRsZVBhbmVsSGlkZSgpIHtcbiAgICAgICAgICAgIHRoaXMucGFuZWxWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWFwVmFsdWVUb1NlbGVjdGVkKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGVtaXRUb0Zvcm1JdGVtKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBzaG93SWNvbjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3ZhbHVlJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvU2VsZWN0ZWQodik7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHYgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVueVZhbGlkYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZXBpY2tlci1jaGFuZ2VkJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG93VGltZSAmJiB0aGlzLmZvcm1hdCA9PT0gJ1lZWVktTU0tREQnKSB7XG4gICAgICAgICAgICAgICAgLy8g5YWB6K646YCJ5oup5pe26Ze055qE5qih5byP5LiL77yM55So5oi35aaC5p6c5rKh6Ieq5a6a5LmJ5qC85byP77yM5YiZ6Ieq5Yqo6L2s5Li65pel5pyf5pe26Ze05qC85byPXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtYXQgPSAnWVlZWS1NTS1ERCBISDptbTpzcyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhbmVsVm1JZCA9IHRoaXMuJGlkICsgJ19wYW5lbCc7XG4gICAgICAgICAgICBjb25zdCBpbm5lclZtID0gYXZhbG9uLmRlZmluZSh7XG4gICAgICAgICAgICAgICAgJGlkOiB0aGlzLnBhbmVsVm1JZCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZUFycmF5OiAnJyxcbiAgICAgICAgICAgICAgICAkbW9tZW50OiBtb21lbnQoKSxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF5OiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRNb250aDogJycsXG4gICAgICAgICAgICAgICAgY3VycmVudFllYXI6IDAsXG4gICAgICAgICAgICAgICAgJHN0YXJ0RGF0ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAkZW5kRGF0ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGUoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBzaG93VGltZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gLTEt5aSp77yI5pe26Ze077yJ6KeG5Zu+77yMMC3mnIjop4blm77vvIwxLeW5tOinhuWbvu+8jDIt5Y2B5bm06KeG5Zu+77yMMy3nmb7lubTop4blm75cbiAgICAgICAgICAgICAgICB2aWV3TW9kZTogMCxcbiAgICAgICAgICAgICAgICBzdGFnZWQ6IDAsXG4gICAgICAgICAgICAgICAgJGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0T2ZEZWNhZGUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WWVhciAtIHRoaXMuY3VycmVudFllYXIgJSAxMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRPZkNlbnR1cnkoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WWVhciAtIHRoaXMuY3VycmVudFllYXIgJSAxMDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhZ2VkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbW9tZW50ID0gc2VsZi5zZWxlY3RlZCA/IG1vbWVudChzZWxmLnNlbGVjdGVkLCBzZWxmLmZvcm1hdCkgOiBtb21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF5ID0gdGhpcy4kbW9tZW50LmRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9udGggPSB0aGlzLiRtb21lbnQuZm9ybWF0KCdNTU0nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50WWVhciA9IHRoaXMuJG1vbWVudC55ZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVBcnJheSA9IHRoaXMuJG1vbWVudC50b0FycmF5KCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VGltZSA9IHNlbGYuc2hvd1RpbWU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDmnoTpgKDkuI3lj6/pgInmi6nml6XmnJ/nmoTliKTmlq3lh73mlbBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuc3RhcnREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdGFydERhdGUgPSBtb21lbnQoc2VsZi5zdGFydERhdGUsIHNlbGYuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5lbmREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbmREYXRlID0gbW9tZW50KHNlbGYuZW5kRGF0ZSwgc2VsZi5mb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnN0YXJ0RGF0ZSB8fCBzZWxmLmVuZERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOiuvue9ruS6huW8gOWni+aXpeacn+WSjOe7k+adn+aXpeacn++8jOWImeaNruatpOaehOmAoOS4gOS4quWIpOaWreWHveaVsFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZERhdGUgPSAoY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRzdGFydERhdGUgPT09IG51bGwgJiYgdGhpcy4kZW5kRGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRNb21lbnQgPSBtb21lbnQoY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTYW1lT3JBZnRlclN0YXJ0RGF0ZSA9IGN1cnJlbnRNb21lbnQuaXNTYW1lT3JBZnRlcih0aGlzLiRzdGFydERhdGUsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTYW1lT3JCZWZvcmVFbmREYXRlID0gY3VycmVudE1vbWVudC5pc1NhbWVPckJlZm9yZSh0aGlzLiRlbmREYXRlLCAnZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRzdGFydERhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWVPckJlZm9yZUVuZERhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRlbmREYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lT3JBZnRlclN0YXJ0RGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEoaXNTYW1lT3JBZnRlclN0YXJ0RGF0ZSAmJiBpc1NhbWVPckJlZm9yZUVuZERhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWQpuWImeS9v+eUqOm7mOiupOeahOaIluiAheWklumDqOS8oOi/m+adpeeahOWIpOaWreWHveaVsFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZERhdGUgPSBzZWxmLmRpc2FibGVkRGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hhbmdlVmlldyh2aWV3TW9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3TW9kZSA9PT0gMCAmJiB2aWV3TW9kZSA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5LuO5pyI6KeG5Zu+55u05o6l6Lez5Yiw5Y2B5bm06KeG5Zu+5ZCO77yM6L+U5Zue5pe26Lez6L+H5bm06KeG5Zu+XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YWdlZCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZSA9IHZpZXdNb2RlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGFuZGxlWWVhclZpZXdTZWxlY3QoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmlld01vZGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbnRoID0gZWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRtb21lbnQubW9udGgoZWwudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUFycmF5ID0gdGhpcy4kbW9tZW50LnRvQXJyYXkoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXdNb2RlID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRZZWFyID0gZWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRtb21lbnQueWVhcihlbC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlQXJyYXkgPSB0aGlzLiRtb21lbnQudG9BcnJheSgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmlld01vZGUgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFllYXIgPSBlbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG1vbWVudC55ZWFyKGVsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVBcnJheSA9IHRoaXMuJG1vbWVudC50b0FycmF5KCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGUgPSB0aGlzLnZpZXdNb2RlIC0gMSAtIHRoaXMuc3RhZ2VkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFnZWQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZSA9IHRoaXMudmlld01vZGUgLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtdXRhdGUoYWN0aW9uLCAuLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1vbWVudFthY3Rpb25dLmFwcGx5KHRoaXMuJG1vbWVudCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERheSA9IHRoaXMuJG1vbWVudC5kYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbnRoID0gdGhpcy4kbW9tZW50LmZvcm1hdCgnTU1NJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFllYXIgPSB0aGlzLiRtb21lbnQueWVhcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlQXJyYXkgPSB0aGlzLiRtb21lbnQudG9BcnJheSgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b2RheSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDYWxlbmRhckNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9tZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2FsZW5kYXItY2hhbmdlZCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhhbmRsZUNhbGVuZGFyQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbW9tZW50ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERheSA9IHRoaXMuJG1vbWVudC5kYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbnRoID0gdGhpcy4kbW9tZW50LmZvcm1hdCgnTU1NJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFllYXIgPSB0aGlzLiRtb21lbnQueWVhcigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hvd1RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGFuZGxlVGltZXBpY2tlckNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQgfSA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtb21lbnQuaG91cihob3VyKS5taW51dGUobWludXRlKS5zZWNvbmQoc2Vjb25kKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkID0gdGhpcy4kbW9tZW50LmZvcm1hdChzZWxmLmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGFuZWxWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaGFuZGxlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogc2VsZi5zZWxlY3RlZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhdGVwaWNrZXItY2hhbmdlZCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9TZWxlY3RlZCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIGlubmVyVm0ucmVzZXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EaXNwb3NlKCkge1xuICAgICAgICAgICAgZGVsZXRlIGF2YWxvbi52bW9kZWxzW3RoaXMucGFuZWxWbUlkXTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtZGF0ZXBpY2tlci9tcy1kYXRlcGlja2VyLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0ICogYXMgU2NoZW1hIGZyb20gJ2FzeW5jLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtKG9wdGlvbnM/KSB7XG4gICAgcmV0dXJuIG5ldyBGb3JtKG9wdGlvbnMpO1xufVxuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICByZWNvcmQ6IHt9LFxuICAgIGF1dG9Bc3luY0NoYW5nZTogdHJ1ZSxcbiAgICBvbkZpZWxkc0NoYW5nZTogYXZhbG9uLm5vb3Bcbn07XG5cbmZ1bmN0aW9uIEZvcm0ob3B0aW9ucykge1xuICAgIHRoaXMuY2FjaGVkUmVjb3JkID0ge307XG4gICAgdGhpcy5maWVsZHMgPSB7fTtcbiAgICB0aGlzLmFsbCA9IHt9O1xuICAgIGF2YWxvbi5taXgodGhpcywgYXZhbG9uLm1peCh0cnVlLCB7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKVxufVxuXG5Gb3JtLnByb3RvdHlwZS5zZXRGaWVsZHNWYWx1ZSA9IGZ1bmN0aW9uIChmaWVsZHMpIHtcbiAgICBpZiAoIXRoaXMuYXV0b0FzeW5jQ2hhbmdlKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgc2V0VmFsdWUodGhpcy5jYWNoZWRSZWNvcmQsIG5hbWUsIGZpZWxkc1tuYW1lXS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tuYW1lXTtcblxuICAgICAgICBzZXRWYWx1ZSh0aGlzLnJlY29yZCwgbmFtZSwgZmllbGQudmFsdWUpO1xuXG4gICAgICAgIGlmICghZmllbGQuZGVueVZhbGlkYXRlICYmIHRoaXMuZmllbGRzW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlRmllbGQobmFtZSwgdGhpcy5maWVsZHNbbmFtZV0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmlzT2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdlcnJvcicgKyByZXN1bHQubmFtZSwgW10pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignZXJyb3InICsgcmVzdWx0Lm5hbWUsIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXN1bHQubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uRmllbGRzQ2hhbmdlKGZpZWxkcywgdGhpcy5yZWNvcmQpO1xufVxuXG5Gb3JtLnByb3RvdHlwZS5hZGRGaWVsZHMgPSBmdW5jdGlvbiAoZmllbGRzKSB7XG4gICAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICB0aGlzLmZpZWxkc1tuYW1lXSA9IGZpZWxkc1tuYW1lXTtcbiAgICB9KTtcbn1cblxuRm9ybS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAodHlwZTogc3RyaW5nLCBsaXN0ZW5lcikge1xuICAgICh0aGlzLmFsbFt0eXBlXSB8fCAodGhpcy5hbGxbdHlwZV0gPSBbXSkpLnB1c2gobGlzdGVuZXIpO1xufVxuXG5Gb3JtLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKHR5cGU6IHN0cmluZywgcGF5bG9hZCkge1xuICAgICh0aGlzLmFsbFt0eXBlXSB8fCBbXSkubWFwKGhhbmRsZXIgPT4geyBoYW5kbGVyKHBheWxvYWQpIH0pO1xufVxuXG5Gb3JtLnByb3RvdHlwZS52YWxpZGF0ZUZpZWxkID0gYXN5bmMgZnVuY3Rpb24gKGZpZWxkTmFtZSwgZmllbGQpIHtcbiAgICBjb25zdCBydWxlcyA9IGZpZWxkLnJ1bGVzO1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUodGhpcy5yZWNvcmQsIGZpZWxkTmFtZSk7XG4gICAgbGV0IHJlc3VsdDogYW55ID0geyBpc09rOiB0cnVlLCBuYW1lOiBmaWVsZE5hbWUgfTtcbiAgICBpZiAoIXJ1bGVzKSByZXR1cm4gcmVzdWx0O1xuICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBTY2hlbWEoe1xuICAgICAgICBbZmllbGROYW1lXTogcnVsZXNcbiAgICB9KTtcbiAgICByZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZSh7IFtmaWVsZE5hbWVdOiB2YWx1ZSB9LCAoZXJyb3JzLCBmaWVsZHMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgaXNPazogZmFsc2UsIG5hbWU6IGZpZWxkTmFtZSwgbWVzc2FnZTogZXJyb3JzWzBdLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGlzT2s6IHRydWUsIG5hbWU6IGZpZWxkTmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5Gb3JtLnByb3RvdHlwZS52YWxpZGF0ZUZpZWxkcyA9IGZ1bmN0aW9uIChmaWVsZHMgPSB0aGlzLmZpZWxkcykge1xuICAgIGNvbnN0IGZsYXRSZWNvcmQgPSB7fSwgcnVsZU1hcCA9IHt9O1xuICAgIGlmICghdGhpcy5hdXRvQXN5bmNDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5yZWNvcmQgPSBhdmFsb24ubWl4KHRydWUsIHt9LCB0aGlzLnJlY29yZCwgdGhpcy5jYWNoZWRSZWNvcmQpO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhmaWVsZHMpLm1hcChuYW1lID0+IHtcbiAgICAgICAgcnVsZU1hcFtuYW1lXSA9IGZpZWxkc1tuYW1lXS5ydWxlcztcbiAgICAgICAgZmxhdFJlY29yZFtuYW1lXSA9IGdldFZhbHVlKHRoaXMucmVjb3JkLCBuYW1lKTtcbiAgICB9KTtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgU2NoZW1hKHJ1bGVNYXApO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZShmbGF0UmVjb3JkLCAoZXJyb3JzLCBmaWVsZHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yRmllbGRzID0gT2JqZWN0LmtleXMoZmllbGRzIHx8IHt9KTtcbiAgICAgICAgICAgIGxldCBpc0FsbFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmllbGRzKS5tYXAobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKH5lcnJvckZpZWxkcy5pbmRleE9mKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQWxsVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdlcnJvcicgKyBuYW1lLCBmaWVsZHNbbmFtZV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignZXJyb3InICsgbmFtZSwgW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzb2x2ZShpc0FsbFZhbGlkKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cblxuRm9ybS5wcm90b3R5cGUucmVzZXRGaWVsZHMgPSBmdW5jdGlvbiAoZmllbGRzID0gdGhpcy5maWVsZHMpIHtcbiAgICB0aGlzLnJlY29yZCA9IHt9O1xuICAgIHRoaXMudHJpZ2dlcigncmVzZXQnLCBmaWVsZHMpO1xufVxuXG4vKipcbiAqIOagueaNruihqOi+vuW8j+aehOe7meWvueixoei1i+WAvO+8jOWxnuaAp+i3r+W+hOS4reacgOWkmuWPquWFgeiuuOWtmOWcqOS4gOS4quaVsOe7hFxuICogQHBhcmFtIHsqfSByZWNvcmQg5pWw5o2u5a+56LGhXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwciDlr7nosaHlsZ7mgKfot6/lvoTooajovr7lvI9cbiAqIEBwYXJhbSB7Kn0gdmFsIOWAvFxuICovXG5mdW5jdGlvbiBzZXRWYWx1ZShyZWNvcmQsIGV4cHIsIHZhbCkge1xuICAgIGNvbnN0IHJTcGxpdCA9IC9cXC58XFxdLnxcXFt8XFxdLztcbiAgICBsZXQgdGVtcCA9IHJlY29yZCwgcHJvcDtcbiAgICBleHByID0gZXhwci5zcGxpdChyU3BsaXQpLmZpbHRlcihwcm9wID0+ICEhcHJvcCk7XG4gICAgY29uc3QgdmFsVHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpO1xuICAgIGxldCBtaXJyb3JWYWw7XG4gICAgaWYgKHZhbFR5cGUgPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICBtaXJyb3JWYWwgPSBhdmFsb24ubWl4KHRydWUsIHt9LCB7IHQ6IHZhbCB9KS50O1xuICAgIH0gZWxzZSBpZiAodmFsVHlwZSA9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICBtaXJyb3JWYWwgPSBhdmFsb24ubWl4KHRydWUsIHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1pcnJvclZhbCA9IHZhbDtcbiAgICB9XG5cbiAgICB3aGlsZSAocHJvcCA9IGV4cHIuc2hpZnQoKSkge1xuICAgICAgICBpZiAoZXhwci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRlbXBbcHJvcF0gPSBtaXJyb3JWYWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wID0gdGVtcFtwcm9wXSA9IHRlbXBbcHJvcF0gfHwge307XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICog5qC55o2u6KGo6L6+5byP5p6E5LuO5a+56LGh5Y+W5YC877yM5bGe5oCn6Lev5b6E5Lit5pyA5aSa5Y+q5YWB6K645a2Y5Zyo5LiA5Liq5pWw57uEXG4gKiBAcGFyYW0geyp9IHJlY29yZCDmlbDmja7lr7nosaFcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHByIOWvueixoeWxnuaAp+i3r+W+hOihqOi+vuW8j1xuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShyZWNvcmQsIGV4cHIpIHtcbiAgICBjb25zdCByU3BsaXQgPSAvXFwufFxcXS58XFxbfFxcXS87XG4gICAgbGV0IHRlbXAgPSByZWNvcmQsIHByb3A7XG4gICAgZXhwciA9IGV4cHIuc3BsaXQoclNwbGl0KS5maWx0ZXIocHJvcCA9PiAhIXByb3ApO1xuICAgIHdoaWxlICgocHJvcCA9IGV4cHIuc2hpZnQoKSkgJiYgdGVtcCkge1xuICAgICAgICB0ZW1wID0gdGVtcFtwcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXA7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1mb3JtL2NyZWF0ZS1mb3JtLnRzIiwiaW1wb3J0ICcuL21zLWZvcm0nO1xuaW1wb3J0ICcuL21zLWZvcm0taXRlbSc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1mb3JtL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IGNvbnRyb2xDb21wb25lbnQgZnJvbSAnLi4vbXMtZm9ybS9tcy1jb250cm9sJztcbmltcG9ydCB7IGVtaXRUb0Zvcm1JdGVtIH0gZnJvbSAnLi4vbXMtZm9ybS91dGlscyc7XG5pbXBvcnQgeyBmaW5kUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuXG5jb250cm9sQ29tcG9uZW50LmV4dGVuZCh7XG4gICAgZGlzcGxheU5hbWU6ICdtcy1pbnB1dCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtaW5wdXQuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICBtYXBWYWx1ZVRvVGV4dCh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBlbWl0VG9Gb3JtSXRlbSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCd2YWx1ZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb1RleHQodik7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHYgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVueVZhbGlkYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hhbmdlZCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvVGV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtaW5wdXQvbXMtaW5wdXQudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLW1lbnUnLCB7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtbWVudS5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgbWVudTogW10sXG4gICAgICAgIHNlbGVjdGVkS2V5czogW10sXG4gICAgICAgIG9wZW5LZXlzOiBbXSxcbiAgICAgICAgb25DbGljazogYXZhbG9uLm5vb3AsXG4gICAgICAgIG9uT3BlbkNoYW5nZTogYXZhbG9uLm5vb3AsXG4gICAgICAgIGhhbmRsZUNsaWNrKGl0ZW0sIGtleSwga2V5UGF0aCkge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmNoaWxkcmVuIHx8IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8g5Y+25a2Q6IqC54K5XG4gICAgICAgICAgICAgICAgLy90aGlzLnNlbGVjdGVkS2V5cy5lbnN1cmUoaXRlbS5rZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRLZXlzID0gW2l0ZW0ua2V5XTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2soaXRlbSwga2V5LCBrZXlQYXRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g6Z2e5Y+25a2Q6IqC54K5XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3BlbktleXMuY29udGFpbnMoaXRlbS5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbktleXMucmVtb3ZlKGl0ZW0ua2V5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5LZXlzLnB1c2goaXRlbS5rZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm9uT3BlbkNoYW5nZSh0aGlzLm9wZW5LZXlzLnRvSlNPTigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtbWVudS9tcy1tZW51LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IGNvbnRyb2xDb21wb25lbnQgZnJvbSBcIi4uL21zLWZvcm0vbXMtY29udHJvbFwiO1xuaW1wb3J0ICcuLi9tcy10cmlnZ2VyJztcblxuaW1wb3J0IHsgZ2V0Q2hpbGRUZW1wbGF0ZURlc2NyaXB0b3IsIGRlYm91bmNlIH0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuaW1wb3J0IHsgZW1pdFRvRm9ybUl0ZW0gfSBmcm9tICcuLi9tcy1mb3JtL3V0aWxzJztcblxuY29udHJvbENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRpc3BsYXlOYW1lOiAnbXMtc2VsZWN0JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy1zZWxlY3QuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgbW9kZTogJycsXG4gICAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgICBzZWxlY3Rpb246IFtdLFxuICAgICAgICByZW1vdGU6IGZhbHNlLFxuICAgICAgICByZW1vdGVNZXRob2Q6IGF2YWxvbi5ub29wLFxuXG4gICAgICAgIC8vIOS4i+aLieahhuWxleekuuWSjOaTjeS9nOmDqOWIhlxuICAgICAgICBkaXNwbGF5VmFsdWU6ICcnLFxuICAgICAgICBzaG93U2VhcmNoOiBmYWxzZSxcbiAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgICAgICBmb2N1c1NlYXJjaCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jykuc2VhcmNoLmZvY3VzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhJbkJveChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQgPT09IGVsIHx8IGF2YWxvbi5jb250YWlucyh0aGlzLiRlbGVtZW50LCBlbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRhcmdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFuZWxWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxXaWR0aCA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbFZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNTZWFyY2goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZURlbGV0ZShlKSB7XG4gICAgICAgICAgICBpZiAoKGUud2hpY2ggPT09IDggfHwgZS53aGljaCA9PT0gNDYpICYmIHRoaXMuc2VhcmNoVmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucmVtb3ZlQXQodGhpcy5zZWxlY3Rpb24ubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24udG9KU09OKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzZWxlY3Rpb24ubWFwKHMgPT4gcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgYXZhbG9uLnZtb2RlbHNbdGhpcy5wYW5lbFZtSWRdLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdGhpcy5pc011bHRpcGxlID8gdmFsdWUgOiB2YWx1ZVswXSB8fCAnJyB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2VsZWN0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVTZWxlY3Rpb24oZSwgb3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5yZW1vdmVBbGwobyA9PiBvLnZhbHVlID09PSBvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24udG9KU09OKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGlvbi5tYXAocyA9PiBzLnZhbHVlKTtcbiAgICAgICAgICAgIGF2YWxvbi52bW9kZWxzW3RoaXMucGFuZWxWbUlkXS5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gICAgICAgICAgICB0aGlzLmZvY3VzU2VhcmNoKCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHZhbHVlOiB0aGlzLmlzTXVsdGlwbGUgPyB2YWx1ZSA6IHZhbHVlWzBdIHx8ICcnIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NlbGVjdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOS4i+aLieahhuS4i+aLieWIl+ihqOmDqOWIhlxuICAgICAgICBwYW5lbFdpZHRoOiAwLFxuICAgICAgICBwYW5lbFZtSWQ6ICcnLFxuICAgICAgICBwYW5lbFZpc2libGU6IGZhbHNlLFxuICAgICAgICBwYW5lbENsYXNzOiAnYW5lLXNlbGVjdC1kcm9wZG93bicsXG4gICAgICAgIHBhbmVsVGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtc2VsZWN0LXBhbmVsLmh0bWwnKSxcbiAgICAgICAgaGFuZGxlUGFuZWxIaWRlKCkge1xuICAgICAgICAgICAgdGhpcy5wYW5lbFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAkY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGlzTXVsdGlwbGU6IHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdtdWx0aXBsZScgfHwgdGhpcy5tb2RlID09PSAndGFncyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLy8g55Sf5ZG95ZGo5pyfXG4gICAgICAgIG1hcFZhbHVlVG9TZWxlY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5vcHRpb25zLmZpbHRlcihvID0+IHZhbHVlLmNvbnRhaW5zKG8udmFsdWUpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB0aGlzLnNlbGVjdGlvblswXS5sYWJlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF2YWxvbi52bW9kZWxzW3RoaXMucGFuZWxWbUlkXS5zZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi50b0pTT04oKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGdldENoaWxkVGVtcGxhdGVEZXNjcmlwdG9yKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGdldE9wdGlvbnMoZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVtaXRUb0Zvcm1JdGVtKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3ZhbHVlJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2LnRvSlNPTigpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb1NlbGVjdGlvbih2KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdGhpcy5pc011bHRpcGxlID8gdmFsdWUgOiB2YWx1ZVswXSB8fCAnJyB9LFxuICAgICAgICAgICAgICAgICAgICBkZW55VmFsaWRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5wYW5lbFZtSWQgPSB0aGlzLiRpZCArICdfcGFuZWwnO1xuICAgICAgICAgICAgY29uc3QgaW5uZXJWbSA9IGF2YWxvbi5kZWZpbmUoe1xuICAgICAgICAgICAgICAgICRpZDogdGhpcy5wYW5lbFZtSWQsXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBbXSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc011bHRpcGxlOiB0aGlzLmlzTXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLnRvSlNPTigpLFxuICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICBnZXRGaWx0ZXJlZE9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKHRoaXMuZmlsdGVyRm4pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmlsdGVyRm4oZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnJlbW90ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChhdmFsb24uZXNjYXBlUmVnRXhwKHRoaXMuc2VhcmNoVmFsdWUpLCAnaScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVnLnRlc3QoZWwubGFiZWwpIHx8IHJlZy50ZXN0KGVsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhhbmRsZU9wdGlvbkNsaWNrKGUsIG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNNdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLnNvbWUobyA9PiBvLnZhbHVlID09PSBvcHRpb24udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucmVtb3ZlQWxsKG8gPT4gby52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucHVzaChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mb2N1c1NlYXJjaCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbb3B0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGFuZWxWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24udG9KU09OKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0aW9uLm1hcChzID0+IHMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHNlbGYuaXNNdWx0aXBsZSA/IHZhbHVlIDogdmFsdWVbMF0gfHwgJycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRpc3BsYXlWYWx1ZSA9IG9wdGlvbi5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgnc2VhcmNoVmFsdWUnLCBkZWJvdW5jZSh2ID0+IHtcbiAgICAgICAgICAgICAgICBpbm5lclZtLnNlYXJjaFZhbHVlID0gdjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW1vdGUgJiYgISF2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyVm0ubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3RlTWV0aG9kKHYpLnRoZW4ob3B0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclZtLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJWbS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ2lzTXVsdGlwbGUnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICBpbm5lclZtLmlzTXVsdGlwbGUgPSB2O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9TZWxlY3Rpb24odGhpcy52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRGlzcG9zZSgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBhdmFsb24udm1vZGVsc1t0aGlzLnBhbmVsVm1JZF07XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZnVuY3Rpb24gZ2V0T3B0aW9ucyhkZXNjcmlwdG9yKSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgICBpZiAob3B0aW9uLmlzICE9ICdtcy1zZWxlY3Qtb3B0aW9uJykgcmV0dXJuIGFjYztcbiAgICAgICAgbGV0IGxhYmVsID0gb3B0aW9uLmlubGluZVRlbXBsYXRlO1xuICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogb3B0aW9uLmlubGluZVRlbXBsYXRlIHx8ICcnLFxuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi5wcm9wcy52YWx1ZSB8fCAnJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBvcHRpb24ucHJvcHMuZGlzYWJsZWQgfHwgZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtc2VsZWN0L21zLXNlbGVjdC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGNvbnRyb2xDb21wb25lbnQgZnJvbSAnLi4vbXMtZm9ybS9tcy1jb250cm9sJztcbmltcG9ydCAnLi4vbXMtdHJpZ2dlcic7XG5pbXBvcnQgJy4uL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci12aWV3J1xuaW1wb3J0IHsgZW1pdFRvRm9ybUl0ZW0gfSBmcm9tICcuLi9tcy1mb3JtL3V0aWxzJztcblxuLyoqXG4gKiDml7bpl7TpgInmi6nnu4Tku7ZcbiAqIEBwcm9wIHZhbHVlIOe7hOS7tuWAvChpbmhlcml0KVxuICogQHByb3AgY29sIOWtl+autei3r+W+hChpbmhlcml0KVxuICogQHByb3AgZm9ybWF0IOaXpeacn+agvOW8j++8jOWPguiAgyBtb21lbnRqc++8jOm7mOiupOS4uiBISDptbTpzc1xuICogXG4gKiBAZXhhbXBsZVxuICogYGBgIGh0bWxcbiAqIFxuICogYGBgXG4gKi9cbmNvbnRyb2xDb21wb25lbnQuZXh0ZW5kKHtcbiAgICBkaXNwbGF5TmFtZTogJ21zLXRpbWVwaWNrZXInLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXRpbWVwaWNrZXIuaHRtbCcpLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHNlbGVjdGVkOiAnJyxcbiAgICAgICAgZm9ybWF0OiAnSEg6bW06c3MnLFxuICAgICAgICBjbGVhcigpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAnJztcbiAgICAgICAgICAgIGF2YWxvbi52bW9kZWxzW3RoaXMucGFuZWxWbUlkXS5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogJycgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGltZXBpY2tlci1jaGFuZ2VkJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhJbkJveChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQgPT09IGVsIHx8IGF2YWxvbi5jb250YWlucyh0aGlzLiRlbGVtZW50LCBlbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRhcmdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFuZWxWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgYXZhbG9uLnZtb2RlbHNbdGhpcy5wYW5lbFZtSWRdLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbFZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHBhbmVsVm1JZDogJycsXG4gICAgICAgIHBhbmVsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHBhbmVsQ2xhc3M6ICdhbmUtdGltZXBpY2tlci1wYW5lbC1jb250YWluZXInLFxuICAgICAgICBwYW5lbFRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImFuZS10aW1lcGlja2VyLXBhbmVsXCIgc3R5bGU9XCJvdmVyZmxvdzogYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx4bXAgaXM9XCJtcy10aW1lcGlja2VyLXZpZXdcIiA6d2lkZ2V0PVwie3ZhbHVlOkBjdXJyZW50RGF0ZUFycmF5LG9uQ2hhbmdlOkBoYW5kbGVUaW1lcGlja2VyQ2hhbmdlfVwiPjwveG1wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCxcbiAgICAgICAgaGFuZGxlUGFuZWxIaWRlKCkge1xuICAgICAgICAgICAgdGhpcy5wYW5lbFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICBtYXBWYWx1ZVRvU2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgZW1pdFRvRm9ybUl0ZW0odGhpcywge1xuICAgICAgICAgICAgICAgIHNob3dJY29uOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgndmFsdWUnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9TZWxlY3RlZCh2KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdiB9LFxuICAgICAgICAgICAgICAgICAgICBkZW55VmFsaWRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0aW1lcGlja2VyLWNoYW5nZWQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucGFuZWxWbUlkID0gdGhpcy4kaWQgKyAnX3BhbmVsJztcbiAgICAgICAgICAgIGNvbnN0IGlubmVyVm0gPSBhdmFsb24uZGVmaW5lKHtcbiAgICAgICAgICAgICAgICAkaWQ6IHRoaXMucGFuZWxWbUlkLFxuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlQXJyYXk6ICcnLFxuICAgICAgICAgICAgICAgICRtb21lbnQ6IG1vbWVudCgpLFxuICAgICAgICAgICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtb21lbnQgPSBzZWxmLnNlbGVjdGVkID8gbW9tZW50KHNlbGYuc2VsZWN0ZWQsIHNlbGYuZm9ybWF0KSA6IG1vbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlQXJyYXkgPSB0aGlzLiRtb21lbnQudG9BcnJheSgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoYW5kbGVUaW1lcGlja2VyQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBob3VyLCBtaW51dGUsIHNlY29uZCB9ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1vbWVudC5ob3VyKGhvdXIpLm1pbnV0ZShtaW51dGUpLnNlY29uZChzZWNvbmQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlQXJyYXkgPSB0aGlzLiRtb21lbnQudG9BcnJheSgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWQgPSB0aGlzLiRtb21lbnQuZm9ybWF0KHNlbGYuZm9ybWF0KTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHNlbGYuc2VsZWN0ZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0aW1lcGlja2VyLWNoYW5nZWQnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvU2VsZWN0ZWQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICBpbm5lclZtLnJlc2V0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRGlzcG9zZSgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBhdmFsb24udm1vZGVsc1t0aGlzLnBhbmVsVm1JZF07XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci50cyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxuXG5cbmltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCBjb250cm9sQ29tcG9uZW50IGZyb20gJy4uL21zLWZvcm0vbXMtY29udHJvbCc7XG5pbXBvcnQgeyBlbWl0VG9Gb3JtSXRlbSB9IGZyb20gJy4uL21zLWZvcm0vdXRpbHMnO1xuaW1wb3J0ICcuL21zLXVwbG9hZC1saXN0JztcbmltcG9ydCAnLi9tcy11cGxvYWQtY2FyZCc7XG5pbXBvcnQgVXBsb2FkZXIgZnJvbSAndXAtbG9hZGVyJztcblxuLyoqXG4gKiDmlofku7bkuIrkvKDnu4Tku7ZcbiAqIEBwcm9wIHZhbHVlIOe7hOS7tuWAvChpbmhlcml0KVxuICogQHByb3AgY29sIOWtl+autei3r+W+hChpbmhlcml0KVxuICogXG4gKiBAZXhhbXBsZVxuICogYGBgIGh0bWxcbiAqIDxtcy11cGxvYWQgOndpZGdldD1cInt2YWx1ZTpAcmVjb3JkLmF0dGFjaG1lbnQsY29sOidhdHRhY2htZW50JywkcnVsZXM6e3JlcXVpcmVkOnRydWUsdHlwZTonYXJyYXknfX1cIj5cbiAqICAgICAgPGkgY2xhc3M9XCJmYSBmYS11cGxvYWRcIj48L2k+6YCJ5oup6ZmE5Lu2XG4gKiA8L21zLXVwbG9hZD5cbiAqIGBgYFxuICovXG5jb250cm9sQ29tcG9uZW50LmV4dGVuZCh7XG4gICAgZGlzcGxheU5hbWU6ICdtcy11cGxvYWQnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXVwbG9hZC5odG1sJyksXG4gICAgc29sZVNsb3Q6ICd0cmlnZ2VyJyxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBoZWxwSWQ6ICcnLFxuICAgICAgICB0cmlnZ2VyOiAnJyxcbiAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICBmaWxlTGlzdDogW10sXG4gICAgICAgIGFjdGlvbjogJycsXG4gICAgICAgIGxpc3RUeXBlOiAndGV4dC1saXN0JyxcbiAgICAgICAgc2hvd1VwbG9hZExpc3Q6IHRydWUsXG4gICAgICAgIGJ0bkNsYXNzOiAnYnRuIGJ0bi1kZWZhdWx0JyxcbiAgICAgICAgY2FyZENsYXNzOiAnYW5lLXVwbG9hZC1zZWxlY3QtY2FyZCBhbmUtdXBsb2FkLWNhcmQtaXRlbScsXG4gICAgICAgIGJsYW5rSW1nOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PScsXG4gICAgICAgICR1cGxvYWRlcjogbnVsbCxcbiAgICAgICAgYmVmb3JlVXBsb2FkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZVJlbW92ZShmaWxlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVMaXN0LnJlbW92ZUFsbChmID0+IGYudWlkID09PSBmaWxlLnVpZCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmlsZUxpc3QuZmlsdGVyKGYgPT4gZi5zdGF0dXMgPT09ICdkb25lJykubWFwKGYgPT4gZi51cmwpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdGhpcy5zaG93VXBsb2FkTGlzdCA/IHZhbHVlIDogdmFsdWVbMF0gfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZmlsZS11cGxvYWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWFwVmFsdWVUb0ZpbGVMaXN0KHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZS5tYXAoKHVybCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1cmwgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdWlkOiAtKGkgKyAxKSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdXJsLnJlcGxhY2UoLy4qXFwvKFteXFwvXSspXFwvPy8sICckMScpLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZG9uZScsXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICBlbWl0VG9Gb3JtSXRlbSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaGVscElkID0gdGhpcy4kaWQ7XG4gICAgICAgICAgICB0aGlzLm1hcFZhbHVlVG9GaWxlTGlzdCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCd2YWx1ZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHYudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlTGlzdC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb0ZpbGVMaXN0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB2YWx1ZTogdGhpcy5zaG93VXBsb2FkTGlzdCA/IHZhbHVlIDogdmFsdWVbMF0gfSxcbiAgICAgICAgICAgICAgICAgICAgZGVueVZhbGlkYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmlsZS11cGxvYWQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kdXBsb2FkZXIgPSBVcGxvYWRlci5pbml0KHtcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYWN0aW9uLFxuICAgICAgICAgICAgICAgIGZpbGVJbnB1dDogZXZlbnQudGFyZ2V0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpLmZpbGUsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiAoZmlsZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5LiN5pSv5oyB5Zu+54mH5L+h5oGv55qE6aKE6KeI77yM5YiZ5LiN6L+b6KGM6L+H5ruk5ZKM6ZmQ5Yi2XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoZmlsZSA9PiAhZmlsZS5zaXplIHx8IHRoaXMuYmVmb3JlVXBsb2FkKGZpbGUpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU2VsZWN0OiAoZmlsZXMsIGFsbEZpbGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsbEZpbGVzLm1hcChmaWxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaG93VXBsb2FkTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUxpc3Quc2V0KDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBmaWxlLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3VwbG9hZGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYmxhbmtJbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlTGlzdC5ldmVyeShmID0+IGYudWlkICE9PSBmaWxlLmluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogZmlsZS5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICd1cGxvYWRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLmJsYW5rSW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZpbGVPYmoodGhpcy5maWxlTGlzdCwgZmlsZS5pbmRleCwgZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYuc3RhdHVzID0gJ3VwbG9hZGluZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdXBsb2FkZXIudXBsb2FkKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzOiAoZmlsZSwgbG9hZGVkLCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGaWxlT2JqKHRoaXMuZmlsZUxpc3QsIGZpbGUuaW5kZXgsIGYgPT4gZi5wcm9ncmVzcyA9IChsb2FkZWQgLyB0b3RhbCAqIDEwMCkudG9GaXhlZCgpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3VjY2VzczogKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZpbGVPYmoodGhpcy5maWxlTGlzdCwgZmlsZS5pbmRleCwgZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmLnN0YXR1cyA9ICdkb25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGYucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmLnVybCA9IHJlc3BvbnNlLnVybDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU6IChmaWxlLCBlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmlsZU9iaih0aGlzLmZpbGVMaXN0LCBmaWxlLmluZGV4LCBmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYuc3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGYudXJsID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxNQT09JztcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmlsZUxpc3QuZmlsdGVyKGYgPT4gZi5zdGF0dXMgPT09ICdkb25lJykubWFwKGYgPT4gZi51cmwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHRoaXMuc2hvd1VwbG9hZExpc3QgPyB2YWx1ZSA6IHZhbHVlWzBdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmlsZS11cGxvYWQnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkRpc3Bvc2UoZXZlbnQpIHtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVGaWxlT2JqKGZpbGVMaXN0LCB1aWQsIGNhbGxiYWNrKSB7XG4gICAgZmlsZUxpc3QuZm9yRWFjaChmID0+IHtcbiAgICAgICAgaWYgKGYudWlkID09PSB1aWQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGYpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtbG9hZGluZy9tcy1sb2FkaW5nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCAnLi4vbXMtc2VsZWN0JztcbmltcG9ydCAnLi9tcy1jYWxlbmRhci15ZWFyLXZpZXcnO1xuXG5hdmFsb24uY29tcG9uZW50KCdtcy1jYWxlbmRhcicsIHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy1jYWxlbmRhci5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAkdmFsdWU6IG51bGwsXG4gICAgICAgICRzZWxlY3RlZDogbnVsbCxcbiAgICAgICAgd2Vla1N0YXJ0OiAwLFxuICAgICAgICBzaG93SGVhZGVyOiB0cnVlLFxuICAgICAgICBkaXNhYmxlZERhdGUoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRNb250aDogJycsXG4gICAgICAgIGN1cnJlbnRZZWFyOiAwLFxuICAgICAgICB3ZWVrZGF5czogW10sXG4gICAgICAgIGN1cnJlbnRZZWFyT3B0aW9uczogW10sXG4gICAgICAgIG1vbnRoT3B0aW9uczogW10sXG4gICAgICAgIHRhYmxlOiBbXSxcbiAgICAgICAgaGFuZGxlWWVhckNoYW5nZShlKSB7XG4gICAgICAgICAgICB0aGlzLiR2YWx1ZS55ZWFyKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgdGhpcy5jYWxjVGFibGUodGhpcy4kdmFsdWUuY2xvbmUoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZU1vbnRoQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgIHRoaXMuJHZhbHVlLm1vbnRoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2FsY1RhYmxlKHRoaXMuJHZhbHVlLmNsb25lKCkpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVEYXRlQ2xpY2soZWwpIHtcbiAgICAgICAgICAgIGlmIChlbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJHNlbGVjdGVkLnllYXIodGhpcy5jdXJyZW50WWVhcikubW9udGgodGhpcy5jdXJyZW50TW9udGgpLmRhdGUoZWwuZGF0ZSk7XG4gICAgICAgICAgICBpZiAoZWwucHJldk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0ZWQuc3VidHJhY3QoMSwgJ21vbnRocycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsLm5leHRNb250aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGVkLmFkZCgxLCAnbW9udGhzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiR2YWx1ZSA9IHRoaXMuJHNlbGVjdGVkO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLiRzZWxlY3RlZC5jbG9uZSgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2FsZW5kYXItY2hhbmdlZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g5piv5ZCm5pyJ5b+F6KaB5YaN6K6h566X5pu05paw5LiA5qyh77yfXG4gICAgICAgICAgICB0aGlzLmNhbGNUYWJsZSh0aGlzLiR2YWx1ZS5jbG9uZSgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2U6IGF2YWxvbi5ub29wLFxuICAgICAgICBjYWxjVGFibGUobTogbW9tZW50Lk1vbWVudCkge1xuICAgICAgICAgICAgbGV0IGksIGo7XG4gICAgICAgICAgICAvLyDov5nkuKrmnIjnmoTnrKzkuIDlpKlcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG0uY2xvbmUoKS5zdGFydE9mKCdtb250aCcpO1xuICAgICAgICAgICAgLy8g6L+Z5Liq5pyI55qE5pyA5ZCO5LiA5aSpXG4gICAgICAgICAgICBjb25zdCBsYXN0RGF5T2ZNb250aCA9IG0uY2xvbmUoKS5lbmRPZignbW9udGgnKTtcbiAgICAgICAgICAgIC8vIOS4iuS4quaciOeahOacgOWQjuS4gOWkqVxuICAgICAgICAgICAgY29uc3QgbGFzdERheU9mUHJldk1vbnRoID0gZmlyc3REYXlPZk1vbnRoLmNsb25lKCkuc3VidHJhY3QoMSwgJ2RheXMnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gKGZpcnN0RGF5T2ZNb250aC5kYXkoKSAtIHRoaXMud2Vla1N0YXJ0ICsgNykgJSA3O1xuICAgICAgICAgICAgY29uc3QgcHJldkxhc3REYXRlID0gbGFzdERheU9mUHJldk1vbnRoLmRhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3REYXRlID0gbGFzdERheU9mTW9udGguZGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgdGFibGUgPSBbXTtcbiAgICAgICAgICAgIGxldCBwYXNzZWQgPSAwO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlUm93ID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IDc7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2TW9udGggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRNb250aCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCAmJiBqIDwgZmlyc3REYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS4iuaciOe7k+adn+mDqOWIhlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2FuZS1jYWxlbmRhci1wcmV2LW1vbnRoLWNlbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZNb250aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZERhdGUoK20uY2xvbmUoKS5zdWJ0cmFjdCgxLCAnbW9udGhzJykuZGF0ZShwcmV2TGFzdERhdGUgLSBmaXJzdERheSArIGogKyAxKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2FuZS1jYWxlbmRhci1kaXNhYmxlZC1jZWxsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZVJvdy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldk1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb250aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBwcmV2TGFzdERhdGUgLSBmaXJzdERheSArIGogKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXNzZWQgKyAxID4gbGFzdERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS4i+aciOW8gOWni+mDqOWIhlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2FuZS1jYWxlbmRhci1uZXh0LW1vbnRoLWNlbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb250aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZERhdGUoK20uY2xvbmUoKS5hZGQoMSwgJ21vbnRocycpLmRhdGUocGFzc2VkICsgMSAtIGxhc3REYXRlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2FuZS1jYWxlbmRhci1kaXNhYmxlZC1jZWxsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZVJvdy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldk1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb250aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiArK3Bhc3NlZCAtIGxhc3REYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacrOaciOmDqOWIhlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vbWVudCgpLmlzU2FtZShtLmNsb25lKCkuZGF0ZShwYXNzZWQgKyAxKSwgJ2RheScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2FuZS1jYWxlbmRhci10b2RheScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJHNlbGVjdGVkLmlzU2FtZShtLmNsb25lKCkuZGF0ZShwYXNzZWQgKyAxKSwgJ2RheScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2FuZS1jYWxlbmRhci1zZWxlY3RlZC1kYXknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkRGF0ZSgrbS5jbG9uZSgpLmRhdGUocGFzc2VkICsgMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKCdhbmUtY2FsZW5kYXItZGlzYWJsZWQtY2VsbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVSb3cucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZNb250aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogKytwYXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhYmxlLnB1c2godGFibGVSb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50YWJsZSA9IHRhYmxlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9udGggPSBtLmZvcm1hdCgnTU1NJyk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRZZWFyID0gbS55ZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRZZWFyT3B0aW9ucyA9IGF2YWxvbi5yYW5nZSh0aGlzLmN1cnJlbnRZZWFyIC0gMTAsIHRoaXMuY3VycmVudFllYXIgKyA5KS5tYXAoeSA9PiAoeyBsYWJlbDogeSwgdmFsdWU6IHkgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJHZhbHVlID0gbW9tZW50KCk7XG4gICAgICAgICAgICB0aGlzLiRzZWxlY3RlZCA9IG1vbWVudCgpO1xuICAgICAgICAgICAgY29uc3Qgd2Vla2RheXMgPSBtb21lbnQubG9jYWxlRGF0YSgpLndlZWtkYXlzTWluKCk7XG4gICAgICAgICAgICBhdmFsb24ucmFuZ2UodGhpcy53ZWVrU3RhcnQpLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICAgICAgd2Vla2RheXMucHVzaCh3ZWVrZGF5cy5zaGlmdCgpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLndlZWtkYXlzID0gd2Vla2RheXM7XG4gICAgICAgICAgICBjb25zdCBtb250aExpc3QgPSBtb21lbnQubG9jYWxlRGF0YSgpLm1vbnRoc1Nob3J0KCk7XG4gICAgICAgICAgICB0aGlzLm1vbnRoT3B0aW9ucyA9IG1vbnRoTGlzdC5tYXAobSA9PiAoeyBsYWJlbDogbSwgdmFsdWU6IG0gfSkpO1xuICAgICAgICAgICAgdGhpcy5jYWxjVGFibGUodGhpcy4kdmFsdWUuY2xvbmUoKSk7XG5cbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLiR2YWx1ZS50b0FycmF5KCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCd2YWx1ZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHZhbHVlID0gdGhpcy4kc2VsZWN0ZWQgPSBtb21lbnQodi5zcGxpdCgnLCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGNUYWJsZSh0aGlzLiR2YWx1ZS5jbG9uZSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1jYWxlbmRhci9tcy1jYWxlbmRhci50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCAqIGFzIGJvb3Rib3ggZnJvbSAnYm9vdGJveCc7XG5pbXBvcnQgeyBwYXJzZVNsb3RUb1ZNb2RlbCB9IGZyb20gJy4uLy4uL2FuZS11dGlsJztcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtZGlhbG9nJywge1xuICAgIHRlbXBsYXRlOiAnPGRpdiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCIgLz48c2xvdCBuYW1lPVwiYm9keVwiLz48L2Rpdj4nLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGJvZHk6ICdibGFuaycsXG4gICAgICAgICRkaWFsb2c6IG51bGwsXG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBzaXplOiAnJyxcbiAgICAgICAgdXBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgJGlubmVyVm06ICcnLFxuICAgICAgICBvbk9rKCkge30sXG4gICAgICAgIG9uQ2FuY2VsKCkge30sXG4gICAgICAgIG9uSW5pdChldmVudCkge1xuICAgICAgICAgICAgdmFyIHZtID0gZXZlbnQudm1vZGVsO1xuICAgICAgICAgICAgdm0uJHdhdGNoKCdzaG93JywgKG5ld1YpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobmV3Vikge1xuICAgICAgICAgICAgICAgICAgICB2bS4kZGlhbG9nID0gYm9vdGJveC5kaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdm0uYm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAne3t0aXRsZX19JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHZtLnNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+S/neWtmCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5vbk9rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+WPlua2iCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J0bi1kZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5vbkNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS5vbignaGlkZGVuLmJzLm1vZGFsJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcubW9kYWwuaW4nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdzaG93bi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdm0uJGRpYWxvZy5maW5kKCcubW9kYWwtY29udGVudCcpLmF0dHIoJzpjb250cm9sbGVyJywgdGhpcy4kaW5uZXJWbSk7XG4gICAgICAgICAgICAgICAgICAgIGF2YWxvbi5zY2FuKHZtLiRkaWFsb2cuZ2V0KDApKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm0uJGRpYWxvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJGRpYWxvZy5maW5kKCcuYm9vdGJveC1jbG9zZS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgICAgIHBhcnNlU2xvdFRvVk1vZGVsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5zaG93ICYmIHRoaXMuJGZpcmUoJ3Nob3cnLCB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EaXNwb3NlKGV2ZW50KSB7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWRpYWxvZy9tcy1kaWFsb2cudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgeyBmaW5kUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuXG5hdmFsb24uY29tcG9uZW50KCdtcy1mb3JtJywge1xuICAgIHRlbXBsYXRlOiBgPGZvcm0gcm9sZT1cImZvcm1cIiA6Y2xhc3M9XCJbKEBob3Jpem9udGFsID8gJ2Zvcm0taG9yaXpvbnRhbCcgOiAnJyksIChAaW5saW5lID8gJ2Zvcm0taW5saW5lJyA6ICcnKV1cIj48c2xvdCAvPjwvZm9ybT5gLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGl0ZW1zOiAnJyxcbiAgICAgICAgJGZvcm06IG51bGwsXG4gICAgICAgIHR5cGU6ICcnLFxuICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgICAgaW5saW5lOiBmYWxzZSxcbiAgICAgICAgb25Gb3JtQ2hhbmdlKG1ldGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRmb3JtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgIFttZXRhLm5hbWVdOiB7IHZhbHVlOiBtZXRhLnZhbHVlIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuX2N0eXBlXyA9ICdtcy1mb3JtJztcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5fdm1fID0gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzb2xlU2xvdDogJ2l0ZW1zJ1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy1mb3JtL21zLWZvcm0udHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbmNvbnN0IGxheW91dENvbXBvbmVudCA9IGF2YWxvbi5jb21wb25lbnQoJ21zLWxheW91dCcsIHtcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhbmUtbGF5b3V0XCIgOmNzcz1cIkBzdHlsZVwiIDpjbGFzcz1cIkBjbGFzc05hbWVcIj48c2xvdCAvPjwvZGl2PmAsXG4gICAgc29sZVNsb3Q6ICdzbG90JyxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBzdHlsZToge30sXG4gICAgICAgIGNsYXNzTmFtZTogJydcbiAgICB9XG59KTtcblxubGF5b3V0Q29tcG9uZW50LmV4dGVuZCh7XG4gICAgZGlzcGxheU5hbWU6ICdtcy1sYXlvdXQtc2lkZXInLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImFuZS1sYXlvdXQtc2lkZXJcIiA6Y3NzPVwiQHN0eWxlXCIgOmNsYXNzPVwiQGNsYXNzTmFtZVwiIDpjbGFzcy0xPVwiW0BmaXhlZD8nYW5lLWxheW91dC1maXhlZC1zaWRlcic6JyddXCI+PGRpdiBjbGFzcz1cImFuZS1sYXlvdXQtc2lkZXItaW5uZXJcIj48c2xvdCAvPjwvZGl2PjwvZGl2PmAsXG4gICAgc29sZVNsb3Q6ICdzbG90JyxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBmaXhlZDogZmFsc2UsXG4gICAgICAgIHdpZHRoOiAnMzAwcHgnXG4gICAgfVxufSk7XG5cbmxheW91dENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRpc3BsYXlOYW1lOiAnbXMtbGF5b3V0LWhlYWRlcicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYW5lLWxheW91dC1oZWFkZXJcIiA6Y3NzPVwiQHN0eWxlXCIgOmNsYXNzPVwiQGNsYXNzTmFtZVwiIDpjbGFzcy0xPVwiW0BmaXhlZD8nYW5lLWxheW91dC1maXhlZC1oZWFkZXInOicnXVwiPjxzbG90IC8+PC9kaXY+YCxcbiAgICBzb2xlU2xvdDogJ3Nsb3QnLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGZpeGVkOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6ICc2MHB4J1xuICAgIH1cbn0pO1xuXG5sYXlvdXRDb21wb25lbnQuZXh0ZW5kKHtcbiAgICBkaXNwbGF5TmFtZTogJ21zLWxheW91dC1jb250ZW50JyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhbmUtbGF5b3V0LWNvbnRlbnRcIiA6Y3NzPVwiQHN0eWxlXCIgOmNsYXNzPVwiQGNsYXNzTmFtZVwiPjxzbG90IC8+PC9kaXY+YCxcbiAgICBzb2xlU2xvdDogJ3Nsb3QnLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGZpeGVkOiBmYWxzZVxuICAgIH1cbn0pO1xuXG5sYXlvdXRDb21wb25lbnQuZXh0ZW5kKHtcbiAgICBkaXNwbGF5TmFtZTogJ21zLWxheW91dC1mb290ZXInLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImFuZS1sYXlvdXQtZm9vdGVyXCIgOmNzcz1cIkBzdHlsZVwiIDpjbGFzcz1cIkBjbGFzc05hbWVcIiA6Y2xhc3MtMT1cIltAZml4ZWQ/J2FuZS1sYXlvdXQtZml4ZWQtZm9vdGVyJzonJ11cIj48c2xvdCAvPjwvZGl2PmAsXG4gICAgc29sZVNsb3Q6ICdzbG90JyxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBmaXhlZDogZmFsc2UsXG4gICAgICAgIHdpZHRoOiAnNjBweCdcbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWxheW91dC9tcy1sYXlvdXQudHMiLCJpbXBvcnQgKiBhcyBub3R5IGZyb20gJ25vdHknO1xuXG50eXBlIG1lc3NhZ2VBcmdzID0ge1xuICAgIGNvbnRlbnQ6IHN0cmluZyxcbiAgICBkdXJhdGlvbj86IG51bWJlclxufTtcblxubGV0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGR1cmF0aW9uOiAxNTAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5mbyh7IGNvbnRlbnQsIGR1cmF0aW9uIH06IG1lc3NhZ2VBcmdzKTogdm9pZCB7XG4gICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtaW5mby1jaXJjbGVcIj48L2k+JyArIGNvbnRlbnQsXG4gICAgICAgICAgICB0eXBlOiAnaW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgbGF5b3V0OiAndG9wQ2VudGVyJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IGR1cmF0aW9uIHx8IGRlZmF1bHRPcHRpb25zLmR1cmF0aW9uXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc3VjY2Vzcyh7IGNvbnRlbnQsIGR1cmF0aW9ufTogbWVzc2FnZUFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGVjay1jaXJjbGVcIj48L2k+JyArIGNvbnRlbnQsXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBsYXlvdXQ6ICd0b3BDZW50ZXInLFxuICAgICAgICAgICAgdGltZW91dDogZHVyYXRpb24gfHwgZGVmYXVsdE9wdGlvbnMuZHVyYXRpb25cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBlcnJvcih7IGNvbnRlbnQsIGR1cmF0aW9ufTogbWVzc2FnZUFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIj48L2k+JyArIGNvbnRlbnQsXG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgbGF5b3V0OiAndG9wQ2VudGVyJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IGR1cmF0aW9uIHx8IGRlZmF1bHRPcHRpb25zLmR1cmF0aW9uXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgd2FybmluZyh7IGNvbnRlbnQsIGR1cmF0aW9ufTogbWVzc2FnZUFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS13YXJuaW5nXCI+PC9pPicgKyBjb250ZW50LFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgbGF5b3V0OiAndG9wQ2VudGVyJyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IGR1cmF0aW9uIHx8IGRlZmF1bHRPcHRpb25zLmR1cmF0aW9uXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgd2Fybih7IGNvbnRlbnQsIGR1cmF0aW9ufTogbWVzc2FnZUFyZ3MpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53YXJuaW5nKHsgY29udGVudCwgZHVyYXRpb24gfSk7XG4gICAgfSxcbiAgICBjb25maWcob3B0aW9uczogbWVzc2FnZUFyZ3MpOiB2b2lkIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMuZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLW1lc3NhZ2UvbXMtbWVzc2FnZS50cyIsImltcG9ydCAqIGFzIG5vdHkgZnJvbSAnbm90eSc7XG5cbnR5cGUgbm90aWZpY2F0aW9uQXJncyA9IHtcbiAgICAvKipcbiAgICAgKiDpgJrnn6XmraPmlodcbiAgICAgKi9cbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgLyoqXG4gICAgICog6YCa55+l5qCH6aKYXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgLyoqXG4gICAgICog5rKh5pyJ55So5oi35pON5L2c55qE5oOF5Ya15LiL6YCa55+l5L+d5oyB5pi+56S655qE5pe26Ze077yI5q+r56eS77yJ77yM6buY6K6k5Li6IDUwMDBtc1xuICAgICAqL1xuICAgIHRpbWVvdXQ/OiBudW1iZXJcbn07XG5cbmxldCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0aW1lb3V0OiAzMDAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5mbyh7IG1lc3NhZ2UsIHRpdGxlLCB0aW1lb3V0IH06IG5vdGlmaWNhdGlvbkFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiB0ZW1wbGF0ZSh0aXRsZSwgbWVzc2FnZSwgJ2ZhIGZhLWluZm8tY2lyY2xlJyksXG4gICAgICAgICAgICB0eXBlOiAnaW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgdGltZW91dDogdGltZW91dCB8fCBkZWZhdWx0T3B0aW9ucy50aW1lb3V0XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc3VjY2Vzcyh7IG1lc3NhZ2UsIHRpdGxlLCB0aW1lb3V0IH06IG5vdGlmaWNhdGlvbkFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbm90eSh7XG4gICAgICAgICAgICB0ZXh0OiB0ZW1wbGF0ZSh0aXRsZSwgbWVzc2FnZSwgJ2ZhIGZhLWNoZWNrLWNpcmNsZScpLFxuICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgdGltZW91dDogdGltZW91dCB8fCBkZWZhdWx0T3B0aW9ucy50aW1lb3V0XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZXJyb3IoeyBtZXNzYWdlLCB0aXRsZSwgdGltZW91dCB9OiBub3RpZmljYXRpb25BcmdzKTogdm9pZCB7XG4gICAgICAgIG5vdHkoe1xuICAgICAgICAgICAgdGV4dDogdGVtcGxhdGUodGl0bGUsIG1lc3NhZ2UsICdmYSBmYS10aW1lcy1jaXJjbGUnKSxcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB0aW1lb3V0OiB0aW1lb3V0IHx8IGRlZmF1bHRPcHRpb25zLnRpbWVvdXRcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB3YXJuaW5nKHsgbWVzc2FnZSwgdGl0bGUsIHRpbWVvdXQgfTogbm90aWZpY2F0aW9uQXJncyk6IHZvaWQge1xuICAgICAgICBub3R5KHtcbiAgICAgICAgICAgIHRleHQ6IHRlbXBsYXRlKHRpdGxlLCBtZXNzYWdlLCAnZmEgZmEtd2FybmluZycpLFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgdGltZW91dDogdGltZW91dCB8fCBkZWZhdWx0T3B0aW9ucy50aW1lb3V0XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgd2Fybih7IG1lc3NhZ2UsIHRpdGxlLCB0aW1lb3V0IH06IG5vdGlmaWNhdGlvbkFyZ3MpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53YXJuaW5nKHsgbWVzc2FnZSwgdGl0bGUsIHRpbWVvdXQgfSk7XG4gICAgfSxcbiAgICBjb25maWcob3B0aW9uczogbm90aWZpY2F0aW9uQXJncyk6IHZvaWQge1xuICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZSh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGljb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdGl0bGUgPSB0aXRsZSA/IGA8c3Ryb25nPiR7dGl0bGV9PC9zdHJvbmc+PGJyPmAgOiAnJztcbiAgICByZXR1cm4gYDxkaXY+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCIke2ljb259IHB1bGwtbGVmdFwiIHN0eWxlPVwiZm9udC1zaXplOiAzOHB4O21pbi13aWR0aDogMzhweDt0ZXh0LWFsaWduOiBjZW50ZXI7XCI+PC9pPlxuICAgICAgICAgICAgICAgICR7dGl0bGV9XG4gICAgICAgICAgICAgICAgJHttZXNzYWdlfVxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLW5vdGlmaWNhdGlvbi9tcy1ub3RpZmljYXRpb24udHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgJy4uL21zLWNoZWNrYm94L21zLWNoZWNrYm94JztcbmltcG9ydCAnLi9tcy10YWJsZS1oZWFkZXInXG5pbXBvcnQgJy4uL21zLXBhZ2luYXRpb24vbXMtcGFnaW5hdGlvbic7XG5pbXBvcnQge1xuICAgIGZpbmRQYXJlbnRDb21wb25lbnQsXG4gICAgcGFyc2VTbG90VG9WTW9kZWwsXG4gICAgZ2V0Q2hpbGRUZW1wbGF0ZURlc2NyaXB0b3Jcbn0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuaW1wb3J0ICcuLi9tcy1sb2FkaW5nJztcblxuY29uc3QgZGVmYXVsdFBhZ2luYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudDogMSwgcGFnZVNpemU6IDEwLCB0b3RhbDogTmFOLCBvbkNoYW5nZTogYXZhbG9uLm5vb3BcbiAgICB9O1xufTtcblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtdGFibGUnLCB7XG4gICAgc29sZVNsb3Q6ICdoZWFkZXInLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXRhYmxlLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBoZWFkZXI6ICcnLFxuICAgICAgICBjb2x1bW5zOiBbXSxcbiAgICAgICAgZGF0YTogW10sXG4gICAgICAgIGtleTogJ2lkJyxcblxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgbmVlZFNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIGNoZWNrZWQ6IFtdLFxuICAgICAgICBzZWxlY3Rpb246IFtdLFxuICAgICAgICBpc0FsbENoZWNrZWQ6IGZhbHNlLFxuICAgICAgICBvblNlbGVjdDogYXZhbG9uLm5vb3AsXG4gICAgICAgIG9uU2VsZWN0QWxsOiBhdmFsb24ubm9vcCxcbiAgICAgICAgc2VsZWN0aW9uQ2hhbmdlOiBhdmFsb24ubm9vcCxcbiAgICAgICAgaGFuZGxlQ2hlY2tBbGwoZSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0Q3VycmVudFBhZ2VEYXRhKCk7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQuZW5zdXJlKHJlY29yZFt0aGlzLmtleV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5lbnN1cmUocmVjb3JkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih0aGlzLnBhZ2luYXRpb25Db25maWcudG90YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZC5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZC5yZW1vdmVBbGwoZWwgPT4gZGF0YS5tYXAocmVjb3JkID0+IHJlY29yZFt0aGlzLmtleV0pLmluZGV4T2YoZWwpICE9PSAtMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnJlbW92ZUFsbChlbCA9PiBkYXRhLmluZGV4T2YoZWwpICE9PSAtMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UodGhpcy5jaGVja2VkLCB0aGlzLnNlbGVjdGlvbi4kbW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5vblNlbGVjdEFsbChlLnRhcmdldC5jaGVja2VkLCB0aGlzLnNlbGVjdGlvbi4kbW9kZWwpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVDaGVjayhjaGVja2VkLCByZWNvcmQpIHtcbiAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkLmVuc3VyZShyZWNvcmRbdGhpcy5rZXldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5lbnN1cmUocmVjb3JkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkLnJlbW92ZShyZWNvcmRbdGhpcy5rZXldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5yZW1vdmUocmVjb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlKHRoaXMuY2hlY2tlZCwgdGhpcy5zZWxlY3Rpb24uJG1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3QocmVjb3JkLiRtb2RlbCwgY2hlY2tlZCwgdGhpcy5zZWxlY3Rpb24uJG1vZGVsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhY3Rpb25zOiBhdmFsb24ubm9vcCxcbiAgICAgICAgaGFuZGxlKHR5cGUsIGNvbCwgcmVjb3JkLCAkaW5kZXgsIC4uLmV4dHJhKSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IHJlY29yZFtjb2wuZGF0YUluZGV4XS4kbW9kZWwgfHwgcmVjb3JkW2NvbC5kYXRhSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zKHR5cGUsIHRleHQsIHJlY29yZC4kbW9kZWwsICRpbmRleCwgLi4uZXh0cmEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhZ2luYXRpb246IGRlZmF1bHRQYWdpbmF0aW9uKCksXG4gICAgICAgIHBhZ2luYXRpb25Db25maWc6IGRlZmF1bHRQYWdpbmF0aW9uKCksXG4gICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2UoY3VycmVudFBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkNvbmZpZy5vbkNoYW5nZShjdXJyZW50UGFnZSk7XG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25Db25maWcuY3VycmVudCA9IGN1cnJlbnRQYWdlO1xuXG4gICAgICAgICAgICB0aGlzLiRmaXJlKCdjaGVja2VkLmxlbmd0aCcsIHRoaXMuY2hlY2tlZC5sZW5ndGgpO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnBhZ2luYXRpb25Db25maWcuJG1vZGVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q3VycmVudFBhZ2VEYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuICFpc05hTih0aGlzLnBhZ2luYXRpb25Db25maWcudG90YWwpID8gdGhpcy5kYXRhIDogdGhpcy5kYXRhLnNsaWNlKFxuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkNvbmZpZy5wYWdlU2l6ZSAqICh0aGlzLnBhZ2luYXRpb25Db25maWcuY3VycmVudCAtIDEpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkNvbmZpZy5wYWdlU2l6ZSAqIHRoaXMucGFnaW5hdGlvbkNvbmZpZy5jdXJyZW50XG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICAkY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHRvdGFsKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNOYU4odGhpcy5wYWdpbmF0aW9uQ29uZmlnLnRvdGFsKSA/IHRoaXMucGFnaW5hdGlvbkNvbmZpZy50b3RhbCA6IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25DaGFuZ2U6IGF2YWxvbi5ub29wLFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBnZXRDaGlsZFRlbXBsYXRlRGVzY3JpcHRvcih0aGlzKTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4ucHJvcHMudHlwZSA9PSAnc2VsZWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleSA9IGNvbHVtbi5wcm9wcy5kYXRhSW5kZXggfHwgdGhpcy5rZXk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmVlZFNlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IGdldENvbHVtbkNvbmZpZyhkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdjaGVja2VkLmxlbmd0aCcsIChuZXdWKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2VLZXlzID0gdGhpcy5nZXRDdXJyZW50UGFnZURhdGEoKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHJlY29yZCA9PiByZWNvcmRbdGhpcy5rZXldKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWxsQ2hlY2tlZCA9IGN1cnJlbnRQYWdlS2V5c1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGtleSA9PiB0aGlzLmNoZWNrZWQuY29udGFpbnMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA9PSBjdXJyZW50UGFnZUtleXMubGVuZ3RoO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgnZGF0YScsICh2KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgnZGF0YS5sZW5ndGgnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdwYWdpbmF0aW9uJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgYXZhbG9uLm1peCh0aGlzLnBhZ2luYXRpb25Db25maWcsIHYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgncGFnaW5hdGlvbi5jdXJyZW50JywgdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uQ29uZmlnLmN1cnJlbnQgPSB2O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgncGFnaW5hdGlvbi5wYWdlU2l6ZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkNvbmZpZy5wYWdlU2l6ZSA9IHY7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdwYWdpbmF0aW9uLnRvdGFsJywgdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uQ29uZmlnLnRvdGFsID0gdjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3BhZ2luYXRpb24ub25DaGFuZ2UnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25Db25maWcub25DaGFuZ2UgPSB2O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRmaXJlKCdwYWdpbmF0aW9uJywgdGhpcy5wYWdpbmF0aW9uLiRtb2RlbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgfSxcbiAgICAgICAgb25EaXNwb3NlKHZtLCBlbCkge1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGdldENvbHVtbkNvbmZpZyhkZXNjcmlwdG9yLCBsZXZlbCA9IDEpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5yZWR1Y2UoKGFjYywgY29sdW1uKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uaXMgIT0gJ21zLXRhYmxlLWhlYWRlcicpIHJldHVybiBhY2M7XG4gICAgICAgIGlmIChjb2x1bW4ucHJvcHMudHlwZSA9PSAnc2VsZWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5saW5lVGVtcGxhdGUgPSBjb2x1bW4uaW5saW5lVGVtcGxhdGU7XG4gICAgICAgIGlubGluZVRlbXBsYXRlID0gaW5saW5lVGVtcGxhdGUucmVwbGFjZSgvKG1zLXw6KXNraXA9XCJbXlwiXSpcIi9nLCAnJyk7XG4gICAgICAgIGlubGluZVRlbXBsYXRlID0gaW5saW5lVGVtcGxhdGUucmVwbGFjZSgvPFxccyptcy10YWJsZS1oZWFkZXJbXj5dKj4uKjxcXC9cXHMqbXMtdGFibGUtaGVhZGVyXFxzKj4vZywgJycpO1xuICAgICAgICBpbmxpbmVUZW1wbGF0ZSA9IGlubGluZVRlbXBsYXRlLnJlcGxhY2UoLyhtcy18OiljbGljaz1cImhhbmRsZVxcKChbXlwiXSopXFwpXCIvZywgKCQwLCAkMSwgJDIsICQzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7JDF9Y2xpY2s9XCJoYW5kbGUoJHskMn0sKVwiYC5yZXBsYWNlKC8sLywgJywgY29sLCByZWNvcmQsICRpbmRleCwnKS5yZXBsYWNlKC8sXFwpLywgJyknKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBjb2x1bW4ucHJvcHMudGl0bGUsXG4gICAgICAgICAgICBkYXRhSW5kZXg6IGNvbHVtbi5wcm9wcy5kYXRhSW5kZXggfHwgJycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogL15cXHMqJC8udGVzdChpbmxpbmVUZW1wbGF0ZSkgPyAne3tyZWNvcmQuJyArIGNvbHVtbi5wcm9wcy5kYXRhSW5kZXggKyAnfX0nIDogaW5saW5lVGVtcGxhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2MuY29uY2F0KGdldENvbHVtbkNvbmZpZyhjb2x1bW4uY2hpbGRyZW4sIGxldmVsICsgMSkpO1xuICAgIH0sIFtdKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXRhYmxlL21zLXRhYmxlLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0IGNvbnRyb2xDb21wb25lbnQgZnJvbSAnLi4vbXMtZm9ybS9tcy1jb250cm9sJztcbmltcG9ydCB7IGVtaXRUb0Zvcm1JdGVtIH0gZnJvbSAnLi4vbXMtZm9ybS91dGlscyc7XG5pbXBvcnQgeyBmaW5kUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYW5lLXV0aWwnO1xuXG4vKipcbiAqIOWkmuihjOaWh+acrOi+k+WFpee7hOS7tlxuICogQHByb3AgdmFsdWUg57uE5Lu25YC8KGluaGVyaXQpXG4gKiBAcHJvcCBjb2wg5a2X5q616Lev5b6EKGluaGVyaXQpXG4gKiBAcHJvcCByb3dzIOaWh+acrOahhuihjOaVsFxuICogXG4gKiBAZXhhbXBsZVxuICogYGBgIGh0bWxcbiAqIDxtcy10ZXh0YXJlYSA6d2lkZ2V0PVwie3ZhbHVlOiBAYmlvLCBjb2w6ICdiaW8nLCByb3dzOiAzfVwiPjwvbXMtdGV4dGFyZWE+XG4gKiBgYGBcbiAqL1xuY29udHJvbENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRpc3BsYXlOYW1lOiAnbXMtdGV4dGFyZWEnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXRleHRhcmVhLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICByb3dzOiAnJyxcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIG1hcFZhbHVlVG9UZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICBlbWl0VG9Gb3JtSXRlbSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCd2YWx1ZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwVmFsdWVUb1RleHQodik7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdmFsdWU6IHYgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVueVZhbGlkYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hhbmdlZCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tYXBWYWx1ZVRvVGV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdGV4dGFyZWEvbXMtdGV4dGFyZWEudHMiLCJpbXBvcnQgJy4vbXMtY2FsZW5kYXInO1xuaW1wb3J0ICcuL21zLWNhbGVuZGFyLnNjc3MnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtY2FsZW5kYXIvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY29uc3QgbW9udGhUYWJsZSA9IFtdO1xuXG5hdmFsb24uY29tcG9uZW50KCdtcy1jYWxlbmRhci15ZWFyLXZpZXcnLCB7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtY2FsZW5kYXIteWVhci12aWV3Lmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICB0YWJsZTogW10sXG4gICAgICAgIC8vIDAt5pyI6KeG5Zu+77yMMS3lubTop4blm77vvIwyLeWNgeW5tOinhuWbvu+8jDMt55m+5bm06KeG5Zu+XG4gICAgICAgIHZpZXc6IDEsXG4gICAgICAgIGN1cnJlbnRNb250aDogJycsXG4gICAgICAgIGN1cnJlbnRZZWFyOiAwLFxuICAgICAgICBpc1NlbGVjdGVkKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2VsZWN0OiBhdmFsb24ubm9vcCxcbiAgICAgICAgaGFuZGxlQ2VsbENsaWNrKGVsKSB7XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0KGVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KCkge1xuICAgICAgICAgICAgY29uc3QgbW9udGhMaXN0ID0gbW9tZW50LmxvY2FsZURhdGEoKS5tb250aHNTaG9ydCgpO1xuICAgICAgICAgICAgaWYgKG1vbnRoVGFibGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgWzAsIDMsIDYsIDldLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vbnRoVGFibGUucHVzaChtb250aExpc3Quc2xpY2UobiwgbiArIDMpLm1hcChtID0+ICh7IGxhYmVsOiBtLCB2YWx1ZTogbSB9KSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ3ZpZXcnLCB2ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydE9mRGVjYWRlID0gdGhpcy5jdXJyZW50WWVhciAtIHRoaXMuY3VycmVudFllYXIgJSAxMDtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydE9mQ2VudHVyeSA9IHRoaXMuY3VycmVudFllYXIgLSB0aGlzLmN1cnJlbnRZZWFyICUgMTAwO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlID0gbW9udGhUYWJsZTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlID0gWzAsIDMsIDYsIDldLm1hcChuID0+IGF2YWxvbi5yYW5nZShzdGFydE9mRGVjYWRlIC0gMSwgc3RhcnRPZkRlY2FkZSArIDExKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShuLCBuICsgMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKG0gPT4gKHsgbGFiZWw6IG0sIHZhbHVlOiBtIH0pKSk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlID0gWzAsIDMsIDYsIDldLm1hcChuID0+IGF2YWxvbi5yYW5nZShzdGFydE9mQ2VudHVyeSAtIDEwLCBzdGFydE9mQ2VudHVyeSArIDExMCwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKG4sIG4gKyAzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAobSA9PiAoeyBsYWJlbDogYCR7bX0tJHttICsgOX1gLCB2YWx1ZTogbSB9KSkpOyBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdjdXJyZW50WWVhcicsIHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGZpcmUoJ3ZpZXcnLCB0aGlzLnZpZXcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWNhbGVuZGFyL21zLWNhbGVuZGFyLXllYXItdmlldy50cyIsImltcG9ydCAnLi9tcy1jaGVja2JveCc7XG5pbXBvcnQgJy4vbXMtY2hlY2tib3gtZ3JvdXAnO1xuaW1wb3J0ICcuL21zLWNoZWNrYm94LnNjc3MnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvaW5kZXgudHMiLCJpbXBvcnQgJy4vbXMtZGF0ZXBpY2tlcic7XG5pbXBvcnQgJy4vbXMtZGF0ZXBpY2tlci5zY3NzJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWRhdGVwaWNrZXIvaW5kZXgudHMiLCJpbXBvcnQgJy4vbXMtZGlhbG9nJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWRpYWxvZy9pbmRleC50cyIsImltcG9ydCAqIGFzIGF2YWxvbiBmcm9tICdhdmFsb24yJztcbmltcG9ydCB7IGZpbmRQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hbmUtdXRpbCc7XG5cbi8qKlxuICog6KGo5Y2V6aG557uE5Lu2XG4gKiBAcHJvcCBsYWJlbCDooajljZXpobnmoIfnrb5cbiAqIFxuICogQGV4YW1wbGVcbiAqIGBgYCBodG1sXG4gKiA8bXMtZm9ybS1pdGVtIDp3aWRnZXQ9XCJ7bGFiZWw6ICfmoIfpopgnfVwiPlxuICAgICAgICA8bXMtaW5wdXQgOndpZGdldD1cInt2YWx1ZTogQHRpdGxlLCBjb2w6ICd0aXRsZSd9XCI+PC9tcy1pbnB1dD5cbiAgICA8L21zLWZvcm0taXRlbT5cbiAqIGBgYFxuICovXG5hdmFsb24uY29tcG9uZW50KCdtcy1mb3JtLWl0ZW0nLCB7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXMtZm9ybS1pdGVtLmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICAkZm9ybVZtOiBudWxsLFxuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIGNvbnRyb2w6ICcnLFxuICAgICAgICBpbmxpbmU6IGZhbHNlLFxuICAgICAgICBkaXJ0eTogZmFsc2UsXG4gICAgICAgIHJlYXNvbnM6IFtdLFxuICAgICAgICBoYXNSdWxlczogZmFsc2UsXG4gICAgICAgIHNob3dJY29uOiB0cnVlLFxuICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICBpbmxpbmVGb3JtR3JvdXBTdHlsZTogeyB2ZXJ0aWNhbEFsaWduOiAndG9wJyB9LFxuICAgICAgICBpbmxpbmVNZXNzYWdlU3R5bGU6IHsgbWFyZ2luQm90dG9tOiAwIH0sXG4gICAgICAgIG9uRmllbGRDaGFuZ2UoZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgdGhpcy4kZm9ybVZtLnR5cGUgIT09ICdzZWFyY2gnICYmIHRoaXMuJGZvcm1WbS4kZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XG4gICAgICAgICAgICAgICAgW2Rlc2NyaXB0b3IubmFtZV06IHsgdmFsdWU6IGRlc2NyaXB0b3IudmFsdWUsIGRlbnlWYWxpZGF0ZTogZGVzY3JpcHRvci5kZW55VmFsaWRhdGUgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWRlc2NyaXB0b3IucnVsZXMpIHJldHVybiA7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci5zaG93SWNvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJY29uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgZGVzY3JpcHRvci5zaG93SWNvbjtcbiAgICAgICAgICAgIHRoaXMuaGFzUnVsZXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kZm9ybVZtLiRmb3JtLmFkZEZpZWxkcyh7XG4gICAgICAgICAgICAgICAgW2Rlc2NyaXB0b3IubmFtZV06IHsgcnVsZXM6IGRlc2NyaXB0b3IucnVsZXMgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRmb3JtVm0uJGZvcm0ub24oJ2Vycm9yJyArIGRlc2NyaXB0b3IubmFtZSwgKHJlYXNvbnMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYXNvbnMgPSByZWFzb25zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRmb3JtVm0uJGZvcm0ub24oJ3Jlc2V0JywgZmllbGRzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAofk9iamVjdC5rZXlzKGZpZWxkcykuaW5kZXhPZihkZXNjcmlwdG9yLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFzb25zID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRm9ybUNoYW5nZShtZXRhKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZm9ybVZtLiRmb3JtLmF1dG9Bc3luY0NoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kZm9ybVZtLm9uRm9ybUNoYW5nZShtZXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0KGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuX2N0eXBlXyA9ICdtcy1mb3JtLWl0ZW0nO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0Ll92bV8gPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy4kZm9ybVZtID0gZmluZFBhcmVudENvbXBvbmVudCh0aGlzLCAnbXMtZm9ybScpO1xuICAgICAgICAgICAgaWYgKHRoaXMuJGZvcm1WbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93ICdtcy1mb3JtLWl0ZW0g5b+F6aG75pS+5ZyoIG1zLWZvcm0g5YaFJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5saW5lID0gdGhpcy4kZm9ybVZtLmlubGluZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeShldmVudCkge1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzb2xlU2xvdDogJ2NvbnRyb2wnXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWZvcm0vbXMtZm9ybS1pdGVtLnRzIiwiaW1wb3J0ICcuL21zLWlucHV0JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWlucHV0L2luZGV4LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuXG4vKipcbiAqIGxvYWRpbmcg5oyH5LukXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBgYGAgaHRtbFxuICogPHRhYmxlIDpsb2FkaW5nPVwidHJ1ZVwiPi4uLjwvdGFibGU+XG4gKiBgYGBcbiAqL1xuYXZhbG9uLmRpcmVjdGl2ZSgnbG9hZGluZycsIHtcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRQb3NpdGlvblN0eWxlID0gJyc7XG4gICAgfSxcbiAgICB1cGRhdGUodmRvbSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb20gPSB2ZG9tLmRvbTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdsb2JhbC5nZXRDb21wdXRlZFN0eWxlID8gZ2xvYmFsLmdldENvbXB1dGVkU3R5bGUoZG9tKSA6IGRvbS5jdXJyZW50U3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZG9tLm9mZnNldFdpZHRoLCBoZWlnaHQgPSBkb20uc2Nyb2xsSGVpZ2h0LCBjbGFzc05hbWUgPSBkb20uY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgfSA9IGNvbXB1dGVkU3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2xkUG9zaXRpb25TdHlsZSA9IGRvbS5zdHlsZS5wb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzlhYPntKDmmK/pmpDol4/nmoTvvIzku4DkuYjpg73kuI3lgZpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWuveW6puWSjOmrmOW6pumDveS4jeS4ujDvvIzliJnmt7vliqBsb2FkaW5n6YGu572pXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCAhPT0gMCAmJiBoZWlnaHQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFza0VsZW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50LmNsYXNzTmFtZSA9ICdhbmUtbG9hZGluZy1tYXNrJztcbiAgICAgICAgICAgICAgICAgICAgbWFza0VsZW1lbnQuaW5uZXJUZXh0ID0gJ+WKoOi9veS4rS4uLic7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50LnN0eWxlLmxlZnQgPSAwIC0gKGJvcmRlckxlZnRXaWR0aCA9PT0gJ21lZGl1bScgPyAwIDogcGFyc2VGbG9hdChib3JkZXJMZWZ0V2lkdGgpKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50LnN0eWxlLnRvcCA9IDAgLSAoYm9yZGVyVG9wV2lkdGggPT09ICdtZWRpdW0nID8gMCA6IHBhcnNlRmxvYXQoYm9yZGVyVG9wV2lkdGgpKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBtYXNrRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBtYXNrRWxlbWVudC5zdHlsZS5saW5lSGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgICAgICAgICAgICBkb20uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIX5gICR7Y2xhc3NOYW1lfSBgLmluZGV4T2YoJyBtYXNrZWQgJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5jbGFzc05hbWUgKz0gJyBtYXNrZWQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRvbS5hcHBlbmRDaGlsZChtYXNrRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBtYXNrRWxlbWVudDtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkb20gPSB2ZG9tLmRvbTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXNrRWxlbWVudCA9IHRoaXMuaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZG9tLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9sZFBvc2l0aW9uU3R5bGUgPSBkb20uc3R5bGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgbWFza0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgZG9tLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICBpZiAoIX5gICR7Y2xhc3NOYW1lfSBgLmluZGV4T2YoJyBtYXNrZWQgJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLmNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgbWFza2VkJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb20gPSB2ZG9tLmRvbTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFza0VsZW1lbnQgPSB0aGlzLmluc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBkb20uY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICBtYXNrRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vbGRQb3NpdGlvblN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb20uc3R5bGUucG9zaXRpb24gPSB0aGlzLm9sZFBvc2l0aW9uU3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZG9tLmNsYXNzTmFtZSA9IGAgJHtjbGFzc05hbWV9IGAucmVwbGFjZSgvXFxzKm1hc2tlZFxccyovLCAnICcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZURpc3Bvc2UoKSB7XG4gICAgICAgIGNvbnN0IGRvbSA9IHRoaXMubm9kZS5kb207XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgJiYgZG9tLnJlbW92ZUNoaWxkKHRoaXMuaW5zdGFuY2UpO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIOWFqOWxgCBsb2FkaW5nIOaWueazlVxuICogXG4gKiBAZXhhbXBsZVxuICogYGBgIGpzXG4gKiBpbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9jb21wb25lbnRzL21zLWxvYWRpbmcnO1xuICogTG9hZGluZy5zaG93KCk7XG4gKiBzZXRUaW1lb3V0KCgpID0+IHtcbiAqICAgTG9hZGluZy5oaWRlKCk7XG4gKiB9LCA1MDAwKVxuICogYGBgXG4gKi9cbmNvbnN0IGxvYWRpbmdEaXJlY3RpdmUgPSBhdmFsb24uZGlyZWN0aXZlc1snbG9hZGluZyddO1xuY29uc3QgZ2xvYmFsTG9hZGluZ0NvbnRleHQ6IHtcbiAgICBub2RlOiB7IGRvbTogSFRNTEVsZW1lbnQgfSxcbiAgICBpbnN0YW5jZT86IEhUTUxEaXZFbGVtZW50XG59ID0ge1xuICAgIG5vZGU6IHsgZG9tOiBkb2N1bWVudC5ib2R5IH1cbn07XG5cbmV4cG9ydCBjb25zdCBMb2FkaW5nID0ge1xuICAgIHNob3coKSB7XG4gICAgICAgIGlmIChnbG9iYWxMb2FkaW5nQ29udGV4dC5pbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlLmluaXQuY2FsbChnbG9iYWxMb2FkaW5nQ29udGV4dCk7XG4gICAgICAgICAgICBhdmFsb24ucmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUudXBkYXRlLmNhbGwoZ2xvYmFsTG9hZGluZ0NvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tOiBnbG9iYWxMb2FkaW5nQ29udGV4dC5ub2RlLmRvbVxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlLnVwZGF0ZS5jYWxsKGdsb2JhbExvYWRpbmdDb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgZG9tOiBnbG9iYWxMb2FkaW5nQ29udGV4dC5ub2RlLmRvbVxuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhpZGUoKSB7XG4gICAgICAgIGlmIChnbG9iYWxMb2FkaW5nQ29udGV4dC5pbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlLnVwZGF0ZS5jYWxsKGdsb2JhbExvYWRpbmdDb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgZG9tOiBnbG9iYWxMb2FkaW5nQ29udGV4dC5ub2RlLmRvbVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLWxvYWRpbmcvbXMtbG9hZGluZy1kaXJlY3RpdmUudHMiLCJpbXBvcnQgJy4vbXMtbWVudS5zY3NzJztcbmltcG9ydCAnLi9tcy1tZW51JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLW1lbnUvaW5kZXgudHMiLCJpbXBvcnQgbWVzc2FnZSBmcm9tICcuL21zLW1lc3NhZ2UnO1xuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLW1lc3NhZ2UvaW5kZXgudHMiLCJpbXBvcnQgbm90aWZpY2F0aW9uIGZyb20gJy4vbXMtbm90aWZpY2F0aW9uJztcbmV4cG9ydCBkZWZhdWx0IG5vdGlmaWNhdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLW5vdGlmaWNhdGlvbi9pbmRleC50cyIsImltcG9ydCAnLi9tcy1yYWRpbyc7XG5pbXBvcnQgJy4vbXMtcmFkaW8tZ3JvdXAnO1xuaW1wb3J0ICcuL21zLXJhZGlvLnNjc3MnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtcmFkaW8vaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLXNlbGVjdC1vcHRpb24nLCB7XG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIHNvbGVTbG90OiAnbGFiZWwnLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXNlbGVjdC9tcy1zZWxlY3Qtb3B0aW9uLnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuXG5hdmFsb24uY29tcG9uZW50KCdtcy10YWJsZS1oZWFkZXInLCB7XG4gICAgdGVtcGxhdGU6ICc8dGg+PHNsb3QgLz48L3RoPicsXG4gICAgc29sZVNsb3Q6ICdjb250ZW50JyxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgY29sOiAnJ1xuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdGFibGUvbXMtdGFibGUtaGVhZGVyLnRzIiwiaW1wb3J0ICcuL21zLXRleHRhcmVhJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXRleHRhcmVhL2luZGV4LnRzIiwiaW1wb3J0ICcuL21zLXRpbWVwaWNrZXInO1xuaW1wb3J0ICcuL21zLXRpbWVwaWNrZXIuc2Nzcyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy10aW1lcGlja2VyL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuaW1wb3J0ICogYXMgZG9tQWxpZ24gZnJvbSAnZG9tLWFsaWduJztcblxuYXZhbG9uLmNvbXBvbmVudCgnbXMtdHJpZ2dlcicsIHtcbiAgICB0ZW1wbGF0ZTogJzxzcGFuIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPjwvc3Bhbj4nLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgaW5uZXJWbUlkOiAnJyxcbiAgICAgICAgaW5uZXJDbGFzczogJycsXG4gICAgICAgIGlubmVyVGVtcGxhdGU6ICcnLFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIHdpdGhJbkJveCgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgIGdldFRhcmdldDogYXZhbG9uLm5vb3AsXG4gICAgICAgIG9uSGlkZTogYXZhbG9uLm5vb3AsXG4gICAgICAgIGhpZGUocGFuZWwpIHtcbiAgICAgICAgICAgIHBhbmVsLnN0eWxlLnRvcCA9ICctOTk5OXB4JztcbiAgICAgICAgICAgIHBhbmVsLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG4gICAgICAgICAgICB0aGlzLm9uSGlkZSgpO1xuICAgICAgICB9LFxuICAgICAgICBpbml0UGFuZWwocGFuZWw6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBET0MgPSBkb2N1bWVudCwgYm9keSA9IERPQy5ib2R5O1xuICAgICAgICAgICAgY29uc3QgbWVkaXVtID0gRE9DLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWVkaXVtLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLiRpZCk7XG4gICAgICAgICAgICBtZWRpdW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHdpZHRoOiAxMDAlOycpO1xuICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMuaW5uZXJDbGFzcyk7XG4gICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3otaW5kZXg6IDEwNTA7bGVmdDogLTk5OTlweDt0b3A6IC05OTk5cHg7cG9zaXRpb246IGFic29sdXRlO291dGxpbmU6IG5vbmU7b3ZlcmZsb3c6IGhpZGRlbjsnKTtcbiAgICAgICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnOmltcG9ydGFudCcsIHRoaXMuaW5uZXJWbUlkKTtcbiAgICAgICAgICAgIHBhbmVsLmlubmVySFRNTCA9IHRoaXMuaW5uZXJUZW1wbGF0ZS5yZXBsYWNlKC9cXHJ8XFxuL2csICcnKTtcbiAgICAgICAgICAgIG1lZGl1bS5hcHBlbmRDaGlsZChwYW5lbCk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1lZGl1bSk7XG5cbiAgICAgICAgICAgIGF2YWxvbi5zY2FuKHBhbmVsLCBhdmFsb24udm1vZGVsc1t0aGlzLmlubmVyVm1JZF0pO1xuXG4gICAgICAgICAgICBhdmFsb24uYmluZChET0MsICdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGUgJiYgcGFuZWwgIT09IGUudGFyZ2V0ICYmICFhdmFsb24uY29udGFpbnMocGFuZWwsIGUudGFyZ2V0KSAmJiAgIXRoaXMud2l0aEluQm94KGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUocGFuZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IERPQyA9IGRvY3VtZW50O1xuICAgICAgICAgICAgY29uc3QgcGFuZWwgPSBET0MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgndmlzaWJsZScsIHYgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UGFuZWwocGFuZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFuZWwuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoID09PSAwID8gJ2F1dG8nIDogKHRoaXMud2lkdGggKyAncHgnKTtcbiAgICAgICAgICAgICAgICAgICAgcGFuZWwuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZG9tQWxpZ24ocGFuZWwsIHRoaXMuZ2V0VGFyZ2V0KCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBbMCwgMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RhcmdldE9mZnNldDogWycwJScsJzEwMCUnXVxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RZOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKHBhbmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EaXNwb3NlKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBET0MgPSBkb2N1bWVudCwgYm9keSA9IERPQy5ib2R5O1xuICAgICAgICAgICAgY29uc3QgbWVkaXVtID0gRE9DLmdldEVsZW1lbnRCeUlkKHRoaXMuJGlkKTtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobWVkaXVtKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdHJpZ2dlci9tcy10cmlnZ2VyLnRzIiwiaW1wb3J0ICcuL21zLXVwbG9hZCc7XG5pbXBvcnQgJy4vbXMtdXBsb2FkLnNjc3MnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbXMtdXBsb2FkL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgYXZhbG9uIGZyb20gJ2F2YWxvbjInO1xuXG5hdmFsb24uY29tcG9uZW50KCdtcy11cGxvYWQtY2FyZCcsIHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tcy11cGxvYWQtY2FyZC5odG1sJyksXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgZmlsZUxpc3Q6IFtdLFxuICAgICAgICBnZXRUZXh0Q2xhc3MoZmlsZSkge1xuICAgICAgICAgICAgc3dpdGNoIChmaWxlLnN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2RvbmUnOiByZXR1cm4gJ3RleHQtcHJpbWFyeSc7XG4gICAgICAgICAgICAgICAgY2FzZSAndXBsb2FkaW5nJzogcmV0dXJuICd0ZXh0LW11dGVkJztcbiAgICAgICAgICAgICAgICBjYXNlICdlcnJvcic6IHJldHVybiAndGV4dC1kYW5nZXInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9LFxuICAgICAgICBvblJlbW92ZTogYXZhbG9uLm5vb3AsXG4gICAgICAgIGRlbChmaWxlKSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVtb3ZlKGZpbGUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tcy11cGxvYWQvbXMtdXBsb2FkLWNhcmQudHMiLCJpbXBvcnQgKiBhcyBhdmFsb24gZnJvbSAnYXZhbG9uMic7XG5cbmF2YWxvbi5jb21wb25lbnQoJ21zLXVwbG9hZC1saXN0Jywge1xuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21zLXVwbG9hZC1saXN0Lmh0bWwnKSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBmaWxlTGlzdDogW10sXG4gICAgICAgIGdldFRleHRDbGFzcyhmaWxlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGZpbGUuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZG9uZSc6IHJldHVybiAndGV4dC1wcmltYXJ5JztcbiAgICAgICAgICAgICAgICBjYXNlICd1cGxvYWRpbmcnOiByZXR1cm4gJ3RleHQtbXV0ZWQnO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzogcmV0dXJuICd0ZXh0LWRhbmdlcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVtb3ZlOiBhdmFsb24ubm9vcCxcbiAgICAgICAgZGVsKGZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMub25SZW1vdmUoZmlsZSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21zLXVwbG9hZC9tcy11cGxvYWQtbGlzdC50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLWNhbGVuZGFyL21zLWNhbGVuZGFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1jaGVja2JveC9tcy1jaGVja2JveC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtZGF0ZXBpY2tlci9tcy1kYXRlcGlja2VyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1sYXlvdXQvbXMtbGF5b3V0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1tZW51L21zLW1lbnUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXJhZGlvL21zLXJhZGlvLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1zZWxlY3QvbXMtc2VsZWN0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy10aW1lcGlja2VyL21zLXRpbWVwaWNrZXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXVwbG9hZC9tcy11cGxvYWQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhbmUtY2FsZW5kYXJcXFwiPlxcbiAgICA8dGFibGUgY2xhc3M9XFxcImFuZS1jYWxlbmRhci15ZWFyLXZpZXdcXFwiPlxcbiAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgIDx0ciA6Zm9yPVxcXCLvvIhpLCByb3cpIGluIEB0YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiYW5lLWNhbGVuZGFyLWNlbGxcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIltcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChAaXNTZWxlY3RlZChjZWxsKSA/ICdhbmUtY2FsZW5kYXItc2VsZWN0ZWQtZGF5JyA6ICcnKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChAdmlldyA+IDEgJiYgKGkgKyBqID09PSAwIHx8IGkgKiBqID09PSA2KSA/ICdhbmUtY2FsZW5kYXItcHJldi1tb250aC1jZWxsJyA6ICcnKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmZvcj1cXFwiKGosIGNlbGwpIGluIHJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtY2FsZW5kYXItZGF0ZVxcXCIgOmNsaWNrPVxcXCJAaGFuZGxlQ2VsbENsaWNrKGNlbGwpXFxcIj57e2NlbGwubGFiZWx9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICA8L3Rib2R5PlxcbiAgICA8L3RhYmxlPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLWNhbGVuZGFyL21zLWNhbGVuZGFyLXllYXItdmlldy5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImFuZS1jYWxlbmRhclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgbXMtaWY9XFxcIkBzaG93SGVhZGVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0yIGNvbC1tZC1vZmZzZXQtNFxcXCI+XFxuICAgICAgICAgICAgPG1zLXNlbGVjdCA6d2lkZ2V0PVxcXCJ7dmFsdWU6W0BjdXJyZW50WWVhcl0sb3B0aW9uczpAY3VycmVudFllYXJPcHRpb25zLG9uQ2hhbmdlOkBoYW5kbGVZZWFyQ2hhbmdlfVxcXCI+PC9tcy1zZWxlY3Q+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0yXFxcIj5cXG4gICAgICAgICAgICA8bXMtc2VsZWN0IDp3aWRnZXQ9XFxcInt2YWx1ZTpbQGN1cnJlbnRNb250aF0sb3B0aW9uczpAbW9udGhPcHRpb25zLG9uQ2hhbmdlOkBoYW5kbGVNb250aENoYW5nZX1cXFwiPjwvbXMtc2VsZWN0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8dGFibGU+XFxuICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImFuZS1jYWxlbmRhci1jb2x1bW4taGVhZGVyXFxcIiA6Zm9yPVxcXCJkYXkgaW4gQHdlZWtkYXlzXFxcIj57e2RheX19PC90aD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90aGVhZD5cXG4gICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICA8dHIgOmZvcj1cXFwid2VlayBpbiBAdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImFuZS1jYWxlbmRhci1jZWxsXFxcIiA6Y2xhc3M9XFxcImVsLmNsYXNzTmFtZVxcXCIgOmZvcj1cXFwiZWwgaW4gd2Vla1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtY2FsZW5kYXItZGF0ZVxcXCIgOmNsaWNrPVxcXCJAaGFuZGxlRGF0ZUNsaWNrKGVsKSB8IHN0b3BcXFwiPnt7ZWwuZGF0ZX19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGJvZHk+XFxuICAgIDwvdGFibGU+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtY2FsZW5kYXIvbXMtY2FsZW5kYXIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjaGVja2JveC1ncm91cFxcXCI+XFxuICAgIDxtcy1jaGVja2JveCBcXG4gICAgICAgIDp3aWRnZXQ9XFxcIntcXG4gICAgICAgICAgICBjaGVja2VkOkBzZWxlY3Rpb24uaW5kZXhPZihvcHRpb24udmFsdWUpIT0tMSxcXG4gICAgICAgICAgICBncm91cDp0cnVlLFxcbiAgICAgICAgICAgIG9uQ2hhbmdlOmZ1bmN0aW9uKCl7XFxuICAgICAgICAgICAgICAgIEB0b2dnbGVPcHRpb24ob3B0aW9uKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGlzYWJsZWQ6J2Rpc2FibGVkJyBpbiBvcHRpb24/b3B0aW9uLmRpc2FibGVkOkBkaXNhYmxlZFxcbiAgICAgICAgfVxcXCIgXFxuICAgICAgICA6Zm9yPVxcXCJvcHRpb24gaW4gb3B0aW9uc1xcXCI+e3tvcHRpb24ubGFiZWx9fTwvbXMtY2hlY2tib3g+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvbXMtY2hlY2tib3gtZ3JvdXAuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IDpjbGFzcz1cXFwiQHdyYXBwZXJcXFwiIGNsYXNzPVxcXCJhbmUtY2hlY2tib3hcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAwOyBtYXJnaW4tYm90dG9tOiAwO1xcXCI+XFxuICAgIDxsYWJlbCBjbGFzcz1cXFwiYW5lLWNoZWNrYm94LWlubmVyIGFuZS1jaGVja2JveC1pbm5lci1pZVxcXCI+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgOmF0dHI9XFxcIntpZDpAaGVscElkLGRpc2FibGVkOkBkaXNhYmxlZH1cXFwiXFxuICAgICAgICAgICAgOmR1cGxleC1jaGVja2VkPVxcXCJAY2hlY2tlZFxcXCJcXG4gICAgICAgICAgICBkYXRhLWR1cGxleC1jaGFuZ2VkPVxcXCJAb25DaGFuZ2VcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0XFxcIj48L3NwYW4+XFxuICAgIDwvbGFiZWw+XFxuICAgIDxsYWJlbCA6YXR0cj1cXFwieydmb3InOkBoZWxwSWR9XFxcIiBzdHlsZT1cXFwicGFkZGluZy1sZWZ0OiAwO1xcXCIgOmNzcz1cXFwie21hcmdpblJpZ2h0OkBncm91cD84OjB9XFxcIj48c2xvdCAvPjwvbGFiZWw+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtY2hlY2tib3gvbXMtY2hlY2tib3guaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbFxcXCIgc3R5bGU9XFxcIm92ZXJmbG93OiBhdXRvXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtaGVhZGVyXFxcIiA6dmlzaWJsZT1cXFwiQHZpZXdNb2RlID09PSAwXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wcmV2LXllYXItYnRuXFxcIiA6Y2xpY2s9XFxcIm11dGF0ZSgnc3VidHJhY3QnLCAxLCAneWVhcnMnKVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0XFxcIj48L2k+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcHJldi1tb250aC1idG5cXFwiIDpjbGljaz1cXFwibXV0YXRlKCdzdWJ0cmFjdCcsIDEsICdtb250aHMnKVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFuZ2xlLWxlZnRcXFwiPjwvaT5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1tb250aC1zZWxlY3RcXFwiIDpjbGljaz1cXFwiQGNoYW5nZVZpZXcoMSlcXFwiPnt7QGN1cnJlbnRNb250aH19PC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci15ZWFyLXNlbGVjdFxcXCIgOmNsaWNrPVxcXCJAY2hhbmdlVmlldygyKVxcXCI+e3tAY3VycmVudFllYXJ9fTwvYT5cXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1uZXh0LW1vbnRoLWJ0blxcXCIgOmNsaWNrPVxcXCJtdXRhdGUoJ2FkZCcsIDEsICd5ZWFycycpXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XFxcIj48L2k+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItbmV4dC1tb250aC1idG5cXFwiIDpjbGljaz1cXFwibXV0YXRlKCdhZGQnLCAxLCAnbW9udGhzJylcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1hbmdsZS1yaWdodFxcXCI+PC9pPlxcbiAgICAgICAgPC9hPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtaGVhZGVyXFxcIiA6dmlzaWJsZT1cXFwiQHZpZXdNb2RlID09PSAxXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wcmV2LXllYXItYnRuXFxcIiA6Y2xpY2s9XFxcIm11dGF0ZSgnc3VidHJhY3QnLCAxLCAneWVhcnMnKVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0XFxcIj48L2k+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItbW9udGgtc2VsZWN0XFxcIiA6Y2xpY2s9XFxcIkBjaGFuZ2VWaWV3KDIpXFxcIj57e0BjdXJyZW50WWVhcn19PC9hPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLW5leHQtbW9udGgtYnRuXFxcIiA6Y2xpY2s9XFxcIm11dGF0ZSgnYWRkJywgMSwgJ3llYXJzJylcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcXFwiPjwvaT5cXG4gICAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLWhlYWRlclxcXCIgOnZpc2libGU9XFxcIkB2aWV3TW9kZSA9PT0gMlxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcHJldi15ZWFyLWJ0blxcXCIgOmNsaWNrPVxcXCJtdXRhdGUoJ3N1YnRyYWN0JywgMTAsICd5ZWFycycpXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYW5nbGUtZG91YmxlLWxlZnRcXFwiPjwvaT5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1tb250aC1zZWxlY3RcXFwiIDpjbGljaz1cXFwiQGNoYW5nZVZpZXcoMylcXFwiPnt7QHN0YXJ0T2ZEZWNhZGUgKyAnLScgKyAoQHN0YXJ0T2ZEZWNhZGUgKyA5KX19PC9hPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLW5leHQtbW9udGgtYnRuXFxcIiA6Y2xpY2s9XFxcIm11dGF0ZSgnYWRkJywgMTAsICd5ZWFycycpXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XFxcIj48L2k+XFxuICAgICAgICA8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1oZWFkZXJcXFwiIDp2aXNpYmxlPVxcXCJAdmlld01vZGUgPT09IDNcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXByZXYteWVhci1idG5cXFwiIDpjbGljaz1cXFwibXV0YXRlKCdzdWJ0cmFjdCcsIDEwMCwgJ3llYXJzJylcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1hbmdsZS1kb3VibGUtbGVmdFxcXCI+PC9pPlxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPHNwYW4+e3tAc3RhcnRPZkNlbnR1cnkgKyAnLScgKyAoQHN0YXJ0T2ZDZW50dXJ5ICsgOTkpfX08L3NwYW4+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItbmV4dC1tb250aC1idG5cXFwiIDpjbGljaz1cXFwibXV0YXRlKCdhZGQnLCAxMDAsICd5ZWFycycpXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XFxcIj48L2k+XFxuICAgICAgICA8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1oZWFkZXJcXFwiIDp2aXNpYmxlPVxcXCJAdmlld01vZGUgPCAwICYmIEBzaG93VGltZVxcXCI+XFxuICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItbW9udGgtc2VsZWN0XFxcIj57e0BjdXJyZW50TW9udGh9fTwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItbW9udGgtc2VsZWN0XFxcIj57e0BjdXJyZW50RGF5fX08L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXllYXItc2VsZWN0XFxcIj57e0BjdXJyZW50WWVhcn19PC9hPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtYm9keVxcXCIgOnZpc2libGU9XFxcIkB2aWV3TW9kZSA9PT0gMFxcXCI+XFxuICAgICAgICA8bXMtY2FsZW5kYXIgOndpZGdldD1cXFwie3ZhbHVlOkBjdXJyZW50RGF0ZUFycmF5LHNob3dIZWFkZXI6ZmFsc2UsZGlzYWJsZWREYXRlOkBkaXNhYmxlZERhdGUsb25DaGFuZ2U6QGhhbmRsZUNhbGVuZGFyQ2hhbmdlfVxcXCI+PC9tcy1jYWxlbmRhcj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLWJvZHlcXFwiIDp2aXNpYmxlPVxcXCJAdmlld01vZGUgPiAwXFxcIj5cXG4gICAgICAgIDxtcy1jYWxlbmRhci15ZWFyLXZpZXcgOndpZGdldD1cXFwie2N1cnJlbnRNb250aDpAY3VycmVudE1vbnRoLGN1cnJlbnRZZWFyOkBjdXJyZW50WWVhcix2aWV3OkB2aWV3TW9kZSxvblNlbGVjdDpAaGFuZGxlWWVhclZpZXdTZWxlY3R9XFxcIj48L21zLWNhbGVuZGFyLXllYXItdmlldz5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLWJvZHlcXFwiIDp2aXNpYmxlPVxcXCJAdmlld01vZGUgPT09IC0xXFxcIj5cXG4gICAgICAgIDxtcy10aW1lcGlja2VyLXZpZXcgOndpZGdldD1cXFwie3ZhbHVlOkBjdXJyZW50RGF0ZUFycmF5LG9uQ2hhbmdlOkBoYW5kbGVUaW1lcGlja2VyQ2hhbmdlfVxcXCI+PC9tcy10aW1lcGlja2VyLXZpZXc+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlci1wYW5lbC1mb290ZXJcXFwiIDp2aXNpYmxlPVxcXCJAdmlld01vZGUgPT09IDAgJiYgIUBzaG93VGltZVxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtZm9vdGVyLWJ0blxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLXRvZGF5LWJ0blxcXCIgOmNsaWNrPVxcXCJAdG9kYXlcXFwiPuS7iuWkqTwvYT5cXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLWZvb3RlclxcXCIgOnZpc2libGU9XFxcIkB2aWV3TW9kZSA8PSAwICYmIEBzaG93VGltZVxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtZm9vdGVyLWJ0blxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLW5vdy1idG5cXFwiIDpjbGljaz1cXFwiQHRvZGF5XFxcIj7mraTliLs8L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFuZS1kYXRlcGlja2VyLXBhbmVsLW9rLWJ0blxcXCIgOmNsaWNrPVxcXCJAY29tcGxldGVcXFwiPuehruWumjwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYW5lLWRhdGVwaWNrZXItcGFuZWwtdGltZXBpY2tlci1idG5cXFwiIDpjbGljaz1cXFwiQGNoYW5nZVZpZXcoQHZpZXdNb2RlID4gLTEgPyAtMSA6IDApXFxcIj57e0B2aWV3TW9kZSA+IC0xID8gJ+mAieaLqeaXtumXtCcgOiAn6YCJ5oup5pel5pyfJ319PC9hPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1kYXRlcGlja2VyL21zLWRhdGVwaWNrZXItcGFuZWwuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhbmUtZGF0ZXBpY2tlclxcXCIgOmNzcz1cXFwie3dpZHRoOkB3aWR0aH1cXFwiPlxcbiAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2FsZW5kYXIgYW5lLWRhdGVwaWNrZXItaWNvblxcXCI+PC9pPlxcbiAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXMtY2lyY2xlIGFuZS1kYXRlcGlja2VyLWNsZWFyXFxcIiA6aWY9XFxcIkBzZWxlY3RlZC5sZW5ndGhcXFwiIDpjbGljaz1cXFwiQGNsZWFyXFxcIj48L2k+XFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbCBhbmUtZGF0ZXBpY2tlci1pbnB1dFxcXCJcXG4gICAgICAgIDpjbGljaz1cXFwiQGhhbmRsZUNsaWNrXFxcIlxcbiAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgIDphdHRyPVxcXCJ7cGxhY2Vob2xkZXI6QHBsYWNlaG9sZGVyfVxcXCJcXG4gICAgICAgIDpjc3M9XFxcInt3aWR0aDonMTAwJSd9XFxcIlxcbiAgICAgICAgOmR1cGxleD1cXFwic2VsZWN0ZWRcXFwiIC8+XFxuICAgIDxtcy10cmlnZ2VyIDp3aWRnZXQ9XFxcIntcXG4gICAgICAgIHZpc2libGU6IEBwYW5lbFZpc2libGUsXFxuICAgICAgICBpbm5lclZtSWQ6IEBwYW5lbFZtSWQsXFxuICAgICAgICBpbm5lckNsYXNzOiBAcGFuZWxDbGFzcyxcXG4gICAgICAgIGlubmVyVGVtcGxhdGU6IEBwYW5lbFRlbXBsYXRlLFxcbiAgICAgICAgd2l0aEluQm94OiBAd2l0aEluQm94LFxcbiAgICAgICAgZ2V0VGFyZ2V0OiBAZ2V0VGFyZ2V0LFxcbiAgICAgICAgb25IaWRlOiBAaGFuZGxlUGFuZWxIaWRlXFxuICAgIH1cXFwiPlxcbiAgICA8L21zLXRyaWdnZXI+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtZGF0ZXBpY2tlci9tcy1kYXRlcGlja2VyLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcXFwiIDpjc3M9XFxcIltAaW5saW5lICYmIEBpbmxpbmVGb3JtR3JvdXBTdHlsZV1cXFwiIDpjbGFzcz1cXFwiW0BjbGFzc05hbWUsKEBoYXNSdWxlcyAmJiBAZGlydHkgPyAoQHJlYXNvbnMubGVuZ3RoID8gJ2hhcy1lcnJvcicgOiAnaGFzLXN1Y2Nlc3MnKSA6ICcnKV1cXFwiPlxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIDppZj1cXFwiQGxhYmVsLmxlbmd0aFxcXCI+e3tAbGFiZWx9fTwvbGFiZWw+XFxuICAgIDxzbG90IC8+XFxuICAgIDxpIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiIDppZj1cXFwiQGhhc1J1bGVzICYmIEBzaG93SWNvblxcXCIgOmNsYXNzPVxcXCJbKEBkaXJ0eSA/ICdnbHlwaGljb24nIDogJycpLCAoQHJlYXNvbnMubGVuZ3RoID8gJ2dseXBoaWNvbi1yZW1vdmUnIDogJ2dseXBoaWNvbi1vaycpXVxcXCIgOnZpc2libGU9XFxcIkBkaXJ0eVxcXCI+PC9pPlxcbiAgICA8c21hbGwgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiIDpjc3M9XFxcIltAaW5saW5lICYmIEBpbmxpbmVNZXNzYWdlU3R5bGVdXFxcIiA6aWY9XFxcIkBoYXNSdWxlcyAmJiBAcmVhc29ucy5sZW5ndGhcXFwiPnt7QHJlYXNvbnMubGVuZ3RoID8gQHJlYXNvbnNbMF0ubWVzc2FnZSA6ICcnfX08L3NtYWxsPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLWZvcm0vbXMtZm9ybS1pdGVtLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFxcbiAgICA6ZHVwbGV4PVxcXCJAdGV4dFxcXCIgXFxuICAgIDphdHRyPVxcXCJ7bmFtZTpAY29sLHBsYWNlaG9sZGVyOkBwbGFjZWhvbGRlcn1cXFwiIFxcbiAgICA6Y3NzPVxcXCJ7d2lkdGg6QHdpZHRofVxcXCJcXG4gICAgZGF0YS1kdXBsZXgtY2hhbmdlZD1cXFwiQGhhbmRsZUNoYW5nZVxcXCI+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtaW5wdXQvbXMtaW5wdXQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dWwgY2xhc3M9XFxcImFuZS1tZW51XFxcIj5cXG4gICAgPGxpIDpjbGFzcz1cXFwiW1xcbiAgICAgICAgICAgICAgICAgICAgIWl0ZW0uY2hpbGRyZW4gfHwgaXRlbS5jaGlsZHJlbi5sZW5ndGggPT09IDAgPyAnYW5lLW1lbnUtaXRlbScgOiAnYW5lLW1lbnUtc3VibWVudScsXFxuICAgICAgICAgICAgICAgICAgICBAb3BlbktleXMuY29udGFpbnMoaXRlbS5rZXkpID8gJ2FuZS1tZW51LW9wZW4nIDogJycsXFxuICAgICAgICAgICAgICAgICAgICBAc2VsZWN0ZWRLZXlzLmNvbnRhaW5zKGl0ZW0ua2V5KSA/ICdhbmUtbWVudS1pdGVtLXNlbGVjdGVkJyA6ICcnXFxuICAgICAgICAgICAgICAgIF1cXFwiXFxuICAgICAgICA6Zm9yPVxcXCJpdGVtIGluIEBtZW51XFxcIj5cXG4gICAgICAgIDxhIDpjbGljaz1cXFwiaGFuZGxlQ2xpY2soaXRlbSwgaXRlbS5rZXksIFtpdGVtLmtleV0pXFxcIiBzdHlsZT1cXFwicGFkZGluZy1sZWZ0OiAyNHB4O1xcXCI+XFxuICAgICAgICAgICAgPGkgOmNsYXNzPVxcXCJbaXRlbS5pY29uXVxcXCI+PC9pPlxcbiAgICAgICAgICAgIDxzcGFuPnt7aXRlbS50aXRsZX19PC9zcGFuPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJhbmUtbWVudS1jYXJldCBmYVxcXCIgOmNsYXNzPVxcXCJbQG9wZW5LZXlzLmNvbnRhaW5zKGl0ZW0ua2V5KSA/ICdmYS1hbmdsZS11cCcgOiAnZmEtYW5nbGUtZG93biddXFxcIj48L2k+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcImFuZS1tZW51XFxcIj5cXG4gICAgICAgICAgICA8bGkgOmNsYXNzPVxcXCJbXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtMi5jaGlsZHJlbiB8fCBpdGVtMi5jaGlsZHJlbi5sZW5ndGggPT09IDAgPyAnYW5lLW1lbnUtaXRlbScgOiAnYW5lLW1lbnUtc3VibWVudScsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAb3BlbktleXMuY29udGFpbnMoaXRlbTIua2V5KSA/ICdhbmUtbWVudS1vcGVuJyA6ICcnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkS2V5cy5jb250YWlucyhpdGVtMi5rZXkpID8gJ2FuZS1tZW51LWl0ZW0tc2VsZWN0ZWQnIDogJydcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxcXCJcXG4gICAgICAgICAgICAgICAgOmZvcj1cXFwiaXRlbTIgaW4gaXRlbS5jaGlsZHJlblxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIDpjbGljaz1cXFwiaGFuZGxlQ2xpY2soaXRlbTIsIGl0ZW0yLmtleSwgW2l0ZW0yLmtleSxpdGVtLmtleV0pXFxcIiBzdHlsZT1cXFwicGFkZGluZy1sZWZ0OiA0OHB4O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0yLnRpdGxlfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiYW5lLW1lbnUtY2FyZXQgZmFcXFwiIDpjbGFzcz1cXFwiW0BvcGVuS2V5cy5jb250YWlucyhpdGVtMi5rZXkpID8gJ2ZhLWFuZ2xlLXVwJyA6ICdmYS1hbmdsZS1kb3duJ11cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImFuZS1tZW51XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsaSA6Y2xhc3M9XFxcIltcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbTMuY2hpbGRyZW4gfHwgaXRlbTMuY2hpbGRyZW4ubGVuZ3RoID09PSAwID8gJ2FuZS1tZW51LWl0ZW0nIDogJ2FuZS1tZW51LXN1Ym1lbnUnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZEtleXMuY29udGFpbnMoaXRlbTMua2V5KSA/ICdhbmUtbWVudS1pdGVtLXNlbGVjdGVkJyA6ICcnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmb3I9XFxcIml0ZW0zIGluIGl0ZW0yLmNoaWxkcmVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSA6Y2xpY2s9XFxcImhhbmRsZUNsaWNrKGl0ZW0zLCBpdGVtMy5rZXksIFtpdGVtMy5rZXksaXRlbTIua2V5LGl0ZW0ua2V5XSlcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6IDcycHg7XFxcIj57e2l0ZW0zLnRpdGxlfX08L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICA8L2xpPlxcbjwvdWw+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtbWVudS9tcy1tZW51Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXG4gICAgPGEgY2xhc3M9XFxcImJ0biBibHVlXFxcIiA6YXR0cj1cXFwie2Rpc2FibGVkOkBjdXJyZW50PT09MX1cXFwiIDpjbGljaz1cXFwiQHByZXZQYWdlXFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJpY29uLXN0ZXAtYmFja3dhcmRcXFwiPjwvaT7kuIrkuIDpobVcXG4gICAgPC9hPlxcbiAgICA8YSBjbGFzcz1cXFwiYnRuIHN1Y2Nlc3NcXFwiPnt7IEBjdXJyZW50IH19L3t7IE1hdGguY2VpbChAdG90YWwvQHBhZ2VTaXplKSB9fTwvYT5cXG4gICAgPGEgY2xhc3M9XFxcImJ0biBibHVlXFxcIiA6YXR0cj1cXFwie2Rpc2FibGVkOkBjdXJyZW50PT09TWF0aC5jZWlsKEB0b3RhbC9AcGFnZVNpemUpfVxcXCIgOmNsaWNrPVxcXCJAbmV4dFBhZ2VcXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImljb24tc3RlcC1mb3J3YXJkXFxcIj48L2k+5LiL5LiA6aG1XFxuICAgIDwvYT5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1wYWdpbmF0aW9uL21zLXBhZ2luYXRpb24uaHRtbFxuLy8gbW9kdWxlIGlkID0gMjQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjaGVja2JveC1ncm91cFxcXCI+XFxuICAgIDxtcy1yYWRpbyBcXG4gICAgICAgIDp3aWRnZXQ9XFxcIntcXG4gICAgICAgICAgICBjaGVja2VkOkBzZWxlY3RlZCxcXG4gICAgICAgICAgICB2YWx1ZTpvcHRpb24udmFsdWUsXFxuICAgICAgICAgICAgbmFtZTpAaGVscElkLFxcbiAgICAgICAgICAgIGdyb3VwOnRydWUsXFxuICAgICAgICAgICAgb25DaGFuZ2U6ZnVuY3Rpb24oKXtcXG4gICAgICAgICAgICAgICAgQHRvZ2dsZU9wdGlvbihhcmd1bWVudHNbMF0sIG9wdGlvbilcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRpc2FibGVkOidkaXNhYmxlZCcgaW4gb3B0aW9uP29wdGlvbi5kaXNhYmxlZDpAZGlzYWJsZWRcXG4gICAgICAgIH1cXFwiIFxcbiAgICAgICAgOmZvcj1cXFwib3B0aW9uIGluIG9wdGlvbnNcXFwiPnt7b3B0aW9uLmxhYmVsfX08L21zLXJhZGlvPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXJhZGlvL21zLXJhZGlvLWdyb3VwLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiA6Y2xhc3M9XFxcIkB3cmFwcGVyXFxcIiBjbGFzcz1cXFwiYW5lLXJhZGlvXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMDsgbWFyZ2luLWJvdHRvbTogMDtcXFwiPlxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImFuZS1yYWRpby1pbm5lciBhbmUtcmFkaW8taW5uZXItaWVcXFwiPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIlxcbiAgICAgICAgICAgIDphdHRyPVxcXCJ7aWQ6QGhlbHBJZCxkaXNhYmxlZDpAZGlzYWJsZWQsdmFsdWU6QHZhbHVlLG5hbWU6QG5hbWV9XFxcIlxcbiAgICAgICAgICAgIDpkdXBsZXg9XFxcIkBjaGVja2VkXFxcIlxcbiAgICAgICAgICAgIGRhdGEtZHVwbGV4LWNoYW5nZWQ9XFxcIkBvbkNoYW5nZVxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHRcXFwiPjwvc3Bhbj5cXG4gICAgPC9sYWJlbD5cXG4gICAgPGxhYmVsIDphdHRyPVxcXCJ7J2Zvcic6QGhlbHBJZH1cXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6IDA7XFxcIiA6Y3NzPVxcXCJ7bWFyZ2luUmlnaHQ6QGdyb3VwPzg6MH1cXFwiPjxzbG90IC8+PC9sYWJlbD5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1yYWRpby9tcy1yYWRpby5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgc3R5bGU9XFxcIm92ZXJmbG93OiBhdXRvXFxcIj5cXG4gICAgPHVsIGNsYXNzPVxcXCJhbmUtc2VsZWN0LWRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJhbmUtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbVxcXCJcXG4gICAgICAgICAgICA6Y2xhc3M9XFxcIltcXG4gICAgICAgICAgICAgICAgKEBzZWxlY3Rpb24uc29tZShmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHNbMF0udmFsdWU9PT1vcHRpb24udmFsdWV9KSA/ICdhbmUtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZCcgOiAnJyksXFxuICAgICAgICAgICAgICAgIChvcHRpb24uZGlzYWJsZWQgPyAnYW5lLXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWQnIDogJycpXFxuICAgICAgICAgICAgXVxcXCJcXG4gICAgICAgICAgICA6Zm9yPVxcXCJvcHRpb24gaW4gQGdldEZpbHRlcmVkT3B0aW9ucygpXFxcIlxcbiAgICAgICAgICAgIDpjbGljaz1cXFwiQGhhbmRsZU9wdGlvbkNsaWNrKCRldmVudCwgb3B0aW9uKVxcXCJcXG4gICAgICAgICAgICByb2xlPVxcXCJtZW51aXRlbVxcXCI+XFxuICAgICAgICAgICAge3tvcHRpb24ubGFiZWx9fVxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGVja1xcXCIgOnZpc2libGU9XFxcIkBpc011bHRpcGxlXFxcIj48L2k+XFxuICAgICAgICA8L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJhbmUtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbSBhbmUtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZFxcXCJcXG4gICAgICAgICAgICA6dmlzaWJsZT1cXFwiQGdldEZpbHRlcmVkT3B0aW9ucygpLmxlbmd0aCA8PSAwICYmIEBzZWFyY2hWYWx1ZSAmJiAhQGxvYWRpbmdcXFwiPuaXoOaVsOaNrjwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImFuZS1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtIGFuZS1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXFxcIlxcbiAgICAgICAgICAgIDp2aXNpYmxlPVxcXCJAbG9hZGluZ1xcXCI+5Yqg6L295LitPC9saT5cXG4gICAgPC91bD5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1zZWxlY3QvbXMtc2VsZWN0LXBhbmVsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYW5lLXNlbGVjdCBmb3JtLWNvbnRyb2xcXFwiXFxuICAgIDpjbGFzcz1cXFwiWyhAaXNNdWx0aXBsZSA/ICdhbmUtc2VsZWN0LW11bHRpcGxlJyA6ICcnKV1cXFwiXFxuICAgIDpjc3M9XFxcInt3aWR0aDpAd2lkdGh9XFxcIlxcbiAgICA6Y2xpY2s9XFxcIkBoYW5kbGVDbGlja1xcXCJcXG4gICAgcm9sZT1cXFwiY29tYm9ib3hcXFwiXFxuICAgIGFyaWEtYXV0b2NvbXBsZXRlPVxcXCJsaXN0XFxcIlxcbiAgICBhcmlhLWhhc3BvcHVwPVxcXCJ0cnVlXFxcIlxcbiAgICA6YXR0cj1cXFwieydhcmlhLWV4cGFuZGVkJzogQHBhbmVsVmlzaWJsZSArICcnfVxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwiYW5lLXNlbGVjdC1zZWxlY3Rpb25cXFwiIDpjbGFzcz1cXFwiWyhAaXNNdWx0aXBsZSA/ICdhbmUtc2VsZWN0LXRhZ3MnIDogJycpXVxcXCI+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImFuZS1zZWxlY3Qtc2VsZWN0ZWRcXFwiIDp2aXNpYmxlPVxcXCIhQGlzTXVsdGlwbGUgJiYgKCFAc2hvd1NlYXJjaCB8fCAhQHBhbmVsVmlzaWJsZSlcXFwiPnt7QGRpc3BsYXlWYWx1ZX19PC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiYW5lLXNlbGVjdC1jaG9pY2VcXFwiIDpmb3I9XFxcImNob2ljZSBpbiBAc2VsZWN0aW9uXFxcIj5cXG4gICAgICAgICAgICA8c3Bhbj57e2Nob2ljZS5sYWJlbH19PC9zcGFuPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCIgOmNsaWNrPVxcXCJAcmVtb3ZlU2VsZWN0aW9uKCRldmVudCwgY2hvaWNlKSB8IHN0b3BcXFwiPjwvaT5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImFuZS1zZWxlY3Qtc2VhcmNoXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImFuZS1zZWxlY3Qtc2VhcmNoLWZpZWxkXFxcIlxcbiAgICAgICAgICAgICAgICBuYW1lPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIlxcbiAgICAgICAgICAgICAgICA6ZHVwbGV4PVxcXCJAc2VhcmNoVmFsdWVcXFwiXFxuICAgICAgICAgICAgICAgIDpjc3M9XFxcInt2aXNpYmlsaXR5OihAc2hvd1NlYXJjaCAmJiBAcGFuZWxWaXNpYmxlKT8ndmlzaWJsZSc6J2hpZGRlbid9XFxcIlxcbiAgICAgICAgICAgICAgICA6a2V5ZG93bj1cXFwiQGhhbmRsZURlbGV0ZVxcXCIgLz5cXG4gICAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICAgIDxpIGNsYXNzPVxcXCJmYSBhbmUtc2VsZWN0LWFycm93XFxcIlxcbiAgICAgICAgOmNsYXNzPVxcXCJbKEBwYW5lbFZpc2libGUgPyAnZmEtY2FyZXQtdXAnIDogJ2ZhLWNhcmV0LWRvd24nKV1cXFwiXFxuICAgICAgICA6dmlzaWJsZT1cXFwiQG1vZGUgPT09ICcnXFxcIj48L2k+XFxuICAgIDxtcy10cmlnZ2VyIDp3aWRnZXQ9XFxcIntcXG4gICAgICAgIHdpZHRoOiBAcGFuZWxXaWR0aCxcXG4gICAgICAgIHZpc2libGU6IEBwYW5lbFZpc2libGUsXFxuICAgICAgICBpbm5lclZtSWQ6IEBwYW5lbFZtSWQsXFxuICAgICAgICBpbm5lckNsYXNzOiBAcGFuZWxDbGFzcyxcXG4gICAgICAgIGlubmVyVGVtcGxhdGU6IEBwYW5lbFRlbXBsYXRlLFxcbiAgICAgICAgd2l0aEluQm94OiBAd2l0aEluQm94LFxcbiAgICAgICAgZ2V0VGFyZ2V0OiBAZ2V0VGFyZ2V0LFxcbiAgICAgICAgb25IaWRlOiBAaGFuZGxlUGFuZWxIaWRlfVxcXCI+XFxuICAgIDwvbXMtdHJpZ2dlcj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tcy1zZWxlY3QvbXMtc2VsZWN0Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgOmxvYWRpbmc9XFxcIiF3aW5kb3cuaXNOYU4oQHBhZ2luYXRpb25Db25maWcudG90YWwpICYmIEBsb2FkaW5nXFxcIj5cXG4gICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCA6aWY9XFxcIkBuZWVkU2VsZWN0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxtcy1jaGVja2JveCA6d2lkZ2V0PVxcXCJ7Y2hlY2tlZDpAaXNBbGxDaGVja2VkLG9uQ2hhbmdlOkBoYW5kbGVDaGVja0FsbH1cXFwiPjwvbXMtY2hlY2tib3g+XFxuICAgICAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCA6Zm9yPVxcXCJlbCBpbiBAY29sdW1uc1xcXCI+e3tlbC50aXRsZX19PC90aD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90aGVhZD5cXG4gICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICA8dHIgOmZvcj1cXFwiKCRpbmRleCwgcmVjb3JkKSBpbiBAZ2V0Q3VycmVudFBhZ2VEYXRhKClcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGQgOmlmPVxcXCJAbmVlZFNlbGVjdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bXMtY2hlY2tib3ggOndpZGdldD1cXFwie2NoZWNrZWQ6QGNoZWNrZWQuaW5kZXhPZihyZWNvcmRbQGtleV0pIT0tMSxvbkNoYW5nZTpmdW5jdGlvbigpe0BoYW5kbGVDaGVjayhhcmd1bWVudHNbMF0udGFyZ2V0LmNoZWNrZWQscmVjb3JkKX19XFxcIj48L21zLWNoZWNrYm94PlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgOmZvcj1cXFwiY29sIGluIEBjb2x1bW5zXFxcIiA6aHRtbD1cXFwiY29sLnRlbXBsYXRlXFxcIj48L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICA8L3Rib2R5PlxcbiAgICA8L3RhYmxlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5cXG4gICAgICAgIDxtcy1wYWdpbmF0aW9uIDp3aWRnZXQ9XFxcIntjdXJyZW50OkBwYWdpbmF0aW9uQ29uZmlnLmN1cnJlbnQscGFnZVNpemU6QHBhZ2luYXRpb25Db25maWcucGFnZVNpemUsdG90YWw6QHRvdGFsLG9uQ2hhbmdlOkBoYW5kbGVQYWdlQ2hhbmdlfVxcXCI+PC9tcy1wYWdpbmF0aW9uPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXRhYmxlL21zLXRhYmxlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFxcbiAgICA6ZHVwbGV4PVxcXCJAdGV4dFxcXCIgXFxuICAgIDphdHRyPVxcXCJ7cm93czpAcm93cyxuYW1lOkBjb2x9XFxcIlxcbiAgICBkYXRhLWR1cGxleC1jaGFuZ2VkPVxcXCJAaGFuZGxlQ2hhbmdlXFxcIj48L3RleHRhcmVhPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXRleHRhcmVhL21zLXRleHRhcmVhLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYW5lLXRpbWVwaWNrZXItdmlld1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuZS10aW1lcGlja2VyLXZpZXctY29tYm9ib3hcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYW5lLXRpbWVwaWNrZXItdmlldy1zZWxlY3RcXFwiIG5hbWU9XFxcImhvdXItb3B0aW9uc1xcXCI+XFxuICAgICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgICAgICA8bGkgOmZvcj1cXFwiaG91ciBpbiBAaG91ck9wdGlvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsoaG91cj09QGN1cnJlbnRIb3VyPydhbmUtdGltZXBpY2tlci12aWV3LXNlbGVjdC1vcHRpb24tc2VsZWN0ZWQnOicnKV1cXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y2xpY2s9XFxcIkBzZWxlY3QoaG91ciwgJ2hvdXInKVxcXCI+e3tob3VyfX08L2xpPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFuZS10aW1lcGlja2VyLXZpZXctc2VsZWN0XFxcIiBuYW1lPVxcXCJtaW51dGUtb3B0aW9uc1xcXCI+XFxuICAgICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgICAgICA8bGkgOmZvcj1cXFwibWludXRlIGluIEBtaW51dGVPcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbKG1pbnV0ZT09QGN1cnJlbnRNaW51dGU/J2FuZS10aW1lcGlja2VyLXZpZXctc2VsZWN0LW9wdGlvbi1zZWxlY3RlZCc6JycpXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGljaz1cXFwiQHNlbGVjdChtaW51dGUsICdtaW51dGUnKVxcXCI+e3ttaW51dGV9fTwvbGk+XFxuICAgICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYW5lLXRpbWVwaWNrZXItdmlldy1zZWxlY3RcXFwiIG5hbWU9XFxcInNlY29uZC1vcHRpb25zXFxcIj5cXG4gICAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgICAgIDxsaSA6Zm9yPVxcXCJzZWNvbmQgaW4gQHNlY29uZE9wdGlvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsoc2Vjb25kPT1AY3VycmVudFNlY29uZD8nYW5lLXRpbWVwaWNrZXItdmlldy1zZWxlY3Qtb3B0aW9uLXNlbGVjdGVkJzonJyldXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsaWNrPVxcXCJAc2VsZWN0KHNlY29uZCwgJ3NlY29uZCcpXFxcIj57e3NlY29uZH19PC9saT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXRpbWVwaWNrZXIvbXMtdGltZXBpY2tlci12aWV3Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYW5lLXRpbWVwaWNrZXJcXFwiIDpjc3M9XFxcInt3aWR0aDpAd2lkdGh9XFxcIj5cXG4gICAgPGkgY2xhc3M9XFxcImZhIGZhLWNsb2NrLW8gYW5lLXRpbWVwaWNrZXItaWNvblxcXCI+PC9pPlxcbiAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXMtY2lyY2xlIGFuZS10aW1lcGlja2VyLWNsZWFyXFxcIiA6aWY9XFxcIkBzZWxlY3RlZC5sZW5ndGhcXFwiIDpjbGljaz1cXFwiQGNsZWFyXFxcIj48L2k+XFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbCBhbmUtdGltZXBpY2tlci1pbnB1dFxcXCJcXG4gICAgICAgIDpjbGljaz1cXFwiQGhhbmRsZUNsaWNrXFxcIlxcbiAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgIDphdHRyPVxcXCJ7cGxhY2Vob2xkZXI6QHBsYWNlaG9sZGVyfVxcXCJcXG4gICAgICAgIDpjc3M9XFxcInt3aWR0aDonMTAwJSd9XFxcIlxcbiAgICAgICAgOmR1cGxleD1cXFwic2VsZWN0ZWRcXFwiIC8+XFxuICAgIDxtcy10cmlnZ2VyIDp3aWRnZXQ9XFxcIntcXG4gICAgICAgIHZpc2libGU6IEBwYW5lbFZpc2libGUsXFxuICAgICAgICBpbm5lclZtSWQ6IEBwYW5lbFZtSWQsXFxuICAgICAgICBpbm5lckNsYXNzOiBAcGFuZWxDbGFzcyxcXG4gICAgICAgIGlubmVyVGVtcGxhdGU6IEBwYW5lbFRlbXBsYXRlLFxcbiAgICAgICAgd2l0aEluQm94OiBAd2l0aEluQm94LFxcbiAgICAgICAgZ2V0VGFyZ2V0OiBAZ2V0VGFyZ2V0LFxcbiAgICAgICAgb25IaWRlOiBAaGFuZGxlUGFuZWxIaWRlXFxuICAgIH1cXFwiPlxcbiAgICA8L21zLXRyaWdnZXI+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtdGltZXBpY2tlci9tcy10aW1lcGlja2VyLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYW5lLXVwbG9hZC1jYXJkXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5lLXVwbG9hZC1jYXJkLWl0ZW1cXFwiIDpjbGFzcz1cXFwiWyhmaWxlLnN0YXR1cyA9PT0gJ2Vycm9yJyA/ICdib3JkZXJlZC1kYW5nZXInIDogJycpXVxcXCIgOmZvcj1cXFwiKCRpbmRleCwgZmlsZSkgaW4gQGZpbGVMaXN0XFxcIj5cXG4gICAgICAgIDxpbWcgOmF0dHI9XFxcIntzcmM6ZmlsZS51cmwsYWx0OmZpbGUubmFtZSx0aXRsZTpmaWxlLm5hbWV9XFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhbmUtdXBsb2FkLWNhcmQtcHJvZ3Jlc3NcXFwiIDp2aXNpYmxlPVxcXCJmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZydcXFwiPuS4iuS8oOS4rSB7e2ZpbGUucHJvZ3Jlc3N9fSU8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYW5lLXVwbG9hZC1jYXJkLXRvb2xcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvaT5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2gtb1xcXCIgOmNsaWNrPVxcXCJkZWwoZmlsZSlcXFwiPjwvaT5cXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbXMtdXBsb2FkL21zLXVwbG9hZC1jYXJkLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHVsIGNsYXNzPVxcXCJhbmUtdXBsb2FkLWxpc3RcXFwiPlxcbiAgICA8bGkgOmZvcj1cXFwiKCRpbmRleCwgZmlsZSkgaW4gQGZpbGVMaXN0XFxcIlxcbiAgICAgICAgOmNsYXNzPVxcXCJbQGdldFRleHRDbGFzcyhmaWxlKV1cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYW5lLXVwbG9hZC1saXN0LWluZm9cXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1maWxlLW8gdGV4dC1tdXRlZFxcXCI+PC9pPlxcbiAgICAgICAgICAgIDxzcGFuIDphdHRyPVxcXCJ7dGl0bGU6ZmlsZS5uYW1lfVxcXCI+e3tmaWxlLm5hbWV9fTwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGFuZS11cGxvYWQtYnRuLWNsb3NlXFxcIiA6Y2xpY2s9XFxcImRlbChmaWxlKVxcXCI+PC9pPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImFuZS11cGxvYWQtbGlzdC1wcm9ncmVzc1xcXCIgOnZpc2libGU9XFxcImZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJ1xcXCI+5LiK5Lyg5LitIHt7ZmlsZS5wcm9ncmVzc319JTwvc3Bhbj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjay1jaXJjbGUgdGV4dC1zdWNjZXNzXFxcIiA6Y2xhc3M9XFxcIlsoZmlsZS5zdGF0dXMgPT09ICdkb25lJyA/ICcnIDogJ2hpZGUnKV1cXFwiPjwvaT5cXG4gICAgPC9saT5cXG48L3VsPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXVwbG9hZC9tcy11cGxvYWQtbGlzdC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImFuZS11cGxvYWQtY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5lLXVwbG9hZC1jYXJkLXdhbGxcXFwiIDppZj1cXFwiQHNob3dVcGxvYWRMaXN0ICYmIEBsaXN0VHlwZT09PSdwaWN0dXJlLWNhcmQnXFxcIj5cXG4gICAgICAgIDxtcy11cGxvYWQtY2FyZCA6d2lkZ2V0PVxcXCJ7ZmlsZUxpc3Q6IEBmaWxlTGlzdCwgb25SZW1vdmU6IEBoYW5kbGVSZW1vdmV9XFxcIj48L21zLXVwbG9hZC1jYXJkPlxcbiAgICA8L2Rpdj5cXG4gICAgPGxhYmVsIDp2aXNpYmxlPVxcXCIhQHNob3dVcGxvYWRMaXN0ICYmIEBsaXN0VHlwZT09PSdwaWN0dXJlLWNhcmQnICYmIEBmaWxlTGlzdC5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwiYW5lLXVwbG9hZC1jYXJkLWl0ZW1cXFwiIDphdHRyPVxcXCJ7J2Zvcic6QGhlbHBJZH1cXFwiPlxcbiAgICAgICAgPGltZyA6YXR0cj1cXFwie3NyYzpAZmlsZUxpc3RbMF0/QGZpbGVMaXN0WzBdLnVybDpibGFua0ltZyxhbHQ6QGZpbGVMaXN0WzBdP0BmaWxlTGlzdFswXS5uYW1lOicnLHRpdGxlOkBmaWxlTGlzdFswXT9AZmlsZUxpc3RbMF0ubmFtZTonJ31cXFwiPlxcbiAgICA8L2xhYmVsPlxcbiAgICA8bGFiZWwgOnZpc2libGU9XFxcIkBzaG93VXBsb2FkTGlzdCB8fCBAZmlsZUxpc3QubGVuZ3RoID09IDBcXFwiIDpjbGFzcz1cXFwiWyhAbGlzdFR5cGU9PT0ncGljdHVyZS1jYXJkJz9AY2FyZENsYXNzOkBidG5DbGFzcyldXFxcIiA6YXR0cj1cXFwieydmb3InOkBoZWxwSWR9XFxcIj48c2xvdCAvPjwvbGFiZWw+XFxuICAgIDxmb3JtPjxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBuYW1lPVxcXCJmaWxlXFxcIiA6YXR0cj1cXFwie2lkOkBoZWxwSWR9XFxcIj48L2Zvcm0+XFxuICAgIDxkaXYgOmlmPVxcXCJAc2hvd1VwbG9hZExpc3QgJiYgQGxpc3RUeXBlIT09J3BpY3R1cmUtY2FyZCdcXFwiPlxcbiAgICAgICAgPG1zLXVwbG9hZC1saXN0IDp3aWRnZXQ9XFxcIntmaWxlTGlzdDogQGZpbGVMaXN0LCBvblJlbW92ZTogQGhhbmRsZVJlbW92ZX1cXFwiPjwvbXMtdXBsb2FkLWxpc3Q+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL21zLXVwbG9hZC9tcy11cGxvYWQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInJlcXVpcmUoJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJyk7XG5yZXF1aXJlKCdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5jc3MnKTtcbnJlcXVpcmUoJ2hpZ2hsaWdodC5qcy9zdHlsZXMvYXRvbS1vbmUtbGlnaHQuY3NzJyk7XG5cbnJlcXVpcmUoJ2VzNS1zaGltJyk7XG5yZXF1aXJlKCdlczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmF1dG8nKTtcblxudmFyIGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xud2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0galF1ZXJ5O1xucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG52YXIgYm9vdGJveCA9IHJlcXVpcmUoJ2Jvb3Rib3gnKTtcbmJvb3Rib3guc2V0TG9jYWxlKCd6aF9DTicpO1xuXG52YXIgYXZhbG9uID0gcmVxdWlyZSgnYXZhbG9uMicpO1xuYXZhbG9uLmNvbmZpZyh7XG4gICAgZGVidWc6IHRydWVcbn0pO1xuaWYgKGF2YWxvbi5tc2llID09PSA4KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwgcHJvcGVydHksIG1ldGEpIHtcbiAgICAgICAgb2JqW3Byb3BlcnR5XSA9IG1ldGEudmFsdWU7XG4gICAgfVxufVxucmVxdWlyZSgnZXM1LXNoaW0vZXM1LXNoYW0nKTtcbnJlcXVpcmUoJy4vcm91dGVyJyk7XG5yZXF1aXJlKCcuLi9jb21wb25lbnRzL21zLWxheW91dCcpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL2RvYy1zaWRlYmFyL2RvYy1zaWRlYmFyJyk7XG5cbmF2YWxvbi5kZWZpbmUoe1xuICAgICRpZDogJ3Jvb3QnLFxuICAgIGN1cnJlbnRQYWdlOiAnJyxcbiAgICBicmVhZGNydW1iOiBbXVxufSk7XG5hdmFsb24uaGlzdG9yeS5zdGFydCh7XG4gICAgZmlyZUFuY2hvcjogZmFsc2Vcbn0pO1xuaWYgKCEvIyEvLnRlc3QoZ2xvYmFsLmxvY2F0aW9uLmhhc2gpKSB7XG4gICAgYXZhbG9uLnJvdXRlci5uYXZpZ2F0ZSgnLycsIDIpO1xufVxuYXZhbG9uLnNjYW4oZG9jdW1lbnQuYm9keSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kb2NzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxtcy1tZW51IDp3aWRnZXQ9XFxcInttZW51OkBtZW51LG9wZW5LZXlzOkBvcGVuS2V5cyxzZWxlY3RlZEtleXM6QHNlbGVjdGVkS2V5cyxvbkNsaWNrOkBoYW5kbGVNZW51Q2xpY2ssb25PcGVuQ2hhbmdlOkBoYW5kbGVPcGVuQ2hhbmdlfVxcXCI+PC9tcy1tZW51PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kb2NzL2NvbXBvbmVudHMvZG9jLXNpZGViYXIvZG9jLXNpZGViYXIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIHZlcnR4IChpZ25vcmVkKVxuLy8gbW9kdWxlIGlkID0gMzM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=