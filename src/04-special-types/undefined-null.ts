// Basic Usage
let y: undefined = undefined;
let z: null = null;

// Optional Parameter
function greet(name?: string): string {
  return `Hello, ${name || "stranger"}!`;
}

// Optional property
interface User {
  name: string;
  age?: number;
}

// Nullish Coalescing
const value = input ?? "default";

// Optional Chaining
const street = user?.address?.street;
