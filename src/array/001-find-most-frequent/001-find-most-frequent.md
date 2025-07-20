# 001 Find Most Frequent
How often does the most frequent element appear in the union of two sorted asc arrays? Elements can be repeated.

## Examples
### 1 - Both Arrays are Not Empty
```JavaScript
const arrayA = [1, 3, 3, 5, 8, 8];
const arrayB = [3, 5, 5, 8, 8, 8];
// => 5
const result = findMostFrequent(arrayA, arrayB);
```

### 2 - One Array is Empty
```JavaScript
const arrayA = [2, 2, 5, 5, 5, 9];
const arrayB = [];
// => 3
const result = findMostFrequent(arrayA, arrayB);
```

### 3 - No Overlapping Elements
```JavaScript
const arrayA = [10, 10, 10];
const arrayB = [25, 25, 35, 45];
// => 3
const result = findMostFrequent(arrayA, arrayB);
```

### 4 - Identical Arrays
```JavaScript
const arrayA = [7, 7, 15];
const arrayB = [7, 7, 15];
// => 4
const result = findMostFrequent(arrayA, arrayB);
```

### 5 - Arrays with Negative Numbers
```JavaScript
const arrayA = [-10, -5, -5, -1];
const arrayB = [-20, -5, 0];
// => 3
const result = findMostFrequent(arrayA, arrayB);
```

### 6 - All Elements are Unique
```JavaScript
const arrayA = [10, 20, 30];
const arrayB = [15, 25, 35];
// => 1
const result = findMostFrequent(arrayA, arrayB);
```

### 7 - Both Arrays are Empty
```JavaScript
const arrayA = [];
const arrayB = [];
// => 0
const result = findMostFrequent(arrayA, arrayB);
```

## The Algorithm
Let's use a two-pointer approach, which will allow us to find the solution in a single loop without creating a combined array (saves memory).
1. Create two pointers, one for each array, both starting at index 0.
2. Initialize a `maxCount = 0` to store the highest frequency.
3. Initialize a `currentCount = 0` and a `currentElement` to track the number we are currently counting.
4. Loop through arrays until both pointers get to the end of the corresponding arrays.
5. In each iteration, compare the elements at `arr1[p1]` and `arr2[p2]` to find the smaller of the two. This is the next element in the sorted union of the arrays.
6. Check if `nextElement` is the same as `currentElement`.
  - If `true`, the sequence continues, just increment `currentCount`.
  - If `false`, the sequence for the previous element has ended. Compare its `currentCount` with `maxCount` and update `maxCount` if necessary. Then, reset by setting `currentElement` to this new element and currentCount to `1`.
7. Increment the pointer that corresponded to the element was just processed.
8. After the loop finishes, compare the count for the last element sequence with `maxCount`. Update `maxCount` if necessary.
9. Return the `maxCount`.

## Time and Space Complexity Analysis
- **Time Complexity: O(n)** - the algorithm processes each element from both arrays exactly once. The two pointers, always move forward. The total number of steps is the sum of the lengths of the two arrays. This is linear time complexity, which is highly efficient.
- **Space Complexity: O(1)** - the key advantage of the algorithm is that the amount of memory used does not increase.