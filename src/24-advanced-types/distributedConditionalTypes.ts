type ToArrayNonDist<T> = T extends any ? T[] : never;
type StrOrNumArr = ToArrayNonDist<string | number>;

type ToArray<T> = [T] extends [any] ? T[] : never;
type StrOrNumArr2 = ToArray<string | number>;

type FilterString<T> = T extends string ? T : never;
type Letters = FilterString<"a" | "b" | 1 | 2 | "c">;
