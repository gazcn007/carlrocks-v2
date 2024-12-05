---
id: Introduction
title: Bit Manipulation
sidebar_label: Introduction
---

## Power of 2
    1 << x === 2^x


## Log Base of 2
    # log(a) base b = log(a)/log(b)
    32 >> 5 === log(32)/log(2) 


## Count Ones In Binary Representation
- `n&(n-1)` rule: is used when you want to quickly count how many `1s` in your binary number, every-time you do `n&(n-1)`, a `1` in your binary form will be removed:

```java
// first run
n = 23 // (10111)
nMinusOne = n - 1 // === 22 (10110)
n = n & nMinusOne // === 22 (10111 & 10110 = 10110)
// second run
nMinusOne = 22 - 1 // == 21 (10101)
n = n & nMinusOne // == 20 (10110 & 10101 = 10101)
// third run
nMinusOne = 20 - 1 // == 19 (10011)
n = n & nMinusOne // == 16 (10101 & 10011 = 10000)
// fourth run
nMinusOne = 16 - 1 // == 15 (01111)
n = n & nMinusOne // == 0 (10000 & 01111 = 00000)
// after 4 times, n becomes 0; hence there are 4 1s in your original binary form of int 23
```

- in short:

```java
int count_one(int n) {
    while(n) {
        n = n&(n-1);
        count++;
    }
    return count;
}
```



## References:
- https://leetcode.com/problems/sum-of-two-integers/discuss/84278/A-summary%3A-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently

