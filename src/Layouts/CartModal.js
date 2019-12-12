import React, { Component } from 'react'

class CartModalComponent extends Component {
    render() {
        return (
            <div className="modal fade" id="cartModal" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Khoá học đang chờ duyệt</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h2>Thông tin khoá học</h2>
                            <img></img>
                            <p>Khoá học: </p>
                            <p>Người tạo: </p>
                            <button className="btn btn-danger">Huỷ</button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (CartModalComponent);


