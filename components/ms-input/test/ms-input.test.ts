import * as avalon from 'avalon2';
import { createForm } from '../../ms-form/create-form';
import '../../ms-form';
import '../ms-input';

export const name = 'component-demo-input';

avalon.component(name, {
    template: __inline('./ms-input.test.html'),
    defaults: {
        value: '123',
        json: '',
        $form: createForm(),
        onInit() {
            this.$form.onFieldsChange = (fields, record) => {
                this.json = JSON.stringify(record);
            }
        }
    }
});