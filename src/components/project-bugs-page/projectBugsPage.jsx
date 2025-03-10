import React, { useEffect, useState } from "react";
import "./projectBugsPage.css";
import { Link } from "react-router-dom";

export default function projectBugsPage(projectId) {
  const [apibug, setapibug] = useState({});
  const [bugdata, setbugdata] = useState([]);

  const bugFromAPI = {
    bugdata: [
      {
        id: 0,
        Title: "Error Title",
        priority: "High",
        bugimage:
          "https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp",
        content: "Lorem ipsum dolor sit amet consue tempora...",
      },
      {
        id: 1,
        Title: "Error Title",
        priority: "Medium",
        bugimage:
          "https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp",
        content:
          "Vitae accusamus dolorum exercitationem quidem? Quo Lorem ipsum...",
      },
      {
        id: 2,
        Title: "Error Title",
        priority: "Low",
        bugimage:
          "https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp",
        content:
          "Vitae accusamus dolorum exercitationem quidem? Quo Lorem ipsum...",
      },
      {
        id: 3,
        Title: "Error Title",
        priority: "High",
        bugimage:
          "https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp",
        content:
          "Vitae accusamus Qutae quidem inciduntolorum dolor voluptatum...",
      },
      {
        id: 4,
        Title: "Stack Overflow Error",
        priority: "High",
        bugimage:
          "https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp",
        content:
          "Vitae accusamus dolorum exercitationem quidem? Quo Lorem ipsum...",
      },
      {
        id: 5,
        Title: "Syntax Error",
        priority: "High",
        bugimage:
          "https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp",
        content:
          "Vitae accusamus dolorum exercitationem quidem? Quo Lorem ipsum...",
      },
      {
        id: 6,
        Title: "Unhandled Exception",
        priority: "High",
        bugimage:
          "https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp",
        content:
          "Vitae accusamus dolorum exercitationem quidem? Quo Lorem ipsum...",
      },
      {
        id: 7,
        Title: "Null Pointer Exception",
        priority: "High",
        bugimage:
          "https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp",
        content:
          "Vitae accusamus dolorum exercitationem quidem? Quo Lorem ipsum...",
      },
      {
        id: 8,
        Title: "Memory Leak Issue",
        priority: "High",
        bugimage:
          "https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp",
        content:
          "Vitae accusamus dolorum exercitationem quidem? Quo Lorem ipsum...",
      },
    ],
  };

  useEffect(() => {
    setapibug(bugFromAPI);
  }, []);

  useEffect(() => {
    if (Object.keys(apibug).length > 0) {
      setbugdata(apibug.bugdata || []);
    }
  }, [apibug]);

  return (
    <div className="project">
      <h2>Bug Tracker</h2>
      <div className="bug-cointainer">
        {bugdata.length > 0 ? (
          bugdata.map((ele, ind) => (
            <Link to={`/bug-detalis/${ele.id}`} className="bug-box" key={ind}>
              <div className="bug-box-head">
                <nav>
                  <p>{ele.Title}</p>
                  <h3>{ele.priority}</h3>
                </nav>
                <img src={ele.bugimage} />
              </div>
              <div className="bug-discription">{ele.content}</div>
            </Link>
          ))
        ) : (
          <p>No Bugs</p>
        )}
      </div>
    </div>
  );
}
