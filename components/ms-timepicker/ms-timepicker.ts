import * as avalon from 'avalon2';
import controlComponent from '../ms-form/ms-control';
import '../ms-trigger';
import './ms-timepicker-view'
import getPanelVm from './ms-timepicker-panel'
import { emitToFormItem } from '../ms-form/utils';

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
controlComponent.extend({
    displayName: 'ms-timepicker',
    template: require('./ms-timepicker.html'),
    defaults: {
        selected: '',
        format: 'HH:mm:ss',
        clear() {
            this.selected = '';
            avalon.vmodels[this.panelVmId].reset();
            this.handleChange({
                target: { value: '' },
                type: 'timepicker-changed'
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
        panelClass: 'ane-timepicker-panel-container',
        panelTemplate: `<div class="ane-timepicker-panel" style="overflow: auto">
                            <xmp is="ms-timepicker-view" :widget="{value:@currentDateArray,onChange:@handleTimepickerChange}"></xmp>
                        </div>`,
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
                    type: 'timepicker-changed'
                });
            });
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