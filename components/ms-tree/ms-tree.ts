import * as avalon from 'avalon2';
import '../ms-checkbox';

let treeID = 0;
avalon.component('ms-tree', {
    template: require('./ms-tree.html'),
    defaults: {
        tree: [],
        expandedKeys: [],
        checkedKeys: [],
        renderSubTree: function (el) {
            return  el.children.length ?
                '<wbr :widget="{is:\'ms-tree\',$id:\'tree_' + (++treeID) + '\',tree:el.children,checkedKeys:@checkedKeys,handleCheck:@handleCheck}"/>' :
                ''
        },
        openSubTree: function (el) {
            if (this.isExpended(el)) {
                this.expandedKeys.remove(el.key);
            } else {
                this.expandedKeys.push(el.key);
            }
        },
        changeIcon: function (el) {
            if (!el.children.length) {
                return '';
            }
            return this.isExpended(el) ? 'fa-caret-down' : 'fa-caret-right';
        },
        isExpended(el) {
            return this.expandedKeys.contains(el.key);
        },
        isChecked(el) {
            return this.checkedKeys.contains(el.key);
        },
        onCheck: avalon.noop,
        onCheckInner: avalon.noop,
        handleCheck(el) {
            if (this.isChecked(el)) {
                this.checkedKeys.remove(el.key);
            } else {
                this.checkedKeys.push(el.key);
            }
            this.onCheck(this.checkedKeys.toJSON());
        }
    }
});