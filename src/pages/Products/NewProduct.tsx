import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import { Link, Navigate } from "react-router-dom";
import { Field, Formik, FormikHelpers } from "formik";
import { ProductData } from "../../Api/useProduct";
import * as Yup from "yup";

const NewProduct = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const initialValue: ProductData = {
    title: "",
    description: "",
    image: "",
    price: 0,
  };
  const ProductValidation = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
      image:  Yup.mixed<FileList>() // Pass in the type of `fileUpload`
      .test(
        "fileSize",
        "Only documents up to 2MB are permitted.",
        files =>
          !files || // Check if `files` is defined
          files.length === 0 || // Check if `files` is not an empty list
          Array.from(files).every(file => file.size <= 2_000_000)
      ),
    price: Yup.string().email("Invalid email").required("Required"),
  });

  const onSubmit = (
    values: ProductData,
    helpers: FormikHelpers<ProductData>
  ) => { setIsRedirect(true)};
  if (isRedirect){
    return (
      <>
        <Navigate replace to={"/product"} />
      </>
    );}
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
                <div>
                  <div className="container">
                    <div className="row justify-content-center text-center">
                      <div className="col-md-10">
                        <div className="card bg-light mt-5">
                          <h2 className="card-title text-center font-weight-bold h1">
                            Ajouter un nouveaux produit
                          </h2>
                          <div className="card-body py-md-4">
                            <Formik
                              onSubmit={onSubmit}
                              initialValues={initialValue}
                              validationSchema={ProductValidation}
                            >
                              {({ errors, touched }) => (
                                <>
                                  <div className="form-group">
                                    <label htmlFor="title">Titre Produit</label>
                                    <Field
                                      id="title"
                                      className="form-control rounded"
                                      name="title"
                                      placeholder="Entrer Nom Produit"
                                    />
                                    {errors.title && touched.title ? (
                                      <div className="text-danger">
                                        {errors.title}
                                      </div>
                                    ) : null}
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="description">
                                      Description
                                    </label>
                                    <Field
                                      id="description"
                                      type={"textarea"}
                                      className="form-control rounded"
                                      name="description"
                                      placeholder="Entrer description Email"
                                    />
                                    {errors.description &&
                                    touched.description ? (
                                      <div className="text-danger">
                                        {errors.description}
                                      </div>
                                    ) : null}
                                  </div>
                                  <div className="row">
                                    <div className="form-group col">
                                      <label htmlFor="image">Photo</label>
                                      <Field
                                        id="image"
                                        className="form-control rounded"
                                        type={"file"}
                                        name="image"
                                        accept="image/png, image/jpeg"
                                      />
                                      {errors.image && touched.image ? (
                                        <div className="text-danger">
                                          {errors.image}
                                        </div>
                                      ) : null}
                                    </div>

                                    <div className="form-group col">
                                      <label htmlFor="price">Prix</label>
                                      <Field
                                        id="price"
                                        type={"number"}
                                        className="form-control rounded"
                                        name="price"
                                        placeholder="Entrer Prix"
                                      />
                                      {errors.price && touched.price ? (
                                        <div className="text-danger">
                                          {errors.price}
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>

                                  <div className="d-flex flex-row align-items-center justify-content-between">
                                    <Link
                                      to={"/product"}
                                      className="text-danger"
                                    >
                                      Produits
                                    </Link>
                                    <button
                                      className="btn btn-primary"
                                      type={"submit"}
                                    >
                                      Enregistrer
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

export default NewProduct;
