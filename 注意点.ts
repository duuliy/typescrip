

//1.什么是类型删除？
// 输入：

var x: SomeInterface;
// 输出：

var x;
//这意味着，在运行时，没有信息表明变量 x 的类型是 SomeInterface。


//2. 为什么没有 setter 时的 getter，没有被认为是只读？
class Foo {
    get bar() {
      return 42;
    }
  }
  let x = new Foo();
  // Expected error here
  x.bar = 10;

//   3.为什么函数参数是双向协变？

//4.为什么有更少参数的函数能够赋值给具有更多参数的函数？(包含关系还是好理解吧)
<<<<<<< HEAD

//5.为什么一个返回值不是 void 的函数，可以赋值给一个返回值为 void 的函数？
// Array#push 会返回一个数字（数组的新长度），但是它使用在一个返回值为 void 的函数上，它是一个安全的替代品。

// 6.为什么所有的类型，都能赋值给一个空的接口？
interface Thing {
  /* nothing here */
}
function doSomething(a: Thing) {
  // mysterious implementation here
}
// Expected some or all of these to be errors
doSomething(window);
doSomething(42);
doSomething('huh?');

//明显不会检查


// 6.我可以用名义上的类型别名吗？

type SomeUrl = string;
type FirstName = string;
let x66: SomeUrl = 'http://www.typescriptlang.org/';
let y66: FirstName = 'Bob';
x66 = y66; // 无法区分

// 7.如何防止两种类型在结构上兼容？

// 8.如果对象实现了某个接口，我怎么在运行时检查？

// 9.如果对象实现了某个接口，我怎么在运行时检查？

//最后在java里也说了js没重载同样ts
=======
>>>>>>> b03a634c01513bac4379c6750b9af67584f5d620
