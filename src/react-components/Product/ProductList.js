import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  render() {
    return (
      <ul className="product-list">
        {
          this.props.productList.map(function(item, idx) {
            if (item) {
              return <ProductItem key={idx} pid={item.key} {...item}/>
            }
          })
        }
      </ul>
    );
  }
}

export default ProductList;
