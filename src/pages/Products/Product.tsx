import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlus, faPencil,faTrash } from "@fortawesome/free-solid-svg-icons";
import useProduct from "../../Api/useProduct";

const Product = () => {
    const { products, fetchAllProducts } = useProduct();
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            await fetchAllProducts();
            setLoading(false);
        } catch (error) {
            setError(error as Error);
            setLoading(false);
        }
    };

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
                            <div className="card-title mt-2 mx-3">
                                <h5 className="float-left">List des Produit</h5>
                                <Link to="/new-product" className="btn btn-success float-right">
                                    Nouveaux <FontAwesomeIcon icon={faPlus} />
                                </Link>
                            </div>
                            <div className="card-body">
                                {loading ? (
                                    <div className="alert alert-info">Loading products...</div>
                                ) : error ? (
                                    <div className="alert alert-danger"> Error: {error.message}</div>
                                ) : products.length > 0 ? (
                                    <table className="table table-striped">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {products.map((productData, index) => (
                                            <tr key={productData.id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{productData.title}</td>
                                                <td>{productData.price}</td>
                                                <td>
                                                    <Link
                                                        to="/view"
                                                        className="text-success rounded-circle mx-1"
                                                    >
                                                        <FontAwesomeIcon icon={faEye} />
                                                    </Link>
                                                    <Link
                                                        to="/edit"
                                                        className="text-warning rounded-circle mx-1"
                                                    >
                                                        <FontAwesomeIcon icon={faPencil} />
                                                    </Link>
                                                    <button className="text-danger border-0 rounded-circle mx-1">
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>No products found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Product;
