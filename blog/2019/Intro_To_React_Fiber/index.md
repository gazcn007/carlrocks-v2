---
slug: intro-to-react-fiber
title: Introduction to React Fiber
description: A comprehensive guide to understanding React Fiber, its architecture, and how it improves React performance
keywords: [react, react fiber, javascript, web development, performance]
image: ./diff.jpg
authors: [gazcn007]
tags: [react, javascript, web development]
---

import { ReactFiber, SlideShow } from '@patternize/components';

:::info
This blog will explain React Fiber Internal Algorithms, we will:

- Revisit how React diff works
- Problems with Tree Traversal
- Morris Traversal

It's recommended to have a basic understanding of React, virtualDOM, and diff before reading this blog.
:::

You can first experience the difference between React Fiber (v17+) and pre-Fiber (v16) by playing with the playground below:

<ReactFiber />

You can tell a huge difference between the two versions, the old reconcilor is very slow, but the fiber one is very smooth.

![](./diff.jpg)

### Diff Calculation of React

React's diff calculation is based on the virtualDOM, which is a tree structure that represents the UI. When a state change happens, React will calculate the difference between the old virtualDOM and the new virtualDOM, and then apply the changes to the realDOM.

![MinimalEDTrees](./MinimalEDTrees.jpg)

However, calculating the edit distance of two trees is NP-Complete, and the standard algorithm needs at least a runtime of **O(n^3)**. There are papers that show that the problem is NP-Complete.

:::tip
Fun Fact: **Even calculating the edit distance between two strings is NP-Complete** and requires dynamic programming to solve efficiently. Now imagine the complexity of calculating edit distances between entire trees!

There are papers that show that the problem is NP-Complete.

![Np-Hard.jpg](./NpHard.jpg)

:::

React uses a **heuristic approach** that compares nodes level-by-level rather than doing an exhaustive node-by-node comparison. While this may sometimes update more nodes than strictly necessary, it ensures no required updates are missed while being much more efficient than a full tree traversal. The algorithm trades perfect accuracy for speed and predictability.

![](./ReactDoc.jpg)

You can see the heuristic approach of diff traversal in the gif below - **React compares the tree level by level instead of node by node.**

![](./DiffTraversal.gif)

### Problem with Recursion

What’s wrong with doing a full tree traversal for diff in the above animation?

Well, there are two problems with traversing the tree using recursion, we all know in computer science:

1. For any tree recursion, the call stack is O(n)
2. It is impossible to pause the traversal and stop the stack from growing while you are doing recursion.

**Here is an interactive slide show of the call stack of the recursion stack:**

(You can navigate back and forth using Previous and Next button)

export const StackSlideShow = () => {
const images = [
'/slideshow/React-Stack/React-Fiber.001.jpeg',
'/slideshow/React-Stack/React-Fiber.002.jpeg',
'/slideshow/React-Stack/React-Fiber.003.jpeg',
'/slideshow/React-Stack/React-Fiber.004.jpeg',
'/slideshow/React-Stack/React-Fiber.005.jpeg',
'/slideshow/React-Stack/React-Fiber.006.jpeg',
'/slideshow/React-Stack/React-Fiber.007.jpeg'
];
return <SlideShow maxWidth='1000px' maxHeight='460px' images={images}/>;
}

<StackSlideShow />

## Solution to the problems - Morris Traversal

Morris Traversal is a way to traverse a tree without using recursion. It is a linear time algorithm that uses a single stack to store the nodes.

**Here is an interactive slide show of traversing the tree with Morris Traversal:**

export const FiberSlideShow = () => {
const images = [
'/slideshow/React-Fiber/React-Fiber.001.jpeg',
'/slideshow/React-Fiber/React-Fiber.002.jpeg',
'/slideshow/React-Fiber/React-Fiber.003.jpeg',
'/slideshow/React-Fiber/React-Fiber.004.jpeg',
'/slideshow/React-Fiber/React-Fiber.005.jpeg',
'/slideshow/React-Fiber/React-Fiber.006.jpeg',
'/slideshow/React-Fiber/React-Fiber.007.jpeg',
'/slideshow/React-Fiber/React-Fiber.008.jpeg',
'/slideshow/React-Fiber/React-Fiber.009.jpeg',
'/slideshow/React-Fiber/React-Fiber.010.jpeg',
'/slideshow/React-Fiber/React-Fiber.011.jpeg'
];
return <SlideShow maxWidth='1000px' maxHeight='460px' images={images}/>;
}

<FiberSlideShow />

**With Morris Traversal, the call stack is constant O(1) space. Runtime is O(1) for each evaluation. And you can pause the traversal anytime!**

This is exactly what React Fiber is doing in their code - adding more path between the nodes to turn a tree into a graph like Morris Traversal.

![](graph.jpg)

## React Fiber with concurrency

What you can do with fiber once you have O(1) time and space for each evaluation and being able to pause the traversal is concurrent rendering.

This is how React Fiber achieves concurrent rendering, you can see the animation below:

export const ConcurrencySlideShow = () => {
const images = [
'/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.001.jpeg',
'/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.002.jpeg',
'/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.003.jpeg',
'/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.004.jpeg',
'/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.005.jpeg',
'/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.006.jpeg',
'/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.007.jpeg'
];
return <SlideShow maxWidth='1000px' maxHeight='460px' images={images}/>;
}

<ConcurrencySlideShow />
