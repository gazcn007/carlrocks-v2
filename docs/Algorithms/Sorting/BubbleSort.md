---
id: BubbleSort
title: Bubble Sort
sidebar_label: Bubble Sort
---

import { Array, VerticalBarChart, Button } from '@patternize/components';

## Idea 
- compare each item wth the item next to it, and swap positions if required
- the largest element will be bubbled to the end of the array
- algorithm repeats until we have a pass without swapping any elements

## Visualization

export const BubbleSort = ({ data }) => {
    const [index, setIndex] = React.useState(0);
    return (
        <div className={'controller'}>
            <Array data={data[index]} />
            <VerticalBarChart data={data[index]} />
            <br/>
            <Button onClick={() => setIndex(index-1)} disabled={index == 0}>
                Previous
            </Button>
            <Button onClick={() => setIndex(index+1)} disabled={index == data.length - 1}>
                Next
            </Button>
        </div>
    )
};

<BubbleSort data={[
        [5,1,4,2,8],
        [1,5,4,2,8],
        [1,4,5,2,8],
        [1,4,2,5,8],
        [1,2,4,5,8]]}/>

## Implementation
- for every step, move largest element in left unsorted array to the end; in this caes, avoid inner loop to iterate through right sorted subarray
- for every step, swap unordered adjacent pair until no swap is needed 
- note that in one pass, more than one element can be placed into their final positions, so the position after last swap is sorted and do not need to traverse again

```java
void bubbleSort(int arr[]) { 
    int n = arr.length; 
    for (int i = 0; i < n-1; i++) 
        for (int j = 0; j < n-i-1; j++) 
            if (arr[j] > arr[j+1]) { 
                // swap arr[j+1] and arr[i] 
                int temp = arr[j]; 
                arr[j] = arr[j+1]; 
                arr[j+1] = temp; 
            } 
} 
```

## Time and Space Analysis
- Time O(n^2)
- Space O(1)

## Properties
- the algorithm garantees that the list is sorted
- Turtle and Hare Problem:
    - larger elements at the beginning get swapped to the end quickly, but small elements at the end get swapped very slowly to the beginning
    - this property is good to find k largest elements - use outer loop of bubble sort for k times

## Variants
- [Odd Even Sort / Brick Sort](https://www.geeksforgeeks.org/odd-even-sort-brick-sort/)
- [Cocktail Sort](https://www.geeksforgeeks.org/cocktail-sort/)
