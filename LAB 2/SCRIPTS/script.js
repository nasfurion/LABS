function longestConsecutiveStreakSum(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let currentStreak = 1;
    let longestStreak = 1;
    let currentSum = arr[0];
    let longestSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            currentStreak++;
            currentSum += arr[i];
        } else if (arr[i] !== arr[i - 1]) {
            currentStreak = 1;
            currentSum = arr[i];
        }

        if (currentStreak > longestStreak || (currentStreak === longestStreak && currentSum > longestSum)) {
            longestStreak = currentStreak;
            longestSum = currentSum;
        }
    }

    return longestSum;
}

// Examples
const example1 = [1, 2, 3, 6, 9, 34, 2, 6];
const example2 = [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];
const example3 = [100, 101, 102, 3, 4, 5, 6, 9];

console.log(longestConsecutiveStreakSum(example1)); 
console.log(longestConsecutiveStreakSum(example2)); 
console.log(longestConsecutiveStreakSum(example3)); 
