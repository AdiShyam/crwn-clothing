import React from 'react';
import SHOP_DATA from './shopping-data'

import CollectionPreview from '../../components/preview-collection/preview-collection.component'

class ShopePage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }

    }

    render() {
        const { collections } = this.state;
        return (<div className= 'shop-page'>
            {collections.map(({id, ...otherCollectionProps}) => (<CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>)
    }
}

export default ShopePage;