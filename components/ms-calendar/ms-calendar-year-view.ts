import * as avalon from 'avalon2';
import * as moment from 'moment';

const monthTable = [];

avalon.component('ms-calendar-year-view', {
    template: require('./ms-calendar-year-view.html'),
    defaults: {
        table: [],
        // 0-月视图，1-年视图，2-十年视图，3-百年视图
        view: 1,
        currentMonth: '',
        currentYear: 0,
        isSelected(el) {
            return false;
        },
        onSelect: avalon.noop,
        handleCellClick(el) {
            this.onSelect(el);
        },
        onInit() {
            const monthList = moment.localeData().monthsShort();
            if (monthTable.length === 0) {
                [0, 3, 6, 9].forEach(n => {
                    monthTable.push(monthList.slice(n, n + 3).map(m => ({ label: m, value: m })));
                });
            }
            this.$watch('view', v => {
                const startOfDecade = this.currentYear - this.currentYear % 10;
                const startOfCentury = this.currentYear - this.currentYear % 100;
                switch (v) {
                    case 1:
                        this.table = monthTable; break;
                    case 2: 
                        this.table = [0, 3, 6, 9].map(n => avalon.range(startOfDecade - 1, startOfDecade + 11)
                                                    .slice(n, n + 3)
                                                    .map(m => ({ label: m, value: m }))); break;
                    case 3:
                        this.table = [0, 3, 6, 9].map(n => avalon.range(startOfCentury - 10, startOfCentury + 110, 10)
                                                    .slice(n, n + 3)
                                                    .map(m => ({ label: `${m}-${m + 9}`, value: m }))); break;
                }
            });
            this.$watch('currentYear', v => {
                this.$fire('view', this.view);
            });
        }
    }
});