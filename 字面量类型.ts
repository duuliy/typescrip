

type CardinalDirection = 'North' | 'East' | 'South' | 'West';

function move(distance: number, direction: CardinalDirection) {
  // ...
}

move(1, 'North'); // ok
move(1, 'Nurth'); // Error

let somebody:CardinalDirection

somebody='East'  //ok
somebody='East2' //error

// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
    return o.reduce((res, key) => {
      res[key] = key;
      return res;
    }, Object.create(null));
  }
  
  // 创建 K: V
  const Direction = strEnum(['North', 'South', 'East', 'West']);
  
  // 创建一个类型
  type Direction = keyof typeof Direction;
  
  // 简单的使用
  let sample: Direction;
  
  sample = Direction.North; // Okay
  sample = 'North'; // Okay
  sample = 'AnythingElse'; // ERROR!


function doSome(x: string) {
  if (typeof x === 'string') {
    // 在这个块中，TypeScript 知道 `x` 的类型必须是 `string`
    console.log(x.subtr(1)); // Error: 'subtr' 方法并没有存在于 `string` 上
    console.log(x.substr(1)); // ok
  }

  x.substr(1); // Error: 无法保证 `x` 是 `string` 类型
}