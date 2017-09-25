import * as avalon from 'avalon2';
import * as bootbox from 'bootbox';
import { parseSlotToVModel } from '../../ane-util';
import * as $ from 'jquery';

avalon.component('ms-dialog', {
    template: '<div style="display: none"><slot name="header" /><slot name="body"/><slot name="footer"/></div>',
    defaults: {
        body: 'blank',
        footer: '',
        $dialog: null,
        show: false,
        className: '',
        size: '',
        uploading: false,
        $innerVm: '',
        okText: '',
        cancelText: '',
        onOk() {},
        onCancel() {},
        onInit(event) {
            var vm = event.vmodel;
            vm.$watch('show', (newV) => {
                if (newV) {
                    vm.$dialog = bootbox.dialog({
                        message: vm.body,
                        title: '{{title}}',
                        className: vm.className,
                        size: vm.size,
                        buttons: this.footer.length ? null : {
                            save: {
                                label: vm.okText || '保存',
                                className: 'btn-primary',
                                callback() {
                                    vm.onOk();
                                    return false;
                                }
                            },
                            cancel: {
                                label: vm.cancelText || '取消',
                                className: 'btn-default',
                                callback() {
                                }
                            }
                        }
                    }).on('hidden.bs.modal', (e) => {
                        vm.onCancel();
                        setTimeout(() => {
                            if ($('.modal.in').length) {
                                $('body').addClass('modal-open');
                            } else {
                                $('body').removeClass('modal-open');
                            }
                        }, 100);
                    })
                    .on('shown.bs.modal', () => {
                        
                    });
                    const $content = vm.$dialog.find('.modal-content').attr(':controller', this.$innerVm);
                    if (this.footer.length) {
                        $content.append($(this.footer));
                    }
                    avalon.scan(vm.$dialog.get(0));
                } else {
                    if (vm.$dialog) {
                        vm.$dialog.find('.bootbox-close-button').trigger('click');
                    }
                }
            });
        },
        onReady(event) {
            parseSlotToVModel(this);
            this.show && this.$fire('show', true);
        },
        onDispose(event) {
        }
    }
});