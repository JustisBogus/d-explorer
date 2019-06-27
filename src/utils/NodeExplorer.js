export default class NodeExplorer {
    constructor(root){
        this.root = root;
    }

    findNode(id){
       
        return NodeExplorer.findInTree(this.root, id);
    }    

    addChildren(parent, children){
        const node = NodeExplorer.findInTree(this.root, parent);

        if (!node.children) {
            node.children = [];
        }

        node.children = [...node.children, ...children];        
    }

    toggleChildren(id){
        const node = NodeExplorer.findInTree(this.root, id);
        return node.showChildren = !node.showChildren;
    }

    // mark all children and children of children for animation recursively
    markChildrenForAnimationRecuresively(parentId) {
        const node = NodeExplorer.findInTree(this.root, parentId);
        NodeExplorer.markChildrenForAnimation(node);
    }

    static markChildrenForAnimation(parentNode) { 
        parentNode.animate = true;      
        if (!parentNode.children) {
          return ;  
        }
        for (let i = 0; i < parentNode.children.length; i++ ) {       
            const child = parentNode.children[i];
            NodeExplorer.markChildrenForAnimation(child);
        }
    }

    unmarkChildrenForAnimationRecuresively(parentId) {
        const node = NodeExplorer.findInTree(this.root, parentId);
        NodeExplorer.unmarkChildrenForAnimation(node);
    }

    static unmarkChildrenForAnimation(parentNode) { 
        parentNode.animate = false;      
        if (!parentNode.children) {
          return ;  
        }
        for (let i = 0; i < parentNode.children.length; i++ ) {       
            const child = parentNode.children[i];
            NodeExplorer.unmarkChildrenForAnimation(child);
        }
    }

    



    getRoot(){
        return this.root;
    }

    static clone(root){
        return JSON.parse(JSON.stringify(root));
    }

    static getLevels(node){
        let bottom = false;
        let levels = [ [[node]] ];
        let index = 0;

        while(!bottom){
            let lastLevel = levels[index].reduce((nodes, set) => [...nodes, ...set], []);
            
            let newLevel = lastLevel.reduce((children, node) => {
                if (!node.children) {
                    node.children = [];
                }

                node.children.forEach(child => {
                    child.parentNode = node;
                });

                return node.children.length && node.showChildren ? [...children, node.children] : children;
            }, []);

            if (newLevel.length > 0){
                levels[++index] = newLevel;
            } else {
                bottom = true;
            }
        }
        return levels;
    }

    static generateEmptyNodes(type, amount){
        const nodes = [];
        for (let i = 0; i < amount; i++){
            nodes.push({isEmpty: true, type});
        }
        return nodes;
    }

    static getOpenedChildrenWidth(node){
        if (!node.showChildren || node.children.length === 0){
            return 0;
        }

        return node.children.length + node.children.reduce((sum, child) => (NodeExplorer.getOpenedChildrenWidth(child) + sum), 0);
    }

    static getChildren(nodes){
        nodes.reducers((children, node) => [...children, ...node.children],  )
    }


    static findInTree(node, id){
        if (node.id === id){
            return node;
        }

        if (!node.children) {
            node.children = [];
        }

        for(let i = 0; i < node.children.length; i++){
            const needle = NodeExplorer.findInTree(node.children[i], id);

            if (needle) {
                return needle;
            }
        }
        return null;
    }
}