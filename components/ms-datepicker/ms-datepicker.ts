import * as avalon from 'avalon2';
import controlComponent from '../ms-form/ms-control';
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
        mapValueToText(value) {
            this.selected = value;
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