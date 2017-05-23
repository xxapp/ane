import * as avalon from 'avalon2';
import * as moment from 'moment';
import 'moment/locale/zh-cn';
import "../ms-select";
moment.locale('zh-cn')

avalon.component('ms-calendar', {
    template: __inline('./ms-calendar.html'),
    defaults: {
        value: [],
        $value: moment(),
        weekStart: 0,
        showHeader: true,
        
        currentMonth: '',
        currentYear: 0,
        weekdays: [],
        currentYearOptions: [],
        monthOptions: [],
        table: [],
        handleYearChange(e) {
            this.$value.year(e.target.value);
            this.calcTable();
        },
        handleMonthChange(e) {
            this.$value.month(e.target.value);
            this.calcTable();
        },
        onChnage: avalon.noop,
        calcTable() {
            let i, j;
            // 这个月的第一天
            const firstDayOfMonth = this.$value.clone().startOf('month');
            // 这个月的最后一天
            const lastDayOfMonth = this.$value.clone().endOf('month');
            // 上个月的最后一天
            const lastDayOfPrevMonth = firstDayOfMonth.clone().subtract(1, 'days');
            const firstDay = (firstDayOfMonth.day() - this.weekStart + 7) % 7;
            const prevLastDate = lastDayOfPrevMonth.date();
            const lastDate = lastDayOfMonth.date();
            const table = [];
            let passed = 0;
            for (i = 0; i < 6; i++) {
                const tableRow = [];
                for (j = 0; j < 7; j++) {
                    const className = [];
                    if (i === 0 && j < firstDay) {
                        // 上月结束部分
                        className.push('ane-calendar-prev-month-cell');
                        tableRow.push({
                            className,
                            date: prevLastDate - firstDay + j + 1
                        });
                    } else if (passed + 1 > lastDate) {
                        // 下月开始部分
                        className.push('ane-calendar-next-month-cell');
                        tableRow.push({
                            className,
                            date: ++passed - lastDate
                        });
                    } else {
                        // 本月部分
                        if (passed + 1 === this.$value.date()) {
                            className.push('ane-calendar-today');
                        }
                        tableRow.push({
                            className,
                            date: ++passed
                        });
                    }
                }
                table.push(tableRow);
            }
            this.table = table;
            this.currentMonth = this.$value.format('MMM');
            this.currentYear = this.$value.year();
            this.currentYearOptions = avalon.range(this.currentYear - 10, this.currentYear + 9).map(y => ({ label: y, value: y }));
        },
        onInit(event) {
            const weekdays = moment.localeData().weekdaysMin();
            avalon.range(this.weekStart).forEach(n => {
                weekdays.push(weekdays.shift());
            })
            this.weekdays = weekdays;
            this.monthOptions = moment.localeData().monthsShort().map(m => ({ label: m, value: m }));
            this.calcTable();

            this.value = this.$value.toArray();
            this.$watch('value', v => {
                this.$value = moment(v);
                this.calcTable();
            });
        }
    }
});