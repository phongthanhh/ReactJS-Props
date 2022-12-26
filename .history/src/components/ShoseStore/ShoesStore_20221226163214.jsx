import React, { Component } from 'react'

export default class ShoesStore extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Shoes Store</h2>
                <div className="shoesList">
                    <div className="row">
                        <div className="shoesItem col-4">
                            <div class="card">
                                <img class="card-img-top" src="holder.js/100x180/" alt="">
                                    <div class="card-body">
                                        <h4 class="card-title">Title</h4>
                                        <p class="card-text">Text</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
