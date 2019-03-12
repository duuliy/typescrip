
 /** *///interface  接口 类型判断的声明 /** */
interface LabelledValue {
    label: string;
    width: number;
  }
  
  function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }
  
  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);
//这样报错 with,因为是必传的

 /** *///可选属性  只需加一个？ /** */

interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
  let mySquare = createSquare({color: "black"});

  /** *///只读属性 /** */

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!


  /** *///额外的属性检查 /** */
// 如果 SquareConfig带有上面定义的类型的color和width属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它：
  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
}

let mySquare = createSquare({ colour666: "red", width: 100 });

//但在这我们要表示的是SquareConfig可以有任意数量的属性，并且只要它们不是color和width，那么就无所谓它们的类型是什么。


  /** *///函数类型 /** */


    /** *///可索引的类型 /** */
    interface StringArray {
      [index: number]: string;
    }
    
    let myArray: StringArray;
    myArray = ["Bob", "Fred"];
    
    let myStr: string = myArray[0];

  /** *///类的类型 /** */

  interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {  //implements  类似extends  ,但是支集成接口
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
