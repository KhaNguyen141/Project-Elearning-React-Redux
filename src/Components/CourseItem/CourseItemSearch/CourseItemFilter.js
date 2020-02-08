import React, { Component } from 'react'
import { userAddCourse } from '../../../Redux/Action/User/UserActions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class CourseItemFilter extends Component {
    render() {
        
        const { hinhAnh, tenKhoaHoc, moTa, luotXem, maKhoaHoc } = this.props.item;
        
        return (
        <div className="container Container">
          <div className="row">
            <div className="col-xl-9">
              <NavLink to={`/coursedetail/${maKhoaHoc}`} className="row courseItemFilterContainer">
                <div className="courseItemFilterContainer__courseImage col-2 col-sm-3 col-md-4 col-lg-3 col-xl-3">
                  <img src={hinhAnh} alt="courseSearch" />
                </div>

                <div className="courseItemFilterContainer__courseContent col-8 col-sm-7 col-md-6 col-lg-6 col-xl-7">
                    <div>
                      <h5>{this._shortenStringCourseName(tenKhoaHoc)}</h5>
                      <span>17 lectures</span> <span className="pr-2">15 hours</span> <span className="pr-2">All levels</span>
                      <p className="courseBrief">{this._shortenStringDescription(moTa)}</p>
                    </div>
                </div>

                <div className="rating col col-sm col-md col-lg col-xl text-right mr-3">
                    <div className="rating__star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" aria-hidden="true" />
                      <span className="rating__score pl-1">4.5 </span>
                    </div>

                    <p className="courseViews"> ({luotXem})</p>
                </div>
                </NavLink>

              </div>
            </div>
          </div>
 

      )}
      _shortenStringCourseName = (string) => {
        if (string && string.length > 100) {
          return string.substr(0, 100) + "..."
        }
        return string;
      }

      _shortenStringDescription = (string) => {
        if (string && string.length > 65) {
          return string.substr(0, 65) + "..."
        }
        return string;
      }
    
    }
    
    const mapStateToProps = (state) => ({
      userAddCourse: state.userReducer.userAddCourse,
      
    })
    
    const mapDispatchToProps = (dispatch) => {
      return {
          handleDangKy: (taiKhoan, maKhoaHoc) => {
              dispatch(userAddCourse(taiKhoan, maKhoaHoc));
          }
      }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(CourseItemFilter);