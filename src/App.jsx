import { createContext, useState } from "react";
import UserDashboard from "./pages/userDashboard/userDashboard";
import Signin from "./pages/signin/signin";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const userContext = createContext();

export default function App() {
  const [userInformation, setUserInformation] = useState({});

  return (
    <BrowserRouter>
      <userContext.Provider value={{ userInformation, setUserInformation }}>
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/" element={<UserDashboard />} />
        </Routes>
      </userContext.Provider>
    </BrowserRouter>
  );
}
