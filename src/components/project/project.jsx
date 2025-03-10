import React, { useState, useEffect } from "react";
import "./project.css";

export default function project() {
  const [apibug, setapibug] = useState({});
  const [bugdata, setbugdata] = useState([]);

  const bugFromAPI = {
    bugdata: [
      {
        Title: "Error Title",
        priority: "High",
        bugimage: "./src/assets/bug-img/bug.jpg",
        content:
          "Lorem ipsum dolor sit amet consue tempora m incidunt nam dolore amet atque rem impedit molestias laborum quisquam, iusto odi nemo et debitis quo eum necessitatibus, nostrum cum nesciunt possimus asperiores? Autem dolorum dolor voluptatum facere repudiandae aperiam voluptas molestias veniam vel, kamal solu laboriosam quos repellendus facilis ad modi quae dicta consequuntur molestiae officia discitationem quidem? Quo",
      },
      {
        Title: "Error Title",
        priority: "Medium",
        bugimage: "./src/assets/bug-img/bug.jpg",
        content:
          " vitae accusamus dolorum exercitationem quidem? Quo Lorem ipsum dolor sit amet consectetur adipisicing elitnihil fugiat nulla. Quam perspiciatis fugiat omnis sapientvoluptate eius voluptates, eveniet quia corrupti aut mollitiadoloremque quas recusandae ipsam impedit neque tempora quo quos,delectus ex! Qui assumenda fugit nobis vitae quidem incidunt nam dolore amet atque rem impedit molestias laborum quisquam, iusto odi nemo et debitis quo eum necessitatibus, nostrum cum nesciunt possimus asperiores? Autem dolorum dolor voluptatum facere repudiandae aperiam voluptas molestias veniam vel, kamal solu laboriosam quos repellendus facilis ad modi quae dicta consequuntur molestiae officia distinctio in fuga ut nostrum. Labore",
      },
      {
        Title: "Error Title",
        priority: "Low",
        bugimage: "./src/assets/bug-img/bug.jpg",
        content:
          " vitae accusamus dolorum exercitationem quidem? Quo Lorem ipsum dolor sit amet consectetur adipisicing elitnihil fugiat nulla. Quam perspiciatis fugiat omnis sapientvoluptate eius voluptates, eveniet quia corrupti aut mollitiadoloremque quas recusandae ipsam impedit neque tempora quo quos,delectus ex! Qui assumenda fugit nobis vitae quidem incidunt nam dolore amet atque rem impedit moin fuga ut nostrum. Labore",
      },
      {
        Title: "Error Title",
        priority: "High",
        bugimage: "./src/assets/bug-img/bug.jpg",
        content:
          " vitae accusamus  Qutae quidem inciduntolorum dolor voluptatum facere repudiandae aperiam voluptas molestias veniam vel, kamal solu laboriosam quos repellendus facilis ad modi quae dicta consequuntur molestiae officia distinctio in fuga ut nostrum. Labore",
      },
      {
        Title:
          "Consectetur adipisicing elitnihil fugiat nulla. Quam perspiciatis fugiat omnis sapientvoluptate eius voluptates, eveniet quia corrupti aut mollitiadoloremque quas recusandae ipsam impedit neque tempora quo quos,delectus ex! Qui assumenda fugit nobis vitae quidem incidunt nam dolore amet atque rem impedit molestias laborum quisquam, iusto odi nemo et debitis quo eum necessitatibus, nostrum cum nesciunt possimus asperiores? Autem dolorum dolor voluptatum facere repudiandae aperiam voluptas molestias veniam vel, kamal solu laboriosam quos repellendus facilis ad modi quae dicta consequuntur molestiae officia distinctio in fuga ut nostrum. Labore vitae accusamus dolorum exercitationem quidem? Qu",
        priority: "High",
        bugimage: "./src/assets/bug-img/bug.jpg",
        content:
          " vitae accusamus dolorum exercitationem quidem? Quo Lorem ipsum dolor sit amet consectetur adipisicing elitnihil fugiat nulla. Quam perspiciatis fugiat omnis sapientvoluptate eius voluptates, eveniet quia corrupti aut mollitiadoloremque quas recusandae ipsam impedit neque tempora quo quos,delectus ex! Qui assumenda fugit nobis vitae quidem incidunt nam dolore amet atque rem impedit molestias laborum quisquam, iusto odi nemo et debitis quo eum necessitatibus, nostrum cum nesciunt possimus asperiores? Autem dolorum dolor voluptatum facere repudiandae aperiam voluptas molestias veniam vel, kamal solu laboriosam quos repellendus facilis ad modi quae dicta consequuntur molestiae officia distinctio in fuga ut nostrum. Labore",
      },
      {
        Title:
          "Consectetur adipisicing elitnihil fugiat nulla. Quam perspiciatis fugiat omnis sapientvoluptate eius voluptates, eveniet quia corrupti aut mollitiadoloremque quas recusandae ipsam impedit neque tempora quo quos,delectus ex! Qui assumenda fugit nobis vitae quidem incidunt nam dolore amet atque rem impedit molestias laborum quisquam, iusto odi nemo et debitis quo eum necessitatibus, nostrum cum nesciunt possimus asperiores? Autem dolorum dolor voluptatum facere repudiandae aperiam voluptas molestias veniam vel, kamal solu laboriosam quos repellendus facilis ad modi quae dicta consequuntur molestiae officia distinctio in fuga ut nostrum. Labore vitae accusamus dolorum exercitationem quidem? Qu",
        priority: "High",
        bugimage: "./src/assets/bug-img/bug.jpg",
        content:
          " vitae accusamus dolorum exercitationem quidem? Quo Lorem ipsum dolor sit amet consectetur adipisicing elitnihil fugiat nulla. Quam perspiciatis fugiat omnis sapientvoluptate eius voluptates, eveniet quia corrupti aut mollitiadoloremque quas recusandae ipsam impedit neque tempora quo quos,delectus ex! Qui assumenda fugit nobis vitae quidem incidunt nam dolore amet atque rem impedit molestias laborum quisquam, iusto odi nemo et debitis quo eum necessitatibus, nostrum cum nesciunt possimus asperiores? Autem dolorum dolor voluptatum facere repudiandae aperiam voluptas molestias veniam vel, kamal solu laboriosam quos repellendus facilis ad modi quae dicta consequuntur molestiae officia distinctio in fuga ut nostrum. Labore",
      },
      {
        Title:
          "Consectetur adipisicing elitnihil fugiat nulla. Quam perspiciatis fugiat omnis sapientvoluptate eius voluptates, eveniet quia corrupti aut mollitiadoloremque quas recusandae ipsam impedit neque tempora quo quos,delectus ex! Qui assumenda fugit nobis vitae quidem incidunt nam dolore amet atque rem impedit molestias laborum quisquam, iusto odi nemo et debitis quo eum necessitatibus, nostrum cum nesciunt possimus asperiores? Autem dolorum dolor voluptatum facere repudiandae aperiam voluptas molestias veniam vel, kamal solu laboriosam quos repellendus facilis ad modi quae dicta consequuntur molestiae officia distinctio in fuga ut nostrum. Labore vitae accusamus dolorum exercitationem quidem? Qu",
        priority: "High",
        bugimage: "./src/assets/bug-img/bug.jpg",
        content:
          " vitae accusamus dolorum exercitationem quidem? Quo Lorem ipsum dolor sit amet consectetur adipisicing elitnihil fugiat nulla. Quam perspiciatis fugiat omnis sapientvoluptate eius voluptates, eveniet quia corrupti aut mollitiadoloremque quas recusandae ipsam impedit neque tempora quo quos,delectus ex! Qui assumenda fugit nobis vitae quidem incidunt nam dolore amet atque rem impedit molestias laborum quisquam, iusto odi nemo et debitis quo eum necessitatibus, nostrum cum nesciunt possimus asperiores? Autem dolorum dolor voluptatum facere repudiandae aperiam voluptas molestias veniam vel, kamal solu laboriosam quos repellendus facilis ad modi quae dicta consequuntur molestiae officia distinctio in fuga ut nostrum. Labore",
      },
      {
        Title:
          "Consectetur adipisicing elitnihil fugiat nulla. Quam perspiciatis fugiat omnis sapientvoluptate eius voluptates, eveniet quia corrupti aut mollitiadoloremque quas recusandae ipsam impedit neque tempora quo quos,delectus ex! Qui assumenda fugit nobis vitae quidem incidunt nam dolore amet atque rem impedit molestias laborum quisquam, iusto odi nemo et debitis quo eum necessitatibus, nostrum cum nesciunt possimus asperiores? Autem dolorum dolor voluptatum facere repudiandae aperiam voluptas molestias veniam vel, kamal solu laboriosam quos repellendus facilis ad modi quae dicta consequuntur molestiae officia distinctio in fuga ut nostrum. Labore vitae accusamus dolorum exercitationem quidem? Qu",
        priority: "High",
        bugimage: "./src/assets/bug-img/bug.jpg",
        content:
          " vitae accusamus dolorum exercitationem quidem? Quo Lorem ipsum dolor sit amet consectetur adipisicing elitnihil fugiat nulla. Quam perspiciatis fugiat omnis sapientvoluptate eius voluptates, eveniet quia corrupti aut mollitiadoloremque quas recusandae ipsam impedit neque tempora quo quos,delectus ex! Qui assumenda fugit nobis vitae quidem incidunt nam dolore amet atque rem impedit molestias laborum quisquam, iusto odi nemo et debitis quo eum necessitatibus, nostrum cum nesciunt possimus asperiores? Autem dolorum dolor voluptatum facere repudiandae aperiam voluptas molestias veniam vel, kamal solu laboriosam quos repellendus facilis ad modi quae dicta consequuntur molestiae officia distinctio in fuga ut nostrum. Labore",
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
        {bugdata.map((ele, ind) => (
          <div className="bug-box">
            <div className="bug-box-head">
              <nav>
                <p>{ele.Title}</p>
                <h3>{ele.priority}</h3>
              </nav>
              <img src={ele.bugimage} />
            </div>
            <div className="bug-discription">{ele.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
