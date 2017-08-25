import * as avalon from 'avalon2';
import * as domAlign from 'dom-align';

avalon.component('ms-trigger', {
    template: '<span style="display:none;"></span>',
    defaults: {
        width: 0,
        visible: false,
        direction: 'down',
        innerVmId: '',
        innerClass: '',
        innerTemplate: '',
        initialized: false,
        withInBox() { return true; },
        getTarget: avalon.noop,
        onHide: avalon.noop,
        hide(panel) {
            panel.style.top = '-9999px';
            panel.style.left = '-9999px';
            this.onHide();
        },
        initPanel(panel: HTMLDivElement) {
            const DOC = document, body = DOC.body;
            const medium = DOC.createElement('div');
            medium.setAttribute('id', this.$id);
            medium.setAttribute('style', 'position: absolute; top: 0px; left: 0px; width: 100%;');
            panel.setAttribute('class', this.innerClass);
            panel.setAttribute('style', 'z-index: 1050;left: -9999px;top: -9999px;position: absolute;outline: none;overflow: hidden;');
            panel.setAttribute(':important', this.innerVmId);
            panel.innerHTML = this.innerTemplate.replace(/\r|\n/g, '');
            medium.appendChild(panel);
            body.appendChild(medium);

            avalon.scan(panel, avalon.vmodels[this.innerVmId]);

            avalon.bind(DOC, 'click', e => {
                if (this.visible && panel !== e.target && !avalon.contains(panel, e.target) &&  !this.withInBox(e.target)) {
                    this.hide(panel);
                }
            });
        },
        onInit(event) {
            const DOC = document;
            const panel = DOC.createElement('div');
            this.$watch('visible', v => {
                if (v) {
                    if (!this.initialized) {
                        this.initPanel(panel);
                        this.initialized = true;
                    }
                    panel.style.width = this.width === 0 ? 'auto' : (this.width + 'px');
                    panel.scrollTop = 0;
                    const points = ['tl', 'bl'];
                    domAlign(panel, this.getTarget(), {
                        points: this.direction === 'up' ? points.reverse() : points,
                        offset: [0, 1],
                        //targetOffset: ['0%','100%']
                        overflow: {
                            adjustY: true
                        }
                    })
                } else {
                    this.hide(panel);
                }
            });
        },
        onDispose(event) {
            if (!this.initialized) {
                return;
            }
            const DOC = document, body = DOC.body;
            const medium = DOC.getElementById(this.$id);
            body.removeChild(medium);
        }
    }
});