---
id: TreeMap
title: TreeMap
sidebar_label: TreeMap
---

## Basics
- TreeMap is ordered by Keys
- put(), get(), remove() all cost O(logN) in the worst scenario
- Iteration order predictable
- Allows only Values to be null, Keys cannot be null

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

