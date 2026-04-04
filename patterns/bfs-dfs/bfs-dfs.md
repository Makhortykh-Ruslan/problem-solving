### BFS / DFS

#### Core Concept

**BFS (Breadth-First Search)** — traverses level by level. First visits all neighbors of the current node, then their neighbors.

**DFS (Depth-First Search)** — goes as deep as possible along one path, then backtracks and tries another.

#### Main Strategies

1. **BFS:** Uses a queue. Ideal for finding the shortest path.
    - _Example:_ Level order traversal, shortest path in graph
2. **DFS:** Uses a stack or recursion. Ideal for traversing the entire graph/tree.
    - _Example:_ Path finding, cycle detection, connected components

#### Use Cases

- Traversing trees and graphs.
- Shortest path between two nodes (BFS).
- Checking if a path exists (DFS).
- Counting islands, components, regions.
- Validating tree structure.

#### Advantages

- **BFS Time/Space:** O(V + E) where V — nodes, E — edges
- **DFS Time/Space:** O(V + E), but O(H) space where H — height of the tree