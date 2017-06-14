import * as avalon from 'avalon2';
import { findParentComponent } from '../../ane-util';

export default avalon.component('ms-control', {
    template: '&nbsp;',
    defaults: {
        $formItem: null,
        $rules: null,
        value: '',
        col: '',
        placeholder: '',
        width: 'x',
        onChange: avalon.noop,
        emitValue(e) {
            let v = e.target.value;
            this.$formItem && this.$formItem.onFormChange({
                name: this.col, value: v, denyValidate: e.denyValidate
            });
        },
        handleChange(e) {
            this.emitValue(e);
            this.onChange(e);
        }
    }
});