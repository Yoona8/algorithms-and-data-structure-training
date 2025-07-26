# 002 Different Oddity
Find a number that has a different oddity compared to other numbers and return its index.

## Examples

### 1 - Generic Case with Odd
```JavaScript
const input = '2 4 7 8 10';
// => 2
const result = findOutlier(input);
```

### 2 - Generic Case with Even
```JavaScript
const input = '1 2 1 1';
// => 1
const result = findOutlier(input);
```

### 3 - Outlier at the Beginning
```JavaScript
const input = '9 2 4 6 8';
// => 0
const result = findOutlier(input);
```

### 4 - Outlier at the End
```JavaScript
const input = '1 3 5 7 9 20';
// => 5
const result = findOutlier(input);
```

### 5 - Short Array with Three Elements
```JavaScript
const input = '100 5 200';
// => 1
const result = findOutlier(input);
```

### 6 - List Containing Negative Numbers
```JavaScript
const input = '-2 -4 -5 -6 -8';
// => 2
const result = findOutlier(input);
```

## The Algorithm

The core of the algorithm is to first determine whether the list of numbers is predominantly **even** or **odd**, and then find the single number that does not fit this pattern.
1. Split the string into an array of numbers.
2. Create a parallel array of "parities" by checking if each number is even (0) or odd (1). For example, `[4, 2, 9]` would become `[0, 0, 1]`.
3. Since there is only one "outlier" we only need to examine the first three numbers to identify the dominant parity.
  - If the first three numbers contain two or three evens, the entire list must be mostly even. The goal is to find the single odd number (parity 1).
  - If the first three numbers contain two or three odds, the entire list must be mostly odd. The goal is to find the single even number (parity 0).
4. Search through the array of parities from the beginning to find the first occurrence of the target from step 3.
5. The index of the found parity corresponds to the position of the outlier number in the original array. Return the index.

## Time and Space Complexity Analysis

- **Time Complexity: O(n)** - loop once to parse the numbers and determine their parities, and a second loop to find the outlier.
- **Space Complexity: O(n)** - create new arrays to store the numbers and their corresponding parities.