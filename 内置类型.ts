

//内置对象
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;



//自定义类型
const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

console.log(INCREMENT_ENTHUSIASM)