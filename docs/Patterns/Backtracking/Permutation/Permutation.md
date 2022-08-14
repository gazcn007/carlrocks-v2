---
id: Permutation
title: Permutation of Elements
sidebar_label: Permutation of Elements
---

This is a classic set of problems that can be solved using Backtracking.

## Type 1 Problem: Permutation of Distinct Elements
### Problem Description
Given a collection of distinct integers, return all possible permutations.

#### Input
`[1,3,5]`

#### Output
`[
   [1,3,5],
   [1,5,3],
   [3,1,5],
   [3,5,1],
   [5,1,3],
   [5,3,1]
 ]`

### Solution
```java
class Solution {
    List<List<Integer>> results;

    public List<List<Integer>> permute(int[] nums) {
        this.results = new ArrayList<>();

        // use a count array nad uniquenums array
        int[] count = new int[nums.length];
        Arrays.fill(count, 1);
        
        // create a dummy result so we know the length of the ArrayList and we can use set() instead
        // would be nice if java supports new ArrayList<>(Arrays.asList(nums)), but its a no-no due to boxing issue
        List<Integer> result = new ArrayList<>();
        for(int num: nums) result.add(num);

        // call backtrack
        backtrack(result, nums, count, 0);
        return this.results;
    }

    private void backtrack(List<Integer> result, int[] nums, int[] count, int level){
        if(level == nums.length){
            results.add(new ArrayList(result));
            return;
        }

        for(int i = 0; i< nums.length; i++){
            if(count[i] == 0) continue; // the digit has been used before
            result.set(level, nums[i]);
            count[i]--;
            backtrack(result, nums, count, level+1);
            count[i]++;
        }
    }
}
```

## Type 2 Problem: Permutation of Elements (duplicates possible)
### Problem Description
Given a collection of integers that might contain duplicates, return all possible permutations.

#### Input
`[1,1,5]`

#### Output
`[
   [1,1,5],
   [1,5,1],
   [5,1,1]
 ]`
 
### Solution

```java
class Solution {
    List<List<Integer>> results;

    public List<List<Integer>> permuteUnique(int[] nums) {
        this.results = new ArrayList<>();

        // handle duplicates
        HashMap<Integer, Integer> hm = new HashMap<>();
        for(int num : nums){
            hm.put(num, hm.getOrDefault(num, 0)+1);
        }

        // use a count array nad uniquenums array
        int[] uniqueNums = new int[hm.size()];
        int[] count = new int[hm.size()];
        int i = 0;
        for(Map.Entry<Integer,Integer> entry : hm.entrySet()){
            uniqueNums[i] = entry.getKey();
            count[i] = entry.getValue();
            i++;
        }

        // create a dummy result
        List<Integer> result = new ArrayList<>();
        for(int num: nums) result.add(num);

        // call backtrack
        backtrack(result, uniqueNums, count, 0);
        return this.results;
    }

    private void backtrack(List<Integer> result, int[] nums, int[] count, int level){
        if(level == result.size()){
            results.add(new ArrayList(result));
            return;
        }

        for(int i = 0; i< nums.length; i++){
            if(count[i] == 0) continue; // the digit has been used before
            result.set(level, nums[i]);
            count[i]--;
            backtrack(result, nums, count, level+1);
            count[i]++;
        }
    }
}
```

## References
- [Leetcode 46. Permutations [Medium]](https://leetcode.com/problems/permutations/)
- [Leetcode 47. Permutations II [Medium]](https://leetcode.com/problems/permutations-ii/)