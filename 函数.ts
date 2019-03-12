 /** */// 函数 /** */

 function add(x: number, y: number=1): number {  //这里为每个参数加类型，最后在为返回值加类型
    return x + y;
}


let myAdd=(x: number, y: number):number =>  { return x + y; };

add(5)

//默认参数 this  =>  均和es6一样