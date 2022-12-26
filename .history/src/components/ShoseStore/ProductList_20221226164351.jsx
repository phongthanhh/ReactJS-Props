import React, { Component } from 'react';

class ProductList extends Component {

    renderProductList = () => {
        return this.props.productsData.map(shoes => {
            return (
                <div className="shoesItem col-4">

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
