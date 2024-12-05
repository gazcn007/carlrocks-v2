---
id: Introduction
title: Introduction to Backtracking
sidebar_label: Introduction to Backtracking
sidebar_position: 1
---

import { TreeChart } from '@patternize/components'


Have you ever run into these problems in your daily life?
- For my luggage lock, what are some of the interesting password combination I can come up with? 🔐
- For my living room, how many possible ways I can rearrange my sofa, table, speakers and TV? 📺
- Or, yes! this is a good one, given a set of liquors and juice, what are possible cocktails I can come up with? 🍹

export const Backtracking = () => {
    const tree = {
        "name": "🥃",
        "children": [{
            "name": "Bourbon",
            "children": [
                { "name": "Mint",
                    "children": [{"name": "Mint Julep"}]
                },
                { "name": "Vermouth",
                    "children": [{
                        "name": "Manhattan"
                    }]
                },
                { "name": "Lime",
                    "children": [{
                        "name": "Cherry",
                        "children": [{
                            "name": "Whiskey Sour"
                        }]
                    }]
                },
                { "name": "Ice Cube",
                    "children": [{
                        "name": "Orange Peel",
                        "children": [{
                            "name": "Old Fashioned"
                        }]
                    }]
                }
            ]},{
            "name": "Vodka",
            "children": [
                { "name": "Tomato",
                    "children": [{
                        "name": "Bloody Mary"
                    }]
                },
                { "name": "Kahlua",
                    "children": [{
                        "name": "Cream",
                        "children": [{
                            "name": "White Russian"
                        }]
                    }]
                },
                { "name": "Cranberry",
                    "children": [{
                        "name": "Grapefruit",
                        "children": [{
                            "name": "Sea Breeze"
                        }, {
                            "name": "Lime",
                            "children": [{"name": "Cosmopolitan"}]
                        }]
                    }]
                }
            ]},{
            "name": "Rum",
            "children": [
                {
                    "name": "Pineapple",
                    "children": [{
                        "name": "Coconut",
                        "children": [{
                            "name": "Pina Colada"
                        }]
                    }]
                },
                {
                    "name": "Lime",
                    "children": [{
                        "name": "Mojito"
                    },{
                        "name": "Cola",
                        "children": [{
                            "name": "Cuba Libre"
                        }]
                    }]
                }
            ]}
        ],
    };
    return <>{typeof window !== 'undefined' &&  <TreeChart data={tree}/>}</>
}

<Backtracking />

## Backtracking
>"Backtracking can be defined as a general algorithmic technique that considers searching every possible combination in order to solve a computational problem."

## Intuitions of A Backtracking Problem
1. The problem is about combinations, combinatorics, and permutation. Usually the problem has multiple possible solutions and it asks you to "list" or "enumerate" all the possible solutions.
2. When you try to come up with an combination of both iteration and recursion. For example, you need to have a loop inside of a recursive function, and the loop's range depends on the function parameters:

```java
void someRecursiveFunction(int x, int y){
    /* do something... */
	for(int i = 0; i < y; i++){
	    /* do something in the for loop... */
	    // call someRecursiveFunction with updated parameters
		someRecursiveFunction(x, y+i);
	}
	/* do something else... */
}
```

3. When you can prove that the solution needs a runtime of <img src="https://render.githubusercontent.com/render/math?math=O(n!)"/>

## Backtracking Generalized Solution Template

```java
class Solution {
    /* Declare private data structures: */
    private ArrayList<Integer> solutions;
    public List<List<Integer>> permute(int[] nums) {
        // declare private data structures
        solutions = new ArrayList<>();
        // call backtrack
        backtrack(param1, param2);
        // return results
        return this.results;
    }

    private void backtrack(int param1, int param2){
    	// handle base case!
        if(BaseCase qualified){
        	// Add current result to the solution collection
        	solutions.add(param2)
            return;
        }

        for(int i = 0; i< param1; i++){
        	// 1. Handle edge case
            if(count[i] == 0) continue;
            // 2. Prepare a possible solution using some variable
            result.set(level, nums[i]);
            // 3. Remove used variable in step 2
            count[i]--;
            // 4. Call backtrack recursively
            backtrack(param1, param2+1);
            // 5. Add used variable in step 2 and 4 back to the set
            count[i]++;
        }
    }
}
```

## References
- [Geeksforgeeks: Intro to Backtracking](https://www.geeksforgeeks.org/backtracking-introduction/)