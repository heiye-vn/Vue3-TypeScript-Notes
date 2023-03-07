## TypeScript中的断言

### 1.类型断言

`类型断言（Type Assertion）`可以用来手动指定一个值的类型，允许覆盖原本的推断，并且能以任何想要的方式分析它。

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











