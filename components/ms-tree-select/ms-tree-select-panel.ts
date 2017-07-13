import * as avalon from 'avalon2';

export default function (cmpVm) {
    if (avalon.vmodels[cmpVm.panelVmId] !== undefined) {
        return avalon.vmodels[cmpVm.panelVmId];
    }

    return avalon.define({
        $id: cmpVm.panelVmId,
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
            if (e.node.disabled) {
                return false;
            }
            if (cmpVm.multiple) {
                if (this.selection.some(o => o.key === e.node.key)) {
                    this.selection.removeAll(o => o.key === e.node.key);
                } else {
                    this.selection.push(e.node);
                }
                cmpVm.focusSearch();
            } else {
                this.selection = [e.node];
                cmpVm.panelVisible = false;
            }
            const selection = this.selection.toJSON();
            const value = selection.map(s => s.key);
            cmpVm.handleChange({
                target: { value: cmpVm.multiple ? value : value[0] || '' },
                type: 'tree-select'
            });
            cmpVm.displayValue = e.node.title;
            cmpVm.selection = selection;
        }
    });
}