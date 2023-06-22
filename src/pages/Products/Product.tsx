import React from "react";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
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
                <Link to="/newp" className="btn btn-success float-right"> Nouveaux <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></Link>
                </div>
              <div className="card-body">
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
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                        <td>
                            <Link to="/view" className="text-success rounded-circle mx-1"> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </Link>
                            <Link to="/edit" className="text-warning rounded-circle mx-1"> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> </Link>
                            <button className="text-danger border-0 rounded-circle mx-1"> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </button>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Product;
