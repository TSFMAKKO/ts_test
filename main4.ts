interface Shape {
    color: string;
}

interface Circle extends Shape {
    radius: number;
}

const myCircle: Circle = {
    color: "red",
    radius: 5
};

console.log(myCircle);

