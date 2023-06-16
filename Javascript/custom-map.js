Array.prototype.mapClone = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

const arr = [1, 2, 3];
const result = arr.mapClone((value) => {
    return value * 2;
});
console.log(result);
