module.exports = [{
    key: 'components',
    title: '组件',
    children: [{
        key: 'component-demo-input-input',
        title: 'input 输入框',
        uri: '/input',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-input/ms-input.md'));
            });
        }
    }, {
        key: 'component-demo-textarea-textarea',
        title: 'textarea 多行输入框',
        uri: '/textarea',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-textarea/ms-textarea.md'));
             });
         }
    }, {
        key: 'component-demo-select-select',
        title: 'select 选择框',
        uri: '/select',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-select/ms-select.md'));
             });
         }
    }, {
        key: 'component-demo-radio-radio',
        title: 'radio 单选框',
        uri: '/radio',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-radio/ms-radio.md'));
             });
         }
    }, {
        key: 'component-demo-checkbox-checkbox',
        title: 'checkbox 多选框',
        uri: '/checkbox',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-checkbox/ms-checkbox.md'));
             });
         }
    }, {
        key: 'component-demo-datepicker-datepicker',
        title: 'datepicker 日期选择器',
        uri: '/datepicker',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-datepicker/ms-datepicker.md'));
             });
         }
    }, {
        key: 'component-demo-timepicker-timepicker',
        title: 'timepicker 时间选择器',
        uri: '/timepicker',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-timepicker/ms-timepicker.md'));
             });
         }
    }, {
        key: 'component-demo-upload-upload',
        title: 'upload 文件上传',
        uri: '/upload',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-upload/ms-upload.md'));
             });
         }
    }, {
        key: 'component-demo-tree-select-tree-select',
        title: 'tree-select 树选择',
        uri: '/tree-select',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-tree-select/ms-tree-select.md'));
             });
         }
    }, {
        key: 'component-demo-form-control',
        title: 'form-control 表单控件',
        uri: '/form-control',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-form/ms-control.md'));
             });
         }
    }, {
        key: 'component-demo-form-form',
        title: 'form 表单',
        uri: '/form',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-form/ms-form.md'));
             });
         }
    }, {
        key: 'component-demo-menu-menu',
        title: 'menu 菜单',
        uri: '/menu',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-menu/ms-menu.md'));
             });
         }
    }, {
        key: 'component-demo-table-table',
        title: 'table 数据表格',
        uri: '/table',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-table/ms-table.md'));
             });
         }
    }, {
        key: 'component-demo-pagination-pagination',
        title: 'pagination 分页',
        uri: '/pagination',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-pagination/ms-pagination.md'));
             });
         }
    }, {
        key: 'component-demo-tree-tree',
        title: 'tree 树',
        uri: '/tree',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-tree/ms-tree.md'));
             });
         }
    }, {
        key: 'component-demo-dialog-dialog',
        title: 'dialog 对话框',
        uri: '/dialog',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-dialog/ms-dialog.md'));
             });
         }
    }, {
        key: 'component-demo-loading-loading',
        title: 'loading 加载中蒙版',
        uri: '/loading',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-loading/ms-loading.md'));
             });
         }
    }, {
        key: 'component-demo-message-message',
        title: 'message 全局提示',
        uri: '/message',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-message/ms-message.md'));
             });
         }
    }, {
        key: 'component-demo-notification-notification',
        title: 'notification 通知提醒框',
        uri: '/notification',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-notification/ms-notification.md'));
             });
         }
    }]
}];