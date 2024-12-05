---
id: Runtime
title: Runtime
sidebar_label: Runtime
---

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