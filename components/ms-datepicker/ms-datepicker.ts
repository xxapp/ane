import * as avalon from 'avalon2';
import controlComponent from '../ms-form/ms-control';
import '../ms-trigger';
import '../ms-calendar';
import '../ms-timepicker/ms-timepicker-view'
import getPanelVm from './ms-datepicker-panel';
import { emitToFormItem } from '../ms-form/utils';

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
controlComponent.extend({
    displayName: 'ms-datepicker',
    template: require('./ms-datepicker.html'),
    defaults: {
        selected: '',
        format: 'YYYY-MM-DD',
        startDate: '',
        endDate: '',
        disabledDate() { return false; },
        showTime: false,
        clear() {
            this.selected = '';
            avalon.vmodels[this.panelVmId].reset();
            this.handleChange({
                target: { value: '' },
                type: 'datepicker-changed'
            });
        },
        withInBox(el) {
            return this.$element === el || avalon.contains(this.$element, el);
        },
        getTarget() {
            return this.$element;
        },
        handleClick(e) {
            if (!this.panelVisible) {
                avalon.vmodels[this.panelVmId].reset();
                this.panelVisible = true;
            } else {
                this.panelVisible = false;
            }
        },

        panelVmId: '',
        panelVisible: false,
        panelClass: 'ane-datepicker-panel-container',
        panelTemplate: require('./ms-datepicker-panel.html'),
        handlePanelHide() {
            this.panelVisible = false;
        },

        mapValueToSelected(value) {
            this.selected = value;
        },
        onInit: function (event) {
            const self = this;
            emitToFormItem(this, {
                showIcon: false
            });
            this.$watch('value', v => {
                this.mapValueToSelected(v);
                this.handleChange({
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
            const innerVm = getPanelVm(this);
            this.mapValueToSelected(this.value);
            innerVm.reset();
        },
        onDispose() {
            delete avalon.vmodels[this.panelVmId];
        }
    }
});