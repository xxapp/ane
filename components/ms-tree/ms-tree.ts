import * as avalon from 'avalon2';
import '../ms-checkbox';
import './metroStyle.css';
import * as $ from 'jquery';
import './jquery.ztree.core';

let treeID = 0;
avalon.component('ms-tree', {
    template: require('./ms-tree.html'),
    defaults: {
        checkable: false,
        tree: [],
        expandedKeys: [],
        checkedKeys: [],
        checkedKeysString: '',
        indeterminatedKeys: [],
        $bufferedTree: {},
        root: true,
        renderSubTree: function (el) {
            return  el.children.length ?
                '<wbr :widget="{is:\'ms-tree\',$id:\'tree_' + (++treeID) + '\',checkable:@checkable,tree:el.children,checkedKeysString:@checkedKeysString,indeterminatedKeys:@indeterminatedKeys,handleCheck:@handleCheck,root:false}"/>' :
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
        isIndeterminated(el) {
            return this.indeterminatedKeys.contains(el.key);
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
            this.indeterminatedKeys.remove(el.key);
            influenceParent(this.$bufferedTree[el.key], this.checkedKeys, this.indeterminatedKeys);
            this.checkedKeysString = this.checkedKeys.join(',');
            this.onCheck(this.checkedKeys.toJSON());
        },
        onInit(event) {
            // if (this.root) {
            //     travelForBuffer(this.tree.toJSON(), this.$bufferedTree);
            //     this.checkedKeysString = this.checkedKeys.join(',');
            // } else {
            //     this.$watch('checkedKeysString', v => {
            //         this.checkedKeys = v.split(',');
            //     });
            //     this.$fire('checkedKeysString', this.checkedKeys.join(','));
            // }
            $.fn.zTree.init($(event.target), {}, [
                {name:"test1", open:true, children:[
                    {name:"test1_1"}, {name:"test1_2"}]},
                {name:"test2", open:true, children:[
                    {name:"test2_1"}, {name:"test2_2"}]}
            ]);
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

function influenceParent(node, checkedKeys, indeterminatedKeys, isIndeterminate = false) {
    if (node.parent === null) {
        return;
    }
    let count = 0;
    for (let child of node.parent.children) {
        if (checkedKeys.contains(child.key)) {
            count++;
        }
        if (indeterminatedKeys.contains(child.key)) {
            count += 0.5;
        }
    }
    if (!isIndeterminate) {
        if (count === 0) {
            indeterminatedKeys.remove(node.parent.key);
            checkedKeys.remove(node.parent.key);
            influenceParent(node.parent, checkedKeys, indeterminatedKeys);
            return;
        } else if (count === node.parent.children.length) {
            indeterminatedKeys.remove(node.parent.key);
            checkedKeys.ensure(node.parent.key);
            influenceParent(node.parent, checkedKeys, indeterminatedKeys);
            return;
        }
    }
    checkedKeys.remove(node.parent.key);
    indeterminatedKeys.ensure(node.parent.key);
    influenceParent(node.parent, checkedKeys, indeterminatedKeys, true);
}