const useTraverseTree = () => {

    const insertNode = (tree, folderId, nodeTobeAdded, isFolder) => {
        if(tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                "id" : new Date().getTime(),
                "name" : nodeTobeAdded,
                "isFolder" : isFolder,
                "items" : []
            })
            return tree;
        }

        let newItems = tree.items.map((item) => insertNode(item, folderId, nodeTobeAdded, isFolder));
        tree = {...tree, "items" : newItems}
        return tree;
    }

    return {insertNode}

}

export default useTraverseTree;