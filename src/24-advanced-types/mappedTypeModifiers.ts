interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type OptionalTodo = {
  [K in keyof Todo]?: Todo[K];
};

type Concrete<T> = {
  -readonly [K in keyof T]-?: T[K];
};

type ReadonlyRequired<T> = {
  +readonly [K in keyof T]-?: T[K];
};
