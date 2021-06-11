/** */// 函数 /** */

function add(x: number, y: number = 1): number {  //这里为每个参数加类型，最后在为返回值加类型
  return x + y;
}

//如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。

let myAdd = (x: number, y: number): number => { return x + y; };

const simple: (foo: number) => string = foo => foo.toString()  //参数为number ,返回值为string的函数
add(5)


//默认参数 this  =>  均和es6一样


//!!!!!!!!!!!为什么我不能在解构函数 function f({ x: number }) { /* ... */ } 中使用 x？
function f({ x: number }) {
  // Error, x is not defined?
  console.log(x);
}

//对于那些习惯于查看 TypeScript 类型字面量的人来说，解构语法是有悖常理的。语法 f({ x: number }) 声明了属性名从 x 转换为 number 名的解构。
//为了能让这段代码正确运行，你需要写下：

function f2({ x }: { x: number }) {
  // OK
  console.log(x);
}

function f3({ x = 0 }) {
  // x: number
  console.log(x);
}

//声明一个函数
type ShortHand = (a: number) => number

const ShortHand: ShortHand = (a) => {
  return a
}

ShortHand('sdsd')