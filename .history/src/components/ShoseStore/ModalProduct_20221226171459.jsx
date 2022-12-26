import React, { Component } from 'react';

class ModalProduct extends Component {
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Product Deatails</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div classname="row">
                                <div classname="imgProduct col-5">
                                    <img classname="img-fluid" src={this.props.phoneDetail.image} alt='' />
                                </div>
                                <div classname="detailProduct col-7 text-left">
                                    <p>Name: </p>
                                    <p>Price: </p>
                                    <p>Description: </p>
                                    <p>Quantity: </p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ModalProduct;
