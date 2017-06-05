/// <reference path="./avalon.d.ts" />

// FIS3 inline syntax
declare var __inline

// runtime global

interface MyWindow extends Window {
    Promise: Promise<any>,
    $,
    jQuery,
    __REDUX_DEVTOOLS_EXTENSION__
}

declare var global: MyWindow

declare var require

declare var module: {
    exports: any
}

declare var exports: any