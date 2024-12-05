---
id: ArrayList
title: ArrayList
sidebar_label: ArrayList
---

## Basics
- Implemented with __Array__
- Common methods:

## Methods

Method | Runtime | Description | Return Type
--- |:---:|:---|:---:
add(E e) | O(1) |Appends the specified element to the end of this list.|boolean
add(int index, E element) | O(N) | Inserts the specified element at the specified position in this list.| void 
clear() | O(1)?|Removes all of the elements from this list. | void            
contains(Object o)| O(n) | Returns true if this list contains the specified element. | boolean
get(int index) | O(1) | Returns the element at the specified position in this list. | E
isEmpty() | O(1)? | Returns true if this list contains no elements | boolean
remove(int index) | O(n) | Removes the element at the specified position in this list.| E
remove(Object o) | O(n) |Removes the first occurrence of the specified element from this list, if it is present. | boolean
size() | O(1) | return size | int
toArray| O(n) | `ArrayList<T> al = new ArrayList<>()` then call `al.toArray(new <T>[])` to convert it to primitive array| `<T>[]`

## Pros/Cons
- Advantage:
	- calls to get and set take constant time
- Disadvantage:
	- insertion and removal are expensive unless changes are made at the end of arraylist 
	- inefficient for search
	- notation of capacity (size of underlying array)
	- insertion has to be done manually, there is no method written for insertion
