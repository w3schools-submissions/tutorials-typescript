type IsString<T> = T extends string ? true : false;

type A = IsString<string>;
type B = IsString<number>;
type C = IsString<"hello">;
type C = IsString<string | number>;

type ArrayElement<T> = T extends (infer U)[] ? U : never;
type Numbers = ArrayElement<number[]>;
