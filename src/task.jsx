import React, { useState } from "react";
import "./task.css";
import Newtask from "./newtask";
export default function task() {
  return (
    <div className="taskpage">
      <div className="task-cointainer">
        <button className="newtask">New Task</button>
        <div className="taskright-cointainer">
          <button className="task-overview">Task Overview</button>
          <svg
            className="filter-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
          </svg>
        </div>
      </div>
      <div className="bar-line"></div>
      <h2 className="task-title">Task Summery</h2>
      <div className="taskfullbox">
        <div className="task-box">
          <div className="count">0</div>
          <div className="box-title" id="not-started">
            Not Started
          </div>
          <div className="task-assigned">Tasks assigned to me: 0</div>
        </div>
        <div className="task-box">
          <div className="count">0</div>
          <div className="box-title" id="In-Progress">
            In Progress
          </div>
          <div className="task-assigned">Tasks assigned to me: 0</div>
        </div>
        <div className="task-box">
          <div className="count">0</div>
          <div className="box-title" id="testing">
            Not Started
          </div>
          <div className="task-assigned">Tasks assigned to me: 0</div>
        </div>
        <div className="task-box">
          <div className="count">0</div>
          <div className="box-title" id="Awaiting-Feedback">
            Awaiting Feedback
          </div>
          <div className="task-assigned">Tasks assigned to me: 0</div>
        </div>
        <div className="task-box">
          <div className="count">0</div>
          <div className="box-title" id="complete">
            Awaiting Feedback
          </div>
          <div className="task-assigned">Tasks assigned to me: 0</div>
        </div>
      </div>
      <div className="bar-line"></div>
      <div className="list-cointainer">
        <div className="search-list-cointainer">
          <input
            className="search-listitem"
            id="list-item"
            placeholder="Search by name..."
          ></input>
          <label htmlFor="list-item">
            <svg
              className="search-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </label>
        </div>
        <div className="num-of-task">
          <div className="title-cointainer">
            <div className="list-title" id="count-num">
              #
            </div>
            <div className="list-title" id="list-name">
              Name
            </div>
            <div className="list-title">Status</div>
            <div className="list-title">Start Date</div>
            <div className="list-title">Due Date</div>
            <div className="list-title">Assigned to</div>
            <div className="list-title">Priority</div>
          </div>
          <div className="light-barline"></div>
          <div className="listcontent-cointainer">
            <nav>
              <div className="list-content" id="count-num">
                1
              </div>
            </nav>
            <nav>
              <div className="list-content" id="list-name">
                ERC
              </div>
              <nav className="edit-cointainer">
                <div className="start-time">Start time</div>
                <div className="edit">Edit</div>
                <div className="delete">Delete</div>
              </nav>
            </nav>
            <nav>
              <div className="list-content">In Progress</div>
              <nav className="edit-cointainer">
                <div className="edit">Edit</div>
              </nav>
            </nav>
            <nav>
              <div className="list-content">00/00/00</div>
            </nav>
            <nav>
              <div className="list-content">00/00/00</div>
            </nav>
            <nav>
              <div className="list-content">Kamal</div>
            </nav>
            <nav>
              <div className="list-content">High</div>
              <nav className="edit-cointainer">
                <div className="edit">Edit</div>
              </nav>
            </nav>
          </div>
          <div className="light-barline"></div>
          <div className="listcontent-cointainer">
            <nav>
              <div className="list-content" id="count-num">
                1
              </div>
            </nav>
            <nav>
              <div className="list-content" id="list-name">
                ERC
              </div>
              <nav className="edit-cointainer">
                <div className="start-time">Start time</div>
                <div className="edit">Edit</div>
                <div className="delete">Delete</div>
              </nav>
            </nav>
            <nav>
              <div className="list-content">In Progress</div>
              <nav className="edit-cointainer">
                <div className="edit">Edit</div>
              </nav>
            </nav>
            <nav>
              <div className="list-content">00/00/00</div>
            </nav>
            <nav>
              <div className="list-content">00/00/00</div>
            </nav>
            <nav>
              <div className="list-content">Kamal</div>
            </nav>
            <nav>
              <div className="list-content">High</div>
              <nav className="edit-cointainer">
                <div className="edit">Edit</div>
              </nav>
            </nav>
          </div>
          <div className="light-barline"></div>
        </div>
      </div>
      <div className="entries">Showing 0 to 0 of 0 entries</div>
    </div>
  );
}
