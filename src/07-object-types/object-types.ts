const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

// Type Inference
const car2 = {
  type: "Toyota",
};
car2.type = "Ford";
car2.type = 2;

// Optional Properties
const car3: { type: string; mileage?: number } = {
  type: "Toyota",
};
car3.mileage = 2000;

// Index Signatures
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
nameAgeMap.Mark = "Fifty";
