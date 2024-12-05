---
title: Leetcode 62. Unique Paths
tags: ['DynamicProgramming/Coordinate']
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![](./UnqiuePaths.jpg)

# Question Description
Original Question: [Leetcode 62. Unique Paths](https://leetcode.com/problems/unique-paths/)

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

### Example 1:
```
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
```

### Example 2: 
```
Input: m = 7, n = 3
Output: 28
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
    public int uniquePaths(int m, int n) {
        if(m == 0|| n==0) return 0;
        int[][] dp = new int[m][n];
        for(int i = 0; i < m; i++){
            dp[i][n-1] = 1;
        }
        for(int i = 0; i < n; i++){
            dp[m-1][i] = 1;
        }
        for(int j = m-2; j>=0; j--){
            for(int i = n-2; i>=0;i--){
                dp[j][i] = dp[j+1][i] + dp[j][i+1];
            }
        }
        return dp[0][0];
    }
}
```

</TabItem>
<TabItem value="py">

```py
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        if not m or not n:
            return 0

        paths = [[1]*(n+1)]*(m +1)

        for i in range(2,m+1):
            for j in range(2, n+1):
                paths[i][j] = paths[i-1][j] + paths[i][j-1]

        return paths[m][n]
```

</TabItem>
</Tabs>
