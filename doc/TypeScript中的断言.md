## TypeScript中的断言

### 1. 类型断言

`类型断言（Type Assertion）`可以用来手动指定一个值的类型，允许覆盖原本的推断，并且能以任何想要的方式分析它。它没有运行时的影响，只是在编译阶段起作用 

通俗来说就是告诉编译器我把当前参数断言（判定）为我需要的某个类型然后就行下一步操作

<font color='red'>注：类型断言并不是类型转换，类型断言只在编译阶段，运行时并不会改变原有的类型。</font>



#### 1.1 类型断言的两种使用方式

方式一：`<类型>值`

方式二：`值 as 类型`，由于jsx中对 <> 方式有冲突，所以尽可能统一使用 as 方式



#### 1.2 类型断言的使用场景

##### 1.2.1 将一个联合类型断然为其中一个类型

```typescript
// 定义一个方法获取字符的长度（不使用类型断言）
function getLength(val: number | string): number{
    if(typeof val === 'number'){
        return val.toString().length
    }else{
        return val.length;
    }
}
```

上述 getLength 方法参数为联合类型 `number | string`，由于 number 类型不存在 length 属性， 所以通过 typeof 判断为 number 类型时就
转为字符串再获取长度；下面使用类型断言实现同样功能。

```typescript
function getLength(val: number | string): number{
    let len: number;
    // 参数为 number 在运行时 number.length 为 undefined
    len = (val as string).length ? (val as string).length : String(val).length
}
```

typescript 在不确定联合类型的变量为哪个类型时，我们只能访问所有类型共有的属性或方法

```typescript
interface Cat {
   name: string
   run(): void 
}
interface Fish {
    name: string
    swim():void
}

function getName(animal: Cat | Fish): string{
    // animal.run()     //  Property 'run' does not exist on type 'Cat | Fish'.Property 'run' does not exist on type 'Fish'
    return animal.name
}

// 使用类型断言访问非公共属性或方法
function isFish(animal: Cat | Fish){
    return typeof (animal as Cat).run === 'function'
}
function executeWay(animal: Cat | Fish){
    if((animal as Fish).swim){
        (animal as Fish).swim()
    }else{
        (animal as Cat).run()
    }
}
```

<font color='red'>注：联合类型在断言时不能断言为当前联合类型之外的类型</font>



##### 1.2.2 将一个父类断言为更加具体的子类

```typescript
class Api extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

// 参数是父类，父类没有子类的属性，所以将子类断言为父类
function isApiError(error: Error){
    return typeof (error as ApiError).code === 'number'
}

// 使用 instanceof 也可以判断参数是否是某个类的实例（只有为真正的类才可以使用该方法）
function isHttpError(error: Error){
    return error instanceof HttpError
}
```

使用接口定义的则无法使用 `instanceof` 方法判断，还是使用类型断言

```typescript
interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}
interface OtherError extends Error {
    otherCode: number;
}
function isOtherError(error: Error){
    return typeof (error as OtherError).otherCode === 'number'
}

let apiError: OtherError = { message: "", name: "", code: 0 };
let httpError: OtherError = { message: "", name: "", statusCode: 200 };
let otherError: OtherError = { message: "", name: "", otherCode: 500 };

console.log(isOtherError(apiError));     // false
console.log(isOtherError(httpError));     // false
console.log(isOtherError(otherError));     // true
```



##### 1.2.3 将任何一个类型断言为 any

理想情况下，TypeScript 的类型系统运转良好，每个值的类型都具体而精确。

当我们引用一个在此类型上不存在的属性或方法时在编译阶段就会报错。

```typescript
let num: number = 777;

console.log(num.length);
// Property 'length' does not exist on type 'number'
```

有时候，我们能确定某段代码不会出错，比如以下例子，给全局 window 对象添加自定义属性：

```typescript
window.selfAttr = 'this is self attribute'

// error：Property 'selfAttr' does not exist on type 'Window & typeof globalThis'
```

上述代码在编译时就会报错，提示全局对象 window 上不存在 selfAttr 属性；解决方法是将 window 临时断言为 any 类型。

`` (window as any).selfAttr = 'this is self attribute' ``

在 `any` 类型的变量上，访问任何属性都是可以的

<font color='red'>注：断言为 any 类型确实是非常方便，但有时可能掩盖了真正的类型错误，所以不是非常确定，就不要使用 as any 断言。</font>



##### 1.2.4 将 any 断言为一个具体的类型

在项目开发中我们经常会遇到 any 类型的变量，该变量可能由于第三方库未能定义好自己的类型，也有可能是别人定义的；在遇到时可以选择不处理，也可以选择优化改进，防止后面可能出现错误。

举个例子：

```typescript
function getCacheVal(key: string): any{
    return (window as any).cache[key]
}
```

上面方法的返回值为 any，我们再调用该方法时将返回值断言为一个确定的类型，可以方便后续操作

```typescript
function getCacheVal(key: string): any{
    return (window as any).cache[key]
}

interface Mouse{
    name: string;
    run(): void;
}
const jerry = getCacheVal('jerry') as Mouse;
jerry.run()
```



#### 1.3 类型断言的限制

在使用类型断言时，类型之间可以随意断言吗？看个例子

```typescript
const testStr: string = 'hello';
const testNum: number = 120;

const val = testStr as number;
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other
```

上面例子中定义了一个 string 类型的常量并断言为 number 类型，直接就编译错误，因为 string 类型和 number 类型是完全没有兼容的。

再比如：

```typescript
interface Parent {
    name: string;
}
interface Child {
    name: string;
    sayHi(): void;
}

const childPerson: Child = {
    name: "小明",
    sayHi: () =>{
        console.log('hello')
    }
}
const parent: Parent = childPerson;   // ok

const parentPerson: Parent = {
    name:'张三'
}
const child: Child = parentPerson;  // Property 'sayHi' is missing in type 'Parent' but required in type 'Child'

function testParent(parent: Parent){
    console.log((parent as Child).sayHi)    // undefined
}
testParent(parentPerson);

function testChild(child: Child){
    console.log((child as Parent).name)    // 小明
}
testChild(childPerson)
```

以上例子可以看出子类类型的值是可以赋值给父类类型的变量，父类类型的值无法赋值给子类类型的变量，说明父类是兼容子类的。

两个类之间存在兼容关系的话，二者也就能够互相断言。

类型断言使用总结：

- 联合类型可以被断言为其中一个类型

- 父类可以被断言为子类

- 任何类型都可以被断言为 any

- any可以被断言为任何类型

- 类型A和类型B之间存在兼容关系，就可以相互断言



#### 1.4 双重断言

上面说到类型之间没有兼容性是不能使用类型端断言的，由于 any 类型可以被断言为任何类型，那么两个没有任何关系的类型也就能够通过 any 作为 "桥梁" 关联起来。

`类型A as any as 类型B`

```typescript
function handler(event: Event){
    const element = event as MouseEvent;    // ok
    
    const el = event as HTMLElement;        // Conversion of type 'Event' to type 'HTMLElement' may be a mistake because neither type sufficiently overlaps with the other
    
    // 使用双重断言
    const elObj = event as any as HTMLElement;
}
```



### 2. 非空断言

非空断言也是 ts 中的一种特殊语法，可以在不进行任何显示检查的情况下删除值为 undefined 类型 和 null类型。和其他类型断言一样，只影响编译阶段，不会改变代码运行时的行为。

```typescript
function tesFoo(value: number | undefined | null){
    console.log(value!.toFixed(2))
}
```

### 3.确定赋值断言

typescript 的确定赋值断言，允许在实例属性和变量生命后面添加一 ! 符号，在编译时明确告诉该属性或变量会被赋值。

```typescript
// 语法

let name!: string;
```



以上就是对 `TypeScript` 中的断言做的一个整理。其中非空断言和确定赋值断言可能会受 ts 的版本影响，目前 ts 版本为 `4.9.5`，好像就没有编译错误，后面换到低版本再试试。
