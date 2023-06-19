export default {};

/*
*       Map 类型：
*           要在 typescript 中定义 Map 对象，请使用泛型来设置 Map 的键和值的类型。让我们添加到 Map 中的所有键值对都必须符合指定的类型
*
*           Array.from() <===> new Map()：可迭代数组和可迭代对象互相转换
* */

type MapKey = string;
type MapVal = string | number | boolean;

let mapPerson = new Map<MapKey, MapVal>([
    ["name", "Jerry"],
    ["age", 20],
    ["sex", 1]
]);


/* 1. map.clear() 移除 map 对象所有键值对 */
// mapPerson.clear();

/* 2. map.set(key, value) 设置键值对，返回该 map 对象 */
mapPerson.set("isPeople", false);

/* 3. map.get(key) 从 map 对象中返回指定值，没有则返回 undefined */
let res = mapPerson.get("class");
// console.log(res);

/* 4. map.has(key) 返回一个布尔值，判断 map 对象中是否存在键对应的值 */
// console.log( mapPerson.has("name") );

/* 5.map.delete(key) 删除 map 对象中指定的键值对，删除成功返回 true，失败返回 false */
// console.log( mapPerson.delete('name') );

/* 6. map.size 返回 map 对象中键值对的数量 */
// console.log(mapPerson.size);

/* 7. map.keys() 返回一个 iterator(迭代器)对象，包含 map 对象中每个键，可使用 for...of 遍历 */
/*for(const key of mapPerson.keys()){
    console.log(key);
}*/

/* 8. map.values() 返回一个 iterator(迭代器)对象，包含 map 对象中每个值，可使用 for...of 遍历 */
/*for(const value of mapPerson.values()){
    console.log(value);
}*/

/* 9. map.entries() 返回一个 iterator(迭代器)对象，包含 map 对象中每个键值对([key, value])，可使用 for...of 遍历 */
/*for (const entry of mapPerson.entries()) {
    console.log(entry);
}*/

/* 10. map.forEach(callbackFn) 遍历 map 对象 */
/*mapPerson.forEach((item, key)=>{
    console.log([key, item]);
})*/

// console.log(mapPerson);

let arr = Array.from(mapPerson);
// console.log(arr);
