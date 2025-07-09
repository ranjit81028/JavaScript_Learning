let arr = [1, 2, 3, 4, 5];
for(const num of arr){
    console.log(num);
}
let str = `hello everyone my name is ranjit`;
for(const char of str){
    console.log(char);
}
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States Of America");
map.set('Fr', "France");
for(const [key, value] of map){
    console.log(`${key} :- ${value}`);
}
// for objects we use in in place of "of"
const obj1 = {
    name: "ranjit",
    age: 20,
    location: "Hazaribagh",
}
for(const key in obj1){
    console.log(`${key} :- ${obj1[key]}`);
}
// arrays
let arr1 = [1, 2, 3, 4, 5, 6];
for(const key in arr){
    console.log(`${key} :- ${arr1[key]}`);
}
arr1.forEach(function (item, index){
    console.log(`hello ${item} of ${index}`);
})
const arr2 = [
    {
        language: "javascript",
        file: "js",
    },
    {
        language: "python",
        file: "cy",
    },
    {
        language: "ruby",
        file: "rub",
    }
]
arr2.forEach((item) =>
{
    console.log(item.language, item.file);

}
)