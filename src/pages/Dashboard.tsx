import React from 'react';

const Dashboard = () => {
  return (
      <div>
          <nav aria-label="breadcrumb" className="ml-3">
              <ol className="breadcrumb pt-3">
                  <li className="breadcrumb-item active" aria-current="page">DashBoard</li>
              </ol>
          </nav>

          <div className="container-fluid">
              <div className="row">
                  <div className="col-12">
                      <div className="card">
                          <div className="card-body">
                              DashBoard
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Dashboard;