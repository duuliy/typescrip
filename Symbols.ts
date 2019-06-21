//同es6,不可改变且唯一的。


let sym2 = Symbol("key");
let sym3 = Symbol("key");

sym2 === sym3; // false, symbols是唯一的


let sym = Symbol();

let obj = {
    [sym]: "value"
};

console.log(obj[sym]); // "value"


const getClassNameSymbol = Symbol();

class C {
    [getClassNameSymbol](){
       return "C";
    }
}

let c = new C();
let className = c[getClassNameSymbol](); // "C"