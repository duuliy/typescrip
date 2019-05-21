 /** */// 函数 /** */

 function add(x: number, y: number=1): number {  //这里为每个参数加类型，最后在为返回值加类型
    return x + y;
}

//如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。

let myAdd=(x: number, y: number):number =>  { return x + y; };

add(5)

//默认参数 this  =>  均和es6一样