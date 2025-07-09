const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = num.filter((num) => {
    return (num>=4) || (num <= 2)
}
);
console.log(newNum);
//  usage of map
const newNum2 = num.map((item) => {
    return item*10;
}).map((item) => item + 1).map((item) => item - 3);
console.log(newNum2);