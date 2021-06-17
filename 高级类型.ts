

//**********************************高级类型 ******************************** */

//交叉类型（&）取并集，联合类型（|）用 或 理解

//交叉类型
//交叉类型是将多个类型合并为一个类型。 
//这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
//我们大多是在混入（mixins）或其它不适合典型面向对象模型的地方看到交叉类型的使用。

function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

//eg2
interface Bird2 {
  fly();
  layEggs();
}

interface Fish2 {
  swim();
  layEggs();
}

function getSmallPet2(): Fish2 & Bird2 {

}

let pet2 = getSmallPet2();
pet2.layEggs(); // 错误 返回值只能是一个类型得用下面的例子
pet2.swim();    // 错误  

// eg3
//ts 根据不同的参数返回不同的类型

type TestReturn = {
  t: number;
  h: string;
}
type aa = keyof TestReturn
const test666 = <T extends keyof TestReturn>(p: T): TestReturn[T] => ({
  t: 3,
  h: '',
})[p];

test666('t')
test666('h')


//联合类型（=
//联合类型与交叉类型很有关联，但是使用上却完全不同。
//偶尔你会遇到这种情况，一个代码库希望传入 number或 string类型的参数

// eg:1
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird { 

}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors  我们不能确定一个 Bird 或 Fish类型的变量是否有 swim方法

// eg:2
interface Square {
  kind: 'square';
  width: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

type Shape = Square | Rectangle;


function area(s: Shape) {
  if (s.kind === 'square') {
    // 现在 TypeScript 知道 s 的类型是 Square
    // 所以你现在能安全使用它
    return s.width * s.width;
  } else {
    // 不是一个 square ？因此 TypeScript 将会推算出 s 一定是 Rectangle
    return s.width * s.height;
  }
  // return s.width * s.height   //error, 不确定Square | Rectangle里面一定会有height
}

area({
  kind: 'square',
  width: 555
})

area({
  kind: 'rectangle',
  width: 555,
  height:999
})


//eg:3
interface Foo {
  foo: string;
  name: string;
}

interface Bar {
  bar: string;
  name: string;
}

const sayHello = (obj: Foo | Bar): Foo | Bar => { return obj };

sayHello({ foo: "foo", name: "lolo" });
sayHello({ bar: "bar", name: "growth" });
