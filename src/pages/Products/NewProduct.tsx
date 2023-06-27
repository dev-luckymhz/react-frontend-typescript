import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Field, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import Wrapper from "../../components/Wrapper";
import { ProductData } from "../../services/baseData";
import useProduct from "../../Api/useProduct";

/**
 * Component for creating a new product.
 */
const NewProduct = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const { createProduct } = useProduct();
  const [error, setError] = useState<string | null>(null);

  const initialValues: ProductData = {
    title: "",
    description: "",
    image: "",
    price: 0,
  };
  const validationSchema = Yup.object({
    title: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    image: Yup.mixed<File>()
        .nullable(),
    price: Yup.number().required("Price Required"),
  });

  /**
   * Handles the form submission.
   *
   * @param values - Form field values.
   * @param formikHelpers - Formik helpers.
   */
  const onSubmit = async (
      values: ProductData,
      { setSubmitting, resetForm }: FormikHelpers<ProductData>
  ) => {
    try {
      await createProduct(values);
      setIsRedirect(true);
    } catch (error) {
      console.error("Failed to create product", error);
      setError("Failed to create product. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  if (isRedirect) return <Navigate replace to="/product" />;

  return (
      <Wrapper>
        <nav aria-label="breadcrumb" className="mx-3">
          <ol className="breadcrumb pt-3">
            <li className="breadcrumb-item active" aria-current="page">
              Product
            </li>
          </ol>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="container">
                    <div className="row justify-content-center text-center">
                      <div className="col-md-10">
                        <div className="card bg-light mt-5">
                          <h2 className="card-title text-center font-weight-bold h1">
                            Add new product
                          </h2>
                          <div className="card-body py-md-4">
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                  {error}
                                </div>
                            )}
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                              {({ errors, touched, isSubmitting, handleSubmit }) => (
                                  <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                      <label htmlFor="title">Title Product</label>
                                      <Field
                                          id="title"
                                          className="form-control rounded"
                                          name="title"
                                          placeholder="Enter Product name"
                                      />
                                      {errors.title && touched.title && (
                                          <div className="text-danger">{errors.title}</div>
                                      )}
                                    </div>
                                    <div className="form-group">
                                      <label htmlFor="description">Description</label>
                                      <Field
                                          id="description"
                                          as="textarea"
                                          className="form-control rounded"
                                          name="description"
                                          placeholder="Enter product description"
                                      />
                                      {errors.description && touched.description && (
                                          <div className="text-danger">{errors.description}</div>
                                      )}
                                    </div>
                                    <div className="row">
                                      <div className="form-group col">
                                        <label htmlFor="image">Photo</label>
                                        <Field
                                            id="image"
                                            className="form-control rounded"
                                            type="file"
                                            name="image"
                                            accept="image/*"
                                        />
                                        {errors.image && touched.image && (
                                            <div className="text-danger">{errors.image}</div>
                                        )}
                                      </div>
                                      <div className="form-group col">
                                        <label htmlFor="price">Price</label>
                                        <Field
                                            id="price"
                                            type="number"
                                            className="form-control rounded"
                                            name="price"
                                            placeholder="Enter Price"
                                        />
                                        {errors.price && touched.price && (
                                            <div className="text-danger">{errors.price}</div>
                                        )}
                                      </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center justify-content-between">
                                      <Link to="/product" className="text-danger">
                                        Products
                                      </Link>
                                      <button
                                          className="btn btn-primary"
                                          type="submit"
                                          disabled={isSubmitting}
                                      >
                                        {isSubmitting ? "Saving..." : "Save"}
                                      </button>
                                    </div>
                                  </form>
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
      </Wrapper>
  );
};

export default NewProduct;
