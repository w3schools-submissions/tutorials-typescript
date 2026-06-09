let ourTuple: [number, boolean, string];
ourTuple = [5, false, "Coding God was here"];

// Readonly
let readonlyTuple: readonly [number, boolean, string] = [
  5,
  false,
  "The Real Coding God",
];
readonlyTuple.push("Coding God took a day off");

// Named Tuples
const graph: [x: number, y: number] = [55.2, 41.3];

// Destructuring Tuples
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
