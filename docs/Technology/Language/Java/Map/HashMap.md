---
id: HashMap
title: HashMap
sidebar_label: HashMap
---

## Basics
- Simple hash table, Keys and Values are not ordered
- get(), remove() are constant time
- put() costs O(1) on average, O(n) when collision happens
- iteration order is not predictable, as the keys are not sorted
- allow both keys and values to be null

## TreeMap vs HashMap
- TreeMap are naturally sorted by order of key, HashMap is not:

```
TreeMap<Integer, Integer> tm = new TreeMap<>();
tm.put(3, 1);
tm.put(2, 2);
tm.put(1, 10);
tm.put(-100, 2);
tm.values(); //[2, 10, 2, 1]

HashMap<Integer, Integer> hm = new HashMap<>();
hm.put(3, 1);
hm.put(2, 2);
hm.put(1, 10);
hm.put(-100, 2);
hm.values(); // [10, 2, 1, 2]
```

