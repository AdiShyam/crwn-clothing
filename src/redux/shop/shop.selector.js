import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const selectCollections = createSelector (
    [shopSelector], (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector (
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectioUrlParam => 
createSelector(
    [selectCollections],
    collections => collections[collectioUrlParam]
    // collections => collections.find(
    //     collection => collection.id === COLLECTION_ID_MAP[collectioUrlParam]
    //     ) 
);
