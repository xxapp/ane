import * as avalon from 'avalon2';
import * as moment from 'moment';

export default function (cmpVm) {
    if (avalon.vmodels[cmpVm.panelVmId] !== undefined) {
        return avalon.vmodels[cmpVm.panelVmId];
    }

    return avalon.define({
        $id: cmpVm.panelVmId,
        currentDateArray: '',
        $moment: moment(),
        reset() {
            this.$moment = cmpVm.selected ? moment(cmpVm.selected, cmpVm.format) : moment();
            this.currentDateArray = this.$moment.toArray().toString();
        },
        handleTimepickerChange(e) {
            const { hour, minute, second } = e.target;
            this.$moment.hour(hour).minute(minute).second(second);
            this.currentDateArray = this.$moment.toArray().toString();
            cmpVm.selected = this.$moment.format(cmpVm.format);

            cmpVm.handleChange({
                target: { value: cmpVm.selected },
                type: 'timepicker-changed'
            });
        }
    });
};