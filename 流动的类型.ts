class Foo {}

const Bar = Foo;

let bar: Bar; // Error: 不能找到名称 'Bar'


//如果你在使用 namespace 或者 modules，使用 import 是你唯一能用的方式：
// “内部模块”现在叫做“命名空间”。 另外，任何使用 module关键字来声明一个内部模块的地方都应该使用namespace关键字来替换。 
// 这就避免了让新的使用者被相似的名称所迷惑。
namespace importing {
    export class Foo {}
  }
  
  import Bar2 = importing.Foo;
  let bar2: Bar2; // ok

//捕获类成员的类型
  class Foo1 {
    foo: number; // 我们想要捕获的类型
  }
  
  declare let _foo: Foo1;
  
  // 与之前做法相同
  let bar1: typeof _foo.foo;




  //以下两种办法，let出来时值 const出来时类型。。。！！！！！
  //捕获变量的类型
  const foo2 = 123;
  let bar33: typeof foo2; // 'bar' 类型与 'foo' 类型相同

  bar33 = 123; // ok
  bar33 = '789'; // Error: 'string' 不能分配给 'number' 类型

  // 捕获字符串的类型与值
  const foo3 = 'Hello World';

  // 使用一个捕获的类型
  let bar3: typeof foo3;

  // bar 仅能被赋值 'Hello World'
  bar3 = 'Hello World'; // ok
  bar3 = 'anything else'; // Error



  //keyof 操作符能让你捕获一个类型的键。
  const colors = {
    red: 'red33',
    blue: 'blue33'
  };
  
  type Colors = keyof typeof colors;
  
  let color2: Colors = 'red'; // color 的类型是 'red' | 'blue'
  color2 = 'red'; // ok
  color2 = 'blue'; // ok
  color2 = 'anythingElse'; // Error