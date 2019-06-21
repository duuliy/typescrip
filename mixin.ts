//有点类型抽象组合的意思

// Disposable Mixin
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }

}

// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}


class SmartObject implements Disposable, Activatable {
//首先应该注意到的是，没使用extends而是使用implements。 
//把类当成了接口，仅使用Disposable和Activatable的类型而非其实现。 
//这意味着我们需要在类里面实现接口。 但是这是我们在用mixin时想避免的。