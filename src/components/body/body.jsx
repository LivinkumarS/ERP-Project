import React, { useContext, useRef, useState } from "react";
import "./body.css";
import Attendance from "../attendance/attendance";
import Project from "../project/project";
import Task from "../task/task";
import Onboard from "../onboard/onboard";
import Payslip from "../payslip/payslip";
import { userContext } from "../../App";

export default function body({ expanded, setexpanded, currentPage }) {
  const { userInformation, setUserInformation } = useContext(userContext);
  console.log(userInformation);
  
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
            </svg>
          </div>
          <svg
            className="bell-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
          </svg>
        </div>
      </div>
      <div className="sub-body">
        {currentPage == "task" ? (
          <Task />
        ) : currentPage == "attendance" ? (
          <Attendance />
        ) : currentPage == "onboarding" ? (
          <Onboard />
        ) : currentPage == "project" ? (
          <Project />
        ) : (
          <Payslip />
        )}
      </div>
    </div>
  );
}
