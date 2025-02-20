import { createContext, useState } from "react";
import UserDashboard from "./pages/userDashboard/userDashboard";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signUp/signup";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/" element={<UserDashboard />} />
        </Routes>
    </BrowserRouter>
  );
}
