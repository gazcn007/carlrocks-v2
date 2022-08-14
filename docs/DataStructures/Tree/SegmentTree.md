---
id: SegmentTree
title: Segment Tree
sidebar_label: Segment Tree
---

## Idea
- This is mostly used for mutable range sum.
- For general segment tree built against a array of `n` length, the segment tree is `2n` because ` (n+n/2+n/4+n/8+…+1≈2n)`
- Segment Tree is only good when you have consistent interval updates and queries. It is not useful if you have to print or give analytics over all data points

## Implementation
```java
class SegmentTree  
{ 
    int st[]; // The array that stores segment tree nodes 
    int n;
    SegmentTree(int arr[]) { 
        n = arr.length;
        int x = (int) (Math.ceil(Math.log(n) / Math.log(2))); 
        //Maximum size of segment tree 
        int max_size = 2 * (int) Math.pow(2, x) - 1; 
        st = new int[max_size]; // Memory allocation 
        constructTree(arr, 0, n - 1, 0); 
    } 
    
    
    // A recursive function that constructs Segment Tree for array[ss..se]. 
    // si is index of current node in segment tree st 
    int constructTree(int arr[], int ss, int se, int si) 
    { 
        // If there is one element in array, store it in current node of 
        // segment tree and return 
        if (ss == se) { 
            st[si] = arr[ss]; 
            return arr[ss]; 
        } 

        // If there are more than one elements, then recur for left and 
        // right subtrees and store the sum of values in this node 
        int mid = ss + (se - ss) / 2; 
        st[si] = constructTree(arr, ss, mid, si * 2 + 1) + 
                 constructTree(arr, mid + 1, se, si * 2 + 2); 
        return st[si]; 
    } 


    int getSumUtil(int ss, int se, int qs, int qe, int si) { 
        // If segment of this node is a part of given range, then return 
        // the sum of the segment 
        if (qs <= ss && qe >= se) 
            return st[si]; 

        // If segment of this node is outside the given range 
        if (se < qs || ss > qe) 
            return 0; 

        // If a part of this segment overlaps with the given range 
        int mid = ss + (se - ss) / 2; 
        return getSumUtil(ss, mid, qs, qe, 2 * si + 1) + 
                getSumUtil(mid + 1, se, qs, qe, 2 * si + 2); 
    } 

    void updateValueUtil(int ss, int se, int i, int diff, int si) { 
        // Base Case: If the input index lies outside the range of  
        // this segment 
        if (i < ss || i > se) 
            return; 

        // If the input index is in range of this node, then update the 
        // value of the node and its children
        st[si] = st[si] + diff; 
        if (se != ss) { 
            int mid = ss + (se - ss) / 2; 
            updateValueUtil(ss, mid, i, diff, 2 * si + 1); 
            updateValueUtil(mid + 1, se, i, diff, 2 * si + 2); 
        } 
    } 

    // The function to update a value in input array and segment tree. 
   // It uses updateValueUtil() to update the value in segment tree 
    void updateValue(int arr[], int n, int i, int new_val) 
    { 
        // Check for erroneous input index 
        if (i < 0 || i > n - 1) { 
            return; 
        } 

        // Get the difference between new value and old value 
        int diff = new_val - arr[i]; 

        // Update the value in array 
        arr[i] = new_val; 

        // Update the values of nodes in segment tree 
        updateValueUtil(0, n - 1, i, diff, 0); 
    } 

    // Return sum of elements in range from index qs (quey start) to 
   // qe (query end).  It mainly uses getSumUtil() 
    int getSum(int n, int qs, int qe) 
    { 
        // Check for erroneous input values 
        if (qs < 0 || qe > n - 1 || qs > qe) { 
            return -1; 
        } 
        return getSumUtil(0, n - 1, qs, qe, 0); 
    } 
}
```

## Runtime Analysis

- Build the tree: O(n)
- Update Tree: O(log n)
- Query: O(log n)


## Reference
- [GeeksForGeeks Implement](https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/)