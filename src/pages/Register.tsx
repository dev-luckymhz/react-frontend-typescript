import {Field, Form, Formik } from "formik";
import React, {useState} from "react";
import './Register.module.css';

interface FormData {
    username: string,
    password: string,
    email: string,
    confirmPassword: string
}
const Register = () => {
    const inintialValue : FormData = {
        username: '',
        password: '',
        email: '',
        confirmPassword: ''
    }

    return (
        <div>
            <div className="container"  >
                <div className="row justify-content-center text-center">
                    <div className="col-md-5">
                        <div className="card">
                            <h2 className="card-title text-center h1">Register</h2>
                            <div className="card-body py-md-4">
                                <Formik
                                    initialValues={inintialValue}
                                    onSubmit={(values, actions) => {
                                        console.log({ values, actions });
                                        alert(JSON.stringify(values, null, 2));
                                        actions.setSubmitting(false);
                                    }}
                                >
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
                                    </Form>
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