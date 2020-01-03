import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import { connect } from "react-redux";
import { userAddCourse } from "../../Redux/Action/User/UserActions";

class CourseItemComponent extends Component {
  
  render() {
    const { hinhAnh, tenKhoaHoc, moTa, luotXem, maKhoaHoc } = this.props.item;
    
    const { taiKhoan } = this.props.credentials;
    
    return (
      <div className="card">
        <img className="card-img-top" src={hinhAnh} style={{ width: "100%", height: "150px" }} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{tenKhoaHoc}</h4>
          <p className="card-text">{this._shortenString(moTa)}</p>
          <div className="rating">
            <div className="rating__star">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" aria-hidden="true" />
            </div>
            <span>4.5 </span>
            <span> ({luotXem})</span>
          </div>
          <div className="price">
 
            
            <div className="text-center">
           
              <button onClick={() => this.props.handleDangKy(taiKhoan, maKhoaHoc)} type="button" className="btn btn-udi-yellow mt-2">Enroll</button>

              <NavLink to={`/coursedetail/${maKhoaHoc}`} className="btn btn-udi-white ml-2 mt-2">Detail</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
    
  }
  _shortenString = (string) => {
    if (string && string.length > 20) {
      return string.substr(0, 20) + "..."
    }
    return string;
  }

}

const mapStateToProps = (state) => ({
  credentials: state.userReducer.credentials,
  userAddCourse: state.userReducer.userAddCourse,
  userCancelCourse: state.userReducer.userCancelCourse
})

const mapDispatchToProps = (dispatch) => {
  return {
      handleDangKy: (taiKhoan, maKhoaHoc) => {
          dispatch(userAddCourse(taiKhoan, maKhoaHoc));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseItemComponent);
