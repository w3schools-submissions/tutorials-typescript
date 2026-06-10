// Casting with as
let x: unknown = "Hello";
console.log((x as string).length);

// Casting with <>
let y: unknown = "Hello";
console.log((<string>y).length);

// Force casting
let z: unknown = "Hello";
console.log((x as unknown as number).length);
