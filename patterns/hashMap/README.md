### Hash Table (HashMap / Set)

#### Core Concept

The **Hash Table** pattern uses hash-based data structures (`Map`, `Set`) to get **constant-time lookup**, **insertion**, and **frequency counting**. Instead of scanning the whole collection, you use a key to access or check values in **O(1)** on average.

#### Main Strategies

1. **Frequency counter (Map):** Store each element as a key and its count (or related value) to quickly answer “how many?” or “which ones?”
   - _Example:_ Valid Anagram, Top K Frequent Elements, counting characters.
2. **Uniqueness / membership (Set):** Store seen elements to detect duplicates or check “have we seen this?”
   - _Example:_ Contains Duplicate, finding pairs that sum to target (complement in set).

#### Use Cases

- Check if a value exists in a collection.
- Count frequency of elements (letters, numbers).
- Find or exclude duplicates.
- Map keys to values (ids, cached results).
- Avoid repeated linear search (e.g. `.includes()`, `.indexOf()`).

#### Advantages

- **Time:** Lookup, insert, delete are **O(1)** on average.
- **Space:** **O(n)** for storing keys/values.
- Replaces **O(n)** scans with **O(1)** access, often turning **O(n²)** solutions into **O(n)**.
