import * as avalon from 'avalon2';

let treeID = 0;
avalon.component('ms-tree', {
    template: require('./ms-tree.html'),
    defaults: {
        tree: [],
        renderSubTree: function (el) {
            return  el.subtree.length ? '<wbr :widget="{is:\'ms-tree\',$id:\'tree_' + (++treeID) + '\', tree: el.subtree}" />' : ''
        },
        openSubTree: function (el) {
            el.open = !el.open
        },
        changeIcon: function (el) {
            return el.open && el.subtree.length ? 'fa-caret-down' : 'fa-caret-right';
        }
    }
});