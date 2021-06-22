//var let const 解构 函数声明和js一样

//属性重命名
let o={
    a: '1',
    b: '1'
}
let { a: newName1, b: newName2 } = o;


// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型
// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6 默认导出
// export = commonjs 导出模块
// export as namespace UMD 库声明全局变量
// declare global 扩展全局变量
// declare module 扩展模块 用来做一些第三方库没有支持ts的, 而不报错。
/// <reference /> 三斜线指令