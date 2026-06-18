type Flags<T> = {
  [K in keyof T]: boolean;
};

interface User {
  id: number;
  name: string;
  email: string;
}

type UserFlags = Flags<User>;
