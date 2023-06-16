function selectionSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (lowest !== i) {
            swap(arr, i, lowest);
        }
    }
    return arr;
}

function swap(arr, index1, index2) {
    const temp = arr[index1]
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

console.log(selectionSort([34, 56, 22, 12, 67, 89, 95, 45]));
