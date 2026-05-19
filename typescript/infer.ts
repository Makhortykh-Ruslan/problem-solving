export type myReturnType<T> = T extends (...args: any[]) => infer P ? P : never;

export type MyParameters<T> = T extends (...args: infer A) => any ? A : never;

export type Awaited<T> = T extends Promise<infer P> ? P : never;

export type UnpackArray<T> = T extends (infer P)[] ? P : never;

export type FirstArgument<T> = T extends (firstArg: infer F, ...args: any[]) => any ? F : never;

export type UnpackPromiseArray<T> = T extends Promise<(infer P)[]> ? P : never;

export type LastElement<T> = T extends [...rest: unknown[], infer Last] ? Last : never;

export type PromiseAll<T extends any[]> = Promise<{ [K in keyof T]: Awaited<T[K]> }>;
