var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  const depthAndDiameter = (node) => {
    if (!node) return 0;

    const leftDepth = depthAndDiameter(node.left);
    const rightDepth = depthAndDiameter(node.right);

    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

    return Math.max(leftDepth, rightDepth) + 1;
  };

  depthAndDiameter(root);

  return maxDiameter;
};
