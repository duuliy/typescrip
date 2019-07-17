 /** *///类的声明 /** */
 //public  就算写在参数里面也是声明了 默认 公开
 //readonly  顾名思义
 //eg: const bb=(public aa:string ){}
class person{
    public name;
    public eat() {
        console.warn(666)
    }
}

let p9 = new person()
p9.name='999'

//私有private
class person2{
    private name;
    private eat() {
        console.warn(666)
    }
}

let p2 = new person()   
p2.name='999'   //访问不到

//受保护的 protected

class person3{
    protected name: string;
    constructor(name: string) { this.name = name; }
    protected eat() {
        console.warn(666)
    }
}

class person4 extends person3{
    private department: string;

    constructor(name, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new person4(666, "Sales");  
console.log(howard.getElevatorPitch());//可以访问

let p3 = new person3()   
p3.name='999'   //访问不到,但是在函数内部可以调用


 /** *///类的继承 /** */

 class employee extends person{
     constructor(name:string){  //相当于传参的时候再用
         super()  //子类继承父类用构造函数必须加，作用是绑定this
         this.name=name
     } 
     code:string
 }

 let p4= new employee('duuliy')

 console.log(p4.eat)

  /** *///类的存取器 /** */
  //相当于细粒度控制get set 的值

 let passcode = "secret passcode";

 class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee2 = new Employee();
employee2.fullName = "Bob Smith";
if (employee2.fullName) {
    alert(employee2.fullName);
}

  /** *///类的静态属性 /** */  和es6一样

  class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10})); //调不到 origin
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

//抽象类 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。

abstract class Animal{
    public name:string;
    constructor(name:string){
        this.name=name;
    }
 
    //抽象方法 ，不包含具体实现，要求子类中必须实现此方法
    abstract eat():any;
 
    //非抽象方法，无需要求子类实现、重写
    run(){
        console.log('非抽象方法，不要子类实现、重写');
    }
}
 
class  Dog extends Animal{
 
    //子类中必须实现父类抽象方法，否则ts编译报错
    eat(){
       return this.name+"吃肉";
    }
}

//高级技巧
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter: Greeter;  //"告诉我 Greeter标识符的类型"
greeter = new Greeter("world");
console.log(greeter.greet());

//我们写了 let greeter: Greeter，意思是 Greeter类的实例的类型是 Greeter。

//把类当做接口使用
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};


//私有的和受保护的成员必须来自于相同的类。
class Animal {
  protected feet: number;
}
class Cat extends Animal {}

let animal: Animal;
let cat: Cat;

animal = cat; // ok
cat = animal; // ok

class Size {
  protected feet: number;
}

let size: Size;

animal = size; // ERROR
size = animal; // ERROR