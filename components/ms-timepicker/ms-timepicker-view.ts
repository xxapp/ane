import * as avalon from 'avalon2';
import * as moment from 'moment';

const OPTION_HEIGHT = 24;

avalon.component('ms-timepicker-view', {
    template: require('./ms-timepicker-view.html'),
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
            this.$element.querySelector('.ane-timepicker-view-select[name=' + type + '-options]').scrollTop = el * 24;
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

                this.$element.querySelector('.ane-timepicker-view-select[name=hour-options]').scrollTop = this.currentHour * OPTION_HEIGHT;
                this.$element.querySelector('.ane-timepicker-view-select[name=minute-options]').scrollTop = this.currentMinute * OPTION_HEIGHT;
                this.$element.querySelector('.ane-timepicker-view-select[name=second-options]').scrollTop = this.currentSecond * OPTION_HEIGHT;
            });
            this.$fire('value', this.value);
        }
    }
});