import React, { Component } from 'react';

class ModalProduct extends Component {
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Product Deatails</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="imgProduct col-5">
                                    <img className='img-fluid' src={this.props.phoneDetail.image} alt="" />
                                </div>
                                <div className="detailProduct col-7 text-left">
                                    <p>Name: {this.props.phoneDetail.name}</p>
                                    <p>Price: ${this.props.phoneDetail.price}</p>
                                    <p>Description: {this.props.phoneDetail.description}</p>
                                    <p>Quantity: {this.props.phoneDetail.quantity}</p>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalProduct;
