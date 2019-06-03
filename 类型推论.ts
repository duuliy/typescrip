
//变量x的类型被推断为数字。 这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时。

//大多数情况下，类型推论是直截了当地。 后面的小节，我们会浏览类型推论时的细微差别。
let x = 3;

/******************************* 例子*****************************/
//最佳通用类型
//由于最终的通用类型取自候选类型，有些时候候选类型共享相同的通用类型，
//但是却没有一个类型能做为所有候选类型的类型。例如：
let zoo = [new Rhino(), new Elephant(), new Snake()];

//这里，我们想让zoo被推断为Animal[]类型，但是这个数组里没有对象是Animal类型的，因此不能推断出这个结果。 
//为了更正，当候选类型不能使用的时候我们需要明确的指出类型：
let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];

//上下文类型

//体会一下
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error
};

window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.button);  //<- Now, no error is given
};