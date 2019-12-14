import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import { connect } from "react-redux";
import { userAddCourse } from "../../Redux/Action/User/UserActions";
import { Formik, Field, Form } from 'formik';

class CourseItemComponent extends Component {
  render() {
    const { hinhAnh, tenKhoaHoc, moTa, luotXem, maKhoaHoc } = this.props.item;
    
    const { taiKhoan } = this.props.credentials;
    return (
      <Formik
      initialValues = {{
        taiKhoan: taiKhoan,
        maKhoaHoc: maKhoaHoc

      }}
      onSubmit={values  => {
        this.props.dispatch(userAddCourse(values))
        console.log(values)
    }}
      >
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
            {/* <button className="btn btn-udi-yellow mt-2">Đăng ký</button> */}
            <Form className="formSearch FormCheck">
            
              <span><Field name="taiKhoan" type="hidden"/></span>
            
              <span><Field name="maKhoaHoc" type="hidden"/></span>
              
            <button type="submit" className="btn btn-udi-yellow mt-2">Đăng ký</button>
            </Form>

            <NavLink to={`/coursedetail/${maKhoaHoc}`} className="btn btn-udi-white ml-2 mt-2">Xem Chi Tiêt</NavLink>
          </div>
        </div>
      </div>
      </Formik>
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
  credentials: state.UserReducer.credentials 
})

export default connect(mapStateToProps)(CourseItemComponent);
