import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import { connect } from "react-redux";
import { userAddCourse } from "../../Redux/Action/User/UserActions";

class CourseItemComponent extends Component {
  
  render() {
    const { hinhAnh, tenKhoaHoc, moTa, luotXem, maKhoaHoc } = this.props.item;
    
    const { taiKhoan } = this.props.credentials;
    
    return (
      <div className="card courseItemContainer">
        <img className="card-img-top" src={hinhAnh} style={{ width: "100%", height: "135px" }} alt="Card" />
        <div className="card-body">
          <div className="courseItemContainer__content">
            <h4 className="card-title">{this._shortenString(tenKhoaHoc)}</h4>
          </div>

          <div className="courseItemContainer__content2">
            <span className="card-text">{this._shortenString(moTa)}</span>
            <div className="rating">
              <div className="rating__star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" aria-hidden="true" />
              </div>
              <span className="rating__score">4.5 </span>
              <span className="courseViews"> ({luotXem})</span>
            </div>
          </div>
          
          <div className="text-center">
           
           <button onClick={() => this.props.handleDangKy(taiKhoan, maKhoaHoc)} type="button" className="btn btn-udi-yellow mt-2">Enroll</button>

           <NavLink to={`/coursedetail/${maKhoaHoc}`} className="btn btn-udi-white ml-2 mt-2">Detail</NavLink>
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
  
})

const mapDispatchToProps = (dispatch) => {
  return {
      handleDangKy: (taiKhoan, maKhoaHoc) => {
          dispatch(userAddCourse(taiKhoan, maKhoaHoc));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseItemComponent);
