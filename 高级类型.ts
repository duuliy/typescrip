

//**********************************高级类型 ******************************** */
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

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
//implements相当于extends
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();


//联合类型（=
//联合类型与交叉类型很有关联，但是使用上却完全不同。
//偶尔你会遇到这种情况，一个代码库希望传入 number或 string类型的参数

interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors

//辨析联合类型

interface Square {
  kind: 'square';
  size: number;
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
    return s.size * s.size;
  } else {
    // 不是一个 square ？因此 TypeScript 将会推算出 s 一定是 Rectangle
    return s.width * s.height;
  }
}