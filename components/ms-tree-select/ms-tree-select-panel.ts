import * as avalon from 'avalon2';

export default function (cmpVm) {
    if (avalon.vmodels[cmpVm.panelVmId] !== undefined) {
        return avalon.vmodels[cmpVm.panelVmId];
    }

    return avalon.define({
        $id: cmpVm.panelVmId,
        checkedKeys: [],
        selection: [],
        loading: false,
        multiple: cmpVm.multiple,
        treeData: cmpVm.treeData.toJSON(),
        searchValue: '',
        getFilteredOptions() {
            return this.options.filter(this.filterFn);
        },
        filterFn(el) {
            if (this.loading) {
                return false;
            }
            if (cmpVm.remote) {
                return true;
            }
            const reg = new RegExp(avalon.escapeRegExp(this.searchValue), 'i');
            return reg.test(el.label) || reg.test(el.value);
        },
        handleSelect(selectedKeys, e) {
            if (this.multiple || e.node.disabled) {
                return false;
            }
            
            this.selection = [{
                key: e.node.key,
                title: e.node.title
            }];
            cmpVm.panelVisible = false;

            const selection = this.selection.toJSON();
            const value = selection.map(s => s.key);
            cmpVm.handleChange({
                target: { value: value[0] || '' },
                type: 'tree-select'
            });
            cmpVm.displayValue = e.node.title;
            cmpVm.selection = selection;
        },
        handleCheck(checkedKeys, e) {
            if (!this.multiple || e.node.disabled) {
                return false;
            }

            this.selection = e.checkedNodes.map(n => ({ key: n.key, title: n.title }));
            // if (e.checked) {
            //     this.selection.push({
            //         key: e.node.key,
            //         title: e.node.title
            //     });
            // } else {
            //     this.selection.removeAll(o => o.key === e.node.key);
            // }
            cmpVm.focusSearch();

            const selection = this.selection.toJSON();
            const value = selection.map(s => s.key);
            cmpVm.handleChange({
                target: { value: value },
                type: 'tree-select'
            });
            cmpVm.displayValue = e.node.title;
            cmpVm.selection = selection;
        }
    });
}