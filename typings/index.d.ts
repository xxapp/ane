// runtime global

interface MyWindow extends Window {
    Promise: Promise<any>,
    $,
    jQuery,
    __REDUX_DEVTOOLS_EXTENSION__
}

declare var global: MyWindow

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}

declare var module: {
    exports: any
}

declare var exports: any