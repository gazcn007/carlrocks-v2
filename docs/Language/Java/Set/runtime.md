---
id: Runtime
title: Runtime
sidebar_label: Runtime
---

Set                   |    add   |  remove  | contains |   next   | size | Data Structure
----------------------|----------|----------|----------|----------|------|-------------------------
HashSet               | O(1)     | O(1)     | O(1)     | O(h/n)   | O(1) | Hash Table
LinkedHashSet         | O(1)     | O(1)     | O(1)     | O(1)     | O(1) | Hash Table + Linked List
EnumSet               | O(1)     | O(1)     | O(1)     | O(1)     | O(1) | Bit Vector
TreeSet               | O(log n) | O(log n) | O(log n) | O(log n) | O(1) | Red-black tree
CopyOnWriteArraySet   | O(n)     | O(n)     | O(n)     | O(1)     | O(1) | Array
ConcurrentSkipListSet | O(log n) | O(log n) | O(log n) | O(1)     | O(n) | Skip List