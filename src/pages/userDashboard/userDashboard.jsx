import React, { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/dashboard";
import Body from "../../components/body/body";
import { Navigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./userDashboard.css";
import Sidebar from "../../components/sidebar/sidebar";

export default function userDashboard() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const [searchParam, setSearchParam] = useSearchParams();

  const [expanded, setexpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState("task");
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setCurrentPage(searchParam.get("tab") || "task");
  }, [searchParam]);

  return isAuthenticated ? (
    <div className="userDashboard">
      <Dashboard
        expanded={expanded}
        currentPage={currentPage}
        setCurrentPage={setSearchParam}
      />

      {showSidebar && (
        <Sidebar
          setShowSidebar={setShowSidebar}
          currentPage={currentPage}
          setCurrentPage={setSearchParam}
        />
      )}

      <Body
        setCurrentPage={setCurrentPage}
        user={user}
        expanded={expanded}
        setexpanded={setexpanded}
        currentPage={currentPage}
        setShowSidebar={setShowSidebar}
      />
    </div>
  ) : (
    <Navigate to={"/sign-in"} />
  );
}
