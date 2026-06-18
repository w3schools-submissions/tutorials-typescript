type DynamicObject = {
  [key: `dynamic_${string}`]: string;
};

let obj: DynamicObject = { dynamic_key: "value" };
