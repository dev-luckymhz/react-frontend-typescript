import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Field, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import Wrapper from "../../components/Wrapper";
import {UserData} from "../../services/baseData";


/**
 * Component for creating a new user.
 */
const NewUser = () => {
    const [isRedirect, setIsRedirect] = useState(false);

    const initialValue: UserData = {
        username: "",
        email: "",
        password: "",
    };

    const UserValidation = Yup.object().shape({
        username: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().required("Required"),
    });

    /**
     * Handles the form submission.
     *
     * @param values - Form field values.
     * @param helpers - Formik helpers.
     */
    const onSubmit = (
        values: UserData,
        helpers: FormikHelpers<UserData>
    ) => {

        setIsRedirect(true);
    };

    if (isRedirect) {
        return (
            <>
                <Navigate replace to={"/users"} />
            </>
        );
    }

    return (
        <Wrapper>
            <nav aria-label="breadcrumb" className="mx-3">
                <ol className="breadcrumb pt-3">
                    <li className="breadcrumb-item active" aria-current="page">
                        Users
                    </li>
                </ol>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <div className="container">
                                        <div className="row justify-content-center text-center">
                                            <div className="col-md-10">
                                                <div className="card bg-light mt-5">
                                                    <h2 className="card-title text-center font-weight-bold h1">
                                                        Add a New User
                                                    </h2>
                                                    <div className="card-body py-md-4">
                                                        <Formik
                                                            onSubmit={onSubmit}
                                                            initialValues={initialValue}
                                                            validationSchema={UserValidation}
                                                        >
                                                            {({ errors, touched }) => (
                                                                <>
                                                                    <div className="row">
                                                                        <div className="form-group col">
                                                                            <label htmlFor="name">Name</label>
                                                                            <Field
                                                                                id="name"
                                                                                className="form-control rounded"
                                                                                name="username"
                                                                                placeholder="Enter Name"
                                                                            />
                                                                            {errors.username && touched.username && (
                                                                                <div className="text-danger">
                                                                                    {errors.username}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                        <div className="form-group col">
                                                                            <label htmlFor="email">Email</label>
                                                                            <Field
                                                                                id="email"
                                                                                type="email"
                                                                                className="form-control rounded"
                                                                                name="email"
                                                                                placeholder="Enter Email"
                                                                            />
                                                                            {errors.email && touched.email && (
                                                                                <div className="text-danger">
                                                                                    {errors.email}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label htmlFor="password">Password</label>
                                                                        <Field
                                                                            id="password"
                                                                            type="password"
                                                                            className="form-control rounded"
                                                                            name="password"
                                                                            placeholder="Enter Password"
                                                                        />
                                                                        {errors.password && touched.password && (
                                                                            <div className="text-danger">
                                                                                {errors.password}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <div className="d-flex flex-row align-items-center justify-content-between">
                                                                        <Link to={"/user"} className="text-danger">
                                                                            Users
                                                                        </Link>
                                                                        <button
                                                                            className="btn btn-primary"
                                                                            type="submit"
                                                                        >
                                                                            Save
                                                                        </button>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </Formik>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default NewUser;
