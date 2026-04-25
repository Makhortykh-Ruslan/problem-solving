/**
 * Problem: Extract Nodes By Type
 * Pattern: Recursion / DFS
 * Difficulty: Middle
 * Link: https://itlead.org/ua/problems/extract-nodes-by-type
 *
 * Description:
 * Write a function that traverses a tree of DOM-like nodes
 * and returns all nodes that match the given tag name.
 * Comparison is case-insensitive.
 *
 * Example:
 * Input:
 * root = {
 *   tagName: "div",
 *   children: [
 *     { tagName: "p", children: [] },
 *     { tagName: "DIV", children: [
 *       { tagName: "span", children: [] }
 *     ]}
 *   ]
 * }, type = "div"
 * Output: [div node, DIV node]
 *
 * Input: same tree, type = "span"
 * Output: [span node]
 *
 * Input: same tree, type = "h1"
 * Output: []
 *
 * Constraints:
 * - Each node has tagName and optional children array
 * - Traverse the tree recursively (pre-order DFS)
 * - Comparison is case-insensitive: "DIV" === "div"
 * - Root node itself can match the type
 */

/**
 * @param {{ tagName: string, children?: any[] }} root
 * @param {string} type
 * @return {any[]}
 */

/**
 * const stack = [root];
 * while (stack.length) {
 *   const node = stack.pop();
 *   if (node.tagName.toLowerCase() === type.toLowerCase()) {
 *     result.push(node);
 *   }
 *   for (const child of (node.children || [])) {
 *     stack.push(child);
 *   }
 * }
 * **/
function extractNodesByType(root, type) {
  const result = [];

  function traverse(deepRoot, deepType) {
    if (deepRoot.tagName.toLowerCase() === deepType.toLowerCase()) {
      result.push(deepRoot);
    }
    for (const el of deepRoot.children || []) {
      traverse(el, deepType);
    }
  }

  traverse(root, type);

  return result;
}

// Test cases
const tree = {
  tagName: 'div',
  children: [
    { tagName: 'p', children: [] },
    { tagName: 'DIV', children: [{ tagName: 'span', children: [] }] },
  ],
};

console.log(extractNodesByType(tree, 'div')); // [div node, DIV node]
console.log(extractNodesByType(tree, 'span')); // [span node]
console.log(extractNodesByType(tree, 'h1')); // []
