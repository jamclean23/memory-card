
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
                default:
                    return 'Set tree name in "treeImageHandling.js"';
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
                case 'southerncatalpa':
                    return 'Southern Catalpa';
                case 'blackcherry':
                    return 'Black Cherry';
                case 'slipperyelm':
                    return 'Slippery Elm';
                case 'wingedelm':
                    return 'Winged Elm';
                case 'mountainash':
                    return 'Mountain Ash';
                case 'sassafras':
                    return 'Sassafras';
                case 'blacklocust':
                    return 'Black Locust';
                case 'postoak':
                    return 'Post Oak';
                case 'chestnutoak':
                    return 'Chestnut Oak';
                case 'blackjackoak':
                    return 'Blackjack Oak';
                case 'southernredoak':
                    return 'Southern Red Oak';
                case 'scarletoak':
                    return 'Scarlet Oak';
                case 'whiteoak':
                    return 'White Oak';
                case 'firecherry':
                    return 'Fire Cherry';
                case 'sycamore':
                    return 'Sycamore';
                case 'virginiapine':
                    return 'Virginia Pine';
                case 'loblollypine':
                    return 'Loblolly Pine';
                case 'pitchpine':
                    return 'Pitch Pine';
                case 'shortleafpine':
                    return 'Shortleaf Pine';
                case 'sweetgum':
                    return 'Sweet Gum';
                case 'blackwalnut':
                    return 'Black Walnut';
                case 'americanholly':
                    return 'American Holly';
                case 'whiteash':
                    return 'White Ash';
                case 'americanbeech':
                    return 'American Beech';
                case 'hawthorn':
                    return 'Hawthorn';
                case 'easternredbud':
                    return 'Eastern Redbud';
                case 'americanchestnut':
                    return 'American Chestnut';
                case 'sourwood':
                    return 'Sourwood';
                case 'persimmon':
                    return 'Persimmon';
                case 'blackhaw':
                    return 'Blackhaw';    
                case 'elderberry':
                    return 'Elderberry';
                case 'tagalder':
                    return 'Tag Alder';
                case 'mountainwinterberry':
                    return 'Mountain Winterberry';
                case 'pawpaw':
                    return 'Pawpaw Tree';
                case 'staghornsumac':
                    return 'Staghorn Sumac';
                case 'mockernuthickory':
                    return 'Mockernut Hickory';
                case 'shagbarkhickory':
                    return 'Shagbark Hickory';
                case 'pignuthickory':
                    return 'Pignut Hickory';
                case 'yellowbirch':
                    return 'Yellow Birch';
                case 'mimosa':
                    return 'Mimosa';
                case 'mountainmaple':
                    return 'Mountain Maple';
                case 'sugarmaple':
                    return 'Sugar Maple';
                case 'redmaple':
                    return 'Red Maple';
                case 'stripedmaple':
                    return 'Striped Maple';
                case 'carolinahemlock':
                    return 'Carolina Hemlock';
                case 'umbrellamagnolia':
                    return 'Umbrella Magnolia';
                case 'cucumbermagnolia':
                    return 'Cucumber Magnolia';
            }
        }

    });    

    return trees;
}
export {
    getTrees
}