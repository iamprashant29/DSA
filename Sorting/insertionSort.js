function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j
        for (j = i - 1; j >= 0 && currentValue < arr[j]; j--) {
            arr[j + 1]= arr[j];
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}

console.log(insertionSort([34, 56, 22, 12, 67, 89, 95, 45]));
