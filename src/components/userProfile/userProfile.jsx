import React, { useEffect, useState } from "react";
import "./userProfile.css";
import { useSelector } from "react-redux";

export default function userProfile() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  

  return <div className="userProfile">
    
  </div>;
}
