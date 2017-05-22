import * as avalon from 'avalon2';
import * as moment from 'moment';

avalon.component('ms-calendar', {
    template: __inline('./ms-calendar.html'),
    defaults: {
        $value: moment(),
        table: [],
        calcTable() {
            let i, j;
            const firstDayOfMonth = this.$value.clone().startOf('month');
            const lastDayOfMonth = this.$value.clone().endOf('month');
            const lastDayOfPrevMonth = firstDayOfMonth.clone().subtract(1, 'days');
            const firstDay = firstDayOfMonth.day();
            const lastDay = lastDayOfMonth.day();
            const prevLastDate = lastDayOfPrevMonth.date();
            const lastDate = lastDayOfMonth.date();
            let passed = 0;
            for (i = 0; i < 6; i++) {
                const tableRow = [];
                for (j = 0; j < 7; j++) {
                    if (i === 0 && j + 1 < firstDay) {
                        tableRow.push(prevLastDate - firstDay + j + 2);
                    } else if (passed + 1 > lastDate) {
                        tableRow.push(passed++ + 1 - lastDate);
                    } else {
                        tableRow.push(++passed);
                    }
                }
                this.table.push(tableRow);
            }
            console.log(this.table.toJSON());
        },
        onInit(event) {
            this.$value = moment().add(2, 'months');
            this.calcTable();
        }
    }
});