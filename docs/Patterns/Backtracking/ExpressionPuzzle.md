---
id: ExpressionPuzzle
title: Expression Puzzle
sidebar_label: Expression Puzzle
---

## Problem Description
I was asked this question by my friend the other day.
Say you are given a mathematically equation in an encoded form. Would it be possible to assign values to characters in an express so that it is valid:

Ex.1:

```
For expression "ABC" + "ABC" = "DEA"
The assignment {'A': 2, 'B': 3, 'C': 1, 'D': 4, 'E': 6} will make the expression true:
if we subsitute the numbers to their according letters:
the expression becomes 231  +  231  =  462 (which is valid)

The other assignments could be:
432 + 432 = 864
281 + 281 = 562
271 + 271 = 542
```

Ex.2:

```
For expression "AA" + "B" = "CDE"
The assignment {'A':9, 'B': 3, 'C': 1, 'D': 0, 'E': 2} will make the expression true:
if we subsitute the numbers to their according letters:
the expression becomes 99  +  3  =  102 (which is valid)
```

## Reduction
### Decomposition 
This is obviously not an easy problem because there isn't a strict mathematical formula to solve this problem.

However, if we can find a way to validate an assignment, we can use backtracking to enumerate and explore all possible combinations.

### Step 1: Find a way to validate the proposed solution

```java
int getNumber(String s, Map<Character, Integer> proposedSolution){
    int num = 0;
    for(int i = 0; i < s.length(); i++){
        char c = s.charAt(i);
        num = num * 10 + proposedSolution.get(c);
    }
    return num;
}

// Checks whether or not the proposedSolution is correct.
// E.g., puzzle={"ONE", "ONE", "TWO"}, proposedSolution={O: 2, N:3, E:1, T:4, W:6} -> true
boolean checkSolution(Map<Character, Integer> proposedSolution) {
    int firstNum = getNumber(first, proposedSolution);
    int secondNum = getNumber(second, proposedSolution);
    int res = getNumber(result, proposedSolution);
    return firstNum + secondNum == res;
}
```

### Step 2: Use backtracking to solve the problem
Now, since we have a validation function `checkSolution` to check if a solution is valid, we have the successful base case for our backtracking algorithm. We can go ahead and implement the solution:

```java
Set<Character> getCharSet(){
    Set<Character> set = new HashSet<Character>();
    for(int i = 0; i < first.length(); i++){
        set.add(first.charAt(i));
    }
    for(int i = 0; i < second.length(); i++){
        set.add(second.charAt(i));
    }
    for(int i = 0; i < result.length(); i++){
        set.add(result.charAt(i));
    }
    return set;
}

boolean getNextNum(Map<Character, Integer> proposalMap, Set<Integer> usedDigits, char[] charArr, int pos){
    if(pos == charArr.length){
        if(checkSolution(proposalMap)){
            return true;
        } else {
            return false;
        }
    }

    for(int i = 0; i < 10; i++){
        if(usedDigits.contains(i)) continue;
        usedDigits.add(i);
        proposalMap.put(charArr[pos], i);
        if(getNextNum(proposalMap, usedDigits, charArr, pos+1)){
            return true;
        }
        usedDigits.remove(i);
    }
    return false;
}
```

## Solution

```java
class Puzzle{
    String first = ""; // e.g., "ONE"
    String second = ""; // e.g., "ONE"
    String result = ""; // e.g., "TWO"
    Set<Character> set;
    
    public Puzzle(String a, String b, String c){
        this.first = a;
        this.second = b;
        this.result = c;
        this.set = getCharSet();
        System.out.println(set);
    }

    int getNumber(String s, Map<Character, Integer> proposedSolution){
        int num = 0;
        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            num = num * 10 + proposedSolution.get(c);
        }
        return num;
    }

    // Checks whether or not the proposedSolution is correct.
    // E.g., puzzle={"ONE", "ONE", "TWO"}, proposedSolution={O: 2, N:3, E:1, T:4, W:6} -> true
    boolean checkSolution(Map<Character, Integer> proposedSolution) {
        int firstNum = getNumber(first, proposedSolution);
        int secondNum = getNumber(second, proposedSolution);
        int res = getNumber(result, proposedSolution);
        return firstNum + secondNum == res;
    }
    
    Set<Character> getCharSet(){
        Set<Character> set = new HashSet<Character>();
        for(int i = 0; i < first.length(); i++){
            set.add(first.charAt(i));
        }
        for(int i = 0; i < second.length(); i++){
            set.add(second.charAt(i));
        }
        for(int i = 0; i < result.length(); i++){
            set.add(result.charAt(i));
        }
        return set;
    }
    
    boolean getNextNum(Map<Character, Integer> proposalMap, Set<Integer> usedDigits, char[] charArr, int pos){
        if(pos == charArr.length){
            if(checkSolution(proposalMap)){
                return true;
            }
            else{
                return false;
            }
        }

        for(int i = 0; i < 10; i++){
            if(usedDigits.contains(i)) continue;
            usedDigits.add(i);
            proposalMap.put(charArr[pos], i);
            if(getNextNum(proposalMap, usedDigits, charArr, pos+1)){
                return true;
            }
            usedDigits.remove(i);
        }
        return false;
    }

    Map<Character, Integer> solve() {
        Map<Character, Integer> map = new HashMap<Character, Integer>();
        Set<Integer> digits = new HashSet<>();
        char[] charSet = new char[set.size()];
        int pos =0;
        for(char c : this.set){
            charSet[pos++] = c;
        }
        if(getNextNum(map, digits, charSet, 0)){
            return map;
        }
        else{
           return null;
        }
    }
}
```