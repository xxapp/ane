require('es5-shim');
require('es6-promise/dist/es6-promise.auto');

var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
require('bootstrap');
var bootbox = require('bootbox');
bootbox.setLocale('zh_CN');

var avalon = require('avalon2');
avalon.config({
    debug: false
});
if (avalon.msie === 8) {
    Object.defineProperty = function (obj, property, meta) {
        obj[property] = meta.value;
    }
}
require('es5-shim/es5-sham');