import * as avalon from 'avalon2';
import { findParentComponent } from '../../ane-util';

avalon.component('ms-form', {
    template: `<form role="form" :class="[(@horizontal ? 'form-horizontal' : ''), (@inline ? 'form-inline' : '')]"><slot /></form>`,
    defaults: {
        items: '',
        $form: null,
        type: '',
        horizontal: false,
        inline: false,
        onFormChange(meta) {
            if (this.$form) {
                this.$form.setFieldsValue({
                    [meta.name]: { value: meta.value }
                });
            }
        },
        onInit(event) {
            event.target._ctype_ = 'ms-form';
            event.target._vm_ = this;
        },
        onReady(event) {
        }
    },
    soleSlot: 'items'
});