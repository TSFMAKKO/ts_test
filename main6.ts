// 泛型函數
function identity<W>(arg: W): W {
    return arg;
}

const output = identity<string>("Hello, TypeScript!");
console.log(output);

// 泛型介面
interface Pair<W,X> {
    first: W;
    second: X;
}

const pair: Pair<number, string> = { first: 1, second: "two" };
console.log(pair);
