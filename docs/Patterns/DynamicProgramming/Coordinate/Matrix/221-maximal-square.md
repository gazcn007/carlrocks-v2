---
title: Leetcode 221. Maximal Square
tags: ['DynamicProgramming/Coordinate']
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Question

Original Question: [Leetcode 221. Maximal Square](https://leetcode.com/problems/maximal-square/)

Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

### Example:

```
Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
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
    public int maximalSquare(char[][] matrix) {
        if(matrix.length == 0) return 0;
        int[][] dp = new int[matrix.length+1][matrix[0].length+1];
        int maxLen = 0;
        for(int j = 1; j <= matrix.length; j++){
            for(int i = 1; i <= matrix[0].length; i++){
                if(matrix[j-1][i-1] == '1'){
                    dp[j][i] = Math.min(Math.min(dp[j][i-1], dp[j-1][i]), dp[j-1][i-1]) + 1;
                    maxLen = Math.max(maxLen, dp[j][i]);
                }
            }
        }
        return maxLen * maxLen;
    }
}
```

</TabItem>
<TabItem value="py">

```py
class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        if not matrix or not matrix[0]: 
            return 0 

        m,n, maxL, prev = len(matrix), len(matrix[0]), 0, 0 
        sqLength = [0] *(n+1) 
        for i in range(1,m+1):
            for j in range(1,n+1):
                temp = sqLength[j]
                if matrix[i-1][j-1] == '1':
                    sqLength[j] = min(sqLength[j], prev, sqLength[j-1]) + 1 
                    maxL = max(maxL, sqLength[j])
                else:
                    sqLength[j] = 0 
                prev = temp 

        return maxL*maxL
```
</TabItem>
</Tabs>
