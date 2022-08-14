---
title: Leetcode 674. Longest Continuous Increasing Subsequence
tags: ['DynamicProgramming/Coordinate']
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Question

Original Question: [Leetcode 674. Longest Continuous Increasing Subsequence](https://leetcode.com/problems/longest-continuous-increasing-subsequence/)

Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

### Example 1:
```
Input: [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4.
```

### Example 2:
```
Input: [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
```

# Solution

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'py', },
]
}>
<TabItem value="java">

```java
class Solution {
    public int findLengthOfLCIS(int[] nums) {
        if(nums.length == 0) return 0;
        int dp[] = new int[nums.length];
        dp[0] = 1;
        int res = 1;
        for(int i = 1; i < nums.length; i++){
            if(nums[i] > nums[i-1]){
                dp[i] = dp[i-1]+1;
            } else {
                dp[i] = 1;
            }
            res = Math.max(dp[i], res);
        }
        return res;
    }
}
```

</TabItem>
<TabItem value="py">

```py
class Solution(object):
    def findLengthOfLCIS(self, nums):
        if not nums:
            return 0
        dp = [1] * len(nums)
        for i in range(1, len(nums)):
            if nums[i] > nums[i-1]:
                dp[i] = dp[i - 1] + 1
        return max(dp)
```
</TabItem>
</Tabs>
