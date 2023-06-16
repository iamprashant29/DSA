// self is global object for worker like window is for document
// we can also use self.onmessage
onmessage = function (message) {
    console.log(message);
    let sum = 0;
    for (let i = 0; i <= 100000000000; i++) {
        sum += i;
    }
    console.log("sum is ", sum);
    postMessage(sum);
}

