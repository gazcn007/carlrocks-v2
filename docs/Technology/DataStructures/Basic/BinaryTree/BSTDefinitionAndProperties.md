--- 
id: Definitions&&Properties
title: Definition and Properties
sidebar_label: Definition and Properties
---

The binary tree is a subset of the *m*-ary tree, which can have any number of children for each node. Like the *m*-ary tree, a binary tree is typically implemented in the form of a linked list. Every node in a binary tree contains a value property, and two pointers that point to the node's left or right child. 

```javascript
function TreeNode(value, left, right) {
    this.value = value === undefined ? 0 : value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
```

### Binary Search Tree
A binary search tree is essentially a binary tree, with the addition of the binary search tree invariant. Namely, that *the value of the left child will always be smaller than the value of the parent, while the value of the right child will always be greater than the value of the parent*. The result of this is that the greatest value on the left side of a node will always be the smallest value on the right side. Similarly, the smallest value on the right side will always be the greatest on the left side. This becomes very important when conducting binary search tree operations, that is, any look-up, insertion, or deletion. 
