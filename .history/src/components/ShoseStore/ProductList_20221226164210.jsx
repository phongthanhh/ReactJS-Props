import React, { Component } from 'react';

class ProductList extends Component {

    renderProductList = () => {
        return this.productsData.map(shoes => {
            return (
                <div className="shoesItem col-4">
                    <div className="card mb-4">
                        <img className="card-img-top" src={shoes.image} alt />
                        <div className="card-body">
                            <h5 className="card-title">{shoes.name}</h5>
                            <p className="card-text">${shoes.price}</p>
                            <button className='btn btn-info'>See details</button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default ProductList;
