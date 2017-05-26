import * as avalon from 'avalon2';
import * as moment from 'moment';

avalon.component('ms-timepicker-view', {
    template: __inline('./ms-timepicker-view.html'),
    defaults: {
        value: '',
        currentHour: 0,
        currentMinute: 0,
        currentSecond: 0,
        hourOptions: avalon.range(24).map(n => ('0' + n).substr(-2)),
        minuteOptions: avalon.range(60).map(n => ('0' + n).substr(-2)),
        secondOptions: avalon.range(60).map(n => ('0' + n).substr(-2)),
        onChange: avalon.noop,
        select(el, type) {
            if (type === 'hour') {
                this.currentHour = el;
            } else if (type === 'minute') {
                this.currentMinute = el;
            } else {
                this.currentSecond = el;
            }
            this.onChange({
                target: {
                    hour: this.currentHour,
                    minute: this.currentMinute,
                    second: this.currentSecond,
                },
                type: 'timepicker-view-changed'
            });
        },
        onInit() {
            this.$watch('value', v => {
                const m = moment(v.split(','));
                this.currentHour = m.hour();
                this.currentMinute = m.minute();
                this.currentSecond = m.second();
            });
            this.$fire('value', this.value);
        }
    }
});