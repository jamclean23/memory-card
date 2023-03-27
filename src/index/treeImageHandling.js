
// Import images and assign to object
function getTrees () {
    let trees = {};

    const treesImports = require.context('./assets/trees', true, /\.jpg$/);
    
    treesImports.keys().forEach((key) => {
        // parse filename to category name and type name
        let category = key.split('/')[1];
        let type = key.split('/')[2].split('.')[0];
        
        // if category has not been created, then create it
        if (!trees.hasOwnProperty(category)) trees[category] = {};
        trees[category][type] = treesImports(key);

        
        // Get tree name from category name and assign to object
        trees[category].name = getTreeName(category);

        function getTreeName(category) {
            switch(category) {
                case '':
                    break;
                default:
                    return 'Set tree name in "treeImageHandling.js"';
            }
        }

    });    

    return trees;
}
export {
    getTrees
}