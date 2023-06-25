export default {};

/*
*       模板字面类型：
*           和ES6中的模板字符串(``)用法类似，使用该语法创建的类型称为模板字面类型
*
*       内在字符串操作类型
*           为了帮助进行字符串操作，TS 包含一组可用于操作字符串的内置类型
*
*       UpperCase<StringType>：将字符串中的每个字符转换为大写
*
*       LowerCase<StringType>：将字符串中的每个字符转换为小写
*
*       Capitalize<StringType>：将字符串的首字母转换为大写
*
*       Uncapitalize<StringType>：将字符串的首字母转换为小写
*
*       注：字符串中只操作有效的字母字符，非字母字符不操作
* */

type Hello = "hello";

type Welcome = `${Hello} world`;

let welcomeMsg: Welcome = "hello world";


// 结合联合使用
type EmailLocalIDs = "welcome_email" | "email_heading";
type FooterLocalIDs = "footer_title" | "footer_sendoff";

type AllLocalIDs = `${EmailLocalIDs | FooterLocalIDs}_id`;

type Lang = "en" | "ja" | "pt";

type LocalMessageIDs = `${Lang}_${AllLocalIDs}`;


type Test1 = Uppercase<'张a三---丰b'>;     // "张A三---丰B"

type Test2 = Lowercase<'Hello World'>;   // "hello world"

type Test3 = Capitalize<'message'>;     // "Message"

type Test4 = Uncapitalize<'HHH'>;   // hHH

let msg: Test4 = 'hHH';
