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
        selectedKeys: [],
        onCheck: avalon.noop,
        onSelect: avalon.noop,
        handleCheck(e, treeId, node) {
            if (!node.checked) {
                this.checkedKeys.remove(node.key);
            } else {
                this.checkedKeys.push(node.key);
            }
            this.onCheck(this.checkedKeys.toJSON(), {
                checked: node.checked,
                checkedNodes: [],
                node: node,
                event: e
            });
        },
        handleSelect(e, treeId, node, clickFlag) {
            this.selectedKeys = [node.key];
            this.onSelect(this.selectedKeys.toJSON(), {
                selected: clickFlag,
                checkedNodes: [],
                node: node,
                event: e
            });
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
                        this.handleCheck(e, treeId, node);
                    },
                    onClick: (e, treeId, node, clickFlag) => {
                        this.handleSelect(e, treeId, node, clickFlag);
                    }
                }
            }, this.tree.toJSON());

            treeObj.getNodesByFilter(n => this.checkedKeys.contains(n.key)).forEach(n => {
                treeObj.checkNode(n, true, true);
            });
        }
    }
});