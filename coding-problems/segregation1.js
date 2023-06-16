function segregate(arr, n)
    {

        // Count negative numbers
        let count_negative = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i] < 0) {
                count_negative++;
            }
        }

        // Run a loop until all negative
        // numbers are moved to the beginning
        let i = 0, j = i + 1;
        while (i !== count_negative) {
            // If number is negative, update
            // position of next positive number.
            if (arr[i] < 0) {
                i++;
                j = i + 1;
            }
            // If number is positive, move it to
            // index j and increment j.
            else if (arr[i] > 0 && j < n) {
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
                j++;
            }
        }
    }

    let arr = [ -12, 11, -13, -5, 6, -7, 5, -3, -6 ];
    let n = arr.length;
    segregate(arr, n);
    console.log(arr);
