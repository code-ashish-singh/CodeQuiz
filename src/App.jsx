import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import { logoutUser } from "./utils/authStorage";

const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes

const App = () => {
  // Auto sign the user out after a period of inactivity, same behaviour as
  // before but routed through the shared auth helper instead of touching
  // localStorage directly.
  useEffect(() => {
    const timer = setTimeout(() => {
      logoutUser();
    }, SESSION_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testpage" element={<TestPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={2800} theme="colored" />
    </>
  );
};

export default App;
