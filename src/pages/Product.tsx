import React from "react";
import Wrapper from "../components/Wrapper";
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
                <h5 className=" float-left">List des Produit</h5>
                <Link to="/" className="btn btn-success float-right"> Nouveaux</Link>
                </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                        <td>
                            <Link to="/edit" className="btn btn-outline-success rounded-circle mx-1"> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </Link>
                            <Link to="/edit" className="btn btn-outline-warning rounded-circle mx-1"> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> </Link>
                            <button className="btn btn-outline-danger rounded-circle mx-1"> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </button>
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
