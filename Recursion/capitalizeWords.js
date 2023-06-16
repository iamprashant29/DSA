const result = [];
function capitalizeWords (arr) {
    if (arr.length === 0) return;
    result.push(arr[0].toUpperCase());
    return capitalizeWords(arr.slice(1));
}
capitalizeWords(['i', 'am', 'learning', 'recursion']);
console.log(result);
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
