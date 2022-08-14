---
id: Runtime
title: Runtime
sidebar_label: Runtime
---

## Queue Interface
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

## Deque/Dequeue Interface
Deque                   |  offer/offerLast   | peek |   poll/pollLast   | remove/removeLast | Size | Data Structure
------------------------|----------|------|----------|--------|------|---------------
LinkedList              | O(1)     | O(1) | O(1)     |  O(1)  | O(1) | Array
ArrayDequeue            | O(1)     | O(1) | O(1)     |  O(n)  | O(1) | Linked List