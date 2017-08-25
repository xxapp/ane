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
        direction: 'down',
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
            const nodes = [];
            getTreeNodesByKeys({children:this.treeData}, value, nodes);
            if (nodes.length) {
                this.displayValue = nodes[0].title;
            }
            avalon.vmodels[this.panelVmId].checkedKeys = value;
            this.selection = nodes.map(n => ({ key: n.key, title: n.title }));
        },
        onInit(event) {
            const self = this;
            
            emitToFormItem(this);
            this.$watch('value', v => {
                const value = v.toJSON();
                this.mapValueToSelection(value);
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
            const value = this.value.toJSON();
            this.mapValueToSelection(value);
        },
        onDispose() {
            delete avalon.vmodels[this.panelVmId];
        }
    }
});

function getTreeNodesByKeys(root, keys, results) {
    if (keys.indexOf(root.key) > -1) {
        results.push(root);
    } else {
        for (var i = 0; i < root.children.length; i++) {
            getTreeNodesByKeys(root.children[i], keys, results);
        }
    }
}