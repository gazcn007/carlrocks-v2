---
id: HashSet
title: HashSet
sidebar_label: HashSet
---

## Basics
- Implements Set

## Construction
- with predefined value (might contain duplicates)

```
Set<Integer> set = new HashSet<>(Arrays.asList(1,1,1,2,2,3));
```

## Methods

Method | Runtime | Description | Return Type
--- |:---:| --- | :---: 
add(E e)| O(log n) | Appends the specified element to the end of this list. | boolean
clear()| O(n) | removes all element| void
contains(Object o)| O(n) worst time| contains|boolean
iterator()|O(1)|creates a iterator|Iterator
offer(E e)| O(log n) | insert element (like add)| boolean
peek()| O(1) | retreves the head| E
poll()| O(n) | retrieves and remove the head| E
remove(Object o)| o(n)|removes a single instance of the specified value| boolean
size()| O(1) | return the size| int
toArray()/toArray(T[] a)| O(n) | return the array | []/ T[]
