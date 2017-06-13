export const menu = {
    selectedKeys$: Observable(),
    openKeys$: Observable()
};

function Observable() {
    return {
        onNextCbList: [],
        subscribe(onNext) {
            this.onNextCbList.push(onNext);
        },
        onNext(value) {
            this.onNextCbList.forEach(cb => {
                if (typeof cb === 'function') {
                    cb(value);
                }
            });
        }
    };
}