

/** *///泛型 identity/** */

function identity(arg: any): any {
    return arg;
}
//这里要不使用any,那么就需要函数加<T>,称之为泛型,有且只能用T
function identity2<T>(arg: T): T {
    return arg;
}

//此时，我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
let myIdentity: <U>(arg: U) => U = identity2;

identity2(2)
// 得： function identity2<2>(arg: 2): 2

let output1 = identity2<string>("myString");  // type of output will be 'string'

let output = identity2("myString");  // type of output will be 'string'

let output2 = identity2(666); 



//使用泛型变量
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

loggingIdentity([666])

//泛型约束

interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity2(3);  // Error, number doesn't have a .length property

loggingIdentity2({length: 10, value: 3});