// 介面
interface Shape {
    color: string;
    area(): number;
}

// 類別實現介面
class Circle implements Shape {
    public color: string;
    constructor(color: string, public radius: number) {
        this.color=color;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

console.log(new Circle("alex",555));


// 泛型介面
interface Pair<T, U> {
    first: T;
    second: U;
}

// 泛型函數
function identity<T>(arg: T): T {
    return arg;
}
