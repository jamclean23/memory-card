
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
        trees[category].catName = category;

        function getTreeName(category) {
            switch(category) {
                case 'americanhornbeam':
                    return 'American Hornbeam';
                case 'easternhemlock':
                    return 'Eastern Hemlock';
                case 'easternredcedar':
                    return 'Eastern Red Cedar';
                case 'floweringdogwood':
                    return 'Flowering Dogwood';
                case 'fraserfir':
                    return 'Fraser Fir';
                case 'northernredoak':
                    return 'Northern Red Oak';
                case 'redspruce':
                    return 'Red Spruce';
                case 'rvrbirch':
                    return 'River Birch';
                case 'tblmtnpine':
                    return 'Table Mountain Pine';
                case 'tuliptree':
                    return 'Tulip Tree';
                case 'whitepine':
                    return 'White Pine';
                case 'ylwbuckeye':
                    return 'Yellow Buckeye';
                case 'americanbasswood':
                    return 'American Basswood';
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