import * as avalon from 'avalon2';
import controlComponent from '../ms-form/ms-control';
import { emitToFormItem } from '../ms-form/utils';
import { findParentComponent } from '../../ane-util';

controlComponent.extend({
    displayName: 'ms-input',
    template: require('./ms-input.html'),
    defaults: {
        text: '',
        mapValueToText(value) {
            this.text = value;
        },
        onInit: function (event) {
            emitToFormItem(this);
            this.$watch('value', v => {
                this.mapValueToText(v);
                this.handleChange({
                    target: { value: v },
                    denyValidate: true,
                    type: 'changed'
                });
            });
            this.mapValueToText(this.value);
        }
    }
});