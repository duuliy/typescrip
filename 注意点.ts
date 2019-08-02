

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