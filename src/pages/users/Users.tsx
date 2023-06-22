import React, { useEffect } from "react";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import useUser from "../../Api/useUser";
import { UserData } from "../../services/baseData";

const Users = () => {
    const { users, fetchAllUsers } = useUser();

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <Wrapper>
            <nav aria-label="breadcrumb" className="mx-3">
                <ol className="breadcrumb pt-3">
                    <li className="breadcrumb-item active" aria-current="page">
                        Utilisateur
                    </li>
                </ol>
            </nav>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-title mt-2 mx-3">
                                <h5 className="float-left">List des Utilisateurs</h5>
                                <Link to="/newp" className="btn btn-success float-right">
                                    Nouveaux <FontAwesomeIcon icon={faPlus} />
                                </Link>
                            </div>
                            <div className="card-body">
                                {users.length > 0 ? (
                                    <table className="table table-striped">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {users.map((userData, index) => (
                                            <tr key={userData.id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{userData.username}</td>
                                                <td>{userData.email}</td>
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
                                                        <FontAwesomeIcon icon={faPlus} />
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
                                    <p>No users found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Users;
