export function MyPick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((acc, el) => ({ ...acc, [el]: obj[el] }), {}) as Pick<T, K>;
}

export function myMerge<A, B>(a: A, b: B): A & B {
  return { ...a, ...b };
}
