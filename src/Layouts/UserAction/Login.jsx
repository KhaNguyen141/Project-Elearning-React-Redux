import React from 'react';
import {useDispatch} from 'react-redux';
import {userLoginAction} from '../../Redux/Action/User/UserActions';
import { Formik, Field, Form } from 'formik';

const Login = (props) => {

    const dispatch = useDispatch();


    return (
        <Formik 
            initialValues = {{
                taiKhoan: "",
                matKhau: ""

            }}
            onSubmit={values  => {
                dispatch(userLoginAction(values));
                
            }}
        >
        {({handleChange}) => (
        <Form className="formSearch">
            <div className="modal fade" id="modalLogin" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title pt-2">Đăng nhập</h4>
                            
                            <button type="button" className="close modalClose" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>

                        </div>

                        <div className="modal-body">
                                <div className="form-group">
                                    <Field 
                                    name="taiKhoan" 
                                    type="text" className="form-control taiKhoan" 
                                    placeholder="Tài khoản" 
                                    onChange={handleChange}/>
                                
                                </div>

                                <div className="form-group">
                                    <Field 
                                    name="matKhau" 
                                    type="password" 
                                    className="form-control matKhau" 
                                    placeholder="Mật khẩu" 
                                    onChange={handleChange}/>
                                    
                                </div>

                                <button type="submit" className="btn btn-udi-yellow">Đăng nhập</button>
                                
                                <p className="mt-4">Bạn chưa có tài khoản? <a href="#modalRegister" data-toggle="modal" data-target="#modalRegister" data-dismiss="modal">Đăng ký</a></p>
                                
                        </div>
                    </div>
                </div>
            </div>
        </Form>
        )}
        </Formik>
    );
};

export default Login;
