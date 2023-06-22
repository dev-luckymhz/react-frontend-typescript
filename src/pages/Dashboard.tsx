import React from "react";
import "./Dashboard.module.css";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Wrapper>
      <nav aria-label="breadcrumb" className="mx-3">
        <ol className="breadcrumb pt-3">
          <li className="breadcrumb-item active" aria-current="page">
            DashBoard
          </li>
        </ol>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card card-margin">
              <div className="card-header no-border">
                <h5 className="card-title">MOM</h5>
              </div>
              <div className="card-body pt-0">
                <div className="widget-49">
                  <div className="widget-49-title-wrapper">
                    <div className="widget-49-date-primary">
                      <span className="widget-49-date-day">09</span>
                      <span className="widget-49-date-month">apr</span>
                    </div>
                    <div className="widget-49-meeting-info">
                      <span className="widget-49-pro-title">
                        PRO-08235 DeskOpe. Website
                      </span>
                      <span className="widget-49-meeting-time">
                        12:00 to 13.30 Hrs
                      </span>
                    </div>
                  </div>
                  <ol className="widget-49-meeting-points">
                    <li className="widget-49-meeting-item">
                      <span>Expand module is removed</span>
                    </li>
                    <li className="widget-49-meeting-item">
                      <span>Data migration is in scope</span>
                    </li>
                    <li className="widget-49-meeting-item">
                      <span>Session timeout increase to 30 minutes</span>
                    </li>
                  </ol>
                  <div className="widget-49-meeting-action">
                    <Link
                      to="#"
                      className="btn btn-sm btn-flash-border-primary"
                    >
                      View All
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-margin">
              <div className="card-header no-border">
                <h5 className="card-title">MOM</h5>
              </div>
              <div className="card-body pt-0">
                <div className="widget-49">
                  <div className="widget-49-title-wrapper">
                    <div className="widget-49-date-warning">
                      <span className="widget-49-date-day">13</span>
                      <span className="widget-49-date-month">apr</span>
                    </div>
                    <div className="widget-49-meeting-info">
                      <span className="widget-49-pro-title">
                        PRO-08235 Lexa Corp.
                      </span>
                      <span className="widget-49-meeting-time">
                        12:00 to 13.30 Hrs
                      </span>
                    </div>
                  </div>
                  <ol className="widget-49-meeting-points">
                    <li className="widget-49-meeting-item">
                      <span>Scheming module is removed</span>
                    </li>
                    <li className="widget-49-meeting-item">
                      <span>App design contract confirmed</span>
                    </li>
                    <li className="widget-49-meeting-item">
                      <span>Client request to send invoice</span>
                    </li>
                  </ol>
                  <div className="widget-49-meeting-action">
                    <Link
                      to="#"
                      className="btn btn-sm btn-flash-border-warning"
                    >
                      View All
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-margin">
              <div className="card-header no-border">
                <h5 className="card-title">MOM</h5>
              </div>
              <div className="card-body pt-0">
                <div className="widget-49">
                  <div className="widget-49-title-wrapper">
                    <div className="widget-49-date-success">
                      <span className="widget-49-date-day">22</span>
                      <span className="widget-49-date-month">apr</span>
                    </div>
                    <div className="widget-49-meeting-info">
                      <span className="widget-49-pro-title">
                        PRO-027865 Opera module
                      </span>
                      <span className="widget-49-meeting-time">
                        12:00 to 13.30 Hrs
                      </span>
                    </div>
                  </div>
                  <ol className="widget-49-meeting-points">
                    <li className="widget-49-meeting-item">
                      <span>Scope is revised and updated</span>
                    </li>
                    <li className="widget-49-meeting-item">
                      <span>Time-line has been changed</span>
                    </li>
                    <li className="widget-49-meeting-item">
                      <span>Received approval to start wire-frame</span>
                    </li>
                  </ol>
                  <div className="widget-49-meeting-action">
                    <Link
                      to="#"
                      className="btn btn-sm btn-flash-border-success"
                    >
                      View All
                    </Link>
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

export default Dashboard;
