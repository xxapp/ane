import * as avalon from 'avalon2';
import * as moment from 'moment';
import '../ms-select';
import './ms-calendar-year-view';

avalon.component('ms-calendar', {
    template: require('./ms-calendar.html'),
    defaults: {
        value: '',
        $value: null,
        $selected: null,
        weekStart: 0,
        showHeader: true,
        disabledDate() { return false; },
        
        currentMonth: '',
        currentYear: 0,
        weekdays: [],
        currentYearOptions: [],
        monthOptions: [],
        table: [],
        handleYearChange(e) {
            this.$value.year(e.target.value)
            this.calcTable(this.$value.clone());
        },
        handleMonthChange(e) {
            this.$value.month(e.target.value);
            this.calcTable(this.$value.clone());
        },
        handleDateClick(el) {
            if (el.disabled) {
                return false;
            }
            this.$selected.year(this.currentYear).month(this.currentMonth).date(el.date);
            if (el.prevMonth) {
                this.$selected.subtract(1, 'months');
            }
            if (el.nextMonth) {
                this.$selected.add(1, 'months');
            }
            this.$value = this.$selected;
            this.onChange({
                target: {
                    value: this.$selected.clone()
                },
                type: 'calendar-changed'
            });
            // 是否有必要再计算更新一次？
            this.calcTable(this.$value.clone());
        },
        onChange: avalon.noop,
        calcTable(m: moment.Moment) {
            let i, j;
            // 这个月的第一天
            const firstDayOfMonth = m.clone().startOf('month');
            // 这个月的最后一天
            const lastDayOfMonth = m.clone().endOf('month');
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
                    let disabled = false;
                    let prevMonth = false;
                    let nextMonth = false;
                    if (i === 0 && j < firstDay) {
                        // 上月结束部分
                        className.push('ane-calendar-prev-month-cell');
                        prevMonth = true;
                        if (this.disabledDate(+m.clone().subtract(1, 'months').date(prevLastDate - firstDay + j + 1))) {
                            disabled = true;
                            className.push('ane-calendar-disabled-cell');
                        }
                        tableRow.push({
                            className,
                            disabled,
                            prevMonth,
                            nextMonth,
                            date: prevLastDate - firstDay + j + 1
                        });
                    } else if (passed + 1 > lastDate) {
                        // 下月开始部分
                        className.push('ane-calendar-next-month-cell');
                        nextMonth = true;
                        if (this.disabledDate(+m.clone().add(1, 'months').date(passed + 1 - lastDate))) {
                            disabled = true;
                            className.push('ane-calendar-disabled-cell');
                        }
                        tableRow.push({
                            className,
                            disabled,
                            prevMonth,
                            nextMonth,
                            date: ++passed - lastDate
                        });
                    } else {
                        // 本月部分
                        if (moment().isSame(m.clone().date(passed + 1), 'day')) {
                            className.push('ane-calendar-today');
                        }
                        if (this.$selected.isSame(m.clone().date(passed + 1), 'day')) {
                            className.push('ane-calendar-selected-day');
                        }
                        if (this.disabledDate(+m.clone().date(passed + 1))) {
                            disabled = true;
                            className.push('ane-calendar-disabled-cell');
                        }
                        tableRow.push({
                            className,
                            disabled,
                            prevMonth,
                            nextMonth,
                            date: ++passed
                        });
                    }
                }
                table.push(tableRow);
            }
            this.table = table;
            this.currentMonth = m.format('MMM');
            this.currentYear = m.year();
            this.currentYearOptions = avalon.range(this.currentYear - 10, this.currentYear + 9).map(y => ({ label: y, value: y }));
        },
        onInit(event) {
            this.$value = moment();
            this.$selected = moment();
            const weekdays = moment.localeData().weekdaysMin();
            avalon.range(this.weekStart).forEach(n => {
                weekdays.push(weekdays.shift());
            })
            this.weekdays = weekdays;
            const monthList = moment.localeData().monthsShort();
            this.monthOptions = monthList.map(m => ({ label: m, value: m }));
            this.calcTable(this.$value.clone());

            this.value = this.$value.toArray().toString();
            this.$watch('value', v => {
                this.$value = this.$selected = moment(v.split(','));
                this.calcTable(this.$value.clone());
            });
        }
    }
});