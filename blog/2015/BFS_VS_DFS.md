---
title: BFS VS DFS
date: 2015-09-02 12:09:21
tags: [Algorithm]
categories:
- [Algorithms, DFS/BFS]
---
# BFS vs DFS
## Overview
- search algorithms for graphs and trees
- used for unordered graph and tree
- graph representation
	- adjacent list: space O(V+E)
	- adjacent matrix: space O(V^2)

<!--truncate-->

- BFS
	- start with root node
	- scan each node in the each level
	- while traversing each level, decide if target is found
  
- DFS
	- start with root node
	- follow on branch as far as possible until target is found or hit a leaf node
	- if hit a leaf node, continue search at the nearest ancestor


## Comparison
- memory
	- BFS uses a large amount of memory because need to store pointers to a level(serious problem if the tree is very wide)
	- DFS uses less memory because no need to store all child pointers at a level
- depend on the data you search for
	- look for people alive in family tree: DFS because targets are likely to be on the bottom of the tree
	- look for people who died: BFS

## implementation
### BFS: queue
- recursive
```
BFS(Q)
{
  if (|Q| > 0)
     v <- Dequeue(Q)
     Traverse(v)
     foreach w in children(v)
        Enqueue(Q, w)    

     BFS(Q)
}
```

- iterative

```
  procedure BFS(G,v)
     initialize a queue Q
     Q.push(v)
     label v as visited
     while Q is not empty
        v <- Q.pop()
        visit(v)
        for all edges from v to w in adjacent(v)
            if w is not visited
               Q.push(w)
               label w as visited
```

### DFS: stack
- recursive

```
  procedure DFS(G,v)
     label v as visited
     for all edges from v to w in adjacent(v)
         if w is not visited
             DFS(G,w)
```
- iterative

```
   procedure DFS(G,v)
      initialize stack S
      S.push(v)
      while S is not empty
         v <- S.pop()
         if v is not visited
            label v as visited
               for all edges from v to w in adjacent(v)
                   S.push(w)
```

## Solution
- BFS: complete algorithm, give optimal solution
- DFS: suboptimal solution

## Complexity
- BFS: worst time O(V+E), worst space O(V)
- DFS: worst time O(v+E), worst space O(V)

