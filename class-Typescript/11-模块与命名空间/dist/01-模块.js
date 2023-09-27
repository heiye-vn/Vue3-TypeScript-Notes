"use strict";
/*
*       模块：在ts中，模块是一种组织和封装代码的方式，比如对公共方法的封装，公共组件的封装，以及第三方插件，库等等，都被称为模块。
*
*       模块的使用离不开导入、导出
*
*       导出分为默认导出(export default)与导出(export)，一个模块文件中只允许一个默认导出
*
*       使用默认导出时，导出的名称与导入时的名称可以不同，但是为了便于代码理解，最好使用相同的名称
*
* */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(ModuleObj.default(1,2))
// console.log(ModuleObj.Person)
// 对默认导出和普通导出同时引用
const _02_module_1 = __importStar(require("./02-module"));
console.log((0, _02_module_1.default)(5, 20));
console.log(_02_module_1.Person);
