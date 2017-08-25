import * as avalon from 'avalon2';
import controlComponent from "../ms-form/ms-control";
import '../ms-trigger';
import getPanelVm from './ms-select-panel';

import { getChildTemplateDescriptor, debounce } from '../../ane-util';
import { emitToFormItem } from '../ms-form/utils';

controlComponent.extend({
    displayName: 'ms-select',
    template: require('./ms-select.html'),
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
        focusSearch() {
            this.$element.getElementsByTagName('input').search.focus();
        },
        withInBox(el) {
            return this.$element === el || avalon.contains(this.$element, el);
        },
        getTarget() {
            return this.$element;
        },
        handleClick(e) {
            if (!this.panelVisible) {
                this.searchValue = '';
                this.panelWidth = this.$element.offsetWidth;
                this.panelVisible = true;
                this.focusSearch();
            } else if (!this.isMultiple) {
                this.panelVisible = false;
            }
        },
        handleDelete(e) {
            if ((e.which === 8 || e.which === 46) && this.searchValue === '') {
                this.selection.removeAt(this.selection.length - 1);
                const selection = this.selection.toJSON();
                const value = selection.map(s => s.value);
                avalon.vmodels[this.panelVmId].selection = selection;
                this.handleChange({
                    target: { value: this.isMultiple ? value : value[0] || '' },
                    type: 'select'
                });
            }
        },
        removeSelection(e, option) {
            this.selection.removeAll(o => o.value === option.value);
            const selection = this.selection.toJSON();
            const value = selection.map(s => s.value);
            avalon.vmodels[this.panelVmId].selection = selection;
            this.focusSearch();
            this.handleChange({
                target: { value: this.isMultiple ? value : value[0] || '' },
                type: 'select'
            });
        },

        // 下拉框下拉列表部分
        direction: 'down',
        panelWidth: 0,
        panelVmId: '',
        panelVisible: false,
        panelClass: 'ane-select-dropdown',
        panelTemplate: require('./ms-select-panel.html'),
        handlePanelHide() {
            this.panelVisible = false;
        },

        $computed: {
            isMultiple: {
                get() {
                    return this.mode === 'multiple' || this.mode === 'tags';
                }
            }
        },
        
        // 生命周期
        mapValueToSelection(value) {
            this.selection = this.options.filter(o => value.contains(o.value));
            if (this.selection.length > 0) {
                this.displayValue = this.selection[0].label;
            }
            avalon.vmodels[this.panelVmId].selection = this.selection.toJSON();
        },
        onInit(event) {
            const self = this;
            if (this.options.length === 0) {
                const descriptor = getChildTemplateDescriptor(this);
                this.options = getOptions(descriptor);
            }
            
            emitToFormItem(this);
            this.$watch('value', v => {
                const value = v.toJSON();
                this.mapValueToSelection(v);
                this.handleChange({
                    target: { value: this.isMultiple ? value : value[0] || '' },
                    denyValidate: true,
                    type: 'select'
                });
            });

            this.panelVmId = this.$id + '_panel';
            const innerVm = getPanelVm(this);
            this.$watch('searchValue', debounce(v => {
                innerVm.searchValue = v;
                if (this.remote && !!v) {
                    innerVm.loading = true;
                    this.remoteMethod(v).then(options => {
                        innerVm.loading = false
                        innerVm.options = options;
                    });
                }
            }));
            this.$watch('isMultiple', v => {
                innerVm.isMultiple = v;
            });
            this.mapValueToSelection(this.value);
        },
        onDispose() {
            delete avalon.vmodels[this.panelVmId];
        }
    }
});

function getOptions(descriptor) {
    return descriptor.reduce((acc, option) => {
        if (option.is != 'ms-select-option') return acc;
        let label = option.inlineTemplate;
        acc.push({
            label: option.inlineTemplate || '',
            value: option.props.value || '',
            disabled: option.props.disabled || false
        });
        return acc;
    }, []);
}