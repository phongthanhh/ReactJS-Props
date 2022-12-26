import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {

    renderProductList = () => {
        return this.props.productsData.map(shoes => {
            return (
                <div className="shoesItem col-4" key={shoes.id}>
                    <ProductItem getProductDetail={this.props.getProductDetail} shoes={shoes} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="shoesList">
                <div className="row">
                    {this.renderProductList()}
                </div>
            </div>
        );
    }
}

export default ProductList;
