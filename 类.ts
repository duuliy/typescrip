 /** *///类的声明 /** */
 //public  就算写在参数里面也是声明了
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
    protected name;
    protected eat() {
        console.warn(666)
    }
}

let p3 = new person()   
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

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

