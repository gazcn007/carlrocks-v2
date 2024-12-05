---
id: Interface
title: List Interface
sidebar_label: Interface
---

## Basics
- Ordered collection
- Access by index
- May contain duplicates

## Iterate through Values:
- use for loop directly:

```java
// List<List<Interval>> avails);
for (List<Interval> employeeIntervals: avails){
  for (Interval interval: employeeIntervals){
    // do...
  }
}
```

## Declare with default values:

### Convert a primitive list to a List object:

- Use Case 1: I know my values

```java
String a[] = new String[] { "A", "B", "C", "D" }; 
List<String> list = Arrays.asList(a); 
// or
List<String> list2 = Arrays.asList("1", "2", "3");
```

- Use Case 2: I know my length:

```java
String a[] = new String[(1 << 8) -1];  // know my length
List<String> list = Arrays.asList(a); 
```
