
//布尔值
let isDone: boolean = false;

//数字(支持十进制和十六进制字面量，还支持ES6中引入的二进制和八进制字面量。)
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

//字符串
let names: string = "bob";
// I'll be ${ names + 1 } years old next month.`;

//数组
let list1: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

//元组 Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error

//当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'


//当访问一个越界的元素，会使用联合类型替代：
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString


x[6] = true; // Error, 布尔不是(string | number)类型

//枚举
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;


//Any 我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let list2: any[] = [1, true, "free"];

list[1] = 100;


//Void   声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：

let unusable: void = undefined;


//Null 和 Undefined

let u: undefined = undefined;
let n: null = null;

//Never  类型表示的是那些永不存在的值的类型。
// 没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

//Object
//declare声明函数或者变量 定义类型时才可用
//这里的void是返回值
declare function create(o: object | null): void ;
 function create(o: object | null): void {console.log(666)};

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error


//类型断言
//类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
// 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

//1.
let someValue1: any = "this is a string";

let strLength1: number = (<string>someValue1).length;

//2.
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;


 /** *///高级类型 /** */
//这里可以用 和， 或，  其中一个  这些高级方法
 // &， |，  instanceof

 //注意：

 // 这样不会报错
let num: number = undefined;
