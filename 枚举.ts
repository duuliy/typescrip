 /** *///枚举 /** */
enum Direction {
    Up = 1,   //其余的变量会自动增长1,2,3,4
    Down,
    Left,
    Right
}


//我们还可以完全不使用初始化器：
//现在， Up的值为 0， Down的值为 1等等
enum Direction2 {
    Up,
    Down,
    Left,
    Right,
}

//由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。 

//keyof 操作符，用于类型查询

 /** *///基本用法 /** */
enum Response2 {  //
    No = 'a',
    Yes = 'b',
}

//这里的好处是只让输入此枚举，避免发生其他错误
function respond(recipient: string, message: Response2): void {
    // ...
}

respond("Princess Caroline", Response2.Yes)

//转换es5得：
// var Response;
// (function (Response) {
//     Response["No"] = "a";
//     Response["Yes"] = "b";
// })(Response || (Response = {}));
// function respond(recipient, message) {
//     // ...
// }
// respond("Princess Caroline", Response.Yes);


//异构枚举（Heterogeneous enums） 除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做。
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}


//联合枚举与枚举成员的类型
enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    kind: ShapeKind.Square,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
}


//const枚举 ,效果如你理解
const enum Enum {
    A = 1,
    B = A * 2
}

