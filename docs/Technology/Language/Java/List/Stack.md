---
id: Stack
title: Stack
sidebar_label: Stack
---
## Basics
- Stack Implements __Vector__(sync), __Vector__ implements __List__
- *Anything you can do with Stack you can do with linkedlist*, the only reason to use stack will be to utilize synchronous ability of Vector, since Stack implements a Vector
- common menthods: 

## Methods

empty() | O(1) | To test if this stack is empty | boolean
--- |:---:|---|:---:|
peek() | O(1) | looks at the top of the stack without removing it from the stack | E
pop() | O(1) | Removes the object at the top of this stack and returns that object as the value of this function. | E
push() | O(1) | Pushes an item onto the top of this stack. | E
search(Object o) | O(n) | Returns the 1-based position where an object is on this stack. | int

## Implementation
- list: push is to add node to the front of list and pop is to remove from front of list
- array: topOfStack is initialized to -1, when push, arr[topOfStack++]=element; when pop, return arr[--topOfStack]; use topOfStack==-1 to check if emtpy

## Applications
- balance symbols
- postfix expression
- infix to postfix conversion
- method calls
