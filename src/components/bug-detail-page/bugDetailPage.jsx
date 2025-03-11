import React from "react";
import "./bugDetailPage.css";
import { useParams } from "react-router-dom";

export default function bugDetailPage() {
  const { errorId } = useParams();

  const apiResponse = {};

  return (
    <div className="bugDetailPage">
      <h2>Project Title</h2>
      <div className="bugdetail-cointainer">
        <div className="bugDetail-left">
          <h3>Error Title</h3>
          <nav className="error-img-cointainer">
            <img
              className="error-img"
              src="https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp"
            />
            <img
              className="error-img"
              src="https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp"
            />
            <img
              className="error-img"
              src="https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp"
            />
            <img
              className="error-img"
              src="https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp"
            />
            <img
              className="error-img"
              src="https://studio.uxpincdn.com/studio/wp-content/uploads/2023/03/reactjs-websites-1024x512.png.webp"
            />
          </nav>
          <div className="error-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            reiciendis numquam similique dolores dignissimos, voluptatum nihil
            rerum cum accusamus maxime id commodi molestiae quos voluptate
            delectus quis magnam voluptatem esse velit natus eaque, eos
            laboriosam maiores unde? Id veniam cupiditate ad molestiae,
            voluptatem et in ut repellat a sit fuga alias perferendis tempora
            dolorum eveniet aliquam praesentium saepe blanditiis sequi esse rem
            quos incidunt illum iste. Minus incidunt illo aliquid quidem
            nesciunt distinctio quod enim doloremque, rem voluptatum omnis iure
            cum optio mollitia accusamus cumque voluptate. Praesentium quidem
            voluptates veniam odio molestias quibusdam consequatur illo, quod a
            fugiat qui omnis! Praesentdunt illum iste. Minus incidunt illo
            aliquid quidem nesciunt distinctio quod enim doloremque, rem
            voluptatum omnis iure cum optio mollitia accusamus cumque voluptate.
            Praesentium quidem voluptates veniam odio molestias quibusdam
            consequatur illo, quod a fugiat qui omnis! Praesentium cupiditate,
            beatae itaque tempore fugiat vero numquam, neque deserunt
            voluptatibus rem quod error reprehenderit iste aliquid,
            exercitationem totam! Sed odio, animi harum cupiditate aliquam
            asperiores. Perspiciatis ducimus praesentium, officiis, nihil
            veritatis culpa beatae esse id laboriosam sapiente in! Soluta,
            ipsum. Placeat ducimus veniam sequi tempore quisquam, magni deleniti
            saepe.
          </div>
        </div>
        <div className="bugDetail-right">
          <div className="error-state">
            <label>Select Status: </label>
            <select name="bug-status" id="bug-status" required>
              <option value="">Select Status</option>
              <option value="in-progress">In-Progress</option>
              <option value="not-a-bug">Not a Bug</option>
              <option value="qa">QA</option>
            </select>
          </div>
          <nav className="chat-cointainer">
            <h4>Chat with teating kamal </h4>
            <div className="chat-box">
              <div className="input-chat-cointainer">
                <svg
                  className="sticker-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l224 0 0-112c0-26.5 21.5-48 48-48l112 0 0-224c0-35.3-28.7-64-64-64L64 32zM448 352l-45.3 0L336 352c-8.8 0-16 7.2-16 16l0 66.7 0 45.3 32-32 64-64 32-32z" />
                </svg>

                <input className="chat-input" type="text" required />

                <svg
                  className="send-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                </svg>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
