---
id: LinkedList
title: LinkedList
sidebar_label: LinkedList
---

## Basics
- Implements both Queue (interface) and Deque (interface)
- Implemented with __List__
- Common Methods:

## Methods

Method | Runtime | Description | Return Type
---|---|---|---
add(E e)| O(1) | Appends the specified element to the end of this list. | boolean
add(int index, E element)| O(N) | Inserts the specified element at the specified position in this list. (equivalent to `offer()`/`offerLast()`) or offerFirst when `add(0, E ele)` is called| void 
contains(Object o)| O(n) | Returns true if this list contains the specified element. | boolean
get(int index) | O(n) | Returns the element at the specified position in this list. | E
indexOf(Object o) | O(n) | Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element. | int
offer(E e) | O(n) | Adds the specified element as the tail (last element) of this list. | boolean
peek() | O(1) | Retrieves but doesn't remove the head (first element) of this list. | E
poll() | O(1) | Retrieves and removes the head (first element) of this list. | E
pop() | O(1) | Pops an element from the stack represented by this list. | E
push(E e) | O(1) | Pushes an element onto the stack represented by this list.| void
remove() | O(1) | Retrieves and removes the head (first element) of this list. | E
remove(int index) | O(N) | Removes the element at the specified position in this list. | E
size() | O(1) | return size | int
toArray()| O(n) | return array containing elements in the list| Object[]
toArray(T[] a)| O(n) | return array with generic types| `<T>` T[]

## Pros/Cons
- Advantage:
	- insertion and removal is cheap(constant time), provided the position of the changes is known
	- efficient space usage
- Disadvantage:
	- not easily indexable (slow gets and sets)
	- inefficient for search