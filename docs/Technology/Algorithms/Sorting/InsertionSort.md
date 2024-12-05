---
id: InsertionSort
title: Insertion Sort
sidebar_label: Insertion Sort
---

## Idea
- The idea is to remove one entry at a time and insert it into the correct position in the sorted part.

## Implementation
```java
void insertionSort(int arr[]) {  
    int i, key, j;  
    for (i = 1; i < arr.length; i++){  
        key = arr[i];  
        j = i - 1;
        // Move elements that are greater than key to the right by one position   
        while (j >= 0 && arr[j] > key) {  
            arr[j + 1] = arr[j];  
            j = j - 1;
        }
        // insert the key to the head of the above elements
        arr[j + 1] = key;  
    }  
}  
```

## Time and Space Analysis
- Time O(n^2)
- Space O(1)