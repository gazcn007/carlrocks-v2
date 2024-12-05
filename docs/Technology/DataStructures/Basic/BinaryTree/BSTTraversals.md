---
id: BSTTraversals
title: Traversals
sidbar_label: Traversals
---

When we traverse a *m*-ary tree or a binary tree, we can either visit the deepest nodes first, or every node on the top-most level first. The former is called *depth-first search* (DFS), and the latter is called *breadth-first search* (BFS). For trees in particular, since trees are a subset of graphs, depth-first search can be done in three ways. These are *pre-order*, *in-order*, and *post-order* traversals. Hence, there are a total of four different forms of tree traversals. 

### Breadth-First Search (BFS)
Typically speaking, breadth-first search is implemented in the form of a queue. This is because we want to visit all nodes on the current level before we move on to the next. With a queue, we can push the children of the current node to the end of the queue, so that the children can be processed last. To implement this, we can initialize a queue with the root node of the tree. As we perform whatever logic we need, we dequeue the current node from the queue, and enqueue the current node's children. This process is then repeated on to the children of the current node. It can be implemented both recursively and iteratively. 

```javascript
// return a bfs traversal of a binary tree in the form of an array;

// definition for a binary tree node
// function TreeNode(value, left, right) {
//     this.value = value === undefined ? 0 : value;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

const bfs_iterative = (root) => {
    let queue = [root]; // our queue is implemented in the form of an array
    let result = [];

    while (queue.length) {
        let current = queue.shift(); // dequeue is implemented in the form of the shift method
        result.push(current.val);
        queue.push(current.left); // enqueue is implemented in the form of the push method
        queue.push(current.right);
    }

    return result;
};

// breadth-first search can also be done recursively, 
// though it is more commonly done iteratively
const bfs_recursive = (root) => {
    let queue = [root]; 
    let result = [];
    
    let helper = (node) => {
        if (node === null) return;
        result.push(queue.shift().val); 
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        helper(node.left); 
        helper(node.right);
    };

    helper(root);
    return result;
};
```

### Depth-First Search (DFS)
Unlike breadth-first search, depth-first search processes the child nodes first. Therefore, it makes the most sense to think of depth-first search in the form of a stack. We can push the children of the current node onto a stack, and pop them to perform whatever logic we need before we come back to the current node. 

```javascript
// return a dfs traversal of a binary tree in the form of an array;

// definition for a binary tree node
// function TreeNode(value, left, right) {
//     this.value = value === undefined ? 0 : value;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

const dfs_recursive = (root) => {
    let stack = [root]; // our stack is implemented in the form of an array
    let result = [];
    
    let helper = (node) => {
        if (node === null) return;
        result.push(queue.pop().val);
        if (node.left) queue.push(node.left); 
        if (node.right) queue.push(node.right);
        helper(node.left); 
        helper(node.right);
    };

    helper(root);
    return result;
};
```

We can also implement depth-first search by using the call stack as our stack. This makes depth-first search much easier to implement with recursion.

```javascript
// return a dfs traversal of a binary tree in the form of an array;

// definition for a binary tree node
// function TreeNode(value, left, right) {
//     this.value = value === undefined ? 0 : value;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

const dfs_recursive = (root) => {
    let result = [];
    
    let helper = (node) => {
        if (node === null) return;
        result.push(node.val);
        helper(node.left); 
        helper(node.right);
    };

    helper(root);
    return result;
};
```

#### Pre-order, In-order, and Post-order Traversals
For trees, depth-first search can be done in three ways:
- Preorder: Visit the root node first, then the left subtree, then the right subtree.
- Inorder: Visit the left subtree first, then the root node, then the right subtree.
- Postorder: Visit the left subtree first, then the right subtree, then the root node. 

Thanks to the author of <a href="https://github.com/jw642459986/fucking-algorithm/blob/english/think_like_computer/Framework%20and%20thoughts%20about%20learning%20data%20structure%20and%20algorithm.md">this article</a>, the implementation of these three forms of traversals can be simplified into something like the following: 

```javascript
const traverse = (root) => {
    // preorder traversal
    traverse(root.left);
    // inorder traversal
    traverse(root.right);
    // postorder traversal
};
```