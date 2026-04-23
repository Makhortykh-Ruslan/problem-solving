function myStructuredClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== 'object') return value;

  if (seen.has(value)) return seen.get(value);

  if (Array.isArray(value)) {
    const arr = [];
    seen.set(value, arr);
    value.forEach((item) => arr.push(myStructuredClone(item, seen)));
    return arr;
  }

  const obj = {};
  seen.set(value, obj);
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      obj[key] = myStructuredClone(value[key], seen);
    }
  }
  return obj;
}
