---
id: BSTOperations
title: Basic Operations
sidebar_label: Basic Operations
---

### Lookup
There are two ways to conduct a lookup operation in a binary search tree. The first is known as the "brute force" method, while the second is known as the "binary search" method. As I will explain, the binary search method is much more efficient than the brute force method. 

#### Brute Force 
To conduct a lookup operation in a binary search tree using the brute force method, we must traverse both sides of the tree, and return the subtree with the root node that contains the matching value. In the worst case, we will have to traverse the entire tree before we find the node which contains the value we are looking for, making the time complexity of this method O(n).

```javascript
// definition for a binary tree node
// function TreeNode(value, left, right) {
//     this.value = value === undefined ? 0 : value;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

const lookup = (node, target) => {
    if (node === null) return null
    if (node.value === target) return node;
    return lookup(node.left, target) || lookup(node.right, target);
}
```

#### Binary Search
To conduct a lookup operation in a binary search tree using the binary search method, we will only have to traverse one side of the current node for every iteration. The availability of this leverage results from the fact that a binary search tree is already sorted. The value of the left child in a binary search tree will always be smaller than the value of the parent, while the value of the right child will always be greater than the value of the parent. Therefore, if the value we are looking for is greater than the value of the current node, then we can know for a fact that the node we are looking for cannot be on the left side of the current node. In this way, we only have to check half of the current subtree each time. This makes the time complexity of the binary search method O(logn). 

```javascript
// definition for a binary tree node
// function TreeNode(value, left, right) {
//     this.value = value === undefined ? 0 : value;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

const lookup = (node, target) => {
    /* return null when we have exhausted the binary search tree 
    and have not found a node with the target value */
    if (node === null) return null; 
    if (node.value === target) {
        return node;
    } else if (node.value < target) {
        return lookup(node.right, target);
    } else if (node.value > target) {
        return lookup(node.left, target);
    }
}
```

### Insertion
To insert a value into a binary search tree, we must follow the BST invariant. Namely, that *the value of the left child must always be smaller than the value of the parent, and the value of the right child must always be greater than the value of the parent*. Hence, we must always compare the value we want to insert against the value of the current node. 

We begin at the root node. If we find the root node to be null, then we know that we have exhausted the tree, or that the tree is empty, and we can simply assign the value we want to insert to the to root node. If the value we want to insert is greater than the value of the root node, we move on to the right child of the root node. If the value we want to insert is smaller than the value of the root node, we move on to the left child of the root node. After we arrive at the next node, we repeat the aforementioned steps, in which we check whether the node is null or empty, whether the value we want to insert is greater or lesser than the value of the current node, so on and so forth. 

Therefore, at any point during a BST insertion operation, we can expect one of three situations: 
1. The value of current node is null, at which point we have exhausted the tree. In this situation, we can simply assign the value we want to insert onto the current node.
2. The value of the current node is lesser than the value we want to insert, at which point we move on to the right child of the current node.
3. The value of the current node is greater than the value we want to insert, at which point we move on to the left child of the current node. 

```javascript
// definition for a binary tree node
// function TreeNode(value, left, right) {
//     this.value = value === undefined ? 0 : value;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

const insertNode = (node, target) => {
    if (node === null) return new TreeNode(target); //situation #1
    if (node.value < target) { //situation #2
        node.right = insertNode(node.right, target);
    } else if (node.value > target) { // situation # 3
        node.left = insertNode(node.left, target);
    }

    return node;
}
```

### Deletion
To delete a node in a binary search tree, we also need to make sure to preserve the binary search tree invariant. Therefore, the delete operation involves an additional layer of complexity of rearranging the remaining nodes. We must rearrange the remaining nodes in such a way that the value of every left child will always be smaller than the value of the parent, while the value of every right child will always be greater than the value of the parent.

There are two parts to the delete operation in the binary tree: the binary search, and the delete. The binary search is identical to what we covered in the binary search section (see above). Therefore, the delete operation is simply a binary search with an extra bit of logic after we find the node we want to delete. 

In the delete operation, we can expect one of four situations after a binary search is complete:
1. The target node does not have any children, in which case we can replace it with null.
2. The target node is missing the right child, in which case we can replace it with its left child. 
3. The target node is missing the left child, in which case we can replace it with its right child.
4. The target node has both children, in which case we can replace it with either the greatest node on its left side, or the smallest node on its right side. 

Our logic in the fourth situation results from an implication from the binary search tree invariant. That is, the greatest node on the left side of a tree will always be smaller than any node on the right side, while the smallest node on the right side will always be greater than any node on the left side. 

```javascript
// definition for a binary tree node
// function TreeNode(value, left, right) {
//     this.value = value === undefined ? 0 : value;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

const deleteNode = (node, target) => {
    if (node === null) return null;
    if (node.val === target) {
        //situation 2 & 3
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
        //situation 1 & 4
        //if target node has no child, the helper function will return null
        let min = getMin(node.right);
        node.val = min.val;
        node.right = deleteNode(node.right, min.val);
    } else if (node.val < target) {
        node.right = deleteNode(node.right, target);
    } else {
        node.left = deleteNode(node.left, target);
    }
    
    return node;
};

//helper function to find the smallest node on the right side
const getMin = (node) => {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}
```