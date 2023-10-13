const arr1 = [3, 4, 5, 6, 7, 8, 9, 10, 11];
Array.prototype.myFilter = function (parameter) {
    const newArray = [];
    arr1.forEach((num) => {
        if (parameter(num)) newArray.push(num)
    })
    return newArray;
};
const arr2 = arr1.myFilter(function (item) {
    return item % 2 == 1;
});
console.log(arr2);
