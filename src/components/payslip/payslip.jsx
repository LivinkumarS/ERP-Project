import React, { useState } from "react";
import "./payslip.css";
export default function payslip() {
  const [fullwidth, setfullwidth] = useState(false);
  const [zoom, setzoom] = useState(false);
  return (
    <div className={`payslip ${fullwidth ? "width" : ""}`}>
      <h2>Payslip Generator</h2>
      <div className="select-Y-M-cointainer">
        <div>Select Year & Month :</div>
        <nav className="search-Y-M">
          <input
            className="Y-M"
            type="month"
            name="year"
            min="1900-01"
            max="2100-12"
            id="list-item"
          />
          <label htmlFor="list-item">
            <svg
              className="search-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </label>
        </nav>
      </div>
    </div>
  );
}
