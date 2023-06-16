var i;

for (i = 0; i <10; i++) {
    (function asyncWrap(currentValue) {
        setTimeout(() => {
            console.log(currentValue);
        }, 1000)
    })(i)
}
