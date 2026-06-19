type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type Parameters<T> = T extends (...args: infer P) => any ? P : never;

type ConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer P) => any ? P : never;

type InstanceType<T extends new (...args: any) => any> = T extends new (
  ...args: any
) => infer R
  ? R
  : any;
