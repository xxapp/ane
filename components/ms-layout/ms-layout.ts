import * as avalon from 'avalon2';

const layoutComponent = avalon.component('ms-layout', {
    template: `<div class="ane-layout" :css="@style" :class="@className"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        style: {},
        className: ''
    }
});

layoutComponent.extend({
    displayName: 'ms-layout-sider',
    template: `<div class="ane-layout-sider" :css="@style" :class="@className" :class-1="[@fixed?'ane-layout-fixed-sider':'']"><div class="ane-layout-sider-inner"><slot /></div></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '300px'
    }
});

layoutComponent.extend({
    displayName: 'ms-layout-header',
    template: `<div class="ane-layout-header" :css="@style" :class="@className" :class-1="[@fixed?'ane-layout-fixed-header':'']"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '60px'
    }
});

layoutComponent.extend({
    displayName: 'ms-layout-content',
    template: `<div class="ane-layout-content" :css="@style" :class="@className">
                    <ol class="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Library</a></li>
                        <li class="active">Data</li>
                    </ol>
                    <div class="ane-layout-content-wrapper">
                        <div class="container-fluid">
                            <slot />
                        </div>
                    </div>
                </div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false
    }
});

layoutComponent.extend({
    displayName: 'ms-layout-footer',
    template: `<div class="ane-layout-footer" :css="@style" :class="@className" :class-1="[@fixed?'ane-layout-fixed-footer':'']"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '60px'
    }
});