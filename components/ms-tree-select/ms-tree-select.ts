import * as avalon from 'avalon2';
import controlComponent from "../ms-form/ms-control";
import '../ms-trigger';
import '../ms-tree';
import getPanelVm from './ms-tree-select-panel';

import { getChildTemplateDescriptor, debounce } from '../../ane-util';
import { emitToFormItem } from '../ms-form/utils';

controlComponent.extend({
    displayName: 'ms-tree-select',
    template: require('./ms-tree-select.html'),
    defaults: {
        value: [],
        multiple: false,
        treeData: [],
        selection: [],

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
            } else if (!this.multiple) {
                this.panelVisible = false;
            }
        },
        handleDelete(e) {
            if ((e.which === 8 || e.which === 46) && this.searchValue === '') {
                this.selection.removeAt(this.selection.length - 1);
                const selection = this.selection.toJSON();
                const value = selection.map(s => s.key);
                avalon.vmodels[this.panelVmId].checkedKeys = value;
                this.handleChange({
                    target: { value: this.multiple ? value : value[0] || '' },
                    type: 'tree-select'
                });
            }
        },
        removeSelection(e, option) {
            this.selection.removeAll(o => o.key === option.key);
            const selection = this.selection.toJSON();
            const value = selection.map(s => s.key);
                avalon.vmodels[this.panelVmId].checkedKeys = value;
            this.focusSearch();
            this.handleChange({
                target: { value: this.multiple ? value : value[0] || '' },
                type: 'tree-select'
            });
        },

        // 下拉框下拉列表部分
        panelWidth: 0,
        panelVmId: '',
        panelVisible: false,
        panelClass: 'ane-tree-select-dropdown',
        panelTemplate: require('./ms-tree-select-panel.html'),
        handlePanelHide() {
            this.panelVisible = false;
        },
        
        // 生命周期
        mapValueToSelection(value) {
            // this.selection = this.options.filter(o => value.contains(o.value));
            // if (this.selection.length > 0) {
            //     this.displayValue = this.selection[0].label;
            // }
            // avalon.vmodels[this.panelVmId].selection = this.selection.toJSON();
        },
        onInit(event) {
            const self = this;
            
            emitToFormItem(this);
            this.$watch('value', v => {
                const value = v.toJSON();
                this.mapValueToSelection(v);
                this.handleChange({
                    target: { value: this.multiple ? value : value[0] || '' },
                    denyValidate: true,
                    type: 'tree-select'
                });
            });

            this.panelVmId = this.$id + '_panel';
            const innerVm = getPanelVm(this);
            this.$watch('searchValue', debounce(v => {
                innerVm.searchValue = v;
            }));
            this.$watch('multiple', v => {
                innerVm.multiple = v;
            });
            this.mapValueToSelection(this.value);
        },
        onDispose() {
            delete avalon.vmodels[this.panelVmId];
        }
    }
});