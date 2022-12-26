import React, { Component } from 'react';

class ModalProduct extends Component {
    render() {
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-center" id="exampleModalLabel">Product Deatails</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="imgProduct col-5">
                                    <img className='img-fluid' src={this.props.phoneDetail.image} alt="" />
                                </div>
                                <div className="detailProduct col-7 text-left">
                                    <p>Name:</p>
                                    <p>Price:</p>
                                    <p>description:</p>
                                    <p>quantity:</p>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalProduct;
