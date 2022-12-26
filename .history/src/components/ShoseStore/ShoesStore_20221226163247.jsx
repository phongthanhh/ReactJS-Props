import React, { Component } from 'react'

export default class ShoesStore extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Shoes Store</h2>
                <div className="shoesList">
                    <div className="row">
                        <div className="shoesItem col-4">
                            <div className="card">
                                <img className="card-img-top" src alt />
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Text</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
