---
id: ConfusingNumber
title: Confusing Number
sidebar_label: Confusing Number
---
## Problem Description

Source: https://leetcode.com/problems/confusing-number-ii/

We can rotate digits by 180 degrees to form new digits. When 0, 1, 6, 8, 9 are rotated 180 degrees, they become 0, 1, 9, 8, 6 respectively. When 2, 3, 4, 5 and 7 are rotated 180 degrees, they become invalid.

A confusing number is a number that when rotated 180 degrees becomes a different number with each digit valid.(Note that the rotated number can be greater than the original number.)

Given a positive integer N, return the number of confusing numbers between 1 and N inclusive.

Example 1:

```
Input: 20
Output: 6
Explanation: 
The confusing numbers are [6,9,10,16,18,19].
6 converts to 9.
9 converts to 6.
10 converts to 01 which is just 1.
16 converts to 91.
18 converts to 81.
19 converts to 61.
```

Example 2:

```
Input: 100
Output: 19
Explanation: 
The confusing numbers are [6,9,10,16,18,19,60,61,66,68,80,81,86,89,90,91,98,99,100].
```

Note:
`1 <= N <= 10^9`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="java"
  values={[
    { label: 'Java', value: 'java', },
    { label: 'Python', value: 'py', },
    { label: 'C++', value: 'C++', }
  ]
}>
<TabItem value="java">

```java
class Solution {
    Map<Integer, Integer> map;
    int count = 0;
    public Solution() {
        map = new HashMap<>();
        map.put(6, 9);
        map.put(9, 6);
        map.put(0, 0);
        map.put(1, 1);
        map.put(8, 8); 
    }

    private boolean isConfusingNumber(long n) {
        long src = n;
        long res = 0;
        while (n > 0) {
            res = res * 10 + map.get((int) n % 10); 
            n /= 10;
        }
        return res != src;
    }

    public int confusingNumberII(int N) {
        for(int x: new int[]{1, 6, 8, 9}){
            dfs(x, N);
        }
        return count;
    }

    public void dfs(long x, int N){
        if(x>N) return;
        if(isConfusingNumber(x)){
            count++;
        }
        for(int y: new int[]{0, 1, 6, 8, 9}){
            dfs(x*10 + y, N);
        }
    }
}
```
</TabItem>
<TabItem value="py">

```py
class Solution:
    def confusingNumberII(self, N: int) -> int:
        digits = {0:0, 1:1, 6:9, 8:8, 9:6}

        def count(cur, rev, digit): 
            res = 0 
            if cur != rev: 
                res += 1                  
            for k,v in digits.items():
                if cur == 0 and k == 0: 
                    continue                     
                if cur*10 + k > N: 
                    break 
                else: 
                    res += count(cur*10+k, v*digit + rev, digit*10)
            return res 

        return count(0,0,1)
```

</TabItem>
<TabItem value="C++">

```cpp
class Solution {
public:
    int confusingNumberII(int N) {
        ans = 0;
        for (auto x: {1,6,8,9})
            dfs(x, N);
        return ans;
    }

private:
    void dfs(long x, int N) {
        if (x > N) return;
        if (isConfusing(x)) ans++;
        for (auto y: {0,1,6,8,9})
            dfs(x * 10 + y, N);
    }
    bool isConfusing(int x) {
        int num[10];
        int size = 0;
        while(x) {
            num[size++] = x % 10;
            x /= 10;
        }
        for (int l = 0, r = size - 1; l <= r; l++, r--) {
            if (num[l] != myMap[num[r]])
                return true;
        }
        return false;
    }
    const int myMap[10] = {0,1,2,3,4,5,9,7,8,6};
    int ans;
};
```

</TabItem>
</Tabs>
