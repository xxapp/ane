require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('highlight.js/styles/atom-one-light.css');

require('es5-shim');
require('es6-promise/dist/es6-promise.auto');

var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
require('bootstrap');
var bootbox = require('bootbox');
bootbox.setLocale('zh_CN');

var avalon = require('avalon2');
avalon.config({
    debug: true
});
if (avalon.msie === 8) {
    Object.defineProperty = function (obj, property, meta) {
        obj[property] = meta.value;
    }
}
require('es5-shim/es5-sham');
require('./router');
require('../components/ms-layout');
require('./components/doc-sidebar/doc-sidebar');

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