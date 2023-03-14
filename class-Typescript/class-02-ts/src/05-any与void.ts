export default {}

/*
*       any类型
*           any表示任意类型，当我们不清楚某个值的具体类型时可以使用any类型
*           在 ts 中任何数据类型的值都可以赋值给any
* */

/*
*       any类型使用场景一
*           变量的值会动态改变，比如用户输入的值（string、number、boolean等），编译时any类型可以让变量规避类型检查
* */
let salary: any = 1800;
salary = 'my salary is 18k';
salary = false;

/*
*       any类型使用场景二
*           改写现有代码时，任意类型允许在编译时可选择的包含或移除类型检查
* */
let obj: any = 12;
// console.log(obj.toFixed(2))
// obj.substring(1)

/*
*       any类型使用场景三
*           定义存储各种数据类型的数组时
* */
let beautyList: any[] = ['邱淑贞', '蒋依依', '贾静雯', 11 , 22];
beautyList = ['邱淑贞', '蒋依依', '贾静雯', 11 , 22, false, [10,20,30], {}]



/*
*       void类型
*           某种程度上来说，void类型像是与any类型相反的，它表示没有任何类型
*           当一个函数没有返回值时，其返回类型就是 void
*           在 ts 中只有 null(非严格模式下) 和 undefined 可以赋值给 void 类型
* */

function makeMoney(): void{
    console.log('I want to make money and marry a wife')
    // return undefined
    return null
}
const result = makeMoney()
console.log(result)

let value: void;
value = undefined;
value = null;

