import React, { useEffect, useRef, useState } from "react";
import "./userProfile.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function userProfile() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [userDetails, setUserDetails] = useState(user);

  const inputRef = useRef(0);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setUserDetails((prev) => {
        return {
          ...prev,
          profilePic: preview,
        };
      });

      toast.success("Profile Picture Uploaded Successflly");
    }
  };

  function handleDetailChange(e) {
    setUserDetails((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(userDetails);
  }

  return (
    <div className="userProfile">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        hidden
      />
      <img
        className="profilePicture"
        src={userDetails.profilePic}
        alt=""
        onClick={() => {
          inputRef.current.click();
        }}
      />

      <h2>{userDetails.name}</h2>
      <h2>{userDetails.email}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="jobRole"
          value={userDetails.jobRole}
          onChange={handleDetailChange}
        />
        <input
          type="text"
          id="mobile"
          value={userDetails.mobile}
          onChange={handleDetailChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
