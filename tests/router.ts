import * as avalon from 'avalon2';
import 'mmRouter';

function getPage(component) {
    const html = `<xmp is="${component}" :widget="{id:'${component.replace(/\-/g, '_')}'}"></xmp>`;
    return html
}

function applyRouteConfig(config, parentRoute, accPath = '') {
    config.map(function (route) {
        let components:any = {};
        if (route.component) {
            components.currentPage = route.component;
        }
        if (route.components) {
            components = route.components;
        }
        avalon.router.add(accPath + route.path, function () {
            Object.keys(components).map(viewName => {
                let component = components[viewName];
                if (typeof component === 'function') {
                    component(function (m) {
                        avalon.vmodels[parentRoute.name][viewName] = getPage(m.name);
                    });
                } else {
                    avalon.vmodels[parentRoute.name][viewName] = getPage(component.name);
                }
            });
        });
        // TODO 支持嵌套路由
        //route.children && applyRouteConfig(route.children, route, accPath + route.path);
    });
}

const routeConfig = [{
    path: '/ms-input',
    component(resolve) {
        require.ensure([], function () {
            resolve(require('../components/ms-input/test/ms-input.test.ts'));
        });
    }
}, {
    path: '/ms-select',
    component(resolve) {
        require.ensure([], function () {
            resolve(require('../components/ms-select/test/ms-select.test.ts'));
        });
    }
}];

applyRouteConfig(routeConfig, {
    name: 'root'
});