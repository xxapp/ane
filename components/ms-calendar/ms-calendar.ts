import * as avalon from 'avalon2';
import * as moment from 'moment';

avalon.component('ms-calendar', {
    template: __inline('./ms-calendar.html'),
    defaults: {
        $value: moment(),
        currentMonth: '',
        currentYear: 0,
        table: [],
        mutate(action, ...args) {
            this.$value[action].apply(this.$value, args);
            this.calcTable();
        },
        calcTable() {
            let i, j;
            const firstDayOfMonth = this.$value.clone().startOf('month');
            const lastDayOfMonth = this.$value.clone().endOf('month');
            const lastDayOfPrevMonth = firstDayOfMonth.clone().subtract(1, 'days');
            const firstDay = firstDayOfMonth.day();
            const lastDay = lastDayOfMonth.day();
            const prevLastDate = lastDayOfPrevMonth.date();
            const lastDate = lastDayOfMonth.date();
            const table = [];
            let passed = 0;
            for (i = 0; i < 6; i++) {
                const tableRow = [];
                if (i === 0) {
                    tableRow.push(prevLastDate - firstDay + 1);
                } else if (passed + 1 > lastDate) {
                    tableRow.push(passed - lastDate);
                } else {
                    tableRow.push(passed);
                }
                for (j = 0; j < 7; j++) {
                    if (i === 0 && j + 1 < firstDay) {
                        tableRow.push(prevLastDate - firstDay + j + 2);
                    } else if (passed + 1 > lastDate) {
                        tableRow.push(passed++ + 1 - lastDate);
                    } else {
                        tableRow.push(++passed);
                    }
                }
                table.push(tableRow);
            }
            this.table = table;
            this.currentMonth = this.$value.format('MMM');
            this.currentYear = this.$value.year();
        },
        onInit(event) {
            this.$value = moment().subtract(18, 'months');
            this.calcTable();
        }
    }
});