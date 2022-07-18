var numbers = [1,2,3,4,5];
let total = numbers.reduce(function (previous, current) {
    return previous + current;
}, 0);
console.log(numbers);
console.log(total);