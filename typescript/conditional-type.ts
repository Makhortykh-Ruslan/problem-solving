export type IsString<T> = T extends string ? true : false;

export type IsArray<T> = T extends unknown[] ? true : false;

export type NonNullable<T> = T extends null | undefined ? never : T;

export type Flatten<T> = T extends unknown[] ? T[number] : never;

export type Filter<T, U> = T extends U ? T : never;

export type DeepNonNullable<T> = T extends object
  ? {
      [P in keyof T]: DeepNonNullable<T[P]>;
    }
  : T extends undefined | null
    ? never
    : T;
