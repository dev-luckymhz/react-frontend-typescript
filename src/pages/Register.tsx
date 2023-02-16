import {Field, Form, Formik, FormikHelpers, FormikState, FormikValues, useFormik} from "formik";
import React, {useState} from "react";
import './Register.module.css';
import Yup from "yup";

interface FormData {
    username: string,
    password: string,
    email: string,
    confirmPassword: string
}
const Register = () => {
    const initialValue : FormData = {
        username: '',
        password: '',
        email: '',
        confirmPassword: ''
    }

    const SignupValidation = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        password: Yup.string()
            .min(5, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Password must match")
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    
    const onSubmit = (values: FormData, helpers: FormikHelpers<FormData>) => {
        console.log({ values, helpers });
        setTimeout(() => helpers.setSubmitting(false), 2000);
    };

    return (
        <div>
            <div className="container"  >
                <div className="row justify-content-center text-center">
                    <div className="col-md-5">
                        <div className="card bg-light mt-5">
                            <h2 className="card-title text-center font-weight-bold h1">Register</h2>
                            <div className="card-body py-md-4">
                                <Formik onSubmit={onSubmit} initialValues={initialValue} validationSchema={SignupValidation} >
                                    {({ isSubmitting }: FormikState<FormData>) => (
                                    <Form>
                                        <div className="form-group">
                                            <label htmlFor="username">First Name</label>
                                            <Field id="username" className="form-control" name="username" placeholder="Enter Username" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Field id="email" className="form-control" name="email" placeholder="Enter Email" />
                                        </div>
                                            <div className="row">
                                            <div className="form-group col">
                                                <label htmlFor="password">Password</label>
                                                <Field id="password" className="form-control" name="password" placeholder="Enter password" />
                                            </div>

                                            <div className="form-group col">
                                                <label htmlFor="username">Confirm Password </label>
                                                <Field id="confirmPassword" className="form-control" name="confirmPassword" placeholder="Confirm Password" />
                                            </div>
                                            </div>

                                        <div className="d-flex flex-row align-items-center justify-content-between">
                                            <a href="#">Login</a>
                                            <button className="btn btn-primary" type={"submit"}>Create Account</button>
                                        </div>
                                    </Form> )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;