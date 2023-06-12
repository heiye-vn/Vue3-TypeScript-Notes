export default {};

/*
*       在 ts 函数中，形参和实参的必须是一致的（个数、参数类型），需要对应
*
* */

function buildName1(firstName: string, lastName: string) {
    return firstName + lastName;
}

// buildName1()     //  Expected 2 arguments, but got 0
// buildName1("张");     // Expected 2 arguments, but got 1
// buildName1('魏', '无羡', '哈哈哈')     // Expected 2 arguments, but got 3
buildName1("公孙", "策");



/*
*       可选参数：使用 ? 让参数作为可选参数，调用时该参数可传可不传
*
*       可选参数在没传时值为 undefined
*
*       语法： parameter?: type
*
*       可选参数必须放在必传参数后面
*
* */

function buildName2(firstName: string, lastName?: string){
    let fullName = lastName ? firstName + lastName : firstName
    return fullName
}

// console.log(buildName2("小崽子"));
// console.log(buildName2("诸葛", "亮"));


/*
*       默认参数：用于参数没有传递或传的值为 undefined 时作为初始值。
*
*       语法：parameter: type = defaultValue
*
*       可选参数和默认参数不能用于同一参数
*
*       带默认值的参数不用放在必传参数后，但是在调用时如果后面有必传参数，必须使用 undefined 占位来获取默认值
* */

function buildName3(firstName: string, lastName: string = '云长'){
    return firstName + lastName
}

// console.log(buildName3("关"));   // 关云长
// buildName3("关", undefined);    // 关云长
// buildName3("关", "之琳");     // 关之琳

function buildName4(firstName: string = '张', lastName: string){
    console.log(firstName + lastName)
}
// buildName4(undefined,'飞')



/*
*       剩余参数：必要参数、可选参数和默认参数都表示为某一个参数，而剩余参数表示个数不确定的参数。在 js 中可以使用 arguments 来表示所有传入的参数，
*               在 ts 中可以使用变量来存储剩余参数，该变量为一个数组，所以在添加类型注解时必须是一个数组或元组类型的
*
*       语法： ...restParameter: type[]
*
*       剩余参数必须放在所有参数后面，后面不能再添加形参
* */

function foo(a: string, b: string, ...restArgs: number[]){
    console.log(a)
    console.log(b)
    console.log(restArgs)
}
foo('11','22',33, 44, 55)
