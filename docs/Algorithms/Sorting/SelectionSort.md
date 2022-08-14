---
id: SelectionSort
title: Selection Sort
sidebar_label: Selection Sort
---

import { Array, VerticalBarChart, Button } from '@patternize/components';

## Idea
The idea is to select the smallest element of remaining array and then swap it to the front.

## Visualization

export const SelectionSort = ({ data }) => {
    const [index, setIndex] = React.useState(0);
    return (
        <div className={'controller'}>
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

<SelectionSort data={[
          [29, 72, 98, 13, 87, 66, 52, 51, 36],
          [13, 72, 98, 29, 87, 66, 52, 51, 36],
          [13, 29, 98, 72, 87, 66, 52, 51, 36],
          [13, 29, 36, 72, 87, 66, 52, 51, 98],
          [13, 29, 36, 51, 87, 66, 52, 72, 98],
          [13, 29, 36, 51, 52, 66, 87, 72, 98],
          [13, 29, 36, 51, 52, 66, 72, 87, 98],
      ]}/>

## Implementation
- scan array, find the minimum element's index min_idx
- swap the element to the index i, then incrememnt i

```java
public class SelectionSort{
    void selectionSort(int arr[]) {
        int n = arr.length; 
    
        // One by one move boundary of unsorted subarray 
        for (int i = 0; i < n-1; i++) { 
            // Find the minimum element in the input array 
            int min_idx = i; 
            for (int j = i+1; j < n; j++) 
                if (arr[j] < arr[min_idx]) 
                    min_idx = j; 
    
            // Swap the found minimum element with the ith element
            int temp = arr[min_idx]; 
            arr[min_idx] = arr[i]; 
            arr[i] = temp; 
        }
    }
}
```

## Time and Space Analysis
- Time O(n^2)
- Space O(1)

