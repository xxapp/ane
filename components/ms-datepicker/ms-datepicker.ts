import * as avalon from 'avalon2';
import * as moment from 'moment';
import controlComponent from '../ms-form/ms-control';
import '../ms-trigger';
import '../ms-calendar';
import { emitToFormItem } from '../ms-form/utils';

/**
 * 日期选择组件
 * @prop value 组件值(inherit)
 * @prop col 字段路径(inherit)
 * 
 * @example
 * ``` html
 * 
 * ```
 */
controlComponent.extend({
    displayName: 'ms-datepicker',
    template: __inline('./ms-datepicker.html'),
    defaults: {
        selected: '',
        format: 'YYYY-MM-DD',
        withInBox(el) {
            return this.$element === el || avalon.contains(this.$element, el);
        },
        getTarget() {
            return this.$element;
        },
        handleClick(e) {
            if (!this.panelVisible) {
                this.panelVisible = true;
            } else {
                this.panelVisible = false;
            }
        },

        panelVmId: '',
        panelVisible: false,
        panelClass: 'ane-datepicker-panel-container',
        panelTemplate: __inline('./ms-datepicker-panel.html'),
        handlePanelHide() {
            this.panelVisible = false;
        },

        mapValueToSelected(value) {
            this.selected = value;
        },
        onInit: function (event) {
            const self = this;
            emitToFormItem(this);
            this.$watch('value', v => {
                this.mapValueToSelected(v);
                this.handleChange({
                    target: { value: v },
                    denyValidate: true,
                    type: 'changed'
                });
            });
            this.panelVmId = this.$id + '_panel';
            const innerVm = avalon.define({
                $id: this.panelVmId,
                currentDateArray: [],
                $moment: moment(),
                currentMonth: '',
                currentYear: 0,
                mutate(action, ...args) {
                    this.$moment[action].apply(this.$moment, args);
                    this.currentMonth = this.$moment.format('MMM');
                    this.currentYear = this.$moment.year();
                    this.currentDateArray = this.$moment.toArray();
                },
                handleCalendarChange(e) {
                    this.$moment = e.target.value;
                    self.selected = this.$moment.format(self.format);
                    self.panelVisible = false;
                    self.handleChange({
                        target: { value: self.selected },
                        type: 'datepicker-changed'
                    });
                }
            });
            innerVm.currentMonth = innerVm.$moment.format('MMM');
            innerVm.currentYear = innerVm.$moment.year();
            innerVm.currentDateArray = innerVm.$moment.toArray();

            this.mapValueToSelected(this.value);
        },
        onDispose() {
            delete avalon.vmodels[this.panelVmId];
        }
    }
});