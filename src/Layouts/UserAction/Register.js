import React, { useState } from 'react';
import {useDispatch} from 'react-redux';

import { Formik, Field, Form } from 'formik';
import {validationSchema} from '../Validation/ValidationForm';
import ErrorMessage from '../../Layouts/ErrorMessage/ErrorMessage';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { userRegisterAction } from '../../Redux/Action/User/UserActions';


const Register = (props) => {

    const dispatch = useDispatch();

    const closeBtn = <div className="close" onClick={props.isSignUpClose}>&times;</div>;

    return (
        <Formik initialValues = {{ 
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: "GP01",
            email: "",
            
        }}
        
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
            dispatch(userRegisterAction(values));
            resetForm();
        }}
        >
        {({errors, touched, handleChange}) => (
            <Modal
            isOpen={props.isSignUpOpen}
            toggle={props.isSignUpClose} 
            >
                <Form className="formLogin">
                    
                        <ModalHeader close={closeBtn}>
                            Sign up
                        </ModalHeader>

                        <ModalBody>
                            <div className="form-group">
                                <Field
                                    name="taiKhoan"
                                    type="text"
                                    onChange={handleChange}
                                    className={
                                        !touched.taiKhoan ? "form-control" : touched.taiKhoan && !errors.taiKhoan ? "form-control valid" : "form-control error"
                                    }  
                                    placeholder="Username" />
                                <ErrorMessage touched={touched.taiKhoan} message={errors.taiKhoan} />
                            </div>

                            <div className="form-group">
                                <Field
                                    name="matKhau"
                                    type="text"
                                    onChange={handleChange}
                                    className={
                                        !touched.matKhau ? "form-control" : touched.matKhau && !errors.matKhau ? "form-control valid" : "form-control error"
                                    } 
                                    placeholder="Password" />
                                    
                                <ErrorMessage touched={touched.matKhau} message={errors.matKhau} />
                            </div>

                            <div className="form-group">
                                <Field
                                    name="hoTen"
                                    type="text"
                                    onChange={handleChange}
                                    className={
                                        !touched.hoTen ? "form-control" : touched.hoTen && !errors.hoTen ? "form-control valid" : "form-control error"
                                    }  
                                    placeholder="Name" />
                                <ErrorMessage touched={touched.hoTen} message={errors.hoTen} />
                            </div>

                            <div className="form-group">
                                <Field
                                    name="soDT"
                                    type="text"
                                    onChange={handleChange}
                                    className={
                                        !touched.soDT ? "form-control" : touched.soDT && !errors.soDT ? "form-control valid" : "form-control error"
                                    }  
                                    placeholder="Phone contact" />
                                <ErrorMessage touched={touched.soDT} message={errors.soDT} />
                            </div>

                            <div className="form-group">
                                <Field
                                    name="maNhom"
                                    type="hidden"
                                />
                            </div>

                            <div className="form-group">
                                <Field
                                    name="email"
                                    type="text"
                                    onChange={handleChange}
                                    className={
                                        !touched.email ? "form-control" : touched.email && !errors.email ? "form-control valid" : "form-control error"
                                    }  
                                    placeholder="Email" />
                                <ErrorMessage touched={touched.email} message={errors.email} />
                            </div>

                            <div className="form-group">

                            </div>

                            <button type="submit" className="btn btn-udi-yellow">Sign Up</button>

                            <p className="mt-4">Already have an account? <span className="loginSwitch" onClick={props.switchLogin}>Log In</span></p>
                        </ModalBody>

                </Form>
            </Modal>
        )}
    </Formik>
    );
};

export default Register;

