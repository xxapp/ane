import * as avalon from 'avalon2';
import '../ms-checkbox';
import './metroStyle.css';
import * as $ from 'jquery';
import './jquery.ztree.core';
import './jquery.ztree.excheck';

avalon.component('ms-tree', {
    template: require('./ms-tree.html'),
    defaults: {
        checkable: false,
        tree: [],
        expandedKeys: [],
        checkedKeys: [],
        onCheck: avalon.noop,
        onCheckInner: avalon.noop,
        handleCheck(el) {
            if (!el.checked) {
                this.checkedKeys.remove(el.key);
            } else {
                this.checkedKeys.push(el.key);
            }
            this.onCheck(this.checkedKeys.toJSON());
        },
        onInit(event) {
            var treeObj = $.fn.zTree.init($(event.target), {
                check: { enable: true },
                data: {
                    key: {
                        name: 'title'
                    }
                },
                callback: {
                    onCheck: (e, treeId, node) => {
                        this.handleCheck(node);
                    }
                }
            }, this.tree.toJSON());

            treeObj.getNodesByFilter(n => this.checkedKeys.contains(n.key)).forEach(n => {
                treeObj.checkNode(n, true, true);
            });
        }
    }
});