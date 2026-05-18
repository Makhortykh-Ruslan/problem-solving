export type readOnly<T> = { readonly [K in keyof T]: T[K] };

export type unReadOnly<T> = { -readonly [K in keyof T]: T[K] };

export type Nullable<T> = { [K in keyof T]: T[K] | null };

export type myRecord<T extends PropertyKey, V> = { [P in T]: V };

export type deepReadonly<T> = T extends object
  ? { readonly [P in keyof T]: deepReadonly<T[P]> }
  : T;

type RenameKeys<T, Prefix extends string> = {
  [K in keyof T as `${Prefix}${string & K}`]: T[K];
};

export type Result = RenameKeys<{ name: string; age: number }, 'get'>;
