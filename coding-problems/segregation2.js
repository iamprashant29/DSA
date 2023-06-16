function segregate (arr)
{
    let pIndex = 0;
    // each time we find a negative number, `pIndex` is incremented,
    // and that element would be placed before the pivot
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] < 0)    // pivot is 0
        {
            swap(arr, i, pIndex);
            pIndex++;
        }
    }
}

function swap(arr, i, j)
{
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const arr = [ 9, -3, 5, -2, -8, -6, 1, 3 ];
segregate(arr);
console.log(arr);
