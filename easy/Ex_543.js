var diameterOfBinaryTree = function (root) {
  const diameter = (node) => {
    if (!node) return 0;
    const left = diameter(node.left);
    const right = diameter(node.right);
    res[0] = Math.max(res[0], left + right);
    return Math.max(left, right) + 1;
  };
  const res = [0];
  diameter(root);
  return res[0];
};

