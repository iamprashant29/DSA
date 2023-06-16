function outer() {
    const a = 10;
    const b = 20;
    const inner = function () {
        return a + b;
    }
    return inner;
}

const innerFn = outer();
console.log(innerFn());
