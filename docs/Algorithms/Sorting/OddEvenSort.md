---
id: OddEvenSort
title: Odd-Even Sort
sidebar_label: Odd-Even Sort
---

## Idea
- compare all (odd,even) indexed pairs of adjacent elements
- if a pair is in the wrong order, switch elements
- then alternate between (odd,even) and (even,odd) pairs

## Implementation
```java
public class OddEvenSort{
    public static void sort(int[] arr){
		if(arr==null || arr.length<=1){
			return;
		}
		boolean sorted = false;
		int len = arr.length;
		while(!sorted){
			sorted = true;
			//(odd,even) pairs
			for(int i=1; i<len-1; i+=2){
                if(arr[i] > arr[i+1]){
                	swap(arr,i,i+1);
                	sorted = false;
                } 
			}
			//(even,odd) pairs
			for(int i=0; i<len-1; i+=2){
				if(arr[i] > arr[i+1]){
					swap(arr,i,i+1);
					sorted = false;
				}
			}
		}
	}

	public static void swap(int[] arr, int i, int j){
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}
```

## Runtime
- Time O(n^2)
- Space O(1)

## Reference
- [Odd Even Sort / Brick Sort](https://www.geeksforgeeks.org/odd-even-sort-brick-sort/)
