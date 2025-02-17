import { useState } from "react";
import Dashboard from "./dashboard";
import Body from "./body";
import "./App.css";

function App() {
  const [expanded, setexpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState("task");

 
  return (
    <div className="ERC">
      <Dashboard expanded={expanded} setCurrentPage={setCurrentPage}/>
      <Body expanded={expanded} setexpanded={setexpanded} currentPage={currentPage}  />
    </div>
  );
}

export default App;
