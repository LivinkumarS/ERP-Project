import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./attendance.css";

export default function Attendance() {
  const [date, setDate] = useState(new Date());
  const [leaves, setLeaves] = useState({});
  const [attendance, setAttendance] = useState({});
  const [totalCheckInTime, setTotalCheckInTime] = useState(0);
  const [checkInOutTimes, setCheckInOutTimes] = useState([]);
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  // API Data

  const [apiData, setApiData] = useState({
    data: {
      "2025-02-01": [
        "Sat Feb 01 2025 09:00:00 GMT+0530 (India Standard Time)",
        "Sat Feb 01 2025 18:00:00 GMT+0530 (India Standard Time)",
      ],
      "2025-02-02": [
        "Sun Feb 02 2025 09:15:00 GMT+0530 (India Standard Time)",
        "Sun Feb 02 2025 17:45:00 GMT+0530 (India Standard Time)",
      ],
      "2025-02-03": [
        "Mon Feb 03 2025 08:55:00 GMT+0530 (India Standard Time)",
        "Mon Feb 03 2025 17:50:00 GMT+0530 (India Standard Time)",
      ],
      "2025-02-14": [
        "Sat Feb 15 2025 17:54:16 GMT+0530 (India Standard Time)",
        "Sat Feb 15 2025 17:54:18 GMT+0530 (India Standard Time)",
      ],
      "2025-02-15": [
        "Sat Feb 15 2025 09:05:00 GMT+0530 (India Standard Time)",
        "Sat Feb 15 2025 18:10:00 GMT+0530 (India Standard Time)",
      ],
      "2025-02-16": null,
      "2025-02-17": null,
      "2025-02-18": null,
      "2025-02-19": null,
      "2025-02-20": null,
      "2025-02-21": null,
      "2025-02-22": null,
      "2025-02-23": null,
      "2025-02-24": null,
      "2025-02-25": null,
      "2025-02-26": null,
      "2025-02-27": null,
      "2025-02-28": null,
    },
  });

  // Total Time Calc

  useEffect(() => {
    if (!checkInOutTimes) {
      setTotalCheckInTime(0);
      return;
    }

    let totalActiveTime = 0;

    // Convert timestamp strings to Date objects
    let times = checkInOutTimes.map((ts) => new Date(ts));

    // Calculate time differences for every check-in/check-out pair
    for (let i = 0; i < times.length - 1; i += 2) {
      totalActiveTime += (times[i + 1] - times[i]) / (1000 * 60 * 60);
    }

    setTotalCheckInTime(totalActiveTime);

    // Mark user as present if check-in time is >= 8 hours
    if (totalActiveTime >= 0.0001) {

      setAttendance((prev) => ({
        ...prev,
        [date]: "present",
      }));
    }
  }, [checkInOutTimes]);

  // Set Date
  const handleSetDate = (dateValue) => {
    dateValue.setMinutes(
      dateValue.getMinutes() - dateValue.getTimezoneOffset()
    );
    setDate(dateValue);
  };

  useEffect(() => {
    setCheckInOutTimes(apiData.data[date.toISOString().split("T")[0]]);
  }, [date]);

  // Government holidays (Example dates)
  const governmentHolidays = [
    "2024-01-01", // New Year
    "2024-01-15", // Pongal
    "2024-10-31", // Deepavali
    "2024-12-25", // Christmas
    "2025-02-12",
  ];

  // Reset daily data at midnight
  useEffect(() => {
    const resetDailyData = setInterval(() => {
      setCheckInOutTimes([]);
      setTotalCheckInTime(0);
      setIsCheckedIn(false);
    }, 86400000);

    return () => clearInterval(resetDailyData);
  }, []);

  useEffect(() => {
    const now = new Date();
    const currentDateString = now.toISOString().split("T")[0];
    setCheckInOutTimes(apiData.data[currentDateString]);
  }, []);

  // Function to determine the class for each calendar tile
  const getTileClass = ({ date }) => {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    const dateString = date.toISOString().split("T")[0];

    let className = "bold-text"; // Default: Bold font

    // Weekends in red font
    if (date.getDay() === 0 || date.getDay() === 6) {
      className += " weekend";
    }

    // Government holidays in orange font
    if (governmentHolidays.includes(dateString)) {
      className += " govt-holiday";
    }

    return className;
  };

  // Show Leave/Attendance Status Strip on Top Left
  const tileContent = ({ date }) => {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    const dateString = date.toISOString().split("T")[0];

    return (
      <div className="date-container">
        {/* Leave Status */}
        {leaves[dateString] === "pending" && (
          <div className="leave-pending-strip"></div>
        )}
        {leaves[dateString] === "approved" && (
          <div className="leave-approved-strip"></div>
        )}

        {/* Attendance Status */}
        {attendance[dateString] === "present" && (
          <div className="attendance-present-strip"></div>
        )}
      </div>
    );
  };

  // Handle Check-in and Check-out
  const handleCheckInOut = () => {
    const now = new Date();
    const currentDateString = now.toISOString().split("T")[0];


    if (date.toISOString().split("T")[0] !== currentDateString) {
      alert("You can only check-in & check-out on today's date.");
      return;
    }

    setCheckInOutTimes((prevTimes) => {
      const updatedTimes = [...prevTimes, now.toString()];
      setApiData((prev) => {
        let temp = prev;
        temp.data[currentDateString] = updatedTimes;
        return temp;
      });

      let totalActiveTime = 0;

      // Convert timestamp strings to Date objects
      let times = updatedTimes.map((ts) => new Date(ts));

      // Calculate time differences for every check-in/check-out pair
      for (let i = 0; i < times.length - 1; i += 2) {
        totalActiveTime += (times[i + 1] - times[i]) / (1000 * 60 * 60);
      }

      setTotalCheckInTime(totalActiveTime);

      // Mark user as present if check-in time is >= 8 hours
      if (totalActiveTime >= 0.0001) {

        setAttendance((prev) => ({
          ...prev,
          [currentDateString]: "present",
        }));
      }

      setIsCheckedIn(!isCheckedIn);
      return updatedTimes;
    });
  };

  return (
    <div className="attendance-container">
      <h2 className="title">Attendance Calendar</h2>

      <div className="calendar-wrapper">
        <Calendar
          onChange={handleSetDate}
          value={date}
          tileClassName={getTileClass}
          tileContent={tileContent}
        />
      </div>

      <div className="controls">
        <p>Selected Date: {date.toDateString()}</p>
        {/* <button onClick={applyLeave}>Apply Leave</button> */}
        <button onClick={handleCheckInOut}>
          {isCheckedIn ? "Check-Out" : "Check-In"}
        </button>
      </div>

      {/* Display Check-in & Check-out Times */}
      <div className="checkin-times">
        <p className="today-in-out">Today's Check-in & Check-out</p>
        {checkInOutTimes ? (
          checkInOutTimes.map((time, index) => (
            <p className="display-time" key={index}>
              {index % 2 === 0 ? "Check-in" : "Check-out"}:{" "}
              {new Date(time).toLocaleTimeString()}
            </p>
          ))
        ) : (
          <p>No Check In</p>
        )}
        <p>
          <strong className="total-time">
            Total Check-in Time: {totalCheckInTime.toFixed(2)} hrs
          </strong>
        </p>
      </div>
    </div>
  );
}
