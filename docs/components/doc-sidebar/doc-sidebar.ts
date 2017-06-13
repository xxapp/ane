import * as avalon from 'avalon2';

import * as navConfig from '../../nav.config.js';
import 'ane';
import { menu as menuStore } from '../../stores';

export const name = 'doc-sidebar';

avalon.component(name, {
    template: require('./doc-sidebar.html'),
    defaults: {
        menu: [],
        selectedKeys: [],
        openKeys: ['components'],
        handleMenuClick(item, key, keyPath) {
            avalon.history.setHash(item.uri);
        },
        handleOpenChange(openKeys) {
            this.openKeys = openKeys.slice(-1);
        },
        onInit(event) {
            this.menu = navConfig;
            menuStore.selectedKeys$.subscribe(v => {
                this.selectedKeys = v;
            });
        }
    }
});