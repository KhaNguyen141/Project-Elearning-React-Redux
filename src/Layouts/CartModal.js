import React, { Component } from 'react'

class CartModalComponent extends Component {

    render() {

        const { tenKhoaHoc, hinhAnh, nguoiTao } = this.props.item;

        return (
           
            <div className="modal fade bd-example-modal-lg" id="cartModal" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Khoá học đang chờ duyệt</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            
                            <h2>Thông tin khoá học</h2>
                            
                                <div className="cyberCartModal row">
                                    <div className="col-6">
                                        <img className="card-img-top" src={hinhAnh} alt="CourseImage" />
                                    </div>

                                    <div className="col-6">
                                        <h3 className="card-text">{tenKhoaHoc}</h3>
                                        <p>Người tạo: {nguoiTao.hoTen}</p>
                                        <button className="btn btn-cyber-red">Huỷ</button>
                                    </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-cyber-red" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (CartModalComponent);


