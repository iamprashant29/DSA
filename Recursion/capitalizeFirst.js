const result = [];
function capitalizeFirst (arr) {
    if (arr.length === 0) return;
    result.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    return capitalizeFirst(arr.slice(1));
}
capitalizeFirst(['car','taco','banana']);
console.log(result);
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
