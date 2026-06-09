interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10;
};

// Interface Merging
interface Animal {
  name: string;
} interface Animal {
  age: number;
} const dog: Animal = { name: "Fiddo", age: 5};

// Extending Interfaces
interface Rectangle {
  height: number,
  width: number,
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};
