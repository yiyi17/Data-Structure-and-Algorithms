var invertTree = function(root) {
    // 分
    // 解
    // 合
        if(!root) return null;
        return {
            val: root.val,
            left: invertTree(root.right),
            right: invertTree(root.left)
        }
    };

    // console.log(invertTree([4,2,7,1,3,6,9]));