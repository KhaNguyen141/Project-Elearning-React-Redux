import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';

import {validationSchema} from '../Validation/ValidationForm';
import {connect} from 'react-redux';
import { userRegisterAction } from '../../Redux/Action/User/UserActions';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

class Register extends Component {

    render() {
        return (
            <Formik initialValues ={{ 
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
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
                        <div className="modal fade" id="modalRegister" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
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
                                            onChange={handleChange}
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
