import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/dashboard";
import Body from "../../components/body/body";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./userDashboard.css";

export default function userDashboard() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
  }, [isAuthenticated]);

  const [searchParam, setSearchParam] = useSearchParams();

  const [expanded, setexpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState("task");

  useEffect(() => {
    setCurrentPage(searchParam.get("tab") || "task");
  }, [searchParam]);

  return (
    <div className="userDashboard">
      <Dashboard
        expanded={expanded}
        currentPage={currentPage}
        setCurrentPage={setSearchParam}
      />
      <Body
        expanded={expanded}
        setexpanded={setexpanded}
        currentPage={currentPage}
      />
    </div>
  );
}
