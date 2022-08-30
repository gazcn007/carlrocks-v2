---
title: Java Run Time in One Table
date: 2014-08-31 14:48:15
tags: [Java]
---

## List

List                 | add  | remove | get  | contains | next | Data Structure
---------------------|------|--------|------|----------|------|---------------
ArrayList            | O(1) |  O(n)  | O(1) |   O(n)   | O(1) | Array
LinkedList           | O(1) |  O(1)  | O(n) |   O(n)   | O(1) | Linked List
CopyOnWriteArrayList | O(n) |  O(n)  | O(1) |   O(n)   | O(1) | Array

<!--truncate-->

## Set

Set                   |    add   |  remove  | contains |   next   | size | Data Structure
----------------------|----------|----------|----------|----------|------|-------------------------
HashSet               | O(1)     | O(1)     | O(1)     | O(h/n)   | O(1) | Hash Table
LinkedHashSet         | O(1)     | O(1)     | O(1)     | O(1)     | O(1) | Hash Table + Linked List
EnumSet               | O(1)     | O(1)     | O(1)     | O(1)     | O(1) | Bit Vector
TreeSet               | O(log n) | O(log n) | O(log n) | O(log n) | O(1) | Red-black tree
CopyOnWriteArraySet   | O(n)     | O(n)     | O(n)     | O(1)     | O(1) | Array
ConcurrentSkipListSet | O(log n) | O(log n) | O(log n) | O(1)     | O(n) | Skip List

## Queue

Queue                   |  offer   | peek |   poll   | remove | size | Data Structure
------------------------|----------|------|----------|--------|------|---------------
PriorityQueue           | O(log n) | O(1) | O(log n) |  O(n)  | O(1) | Priority Heap
LinkedList              | O(1)     | O(1) | O(1)     |  O(1)  | O(1) | Array
ArrayDequeue            | O(1)     | O(1) | O(1)     |  O(n)  | O(1) | Linked List
ConcurrentLinkedQueue   | O(1)     | O(1) | O(1)     |  O(n)  | O(n) | Linked List
ArrayBlockingQueue      | O(1)     | O(1) | O(1)     |  O(n)  | O(1) | Array
PriorirityBlockingQueue | O(log n) | O(1) | O(log n) |  O(n)  | O(1) | Priority Heap
SynchronousQueue        | O(1)     | O(1) | O(1)     |  O(n)  | O(1) | None!
DelayQueue              | O(log n) | O(1) | O(log n) |  O(n)  | O(1) | Priority Heap
LinkedBlockingQueue     | O(1)     | O(1) | O(1)     |  O(n)  | O(1) | Linked List

## Deque

Deque                   |  offer/offerLast   | peek |   poll/pollLast   | remove/removeLast | Size | Data Structure
------------------------|----------|------|----------|--------|------|---------------
LinkedList              | O(1)     | O(1) | O(1)     |  O(1)  | O(1) | Array
ArrayDequeue            | O(1)     | O(1) | O(1)     |  O(n)  | O(1) | Linked List

## Map

Map |put |   get    | containsKey |   next   | Data Structure
------------|----------|----------|-------------|----------|-------------------------
HashMap | O(1) ~ O(n)| O(1)     |   O(1)      | O(h / n) | Hash Table
LinkedHashMap | O(1) ~O(n) | O(1)     |   O(1)      | O(1)     | Hash Table + Linked List
IdentityHashMap | O(1) ~O(n) | O(1)     |   O(1)      | O(h / n) | Array
WeakHashMap | O(1) ~O(n) | O(1)     |   O(1)      | O(h / n) | Hash Table
EnumMap    | O(1) ~O(n)  | O(1)     |   O(1)      | O(1)     | Array
TreeMap    | O(log n)   | O(log n) |   O(log n)  | O(log n) | Red-black tree
ConcurrentHashMap| O(1) ~O(n)  | O(1)     |   O(1)      | O(h / n) | Hash Tables
ConcurrentSkipListMap | O(1) ~O(n) | O(log n) |   O(log n)  | O(1)     | Skip List

