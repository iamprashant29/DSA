// SAMPLE INPUT / OUTPUT

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
const isOdd = val => val % 2 !== 0;

function someRecursive(arr, isOdd){
    if (arr.length === 0) return false;
    if (isOdd(arr[0])) {
        return true;
    } else {
        return someRecursive(arr.slice(1), isOdd);
    }
}

console.log(someRecursive([2,4,6], isOdd));
