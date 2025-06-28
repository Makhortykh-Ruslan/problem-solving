# 🧩 Hash Map / Set Pattern

## 🔍 Pattern Essence

The **Hash Map / Hash Set** pattern leverages hash-based data structures (`Map`, `Set`) to achieve **constant-time lookup, insertion, and frequency counting**.

It allows us to avoid unnecessary iterations and gives fast access to values or existence checks via hashing.

---

## ✅ When to use Hash Map / Set:

- You need to check if a value already exists in a collection
- You need to **remove or detect duplicates**
- You need to **count frequency** of elements (e.g., letters in a word)
- You want to **cache results** for reuse
- You’re dealing with `key → value` or `id → element` associations
- You want to avoid `O(n)` `.includes()` or `.indexOf()` lookups

---

## 🔧 Skeleton

```ts
// Hash Map: frequency count
const map = new Map();
for (const item of array) {
  map.set(item, (map.get(item) || 0) + 1);
}

// Hash Set: detect duplicates
const set = new Set();
for (const item of array) {
  if (set.has(item)) {
    // duplicate found
  }
  set.add(item);
}
```

---

## 🧠 Core Idea

**Map** is used for storing and accessing `key → value` pairs efficiently — perfect for frequency counting, grouping, and caching.  
**Set** is used to track **unique values** and check for existence in constant time.

Both structures avoid linear searches, improving performance for large datasets.

---

## 📌 Example Problems

- **Contains Duplicate** — check if array has duplicates
- **Valid Anagram** — check if two strings are anagrams
- **Two Sum** — find if any two numbers sum to target
- **Group Anagrams** — group words by character frequency
- **Top K Frequent Elements** — find most frequent elements

---

## 🛠 Variations

- `Map<string, number>` — count frequencies
- `Map<number, number[]>` — group elements by value
- `Set<number>` — check for uniqueness
- `Map<string, Set<number>>` — nested mapping for complex data

---

## 🧪 Time & Space Complexity

- **Insert:** O(1)
- **Search:** O(1)
- **Delete:** O(1)
- **Space:** O(n)
