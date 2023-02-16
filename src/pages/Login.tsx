import React, {useState} from 'react';
import {UserData} from "../services/baseData";
import * as Yup from "yup";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {UserLogin} from "../services/Auth.services";
import {Link, Navigate} from "react-router-dom";

const Login = () => {
    const [isRedirect, setIsRedirect] = useState(false);
    const initialValue : UserData = {
        username: '',
        password: ''
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
    });

    const onSubmit = (values: UserData, helpers: FormikHelpers<UserData>) => {
        // console.log({ values, helpers });
        UserLogin(values).then(()=>{
            console.log(values)
            setIsRedirect(true);
        }).catch(err=> {
            console.log(err)
        });
    };
    if(isRedirect) return (<> <Navigate replace to={'/'}/> </>);
    return (
        <div>
            <div className="container"  >
                <div className="row justify-content-center text-center">
                    <div className="col-md-5">
                        <div className="card bg-light mt-5">
                            <h2 className="card-title text-center font-weight-bold h1">Login</h2>
                            <div className="card-body py-md-4">
                                <Formik onSubmit={onSubmit} initialValues={initialValue} validationSchema={SignupValidation} >
                                    {({ errors, touched  }) => (
                                        <Form>
                                            <div className="form-group">
                                                <Field id="username" className="form-control" name="username" placeholder="Enter Username" />
                                                {errors.username && touched.username ? (
                                                    <div className="text-danger">{errors.username}</div>
                                                ) : null}
                                            </div>
                                            <div className="row">
                                                <div className="form-group col">
                                                    <Field id="password" className="form-control" type={"password"} name="password" placeholder="Enter password" />
                                                    {errors.password && touched.password ? (
                                                        <div className="text-danger">{errors.password}</div>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center justify-content-between">
                                                <Link to={'/register'}>Register</Link>
                                                <button className="btn btn-primary" type={"submit"}>Login</button>
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
};

export default Login;
