import React, { useContext, useEffect, useRef, useState } from "react";
import "./body.css";
import Attendance from "../attendance/attendance";
import Project from "../project/project";
import Task from "../task/task";
import Onboard from "../onboard/onboard";
import Payslip from "../payslip/payslip";
import ApplyLeave from "../apply-leave/applyLeave";
import UserProfile from "../userProfile/userProfile";
import { logout } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import ProjectBugsPage from "../project-bugs-page/projectBugsPage";
import Dashboard from "../dashboard/dashboard";

export default function body({
  expanded,
  setexpanded,
  currentPage,
  setShowSidebar,
  user,
  setCurrentPage,
}) {
  const [projectId, setProjectId] = useState(0);

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(logout());
  }

  function openProjectBugsPage(proId) {
    setCurrentPage("projectBugsPage");
    setProjectId(proId);
  }

  return (
    <div className={`body-cointainer ${expanded ? "body-long" : ""}`}>
      <div className="header">
        <div className="header-left">
          <svg
            className={
              expanded ? "right-arrow right-arrow-rot" : "right-arrow "
            }
            onClick={() => setexpanded(!expanded)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>

          {/* toggler */}

          <svg
            className="toggler"
            onClick={() => {
              setShowSidebar(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>

          <div className="search-cointainer">
            <input
              className="search"
              placeholder="Search..."
              id="search"
            ></input>
            <label htmlFor="search">
              <svg
                className="search-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </label>
          </div>
        </div>
        <div className="header-right">
          <div className="profile-logo">
            {user.profilePic ? (
              <img src={user.profilePic} alt="user Profile" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
              </svg>
            )}

            {user && (
              <div className="logo-container">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <h4
                  onClick={() => {
                    setCurrentPage("userProfile");
                  }}
                >
                  Profile
                </h4>
                <h4 onClick={handleSignOut}>signout</h4>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sub-body">
        {currentPage == "dashboard" ? (
          <Dashboard />
        ) : currentPage == "task" ? (
          <Task />
        ) : currentPage == "attendance" ? (
          <Attendance />
        ) : currentPage == "onboarding" ? (
          <Onboard />
        ) : currentPage == "project" ? (
          <Project openProjectBugsPage={openProjectBugsPage} />
        ) : currentPage == "payslip" ? (
          <Payslip />
        ) : currentPage === "applyLeave" ? (
          <ApplyLeave />
        ) : currentPage === "projectBugsPage" ? (
          <ProjectBugsPage projectId={projectId} />
        ) : currentPage === "userProfile" ? (
          <UserProfile />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
