import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Formik, Field, Form, RadioButtonGroup } from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import { userRegisterAction } from '../Redux/Action/User/UserActions';
import ErrorMessage from '../Screens/ErrorMessage/ErrorMessage';
 
const validationSchema = Yup.object().shape({
    taiKhoan: Yup.string()
    .min(6, "Tài khoản phải có ít nhất 6 kí tự")
    .max(255, "Tài khoản chỉ được phép tối đa 255 kí tự")
    .required("Tài khoản không được để trống"),

    matKhau: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 kí tự")
    .max(255, "Mật khẩu chỉ được phép tối đa 255 kí tự")
    .required("Mật khẩu không được để trống"),

    hoTen: Yup.string()
    .min(6, "Họ tên phải có ít nhất 6 kí tự")
    .max(255, "Họ tên chỉ được phép tối đa 255 kí tự")
    .required("Họ tên không được để trống"),

    maLoaiNguoiDung: Yup.string().required("Vui lòng chọn loại người dùng"),

    maNhom: Yup.string()
    .min(4, "Mã nhóm phải có ít nhất 4 kí tự")
    .max(255, "Mã nhóm chỉ được phép tối đa 255 kí tự")
    .required("Mã nhóm không được để trống"),
    
    email: Yup.string()
    .email("Email phải đúng định dạng")
    .max(255, "Email chỉ được phép tối đa 255 kí tự")
    .required("Email không được để trống"),

    soDT: Yup.string().matches(/^\+?(?:[0-9]??).{5,14}[0-9]$/, 'Số điện thoại phải đúng định dạng')
    .min(10, 'Số điện thoại phải đúng định dạng'),

})

class Register extends Component {

    render() {
        return (
            <Formik initialValues ={{ 
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                maLoaiNguoiDung: "",
                maNhom: "",
                email: "",
                
            }}
            
            validationSchema={validationSchema}
            onSubmit={values  => {
                this.props.dispatch(userRegisterAction(values))
                
            }}
            >
            {({values, errors, touched, handleChange}) => (
                    <Form className="formSearch">
                        <div className="modal fade" id="modalRegister" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title pt-2">Đăng ký</h4>

                                        <button type="button" className="close modalClose" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>

                                    </div>

                                    <div className="modal-body">
                                        <div className="form-group">
                                            <Field 
                                            name="taiKhoan" 
                                            type="text" 
                                            onChange={handleChange}
                                            className="form-control taiKhoan" 
                                            placeholder="Tài khoản" />
                                            <ErrorMessage touched={touched.taiKhoan} message={errors.taiKhoan}/>
                                        </div>

                                        <div className="form-group">
                                            <Field 
                                            name="matKhau" 
                                            type="text" 
                                            onChange={handleChange}
                                            className="form-control matKhau" 
                                            placeholder="Mật khẩu" />
                                            <ErrorMessage touched={touched.matKhau} message={errors.matKhau}/>
                                        </div>

                                        <div className="form-group">
                                            <Field 
                                            name="hoTen" 
                                            type="text" 
                                            onChange={handleChange}
                                            className="form-control hoTen" 
                                            placeholder="Họ Tên" />
                                            <ErrorMessage touched={touched.hoTen} message={errors.hoTen}/>
                                        </div>

                                        <div className="form-group">
                                            <Field 
                                            name="soDT" 
                                            type="text" 
                                            onChange={handleChange}
                                            className="form-control soDT" 
                                            placeholder="Số điện thoại" />
                                            <ErrorMessage touched={touched.soDT} message={errors.soDT}/>
                                        </div>

                                        <div>
                                            <label htmlFor>Loại Người Dùng: </label>
                                            <div>
                                                <Field 
                                                onChange={handleChange} 
                                                type="radio" 
                                                name="maLoaiNguoiDung" 
                                                value="HV"
                                                />
                                                Học viên 
                                                <ErrorMessage touched={touched.maLoaiNguoiDung} message={errors.maLoaiNguoiDung}/>
                                                
                                            </div>
                                            <div>
                                                <Field 
                                                onChange={handleChange} 
                                                type="radio" 
                                                name="maLoaiNguoiDung" 
                                                value="GV"/>
                                                Giáo Vụ 
                                                <ErrorMessage touched={touched.maLoaiNguoiDung} message={errors.maLoaiNguoiDung}/>
                                            </div>
                                        </div>

                                        

                                        <div className="form-group">
                                            <Field 
                                            name="maNhom" 
                                            type="text" 
                                            onChange={handleChange}
                                            className="form-control soDT" 
                                            placeholder="mã nhóm người dùng" />
                                            <ErrorMessage touched={touched.maNhom} message={errors.maNhom}/>
                                        </div>

                                        <div className="form-group">
                                            <Field 
                                            name="email" 
                                            type="text" 
                                            onchange={handleChange}
                                            className="form-control email" 
                                            placeholder="Email" />
                                            <ErrorMessage touched={touched.email} message={errors.email}/>
                                        </div>

                                        <div className="form-group">

                                    </div>

                                        <button type="submit" className="btn btn-udi-yellow">Đăng ký</button>
                                        
                                        <p className="mt-4">Bạn đã có tài khoản? <a href="#modalLogin" data-toggle="modal" data-target="#modalLogin" data-dismiss="modal">Đăng nhập</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
            )}
        </Formik>
            )
                
        }
    }

export default connect(null)(Register);
