//迭代器和生成器


//for..of 语句
let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

//for..of vs. for..in 语句
let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) { //只循环对象
    console.log(pet); // "species"
}

for (let pet of pets) {  //只循环值
    console.log(pet); // "Cat", "Dog", "Hamster"
}

