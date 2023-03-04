const nums = [1, 2, 3, 4];
// console.log(nums)
// console.log(nums[0]);
// console.log(nums[1]);
// console.log(nums[2]);
// console.log(nums[3]);
const arr_names = new Array(4);
for (let i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
}
// console.log(arr_names);
const arr_colors = new Array("red", "blue", "yellow", "gray");
arr_colors.forEach((item, index) => {
    // console.log(item, index);
});
// 数组解构
let arr = [11, 22];
let [x, y] = arr;
// console.log(x);
// console.log(y);
// 数组迭代
let arr_obj = [{ name: "张三", age: 10 }, { name: "李四", age: 20 }, { name: "王五", age: 30 }];
for (let item of arr_obj) {
    // console.log(item, "===========", typeof item);
}
const arr_animal = ["cat", "tiger", "lion", "elephant", "mouse"];
let j;
for (j in arr_animal) {
    // console.log(typeof j)
    // console.log(arr_animal[j])
}
/*
*       注：for...in 适合遍历对象，for...of 用于遍历数组
*
*       常用的数组遍历方法：
*       for循环、for...of、forEach、map、filter、some、every、reduce
* */
// 多维数组（一个数组的元素可以是另外一个元素）
let arr_multi = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr_multi[0][0]);
// console.log(arr_multi[0][1]);
// console.log(arr_multi[0][2]);
// console.log(arr_multi[1][0]);
// console.log(arr_multi[1][1]);
// console.log(arr_multi[1][2]);
// console.log(arr_multi[2][0]);
// console.log(arr_multi[2][1]);
// console.log(arr_multi[2][2]);
// 作为参数传给函数
let sites = ["Google", "Taobao", "Facebook"];
function printSite(arr_sites) {
    for (let i = 0; i < arr_sites.length; i++) {
        console.log(arr_sites[i]);
    }
}
printSite(sites);
// 作为函数的返回值
function test_fun() {
    return ["张三", "李四", "王五"];
}
let arr_person = test_fun();
console.log(arr_person);
