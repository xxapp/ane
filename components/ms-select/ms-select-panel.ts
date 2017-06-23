import * as avalon from 'avalon2';

export default function (cmpVm) {
    if (avalon.vmodels[cmpVm.panelVmId] !== undefined) {
        return avalon.vmodels[cmpVm.panelVmId];
    }

    return avalon.define({
        $id: cmpVm.panelVmId,
        selection: [],
        loading: false,
        isMultiple: cmpVm.isMultiple,
        options: cmpVm.options.toJSON(),
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
        handleOptionClick(e, option) {
            if (option.disabled) {
                return false;
            }
            if (cmpVm.isMultiple) {
                if (this.selection.some(o => o.value === option.value)) {
                    this.selection.removeAll(o => o.value === option.value);
                } else {
                    this.selection.push(option);
                }
                cmpVm.focusSearch();
            } else {
                this.selection = [option];
                cmpVm.panelVisible = false;
            }
            const selection = this.selection.toJSON();
            const value = selection.map(s => s.value);
            cmpVm.handleChange({
                target: { value: cmpVm.isMultiple ? value : value[0] || '' },
                type: 'select'
            });
            cmpVm.displayValue = option.label;
            cmpVm.selection = selection;
        }
    });
}