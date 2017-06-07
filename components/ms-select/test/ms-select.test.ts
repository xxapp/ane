import * as avalon from 'avalon2';
import { createForm } from '../../ms-form/create-form';
import '../../ms-form';
import '../';

export const name = 'component-demo-select';

avalon.component(name, {
    template: require('./ms-select.test.html'),
    defaults: {
        json: '',
        $form: createForm(),
        onInit() {
            this.$form.onFieldsChange = (fields, record) => {
                this.json = JSON.stringify(record);
            }
        }
    }
});