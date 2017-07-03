import * as avalon from 'avalon2';
import '../ms-checkbox';

let treeID = 0;
avalon.component('ms-tree', {
    template: require('./ms-tree.html'),
    defaults: {
        tree: [],
        expandedKeys: [],
        checkedKeys: [],
        indeterminatedKeys: [],
        $bufferedTree: {},
        root: true,
        renderSubTree: function (el) {
            return  el.children.length ?
                '<wbr :widget="{is:\'ms-tree\',$id:\'tree_' + (++treeID) + '\',tree:el.children,checkedKeys:@checkedKeys,handleCheck:@handleCheck,root:false}"/>' :
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
                travelForCheckChildren(el.children, this.checkedKeys, false);
            } else {
                this.checkedKeys.push(el.key);
                travelForCheckChildren(el.children, this.checkedKeys, true);
            }
            this.onCheck(this.checkedKeys.toJSON());
        },
        onInit() {
            if (this.root) {
                travelForBuffer(this.tree.toJSON(), this.$bufferedTree);
            }
        }
    }
});

function travelForBuffer(treelet, bufferedTree, parent = null) {
    treelet.forEach(node => {
        node.parent = parent;
        bufferedTree[node.key] = node;
        travelForBuffer(node.children, bufferedTree, node);
    });
}

function travelForCheckChildren(treelet, checkedKeys, isCheck) {
    treelet.forEach(node => {
        if (isCheck) {
            checkedKeys.ensure(node.key);
        } else {
            checkedKeys.remove(node.key);
        }
        travelForCheckChildren(node.children, checkedKeys, isCheck)
    });
}