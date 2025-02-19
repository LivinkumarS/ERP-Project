import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/dashboard";
import Body from "../../components/body/body";
import { useNavigate, useSearchParams } from "react-router-dom";
import { userContext } from "../../App";

export default function userDashboard() {
  const { userInformation } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(userInformation).length == 0) {
      navigate("/sign-in");
    }
  }, [userInformation]);

  const [searchParam, setSearchParam] = useSearchParams();

  const [expanded, setexpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState("task");

  useEffect(() => {
    setCurrentPage(searchParam.get("tab") || "task");
  }, [searchParam]);

  return (
    <div className="ERC">
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
