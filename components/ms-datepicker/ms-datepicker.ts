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
                avalon.vmodels[this.panelVmId].reset();
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
                // 0-月视图，1-年视图，2-十年视图，3-百年视图
                viewMode: 0,
                staged: 0,
                $computed: {
                    startOfDecade() {
                        return this.currentYear - this.currentYear % 10;
                    },
                    startOfCentury() {
                        return this.currentYear - this.currentYear % 100;
                    },
                },
                reset() {
                    this.viewMode = 0;
                    this.staged = 0;
                    this.$moment = moment();
                    this.currentMonth = this.$moment.format('MMM');
                    this.currentYear = this.$moment.year();
                    this.currentDateArray = this.$moment.toArray();
                },
                changeView(viewMode) {
                    if (this.viewMode === 0 && viewMode === 2) {
                        // 从月视图直接跳到十年视图后，返回时跳过年视图
                        this.staged = 1;
                    }
                    this.viewMode = viewMode;
                },
                handleYearViewSelect(el) {
                    if (this.viewMode === 1) {
                        this.currentMonth = el.value;
                        this.$moment.month(el.value);
                        this.currentDateArray = this.$moment.toArray();
                    }
                    if (this.viewMode === 3) {
                        this.currentYear = el.value;
                        this.$moment.year(el.value);
                        this.currentDateArray = this.$moment.toArray();
                    }
                    if (this.viewMode === 2) {
                        this.currentYear = el.value;
                        this.$moment.year(el.value);
                        this.currentDateArray = this.$moment.toArray();
                        this.viewMode = this.viewMode - 1 - this.staged;
                        this.staged = 0;
                    } else {
                        this.viewMode = this.viewMode - 1;
                    }
                },
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
            innerVm.reset();

            this.mapValueToSelected(this.value);
        },
        onDispose() {
            delete avalon.vmodels[this.panelVmId];
        }
    }
});