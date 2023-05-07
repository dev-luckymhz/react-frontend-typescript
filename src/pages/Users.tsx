import React from "react";
import Wrapper from "../components/Wrapper";

const Users = () => {
  return (
      <Wrapper>
          <nav aria-label="breadcrumb" className="mx-3">
              <ol className="breadcrumb pt-3">
                  <li className="breadcrumb-item active" aria-current="page">Users</li>
              </ol>
          </nav>

          <div className="container-fluid">
              <div className="row">
                  <div className="col-12">
                      <div className="card">
                          <div className="card-body">
                              Users
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Wrapper>
  )
}

export default Users;