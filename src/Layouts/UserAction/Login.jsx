import React from 'react';
import { useDispatch } from 'react-redux';

import {userLoginAction} from '../../Redux/Action/User/UserActions';

import { Formik, Field, Form } from 'formik';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const Login = (props) => {

    const dispatch = useDispatch();

    const closeBtn = <div className="close" onClick={props.isLoginClose}>&times;</div>;

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
            {({values, handleChange }) => (
                <Modal
                    isOpen={props.isLoginOpen}
                    toggle={props.isLoginClose} 
                >
                    <Form className="formSearch loginModal">

                        <ModalHeader close={closeBtn}>
                            Sign in
                        </ModalHeader>

                        <ModalBody>
                            <div className="form-group">
                                <Field
                                    name="taiKhoan"
                                    type="text" className="form-control taiKhoan"
                                    value={values.taiKhoan}
                                    placeholder="Username"
                                    onChange={handleChange} />

                            </div>

                            <div className="form-group">
                                <Field
                                    name="matKhau"
                                    type="password"
                                    value={values.matKhau}
                                    className="form-control matKhau"
                                    placeholder="Password"
                                    onChange={handleChange} />

                            </div>

                            <button type="submit" className="btn btn-udi-yellow">Sign In</button>

                            <p className="mt-4">Don't have an account? <span className="signUpSwitch" onClick={props.switchRegister}>Sign up</span></p>

                        </ModalBody>

                    </Form>
                </Modal>
            )}
        </Formik>
    );
};

export default Login;
